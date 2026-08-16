# คำสั่ง Midjourney ฉบับละเอียด — ก็อปวางได้เลย

> แทนที่ฉบับเก่าทั้งไฟล์ (ฉบับเก่า subject สั้นเกิน MJ เดาเองเยอะ)
> โครง prompt ใหม่มี 4 เลเยอร์: **ตัวของ+DNA มาริโอ → การจัดวางในเฟรม → โลก/สื่อ → สไตล์**
> เหตุผลเชิงเทคนิคอยู่ `docs/MIDJOURNEY-BRIEF.md` · ฉากอ้างอิงอยู่ `docs/MARIO-TEARDOWN.md`
> **ทุกการตัดสินใจด้านดีไซน์เป็นของ Mat อย่าเลือกแทน เสนอทางเลือกแล้วถาม**

## 0. หลักที่ใช้เขียนรอบนี้ (จากคู่มือ MJ + การถอดฉากมาริโอ)

1. **คำสำคัญไว้หน้าสุด** MJ ให้น้ำหนักคำต้น prompt มากกว่า — เลยเปิดด้วยตัวของทุกครั้ง
2. **บรรยายสิ่งที่อยากได้ ไม่ใช่สิ่งที่ไม่อยากได้** ลิสต์ --no เลยสั้นลงกว่าเดิมครึ่งหนึ่ง
3. **DNA มาริโอใส่ตรงๆ ในทุกชิ้น** อ้างทั้งชื่อเกม (super mario bros) และ*บทบาท*ของชิ้น
   (เช่น "in the role of the question block") พร้อมบรรยายรูปทรงแบบเจาะจง
   (พูสองพู ก้นแบน ฐานเรียบ หมุดสี่มุม) — ชื่อเกมดึงอารมณ์ รูปทรงกันเพี้ยน
4. **ระวัง:** คำว่า super mario ใน MJ มักดึงภาพเขียนสีสด — ถูกกดไว้ด้วย
   `black ink on pure white` + `--raw --s 50` แล้ว ถ้ายังหลุดเป็นภาพสีหรือมีตัวมาริโอโผล่
   ให้เปลี่ยนคำว่า `super mario bros` เป็น `a classic 1985 NES side-scroller` ทั้งประโยค

**เวอร์ชัน:** ค่าเริ่มต้นตอนนี้คือ V8.2 ไม่ต้องใส่ `--v` · ถ้า `--tile` (ชิ้น 1, 2) ไม่ทำงาน เติม `--v 7`
**ลำดับ:** เจนชิ้น 1 ให้ได้ก่อนอย่างเดียว → ก็อป URL ใบที่ชอบ → ต่อท้ายชิ้น 2-12 ทุกอันด้วย
`--sref <URL> --sw 100` (หลุดชุด → เพิ่ม 300 · เหมือนกันเกิน → ลด 50) · ลองไอเดียถูกๆ ด้วย `--draft`

## 1. เจนตอนนี้ได้เลย — 12 ชิ้น

**เลือกสไตล์เดียวใช้ทั้งชุด ห้ามผสม** (รอ Mat เลือก ก/ข/ค จาก `tools/style-compare.png`)

---

### สไตล์ ก — Swiss

**1. ตึกกรุงเทพแถบยาว (ตัวตั้งต้น)** → `sky-city.png`

```
background skyline strip for a platformer level: a row of bangkok shophouses and slim condo towers simplified into chunky rectangular blocks, tiny square windows, rooftop water tanks, air-conditioner boxes and antennas, varied heights making a playful rhythm, drawn to sit far behind the action the way hills sit behind super mario bros world 1-1, seamless when tiled sideways, one continuous horizontal strip, repeating rhythm, plain white background, 2D side-scrolling platformer level prop in the spirit of classic 1985 Super Mario Bros, black ink on pure white, flat orthographic side view, bold chunky cartoon shapes with thick confident outlines, friendly and readable like a video game sprite, rendered as swiss graphic design: flat geometric vector shapes, hard clean edges, uniform stroke weight, bauhaus poster discipline --ar 3:1 --tile --raw --s 50 --c 0 --no color, gradient, soft shading, cast shadow, text, watermark, 3d render, photo, frame, people, characters
```

↑ **ตัวตั้งต้นของทั้งชุด** เจนให้ได้ก่อน แล้วเอา URL ไปเป็น `--sref` ของที่เหลือ

**2. พื้น 1 ช่อง** → `tile-ground.png`

