# xxix.co — faithful reference build

A content-driven reproduction of the xxix homepage using the **real** copy, imagery, video,
fonts, colors, and layout positions, so you can study the finished design and then **replace the
content with your own**.

> ⚠️ **Reference / private study only.** All copy, images, and video are © XXIX (Twenty Nine), and
> `ReplicaProTT` / `TimesNewRomanMTStd` are licensed fonts. This build is for studying structure and
> as scaffolding you replace. **Swap out every asset and the fonts before publishing or shipping
> anything** — do not deploy it as-is.

## How it was built (pipeline)
1. `dom/*.html` — post-hydration DOM captured with headless Chromium.
2. `content/nextdata_*.json` — the site's Sanity CMS payload, lifted from `__NEXT_DATA__`. This is
   the source of all copy + the exact per-module layout (`colStart/colEnd/offsetX/offsetY`, colors).
3. `assets/` — every image (Sanity originals), the hero/project videos, and the two font families,
   downloaded locally (`assets/manifest.json` lists them).
4. `content/home.json` — a **clean, swappable content model** extracted from the CMS payload, with
   image URLs rewritten to the local files.
5. `clone/build.js` — renders `home.json` into a static `clone/index.html`.

## Run it
From `research/xxix/`, serve the folder (assets are referenced with `../assets/…`):
```bash
node -e 'require("http").createServer((q,s)=>{const p=require("path"),f=require("fs");let u=decodeURIComponent(q.url.split("?")[0]);if(u=="/")u="/clone/index.html";f.readFile("."+u,(e,d)=>{if(e){s.writeHead(404);return s.end()}const t={".html":"text/html",".css":"text/css",".js":"text/javascript",".png":"image/png",".jpg":"image/jpeg",".webp":"image/webp",".mp4":"video/mp4",".woff2":"font/woff2",".woff":"font/woff",".ttf":"font/ttf"}[p.extname(u)]||"application/octet-stream";s.writeHead(200,{"Content-Type":t});s.end(d)})}).listen(5399,()=>console.log("http://localhost:5399/clone/index.html"))'
```
(Serve over HTTP, not `file://`, so the fonts/assets load.)

## Replace the content
Everything is in **`../content/home.json`**. Each module has:
- `pos` — `{colStart, colEnd, offsetX, offsetY}` on a 12-col grid (the scatter)
- `style` — `{bg, fontColor, hover, width}`
- `body` — HTML/markdown copy (for text/master modules)
- `media` — `{kind:image|video, src}` pointing at a local asset
- `captions`, `aspectRatio`, `link`

Edit the copy, drop your own files into `assets/`, repoint `media.src`, then re-run:
```bash
node clone/build.js
```
To restyle without touching content, edit `clone/style.css`.

## Placeholder / "replace-me" template
To get a clean scaffold with the **exact structure and positions** but all proprietary copy and
imagery stripped out (lorem text + neutral IMAGE/VIDEO blocks):
```bash
PLACEHOLDER=1 node clone/build.js      # → clone/template.html
```
Use this as your real starting point: the scatter grid, color blocks, type scale, and module
positions are intact; you fill in your own content. (On Windows PowerShell: `$env:PLACEHOLDER=1; node clone/build.js`.)

## Project detail (case-study) pages
The pipeline also covers `/work/<slug>` project pages (intro + oneUp + twoUp modules):
```bash
node clone/build-project.js aplos      # → clone/project-aplos.html  (from content/project_aplos.json)
```
Other captured projects (`williamstowntheatrefestival`, `mac-miller-swimming`) can be extracted the
same way from their `content/nextdata_work_*.json`.

## Files
- `index.html` — faithful homepage (regenerate from `home.json`; don't hand-edit)
- `template.html` — placeholder scaffold (from `PLACEHOLDER=1`)
- `project-aplos.html` — faithful case-study page
- `build.js` / `build-project.js` — the renderers
- `style.css` — the design system (grid, type scale, colors, cursor, case-study layout)
- `preview_*.png` — captures
