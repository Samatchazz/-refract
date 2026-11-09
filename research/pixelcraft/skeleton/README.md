# Plan C — skeleton (ฐานวัดจาก Pixel Craft teardown)

โครงเปล่าของเว็บ Plan C: ทุก section/เอฟเฟกต์สร้างจากตัวเลขที่วัดเองใน `../SECTIONS.md`
(ไม่มีโค้ด/ทรัพย์สินของธีมแม้แต่บรรทัดเดียว — กติกา 2, 3 ของ BRIEF) เนื้อหาทั้งหมดเป็น token
รอเจ้าของงานเทเนื้อหาจริงทีหลัง

## รัน

```bash
node research/pixelcraft/skeleton/serve.cjs
```

→ http://localhost:8123 · **ต้องรันผ่าน server** (debug badge fetch `sections.json` — เปิดแบบ `file://`
ตัว badge จะยังทำงานแต่ไม่รู้สถานะ implemented)

- `?debug` — แผงสไลเดอร์จูนค่าทุกตัว (ระยะ/ความเร็ว reveal, marquee, parallax, popup ฯลฯ)
- `?fill=th` — แทน token ทุกช่องด้วยตัวเติมไทยไร้ความหมายความยาวสมจริง (ทดสอบสระซ้อน/ความยาวไทย)
- คีย์: **D** = สลับ badge · **T** = สลับกรอบ token · **?** = ดูคีย์ (ใช้ `e.code` — คีย์บอร์ดไทยกด D ได้เลย)

## ไฟล์

| ไฟล์ | หน้าที่ |
|---|---|
| `index.html` | 25 section + header + popup — **generated จาก `_gen.cjs`** อย่าแก้มือ ให้แก้ SPEC ใน `_gen.cjs` แล้วรันใหม่ |
| `sections.json` | source of truth: section/slot/effect + ค่าที่วัด (schema ตาม BRIEF §6.3) |
| `_gen.cjs` | ตัว generate `index.html` + `sections.json` + `_tokens.txt` — `node _gen.cjs` |
| `styles.css` | CSS ทั้งหมด ทุกค่าเป็น custom property; พาเลตต์ Plan C (`#0f1613 / #F2EFDE / #F0B32E`) |
| `effects.js` | เอฟเฟกต์ทั้งหมด — rAF ลูปเดียว + IntersectionObserver ตัวเดียว |
| `debug.js` | badge / คีย์ / แผง `?debug` |
| `filler-th.js` | ตัวเติมไทย (โหลดเฉพาะ `?fill=th`) |
| `check.cjs` | เช็ค token สองทาง manifest ↔ HTML |
| `fonts/` | Kanit 500/700 + Anuphan variable (OFL 1.1, self-host) + `type.css` |

## กติกาไทยที่ฝังไว้แล้ว

- ฟอนต์ผ่าน `--font-display` (Kanit) / `--font-text` (Anuphan) เท่านั้น — ไม่มี `font-family` ดิบ
- line-height ตาม floor ที่วัดจริง: `--lh-tight: 1.50` / display 1.3 (Kanit ต่ำกว่านี้สระ/วรรณยุกต์โดนตัด)
- typed rotator ใช้ `Intl.Segmenter('th', {granularity:'grapheme'})` — ถ้าไม่มี Segmenter จะ fallback
  เป็นระดับคำทั้งคำ ไม่มีการ `split('')` เด็ดขาด
- section ใช้ `min-height` (ค่าที่วัดจากต้นฉบับ) + padding — ไม่มี `height` ตายตัว รองรับไทยที่ยาวกว่า EN 15–30%
- `word-break: normal; overflow-wrap: break-word;` ไม่มี justify

## Token

287 token (รายชื่อเต็ม: `_tokens.txt` — generate ใหม่ทุกครั้งที่รัน `_gen.cjs`)
รูปแบบ: `[Sxx-ROLE]` หรือ `[Sxx-GROUP-n-ROLE]` (n เริ่ม 1) · ทุกช่องมี `data-token` + `data-approx-chars`

ROLE ที่ใช้ (ตามลิสต์ปิดของ BRIEF §6.4): `H1 H2 H3 EYEBROW BODY CTA LABEL META NUM QUOTE LINK IMG-ALT TITLE TAG`
— ยังไม่มี role เพิ่มนอกลิสต์ · token กลุ่ม popup ใช้ prefix `POP-` (ไม่ผูกกับ section)

## สิ่งที่ตั้งใจไม่สร้าง / สร้างแบบประมาณ

| รายการ | สถานะ | เหตุผล |
|---|---|---|
| smooth/virtual scroll | ไม่สร้าง | ต้นฉบับก็ใช้ native scroll; transform-wrapper ฆ่า sticky ทุกตัว (BRIEF §6.6) |
| custom cursor / tilt / preloader / WebGL / split-text / magnetic / grain | ไม่สร้าง | **ต้นฉบับไม่ได้ใช้** (JS โหลดแต่ไม่ instantiate — ดู absences ใน SECTIONS.md) |
| nav hide/show (headroom) | ไม่สร้าง | header ต้นฉบับเป็น absolute เลื่อนพ้นจอเฉยๆ headroom ไม่ทำงานบนหน้านั้น |
| E30 highlight duration | **partial** | keyframe มีจริงแต่จับเวลาไม่ได้ (one-shot) — ตั้ง 0.6s จูนได้ใน `?debug` |
| E31 จังหวะพิมพ์ | **partial** | delay ระหว่างคำ 2500ms วัดได้; ms/ตัวอักษรไม่ serialize — ตั้ง 60ms จูนได้ |
| E41 ความเร็ว pan | **partial** | ทิศ/ทริกเกอร์วัดได้; ความเร็วไม่ได้ — ตั้ง 6s เต็มช่วง จูนได้ |
| E61 หน่วงเวลา popup | **partial** | ต้นฉบับ serialize `200` ไม่บอกหน่วย — ตั้ง 20s จูนได้ |
| E11 บน S17 | สร้างด้วยกลไกเดียวกับ S05 | สอง element ของ S17 นิ่งสนิทตอนวัด 2 ครั้ง (บันทึกใน Table B) |

ความสูง section เป้าหมาย ±10% ของค่าที่วัด — ผลจริง: **23/25 ผ่าน** (`out/derived/selfcheck.json`)
สองแถวที่หลุดพร้อมเหตุผล:

- **S11 +47% / S15 +56%** — สอง section แบบ sticky-ซ้าย: ค่า probe (1108/857px) วัดตอนโหลดแรก
  **ก่อน lazy-content ฝั่งขวา mount ครบ** — หลักฐาน: ภาพถ่ายจริงของ S11 (`out/sections/home_1440_S11.jpg`)
  สูง 2,775px สูงกว่าค่า probe สองเท่ากว่า กล่อง placeholder ของเรา (5 และ 4 บล็อก ตามโครงจริง)
  จึงยาวกว่าตัวเลข probe แต่**สั้นกว่าหน้าจริง** — ถือว่าตัวเลข probe ของสอง section นี้เป็น lower bound
  ไม่ใช่ความสูงจริง (ไม่แก้กล่องให้เตี้ยลงเพราะจะโกหกสัดส่วนเนื้อหา)

## งบ JS

`effects.js` + `debug.js` + `filler-th.js` ต้องรวมกันไม่เกิน 25 KB (BRIEF §6.7) — เช็คใน selfcheck