```
one square ground tile exactly in the role of the super mario bros ground block: a crisp heavy top edge line where a character walks, packed soil with small pebbles and cracks filling the body below, chunky and modular, edges designed to repeat seamlessly on all sides, single object only, centered, filling most of the frame, nothing cropped, plain white background, 2D side-scrolling platformer level prop in the spirit of classic 1985 Super Mario Bros, black ink on pure white, flat orthographic side view, bold chunky cartoon shapes with thick confident outlines, friendly and readable like a video game sprite, rendered as swiss graphic design: flat geometric vector shapes, hard clean edges, uniform stroke weight, bauhaus poster discipline --ar 1:1 --tile --raw --s 50 --c 0 --no color, gradient, soft shading, cast shadow, text, watermark, 3d render, photo, frame, people, characters
```

**3. เมฆเล็ก** → `cloud-s.png`

```
one small cloud in the exact spirit of the classic super mario bros cloud sprite: two plump round lobes touching to form a scalloped top, perfectly flat base, one bold continuous outline, puffy and friendly, single object only, centered, filling most of the frame, nothing cropped, plain white background, 2D side-scrolling platformer level prop in the spirit of classic 1985 Super Mario Bros, black ink on pure white, flat orthographic side view, bold chunky cartoon shapes with thick confident outlines, friendly and readable like a video game sprite, rendered as swiss graphic design: flat geometric vector shapes, hard clean edges, uniform stroke weight, bauhaus poster discipline --ar 3:2 --raw --s 50 --c 0 --no color, gradient, soft shading, cast shadow, text, watermark, 3d render, photo, frame, people, characters
```

**4. เมฆกลาง** → `cloud-m.png`

```
one medium cloud in the exact spirit of the classic super mario bros cloud sprite: three plump round lobes in a row forming a scalloped top, perfectly flat base, one bold continuous outline, puffy and friendly, single object only, centered, filling most of the frame, nothing cropped, plain white background, 2D side-scrolling platformer level prop in the spirit of classic 1985 Super Mario Bros, black ink on pure white, flat orthographic side view, bold chunky cartoon shapes with thick confident outlines, friendly and readable like a video game sprite, rendered as swiss graphic design: flat geometric vector shapes, hard clean edges, uniform stroke weight, bauhaus poster discipline --ar 2:1 --raw --s 50 --c 0 --no color, gradient, soft shading, cast shadow, text, watermark, 3d render, photo, frame, people, characters
```

**5. เมฆใหญ่** → `cloud-l.png`

```
one long cloud in the exact spirit of the classic super mario bros cloud sprite: four plump round lobes in a row forming a scalloped top, perfectly flat base, one bold continuous outline, stretched wide and friendly, single object only, centered, filling most of the frame, nothing cropped, plain white background, 2D side-scrolling platformer level prop in the spirit of classic 1985 Super Mario Bros, black ink on pure white, flat orthographic side view, bold chunky cartoon shapes with thick confident outlines, friendly and readable like a video game sprite, rendered as swiss graphic design: flat geometric vector shapes, hard clean edges, uniform stroke weight, bauhaus poster discipline --ar 3:1 --raw --s 50 --c 0 --no color, gradient, soft shading, cast shadow, text, watermark, 3d render, photo, frame, people, characters
```

**6. พุ่มไม้** → `bush.png`

```
one ground bush borrowing the famous super mario bros trick where the bush is the same sprite as the cloud: identical scalloped silhouette of three round lobes, but solid filled black and sitting flat on the ground line instead of floating, single object only, centered, filling most of the frame, nothing cropped, plain white background, 2D side-scrolling platformer level prop in the spirit of classic 1985 Super Mario Bros, black ink on pure white, flat orthographic side view, bold chunky cartoon shapes with thick confident outlines, friendly and readable like a video game sprite, rendered as swiss graphic design: flat geometric vector shapes, hard clean edges, uniform stroke weight, bauhaus poster discipline --ar 2:1 --raw --s 50 --c 0 --no color, gradient, soft shading, cast shadow, text, watermark, 3d render, photo, frame, people, characters
```

**7. เนินเล็ก** → `hill-s.png`

```
one small background hill exactly in the role of the super mario bros world 1-1 hill: a single smooth dome with a perfectly flat base, one bold outline, calm and simple, meant to sit in the far background layer, single object only, centered, filling most of the frame, nothing cropped, plain white background, 2D side-scrolling platformer level prop in the spirit of classic 1985 Super Mario Bros, black ink on pure white, flat orthographic side view, bold chunky cartoon shapes with thick confident outlines, friendly and readable like a video game sprite, rendered as swiss graphic design: flat geometric vector shapes, hard clean edges, uniform stroke weight, bauhaus poster discipline --ar 2:1 --raw --s 50 --c 0 --no color, gradient, soft shading, cast shadow, text, watermark, 3d render, photo, frame, people, characters
```

**8. เนินใหญ่** → `hill-l.png`

