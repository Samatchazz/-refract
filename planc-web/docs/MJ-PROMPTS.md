# คำสั่ง Midjourney — ก็อปวางได้เลย

> ไฟล์นี้คือ **คำสั่งพร้อมวาง** เท่านั้น เหตุผลว่าทำไมต้องเจนชิ้นพวกนี้อยู่ใน
> `docs/MIDJOURNEY-BRIEF.md` ส่วนของอ้างอิงเรื่องฉากอยู่ใน `docs/MARIO-TEARDOWN.md`
> **ทุกการตัดสินใจด้านดีไซน์เป็นของ Mat อย่าเลือกแทน เสนอทางเลือกแล้วถาม**

## 0. อ่านสามนาที ก่อนวางอันแรก

**เวอร์ชันตอนนี้คือ V8.2** (ขึ้นเป็นค่าเริ่มต้นวันที่ 24 ก.ค. 2026) ไม่ต้องใส่ `--v`
มันใช้ตัวล่าสุดให้เอง ถ้าเจอว่า `--tile` ไม่ทำงาน ให้เติม `--v 7` ท้ายคำสั่ง
เพราะ V7 เป็นเวอร์ชันที่รองรับพารามิเตอร์ครบที่สุด

**พารามิเตอร์ต้องอยู่ท้ายสุดเสมอ** เว้นวรรคก่อน `--` และห้ามมีจุด/จุลภาคในตัวพารามิเตอร์
(ยกเว้นในลิสต์ของ `--no` ที่คั่นด้วยจุลภาคได้)

**สามตัวที่ผมใส่ให้ทุกคำสั่ง และเป็นตัวที่ทำให้ภาพเอาไป potrace ได้จริง:**

| | ทำอะไร |
|---|---|
| `--raw` | ตัด "ความสวยอัตโนมัติ" ของ MJ ออก ทำให้มันฟังคำสั่งตรงๆ มากขึ้น |
| `--s 50` | ลดการใส่ลูกเล่นเอง (ค่าปกติคือ 100) **ถ้ายังใส่ลายเยอะเกิน ลดเป็น `--s 0`** |
| `--c 0` | ไม่สุ่มความหลากหลาย ทั้ง 4 ใบในกริดจะใกล้เคียงกัน ตัดสินง่ายกว่า |

**ลำดับการทำงาน — ข้อนี้สำคัญกว่าตัวคำสั่ง**

1. เจน **ชิ้นที่ 1 (ตึกแถบยาว)** ก่อนอย่างเดียว เจนซ้ำจนได้ใบที่ชอบจริงๆ
2. ก็อป **URL ของใบนั้น** (เว็บ: กดที่ภาพ → คัดลอกลิงก์ / Discord: เปิดภาพ → Copy Link)
3. เอาไปต่อท้ายคำสั่งที่ 2–12 ทุกอัน: `--sref <URL> --sw 100`
4. ถ้ายังหลุดชุดกันอยู่ เพิ่มเป็น `--sw 300` ถ้าเหมือนกันจนน่าเบื่อ ลดเป็น `--sw 50`

**ถ้าไม่ทำข้อ 3 ชิ้นทั้ง 12 จะเหมือนมาจาก 12 คนวาด** และแก้ทีหลังไม่ได้เลย

**ประหยัดโควตา:** ใส่ `--draft` ตอนลองไอเดีย มันคิดครึ่งราคา พอเจอใบที่ใช่ค่อยกด
Enhance ให้เป็นภาพเต็ม (ถ้า `--draft` ตีกับ V8.2 ให้ระบุ `--v 8.1` หรือ `--v 7` ไปด้วย)

**`--tile` ใส่แค่ 2 ชิ้น** (ตึกแถบยาว กับ พื้น) เพราะสองอันนี้ต้องต่อกันได้ไม่มีรอยต่อ
ชิ้นอื่นห้ามใส่ เดี๋ยวมันตัดขอบทิ้ง

