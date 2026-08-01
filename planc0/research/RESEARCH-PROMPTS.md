# PlanC — PROMPT PACK
_ก็อปวางได้เลย 4 ชุด: (1) ค้น research เพิ่ม (2) สั่งบิลด์ (3) สร้างภาพ/โลโก้ (4) ตรวจงาน QA_
_ทุก prompt ฝัง "กฎบ้าน" ของโปรเจกต์ไว้แล้ว — ความซื่อสัตย์เรื่องแหล่งอ้างอิง, ความปลอดภัยของภาษาไทย, WCAG, การไม่ตัดสินใจแทนคุณ_

---

# ชุด 0 · กฎบ้าน (แปะหัว prompt ไหนก็ได้)

```
กฎบ้านของโปรเจกต์ PlanC — ใช้กับทุกงาน:
1. ความซื่อสัตย์เรื่องแหล่ง: แยก "OBSERVED" (สิ่งที่คุณเปิดเห็นเอง) ออกจาก "REPORTED" (สิ่งที่บทความ/หน้ารางวัลบอก + ต้องแนบ URL ที่เปิดจริง) ห้ามบรรยาย motion ที่ไม่ได้เห็นหรือไม่มีเอกสารรองรับ ถ้าเปิดเว็บไม่ได้ (robots บล็อก / เป็น JS shell) ให้บอกตรงๆ
2. ห้ามแต่งข้อมูล: ห้ามแต่ง hex, แกน variable font, ราคา, เปอร์เซ็นต์ browser support, ตัวเลขผู้ติดตาม ถ้าไม่รู้ให้เขียนว่า "ยืนยันไม่ได้"
3. ภาษาไทยต้องปลอดภัย: ภาษาไทยไม่มีเว้นวรรคระหว่างคำ และสระ/วรรณยุกต์ซ้อนบน-ล่างพยัญชนะ ห้ามเสนอเอฟเฟกต์ที่แยกทีละตัวอักษร (per-letter/per-char) กับข้อความไทย ทุกเอฟเฟกต์ต้องเป็นระดับคำ (ตัดด้วย Intl.Segmenter granularity:'word') บรรทัด หรือทั้งบล็อกเท่านั้น ระบุทุกครั้งว่า safe / word-level-only / unsafe
4. ไม่ตัดสินใจแทน: เสนอเป็นตัวเลือกพร้อมคะแนน ติดดาว ★ ที่แนะนำ + เหตุผล 2 บรรทัด แล้วหยุด เจ้าของโปรเจกต์เลือกเอง
5. งบเทคนิค: หน้าเว็บรวม ≤1.5MB · animate เฉพาะ transform/opacity (ยกเว้นที่อนุญาตไว้) · ออกแบบจาก 390px ก่อน · ต้องมี fallback ของ prefers-reduced-motion · ข้อความเป็น HTML จริงไม่ใช่ภาพ
6. positioning ของแบรนด์: ที่ปรึกษา 1:1 สำหรับครีเอเตอร์ "หยุดวิ่งตามเทรนด์ หาเสียงตัวเอง แล้ววิศวกรรมอัลกอริทึมรอบสิ่งที่คุณเป็น" เสา: EXTRACT ขุดตัวตน / ENGINEER วิศวกรรมอัลกอริทึม / ESTABLISH สร้างอาณาจักรของตัวเอง โทน: คม จริงใจ ขี้เล่นนิดๆ ไม่ corporate — ภาษาไทยนำ อังกฤษเป็น accent — ไม่มีมาสคอต เน้นความว้าวและความสมูทแทน
```

---

# ชุด 1 · PROMPT ค้น RESEARCH รอบใหม่

## 1A · หา reference เว็บเพิ่ม (ใช้บ่อยสุด)