```
one large background hill exactly in the role of the super mario bros world 1-1 big hill: the same smooth dome silhouette as a small hill but stretched wider and taller, two small dark oval marks on the slope, perfectly flat base, one bold outline, single object only, centered, filling most of the frame, nothing cropped, plain white background, 2D side-scrolling platformer level prop in the spirit of classic 1985 Super Mario Bros, black ink on pure white, flat orthographic side view, bold chunky cartoon shapes with thick confident outlines, friendly and readable like a video game sprite, rendered as swiss graphic design: flat geometric vector shapes, hard clean edges, uniform stroke weight, bauhaus poster discipline --ar 2:1 --raw --s 50 --c 0 --no color, gradient, soft shading, cast shadow, text, watermark, 3d render, photo, frame, people, characters
```

**9. อิฐ** → `block-brick.png`

```
one breakable brick block exactly in the role of the super mario bros brick: a square tile filled with a simple even brick bond pattern, thick mortar lines, chunky beveled border, looks satisfying to smash from below, single object only, centered, filling most of the frame, nothing cropped, plain white background, 2D side-scrolling platformer level prop in the spirit of classic 1985 Super Mario Bros, black ink on pure white, flat orthographic side view, bold chunky cartoon shapes with thick confident outlines, friendly and readable like a video game sprite, rendered as swiss graphic design: flat geometric vector shapes, hard clean edges, uniform stroke weight, bauhaus poster discipline --ar 1:1 --raw --s 50 --c 0 --no color, gradient, soft shading, cast shadow, text, watermark, 3d render, photo, frame, people, characters
```

**10. บล็อกรางวัล ?** → `block-q.png`

```
one reward block directly inspired by the super mario bros question block: a floating square block with a fat bold question mark carved dead center on its face, one round rivet in each of the four corners, chunky beveled edges, looks like it begs to be bumped from below, single object only, centered, filling most of the frame, nothing cropped, plain white background, 2D side-scrolling platformer level prop in the spirit of classic 1985 Super Mario Bros, black ink on pure white, flat orthographic side view, bold chunky cartoon shapes with thick confident outlines, friendly and readable like a video game sprite, rendered as swiss graphic design: flat geometric vector shapes, hard clean edges, uniform stroke weight, bauhaus poster discipline --ar 1:1 --raw --s 50 --c 0 --no color, gradient, soft shading, cast shadow, text, watermark, 3d render, photo, frame, people, characters
```

**11. ขอบหลุม** → `pit-edge.png`

```
side cross-section of a platformer floor breaking off into a bottomless pit, exactly like the pit edges of super mario bros: crisp walkable top line ending in a jagged vertical break on the right side, soil and pebble layers visible in the cut face, single object only, centered, filling most of the frame, nothing cropped, plain white background, 2D side-scrolling platformer level prop in the spirit of classic 1985 Super Mario Bros, black ink on pure white, flat orthographic side view, bold chunky cartoon shapes with thick confident outlines, friendly and readable like a video game sprite, rendered as swiss graphic design: flat geometric vector shapes, hard clean edges, uniform stroke weight, bauhaus poster discipline --ar 1:1 --raw --s 50 --c 0 --no color, gradient, soft shading, cast shadow, text, watermark, 3d render, photo, frame, people, characters
```

**12. เสาธง** → `flagpole.png`

```
one goal flagpole exactly in the role of the super mario bros end-of-level flagpole: a very tall thin pole standing on a small block base, a solid ball on the very top, bare pole with no cloth flag, proud and vertical, single object only, centered, filling most of the frame, nothing cropped, plain white background, 2D side-scrolling platformer level prop in the spirit of classic 1985 Super Mario Bros, black ink on pure white, flat orthographic side view, bold chunky cartoon shapes with thick confident outlines, friendly and readable like a video game sprite, rendered as swiss graphic design: flat geometric vector shapes, hard clean edges, uniform stroke weight, bauhaus poster discipline --ar 1:4 --raw --s 50 --c 0 --no color, gradient, soft shading, cast shadow, text, watermark, 3d render, photo, frame, people, characters
```

---

### สไตล์ ข — Riso

**1. ตึกกรุงเทพแถบยาว (ตัวตั้งต้น)** → `sky-city.png`

```
background skyline strip for a platformer level: a row of bangkok shophouses and slim condo towers simplified into chunky rectangular blocks, tiny square windows, rooftop water tanks, air-conditioner boxes and antennas, varied heights making a playful rhythm, drawn to sit far behind the action the way hills sit behind super mario bros world 1-1, seamless when tiled sideways, one continuous horizontal strip, repeating rhythm, plain white background, 2D side-scrolling platformer level prop in the spirit of classic 1985 Super Mario Bros, black ink on pure white, flat orthographic side view, bold chunky cartoon shapes with thick confident outlines, friendly and readable like a video game sprite, rendered as a risograph print: coarse halftone dot shading, screenprint grain, slightly misregistered ink layers --ar 3:1 --tile --raw --s 50 --c 0 --no color, gradient, soft shading, cast shadow, text, watermark, 3d render, photo, frame, people, characters
```

