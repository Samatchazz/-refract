# BUILD PROMPT for Claude Code — copy the whole block below
_Run inside `Z:\Claude Code\planc0\` · Spec files live in `research/` but this prompt is self-contained — it does not depend on them._

---

```
You are building a production one-page website. Read this entire brief before writing any code.

════════════════════════════════════════════════════════════════
PART 1 — WHAT YOU ARE BUILDING AND WHY
════════════════════════════════════════════════════════════════

THE BUSINESS
PlanC is a 1:1 consulting agency in Thailand for content creators and influencers.
It is run by a working influencer who is still actively posting — not by a coach who
quit five years ago and now sells courses about it. That distinction is the entire
competitive position and the site must feel like it.

WHO VISITS
Thai content creators, roughly 10k–500k followers, who are tired. They have been
chasing trends, copying formats that worked for someone else, posting constantly,
and they still feel invisible and interchangeable. They are skeptical of gurus.
They have seen a hundred "grow your account" pitches. They will bounce instantly
if the site smells like a marketing funnel.

THE POSITIONING (every design decision serves this)
"Stop chasing trends. Find your own voice. Then engineer the algorithm around who
you actually are." The argument is: the algorithm does not reward people who look
like everyone else — it rewards people who are LEGIBLE. Being clearly yourself is
a growth strategy, not a compromise.

THE THREE SERVICE PILLARS
1. EXTRACT (ขุดตัวตน)     — dig out who you actually are, in 1:1 sessions
2. ENGINEER (วิศวกรรมอัลกอริทึม) — build a content system around that core
3. ESTABLISH (สร้างอาณาจักรของตัวเอง) — turn it into an asset you own

VOICE AND TONE
Sharp, honest, a little playful. Never corporate. The site is allowed to be blunt.
Banned vocabulary (Thai marketing filler): โซลูชั่นครบวงจร, ยกระดับ, แบบมืออาชีพ,
ครบทุกมิติ, เชิงลึกรอบด้าน. If a sentence could appear on any agency's website,
it is wrong.

LANGUAGE
Thai is the primary language. English appears only as small monospace accent labels
(e.g. "LV.1 — EXTRACT", "EN: trends expire. you don't."). If you deleted every
English word, a Thai visitor must still understand 100% of the site.

NO MASCOT
An earlier concept had a black cat mascot. It has been cut. Do not add any mascot,
animal, illustration, or character anywhere. The personality comes from typography
and motion only.

