# NORTH STAR PROMPT for Claude Code — copy the whole block below
_Purpose: find and **measure** candidate reference sites so the client can pick one structural north star. Claude Code runs on the client's machine with real network access and a real browser — it can do what my sandbox could not: read CSS and measure computed layout._

---

```
NEW TASK — research and measurement, not building. Do not touch the PlanC build.

════════════════════════════════════════════════════════════════
WHY WE ARE DOING THIS
════════════════════════════════════════════════════════════════

The PlanC site is built and passes every check, but the client's verdict is:
"it's component pieces that look good individually but don't connect into one real
website." That is correct, and it is a gap in the brief, not in the build.

The root cause: the brief assembled the best individual components from ~25 different
award sites, then described a layout system in words. Nobody ever inherited a working
system as a whole. Result: 14 good modules, no shared skeleton.

The fix we chose: pick ONE existing site as a STRUCTURAL NORTH STAR, measure its real
numbers, and use those measured numbers to replace the guessed values in
research/SITE-SKELETON.md.

Your job in this task: find the candidates, MEASURE them properly, and present them
so the client can choose. You do not choose. You may recommend with reasons.

════════════════════════════════════════════════════════════════
WHAT A NORTH STAR IS — AND IS NOT
════════════════════════════════════════════════════════════════

IT IS a source of PROPORTIONS: grid width, column count, gutters, section padding,
the ratio between type sizes, line-heights, reading measure, section height rhythm,
how much empty space it tolerates, how many distinct type sizes it permits itself.

IT IS NOT a source of code, markup, assets, class names, or effects. We are not
copying a layout. Every line of our code stays original. The original brief's rule
stands: borrow patterns, never pixels. The composite test is "same school, different
animal" — if a design-literate visitor would recognise our site as the reference site
reskinned, the borrowing went too far.

Concretely: we want to learn that a site uses a 1320px container with 6.5vw side
padding, 12 columns, 160px section padding, a 1.28 type ratio and 1.15/1.65
line-heights. We do not want its HTML.

════════════════════════════════════════════════════════════════
CANDIDATE CRITERIA — these are different from earlier research
════════════════════════════════════════════════════════════════

Earlier research in this project hunted for EFFECTS (best hero, best transition, best
cursor). That produced the Frankenstein problem. This round hunts for STRUCTURAL
COHERENCE on a content shape comparable to ours. Different question, different
answers — do not just reuse the earlier list.

A candidate must be:
1. A LONG SINGLE PAGE (roughly 600vh+), not a multi-page site and not a short landing
   page. We need to see how it sustains rhythm over distance.
2. TYPOGRAPHY-LED with little or no photography. If its coherence comes from a
   beautiful image grid, it teaches us nothing — we have one photograph total.
3. ARGUMENTATIVE / EDITORIAL CONTENT — a manifesto, an essay, a service explanation,
   a story. NOT a project grid or portfolio index. Our page argues a position across
   8 sections; a portfolio's structure does not transfer.
4. 2023–2026.
5. Coherent as ONE DOCUMENT — this is the whole point. It should feel like one thing,
   not sections stacked.

STRONGLY PREFERRED: Japanese, Korean, Chinese or Thai sites. They solve the exact
problems we have — a script with no word spaces, stacked/complex glyphs, and dual-
script hierarchy (CJK + Latin ≈ Thai + Latin). Their leading and measure decisions
transfer to Thai far better than a Latin-only site's do. Aim for at least half the
shortlist from CJK.

Also acceptable and useful: type foundry specimen pages. They are long, purely
typographic, argue for a typeface, and have no imagery — structurally the closest
thing to what we are building.

════════════════════════════════════════════════════════════════
SEED CANDIDATES (verified to exist; measure these, then find more)
════════════════════════════════════════════════════════════════

Strongest structural matches to our brief:
  https://sakazuki.io            — Philosophy → 3 pillars → Founder. Almost exactly
                                    our section order. Awwwards Typography Honors
                                    May 2026 + SOTD Jun 2026.
  https://exat.hottype.co        — a one-pager whose entire content IS typography:
                                    About → Type Tester → Character Set → Design
                                    Space → OpenType → Language Support.
  https://taper.design           — long argumentative one-pager, "the strange story
                                    of a single bamboo rod". Built on Squarespace,
                                    which proves the coherence is systemic, not exotic.
  https://www.acquisition.com    — no imagery at all, numbers-with-provenance as
                                    proof, purely argumentative. Not an award site —
                                    included for structure only.

CJK, for leading and dual-script decisions:
  https://nippori.lamm.tokyo     — best JP/EN hierarchy found. Typography Honors
                                    Jan 2026.
  https://4wide.jp               — declares its own system on the page: PP Neue
                                    Montreal + Noto Sans JP, 12/6 column grid.
                                    The most legible build to reverse-engineer.
  https://tomoyaokada.com        — a numbered index as the entire interface, zero
                                    imagery.
  https://offbeat.kr             — bilingual KO/EN, restrained dark system.
  https://plan-az.com            — Korean, numbered cases 001–004, four-word value
                                    grid. Static HTML, easy to read.
  https://www.tamakiyoshida.com  — Kanji and Latin at equal hierarchical weight.

Latin, for scale discipline:
  https://synthetictheatre.com   — three-item nav ending in "Manifesto", sections
                                    numbered 001/002/003.
  https://elicyon.com            — run-together mixed-case headline system.
  https://www.museumofmoney.com  — numbered chapters ▼01–04, guided scrolling.
  https://normalisboring.es      — fragmented headline treatment, Spanish.

⭐ PREVIOUSLY UNMEASURABLE — now available to you, and high value:
Earlier research could not read these at all (JS shells or robots-blocked to a plain
fetcher). With a real browser you can render and measure them. Several are exactly
the type of long scroll-driven document we want to learn from:
  https://igloo.inc · https://www.aristidebenoist.com · https://deso.studio
  https://jungheonlee.com · https://15th.plus-ex.com · https://izanami-official.com
  https://shining.302chanwoo.com · https://pendragoncycle.com · https://ironhill.au
  https://dennissnellenberg.com · https://kprverse.com

FIND MORE — target 14–18 measured candidates total. Search paths that are known to work:
  https://www.awwwards.com/websites/winner_category_typography/   (winner table + dates)
  https://www.awwwards.com/websites/Japan/  · /South%20Korea/ · /Thailand/
  https://www.siteinspire.com/  → category "Typographic" (2,084 entries)
  https://onepagelove.com/      → the only gallery whose entire premise is one-pagers
  https://httpster.net/         → self-described typographic / minimal / brutalist
  https://www.typewolf.com/     → tells you which typefaces a site uses
  https://maxibestof.one/       → tracks fonts per site, has a Japanese filter
  https://orpetron.com/         → more Japanese work surfaces here than on Awwwards
Note: siteinspire and maxibestof have unstable numeric filter IDs in URLs — navigate
from the UI, do not guess IDs.

════════════════════════════════════════════════════════════════
THE MEASUREMENT — this is the actual deliverable
════════════════════════════════════════════════════════════════

Set up a headless browser harness (Playwright preferred; Puppeteer fine). For each
candidate, at TWO viewports — 1440×900 and 390×844 — do the following.

HANDLING REALITY FIRST:
- waitUntil networkidle, then an extra settle delay.
- Dismiss cookie/consent banners before measuring (they distort layout). Prefer the
  most privacy-preserving option if there is a choice.
- Scroll the full page height in steps first, so lazy content and scroll-triggered
  layout actually exist, THEN scroll back to top and measure.
- Some sites are WebGL/canvas-driven with almost no DOM. If a site has fewer than ~15
  text nodes, record it as NOT MEASURABLE and move on — it cannot teach us a grid.

EXTRACT THESE, per site, per viewport:

A. CONTAINER AND GRID
   - The dominant content container: its computed max-width, padding-inline, and
     margin behaviour. Find it by taking the most common (width, left) pair across
     text-bearing block elements.
   - Any real CSS grid: grid-template-columns, column count, gap.
   - Body/page horizontal padding at each viewport.

B. THE LEFT-EDGE TEST — do this carefully, it is the most important single number
   For each top-level section, find its first text-bearing element and record
   getBoundingClientRect().left. Then report:
     - the list of those values
     - how many DISTINCT values there are
     - the standard deviation
   Our hypothesis is that coherent sites share one or two left edges for the whole
   page, and incoherent ones have many. This test either confirms it with data or
   corrects us. Report it plainly either way.

C. VERTICAL RHYTHM
   - Computed padding-block-start/end of each top-level section.
   - Section heights in px AND as a fraction of viewport height.
   - How many sections are within ±3% of exactly 100vh (our "slide-deck" suspicion).
   - The greatest common divisor of all margin/padding values ≥4px, rounded — an
     estimate of their base spacing unit.

D. TYPE SCALE
   - Computed font-size, font-weight, line-height, letter-spacing and font-family for:
     h1, every h2, a representative h3, body paragraph, small/meta text, and any
     monospace label.
   - THE COUNT OF DISTINCT font-size VALUES on the whole page. This is a strong
     discipline signal: a systematic site uses roughly 6–10, an ad-hoc one uses 25+.
   - The ratio between consecutive sizes, sorted descending — is there a consistent
     multiplier?
   - Reading measure of the main body column, expressed in ch: measure the rendered
     width of a 100-character string in that exact font and size, then
     measure = columnWidth / (thatWidth / 100).

E. COLOR AND RESTRAINT
   - Every distinct color value actually used on text and backgrounds, with a count of
     elements using each. How few colors do they get away with?
   - Whether there is a persistent element (progress rail, section counter, sticky
     label) — and if so its position, width, and what it displays.
   - Whether the nav has an active/scrolled state (compare computed nav styles at
     scrollY 0 vs scrollY 2000).

F. SCREENSHOTS
   - Full-page screenshot at both viewports (fullPage: true).
   - Plus viewport-sized shots at 0%, 25%, 50%, 75%, 100% of scroll depth at 1440.
   Save as research/northstar/shots/<slug>-<viewport>-<label>.jpg, quality ~70.

G. ⭐ THE THAI STRESS TEST — do this for every candidate
   This decides whether the numbers are usable at all, so do not skip it.
   Build a local test page that applies the candidate's measured heading system
   (font-size, weight, line-height, letter-spacing, and container width) to OUR REAL
   Thai copy, rendered in OUR fonts (Kanit for display, Anuphan for body — the same
   Google Fonts the build uses, not the reference site's fonts).
   Use these strings:
     สร้างตัวตนที่เป็นของคุณ ไม่ใช่ของเทรนด์
     เทรนด์มาแล้วก็ไป ตัวตนอยู่ต่อ
     คุณคือครีเอเตอร์ที่รู้ว่าตัวเองคือใคร
     เปี่ยม ปุ๋ย หญิง ปฏิญาณ ฟื้นฟู เรื่อง ที่ กุ๊กกิ๊ก
   Then measure, at weight 700, whether any glyph ink extent from one line overlaps
   the line above — the same technique you already used to establish that our headings
   need line-height 1.30.
   Report per candidate: does their line-height survive Thai as-is? If not, what is
   the minimum Thai-safe value, and how much does that inflate their vertical rhythm?
   A candidate whose type system needs a +0.35 leading correction is a worse fit than
   one needing +0.15, even if it looks better — say so.

════════════════════════════════════════════════════════════════
DELIVERABLES
════════════════════════════════════════════════════════════════

Create research/northstar/ containing:

1. measurements.json — all raw extracted data, per site, per viewport. Machine-readable.

2. CANDIDATES.md — the document the client will actually read. For each site:
     - name, URL, country, award + date if any (with the award page URL you verified)
     - one line: what kind of document it is
     - the measured numbers as a compact table
     - LEFT-EDGE TEST result: distinct values, std dev — and your read of it
     - DISTINCT FONT-SIZE COUNT and the scale ratio
     - THAI VERDICT: usable as-is / needs +N leading / not viable, with the number
     - FIT FOR PLANC: 2–3 sentences on what specifically we would inherit from it
     - links to its screenshots
   Then a master comparison table ranking all candidates on: coherence evidence
   (left-edge + font-size count), Thai compatibility, content-shape similarity to
   ours, and how much of our existing build would have to change to adopt it.
   Mark your top 3 with a reason each — but DO NOT DECIDE. The client picks.

3. shots/ — all screenshots.

4. THAI-STRESS.md — the Thai test page results, with a short note on which type
   systems are structurally hostile to Thai and why. This is reusable knowledge
   beyond this decision.

════════════════════════════════════════════════════════════════
RULES
════════════════════════════════════════════════════════════════
- Do NOT modify anything in the existing PlanC build during this task.
- Do NOT copy any HTML, CSS, class names, or assets from any measured site into our
  project. Measurements and screenshots only. Screenshots are for the client's
  judgement, not for tracing.
- Separate what you MEASURED from what you INFERRED. If you could not measure
  something, say "not measurable" — do not estimate and present it as data.
- If a site fails to render, is robots-blocked at the browser level, or has too
  little DOM to measure, list it under a "could not measure" heading with the reason.
  Do not pad the list.
- Report the total number of sites attempted vs successfully measured.
- If a measurement contradicts an assumption in research/SITE-SKELETON.md — for
  example if the best-feeling sites turn out NOT to share one left edge, or if several
  coherent sites DO use exactly 100vh sections — say so directly. That file contains
  my guesses; your measurements outrank them.

When you are done, tell me the count of measured sites and your top 3 with reasons.
Do not start changing the build. The client picks the north star first.
```

---

## หลังจากนั้น
1. คุณเปิด `research/northstar/CANDIDATES.md` + ดูสกรีนช็อต แล้วเลือก **1 เว็บ**
2. บอกผมว่าเลือกอันไหน — ผมจะเอาเลขที่วัดมาแทนค่าที่ผมเดาไว้ใน `SITE-SKELETON.md` พร้อมปรับ 3 จุดให้เข้ากับภาษาไทย (leading, measure, ความแน่นของ display) แล้วออก patch prompt รอบสองให้ Claude Code ทำ refactor
3. ถ้าผลวัดขัดกับสมมติฐานของผม (เช่นเว็บที่รู้สึกกลมกลืนที่สุดกลับไม่ได้ใช้ขอบซ้ายเดียวกัน) ผมจะแก้ SITE-SKELETON ตามข้อมูล ไม่ใช่ตามที่ผมเขียนไว้
