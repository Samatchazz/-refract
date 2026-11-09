# -*- coding: utf-8 -*-
"""
plan2spec.py — แปลง photo-plan (ผลจาก photo-plan-prompt.md) + คิวเดือน + Brand Book + แคปชั่น → spec.json สำหรับ mkset.py

ใช้:  python3 plan2spec.py <set> <plan.json> <items.tsv> <caps.json> <outdir> [row1,row2,...]
เช่น: python3 plan2spec.py novb sets/ab-plan-sonnet.json nov2025-items.tsv sets/nov-caps-nr10-29.json ../novb nr10,nr11,...,nr19

สิ่งที่เติมให้อัตโนมัติ (ห้ามแก้เอง): cover/body/dropped/total จาก plan · labelPic ใส่ 0 เสมอ (gate รับเฉพาะ 0 · ค่าจริงจาก plan อยู่ใน dev) · brand/brandSrc จาก Brand Book (final_brand.json ข้างๆ) หรือแคปชั่น ·
  store จากบรรทัด 📍 · price จากบรรทัด 💸 (ตัวเลขแรก) · date จากคิว + เวลา 10:00/13:00/16:00/19:00 วนตามลำดับ · name จากชื่อเมนูในคิว · cat "ขนม"
สิ่งที่ AI ต้องเติมเอง (ช่องว่าง "TODO"): title, slug, roman, yt, yd, verdict, intro, tags (ใช้ mkset --suggest) · verdict/intro ต้องเป็นประโยคในแคปชั่นตรงตัว
dev เติมให้บางส่วน (รูปว่าง/ตัดรูป) — เพิ่มสิ่งที่ตัดสินใจเองต่อท้าย
spec ที่ได้ยังไม่ผ่าน mkset จนกว่าจะเติม TODO ครบ — นี่คือความตั้งใจ
"""
import json, sys, os, re

HERE = os.path.dirname(os.path.abspath(__file__))
# คีย์เป็น YYYY-MM (ก.ย. มี 2 ปี: 2025 backfill + 2026 ของใหม่ — MM='09' ชนกัน จึงต้องแยกด้วยปี)
MONTH = {'2025-11': ('/new-7-11-snacks-2025-11/', 'ขนมใหม่ 7-11 เดือนพฤศจิกายน 2025'),
         '2025-10': ('/new-7-11-snacks-2025-10/', 'ขนมใหม่ 7-11 เดือนตุลาคม 2025'),
         '2025-09': ('/new-7-11-snacks-2025-09/', 'ขนมใหม่ 7-11 เดือนกันยายน 2025'),
         '2025-08': ('/new-7-11-snacks-2025-08/', 'ขนมใหม่ 7-11 เดือนสิงหาคม 2025'),
         '2025-07': ('/new-7-11-snacks-2025-07/', 'ขนมใหม่ 7-11 เดือนกรกฎาคม 2025'),
         '2025-06': ('/new-7-11-snacks-2025-06/', 'ขนมใหม่ 7-11 เดือนมิถุนายน 2025'),
         '2025-05': ('/new-7-11-snacks-2025-05/', 'ขนมใหม่ 7-11 เดือนพฤษภาคม 2025'),
         '2025-04': ('/new-7-11-snacks-2025-04/', 'ขนมใหม่ 7-11 เดือนเมษายน 2025'),
         '2025-03': ('/new-7-11-snacks-2025-03/', 'ขนมใหม่ 7-11 เดือนมีนาคม 2025'),
         '2025-02': ('/new-7-11-snacks-2025-02/', 'ขนมใหม่ 7-11 เดือนกุมภาพันธ์ 2025'),
    '2025-01': ('/new-7-11-snacks-2025-01/', 'ขนมใหม่ 7-11 เดือนมกราคม 2025'),
    '2024-12': ('/new-7-11-snacks-2024-12/', 'ขนมใหม่ 7-11 เดือนธันวาคม 2024'),
    '2024-11': ('/new-7-11-snacks-2024-11/', 'ขนมใหม่ 7-11 เดือนพฤศจิกายน 2024'),
    '2024-10': ('/new-7-11-snacks-2024-10/', 'ขนมใหม่ 7-11 เดือนตุลาคม 2024'),
         '2026-09': ('/new-7-11-snacks-2026-09/', 'ขนมใหม่ 7-11 เดือนกันยายน 2026')}
SLOTS = ['10:00:00', '13:00:00', '16:00:00', '19:00:00']


