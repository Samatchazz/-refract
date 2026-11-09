# -*- coding: utf-8 -*-
"""canon.py — ชื่อแบรนด์มาตรฐาน (brand-canon.json, Mat เคาะ 12 ก.ย. 2026)
ใช้: from canon import canonize, brand_tag, CANON
  canonize('Yamazaki') → 'ยามาซากิ (Yamazaki)'  · ชื่อที่ไม่อยู่ใน canon คืนค่าเดิม
  brand_tag('ยามาซากิ (Yamazaki)') → ('ยามาซากิ', 'yamazaki')  · แบรนด์นอก canon → (ชื่อเดิม, '')
กติกา: ตาราง/schema ใช้รูปแบบ "ไทย (English)" สำหรับแบรนด์สองภาษา · แท็ก = ชื่อสั้นภาษาเดียว slug อังกฤษ · แบรนด์อังกฤษใช้อังกฤษล้วน
"""
import json, os, re
HERE = os.path.dirname(os.path.abspath(__file__))
CANON = {k: v for k, v in json.load(open(os.path.join(HERE, 'brand-canon.json'), encoding='utf-8')).items() if not k.startswith('_')}
def _n(s): return re.sub(r"[\s\-'’.()]", '', str(s or '')).lower()
_V2C = {}
for c, o in CANON.items():
    _V2C[_n(c)] = c
    for v in o.get('variants', []): _V2C[_n(v)] = c
def canonize(brand):
    if not brand: return brand
    return _V2C.get(_n(brand), brand)
def is_variant(brand):
    """True ถ้าเป็นการสะกดที่ไม่ใช่ชื่อมาตรฐาน (ต้องแก้)"""
    return bool(brand) and canonize(brand) != brand
def brand_tag(brand):
    c = canonize(brand)
    o = CANON.get(c)
    if o and o.get('tag'): return o['tag'], o.get('slug', '')
    if c in ('ไม่ระบุ', '7-11', '', None): return '', ''
    return c, ''