```
คุณคือ agent ค้นคว้างานออกแบบเว็บ ใช้ WebSearch + WebFetch เท่านั้น (shell ในแซนด์บ็อกซ์เข้าเว็บทั่วไปไม่ได้ ห้ามใช้ curl/python/playwright)

[แปะกฎบ้านชุด 0 ที่นี่]

ภารกิจ: หาเว็บระดับรางวัล ปี 2024-2026 เพิ่มอีก 15-20 เว็บ ที่แข็งเรื่อง __________ (เช่น: หัวเรื่อง type ใหญ่ / การเปลี่ยนผ่าน section / โชว์ผลงานที่ไม่มีรูปสวย / logo พาร์ทเนอร์)

แหล่งที่ให้ไปค้น (เปิดจริง อย่าเดา):
- awwwards.com/websites/winner_category_typography/ (ตารางผู้ชนะพร้อมวันที่)
- cssdesignawards.com (มีคะแนน UI/UX/Innovation เป็นตัวเลข)
- siteinspire.com หมวด Typographic · httpster.net · onepagelove.com (one-pager)
- typewolf.com (บอกฟอนต์ที่เว็บนั้นใช้) · maxibestof.one · refs.gallery · orpetron.com
- awwwards.com/websites/Japan/ + /South%20Korea/ + /Thailand/ ← สำคัญ: เว็บญี่ปุ่น/เกาหลีแก้ปัญหา "สองสคริปต์ในหน้าเดียว" เหมือนไทย

ห้ามซ้ำกับที่มีแล้ว: kprverse, poolsuite, henriheymans, kwokyinmak, bluxstudio, nikolaradeski, obys, basement.studio, locomotive, igloo.inc, lusion, exoape, dennissnellenberg, chungiyoo, cuberto, unseen.co, 14islands, zajno, aristidebenoist, minhpham, robin-noguier, bruno-simon, monopo.london, darkroom.engineering, phantom.land, deso.studio, sakazuki.io, nippori.lamm.tokyo, 4wide.jp, elicyon.com, matvoyce.tv, exat.hottype.co, synthetictheatre.com, plan-az.com, offbeat.kr, bkkdw26.greydientlab.com

ต่อ 1 เว็บ ให้คืนค่า:
URL · โหลดได้ไหม (fetched / JS-shell / blocked) · สิ่งที่ OBSERVED ในเนื้อหาที่ดึงได้ (หัวข้อ, เมนู, ลำดับ section, เบาะแสเทคโนโลยี) · รางวัล+วันที่ที่ยืนยันได้ พร้อม URL หน้ารางวัลที่เปิดจริง · เหมาะเป็น reference ของ component ไหน (1-2 อัน) · หนึ่งบรรทัดว่าอะไรทำให้มันต่างจากคนอื่น

ปิดท้ายด้วย: เว็บไหนที่คุณเปิดไม่ได้แต่ดูน่าสนใจมาก ให้ list ไว้ว่า "ต้องให้คนเปิดดูเอง"
```

## 1B · ตามเทรนด์รอบใหม่ (สี / motion / typography) — ใช้ทุก 3-6 เดือน

