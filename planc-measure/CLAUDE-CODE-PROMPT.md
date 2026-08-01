# Prompt สำหรับ Claude Code — เก็บข้อมูล visual มาเติมรีพอร์ต PlanC

วางไฟล์ `planc-measure.mjs` ไว้ในโฟลเดอร์ว่าง แล้วเปิด Claude Code ในโฟลเดอร์นั้น จากนั้นวาง prompt ข้างล่างนี้ทั้งก้อน:

---

ROLE: forensic design critic — วัดจริง เห็นจริง ไม่แต่งเติม

TASK: รันสคริปต์วัดผล แล้วดู screenshot ด้วยตาตัวเอง เพื่อเขียนไฟล์ `visual-addendum.md` (ภาษาไทย ศัพท์อังกฤษคงไว้)

STEP 1 — Setup & run:
```
npm init -y && npm i playwright && npx playwright install chromium
node planc-measure.mjs
```
สคริปต์จะเปิด 6 เว็บ (studiobjork.com, kwokyinmak.com, henriheymans.com, bluxstudio.com, poolsuite.net, rleonardi.com/interactive-resume) ที่ 1440×900 และ 390×844, ถ่าย screenshot ตาม scroll (สูงสุด 14 เฟรม/เว็บ), และวัดใน DOM: % whitespace ของ first viewport (นับจาก text rects + media rects บน grid 96×60), font census (family/size/weight/tracking ของข้อความที่มองเห็นจริง เรียงตามขนาด), display:body ratio, ความยาวหน้าเป็น vh, จำนวน element ที่มี animation/transition, easing ที่ใช้จริง, fixed/sticky, และ detect libs (Lenis/GSAP/skrollr/Three) — ผลอยู่ที่ `out/metrics.json` + `out/<site>/*.png`

ถ้าเว็บไหน error/timeout ให้จดไว้ตรงๆ ห้ามเดา (rleonardi เป็น canvas/horizontal — ถ้าเลื่อนไม่ไปให้ดูเฟรมที่ได้ + ลองกด ArrowRight ค้างแล้วถ่ายเพิ่มเอง)

STEP 2 — ดูภาพจริง: เปิด screenshot ของทุกเว็บ (อย่างน้อย desktop-00, กลางๆ 2 เฟรม, เฟรมท้าย, mobile-00) แล้วตอบต่อเว็บ:
1. **3-second test** — สายตาไปลงที่ไหนก่อนจริงๆ และ decision อะไรบังคับ (ขนาด/ที่ว่าง/การเคลื่อนไหว)
2. **% whitespace first viewport** — ใช้เลขจาก metrics.json (`whitespacePct`) + ตรวจกับตาว่าตัวเลขสมเหตุสมผล (canvas site ตัวเลขจะเพี้ยน — ให้ประเมินจากภาพแทนแล้วติดป้าย "ประมาณด้วยตา")
3. **Rhythm map** — ไล่เฟรม screenshot ตามลำดับ: ตรงไหนเงียบ ตรงไหน hit, pattern ถี่แค่ไหน
4. **Motion ที่เห็นจริง** — เทียบเฟรมติดกัน: อะไรขยับ นับจำนวน, และอะไร "ไม่ขยับ" (restraint)
5. **Mobile survival** — จาก mobile-00: type ยัง hero อยู่ไหม, layout พังตรงไหน, ให้คะแนน 1–5
6. **เฉพาะ studiobjork + rleonardi** (เว็บที่รายงานหลักยังไม่มีข้อมูล): ตอบครบทั้ง 7 หัวข้อของ protocol — 3-second test / typography forensics (ใช้ font census จาก metrics.json, ตัวเลข verbatim) / space accounting / rhythm map / motion inventory / scores 1–5 ห้าแกน (first impression, type craft, spatial confidence, motion taste, mobile survival) พร้อมเหตุผลบรรทัดเดียว / The ONE steal สำหรับเว็บแมวขาวดำ scroll-platformer (Prompt/Sarabun/IBM Plex Mono, ink #111 บน #fcfcfa)
7. **เฉพาะ bluxstudio**: เติม typography forensics + motion จาก metrics.json (รายงานหลักวัด CSS ไม่ได้เพราะ Framer)

STEP 3 — เขียน `visual-addendum.md` โครงนี้:
```
# Visual Addendum — วัดจริงจาก browser (วันที่, viewport 1440×900 / 390×844)
## ตาราง metrics รวม (เว็บ × whitespace% / display:body ratio / จำนวน element ขยับ / ความยาว vh / libs)
## studiobjork.com — full protocol 7 ข้อ
## rleonardi.com — full protocol 7 ข้อ
## bluxstudio.com — typography + motion ที่วัดได้
## แก้ไข/ยืนยันตัวเลขในรีพอร์ตหลัก (เว็บละ 3–5 bullet: ค่าที่วัดได้จริง vs ที่รายงานหลักอนุมานไว้ — อันไหนยืนยัน อันไหนต้องแก้)
## Failures (เว็บ/เฟรมที่เก็บไม่ได้ บอกตรงๆ)
```
กติกา: ตัวเลขทุกตัวมาจาก metrics.json หรือจากการดูภาพ (ติดป้าย "ประมาณด้วยตา") — ห้ามอ้างสิ่งที่ไม่ได้เห็นใน screenshot

---

เสร็จแล้วเอา `visual-addendum.md` + `out/metrics.json` กลับมาแนบในแชท Cowork เดิม เดี๋ยวผม (session เดิม) จะ merge เข้า `planc-beauty-deconstruction.md` ให้ครบทั้ง 6 เว็บตัวจริง
