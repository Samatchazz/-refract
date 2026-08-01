# Human-Write — Handoff (for continuing in a new chat)

Paste this whole file into a new chat to continue. It's self-contained.

---

## 1. What the project is
**Human-Write** — a Thai-first landing page for a brand that does **1:1 identity
coaching for influencers** ("we teach you to write as *you*; **we never
ghostwrite**"). Tagline: **เราขีด — ให้คุณเขียนตัวตน [แตกต่าง]** ("we underline/guide,
you write"). Core motif: *the human hand writing over the machine* (eraser wiping
"Ai-Write", a hand-drawn stroke recurring everywhere).

**Source-of-truth docs** (on the user's Desktop):
- `C:\Users\SaChaz\Desktop\human-write-brief-v2.md` — the brief (**the** source of truth).
- `C:\Users\SaChaz\Desktop\human-write-tokens.md` — design tokens (already reconciled to the brief's fonts).

**Font system = character system (3 voices):**
- **Company voice → Anuphan** (variable Thai) — headings + body.
- **Human hand → Mali** (childlike handwriting, Thai+Latin) — logo, shuffle words, `0.1%`.
- **AI antagonist → Inter** — "Ai-Write", statistics digits only.
(An earlier tokens draft said LINE Seed + Rock Salt — that's wrong/superseded; brief wins.)

---

## 2. Where things are (repo root: `Z:\Claude Code`)
- `idiology/` — a finished agency landing page (Elementor→vanilla GSAP export). **The design base.**
- `human-write-v2/` — FIRST attempt: bespoke splash/hero/era build with Idiology *tokens*
  layered in. Works, verified. Runs on port **5200**. Kept for reference.
- `human-write-v3/` — **CURRENT / active build.** A literal fork of the Idiology page with
  Human-Write content poured in. Runs on port **5300**. **This is the one to continue.**
- `.claude/launch.json` — has `human-write-v2` (5200) and `human-write-v3` (5300) entries.

**Why v3 exists:** the user wanted the site **based on the *actual Idiology page*** (its real
sections/components/layout), with HW content stuffed in — *not* a bespoke build that merely
borrows Idiology's tokens (that was v2, rejected).

---

## 3. v3 — what was built
Forked `idiology/index.html` + `idiology/assets/` → `human-write-v3/`. Kept every Idiology
section, component, CSS file and JS module. Changed only identity + content.

**Section order (per explicit user request, eras moved up):**
`loader(=Splash) → hero → **eras** → expand-band → about → projects → testimonials → clients → blog → footer`

**Key user decisions already made:**
- **Combine the Era section into Idiology's Services scroll-stack** (the "Where Conventional
  Thinking Ends" section) — the 5 eras are the stacked `.svc-card`s — and **move it right
  after the hero**. ✅ done.
- **Splash → Idiology loader slot.** ✅ done.
- Sections the brief has no copy for → **Thai draft written** (marked `DRAFT` in index.html). ✅ done.
- Keep Idiology's violet/aqua palette; swap only fonts + copy + hand-stroke. ✅ done.

**Files edited/added in v3 (everything else is Idiology verbatim):**
- `assets/css/tokens.css` — **font swap only** → Anuphan/Mali/Inter + `--stroke-*`, `--lh-tight-th`.
- `assets/js/modules/textReveal.js` — **one change**: word splitter uses `Intl.Segmenter('th')`
  (Thai marks must never detach — do NOT revert this).
- **added** `assets/css/humanwrite.css` — splash overlay, era-clause underline, shuffle, engage row.
- **added** `assets/js/modules/humanwrite.js` — `initSplash()` (drop-in for `initLoader`),
  `initShuffle()` (hero accent word cycle), `initEras()` (sacred underline per era clause;
  SNS card engagement erupts **after** the stroke — load-bearing order).
- `assets/js/main.js` — registers `CustomEase`; `initSplash().then(()=>{playHeroReveal();initShuffle();})`;
  added `initHWEras()`.
- `index.html` — all content; `serve.cjs` — port 5300.

---

## 4. LOCKED (verbatim, never edit) vs DRAFT
**Verbatim from brief:**
- Hero tagline words: เราขีด / ให้คุณเขียนตัวตน / shuffle: แตกต่าง → โดดเด่น → ถูกจำ → เป็นตัวคุณ.
- All 5 era clauses (verb evolves): เชื่อ → ยังเชื่อ → ยึดมั่น → ไม่เลิกเชื่อ → เชื่อ(คือ), full copy in each `.era-copy`.
- Figures: **9,000,000** (SPLASH_COUNT), **0.1%**, SNS engagement **♥ 8,876 · 💬 4,432** (easter egg).

**DRAFT Thai (safe to rewrite — search `DRAFT` in `human-write-v3/index.html`):**
about manifesto, projects/case titles, testimonials, blog articles, footer address.

---

## 5. Critical technical rules (from the brief — don't break)
1. **Thai splitting:** never SplitText/`.split('')`; use `Intl.Segmenter('th',{granularity:'word'})`
   then wrap each segment. (Already applied in v3 textReveal.)
2. **The hand stroke is ONE reusable SVG path** (same `d`, same weight/jitter) — splash cross-out,
   hero dash, every era underline. In v3 it's `STROKE_PATH` in `humanwrite.js`.
3. **Splash:** once per session (`sessionStorage 'hw-splash-seen'`), skip button, fully bypassed
   under `prefers-reduced-motion`.
4. **Era box 5 order is load-bearing:** underline stroke completes FIRST → engagement erupts AFTER.
   Never parallel/reversed. (In v3: `erupt` only in the stroke's `onComplete`.)
5. **Two motion personalities:** AI = flat `stagger .05 / power1.inOut`; human = `CustomEase("pen",
   "M0,0 C0.1,0.8 0.2,1 1,1")`.
6. **`--c-accent` (neon aqua) is interaction-only** (hover/focus/loader) — never body text/decoration.
7. Respect `prefers-reduced-motion` in JS *and* CSS.

---

## 6. Environment constraint (important for verifying)
The in-app browser **preview serves tabs `visibility:hidden`**, which throttles
`requestAnimationFrame` to zero → GSAP timelines freeze at frame 0 and **screenshots time out**.
To verify, drive the clock manually: `gsap.updateRoot(t)` executes tween interpolation/callbacks
at time `t`. Real playback needs a genuinely focused browser tab (open `http://localhost:5300`).
`read_page` (a11y tree) and console reads work fine without a live tab.

**v3 verified (DOM-driven):** section order correct (eras after hero); splash counts to 9,000,000
and reveals Human-Write; hero Thai masked line-reveal; 5 era cards in scroll-stack each with the
sacred underline; SNS engagement erupts only after its stroke; Anuphan/Mali + neon-aqua palette;
no console errors. One real bug fixed (hero CTA `data-hero` would've stayed hidden).

---

## 7. Suggested next steps (user was choosing among these)
1. Turn the **DRAFT** Thai copy (about/projects/testimonials/blog) into final copy.
2. Decide how much **retro flavor** the era cards should carry (currently clean Idiology cards;
   could add 90s numerals, MSN/Netscape hints — the full retro chrome/gimmicks live in v2 if wanted).
3. Palette/detail polish (splash colors, hand-stroke on dark grounds).
4. Decide whether **v3 becomes canonical** and v2 is archived/removed.
5. Remaining brief v3 sections not yet designed: **The Sessions** service model (blocked — pricing TBD),
   **Free Seat** CTA (email capture + countdown), footer tagline finalization.

## How to run
```
node human-write-v3/serve.cjs   # → http://localhost:5300  (open in a REAL focused tab)
node human-write-v2/serve.cjs   # → http://localhost:5200  (old bespoke build, for reference)
```
