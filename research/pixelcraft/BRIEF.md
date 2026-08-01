# BRIEF — Pixel Craft teardown → Plan C skeleton

**Read this whole file before touching anything.** Then follow the phases in order.
Repo root is `Z:\Claude Code`. All paths below are relative to it.

Reviewed by four engineers (capture, front-end rebuild, agent-instruction, risk).
Their findings and what was done about each are in `research/pixelcraft/REVIEW.md`.
`scrape.mjs` is v2 — eleven bugs found in v1 are already fixed; do not "restore" behaviour that
looks missing without reading REVIEW.md first.

---

## 0. Context and required reading

| File | Why |
|---|---|
| `HANDOFF-plan-c.md` | What Plan C is · palette · lessons already paid for · **§5 = third-party material that must not ship** |
| `research/xxix/FINDINGS.md` | **The quality bar.** Match it or beat it. |
| `research/pixelcraft/REVIEW.md` | Why the script and this brief look the way they do |
| `research/pixelcraft/README.md` | Scraper usage and the full output file map |

**The job.** Tear down the Pixel Craft demo (ThemeForest item 61661179) to the level where it could be
rebuilt from the notes alone, then deliver a runnable, empty skeleton whose effects work and whose
content is placeholder tokens. **Do not invent content.** The owner decides later what goes in each slot.

**Communicate in Thai** with the owner. Write the deliverable documents in Thai too (this brief is in
English only because it is instructions for you). Code comments in English.

### 0.1 Relationship to `griflan-mirror/`

**Settled by the owner (2026-07-31): none. They are separate sites.**

`skeleton/` is its own build. It does not replace `griflan-mirror/`, does not inherit from it, and does
not share files with it. Do not modify anything under `griflan-mirror/`, do not migrate content out of
it, and do not treat its open items as yours.

Two consequences to keep straight:

- The third-party material listed in `HANDOFF-plan-c.md` §5 (the Griflan showreel, the licensed fonts)
  belongs to that other build and is **out of scope here**. Nothing you do closes it, and nothing you
  do should make it worse — which is exactly why rules 2 and 3 exist for this build.
- Plan C's palette and positioning still apply to `skeleton/` (§6.9). Same brand, different site.

### 0.2 Copyright position — state it, don't re-derive it

- Measurements taken from a public page — type scale, spacing, breakpoints, easing curves, pin
  distances, colour values — are **facts and functional methods**. Not protected. Use freely.
- The theme's **CSS, JS, HTML and assets are copyrighted**. `out/css/`, `out/js/` and `out/dom/` are a
  private working copy for measurement only. Never redistribute, never commit (see §6.4), and never
  copy a line of it into `skeleton/`.
- The theme was **not purchased, and the owner has decided not to buy it** (2026-07-31). The job is
  measurement only: everything in the deliverables comes from the rendered output, never from reading
  the theme's source.

**When measurement seems not to be enough.** Almost always it *is* enough and the sweep was simply too
coarse. `scrape.mjs` samples the whole page at ~26 scroll steps; that is a detector, not a measurement.
Before you write off any effect, aim `probe-effect.mjs` at it (§0.3). Handle it in this order:

1. **Measure it properly.** Run `probe-effect.mjs` on that one element. It recovers easing curves,
   marquee speed, stagger delay, magnetic coefficient and cursor lerp from motion alone. Verified: on a
   test page it recovered a `linear` parallax at rms 0 and a marquee's 18-second cycle to within 0.02s,
   without reading a line of the page's CSS.
2. **Ship an honest approximation.** If the fit is poor, match what you *can* measure — duration,
   distance, direction, trigger point — pick the best-fitting `cubic-bezier` the tool returns, and
   record `implemented: "partial"` in `sections.json` with a `reason` naming what was approximated.
3. **If even an approximation isn't defensible**, set `implemented: false`, leave the correctly sized
   static box (§6.6), and move to the next effect.
4. **In cases 2 and 3, add a row to the "Needs a decision" table in `REPORT.md`** (§8): the effect ID,
   what you measured, what you could not, the fit error, and what would resolve it — most often a
   different reference site that does the same thing more legibly, or dropping the effect.

The owner reads that table and decides row by row when the run is over. Do not halt, do not wait for a
reply, and never read the theme's source to unblock yourself. Run-level halts are only the ones listed
in the §3.2 playbook.

### 0.3 `probe-effect.mjs` — the precision instrument

