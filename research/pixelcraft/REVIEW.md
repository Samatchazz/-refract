# Engineering review of the Pixel Craft teardown brief

Four independent reviewers went over `BRIEF.md` v1 and `scrape.mjs` v1 with different lenses:
capture/instrumentation, front-end rebuild, autonomous-agent instruction design, and risk/continuity.
This file records what they found, what was done about it, and what is left for you to decide.

**Outcome: 11 real bugs found in the capture script, 5 of which would have produced confident,
plausible-looking, wrong data.** All 11 are fixed in `scrape.mjs` v2. The brief was rewritten in
English at roughly 3× the detail, with the fixes and the missing contracts folded in.

---

## 1. The five findings that mattered most

These are the ones that would have wasted the whole run.

**1. The capture would have looked successful while measuring nothing.**
`docH` was read once, ten seconds after load, and all 23 scroll positions were computed from it.
Two ways that goes wrong, both silent: a preloader holding `overflow:hidden` past the fixed wait
makes `docH ≈ viewport`, so every step clamps to 0 and all 23 screenshots are identical; or
lazy-loading grows the document 20–60 % during the pass, so the last step lands mid-page and the
bottom third of the site is never seen. Either way the JSON is well-formed and the analysis reports
"no scroll effects found."
*Fixed:* document height is re-read at every step, actual scroll position is recorded per step
(`scroll_visited_*.json`), and the loop aborts with a warning if position stops advancing.

**2. Smooth-scroll libraries would have fabricated parallax on every element.**
Under GSAP ScrollSmoother or Locomotive, `window.pageYOffset` jumps to the target instantly while the
content wrapper eases toward it over ~1.5 s. Sampling after a flat 950 ms wait compares a
finished scroll position against a still-moving element — so the computed slope is contaminated for
*everything*, and the output is a rich, detailed, entirely fictional parallax inventory.
*Fixed:* after every scroll the script waits for 40 tracked elements' positions to be byte-identical
across three consecutive animation frames before sampling. It also verifies the scroll actually took
and falls back to real wheel events when it didn't.

**3. Horizontal-scroll sections would have been misfiled as pins.**
Only vertical position was recorded. A pinned section with a track sliding sideways — the single most
common agency-theme mechanism, and explicitly listed in the brief's own E10–E19 band — shows a
vertical slope of ~0 and lands in the "pinned" bucket with its horizontal travel invisible.
*Fixed:* `rect.left` is now sampled and an `xSlope` computed; the classifier distinguishes
`pinned` from `horizontal-scroll`.

**4. Everything below the fourth section was untracked.**
Tracking candidates were taken as the first 260 matches in document order. On a real WordPress agency
demo that selector list exceeds 260 matches within the first three or four sections. The lower half of
the page would simply have had no measurements — and that reads as "no effects down there", not as
"we didn't look".
*Fixed:* candidates are sorted by document position and the budget is spread evenly, with at least
six tracked elements guaranteed inside every section.

**5. Section screenshots were cut off at the viewport.**
`page.screenshot()` at 1440×900 was used for images the brief's Table A links to as the visual record
of each section. Any section taller than 900 px — i.e. most of them — was truncated. Worse, the scroll
target came from positions measured before lazy-load reflowed the page.
*Fixed:* sections are stamped `data-sec="n"` during the probe and captured with
`locator.screenshot()`, which resolves position at capture time and captures the full element box.

---

## 2. Everything else fixed in `scrape.mjs` v2

