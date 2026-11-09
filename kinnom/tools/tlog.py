# -*- coding: utf-8 -*-
# tlog.py — append one timing event to queue/timelog.tsv
# usage: python3 tlog.py PHASE STAGE EVENT [note] [--src live|mtime|log.tsv] [--at ISO8601]
# EVENT: start | end | dispatch | done | wait | note
# PHASE: free label, e.g. jul2025-prep, aug2025-upload
import sys, os, datetime
LOG = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'timelog.tsv')
args = [a for a in sys.argv[1:]]
src = 'live'; at = None; rest = []
i = 0
while i < len(args):
    if args[i] == '--src': src = args[i+1]; i += 2; continue
    if args[i] == '--at': at = args[i+1]; i += 2; continue
    rest.append(args[i]); i += 1
if len(rest) < 3:
    print('usage: tlog.py PHASE STAGE EVENT [note] [--src S] [--at ISO]'); sys.exit(1)
phase, stage, event = rest[0], rest[1], rest[2]
note = rest[3] if len(rest) > 3 else ''
ts = at or datetime.datetime.utcnow().strftime('%Y-%m-%dT%H:%M:%SZ')
new = not os.path.exists(LOG)
with open(LOG, 'a', encoding='utf-8') as f:
    if new:
        f.write('ts_utc\tphase\tstage\tevent\tsrc\tnote\n')
    f.write('\t'.join([ts, phase, stage, event, src, note]) + '\n')
print('logged', ts, phase, stage, event, '(%s)' % src)
