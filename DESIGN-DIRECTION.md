# DESIGN-DIRECTION — สไตล์ส่วนเนื้อหาเว็บ (นอกเหนือจากด่านเกม)

อ้างอิงแนว: doodle creative landing (ตัวอย่าง: Dribbble shot "Doodle Creative Website Design" ของ Antstheme) ปรับเข้าข้อจำกัดโปรเจกต์: **ขาวดำล้วน + เส้นเด็กวาด + กระดาษแผ่นเดียวกับด่านเกม**

## หลักการใหญ่

ทั้งหน้าเว็บคือ "สมุดวาดเล่นเล่มเดียว" — ด่านเกมกับส่วนเนื้อหาต้องแชร์ 3 อย่างเสมอ: ความหนาเส้นเท่ากับ asset เกม · ขาวดำเท่านั้น (dark mode = invert(1) พร้อมกันทั้งหน้า) · หยิบ asset เกมมาใช้ในส่วนเนื้อหา (เหรียญ = bullet, qblock = ไอคอน FAQ, ท่อ = ตัวคั่น section, เมฆ = กรอบ quote)

## องค์ประกอบสไตล์ (DNA 6 ข้อของแนว doodle landing)

1. หัวข้อฟอนต์ลายมือใหญ่ ๆ + เนื้อความฟอนต์อ่านง่าย
2. กล่อง/ปุ่ม/การ์ดขอบวาดมือเบี้ยว ไม่มีสี่เหลี่ยมคมเป๊ะในหน้า
3. ของตกแต่งจุกจิกโปรยรอบเนื้อหา: ลูกศรมือวาด ดาว ก้นหอย ซิกแซก (วาดด้วยโค้ด ไม่ต้องเจน MJ)
4. เน้นคำสำคัญด้วยเส้น marker: วงกลม/ขีดเส้นใต้หยึกหยัก animate ตอน scroll ถึง
5. การ์ด/รูปเอียง 1-3 องศา เหมือนแปะเทปในสมุด
6. ช่องว่างเยอะ หายใจได้ — ความรกอยู่ที่ doodle ไม่ใช่ที่ layout

## เครื่องมือ (ติดตั้งผ่าน npm ได้หมด)

| เครื่องมือ | ใช้ทำ | หมายเหตุ |
|---|---|---|
| [rough-notation](https://roughnotation.com/) (3.8kb) | เส้นเน้นคำแบบวาดสด: underline, circle, box, highlight, strike, bracket | trigger ตอน element เข้าจอ (IntersectionObserver) — ยิงครั้งเดียวต่อทิศทาง scroll เพื่อไม่ผิดหลัก scrub-safe มากนัก หรือ map progress เอง |
| [rough.js](https://roughjs.com/) | กรอบการ์ด เส้นคั่น ลูกศร รูปทรงสเก็ตช์ทุกชนิด | seed คงที่ต่อ element (ห้าม random ทุกเฟรม) |
| [wired-elements](https://wiredjs.com/) | ปุ่ม/อินพุต/ฟอร์มหน้าตาวาดมือสำเร็จรูป | สร้างบน rough.js |
| CSS ท่าลัดกล่องเบี้ยว | `border-radius: 255px 15px 225px 15px / 15px 225px 15px 255px; border: 2.5px solid #000` | ไม่ต้องใช้ JS |
| ฟอนต์ Google Fonts | ไทย: **Itim** (หัวข้อ), **Mali** (เนื้อความ), Sriracha (ตัวเลือก) · อังกฤษ: **Shantell Sans** หรือ Patrick Hand | ทุกตัวฟรี รองรับไทย/ละติน |

## กติกาที่ห้ามหลุด

- สีมีแค่ #000 กับ #fff (โซน dark-level ใช้ filter: invert(1) ทั้งฉาก)
- เส้น marker/underline ของ rough-notation ตั้ง strokeWidth ให้ใกล้เคียงเส้น asset เกม
- rough.js ต้อง fix `seed` ต่อ element — รีเฟรชแล้วหน้าตาเดิม, ห้าม re-roughen ทุกเฟรม
- ตัวหนังสือทั้งหมดเป็น HTML จริง (ห้ามเป็นภาพ — กติกาเดิมตั้งแต่เจน asset)

## ตัวอย่างอ้างอิงเพิ่มเติม

[Awwwards: doodle](https://www.awwwards.com/inspiration_search/doodle/) · [Awwwards: illustration sites](https://www.awwwards.com/websites/illustration/) · [Excalidraw](https://excalidraw.com/) (UI สเก็ตช์ใช้งานจริง) · [Onextrapixel hand-drawn roundup](https://onextrapixel.com/lovely-website-designs-with-a-hand-drawn-feel-and-awesome-sketchy-illustrations/) · [TemplateMonster 45 เว็บ](https://templatemonster.com/blog/45-hand-drawn-website-designs)
