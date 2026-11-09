# -*- coding: utf-8 -*-
"""
mkset.py — ตัว build ชุดรีวิวกินหนม (ตัวเดียว ใช้ทุกคืน · ต้นฉบับอยู่ที่ project claude/queue/mkset.py)

ทำอะไร: อ่าน spec ของชุด (10 แถว) → ตรวจกติกาเดียวกับ gate ในเบราว์เซอร์ **ก่อน** ส่งเข้าเบราว์เซอร์
       → ถ้าผ่านทุกข้อจึงสร้าง open.js / build.js / ชิ้นวาง (chunk) ให้
ถ้าไม่ผ่านแม้ข้อเดียว: ไม่สร้างไฟล์ และพิมพ์รายการที่ต้องแก้ (จบด้วย exit 1)
ไฟล์ที่ได้: open.js (+c_P1..n, c_P_join) = เปิดชุด+อัพรูป · build.js (+c_Q1..n, c_Q_join) = ประกอบ+gate — build.js พึ่งตัวเองได้ ไม่ต้องมี __SET
c_*_join จะเทียบ checksum ทุกชิ้นกับที่ mkset คำนวณไว้ก่อน eval — ชิ้นไหนถูกคัดลอกเพี้ยน (เช่น NBSP→space) จะไม่ยอมรัน ให้วางชิ้นนั้นใหม่

ใช้:  python3 mkset.py <dir>            # <dir> มี spec.json + caps.json
      python3 mkset.py <dir> --suggest  # พิมพ์แท็กที่ "ใช้ได้" ของแต่ละแถว (ชื่อแท็กอยู่ใน title/แคปชั่น/แบรนด์) ไว้เลือก
ไฟล์ข้างเคียงที่ต้องมี (โฟลเดอร์เดียวกับ mkset.py): tags.json (จาก tags.pk) · final_brand.json (คำตอบ Brand Sheet)

spec.json:
{ "set":"nova", "cook":false,
  "month_slug":"/new-7-11-snacks-2025-11/", "month_label":"ขนมใหม่ 7-11 เดือนพฤศจิกายน 2025",
  "rows":[{ "k":"nr0", "date":"2025-11-28T10:00:00", "slug":"...", "title":"...", "name":"...", "roman":"...",
            "brand":"...", "brandSrc":"zoom:<ไฟล์> | sheet:<เหตุผล>  (ว่างได้ ถ้าแบรนด์อยู่ในแคปชั่น)",
            "store":"...", "price":"45|ไม่ระบุ", "cat":"ขนม", "tags":[id หรือ ชื่อแท็ก ...],
            "yt":"...", "yd":"... (≤160)", "verdict":"...", "intro":"...",
            "cover":{"fid":"<driveId>","alt":"..."},
            "body":[{"fid":"<driveId>","alt":"...","cap":"ท่อนแคปชั่นของรูปนี้ หรือ ''"}, ...],
            "total":15, "dropped":[["ชื่อไฟล์/ลำดับ","เหตุผลที่ไม่ใช้"], ...],
            "labelPic":0, "dev":["สิ่งที่ตัดสินใจเอง ..."] }] }
กติกาที่ตรวจ (= gate v4.1.7/4.1.8):
 R1 ทุกประโยค (verdict/intro/cap) ต้องเป็น substring ของแคปชั่นตรงตัว (กฎเหล็กข้อ 8)
 R2 รูป: เนื้อ ≥2 · ปก+เนื้อ ≤8 · usable = total − dropped · ต้องใช้ครบ min(usable,8) · dropped ทุกใบมีเหตุผล
 R3 แท็ก ≥3 · id ต้องมีจริง · ชื่อแท็กต้องปรากฏใน title/แคปชั่น/แบรนด์ (ตรงตัว ตัวพิมพ์ตรง)
 R4 แบรนด์ไม่อยู่ในแคปชั่น (และไม่ใช่ลูกของแบรนด์แม่) → ต้องมี brandSrc: zoom:<ไฟล์> หรือ sheet: (เฉพาะแถวที่ Mat ตอบเองใน Brand Sheet และชื่อตรงเป๊ะ — mkset เป็นคนเทียบกับ final_brand.json · gate v4.1.8 แค่รับคำว่า sheet:)
 R4b ถ้า brandSrc อ้าง zoom:<ชุด>-<i>-<n>.jpg → labelPic ต้องชี้รูปเดียวกัน
 R5 ราคาไม่ใช่ "ไม่ระบุ" → ตัวเลขต้องอยู่ในแคปชั่น (D14)
 R7 trace ≥90% (verdict+intro+cap ต่อเนื่องกับแคปชั่น · = __vtrace)
 R6 yd ≤160 · ไม่มี – — · slug ascii ไม่ซ้ำ · labelPic ∈ {0,1,2} · dev ไม่ว่าง · fid ไม่ซ้ำ
"""
import json, sys, os, re
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from canon import canonize, is_variant, brand_tag  # brand-canon.json (12 ก.ย. 2026)

