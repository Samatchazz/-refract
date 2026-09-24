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

    # 2. business pages -> sections ต่อท้ายด่านในหน้าเดียว (Mat 25 ก.ย.) — เอาเฉพาะ
    #    hero..ก่อนแถบวิ่ง (nav ไม่เอา ใช้แคปซูลของเกม · แถบวิ่ง+footer เอาเฉพาะของ
    #    contact ซึ่งเป็นท้ายเว็บ) · ต้องมาก่อนขั้น cat.png เพื่อให้แมวใน footer ฝัง base64
    PAGES = [('pages/pricing.html', '<!--PRICING-->', '#pricing', False),
             ('pages/about.html',   '<!--ABOUT-->',   '#about',   False),
             ('pages/contact.html', '<!--CONTACT-->', '#contact', True)]
    shared = (ROOT / 'pages/biz.css').read_text(encoding='utf-8')   # ระบบหน้าธุรกิจที่ทุกหน้าใช้ร่วม
    for path, marker, prefix, tail in PAGES:
        pr = (ROOT / path).read_text(encoding='utf-8')
        own = pr[pr.index('<style>') + 7:pr.index('</style>')]
        css = scope_css((shared if 'href="biz.css"' in pr else '') + '\n' + own, prefix)
        end = pr.index('</footer>') + len('</footer>') if tail else pr.index('<div class="marq"')
        body = pr[pr.index('<header class="hero">'):end]
        body = (body
                .replace('href="../proto-journey/planc-journey-proto.html"', 'href="#journey"')
                .replace('href="pricing.html"', 'href="#pricing"')
                .replace('href="about.html"', 'href="#about"')
                .replace('href="contact.html"', 'href="#contact"'))
        # ลิงก์ "หน้านี้เอง" (href="#") ใน footer → ชี้ section ของตัวเอง
        body = body.replace('<a href="#">ติดต่อ</a>', '<a href="#contact">ติดต่อ</a>')
        assert marker in html, marker
        html = html.replace(marker, '<style>\n' + css + '\n</style>\n' + body)
    html = (html.replace('href="../pages/pricing.html"', 'href="#pricing"')
                .replace('href="../pages/about.html"', 'href="#about"')
                .replace('href="../pages/contact.html"', 'href="#contact"'))

    # 3. cat.png (ทั้งของเกมและของ footer หน้า pricing)
    b64 = base64.b64encode((ROOT / 'assets/cat.png').read_bytes()).decode()
    html = html.replace('../assets/cat.png', 'data:image/png;base64,' + b64)

    assert '../js/' not in html and '../assets/' not in html and '../pages/' not in html
    out = ROOT / 'proto-journey/planc-journey-proto.html'
    out.write_text(html, encoding='utf-8')
    print(f'built {out}  {out.stat().st_size/1024:.0f} kB')


if __name__ == '__main__':
    build()