## 1. เจนตอนนี้ได้เลย — 12 ชิ้นที่ไม่ผูกกับผังด่าน

ชิ้นพวกนี้ต้องมีแน่นอนไม่ว่าผังด่านจะออกมาหน้าตายังไง เจนคู่ขนานไปกับที่
Mat ออกแบบภูมิทัศน์ได้เลย ส่วนที่ผูกกับผังจริงๆ ผมแยกไว้ข้อ 3

**เลือกสไตล์เดียวแล้วใช้อันนั้นทั้ง 12 ชิ้น ห้ามผสม**

---

### สไตล์ ก — Swiss

**1. ตึกกรุงเทพแถบยาว (ตัวตั้งต้น)** → `sky-city.png`

```
bangkok city skyline strip, mixed shophouses and slim condo towers, seamless repeating horizontally, flat 2D side-scrolling platformer game asset, pure black and white, orthographic side view, no perspective, isolated on plain white background, thick readable silhouette, swiss graphic design, flat geometric vector shapes, hard clean edges, uniform stroke weight, bauhaus poster --ar 3:1 --tile --raw --s 50 --c 0 --no color, colour, grey gradient, soft shading, cast shadow, ground plane, text, letters, numbers, watermark, signature, 3d render, photorealistic, frame, border, multiple objects
```

↑ **เจนอันนี้ให้ได้ก่อน** แล้วก็อป URL ใบที่ชอบ
ไปต่อท้ายอันที่ 2–12 ว่า `--sref <URL> --sw 100`

**2. พื้น 1 ช่อง** → `tile-ground.png`

```
single square ground tile, flat top surface with packed soil below, seamless on all sides, flat 2D side-scrolling platformer game asset, pure black and white, orthographic side view, no perspective, isolated on plain white background, thick readable silhouette, swiss graphic design, flat geometric vector shapes, hard clean edges, uniform stroke weight, bauhaus poster --ar 1:1 --tile --raw --s 50 --c 0 --no color, colour, grey gradient, soft shading, cast shadow, text, letters, numbers, watermark, signature, 3d render, photorealistic, frame, border, multiple objects
```

**3. เมฆเล็ก** → `cloud-s.png`

```
one small simple cloud, two rounded lobes, solid outline, flat 2D side-scrolling platformer game asset, pure black and white, orthographic side view, no perspective, isolated on plain white background, thick readable silhouette, swiss graphic design, flat geometric vector shapes, hard clean edges, uniform stroke weight, bauhaus poster --ar 3:2 --raw --s 50 --c 0 --no color, colour, grey gradient, soft shading, cast shadow, ground plane, text, letters, numbers, watermark, signature, 3d render, photorealistic, frame, border, multiple objects
```

**4. เมฆกลาง** → `cloud-m.png`

```
one medium simple cloud, three rounded lobes, solid outline, flat 2D side-scrolling platformer game asset, pure black and white, orthographic side view, no perspective, isolated on plain white background, thick readable silhouette, swiss graphic design, flat geometric vector shapes, hard clean edges, uniform stroke weight, bauhaus poster --ar 2:1 --raw --s 50 --c 0 --no color, colour, grey gradient, soft shading, cast shadow, ground plane, text, letters, numbers, watermark, signature, 3d render, photorealistic, frame, border, multiple objects
```

**5. เมฆใหญ่** → `cloud-l.png`

```
one large simple cloud, four rounded lobes in a row, solid outline, flat 2D side-scrolling platformer game asset, pure black and white, orthographic side view, no perspective, isolated on plain white background, thick readable silhouette, swiss graphic design, flat geometric vector shapes, hard clean edges, uniform stroke weight, bauhaus poster --ar 3:1 --raw --s 50 --c 0 --no color, colour, grey gradient, soft shading, cast shadow, ground plane, text, letters, numbers, watermark, signature, 3d render, photorealistic, frame, border, multiple objects
```

