# Human-Write — landing page (v2)

Static implementation of the first three sections from `human-write-brief-v2.md`:
**Splash → Hero → Era Section**. Vanilla JS (ES modules) + GSAP 3 (ScrollTrigger,
CustomEase). No build step, no framework, no GSAP Club plugins.

---

## Built on the Idiology foundation (not a lookalike)

Per `human-write-tokens.md` §0 — *"Forked from Idiology. Structure inherited
wholesale; identity replaced."* This build actually sits on Idiology's system;
only the **identity** (fonts + the hand-stroke motif + palette assignments) is swapped.

| Inherited from Idiology | Where | Identity change |
|---|---|---|
| **Design token system** (`idiology/assets/css/tokens.css`) — palette, fluid type scale, spacing, motion eases, layout, radius | `css/tokens.css` Layer 1 (verbatim) | Layer 2 overrides only `--f-display/-body/-accent` → Anuphan/Mali/Inter, adds `--stroke-*`, `--lh-tight-th` |
| **Base conventions** (`.container`, reset, `[id]` scroll-margin) | `css/base.css` | + HW nav / sacred-stroke / splash-lock |
| **Masked line-reveal** — the signature effect (`.line{overflow:hidden}` + `.line-inner` lifting `yPercent:110→0`, `expo.out`, `stagger:0.08`) | `js/idiology/textReveal.js`, used on the hero headline | **the one porting change**: word splitter is `Intl.Segmenter('th')`, not whitespace, so Thai marks never detach |
| **Global GSAP setup** (`registerPlugin`, `ScrollTrigger.defaults({toggleActions:'play none none none'})`, split-after-`fonts.ready`) | inline script in `index.html` + `js/main.js` | — |
| **ES-module architecture** (one entry imports the rest) | `js/main.js` imports splash/hero/eras/config/textReveal | — |
| **Palette map** (tokens §1): splash = `--c-bg-dark` "system world", hero = `--c-bg-light`, eras dark; `--c-accent` neon aqua **interaction-only** | `css/splash.css`, `css/hero.css` (`:hover`), `css/eras.css` | era-box chrome keeps period-authentic colors (sanctioned exception) |

> **Reserved, not forced:** `counters.js` / `stack.js` / `cursor.js` are Idiology
> modules whose real homes are the **Stats** and **The Sessions** sections (v3).
> The era boxes have their own brief-specified gimmicks (letterpress, MSN bubbles,
> the load-bearing SNS eruption), so they are *not* replaced by generic reveals.

---

## How to run

It's plain static files — any static server works. A zero-dependency one is included:

```bash
node serve.cjs           # → http://localhost:5200
# or set a port:  PORT=8080 node serve.cjs
```

Or, from the repo root, via the launch config `human-write-v2` (port 5200).

> Open in a **focused, visible** browser tab. The animation timings in the brief
> assume a foregrounded tab; a backgrounded/hidden tab throttles
> `requestAnimationFrame` and `IntersectionObserver`, so gimmicks play in slow
> motion or defer.

### Debug query flags
- `?rm=1` — force the reduced-motion path (no OS setting needed). Renders the
  static fallbacks for every section, exactly as a `prefers-reduced-motion` user sees.
- Splash plays once per session. To replay it, open a new tab/session or clear
  `sessionStorage` (`sessionStorage.removeItem('hw-splash-seen')`).

---

## Where each brief section maps to code

| Brief section | Files |
|---|---|
| §0 Font/voice system, sacred stroke | `css/tokens.css`, `js/shared/stroke.js`, `js/config.js` (the two motion personalities: `EASE_PEN`, `EASE_TEAR`; AI flat stagger inline) |
| §1 Splash (3.0s, two parallel layers) | `js/splash.js` (`playSplash`), `css/splash.css`, `#splash` in `index.html` |
| §2 Hero (5 beats + shuffle loop) | `js/hero.js` (`initHero`) + `js/idiology/textReveal.js` for the entrance, `css/hero.css`, `.hero` in `index.html` |
| §3 Era section (5 boxes, pin/swipe) | `js/eras.js` (`initEras`), `css/eras.css`, `.eras` in `index.html` |
| §4 Thai segmentation | `js/shared/thai-split.js` (`Intl.Segmenter`, never SplitText) — also drives the masked reveal splitter |
| §4 Boxes are real DOM | all box chrome is HTML/CSS in `index.html` + `css/eras.css` |

### Key implementation notes
- **ES modules**: `index.html` loads GSAP (classic CDN) + an inline plugin-register
  script, then one `<script type="module" src="js/main.js">`; `main.js` imports
  `config`, `splash`, `hero`, `eras`, and `idiology/textReveal`.
- **The sacred stroke** (`js/shared/stroke.js`) is ONE path (`STROKE_PATH`),
  reused for the splash cross-out, the hero dash, and every era-box clause
  underline. `vector-effect: non-scaling-stroke` keeps the weight identical at any
  rendered width; identical `d` keeps the jitter identical. Colour is set by a
  local `--stroke-color` (ink on light sections, `--c-text-light` on dark).
- **Two motion personalities** (`js/config.js`): human = `CustomEase("pen", …)`;
  AI = inline `{ ease: 'power1.inOut', stagger: 0.05 }` on the splash count-up and
  AI-voice tweens.
- **Box 5 order is load-bearing**: in `js/eras.js` `box5()`, the engagement
  `erupt()` runs **only** in the underline stroke's `onComplete` — never parallel,
  never reversed.
- **Reduced motion** is driven by the `html.hw-reduced` class (added synchronously
  in `<head>` before first paint) so the JS reduced path and the CSS static
  fallback never diverge — see the note in `css/eras.css`.