ALMOST NO IMAGERY
There is exactly one photograph on the whole site (the founder's portrait). There
are no product shots, no stock photos, no icons-as-decoration, no 3D. TYPE CARRIES
EVERYTHING. If a section feels empty, the answer is better typographic hierarchy,
not adding an image.

════════════════════════════════════════════════════════════════
PART 2 — THE TWO THINGS THAT DEFINE SUCCESS
════════════════════════════════════════════════════════════════

The client named two priorities. Everything else is subordinate to these.

1. SEAMLESS ("ความสมูท")
   The page must feel like ONE CONTINUOUS PIECE, not eight sections stacked on top
   of each other. Every single boundary between sections is a designed transition —
   never a hard cut, never a moment where the viewport is empty between two things.
   All motion shares one physics: one easing family, one duration scale. If two
   elements move with different personalities, the illusion breaks.

2. WOW ("ความว้าว")
   There must be at least one moment a visitor would screenshot or describe to a
   friend. But — and this is the hard part — the wow moment must MEAN something
   about the positioning (finding your real identity). Decoration that means
   nothing is a failure even if it looks good. In 2026, "motion for motion's sake"
   is specifically considered dated.

A test to apply to your own work: if you removed all animation, is the page still
good? If no, the design is leaning on motion instead of using it.

════════════════════════════════════════════════════════════════
PART 3 — OUTPUT FORMAT
════════════════════════════════════════════════════════════════

- Deliver ONE file: index.html with inline <style> and <script>.
- If it exceeds ~1500 lines, split into exactly three files: index.html, style.css,
  app.js. Never more than three. No build step, no bundler, no npm, no framework.
- Allowed dependencies: GSAP core + ScrollTrigger, loaded from CDN. Nothing else.
  If you can implement the scroll effects with IntersectionObserver + CSS instead,
  DO THAT and drop GSAP entirely — smaller is better and the effects here are simple
  enough that it is realistic.
- Total page weight budget: 1.5MB including fonts. This is a hard ceiling.

════════════════════════════════════════════════════════════════
PART 4 — SIX TRAPS THAT WILL SILENTLY RUIN THIS BUILD
════════════════════════════════════════════════════════════════

Read this part twice. Each of these fails without throwing an error.

── TRAP 1: Thai text shatters if you split it by character ──
Thai has NO SPACES between words, and vowels/tone marks stack ABOVE and BELOW the
consonant (four vertical zones, vs two in Latin).

GSAP SplitText's "words" and "lines" modes split on whitespace, then infer lines
from word offsetTop. With Thai, there is no whitespace — so your entire paragraph
becomes ONE "word" and ONE "line". It throws no error. Your stagger renders as a
single flat block fade and you will not understand why.

Use this utility everywhere you need word units. Write it once:

  const SEG = new Intl.Segmenter('th', { granularity: 'word' });
  const LOANWORDS = ['เทรนด์','คอนเทนต์','อัลกอริทึม','ครีเอเตอร์','อินฟลูเอนเซอร์','แพลตฟอร์ม'];
  function thaiWords(text){
    // Intl.Segmenter mis-splits Thai loanwords — verified: เทรนด์ becomes เท|รนด์
    // Protect them with placeholders, segment, then restore.
    let t = text;
    LOANWORDS.forEach((w,i)=>{ t = t.split(w).join('\u0000'+i+'\u0000'); });
    const out = [];
    for (const s of SEG.segment(t)) {
      const m = s.segment.match(/^\u0000(\d+)\u0000$/);
      out.push(m ? LOANWORDS[+m[1]] : s.segment);
    }
    return out.filter(w => w.length);
  }

Wrap each returned word in:
  <span style="display:inline-block; overflow:visible">…</span>
inline-block prevents illegal line breaks mid-word while still allowing breaks
between words. Each span is a complete shaping run, so marks position correctly.
Intl.Segmenter is Baseline since April 2024 — safe to rely on.

NEVER use anywhere in this project: .split(''), SplitText type:"chars",
per-character loops over Thai, animated letter-spacing, per-glyph rotate/scale,
scaleX on Thai words, character-by-character typewriter, or SVG <text> per glyph
positioned with x="Nch" (Thai stacked marks have zero advance width — this produces
garbage).

── TRAP 2: The display font is STATIC, not variable ──
Display font is Kanit. It is a static font with separate weight files.

- NEVER animate font-weight or font-variation-settings on headings. It will stutter
  and trigger a new font download per step.
- Load ONLY three weights: 400, 500, 700. Do not load all nine — the byte budget
  does not allow it.
- Smooth weight animation is possible ONLY on the body font, Anuphan, which IS
  variable (wght 100–700). The one effect that animates weight (the manifesto
  word-fill, Section 2) runs on body text, so it works. Keep it that way.
- The hero has an interactive weight control (Section 1). Because Kanit is static,
  that control must SNAP between the 3 loaded weights, not slide continuously.
  Stepped is fine here — it reads as deliberate rather than broken.

── TRAP 3: The coral accent cannot be text ──
Palette accent #FF9398 (coral) on white background = 2.13:1 contrast. That FAILS
WCAG AA. Computed, not estimated.

- coral is allowed ONLY as: solid fill, underline ≥3px, icon stroke.
- If text must sit on coral, the text is #111111 (8.88:1 — passes).
- The teal accent #2779a7 IS text-safe (4.80:1) — use teal for links, labels, rules.
- Easiest place to get this wrong: the cursor trail (Section "Global"), which emits
  tiny WORDS. Those words are text. They must be #111 or teal, never coral.

── TRAP 4: Six of the eight section boundaries have no built-in transition ──
The chosen transition style is two full-screen "word wall" set pieces. That covers
only 2 of 8 boundaries. The other 6 must use overlap-enter plus a handed-off rule
line (spec in PART 6). If you build only the two set pieces and let the rest butt
together, you have failed the primary goal (SEAMLESS). Every boundary gets something.

── TRAP 5: Heading line-height ──
The client previewed at line-height 0.96. That is unsafe for Thai: สร้าง carries a
tone mark and ที่ carries a vowel PLUS a tone mark (two stacked levels). On a
two-line heading, line 2's upper marks collide with line 1's descenders.

Start at line-height 1.05 with overflow:visible on every wrapping span. You may
lower toward 0.96 ONLY after rendering the real final headline text at weight 700
and confirming no collision.

── TRAP 6: overflow:hidden breaks scroll-linked animation ──
overflow:hidden creates a scroll container, which silently breaks CSS scroll
timelines and confuses scroll math. Use overflow:clip for any wrapper around
scroll-driven or masked content. Never hidden.

════════════════════════════════════════════════════════════════
PART 5 — DESIGN SYSTEM (use these exact values)
════════════════════════════════════════════════════════════════

Put this in ONE :root block. No color value or font name may appear anywhere else
in the codebase. Test: change --font-display to something else and the whole site
must change.

:root{
  /* ---- COLOR WORLD: "Playground" — light-first, white holds ~85% ---- */
  --bg:      #ffffff;   /* primary background */
  --bg-2:    #f4f9fc;   /* secondary surface (pale teal tint) */
  --fg:      #111111;   /* primary text — 18.88:1 on --bg (AAA) */
  --fg-soft: #555555;   /* secondary text — 7.46:1 (AAA) */
  --ac1:     #2779a7;   /* TEAL  — 4.80:1 (AA) — text-safe */
  --ac2:     #FF9398;   /* CORAL — 2.13:1 (FAIL) — graphic only, never text */

  /* COLOR MEANING — this is a build rule, not a suggestion:
     TEAL  = "the system's moves": links, labels, rules, depth markers, numbers
     CORAL = "the visitor's moves": hover states, ticked checkpoints, chosen items
     White dominates. Color enters through interaction and scroll, never as decoration. */

  /* ---- TYPE ---- */
  --font-display: Kanit, system-ui, sans-serif;    /* STATIC — never animate weight */
  --font-body:    Anuphan, system-ui, sans-serif;  /* VARIABLE wght 100..700 */
  --lh-display: 1.05;    /* do not go lower until tested — see TRAP 5 */
  --lh-body:    1.7;     /* Thai body needs ≥1.6 for stacked marks */
  --ls-display: -0.01em;

  /* ---- MOTION TOKENS — no easing or duration may exist outside this set ---- */
  --ease-glide:  cubic-bezier(0.25,0.1,0.25,1);   /* general movement */
  --ease-settle: cubic-bezier(0.22,1,0.36,1);     /* PRIMARY: entrances, reveals */
  --ease-sym:    cubic-bezier(0.6,0,0.4,1);       /* symmetric open/close */
  --steps-q:     steps(5,end);                    /* quantized — budget: 3 uses, 1 used */
  --t-micro: 150ms;   /* hover, cursor, ticks */
  --t-base:  400ms;   /* entrances, reveals */
  --t-slow:  800ms;   /* section boundaries */
  --t-epic:  1200ms;  /* budget: 2 uses, 1 used (preloader) */
  --stagger-word: 40ms;
  --stagger-row:  60ms;
}

FONT LOADING
Google Fonts, subset to thai + latin via unicode-range, display=swap.
Kanit: weights 400, 500, 700 only. Anuphan: variable wght 100..700.
Preload Kanit 500 (used by the hero). Font budget ≤300KB of the 1.5MB total.

MOTION BUDGETS (already allocated — do not exceed)
quantized/stepped moments: 3 max, 1 used (Section 4 counters)
--t-epic: 2 max, 1 used (preloader)
pinned sections: 2 max, 1 used (Section 7)
hover-dependent features: 2 max, 1 used (cursor trail)
overshoot/spring easing: not used at all in this build — do not introduce it

ENTER / MOVE / EXIT RULES
Enter: translateY 24px→0 + opacity 0→1, --t-base --ease-settle, word-level stagger.
  CRITICAL: do NOT use one identical fade-in for every element. A single global
  reveal applied everywhere is, in 2026, a recognized tell of template/AI-generated
  work. Each element type enters according to its role — headings differ from rules,
  rules differ from numbers.
Move: transform and opacity only.
Exit: elements never fade out mid-viewport. They are carried out by the boundary
  transition or they simply scroll away.

════════════════════════════════════════════════════════════════
PART 6 — PAGE STRUCTURE: 8 SECTIONS + ALL 8 BOUNDARIES
════════════════════════════════════════════════════════════════

Narrative spine: seen → provoked → shown proof → shown the human → shown the
company they keep → shown the path → shown their own future → invited.

HARD COPY RULE: there is NO call-to-action before Section 8. Direction markers
("01 / 08", "scroll down", "next ↓") are fine. Buttons that take the visitor away
are not. The whole page builds tension with typography and releases it once, at the
end. If you add a "book now" button to the hero, you have broken the concept.

BOUNDARY MAP — implement all eight:
  0→1  Preloader's final word travels up into the heading position (no cut)
  1→2  Overlap-enter + teal rule under hero stretches into manifesto's left rule
  2→3  ★ WORD WALL 1: full-screen "หลงทาง" → vertical wipe → "เจอตัวเอง"
  3→4  Rule under the last number continues into Section 4's timeline axis
  4→5  Timeline axis passes "you are here", thickens into partner strip's top rule
  5→6  Partner strip's bottom rule drops down and becomes pillar 1's "00m" marker
  6→7  ★ WORD WALL 2: full-screen "ตัวคนเดียว" → wipe → "มีทีม"
  7→8  Section 7's centre axis thickens into the closing section's top edge

WORD WALL SPEC (exactly 2 uses):
One word at full viewport scale in --font-display on --bg-2. Vertical wipe top→
bottom, --t-slow --ease-sym, second word enters through the same mask. At 390px,
scale the word down to fit — never wipe horizontally on a narrow screen, it reads
as a glitch.

OVERLAP-ENTER SPEC (the other 6 boundaries):
The next section begins translating in when the current section still occupies ~30%
of the viewport. There must be NO frame where the viewport is empty. Additionally,
a rule/line element hands off between them per the boundary map above.

──────────────────────────────────────────
SCROLL BEHAVIOUR (global, applies throughout)
──────────────────────────────────────────
Three fixed parallax layers. Do not add a fourth.

  BACK   1.15× speed + blur(2px) + opacity .35  — trend words (see CONTENT.trendWords)
  MID    1.00×                                   — all real content
  FRONT  0.92×                                   — pillar labels, depth markers, key numbers

The meaning: trends drift past fast and blurry; identity moves slowest and therefore
persists longest. Depth = permanence. This is why the layers exist — keep the
semantic assignment.

Implement with transform: translate3d() only. Cap displacement at ±8% of viewport
height. Use --ease-glide. Use native scroll plus scroll-behavior: smooth — do NOT
add Lenis or any smooth-scroll library; nothing in this build needs scroll velocity,
and it costs 10KB plus a permanent main-thread tax.

prefers-reduced-motion: parallax multipliers all become 1.0 (blur may stay).

──────────────────────────────────────────
SECTION 0 — PRELOADER
──────────────────────────────────────────
Purpose: the first 1.2 seconds state the thesis.

Cycle through the trend-word list, one at a time. Each word gets a strike-through
line drawn left→right over 180ms, then swaps to the next. Total ≤1.2s. The final
word — "คุณ" (you) — is NOT struck through. It then travels up and lands exactly in
the position of a word in the hero heading, while the background crossfades.
Use --t-epic --ease-settle for that handoff (this is the one epic use).

- Skip immediately if the user scrolls or taps.
- If fonts are ready in under 400ms, play a compressed 600ms version. A preloader
  must never be dead waiting time.
- prefers-reduced-motion: 200ms fade, no cycling.

──────────────────────────────────────────
SECTION 1 — "เราคือใคร" / WHO WE ARE (hero)
──────────────────────────────────────────
This hero is a TYPE SPECIMEN the visitor can play with. That is the wow moment and
also the argument: the site proves it takes typography seriously by exposing it.

Layout:
- Heading: 3 stacked lines, --font-display, weight 500, --lh-display, --ls-display,
  text-wrap: balance. 64px on desktop, clamp down to 34px at 390px.
- Below it, a small specimen control panel with a monospace label and TWO controls:
    (a) WEIGHT — stepped, 3 stops only (400 / 500 / 700), because Kanit is static.
        Use <input type="range" min="0" max="2" step="1"> mapped to those weights.
        It must snap visibly.
    (b) SIZE — continuous, font-size clamp 34–96px. Safe because it does not touch
        font files.
  Do NOT offer a letter-spacing control — tracking shifts Thai marks.
- Monospace caption under the controls: "ลองปรับดู — นี่คือฟอนต์จริงของเว็บนี้"
  plus "EN: type specimen, not a hero image"
- Direction marker "01 / 08" and "เลื่อนลง". NO button.

Accessibility: controls are real <input> elements with real <label>s, keyboard
operable. Exactly one <h1> on the page, containing real text. If you wrap words in
spans for animation, put aria-label on the container so screen readers get the
sentence.

──────────────────────────────────────────
SECTION 2 — "ทำไมต้องเรา" / WHY US (manifesto)
──────────────────────────────────────────
This is the argument section, and the effect IS the argument.

Single column, max-width 32ch, --font-body (Anuphan — the variable one; this is the
only place weight animation is allowed).

Every word starts at wght 200, blur(0.4px), --fg at 35% opacity — this state
represents the noise of trend-chasing. As the visitor scrolls, words fill one by one
to wght 600, full --fg, blur 0. Scrolling the manifesto is literally the act of the
visitor's own words overwriting the noise. Snap one word ahead of scroll so lines
complete crisply instead of dribbling.

Split words with thaiWords(). Insert "EN: trends expire. you don't." mid-block as a
teal monospace interjection. The final line — "คนที่ชัด ไม่ต้องตะโกน" — fills 1.5×
slower than the rest, as the section's landing.

──────────────────────────────────────────
SECTION 3 — "เราทำอะไรมา" / WHAT WE'VE DONE
──────────────────────────────────────────
The problem this section solves: a consulting service has nothing photogenic to
show. So the numbers ARE the imagery.

Four blocks. Each block: a large number at heading scale (--font-display, 500) with
a ONE-LINE PROVENANCE SENTENCE underneath it. No bare numbers anywhere — a number
with provenance reads as evidence; a number in a grid reads as decoration.

Count-up on entry via IntersectionObserver plus a small hand-written tween (~1KB, no
plugin). The real final value must be present in the DOM from the start so it is
correct with JS disabled. Use font-variant-numeric: tabular-nums and a fixed ch
width so counting digits never reflow neighbours.

At 390px: 2×2 grid. NOT one per row — four full-screen numbers kills the scroll.
Numbers in --fg, provenance in --fg-soft, units in teal.

──────────────────────────────────────────
SECTION 4 — "ประสบการณ์ของเรา" / OUR EXPERIENCE (founder)
──────────────────────────────────────────
A career timeline rendered as a level map. It includes the year the founder failed —
that is the point. Someone still in the game has both kinds of years; someone who is
only a coach has only the good ones.

One vertical teal 1px axis with "stations" at each year. Each station: a dot, the
year in monospace, and one line of text.
- Numbers in each row land in 3 discrete steps using --steps-q. This is the single
  quantized moment in the build (budget 1 of 3).
- A "you are here" marker at the present year: blinking cursor (opacity 1↔0, 1.2s,
  --ease-sym). Under prefers-reduced-motion, do not blink — render a solid coral dot.
- Hidden detail: long-press 600ms — OR Enter/Space via keyboard, this is mandatory,
  not hover-only — expands the failure-year row to reveal the real sentence.
  Implement as <button aria-expanded> with an aria-label describing what it reveals.

IMPORTANT — Sections 3 and 4 are adjacent and both number-heavy. They must not look
alike. Section 3 uses giant heading-scale figures (about clients). Section 4 uses
small monospace figures on a timeline rule (about the founder). Different treatment,
deliberately.

──────────────────────────────────────────
SECTION 5 — "พาร์ทเนอร์ของเรา" / OUR PARTNERS
──────────────────────────────────────────
Reality: this is a small agency with maybe 5–6 partners, not 30. The design must
make few partners look CURATED, not sparse.

Set partner names as TYPE in --font-display at one optical size — do not use logo
image files. This gives 0KB of assets, perfect optical alignment (no partner's mark
being 3× the visual weight of another), and the strip inherits theme colors
automatically.

Continuous marquee, 40px/s, linear. Duplicate the track ×4 so a single loop is not
legible as a repeat. Every duplicate beyond the first gets aria-hidden="true" so a
screen reader announces each partner once.

MANDATORY: a real pause control. WCAG 2.2.2 requires a mechanism to pause anything
that auto-moves for more than 5 seconds.
  <button type="button" aria-pressed="false">หยุด</button>
toggling animationPlayState. Wrap the animation itself in
@media (prefers-reduced-motion: no-preference) so reduced-motion users get a static,
readable row.

Group labels above the row in teal monospace: แพลตฟอร์ม · เอเจนซี · แบรนด์

──────────────────────────────────────────
SECTION 6 — "เราช่วยคุณได้ยังไง" / HOW WE HELP (3 pillars)
──────────────────────────────────────────
Three full-width rows, auto-accordion — exactly one open at a time, so each pillar
gets a solo moment. That matters for a 1:1 service: it mirrors undivided attention.

Row header: Thai pillar name at 7vw (--font-display), plus monospace teal
"LV.n — EXTRACT", plus a depth marker right-aligned: 00m / -12m / -30m.
The depth metaphor: the deeper you go, the more it is yours. -30m is the largest.

Behaviour: a row auto-expands when its header crosses 40% of the viewport; the
previous row collapses simultaneously. --t-base --ease-settle.
- Real <button aria-expanded>. A user click ALWAYS overrides auto behaviour — once
  they interact, stop auto-expanding for the rest of the section.
- Animate height with grid-template-rows: 0fr → 1fr (animatable, no measuring).
  Do not use height:auto with interpolate-size (Chrome-only).
- A 5-question FAQ follows pillar 3, as plain <details> elements. These are the
  questions people are embarrassed to ask (price, duration, minimum follower count,
  how soon you'd know it isn't working, whether they could do it alone).

──────────────────────────────────────────
SECTION 7 — "อะไรทำให้คุณต่าง" / WHAT MAKES *YOU* DIFFERENT
──────────────────────────────────────────
The emotional payoff. The visitor watches their own description change.

A pinned sentence in the centre of the viewport: "คุณคือครีเอเตอร์ที่ ___"
The sentence frame NEVER moves. Only the slot changes, driven by scroll progress:
  ตามเทรนด์  →  รู้ว่าตัวเองคือใคร  →  คนอื่นตาม
Each swap is a crossfade, --t-base. Do NOT slide the words — sliding reads as two
things swapping; crossfade reads as one thing changing. That difference is the whole
effect. Settled words are teal.

Below the sentence, a paired before/after comparison table. Rows must be aligned so
every "now" line sits directly opposite its counterpart. Stagger per pair (left
enters, right follows 120ms later) — the pairing does the arguing, so the word
"transformation" never has to appear.

At 390px: DO NOT PIN. Pinning eats the whole viewport and fights momentum scroll.
Instead swap the word once on entry, and let the table flow. The table's centre axis
rotates to horizontal and each pair stacks (before / rule / after) — which actually
reads better than desktop.
prefers-reduced-motion: show the final state immediately, no pin.

──────────────────────────────────────────
SECTION 8 — "จองเลย" / BOOK NOW (the close)
──────────────────────────────────────────
Two doors, deliberately UNEQUAL. Two visually equal options force a decision; one
recommendation plus an escape hatch does not.

Heading at 15vw (wrapping at 390px). No epic budget left — enter with --t-slow
overlap, not a set piece.

PRIMARY DOOR — "จองคุยฟรี 30 นาที" (book a free 30-min call)
  An <a> at display scale. Solid CORAL background with #111111 text (8.88:1 — this
  is the one legitimate way coral touches text). target="_blank" rel="noopener".
  ZERO JavaScript, no iframe, no embed.
  Why link out instead of embedding a scheduler: Calendly's booking.css is 464KB and
  render-blocking — about 31% of the entire page budget for a widget in the last
  section. Worse, ad blockers block scheduler scripts, which would silently delete
  the primary conversion path. A plain link cannot fail that way.
  Sub-line in --fg-soft: "ไม่มีค่าใช้จ่าย ไม่ต้องเตรียมอะไร"