**6. พุ่มไม้** → `bush.png`

```
one low bush with three rounded lobes, exactly the same silhouette as a cloud but solid filled and sitting flat at the bottom, flat 2D side-scrolling platformer game asset, pure black and white, orthographic side view, no perspective, isolated on plain white background, thick readable silhouette, swiss graphic design, flat geometric vector shapes, hard clean edges, uniform stroke weight, bauhaus poster --ar 2:1 --raw --s 50 --c 0 --no color, colour, grey gradient, soft shading, cast shadow, ground plane, text, letters, numbers, watermark, signature, 3d render, photorealistic, frame, border, multiple objects
```

**7. เนินเล็ก** → `hill-s.png`

```
one small smooth rounded hill mound, flat bottom edge, flat 2D side-scrolling platformer game asset, pure black and white, orthographic side view, no perspective, isolated on plain white background, thick readable silhouette, swiss graphic design, flat geometric vector shapes, hard clean edges, uniform stroke weight, bauhaus poster --ar 2:1 --raw --s 50 --c 0 --no color, colour, grey gradient, soft shading, cast shadow, ground plane, text, letters, numbers, watermark, signature, 3d render, photorealistic, frame, border, multiple objects
```

**8. เนินใหญ่** → `hill-l.png`

```
one large smooth rounded hill mound, same silhouette as a small hill but wider, two small dark notches near the base, flat bottom edge, flat 2D side-scrolling platformer game asset, pure black and white, orthographic side view, no perspective, isolated on plain white background, thick readable silhouette, swiss graphic design, flat geometric vector shapes, hard clean edges, uniform stroke weight, bauhaus poster --ar 2:1 --raw --s 50 --c 0 --no color, colour, grey gradient, soft shading, cast shadow, ground plane, text, letters, numbers, watermark, signature, 3d render, photorealistic, frame, border, multiple objects
```

**9. อิฐ** → `block-brick.png`

```
one square brick block, simple even brick pattern, chunky border, flat 2D side-scrolling platformer game asset, pure black and white, orthographic side view, no perspective, isolated on plain white background, thick readable silhouette, swiss graphic design, flat geometric vector shapes, hard clean edges, uniform stroke weight, bauhaus poster --ar 1:1 --raw --s 50 --c 0 --no color, colour, grey gradient, soft shading, cast shadow, ground plane, text, letters, numbers, watermark, signature, 3d render, photorealistic, frame, border, multiple objects
```

**10. บล็อกรางวัล** → `block-q.png`

```
one floating cube block with a bold question mark carved on its face, small rivets in the four corners, flat 2D side-scrolling platformer game asset, pure black and white, orthographic side view, no perspective, isolated on plain white background, thick readable silhouette, swiss graphic design, flat geometric vector shapes, hard clean edges, uniform stroke weight, bauhaus poster --ar 1:1 --raw --s 50 --c 0 --no color, colour, grey gradient, soft shading, cast shadow, ground plane, text, letters, numbers, watermark, signature, 3d render, photorealistic, frame, border, multiple objects
```

**11. ขอบหลุม** → `pit-edge.png`

```
cross section of a broken floor edge, jagged break on the right side, soil layer below, flat 2D side-scrolling platformer game asset, pure black and white, orthographic side view, no perspective, isolated on plain white background, thick readable silhouette, swiss graphic design, flat geometric vector shapes, hard clean edges, uniform stroke weight, bauhaus poster --ar 1:1 --raw --s 50 --c 0 --no color, colour, grey gradient, soft shading, cast shadow, text, letters, numbers, watermark, signature, 3d render, photorealistic, frame, border, multiple objects
```

**12. เสาธง** → `flagpole.png`

