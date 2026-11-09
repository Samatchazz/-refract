# -*- coding: utf-8 -*-
"""
status.py — where is every month? Replaces reading RESUME/DELTA documents: the queue files are the source of truth.

  python kn/status.py            # all months
  python kn/status.py 2024-10    # one month, with the rows that are not done

Reads <mon><year>-items.tsv from months/<YYYY-MM>/ (new layout) and work/queue/ (Cowork export).
A row's status is the first cell that starts with done: / hold: / skip: (the column moved between months).
"""
import os, re, sys, glob, collections

ROOT = os.path.abspath(os.path.join(os.path.dirname(__file__), '..'))
MON = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec']


def ym_of(fname):
    m = re.match(r'([a-z]{3})(\d{4})-items\.tsv$', os.path.basename(fname))
    return '%s-%02d' % (m.group(2), MON.index(m.group(1)) + 1) if m else None


def read(path):
    rows = []
    for l in open(path, encoding='utf-8'):
        if not l.strip() or l.startswith('#'):
            continue
        c = l.rstrip('\n').split('\t')
        st = next((x for x in c[1:] if re.match(r'(done|hold|skip|dup|flag)\b', x)), '')
        rows.append((c[0], c[3] if len(c) > 3 else '', st))
    return rows


def main():
    if hasattr(sys.stdout, 'reconfigure'):
        sys.stdout.reconfigure(encoding='utf-8')
    want = sys.argv[1] if len(sys.argv) > 1 else None
    files = {}
    # precedence (later wins): Cowork month folder < Cowork queue/ (the copy closeset.py updates) < months/ (new layout)
    for f in (glob.glob(os.path.join(ROOT, 'work', '*', '*-items.tsv')) + glob.glob(os.path.join(ROOT, 'work', 'queue', '*-items.tsv'))
              + glob.glob(os.path.join(ROOT, 'months', '*', '*-items.tsv'))):
        ym = ym_of(f)
        # a month folder may hold another month's file (nov2025/sep2026-items.tsv) — only trust it when folder and file agree
        parent = os.path.basename(os.path.dirname(f))
        if ym and (parent in ('queue',) or re.match(r'\d{4}-\d{2}$', parent) or os.path.basename(f).startswith(parent)):
            files[ym] = f
    print('%-8s %5s %5s %5s %5s  %s' % ('month', 'rows', 'done', 'hold', 'open', 'source'))
    tot = collections.Counter()
    for ym in sorted(files, reverse=True):
        if want and ym != want:
            continue
        rows = read(files[ym])
        done = sum(1 for r in rows if r[2].startswith('done')); hold = sum(1 for r in rows if r[2].startswith(('hold', 'skip', 'dup', 'flag')))
        opn = len(rows) - done - hold
        tot.update(rows=len(rows), done=done, hold=hold, open=opn)
        print('%-8s %5d %5d %5d %5d  %s' % (ym, len(rows), done, hold, opn, os.path.relpath(files[ym], ROOT).replace('\\', '/')))
        if want:
            for k, menu, st in rows:
                if not st.startswith('done'):
                    print('    %-6s %-14s %s' % (k, st or 'open', menu[:60]))
    if not want:
        print('%-8s %5d %5d %5d %5d' % ('total', tot['rows'], tot['done'], tot['hold'], tot['open']))
        print('WARNING: these are Cowork queue files as exported on 17 Sep 2026 — some were never updated (e.g. 2025-05/06 show 0 done but are on the site).')
        print('Do not use this table to pick a month. What is really left: docs/BACKLOG.md (checked against the live site).')


if __name__ == '__main__':
    main()