```
คุณคือ agent ค้นคว้าเทรนด์ ใช้ WebSearch + WebFetch เท่านั้น

[แปะกฎบ้านชุด 0]

วันนี้คือ ____________ ผมต้องการข้อมูลเทรนด์ของ "ตอนนี้" ไม่ใช่ของปีก่อน ถ้าแหล่งไหนเก่ากว่านั้นให้บอกวันที่กำกับทุกครั้ง

หัวข้อ: เทรนด์ __________ (สี / motion / typography / web design ภาพรวม)

แหล่งที่ต้องเปิด:
- ต้นทางจริง: Pantone (Color of the Year), WGSN/Coloro, Adobe, Pinterest Palette (อันนี้ดีเพราะมาจากข้อมูลพฤติกรรมผู้ใช้จริง 600M คน), Benjamin Moore / Sherwin-Williams / Behr / Dulux
- ฝั่งเว็บ: Webflow blog, Framer blog, Muzli, Fontfabric, Envato, Canva
- ของจริงที่ใช้อยู่: หน้าเว็บผู้ชนะ Awwwards/CSSDA ปีล่าสุด (หน้ารางวัลมักโชว์ palette เป็นชิปสี ให้ขุดจากตรงนั้น)
- ฝั่งเทคนิค: caniuse, MDN, web.dev Baseline, developer.chrome.com/blog, motion.dev

ต่อ 1 เทรนด์:
=== TREND: ชื่อ
HEX ที่แน่นอน (ถ้าเป็นสี) + บทบาท (พื้น/ตัวอักษร/accent) — ถ้าแหล่งให้แต่ชื่อสีไม่ให้ hex ต้องบอกว่า "ไม่มี hex ทางการ" อย่าไปเอา hex จากเว็บแปลงสีมาอ้างว่าเป็นทางการ
มันคืออะไร 2 ประโยค
DOCUMENTED AT: URL ที่เปิดจริง (กำกับว่า fetched หรือ เห็นแค่ชื่อในผลค้นหา)
เว็บจริงที่ใช้: URL + ยืนยันยังไง หรือ "ไม่พบ"
ใหม่จริงสำหรับปีนี้ไหม: ตอบตรงๆ ว่าใหม่ หรือเป็นของต่อเนื่องจากปีก่อน
เข้ากับ type ไทยตัวใหญ่ไหม: เพราะเว็บเราไม่มีรูป ตัวหนังสือแบกทุกอย่าง

ปิดท้ายบังคับ 2 หัวข้อ:
=== ANTI-TRENDS: อะไรที่แหล่งปี 2026 บอกว่า "เชยแล้ว/พอแล้ว" พร้อม URL
=== ความเสี่ยง CONTRAST: คู่สีไหนที่ดูดีแต่น่าจะไม่ผ่าน WCAG AA สำหรับเนื้อความ (ผมจะคำนวณเลขเอง แค่ชี้ให้)
```

## 1C · ค้นฟอนต์ (ไทย)

```
[แปะกฎบ้านชุด 0]

ภารกิจ: หาฟอนต์ไทยสำหรับ __________ (หัวเรื่อง / เนื้อความ) เพิ่ม

วิธีที่ได้ผลจริง (ใช้ตามนี้ อย่าไปดึงหน้า fonts.google.com ธรรมดา):
- ใช้ endpoint ต่อ family: https://fonts.google.com/metadata/fonts/<Family+Name> → คืน JSON จริง มีแกน variable พร้อม min/max, ทุกน้ำหนัก, subsets (เช็คว่ามี "thai"), ผู้ออกแบบ, ลิขสิทธิ์
  ⚠ endpoint รวม (ไม่ใส่ชื่อ family) ใหญ่หลาย MB ใช้ไม่ได้
- ฟอนต์ไทยพรีเมียม: thaigraph.com/fonts/ (500+ ตัวพร้อมข้อมูลลิขสิทธิ์), katatrad.com, fonts.adobe.com (ค้น Thai), myfonts.com, fontstand.com (ลองฟรี 3 ชม./ฟอนต์)

ต่อ 1 ฟอนต์: ชื่อ family ที่ใช้ใน CSS ได้ · น้ำหนัก static ที่มีจริง · แกน variable + ช่วง (เป๊ะ) · **มีหัว/ไม่มีหัว** (ถ้าแหล่งไม่ระบุ ให้บอกว่าไม่ระบุ ห้ามเดา) · บุคลิก 3-5 คำ · Latin ที่มาด้วยแข็งแรงไหม · ราคา + ให้สิทธิ์ webfont/self-host ไหม · URL ที่เปิดจริง

หมายเหตุที่ต้องรู้: บน Google Fonts ฟอนต์ไทยที่เป็น variable จริงมีแค่ 5 ตัว (Noto Sans Thai, Noto Sans Thai Looped, Noto Serif Thai, Anuphan, Playpen Sans Thai) — ถ้าเจอเพิ่มให้ยืนยันด้วย endpoint ข้างบน
```

---

# ชุด 2 · PROMPT สั่ง CLAUDE CODE บิลด์

## 2A · บิลด์รอบแรก

