# -*- coding: utf-8 -*-
"""product.py — READ-ONLY. Product type (Snack | Food | Drinks) from the product name + title, by keyword rules,
MEASURED against the correctly-categorised reference batch before it is trusted on the bug set."""
import json, re, os, sys, html, collections
ROOT = os.path.abspath(os.path.join(os.path.dirname(__file__), '..', '..'))
sys.path.insert(0, os.path.dirname(__file__))
ROW = re.compile(r'<th scope="row">([^<]+)</th>\s*<td>([\s\S]*?)</td>')
def record(c): return {k.strip(): html.unescape(re.sub(r'<[^>]+>', '', v)).strip() for k, v in ROW.findall(c or '')}

# a drink word only counts when the product is not obviously a solid flavoured with it (เค้กชาไทย, ไอติมกาแฟ, ขนมปังนมสด …)
SOLID = r'เค้ก|cake|ขนมปัง|ปัง|bread|bun|บัน|พาย|pie|ทาร์ต|tart|คุกกี้|cookie|โดนัท|donut|ครัวซองต์|croissant|ไอศกรีม|ไอติม|ice\s*cream|gelato|ซอฟต์เสิร์ฟ|soft\s*serve|พุดดิ้ง|pudding|เยลลี่|jelly|วาฟเฟิล|waffle|เครป|crepe|มาการอง|macaron|ช็อกโกแลตบาร์|บราวนี่|brownie|โมจิ|mochi|ไดฟุกุ|ชูครีม|เอแคลร์|eclair|โรล|roll|แซนด์วิช|sandwich|บิงซู|bingsu|คากิโกริ|ทอฟฟี่|ลูกอม|candy|หมากฝรั่ง|ป๊อปคอร์น|popcorn|มันฝรั่ง|chips|ขนมไทย|ทองหยอด|ลอดช่อง|บัวลอย|โทสต์|toast|มัฟฟิน|muffin|สโคน|scone|คัสตาร์ด|custard|ทีรามิสุ|tiramisu|ชีสเค้ก|cheesecake|ครีมบรูเล่|ปังปิ้ง|แพนเค้ก|pancake|บานอฟฟี่|banoffee|พาร์เฟ่ต์|parfait|กราโนล่า|granola|ซีเรียล|cereal|บิสกิต|biscuit|เวเฟอร์|wafer|คิทแคท|kitkat|โอรีโอ|oreo'
DRINK = r'ชานม|ชาไทย(?!.{0,6}(เค้ก|โรล))|ชาเขียว(?=.{0,4}(ลาเต้|เย็น|ปั่น))|น้ำ(?!ตาล|ผึ้ง|พริก|จิ้ม|แข็งไส|สลัด|ปลา|มัน)|เครื่องดื่ม|ลาเต้|latte|เฟรปเป้|frappe|frappuccino|สมูทตี้|smoothie|โซดา|soda|กาแฟ(?!.{0,6}(เค้ก|โรล))|coffee|americano|อเมริกาโน่|espresso|เอสเปรสโซ|คาปูชิโน่|cappuccino|มอคค่า|mocha(?!.{0,4}บาน)|โกโก้(เย็น|ปั่น|ร้อน)|นม(สด|เปรี้ยว|ถั่วเหลือง|ข้นจืด)?(กล่อง|ขวด|แก้ว)|milk\s*tea|\btea\b|slurpee|สเลอปี้|สลัชชี่|slush|จูซ|juice|milkshake|มิลค์เชค|ปั่น$|yakult|ยาคูลท์|โยเกิร์ตพร้อมดื่ม|คอมบูชะ|kombucha|เบียร์|beer|ไวน์|wine|matcha\s*latte|มัทฉะลาเต้|thai\s*tea(?!\s*(cake|roll))'
FOOD = r'ข้าว(?!โพด|เหนียวมะม่วง|เกรียบ|ตัง|พอง|หลาม|ต้มมัด)|ก๋วยเตี๋ยว|บะหมี่|มาม่า|ราเมง|ramen|อุด้ง|พาสต้า|pasta|สปาเก็ตตี้|spaghetti|พิซซ่า|pizza|เบอร์เกอร์|burger|ไส้กรอก|sausage|ลูกชิ้น|ไก่(ทอด|ย่าง|ป๊อป|คาราอาเกะ)|nugget|นักเก็ต|หมู(กรอบ|ปิ้ง|ทอด|กระเทียม)|ซาลาเปา|ติ่มซำ|เกี๊ยว|gyoza|ซูชิ|sushi|โอนิกิริ|onigiri|ข้าวปั้น|สลัด(?!ครีม)|salad|ซุป|soup|แกง|ผัด|ต้มยำ|ส้มตำ|ยำ(?!ยำ)|ฮอทดอก|hot\s*dog|คอร์นด็อก|corn\s*dog|ต๊อกบกกี|tteok|คิมบับ|kimbap|เฟรนช์ฟรายส์|french\s*fries|ไข่(ตุ๋น|ต้ม|ดาว|เจียว|ออนเซ็น)|โจ๊ก|ขนมจีน|น้ำพริก|ทาโกะยากิ|takoyaki|โอเด้ง|oden|ปูอัด|หมูยอ|แหนม|ลาซานญ่า|lasagna|มักกะโรนี|กิมจิ|kimchi|บิบิมบับ|happy\s*meal'

def ptype(name, title):
    t = (name or '') + ' | ' + (title or '')
    solid = re.search(SOLID, t, re.I)
    if re.search(FOOD, t, re.I) and not solid: return 'Food'
    if re.search(DRINK, t, re.I) and not solid: return 'Drinks'
    return 'Snack'

def main():
    sys.stdout.reconfigure(encoding='utf-8')
    ref = json.load(open(os.path.join(ROOT, 'recat', 'reference.json'), encoding='utf-8'))
    aff = json.load(open(os.path.join(ROOT, 'recat', 'affected.json'), encoding='utf-8'))
    P = {11: 'Snack', 15: 'Food', 3655: 'Drinks'}
    gold = []
    for p in ref:
        if 'kn-record' not in p['content']: continue
        pc = [P[c] for c in p['categories'] if c in P]
        if len(pc) == 1: gold.append((p, pc[0]))
    conf = collections.Counter(); wrong = []
    for p, g in gold:
        r = record(p['content']); got = ptype(r.get('ชื่อสินค้า'), p['title']); conf[(g, got)] += 1
        if got != g: wrong.append((g, got, r.get('ชื่อสินค้า', '')[:40], p['title'][:50]))
    n = len(gold); ok = sum(v for (g, q), v in conf.items() if g == q)
    print('reference posts with exactly one product category: %d · rule agrees on %d (%.1f%%)' % (n, ok, 100.0 * ok / n))
    for g in ('Snack', 'Food', 'Drinks'):
        tot = sum(v for (a, b), v in conf.items() if a == g); hit = conf[(g, g)]
        pred = sum(v for (a, b), v in conf.items() if b == g)
        print('  %-6s in reference %4d · rule finds %4d of them (recall %.0f%%) · of what the rule calls %s, %.0f%% are right' % (g, tot, hit, 100.0 * hit / max(tot, 1), g, 100.0 * hit / max(pred, 1)))
    print('disagreements (gold → rule):')
    for w in wrong[:40]: print('   %s → %s  %s | %s' % w)
    bug = [p for p in aff if record(p['content']).get('หมวด') == 'ขนม']
    c = collections.Counter(ptype(record(p['content']).get('ชื่อสินค้า'), p['title']) for p in bug)
    print('\nbug set by rule:', dict(c))
main()
