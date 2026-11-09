# -*- coding: utf-8 -*-
"""closeset.py <set> <items.tsv> <hubId> <id1,id2,...> <t_open> <t_pub> [flag=D22]
ปิดชุดฝั่งไฟล์: เขียน log.tsv (open/hub/pub/blind-diff/flag ตามแบบ __dumpLog ของทูลคิต) จาก spec.json ของชุด + id ที่ลงจริง · อัปเดต items.tsv status=done:<id> · คัดลอก spec ไป sets/<set>.spec.json"""
import json, sys, os, shutil
HERE = os.path.dirname(os.path.abspath(__file__))
setn, itemsp, hub, ids, t_open, t_pub = sys.argv[1:7]
flag = sys.argv[7] if len(sys.argv) > 7 else 'D22'
d = os.path.join(os.path.dirname(HERE), setn)
spec = json.load(open(os.path.join(d, 'spec.json'), encoding='utf-8'))
ids = [int(x) for x in ids.split(',')]
assert len(ids) == len(spec['rows']), (len(ids), len(spec['rows']))
L = []
L.append([t_open, 'open', setn, '', '', '', '', '', '', '%s rows %s' % (setn, ','.join(r['k'] for r in spec['rows']))])
for r, i in zip(spec['rows'], ids):
    L.append([t_pub, 'hub', setn, '', hub, '', '', '', '', 'addReview %d %s' % (i, r['slug'])])
    L.append([t_pub, 'pub', setn, r['slug'], str(i), r['k'], r['brand'], r['price'], ' / '.join(r['dev']), ''])
    L.append([t_pub, 'blind-diff', setn, '', str(i), '', '', '', '', '__cmp(id,{}) เทียบกับค่าว่าง (D22 เลิกตรวจตาบอด) ไม่ใช่ข้อผิดพลาด'])
L.append([t_pub, 'flag', setn, '', '', '', '', '', '', 'flag %s → %s (%d โพสต์) · __close CLOSED' % (flag, ','.join(map(str, ids)), len(ids))])
with open(os.path.join(HERE, 'log.tsv'), 'a', encoding='utf-8') as f:
    for row in L: f.write('\t'.join(row) + '\n')
rows = [l.rstrip('\n').split('\t') for l in open(itemsp, encoding='utf-8')]
done = {r['k']: i for r, i in zip(spec['rows'], ids)}
n = 0
for c in rows:
    key = (c[0] if c and c[0].startswith('nr') else ('nr' + c[0] if c and c[0].isdigit() else None))  # 10 ก.ย. 2026: items.tsv ของ พ.ค./เม.ย. ใช้คีย์ nr0 ในคอลัมน์แรก
    if key and key in done:
        while len(c) < 10: c.append('')
        assert c[7] in ('pending', ''), (c[0], c[7])
        c[7] = 'done:%d' % done[key]; n += 1
open(itemsp, 'w', encoding='utf-8').write('\n'.join('\t'.join(c) for c in rows) + '\n')
os.makedirs(os.path.join(HERE, 'sets'), exist_ok=True)
shutil.copy(os.path.join(d, 'spec.json'), os.path.join(HERE, 'sets', setn + '.spec.json'))
shutil.copy(os.path.join(d, 'caps.json'), os.path.join(HERE, 'sets', setn + '.caps.json'))
print('log +%d · items done %d · sets/%s.spec.json' % (len(L), n, setn))