```
สร้างเว็บ one-page ของ PlanC ตามสเปกในโฟลเดอร์นี้

ไฟล์ที่ต้องอ่านก่อนเริ่ม (อ่านให้ครบ อย่าข้าม):
- BUILD-BRIEF.md ← สเปกหลัก อ่านทั้งไฟล์
- copy-draft.md ← ก็อปปี้จริงทั้งหมด ห้ามแต่งข้อความใหม่เอง
- component-map.md ← เหตุผลเบื้องหลังแต่ละตัวเลือก (อ่านเฉพาะตัวที่ถูกเลือก)

PICKSET ที่จะบิลด์: ____________________________________
(รูปแบบ: M?-T?-A?-B?-C?-D?-E?-F?-G?-H?-I?-J?-K?-L?-P?-Q? ตามลำดับใน DECISION-CONSOLE.html)

สิ่งที่ห้ามทำ:
- ห้ามก็อปโค้ดหรือ asset จากเว็บ reference — ยืม "แพตเทิร์น" ไม่ยืมพิกเซล โค้ดต้องเขียนใหม่ 100%
- ห้ามแยกข้อความไทยทีละตัวอักษรเด็ดขาด (ดูรายการเอฟเฟกต์ที่ปลอดภัยใน BUILD-BRIEF หัวข้อ Thai-safe whitelist) — ใช้ Intl.Segmenter('th',{granularity:'word'}) แล้วครอบแต่ละคำด้วย span display:inline-block
- ⚠ GSAP SplitText โหมด lines และ words พังเงียบๆ กับภาษาไทย (มันตัดคำด้วยช่องว่าง ภาษาไทยไม่มีช่องว่าง → ทั้งย่อหน้ากลายเป็น "คำเดียว บรรทัดเดียว" โดยไม่มี error) ต้องตัดคำเองก่อนแล้วป้อนให้มัน
- ห้ามใช้ overflow:hidden เป็น wrapper ของ scroll-driven animation — ใช้ overflow:clip (hidden สร้าง scroll container ทำให้ scroll timeline พัง)
- ห้ามใส่ WebGL/Spline hero (กิน 800KB-2MB = งบทั้งหน้า) · ห้าม backdrop-filter (ทำเฟรมตกบน Android) · ห้าม fade-in เหมือนกันหมดทุก element (ปี 2026 นับเป็นสัญญาณของงาน AI สำเร็จรูป)
- ห้าม localStorage/sessionStorage

สถาปัตยกรรมที่บังคับ (เพื่อให้เปลี่ยนตัวเลือกรอบหน้าได้ถูก):
- 1 component = 1 บล็อก CSS ที่มีป้ายชื่อ + 1 ฟังก์ชัน init ลงทะเบียนใน COMPONENTS map เดียว
- ก็อปปี้ทั้งหมดอยู่ใน CONTENT block เดียว · สีทั้งหมดอยู่ใน THEME block เดียวเป็น role token (--bg/--bg2/--fg/--fg2/--ac1/--ac2) ห้ามมีค่าสีอยู่ที่อื่น
- ถ้าเปลี่ยนแค่โลกสี ต้องแก้แค่ THEME block เท่านั้น
- หัวไฟล์เขียน comment ว่าบิลด์นี้คือ PICKSET อะไร

เสร็จแล้วรัน Definition of Done checklist ท้าย BUILD-BRIEF ให้ครบทุกข้อ แล้วรายงานว่าข้อไหนผ่าน/ไม่ผ่านพร้อมเหตุผล
```

## 2B · เปลี่ยนตัวเลือกรอบถัดไป (ใช้ซ้ำได้เรื่อยๆ)

```
เปลี่ยน PICKSET ของเว็บ PlanC

PICKSET เดิม: ____________________
PICKSET ใหม่: ____________________
(เปลี่ยนแค่ component: ______)

ทำตามนี้:
1. อ่าน "swap note" ของ component ที่เปลี่ยน ใน BUILD-BRIEF.md หัวข้อ Swap notes — เฉพาะตัวที่เปลี่ยน
2. แทนที่โมดูลนั้น (CSS block + init function) เท่านั้น ห้ามแตะโมดูลอื่น
3. ห้ามแก้สิ่งเหล่านี้ (เป็น pickset-independent โดยการออกแบบ): ก็อปปี้, ลำดับ section, motion token, utility ตัดคำไทย, SEO block, image slot
4. รันเช็คซ้ำ: Thai check (ทดสอบคำ เปี่ยม/ปุ๋ย/หญิง/เรื่อง ในทุกบล็อกที่มี animation), 390px pass, motion-grammar audit, งบ motion (GAME ≤3, pounce ที่รอยต่อ ≤2, pounce ตอนกด ≤2, epic ≤2)
5. อัปเดต comment หัวไฟล์เป็น PICKSET ใหม่
6. รายงานสั้นๆ ว่าแตะไฟล์อะไรบ้าง กี่บรรทัด และมีอะไรที่ทำให้ต้องแตะนอกโมดูลนั้นไหม (ถ้ามี = โค้ดรั่ว ให้บอก ไม่ต้องแก้เงียบๆ)
```

