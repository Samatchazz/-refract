# SECTIONS — Pixel Craft teardown (หน้า landing หลักของธีม)

- **เดโมที่จับ:** `https://pixel-craft.cmsmasters.studio/` — จับเมื่อ 2026-08-01 (ดู `out/_capture_meta.json`)
- **หมายเหตุขอบเขต (มติเจ้าของงาน 2026-08-01):** หน้านี้คือหน้า landing ของธีม (หน้าขายธีมของ CMSMasters)
  ไม่ใช่เดโมเอเจนซี่ `/main/` — เจ้าของงานสั่ง "เอาตามเดิมมาก่อน ค่อยมาขยับเพิ่มลดกันทีหลัง"
  ตัวรอง `out-main/` เก็บไว้เปรียบเทียบใน FINDINGS.md เท่านั้น
- **เลขถาวร:** S01–S25 มาจาก `out/probe/home_1440.json` (S00 = ส่วนหัว/nav) · E01–E62 freeze แล้วใน
  `out/derived/effects.json` — ห้าม renumber ตาม BRIEF §5.1
- ทุกตัวเลขมี citation รูปแบบ "วงเล็บมุม ไฟล์#เส้นทาง" ชี้ไฟล์ใต้ `out/` — ผลรัน checker แปะท้ายไฟล์

## ตารางกลุ่มเลข Effect (คัดลอกจาก BRIEF §5.1 เพื่อให้ไฟล์นี้อ่านเดี่ยวๆ ได้)

| Range | Group |
|---|---|
| E01–E09 | Global — preloader, custom cursor, smooth/virtual scroll, page transition, grain |
| E10–E19 | Scroll-driven — pin/sticky, parallax, scale-on-scroll, card stack, horizontal scroll |
| E20–E29 | Reveal — fade/slide on enter, stagger, clip/mask reveal |
| E30–E39 | Text — line reveal, marquee, counter, scramble, letter hover |
| E40–E49 | Hover / cursor-follow — card lift, image follow, magnetic button, tilt |
| E50–E59 | Media — video autoplay, canvas/WebGL, image sequence, blend modes |
| E60–E69 | Nav & overlay — nav hide/show, fullscreen menu, modal |

## Slope legend (วางตามต้นฉบับ — เครื่องหมายชวนสับสน)

```
slope = d(rect.top) / d(scrollY)
  -1.00       element is static in normal flow
  |s| < 0.08  pinned  (horizontal-scroll if xSlope > 0.2)
  -0.92…-0.08 moves SLOWER than scroll  (classic background parallax)
  < -1.08     moves FASTER than scroll
  > +0.08     drifts downward (reverse parallax)
```

หมายเหตุคอลัมน์สูง @390: probe ที่ 390 พบ 24 section เทียบกับ 25 ที่ 1440 — จับคู่ตามลำดับ index
⟨derived/sections.json#note390⟩ แถวท้ายสุด (S25) จึงไม่มีค่าที่ 390 = ยังไม่ได้วัด

---

## Table A — Sections

