# -*- coding: utf-8 -*-
"""sheet_rows.py — which stores go on Mat's review sheet, with a SUGGESTION (never a decision) and its evidence.
On the sheet: stores with >=2 posts, plus any store where some evidence says "not a café" (removing Cafe needs Mat).
Not on the sheet: single-post stores with no not-café evidence → keep Cafe (Mat's choice, 21 Sep 2026)."""
import csv, json, os, re, sys
ROOT = os.path.abspath(os.path.join(os.path.dirname(__file__), '..', '..'))
sys.stdout.reconfigure(encoding='utf-8')
rows = list(csv.DictReader(open(os.path.join(ROOT, 'recat', 'stores_review.tsv'), encoding='utf-8'), delimiter='\t'))
out = []; keep = 0; keep_posts = 0
for r in rows:
    n = int(r['posts']); ev = r['evidence']
    m = re.search(r'ref:([^;|]+)', ev); c = nc = 0
    if m:
        for part in m.group(1).split(','):
            k, v = part.strip().split('='); c += int(v) if k == 'cafe' else 0; nc += int(v) if k == 'notcafe' else 0
    l8 = (re.search(r'list800:(\w+)', ev) or [None, ''])[1]
    sug = ''; why = []
    if c + nc:
        why.append('ชุดที่จัดถูก: ติด Cafe %d / ไม่ติด %d โพสต์' % (c, nc))
        if c >= 3 * max(nc, 1) or (nc == 0 and c): sug = 'cafe'
        elif nc >= 3 * max(c, 1) or (c == 0 and nc): sug = 'not'
    if l8:
        why.append('ลิสต์ 800 ชื่อ (ส.ค.): ' + l8)
        if not sug: sug = 'cafe' if l8 == 'cafe' else ('not' if l8 in ('brand', 'retail') else '')
    if 'kw:cafe-ish' in ev:
        why.append('ชื่อร้านมีคำแนวคาเฟ่/เบเกอรี่')
        if not sug: sug = 'cafe'
    says_not = nc > 0 or l8 in ('brand', 'retail')
    if n >= 2 or says_not:
        out.append({'k': 's%03d' % len(out), 'store': r['store'], 'spellings': r['spellings'], 'posts': n, 'suggest': sug, 'why': ' · '.join(why), 'examples': r['examples']})
    else:
        keep += 1; keep_posts += n
json.dump(out, open(os.path.join(ROOT, 'recat', 'sheet_rows.json'), 'w', encoding='utf-8'), ensure_ascii=False, indent=1)
sp = sum(x['posts'] for x in out)
print('on the sheet: %d stores covering %d posts · suggestions: cafe %d / not %d / none %d' % (len(out), sp, sum(x['suggest'] == 'cafe' for x in out), sum(x['suggest'] == 'not' for x in out), sum(not x['suggest'] for x in out)))
print('not on the sheet (single post, nothing says not-café → keep Cafe): %d stores, %d posts' % (keep, keep_posts))