## 2C · เพิ่ม section ใหม่

```
เพิ่ม section ใหม่ให้เว็บ PlanC: ____________________

ก่อนเขียนโค้ด:
1. อ่าน BUILD-BRIEF.md หัวข้อ motion grammar + section transitions — section ใหม่ต้องใช้ token ชุดเดียวกัน ห้ามสร้าง easing/duration ใหม่
2. บอกก่อนว่าจะวางไว้ตรงไหนในลำดับ 8 section และ **รอยต่อทั้งสองด้าน** จะเปลี่ยนเป็นอะไร (ทุกรอยต่อต้องมีสเปก transition ไม่ใช่ตัดจบห้วนๆ)
3. ถ้า section นี้ทำให้งบ motion เกิน ให้บอกและเสนอว่าจะลดที่ไหน

แล้วเขียนเป็นโมดูลเดียวตามสถาปัตยกรรมเดิม + เพิ่มก็อปปี้เข้า CONTENT block (ก็อปปี้ใหม่ต้องเป็นภาษาไทยที่ตรง positioning ไม่ใช่ lorem และไม่แต่งตัวเลขที่ไม่มีจริง — ถ้าต้องใช้ตัวเลขให้ใส่ [N] ไว้)
```

---

# ชุด 3 · PROMPT สร้างภาพ / โลโก้ / mood

> ใช้กับเครื่องมือสร้างภาพ AI ตัวไหนก็ได้ · ปรับคำในวงเล็บเหลี่ยมตามโลกสีที่เลือก
> **เตือน:** ภาพที่ AI สร้างห้ามเอาไปใช้เป็น asset ในเว็บโดยตรงถ้าจะเสี่ยงเรื่องสิทธิ์/คุณภาพ — ใช้เป็น mood/ตัวตั้งต้นให้ดีไซเนอร์ ส่วนเว็บจริงตามสเปกใช้ข้อความ HTML เป็นหลักอยู่แล้ว

## 3A · โลโก้ / wordmark
```
A minimalist typographic wordmark reading "PlanC", for a Thai consulting agency for content creators.
Style: [ไม่มีหัว / geometric / neo-grotesque], very high contrast, flat vector, no gradient, no 3D, no shadow.
Palette: strictly [ใส่ hex 2 สีจากโลกสีที่เลือก เช่น #351E28 background, #E9F056 mark].
The letter C should be the only expressive element — treat it as a single continuous curved stroke that could
double as a graphic device elsewhere in the brand.
Output: centered on a plain background, generous margin, no mockup, no text other than "PlanC".
Negative prompt: no cat, no animal, no mascot, no photo, no drop shadow, no bevel, no lens flare,
no stock-logo swoosh, no gradient mesh, no 3D render, no extra words, no watermark.
```

## 3B · mood board ตามโลกสีที่เลือก
```
A design mood board grid, 6 cells, for a typography-led website with almost no photography.
Palette strictly limited to: [hex ทั้งชุดจากโลกสีที่เลือก].
Cells should show: (1) giant display type filling the frame, (2) a thin single-line graphic rule/curve,
(3) a tight crop of heavy letterforms, (4) a small monospace label on a large empty field,
(5) a two-tone split composition, (6) a marquee-like repeating text strip.
Flat, print-poster sensibility, editorial, high contrast, generous negative space.
Negative prompt: no people, no product photos, no 3D blobs, no gradients, no glassmorphism,
no bento grid of rounded cards, no stock imagery, no AI-glossy look, no purple-blue gradient.
```