| # | ภาพ | สูง @1440 | สูง @390 | Effects | โครงสร้างเนื้อหาในต้นฉบับ | เนื้อหา Plan C | คำแนะนำ (ของผู้ช่วย) |
|---|---|---|---|---|---|---|---|
| S00 | (no image — ส่วนหัว fixed ไม่ถูกตัดเป็น section) | 112px ⟨probe/home_1440.json#nav.height⟩ · absolute ⟨probe/home_1440.json#nav.position⟩ | — ไม่ได้วัดแยก | E01 E40 E60 E62 | โลโก้ซ้าย + ปุ่ม CTA ขวา 1 ปุ่ม + ปุ่ม hamburger (offcanvas) | *(เว้นว่าง)* | keep — โครง nav เรียบ ใช้ได้ทุกแบรนด์ |
| S01 | ⟨sections/home_1440_S01.jpg⟩ | 1176px ⟨derived/sections.json#sections[0].height⟩ · 1.31×vh ⟨derived/sections.json#sections[0].vhFraction⟩ | 833px ⟨derived/sections.json#sections[0].height390⟩ | E01 E20 E31 E33 E40 E52 | Hero เต็มจอ: H1 หนึ่งบรรทัดมีคำหมุน (typed) + บรรทัดรอง serif สลับ sans + CTA 2 ปุ่ม + พื้นหลังภาพเบลอขยับเอง + แถบ marquee รูป/ป้าย 12 รายการ ⟨derived/sections.json#sections[0].repeatGeometry.count⟩ ช่องไฟ 120px ⟨derived/sections.json#sections[0].repeatGeometry.colGap⟩ | *(เว้นว่าง)* | keep — โครง hero + คำหมุนใช้กับข้อเสนอใดก็ได้ (ไทยต้องเปลี่ยนวิธี split ตาม §6.5) |
| S02 | ⟨sections/home_1440_S02.jpg⟩ | 2206px ⟨derived/sections.json#sections[1].height⟩ · 2.45×vh ⟨derived/sections.json#sections[1].vhFraction⟩ | 2021px ⟨derived/sections.json#sections[1].height390⟩ | E20 E30 E40 E41 | หัวข้อกลาง + การ์ดตัวอย่าง 3 ใบ (ภาพยาวเลื่อนใน frame ตอน hover ⟨derived/effect_section_map.json#widgetPlacements.cmsmasters-image-scroll⟩) วางสลับซ้ายขวา แต่ละใบมีป้ายกำกับ + ปุ่ม | *(เว้นว่าง)* | flag — โครง "ของตัวอย่าง 3 ชิ้น" ใช้ซ้ำเป็น 3 เสา EXTRACT/ENGINEER/ESTABLISH ได้ แต่ต้องมีภาพจริง 3 ชิ้น |
| S03 | ⟨sections/home_1440_S03.jpg⟩ | 2148px ⟨derived/sections.json#sections[2].height⟩ · 2.39×vh ⟨derived/sections.json#sections[2].vhFraction⟩ | 4369px ⟨derived/sections.json#sections[2].height390⟩ | E20 E30 | หัวข้อกลาง + bento grid ~12 ช่องขนาดคละ (ภาพ 13 รูป ⟨derived/sections.json#sections[2].media.img⟩) ช่องละ ภาพ/ไอคอน + ชื่อ + คำอธิบายสั้น | *(เว้นว่าง)* | keep — bento grid เล่าจุดขายหลายข้อพร้อมกันได้ดี มือถือยุบเป็นคอลัมน์เดียว (สูงขึ้น ~2 เท่า ตามที่วัด) |
| S04 | ⟨sections/home_1440_S04.jpg⟩ | 583px ⟨derived/sections.json#sections[3].height⟩ · 0.65×vh ⟨derived/sections.json#sections[3].vhFraction⟩ | 444px ⟨derived/sections.json#sections[3].height390⟩ | E20 E30 E40 | ป้ายกำกับเล็ก + ประโยค statement ใหญ่ (serif สลับ sans + ไฮไลต์ขีดเส้น) + ย่อหน้าสั้น + CTA 1 ปุ่มพร้อมลูกศรลายมือ | *(เว้นว่าง)* | keep — จังหวะพักสายตาระหว่าง section หนักๆ ใช้เป็นประโยค positioning ได้ |
| S05 | ⟨sections/home_1440_S05.jpg⟩ | 671px ⟨derived/sections.json#sections[4].height⟩ · 0.75×vh ⟨derived/sections.json#sections[4].vhFraction⟩ | 924px ⟨derived/sections.json#sections[4].height390⟩ | E11 E20 E30 E32 | 2 คอลัมน์: ซ้าย H2 ใหญ่ + เช็คลิสต์ 3 ข้อ + ย่อหน้า; ขวา ภาพซ้อน + การ์ดสถิติลอย (ตัวเลขนับ 0→92 ใน 2000ms ⟨derived/widget_settings.json#containers.counter-numbers[0].duration⟩ + แถบ progress) องค์ประกอบขวาลอยช้ากว่า scroll | *(เว้นว่าง)* | keep — โครง "คำอ้าง + ตัวเลขพิสูจน์" ตรงกับความต้องการ Plan C แต่ 🔴 ห้ามใส่ตัวเลขผลลัพธ์จนกว่าจะมีของจริง (ตามไฟล์ copy) |
| S06 | ⟨sections/home_1440_S06.jpg⟩ | 520px ⟨derived/sections.json#sections[5].height⟩ · 0.58×vh ⟨derived/sections.json#sections[5].vhFraction⟩ | 1676px ⟨derived/sections.json#sections[5].height390⟩ | E20 E21 E30 E42 | 2 คอลัมน์: ซ้ายป้าย + H2; ขวากริดไอคอน 9 ช่อง ⟨derived/widget_census.json#census.cmsmasters-featured-box.S06⟩ 3 คอลัมน์ (ไอคอนวงกลม + ป้ายข้อความ) โผล่ทีละใบ | *(เว้นว่าง)* | keep — ใช้เป็น "สิ่งที่ได้จากบริการ" ได้ตรงๆ |
| S07 | ⟨sections/home_1440_S07.jpg⟩ | 1019px ⟨derived/sections.json#sections[6].height⟩ · 1.13×vh ⟨derived/sections.json#sections[6].vhFraction⟩ | 626px ⟨derived/sections.json#sections[6].height390⟩ | E50 | พื้นดำ: หัวข้อกลาง + ย่อหน้า + carousel เลื่อนต่อเนื่อง 5 สไลด์ ⟨probe/home_1440.json#sections[6].repeatedChildren[0].count⟩ + จุด bullet | *(เว้นว่าง)* | flag — carousel ต้องมีภาพผลงาน ≥4-5 ชิ้นถึงดูไม่โหรงเหรง Plan C ช่วงแรกอาจยังไม่มี |
| S08 | ⟨sections/home_1440_S08.jpg⟩ | 905px ⟨derived/sections.json#sections[7].height⟩ · 1.01×vh ⟨derived/sections.json#sections[7].vhFraction⟩ | 530px ⟨derived/sections.json#sections[7].height390⟩ | E11 E33 | ไอคอนชิป + H2 + ย่อหน้า + ภาพใหญ่ 1 รูป; มี marquee ข้อความยักษ์วิ่งเป็นฉากหลังล่าง (−75.2 px/s ⟨effects/marquee_S08_visible.json#measured.pxPerSecond⟩) | *(เว้นว่าง)* | flag — เนื้อหาคือโฆษณา widget ของธีม แต่ **กลไก marquee ควรเก็บ** ไปใช้เป็นแถบวิ่งของแบรนด์ |
| S09 | ⟨sections/home_1440_S09.jpg⟩ | 403px ⟨derived/sections.json#sections[8].height⟩ · 0.45×vh ⟨derived/sections.json#sections[8].vhFraction⟩ | 1207px ⟨derived/sections.json#sections[8].height390⟩ | E51 | 2 คอลัมน์: ซ้ายไอคอน + H2 + ย่อหน้า; ขวาคอลลาจ before/after slider (เส้นแบ่งเริ่ม 55% ⟨derived/widget_settings.json#widgets.cmsmasters-before-after[0].settings.default_offset.size⟩ เลื่อนด้วยคลิก) + ภาพประกอบ | *(เว้นว่าง)* | flag แรง — ไฟล์ copy ของ Plan C ระบุ 🔴 ห้ามใช้ before/after — section นี้ไม่มีเนื้อหาใส่ |
| S10 | ⟨sections/home_1440_S10.jpg⟩ | 610px ⟨derived/sections.json#sections[9].height⟩ · 0.68×vh ⟨derived/sections.json#sections[9].vhFraction⟩ | 1368px ⟨derived/sections.json#sections[9].height390⟩ | E20 E30 E42 | H2 กลาง + การ์ดใหญ่ 2 ใบ (สว่าง/มืด) ใบละ ไอคอนสี + ชื่อ + ย่อหน้า + ภาพประกอบ | *(เว้นว่าง)* | keep — คู่การ์ดเทียบ 2 อย่าง (เช่น "ทำเอง vs มีที่ปรึกษา") ใช้โครงนี้ได้ |
| S11 | ⟨sections/home_1440_S11.jpg⟩ | 1108px ⟨derived/sections.json#sections[10].height⟩ · 1.23×vh ⟨derived/sections.json#sections[10].vhFraction⟩ | 1550px ⟨derived/sections.json#sections[10].height390⟩ | E10 E20 E30 | 2 คอลัมน์: ซ้าย **sticky** (ป้าย NEW + H2 + เช็คลิสต์ 4 ข้อ, offset บน 40px ⟨derived/widget_settings.json#containers.block-sticky[0].settings.cms_sticky_offset_top⟩); ขวาไล่สาธิต 5 บล็อกยาว | *(เว้นว่าง)* | keep — โครง sticky-ซ้าย/เนื้อหา-ขวา เหมาะมากกับการอธิบายบริการทีละขั้น |
| S12 | ⟨sections/home_1440_S12.jpg⟩ | 812px ⟨derived/sections.json#sections[11].height⟩ · 0.9×vh ⟨derived/sections.json#sections[11].vhFraction⟩ | 987px ⟨derived/sections.json#sections[11].height390⟩ | E20 E21 E22 E30 | H1/H2 กลาง (serif สลับ) + ย่อหน้า + image accordion 3 แผง ⟨derived/widget_census.json#census.cmsmasters-image-accordion.S12⟩ (hover แล้วแผงขยาย ชื่อ+ปุ่มบนแผง) + การ์ด settings | *(เว้นว่าง)* | keep — accordion 3 แผง = 3 เสาของ Plan C ได้พอดี |
| S13 | ⟨sections/home_1440_S13.jpg⟩ | 486px ⟨derived/sections.json#sections[12].height⟩ · 0.54×vh ⟨derived/sections.json#sections[12].vhFraction⟩ | 1166px ⟨derived/sections.json#sections[12].height390⟩ | — (ไม่มี effect ที่วัดได้นอกเหนือ reveal ทั่วไป) | H2 กลาง + กล่องเช็คลิสต์ 3 คอลัมน์ มีป้ายหัวข้อดำ คอลัมน์ละ 3–4 ข้อ (icon-list รวม 10 ⟨derived/widget_census.json#census.cmsmasters-icon-list.S13⟩) | *(เว้นว่าง)* | keep — ตารางแจกแจง "ได้อะไรบ้าง" อ่านเร็ว เหมาะกับมือถือ |
| S14 | ⟨sections/home_1440_S14.jpg⟩ | 584px ⟨derived/sections.json#sections[13].height⟩ · 0.65×vh ⟨derived/sections.json#sections[13].vhFraction⟩ | 1058px ⟨derived/sections.json#sections[13].height390⟩ | E20 E30 E42 | H2 กลาง (ไฮไลต์ + serif) + ย่อหน้า + การ์ด 3 ใบ 3 โทน (สว่าง/ดำ/เขียว) ใบละภาพ + ชื่อ + ป้าย + ย่อหน้า | *(เว้นว่าง)* | keep — จานสี 3 โทนตรงกับพาเลตต์ Plan C (งาช้าง/เขียวดำ/ทอง) โดยบังเอิญ ใช้เทียบ 3 แพ็กเกจ/3 ขั้นได้ |
| S15 | ⟨sections/home_1440_S15.jpg⟩ | 857px ⟨derived/sections.json#sections[14].height⟩ · 0.95×vh ⟨derived/sections.json#sections[14].vhFraction⟩ | 540px ⟨derived/sections.json#sections[14].height390⟩ | E10 E30 | โครงเดียวกับ S11: ซ้าย sticky H2 serif + ย่อหน้า; ขวาโชว์เคส 4 ชุดภาพซ้อนไล่ลงมา | *(เว้นว่าง)* | merge? — โครงซ้ำ S11 ทั้งกลไก ต่างแค่เนื้อหา ถ้าเนื้อหาไม่พอควรเหลืออันเดียว |
| S16 | ⟨sections/home_1440_S16.jpg⟩ | 800px ⟨derived/sections.json#sections[15].height⟩ · 0.89×vh ⟨derived/sections.json#sections[15].vhFraction⟩ | 601px ⟨derived/sections.json#sections[15].height390⟩ | E30 | พื้นดำ: ป้าย + statement ใหญ่กลางจอ + ย่อหน้า; มีการ์ดตัวอย่างลอยประกอบรอบๆ (หลุดขอบบนล่าง) | *(เว้นว่าง)* | keep — statement มืดกลางหน้า = จังหวะเปลี่ยนอารมณ์ ใกล้เคียงภาษา griflan ที่เจ้าของชอบ |
| S17 | ⟨sections/home_1440_S17.jpg⟩ | 860px ⟨derived/sections.json#sections[16].height⟩ · 0.96×vh ⟨derived/sections.json#sections[16].vhFraction⟩ | 2198px ⟨derived/sections.json#sections[16].height390⟩ | E11 E30 | ไอคอน + หัวข้อ 2 ชั้น + ป้ายเขียว + ภาพ editor ใหญ่ 1 รูป (มี element ประกอบตั้งค่า parallax ไว้แต่วัดการเคลื่อนไหวไม่ได้ ⟨effects/parallax_S17_speed1_retry.json#fit.verdict⟩) | *(เว้นว่าง)* | flag — เนื้อหาผูกกับ screenshot เครื่องมือของธีม ไม่มี counterpart ใน Plan C |
| S18 | ⟨sections/home_1440_S18.jpg⟩ | 1886px ⟨derived/sections.json#sections[17].height⟩ · 2.1×vh ⟨derived/sections.json#sections[17].vhFraction⟩ | 627px ⟨derived/sections.json#sections[17].height390⟩ | — | หลายบล็อกซ้อนใน section เดียว: การ์ดม่วง + ลิสต์เลข 4 ข้อ / H2 + เช็คลิสต์ 8 ข้อ 2 คอลัมน์ + ภาพ widget grid / แถวมือถือ 5 เครื่อง + หัวข้อ mobile-first | *(เว้นว่าง)* | flag — section ยัดหลายเรื่อง ควรแตกเป็น section ย่อยถ้าจะใช้โครงนี้ (สูง 2.1vh แต่ที่ 390 เหลือ 627px แปลว่าบางบล็อกซ่อนบนมือถือ) |
| S19 | ⟨sections/home_1440_S19.jpg⟩ | 965px ⟨derived/sections.json#sections[18].height⟩ · 1.07×vh ⟨derived/sections.json#sections[18].vhFraction⟩ | 533px ⟨derived/sections.json#sections[18].height390⟩ | E30 E50 | พื้นเทาอ่อน: ป้าย + H2 (serif สลับ) + ย่อหน้า + carousel 5 สไลด์ ⟨probe/home_1440.json#sections[18].repeatedChildren[0].count⟩ แบบเดียวกับ S07 | *(เว้นว่าง)* | merge? — carousel ตัวที่สองของหน้า กลไกซ้ำ S07 ทั้งชุด |
| S20 | ⟨sections/home_1440_S20.jpg⟩ | 861px ⟨derived/sections.json#sections[19].height⟩ · 0.96×vh ⟨derived/sections.json#sections[19].vhFraction⟩ | 941px ⟨derived/sections.json#sections[19].height390⟩ | E30 | ป้าย + H2 ไฮไลต์ + ย่อหน้า + ภาพ carousel เล็ก + การ์ด "Demo Import" มี toggle 5 แถว + ปุ่มดำ | *(เว้นว่าง)* | flag — เป็นเรื่อง install ธีม ไม่มีคู่เทียบใน Plan C; โครง "การ์ด checklist + ปุ่ม" เก็บไว้ใช้เป็นการ์ดสมัครได้ |
| S21 | ⟨sections/home_1440_S21.jpg⟩ | 1905px ⟨derived/sections.json#sections[20].height⟩ · 2.12×vh ⟨derived/sections.json#sections[20].vhFraction⟩ | 1836px ⟨derived/sections.json#sections[20].height390⟩ | E10 E30 | โครง sticky-ซ้าย ตัวที่สาม (offset บน 40 + ล่าง 130 ⟨derived/widget_settings.json#containers.block-sticky[2].settings.cms_sticky_offset_bottom⟩): ซ้าย H2 serif; ขวาโชว์เคส 3 ชุด (ภาพ + ชื่อ + ย่อหน้า) | *(เว้นว่าง)* | merge? — sticky แบบเดียวกัน 3 ที่ (S11 S15 S21) ในหน้าเดียวถือว่าเฝือ Plan C ควรเหลือ 1–2 |
| S22 | ⟨sections/home_1440_S22.jpg⟩ | 1071px ⟨derived/sections.json#sections[21].height⟩ · 1.19×vh ⟨derived/sections.json#sections[21].vhFraction⟩ | 4925px ⟨derived/sections.json#sections[21].height390⟩ | E30 | พื้นดำ: ป้าย + H2 ไฮไลต์ + ย่อหน้า + กริด mockup 6 ใบ 3 คอลัมน์ 2 แถว ใบละภาพโครงร่าง + ป้ายชื่อ | *(เว้นว่าง)* | flag — เนื้อหาคือ header ของธีม; โครง "กริดตัวเลือก 6 แบบ" เก็บไว้กรณีโชว์รูปแบบบริการ |
| S23 | ⟨sections/home_1440_S23.jpg⟩ | 1149px ⟨derived/sections.json#sections[22].height⟩ · 1.28×vh ⟨derived/sections.json#sections[22].vhFraction⟩ | 921px ⟨derived/sections.json#sections[22].height390⟩ | E30 | H2 กลางไฮไลต์ + ย่อหน้า + กำแพงโลโก้ 24 ช่อง ⟨derived/sections.json#sections[22].media.img⟩ 6 คอลัมน์ 4 แถว (โลโก้ + ชื่อ + บางใบมีป้าย) | *(เว้นว่าง)* | flag แรง — นี่คือ "logo wall" ประจำธีมเอเจนซี่ Plan C เป็นที่ปรึกษาเดี่ยว ไม่มีโลโก้ 24 ตัวมาใส่ และไฟล์ copy ห้ามใช้โลโก้ลูกค้า (🔴) |
| S24 | ⟨sections/home_1440_S24.jpg⟩ | 356px ⟨derived/sections.json#sections[23].height⟩ · 0.4×vh ⟨derived/sections.json#sections[23].vhFraction⟩ | 735px ⟨derived/sections.json#sections[23].height390⟩ | — | H2 กลาง + แถวสมการราคา: ไอคอน 3 ชิ้น + เครื่องหมาย + / = + ราคาขีดฆ่า + ราคาใหญ่ | *(เว้นว่าง)* | flag — โครง "สมการมูลค่า" ใช้ได้เมื่อ Plan C มีราคาจริง (🟡 ในไฟล์ copy — รอตัวเลขจริง) |
| S25 | ⟨sections/home_1440_S25.jpg⟩ | 1007px ⟨derived/sections.json#sections[24].height⟩ · 1.12×vh ⟨derived/sections.json#sections[24].vhFraction⟩ | ไม่ได้วัด — probe 390 พบ 24 section ⟨derived/sections.json#note390⟩ | E20 E30 E40 E42 | CTA ปิดท้ายบนภาพเต็มจอโทนมืด: H2 serif สลับ + เช็คลิสต์แนวนอน 3 ข้อ + ปุ่มเขียว 1 + ภาพ screenshot ประกอบล่าง | *(เว้นว่าง)* | keep — CTA ปิดหน้าจำเป็นเสมอ; ส่วน footer จริงของหน้าไม่ถูกตัดเป็น section แยก (ไม่ได้วัด) |

