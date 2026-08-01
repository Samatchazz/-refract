# xxix.co — Design System Teardown

Structural study of [xxix.co](https://www.xxix.co) (Twenty Nine studio). Captured 2026-07-13 with a
headless Chromium (Playwright), post-hydration.

> **Update — grid mechanism corrected.** The scatter is **not** primarily `-8vw` + negative-margin
> utilities (that CSS exists but is secondary). The real driver is the **Sanity CMS layout data** in
> `__NEXT_DATA__`: every module carries `styles.positions[]` with, per breakpoint, `colStart` /
> `colEnd` (placement on a **12-column** grid) plus `offsetX` / `offsetY` (pixel nudges) and a
> `width` %. So the "hand-placed wall" is authored per-module in the CMS, not derived from CSS alone.
> The full content + positions are extracted to `content/home.json`; a faithful reproduction using
> the real assets lives in `clone/` (see `clone/README.md`). `mix-blend-mode` remains **unused**.

## What was captured

```
research/xxix/
├── dom/           fully-rendered post-hydration HTML (home, work, + 3 project pages)
├── css/           798121b41b247b70.css  ← the SINGLE stylesheet (149 KB, all styles)
├── computed/      computed styles for layout roots / hero / grids / cards / type / blends
├── screenshots/   *_1440.png and *_390.png, full-page
└── links_home.json
```

Framework: **Next.js** (`__NEXT_DATA__`, `_next/static`), client-rendered, one shared CSS bundle.
`networkidle` never settles (persistent connections), so pages were loaded on `domcontentloaded` +
3.5s hydration wait.

> ⚠️ **Lazy-load caveat:** full-page screenshots capture below-the-fold cards as empty/black
> boxes because their images/videos are IntersectionObserver-lazy and hadn't entered the viewport.
> The DOM and CSS are the source of truth for structure; the screenshots are for above-fold layout.

---

## 1. The grid system

There are **two independent systems** working together — a CSS-grid *page skeleton* and a
Bootstrap-style *width utility* on the items inside it.

### a) Page skeleton — `.semi-fixed-base-grid`
```css
main.base-grid            { padding: 1.5625rem 0.9375rem 0.9375rem; } /* 25px top, 15px sides */
.base-grid > [class*=col-]{ padding-right: 1.5625rem; }

.semi-fixed-base-grid     { display: grid; grid-template-columns: repeat(1, minmax(0,1fr)); } /* mobile */
.semi-fixed-base-grid     { grid-template-columns: repeat(2, minmax(0,1fr)); }               /* ≥ desktop */
.semi-fixed-base-grid .grid-column-2 { margin-top: -8vw; }   /* ← the whole trick */
```
- **2 equal columns** on desktop (each `705px` at a 1440 viewport, gap `normal`/0), collapsing to
  **1 column** on mobile.
- **The stagger is one line:** `grid-column-2 { margin-top: -8vw }` pulls the entire right column
  upward relative to the left, so the two vertical stacks are offset. That single negative margin is
  what makes the wall look "hand-placed" rather than tabular.
- Each column is just a vertical stack of modules; there is **no** masonry engine on the homepage.

### b) Item widths — 12-col percentage utilities
```css
.col-0{width:0} .col-1{width:8.333%} .col-3{width:25%} .col-6{width:50%} .col-12{width:100%} …
```
Every module is assigned a `.col-N` width **and** a horizontal nudge via negative side-margins (see
§4). So a card can be, e.g., `col-6` but shoved left of its column edge — producing the "scattered,
partly-overlapping the gutter" feel without absolute positioning.

### c) Work index grid — CSS multi-column masonry (different mechanism)
The `/work` thumbnail grid is **not** CSS grid at all — it's CSS columns:
```css
.ImageGridModule__grid { column-count: 1; column-gap: 0; transition: all 300s ease-in-out; }
.ImageGridModule__grid { column-count: 2; }          /* desktop */
.ImageGridItem         { break-inside: avoid; margin-bottom: 0; }
```
Variable-height thumbnails flow into 2 balanced columns → true masonry, zero JS. (This is why an
automated `display:grid` scan reports 0 grids on `/work`.)

### Responsive breakpoints (mobile-first `min-width`)
`576 · 640 · 768 · 1080 · 1280 · 1440 px` — 6 breakpoints (base + 6 tiers). Every `.col-N` and every
negative-margin utility is redeclared across these tiers (each appears ~7×).

---

## 2. mix-blend-mode

**None.** Zero `mix-blend-mode` declarations in the entire stylesheet; zero elements with a computed
blend mode ≠ `normal` on any captured page; no `filter`, `backdrop-filter`, or `isolation` either.
The only match for "overlay" is the hover-reveal `.ImageGridItem__overlay` element name, not the
blend keyword.

> If you remember xxix using blend modes, that was an earlier iteration — the current build does not.
> The layered look now comes purely from placement, negative margins, and solid color blocks.

---

## 3. Type scale

Two families only, both self-hosted `.ttf`:
- **ReplicaProTT** (Lineto Replica — neo-grotesque) — everything structural. Weights **400 & 500**.
- **TimesNewRomanMTStd** — serif *accent only* (e.g. the italic "Index" display word, occasional
  25px serif spans). No other weights.

Distinct sizes in use (live computed, homepage):

| px | rem | weight | family | transform | line-height | letter-spacing | role |
|----|-----|--------|--------|-----------|-------------|----------------|------|
| **100** | 6.25 | 500 | ReplicaProTT | none | 100–115px (1.0–1.15) | normal / -0.32px | Hero `h1` / big display `span` |
| 50 | 3.125 | 500 | ReplicaProTT | none | 50px (1.0) | normal | `h2` section heads; also `/work` list items (desktop) |
| 35 | 2.1875 | 500 | ReplicaProTT | none | 40.25px (1.15) | normal | `h3` |
| 30 | 1.875 | 400 | ReplicaProTT | none | normal | normal | large body `div` |
| 25 | 1.5625 | 500 | ReplicaProTT / **Times** | none | 28.75px (1.15) | normal | `h4`, serif accent, `/work` list (mobile) |
| 16 | 1.0 | 400 / 500 | ReplicaProTT | none | normal | normal | body copy |
| 15 | 0.9375 | 500 | ReplicaProTT | none | 17.25px (1.15) | normal | captions / project meta labels (most common, x21) |

Scale characteristics: **tight** leading (1.0 on display, ~1.15 on text), essentially **no letter-
spacing** (only a hair of negative tracking on the 100px display span), **no uppercasing** anywhere —
casing is authored, not CSS-transformed. It's a big-contrast scale: a 100px hero against a 15px
caption base, with little in the middle.

---

## 4. How cards "overlap" / scatter

There is **no z-index stacking, no `position:absolute`, and no rotation on the project cards.** The
effect is entirely flow-based:

1. **Column offset:** right column `margin-top:-8vw` (see §1a).
2. **Width:** each module gets a `.col-N` (%) width, so cards are different sizes.
3. **Horizontal nudge:** a large library of negative side-margin utilities
   (`margin-left`/`margin-right` from `-1rem` … `-8rem`, redeclared per breakpoint) pushes individual
   cards partway out of their column / into the gutter — this is the only "overlap." Vertical
   negative margins are essentially unused (`margin-top` negatives are just `-8vw` and a `-1px`
   hairline).
4. **Card shape:** portrait media default `aspect-ratio: 8 / 10` (0.8).

`transform` is used only for **icons/decoration and centering**, never on cards:
`rotate(-45deg | 90deg | 180deg | 270deg)` (arrows / the rotated 200px "no results" glyph),
`translate(-50%,-50%)` (centering), `translateY(...)` / `translateX(-100%)` (menu & reveal
transitions).

Everything is `position: static` in normal flow; z-index is reserved for the fixed nav and the custom
cursor (`999999`).

---

## 5. Scroll / hover / JS behavior

**Custom cursor (site-wide).** `*{ cursor: none }` globally; a JS-driven
`.CursorContainer { position: fixed; z-index: 999999; pointer-events: none }` renders the cursor,
with `.cursor-capture` hooks on interactive text. Any rebuild must ship its own cursor or the page
has no visible pointer.

**Project-thumbnail hover** (`/work`):
```css
.ImageGridItem__overlay,
.ImageGridItem__tags-container { display:block; opacity:0; transition:.5s ease; }
.ImageGridItem:hover .ImageGridItem__overlay,
.ImageGridItem:hover .ImageGridItem__tags-container { opacity:1; }
```
Hover fades in an overlay + a tag/label container over the image (0 → 1 over 0.5s). Pure CSS.

**Index-list hover** (the left column of `/work`): each row swaps a bullet indicator —
```css
.ListItem__clickable:hover .ListItem__indicator--not-selected { display:none; }
.ListItem__clickable:hover .ListItem__indicator--selected      { display:block; }
```
Rows are `1px #fff`-divided, `display:inline-flex` name + indicator, two size tiers (25px mobile /
50px desktop). Filtering this list re-flows the masonry on the right (JS state, shared category tags).

**Per-module hover color themes.** Modules carry a `.Module--hover-{black|white|offwhite|beige|
yellow|red|purple}` class; links inside recolor to the matching palette value on hover. So hover
accent color is section-driven, not global.

**Link chrome:** `.Link__inner--{rect|pill|eye}__outer:hover { border-color:#231f20 }` — the pill /
rectangle / "eye" buttons (top-right `XXIX`, `WORK`, the eye toggle) just darken their border.

**The long-transition trick.** `.ListModule__list { transition: all 10000s ease-in-out }` and
`.ImageGridModule__grid { transition: all 300s ease-in-out }`. These absurd durations are a deliberate
device: when the list/grid re-orders on filter, an effectively-never-completing transition **holds the
layout static** (suppresses a janky reflow animation) while allowing the intended opacity/other short
transitions elsewhere to play.

**Transitions in use:** almost all are `opacity` fades (`.2s`–`.4s`, ease variants) for lazy image
reveal and menu; plus `border-color .15s` on inputs/links. No transform-based hover animation, no
parallax declared in CSS (any scroll motion would be JS in the Next bundle, but none is evidenced in
styles).

---

## 6. Color palette

| Hex | Role |
|-----|------|
| `#231f20` | near-black — primary text & dark sections |
| `#f8e71c` | signature bright yellow — highlight blocks / hover accent / no-results |
| `#ffe57b` | soft "beige" yellow — secondary accent |
| `#f6fff1` | pale mint "offwhite" |
| `#f57a5f` | coral / red accent |
| `#9984ea` | purple (logo-mark / accent) |
| `#f1f2f2` | light gray |
| `#fff` / `#000` | white / black |

These map 1:1 onto the `.Module--hover-*` theme names (black/white/offwhite/beige/yellow/red/purple).

---

## 7. Rebuild cheat-sheet

- Page = `<main class="base-grid">` (25px/15px pad) → `.semi-fixed-base-grid` (2-col grid,
  `repeat(2,minmax(0,1fr))`), with **`.grid-column-2 { margin-top:-8vw }`** for the stagger.
- Size each module with a `col-1…col-12` (%) width; scatter it with a per-breakpoint negative
  `margin-left`/`margin-right` (`-1rem`…`-8rem`). No absolute positioning, no z-index, no rotation.
- `/work` gallery = `column-count: 2; column-gap: 0` with `break-inside: avoid` items (CSS masonry),
  hover-reveal overlay+tags (opacity 0→1, .5s).
- Type: **ReplicaProTT** 400/500 for all UI; **Times New Roman** for serif accents. Tight leading
  (1.0–1.15), no tracking, no text-transform. Hero 100px → caption 15px.
- Ship a **custom cursor** (`*{cursor:none}` + fixed container) or the design reads as broken.
- 6 breakpoints: 576 / 640 / 768 / 1080 / 1280 / 1440.
- **No mix-blend-mode / filters** — layering is solid blocks + placement only.