↑ **ตัวตั้งต้นของทั้งชุด** เจนให้ได้ก่อน แล้วเอา URL ไปเป็น `--sref` ของที่เหลือ

**2. พื้น 1 ช่อง** → `tile-ground.png`

```
one square ground tile exactly in the role of the super mario bros ground block: a crisp heavy top edge line where a character walks, packed soil with small pebbles and cracks filling the body below, chunky and modular, edges designed to repeat seamlessly on all sides, single object only, centered, filling most of the frame, nothing cropped, plain white background, 2D side-scrolling platformer level prop in the spirit of classic 1985 Super Mario Bros, black ink on pure white, flat orthographic side view, bold chunky cartoon shapes with thick confident outlines, friendly and readable like a video game sprite, rendered as a risograph print: coarse halftone dot shading, screenprint grain, slightly misregistered ink layers --ar 1:1 --tile --raw --s 50 --c 0 --no color, gradient, soft shading, cast shadow, text, watermark, 3d render, photo, frame, people, characters
```

**3. เมฆเล็ก** → `cloud-s.png`

```
one small cloud in the exact spirit of the classic super mario bros cloud sprite: two plump round lobes touching to form a scalloped top, perfectly flat base, one bold continuous outline, puffy and friendly, single object only, centered, filling most of the frame, nothing cropped, plain white background, 2D side-scrolling platformer level prop in the spirit of classic 1985 Super Mario Bros, black ink on pure white, flat orthographic side view, bold chunky cartoon shapes with thick confident outlines, friendly and readable like a video game sprite, rendered as a risograph print: coarse halftone dot shading, screenprint grain, slightly misregistered ink layers --ar 3:2 --raw --s 50 --c 0 --no color, gradient, soft shading, cast shadow, text, watermark, 3d render, photo, frame, people, characters
```

**4. เมฆกลาง** → `cloud-m.png`

```
one medium cloud in the exact spirit of the classic super mario bros cloud sprite: three plump round lobes in a row forming a scalloped top, perfectly flat base, one bold continuous outline, puffy and friendly, single object only, centered, filling most of the frame, nothing cropped, plain white background, 2D side-scrolling platformer level prop in the spirit of classic 1985 Super Mario Bros, black ink on pure white, flat orthographic side view, bold chunky cartoon shapes with thick confident outlines, friendly and readable like a video game sprite, rendered as a risograph print: coarse halftone dot shading, screenprint grain, slightly misregistered ink layers --ar 2:1 --raw --s 50 --c 0 --no color, gradient, soft shading, cast shadow, text, watermark, 3d render, photo, frame, people, characters
```

**5. เมฆใหญ่** → `cloud-l.png`

```
one long cloud in the exact spirit of the classic super mario bros cloud sprite: four plump round lobes in a row forming a scalloped top, perfectly flat base, one bold continuous outline, stretched wide and friendly, single object only, centered, filling most of the frame, nothing cropped, plain white background, 2D side-scrolling platformer level prop in the spirit of classic 1985 Super Mario Bros, black ink on pure white, flat orthographic side view, bold chunky cartoon shapes with thick confident outlines, friendly and readable like a video game sprite, rendered as a risograph print: coarse halftone dot shading, screenprint grain, slightly misregistered ink layers --ar 3:1 --raw --s 50 --c 0 --no color, gradient, soft shading, cast shadow, text, watermark, 3d render, photo, frame, people, characters
```

**6. พุ่มไม้** → `bush.png`

```
one ground bush borrowing the famous super mario bros trick where the bush is the same sprite as the cloud: identical scalloped silhouette of three round lobes, but solid filled black and sitting flat on the ground line instead of floating, single object only, centered, filling most of the frame, nothing cropped, plain white background, 2D side-scrolling platformer level prop in the spirit of classic 1985 Super Mario Bros, black ink on pure white, flat orthographic side view, bold chunky cartoon shapes with thick confident outlines, friendly and readable like a video game sprite, rendered as a risograph print: coarse halftone dot shading, screenprint grain, slightly misregistered ink layers --ar 2:1 --raw --s 50 --c 0 --no color, gradient, soft shading, cast shadow, text, watermark, 3d render, photo, frame, people, characters
```

**7. เนินเล็ก** → `hill-s.png`