```
one tall thin flagpole with a small sphere on top, bare pole, no cloth flag, flat 2D side-scrolling platformer game asset, pure black and white, orthographic side view, no perspective, isolated on plain white background, thick readable silhouette, swiss graphic design, flat geometric vector shapes, hard clean edges, uniform stroke weight, bauhaus poster --ar 1:4 --raw --s 50 --c 0 --no color, colour, grey gradient, soft shading, cast shadow, ground plane, text, letters, numbers, watermark, signature, 3d render, photorealistic, frame, border, multiple objects
```

---

### สไตล์ ข — Riso

**1. ตึกกรุงเทพแถบยาว (ตัวตั้งต้น)** → `sky-city.png`

```
bangkok city skyline strip, mixed shophouses and slim condo towers, seamless repeating horizontally, flat 2D side-scrolling platformer game asset, pure black and white, orthographic side view, no perspective, isolated on plain white background, thick readable silhouette, risograph print, coarse halftone dot shading, screenprint grain, slightly misregistered ink --ar 3:1 --tile --raw --s 50 --c 0 --no color, colour, grey gradient, soft shading, cast shadow, ground plane, text, letters, numbers, watermark, signature, 3d render, photorealistic, frame, border, multiple objects
```

↑ **เจนอันนี้ให้ได้ก่อน** แล้วก็อป URL ใบที่ชอบ
ไปต่อท้ายอันที่ 2–12 ว่า `--sref <URL> --sw 100`

**2. พื้น 1 ช่อง** → `tile-ground.png`

```
single square ground tile, flat top surface with packed soil below, seamless on all sides, flat 2D side-scrolling platformer game asset, pure black and white, orthographic side view, no perspective, isolated on plain white background, thick readable silhouette, risograph print, coarse halftone dot shading, screenprint grain, slightly misregistered ink --ar 1:1 --tile --raw --s 50 --c 0 --no color, colour, grey gradient, soft shading, cast shadow, text, letters, numbers, watermark, signature, 3d render, photorealistic, frame, border, multiple objects
```

**3. เมฆเล็ก** → `cloud-s.png`

```
one small simple cloud, two rounded lobes, solid outline, flat 2D side-scrolling platformer game asset, pure black and white, orthographic side view, no perspective, isolated on plain white background, thick readable silhouette, risograph print, coarse halftone dot shading, screenprint grain, slightly misregistered ink --ar 3:2 --raw --s 50 --c 0 --no color, colour, grey gradient, soft shading, cast shadow, ground plane, text, letters, numbers, watermark, signature, 3d render, photorealistic, frame, border, multiple objects
```

**4. เมฆกลาง** → `cloud-m.png`

```
one medium simple cloud, three rounded lobes, solid outline, flat 2D side-scrolling platformer game asset, pure black and white, orthographic side view, no perspective, isolated on plain white background, thick readable silhouette, risograph print, coarse halftone dot shading, screenprint grain, slightly misregistered ink --ar 2:1 --raw --s 50 --c 0 --no color, colour, grey gradient, soft shading, cast shadow, ground plane, text, letters, numbers, watermark, signature, 3d render, photorealistic, frame, border, multiple objects
```

**5. เมฆใหญ่** → `cloud-l.png`

```
one large simple cloud, four rounded lobes in a row, solid outline, flat 2D side-scrolling platformer game asset, pure black and white, orthographic side view, no perspective, isolated on plain white background, thick readable silhouette, risograph print, coarse halftone dot shading, screenprint grain, slightly misregistered ink --ar 3:1 --raw --s 50 --c 0 --no color, colour, grey gradient, soft shading, cast shadow, ground plane, text, letters, numbers, watermark, signature, 3d render, photorealistic, frame, border, multiple objects
```

**6. พุ่มไม้** → `bush.png`

```
one low bush with three rounded lobes, exactly the same silhouette as a cloud but solid filled and sitting flat at the bottom, flat 2D side-scrolling platformer game asset, pure black and white, orthographic side view, no perspective, isolated on plain white background, thick readable silhouette, risograph print, coarse halftone dot shading, screenprint grain, slightly misregistered ink --ar 2:1 --raw --s 50 --c 0 --no color, colour, grey gradient, soft shading, cast shadow, ground plane, text, letters, numbers, watermark, signature, 3d render, photorealistic, frame, border, multiple objects
```

