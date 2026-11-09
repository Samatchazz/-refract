# -*- coding: utf-8 -*-
"""mksheet.py — builds recat/cafe-sheet.html (Mat's phone sheet: café / not café per store). Answers live in the artifact db, collection `cafe`."""
import json, os
ROOT = os.path.abspath(os.path.join(os.path.dirname(__file__), '..', '..'))
rows = json.load(open(os.path.join(ROOT, 'recat', 'sheet_rows.json'), encoding='utf-8'))
T = open(os.path.join(ROOT, 'kn', 'recat', 'cafe-sheet.tmpl.html'), encoding='utf-8').read()
open(os.path.join(ROOT, 'recat', 'cafe-sheet.html'), 'w', encoding='utf-8', newline='').write(T.replace('/*ROWS*/[]', json.dumps(rows, ensure_ascii=False).replace('</', '<\/')))
print('rows', len(rows), 'posts', sum(r['posts'] for r in rows))