SECONDARY DOOR — "ยังไม่พร้อมคุย? แอดไลน์มาถามก่อนได้"
  Body scale, not display scale. Teal link.
  Mobile: https://line.me/R/oaMessage/{percent-encoded ID}  (e.g. @planc → %40planc)
  Desktop (≥768px): ALSO render a QR code as inline SVG, generated at build time,
  next to the link, labelled "สแกนเพื่อแอดไลน์".
  This branch is mandatory: LINE's URL scheme does not work on desktop at all (their
  own docs state this). Without the QR, desktop visitors click and nothing happens.
  Do not ship a QR-generation library — inline the SVG.
  NEVER use the line:// scheme — it is deprecated for security reasons.

Footer: 4 nav links, social links, one micro-line.

──────────────────────────────────────────
GLOBAL — NAVIGATION
──────────────────────────────────────────
Fixed top bar, 64px. Wordmark left (text only — there is no logo file yet). Four
links right. Below 768px: a burger opening a full-screen overlay on --bg-2, items
entering with --stagger-row, closing with --ease-sym.
Use press-state on pointerdown, not hover — mobile is a first-class citizen here,
not an afterthought. The overlay must trap focus and return focus to the burger on
close. Anchor scrolling uses --t-slow.

──────────────────────────────────────────
GLOBAL — DUAL-VOICE WORDPLAY (the signature system)
──────────────────────────────────────────
This is the site's cleverest device and it is also its sales pitch made mechanical.

