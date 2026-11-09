#!/usr/bin/env python3
# ประกอบ proto ทั้งสองตัวจาก .src.html — ฝังฟอนต์ + แมว + (เฉพาะตัวเกม) Phaser
# ใช้: python3 build.py            (ต้องมี ../assets/cat.png และ ../assets/fonts/*.woff2)
# ตัวเกมต้องมี phaser.min.js ข้างไฟล์นี้ก่อน:  npm pack phaser@3 && tar xzf phaser-3.*.tgz
#                                              && cp package/dist/phaser.min.js .
import base64, pathlib, sys

here = pathlib.Path(__file__).resolve().parent
root = here.parent

def b64(p): return base64.b64encode(p.read_bytes()).decode()

FACES = [
    ('Prompt', 600, 'prompt-thai-600-normal',  'U+0E01-0E5B, U+200C-200D, U+25CC'),
    ('Prompt', 600, 'prompt-latin-600-normal', 'U+0000-00FF'),
    ('Prompt', 800, 'prompt-thai-800-normal',  'U+0E01-0E5B, U+200C-200D, U+25CC'),
    ('Prompt', 800, 'prompt-latin-800-normal', 'U+0000-00FF'),
    ('Sarabun', 400, 'sarabun-thai-400-normal', 'U+0E01-0E5B, U+200C-200D, U+25CC'),
    ('Sarabun', 400, 'sarabun-latin-400-normal', 'U+0000-00FF'),
]
font_css = '\n'.join(
    f"@font-face{{font-family:'{fam}';font-weight:{wt};font-display:swap;"
    f"unicode-range:{rng};src:url(data:font/woff2;base64,{b64(root/'assets/fonts'/(fn + '.woff2'))})"
    f" format('woff2')}}"
    for fam, wt, fn, rng in FACES)
cat = 'data:image/png;base64,' + b64(root / 'assets/cat.png')

def build(src, out, phaser=False):
    s = (here / src).read_text().replace('__FONT_CSS__', font_css).replace('__CAT_B64__', cat)
    if phaser:
        pj = here / 'phaser.min.js'
        if not pj.exists():
            print(f'ข้าม {out}: ไม่มี phaser.min.js (ดูวิธีหัวไฟล์)'); return
        s = s.replace('__PHASER__', pj.read_text())
    (here / out).write_text(s)
    print(f'{out}  {len(s):,} bytes')

build('galaga.src.html', 'galaga-proto.html')
build('play.src.html', 'galaga-play.html', phaser=True)
