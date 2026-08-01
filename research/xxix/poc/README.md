# xxix mechanics — proof of concept

Self-contained demo of the structural mechanics teardown in [`../FINDINGS.md`](../FINDINGS.md).
**Placeholder content only — no client copy or imagery.** System fonts stand in for the real
typefaces (Helvetica Neue ≈ ReplicaProTT; Times New Roman for the serif accent).

## Files
- `index.html` — the **scatter grid** homepage mechanic
- `work.html` — the **masonry index** mechanic
- `style.css` — shared styles, commented to point at each mechanic
- `preview_*.png` — rendered captures (1440 + 390, plus a work-grid hover state)

## Run it
Any static server, e.g. from this folder:
```bash
npx serve .        # or: python -m http.server 8080
```
Then open the printed URL. (Browsers block `file://` fetch of the CSS, so serve over HTTP.)

## What each mechanic demonstrates
**index.html**
- `.semi-fixed-base-grid` → `grid-template-columns: repeat(2, minmax(0,1fr))`, collapsing to 1 col below 1080px
- `.grid-column-2 { margin-top: -8vw }` — the single line that staggers the two columns (verified: −115px at 1440)
- `.col-1…12` percentage widths + negative side-margins (`.nl-*` / `.nr-*`) to nudge cards into the gutters — no absolute positioning, no z-index, no rotation
- 100/50/35/25/16/15px type scale, `aspect-ratio: 8/10` cards, palette color blocks
- site-wide custom cursor (`*{cursor:none}` + fixed JS-driven dot that grows over links)

**work.html**
- sticky index list with selected/not-selected indicator swap on hover
- `column-count: 2` CSS masonry (`break-inside: avoid`), not CSS grid
- hover reveals `__overlay` + `__tags` (opacity 0→1, .5s)
- the `transition: all 300s` "hold" trick on the grid container

## Note
The in-app browser-pane screenshot tool timed out on this page (the always-on rAF cursor loop kept
the compositor from going idle); the `preview_*.png` files were captured with a separate headless
Playwright pass instead. Mechanics were also verified numerically via computed styles.
