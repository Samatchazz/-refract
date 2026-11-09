# -*- coding: utf-8 -*-
# treport.py — read queue/timelog.tsv, print Thai-time timeline + per-stage durations + IDLE gaps
# usage: python3 treport.py [--phase SUBSTR] [--idle-min N]
import sys, os, datetime
LOG = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'timelog.tsv')
TZ = datetime.timedelta(hours=7)  # Thailand UTC+7
IDLE_MIN = 20
pfilter = None
a = sys.argv[1:]
i = 0
while i < len(a):
    if a[i] == '--phase': pfilter = a[i+1]; i += 2; continue
    if a[i] == '--idle-min': IDLE_MIN = int(a[i+1]); i += 2; continue
    i += 1
if not os.path.exists(LOG):
    print('no timelog.tsv yet'); sys.exit(0)
rows = []
for ln in open(LOG, encoding='utf-8'):
    p = ln.rstrip('\n').split('\t')
    if len(p) < 6 or p[0] == 'ts_utc': continue
    try:
        t = datetime.datetime.strptime(p[0], '%Y-%m-%dT%H:%M:%SZ')
    except ValueError:
        continue
    rows.append({'t': t, 'phase': p[1], 'stage': p[2], 'event': p[3], 'src': p[4], 'note': p[5]})
if pfilter:
    rows = [r for r in rows if pfilter in r['phase']]
rows.sort(key=lambda r: r['t'])
def th(t): return (t + TZ).strftime('%m-%d %H:%M')
def dur(td):
    m = int(td.total_seconds() // 60); h, m = divmod(m, 60)
    return ('%dh%02dm' % (h, m)) if h else ('%dm' % m)

# pair start->end / dispatch->done per (phase,stage)
open_ev = {}; spans = []
for r in rows:
    key = (r['phase'], r['stage'])
    if r['event'] in ('start', 'dispatch'):
        open_ev[key] = r
    elif r['event'] in ('end', 'done'):
        s = open_ev.pop(key, None)
        if s: spans.append((s, r))

print('=== TIMELINE (เวลาไทย) ===')
prev = None
for r in rows:
    if prev is not None:
        gap = r['t'] - prev['t']
        if gap >= datetime.timedelta(minutes=IDLE_MIN):
            print('   ⏸  %s IDLE/รอ' % dur(gap))
    tag = {'start':'▶ เริ่ม','end':'■ จบ','dispatch':'⇢ ส่ง subagent','done':'✓ subagent จบ','wait':'⏸ รอพี่','note':'· note'}.get(r['event'], r['event'])
    print('%s  %-16s %-14s %s %s' % (th(r['t']), r['phase'], r['stage'], tag, ('· '+r['note']) if r['note'] else ''))
    prev = r

print('\n=== ต่อสเตป (start→end) ===')
tot = {}
for s, e in sorted(spans, key=lambda x: x[0]['t']):
    d = e['t'] - s['t']
    tot[s['phase']] = tot.get(s['phase'], datetime.timedelta()) + d
    print('%-16s %-16s %7s   [%s]' % (s['phase'], s['stage'], dur(d), s['src']))

print('\n=== รวมต่อ phase (เฉพาะสเตปที่ปิดคู่ได้) ===')
for ph, d in sorted(tot.items()):
    print('%-16s %s' % (ph, dur(d)))
open_left = [k for k in open_ev]
if open_left:
    print('\n(ยังไม่ปิด: %s)' % ', '.join('%s/%s' % k for k in open_left))