---

## Table B — Effects

ที่มาคอลัมน์ "อยู่ที่" ทั้งหมด: `derived/effect_section_map.json` (แถว scroll-analysis + `widgetPlacements`)

| # | ชื่อ | กลุ่ม | อยู่ที่ | กลไก (และวิธีหาคำตอบ) | ค่าที่วัดได้ | สร้างเองด้วยมือ? | Plan C ใช้? |
|---|---|---|---|---|---|---|---|
| E01 | Page-load intro fade | E01s | S00 S01 S02 | CSS keyframe fade ตอนโหลด ไล่ delay ต่อ widget — อ่านจาก computed animation + settings ที่ serialize ใน DOM | 1.25s ⟨probe/home_1440.json#effects.animatedCSS.sample[0].duration⟩ ease ⟨probe/home_1440.json#effects.animatedCSS.sample[0].timing⟩ delay 500/700ms ⟨derived/widget_settings.json#widgets.cmsmasters-swap-button[1].settings._animation_delay⟩ ⟨derived/widget_settings.json#widgets.cmsmasters-swap-button[2].settings._animation_delay⟩ · ไม่มี preloader overlay (shots ช่วงโหลดคือหน้าเว็บเอง) | yes — CSS animation ล้วน | *(ว่าง)* |
| E10 | Sticky content block | E10s | S11 S15 S21 ⟨derived/effect_section_map.json#widgetPlacements.block-sticky⟩ | `position:sticky` เนทีฟ — probe จับ transform ไม่ได้เลย 3 ครั้ง = ยืนยันว่าไม่ใช่ JS ⟨effects/sticky_S11.json#fit.verdict⟩ | offset top 40px ⟨derived/widget_settings.json#containers.block-sticky[0].settings.cms_sticky_offset_top⟩ (S21 เพิ่ม bottom 130 ⟨derived/widget_settings.json#containers.block-sticky[2].settings.cms_sticky_offset_bottom⟩) slope หยาบ −0.61 ⟨derived/effect_section_map.json#rows[4].medianSlope⟩ (±1 step) | yes — sticky อย่างเดียว ไม่ต้องมี JS | *(ว่าง)* |
| E11 | Scroll vertical parallax | E10s | S05 S08 S17 ⟨derived/effect_section_map.json#widgetPlacements.effect-type-scroll⟩ | basicScroll แปล scroll → translateY เชิงเส้นตลอดช่วงที่ element อยู่ในจอ; กฎที่ถอดได้: travel = speed × 100px | S05 speed 2 → −200px ⟨effects/parallax_S05_speed2.json#fit.totalTravel⟩ (rms 0.058 ⟨effects/parallax_S05_speed2.json#fit.cubicBezierRms⟩ — ช่วง probe รวมช่วงนิ่ง จึง fit เป็น sigmoid; timing ประกาศ linear ⟨derived/widget_settings.json#containers.effect-type-scroll[1].settings.cms_scroll_vertical_timing⟩) · S17 วัดไม่ติด 2 ครั้ง = ไม่ได้วัด ⟨effects/parallax_S17_speed1_retry.json#fit.verdict⟩ | yes — rAF + อ่าน scrollY เชิงเส้น | *(ว่าง)* |
| E12 | ปุ่มลอย fixed โผล่ตาม scroll | E10s | (fixed/global) ⟨derived/effect_section_map.json#rows[0].sid⟩ | กลุ่มปุ่ม fixed ขวา เลื่อนขึ้น 40px + fade ช่วง 10–20% ของความสูงเอกสาร — วัดตรงด้วย probe ละเอียด | −40px ⟨effects/fixedwidget_pagescroll.json#fit.totalTravel⟩ `cubic-bezier(0.39,-0.06,0.54,1.17)` ⟨effects/fixedwidget_pagescroll.json#fit.cubicBezier⟩ **rms 0.018** ⟨effects/fixedwidget_pagescroll.json#fit.cubicBezierRms⟩ ช่วง 10–20% ⟨derived/widget_settings.json#containers.effect-type-scroll[0].settings.cms_scroll_viewport.sizes.start⟩ | yes — fixed + scroll listener เบาๆ | *(ว่าง)* |
| E20 | Scroll-entrance reveal (block) | E20s | S01–S06 S10–S12 S14 S25 (จุดที่ตั้ง `_animation` ใน widget settings) | IntersectionObserver ยิง CSS keyframe ครั้งเดียว (fade + เลื่อนขึ้น) — duration/timing จาก computed style | 1.25s ⟨probe/home_1440.json#effects.animatedCSS.sample[4].duration⟩ ease ⟨probe/home_1440.json#effects.animatedCSS.sample[4].timing⟩ ระยะ 60px ⟨derived/widget_settings.json#widgets.cmsmasters-fancy-text[0].settings.animated_distance.size⟩ (ค่าที่ธีม serialize ไว้บน widget เดียว — บล็อกทั่วไปไม่ได้วัด เป็น approximation ที่ประกาศแล้ว) | yes — IO + CSS transition | *(ว่าง)* |
| E21 | Sequential stagger reveal | E20s | S06 S12 | แบบ E20 แต่ไล่ทีละลูก (`data-animation-type=sequental`) | stagger 200ms ⟨probe/home_1440.json#effects.scrollAttrs[2].value⟩ delay ราย widget 150/300ms ⟨derived/widget_settings.json#widgets.cmsmasters-featured-box[2].settings._animation_delay⟩ ⟨derived/widget_settings.json#widgets.cmsmasters-featured-box[3].settings._animation_delay⟩ | yes — ตัวเดียวกับ E20 + index×delay | *(ว่าง)* |
| E22 | Image accordion (hover ขยาย) | E20s | S12 ⟨derived/effect_section_map.json#widgetPlacements.cmsmasters-image-accordion⟩ | แผงภาพเรียงแถว hover แล้วแผงขยาย (flex-grow transition) + overlay opacity สลับ 0↔1 + ชื่อ fade ขอบขวาด้วย mask | action hover ⟨derived/widget_settings.json#widgets.cmsmasters-image-accordion[0].settings.accordion_action⟩ แผง active เริ่มต้น 3 ⟨derived/widget_settings.json#widgets.cmsmasters-image-accordion[0].settings.active_item⟩ overlay สวิง ⟨derived/effect_section_map.json#rows[12].opacityReveal⟩ mask ⟨probe/home_1440.json#effects.maskImage.sample[0].value⟩ · duration ของ flex-grow ไม่ได้วัด (hover probe จับไม่ได้) — เทียบเคียง transition รวมของธีม 0.3–0.4s ⟨probe/home_1440.json#effects.transitions[0].value⟩ | yes — flex-grow + transition | *(ว่าง)* |
| E30 | Highlight-title reveal | E30s | 18 sections ⟨derived/effect_section_map.json#widgetPlacements.cmsmasters-highlight-title⟩ | สีไฮไลต์/เส้นใต้ในหัวข้อวาดตัวเองตอนเข้าจอ (keyframes ชื่อ gradient/underline ใน CSS ของธีม) | keyframes มีจริง ⟨analysis_css.json#keyframes[33].name⟩ · duration ไม่ได้วัด — เป็น one-shot ยิงครั้งเดียวตอน reveal วัดซ้ำแบบ dense ไม่ได้ | yes — background-size/clip-path transition | *(ว่าง)* |
| E31 | Typed text rotator | E30s | S01 ⟨derived/effect_section_map.json#widgetPlacements.cmsmasters-fancy-text⟩ | typed.js พิมพ์/ลบตัวอักษรวนลูป + caret กะพริบ | หน่วงต่อคำ 2500ms ⟨derived/widget_settings.json#widgets.cmsmasters-fancy-text[0].settings.fancy_text_delay_on_change⟩ loop ⟨derived/widget_settings.json#widgets.cmsmasters-fancy-text[0].settings.fancy_text_loop⟩ · จังหวะพิมพ์รายตัวอักษรไม่ได้วัด (ไม่ serialize) | yes — แต่ไทย**ห้าม split ตามตัวอักษร** ต้องใช้ `Intl.Segmenter('th',{granularity:'grapheme'})` ตาม BRIEF §6.5 ไม่งั้นสระ/วรรณยุกต์หลุด | *(ว่าง)* |
| E32 | Counter count-up | E30s | S05 ⟨derived/effect_section_map.json#widgetPlacements.counter⟩ | jquery-numerator tween ตัวเลข 0→เป้า ตอนเข้าจอ | 2000ms ⟨derived/widget_settings.json#containers.counter-numbers[0].duration⟩ เป้า 92 ⟨derived/widget_settings.json#containers.counter-numbers[0].toValue⟩ | yes — rAF tween ตัวเลข | *(ว่าง)* |
| E33 | Image marquee | E30s | S01 S08 ⟨derived/effect_section_map.json#widgetPlacements.marquee-direction⟩ | track ซ้ำ 2 ชุด translate3d วนลูปด้วย JS — วัดความเร็วจริงจาก motion; กฎ: px/s ≈ speed×30 | S01: −45.1 px/s ⟨effects/marquee_S01_inner.json#measured.pxPerSecond⟩ รอบละ 42.08s ⟨effects/marquee_S01_inner.json#measured.secondsForOneCopy⟩ ช่องไฟ 120px ⟨derived/widget_settings.json#widgets.cmsmasters-marquee[0].settings.marquee_item_gap.size⟩ · S08: −75.2 px/s ⟨effects/marquee_S08_visible.json#measured.pxPerSecond⟩ รอบละ 22.98s ⟨effects/marquee_S08_visible.json#measured.secondsForOneCopy⟩ gap 100px ⟨derived/widget_settings.json#widgets.cmsmasters-marquee[1].settings.marquee_item_gap.size⟩ · สำเนา 2 ชุด ⟨effects/marquee_S01_inner.json#measured.duplicatedCopies⟩ | yes — CSS animation เชิงเส้นบน track ซ้ำ 2 ชุด | *(ว่าง)* |
| E40 | Swap-button hover | E40s | S00 S01 S02 S04 S25 ⟨derived/effect_section_map.json#widgetPlacements.cmsmasters-swap-button⟩ | สลับป้าย/ไอคอน + crossfade สี ตอน hover — ปุ่มไม่ขยับ (probe ยืนยัน lift 0) | lift 0 ⟨effects/hover_swapbutton.json#measured.liftPx⟩ scale 1 ⟨effects/hover_swapbutton.json#measured.scaleOnHover⟩ transition 0.3/0.4s ease ⟨probe/home_1440.json#effects.transitions[0].value⟩ | yes — transition ล้วน | *(ว่าง)* |
| E41 | Image pan on hover | E40s | S02 ⟨derived/effect_section_map.json#widgetPlacements.cmsmasters-image-scroll⟩ | ภาพยาวเลื่อนแนวตั้งในกรอบขณะ hover — ทิศ/ทริกเกอร์จาก settings; ตัวกรอบนิ่ง ⟨effects/hover_imagescroll.json#measured.liftPx⟩ | ทิศ vertical ⟨derived/widget_settings.json#widgets.cmsmasters-image-scroll[0].settings.scroll_direction⟩ trigger hover ⟨derived/widget_settings.json#widgets.cmsmasters-image-scroll[0].settings.scroll_type⟩ · ความเร็ว pan ไม่ได้วัด (ตัวขยับคือ img ลูก อยู่นอกระยะ hover probe) | yes — transition บน object-position/translateY ของ img | *(ว่าง)* |
| E42 | Featured-box hover state | E40s | S06 S10 S14 S25 ⟨derived/effect_section_map.json#widgetPlacements.cmsmasters-featured-box⟩ | การ์ดสลับสีตัวอักษร/พื้นหลังตอน hover — ไม่ขยับ (probe lift 0, ไม่มี magnetic/tilt ทั้ง 43 จุดของ hover pass) | lift 0 ⟨effects/hover_featuredbox.json#measured.liftPx⟩ tilt false ⟨effects/hover_featuredbox.json#measured.tilt⟩ | yes — transition สี | *(ว่าง)* |
| E43 | Global micro-transitions | E40s | ทั้งหน้า | ลิงก์/ปุ่มทั้งหน้าใช้ transition ชุดเดียวกัน | `background/border/box-shadow 0.3s + transform 0.4s ease` ×93 ⟨probe/home_1440.json#effects.transitions[0].count⟩ | yes — token CSS กลางชุดเดียว | *(ว่าง)* |
| E50 | Media carousel (Swiper) | E50s | S07 S19 ⟨derived/effect_section_map.json#widgetPlacements.cmsmasters-media-carousel⟩ | Swiper โหมดสายพาน: transition ยาว + autoplay ถี่ = เลื่อนต่อเนื่องเชิงเส้น | transition 10000ms ⟨derived/widget_settings.json#widgets.cmsmasters-media-carousel[0].settings.slider_speed⟩ autoplay 500ms ⟨derived/widget_settings.json#widgets.cmsmasters-media-carousel[0].settings.slider_autoplay_speed⟩ ช่องไฟ 80px ⟨derived/widget_settings.json#widgets.cmsmasters-media-carousel[0].settings.slider_space_between.size⟩ | yes — เขียนเป็นสายพาน translate เอง ไม่ใช้ Swiper (กติกา 4); ปุ่ม/จุดนำทางทำเองได้ | *(ว่าง)* |
| E51 | Before/After slider | E50s | S09 ⟨derived/effect_section_map.json#widgetPlacements.cmsmasters-before-after⟩ | ภาพซ้อน 2 ชั้น + เส้นแบ่งลากได้ (คลิกเลื่อน) | เริ่ม 55% ⟨derived/widget_settings.json#widgets.cmsmasters-before-after[0].settings.default_offset.size⟩ แนวนอน ⟨derived/widget_settings.json#widgets.cmsmasters-before-after[0].settings.orientation⟩ | yes — clip-path + pointer events | *(ว่าง)* |
| E52 | Ambient background drift | E50s | S01 ⟨derived/effect_section_map.json#widgetPlacements.bg-effect-type-float⟩ | ฉากหลัง hero ลอยเอื่อย ±5% วนลูป (anime.js) | ±5% ⟨derived/widget_settings.json#containers.bg-effect-float[0].settings.cms_bg_floating_translate_x.sizes.from⟩ ประกาศ 15s ⟨derived/widget_settings.json#containers.bg-effect-float[0].settings.cms_bg_floating_duration.size⟩ วัดจริง ~16.0s ⟨effects/bgfloat_S01.json#fit.observedDurationMs⟩ (rms 0.042 ⟨effects/bgfloat_S01.json#fit.cubicBezierRms⟩ — เป็นลูปหลายแกน ไม่ใช่ tween เดี่ยว สร้างใหม่เป็น sine drift) | yes — sine x/y บน rAF | *(ว่าง)* |
| E60 | Header (absolute เลื่อนพ้นจอ) | E60s | S00 | header วาง absolute ทับ hero แล้วเลื่อนหายตาม scroll; headroom.js โหลดมาแต่**ไม่ทำงาน**บนหน้านี้ (ไม่มี class headroom ใน DOM, probe จับ transform ไม่ได้ ⟨effects/headroom_nav.json#fit.verdict⟩) | สูง 112px ⟨probe/home_1440.json#nav.height⟩ z-index 99 ⟨probe/home_1440.json#nav.zIndex⟩ | yes — absolute เฉยๆ (ไม่สร้าง hide/show เพราะต้นฉบับไม่ได้ใช้) | *(ว่าง)* |
| E61 | Timed popup modal | E60s | (fixed/global) | overlay เต็มจอ z สูงสุด เปิดเองตามเวลา มีปุ่มปิด — menu probe คลิกโดนปุ่มปิด popup ยืนยันว่ามันบังหน้าอยู่จริง ⟨menu_home_1440.json#cls⟩ | trigger `start_popup` 200 ⟨derived/widget_settings.json#widgets.cmsmasters-time-popup[0].settings.start_popup⟩ (หน่วยไม่ระบุใน DOM) · ขนาด fixed เต็มจอ ⟨probe/home_1440.json#effects.stickyFixed.sample[2].position⟩ | yes — dialog + timer | *(ว่าง)* |
| E62 | Offcanvas menu | E60s | S00 ⟨derived/effect_section_map.json#widgetPlacements.cmsmasters-offcanvas⟩ | hamburger เปิดแผงเมนูด้านข้าง — สถานะเปิดถูกจับที่ 390 ⟨shots/home_390_menu_open.jpg⟩ | เนื้อในเป็น navigation ⟨derived/widget_settings.json#widgets.cmsmasters-offcanvas[0].settings.content_block[0].content_type⟩ | yes — แผง fixed + transition | *(ว่าง)* |

### สิ่งที่ **ไม่มี** ในหน้านี้ (บันทึกกันเข้าใจผิด — จาก `derived/effects.json#absences`)

custom cursor (JS มีแต่ไม่ instantiate) · tilt (vanilla-tilt โหลดแต่ไม่มี data-tilt) · preloader overlay ·
smooth/virtual scroll (เนทีฟล้วน) · horizontal-scroll section · WebGL/canvas/video · split-text ·
magnetic button · grain/turbulence · GSAP/ScrollTrigger (สแต็คจริง: Swiper + anime.js + basicScroll +
headroom + jQuery ⟨probe/home_1440.json#libs.jQuery⟩)

---

## 3 เอา / 3 ตัด (มุมมองจาก positioning ของ Plan C)

บริบท: Plan C ขายที่ปรึกษา 1:1 — เกมโป๊กเกอร์ ไม่ใช่หมากรุก, คนจริงไม่ใช่เอเจนซี่โชว์พอร์ต,
กลุ่มเป้าหมายคือครีเอเตอร์เหนื่อยๆ เปิดจาก IG/TikTok บนมือถือ ซึ่งคำตอบที่ซื่อสัตย์คือ "เคลื่อนไหวน้อยลง"

**เอา 3:**
1. **E10 sticky block** — นิ่ง อ่านทีละขั้น เหมาะกับการสอน/อธิบายบริการ และปิดบนมือถือได้โดยไม่เสียเนื้อหา (sticky เป็นแค่ตำแหน่ง ไม่ใช่แอนิเมชัน)
2. **E30 highlight-title** — เน้นคำสำคัญในหัวข้อด้วยสี/เส้นใต้ ตรงกับ voice "พูดตรงๆ เน้นคำที่เจ็บ" โดยไม่ต้องให้อะไรวิ่งไปมา
3. **E20+E21 reveal เบาๆ** — ให้จังหวะการอ่านโดยไม่หน่วงคนใจร้อน (duration ควรสั้นกว่า 1.25s ของธีม — คนเหนื่อยไม่รอ)

**ตัด 3:**
1. **E61 timed popup** — popup เด้งใส่ครีเอเตอร์ที่เพิ่งหนีความวุ่นวายมา = ปิดเว็บทันที ความเสี่ยงทางธุรกิจมากกว่าประโยชน์
2. **E31 typed rotator** — ภาษาไทยต้อง segment ราย grapheme เพิ่มความเสี่ยงสระหลุดโดยได้ effect ที่ดู "ขายของ" ที่สุดในหน้า; ถ้าอยากได้จังหวะ ใช้ line-reveal แทน
3. **E12 ปุ่มลอย fixed** — เป็นภาษาของหน้าขายธีม (ปุ่มซื้อ/ปุ่มขึ้นบนสุด) หน้า Plan C สั้นกว่ามากและมี CTA ในเนื้อหาอยู่แล้ว

*(ทั้งหมดเป็นคำแนะนำ — skeleton สร้างครบทุกตัวตามมติ "build the full site")*

---

## ผลรัน `check_citations.mjs` (แปะตามข้อบังคับ §4.4)

```
$ node research/pixelcraft/scripts/check_citations.mjs research/pixelcraft/SECTIONS.md
OK L35 ⟨derived/sections.json#note390⟩ = "home_390 probe found 24 sections vs 25 at 1440; height390 matched by array inde
OK L43 ⟨probe/home_1440.json#nav.height⟩ = 112
OK L43 ⟨probe/home_1440.json#nav.position⟩ = "absolute"
OK L44 ⟨sections/home_1440_S01.jpg⟩ (non-JSON file, existence checked)
OK L44 ⟨derived/sections.json#sections[0].height⟩ = 1176.16
OK L44 ⟨derived/sections.json#sections[0].vhFraction⟩ = 1.31
OK L44 ⟨derived/sections.json#sections[0].height390⟩ = 832.88
OK L44 ⟨derived/sections.json#sections[0].repeatGeometry.count⟩ = 12
OK L44 ⟨derived/sections.json#sections[0].repeatGeometry.colGap⟩ = 120
OK L45 ⟨sections/home_1440_S02.jpg⟩ (non-JSON file, existence checked)
OK L45 ⟨derived/sections.json#sections[1].height⟩ = 2206.41
OK L45 ⟨derived/sections.json#sections[1].vhFraction⟩ = 2.45
OK L45 ⟨derived/sections.json#sections[1].height390⟩ = 2021.45
OK L45 ⟨derived/effect_section_map.json#widgetPlacements.cmsmasters-image-scroll⟩ = ["S02"]
OK L46 ⟨sections/home_1440_S03.jpg⟩ (non-JSON file, existence checked)
OK L46 ⟨derived/sections.json#sections[2].height⟩ = 2147.94
OK L46 ⟨derived/sections.json#sections[2].vhFraction⟩ = 2.39
OK L46 ⟨derived/sections.json#sections[2].height390⟩ = 4368.58
OK L46 ⟨derived/sections.json#sections[2].media.img⟩ = 13
OK L47 ⟨sections/home_1440_S04.jpg⟩ (non-JSON file, existence checked)
OK L47 ⟨derived/sections.json#sections[3].height⟩ = 582.53
OK L47 ⟨derived/sections.json#sections[3].vhFraction⟩ = 0.65
OK L47 ⟨derived/sections.json#sections[3].height390⟩ = 444.05
OK L48 ⟨sections/home_1440_S05.jpg⟩ (non-JSON file, existence checked)
OK L48 ⟨derived/sections.json#sections[4].height⟩ = 670.88
OK L48 ⟨derived/sections.json#sections[4].vhFraction⟩ = 0.75
OK L48 ⟨derived/sections.json#sections[4].height390⟩ = 924.14
OK L48 ⟨derived/widget_settings.json#containers.counter-numbers[0].duration⟩ = "2000"
OK L49 ⟨sections/home_1440_S06.jpg⟩ (non-JSON file, existence checked)
OK L49 ⟨derived/sections.json#sections[5].height⟩ = 520
OK L49 ⟨derived/sections.json#sections[5].vhFraction⟩ = 0.58
OK L49 ⟨derived/sections.json#sections[5].height390⟩ = 1675.63
OK L49 ⟨derived/widget_census.json#census.cmsmasters-featured-box.S06⟩ = 9
OK L50 ⟨sections/home_1440_S07.jpg⟩ (non-JSON file, existence checked)
OK L50 ⟨derived/sections.json#sections[6].height⟩ = 1018.95
OK L50 ⟨derived/sections.json#sections[6].vhFraction⟩ = 1.13
OK L50 ⟨derived/sections.json#sections[6].height390⟩ = 625.73
OK L50 ⟨probe/home_1440.json#sections[6].repeatedChildren[0].count⟩ = 5
OK L51 ⟨sections/home_1440_S08.jpg⟩ (non-JSON file, existence checked)
OK L51 ⟨derived/sections.json#sections[7].height⟩ = 904.88
OK L51 ⟨derived/sections.json#sections[7].vhFraction⟩ = 1.01
OK L51 ⟨derived/sections.json#sections[7].height390⟩ = 530.17
OK L51 ⟨effects/marquee_S08_visible.json#measured.pxPerSecond⟩ = -75.2
OK L52 ⟨sections/home_1440_S09.jpg⟩ (non-JSON file, existence checked)
OK L52 ⟨derived/sections.json#sections[8].height⟩ = 403.47
OK L52 ⟨derived/sections.json#sections[8].vhFraction⟩ = 0.45
OK L52 ⟨derived/sections.json#sections[8].height390⟩ = 1206.8
OK L52 ⟨derived/widget_settings.json#widgets.cmsmasters-before-after[0].settings.default_offset.size⟩ = 55
OK L53 ⟨sections/home_1440_S10.jpg⟩ (non-JSON file, existence checked)
OK L53 ⟨derived/sections.json#sections[9].height⟩ = 609.83
OK L53 ⟨derived/sections.json#sections[9].vhFraction⟩ = 0.68
OK L53 ⟨derived/sections.json#sections[9].height390⟩ = 1367.59
OK L54 ⟨sections/home_1440_S11.jpg⟩ (non-JSON file, existence checked)
OK L54 ⟨derived/sections.json#sections[10].height⟩ = 1108.44
OK L54 ⟨derived/sections.json#sections[10].vhFraction⟩ = 1.23
OK L54 ⟨derived/sections.json#sections[10].height390⟩ = 1550
OK L54 ⟨derived/widget_settings.json#containers.block-sticky[0].settings.cms_sticky_offset_top⟩ = 40
OK L55 ⟨sections/home_1440_S12.jpg⟩ (non-JSON file, existence checked)
OK L55 ⟨derived/sections.json#sections[11].height⟩ = 811.67
OK L55 ⟨derived/sections.json#sections[11].vhFraction⟩ = 0.9
OK L55 ⟨derived/sections.json#sections[11].height390⟩ = 986.86
OK L55 ⟨derived/widget_census.json#census.cmsmasters-image-accordion.S12⟩ = 1
OK L56 ⟨sections/home_1440_S13.jpg⟩ (non-JSON file, existence checked)
OK L56 ⟨derived/sections.json#sections[12].height⟩ = 485.95
OK L56 ⟨derived/sections.json#sections[12].vhFraction⟩ = 0.54
OK L56 ⟨derived/sections.json#sections[12].height390⟩ = 1166.11
OK L56 ⟨derived/widget_census.json#census.cmsmasters-icon-list.S13⟩ = 3
OK L57 ⟨sections/home_1440_S14.jpg⟩ (non-JSON file, existence checked)
OK L57 ⟨derived/sections.json#sections[13].height⟩ = 583.88
OK L57 ⟨derived/sections.json#sections[13].vhFraction⟩ = 0.65
OK L57 ⟨derived/sections.json#sections[13].height390⟩ = 1057.67
OK L58 ⟨sections/home_1440_S15.jpg⟩ (non-JSON file, existence checked)
OK L58 ⟨derived/sections.json#sections[14].height⟩ = 857.16
OK L58 ⟨derived/sections.json#sections[14].vhFraction⟩ = 0.95
OK L58 ⟨derived/sections.json#sections[14].height390⟩ = 540
OK L59 ⟨sections/home_1440_S16.jpg⟩ (non-JSON file, existence checked)
OK L59 ⟨derived/sections.json#sections[15].height⟩ = 800
OK L59 ⟨derived/sections.json#sections[15].vhFraction⟩ = 0.89
OK L59 ⟨derived/sections.json#sections[15].height390⟩ = 600.63
OK L60 ⟨sections/home_1440_S17.jpg⟩ (non-JSON file, existence checked)
OK L60 ⟨derived/sections.json#sections[16].height⟩ = 860.41
OK L60 ⟨derived/sections.json#sections[16].vhFraction⟩ = 0.96
OK L60 ⟨derived/sections.json#sections[16].height390⟩ = 2198.44
OK L60 ⟨effects/parallax_S17_speed1_retry.json#fit.verdict⟩ = "no measurable animated channel — the element may just be in normal flow, or the
OK L61 ⟨sections/home_1440_S18.jpg⟩ (non-JSON file, existence checked)
OK L61 ⟨derived/sections.json#sections[17].height⟩ = 1886.36
OK L61 ⟨derived/sections.json#sections[17].vhFraction⟩ = 2.1
OK L61 ⟨derived/sections.json#sections[17].height390⟩ = 627.03
OK L62 ⟨sections/home_1440_S19.jpg⟩ (non-JSON file, existence checked)
OK L62 ⟨derived/sections.json#sections[18].height⟩ = 964.89
OK L62 ⟨derived/sections.json#sections[18].vhFraction⟩ = 1.07
OK L62 ⟨derived/sections.json#sections[18].height390⟩ = 533.22
OK L62 ⟨probe/home_1440.json#sections[18].repeatedChildren[0].count⟩ = 5
OK L63 ⟨sections/home_1440_S20.jpg⟩ (non-JSON file, existence checked)
OK L63 ⟨derived/sections.json#sections[19].height⟩ = 861.08
OK L63 ⟨derived/sections.json#sections[19].vhFraction⟩ = 0.96
OK L63 ⟨derived/sections.json#sections[19].height390⟩ = 940.86
OK L64 ⟨sections/home_1440_S21.jpg⟩ (non-JSON file, existence checked)
OK L64 ⟨derived/sections.json#sections[20].height⟩ = 1905.14
OK L64 ⟨derived/sections.json#sections[20].vhFraction⟩ = 2.12
OK L64 ⟨derived/sections.json#sections[20].height390⟩ = 1836.41
OK L64 ⟨derived/widget_settings.json#containers.block-sticky[2].settings.cms_sticky_offset_bottom⟩ = 130
OK L65 ⟨sections/home_1440_S22.jpg⟩ (non-JSON file, existence checked)
OK L65 ⟨derived/sections.json#sections[21].height⟩ = 1070.97
OK L65 ⟨derived/sections.json#sections[21].vhFraction⟩ = 1.19
OK L65 ⟨derived/sections.json#sections[21].height390⟩ = 4924.94
OK L66 ⟨sections/home_1440_S23.jpg⟩ (non-JSON file, existence checked)
OK L66 ⟨derived/sections.json#sections[22].height⟩ = 1149.23
OK L66 ⟨derived/sections.json#sections[22].vhFraction⟩ = 1.28
OK L66 ⟨derived/sections.json#sections[22].height390⟩ = 920.5
OK L66 ⟨derived/sections.json#sections[22].media.img⟩ = 24
OK L67 ⟨sections/home_1440_S24.jpg⟩ (non-JSON file, existence checked)
OK L67 ⟨derived/sections.json#sections[23].height⟩ = 355.61
OK L67 ⟨derived/sections.json#sections[23].vhFraction⟩ = 0.4
OK L67 ⟨derived/sections.json#sections[23].height390⟩ = 734.78
OK L68 ⟨sections/home_1440_S25.jpg⟩ (non-JSON file, existence checked)
OK L68 ⟨derived/sections.json#sections[24].height⟩ = 1007.34
OK L68 ⟨derived/sections.json#sections[24].vhFraction⟩ = 1.12
OK L68 ⟨derived/sections.json#note390⟩ = "home_390 probe found 24 sections vs 25 at 1440; height390 matched by array inde
OK L78 ⟨probe/home_1440.json#effects.animatedCSS.sample[0].duration⟩ = "1.25s"
OK L78 ⟨probe/home_1440.json#effects.animatedCSS.sample[0].timing⟩ = "ease"
OK L78 ⟨derived/widget_settings.json#widgets.cmsmasters-swap-button[1].settings._animation_delay⟩ = 500
OK L78 ⟨derived/widget_settings.json#widgets.cmsmasters-swap-button[2].settings._animation_delay⟩ = 700
OK L79 ⟨derived/effect_section_map.json#widgetPlacements.block-sticky⟩ = ["S11","S15","S21"]
OK L79 ⟨effects/sticky_S11.json#fit.verdict⟩ = "no measurable animated channel — the element may just be in normal flow, or the
OK L79 ⟨derived/widget_settings.json#containers.block-sticky[0].settings.cms_sticky_offset_top⟩ = 40
OK L79 ⟨derived/widget_settings.json#containers.block-sticky[2].settings.cms_sticky_offset_bottom⟩ = 130
OK L79 ⟨derived/effect_section_map.json#rows[4].medianSlope⟩ = -0.61
OK L80 ⟨derived/effect_section_map.json#widgetPlacements.effect-type-scroll⟩ = ["(header/global)","S05","S08","S17"]
OK L80 ⟨effects/parallax_S05_speed2.json#fit.totalTravel⟩ = -200
OK L80 ⟨effects/parallax_S05_speed2.json#fit.cubicBezierRms⟩ = 0.05774
OK L80 ⟨derived/widget_settings.json#containers.effect-type-scroll[1].settings.cms_scroll_vertical_timing⟩ = "linear"
OK L80 ⟨effects/parallax_S17_speed1_retry.json#fit.verdict⟩ = "no measurable animated channel — the element may just be in normal flow, or the
OK L81 ⟨derived/effect_section_map.json#rows[0].sid⟩ = "(fixed/global)"
OK L81 ⟨effects/fixedwidget_pagescroll.json#fit.totalTravel⟩ = -40
OK L81 ⟨effects/fixedwidget_pagescroll.json#fit.cubicBezier⟩ = "cubic-bezier(0.39, -0.06, 0.54, 1.17)"
OK L81 ⟨effects/fixedwidget_pagescroll.json#fit.cubicBezierRms⟩ = 0.01844
OK L81 ⟨derived/widget_settings.json#containers.effect-type-scroll[0].settings.cms_scroll_viewport.sizes.start⟩ = 10
OK L82 ⟨probe/home_1440.json#effects.animatedCSS.sample[4].duration⟩ = "1.25s"
OK L82 ⟨probe/home_1440.json#effects.animatedCSS.sample[4].timing⟩ = "ease"
OK L82 ⟨derived/widget_settings.json#widgets.cmsmasters-fancy-text[0].settings.animated_distance.size⟩ = 60
OK L83 ⟨probe/home_1440.json#effects.scrollAttrs[2].value⟩ = "data-animation-stagger=200"
OK L83 ⟨derived/widget_settings.json#widgets.cmsmasters-featured-box[2].settings._animation_delay⟩ = 150
OK L83 ⟨derived/widget_settings.json#widgets.cmsmasters-featured-box[3].settings._animation_delay⟩ = 300
OK L84 ⟨derived/effect_section_map.json#widgetPlacements.cmsmasters-image-accordion⟩ = ["S12"]
OK L84 ⟨derived/widget_settings.json#widgets.cmsmasters-image-accordion[0].settings.accordion_action⟩ = "hover"
OK L84 ⟨derived/widget_settings.json#widgets.cmsmasters-image-accordion[0].settings.active_item⟩ = 3
OK L84 ⟨derived/effect_section_map.json#rows[12].opacityReveal⟩ = [1,0.06,0]
OK L84 ⟨probe/home_1440.json#effects.maskImage.sample[0].value⟩ = "linear-gradient(90deg, rgb(0, 0, 0) 0px, rgb(0, 0, 0) calc(100% - 30px), rgba(0
OK L84 ⟨probe/home_1440.json#effects.transitions[0].value⟩ = "background, border, box-shadow, transform 0.3s, 0.3s, 0.3s, 0.4s ease, ease, ea
OK L85 ⟨derived/effect_section_map.json#widgetPlacements.cmsmasters-highlight-title⟩ = ["S02","S03","S04","S05","S06","S10","S11","S12","S14","S15","S16","S17","S19","
OK L85 ⟨analysis_css.json#keyframes[33].name⟩ = "cmsmasters-highlight-title-animate-gradient"
OK L86 ⟨derived/effect_section_map.json#widgetPlacements.cmsmasters-fancy-text⟩ = ["S01"]
OK L86 ⟨derived/widget_settings.json#widgets.cmsmasters-fancy-text[0].settings.fancy_text_delay_on_change⟩ = 2500
OK L86 ⟨derived/widget_settings.json#widgets.cmsmasters-fancy-text[0].settings.fancy_text_loop⟩ = "yes"
OK L87 ⟨derived/effect_section_map.json#widgetPlacements.counter⟩ = ["S05"]
OK L87 ⟨derived/widget_settings.json#containers.counter-numbers[0].duration⟩ = "2000"
OK L87 ⟨derived/widget_settings.json#containers.counter-numbers[0].toValue⟩ = "92"
OK L88 ⟨derived/effect_section_map.json#widgetPlacements.marquee-direction⟩ = ["S01","S08"]
OK L88 ⟨effects/marquee_S01_inner.json#measured.pxPerSecond⟩ = -45.1
OK L88 ⟨effects/marquee_S01_inner.json#measured.secondsForOneCopy⟩ = 42.08
OK L88 ⟨derived/widget_settings.json#widgets.cmsmasters-marquee[0].settings.marquee_item_gap.size⟩ = 120
OK L88 ⟨effects/marquee_S08_visible.json#measured.pxPerSecond⟩ = -75.2
OK L88 ⟨effects/marquee_S08_visible.json#measured.secondsForOneCopy⟩ = 22.98
OK L88 ⟨derived/widget_settings.json#widgets.cmsmasters-marquee[1].settings.marquee_item_gap.size⟩ = 100
OK L88 ⟨effects/marquee_S01_inner.json#measured.duplicatedCopies⟩ = 2
OK L89 ⟨derived/effect_section_map.json#widgetPlacements.cmsmasters-swap-button⟩ = ["(header/global)","S01","S02","S04","S25"]
OK L89 ⟨effects/hover_swapbutton.json#measured.liftPx⟩ = 0
OK L89 ⟨effects/hover_swapbutton.json#measured.scaleOnHover⟩ = 1
OK L89 ⟨probe/home_1440.json#effects.transitions[0].value⟩ = "background, border, box-shadow, transform 0.3s, 0.3s, 0.3s, 0.4s ease, ease, ea
OK L90 ⟨derived/effect_section_map.json#widgetPlacements.cmsmasters-image-scroll⟩ = ["S02"]
OK L90 ⟨effects/hover_imagescroll.json#measured.liftPx⟩ = 0
OK L90 ⟨derived/widget_settings.json#widgets.cmsmasters-image-scroll[0].settings.scroll_direction⟩ = "vertical"
OK L90 ⟨derived/widget_settings.json#widgets.cmsmasters-image-scroll[0].settings.scroll_type⟩ = "hover"
OK L91 ⟨derived/effect_section_map.json#widgetPlacements.cmsmasters-featured-box⟩ = ["(header/global)","S06","S10","S14","S25"]
OK L91 ⟨effects/hover_featuredbox.json#measured.liftPx⟩ = 0
OK L91 ⟨effects/hover_featuredbox.json#measured.tilt⟩ = false
OK L92 ⟨probe/home_1440.json#effects.transitions[0].count⟩ = 93
OK L93 ⟨derived/effect_section_map.json#widgetPlacements.cmsmasters-media-carousel⟩ = ["S07","S19"]
OK L93 ⟨derived/widget_settings.json#widgets.cmsmasters-media-carousel[0].settings.slider_speed⟩ = 10000
OK L93 ⟨derived/widget_settings.json#widgets.cmsmasters-media-carousel[0].settings.slider_autoplay_speed⟩ = 500
OK L93 ⟨derived/widget_settings.json#widgets.cmsmasters-media-carousel[0].settings.slider_space_between.size⟩ = 80
OK L94 ⟨derived/effect_section_map.json#widgetPlacements.cmsmasters-before-after⟩ = ["S09"]
OK L94 ⟨derived/widget_settings.json#widgets.cmsmasters-before-after[0].settings.default_offset.size⟩ = 55
OK L94 ⟨derived/widget_settings.json#widgets.cmsmasters-before-after[0].settings.orientation⟩ = "horizontal"
OK L95 ⟨derived/effect_section_map.json#widgetPlacements.bg-effect-type-float⟩ = ["(header/global)"]
OK L95 ⟨derived/widget_settings.json#containers.bg-effect-float[0].settings.cms_bg_floating_translate_x.sizes.from⟩ = -5
OK L95 ⟨derived/widget_settings.json#containers.bg-effect-float[0].settings.cms_bg_floating_duration.size⟩ = 15
OK L95 ⟨effects/bgfloat_S01.json#fit.observedDurationMs⟩ = 16012.9
OK L95 ⟨effects/bgfloat_S01.json#fit.cubicBezierRms⟩ = 0.04247
OK L96 ⟨effects/headroom_nav.json#fit.verdict⟩ = "no measurable animated channel — the element may just be in normal flow, or the
OK L96 ⟨probe/home_1440.json#nav.height⟩ = 112
OK L96 ⟨probe/home_1440.json#nav.zIndex⟩ = "99"
OK L97 ⟨menu_home_1440.json#cls⟩ = "cmsmasters-popup-close"
OK L97 ⟨derived/widget_settings.json#widgets.cmsmasters-time-popup[0].settings.start_popup⟩ = 200
OK L97 ⟨probe/home_1440.json#effects.stickyFixed.sample[2].position⟩ = "fixed"
OK L98 ⟨derived/effect_section_map.json#widgetPlacements.cmsmasters-offcanvas⟩ = ["(header/global)"]
OK L98 ⟨shots/home_390_menu_open.jpg⟩ (non-JSON file, existence checked)
OK L98 ⟨derived/widget_settings.json#widgets.cmsmasters-offcanvas[0].settings.content_block[0].content_type⟩ = "navigation"
OK L105 ⟨probe/home_1440.json#libs.jQuery⟩ = "3.7.1"

200 citations, 0 failed
```