## 3C · รูปโปรไฟล์ผู้ก่อตั้ง (ทรีตเมนต์ — ใช้กับรูปจริง ไม่ใช่สร้างคนขึ้นมา)
```
[ใช้กับรูปถ่ายจริงของผู้ก่อตั้งเท่านั้น — ห้ามสร้างหน้าคนปลอมขึ้นมาใช้แทน]
Editorial portrait treatment: convert to [duotone ด้วย hex สองสีจากโลกสี / high-contrast monochrome],
coarse halftone or fine grain, crop tight to 4:5 portrait, subject looking directly at camera,
flat studio feel, no background detail.
Output size 800x1000px.
```

## 3D · placeholder ของ image slot
```
An abstract placeholder graphic, [ขนาดตาม slot เช่น 480x560], flat two-tone using only [hex สองสี],
composed of a single continuous line and one solid shape, no text, no icon, no gradient.
Should read as intentional graphic design, not as a missing-image icon.
```

---

# ชุด 4 · PROMPT ตรวจงาน / QA

## 4A · ตรวจหลังบิลด์ (ตัวหลัก)

```
คุณคือ QA ที่โหดกับงานเว็บ ตรวจไฟล์เว็บ PlanC ที่บิลด์เสร็จแล้ว ห้ามให้ผ่านง่ายๆ — งานของคุณคือหาสิ่งที่พัง

รายการที่ต้องตรวจ เรียงตามความสำคัญ:

1. ภาษาไทยแตกไหม (สำคัญสุด)
   - ค้นในโค้ดว่ามี .split(''), split(/(?:)/), SplitText type:"chars", SplitType chars, หรือการวนตัวอักษรไทยไหม → ถ้ามีคือบั๊ก
   - ตรวจว่าถ้าใช้ SplitText มีการตัดคำด้วย Intl.Segmenter มาก่อนหรือเปล่า (SplitText โหมด lines/words พังเงียบกับภาษาไทย ไม่ throw error)
   - render คำทดสอบพวกนี้ในทุกบล็อกที่มี animation แล้วดูว่าสระ/วรรณยุกต์ยังอยู่ครบและไม่ชนกัน: เปี่ยม ฟื้นฟู ปุ๋ย ฝุ่น หญิง ปฏิญาณ เรื่อง ที่ กุ๊กกิ๊ก
   - เช็ค line-height ของบล็อกไทยทุกบล็อก: เนื้อความต้อง ≥1.6, display ≥1.1 พร้อม overflow:visible ที่ span ครอบ (สระบน-ล่างโดนตัดคือบั๊กคลาสสิก)

2. 390px
   - มี horizontal scroll ไหม · หัวเรื่องตัดคำแล้วอ่านรู้เรื่องไหม · ปุ่มกดถึงด้วยนิ้วโป้งไหม · pinned section กินจอทั้งหน้าไหม
   - อะไรที่พึ่ง hover ต้องมีทางเลือกบน touch ทุกอัน

3. งบและความเร็ว
   - น้ำหนักรวม ≤1.5MB (รวมฟอนต์) · ฟอนต์ subset ด้วย unicode-range แล้วหรือยัง (variable font ไทย+ละตินที่ไม่ subset คือระเบิดเวลา)
   - animate อะไรที่ไม่ใช่ transform/opacity บ้าง (ข้อยกเว้นที่อนุญาต: stroke-dashoffset ของ tail-line, font-variation-settings wght, opacity ของ bg layer) — ถ้าเจอ width/height/margin/background-color ให้รายงาน
   - มี overflow:hidden ครอบ scroll-driven animation ไหม (ต้องเป็น overflow:clip)
   - will-change ถูกใส่ค้างไว้ตลอดไหม (ต้องใส่ตอนเริ่ม เอาออกตอนจบ)

4. สีและ contrast
   - ทุกคู่ ตัวอักษร/พื้น ผ่าน WCAG AA (≥4.5:1 เนื้อความ, ≥3:1 ตัวใหญ่) ไหม — คำนวณจริง อย่าประมาณ
   - accent ถูกใช้เกินกติกาของโลกสีที่เลือกไหม (เช่น สี accent ที่ห้ามเป็นตัวหนังสือบนพื้นสว่าง)
   - มีค่าสีอยู่นอก THEME block ไหม (ถ้ามี = สถาปัตยกรรมรั่ว รายงานเลย)

5. motion grammar
   - นับ: จุด quantized/stepped ≤3 · pounce ที่รอยต่อ ≤2 · pounce ตอน interact ≤2 · duration 1200ms ≤2
   - มี easing หรือ duration ที่ไม่อยู่ในตาราง token ไหม
   - **ทุกรอยต่อระหว่าง section มี transition จริงไหม หรือมีที่ตัดจบห้วนๆ** (นี่คือหัวใจของบรีฟ)
   - prefers-reduced-motion: ปิด JS smooth scroll, ทำ reveal เป็น opacity ทันที, หยุด marquee — ครบไหม
   - ปิด JS ทั้งหมดแล้วอ่านเว็บรู้เรื่องไหม

6. a11y และความหมาย
   - h1 มีตัวเดียวและเป็นข้อความจริงไหม (ถ้าแยก span เพื่อ animation แล้ว screen reader อ่านออกมาเป็นอะไร — ต้องใส่ aria-label ที่ตัวครอบ)
   - tab ไล่ทั้งหน้าได้ไหม · focus มองเห็นไหม · overlay menu trap focus แล้วคืนที่เดิมไหม
   - marquee/auto-motion ที่ยาวเกิน 5 วิ มีปุ่มหยุดไหม (WCAG 2.2.2 บังคับ)

7. ความคิดริเริ่ม
   - มีโค้ดหรือ asset ที่ดูเหมือนก็อปมาจากเว็บ reference ไหม · มี hotlink ไปไฟล์ของเว็บอื่นไหม · ฟอนต์มาจากแหล่งที่มีสิทธิ์ใช้จริงไหม

รูปแบบรายงาน: ตารางเรียงตามความรุนแรง (พัง / ควรแก้ / ข้อสังเกต) ต่อ 1 รายการให้: ปัญหา · ไฟล์+บรรทัด · ทำไมมันเป็นปัญหา · ทางแก้ที่เล็กที่สุด
ปิดท้าย: ถ้าให้ปล่อยเว็บนี้วันนี้ ความเสี่ยงอันดับ 1 คืออะไร ตอบตรงๆ
```

