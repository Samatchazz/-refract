# STITCH-PROMPTS — ชุดพรอมต์ Google Stitch สำหรับ landing ของ Plan C

วิธีใช้: เลือกโหมด **Web** (ไม่ใช่ Mobile) → วางพรอมต์ #1 เป็นตัวเปิด → จากนั้นเกลาด้วยพรอมต์ย่อย **ทีละข้อ ห้ามรวบ** (Stitch จะรื้อทั้งหน้าเมื่อสั่งแก้หลายอย่างพร้อมกัน) → ตัวหนังสือ/ขนาดเล็ก ๆ แก้ใน visual editor ไม่เปลืองเครดิต → จบแล้ว export เป็น HTML/Tailwind ให้ Claude Code ใช้เป็น "แบบร่างเลย์เอาต์อ้างอิง" (ไม่ใช่โค้ดจริง — ของจริงเราสร้างตาม SITE-STRUCTURE.md อยู่แล้ว)

ทริคเสริม: Stitch รับรูปอ้างอิงได้ — อัปโหลดภาพจาก `assets-svg/preview.html` (แคปหน้าจอ) แนบไปกับพรอมต์ #1 เพื่อบอกว่า "เส้นแบบนี้"

---

## #1 พรอมต์เปิด (วางทีเดียวทั้งก้อน)

```
A single-page marketing website for "Plan C", a creative studio for content creators.

Art direction: hand-drawn doodle sketchbook aesthetic, strictly black ink on white paper, NO colors anywhere, childlike wobbly crayon linework, sketchy uneven borders on every box and button, handwritten typography, playful doodle decorations (tiny stars, hand-drawn arrows, squiggles) scattered around content, cards slightly rotated like taped into a sketchbook, generous white space.

Page sections top to bottom:
1. Sticky navigation: black cat head doodle as logo + "Plan C" in handwritten font, menu links Home / Creator Life / About / Pricing / Contact, one call-to-action button with a wobbly hand-drawn border
2. Hero: huge handwritten headline with one keyword circled in rough marker, a small black cat doodle sitting in the corner, two doodle clouds floating, primary CTA button and a secondary link "Walk with the cat →"
3. Scrolling marquee text strip separated by doodle stars
4. About: a tilted card taped at the corners, a hand-drawn arrow pointing from the heading into the card
5. Services: three cards with wobbly sketched borders, each with a simple doodle icon (mystery block, coin, pipe)
6. Game teaser: a hand-drawn TV frame showing a doodle game scene with a black cat, button "Play Creator Life"
7. Pricing: three wobbly outlined pricing boxes, the middle recommended plan circled with a rough marker ring and a tilted "recommended" doodle tag
8. Testimonials: quotes inside cloud-shaped hand-drawn speech bubbles
9. Contact: a simple form with sketchy hand-drawn input fields and a wobbly submit button
10. Footer styled like a side-scroller game level: a brick ground strip, a tiny black cat walking toward a small doodle castle, menu links repeated
```

## #2 พรอมต์เกลารายจุด (ยิงทีละบรรทัด รอผลก่อนค่อยยิงต่อ)

```
On the hero section, make the headline much bigger and more childlike, like written with a thick black crayon.
```
```
On the navigation bar, make the border of the CTA button look more uneven and hand-sketched.
```
```
On the services section, rotate each card slightly at different angles, like stickers placed by hand.
```
```
On the pricing section, make the marker circle around the recommended plan look rougher and hand-drawn, overlapping the box edges.
```
```
On the testimonials section, make the speech bubbles look like the same doodle clouds as in the hero.
```
```
On the footer, make the ground strip look like hand-drawn brick blocks in a repeating row.
```
```
Across the whole page, remove any gray tones and shadows — pure black lines on pure white only.
```

## #3 หน้า /creator-life (ทำเป็นงานใหม่แยกอีกชิ้น อย่าต่อในแชทเดิม)

```
A full-screen immersive page called "Creator Life" for the Plan C website, same hand-drawn black-ink-on-white doodle style. A side-scrolling game world drawn like a child's crayon doodle: flat ground made of brick blocks, a black cat walking right, floating mystery blocks, a pipe, doodle clouds and a smiling sun in the sky, a flagpole with a rectangular cat-head flag in the far distance. Minimal UI: only a small "scroll to walk" hint at the bottom center and a hand-drawn back arrow at the top left. No other text.
```

## ข้อควรรู้ / ข้อจำกัด

- Stitch จะวาด doodle ด้วย "ภาพประกอบของมันเอง" — ไม่ใช่ asset 49 ชิ้นของเรา → ใช้ผลลัพธ์เป็น **โครงเลย์เอาต์+สัดส่วน** เท่านั้น ตอน build จริง Claude Code สลับภาพเป็น sprites.svg ของเรา
- ฟอนต์ไทย (Itim/Mali) Stitch อาจไม่มี — ปล่อยเป็นฟอนต์ลายมืออังกฤษไปก่อน ของจริงค่อยใส่ตอน build
- อย่าให้ Stitch ทำ animation/scroll effect — มันออกแบบหน้านิ่ง ส่วนขยับเป็นงานของ HANDOVER.md
- export: เลือก HTML + Tailwind แล้วเซฟไฟล์ลง `Z:\Claude Code\stitch-draft\` เพื่อให้ Claude Code เปิดดูเทียบเป็น reference
- โควตาฟรี ~350 generations/เดือน — พรอมต์เกลาทีละข้อกินเครดิตทุกครั้ง แก้ text เล็ก ๆ ใช้ visual editor แทน

แหล่งอ้างอิงวิธีพรอมต์: aitoolsay.com/blog/google-stitch-prompt-guide · justinmckelvey.com/blog/how-to-use-google-stitch