HERE = os.path.dirname(os.path.abspath(__file__))
PILL = 'display:inline-block;background:#e0577b;color:#fff;padding:9px 18px;border-radius:999px;text-decoration:none;font-weight:700;font-size:15px;margin:6px 8px 2px 0;'
PARENT = {'sunmoulin': 'ยามาซากิ', 'flavorfield': 'ยามาซากิ', 'flavor field': 'ยามาซากิ', 'เฟลเวอร์ฟิลด์': 'ยามาซากิ', 'saintetoile': 'ยามาซากิ', 'แซงเอตวล': 'ยามาซากิ', 'แซงเอตัวล': 'ยามาซากิ', 'sunmulin': 'ยามาซากิ', 'ซันมูลัน': 'ยามาซากิ', 'ซันมูแลง': 'ยามาซากิ', 'ซันมูลิน': 'ยามาซากิ',
          'แซงเอตัวล': 'ยามาซากิ', 'sainteoile': 'ยามาซากิ', 'flavorfield': 'ยามาซากิ', 'jsbakery': 'ยามาซากิ'}
UNK = {'ไม่ระบุ', '', None}


def cksum(s):
    """checksum เดียวกับใน c_*_join: h = (h*31 + codepoint) mod 2^32 ไล่ทีละ code point"""
    h = 0
    for ch in s:
        h = (h * 31 + ord(ch)) & 0xFFFFFFFF
    return h


def load(p):
    return json.load(open(p, encoding='utf-8'))


def norm(s):
    """= window.__norm ของทูลคิต: ตัดช่องว่าง/zero-width/| · ตัด ๆ ฯ · เหลือเฉพาะไทย a-z A-Z 0-9 (ไม่ lowercase)"""
    s = re.sub(r'[\s\u200b|]+', '', str(s or ''))
    s = re.sub(r'[ๆฯ]', '', s)
    return re.sub(r'[^\u0e00-\u0e7fA-Za-z0-9]', '', s)


def brand_in_cap(brand, cap):
    # 4.1.10 (12 ก.ย. 2026): แบรนด์รูปแบบ "ไทย (English)" ผ่านถ้าส่วนใดส่วนหนึ่งอยู่ในแคปชั่น (ตรงกับ toolkit __brandInCap 4.1.10)
    m = re.match(r'^(.*?)\s*\((.*?)\)\s*$', str(brand or ''))
    parts = [brand] + ([m.group(1), m.group(2)] if m else [])
    c = norm(cap).lower()
    for pb in parts:
        b = norm(pb).lower()
        if len(b) >= 2 and b in c:
            return True
        if any(v == pb and k in c for k, v in PARENT.items()):
            return True
    return False


