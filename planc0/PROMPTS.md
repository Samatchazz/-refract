# PlanC0 — Final Prompts (A = Cowork research · B = Claude Code build)

Workflow: วาง A ใน Cowork ตอนนี้ → กลับมาเปิด `options-gallery.html` + กา `SELECTION.md` (~10-15 นาที)
→ ส่ง SELECTION.md กลับให้แชทเดิม finalize → วาง B ใน Claude Code → ได้เว็บ
ทุกไฟล์อยู่ใน `Z:\Claude Code\planc0\` เท่านั้น

---

## PROMPT A — วางใน Cowork (RESEARCH & SPEC ONLY)

```
# MISSION — RESEARCH & SPEC ONLY (a coding agent builds later from your files)
Research and fully specify a one-page website for "PlanC" while I'm away.
Do NOT build. Do NOT make final creative decisions — I decide when I
return. Your job: gather options, rank them, prepare everything so my
choosing takes 10 minutes and building needs zero questions.
Work autonomously; never wait for me mid-research; log every assumption.

# WHAT PLANC IS (all draft copy grows from this — Thai leads)
1:1 consulting agency for creators/influencers who want to build a REAL
identity of their own — run by an actual working influencer, not a
theorist. Positioning: stop chasing trends, find your voice, engineer
the algorithm around WHO YOU ARE. Service pillars: EXTRACT (ขุดตัวตน) /
ENGINEER (วิศวกรรมอัลกอริทึม) / ESTABLISH (สร้างอาณาจักรของตัวเอง).
Brand mascot: black cat (the logo is the word "PlanC" shaped like a
cat — P is the cat, C is the tail). Tone: sharp, honest, a little
playful — never corporate-bland.
Note: a separate cat-platformer scroll experiment exists elsewhere;
THIS is the main agency site — the mascot appears as accents only.

# CREATIVE DIRECTION
An award-level site ASSEMBLED from the best components of multiple
award-winning sites — borrow PATTERNS, never pixels. Priorities:
1) SEAMLESS above all — one continuous piece, unified motion language,
   every section boundary designed as a transition, not a cut.
2) Typography-first beauty with a coherent WORDPLAY system — scrolling
   should feel gorgeous because of type.
