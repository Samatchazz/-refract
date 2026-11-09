# -*- coding: utf-8 -*-
"""
regress_mkset.py — differential test: tools/mkset.py (new home) must behave exactly like work/queue/mkset.py
(the Cowork original, with its own side files) on every set ever built.

For each folder under work/ that has spec.json + caps.json + build.js, both scripts run on a private copy and must agree on:
  exit code · the list of ❌ gate errors · build.js bytes · open.js bytes
It also reports how many sets still reproduce their *historical* build.js. Older sets are expected not to: the gates were
tightened after they were published (12 Sep 2026: brand canon R4b + automatic brand tag R3b), and the original script
rejects them in exactly the same way — that is rule evolution, not drift.

Usage:  python kn/test/regress_mkset.py      (from the kinnom/ root)
"""
import os, sys, json, shutil, subprocess, tempfile, collections

ROOT = os.path.abspath(os.path.join(os.path.dirname(__file__), '..', '..'))
WORK = os.path.join(ROOT, 'work')
NEW = os.path.join(ROOT, 'tools', 'mkset.py')
OLD = os.path.join(WORK, 'queue', 'mkset.py')
ENV = dict(os.environ, PYTHONUTF8='1')


def run(script, src, tmp, tag):
    t = os.path.join(tmp, tag)
    os.makedirs(t)
    for f in ('spec.json', 'caps.json'):
        shutil.copy(os.path.join(src, f), t)
    p = subprocess.run([sys.executable, script, t], capture_output=True, text=True, encoding='utf-8', env=ENV)
    rd = lambda n: open(os.path.join(t, n), encoding='utf-8').read() if os.path.exists(os.path.join(t, n)) else None
    errs = [l.strip() for l in p.stdout.splitlines() if l.startswith('  ')]
    return {'rc': p.returncode, 'errs': errs, 'build': rd('build.js'), 'open': rd('open.js'), 'crash': 'Traceback' in p.stderr}


def main():
    sets = sorted(d for d, _, files in os.walk(WORK) if not os.path.islink(d) and {'spec.json', 'caps.json', 'build.js'} <= set(files))
    tmp = tempfile.mkdtemp(prefix='kn-regress-')
    agree = 0; disagree = []; hist_same = 0; rejected_now = 0; crashed = []
    for i, d in enumerate(sets):
        name = os.path.relpath(d, WORK).replace('\\', '/')
        a = run(OLD, d, tmp, 'o%d' % i); b = run(NEW, d, tmp, 'n%d' % i)
        if a['crash'] or b['crash']:
            crashed.append(name)
        if a == b:
            agree += 1
        else:
            disagree.append((name, [k for k in a if a[k] != b[k]]))
        if b['rc'] != 0:
            rejected_now += 1
        elif b['build'] == open(os.path.join(d, 'build.js'), encoding='utf-8').read():
            hist_same += 1
    shutil.rmtree(tmp, ignore_errors=True)
    print('sets: %d' % len(sets))
    print('original vs tools/ copy agree (exit code, gate errors, build.js, open.js): %d/%d' % (agree, len(sets)))
    for n, keys in disagree:
        print('  DISAGREE %s: %s' % (n, ','.join(keys)))
    if crashed:
        print('  crashed: ' + ', '.join(crashed))
    print('still reproduce their historical build.js byte-for-byte: %d' % hist_same)
    print('rejected by today\'s gates (published before the 12 Sep 2026 rule tightening; original rejects them identically): %d' % rejected_now)
    print('pass today but build.js differs from history (e.g. brand tag now auto-added): %d' % (len(sets) - hist_same - rejected_now))
    os.makedirs(os.path.join(ROOT, 'state'), exist_ok=True)
    json.dump({'sets': len(sets), 'agree': agree, 'disagree': disagree, 'hist_same': hist_same, 'rejected_now': rejected_now},
              open(os.path.join(ROOT, 'state', 'regress_mkset.json'), 'w', encoding='utf-8'), ensure_ascii=False, indent=1)
    sys.exit(0 if agree == len(sets) and not crashed else 1)


if __name__ == '__main__':
    if hasattr(sys.stdout, 'reconfigure'):
        sys.stdout.reconfigure(encoding='utf-8')
    main()
