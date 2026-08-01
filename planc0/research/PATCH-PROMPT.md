# PATCH PROMPT for Claude Code — copy the whole block below
_Run in the same session/folder as the build. This is a REFACTOR, not a rebuild._

---

```
The build works and passed every check. But the client's verdict is correct and it is
a gap in the brief, not in your work:

  "Right now it's just component pieces that look good individually
   but don't connect into one real website."

You implemented mechanical continuity exactly as specified — every inter-section gap
measures 0px, all 8 boundaries have a technique. What was never specified is the
SYSTEM that makes 8 sections read as ONE DOCUMENT. That's what this patch adds.

Read research/SITE-SKELETON.md — it is a patch to BUILD-BRIEF-FINAL.md, not a
replacement. Everything else in that brief still stands.

════════════════════════════════════════════════════════════════
DO NOT REBUILD. DO NOT REWRITE COMPONENTS.
════════════════════════════════════════════════════════════════

All 14 modules work and are verified. This task is: introduce a layout system, then
refactor each section INTO it. Behaviour stays identical; only placement, scale,
spacing and the connective tissue change.

DO NOT TOUCH, under any circumstances:
- Any component's logic or animation behaviour
- Your corrected thaiWords() — your scan-based version is correct, mine was broken
- line-height 1.30 — you measured it, it stays, do not "tidy" it back down
- The CONTENT block's values, the color tokens, the motion tokens
- Motion budgets (quantized 1/3, epic 1/2, pin 1/2, hover 1/2)
- Thai typography rules, the hard bans, the accessibility work
- The no-JS path, reduced-motion rules

════════════════════════════════════════════════════════════════
WHY IT FEELS DISCONNECTED — SIX CAUSES, ALL FIXABLE WITHOUT TOUCHING LOGIC
════════════════════════════════════════════════════════════════

1. NO SHARED GRID. Each section positions content its own way, so the left edge of
   text shifts between sections. The eye has to re-acquire the column at every
   boundary — which is exactly the sensation of "separate pieces".

2. NO TYPE SCALE. The brief gave you 64px, 7vw, 15vw as isolated values. Those are
   arbitrary numbers, not a scale, so heading size no longer communicates hierarchy.

3. NO SPACING SCALE. Each section breathes differently, which reads as separate
   slides rather than one document.

4. NO REPEATED SECTION ANATOMY. All 8 sections have different internal structure.
   Repetition is the mechanism that produces "same site" — its absence is felt even
   when every individual section is well made.

5. NO SPINE. Nothing persists to tell the visitor where they are in the journey, and
   the nav has no active state. Without that, there is no felt sense of moving
   through one thing.

6. THE 8 BOUNDARY RULES SIT ON DIFFERENT X-POSITIONS. This is the biggest one. You
   built 8 correct hand-offs, but because each sits at a different horizontal
   position they read as 8 unrelated lines instead of ONE line running the length of
   the page.

Plus one more the brief got wrong: any section exactly 100vh tall reads as a slide,
no matter how good the transition is.

════════════════════════════════════════════════════════════════
THE PATCH — SIX CHANGES, IN THIS ORDER
════════════════════════════════════════════════════════════════

── 1. ONE GRID, USED BY EVERY SECTION ──
:root{
  --page-max: 1440px;
  --gutter:   24px;                    /* 16px at ≤768px */
  --pad-x:    clamp(20px, 6vw, 96px);
  --cols:     12;                      /* 4 at ≤768px */
}
.container{
  width:100%; max-width:var(--page-max); margin-inline:auto;
  padding-inline:var(--pad-x);
  display:grid; grid-template-columns:repeat(var(--cols),1fr); gap:var(--gutter);
}

Content zones — nothing may be placed outside these:
  zone-text   col 2→8 (max 34ch)   | mobile col 1→4  — all paragraphs, subs, manifesto
  zone-wide   col 2→12             | mobile col 1→4  — headings, tables, pillars
  zone-full   edge to edge         | same            — word walls, marquee, hero, closing
  zone-aside  col 10→12            | stacks below    — depth markers, meta, side numbers

THE MOST IMPORTANT RULE HERE: zone-text and zone-wide both START AT COLUMN 2, in
every section, without exception. That produces a single invisible left edge running
the entire page. Verify it: getBoundingClientRect().left on the first text element of
each section must be IDENTICAL across all 8. Report those 8 numbers.

── 2. SPACING SCALE — replaces every ad-hoc padding/margin ──
--s1:4 --s2:8 --s3:12 --s4:16 --s5:24 --s6:32 --s7:48 --s8:64 --s9:96 --s10:144 --s11:200  (px)

No other spacing value may exist in the codebase, except 1px hairlines and
grid-derived values.
  section padding block:  --s10  (--s8 at ≤768px)
  sec-head → sec-body:    --s7   (--s6 at ≤768px)
  rows within a group:    --s5   (--s4 at ≤768px)
  eyebrow → heading:      --s3
Two exceptions: hero uses min-height:88vh; the closing section uses --s11 top padding.

── 3. TYPE SCALE — replaces 64px / 7vw / 15vw ──
--fs-display: clamp(38px, 9vw, 104px)   /* ONLY hero + closing. Nowhere else. */
--fs-h1:      clamp(30px, 5.4vw, 64px)  /* pillar names, the pinned sentence */
--fs-h2:      clamp(24px, 3.6vw, 42px)  /* every section heading */
--fs-h3:      clamp(20px, 2.2vw, 26px)  /* subheads, ledger figures */
--fs-num:     clamp(44px, 7vw, 88px)    /* the four proof numbers only */
--fs-lead:    clamp(17px, 1.7vw, 21px)  /* sub under a heading */
--fs-body:    16px
--fs-meta:    13px
--fs-mono:    11px                       /* eyebrows, LV. labels, depth, EN accents */

Every piece of text uses one of these nine. No loose vw font sizes, no off-scale px.
--fs-display is restricted to hero and closing because those are the opening and
closing of the build-up — if a third place uses it, there is no climax.
Keep the hero's interactive size control, but have it drive a scale factor on
--fs-display rather than a raw px value, so it stays inside the system.

── 4. REPEATED SECTION ANATOMY — the "one website" device ──
Every section renders this same skeleton, same order, same grid slots:

<section id="proof" data-sec="03" class="sec">
  <div class="container">
    <header class="sec-head">                     <!-- zone-wide -->
      <span class="sec-num mono">03</span>        <!-- teal, tabular-nums -->
      <span class="sec-eyebrow mono">ผลงาน</span>  <!-- teal -->
      <h2 class="sec-title">…</h2>                <!-- --fs-h2 -->
      <p class="sec-sub">…</p>                    <!-- --fs-lead, zone-text, optional -->
    </header>
    <div class="sec-body">…</div>                  <!-- existing component, unchanged -->
  </div>
  <div class="sec-out" aria-hidden="true"></div>   <!-- boundary rule, see 6 -->
</section>

sec-num and sec-eyebrow share one line, separated by a 1px teal rule --s6 long, and
sit flush to the column-2 edge — the identical position in every section.
Only exception: sections 1 (hero) and 8 (closing) omit sec-num/sec-eyebrow — they are
the cover and back cover — but they still obey the grid and the column-2 edge.

Eyebrow labels (add these to CONTENT, do not hardcode):
  01 เราคือใคร · 02 ทำไมต้องเรา · 03 ผลงาน · 04 ประสบการณ์
  05 พาร์ทเนอร์ · 06 บริการ · 07 ความต่าง · 08 เริ่มต้น

── 5. THE PEEK RULE — this is what kills the slide-deck feeling ──
a) NO section may be exactly 100vh tall. It is either taller (content) or shorter.
b) The hero is min-height:88vh, NOT 100vh. Section 2's heading must already be
   peeking above the bottom edge on first paint. That is a stronger invitation to
   scroll than any arrow or hint text.
c) At every scroll position where a section fills the viewport, at least 8vh of the
   NEXT section must be visible — its heading, its sec-num, or its sec-out rule.
d) Three deliberate exceptions, where filling the viewport IS the event: the two word
   walls and the closing section.

Verify programmatically: step through the page in 10vh increments and assert that an
element belonging to the next section is in the viewport at every step, excluding (d).
Report pass/fail and any failing scroll offsets.

── 6. THE SPINE — highest-impact change, costs almost nothing ──

6a) ONE CONTINUOUS VERTICAL LINE (fixes cause #6)
Every sec-out is a 1px teal rule at THE SAME X POSITION — the column-2 left edge —
height --s10, bridging the end of one section to the head of the next.
Result: scrolling the page shows ONE line running down it, interrupted by content and
resumed at each boundary. Seamlessness you can see, not just feel.
- Each draws itself with transform:scaleY(0→1), transform-origin:top, driven by that
  boundary's scroll progress, --ease-glide.
- At the two word walls, the line is swallowed by the wipe and re-emerges on the far
  side. That disappearance and return is what makes the set pieces feel like events
  inside one storyline rather than cuts to somewhere else.
- Verify: getBoundingClientRect().left is identical for all 8 sec-out elements.
  Report the 8 values.

6b) POSITION RAIL (desktop ≥1024px)
position:fixed, right edge, 44px wide, vertically centred:
- Current section number, large mono teal, --fs-h3, tabular-nums, crossfading on
  change (--t-base).
- Eight tick marks stacked vertically: current one SOLID CORAL (coral as graphic, not
  text — this complies with the color rule), passed ones teal, upcoming ones --fg at
  20%.
- aria-hidden="true". It is positional decoration; the real nav is above.
- At ≤1024px it collapses to a 2px progress bar under the nav, transform:scaleX()
  driven by whole-page scroll progress.

6c) NAV STATE (currently missing entirely)
- The link for the section in view gets a 2px teal underline, animated with
  transform:scaleX() — not border, so it can animate.
- Nav shrinks 64px → 48px, gains --bg background and a hairline bottom rule, once
  scroll passes 88vh (clearing the hero). --t-base --ease-settle.
- Drive 6b and 6c from ONE IntersectionObserver — do not write a second one.
- CAUTION: you already found and fixed a bug where matchMedia was evaluated once at
  boot and broke across the 768px breakpoint. Do not reintroduce that class of bug in
  the new observer — make any breakpoint check live.

Neither 6b nor 6c consumes motion budget: they are plain scaleX and crossfade, with
no stepped easing, no overshoot, no epic duration, no pinning, no hover dependency.

════════════════════════════════════════════════════════════════
PACING — SECTION HEIGHTS SHOULD NOT ALL BE EQUAL
════════════════════════════════════════════════════════════════
A page where every section has the same density reads monotone. Target heights:

  1 เราคือใคร     light        88vh          opening, one idea
  2 ทำไมต้องเรา   text-heavy   140–180vh     the reading stretch, builds pressure
    word wall 1                100vh         curtain 1
  3 ผลงาน         densest      90–120vh      visual peak
  4 ประสบการณ์    medium       110–150vh     human beat, slows down
  5 พาร์ทเนอร์    LIGHTEST     50–70vh       THE BREATH — deliberately short and airy
  6 บริการ        dense        160–220vh     the substance
    word wall 2                100vh         curtain 2
  7 ความต่าง      medium       130–170vh     emotional turn
  8 เริ่มต้น       light        90–110vh      release

Total ≈ 950–1200vh. Section 5 must genuinely be short and sparse — if you give it the
same density as the others, the whole page loses its only rest before the main
content, and the pacing collapses. Report each section's measured height.

════════════════════════════════════════════════════════════════
A REAL FOOTER — the current one is too thin for a business site
════════════════════════════════════════════════════════════════
Section 8 splits into two clearly separated parts, divided by a hairline:

  [ CLOSING ]  --fs-display heading · primary door · secondary door
  ────────── 1px teal hairline, zone-wide ──────────
  [ FOOTER — 4 columns desktop, stacking at 390px ]
    col 1  PlanC + one-line description + email
    col 2  Menu: เราคือใคร · บริการ · ผลงาน · เริ่มต้น
    col 3  Channels: IG · TikTok · YouTube · LINE
    col 4  Location / hours (placeholder ok) + "GMT+7"
  ────────── 1px hairline at --fg 12% ──────────
  [ BOTTOM ROW — --fs-meta, --fg-soft ]
    © 2026 PlanC · นโยบายความเป็นส่วนตัว · EN: made for people who refuse to be a copy

Location, hours and the privacy link may be visible placeholders — but the STRUCTURE
must exist. This is a large part of what makes a site read as a real business rather
than a course landing page. The privacy link can be href="#". The Thai time zone is
static text, not a live clock.

════════════════════════════════════════════════════════════════
CONSTRAINTS ON THIS PATCH
════════════════════════════════════════════════════════════════
- Page weight may increase by at most 15KB.
- No new dependencies.
- Every check that passed before must still pass: the 8 Thai test strings at weight
  700, coral never used as text, no horizontal scroll at 390px, Section 7 unpinned at
  390px, Section 3 as 2×2, reduced-motion behaviour, the JS-disabled path, focus trap,
  marquee pause, keyboard access to the Section 4 hidden detail, CONTENT↔markup parity.
- Add the eyebrow labels to CONTENT rather than hardcoding them in markup.

════════════════════════════════════════════════════════════════
REPORT WHEN DONE
════════════════════════════════════════════════════════════════
1. The 8 left-edge measurements for section content — must be identical.
2. The 8 left-edge measurements for sec-out rules — must be identical.
3. Peek-rule sweep: pass/fail per 10vh step, listing any failures.
4. Measured height of each section, against the pacing table.
5. Confirmation that no spacing or font-size value exists outside the two scales
   (show how you scanned for it).
6. Weight delta in KB.
7. Confirmation that all previously passing checks still pass.
8. Anything in this patch that conflicted with the existing build — stop and ask
   rather than guessing.

One judgement call I want your opinion on, not your silent decision: after the grid
and type scale land, some sections may look under-filled at desktop width because
they were designed without a column system. If that happens, tell me which sections
and what you'd do about it — do not invent new content to fill space, and do not
add imagery.
```

---

## เสร็จแล้วรันตรวจอีกรอบ
**Set 4B** จาก `research/RESEARCH-PROMPTS.md` — คำถามหลักของรอบนี้คือ "ตอนนี้เลื่อนจากบนถึงล่างแล้วรู้สึกเป็นชิ้นเดียวหรือยัง" ซึ่งเป็นสิ่งที่ 4B ถามอยู่แล้ว
