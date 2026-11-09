# -*- coding: utf-8 -*-
"""stores.py — READ-ONLY. Collapses spelling variants of the "other" store strings and pre-sorts them with evidence only:
brand-canon aliases, the Aug 2026 800-name list (data.json 'b' field), what the correctly-categorised reference batch did with
the same store, and plain keywords. Nothing here decides; it sizes the review Mat would do. Output: recat/stores_review.tsv"""
import json, re, os, sys, html, collections
ROOT = os.path.abspath(os.path.join(os.path.dirname(__file__), '..', '..'))
sys.path.insert(0, os.path.join(ROOT, 'tools')); sys.path.insert(0, os.path.dirname(__file__))
from canon import canonize
ROW = re.compile(r'<th scope="row">([^<]+)</th>\s*<td>([\s\S]*?)</td>')
def record(c): return {k.strip(): html.unescape(re.sub(r'<[^>]+>', '', v)).strip() for k, v in ROW.findall(c or '')}
def key(s):
    s = canonize(s) or s
    s = re.sub(r'\s*[\(（][^\)）]*[\)）]', '', s)          # drop "(English)" half
    s = re.sub(r'สาขา.*$|branch.*$', '', s, flags=re.I)
    return re.sub(r"[\s\-'’.&]", '', s).lower()
from analyze import chain  # same retail regexes
CAFE_KW = re.compile(r'cafe|café|คาเฟ่|coffee|กาแฟ|roaster|tea\b|ชา|bakery|เบเกอรี่|bake|patisserie|dessert|ขนมหวาน|ไอศกรีม|gelato|ice\s*cream|donut|โดนัท|crepe|เครป|bingsu|บิงซู', re.I)

def main():
    sys.stdout.reconfigure(encoding='utf-8')
    aff = json.load(open(os.path.join(ROOT, 'recat', 'affected.json'), encoding='utf-8'))
    ref = json.load(open(os.path.join(ROOT, 'recat', 'reference.json'), encoding='utf-8'))
    old = {key(r['n']): r['b'] for r in json.load(open(os.path.join(ROOT, 'work', 'brand800', 'data.json'), encoding='utf-8'))}
    # what did the good batch do with each store?
    refuse = collections.defaultdict(collections.Counter)
    for p in ref:
        if 'kn-record' not in p['content']: continue
        s = record(p['content']).get('ร้านที่เจอ', '')
        if s and not chain(s): refuse[key(s)]['cafe' if 12 in p['categories'] else 'notcafe'] += 1
    groups = collections.defaultdict(lambda: {'names': collections.Counter(), 'posts': 0, 'ex': []})
    bug = [p for p in aff if record(p['content']).get('หมวด') == 'ขนม']
    for p in bug:
        r = record(p['content']); s = r.get('ร้านที่เจอ', '')
        if not s or s == 'ไม่ระบุ' or chain(s): continue
        g = groups[key(s)]; g['names'][s] += 1; g['posts'] += 1
        if len(g['ex']) < 2: g['ex'].append(p['title'][:50])
    rows = []
    for k, g in groups.items():
        ev = []
        if k in refuse: ev.append('ref:' + ','.join('%s=%d' % kv for kv in refuse[k].items()))
        if k in old: ev.append('list800:' + old[k])
        name = g['names'].most_common(1)[0][0]
        if CAFE_KW.search(name): ev.append('kw:cafe-ish')
        rows.append((g['posts'], name, ' | '.join(n for n, _ in g['names'].most_common()), ' ; '.join(ev), ' / '.join(g['ex'])))
    rows.sort(reverse=True)
    with open(os.path.join(ROOT, 'recat', 'stores_review.tsv'), 'w', encoding='utf-8', newline='') as f:
        f.write('posts\tstore\tspellings\tevidence\texamples\n')
        for r in rows: f.write('\t'.join(str(x) for x in r) + '\n')
    n_posts = sum(r[0] for r in rows)
    with_ev = [r for r in rows if r[3]]; ref_ev = [r for r in rows if 'ref:' in r[3]]
    print('bug set (หมวด=ขนม): %d posts · of the 1,557, the other %d sit in Dec 2025–Aug 2026 months from the correct generator' % (len(bug), len(aff) - len(bug)))
    print('"other" stores in the bug set: %d posts → %d distinct stores after merging spellings (was 371 raw strings)' % (n_posts, len(rows)))
    print('stores with some evidence: %d (%d posts) · with evidence from the good batch itself: %d (%d posts)' % (len(with_ev), sum(r[0] for r in with_ev), len(ref_ev), sum(r[0] for r in ref_ev)))
    print('stores with NO evidence at all: %d (%d posts) · of which used once: %d' % (len(rows) - len(with_ev), n_posts - sum(r[0] for r in with_ev), sum(1 for r in rows if not r[3] and r[0] == 1)))
    print('\ntop 30:'); [print('  %3d  %-28s %s' % (r[0], r[1][:28], r[3])) for r in rows[:30]]
main()
