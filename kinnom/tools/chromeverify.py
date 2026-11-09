# -*- coding: utf-8 -*-
"""
chromeverify.py — ตรวจ "เลขตรวจ" ของแคปชั่นที่ AI จดตามจาก Chrome (คู่กับ queue/chromecaps.js)
ใช้:  python3 chromeverify.py tail  <tail.tsv>                  → ตรวจไฟล์บรรทัดร้าน/ราคา (nrK \\t len \\t ck \\t text)
      python3 chromeverify.py full  <checks.tsv> <txtdir>        → ตรวจ txtdir/<nrK>.txt ทีละไฟล์
      python3 chromeverify.py caps  <checks.tsv> <caps.json>     → ตรวจ caps.json {nrK: text}
ไม่ผ่าน = จดผิด → ดึงใหม่/แก้แถวนั้น · exit 1
normalize เหมือน JS: ⁇⁊⩵ → ?&= · NBSP→space · rstrip ทุกบรรทัด · strip ทั้งก้อน · \\n{3,}→\\n\\n
"""
import sys, os, re, json

def norm(s):
    s = s.replace('⁇', '?').replace('⁊', '&').replace('⩵', '=').replace(' ', ' ')
    s = '\n'.join(l.rstrip() for l in s.split('\n'))
    return re.sub(r'\n{3,}', '\n\n', s).strip()

def ck(s):
    c = 0
    for i, ch in enumerate(s):
        c = (c + ord(ch) * (i % 97 + 1)) % 1000000007
    return len(s), c

def load_checks(p):
    d = {}
    for ln in open(p, encoding='utf-8'):
        q = ln.rstrip('\n').split('\t')
        if len(q) >= 3 and q[1].isdigit(): d[q[0]] = (int(q[1]), int(q[2]))
    return d

def main():
    mode = sys.argv[1]; ok = bad = 0; bads = []
    if mode == 'tail':
        for ln in open(sys.argv[2], encoding='utf-8'):
            q = ln.rstrip('\n').split('\t')
            if len(q) < 3 or not q[1].isdigit(): continue
            k, n, c = q[0], int(q[1]), int(q[2]); s = (q[3].replace('⁇', '?').replace('⁊', '&').replace('⩵', '=').replace('\u00a0', ' ')) if len(q) > 3 else ''  # tail: JS ไม่ trim
            if ck(s) == (n, c): ok += 1
            else: bad += 1; bads.append(k)
    else:
        checks = load_checks(sys.argv[2])
        if mode == 'full':
            get = lambda k: open(os.path.join(sys.argv[3], k + '.txt'), encoding='utf-8').read() if os.path.exists(os.path.join(sys.argv[3], k + '.txt')) else None
        else:
            caps = json.load(open(sys.argv[3], encoding='utf-8')); get = lambda k: caps.get(k)
        for k, (n, c) in checks.items():
            s = get(k)
            if s is None: bad += 1; bads.append(k + '(missing)'); continue
            if ck(norm(s)) == (n, c): ok += 1
            else: bad += 1; bads.append(k)
    print('ok %d bad %d %s' % (ok, bad, ' '.join(bads)))
    sys.exit(1 if bad else 0)

if __name__ == '__main__':
    main()