```
one small background hill exactly in the role of the super mario bros world 1-1 hill: a single smooth dome with a perfectly flat base, one bold outline, calm and simple, meant to sit in the far background layer, single object only, centered, filling most of the frame, nothing cropped, plain white background, 2D side-scrolling platformer level prop in the spirit of classic 1985 Super Mario Bros, black ink on pure white, flat orthographic side view, bold chunky cartoon shapes with thick confident outlines, friendly and readable like a video game sprite, rendered as a risograph print: coarse halftone dot shading, screenprint grain, slightly misregistered ink layers --ar 2:1 --raw --s 50 --c 0 --no color, gradient, soft shading, cast shadow, text, watermark, 3d render, photo, frame, people, characters
```

**8. เนินใหญ่** → `hill-l.png`

```
one large background hill exactly in the role of the super mario bros world 1-1 big hill: the same smooth dome silhouette as a small hill but stretched wider and taller, two small dark oval marks on the slope, perfectly flat base, one bold outline, single object only, centered, filling most of the frame, nothing cropped, plain white background, 2D side-scrolling platformer level prop in the spirit of classic 1985 Super Mario Bros, black ink on pure white, flat orthographic side view, bold chunky cartoon shapes with thick confident outlines, friendly and readable like a video game sprite, rendered as a risograph print: coarse halftone dot shading, screenprint grain, slightly misregistered ink layers --ar 2:1 --raw --s 50 --c 0 --no color, gradient, soft shading, cast shadow, text, watermark, 3d render, photo, frame, people, characters
```

**9. อิฐ** → `block-brick.png`

```
one breakable brick block exactly in the role of the super mario bros brick: a square tile filled with a simple even brick bond pattern, thick mortar lines, chunky beveled border, looks satisfying to smash from below, single object only, centered, filling most of the frame, nothing cropped, plain white background, 2D side-scrolling platformer level prop in the spirit of classic 1985 Super Mario Bros, black ink on pure white, flat orthographic side view, bold chunky cartoon shapes with thick confident outlines, friendly and readable like a video game sprite, rendered as a risograph print: coarse halftone dot shading, screenprint grain, slightly misregistered ink layers --ar 1:1 --raw --s 50 --c 0 --no color, gradient, soft shading, cast shadow, text, watermark, 3d render, photo, frame, people, characters
```

**10. บล็อกรางวัล ?** → `block-q.png`

```
one reward block directly inspired by the super mario bros question block: a floating square block with a fat bold question mark carved dead center on its face, one round rivet in each of the four corners, chunky beveled edges, looks like it begs to be bumped from below, single object only, centered, filling most of the frame, nothing cropped, plain white background, 2D side-scrolling platformer level prop in the spirit of classic 1985 Super Mario Bros, black ink on pure white, flat orthographic side view, bold chunky cartoon shapes with thick confident outlines, friendly and readable like a video game sprite, rendered as a risograph print: coarse halftone dot shading, screenprint grain, slightly misregistered ink layers --ar 1:1 --raw --s 50 --c 0 --no color, gradient, soft shading, cast shadow, text, watermark, 3d render, photo, frame, people, characters
```

**11. ขอบหลุม** → `pit-edge.png`

```
side cross-section of a platformer floor breaking off into a bottomless pit, exactly like the pit edges of super mario bros: crisp walkable top line ending in a jagged vertical break on the right side, soil and pebble layers visible in the cut face, single object only, centered, filling most of the frame, nothing cropped, plain white background, 2D side-scrolling platformer level prop in the spirit of classic 1985 Super Mario Bros, black ink on pure white, flat orthographic side view, bold chunky cartoon shapes with thick confident outlines, friendly and readable like a video game sprite, rendered as a risograph print: coarse halftone dot shading, screenprint grain, slightly misregistered ink layers --ar 1:1 --raw --s 50 --c 0 --no color, gradient, soft shading, cast shadow, text, watermark, 3d render, photo, frame, people, characters
```

**12. เสาธง** → `flagpole.png`

```
one goal flagpole exactly in the role of the super mario bros end-of-level flagpole: a very tall thin pole standing on a small block base, a solid ball on the very top, bare pole with no cloth flag, proud and vertical, single object only, centered, filling most of the frame, nothing cropped, plain white background, 2D side-scrolling platformer level prop in the spirit of classic 1985 Super Mario Bros, black ink on pure white, flat orthographic side view, bold chunky cartoon shapes with thick confident outlines, friendly and readable like a video game sprite, rendered as a risograph print: coarse halftone dot shading, screenprint grain, slightly misregistered ink layers --ar 1:4 --raw --s 50 --c 0 --no color, gradient, soft shading, cast shadow, text, watermark, 3d render, photo, frame, people, characters
```

---

### สไตล์ ค — วาดมือ

**1. ตึกกรุงเทพแถบยาว (ตัวตั้งต้น)** → `sky-city.png`

