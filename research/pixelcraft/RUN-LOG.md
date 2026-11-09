# RUN-LOG — pixelcraft teardown

## 2026-08-01T08:52Z — P1 capture — DONE

- Pre-checks:
  - `node -e "import('playwright')…"` → `OK` (playwright 1.62.1 already installed; `npm i` skipped)
  - `.gitignore` already contains the four `research/pixelcraft/out*/…` exclusion lines → nothing appended
  - `npx playwright install` NOT run (per BRIEF §3.1)
- Command: `node research/pixelcraft/scrape.mjs --url https://pixel-craft.cmsmasters.studio/`
  - exit code 0 · 08:43:51Z → 08:51:07Z (~7.5 min) · browser: installed Chrome 150
- Captures: home_1440 (deep), home_390 (deep), page1/2/3_1440 (shallow)
- Theme identity (§3.1a): title "Pixel Craft"; themeHints = pixel-craft 1.0.0, cmsmasters-elementor-addon 1.25.1, elementor → PASS
- Key numbers: home_1440 sections=25, docH=27773; home_390 sections=24, docH=34542
- Libs: Swiper, imagesLoaded, anime.js, jQuery 3.7.1, Elementor. **No GSAP/ScrollTrigger** → libprobe has no exact pin data; all build constants must come from probe-effect.mjs (source 2)
- Scroll analysis (1440): pinned=4, hscroll=0, parallaxSlow=8, parallaxFast=0, reverseParallax=0, opacityReveal=3
- Hover: 43 probed, 6 changed, 0 magnetic (390: 38/2/0)
- Network: 240 responses, 3685 KB measured, 0 unmeasurable (1440)
- Console errors: 0 (both viewports)
- `_capture_meta.json`: warnings=[] · notCaptured=[] · no fatalError
- Gate "scraper exits 0": PASS
- Stopped after P1 to show owner section/effect counts + warnings, per owner's instruction in chat (2026-08-01)

## 2026-08-01T09:05Z — P2 verify — DONE

- Command: `node research/pixelcraft/scripts/verify_capture.mjs` → exit 0
- G0 PASS (real URL, no fixture warnings) · G1 PASS (25 sections, none >6vh) · G2 PASS (54/54 shots byte-distinct)
  · G3 PASS (15 scroll-effect rows) · G4 PASS (0 console errors) · G5 PASS (notCaptured empty)
- Wrote `out/derived/verify.json`

## 2026-08-01T09:10Z — scope finding + owner decision

- **Finding:** the captured root URL is CMSMasters' theme-sales landing page ("Create your Branding
  Agency website with Pixel Craft", "Purchase now", widget-feature sections), NOT the agency demo.
  The actual demos are `/main/`, `/main/home-two/`, `/main/home-three/` (captured shallow as page1–3).
- Speculative deep capture of `/main/` run into `out-main/` (exit 0, labels main_1440/main_390) so no
  path was blocked while asking. Note: its pickSections fell back to tall-children (4 sections) — would
  need a pickSections pass before ever being promoted to primary.
- **Owner decision (chat, 2026-08-01): "เอาตามเดิมมาก่อน ค่อยมาขยับเพิ่มลดกันทีหลัง"** — keep the root
  landing capture (`out/`, label `home`) as the primary basis for the teardown and skeleton; adjust
  later if needed. `out-main/` kept as secondary, for the one FINDINGS comparison paragraph only (§3.3).

## 2026-08-01T09:55Z — P3 derive — DONE

- `scripts/derive.mjs` (new) → out/derived/{sections 14.9K, typescale 1.5K, palette 6.6K,
  effect_section_map 4.4K, widget_settings 20.0K}.json — all under the 40 KB budget
  (palette needed two trims: clip lists + only theme-level color vars)
- `scripts/build_effects.mjs` (new) → out/derived/effects.json (21.1 KB): **E-numbering frozen**,
  21 effects E01–E62 + 10 recorded absences (no cursor/tilt/preloader/smooth-scroll/WebGL/split-text/
  magnetic/grain/GSAP/horizontal-scroll)
