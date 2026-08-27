#!/usr/bin/env python3
"""build-journey.py — รวมทุกอย่างเป็นไฟล์เดียว: proto-journey/planc-journey-proto.html

ทำอะไรบ้าง:
1. inline js/sprites.js + js/planc-rig.js แทน <script src>
2. ฝัง assets/cat.png เป็น base64
3. ฝังหน้า pages/pricing.html เข้าไปเป็น "หน้าในตัว" (#pgPricing overlay):
   - CSS ถูก scope ให้ทุก selector อยู่ใต้ #pgPricing (กันชนกับ CSS ของเกม)
   - ลิงก์ "หน้าหลัก" → #journey (ปิด overlay) · ลิงก์ "ราคา" ใน nav เกม → #pricing
   - ตัด <svg> symbol ของ pricing ทิ้ง เพราะ sprites.js มี #flag อยู่แล้ว
ผลลัพธ์: ไฟล์เดียว เปิดจากที่ไหนก็ได้ (Downloads/แชท) ปุ่มครบทุกหน้า
"""
import base64, pathlib, re

ROOT = pathlib.Path(__file__).parent


def scope_css(css, prefix='#pgPricing'):
    css = re.sub(r'/\*.*?\*/', '', css, flags=re.S)
    out, i = [], 0
    while i < len(css):
        j = css.find('{', i)
        if j == -1:
            break
        sel = css[i:j].strip()
        depth, k = 1, j + 1
        while k < len(css) and depth:
            if css[k] == '{':
                depth += 1
            elif css[k] == '}':
                depth -= 1
            k += 1
        body = css[j + 1:k - 1]
        if sel.startswith('@media'):
            out.append(sel + '{' + scope_css(body, prefix) + '}')
        elif sel.startswith('@keyframes') or sel.startswith('@font-face'):
            out.append(sel + '{' + body + '}')
        else:
            parts = []
            for s in (x.strip() for x in sel.split(',')):
                if not s or s == 'html':
                    continue
                if s == ':root':
                    parts.append(prefix)
                elif s.startswith('body'):
                    # body.hd .x -> #pgX.hd .x  (คลาสโหมดถูกแปะบนตัว overlay เอง)
                    parts.append(prefix + s[4:])
                else:
                    parts.append(prefix + ' ' + s)
            if parts:
                out.append(', '.join(parts) + '{' + body + '}')
        i = k
    return '\n'.join(out)


def build():
    html = (ROOT / 'proto-journey/proto.html').read_text(encoding='utf-8')

    # 1. inline JS
    for src in ('../js/sprites.js', '../js/planc-rig.js'):
        js = (ROOT / src.replace('../', '')).read_text(encoding='utf-8')
        tag = f'<script src="{src}"></script>'
        assert tag in html, tag
        html = html.replace(tag, '<script>\n' + js + '\n</script>')

    # 2. business pages -> overlays (เอาเฉพาะ hero..footer — nav ไม่เอา เพราะไฟล์รวม
    #    ใช้ nav ของเกมเป็นแถบเดียวทั้งเว็บ · ต้องมาก่อนขั้น cat.png เพื่อให้
    #    รูปแมวใน footer ของแต่ละหน้าถูกฝัง base64 ด้วย)
    PAGES = [('pages/pricing.html', '<!--PRICING-->', '#pgPricing'),
             ('pages/about.html',   '<!--ABOUT-->',   '#pgAbout')]
    for path, marker, prefix in PAGES:
        pr = (ROOT / path).read_text(encoding='utf-8')
        css = scope_css(pr[pr.index('<style>') + 7:pr.index('</style>')], prefix)
        body = pr[pr.index('<header class="hero">'):pr.index('</footer>') + len('</footer>')]
        body = (body
                .replace('href="../proto-journey/planc-journey-proto.html"', 'href="#journey"')
                .replace('href="pricing.html"', 'href="#pricing"')
                .replace('href="about.html"', 'href="#about"'))
        assert marker in html, marker
        html = html.replace(marker, '<style>\n' + css + '\n</style>\n' + body)
    html = (html.replace('href="../pages/pricing.html"', 'href="#pricing"')
                .replace('href="../pages/about.html"', 'href="#about"'))

    # 3. cat.png (ทั้งของเกมและของ footer หน้า pricing)
    b64 = base64.b64encode((ROOT / 'assets/cat.png').read_bytes()).decode()
    html = html.replace('../assets/cat.png', 'data:image/png;base64,' + b64)

    assert '../js/' not in html and '../assets/' not in html and '../pages/' not in html
    out = ROOT / 'proto-journey/planc-journey-proto.html'
    out.write_text(html, encoding='utf-8')
    print(f'built {out}  {out.stat().st_size/1024:.0f} kB')


if __name__ == '__main__':
    build()
