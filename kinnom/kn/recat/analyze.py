# -*- coding: utf-8 -*-
"""analyze.py — READ-ONLY. Parses the kn-record table of the fetched posts and measures
(a) the affected set, (b) what rule the correctly-categorised reference batch (Dec 2025–Aug 2026) actually follows."""
import json, re, sys, html, collections, os
ROOT = os.path.abspath(os.path.join(os.path.dirname(__file__), '..', '..'))
CAT = {1: 'Uncat', 11: 'Snack', 12: 'Cafe', 13: 'Cooking', 14: 'Promo', 15: 'Food', 3540: '7-11', 3655: 'Drinks', 3999: 'รวมของใหม่', 4006: 'ของเล่น'}
ROW = re.compile(r'<th scope="row">([^<]+)</th>\s*<td>([\s\S]*?)</td>')

def record(content):
    o = {}
    for k, v in ROW.findall(content or ''):
        o[k.strip()] = html.unescape(re.sub(r'<[^>]+>', '', v)).strip()
    return o

RETAIL = [('7-11', r'7\s*-?\s*11|7\s*-?\s*eleven|เซเว่น|seven'), ('Donki', r'donki|ดองกิ'), ('Tops', r'tops|ท็อปส์|ท๊อปส์'), ('Makro', r'makro|แม็คโคร|แมคโคร'),
          ('Lawson', r'lawson|ลอว์สัน'), ('Gourmet', r'gourmet|กูร์เมต์|กรูเมต์'), ('Villa', r'villa|วิลล่า'), ('Big C', r'big\s*c|บิ๊กซี'), ('Lotus', r"lotus|โลตัส"),
          ('FamilyMart', r'family\s*mart|แฟมิลี่มาร์ท'), ('CJ', r'\bcj\b|ซีเจ'), ('MaxValu', r'max\s*valu|แม็กซ์แวลู'), ('Foodland', r'foodland|ฟู้ดแลนด์'), ('Shopee/online', r'shopee|lazada|ออนไลน์|online|tiktok')]
def chain(store):
    for name, rx in RETAIL:
        if re.search(rx, store or '', re.I): return name
    return None

def main():
    sys.stdout.reconfigure(encoding='utf-8')
    aff = json.load(open(os.path.join(ROOT, 'recat', 'affected.json'), encoding='utf-8'))
    ref = json.load(open(os.path.join(ROOT, 'recat', 'reference.json'), encoding='utf-8'))
    print('== affected:', len(aff))
    norec = [p['id'] for p in aff if 'kn-record' not in p['content']]
    print('without kn-record table:', len(norec), norec[:10])
    by_month = collections.Counter(p['date'][:7] for p in aff)
    print('months:', ' '.join('%s:%d' % kv for kv in sorted(by_month.items())))
    print('category sets:', collections.Counter(tuple(sorted(p['categories'])) for p in aff).most_common(5))
    st = collections.Counter(); other = collections.Counter(); typ = collections.Counter(); tag711 = 0; n711 = 0
    for p in aff:
        r = record(p['content']); s = r.get('ร้านที่เจอ', ''); c = chain(s)
        st[c or ('ไม่ระบุ' if s in ('', 'ไม่ระบุ') else 'other')] += 1
        if not c and s not in ('', 'ไม่ระบุ'): other[s] += 1
        typ[r.get('หมวด', '')] += 1
        if c == '7-11':
            n711 += 1; tag711 += 21 in p['tags']
    print('store groups:', st.most_common())
    print('7-11 posts %d · with tag 21: %d · missing: %d' % (n711, tag711, n711 - tag711))
    print('หมวด field:', typ.most_common(8))
    print('"other" posts %d · DISTINCT store strings %d · strings used once %d' % (sum(other.values()), len(other), sum(1 for v in other.values() if v == 1)))
    print('top other stores:', other.most_common(25))
    json.dump(other.most_common(), open(os.path.join(ROOT, 'recat', 'other_stores.json'), 'w', encoding='utf-8'), ensure_ascii=False, indent=0)

    print('\n== reference (Dec 2025–Aug 2026):', len(ref))
    withrec = [p for p in ref if 'kn-record' in p['content']]
    print('with kn-record table:', len(withrec))
    print('category sets overall:', [(tuple(CAT.get(c, c) for c in k), v) for k, v in collections.Counter(tuple(sorted(p['categories'])) for p in ref).most_common(12)])
    grid = collections.defaultdict(collections.Counter)
    for p in withrec:
        r = record(p['content']); s = r.get('ร้านที่เจอ', ''); g = chain(s) or ('ไม่ระบุ' if s in ('', 'ไม่ระบุ') else 'other')
        grid[g][tuple(CAT.get(c, c) for c in sorted(p['categories']))] += 1
    for g, cnt in sorted(grid.items(), key=lambda kv: -sum(kv[1].values())):
        print('  %-14s %4d  %s' % (g, sum(cnt.values()), cnt.most_common(5)))

main()
