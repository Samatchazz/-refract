# ฉบับง่าย v2 — พรอมต์สั้นลงครึ่งหนึ่ง (ทำตามทีละขั้น 1 → 19)

## ทำไมรอบนี้พรอมต์สั้นลง

จากที่ศึกษาเพิ่ม: MJ มีเพดานนุ่ม ๆ ราว **60 คำ** เกินนั้นคำจะเริ่มแย่งน้ำหนักกันเอง และคำต้นประโยคมีอิทธิพลมากกว่าท้ายประโยคเสมอ ([Robot Film School: prompt length](https://www.robotfilmschool.com/mj-prompt-length/), [Blake Crosley: V8 prompting](https://blakecrosley.com/blog/midjourney-v8-prompting)) แนวทางที่ V8 แนะนำคือ **"แยกหน้าที่": ตัวหนังสือบรรยายแค่ "วัตถุ+รูปทรง" ส่วน "สไตล์" ให้ --sref แบกแทน** และเลี่ยงการยัด `--no` ยาว ๆ ([Blake Crosley](https://blakecrosley.com/blog/midjourney-v8-prompting))

ผลคือ:

- **ขั้นที่ 1 (ภาพต้นแบบ)** ยังต้องบรรยายสไตล์เต็ม เพราะยังไม่มี sref ให้เกาะ — แต่ตัดคำซ้ำออกจนเหลือ ~55 คำ
- **ขั้นที่ 2 เป็นต้นไป** สไตล์ทั้งหมดโยนให้ `--sref` + เพิ่มน้ำหนักเป็น `--sw 150` แล้วเหลือกลิ่นสไตล์ในตัวหนังสือแค่วลีสั้น ๆ → พรอมต์เหลือ ~30 คำ
- `--no` ตัดเหลือ 5 คำที่จำเป็นจริง: `color, shading, gradient, text, mario`

ของเดิม 5 ข้อยังใช้เหมือนเดิม: V8.2 · ต้นแบบก่อนเสมอ · ดำล้วนขาวล้วน · ห้าม Upscale ภาพ `--tile` (ขั้น 4, 19) · เลือกภาพจากเส้นหนา+ทรงชัด ไม่ใช่ความสวย

การขยับทุกอย่างทำในโค้ด: เหรียญ = ภาพเดียวโค้ดบีบให้หมุน · ท่อ = ปาก+ลำ โค้ดยืด · ธงแยกจากเสา โค้ดเลื่อน · ? block 2 ใบสลับตอนเด้ง · พุ่มไม้ = ใช้ SVG เมฆ 3 ลอนซ้ำ

---

## ขั้นที่ 1 · ? BLOCK — ภาพต้นแบบ (ใบเดียวที่พรอมต์ยาว เพราะต้องสอนสไตล์)

รีรันจนได้ใบที่เส้นสั่นแบบเด็กวาด ทรงชัด ดำล้วน แล้ว **ก๊อปลิงก์ภาพเก็บไว้**

```
a square mystery block in the role of the super mario bros question block, big bold question mark in the center, one round rivet in each corner, drawn like a six-year-old kid's shaky crayon doodle, crooked thick black lines, coloring book line art, black ink on pure white background, single object, centered --ar 1:1 --v 8.2 --raw --s 25 --no color, shading, gradient, text, mario
```

> **ตั้งแต่ขั้นที่ 2: เติม `--sref <ลิงก์ขั้นที่1> --sw 150` ท้ายพรอมต์ทุกใบ** — sref คือคนแบกสไตล์แทนตัวหนังสือที่หายไป

## ขั้นที่ 2 · บล็อกอิฐ — ตัวเทสว่าสไตล์ล็อกติดไหม

ออกมาเป็นลายมือเดียวกับขั้นที่ 1 = ผ่าน · ยังไม่เหมือน → ขยับเป็น `--sw 200` แล้วลองใหม่

**ก่อนอื่น — วินิจฉัยให้ถูกจุด (รันครั้งเดียวรู้เลย):** เอาพรอมต์ข้างล่างรัน **โดยไม่ใส่ --sref** 1 รอบ
ถ้าออกมาง่ายแบบเด็กวาด = ตัวการคือภาพต้นแบบขั้นที่ 1 (sref ก๊อประดับดีเทลมาด้วย) → กลับไปรีรันขั้นที่ 1
ถ้ายังดีเทลเยอะอยู่ = ตัวการคือคำ → ใช้ยาตามลำดับข้างล่าง

**ยาที่ 1 — เลิกพูดคำว่า "brick" เปลี่ยนเป็นเรขาคณิตล้วน** (คำว่า brick คือตัวลากดีเทลอิฐจริงเข้ามา) + ล็อกฉากหลังขาวด้วยการเอาคำว่า white background ขึ้นต้นประโยค:

```
white background, a wonky hand-drawn square split into four fat rectangles by wobbly lines, in the role of the super mario bros brick block, very simple, low detail, as if drawn in ten seconds by a small child with a black crayon, one isolated object floating on solid pure white, empty white space all around --ar 1:1 --v 8.2 --raw --s 0 --no color, shading, gradient, text, mario, texture, pattern, background, paper, table, frame
```

**ยาที่ 2 — แรงสุดและชัวร์สุด: ใช้รูปวาดจริงเป็น sref แทนคำทั้งหมด**
วาดสี่เหลี่ยม+เส้นแบ่งด้วยปากกาเมจิก/สีเทียนบนกระดาษจริง (หรือลากเมาส์ใน Paint 20 วินาที ให้มันเบี้ยว ๆ นั่นแหละดี) → ถ่ายรูป/แคปหน้าจอ → **สำคัญมาก: ล้างรูปให้ขาวสนิทก่อนอัปโหลด** เพราะ sref ก๊อป "กระดาษ เงา โต๊ะ" ติดมาเป็นฉากหลังของภาพเจนด้วย — รันคำสั่งนี้กับรูปถ่ายก่อน:

```bash
magick doodle-photo.jpg -colorspace Gray -threshold 60% doodle-clean.png
```

แล้วอัป `doodle-clean.png` (ดำล้วนบนขาวล้วน) → ใช้เป็น `--sref <รูปนั้น> --sw 400` คู่กับพรอมต์ยาที่ 1 — MJ เลียน "ความซื่อของเส้น" จากรูปตัวอย่างได้ดีกว่าจากคำบรรยายเสมอ และรูปเดียวกันนี้ใช้เป็นสมอสไตล์ให้ทั้ง 19 ขั้นแทนภาพขั้นที่ 1 ได้เลย
(ทางเลือกสำเร็จรูป: ลองโค้ด `--sref 4011022703` ที่มีคนแชร์ว่าเป็นสไตล์สีเทียนวาดมือ — ยังไม่ได้ทดสอบเอง [GUESS])

**ความจริงที่ควรรู้:** บล็อกอิฐ/บล็อกบันได/พื้น คือสี่เหลี่ยมกับเส้นไม่กี่เส้น — ถ้าวาดเองบนกระดาษแล้วเข้า potrace เลย จะได้ผล "เด็กวาดแท้ 100%" เร็วกว่ารีรัน MJ หลายรอบ เก็บ MJ ไว้สู้กับชิ้นยาก ๆ (ปราสาท, ตึกกรุงเทพ, ท่อ) จะคุ้มเครดิตกว่า

## ขั้นที่ 3 · บล็อกบันได

```
a solid stone block in the role of the super mario bros staircase hard block, crooked square with a thick double outline and four small dots in the middle, six-year-old kid's crayon doodle, black ink line art on pure white, single object, centered --ar 1:1 --v 8.2 --raw --s 25 --no color, shading, gradient, text, mario --sref <ลิงก์ขั้นที่1> --sw 150
```

## ขั้นที่ 4 · พื้นดิน — เลิกใช้ --tile แล้ว (วิธีเดิมไม่เวิร์กกับสไตล์เด็กวาด)

เปลี่ยนแนวคิด: พื้น = **บล็อกก้อนเดียวมีขอบในตัว ปั๊มซ้ำในโค้ด** (เหมือนเกมจริงและเหมือนบล็อกอิฐขั้นที่ 2 ทุกประการ) — ความ "ต่อกันสนิท" มาจากโค้ด ไม่ใช่จาก MJ จึงไม่ต้องง้อ --tile อีก

```
white background, a wonky hand-drawn square block filled with three or four fat crooked stones, in the role of the super mario bros ground block, very simple, low detail, as if drawn by a small child with a black crayon, one isolated object centered on solid pure white --ar 1:1 --v 8.2 --raw --s 0 --no color, shading, gradient, text, mario, background, paper, texture
```

เก็บ 3-4 ใบจาก grid เป็นแวเรียนต์ (เหมือนอิฐ) แล้วให้ SVG ปูพื้นอัตโนมัติ:

```html
<defs>
  <pattern id="ground" width="256" height="64" patternUnits="userSpaceOnUse">
    <use href="#ground-a" x="0"   width="64" height="64"/>
    <use href="#ground-b" x="64"  width="64" height="64"/>
    <use href="#ground-c" x="128" width="64" height="64"/>
    <use href="#ground-d" x="192" width="64" height="64"/>
  </pattern>
</defs>
<rect x="0" y="416" width="100%" height="128" fill="url(#ground)"/>
```

pattern กว้าง 4 ก้อน (a-b-c-d) ทำให้ลายวนทุก 256px แทนที่จะวนทุกก้อน — ตามองไม่จับความซ้ำ · แถวล่างของพื้นสลับลำดับเป็น c-d-a-b ยิ่งเนียน

## ขั้นที่ 5 · ขอบหลุม — ตัดทิ้ง ไม่ต้องเจน

เกมจริงไม่มีไทล์ขอบหลุม — หลุมคือ "การหยุดวางบล็อกพื้น" เฉย ๆ และพอพื้นของเราเป็นบล็อกมีเส้นขอบวาดจบในตัว (ขั้นที่ 4) ก้อนสุดท้ายก่อนหลุมก็มีขอบสวย ๆ ของมันเองอยู่แล้ว → ในโค้ด: อยากได้หลุมตรงไหน แค่เว้น `<use>` ตรงนั้น จบ

อยากเพิ่มลูกเล่นตรงปากหลุม (ไม่บังคับ) ค่อยเจนของจิ๋วชิ้นนี้ไว้แปะ:

```
white background, three tiny crooked pebbles, very simple, low detail, as if drawn by a small child with a black crayon, isolated on solid pure white --ar 1:1 --v 8.2 --raw --s 0 --no color, shading, gradient, text, mario, background, paper --sref <ลิงก์ขั้นที่1> --sw 150
```

(ก้อนกรวดจิ๋ววางหมิ่น ๆ ริมปากหลุม + โค้ดให้มันร่วงลงหลุมตอน scroll ผ่าน = บอกผู้ใช้ว่า "ตรงนี้ตกได้นะ" แบบไม่ต้องมีตัวหนังสือ)

## ขั้นที่ 6 · ? BLOCK "โดนชนแล้ว" (ไม่เจนใหม่ — แก้จากภาพขั้นที่ 1)

เปิดภาพขั้นที่ 1 ในเว็บ MJ → **Editor** → ระบายทับเครื่องหมาย ? → ใส่:

```
blank empty metal block face, four small round rivets in the corners, a few faint crayon scribble marks, black ink line art on pure white, no shading
```

เหตุผล: ขอบนอกสองใบจะตรงกันเป๊ะ เว็บสลับภาพตอนบล็อกเด้งแล้วไม่กระตุก

## ขั้นที่ 7 · เมฆเล็ก (1 ลอน)

```
a small puffy cloud in the role of a super mario bros sky cloud, one rounded bump on top, flat gently scalloped bottom, six-year-old kid's crayon doodle, black ink line art on pure white, single object, centered --ar 4:3 --v 8.2 --raw --s 25 --no color, shading, gradient, text, mario --sref <ลิงก์ขั้นที่1> --sw 150
```

## ขั้นที่ 8 · เมฆกลาง (2 ลอน)

```
a puffy cloud in the role of a super mario bros sky cloud, two rounded bumps on top, flat gently scalloped bottom, six-year-old kid's crayon doodle, black ink line art on pure white, single object, centered --ar 3:2 --v 8.2 --raw --s 25 --no color, shading, gradient, text, mario --sref <ลิงก์ขั้นที่1> --sw 150
```

## ขั้นที่ 9 · เมฆใหญ่ (3 ลอน)

```
a long puffy cloud in the role of a super mario bros sky cloud, three rounded bumps on top, flat gently scalloped bottom, six-year-old kid's crayon doodle, black ink line art on pure white, single object, centered --ar 2:1 --v 8.2 --raw --s 25 --no color, shading, gradient, text, mario --sref <ลิงก์ขั้นที่1> --sw 150
```

## ขั้นที่ 10 · พุ่มไม้ (ข้ามได้ — ทางแนะนำคือใช้ SVG เมฆขั้นที่ 9 ซ้ำ)

```
a round bush in the role of the super mario bros bush, three rounded bumps with a flat bottom sitting on the ground, sparse short leaf scribbles inside, six-year-old kid's crayon doodle, black ink line art on pure white, single object, centered --ar 2:1 --v 8.2 --raw --s 25 --no color, shading, gradient, text, mario --sref <ลิงก์ขั้นที่1> --sw 150
```

## ขั้นที่ 11 · เนินเล็ก

```
a low dome hill in the role of the small super mario bros hill, wide half-circle mound with a flat bottom, a few tiny dash marks on the slope, six-year-old kid's crayon doodle, black ink line art on pure white, single object, centered --ar 3:2 --v 8.2 --raw --s 25 --no color, shading, gradient, text, mario --sref <ลิงก์ขั้นที่1> --sw 150
```

## ขั้นที่ 12 · เนินใหญ่

```
a tall dome hill in the role of the big super mario bros hill, high rounded mound with a flat bottom, a few tiny dash marks on the slope, six-year-old kid's crayon doodle, black ink line art on pure white, single object, centered --ar 4:3 --v 8.2 --raw --s 25 --no color, shading, gradient, text, mario --sref <ลิงก์ขั้นที่1> --sw 150
```

## ขั้นที่ 13 · ปากท่อ

```
the top rim of a warp pipe in the role of the super mario bros pipe mouth, short wide rounded rectangle lip, slightly wider than the shaft below, six-year-old kid's crayon doodle, black ink line art on pure white, single object, centered --ar 2:1 --v 8.2 --raw --s 25 --no color, shading, gradient, text, mario --sref <ลิงก์ขั้นที่1> --sw 150
```

## ขั้นที่ 14 · ลำท่อ (โค้ดยืดได้ทุกความสูง)

```
a straight vertical pipe segment in the role of the super mario bros pipe body, two thick parallel vertical lines, open at top and bottom, six-year-old kid's crayon doodle, black ink line art on pure white, single object, centered --ar 2:3 --v 8.2 --raw --s 25 --no color, shading, gradient, text, mario --sref <ลิงก์ขั้นที่1> --sw 150
```

## ขั้นที่ 15 · เหรียญ (ใบเดียว — การหมุนทำในโค้ด)

```
an upright oval coin in the role of the super mario bros coin, tall ellipse with a thick double outline and a vertical slot line in the middle, six-year-old kid's crayon doodle, black ink line art on pure white, single object, centered --ar 2:3 --v 8.2 --raw --s 25 --no color, shading, gradient, text, mario --sref <ลิงก์ขั้นที่1> --sw 150
```

## ขั้นที่ 16+17 · เสาธงพร้อมธง — เจนใบเดียว แล้วแยกชิ้นตอนเป็น SVG

(เดิมแยกเจนเสากับธง แต่ MJ ชอบแถมเสามากับธงเสมอ — งั้นใช้นิสัยมันให้เป็นประโยชน์: เจนทั้งชุดใบเดียว ได้สัดส่วนธงต่อเสาถูกต้องแต่กำเนิด)

```
white background, a tall thin flagpole with a small ball on top and one crooked rectangular flag at the top, a simple black cat head with two pointy triangle ears and whiskers drawn inside the flag, in the role of the super mario bros goal flagpole, very simple, low detail, as if drawn by a small child with a black crayon, one isolated object centered on solid pure white --ar 2:3 --v 8.2 --raw --s 0 --no color, shading, gradient, text, mario, background, paper --sref <ลิงก์ขั้นที่1> --sw 150
```

วิธีแยกชิ้นหลัง potrace: ธงกับเสาเป็นคนละ subpath กันอยู่แล้ว (เส้นไม่ต่อเนื่องกัน) → เปิดใน Inkscape → Path → **Break Apart** → จับ path ของธงรวมเป็น group หนึ่ง, เสาอีก group หนึ่ง → ในโค้ดเลื่อน group ธงจากยอดลงโคนตาม scroll ตามแผนเดิม

ทางสำรอง (ถ้าอยากได้ธงลอยเดี่ยวจริง ๆ): เลิกเรียกมันว่า flag แล้วบรรยายเป็นรูปทรง + ประกาศว่าลอยไม่ติดอะไร:

```
white background, one crooked rectangular flag shape, a simple black cat head with two pointy triangle ears and whiskers drawn inside, floating alone in the air, not attached to anything, very simple, low detail, as if drawn by a small child with a black crayon, one isolated shape on solid pure white --ar 1:1 --v 8.2 --raw --s 0 --no color, shading, gradient, text, mario, pole, stick, flagpole, rope, background, paper
```

## ขั้นที่ 18 · ปราสาทท้ายด่าน

```
white background, a chunky square castle drawn big, filling the whole frame, one big box body with square teeth along the top edge, one smaller box tower on top, one large black arch doorway, only three or four crooked lines for bricks, in the role of the super mario bros end-of-level castle, very simple, low detail, as if drawn by a small child with a black crayon, one isolated object centered on solid pure white --ar 1:1 --v 8.2 --raw --s 0 --no color, shading, gradient, text, mario, background, paper, texture, fine details --sref <ลิงก์ขั้นที่1> --sw 150
```

จุดสำคัญของใบนี้: "drawn big, filling the whole frame" แก้อาการวัตถุลีบเล็กกลางเฟรม (วัตถุเล็ก = พิกเซลน้อย = trace ออกมาเส้นแตก) · "square teeth along the top edge" แทน "crenellated battlements" (ศัพท์สถาปัตย์ลากปราสาทจริงมา) · "only three or four crooked lines for bricks" ล็อกจำนวนเส้นอิฐไม่ให้วาดเป็นลายถี่

## ขั้นที่ 19 · แถบตึกกรุงเทพ (ท้ายสุด ยากสุด)

```
white background, a flat outline strip of the bangkok city skyline, simple boxy buildings of different heights on one straight baseline, one wat arun temple spire, one mahanakhon tower with a pixel-notch top, empty white sky above, very simple, low detail, as if drawn by a small child with a black crayon --ar 3:1 --v 8.2 --raw --s 0 --no color, shading, gradient, text, mario, background, paper --sref <ลิงก์ขั้นที่1> --sw 150
```

(ตัด `--tile` ออกแล้ว — บทเรียนจากขั้นที่ 4: --tile ไม่ถูกกับสไตล์เด็กวาด) วิธีทำให้เลื่อนวนลูป ทำเองตอนเป็น SVG: potrace เสร็จ ตึกแต่ละหลังจะเป็น path แยกกันอยู่แล้ว → จัดให้หัวแถบกับท้ายแถบจบด้วยตึกหลังเดียวกัน แล้วเลื่อนวนได้ไม่มีสะดุด · หรือมองแบบเดียวกับพื้นดิน: ตึกแต่ละหลังคือ "บล็อก" หนึ่งชิ้น — เจน 2-3 รอบ เก็บตึกเด่น ๆ หลายหลัง แล้วสลับเรียงเป็นแถบยาวเองในโค้ด ได้ skyline ยาวแค่ไหนก็ได้ไม่ซ้ำเลย

---

## ถ้าผลเพี้ยน ปรับตามอาการ (เรียงจากเบาไปหนัก)

0. **ดีเทลเยอะเกินเด็กวาด** (อาการที่เจอบ่อยสุด) → ใช้สูตร 3 อย่างพร้อมกัน: ① ระบุจำนวนชิ้นส่วนตายตัว ("only four bricks", "three bumps") ② เติม "very simple, low detail, just a few thick wobbly lines" ③ ลด `--s 25` เป็น `--s 0` · ยังไม่พอ → เปลี่ยนวลีสไตล์เป็น "wonky preschool child's drawing, as if drawn in 10 crayon strokes" · **ข้อควรระวัง: ถ้าเพี้ยนแบบนี้ "ทุกใบ" ปัญหาอยู่ที่ภาพต้นแบบขั้นที่ 1 เอง** — sref ก๊อประดับความละเอียดมาด้วย ต้องกลับไปรีรันขั้นที่ 1 ให้เส้นมันซื่อ ๆ ก่อน แล้วทุกใบจะง่ายตาม
0.5. **ติดฉากหลังมาด้วย (กระดาษ/โต๊ะ/ฉากหลังไม่ขาว)** → เช็ก 3 อย่างตามลำดับ: ① ถ้าใช้รูปถ่ายดูเดิลเป็น sref — ล้างรูปอ้างอิงให้ขาวสนิทก่อนอัป (คำสั่ง magick ในขั้นที่ 2 ยาที่ 2) นี่คือสาเหตุอันดับหนึ่ง ② เอาคำว่า **"white background"** ขึ้นเป็นคำแรกสุดของพรอมต์ + ปิดท้ายด้วย "one isolated object floating on solid pure white, empty white space all around" + เพิ่ม `background, paper, table, frame` เข้า `--no` ③ เช็กว่า **Personalization ปิดอยู่** (ปุ่ม P บนเว็บ MJ — V8.2 ชอบเติมฉากตามรสนิยมโปรไฟล์) · **ถ้าฉากหลังเป็นแค่สีจาง ๆ/ลายกระดาษ ไม่มีวัตถุอื่น: ไม่ต้องรีรัน** — คำสั่ง potrace เดิม (threshold 55%) ลบทิ้งให้ฟรีอยู่แล้ว รีรันเฉพาะเมื่อฉากหลังมี "ของ" โผล่มา
1. สไตล์ไม่เหมือนต้นแบบ → เพิ่ม `--sw 150` เป็น `200`
2. สีแอบโผล่ → รีรันก่อน 1–2 รอบ ยังไม่หาย ค่อยเติมคำ `no color` เข้าไปในตัวประโยค (V8 ฟังภาษาธรรมชาติดีกว่า `--no` ยาว ๆ)
3. มาริโอ้/ตัวละครโผล่ → เปลี่ยนวลี "super mario bros" เป็น "classic 8-bit platformer game" — รูปทรงที่บรรยายไว้ยังสื่อมาริโอ้ครบ
4. ทรงเพี้ยนไม่ตรงบรีฟ → ค่อยเติมคำบรรยายรูปทรง (ไม่ใช่คำสไตล์) เพราะโควตาคำมีจำกัด ให้หมดไปกับ "ทรง" เท่านั้น

## ตรวจภาพ — 5 คำถามเดิม

1. ดำล้วนบนขาวล้วนไหม
2. ของชิ้นเดียว กลางภาพ มีขอบขาวรอบตัว ไม่มีตัวหนังสือ/กรอบ/มาริโอ้ไหม
3. เส้นหนาทั่วทั้งใบไหม
4. ย่อเล็ก ๆ แล้วยังรู้ว่าเป็นของชิ้นไหนในเกมไหม
5. วางเทียบขั้นที่ 1 แล้วเป็นลายมือเด็กคนเดียวกันไหม

เฉพาะขั้น 4 กับ 19: วางภาพต่อกัน 2 ใบ รอยต่อต้องเนียน · เฉพาะ ? block: ซ้อนขั้น 1 กับ 6 ขอบนอกต้องทับกันสนิท

## แปลงเป็น SVG (เหมือนเดิมทุกใบ)

```bash
magick asset.png -colorspace Gray -threshold 55% asset.pbm
potrace asset.pbm --svg -o asset.svg --turdsize 30 --alphamax 1.0 --opttolerance 0.2 --tight
```

เส้นขาดหาย → เปลี่ยน `55%` เป็น `45%` · จุดขยะเยอะ → `--turdsize 60` · ด่านมืด: CSS `filter: invert(1)` ทั้งฉาก ไม่ต้องเจนภาพชุดใหม่

> ฉบับเต็มพร้อมที่มา/แหล่งอ้างอิงทั้งหมด: `mario-cat-mj-asset-guide.md`
