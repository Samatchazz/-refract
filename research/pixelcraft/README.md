# research/pixelcraft — capture tooling

Structural teardown of **Pixel Craft** (ThemeForest item 61661179), to be used as the measured basis
for the Plan C skeleton. Same approach as `research/xxix/`.

**You probably want `BRIEF.md`, not this file.** This is the reference for what `scrape.mjs` does and
what it writes. `BRIEF.md` is the procedure. `REVIEW.md` explains why both look the way they do.

The Cowork cloud session cannot reach themeforest.net (egress blocked), so the capture runs here.

---

## Running

```bat
cd "Z:\Claude Code"
npm i -D playwright
node research\pixelcraft\scrape.mjs
```

15–30 minutes. Output lands in `research\pixelcraft\out\`.

**You do not need `npx playwright install`.** Both scripts try Playwright's bundled Chromium first,
then fall back to the Google Chrome or Microsoft Edge already installed on the machine. The first line
of output tells you which one launched. That download is ~200 MB into `AppData\Local`; on a near-full
C: drive it has corrupted a Claude desktop install. Only run it if no browser launches *and* you have
comfortable free space. Force a specific one with `--browser chrome | msedge | chromium`.

### Flags

| Flag | Effect |
|---|---|
| `--url <URL>` | skip iframe resolution, capture this URL directly |
| `--out <dir>` | output directory name under `research/pixelcraft/` (default `out`) |
| `--label <name>` | label prefix for this capture (default `home`) |
| `--headful` | visible browser — use to see whether Cloudflare is challenging |
| `--quick` | **debug only.** Skips the 390 px pass and the whole hover pass |
| `--no-shots` | no screenshots; fast structural debugging of `pickSections()` |

`--out` and `--label` exist because a second run otherwise **overwrites the first**. Capturing a
second demo: `--url <URL2> --out out-demo2 --label demo2`.

If the demo URL can't be resolved, follow `BRIEF.md` §3.1a. Do not guess a URL — a wrong site returns
HTTP 200 just as happily as the right one, and you get a complete, confident, useless teardown.

---

## What it writes

```
out/
├── _capture_meta.json        timestamps · versions · flags · per-capture stats
│                             · warnings[] · notCaptured[]      ← read this first
├── _demo_url.txt             the resolved demo URL
├── _preview_probe.json       iframes found on the ThemeForest preview, ranked by area
├── _inner_links.json         same-host pages that were followed
├── dom/<label>.html          post-hydration HTML
├── css/*.css                 every stylesheet, downloaded + inline <style>
├── js/*.js                   every script bundle (holds the real animation constants)
├── probe/<label>.json        the main structural probe            ← see below
├── probe/<label>_mid.json    second probe at 50 % scroll (what lazy-mounts later)
├── libprobe/<label>.json     runtime library introspection        ← highest fidelity
├── analysis_scroll_<l>.json  pin / horizontal-scroll / parallax / reveal, classified
├── analysis_css.json         breakpoints · @keyframes · @font-face · clamp() · keyword counts
├── analysis_js.json          animation signatures grepped out of the bundles
├── analysis_network_<l>.json real transfer sizes by resource type
├── track_<l>_index.json      tracked elements + their docTop + owning section
├── track_<l>_samples.json    raw positions at every scroll step
├── scroll_visited_<l>.json   target vs ACTUAL scroll position per step (scroll sanity)
├── sections/<l>_S01.jpg …    one image per section, FULL element box (not viewport-clipped)
├── shots/<l>_s00…s26.jpg     viewport at each scroll step
├── shots/<l>_preload_###ms   preloader states, filenames carry measured elapsed ms
├── shots/<l>_full.jpg        full page as a visitor sees it (below-fold may be blank)
├── shots/<l>_full_forced.jpg full page with all animation forced to end state ← structural map
├── shots/<l>_menu_open.jpg   menu overlay, only if the toggle genuinely opened one
├── hover/ + hover_<l>.json   per-section hover states, before/after, magnetic detection
├── menu_<l>.json             what the menu probe did and whether it worked
├── network_<l>.json          every response with real encoded size
└── console_errors_<l>.json
```

Filenames carry the label prefix: `sections/home_1440_S01.jpg`, not `S01.jpg`.

### `probe/<label>.json`

- `libs` — GSAP / ScrollTrigger / ScrollSmoother / SplitText / Lenis / Locomotive / Swiper / barba /
  three.js / PIXI / Splitting / SplitType / Isotope / lottie / Rive / jQuery / Elementor / WPBakery …
- `themeHints` — WordPress theme and plugin names with versions, parsed out of asset URLs
- `sections[]` — stable `sid` (`S01`…) in visual order, height in px and ×vh, padding, background
  colour and gradient, media counts, headings and paragraphs with character counts, buttons,
  repeated child classes, and `repeatGeometry` (rows, columns, gaps, card box, image aspect)
- `typeScale.rows` — every (size × weight × family × line-height × tracking) pair with px, rem and
  occurrence count; plus `families`, `weights`, `fontFaces`
- `color` — text / background / border / **gradients**, by frequency
- `effects` — mix-blend-mode, filters, backdrop-filter, clip-path, masks, sticky/fixed, live CSS
  animations, marquees (CSS *and* JS duplicated-track), split-text DOM signatures, `feTurbulence`
  grain parameters, transitions actually in use, `cursor:none`, video and canvas (webgl vs 2d),
  native `animation-timeline`, aspect ratios, radii, shadows, scroll-library `data-*` attributes
- `layout` — page-wide CSS grids and the dominant content widths
- `rootVars`, `doc.rootFontSizePx` (the rem basis), `nav`, `pageLinks`

### `libprobe/<label>.json` — prefer this over sampling

If the theme uses GSAP ScrollTrigger, this reports every trigger's `start` / `end` in document pixels
plus `pin`, `scrub` and `toggleActions` — **exact** values with no sampling error. Scroll sampling
resolves to about `docHeight / 26`. Also: GSAP tween durations, easing and stagger; ScrollSmoother
config; any Lenis instance's lerp; Swiper parameters; and the media-query state the capture ran under.

### `analysis_scroll_<label>.json`

Elements are classified by `slope = d(rect.top)/d(scrollY)`:

```
-1.00       static in normal flow
|s| < 0.08  pinned   (horizontal-scroll if xSlope > 0.2)
-0.92…-0.08 slower than scroll  (classic background parallax)
< -1.08     faster than scroll
> +0.08     drifts downward (reverse parallax)
```

Each element carries `kinds[]` (every band it exhibited, not just the dominant one) and `segments[]`
with the scroll range of each — a pin usually occupies only part of an element's tracked life, so a
median-only classifier would miss it. `holdRange` is the longest pin segment; that's the number to
quote, ±one scroll step.

---

---

## `probe-effect.mjs` — precision measurement of one effect

`scrape.mjs` is a detector: it sweeps the page at ~26 scroll steps and tells you *that* something is
pinned or parallaxing. `probe-effect.mjs` is the instrument: point it at one element and it recovers
the actual constants by sampling densely and fitting curves — no source reading involved.

```bat
node research\pixelcraft\probe-effect.mjs --url <DEMO> --mode scroll --sel ".hero img" --from 0 --to 2400
```

| `--mode` | Recovers |
|---|---|
| `scroll` | animated channel, travel, px-per-scroll-pixel, best-fit **named ease** + RMS, and a paste-ready **`cubic-bezier(...)`** |
| `time` | same, for time-based animation, plus observed duration and sample rate |
| `marquee` | px/second, direction, duplicated copies, seconds per copy |
| `stagger` | scroll position where each sibling reveals, the deltas, and the median |
| `hover` | lift px, scale, tilt degrees, magnetic yes/no + coefficient (3×3 cursor grid) |
| `cursor` | follower lerp factor `k`, frames to 95 %, spring damping if it overshoots |

Other flags: `--steps` (default 60), `--secs`, `--name`, `--out`, `--w` / `--h`.
Output: `out/effects/<name>.json`.

**Verified against a control page.** A parallax hard-coded as `translateY(scrollY × -0.25)` was
recovered as `linear`, RMS **0**, `perScrollPixel -0.25`. A marquee with a CSS `18s` cycle was measured
at **18.02 s** per copy — from motion alone, without reading the stylesheet. The named-ease fitter also
recovers `power2.out`, `sine.inOut`, `expo.out` and `back.out(1.7)` correctly from noisy samples.

Always report the RMS with the value. Under ~0.02 the curve is genuinely recovered; above that, say so
rather than presenting a guess as a measurement.

---

## Notes

- `out/` is large. `BRIEF.md` §3.1 gives the exact `.gitignore` lines: ignore `shots/`, `dom/`, `css/`
  and `js/`; **commit** the probe and analysis JSON plus downscaled section images, so citations still
  resolve on a fresh machine later.
- Everything under `out/css`, `out/js`, `out/dom` and the screenshots is the theme author's
  copyrighted work. Private measurement reference only — never redistributed, never copied into
  `skeleton/`.
