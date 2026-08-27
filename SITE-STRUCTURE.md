# SITE-STRUCTURE — ⚠️ แผนนี้ถูกแทนที่แล้ว (24 ส.ค. 2026)

> **โครงจริงที่ Mat เคาะ = Layout B ใน `PlanCBIz/CONTENT-MAP.md`:**
> ด่านเกม (`planc-web/proto-journey/`) = หน้าหลัก/ตัวเล่าเรื่องทั้งหน้า ·
> About / Pricing / Contact = หน้า HTML เรียบมืออาชีพแยกต่างหาก แชร์แค่ identity
> (ฟอนต์ Prompt+Sarabun · กระดาษ/หมึก · sprite เล็ก 1 จุดเป็นลายเซ็น) ไม่ใส่กลไกเกม
> แผน "doodle landing + เกมเป็นแค่ 1 เซคชัน" ข้างล่างนี้ไม่ใช้แล้ว — เก็บไว้อ่านประวัติ

โครงเว็บหลักของ Plan C — เกม scrollytelling "แมวดำ" เป็น 1 เซคชัน/เมนูชื่อ **Creator Life** ไม่ใช่ทั้งเว็บ
สไตล์ทุกเซคชันตาม `DESIGN-DIRECTION.md` (ขาวดำ เส้นเด็กวาด rough.js + rough-notation + wired-elements, ฟอนต์ Itim/Mali + Shantell Sans)
เนื้อหาที่เจ้าของต้องเติมทีหลัง ทำเป็น placeholder ชัด ๆ ว่า `[เติม]` — โค้ดห้ามแต่งเนื้อหาแทน

## แผนผังหน้า

- `/` — landing หลัก (โครงตามด้านล่าง)
- `/creator-life` — เกม scrollytelling เต็ม (สเปกใน HANDOVER.md) — แยกหน้า เพราะยาวมาก
- (contact เป็น section ใน landing ไม่ต้องแยกหน้า)

## โครง landing `/` — เรียงบนลงล่าง

1. **Nav (sticky)** — โลโก้: หัวแมวดำ (ใช้จากธง `flag` ตัด path หัวแมวมาใช้ได้) + "Plan C" ฟอนต์ลายมือ · เมนู: Home · Creator Life · About · Pricing · Contact · ปุ่ม CTA กล่องเบี้ยว `[เติมข้อความ CTA]` — hover แล้วกล่อง re-wobble เบา ๆ (สลับ seed rough.js ครั้งเดียว)
2. **Hero** — พาดหัวใหญ่ `[เติม tagline Plan C]` คำสำคัญ 1 คำโดนวงกลม marker (rough-notation ยิงตอนโหลด) · แมวดำนั่งมุมขวาล่าง · เมฆ `cloud-s` ลอย 2 ก้อน + ดาว doodle (โค้ดวาด) · ปุ่ม CTA หลัก + ปุ่มรอง "ดู Creator Life →"
3. **Marquee strip** — แถบข้อความวิ่ง `[เติมคำ 4-5 คำ]` คั่นด้วยดาว/ก้นหอย doodle — เลื่อนด้วย CSS animation ได้ (ข้อยกเว้น scrub-safe: ส่วน landing ไม่ใช่ตัวเล่าเรื่องตามด่าน อนุญาต ambient loop ได้)
4. **About** — `[เติมเรื่องราว Plan C]` การ์ดเอียง ~2° แปะมุมด้วยเทป doodle + ลูกศรมือวาดชี้จากหัวข้อเข้าการ์ด + รูปทีม/ผลงานใส่กรอบเบี้ยว
5. **Services / What we do** — การ์ด 3 ใบขอบเบี้ยว: ไอคอนใช้ asset เกม (qblock / coin / pipe) หัวข้อ+คำอธิบาย `[เติม 3 บริการ]` hover = การ์ดเอียงเพิ่มนิดเดียว
6. **Creator Life (teaser เกม)** — กรอบจอวาดมือ ข้างในเป็นภาพนิ่งฉากเปิดด่าน (แมว+qblock+เมฆ) + คำโปรย `[เติม 1 ประโยค]` + ปุ่ม "เดินเล่นกับแมว →" ลิงก์ `/creator-life` · โบนัส: ให้แมวในกรอบกระดิกหางเบา ๆ
7. **Pricing** — 3 คอลัมน์กล่องเบี้ยว `[เติมแพ็กเกจ+ราคา]` · bullet = เหรียญ `coin` ย่อ · แผนแนะนำโดนวงกลม marker + ป้าย doodle "แนะนำ" เอียง ๆ
8. **Testimonials** — คำพูด `[เติม]` อยู่ในเมฆ `cloud-l` (reuse SVG เดิม ยืดเป็นกรอบ) + ชื่อคนฟอนต์ลายมือ
9. **Contact** — ฟอร์ม wired-elements (ชื่อ/อีเมล/ข้อความ/ปุ่มส่ง) + ช่องทางอื่น `[เติม]` + doodle ซองจดหมาย/เครื่องบินกระดาษ (มี asset `paperplane` แล้ว)
10. **Footer** — จุดเชื่อมสองโลก: พื้น footer = แถบ `ground` tile ของเกม มีแมวดำเดิน + `castle` เล็ก ๆ ท้ายสุด + ลิงก์เมนูซ้ำ + © Plan C

## กติกาเพิ่มเติม

- ทุก section ใช้ตัวคั่นเป็นเส้นหยึกหยัก rough.js หรือแถวเมฆจิ๋ว — ห้ามใช้ `<hr>` ตรง ๆ
- rough-notation trigger ด้วย IntersectionObserver ครั้งเดียวต่อการเข้าจอ
- dark mode toggle (ถ้าทำ): invert(1) ทั้งหน้า — สวิตช์เป็นรูปหลอดไฟ doodle
- responsive: มือถือ = การ์ดเรียงคอลัมน์เดียว, ด่านเกมในหน้า /creator-life ยังเป็น scroll แนวตั้งขับฉากแนวนอนเหมือนเดิม
- SEO/meta + og:image ใช้ภาพ hero (แคปหลังทำเสร็จ)

## ลำดับ build ที่แนะนำ (ต่อจากเฟสเกมใน HANDOVER.md)

เฟส 4: โครง landing ทั้ง 10 ส่วนด้วยเนื้อหา placeholder → เฟส 5: เกลาดีเทล doodle (rough-notation, hover, ตัวคั่น) → เฟส 6: เจ้าของเติมเนื้อหาจริงแทน [เติม] → เฟส 7: เชื่อม /creator-life + og/meta
