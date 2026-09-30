#!/usr/bin/env python3
"""build-journey.py — รวมทุกอย่างเป็นไฟล์เดียว: proto-journey/planc-journey-proto.html

ทำอะไรบ้าง:
1. inline js/sprites.js + js/planc-rig.js แทน <script src>
2. ฝัง assets/cat.png เป็น base64
3. ฝังส่วนธุรกิจ pages/one.html ต่อท้ายด่าน (#biz) — เดิมเป็น overlay #pgPricing:
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


# ภาพในชุด sprite ที่ฉากปัจจุบันไม่ได้วาดแล้ว (ฉลาม ท่อ อิฐ ปราสาท พุ่มไม้ พื้นดินแบบเก่า ฯลฯ) — วัดจากการเดินทั้งด่าน
# ที่ 4 ขนาดจอ (30 ก.ย. 2026) · ตัดเฉพาะตระกูลที่ไม่ถูกใช้ทั้งตระกูล ตัวที่มีพี่น้องถูกใช้อยู่ (cloud-l3, qblock-used1,
# pole2) เก็บไว้ เผื่อจอขนาดอื่นสุ่มไปโดน · จะเอาฉากเก่ากลับมา ให้ลบชื่อออกจากลิสต์นี้
DEAD_SPRITES = ['brick1', 'brick2', 'brick3', 'brick4', 'brick5', 'bush1', 'bush2', 'bush3', 'bush4', 'castle',
                'ground1', 'ground2', 'ground3', 'ground4', 'ground5', 'ground6', 'pebbles1', 'pebbles2', 'pebbles3',
                'pipe-long1', 'pipe-long2', 'pipe-short1', 'pipe-short2',
                'shark-open1', 'shark-open2', 'shark-open3', 'shark-closed1', 'ufo-card']


def prune_sprites(js):
    before = len(js)
    for name in DEAD_SPRITES:
        pat = r'<symbol id=\\?"' + re.escape(name) + r'\\?".*?</symbol>'
        js, n = re.subn(pat, '', js, count=1, flags=re.S)
        assert n == 1, 'sprite not found: ' + name
    print(f'sprites: {before/1024:.0f} kB -> {len(js)/1024:.0f} kB')
    return js


def build():
    html = (ROOT / 'proto-journey/proto.html').read_text(encoding='utf-8')

    # 1. inline JS
    for src in ('../js/sprites.js', '../js/planc-rig.js'):
        js = (ROOT / src.replace('../', '')).read_text(encoding='utf-8')
        if src.endswith('sprites.js'):
            js = prune_sprites(js)
        tag = f'<script src="{src}"></script>'
        assert tag in html, tag
        html = html.replace(tag, '<script>\n' + js + '\n</script>')

    # 2. ส่วนธุรกิจ (pages/one.html — ทิศ Bürocratik, Mat 28 ก.ย.) -> #biz ต่อท้ายด่านในหน้าเดียว
    #    เอาเฉพาะใน <main> (nav ของไฟล์แยกไม่เอา ใช้แถบของเกม) · CSS ถูก scope ใต้ #biz ·
    #    ต้องมาก่อนขั้น cat.png เพื่อให้แมวในประโยค/ท้ายเว็บฝัง base64
    pr = (ROOT / 'pages/one.html').read_text(encoding='utf-8')
    css = scope_css(pr[pr.index('<style>') + 7:pr.index('</style>')], '#biz')
    body = pr[pr.index('<main class="biz">') + len('<main class="biz">'):pr.index('</main>')]
    assert '<!--BIZ-->' in html
    html = html.replace('<!--BIZ-->', '<style>\n' + css + '\n</style>\n' + body)
    js = (ROOT / 'pages/one.js').read_text(encoding='utf-8')
    tag = '<script src="../pages/one.js"></script>'
    assert tag in html, tag
    html = html.replace(tag, '<script>\n' + js + '\n</script>')
    html = html.replace('href="../pages/one.html#', 'href="#')

    # 3. cat.png (ทั้งของเกมและของ footer หน้า pricing)
    b64 = base64.b64encode((ROOT / 'assets/cat.png').read_bytes()).decode()
    html = html.replace('../assets/cat.png', 'data:image/png;base64,' + b64)
    rim = base64.b64encode((ROOT / 'assets/cat-rim.png').read_bytes()).decode()
    html = html.replace('../assets/cat-rim.png', 'data:image/png;base64,' + rim)

    assert '../js/' not in html and '../assets/' not in html and '../pages/' not in html
    out = ROOT / 'proto-journey/planc-journey-proto.html'
    out.write_text(html, encoding='utf-8')
    print(f'built {out}  {out.stat().st_size/1024:.0f} kB')


if __name__ == '__main__':
    build()
