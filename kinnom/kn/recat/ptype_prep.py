# -*- coding: utf-8 -*-
"""ptype_prep.py — builds blind input files for the product-type classifier: gold (reference, answer hidden) and the bug set are
shuffled together so the classifier cannot tell them apart. 24 gold rows are held out as worked examples for the prompt."""
import json, re, os, sys, html, random
ROOT = os.path.abspath(os.path.join(os.path.dirname(__file__), '..', '..'))
ROW = re.compile(r'<th scope="row">([^<]+)</th>\s*<td>([\s\S]*?)</td>')
def record(c): return {k.strip(): html.unescape(re.sub(r'<[^>]+>', '', v)).strip() for k, v in ROW.findall(c or '')}
def lead(c):
    m = re.search(r'<strong>([\s\S]*?)</strong>', c or '')
    t = html.unescape(re.sub(r'<[^>]+>', ' ', m.group(1) if m else '')); return re.sub(r'\s+', ' ', t).strip()[:140]
P = {11: 'S', 15: 'F', 3655: 'D'}
sys.stdout.reconfigure(encoding='utf-8')
ref = json.load(open(os.path.join(ROOT, 'recat', 'reference.json'), encoding='utf-8'))
aff = json.load(open(os.path.join(ROOT, 'recat', 'affected.json'), encoding='utf-8'))
gold = {}
rows = []
for p in ref:
    if 'kn-record' not in p['content']: continue
    pc = [P[c] for c in p['categories'] if c in P]
    if len(pc) != 1: continue
    gold[p['id']] = pc[0]; r = record(p['content']); rows.append((p['id'], r.get('ร้านที่เจอ', ''), r.get('ชื่อสินค้า', ''), html.unescape(p['title']), lead(p['content'])))
random.seed(20260921); random.shuffle(rows)
# held-out examples: 8 of each class where available
ex = []; cnt = {'S': 0, 'F': 0, 'D': 0}
for row in list(rows):
    g = gold[row[0]]
    if cnt[g] < 8: ex.append(row + (g,)); cnt[g] += 1; rows.remove(row); del gold[row[0]]
for p in aff:
    r = record(p['content'])
    if r.get('หมวด') != 'ขนม': continue
    rows.append((p['id'], r.get('ร้านที่เจอ', ''), r.get('ชื่อสินค้า', ''), html.unescape(p['title']), lead(p['content'])))
random.shuffle(rows)
N = 6; size = (len(rows) + N - 1) // N
clean = lambda s: re.sub(r'[\t\r\n]+', ' ', s)
for i in range(N):
    with open(os.path.join(ROOT, 'recat', 'ptype', 'in-%d.tsv' % (i + 1)), 'w', encoding='utf-8', newline='') as f:
        f.write('id\tstore\tproduct\ttitle\tlead\n')
        for row in rows[i * size:(i + 1) * size]: f.write('\t'.join(clean(str(x)) for x in row) + '\n')
json.dump(gold, open(os.path.join(ROOT, 'recat', 'ptype', '_gold.json'), 'w'))
with open(os.path.join(ROOT, 'recat', 'ptype', 'examples.tsv'), 'w', encoding='utf-8', newline='') as f:
    for row in ex: f.write('\t'.join(clean(str(x)) for x in row) + '\n')
print('gold (hidden) %d · examples held out %d · total rows %d in %d files of ≤%d' % (len(gold), len(ex), len(rows), N, size))
