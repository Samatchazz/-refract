# -*- coding: utf-8 -*-
"""
prompts.py — one template per subagent prompt instead of a sed-copied file per month.

  python kn/prompts.py build                 # (one-off) derive prompts/*.tmpl.md from the newest Cowork month files
  python kn/prompts.py check                 # round-trip: render each template for older months and diff with Cowork's real files
  python kn/prompts.py render fill-spec 2024-08 [--rows 109] [--work /abs/path]   # print a ready prompt

Placeholders: {MONTH_DIR} oct2024 · {MONTH_EN} October · {MON_EN} Oct · {YEAR} 2024 · {N_ROWS} 85 · {WORK} /home/claude/work
Templates are derived mechanically (string replacement) so the wording Mat approved is not retyped.
"""
import os, re, sys, difflib

ROOT = os.path.abspath(os.path.join(os.path.dirname(__file__), '..'))
WORK = os.path.join(ROOT, 'work')
OUT = os.path.join(ROOT, 'prompts')
EN = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
# template name → (source month dir, source file, row count baked into that file or None)
SOURCES = {
    'fill-spec': ('oct2024', 'FILL-SPEC-OCT.md', None),
    'classify': ('oct2024', 'CLASSIFY-OCT.md', 85),
}
# older real files used only to prove the template reproduces them
CHECKS = {
    'fill-spec': [('nov2024', 'FILL-SPEC-NOV.md', None), ('dec2024', 'FILL-SPEC-DEC.md', None)],
    'classify': [('nov2024', 'CLASSIFY-NOV.md', 76)],
}


def parts(month_dir):
    mon, year = month_dir[:3], month_dir[3:]
    i = [m[:3].lower() for m in EN].index(mon)
    return {'MONTH_DIR': month_dir, 'MONTH_EN': EN[i], 'MON_EN': EN[i][:3], 'YEAR': year}


def month_dir_of(ym):
    y, m = ym.split('-')
    return EN[int(m) - 1][:3].lower() + y


def to_template(text, month_dir, rows):
    p = parts(month_dir)
    text = text.replace('/home/claude/work', '{WORK}')
    text = text.replace(p['MONTH_DIR'], '{MONTH_DIR}')
    text = text.replace('%s %s' % (p['MONTH_EN'], p['YEAR']), '{MONTH_EN} {YEAR}')
    text = text.replace('%s %s' % (p['MON_EN'], p['YEAR']), '{MON_EN} {YEAR}')
    if rows is not None:
        text = re.sub(r'(?<!\d)%d(?= (rows|keys))' % rows, '{N_ROWS}', text)
    return text


def render(name, month_dir, rows=None, work='/home/claude/work'):
    t = open(os.path.join(OUT, name + '.tmpl.md'), encoding='utf-8').read()
    v = dict(parts(month_dir), WORK=work, N_ROWS='' if rows is None else str(rows))
    if '{N_ROWS}' in t and rows is None:
        raise SystemExit('template %s needs --rows' % name)
    for k, val in v.items():
        t = t.replace('{%s}' % k, val)
    return t


def main():
    if hasattr(sys.stdout, 'reconfigure'):
        sys.stdout.reconfigure(encoding='utf-8')
    cmd = sys.argv[1] if len(sys.argv) > 1 else ''
    if cmd == 'build':
        os.makedirs(OUT, exist_ok=True)
        for name, (md, f, rows) in SOURCES.items():
            src = open(os.path.join(WORK, md, f), encoding='utf-8').read()
            open(os.path.join(OUT, name + '.tmpl.md'), 'w', encoding='utf-8', newline='').write(to_template(src, md, rows))
            print('prompts/%s.tmpl.md ← work/%s/%s' % (name, md, f))
    elif cmd == 'check':
        bad = 0
        for name, lst in CHECKS.items():
            for md, f, rows in [SOURCES[name]] + lst:
                real = open(os.path.join(WORK, md, f), encoding='utf-8').read()
                got = render(name, md, rows)
                if got == real:
                    print('OK    %-10s renders %s/%s byte-for-byte' % (name, md, f))
                else:
                    d = [l for l in difflib.unified_diff(real.splitlines(), got.splitlines(), 'cowork', 'template', lineterm='', n=0) if not l.startswith(('---', '+++', '@@'))]
                    print('DIFF  %-10s vs %s/%s: %d changed lines (wording evolved between months?)' % (name, md, f, len(d)))
                    for l in d[:6]:
                        print('        ' + l[:160])
                    bad += 1
        sys.exit(1 if bad else 0)
    elif cmd == 'render':
        name, ym = sys.argv[2], sys.argv[3]
        rows = int(sys.argv[sys.argv.index('--rows') + 1]) if '--rows' in sys.argv else None
        work = sys.argv[sys.argv.index('--work') + 1] if '--work' in sys.argv else os.path.join(ROOT, 'months').replace('\\', '/')
        sys.stdout.write(render(name, month_dir_of(ym), rows, work))
    else:
        print(__doc__)


if __name__ == '__main__':
    main()
