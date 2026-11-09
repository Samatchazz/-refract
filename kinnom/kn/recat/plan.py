# -*- coding: utf-8 -*-
"""plan.py — READ-ONLY. Builds recat/plan.json (+ plan.csv for Mat) from: affected.json, the product-type classifier outputs,
Mat's café answers (recat/cafe_answers.json, exported from the sheet), and the retail-chain rules. Rule approved by Mat 21 Sep 2026:
  product category = exactly one of Snack 11 / Food 15 / Drinks 3655
  store is 7-11 → add category 3540 and tag 21
  retail chain / online / "ไม่ระบุ" → Cafe removed
  other store: Mat said "not a café" → Cafe removed; Mat said café / unsure / not answered / store not on the sheet → Cafe kept
  only the 1,490 bug-set posts (record-table หมวด == "ขนม"); the 67 Cafe-only posts of the correct generator are not touched."""
import json, os, re, sys, csv, html, glob, collections
ROOT = os.path.abspath(os.path.join(os.path.dirname(__file__), '..', '..'))
sys.path.insert(0, os.path.dirname(__file__)); sys.path.insert(0, os.path.join(ROOT, 'tools'))
from analyze import chain
from stores import key, record
sys.stdout.reconfigure(encoding='utf-8')
PC = {'S': 11, 'F': 15, 'D': 3655}; NAME = {11: 'Snack', 12: 'Cafe', 15: 'Food', 3655: 'Drinks', 3540: '7-11'}
aff = json.load(open(os.path.join(ROOT, 'recat', 'affected.json'), encoding='utf-8'))
ptype = {}
for f in glob.glob(os.path.join(ROOT, 'recat', 'ptype', 'out-*.json')): ptype.update(json.load(open(f, encoding='utf-8')))
sheet = {key(r['store']): r for r in json.load(open(os.path.join(ROOT, 'recat', 'sheet_rows.json'), encoding='utf-8'))}
ap = os.path.join(ROOT, 'recat', 'cafe_answers.json')
answers = json.load(open(ap, encoding='utf-8')) if os.path.exists(ap) else {}   # {k: 'cafe'|'not'|'skip'}
plan = []; rows = []; missing = []; why_c = collections.Counter(); allcafe = []
for p in aff:
    r = record(p['content'])
    if r.get('หมวด') != 'ขนม': continue
    t = ptype.get(str(p['id']))
    if t not in PC: missing.append(p['id']); continue
    store = r.get('ร้านที่เจอ', ''); ch = chain(store); cats = [PC[t]]; add = []
    if ch == '7-11':
        cats.append(3540); add = [21] if 21 not in p['tags'] else []; cafe_why = 'ร้านค้าปลีก 7-11 → ถอด Cafe'
        if re.search(r'all\s*caf', store + ' ' + p['title'], re.I): allcafe.append(p['id'])
    elif ch: cafe_why = 'ร้านค้าปลีก %s → ถอด Cafe' % ch
    elif store in ('', 'ไม่ระบุ') or store.startswith('ไม่ระบุ'): cafe_why = 'ไม่ระบุร้าน → ถอด Cafe (ตามชุดที่จัดถูก)'
    else:
        s = sheet.get(key(store)); a = answers.get(s['k']) if s else None
        if a == 'not': cafe_why = 'Mat: ไม่ใช่คาเฟ่ → ถอด Cafe'
        else:
            cats.append(12)
            cafe_why = {'cafe': 'Mat: คาเฟ่ → เก็บ Cafe', 'skip': 'Mat: ไม่แน่ใจ → เก็บ Cafe'}.get(a) or ('ยังไม่ตอบในชีต → เก็บ Cafe' if s else 'ร้านโพสต์เดียว ไม่มีหลักฐาน → เก็บ Cafe')
    why_c[cafe_why.split(' → ')[0].split(' ')[0] + ' → ' + cafe_why.split(' → ')[1]] += 1
    cats = sorted(set(cats))
    plan.append({'id': p['id'], 'expectCats': sorted(p['categories']), 'cats': cats, 'addTags': add})
    rows.append([p['id'], p['link'], p['date'][:10], html.unescape(p['title']), store, {'S': 'Snack', 'F': 'Food', 'D': 'Drinks'}[t], cafe_why,
                 '+'.join(NAME.get(c, str(c)) for c in sorted(p['categories'])), '+'.join(NAME.get(c, str(c)) for c in cats), 'เพิ่มแท็ก 7-11' if add else ''])
json.dump(plan, open(os.path.join(ROOT, 'recat', 'plan.json'), 'w'), indent=0)
with open(os.path.join(ROOT, 'recat', 'plan.csv'), 'w', encoding='utf-8-sig', newline='') as f:
    w = csv.writer(f); w.writerow(['id', 'ลิงก์', 'วันที่', 'ชื่อโพสต์', 'ร้านที่เจอ', 'ชนิดสินค้า (AI)', 'เหตุผลเรื่อง Cafe', 'หมวดเดิม', 'หมวดใหม่', 'แท็ก']); w.writerows(rows)
print('plan rows: %d · not classified yet: %d · café answers loaded: %d' % (len(plan), len(missing), len(answers)))
print('new category sets:', collections.Counter('+'.join(NAME.get(c, str(c)) for c in p['cats']) for p in plan).most_common())
print('Cafe decision:', why_c.most_common())
print('tag 7-11 to add: %d · 7-11 posts that mention All Café (Cafe removed by the retail rule — check): %d %s' % (sum(1 for p in plan if p['addTags']), len(allcafe), allcafe[:8]))
