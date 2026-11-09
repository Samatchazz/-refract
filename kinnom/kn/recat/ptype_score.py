# -*- coding: utf-8 -*-
"""ptype_score.py — scores the blind classifier outputs against the hidden gold labels (reference batch)."""
import json, glob, os, sys, collections
ROOT = os.path.abspath(os.path.join(os.path.dirname(__file__), '..', '..'))
sys.stdout.reconfigure(encoding='utf-8')
gold = json.load(open(os.path.join(ROOT, 'recat', 'ptype', '_gold.json')))
out = {}
files = sorted(glob.glob(os.path.join(ROOT, 'recat', 'ptype', 'out-*.json')))
for f in files: out.update(json.load(open(f, encoding='utf-8')))
ref = {p['id']: p for p in json.load(open(os.path.join(ROOT, 'recat', 'reference.json'), encoding='utf-8'))}
N = {'S': 'Snack', 'F': 'Food', 'D': 'Drinks'}
conf = collections.Counter(); wrong = []
for i, g in gold.items():
    if i not in out: continue
    conf[(g, out[i])] += 1
    if out[i] != g: wrong.append((N[g], N[out[i]], ref[int(i)]['title'][:70]))
n = sum(conf.values()); ok = sum(v for (g, q), v in conf.items() if g == q)
print('files %d · gold rows scored %d of %d · agreement %d (%.1f%%)' % (len(files), n, len(gold), ok, 100.0 * ok / max(n, 1)))
for g in 'SFD':
    tot = sum(v for (a, b), v in conf.items() if a == g); hit = conf[(g, g)]; pred = sum(v for (a, b), v in conf.items() if b == g)
    print('  %-6s gold %3d · found %3d (recall %.0f%%) · precision %.0f%%' % (N[g], tot, hit, 100.0 * hit / max(tot, 1), 100.0 * hit / max(pred, 1)))
print('disagreements (site says → classifier says):')
for w in wrong: print('   %s → %s | %s' % w)