```
background skyline strip for a platformer level: a row of bangkok shophouses and slim condo towers simplified into chunky rectangular blocks, tiny square windows, rooftop water tanks, air-conditioner boxes and antennas, varied heights making a playful rhythm, drawn to sit far behind the action the way hills sit behind super mario bros world 1-1, seamless when tiled sideways, one continuous horizontal strip, repeating rhythm, plain white background, 2D side-scrolling platformer level prop in the spirit of classic 1985 Super Mario Bros, black ink on pure white, flat orthographic side view, bold chunky cartoon shapes with thick confident outlines, friendly and readable like a video game sprite, rendered as a hand-inked linocut: uneven wobbly ink lines, crosshatch shading, woodblock print texture --ar 3:1 --tile --raw --s 50 --c 0 --no color, gradient, soft shading, cast shadow, text, watermark, 3d render, photo, frame, people, characters
```

↑ **ตัวตั้งต้นของทั้งชุด** เจนให้ได้ก่อน แล้วเอา URL ไปเป็น `--sref` ของที่เหลือ

**2. พื้น 1 ช่อง** → `tile-ground.png`

```
one square ground tile exactly in the role of the super mario bros ground block: a crisp heavy top edge line where a character walks, packed soil with small pebbles and cracks filling the body below, chunky and modular, edges designed to repeat seamlessly on all sides, single object only, centered, filling most of the frame, nothing cropped, plain white background, 2D side-scrolling platformer level prop in the spirit of classic 1985 Super Mario Bros, black ink on pure white, flat orthographic side view, bold chunky cartoon shapes with thick confident outlines, friendly and readable like a video game sprite, rendered as a hand-inked linocut: uneven wobbly ink lines, crosshatch shading, woodblock print texture --ar 1:1 --tile --raw --s 50 --c 0 --no color, gradient, soft shading, cast shadow, text, watermark, 3d render, photo, frame, people, characters
```

**3. เมฆเล็ก** → `cloud-s.png`

```
one small cloud in the exact spirit of the classic super mario bros cloud sprite: two plump round lobes touching to form a scalloped top, perfectly flat base, one bold continuous outline, puffy and friendly, single object only, centered, filling most of the frame, nothing cropped, plain white background, 2D side-scrolling platformer level prop in the spirit of classic 1985 Super Mario Bros, black ink on pure white, flat orthographic side view, bold chunky cartoon shapes with thick confident outlines, friendly and readable like a video game sprite, rendered as a hand-inked linocut: uneven wobbly ink lines, crosshatch shading, woodblock print texture --ar 3:2 --raw --s 50 --c 0 --no color, gradient, soft shading, cast shadow, text, watermark, 3d render, photo, frame, people, characters
```

**4. เมฆกลาง** → `cloud-m.png`

```
one medium cloud in the exact spirit of the classic super mario bros cloud sprite: three plump round lobes in a row forming a scalloped top, perfectly flat base, one bold continuous outline, puffy and friendly, single object only, centered, filling most of the frame, nothing cropped, plain white background, 2D side-scrolling platformer level prop in the spirit of classic 1985 Super Mario Bros, black ink on pure white, flat orthographic side view, bold chunky cartoon shapes with thick confident outlines, friendly and readable like a video game sprite, rendered as a hand-inked linocut: uneven wobbly ink lines, crosshatch shading, woodblock print texture --ar 2:1 --raw --s 50 --c 0 --no color, gradient, soft shading, cast shadow, text, watermark, 3d render, photo, frame, people, characters
```

**5. เมฆใหญ่** → `cloud-l.png`

```
one long cloud in the exact spirit of the classic super mario bros cloud sprite: four plump round lobes in a row forming a scalloped top, perfectly flat base, one bold continuous outline, stretched wide and friendly, single object only, centered, filling most of the frame, nothing cropped, plain white background, 2D side-scrolling platformer level prop in the spirit of classic 1985 Super Mario Bros, black ink on pure white, flat orthographic side view, bold chunky cartoon shapes with thick confident outlines, friendly and readable like a video game sprite, rendered as a hand-inked linocut: uneven wobbly ink lines, crosshatch shading, woodblock print texture --ar 3:1 --raw --s 50 --c 0 --no color, gradient, soft shading, cast shadow, text, watermark, 3d render, photo, frame, people, characters
```

**6. พุ่มไม้** → `bush.png`