| # | Problem | Fix |
|---|---|---|
| 6 | Transfer sizes read from `content-length`, absent on nearly all compressed responses — the "total page weight" number the brief uses as a decision input would have been 5× low | CDP `Network.loadingFinished.encodedDataLength`, broken down by resource type, with an explicit count of unmeasurable responses |
| 7 | Preloader screenshot filenames were wrong by up to 1000 ms (cumulative waits, absolute labels) | Filenames now carry measured elapsed ms from navigation start |
| 8 | Web fonts not awaited before reading the type scale — the family column could report fallback fonts | `document.fonts.ready` before probing |
| 9 | `prefers-reduced-motion` and `prefers-color-scheme` left at browser defaults — motion-gated JS may disable itself, producing an empty effect inventory that looks like a finding | Both pinned explicitly on the browser context and recorded |
| 10 | Slope classification bands overlapped: any slope in (−0.15, −0.02) was emitted as *both* pinned and parallax; positive slopes (reverse parallax) were discarded entirely | Exclusive bands with a legend written into the output file |
| 11 | The hover pass measured the logo and menu links and never reached a single card — the entire E40–E49 band would have come back empty | Hover now runs per section after scrolling it into view, samples at two mouse positions to detect magnetic/tilt, and records the custom-cursor element state |
| 12 | The hamburger-menu detector matched `.main-menu` and `.menu-item` and would click a nav link, navigating away — after which the network log and console errors were flushed for the wrong page | Restricted to non-anchor toggles under 90 px inside header/nav, with URL-change detection and an overlay-visibility check instead of trusting the click |
| 13 | Sections positioned `absolute`/`fixed` were deleted from the section list, leaving holes in the numbering that map to bands clearly visible in the screenshots | Kept and flagged `overlay: true`; only page chrome (fixed and under 80 % viewport height) is dropped |
| 14 | Section order came from DOM child order, not visual order | Sorted by document position; stable `sid` (`S01`…) assigned in the probe itself |
| 15 | Gradient-painted sections contributed nothing to the palette (`backgroundColor` is transparent when a gradient is used) | Gradients tallied separately, colour stops parsed out, full declarations kept for any element covering >50 % of the viewport |
| 16 | No `rem` source: root font-size was never recorded, so the brief's rem column could only be produced by assuming 16 px | `rootFontSizePx` captured; `rem` computed per type row |
| 17 | JS bundles never downloaded, although they contain the actual constants (scrub values, easing, stagger, lerp) the brief demands as measured numbers | `out/js/` mirrors `out/css/`, plus `analysis_js.json` grepping for animation signatures |
| 18 | Multi-demo capture would silently overwrite the primary capture — same output dir, same labels | `--out` and `--label` flags |
| 19 | No capture metadata at all: no date, no versions, no record of what failed or was skipped | `_capture_meta.json` with timestamps, versions, flags, per-capture stats, warnings, and an explicit `notCaptured` list |
| 20 | The full-page screenshot shows below-fold reveals un-triggered, yet was to be used as ground truth for counting sections | Added a second forced-reveal pass: walk the page to fire every observer, then neutralise all animation and capture — a genuine structural map |

### Additions worth calling out

**Runtime library introspection** is the highest-value thing added. If the theme uses GSAP
ScrollTrigger, `ScrollTrigger.getAll()` reports every pin's start and end in document pixels, plus
scrub values and trigger offsets — exact numbers, zero sampling error. Twenty-six scroll samples on a
14 000 px page carry ±550 px of error and drop any pin shorter than ~1100 px entirely. The same probe
reads GSAP tween durations and easing, ScrollSmoother config, any Lenis instance's lerp, and Swiper
parameters. `out/libprobe/*.json`.

Also added: SVG `feTurbulence` parameters (so the grain can be rebuilt rather than copied),
split-text and JS-marquee DOM signatures (both invisible to the previous checks), repeated-block
geometry (rows, columns, gaps, card box, image aspect — the data Table A's "content structure" column
actually needs), native `animation-timeline` / `view()` detection, and fluid `clamp()` font-size
declarations extracted verbatim.

---

## 3. Added to the brief, not the script

**Thai text will break naive split-text effects.** The brief's own E30–E39 band invites
"split by character or word". Every standard implementation — `str.split('')`, `[...str]`,
`Array.from(str)` — splits by code unit or code point, which detaches Thai combining marks
(U+0E31, U+0E34–0E3A, U+0E47–0E4E) from their base consonant; they render on dotted circles or stack
wrong. Wrapping units in `inline-block` additionally destroys line-breaking, because Thai has no word
spaces and the browser's line-breaker needs the run intact. The brief now forbids character splitting
outright, mandates line-level reveals, and specifies `Intl.Segmenter('th', {granularity:'grapheme'})`
if character-level is ever genuinely required.

**Vanilla smooth-scroll would silently kill every pin.** The obvious implementation — lerp plus
`translate3d` on a wrapper — creates a containing block that makes `position:sticky` and
`position:fixed` resolve against a scroller that never scrolls. Every pinned section stops pinning and
the fixed nav breaks, for reasons that look unrelated. The brief now bans transform-wrapper smooth
scroll and defaults to native scrolling.

**The `D` key would never have fired.** A Thai keyboard layout sends `e.key === 'ก'`. The debug badge
toggle is now specified as `e.code === 'KeyD'`.

