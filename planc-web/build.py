#!/usr/bin/env python3
"""
build.py — bundle the split project into ONE portable .html file.

The split files are the source of truth; this exists only so the demo
can be opened on a phone or emailed as a single attachment. Run:

    python3 build.py

Output: dist/planc-demo3.html
"""
import base64, pathlib, re

ROOT = pathlib.Path(__file__).parent
DIST = ROOT / "dist"; DIST.mkdir(exist_ok=True)

html = (ROOT / "index.html").read_text(encoding="utf-8")
css  = (ROOT / "css/site.css").read_text(encoding="utf-8")

# inline the cat as a data URI
b64 = base64.b64encode((ROOT / "assets/cat.png").read_bytes()).decode()
html = html.replace('src="assets/cat.png"', f'src="data:image/png;base64,{b64}"')

# inline the favicon too, so the single file has no siblings at all
fav = base64.b64encode((ROOT / "assets/favicon.svg").read_bytes()).decode()
html = html.replace('href="assets/favicon.svg"', f'href="data:image/svg+xml;base64,{fav}"')

# stylesheet -> <style>
html = html.replace(
    '<link rel="stylesheet" href="css/site.css">',
    "<style>\n" + css + "\n</style>"
)

# scripts -> <script>, in load order
for name in ("sprites", "scene", "cat", "ui", "main"):
    js = (ROOT / f"js/{name}.js").read_text(encoding="utf-8")
    html = html.replace(
        f'<script src="js/{name}.js"></script>',
        "<script>\n" + js + "\n</script>"
    )

# drop the OG meta that points at a file we aren't bundling
html = re.sub(r'\s*<meta property="og:image"[^>]*>', "", html)

out = DIST / "planc-demo3.html"
out.write_text(html, encoding="utf-8")
print(f"built {out}  ({out.stat().st_size:,} bytes)")