- **Responsive era section**: desktop pins ~500vh with snap; `<768px` switches to
  CSS horizontal scroll-snap cards with an `IntersectionObserver` firing each
  gimmick on activation (no pin).

---

## TODO placeholders (search the code for `TODO` / `QUESTION`)

**Assets to replace** (inline SVG placeholders, roughly correct shape):
- `index.html` — eraser sprite (`.splash-eraser`) · `/* TODO: replace asset */`
- `index.html` — "ผ่านการตรวจ" approval stamp (`.stamp`) · `/* TODO: replace asset */`
- `index.html` — pixel forum avatar (`.board-avatar`) · `/* TODO: replace asset */`

**Copy not yet supplied by client** (retro chrome flavor — the *verbatim* era copy
is final and untouched; these are the surrounding UI strings):
- `index.html` — Netscape address-bar URL · `TODO: placeholder chrome copy (URL)`
- `index.html` — `<marquee>` welcome text · `TODO: placeholder chrome copy (marquee)`
- `index.html` — 90s link names (สมุดเยี่ยม / ลิงก์เพื่อนบ้าน / อีเมลถึงเรา) · `TODO`
- `index.html` — MSN contact list names · `TODO: placeholder contact names`
- `index.html` — SNS notification handles · `TODO: placeholder handles`

**Open values:**
- `js/splash.js` — `SPLASH_COUNT = 9000000` (brief flags 9M/2M/1M as not final;
  single-constant change point).
- `js/eras.js` — box 5 **♥ 8,876 · 💬 4,432** are the locked easter-egg figures.
  Shares (`1,204`), the hit counter (`013370`), views (`152,847`) and other retro
  numbers are invented flavor — swap freely.

**QUESTION (left for client, not invented):**
- `index.html` — the small corner **era labels** (ยุคหนังสือ / ยุคเว็บ 90s / …) are
  provisional; the brief specifies "small era label on the box corner" but not the text.

---

## Test checklist (executed)

Verified via the in-app preview at `localhost:5200`. **Environment constraint:** the
preview pane serves the tab `visibility:hidden`, which throttles `requestAnimationFrame`
to zero — so GSAP's rAF ticker never advances on its own (`gsap.ticker.frame === 0`,
`globalTimeline.time() === 0`) and screenshots time out. To verify *playback* rather
than just static DOM, the GSAP root clock was driven deterministically with
`gsap.updateRoot(t)`, which executes every tween's interpolation, setters, and
`onComplete` callbacks at a given timestamp. This is a stronger check than static
inspection: it actually runs the animation logic frame-accurately, just off a manual
clock instead of rAF. On a real, focused tab, rAF drives the same code unchanged.

- ✅ **Splash timeline (driven t=0→3.3s):** count-up reaches `9,000,000` by t≈1.4
  (AI-voice `power2.out`); `Ai-Write` renders crisp then clip-wipes to
  `inset(… 100%)` under the eraser pass; `Human-Write` letters pop in (last-char
  opacity 0→1); the sacred cross-out stroke draws (dashoffset 292→0); `0.1%` +
  `ที่ถูกเลือก` appear after. At t≈3.05 the black overlay fades in (hard cut); the
  timeline's `onComplete=finish()` then sets `#splash{display:none}`, removes
  `body.splash-lock` (scroll unlocked), and hands off to `startSite()` — confirmed:
  hero dash injected, all **5** era clause underlines attached, **1** ScrollTrigger
  created (desktop pin).
- ✅ **Hero beats + shuffle (driven):** 7 words reveal (เรา|ขีด + 5 Thai segments of
  ให้คุณเขียนตัวตน — marks intact, via `Intl.Segmenter`); tear-gap width 0→92px;
  sacred dash draws (dashoffset 292→0); `ขีด` weight axis twitches
  (`font-variation-settings:"wght" 600`); **shuffle loop cycles live**
  แตกต่าง → โดดเด่น with the container width animating (289→283px) to avoid layout jump.
- ✅ **Verbatim copy (all 5 era boxes, via a11y tree):** every "Copy (final, verbatim)"
  block matches the brief exactly, with Thai vowel/tone marks attached (no detachment);
  the connecting-thread verb evolves เชื่อ → ยังเชื่อ → ยึดมั่น → ไม่เลิกเชื่อ → เชื่อ(คือ).
- ✅ **Era section structure (desktop):** one pin ScrollTrigger `start 800 → end 4800`
  (≈500vh), `snap 1/4` per era, `onUpdate` maps `round(progress·4)` → box 0–4.
  **Box 5 order is load-bearing and structurally guaranteed:** in `box5()`, `erupt()`
  is invoked *only* from the underline stroke's `onComplete` — it cannot run before the
  stroke finishes. (Real-time *scrub playback* of the era gimmicks was not watched
  frame-by-frame: the scrub lerp is rAF-driven and the preview tab freezes rAF; open a
  focused tab to watch it live.)
- ✅ **Mobile (390×844):** no pin (0 ScrollTriggers); `.era-track` is a horizontal
  `scroll-snap-type: x mandatory` track of 88vw cards; hero breaks to two lines with a
  shortened dash; each gimmick is wired to fire on `IntersectionObserver` activation.
- ✅ **prefers-reduced-motion (`?rm=1`):** splash bypassed (`html.no-splash`); era boxes
  unpinned and stacked vertically, all visible; every clause underline snapped drawn;
  final counts shown statically (♥ 8,876 · 💬 4,432 · views 152,847 · hits 013370);
  hero static `เราขีด — ให้คุณเขียนตัวตนเป็นตัวคุณ`.
- ✅ **Second-visit splash skip:** after first load, `sessionStorage['hw-splash-seen']`
  is set and a reload applies `html.no-splash` (splash `display:none`, site shown
  immediately).