Designated copy spans carry a data-voice-alt attribute. The default text is polished
marketing Thai — the voice everyone uses. The revealed text is the blunt, honest
voice. Example pair:
  default:  "เราช่วยวางกลยุทธ์คอนเทนต์ระดับมืออาชีพ"
  revealed: "เลิกก๊อปสูตรคนอื่นสักที มาขุดของจริงในตัวคุณ"
The site keeps whispering its honest self underneath its public self — which is
exactly what PlanC sells to its clients.

- Desktop: hover triggers a mask wipe to the real voice, --t-base --ease-settle.
- Touch: tap-hold 400ms, OR auto-swap once when the span is centred in the viewport.
  Pick ONE behaviour per span, never both.
- Revealed voice is --fg at one weight heavier than default.
- Every such span must be keyboard reachable (<button> or aria-expanded).
- This effect never splits characters, so it is 100% Thai-safe.

──────────────────────────────────────────
GLOBAL — CURSOR TRAIL (desktop only)
──────────────────────────────────────────
On pointermove, shed tiny English words ("you", "own", "voice", "real") that scatter
and fade over 600ms. Cap 12 live nodes; reuse nodes rather than creating new ones.

- The shed words are TEXT, so they must be --fg or teal. NEVER coral (fails contrast).
- Gate behind @media (hover: hover) and (pointer: fine).
- Layer is aria-hidden="true" and pointer-events: none.
- On touch there is simply no cursor feedback. Do not add a tap ripple as a
  substitute — the hover budget is already spent.

