# Human-Write — Idiology-based build (v3)

**Approach:** literally *forked from the Idiology site* (`idiology/`) — same page,
sections, components, CSS and JS modules — with **Human-Write content poured in** and
only the identity swapped (fonts Anuphan/Mali/Inter, Thai copy, the hand-stroke motif).
Idiology's electric violet/aqua palette is kept.

## How to run
```bash
node serve.cjs            # → http://localhost:5300   (or PORT=8080 node serve.cjs)
```
Or launch config `human-write-v3` (port 5300). **Open in a real, focused browser tab**
to see the animation — the in-app preview serves tabs hidden, which freezes rAF.

## Section map (Idiology component → Human-Write content)
| Order | Section | Content |
|---|---|---|
| loader | **Splash** (brief §1) | count-up 0→9,000,000 → `0.1%`, `Ai-Write` wipes → `Human-Write` (Mali) |
| 1 | Hero | `เราขีด — ให้คุณเขียนเอง` / `ให้คุณเขียนตัวตน [shuffle]` + stats; masked line-reveal (Thai-safe) |
| 2 | **Eras** (Idiology services scroll-stack, **moved right after hero** per request) | the 5 eras as stacked cards; verbatim brief copy; sacred connecting-thread underline; SNS card engagement erupts **after** the stroke (load-bearing order) |
| 3 | Expand-band | tagline `เราขีด คุณเขียน คนจำ` |
| 4 | About + counters | manifesto (draft) + real stats (9M influencers, −45%, 86%, 1 seat/wk) |
| 5 | Projects | "เสียงที่เราช่วยขึ้นรูป" — **DRAFT** case titles |
| 6 | Testimonials | **DRAFT** Thai client voices (Swiper) |
| 7 | Clients | logo marquee (placeholder logos) |
| 8 | Blog | **DRAFT** Thai articles + reader overlay |
| footer | Footer | Human-Write links + tagline |

## What's inherited unchanged from Idiology
All of `assets/css/{base,components,sections,animations}.css` and every JS module
(`header, cursor, loader, parallax, blockReveal, stack, counters, reader, textReveal`).
Only two files were edited and two added:
- `assets/css/tokens.css` — **font swap only** (Anuphan/Mali/Inter) + stroke tokens.
- `assets/js/modules/textReveal.js` — **one change**: word splitter uses
  `Intl.Segmenter('th')` so Thai marks don't detach.
- **added** `assets/css/humanwrite.css` — splash overlay, era-clause underline, shuffle.
- **added** `assets/js/modules/humanwrite.js` — `initSplash` (drop-in for `initLoader`),
  `initShuffle` (hero accent word), `initEras` (sacred underline + SNS engagement).
  Wired in `assets/js/main.js` (registers CustomEase; `initSplash().then(playHeroReveal)`).

## Verbatim vs draft
- **Verbatim (brief, do not edit):** hero tagline words, all 5 era clauses/copy, the 9M / 0.1% figures, ♥ 8,876 · 💬 4,432.
- **DRAFT Thai (safe to rewrite):** about manifesto, projects titles, testimonials, blog
  articles, footer address. Search `DRAFT` in `index.html`.

## Verified (DOM-driven; preview tab freezes rAF)
Section order `home → eras → …`; splash count→9,000,000 + `Human-Write` reveal; hero
Thai masked line-reveal; 5 era cards in the scroll-stack with the sacred underline;
SNS engagement erupts only after its stroke completes; Anuphan/Mali fonts + neon-aqua
palette; no console errors. Live playback (shuffle loop, scrub depth) needs a focused tab.