**7. เนินเล็ก** → `hill-s.png`

```
one small smooth rounded hill mound, flat bottom edge, flat 2D side-scrolling platformer game asset, pure black and white, orthographic side view, no perspective, isolated on plain white background, thick readable silhouette, risograph print, coarse halftone dot shading, screenprint grain, slightly misregistered ink --ar 2:1 --raw --s 50 --c 0 --no color, colour, grey gradient, soft shading, cast shadow, ground plane, text, letters, numbers, watermark, signature, 3d render, photorealistic, frame, border, multiple objects
```

**8. เนินใหญ่** → `hill-l.png`

```
one large smooth rounded hill mound, same silhouette as a small hill but wider, two small dark notches near the base, flat bottom edge, flat 2D side-scrolling platformer game asset, pure black and white, orthographic side view, no perspective, isolated on plain white background, thick readable silhouette, risograph print, coarse halftone dot shading, screenprint grain, slightly misregistered ink --ar 2:1 --raw --s 50 --c 0 --no color, colour, grey gradient, soft shading, cast shadow, ground plane, text, letters, numbers, watermark, signature, 3d render, photorealistic, frame, border, multiple objects
```

**9. อิฐ** → `block-brick.png`

```
one square brick block, simple even brick pattern, chunky border, flat 2D side-scrolling platformer game asset, pure black and white, orthographic side view, no perspective, isolated on plain white background, thick readable silhouette, risograph print, coarse halftone dot shading, screenprint grain, slightly misregistered ink --ar 1:1 --raw --s 50 --c 0 --no color, colour, grey gradient, soft shading, cast shadow, ground plane, text, letters, numbers, watermark, signature, 3d render, photorealistic, frame, border, multiple objects
```

**10. บล็อกรางวัล** → `block-q.png`

```
one floating cube block with a bold question mark carved on its face, small rivets in the four corners, flat 2D side-scrolling platformer game asset, pure black and white, orthographic side view, no perspective, isolated on plain white background, thick readable silhouette, risograph print, coarse halftone dot shading, screenprint grain, slightly misregistered ink --ar 1:1 --raw --s 50 --c 0 --no color, colour, grey gradient, soft shading, cast shadow, ground plane, text, letters, numbers, watermark, signature, 3d render, photorealistic, frame, border, multiple objects
```

**11. ขอบหลุม** → `pit-edge.png`

```
cross section of a broken floor edge, jagged break on the right side, soil layer below, flat 2D side-scrolling platformer game asset, pure black and white, orthographic side view, no perspective, isolated on plain white background, thick readable silhouette, risograph print, coarse halftone dot shading, screenprint grain, slightly misregistered ink --ar 1:1 --raw --s 50 --c 0 --no color, colour, grey gradient, soft shading, cast shadow, text, letters, numbers, watermark, signature, 3d render, photorealistic, frame, border, multiple objects
```

**12. เสาธง** → `flagpole.png`

```
one tall thin flagpole with a small sphere on top, bare pole, no cloth flag, flat 2D side-scrolling platformer game asset, pure black and white, orthographic side view, no perspective, isolated on plain white background, thick readable silhouette, risograph print, coarse halftone dot shading, screenprint grain, slightly misregistered ink --ar 1:4 --raw --s 50 --c 0 --no color, colour, grey gradient, soft shading, cast shadow, ground plane, text, letters, numbers, watermark, signature, 3d render, photorealistic, frame, border, multiple objects
```

---

### สไตล์ ค — วาดมือ

**1. ตึกกรุงเทพแถบยาว (ตัวตั้งต้น)** → `sky-city.png`