## 4B · ตรวจว่าเว็บ "ว้าวและสมูท" จริงไหม (เชิงคุณภาพ)

```
ประเมินเว็บ PlanC ที่บิลด์เสร็จ ในสองเกณฑ์ที่เจ้าของโปรเจกต์ให้ความสำคัญที่สุด: ความว้าว และ ความสมูท

ความสมูท — ตรวจว่า:
- เลื่อนจากบนสุดถึงล่างสุด รู้สึกเป็น "ชิ้นเดียว" หรือรู้สึกเป็น section ต่อกันเป็นท่อนๆ · มีจุดไหนที่สายตาหลุดไหม
- ทุกรอยต่อมีของที่ "พาสายตาข้าม" ไหม หรือมีที่จบแล้วเริ่มใหม่เฉยๆ
- ความเร็วและ easing ของทุกอย่างมาจากตระกูลเดียวกันไหม หรือมีตัวที่หลุดจังหวะ
- เฟรมตกที่ไหน (เลื่อนเร็วๆ, ตอนเข้า pinned section, บนมือถือ)

ความว้าว — ตรวจว่า:
- มีสักจุดที่คนจะจำได้และเล่าต่อได้ไหม ถ้ามี บอกว่าจุดไหนและทำไม
- จุดว้าวนั้นสื่อความหมายของแบรนด์ (การหาตัวตนที่แท้จริง) หรือเป็นแค่ลูกเล่นสวยๆ — ถ้าเป็นแค่ลูกเล่น ให้บอกตรงๆ
- ตรงข้าม: มี motion ที่ใส่มาโดยไม่มีเหตุผลไหม (ปี 2026 "motion for motion's sake" ถูกจัดเป็นสิ่งที่เชยแล้ว)
- ถ้าเอา animation ออกทั้งหมด เว็บนี้ยังดีอยู่ไหม (ถ้าไม่ = ดีไซน์พึ่ง motion เกินไป)

การทดสอบเทียบเคียง: เอาเว็บนี้ไปวางข้าง reference ที่ใช้เป็นต้นแบบ คนที่อ่านงานดีไซน์เป็นจะคิดว่า "โรงเรียนเดียวกัน แต่เป็นสัตว์คนละตัว" หรือ "อันนี้คือเว็บนั้นที่เปลี่ยนสี" — ตอบตรงๆ ถ้าเป็นอย่างหลัง บอกว่าต้องบิดเพิ่มที่ไหน

ตอบเป็นความเห็นตรงๆ ไม่ต้องถนอมน้ำใจ ปิดท้ายด้วย 3 สิ่งที่ถ้าแก้แล้วจะได้ผลมากที่สุด
```