def main():
    if len(sys.argv) < 6:
        print(__doc__); sys.exit(2)
    setname, planp, itemsp, capsp, outdir = sys.argv[1:6]
    want = sys.argv[6].split(',') if len(sys.argv) > 6 else None
    plan = json.load(open(planp, encoding='utf-8'))
    caps = json.load(open(capsp, encoding='utf-8'))
    fb0 = json.load(open(os.path.join(HERE, 'final_brand.json'), encoding='utf-8'))  # Brand Book เดิม (พ.ย. 2025 = nr* · ก.ย. 2026 = sr*)
    fbm = {}  # Brand Book รายเดือน sets/final_brand-YYYY-MM.json (ตั้งแต่ ต.ค. 2025 — คีย์ nr* ซ้ำกับ พ.ย. จึงแยกไฟล์ตามเดือน, 5 ก.ย. 2026)
    def FB(k, date):
        mo = date[:7]
        if mo not in fbm:
            pth = os.path.join(HERE, 'sets', 'final_brand-%s.json' % mo)
            fbm[mo] = json.load(open(pth, encoding='utf-8')) if os.path.exists(pth) else None
        return (fbm[mo] if fbm[mo] is not None else fb0).get(k, ['ไม่ระบุ', ''])
    items = {}
    for l in open(itemsp, encoding='utf-8'):
        if not l.strip() or l.startswith('#'): continue
        c = l.rstrip('\n').split('\t')
        if c[0].isdigit(): items['nr' + c[0]] = c
        elif c[0].startswith('nr') or c[0].startswith('sr'): items[c[0]] = c
    rows = []; slot = 0; lastdate = None
    for k in (want or list(plan)):
        p = plan[k]; it = items.get(k); cap = caps[k]
        if not it: print('⚠ %s ไม่อยู่ในคิว' % k); continue
        date = it[1]
        if date != lastdate: slot = 0; lastdate = date
        t = SLOTS[slot % len(SLOTS)]; slot += 1
        brand, src = FB(k, date)[:2]
        m_store = re.search(r'📍\s*([^\n]+)', cap); m_price = re.search(r'💸\s*([^\n]+)', cap)
        store = m_store.group(1).strip() if m_store else 'TODO'
        price = (re.search(r'\d+', m_price.group(1)).group(0) if m_price and re.search(r'\d+', m_price.group(1)) else 'ไม่ระบุ')
        if m_price and re.search(r'ประมาณ|มั้ง|น่าจะ', m_price.group(1)): price = 'ไม่ระบุ'
        body = [{'fid': b['fid'], 'alt': b['alt'], 'cap': b['cap']} for b in p['body']]
        total = 1 + len(body) + len(p['dropped'])
        pb = os.path.basename(planp).replace('ab-plan-', '').replace('.json', '')
        pdate = '4 ก.ย.' if pb in ('opus', 'sonnet') else __import__('datetime').datetime.fromtimestamp(os.path.getmtime(planp)).strftime('%-d/%-m/%Y')
        dev = ['photo-plan โดย %s (%s) · ปก %s · ใช้ %d/%d ใบ' % (pb, pdate, p['cover']['name'], 1 + len(body), total)]
        empties = [i + 1 for i, b in enumerate(body) if not b['cap']]
        if empties: dev.append('รูปในเนื้อใบที่ %s ไม่มีข้อความรองรับ ปล่อยว่างตามกฎข้อ 8' % ','.join(map(str, empties)))
        if brand != 'ไม่ระบุ' and src.startswith('Mat'):
            md = re.search(r'\d{1,2} [ก-๙]+\.(?:[ก-๙]+\.)?(?: \d{4})?', src); dev.append('แบรนด์ %s จาก Brand Book (Mat ตอบ %s)' % (brand, md.group(0) if md else '?'))
        if p.get('notes'): dev.append('photo-plan note: ' + p['notes'][:160])
        lp = p.get('labelPic', 0)
        if lp not in (0, 'cover', 'none'):  # gate 4.1.8 รับ __labelPic เฉพาะ 0/cover/none (novc 4 ก.ย. ตีตก 4 แถว) → ใส่ 0 เสมอ เก็บค่าจริงไว้ใน dev
            dev.append('photo-plan ระบุรูปฉลากอยู่รูปเนื้อใบที่ %s · gate 4.1.8 รับ labelPic เฉพาะ 0 (ปก) จึงใส่ 0' % lp); lp = 0
        if not m_price: dev.append('แคปชั่นไม่มีบรรทัด 💸 ราคา ไม่ระบุ')
        if not m_store: dev.append('แคปชั่นไม่มีบรรทัด 📍 · ร้านต้องเติมจากบริบทแคปชั่น (TODO)')
        rows.append({'k': k, 'date': '%sT%s' % (date, t), 'slug': 'TODO', 'title': 'TODO', 'name': it[3].strip(), 'roman': 'TODO',
                     'brand': brand, 'brandSrc': '', 'store': store, 'price': price, 'cat': 'ขนม', 'tags': [],
                     'yt': 'TODO', 'yd': 'TODO', 'verdict': 'TODO', 'intro': 'TODO',
                     'cover': {'fid': p['cover']['fid'], 'alt': p['cover']['alt']}, 'body': body,
                     'total': total, 'dropped': p['dropped'], 'labelPic': lp, 'dev': dev,
                     '_plan_brand_read': p.get('brand_read', {}), '_name_on_label': p.get('name_on_label', '')})
    mm = rows[0]['date'][:7] if rows else '2025-11'
    spec = {'set': setname, 'cook': False, 'month_slug': MONTH[mm][0], 'month_label': MONTH[mm][1], 'rows': rows}
    os.makedirs(outdir, exist_ok=True)
    json.dump(spec, open(os.path.join(outdir, 'spec.json'), 'w', encoding='utf-8'), ensure_ascii=False, indent=1)
    json.dump({k: caps[k] for k in [r['k'] for r in rows]}, open(os.path.join(outdir, 'caps.json'), 'w', encoding='utf-8'), ensure_ascii=False, indent=1)
    todo = sum(1 for r in rows for f in ('slug', 'title', 'roman', 'yt', 'yd', 'verdict', 'intro') if r[f] == 'TODO') + sum(1 for r in rows if not r['tags']) + sum(1 for r in rows if r['store'] == 'TODO')
    print('✅ spec skeleton %d แถว → %s/spec.json · ช่อง TODO ที่ต้องเติม %d · แล้วรัน mkset.py' % (len(rows), outdir, todo))


if __name__ == '__main__':
    main()