```
bangkok city skyline strip, mixed shophouses and slim condo towers, seamless repeating horizontally, flat 2D side-scrolling platformer game asset, pure black and white, orthographic side view, no perspective, isolated on plain white background, thick readable silhouette, hand-inked linocut, uneven wobbly ink line, crosshatch shading, woodblock print --ar 3:1 --tile --raw --s 50 --c 0 --no color, colour, grey gradient, soft shading, cast shadow, ground plane, text, letters, numbers, watermark, signature, 3d render, photorealistic, frame, border, multiple objects
```

↑ **เจนอันนี้ให้ได้ก่อน** แล้วก็อป URL ใบที่ชอบ
ไปต่อท้ายอันที่ 2–12 ว่า `--sref <URL> --sw 100`

**2. พื้น 1 ช่อง** → `tile-ground.png`

```
single square ground tile, flat top surface with packed soil below, seamless on all sides, flat 2D side-scrolling platformer game asset, pure black and white, orthographic side view, no perspective, isolated on plain white background, thick readable silhouette, hand-inked linocut, uneven wobbly ink line, crosshatch shading, woodblock print --ar 1:1 --tile --raw --s 50 --c 0 --no color, colour, grey gradient, soft shading, cast shadow, text, letters, numbers, watermark, signature, 3d render, photorealistic, frame, border, multiple objects
```

**3. เมฆเล็ก** → `cloud-s.png`

```
one small simple cloud, two rounded lobes, solid outline, flat 2D side-scrolling platformer game asset, pure black and white, orthographic side view, no perspective, isolated on plain white background, thick readable silhouette, hand-inked linocut, uneven wobbly ink line, crosshatch shading, woodblock print --ar 3:2 --raw --s 50 --c 0 --no color, colour, grey gradient, soft shading, cast shadow, ground plane, text, letters, numbers, watermark, signature, 3d render, photorealistic, frame, border, multiple objects
```

**4. เมฆกลาง** → `cloud-m.png`

```
one medium simple cloud, three rounded lobes, solid outline, flat 2D side-scrolling platformer game asset, pure black and white, orthographic side view, no perspective, isolated on plain white background, thick readable silhouette, hand-inked linocut, uneven wobbly ink line, crosshatch shading, woodblock print --ar 2:1 --raw --s 50 --c 0 --no color, colour, grey gradient, soft shading, cast shadow, ground plane, text, letters, numbers, watermark, signature, 3d render, photorealistic, frame, border, multiple objects
```

**5. เมฆใหญ่** → `cloud-l.png`

```
one large simple cloud, four rounded lobes in a row, solid outline, flat 2D side-scrolling platformer game asset, pure black and white, orthographic side view, no perspective, isolated on plain white background, thick readable silhouette, hand-inked linocut, uneven wobbly ink line, crosshatch shading, woodblock print --ar 3:1 --raw --s 50 --c 0 --no color, colour, grey gradient, soft shading, cast shadow, ground plane, text, letters, numbers, watermark, signature, 3d render, photorealistic, frame, border, multiple objects
```

**6. พุ่มไม้** → `bush.png`

```
one low bush with three rounded lobes, exactly the same silhouette as a cloud but solid filled and sitting flat at the bottom, flat 2D side-scrolling platformer game asset, pure black and white, orthographic side view, no perspective, isolated on plain white background, thick readable silhouette, hand-inked linocut, uneven wobbly ink line, crosshatch shading, woodblock print --ar 2:1 --raw --s 50 --c 0 --no color, colour, grey gradient, soft shading, cast shadow, ground plane, text, letters, numbers, watermark, signature, 3d render, photorealistic, frame, border, multiple objects
```

**7. เนินเล็ก** → `hill-s.png`

```
one small smooth rounded hill mound, flat bottom edge, flat 2D side-scrolling platformer game asset, pure black and white, orthographic side view, no perspective, isolated on plain white background, thick readable silhouette, hand-inked linocut, uneven wobbly ink line, crosshatch shading, woodblock print --ar 2:1 --raw --s 50 --c 0 --no color, colour, grey gradient, soft shading, cast shadow, ground plane, text, letters, numbers, watermark, signature, 3d render, photorealistic, frame, border, multiple objects
```

