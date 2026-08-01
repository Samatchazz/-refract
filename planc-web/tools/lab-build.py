#!/usr/bin/env python3
"""ฝัง asset ทุกอย่างลงในหน้าเครื่องมือ แล้วเขียนออกเป็นไฟล์เดียวจบ

หน้าเครื่องมือต้องเปิดได้จากที่ไหนก็ได้ (ส่งเข้าแชท ส่งเข้ามือถือ ไม่มีเน็ต)
เลยต้องไม่มี asset ข้างนอกเลยสักชิ้น รวมทั้งฟอนต์ด้วย

แก้โค้ดที่ไฟล์ `*.src.html` เท่านั้น — ไฟล์ที่ไม่มี `.src` เป็นไฟล์ที่ถูกสร้าง

placeholder ที่รองรับ:
  __CAT_B64__   base64 ของ assets/cat.png (ไม่มีก็ข้าม)
  __FONTS__     บล็อก @font-face ของ Prompt + Sarabun ฝัง base64 (ไม่มีก็ข้าม)

รัน: python3 tools/lab-build.py            # สร้างทุกไฟล์
     python3 tools/lab-build.py style-ab   # เฉพาะไฟล์เดียว
"""
import base64, pathlib, sys

here = pathlib.Path(__file__).resolve().parent
root = here.parent

# ฟอนต์: ตัดมาเฉพาะ subset ไทย+ละติน น้ำหนักที่ใช้จริง รวมกันราว 124KB
# ที่ต้องแยก unicode-range เพราะถ้ารวมไฟล์เดียวเบราว์เซอร์จะโหลดไทยทั้งชุด
# ตั้งแต่ตัวอักษรละตินตัวแรก
FACES = [
    ('Prompt',  600, 'prompt-thai-600-normal',    'thai'),
    ('Prompt',  600, 'prompt-latin-600-normal',   'latin'),
    ('Prompt',  800, 'prompt-thai-800-normal',    'thai'),
    ('Prompt',  800, 'prompt-latin-800-normal',   'latin'),
    ('Sarabun', 400, 'sarabun-thai-400-normal',   'thai'),
    ('Sarabun', 400, 'sarabun-latin-400-normal',  'latin'),
    ('Sarabun', 600, 'sarabun-thai-600-normal',   'thai'),
    ('Sarabun', 600, 'sarabun-latin-600-normal',  'latin'),
]
RANGE = {
    'thai':  'U+0E01-0E5B, U+200C-200D, U+25CC',
    'latin': 'U+0000-00FF, U+0131, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212',
}


def font_css():
    fd = root / 'assets' / 'fonts'
    out = []
    for fam, wt, name, sub in FACES:
        p = fd / f'{name}.woff2'
        if not p.exists():
            sys.exit(f'ไม่เจอฟอนต์ {p} — ฟอนต์ต้องอยู่ใน assets/fonts/ ก่อนถึงจะ build ได้')
        b64 = base64.b64encode(p.read_bytes()).decode()
        out.append(
            f"@font-face{{font-family:'{fam}';font-style:normal;font-weight:{wt};"
            f"font-display:swap;unicode-range:{RANGE[sub]};"
            f"src:url(data:font/woff2;base64,{b64}) format('woff2')}}"
        )
    return '<style>' + ''.join(out) + '</style>'


def build(stem):
    src = here / f'{stem}.src.html'
    if not src.exists():
        sys.exit(f'ไม่เจอ {src}')
    html = src.read_text(encoding='utf-8')
    hit = []

    if '__CAT_B64__' in html:
        cat = base64.b64encode((root / 'assets' / 'cat.png').read_bytes()).decode()
        html = html.replace('__CAT_B64__', cat)
        hit.append('cat')
    if '__FONTS__' in html:
        html = html.replace('__FONTS__', font_css())
        hit.append('fonts')
    if not hit:
        sys.exit(f'{src.name} ไม่มี placeholder สักอัน — เช็คก่อนว่าแก้อะไรไป')

    out = here / f'{stem}.html'
    out.write_text(html, encoding='utf-8')
    print(f'{out.name}  {len(out.read_bytes()):,} bytes  [{"+".join(hit)}]')


targets = sys.argv[1:] or [p.name[:-len('.src.html')] for p in sorted(here.glob('*.src.html'))]
for t in targets:
    build(t.replace('.src.html', '').replace('.html', ''))