```
one ground bush borrowing the famous super mario bros trick where the bush is the same sprite as the cloud: identical scalloped silhouette of three round lobes, but solid filled black and sitting flat on the ground line instead of floating, single object only, centered, filling most of the frame, nothing cropped, plain white background, 2D side-scrolling platformer level prop in the spirit of classic 1985 Super Mario Bros, black ink on pure white, flat orthographic side view, bold chunky cartoon shapes with thick confident outlines, friendly and readable like a video game sprite, rendered as a hand-inked linocut: uneven wobbly ink lines, crosshatch shading, woodblock print texture --ar 2:1 --raw --s 50 --c 0 --no color, gradient, soft shading, cast shadow, text, watermark, 3d render, photo, frame, people, characters
```

**7. เนินเล็ก** → `hill-s.png`

```
one small background hill exactly in the role of the super mario bros world 1-1 hill: a single smooth dome with a perfectly flat base, one bold outline, calm and simple, meant to sit in the far background layer, single object only, centered, filling most of the frame, nothing cropped, plain white background, 2D side-scrolling platformer level prop in the spirit of classic 1985 Super Mario Bros, black ink on pure white, flat orthographic side view, bold chunky cartoon shapes with thick confident outlines, friendly and readable like a video game sprite, rendered as a hand-inked linocut: uneven wobbly ink lines, crosshatch shading, woodblock print texture --ar 2:1 --raw --s 50 --c 0 --no color, gradient, soft shading, cast shadow, text, watermark, 3d render, photo, frame, people, characters
```

**8. เนินใหญ่** → `hill-l.png`

```
one large background hill exactly in the role of the super mario bros world 1-1 big hill: the same smooth dome silhouette as a small hill but stretched wider and taller, two small dark oval marks on the slope, perfectly flat base, one bold outline, single object only, centered, filling most of the frame, nothing cropped, plain white background, 2D side-scrolling platformer level prop in the spirit of classic 1985 Super Mario Bros, black ink on pure white, flat orthographic side view, bold chunky cartoon shapes with thick confident outlines, friendly and readable like a video game sprite, rendered as a hand-inked linocut: uneven wobbly ink lines, crosshatch shading, woodblock print texture --ar 2:1 --raw --s 50 --c 0 --no color, gradient, soft shading, cast shadow, text, watermark, 3d render, photo, frame, people, characters
```

**9. อิฐ** → `block-brick.png`

```
one breakable brick block exactly in the role of the super mario bros brick: a square tile filled with a simple even brick bond pattern, thick mortar lines, chunky beveled border, looks satisfying to smash from below, single object only, centered, filling most of the frame, nothing cropped, plain white background, 2D side-scrolling platformer level prop in the spirit of classic 1985 Super Mario Bros, black ink on pure white, flat orthographic side view, bold chunky cartoon shapes with thick confident outlines, friendly and readable like a video game sprite, rendered as a hand-inked linocut: uneven wobbly ink lines, crosshatch shading, woodblock print texture --ar 1:1 --raw --s 50 --c 0 --no color, gradient, soft shading, cast shadow, text, watermark, 3d render, photo, frame, people, characters
```

**10. บล็อกรางวัล ?** → `block-q.png`

```
one reward block directly inspired by the super mario bros question block: a floating square block with a fat bold question mark carved dead center on its face, one round rivet in each of the four corners, chunky beveled edges, looks like it begs to be bumped from below, single object only, centered, filling most of the frame, nothing cropped, plain white background, 2D side-scrolling platformer level prop in the spirit of classic 1985 Super Mario Bros, black ink on pure white, flat orthographic side view, bold chunky cartoon shapes with thick confident outlines, friendly and readable like a video game sprite, rendered as a hand-inked linocut: uneven wobbly ink lines, crosshatch shading, woodblock print texture --ar 1:1 --raw --s 50 --c 0 --no color, gradient, soft shading, cast shadow, text, watermark, 3d render, photo, frame, people, characters
```

**11. ขอบหลุม** → `pit-edge.png`

```
side cross-section of a platformer floor breaking off into a bottomless pit, exactly like the pit edges of super mario bros: crisp walkable top line ending in a jagged vertical break on the right side, soil and pebble layers visible in the cut face, single object only, centered, filling most of the frame, nothing cropped, plain white background, 2D side-scrolling platformer level prop in the spirit of classic 1985 Super Mario Bros, black ink on pure white, flat orthographic side view, bold chunky cartoon shapes with thick confident outlines, friendly and readable like a video game sprite, rendered as a hand-inked linocut: uneven wobbly ink lines, crosshatch shading, woodblock print texture --ar 1:1 --raw --s 50 --c 0 --no color, gradient, soft shading, cast shadow, text, watermark, 3d render, photo, frame, people, characters
```

**12. เสาธง** → `flagpole.png`