**8. เนินใหญ่** → `hill-l.png`

```
one large smooth rounded hill mound, same silhouette as a small hill but wider, two small dark notches near the base, flat bottom edge, flat 2D side-scrolling platformer game asset, pure black and white, orthographic side view, no perspective, isolated on plain white background, thick readable silhouette, hand-inked linocut, uneven wobbly ink line, crosshatch shading, woodblock print --ar 2:1 --raw --s 50 --c 0 --no color, colour, grey gradient, soft shading, cast shadow, ground plane, text, letters, numbers, watermark, signature, 3d render, photorealistic, frame, border, multiple objects
```

**9. อิฐ** → `block-brick.png`

```
one square brick block, simple even brick pattern, chunky border, flat 2D side-scrolling platformer game asset, pure black and white, orthographic side view, no perspective, isolated on plain white background, thick readable silhouette, hand-inked linocut, uneven wobbly ink line, crosshatch shading, woodblock print --ar 1:1 --raw --s 50 --c 0 --no color, colour, grey gradient, soft shading, cast shadow, ground plane, text, letters, numbers, watermark, signature, 3d render, photorealistic, frame, border, multiple objects
```

**10. บล็อกรางวัล** → `block-q.png`

```
one floating cube block with a bold question mark carved on its face, small rivets in the four corners, flat 2D side-scrolling platformer game asset, pure black and white, orthographic side view, no perspective, isolated on plain white background, thick readable silhouette, hand-inked linocut, uneven wobbly ink line, crosshatch shading, woodblock print --ar 1:1 --raw --s 50 --c 0 --no color, colour, grey gradient, soft shading, cast shadow, ground plane, text, letters, numbers, watermark, signature, 3d render, photorealistic, frame, border, multiple objects
```

**11. ขอบหลุม** → `pit-edge.png`

```
cross section of a broken floor edge, jagged break on the right side, soil layer below, flat 2D side-scrolling platformer game asset, pure black and white, orthographic side view, no perspective, isolated on plain white background, thick readable silhouette, hand-inked linocut, uneven wobbly ink line, crosshatch shading, woodblock print --ar 1:1 --raw --s 50 --c 0 --no color, colour, grey gradient, soft shading, cast shadow, text, letters, numbers, watermark, signature, 3d render, photorealistic, frame, border, multiple objects
```

**12. เสาธง** → `flagpole.png`

```
one tall thin flagpole with a small sphere on top, bare pole, no cloth flag, flat 2D side-scrolling platformer game asset, pure black and white, orthographic side view, no perspective, isolated on plain white background, thick readable silhouette, hand-inked linocut, uneven wobbly ink line, crosshatch shading, woodblock print --ar 1:4 --raw --s 50 --c 0 --no color, colour, grey gradient, soft shading, cast shadow, ground plane, text, letters, numbers, watermark, signature, 3d render, photorealistic, frame, border, multiple objects
```

---

## 2. ตรวจก่อนเก็บไฟล์

ก่อนจะเซฟใบไหนไว้ใช้จริง ดูสามข้อนี้ ถ้าตกข้อใดข้อหนึ่งให้เจนใหม่ อย่าฝืนเอาไปแก้ทีหลัง

1. **พื้นหลังขาวสนิทไหม** มีเงาตกพื้นหรือมีเส้นพื้นติดมาหรือเปล่า ถ้ามี = ทิ้ง
2. **มีเทาไล่เฉดไหม** ต้องมีแค่ดำกับขาว (หรือจุดสกรีน) ถ้ามีเทาเนียนๆ = ทิ้ง
   เพราะครึ่งหลังของเว็บเป็นด่านมืดที่กลับสีทั้งหน้า เทาที่อบมาจะกลับสีไม่ได้