def main():
    if len(sys.argv) < 2:
        print(__doc__); sys.exit(2)
    d = sys.argv[1]; suggest = '--suggest' in sys.argv
    spec = load(os.path.join(d, 'spec.json'))
    caps = load(os.path.join(d, 'caps.json'))
    tp = os.path.join(HERE, 'tags.json')
    if not os.path.exists(tp):  # ถอดจาก tags.pk (delta~name[~count] ต่อบรรทัด · จาก WP 4 ก.ย. 2026 · เฉพาะแท็กที่มี ≥2 โพสต์)
        acc = 0; tg = {}
        for ln in open(os.path.join(HERE, 'tags.pk'), encoding='utf-8').read().strip().split('\n'):
            q = ln.split('~'); acc += int(q[0]); tg[acc] = {'name': q[1].replace('&amp;', '&'), 'count': int(q[2]) if len(q) > 2 else None}
        json.dump(tg, open(tp, 'w', encoding='utf-8'), ensure_ascii=False)
    tags = {int(k): v for k, v in load(tp).items()}
    byname = {v['name']: k for k, v in tags.items()}
    fb = load(os.path.join(HERE, 'final_brand.json')) if os.path.exists(os.path.join(HERE, 'final_brand.json')) else {}
    # Brand Book รายเดือน sets/final_brand-YYYY-MM.json มาก่อน (ต.ค. 2025 ขึ้นไป — คีย์ nr* ซ้ำกับ พ.ย.) · ไม่มีไฟล์เดือนนั้น → ใช้ final_brand.json เดิม (5 ก.ย. 2026)
    _fbm = {}
    def SHEETROW(k, date):
        mo = str(date or '')[:7]
        if mo not in _fbm:
            pth = os.path.join(HERE, 'sets', 'final_brand-%s.json' % mo)
            _fbm[mo] = load(pth) if os.path.exists(pth) else None
        v = (_fbm[mo] if _fbm[mo] is not None else fb).get(k)
        return (v[0], v[1]) if v and str(v[1]).startswith('Mat') else (None, '')

    PFX = spec['set']; cook = bool(spec.get('cook'))
    foot = ('<p>👀 ตามส่องของใหม่กันต่อได้ที่ <a href="/new/" style="' + PILL + '">ขนมในไทยออกใหม่ 50 รายการล่าสุด</a> '
            'และ <a href="' + spec['month_slug'] + '" style="' + PILL + '">' + spec['month_label'] + '</a></p>\n\n'
            '<strong>เคยกินอันนี้ไหม รสชาติเป็นยังไง เล่าให้ฟังในคอมเมนต์หน่อย</strong>\n\n')

    errs = []; RR = []; items = []; pics = []; slugs = set(); fids = set()

    def E(k, m):
        errs.append('%s: %s' % (k, m))

    for i, r in enumerate(spec['rows']):
        k = r['k']; cap = caps.get(k)
        if cap is None:
            E(k, 'ไม่มีแคปชั่นใน caps.json'); continue
        hay = ' '.join([r.get('title', ''), cap, r.get('brand', '')])
        # R1 traceability
        for lab, s in [('verdict', r.get('verdict', '')), ('intro', r.get('intro', ''))] + [('cap#%d' % (j + 1), b.get('cap', '')) for j, b in enumerate(r['body'])]:
            if s and s not in cap:
                hint = ' (มี NBSP?)' if s.replace(' ', ' ') in cap.replace(' ', ' ') else ''
                E(k, 'R1 %s ไม่ใช่ข้อความในแคปชั่น%s: %r' % (lab, hint, s[:60]))
        if not r.get('verdict') or not r.get('intro'):
            E(k, 'R1 verdict/intro ว่าง')
        # R2 images
        body = r['body']; total = int(r['total']); dropped = r.get('dropped', [])
        usable = total - len(dropped); used = 1 + len(body)
        if len(body) < 2: E(k, 'R2 รูปในเนื้อ %d ใบ น้อยกว่า 2' % len(body))
        if used > 8: E(k, 'R2 ปก+เนื้อ %d ใบ เกิน 8' % used)
        if min(usable, 8) != used:
            E(k, 'R2 ใช้ %d ใบ แต่ต้องใช้ min(usable=%d, 8)=%d — เพิ่มรูป หรือย้ายใบที่ไม่ใช้เข้า dropped พร้อมเหตุผล' % (used, usable, min(usable, 8)))
        for dfile, why in dropped:
            if not str(dfile).strip() or not str(why).strip() or 'เกินเพดาน' in why:
                E(k, 'R2 dropped %r ต้องมีชื่อไฟล์/ลำดับ + เหตุผลจริงต่อใบ (ไม่ใช่ "เกินเพดาน")' % dfile)
        if not (0 <= int(r.get('labelPic', 0)) <= 2): E(k, 'R6 labelPic ต้องเป็น 0 (ปก) หรือ 1/2 (เนื้อใบที่ 1-2)')
        # R3 tags
        tg = []
        for t in r.get('tags', []):
            if isinstance(t, str) and not t.isdigit():
                if t not in byname: E(k, 'R3 ไม่มีแท็กชื่อ %r' % t); continue
                t = byname[t]
            t = int(t)
            if t not in tags:
                print('⚠ %s: แท็ก #%d ไม่อยู่ใน tags.json (แท็กที่มี <2 โพสต์) — gate ในเบราว์เซอร์จะตรวจชื่อให้อีกที' % (k, t)); tg.append(t); continue
            nm = tags[t]['name']
            if norm(nm) not in norm(hay): E(k, 'R3 แท็ก "%s" (#%d) ไม่อยู่ใน title/แคปชั่น/แบรนด์ (เทียบแบบตัดช่องว่าง ตัวพิมพ์ต้องตรง)' % (nm, t))
            tg.append(t)
        # R3b แท็กแบรนด์ (12 ก.ย. 2026 Mat: กดแท็กแบรนด์แล้วต้องขึ้นครบ) — ทุกโพสต์ที่มีแบรนด์ต้องมีแท็ก = canon.tag
        _b = r.get('brand')
        if _b not in UNK:
            if is_variant(_b): E(k, 'R4b แบรนด์ "%s" ไม่ใช่ชื่อมาตรฐาน ต้องใช้ "%s" (brand-canon.json)' % (_b, canonize(_b)))
            _tag, _slug = brand_tag(_b)
            if _tag:
                _have = [tags[t]['name'] for t in tg if isinstance(t, int) and t in tags] + [t for t in tg if isinstance(t, str)]
                if norm(_tag) not in [norm(x) for x in _have]:
                    if _tag in byname: tg.append(byname[_tag]); print('ℹ %s: เติมแท็กแบรนด์ "%s" (#%d) อัตโนมัติ' % (k, _tag, byname[_tag]))
                    else: tg.append(_tag); print('ℹ %s: เติมแท็กแบรนด์ "%s" เป็นชื่อ (build จะหา/สร้างแท็กให้)' % (k, _tag))
        if len(set(tg)) != len(tg): E(k, 'R3 แท็กซ้ำ')
        if len(tg) < 3: E(k, 'R3 แท็กใช้ได้แค่ %d ตัว ต้อง ≥3 (ลอง --suggest)' % len(tg))
        # R4 brand
        brand = r.get('brand'); bsrc = r.get('brandSrc') or ''
        if brand not in UNK and not brand_in_cap(brand, cap):
            if bsrc.startswith('zoom:'):
                pass
            elif bsrc.startswith('sheet:') or not bsrc:
                sb, ssrc = SHEETROW(k, r.get('date'))
                if sb == brand:
                    md = re.search(r'\d{1,2} [ก-๙]+\.(?:[ก-๙]+\.)?(?: \d{4})?', ssrc); md = md.group(0) if md else '?'
                    if not md.endswith('2026'): md += ' 2026'
                    if not bsrc: r['brandSrc'] = bsrc = 'sheet:Brand Sheet %s · Mat ตอบเอง (%s)' % (md, brand)
                    print('ℹ %s: แบรนด์ %s ใช้หลักฐาน sheet: (gate ต้อง ≥ v4.1.8 — Mat กดแล้ว 4 ก.ย. เช็ค window.__VER ตอนเริ่มกะ)' % (k, brand))
                else:
                    E(k, 'R4 แบรนด์ "%s" ไม่อยู่ในแคปชั่น และไม่ใช่คำตอบ Mat ใน Brand Sheet (%s) → ต้องมี brandSrc zoom:<ไฟล์> หรือถาม Mat' % (brand, sb or 'ไม่มีแถวนี้'))
            else:
                E(k, 'R4 brandSrc ต้องขึ้นต้น zoom: หรือ sheet:')
        # R4b labelPic ต้องชี้รูปเดียวกับที่ brandSrc zoom: อ้าง (Opus เจอ 4 ก.ย.: nr8/nr9 อ้าง -1.jpg แต่ labelPic=0 → ตัวตรวจได้รูปปกที่ไม่มีโลโก้)
        m = re.match(r'zoom:%s-\d+-(c|\d+)\.jpg' % re.escape(PFX), bsrc)
        if m:
            want = 0 if m.group(1) == 'c' else int(m.group(1))
            if want > 2: E(k, 'R4 รูปฉลากที่ brandSrc อ้าง (%s) ต้องเป็นปกหรือเนื้อใบ 1-2 (กติกา labelPic)' % bsrc)
            elif int(r.get('labelPic', 0)) != want: E(k, 'R4 labelPic=%s แต่ brandSrc อ้าง %s → labelPic ต้องเป็น %d' % (r.get('labelPic', 0), bsrc, want))
        # R7 trace: ข้อความในโพสต์ (verdict+intro+cap) ต้อง "ชี้กลับ" แคปชั่นได้ ≥90% แบบหน้าต่าง 6 ตัวอักษร
        #     = กติกาเดียวกับ __vtrace ในทูลคิต · ตกเมื่อเรียงประโยคข้ามไปมาจนรอยต่อไม่ตรงกับต้นฉบับ
        #     วิธีแก้: เรียง body ตามลำดับประโยคในแคปชั่น หรือเลือก intro ที่ต่อเนื่องกับ verdict
        o = norm(r['verdict'] + r['intro'] + ''.join(b.get('cap') or '' for b in r['body']))
        ic = norm(cap); tot = max(0, len(o) - 5)
        hit = sum(1 for x in range(tot) if o[x:x + 6] in ic)
        inv = 100 - (round(hit / tot * 100) if tot else 0)
        if inv > 10: E(k, 'R7 เนื้อหาที่ชี้กลับแคปชั่นไม่ได้ %d%% (เพดาน 10%%) → เรียง body ตามลำดับประโยคในแคปชั่น' % inv)
        # R5 price
        price = str(r.get('price', ''))
        if price not in UNK:
            nums = re.findall(r'\d+', price)
            if not nums or not all(n in cap for n in nums): E(k, 'R5 ราคา %s ไม่อยู่ในแคปชั่น (D14: ราคาจากแคปชั่นเท่านั้น)' % price)
        # R6 misc
        if len(r.get('yd', '')) > 160: E(k, 'R6 yd ยาว %d >160' % len(r['yd']))
        if not r.get('yt'): E(k, 'R6 yt ว่าง')
        if re.search(r'[–—]', json.dumps({a: b for a, b in r.items() if not a.startswith('_')}, ensure_ascii=False)): E(k, 'R6 มี – หรือ — ในข้อมูล')
        todo = [f for f in ('title', 'slug', 'roman', 'yt', 'yd', 'verdict', 'intro', 'store', 'name') if str(r.get(f, '')).strip() in ('', 'TODO')]
        if todo: E(k, 'R6 ยังเป็น TODO/ว่าง: ' + ','.join(todo))
        if not re.fullmatch(r'[a-z0-9-]+', r.get('slug', '')): E(k, 'R6 slug ต้องเป็น a-z0-9- เท่านั้น')
        if r['slug'] in slugs: E(k, 'R6 slug ซ้ำในชุด')
        slugs.add(r['slug'])
        if not r.get('dev'): E(k, 'R6 dev ว่าง — ต้องบอกสิ่งที่ตัดสินใจเอง (ไม่มีก็เขียนว่า "ไม่มี")')
        for f in [r['cover']['fid']] + [b['fid'] for b in body]:
            if f in fids: E(k, 'R6 fid ซ้ำ %s' % f)
            fids.add(f)
        if suggest:
            cand = sorted([(v['count'] or 0, t, v['name']) for t, v in tags.items() if len(norm(v['name'])) > 1 and norm(v['name']) in norm(hay)], reverse=True)
            print('%s แท็กที่ใช้ได้: %s' % (k, ' , '.join('%d:%s' % (t, n) for c, t, n in cand[:25])))
        # assemble
        kk = '%s-%d' % (PFX, i)
        pics.append({'key': kk + '-c', 'fid': r['cover']['fid'], 'name': kk + '-c.jpg', 'alt': r['cover']['alt']})
        bl = []
        for j, b in enumerate(body, 1):
            key = '%s-%d' % (kk, j)
            pics.append({'key': key, 'fid': b['fid'], 'name': key + '.jpg', 'alt': b['alt']})
            bl.append([key, b.get('cap', '')])
        items.append({'row': k, 'menu': r['name'], 'slug': r['slug'], 'cap': cap, 'noPin': ('📍' not in cap)})
        RR.append({'k': kk, 'row': k, 'cap': cap, 'date': r['date'], 'title': r['title'], 'slug': r['slug'], 'name': r['name'], 'roman': r['roman'],
                   'brand': brand, 'brandSrc': r.get('brandSrc', ''), 'store': r['store'], 'price': price, 'cat': r['cat'],
                   'verdict': r['verdict'], 'intro': r['intro'], 'body': bl, 'tags': tg, 'yt': r['yt'], 'yd': r['yd'],
                   'src': {'total': total, 'usable': usable, 'dropped': [{'file': f, 'why': w} for f, w in dropped]},
                   'labelPic': int(r.get('labelPic', 0)), 'dev': r['dev'], 'foot': foot})

    if suggest:
        return
    if errs:
        print('❌ ไม่ผ่าน %d ข้อ — ยังไม่สร้างไฟล์' % len(errs))
        for e in errs: print('  ' + e)
        sys.exit(1)

    dec = ''
    dp = os.path.join(HERE, 'decisions.tsv')
    if os.path.exists(dp):
        dec = '\n'.join(l for l in open(dp, encoding='utf-8').read().split('\n') if l.startswith('id\t') or (l.split('\t')[9:10] == ['open']))
    open_js = ('window.__SET=' + json.dumps({'items': items, 'pics': pics}, ensure_ascii=False) + ';window.__DEC=' + json.dumps(dec, ensure_ascii=False) +
               ';window.__T=null;(async()=>{try{window.__T=await window.__open(%s,window.__SET.items,window.__SET.pics,{cook:%s,decisions:window.__DEC});}catch(e){window.__T="ERR "+e.message;}})();'
               % (json.dumps(PFX), 'true' if cook else 'false'))
    ALT = {p['key']: p['alt'] for p in pics}
    build_js = ('window.__RS=' + json.dumps({'R': RR, 'alt': ALT}, ensure_ascii=False) +
                ';window.__T=null;(async()=>{const U=k=>window.__MAP[k].url;const A=k=>window.__RS.alt[k];const list=[];'
                'for(const r of window.__RS.R){const body=r.body.map(([k,c])=>({u:U(k),a:A(k),c:c}));'
                'const tags=[];for(const t of r.tags){if(typeof t==="string"){let js=await window.__api("tags?search="+encodeURIComponent(t)+"&per_page=20&_fields=id,name");const NN=x=>String(x||"").toLowerCase().replace(/[\\s\\-\'’.()]/g,"");let ex=(js||[]).find(x=>x.name===t)||(js||[]).find(x=>NN(x.name)===NN(t));if(!ex){const cr=await window.__api("tags",{method:"POST",body:JSON.stringify({name:t})});if(cr&&cr.id)ex=cr;else if(cr&&cr.data&&cr.data.term_id)ex={id:cr.data.term_id};}if(!ex||!ex.id){throw new Error("tag "+t);}if(!tags.includes(ex.id))tags.push(ex.id);}else if(!tags.includes(t))tags.push(t);}'
                'const content=window.__rev({verdict:r.verdict,intro:r.intro,body,name:r.name,roman:r.roman,brand:r.brand,store:r.store,price:r.price,cat:r.cat,date:r.date.slice(0,10),cover:{u:U(r.k+"-c")},foot:r.foot});'
                'const it={title:r.title,slug:r.slug,status:"publish",date:r.date,categories:[12],tags:tags,featured_media:window.__MAP[r.k+"-c"].id,content,'
                'meta:{_yoast_wpseo_title:r.yt,_yoast_wpseo_metadesc:r.yd},__k:r.k,__cap:r.cap,__coverUrl:U(r.k+"-c"),__src:r.src,__labelPic:r.labelPic,__brand:r.brand,__price:r.price,__dev:r.dev,__row:r.row};'
                'if(r.brandSrc)it.__brandSrc=r.brandSrc;list.push(it);}window.__LIST=list;try{window.__T=await window.__vgate(list,false);}catch(e){window.__T="ERR "+e.message;}})();')
    for nm, js in (('open', open_js), ('build', build_js)):
        assert '`' not in js and '${' not in js, nm
        open(os.path.join(d, nm + '.js'), 'w', encoding='utf-8').write(js)
        N = 5800; parts = [js[x:x + N] for x in range(0, len(js), N)]
        P = 'P' if nm == 'open' else 'Q'
        hs = []
        for n, p in enumerate(parts, 1):
            hs.append(cksum(p))
            open(os.path.join(d, 'c_%s%d.txt' % (P, n)), 'w', encoding='utf-8').write('window.__%s%d=String.raw`%s`;window.__%s%d.length' % (P, n, p, P, n))
        # join: คำนวณ checksum ของทุกชิ้นในเบราว์เซอร์ เทียบกับที่ mkset คำนวณจากไฟล์ — ต่างแม้ชิ้นเดียว (เช่น NBSP กลายเป็นช่องว่าง) = ไม่ eval
        join = ('var H=%s;var K=function(s){var h=0;for(var c of s){h=(Math.imul(h,31)+c.codePointAt(0))>>>0;}return h;};var bad=[];'
                'for(var i=1;i<=%d;i++){var s=window["__%s"+i];if(typeof s!=="string"){bad.push(i+":missing");continue;}var h=K(s);if(h!==H[i-1])bad.push(i+":"+h+"vs"+H[i-1]);}'
                'if(bad.length){"CHUNK MISMATCH "+bad.join(",")+" — วางชิ้นนั้นใหม่จากไฟล์"}else{var J=%s;(0,eval)(J);"ok "+J.length}') % (
                json.dumps(hs), len(parts), P, '+'.join('window.__%s%d' % (P, n) for n in range(1, len(parts) + 1)))
        open(os.path.join(d, 'c_%s_join.txt' % P), 'w', encoding='utf-8').write(join)
        print('%s.js %d chars → %d ชิ้น (c_%s1..%d + c_%s_join)' % (nm, len(js), len(parts), P, len(parts), P))
    # kn bridge (18 ก.ย. 2026): ข้อมูลล้วนที่ open.js/build.js ฝังอยู่ — ตัวรัน Node ส่งเป็น JSON เข้าแท็บ ไม่ต้อง eval โค้ด
    json.dump({'set': PFX, 'cook': cook, 'items': items, 'pics': pics, 'R': RR, 'alt': ALT, 'decisions': dec}, open(os.path.join(d, 'bridge.json'), 'w', encoding='utf-8'), ensure_ascii=False)
    json.dump({'set': PFX, 'rows': [r['row'] for r in RR], 'slugs': [r['slug'] for r in RR], 'pics': len(pics)}, open(os.path.join(d, 'state.json'), 'w', encoding='utf-8'), ensure_ascii=False, indent=1)
    print('✅ ผ่านทุกข้อ · %d แถว · รูป %d ใบ' % (len(RR), len(pics)))


if __name__ == '__main__':
    main()