Use it in P3 (to fill Table B's measured values) and in P6 (to get a constant exactly right). It never
reads source; it recovers constants by sampling motion densely and fitting curves in Node.

```bat
node research\pixelcraft\probe-effect.mjs --url <DEMO> --mode <mode> --sel "<css>" --name <label>
```

| `--mode` | Extra flags | What comes back |
|---|---|---|
| `scroll` | `--from --to --steps` | which channel animates (`ty`/`tx`/`scale`/`opacity`), travel distance, px per scroll pixel, best-fitting **named ease** with RMS error, and a generic **`cubic-bezier(...)`** you can paste into CSS. Flags non-monotonic motion instead of fitting noise to it |
| `time` | `--secs` | same fit for time-based animation, plus the observed duration and sample rate |
| `marquee` | — | px/second, direction, number of duplicated copies, seconds per copy, and a one-line rebuild hint |
| `stagger` | `--from --to --steps` (`--sel` matches **all** items) | the scroll position where each sibling crosses its reveal threshold, the deltas, and the median — note scroll-driven stagger is measured in scroll pixels, not milliseconds |
| `hover` | — | lift in px, scale factor, tilt range in degrees, whether it is magnetic and the magnet coefficient, sampled across a 3×3 grid of cursor positions inside the element |
| `cursor` | — | the follower's per-frame lerp factor `k` (for `pos += (target - pos) * k`), frames to reach 95 %, and a spring fit with damping ratio if it overshoots |

Output goes to `out/effects/<name>.json` and is a valid citation source (§4.4). Cite the fit, not just
the value: `cubic-bezier(0.16, 1, 0.3, 1) ⟨effects/hero_reveal.json#fit.cubicBezier⟩ (rms 0.004)`.

**Report the fit error every time.** RMS under ~0.02 means the curve is genuinely recovered; above that,
say so plainly rather than presenting a guess as a measurement.

---

## 1. Ground rules

Each rule carries its **source**, so a future session can tell an owner's decision from an assistant's
inference and re-open the right ones. Rules marked *(owner, dated)* were decided explicitly and are not
yours to reinterpret.

1. **Measure, never guess.** Every number in a deliverable must carry a citation (§4.4). A number
   without one is treated as fabricated. If something cannot be measured, write
   "not measured — <reason>". Never write "none" when you mean "not measured".
   *Source: `HANDOFF-plan-c.md` §6 — the owner's stated working style.*
2. **Never copy the theme's assets.** No images, fonts, video, `.riv`, icon sets. Rebuild mechanisms
   from measured parameters instead; use solid palette blocks, hand-written SVG, or generative canvas.
   *Source: owner, 2026-07-31 — chose "write from scratch" over "copy now, clean up later".*
3. **Never copy the theme's code.** Not one selector, not one class name, not one block of CSS from
   `out/css/` or `out/dom/`. Every line in `skeleton/` is written from the numbers in `SECTIONS.md`.
   Checked in Phase 7. *Source: owner, 2026-07-31 — same decision, and the theme was not licensed.*
4. **No libraries where the mechanism can be written by hand.** Plan C targets ~zero dependencies.
   `logo-lab/cards-lab.html` is the precedent — card-stack mechanics reverse-engineered from
   chkstepan.com and rewritten from scratch. Record what the theme uses; ship your own.
   *Source: `HANDOFF-plan-c.md` + the owner's stated stack (vanilla JS + SVG + Canvas).*
5. **Never read raw capture files whole.** `dom/*.html` is 1–3 MB, `css/*` can exceed 500 KB,
   `track_*_samples.json` is large by design. Reading them will exhaust the context before anything is
   written. Extract with a Node one-liner into `out/derived/*.json` (each under 40 KB) and read those.
   Grepping the raw files is fine with a match limit. *Source: review — a context-budget measure.*
6. **Say when you hit a wall.** Do not grind. Three failures on the same thing → record it, move on.
   *Source: `HANDOFF-plan-c.md` §6.*

**`out/` is exempt from rules 2 and 3.** It is a private measurement copy of the theme's real files and
is supposed to contain them. The rules govern what reaches `skeleton/` and, later, the live site.

### 1.1 Decisions on record

| Date | Decision | Consequence |
|---|---|---|
| 2026-07-31 | Build the **full site** — every captured section, nothing cut or merged up front | §5.4, §6.1 |
| 2026-07-31 | **No effect count cap** — bound the kind of mechanism, not the number | §6.6 |
| 2026-07-31 | `skeleton/` is **written from scratch**, not copied and cleaned later | rules 2, 3 |
| 2026-07-31 | **Not buying** the ThemeForest licence | measure only; never read or lift the theme's source |
| 2026-07-31 | Fonts: **Kanit** (display) + **Anuphan** (text), both OFL 1.1, self-hosted | §6.5; files in `research/pixelcraft/fonts/` |
| 2026-07-31 | `skeleton/` does **not** replace `griflan-mirror/` — separate sites | §0.1 |
| 2026-07-31 | When measurement isn't enough: approximate or skip **per effect**, never halt the run | §0.2 |

Do not add to this table on your own initiative. Anything you decide yourself goes in `RUN-LOG.md`.

---

## 2. Mandatory phase order

Work strictly in this order. Later phases depend on decisions frozen in earlier ones — in particular
the E-numbering must be settled in P3 before either document is written, or you will hand-renumber and
leave stale IDs behind.

| Phase | Output | Gate to pass before moving on |
|---|---|---|
| **P1** Capture | `out/` populated | scraper exits 0 |
| **P2** Verify | `out/derived/verify.json` | gates G1–G5 in §3.2 |
| **P3** Derive | `out/derived/*.json`, `out/effects/*.json`, S- and E-numbering frozen | every section and effect has an ID; every effect that will be built has a measured constant from `probe-effect.mjs` |
| **P4** SECTIONS.md | `research/pixelcraft/SECTIONS.md` | citation checker passes 100 % |
| **P5** FINDINGS.md | `research/pixelcraft/FINDINGS.md` | citation checker passes 100 % |
| **GATE** | both documents shipped | post the "3 take / 3 drop" recommendation, then continue — do not wait for a reply (§6.1) |
| **P6** Skeleton | `research/pixelcraft/skeleton/` | **every** captured section built; every hand-buildable effect built; builds and serves |
| **P7** Self-check | `out/derived/selfcheck.json` | all checks PASS |

After every phase, write `research/pixelcraft/_state.json`:

```json
{ "phase": "P4", "done": ["P1","P2","P3"], "demoUrl": "https://…", "outDir": "out",
  "sections": 21, "effects": 14, "decisions": ["chose demo X because …"],
  "openProblems": ["…"], "ts": "2026-07-27T10:00:00Z" }
```

If a session restarts and `_state.json` exists with a valid `out/probe/*.json`
(parses, `sections.length >= 6`), **resume from the next phase — do not re-run the capture.**

Append to `research/pixelcraft/RUN-LOG.md` after every phase: timestamp, phase, exact commands run,
exit codes, gate results, decisions taken, anything retried.

---

## 3. Phase P1 — capture

### 3.1 Running it

```bat
cd "Z:\Claude Code"

:: 0) keep the capture out of git BEFORE it exists
::    append this exact line to Z:\Claude Code\.gitignore  (not a bare `out/`)
::    research/pixelcraft/out*/shots/
::    research/pixelcraft/out*/dom/
::    research/pixelcraft/out*/css/
::    research/pixelcraft/out*/js/

:: 1) dependency — the npm package only (~2 MB). Check before installing.
node -e "import('playwright').then(()=>console.log('OK')).catch(()=>console.log('MISSING'))"
npm i -D playwright

:: DO NOT run `npx playwright install chromium` unless the step below fails.
:: It downloads ~200 MB into AppData\Local. The scripts fall back to the Chrome or
:: Edge already on the machine, so the download is normally unnecessary — and on a
:: near-full C: drive it has caused a corrupted Claude desktop install.

:: 2) capture
node research\pixelcraft\scrape.mjs
```

The first line of output names the browser it launched — `bundled chromium`, `installed Chrome`, or
`installed Edge`. Force one with `--browser chrome | msedge | chromium` if you need to. If none can
launch, the error lists what was tried; install Chrome or Edge rather than reaching for
`playwright install`.

Expect 15–30 minutes. Do not use `--quick` for the real run — it skips the 390 px pass and the entire
hover pass, and the script will stamp a warning into `_capture_meta.json` saying so. `--quick` and
`--no-shots` are for debugging `pickSections()` only.

### 3.1a If the demo URL cannot be resolved

ThemeForest may block headless browsers. Try each of these **once**, in order:

1. `node research\pixelcraft\scrape.mjs --headful` — watch for a Cloudflare challenge.
2. Read `out/_preview_probe.json`. It lists every iframe found with its rendered area. If a
   plausible demo URL is there, verify it before use:
   ```bat
   node -e "fetch(process.argv[1]).then(async r=>{const t=await r.text();console.log(r.status, r.headers.get('content-type'), /pixel.?craft/i.test(t)?'BRAND-MATCH':'NO-BRAND-MATCH', t.length)})" "<URL>"
   ```
   Proceed only if the page's own markup identifies it as this theme. **HTTP 200 is not verification** —
   a wrong site returns 200 just as happily, and scraping the wrong site yields a complete, confident,
   useless teardown.
3. If all of that fails: write `research/pixelcraft/BLOCKED.md` (what was attempted, verbatim commands
   and errors, what the owner must do, which deliverables are nonetheless complete) and **stop**.

Never invent a demo URL. Never edit `PREVIEW_URL`. Never disable TLS verification or add a proxy.

### 3.2 Failure playbook

| Symptom | Action |
|---|---|
| `npm i playwright` fails | retry once → still failing = **HALT**, write `BLOCKED.md` |
| no browser launches | try `--browser chrome`, then `--browser msedge`. Only if both fail, and C: has >2 GB free, run `npx playwright install chromium`. Never run it on a near-full disk |
| demo URL unresolvable | §3.1a ladder → HALT is allowed |
| `goto` times out (120 s) | retry once → still failing = HALT |
| full-page screenshot fails | **continue** — use `shots/*_s##.jpg`, record the caveat |
| some `sections/*.jpg` missing | continue — those table rows read `(no image)` |
| hover / menu / inner pages fail | continue, always — not load-bearing |
| one effect can't be built in the skeleton | continue — move it to the "not implemented" table |
| same error three times | stop that thread, record it, move to the next phase |

### 3.3 Multiple demos

The scraper writes to one directory with fixed labels — a second run **overwrites the first**, and you
would end up with table rows linking to another demo's screenshots without noticing. If a second demo
is genuinely needed:

```bat
node research\pixelcraft\scrape.mjs --url <URL2> --out out-demo2 --label demo2
```

`out/` is the primary and the **only** source for `SECTIONS.md` and `skeleton/`. Secondary demos are
for one comparison paragraph in `FINDINGS.md` and nothing else. Short on time? Skip them and say so.

---

## 4. Phase P2 — verify the capture, and P3 — derive

### 4.1 Gates (write `scripts/verify_capture.mjs`, print PASS/FAIL per gate)

| Gate | Test | On FAIL |
|---|---|---|
| **G0** | `out/_demo_url.txt` is not `localhost`/`127.0.0.1`, and `_capture_meta.json.warnings` contains no fixture warning | **HALT.** This is test data. Do not write findings. |
| **G1** | `probe.sections.length` between 6 and 40, and no section with `vhFraction > 6` | edit `pickSections()` **once**, re-test with `--no-shots` (~3 min), then one full re-run. Max two full runs per demo. Still failing → continue with a prominent caveat in FINDINGS §1 |
| **G2** | ≥ 18 of the `shots/<label>_s##.jpg` files are byte-distinct (md5) | scrolling didn't take → check `scroll_visited_*.json` (it records the *actual* Y reached per step). One fix attempt, then continue with a caveat |
| **G3** | `analysis_scroll_*.json`: `pinned + horizontalScroll + parallax* + opacityReveal` ≥ 3 | acceptable if G2 passed — the site may be CSS-only. Record it, do not "fix" it |
| **G4** | `console_errors_*.json` length ≤ 15 | continue, record the caveat |
| **G5** | `_capture_meta.json.notCaptured` is empty, or every entry is deliberate | anything listed there must be marked "not measured" in the documents |

Read `_capture_meta.json.warnings` in full before writing anything. The script records what it could
not do; those are your caveats and they are not optional.

### 4.2 Which probe is canonical

S-numbering comes from **`probe/<label>_1440.json` only**. `probe/<label>_1440_mid.json` exists to show
which sections lazy-mount later; use it for a caveat sentence, never to renumber.

### 4.3 Derived files to produce in P3

Write a small Node script per file. Each output under 40 KB. These are what you read from here on.

| File | Contents |
|---|---|
| `out/derived/sections.json` | per section: `sid`, `docTop`, `height`, `vhFraction`, `padding`, `bg`, `overlay`, `media` counts, `repeatGeometry`, heading/paragraph char counts, image path |
| `out/derived/effects.json` | one row per **distinct effect**, with `eid`, name, group, mechanism, measured parameters, `usedIn: ["S02","S05"]`, source citations |
| `out/derived/effect_section_map.json` | join `track_*_index.json` (which carries `docTop` and `sec` per tracked element) against `analysis_scroll_*.json` — this is the **only** permitted source for Table B's "where" column. Unmappable rows read `(unmapped)` |
| `out/derived/typescale.json` | type rows with `count >= 2`, px + rem + weight + family + line-height ratio + tracking |
| `out/derived/palette.json` | colours merged from `probe.color.bg`, `.text`, `.border`, `.gradients` and `analysis_css.json.rootVars`, with occurrence counts |

**Source precedence for any measured constant** — always cite which one you used:

1. **`libprobe/<label>.json`** if it has the value. GSAP ScrollTrigger reports its own pin `start`/`end`
   in document pixels plus `scrub`; tween durations and easing come straight from the timeline. Exact,
   no sampling error.
2. **`out/effects/*.json` from `probe-effect.mjs`** (§0.3) for anything `libprobe` doesn't cover, or
   for any site not using GSAP. This is where easing curves, marquee speed, stagger, magnet strength
   and cursor lerp come from. Quote the RMS alongside the value.
3. **`analysis_scroll_*.json`** from the coarse sweep — a *detector*, not a measurement. Its ranges
   resolve to about `docHeight / 26`, so quote them as ±one step and refine with (2) before using them
   as a build constant.

Run `probe-effect.mjs` on every effect you intend to build. A Table B row whose measured value came
only from source 3 is not finished.

### 4.4 Citation format — mandatory

Every number in `SECTIONS.md` and `FINDINGS.md` is followed by its source:

```
⟨file#json.path⟩
```

Examples:

```
pin distance 1399px ⟨analysis_scroll_home_1440.json#pinned[0].holdRange.distance⟩
hero 96px / 6rem   ⟨probe/home_1440.json#typeScale.rows[0]⟩
scrub 1            ⟨libprobe/home_1440.json#scrollTriggers[4].scrub⟩
```

(Those three are **format illustrations**, not real values — `scrollTriggers` only exists if the theme
actually uses GSAP ScrollTrigger. Cite what your capture really produced.)

Any file under `out/` is a valid source. Then write `scripts/check_citations.mjs`: extract every `⟨…⟩`,
open the file, resolve the path, print `OK`/`FAIL` per line, and finish with
`N citations, M failed`. **M must be 0.** Paste that output as a code block at the end of each document.
Self-sampling "spot check five of them" is not acceptable.

---

## 5. Phases P4 and P5 — the two documents

### 5.1 Numbering

**Sections — `S01 … Snn`,** in visual document order (the scraper already sorts by `docTop` and assigns
`sid`). IDs are **permanent**. Never renumber to make room; insert as `S03a`. Order lives in a separate
`order` field, not in the ID. `S00` = navigation, `S99` = footer.

**Effects — `E01 … Enn`,** grouped by decade:

| Range | Group |
|---|---|
| E01–E09 | Global — preloader, custom cursor, smooth/virtual scroll, page transition, grain |
| E10–E19 | Scroll-driven — pin/sticky, parallax, scale-on-scroll, card stack, horizontal scroll |
| E20–E29 | Reveal — fade/slide on enter, stagger, clip/mask reveal |
| E30–E39 | Text — line reveal, marquee, counter, scramble, letter hover |
| E40–E49 | Hover / cursor-follow — card lift, image follow, magnetic button, tilt |
| E50–E59 | Media — video autoplay, canvas/WebGL, image sequence, blend modes |
| E60–E69 | Nav & overlay — nav hide/show, fullscreen menu, modal |

The decade is a **hint recorded in a `group` field**, not a hard capacity. If a group needs an
eleventh member, keep counting past the decade boundary and note it. Copy this table into the top of
`SECTIONS.md` so that file is self-describing if this brief is lost.

**An effect used in eight sections is ONE row in Table B** with `usedIn: [...]`. Section rows reference
effect IDs; they never redefine them.

**Slope legend** — paste verbatim into `SECTIONS.md`, because the sign is counter-intuitive:

```
slope = d(rect.top) / d(scrollY)
  -1.00       element is static in normal flow
  |s| < 0.08  pinned  (horizontal-scroll if xSlope > 0.2)
  -0.92…-0.08 moves SLOWER than scroll  (classic background parallax)
  < -1.08     moves FASTER than scroll
  > +0.08     drifts downward (reverse parallax)
```

Every parallax row must state the slope **and** the direction in words.

### 5.2 `SECTIONS.md` — Table A (sections)

| # | Image | Height @1440 | Height @390 | Effects | Content structure in the source | Plan C content | Recommendation (yours) |
|---|---|---|---|---|---|---|---|
| S01 | `out/sections/home_1440_S01.jpg` | 900px · 1.00×vh ⟨…⟩ | 780px ⟨…⟩ | E01, E11, E31 | H1 one line + body one paragraph + one CTA + background video | *(leave blank)* | keep — works for any offer |
| S07 | `out/sections/home_1440_S07.jpg` | 2100px · 2.33×vh ⟨…⟩ | 1640px ⟨…⟩ | E13, E22 | 9-item client logo wall, 3 columns | *(leave blank)* | flag — Plan C has no client wall to fill this |

- **Content structure describes structure only.** "6 cards, 3 columns, 4:5 image + 28px title + 2 tags,
  24px gutter" — take it from `repeatGeometry`. **Never copy the theme's actual wording.** If real text
  ends up in this column you have produced someone else's copy instead of an empty slot.
- **Verify each image exists** with `fs.existsSync` before linking. The scraper caps at 60 sections and
  some shots can fail; missing ones read `(no image)`. Filenames carry the label prefix:
  `home_1440_S01.jpg`, not `S01.jpg`.
- **"Plan C content" stays empty.** The owner fills it.
- **"Recommendation" is yours to write** — `keep` / `flag` / `merge?` plus one line of reasoning.
  It is advice only; build every section regardless. See §5.4.

### 5.3 `SECTIONS.md` — Table B (effects)

| # | Name | Group | Where | Mechanism (and how it was determined) | Measured values | Buildable by hand? | Plan C uses it? |
|---|---|---|---|---|---|---|---|
| E11 | Pinned panel | E10s | S05 ⟨derived/effect_section_map.json#…⟩ | `position:sticky` driven by ScrollTrigger | pin 2799→4198, distance 1399px ⟨analysis_scroll_home_1440.json#pinned[0].holdRange⟩ | yes — sticky alone, no JS | *(blank)* |
| E12 | Image parallax | E10s | S03, S07 | transform on scroll | slope −1.25 = 1.25× faster than scroll ⟨…#parallaxFast[0].medianSlope⟩ | yes — rAF + lerp | *(blank)* |

- **Buildable by hand** is one of `yes` / `library needed` / `not worth it`, each with a one-line reason.
  Anything marked `not worth it` must name a cheaper substitute.
- Close the file with **"3 to take / 3 to drop"**, argued from Plan C's positioning: chess reframed as
  poker, a real consultant rather than an agency showing off, and an audience of exhausted creators
  arriving from IG/TikTok on a phone. For that audience the honest answer is usually *less* motion.

### 5.4 Capture everything; recommend, don't cut

**Decided by the owner: build the full site first. Nothing is cut at this stage.**

Every section the capture finds goes into Table A and gets built in the skeleton. No target count.
There is no measurement of this theme yet — any number of sections stated before the capture would be
invented, and rule 1 forbids that.

Your job in the last column is to **advise, not decide**:

- Keep the **mechanics** — pin ranges, easing, parallax slopes, stagger timing, type-scale ratios,
  grid and gutter maths. These transfer to any content.
- Flag the **composition** — a section whose purpose is structurally tied to something Plan C does not
  have gets a recommendation with a reason, and nothing more. Plan C is one consultant selling 1:1
  advice; Pixel Craft is built to display an agency's client work. Some slots will have nothing to go
  in them. Say which and why. Do not act on it.
- Do not remove, merge or reorder anything on your own initiative. If you think the running order is
  wrong, write it in the column and leave the build alone.

The owner decides what survives, at the gate in §6.1, after seeing the whole thing.

### 5.5 `FINDINGS.md` — structure

Mirror `research/xxix/FINDINGS.md`. Required sections:

1. **What was captured** — date, tool versions, demo URL, viewports, flags, and the
   `_capture_meta.json.notCaptured` list. Also the known caveats: lazy-loaded content may be blank in
   `shots/*_full.jpg` (use `*_full_forced.jpg` for structure), and scroll-sampled ranges are ±one step.
2. **Framework and stack** — WordPress theme name and version from `probe.themeHints`, page builder,
   libraries from `probe.libs` + `libprobe`, and page weight from `analysis_network_*.json`.
   **Report weight as three numbers, never one total:** responses, measured KB, and how many responses
   were unmeasurable — then break down by resource type. State that the total is a lower bound.
3. **Layout system** — container width, columns, gutters, breakpoints from `analysis_css.json`. Name
   the actual mechanism (CSS grid vs flex vs `column-count` vs absolute) and note where different
   mechanisms are used on different pages — the xxix teardown found exactly that and it mattered.
4. **Type scale** — the xxix table: px / rem / weight / family / line-height / tracking / transform /
   role / occurrences. Include any `clamp()` declarations verbatim from
   `analysis_css.json.fluidFontSizes` — those explain the whole responsive scale in one line. Record
   line-height as a **ratio** as well as px, and add: *these values were measured on Latin text; Thai
   needs roughly 10–20 % more leading for its stacked vowels and tone marks.* Close with two or three
   sentences on the scale's character.
5. **Colour palette** — hex, role, source. Include gradients (`probe.color.gradients`), which a
   `backgroundColor` tally alone would miss entirely.
6. **Effect inventory** — reference Table B rather than restating it; add the prose that a table can't
   carry (how mechanisms combine, what the site's motion language actually is).
7. **Rebuild cheat-sheet** — enough that someone could rebuild without opening the source site.

---

## 6. GATE, then Phase P6 — the skeleton

### 6.1 What to build, and where to stop

**Decided by the owner: build the full site — every section the capture found, in the source order.**
Do not skip a section because you judged it unnecessary; that judgement belongs in the recommendation
column (§5.4), not in the build.

Effects follow the same principle: build every one you judged hand-buildable, no maximum. What is
bounded is the **kind** of mechanism, not the count — the out-of-scope table is in §6.6, and every row
of it has a stated reason.

One thing is still ordered rather than gated:

- **Ship `FINDINGS.md` + `SECTIONS.md` before starting the skeleton**, and post the "3 to take /
  3 to drop" recommendation. Do not wait for a reply — the owner asked to see the whole site — but the
  documents must exist first so there is something to react to while the skeleton is being built.

Trimming happens after the owner has walked through the full skeleton. That is a later, separate job.

### 6.2 File layout

```
research/pixelcraft/skeleton/
├── index.html        semantic sections, tokens, data-* hooks
├── styles.css        all CSS; every value from a custom property
├── effects.js        ONE shared rAF loop + ONE IntersectionObserver for everything
├── sections.json     ← the source of truth (schema in §6.3)
├── debug.js          badge overlay + keyboard toggles + tuning sliders
├── filler-th.js      optional Thai-length filler (§6.8)
├── check.cjs         HTML ↔ sections.json consistency check
├── serve.cjs         static server, port 8123, no dependencies
└── README.md         how to run · token list (generated) · what was NOT built and why
```

`<script type="module">`, no bundler, no npm dependency. If `serve.cjs` doesn't already exist at repo
root, write it here.

### 6.3 `sections.json` — the machine-readable manifest

A README cannot be consumed by a content-pour script. You already have `_planz-content.cjs` doing that
job against griflan-mirror; this makes it reusable.

```jsonc
{
  "version": 1,
  "source": { "demoUrl": "…", "capturedAt": "…", "viewport": "1440x900" },
  "palette": { "--ink": "#181616", "--paper": "#FFFDDB", "--accent": "#FF3831" },
  "sections": [
    { "id": "S03", "order": 3, "minHeightPx": 1455, "vhFraction": 1.62,
      "effects": ["E12", "E22"],
      "slots": [
        { "token": "[S03-H1]", "role": "h1", "el": "h2", "fontPx": 56, "lines": 2, "approxChars": 40 },
        { "token": "[S03-CARD-1-TITLE]", "role": "card-title", "el": "h3", "fontPx": 28, "approxChars": 24 }
      ] }
  ],
  "effects": [
    { "id": "E12", "name": "image parallax", "group": "E10s", "mechanism": "transform on scroll",
      "measuredFrom": "analysis_scroll_home_1440.json#parallaxFast[0]",
      "implemented": true, "reason": null, "usedIn": ["S03","S07"],
      "params": { "slope": -1.25, "lerp": 0.12 } }
  ]
}
```

`implemented` is `true` / `false` / `"partial"`. Every `false` needs a `reason`.

Note `fetch('sections.json')` fails under `file://` — either serve via `serve.cjs` (state this in the
README) or inline the manifest as `<script type="application/json" id="manifest">`.

### 6.4 Token grammar — one format only

```
[S<nn>-<ROLE>]              e.g. [S03-H1]
[S<nn>-<GROUP>-<n>-<ROLE>]  e.g. [S03-CARD-2-TITLE]     n is 1-based
```

- `nn` is two digits, zero-padded. Matches `\[S\d{2}(-[A-Z0-9]+)*-[A-Z0-9-]+\]`.
- ROLE comes from this closed list: `H1 H2 H3 EYEBROW BODY CTA LABEL META NUM QUOTE LINK IMG-ALT
  TITLE TAG`. Need a new one? Add it to the table in `skeleton/README.md`.
- Uppercase, digits and hyphen only. **Globally unique** — every token appears exactly once.
- Every slot element carries `data-token="S03-H1"` on the real element, so a pour script uses
  `querySelectorAll('[data-token]')` rather than regex over prose.
- Render tokens as dim text in a dashed box, sized via `data-approx-chars` so the box reserves
  realistic space rather than collapsing to ten characters.
- (The `[S3-HEADLINE]` form used in an earlier draft is obsolete. This is the only format.)

### 6.5 Thai — read this before writing any text effect

This is the single highest-risk area and it is not obvious from the source site, which is in English.

**Never split Thai text by character.** `str.split('')`, `[...str]` and `Array.from(str)` split by
code unit or code point, which **detaches Thai combining marks** (U+0E31, U+0E34–0E3A, U+0E47–0E4E)
from their base consonant — they render on dotted circles or stack incorrectly. Wrapping each unit in
`display:inline-block` additionally destroys line-breaking, because Thai has no word spaces and the
browser's line-breaker needs the text run intact; with inline-blocks it will break mid-word and
mid-cluster.

- Text reveals in this skeleton are **line-level or block-level only** — a wrapper with
  `overflow:hidden` and a child translated on Y.
- If character-level is ever genuinely required: `new Intl.Segmenter('th', {granularity:'grapheme'})`
  for characters, `{granularity:'word'}` for words (ICU ships a Thai dictionary). Spans must be
  `display:inline`, with the transform moved to a nested child. `Intl.Segmenter` is available in all
  current browsers.
- Guard every per-character effect: `if (/[\u0E00-\u0E7F]/.test(text)) → fall back to line-level`.
- Add to Table B's E30s row a note that this constraint applies.

**Thai layout defaults** — put these in `styles.css`:

```css
html { lang="th" }                       /* set the attribute in HTML */
:lang(th){ word-break: normal; overflow-wrap: break-word; hyphens: none; }
:root{ --lh-body: 1.6; --lh-display: 1.3; }   /* Thai vowel/tone stacks need the room */
```

Never use `word-break: break-all` (chops Thai clusters) or `text-align: justify` (with no word spaces,
Thai justification stretches inside words).

**Sizing.** Thai copy runs roughly 15–30 % longer in characters than the English marketing copy that
was measured. So: **`min-height` + padding, never a fixed `height`.** Pin/sticky scroll lengths are
computed at runtime from `el.offsetHeight`, never hardcoded in px. Section heights should land within
±10 % of the measured value; anything outside that needs a one-line explanation in the README.

**Fonts — decided, and the files are already in the repo.** `Kanit` for display, `Anuphan` for text
(both Cadson Demak, both SIL OFL 1.1, free for commercial use, self-hosted). Chosen 2026-07-31.

Copy `research/pixelcraft/fonts/` into `skeleton/fonts/` and link `fonts/type.css`. It already declares
the two custom properties — `--font-display` and `--font-text` — plus the line-height tokens. **Use only
those two properties; no raw `font-family` anywhere else in the project.** Never load a font from the
theme, and never add a Google Fonts CDN link (it is an external URL and §7 check 5 rejects it).

Two measured constraints that `type.css` already encodes — do not override them casually:

- **Kanit's minimum line-height is 1.495** (ascender 1100, descender −395 on a 1000 upm). Below that,
  Thai tone marks and lower vowels clip. `--lh-tight: 1.50` is the floor. `--lh-display: 1.15` is only
  safe at large display sizes where the em box is physically large — verify any tight heading against
  `research/pixelcraft/fonts/specimen.html`, which has a stacked-mark stress line for exactly this.
- **The two faces are not the same optical size.** Anuphan's x-height is 570 against Kanit's 474, so at
  identical px Anuphan reads ~20 % larger. `--optical-anuphan: 0.83` compensates; apply it when a
  Kanit heading and Anuphan body sit at nominally the same size.

Anuphan is variable (wght 100–700, one file). Kanit ships as 500 and 700 here; more weights are
available upstream from `@fontsource/kanit` if a design needs them.

### 6.6 Effects — scope by kind, not by count

**Build every effect you marked "yes — buildable by hand" in Table B.** There is no maximum. Nobody has
counted this theme's effects yet, so any number here would be invented, and rule 1 forbids that.

What is bounded is the **kind** of mechanism, because cost varies by two orders of magnitude between
them — a scroll reveal is under an hour, a WebGL distortion is a day. These are out of scope, each for
a stated reason:

| Out of scope | Why |
|---|---|
| smooth / virtual scroll | a transform-wrapper implementation silently kills every `position:sticky` and `position:fixed` on the page — see the note below the priority list; native scroll is the default |
| WebGL / three.js / shader distortion | needs the theme's bitmaps, which rule 2 forbids; ship the cheap substitute named in Table B |
| image sequences | same asset problem, plus a large download budget for one effect |
| Rive / Lottie | a runtime dependency, against rule 4 |
| page transitions (barba) | needs a multi-page site; the skeleton is one page |
| build tooling, npm dependencies | against rule 4 |
| a full accessibility audit | §6.7 sets the floor; auditing is a separate job |

**Priority order — this decides *when*, not *whether*.** Work top-down so that if the run is cut short
for any reason, the load-bearing effects already exist:

1. scroll reveal (E20s) → 2. pin/sticky (E10s) → 3. parallax (E10s) →
4. marquee / counter (E30s) → 5. hover lift / tilt (E40s) → 6. nav hide/show (E60s) → 7. everything else

**Checkpoint after every single effect:** update `sections.json` (`implemented`, `params`) and
`_state.json`, and commit nothing half-wired. Stopping at any point must leave a skeleton that runs.

**Two failed attempts on one effect is the limit** (rule 6). Mark it `implemented: false` with a
reason, leave the correctly-sized static box described at the end of this section, and move on.
Do not spend the run on the hardest item in the list.

**Never implement smooth scroll as a transformed wrapper.** The textbook version — lerp plus
`translate3d` on a wrapper — creates a containing block that makes `position:sticky` and
`position:fixed` resolve against a scroller that never scrolls. Every pin silently stops pinning and
the fixed nav breaks, for reasons that look unrelated. Default to native scrolling. If smooth scroll is
ever required, do it as a rAF loop calling the real `window.scrollTo`, which leaves sticky intact.

**WebGL / shader image distortion is out of scope by definition** — it would need the theme's images,
which rule 2 forbids. Record it in Table B as "not worth it" and ship the cheap substitute you named
there (SVG `feTurbulence` + `feDisplacementMap` via `filter:url(#…)`, or a palette block with a
`transform: scale()` on hover). Any `<canvas>` in the skeleton draws generatively; it never loads a
bitmap. The theme's grain can be rebuilt from `probe.effects.turbulence`, which captures the source
`feTurbulence` parameters exactly.

**Effects deliberately not implemented must still:** leave a correctly sized static box (never height
0), carry `data-effect-todo="E51"` on the element, appear struck through in the debug badge, and have
a `reason` in `sections.json` plus a row in the README table.

### 6.7 Responsive, motion and performance

- **Mobile target is "not broken", not "reproduces the theme's mobile layout".** Testable:
  `document.documentElement.scrollWidth <= clientWidth` at 360, 768 and 1440; every grid collapses to
  one column below 768; all scroll-driven effects disabled under
  `matchMedia('(max-width: 768px)')`. Use the breakpoints in `analysis_css.json.breakpoints`; if that
  array is empty, use 768 / 1200 and record in the README that these are defaults, not measurements.
- **One `@media (prefers-reduced-motion: reduce)` block** that jumps every reveal to its end state,
  sets `animation: none` on marquees, disables lerp and parallax, and restores `cursor: auto`.
  Retrofitting this later costs roughly double. And for an audience of exhausted creators, a site that
  hides the cursor and hijacks scrolling is a business risk, not only an accessibility one.
- **Semantics:** every section is `<section aria-labelledby="…">`; heading tokens are real `<h1>`/`<h2>`
  elements, not `<div>`s, so the document outline is correct the moment content lands. If a custom
  cursor is implemented, keep `:focus-visible` outlines.
- **Budget:** total JS under 25 KB. One shared rAF loop. Reveals via `IntersectionObserver` — never a
  scroll listener calling `getBoundingClientRect()` per element per frame. Batch all reads before
  writes. Add `will-change` on activation and remove it on completion.

### 6.8 Debug affordances

- **Badge** top-left of every section reading `S03 · E12 E22`, effects not implemented struck through.
  Toggle with **`e.code === 'KeyD'`** — not `e.key`, because a Thai keyboard layout sends `'ก'` and an
  `e.key === 'd'` handler would simply never fire. Ignore the key when
  `e.target.closest('input,textarea,[contenteditable]')`. Persist the state in `localStorage`.
  Default: on. Add `T` to toggle the token boxes and `?` to show the key legend.
- **`?debug` panel** with range sliders for the tunable constants — lerp factor, stagger ms, parallax
  slope, IntersectionObserver threshold, pin length — all read from one `CONFIG` object or CSS custom
  properties. This is how the owner prefers to settle values (`logo-lab/pivot-picker.html`,
  `logo-lab/cut-preview.html`).
- **`?fill=th`** swaps every token for realistic-length meaningless Thai filler from `filler-th.js`.
  This is the cheapest way to catch the "Thai is longer and taller" failure before real content exists.
  It is an explicit exception to "no invented content": the filler must be obviously meaningless, live
  in that one file, and never load without the query string.

### 6.9 Palette

Plan C's, never the theme's: `#181616 → #0f1613` (deep green-black) · `#FFFDDB → #F2EFDE` (ivory) ·
`#FF3831 → #F0B32E` (poker-chip gold). All as custom properties at `:root`.

---

## 7. Phase P7 — self-check

Write `research/pixelcraft/scripts/selfcheck.mjs` (Playwright) and run it. It must print PASS for every
check and write the results to `out/derived/selfcheck.json`. Use Node, not `grep` — `grep` is not on a
default Windows shell.

1. Load `skeleton/index.html` via `serve.cjs` → console errors must be **0** (list them if not).
2. `document.querySelectorAll('[data-section]').length` equals Table A's row count, and the
   `data-section` values are `S01…Snn` in order. Print a diff on mismatch.
3. **Bidirectional token check** (this is `check.cjs`, called from here): every token in
   `sections.json` appears exactly once in the HTML; every `[Sxx-…]` in the HTML exists in the
   manifest; no duplicates; every slot element has `data-token`.
4. Each section's rendered height vs `probe.sections[i].height`, within ±10 %. Print a table of
   S / expected / actual / %diff. Outside tolerance is not an automatic fail, but needs an explanation.
5. No external URLs anywhere in `skeleton/`: read every file, match `/https?:\/\//` → must be 0,
   except in comments beginning `SOURCE:`.
6. **No copied theme code:** take 10 random selectors from `styles.css` and assert none of them appear
   in any file under `out/css/`.
7. **Motion actually moves** — scroll to `y = 0`, `docH*0.33`, `docH*0.66`; for every element with a
   `data-effect` attribute read `getComputedStyle().transform`; at least 2 of the 3 readings must
   differ. Print a table of E / y0 / y33 / y66 / MOVED?.
   ⚠️ **Do not judge animation from screenshots.** A hidden-served preview freezes `rAF`
   (`HANDOFF-plan-c.md` lesson 4). Compare numbers.
8. No horizontal overflow at 360 / 768 / 1440.

---

## 8. Reporting

Write `research/pixelcraft/REPORT.md` (then summarise it in chat — a chat-only report is lost if the
session closes):

1. Which demo was captured and why.
2. Counts: sections found, effects catalogued, effects implemented.
3. The "not worth it" table with the cheaper alternative for each.
4. **"Needs a decision"** — one row per effect that measurement alone could not settle (§0.2):
   effect ID · what was measured · what could not be · what would resolve it · what you shipped
   instead (`partial` approximation or `false`). This is the table the owner acts on.
5. **What failed** — what, where it got stuck, the verbatim error, where to resume.
6. Raw pasted output of `selfcheck.mjs` and `check_citations.mjs`.
7. Every file touched outside `research/pixelcraft/`.

Then **append an entry to `HANDOFF-plan-c.md`**: what pixelcraft is, where it lives, its status, what
the owner decided in the "Plan C content" column, and what is still open. State plainly that it is a
**separate site from `griflan-mirror/`**, so a later session doesn't assume one supersedes the other.
Without this entry, a fresh session reading only the handoff has no idea this work exists.

Finally, confirm the git state: `git status --short` must show no files under `out/shots/`, `out/dom/`,
`out/css/` or `out/js/`. The evidence files (`out/probe/`, `out/libprobe/`, `out/analysis_*`,
`out/network_*`, `out/track_*`, `out/derived/`, and downscaled `out/sections/*.jpg`) **should** be
committed — every citation must still resolve on a fresh machine in three weeks.