```
one goal flagpole exactly in the role of the super mario bros end-of-level flagpole: a very tall thin pole standing on a small block base, a solid ball on the very top, bare pole with no cloth flag, proud and vertical, single object only, centered, filling most of the frame, nothing cropped, plain white background, 2D side-scrolling platformer level prop in the spirit of classic 1985 Super Mario Bros, black ink on pure white, flat orthographic side view, bold chunky cartoon shapes with thick confident outlines, friendly and readable like a video game sprite, rendered as a hand-inked linocut: uneven wobbly ink lines, crosshatch shading, woodblock print texture --ar 1:4 --raw --s 50 --c 0 --no color, gradient, soft shading, cast shadow, text, watermark, 3d render, photo, frame, people, characters
```

---

## 2. เช็คก่อนเก็บ (ตกข้อไหน = เจนใหม่ อย่าฝืนแก้)

1. พื้นหลังขาวสนิท ไม่มีเงา/เส้นพื้นแถม 2. ไม่มีเทาไล่เฉด (ด่านมืดกลับสีไม่ได้)
3. หรี่ตาแล้วยังอ่านทรงออก 4. **กลิ่นมาริโอต้องมา** — เมฆต้องพูก้นแบน บล็อกต้องอยากชน
5. ไม่มีตัวละคร/ตัวมาริโอ/ตัวหนังสือโผล่มาในภาพ

ผ่านแล้วแปลงเป็น path เสมอ ห้ามใช้ PNG ตรง:
```bash
convert in.png -colorspace gray -threshold 55% -negate out.pbm
potrace out.pbm -s -o out.svg --turdsize 8 --alphamax 1
```
เก็บทุกใบที่ `assets\art\raw\` ใบที่เลือกก็อปมา `assets\art\` ชื่อไฟล์ตามหัวข้อเป๊ะ

## 3. ยังห้ามเจน — 6 ชิ้น (subject ละเอียดเตรียมไว้แล้ว)

| ชิ้น | ไฟล์ | ติดอะไร |
|---|---|---|
| บันได 1 บล็อก | `step.png` | ผังด่าน (CONTENT-MAP) |
| เหรียญ | `coin.png` | ยังไม่ตัดสินว่ามีของเก็บไหม |
| อุปสรรคสูง (กองแฟ้ม) | `stack.png` | ลิสต์บริการจาก BMC |
| ศัตรู (นาฬิกาปลุก) | `foe.png` | รอ Mat ตอบ: มีศัตรูไหม |
| ศัตรูโดนเหยียบ | `foe-flat.png` | รอข้อบน |
| อาคารปลายทาง | `office.png` | สคริปต์ปลายด่าน + CTA |

พอปลดล็อก ประกอบด้วยสูตรเดียวกัน: `<subject>, <COMP>, <BASE>, <STYLE> --ar <AR> --sref <URL> --sw 100 --raw --s 50 --c 0 --no color, gradient, soft shading, cast shadow, text, watermark, 3d render, photo, frame, people, characters`

**บันได 1 บล็อก** (`--ar 1:1`)
```
one solid stair block exactly in the role of the super mario bros hard staircase block: a plain heavy square with a subtle chunky bevel, designed to stack into a staircase
```

**เหรียญ** (`--ar 1:1`)
```
one collectible coin in the role of the super mario bros coin: a flat round coin seen face-on, thick rim, a small star carved in the middle, bold and instantly readable
```

**อุปสรรคสูง (กองแฟ้ม)** (`--ar 2:3`)
```
a tall wobbly stack of paper documents and ring binders standing on the ground like a super mario bros pipe obstacle: taller than a cat, slightly leaning, must be jumped over, chunky silhouette
```

**ศัตรู (นาฬิกาปลุก)** (`--ar 1:1`)
```
one small enemy creature walking like a super mario bros goomba but shaped as a grumpy round alarm clock: two bell ears on top, angry little face on the clock dial, two stubby walking feet, front facing
```

**ศัตรูโดนเหยียบ** (`--ar 2:1`)
```
the same grumpy alarm clock creature one instant after being stomped, flattened completely into a pancake the way a goomba flattens in super mario bros, seen from the side, bell ears splayed out sideways
```

**อาคารปลายทาง** (`--ar 1:1`)
```
one small tidy office building standing exactly where the castle stands at the end of a super mario bros level: flat facade, a welcoming front door, a few windows, small flag on the roof, chunky and proud
```

## แหล่งอ้างอิง

- Prompt Basics (ทางการ) — https://docs.midjourney.com/hc/en-us/articles/32023408776205-Prompt-Basics
- พฤติกรรมคำว่า Super Mario ใน MJ — https://midlibrary.io/styles/super-mario
- สรุปเวอร์ชัน/พารามิเตอร์ V8.x — https://blakecrosley.com/guides/midjourney
- รูปทรงอ้างอิงทุกชิ้น — `docs/MARIO-TEARDOWN.md`