**Thai copy runs 15–30 % longer than the English marketing copy being measured**, and needs more
leading for the stacked vowels and tone marks. The brief now forbids fixed `height` on sections
(`min-height` + padding only), requires pin lengths computed from `offsetHeight` at runtime, and sets
Thai line-height floors.

**Fabrication is now structurally hard.** Every number in the findings must carry an inline citation
(`⟨file#json.path⟩`) and a checker script must resolve all of them and report zero failures. "Spot
check five of them yourself" was self-grading and worthless.

**A phase gate with on-disk state.** Ordering hazards were real — the brief asked for FINDINGS before
the effect numbering was settled, guaranteeing a hand-renumbering pass and stale IDs. There is now a
mandatory P1–P7 sequence, a `_state.json` checkpoint after each phase so a crash doesn't lose the run,
a `RUN-LOG.md`, and a `BLOCKED.md` contract for "I cannot proceed" instead of improvising.

**A machine-readable manifest.** `skeleton/sections.json` is now the source of truth — sections,
tokens, effects, and their measured parameters — with every placeholder carrying `data-token` on the
real element. Prose in a README cannot be consumed by a content-pour script; you already have
`_planz-content.cjs` doing exactly that job against griflan-mirror, and this makes it reusable.

**Mobile.** The brief was silent on viewport everywhere. The 390 px pass is now deep (not a shallow
probe), `--quick` is banned for the real run, and the skeleton has an explicit and modest mobile
requirement: *not broken*, not a reproduction of the theme's mobile layout.

**Don't copy the theme's code.** The old rule 2 banned assets — images, fonts, video — but said
nothing about source. The scraper writes the theme's real stylesheets and rendered markup to disk, and
those are the path of least resistance for an agent under time pressure. Now an explicit rule plus a
check: sample selectors from `skeleton/` must not appear in `out/css/`.

**The `.gitignore` instruction was backwards.** v1 ignored all of `out/`, which would have dangled
every citation the moment the run finished. Now: commit the evidence (probe JSON, analyses, network,
track data, downscaled section images), ignore the theme's code and the heavy screenshots. Fixes
traceability and IP hygiene in one move.

---

## 4. Four things only you can decide

These are in the brief as marked decision points. Reviewer 4 was blunt about them and I think fairly.

**A. Does `skeleton/` replace `griflan-mirror/`?** — **DECIDED (2026-07-31): no. Separate sites.**
So the reviewer's framing below — "if it doesn't replace it, don't build it" — does not apply, and it
was never the reviewer's call to make. What survives from it is one factual note: this work does not
touch the Griflan debt, so that stays open and tracked in `HANDOFF-plan-c.md` §5, and rules 2 and 3
exist so this build never grows a debt of its own.

The original argument, kept for context:
If yes, this whole exercise is the exit from the Griflan debt — the third-party showreel, the
unlicensed fonts, someone else's Nuxt bundle — and it is worth doing properly. If it's another
parallel experiment sitting next to `plan-z/` and `logo-lab/`, the debt stays and this is a fourth
codebase. The reviewer's phrasing: *"if it doesn't replace it, don't build it."* The brief opens with
this line and asks you to confirm or delete it.

**B. Stop after SECTIONS.md, or build the skeleton in the same run?** — **DECIDED: run straight
through.** The reviewer wanted a hard stop so no effect gets built that you later delete. You asked to
see the full site first, which is the stronger argument: you cannot judge what to cut from a table, and
sections are cheap. The compromise now in the brief is that *sections* are unlimited and *effects* stay
capped at eight, since effects are where the hours go. The documents still ship before the skeleton
starts, so there is something to react to while it is being built.

**C. How many sections?** — **DECIDED: all of them.**
An earlier draft of this file told the agent to aim at 8–12 sections "not 22". That was wrong twice
over: the reviewer who proposed it had never seen the site (nobody has — the capture has not run), and
the figure 22 was inferred from their phrase "20-plus", so it was invented. Rule 1 of the brief forbids
exactly that. Both numbers are removed.

What survives is the observation, not the instruction: Pixel Craft is an agency portfolio showcase
built around a wall of client work, case studies and a showreel; Plan C is one consultant selling 1:1
advice, so some slots will have nothing to go in them. The agent now writes that as a per-section
recommendation with a reason and **builds everything anyway**. You trim after walking through the real
thing.