3) Thai leads, English accents.
Palette: B&W-first (ink #111 / paper #fcfcfa), fully re-skinnable via
variables.

# DECISION RIGHTS — READ CAREFULLY
You RANK and RECOMMEND — you never decide. For every component: score
all options with the rubric, mark "RECOMMENDED ★" on your #1 with a
2-line reason, and STOP THERE. Final choices are all mine, made via
SELECTION.md when I return. Do not write any spec as if a choice were
already final.

# TWIST PLAYBOOK (mandatory method — apply to every option you log)
For EACH option, propose TWO twists:

TWIST-M (mechanical) — change ≥2 axes: geometry/shape · trigger
(hover↔scroll↔velocity↔click) · timing (smooth↔stepped/quantized) ·
direction/axis · medium (image↔text↔shape) · content behavior.
Baseline only — never sufficient alone.

TWIST-B (brand lens) — re-motivate the pattern through ONE PlanC lens:
  1. THE CAT — motion borrows cat physics: tail-flick ease curves,
     pause-then-pounce timing, blink reveals, paw-step staggers, the
     logo's curled-C tail as a recurring curve/path motif.
  2. GAME DNA — quantize borrowed smoothness into sprite-like steps at
     key moments, HUD-style mono labels, level/checkpoint framing,
     satisfying land/collect feedback on interactions.
  3. IDENTITY THEME (EXTRACT→ENGINEER→ESTABLISH) — text effects must
     MEAN something: e.g. a scramble effect becomes "words trying on
     other creators' voices, crossing them out, then settling on your
     own words"; scattered letters assemble into the headline; a
     marquee becomes a stream of trend-words the scroll leaves behind.
  4. POKER/STRATEGY (optional, subtle) — card-flip reveals, chip-stack
     counters, read-the-table hover states.

Twist rules:
- The build will use TWIST-B with TWIST-M as support; mechanical-only
  twist = failed twist, redo it.
- Every wordplay effect must pass the MEANING test: it expresses the
  positioning (finding your real identity), not decoration.
- Source-spreading: never take more than 2 components from the same
  reference site.
- Composite test: a design-literate visitor seeing my site and the
  reference should think "same school, different animal" — if "same
  site reskinned", the twist is too weak.

# RESEARCH SCOPE & DEPTH TIERS
Scan ≥15 award-level sites (2023-2026 preferred). Verify every URL
loads; describe only what you actually observe; dead site → find a
replacement and note it. Seeds: kprverse.com, poolsuite.net,
henriheymans.com, kwokyinmak.com, bluxstudio.com, nikolaradeski.com,
obys.agency, basement.studio, locomotive.ca + awwwards.com,
godly.website, minimal.gallery, siteinspire.com. Go beyond the seeds.

TIER 1 — deep research, ≥4 options each (these make or break the site):
  A. Type-first HERO
  B. Global SCROLL EXPERIENCE (smoothing, pinning, how the page flows)
  C. Page-wide WORDPLAY SYSTEM
  D. SECTION TRANSITIONS (the seamless machinery)
TIER 2 — ≥3 options each:
  E. Manifesto scroll-reveal   F. Services (3 pillars)
  G. Founder credibility        H. Big CTA + footer
TIER 3 — ≥2 options each, keep simple:
  I. Preloader   J. Nav + mobile menu   K. Social proof strip
  L. Cursor/touch feedback

# SCORING RUBRIC — score every option 1-5 per axis, show totals:
  fit to PlanC positioning · seamless compatibility · mobile survival
  at 390px · build cost (favor cheap) · wow-per-kilobyte ·
  twist strength (distance from source + how PlanC-motivated)

# SPECIAL SECTION 1 — THAI TEXT ANIMATION (mandatory research topic)
Most award-site text effects assume English. Thai has no spaces between
words, and vowels/tone marks stack above/below consonants — naive
letter-splitting SHATTERS Thai text. Research safe Thai splitting
(Intl.Segmenter word/grapheme segmentation, CSS approaches; which
effects are Thai-safe vs EN-only). Deliver a "Thai-safe effects
whitelist" with implementation notes.

# SPECIAL SECTION 2 — SEAMLESS SPEC (mandatory)
In BUILD-BRIEF.md, write the page as ONE journey: ordered sections
where EVERY boundary has an explicit transition spec (technique,
duration, what element carries the eye across, what persists). Plus a
unified MOTION GRAMMAR table: how things enter/move/exit, easing +
duration tokens all components must share. No motion outside the grammar.

# DELIVERABLES — save into Z:\Claude Code\planc0\research\ if this
# session has folder access; otherwise attach every file as downloads
1. component-map.md — per component: options table (site | URL | what I
   observed | TWIST-M | TWIST-B) + rubric scores + RECOMMENDED ★ marks.
   No final picks anywhere.
2. options-gallery.html — ONE self-contained page I can skim in 10
   minutes: each component = a row of option cards (site name, link,
   1-line what-it-does, both twists, score, ★). Screenshot thumbnails
   if you can capture them; clean text cards if not.
3. SELECTION.md — my ballot: every component listed with checkboxes
   [ ] option 1 [ ] option 2 [ ] ... [ ] auto (use your ★), plus a free
   "note to builder" line per component.
4. BUILD-BRIEF.md — written PICK-AGNOSTIC: full build spec for the ★
   set as the reference implementation, PLUS a "swap note" per
   alternate option (3-5 lines: what changes if I choose it), so
   finalizing after my ballot is an edit, not a rewrite. Include:
   page structure, per-section spec (content/layout/motion/transition
   into next), motion grammar + tokens, Thai-safe effects whitelist,
   hard rules (100% original code; zero copied assets/hotlinks; Google
   Fonts Thai+Latin only — recommend an exact pairing; ≤1.5MB;
   transform/opacity only; 390px-first; real HTML text; reduced-motion
   fallback), easy-edit architecture (single CONTENT block, single
   THEME block, named image slots WITH dimensions), SEO basics
   (title/meta/OG), and a Definition of Done checklist for the builder.
5. copy-draft.md — full draft Thai copy, per section: headline (≤8 คำ) /
   sub (≤2 ประโยค) / body (≤60 คำ) / CTA label — on-positioning, not
   lorem; EN accent lines marked.
6. DECISIONS.md — assumptions, uncertainties, honest gaps.

# FINALIZE PROTOCOL (runs when I return and send back SELECTION.md)
Apply my ballot to BUILD-BRIEF.md → run a coherence pass on MY chosen
set (if two of my choices clash stylistically or technically, say so
plainly and propose the smallest fix — do not silently obey and do not
override me) → output BUILD-BRIEF-FINAL.md. Only that file goes to the
builder.

# SELF-AUDIT before finishing (show it ticked)
[ ] Tier 1 has ≥4 verified options each; Tier 2 ≥3; Tier 3 ≥2
[ ] every option has BOTH twists; no mechanical-only twists
[ ] no source site used for >2 components
[ ] every section boundary has a transition spec
[ ] Thai-safe whitelist exists with implementation notes
[ ] SELECTION.md ballot covers every component incl. "auto" boxes
[ ] copy-draft complete per structure; no lorem
[ ] zero final decisions made on my behalf
[ ] nothing cited that you didn't actually open
```

---

## PROMPT B — วางใน Claude Code (BUILD)

```
Read Z:\Claude Code\planc0\research\BUILD-BRIEF-FINAL.md — this file
only (ignore all drafts) — plus copy-draft.md and component-map.md for
context. Then BUILD the PlanC site exactly to that spec.

- Build into Z:\Claude Code\planc0\site\ (index.html + minimal files,
  self-contained; no external libs except Google Fonts; 100% original
  code — zero copied code or assets from any reference site)
- Respect every hard rule in the brief: ≤1.5MB total, transform/opacity
  animation only, 390px-first, real HTML text, reduced-motion fallback,
  the motion grammar tokens, and the Thai-safe effects whitelist
  (never letter-split Thai outside the whitelist).
- Easy-edit architecture strictly: one CONTENT block (every string),
  one THEME block (all colors/fonts/spacing), named image slots — then
  write README-EDIT.md in Thai for a non-coder: แก้คำตรงไหน แก้สีตรงไหน
  เปลี่ยนรูปยังไง ทีละขั้น.
- Serve locally and self-review with real screenshots at 390×844 and
  1440×900 across multiple scroll positions, saved to
  Z:\Claude Code\planc0\screenshots\. Critique your build against the
  chosen components' quality bar; fix the 5 worst things; screenshot
  again; repeat once more.
- Verify before finishing: zero console errors, every section present
  with draft copy, seamless transitions at every boundary, reduced-
  motion version readable, Lighthouse-style sanity on weight.
- Finish with STATUS.md: what's done, what's still draft, known issues,
  and the 3 things that most need my eye — honest, no padding.
Do not redesign or deviate from BUILD-BRIEF-FINAL.md; if something in
the spec is impossible or conflicts, implement the closest faithful
version and log it in STATUS.md.
```