## 4C · ตรวจก็อปปี้ภาษาไทย

```
ตรวจก็อปปี้ภาษาไทยทั้งหมดในเว็บ PlanC

เกณฑ์:
1. ตรง positioning ไหม — "หยุดวิ่งตามเทรนด์ หาเสียงตัวเอง วิศวกรรมอัลกอริทึมรอบสิ่งที่คุณเป็น" ประโยคไหนที่พูดได้กับเอเจนซี่ไหนก็ได้ = อ่อน ให้ชี้
2. โทน คม จริงใจ ขี้เล่นนิดๆ ไม่ corporate — มีคำที่ฟังเหมือนโบรชัวร์บริษัทไหม (เช่น "โซลูชั่นครบวงจร" "ยกระดับ" "แบบมืออาชีพ") ให้ชี้ทุกคำ
3. ความยาวตามกติกา: headline ≤8 คำ / sub ≤2 ประโยค / body ≤60 คำ — นับจริง
4. มีตัวเลขหรือคำโฆษณาที่ไม่มีหลักฐานไหม (ต้องเป็น [N] ที่รอเจ้าของใส่เอง ไม่ใช่ตัวเลขที่แต่งขึ้น)
5. ภาษาอังกฤษเป็น accent เท่านั้นไหม — มีที่ไหนที่อังกฤษกลายเป็นตัวหลักจนคนไทยอ่านไม่รู้เรื่อง
6. ทุก CTA ชัดว่ากดแล้วเกิดอะไร — และเว็บนี้ต้องไม่ขายกลางทาง ปิดการขายที่ท้ายสุดที่เดียว (จอง session ฟรี / แอดไลน์) ถ้าเจอ CTA กลางหน้าที่ดึงคนออกไปก่อน ให้รายงาน

ต่อ 1 จุดที่มีปัญหา: ข้อความเดิม · ปัญหา · เสนอทางเลือก 2 เวอร์ชัน (เก็บความหมายเดิม เปลี่ยนแค่โทน/ความยาว)
```

---

## วิธีใช้แพ็กนี้ให้คุ้ม
1. งานค้นคว้าทุกครั้ง **แปะกฎบ้านชุด 0 ก่อนเสมอ** — มันคือสิ่งที่กันไม่ให้ได้ข้อมูลแต่งขึ้นมา
2. รอบบิลด์ทุกรอบใช้ **2A ครั้งแรก แล้ว 2B ทุกครั้งถัดไป** — 2B บังคับให้แตะเฉพาะโมดูลที่เปลี่ยน ซึ่งเป็นเหตุผลทั้งหมดที่สถาปัตยกรรมถูกออกแบบมาแบบนั้น
3. หลังบิลด์เสร็จรัน **4A แล้ว 4B** — 4A จับของที่พัง 4B จับของที่ "ไม่พังแต่ก็ไม่ดี" ซึ่งเป็นปัญหาที่แก้ยากกว่า
4. เก็บ **PICKSET code** ของทุกรอบไว้ในไฟล์เดียว จะย้อนกลับได้เสมอว่ารอบไหนเลือกอะไร