3. **หรี่ตาแล้วยังรู้ว่าเป็นอะไร** ถ้าต้องเพ่ง = รายละเอียดเยอะเกิน potrace จะออกมาเละ

แปลงเป็น path ก่อนใช้เสมอ **ห้ามเอา PNG ไปแปะตรงๆ**:

```bash
convert in.png -colorspace gray -threshold 55%% -negate out.pbm   # ปรับ 55%% ตามภาพ
potrace out.pbm -s -o out.svg --turdsize 8 --alphamax 1
```

เก็บใบที่เจนมาทั้งหมดไว้ที่ `Z:\Claude Code\planc-web\assets\art\raw\`
แล้วก็อปเฉพาะใบที่เลือกออกมาไว้ที่ `assets\art\` **ใช้ชื่อไฟล์ตามตารางเป๊ะ**
เพราะโค้ดจะอ้างชื่อพวกนี้

## 3. ยังอย่าเพิ่งเจน — 6 ชิ้นที่รอผังด่าน / รอ Mat ตอบ

| ชิ้น | ไฟล์ | ติดอะไร |
|---|---|---|
| บันได 1 บล็อก | `step.png` | ผังด่าน |
| เหรียญ | `coin.png` | ยังไม่ตัดสินว่ามีของเก็บไหม |
| อุปสรรคสูง | `stack.png` | ลิสต์บริการ |
| ศัตรู | `foe.png` | รอ Mat ตอบว่ามีศัตรูไหม |
| ศัตรูโดนเหยียบ | `foe-flat.png` | รอข้อบน |
| อาคารปลายทาง | `office.png` | สคริปต์ปลายด่าน |

พอปลดล็อกแล้วประกอบคำสั่งเองได้เลย สูตรเดียวกัน:

```
<subject>, flat 2D side-scrolling platformer game asset, pure black and white, orthographic side view, no perspective, isolated on plain white background, thick readable silhouette, <ท่อนสไตล์ที่เลือก> --ar <อัตราส่วน> --sref <URL> --sw 100 --raw --s 50 --c 0 --no color, colour, grey gradient, soft shading, cast shadow, ground plane, text, letters, numbers, watermark, signature, 3d render, photorealistic, frame, border, multiple objects
```

ท่อน `<subject>` ของทั้งหกชิ้นเตรียมไว้แล้ว:

- **บันได 1 บล็อก** (`--ar 1:1`) — `one solid staircase step block, plain heavy face`
- **เหรียญ** (`--ar 1:1`) — `one flat round coin seen face on, a small star carved in the middle`
- **อุปสรรคสูง** (`--ar 2:3`) — `tall stack of paper files and folders, taller than a cat, standing upright`
- **ศัตรู** (`--ar 1:1`) — `small grumpy alarm clock creature with two little walking feet, front facing, angry face`
- **ศัตรูโดนเหยียบ** (`--ar 2:1`) — `the same alarm clock creature completely flattened into a pancake, seen from the side`
- **อาคารปลายทาง** (`--ar 1:1`) — `small tidy office building with a welcoming door, flat facade, low roof`

## 4. สองข้อที่ยังรอ Mat

1. **สไตล์ ก / ข / ค** — อันนี้บล็อกทุกอย่างในไฟล์นี้ ดูของจริงเทียบกันที่
   `tools/style-compare.png` หรือวิดีโอ `tools/style-compare.mp4`
2. **มีศัตรูให้เหยียบไหม** — ถ้ามี ต้องตอบว่ามันแทนปัญหาอะไรของลูกค้า

## แหล่งอ้างอิง

- Parameter List (ทางการ) — https://docs.midjourney.com/hc/en-us/articles/32859204029709-Parameter-List
- Tile — https://docs.midjourney.com/hc/en-us/articles/32197978340109-Tile
- สรุปเวอร์ชัน V8.1/V8.2 และตารางรองรับพารามิเตอร์ — https://blakecrosley.com/guides/midjourney