════════════════════════════════════════════════════════════════
PART 7 — THAI TYPOGRAPHY RULES
════════════════════════════════════════════════════════════════

SAFE (and used in this build): word-level reveals and fills via thaiWords();
whole-word swaps; mask/clip reveals over intact text; variable-weight animation on
whole words or lines; stepped counters; word-level marquees; full-screen word walls.

FORBIDDEN on Thai text (fine on English accent labels): everything listed in TRAP 1,
plus animating weight on Kanit.

REQUIRED VALUES: body line-height ≥1.6 (using 1.7). Display ≥1.05 with
overflow:visible on wrapping spans. word-break: normal, line-break: strict.
<html lang="th">. English accents wrapped in lang="en" spans.

MANDATORY TEST STRINGS — render these at weight 700 in every animated block and
confirm marks are present, correctly positioned, and not clipped:
  เปี่ยม   (ป is an ascender consonant carrying a stacked vowel + tone mark — the
            single hardest case; if this fails the font or line-height is wrong)
  ปุ๋ย     (all four vertical zones at once)
  หญิง     (ญ's descender must disappear under the lower vowel)
  ปฏิญาณ   (two conflicting descender rules in one word)
  ฟื้นฟู · เรื่อง · ที่ · กุ๊กกิ๊ก

════════════════════════════════════════════════════════════════
PART 8 — HARD BANS
════════════════════════════════════════════════════════════════

- Do NOT copy code or assets from any reference site. Borrow patterns, never pixels.
  All code written from scratch. No hotlinking another site's files.
- No WebGL / three.js / Spline. A single Spline scene loads 800KB–2MB of runtime —
  the entire page budget for one decoration.
- No backdrop-filter / glassmorphism. Measured 15–30% FPS drops on real devices.
- No single global fade-in reused on every element (2026 AI-slop tell).
- No localStorage / sessionStorage.
- No carousels, sliders, autoplay video, or bento grids of uniformly rounded cards.
- No full-page scroll-jacking. Pinning is allowed only in Section 7, and must be
  disabled at 390px. Scroll-jacking is 2026's most criticised pattern because every
  frame competes with the browser's ability to respond to a tap, wrecking INP.
- No CTA before Section 8.
- No Lenis or smooth-scroll library.
- No animating anything except transform and opacity, with three sanctioned
  exceptions: font-variation-settings (wght) on Anuphan in Section 2; opacity of
  background layers at boundaries; stroke-dashoffset on the strike-through lines.

════════════════════════════════════════════════════════════════
PART 9 — ARCHITECTURE (required, so choices can change later)
════════════════════════════════════════════════════════════════

The client will change design choices repeatedly. Structure the code so a single
swap touches a single module.

ONE CONTENT BLOCK
  const CONTENT = { ... }
Holds all copy: hero lines, section headings, subs, bodies, the four proof numbers
with their provenance sentences, founder timeline rows, partner names, pillar
content, FAQ pairs, the before/after comparison rows, CTA labels and links, footer.
Plus trendWords[] (shared by three places: preloader, back parallax layer, word
walls) and voicePairs[] for the dual-voice system.
NO text may live in markup or logic. Pull the actual Thai strings from
research/copy-draft.md verbatim — do not write your own copy, and do not translate
anything to English.

ONE THEME BLOCK
The :root from PART 5, complete. No color value or font name anywhere else.

ONE COMPONENTS MAP
  const COMPONENTS = {
    I1: initPreloader,      A5: initHeroSpecimen,   B2: initParallax,
    C1: initDualVoice,      D2: initWordWalls,      E1: initWordFill,
    P2: initCounters,       G2: initTimeline,       K3: initMarquee,
    F1: initAccordion,      Q2: initPinnedSentence, H1: initDoors,
    J1: initNav,            L3: initCursorTrail
  };
One component = one labelled CSS block + one init function. If module X needs to know
module Y exists, declare it in a comment at the top of X — never discover it at
runtime.

FILE HEADER COMMENT
  /* PlanC — PICKSET M4-T*(PATH A)-A5-B2-C1-D2-E1-P2-G2-K3-F1-Q2-H1-I1-J1-L3 */

IMAGE SLOTS
  slot-founder-portrait  800×1000 (4:5) — the only photograph on the site
  slot-og-image          1200×630
  slot-line-qr           240×240 (inline SVG, generated at build)
No logo slot (text wordmark). No partner logo slots (names are type).
Every slot ships with a placeholder built from theme tokens so the site looks
complete before real assets exist.

FUTURE FONT SWAP
The client may later buy premium fonts (Aperçu Thai Pro Variable + Thonglor Soi 4).
That swap must be achievable by editing --font-display / --font-body and the font
loading block ONLY. If it would require touching component JS, your font handling
has leaked — fix the leak.

SEO
Title, meta description, OG tags from copy-draft.md. lang="th". Canonical. Proper
landmarks (header/main/section/footer) with exactly one <h1>. JSON-LD
ProfessionalService populated from CONTENT. SVG favicon.

════════════════════════════════════════════════════════════════
PART 10 — MISSING DATA: USE PLACEHOLDERS, INVENT NOTHING
════════════════════════════════════════════════════════════════

Not yet supplied by the client:
  every [N] figure · real years in the founder timeline · the founder photograph ·
  the Cal.com booking link · the LINE Official Account ID (needed for both the deep
  link and the QR) · real partner names

The site must build and look complete with these as visible placeholders.
DO NOT fabricate plausible-looking numbers, even though it would look better. The
whole credibility argument of this site is "receipts, not promises" — inventing
numbers would poison it. Leave [N] visible.

════════════════════════════════════════════════════════════════
PART 11 — WHEN YOU FINISH, REPORT THESE
════════════════════════════════════════════════════════════════

1. A checklist table: item | pass/fail | evidence or reason. Cover:
   - Thai integrity: which test strings you rendered, at what weight, in which
     animated blocks, and the result. Confirm no .split('') or chars-mode anywhere.
     Confirm the loanword override works (เทรนด์ stays intact).
   - Heading line-height: what value you settled on and whether you verified the
     real headline text for mark collision.
   - All 8 boundaries: name the technique used at each one. No boundary may be a
     hard cut.
   - Coral never used as text anywhere, including the cursor trail.
   - Motion budgets: quantized moments used, epic used, pins used, hover-dependent
     features used.
   - 390px: no horizontal scroll, Section 7 not pinned, Section 3 is 2×2, burger
     works, tap-hold works, cursor layer disabled.
   - Accessibility: full tab pass, visible focus, aria-expanded on accordions,
     overlay focus trap and restore, marquee pause button present and working,
     keyboard path to the Section 4 hidden detail.
   - reduced-motion and JS-disabled: describe what the page looks like in each.
2. Actual total page weight, broken down: HTML/CSS/JS vs fonts vs everything else.
   If it exceeds 1.5MB, say what you would cut first. Do not stay silent about it.
3. Anything in this brief that contradicted itself or could not be built as
   specified. STOP AND ASK rather than guessing and proceeding.

Full spec with additional rationale, plus the complete Thai copy, is in:
  research/BUILD-BRIEF-FINAL.md
  research/copy-draft.md
Read copy-draft.md for the actual Thai strings — that file is the source of truth
for every word on the site.
```

---

## After the build — run these two reviews

From `research/RESEARCH-PROMPTS.md`:
1. **Set 4A** — catches what's broken (Thai integrity, 390px, budget, contrast, a11y)
2. **Set 4B** — catches what isn't broken but isn't good (is the wow real? is it actually smooth?) — this one matters more because it's harder to fix

## Next round — changing a choice
Re-pick in `research/DECISION-CONSOLE.html`, get a new PICKSET, then use **Set 2B** from RESEARCH-PROMPTS.md, which forces the builder to touch only the changed module. Switching to the premium fonts touches the THEME block alone.