- probe-effect batches (all exit 0, 20 runs total → out/effects/*.json):
  - batch 1: marquee S01/S08 on container = 0 px/s (wrong target — container doesn't move);
    sticky S11/S15/S21 = "no animated channel" ×3 → positive confirmation of native position:sticky
  - batch 2: marquee S01 __inner −45.1 px/s, 2 copies, 42.08 s/copy · parallax S05 speed2 travel −200px
    (rms 0.058, sigmoid because probed range includes dwell; declared timing linear) · fixed cluster
    −40px cubic-bezier(0.39,−0.06,0.54,1.17) rms 0.018 · bgfloat ~16.0s observed vs 15 declared ·
    headroom: no channel (header absolute, headroom inactive — no .headroom-* in DOM) ·
    hover ×4 (swap-button/featured-box/image-scroll/accordion): all lift 0 / scale 1 / no magnet /
    no tilt — hover language is color swap + image pan, not movement
  - batch 3: S08 marquee under scroll sweep = time-aliasing (−1533px over 61 waits ≈ 75 px/s);
    S17 parallax retries (861222b, 50f9064) still no motion → 2-attempt limit hit, recorded not-measured
  - batch 4: **modified probe-effect.mjs — added `--scrollto` to marquee mode** (JS marquees only run
    in-viewport; sampling at scroll 0 reads 0). marquee S08 visible: **−75.2 px/s**, 22.98 s/copy
- Mechanism laws recovered: `cms_scroll_vertical_speed × 100 = travel px` (speed 2→−200, 0.4→−40);
  marquee `px/s ≈ speed × 30` (1.5→45.1, 2.5→75.2)
- Widget constants mined from rendered data-settings: marquee gap 120/100 · fancy-text 2500 ms loop,
  60 px reveal distance · counter 2000 ms → 92 · carousel 10000 ms transition + 500 ms autoplay + 80 px
  gap · accordion hover, item 3 default · before-after click 55% horizontal · time-popup id 50 start 200
  · sticky offset top 40 (S21 also bottom 130) · bg float ±5% 15 s
- Gate "every section and effect has an ID; every to-build effect has a measured constant": PASS
  (unmeasurables carry explicit "not measured — reason" per rule 1)

## 2026-08-01T11:05Z — P4 SECTIONS.md — DONE

- Viewed all 25 section screenshots to write honest structure descriptions (no theme copy quoted)
- derive.mjs extended: widget keys de-dotted (citation checker limitation), widget_census.json added,
  widgetPlacements appended into effect_section_map.json (canonical "where" source per §4.3)
- `SECTIONS.md` written (Thai): Table A = S00 + S01–S25 · Table B = 21 effects E01–E62 + absences
  + "3 เอา / 3 ตัด" argued from Plan C positioning
- check_citations: **200 citations, 0 failed** (2 fixes: format-illustration line matched the regex;
  featured-box delay cited the wrong array index) — full output pasted into the document

## 2026-08-01T11:25Z — P5 FINDINGS.md — DONE

- `FINDINGS.md` written (Thai), structure mirrors research/xxix/FINDINGS.md: capture record · stack
  (no GSAP; page weight 240 responses / 3.6 MB measured / 0 unmeasured, 81% images) · layout system
  (Elementor flex, 1280 container, breakpoints 768/1181/1601) · type scale (rem=18px! no clamp();
  140px display lh1.0 + serif-italic inserts; Thai leading warning per fonts/type.css floors) ·
  palette (#111010/#97FC55/#545454/#F5F5F5) · effect-inventory prose · rebuild cheat-sheet ·
  one comparison paragraph vs out-main (/main/: 200px display, video ×1, pinned+fast-parallax language)
- check_citations: **72 citations, 0 failed** (1 fix: blue accent had a placeholder cite) — output pasted
- GATE reached: both documents shipped before skeleton work; "3 take / 3 drop" posted (also in SECTIONS.md).
  Per §6.1 not waiting for a reply — proceeding to P6.
- Owner (chat): questioned the 3-take/3-drop — clarified it is BRIEF §5.3/§6.1's own requirement and
  advisory only; confirmed nothing is excluded from the build (E12/E31/E61 all implemented). Owner:
  "ต่อเลย" then "ทำต่อจนจบเลยนะ" — run through to P8.

## 2026-08-01T13:10Z — P6 skeleton — DONE

- `skeleton/`: index.html + sections.json GENERATED from `_gen.cjs` (single source of truth; rerunnable;
  my own addition beyond the §6.2 file list, documented in skeleton/README.md), styles.css, effects.js
  (one rAF + one IO), debug.js (badges, KeyD/KeyT/?, ?debug sliders), filler-th.js (?fill=th),
  check.cjs, serve.cjs (:8123), README.md (Thai), fonts/ copied from ../fonts
- 287 tokens, all unique, grammar per §6.4 (+ POP- prefix for the popup dialog slots, noted in README)
- All 21 effects built (none skipped): E30/E31/E41/E61 marked partial (unmeasurable constants chosen +
  tunable in ?debug, reasons in sections.json); absent-on-source mechanisms (cursor/tilt/preloader/
  smooth-scroll/headroom) deliberately not built
- check.cjs: ALL TOKEN CHECKS PASS

## 2026-08-01T13:55Z — P7 selfcheck — DONE (ALL CHECKS PASS)

- `scripts/selfcheck.mjs` (new): serves skeleton, drives Chrome; console=0 · 26 sections in order ·
  tokens bidirectional · heights 23/25 within ±10% (S11 +47%/S15 +56% explained in skeleton/README.md —
  probe heights for those two are pre-lazy-mount lower bounds; real S11 screenshot is 2775px) ·
  no external URLs · 10 sampled selectors absent from theme CSS · motion 18/18 via computed values
  (scroll-stepped trio + time triple + hover/click/timer) · no overflow at 360/768/1440 · JS 16.4 KB < 25
- Bugs found & fixed during P7 (all mine, none in the measurement):
  1. popup[hidden] still intercepted clicks — display:grid beat the hidden attribute
  2. hero .wrap pushed 3232px off-screen — marquee track's max-content width widened S01's grid column
     (fix: grid-template-columns minmax(0,100%)) — invisible visually because of overflow:clip
  3. selfcheck itself: instant scroll jumps never fire IO for skipped elements; typed rotator's
     measured 2500ms rest window aliased a 900ms sample pair; burger only exists ≤768px
- favicon data: URI added (404 was the only console error)

## 2026-08-01T14:40Z — P8 content map + closeout — DONE

- Read `plancbusiness-research/plan-c-website-copy.md` in full; numbered C01–C12 in file order
- `CONTENT-MAP.md` written: mapping table + list 1 (sections with no content — S05/S09/S23 map to the
  copy file's 🔴 bans exactly as §9 predicted, plus 12 more with reasons) + list 2 (homeless content:
  C03 data tables, C11 FAQ, better C10 pricing row — build specs described, no copy invented) +
  list 3 (C06/C07 are other-page blocks per the copy file's own annotations)
- `REPORT.md` written with raw selfcheck output embedded (ALL CHECKS PASS) + Needs-a-decision table
- Appended pixelcraft entry to `HANDOFF-plan-c.md` (append-only exception; states plainly it is a
  separate site from griflan-mirror)
- git confirmed: no files under out*/shots|dom|css|js reach git (out* patterns cover out-main/ too)
- Files touched outside research/pixelcraft/: HANDOFF-plan-c.md (append) only
- **RUN COMPLETE** — _state.json = P8 done

## 2026-08-01T16:05Z — post-run: reference mirror (owner request)

- Owner asked to "copy everything first, separate later" — flagged that this reverses the dated
  2026-07-31 from-scratch decision and repeats the griflan pattern (REVIEW §5), and that theme code
  is unlicensed. Offered three paths; **owner chose: private reference mirror only** (skeleton stays
  the build; nothing copied into it).
- `mirror.cjs` (new): serves the captured DOM pages from out/ + out-main/ at :8124 — private
  measurement-copy viewer per BRIEF §0.2. Assets hotload live from the demo host (needs internet).
  Verified rendering matches the live theme. Never ships, never a build basis.