**A third invented number was removed for the same reason.** The agent-instruction reviewer proposed
capping the skeleton at eight effects, to stop an unsupervised agent from spending six hours writing
its own smooth-scroll. The worry is legitimate; the number was not — nobody has counted this theme's
effects either. And a count is the wrong control anyway: cost varies by two orders of magnitude between
kinds, so eight expensive effects blows the run just as badly, while forbidding the ninth cheap one
saves nothing. The brief now bounds the **kind** of mechanism (a table of exclusions, each with a
reason), keeps the priority order so a truncated run still has the load-bearing effects, checkpoints
after every effect, and stops at two failed attempts on any single one.

The motion point stands on its own and is unaffected: the audience is exhausted creators arriving from
IG/TikTok on a phone, so the honest design answer is usually *less* motion. That is an argument for you
to make when you trim, not for the agent to pre-empt.

**D. Licence position.** — **DECIDED (2026-07-31): not buying; `skeleton/` is written from scratch.**
That makes rules 2 and 3 in the brief the owner's decision rather than an assistant's inference, which
is the distinction that matters — an earlier draft of rule 2 was written by me on a guess about what he
would want, without asking. It happened to land in the right place; the process was still wrong, and
the brief now records the source of every rule so a future session can tell the two apart.

Background, kept because the reasoning is still useful:
Measuring a public page — type scale, spacing, breakpoints, easing, pin distances — records facts and
functional methods, and those aren't protected. Loading a demo in a headless browser may breach the
host's terms of service, which is a low-severity contract matter, and it stays that way as long as the
capture stays private and is never redistributed. What is clearly infringing is shipping the theme's
assets, pasting its CSS/JS/markup, or reproducing its distinctive look wholesale. The brief now states
this position explicitly so the next session doesn't have to re-derive it. If you ever want to *read*
the theme's code rather than just measure its output, the Regular Licence is a small one-time cost
that removes the ambiguity — though note it licenses the code, not the demo's fonts, photos, or video.
(Not legal advice, and Thai enforcement specifics vary.)

---

## 5. The strongest argument against doing this at all

Recorded because it deserves to be, and because the counter-argument is what makes the work worth doing.

This is the second time. The first time the plan was "clone Griflan as a starting point," and the
result is a live codebase that is still someone else's bundle, still hotlinking another studio's
client showreel from Mux and Vimeo, still loading fonts nobody paid for — unresolved months on,
because the exciting part was the cloning and the boring part was the removal. This brief is the
exciting part again. Nothing in it removes a Griflan asset, chooses a Thai font, or writes a line of
the sales page.

The counter-argument, and the reason to proceed: this is the only proposal on the table that actually
gets you off `griflan-mirror`. You can't ship the current build — section 5 of the handoff says so.
"Delete the Griflan assets" is not a plan, because deleting them leaves a hollow site. A measured,
zero-dep, own-code skeleton is a *destination* to migrate to, and migrating retires all four debts at
once. That reframing is the whole call, which is why decision A sits at the top of the brief.

One cheaper path worth weighing first: you already own most of the pieces — the palette, the rigged
vector logo, a self-built card stack and lerp smooth-scroll in `cards-lab.html` (from a different
teardown, no dependencies), roughly 420 content points, and a 45-row content comparison document. A
lean page assembled from those plus a chosen font could ship in a fraction of the effort, and the
teardown could be narrowed to the two or three mechanics you actually lack. Choosing the Thai font is
the cheapest open item, unblocks the loader bug permanently, and changes the type scale the skeleton
gets built against — so it's worth doing *before* the skeleton, not after.

---

## 6. Rejected

- **Guessing a demo URL in the brief** (`pixelcraft.bslthemes.com` was proposed as a labelled
  hypothesis). A wrong guess passes an HTTP 200 + `text/html` check just as happily as a right one,
  and an agent that scrapes the wrong site will produce a complete, confident, useless teardown.
  The brief instead specifies how to obtain the URL and requires the demo's identity to be verified
  against the ThemeForest item page before capture proceeds.
- **"Delete the stale `out/` fixture first."** That fixture exists only in my sandbox; nothing was
  ever written to `research/pixelcraft/out/` on your disk. The useful half of the finding was kept:
  the script now warns loudly if the resolved demo URL is `localhost`, and the brief makes checking
  `_demo_url.txt` the first verification gate.
- **Capturing three demos.** Cut to one deep capture plus mobile. You can only build against one
  structure, and the third demo costs more than the mobile pass it would displace.
