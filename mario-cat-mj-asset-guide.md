# คู่มือสร้าง Asset ด้วย Midjourney — เว็บ Scrollytelling "แมวดำเดินด่าน World 1-1"

> สรุปงาน 4 ส่วน: (1) วิจัย Midjourney ล่าสุด (2) แกะ World 1-1 ทีละเลเยอร์ (3) กลยุทธ์ "ทุกอย่างขยับได้" (4) ชุดพรอมต์พร้อมก๊อปวาง + ลำดับการเจน + เช็กลิสต์ + คำสั่ง potrace
> วันที่ค้นคว้า: 11 ส.ค. 2026 · ข้อความใดไม่มีแหล่งอ้างอิงยืนยันจะติดแท็ก [GUESS]

---

## Part 1 — สถานะ Midjourney ล่าสุด และเทคนิคที่เกี่ยวกับงานนี้

### 1.1 เวอร์ชันล่าสุดคือ V8.2 (ไม่ใช่ V8.x ลอย ๆ)

จากเอกสารทางการของ Midjourney ([Version – Midjourney Docs](https://docs.midjourney.com/hc/en-us/articles/32199405667853-Version)):

- **V8.2 — default ปัจจุบัน** ปล่อย 24 ก.ค. 2026 เน้น aesthetics / คุณภาพภาพ / personalization
- V8.1 — 14 เม.ย. 2026 (เร็วขึ้น 4–5 เท่า, ภาพ HD 2K ได้เลย, ตามพรอมต์แม่นขึ้น)
- V8.0 — 17 มี.ค. 2026 (early access, ปิดไปแล้ว)
- V7 — เม.ย. 2025 · Niji 7 — ม.ค. 2026

พารามิเตอร์ที่ **เปลี่ยนจากยุค V6/V7**:

- V8.1/V8.2 **ตัด `--q` (Quality) ทิ้ง** แต่ยังรองรับ Seed, Chaos, **Raw, Stylize, Tile, Weird**, sref, personalization, moodboard ([Version Docs](https://docs.midjourney.com/hc/en-us/articles/32199405667853-Version), [PixMind: V8.2 release](https://www.pixmind.io/posts/midjourney-v8-2-release))
- **`--cref` (Character Reference) ตายแล้วใน V8.x** — ไม่รองรับ ([Blake Crosley: Midjourney 8.1 Guide](https://blakecrosley.com/guides/midjourney))
- **`--oref` / `--ow` (Omni Reference) เป็นของ V7 เท่านั้น** — ถ้าใส่ใน V8.x ระบบจะเด้งงานกลับไปรันบน V7 ให้อัตโนมัติ ([Omni Reference Docs](https://docs.midjourney.com/hc/en-us/articles/36285124473997-Omni-Reference), [PixMind](https://www.pixmind.io/posts/midjourney-v8-2-release)) — ใช้ oref ได้ถ้ายอมรันงานนั้นบน V7 (ค่า GPU x2, `--ow` 1–1000 ค่าแนะนำ <400)
- `--exp` (รายละเอียดพิเศษ) มีใน 8.1 ช่วง sweet spot 10–25 ([Blake Crosley](https://blakecrosley.com/guides/midjourney)) — งานเราไม่ควรใช้ เพราะยิ่ง detail ยิ่งเสี่ยงเกิดเฉดเทา

### 1.2 การล็อกสไตล์ทั้งชุด asset: --sref คือแกนหลัก

จากเอกสารทางการ ([Style Reference Docs](https://docs.midjourney.com/hc/en-us/articles/32180011136653-Style-Reference)):

- `--sref <URL หรือโค้ดตัวเลข>` ใช้ได้ตั้งแต่ V6 ขึ้นไป รวม V8.2 · ใส่หลายรูปได้ (`--sref URL1 URL2`) และถ่วงน้ำหนักรายรูปได้ (`URL1::2 URL2::1`)
- `--sw` (Style Weight) ช่วง 0–1000, default 100 · สำหรับชุด asset ที่ต้องโทนเดียวกัน แนะนำช่วงกลาง ๆ **100–150** ([Blake Crosley](https://blakecrosley.com/guides/midjourney) แนะนำ 50–150 สำหรับ multi-image project)
- `--sv 7` เป็นเอนจิน style reference รุ่นใหม่ เร็ว/ถูกกว่า ใน 8.1+ ([Blake Crosley](https://blakecrosley.com/guides/midjourney)) — เอกสารทางการยังเขียนถึงแค่ sv6/sv7 จึงถือว่า sv 7 คือค่าที่ควรใช้ [GUESS เฉพาะส่วนที่ว่า 8.2 default เป็น sv7 อยู่แล้ว]
- ทางเลือกเสริม: **Moodboard** (personalization จากรูปที่เราให้คะแนน) ช่วยล็อก "ลายมือประจำบ้าน" ข้ามหลาย batch — แต่ Moodboard ใช้ร่วมกับ `--sw` ไม่ได้ จึงเหมาะเป็นตัวเสริม ไม่ใช่ตัวหลักของงานนี้
- **สูตรของโปรเจกต์นี้:** เจน "asset สมอ" 1 ชิ้นให้สไตล์เป๊ะก่อน แล้วใช้ URL ของมันเป็น `--sref` ให้ทุกชิ้นที่เหลือ + ประโยคสไตล์ชุดเดียวกันคำต่อคำในทุกพรอมต์ (ดู Part 4)

### 1.3 บังคับขาวดำลายเส้น (สำคัญที่สุดสำหรับ potrace)

เทคนิคที่ได้ผลตามแหล่งรวมเทคนิค coloring book ([Aituts: AI Coloring Books](https://aituts.com/ai-generated-coloring-books/), [Blake Crosley](https://blakecrosley.com/guides/midjourney)):

1. **วลีเชิงบวก** ใส่ในพรอมต์: "coloring book line art", "black ink on pure white", "thick lines", "no shading", "outline only", "vector lines"
2. **`--s ต่ำ` (0–50)** — stylize สูงคือสาเหตุหลักที่ MJ "เติมสี/เติมแสงเงา" เอง ([Blake Crosley](https://blakecrosley.com/guides/midjourney) แนะนำ `--s 50–75` สำหรับ line art; งานเราที่ต้องการความนิ่งกว่านั้นใช้ 0–25)
3. **`--raw`** — ลดการตีความสร้างสรรค์ ทำให้ตามพรอมต์ตรง ๆ
4. **`--no color, gradient, shading, gray`** — เป็น negative prompt กันเฉดเทา/ไล่สี
5. แม้ทำครบ MJ ก็ยังอาจแอบมีเทาจาง ๆ — **ไม่เป็นไร** เพราะขั้น potrace เรา threshold ทิ้งอยู่แล้ว (ดู Part 4 ท้ายสุด) สิ่งที่ห้ามจริง ๆ คือ "เงา/ไล่เฉดที่เป็นสาระของภาพ" ซึ่งพอ threshold แล้วรูปพัง

### 1.4 --tile ยังใช้ได้ใน V8.2

ยืนยันจากเอกสารทางการ ([Tile Docs](https://docs.midjourney.com/hc/en-us/articles/32197978340109-Tile)): `--tile` รองรับใน V8.2 ทำขอบภาพต่อกันสนิททั้งแนวนอน-แนวตั้ง ข้อควรระวังจากเอกสารเดียวกัน: **อย่า upscale ภาพ tile** เพราะรอยต่อจะพัง — ใช้ภาพจาก grid ตรง ๆ แล้วไปขยายทาง SVG แทน (ซึ่งงานเราได้เปรียบ เพราะ potrace ให้เวกเตอร์ scale ฟรีอยู่แล้ว) เทคนิคการเขียนพรอมต์ tile ดูเพิ่มที่ [Aituts: --tile prompts](https://aituts.com/midjourney-tile/)

ข้อจำกัดที่ต้องรู้: `--tile` บังคับต่อกันได้ **ทั้งสองแกน** ไม่มีโหมด "ต่อแนวนอนอย่างเดียว" — มีผลกับแถบ skyline (ดู Part 3/4)

### 1.5 พฤติกรรมของคำว่า "super mario" ใน MJ

- คำว่า super mario เป็น "สไตล์" ที่ MJ รู้จักดีมากและลากเอา **สีแดง/น้ำเงิน/ฟ้าอิ่ม ๆ + ตัวมาริโอ้โผล่** มาด้วยแทบทุกครั้ง — เห็นได้จากแกลเลอรีตัวอย่างสไตล์นี้ที่อิ่มสีจัดทั้งหน้า ([Midlibrary: Super Mario style](https://midlibrary.io/styles/super-mario), [Magica: Mario prompts](https://magica.com/blog/midjourney-prompts-for-super-mario))
- บริบทกฎหมายปี 2026: Disney/Universal ฟ้อง Midjourney (มิ.ย. 2025) และ Warner Bros. ตามมาสมทบ ([Techweez, ก.ค. 2026](https://techweez.com/2026/07/07/midjourney-disney-universal-warner-copyright-lawsuit/), [terms.law: 2026 commercial use guide](https://terms.law/2026/01/15/midjourney-commercial-use-rights-complete-2026-guide/)) — Nintendo ยังไม่ใช่โจทก์ และจากการค้น ไม่พบหลักฐานว่า MJ บล็อกคำว่า "mario" ณ ตอนนี้ แต่มีความเสี่ยงที่ moderation จะเข้มขึ้นได้ทุกเมื่อ [GUESS]
- **วิธีรับมือในงานนี้** (ใช้ใน Part 4 ทุกพรอมต์):
  - เอา "วัตถุ + รูปทรง" ขึ้นก่อน แล้วค่อยพ่วงบทบาท "in the role of the super mario bros ..." ไว้กลางประโยค — น้ำหนักของ token ต้นประโยคสูงกว่า จึงคุมภาพได้มากกว่า [GUESS — หลักการ front-loading เป็น best practice ทั่วไปของ MJ]
  - ล็อกสื่อให้แน่น "black ink on pure white" + `--no color, red, blue, mario character, plumber, people` — กันทั้งสีประจำแฟรนไชส์และตัวละคร
  - ถ้าพรอมต์ไหนโดน moderation หรือสีทะลักคุมไม่อยู่ ให้ตัดวลี super mario ออกแล้วแทนด้วย "classic 8-bit platformer video game" — silhouette ที่เราบรรยายละเอียดอยู่แล้วจะยังสื่อมาริโอ้ได้ครบ

### 1.6 เทคนิคทำ 2D game asset ด้วย MJ (สถานะปี 2026)

- **Sprite sheet ตรง ๆ จาก MJ ยังไม่เวิร์กจริง**: MJ วางเฟรมไม่เท่ากัน ระยะไม่เป็น grid ตัวละครเพี้ยนข้ามเฟรม — วงการเลยไปทาง "เจนทีละชิ้นแล้วประกอบ" หรือใช้โมเดลเฉพาะทาง/งานวิจัยเฉพาะ sprite sheet แทน ([Spritesheets.ai: AI game asset guide](https://www.spritesheets.ai/blog/ai-game-asset-generation-guide), [arXiv: Sprite Sheet Diffusion](https://arxiv.org/html/2412.03685v2)) — ตรงกับแนวทางเราพอดี (แยกชิ้น + โค้ดขยับ)
- **เจนแยกชิ้นเพื่อ rig**: เวิร์กและเป็นแนวทางแนะนำ — วัตถุเดี่ยว กลางภาพ พื้นขาว แล้วไปประกอบ/ตัดในเว็บ ([Spritesheets.ai](https://www.spritesheets.ai/blog/ai-game-asset-generation-guide))
- **หลายสถานะของวัตถุเดียวกัน** ทำได้ 3 ทาง เรียงตามความนิ่งของผลลัพธ์:
  1. **แก้ในตัว (ดีสุด)**: ใช้ MJ web **Editor / Vary Region** บนภาพสถานะ A — ระบายทับเฉพาะบริเวณที่เปลี่ยน (เช่น ลบเครื่องหมาย ?) แล้วพรอมต์ใหม่เฉพาะจุด → เส้นรอบนอกเหมือนเดิม 100%
  2. `--sref` รูปสถานะ A + `--seed` เดิม + เปลี่ยนพรอมต์นิดเดียว → คล้ายกันแต่ไม่การันตี silhouette
  3. `--oref` รูปสถานะ A (ต้องยอมรันบน V7) → วัตถุเดิมในบริบทใหม่ เหมาะกับเคสเปลี่ยนท่าทางเยอะ ๆ ([Omni Reference Docs](https://docs.midjourney.com/hc/en-us/articles/36285124473997-Omni-Reference))

---

## Part 2 — แกะ World 1-1 ทีละเลเยอร์ (หลังไปหน้า)

อ้างอิงหลัก: [Super Mario Wiki: World 1-1](https://www.mariowiki.com/World_1-1_(Super_Mario_Bros.)), [GoNintendo: ทีมพัฒนาอธิบายเรื่อง palette swap เมฆ/พุ่มไม้](https://gonintendo.com/s/102481-super-mario-bros-dev-team-explains-why-the-clouds-grass-are-just-palette-swapped), [HotHardware: Miyamoto อธิบายปรัชญาการออกแบบ 1-1](https://hothardware.com/news/gaming-legend-shigeru-miyamoto-explains-design-philosophy-behind-super-mario-bros-world-1-1), [Medium (Tavish): Analysis of SMB 1-1](https://medium.com/creating-immersive-worlds/analysis-of-super-mario-bros-1-1-2eb9a70fbeb4)

### เลเยอร์ 1: ท้องฟ้า
สีฟ้าตายตัวสีเดียว ไม่มีไล่เฉด ไม่มีดวงอาทิตย์ — บนเว็บเราคือ "กระดาษขาวเปล่า" (และกลับเป็นดำล้วนใน dark-level mode) → ไม่ต้องเจนภาพ

### เลเยอร์ 2: ของประดับฉากหลัง (ไม่ชนกับผู้เล่น)
- **เมฆ**: มี 3 ขนาดตามจำนวนลอน — 1 / 2 / 3 ลอน ขอบบนเป็นลอนโค้ง ฐานแบนหยักเล็ก ๆ ลอยเป็นจังหวะซ้ำตลอดด่าน
- **พุ่มไม้**: 1 / 2 / 3 ลอนเช่นกัน และนี่คือทริคที่ดังที่สุดของเกม — **พุ่มไม้คือสไปรต์เมฆก้อนเดียวกันเป๊ะ แค่สลับพาเลตต์สีเขียวและวางบนพื้น** (ยืนยันโดยทีมพัฒนาเอง — [GoNintendo](https://gonintendo.com/s/102481-super-mario-bros-dev-team-explains-why-the-clouds-grass-are-just-palette-swapped)) → เว็บเราควรเล่นมุกเดียวกัน: ใช้ SVG เมฆตัวเดียวกันเป็นพุ่มไม้ (ดู Part 3)
- **เนินเขา**: 2 ขนาด — เนินเล็กเตี้ย กับเนินใหญ่สูง เป็นโดมเขียวมีจุด/ขีดสั้น ๆ บนไหล่เนิน เลื่อนแบบ parallax ช้ากว่าฉากหน้า (ในเกมจริงฉากหลังเลื่อนตามกล้องชั้นเดียว แต่เว็บ scrollytelling นิยมเพิ่ม parallax — เป็น upgrade ที่ไม่ผิดกลิ่นเกม)
- **ต้นไม้**: **World 1-1 ไม่มีต้นไม้** (ทайล์เซ็ตต้นไม้ไปโผล่ด่านอื่น) → ไม่ทำ แต่ของ "ควรเพิ่ม" จริง ๆ ที่ Part 2 พบคือ **ท่อ + ปราสาทท้ายด่าน** ซึ่งหลุดจากลิสต์ Part 4 ของโจทย์ — เพิ่มให้แล้วใน Part 4
- ของทั้งเลเยอร์นี้ **นิ่งสนิทในเกมจริง** (เมฆ SMB1 ไม่ลอย) — การให้เมฆลอยช้า ๆ บนเว็บคือ "เสริม" ที่ต้อง reversible

### เลเยอร์ 3: พื้นดิน
- พื้นเป็นบล็อกลายอิฐ/หินก้อนเดียว **ซ้ำไม่รู้จบ** ทั้งด่าน → ต้องการแค่ 1 tile ที่ต่อขอบสนิท
- **หลุม (pit)**: คือ "การหายไปของพื้น" ไม่ใช่วัตถุ — สิ่งที่ต้องมีคือ "ขอบพื้นที่ขาด" ให้ดูตั้งใจ ใน 1-1 มีหลุม 2 จุดช่วงครึ่งหลังของด่าน (จุดแรกหลังโซนบล็อก 1-Up ลับ, จุดที่สองแทรกระหว่างชุดบันได) ([Mariowiki](https://www.mariowiki.com/World_1-1_(Super_Mario_Bros.)))

### เลเยอร์ 4: วัตถุอินเทอร์แอกทีฟ + การเคลื่อนไหว (ข้อมูลชี้ขาดจำนวนชิ้นส่วน)

| วัตถุ | แวเรียนต์ | ขยับยังไงในเกมจริง | ผลต่อจำนวนชิ้น/สถานะ |
|---|---|---|---|
| **? block** | 1 ทรง (ทองมีหมุด 4 มุม) | idle: กะพริบวิบ ๆ 3 เฟรม · โดนชน: **เด้งขึ้น ~8px แล้วตกกลับ + คายของ + กลายเป็นบล็อกด้าน (used block: หน้าเรียบ เหลือหมุด 4 มุม)** — เปลี่ยนถาวร | **2 สถานะ** (ปกติ/ด้าน) + เด้งด้วยโค้ด (translateY) |
| **บล็อกอิฐ** | 1 ทรง | มาริโอ้เล็กชน: เด้งดึ๋ง · มาริโอ้ใหญ่ชน: **แตกเป็นเศษ 4 ชิ้นกระเด็นโค้ง** · บางก้อนเป็นเหรียญ 10 เหรียญ/ดาว | 1 ภาพ (เด้ง=โค้ด) · ถ้าอยากได้ฉากแตก: โค้ดตัด SVG เป็น 4 ชิ้นเองได้ ไม่ต้องเจนเพิ่ม |
| **เหรียญ** | ในบล็อก vs ลอยในฉากลับ | จากบล็อก: พุ่งขึ้นหมุนแล้วหายพร้อมแต้ม · ลอย: **หมุนรอบแกนตั้ง (วงจร ~4 เฟรม: เต็ม→รี→เส้น→รี)** | 1 ภาพ + โค้ดบีบ scaleX (ดู Part 3) |
| **ท่อ** | สูง 2 / 3 / 4 ไทล์ — ใน 1-1 มีชุดไต่ระดับ 2→3→4→4 (ต้นที่ 4 มุดลงฉากลับ 19 เหรียญได้) + ท่อทางออกฉากลับใกล้ท้ายด่าน ([Mariowiki](https://www.mariowiki.com/World_1-1_(Super_Mario_Bros.))) | ตัวท่อนิ่ง · (piranha plant โผล่จากท่อมีในด่านอื่น — **1-1 ไม่มี**) | **แยกปากท่อ + ลำท่อ** → โค้ดยืดลำท่อได้ทุกความสูงจาก 2 ภาพ |
| **บล็อกบันได (hard block)** | 1 ทรง | นิ่ง ทำลายไม่ได้ | 1 ภาพ ใช้ซ้ำเรียงเป็นพีระมิด/บันได |
| **บล็อกลับ (1-Up)** | ล่องหน | โผล่เมื่อชน | ใช้ภาพ ? block เดิม + โค้ด fade-in — ไม่ต้องเจน |
| **กุมบ้า** (16 ตัว) | 1 ทรง | เดิน 2 เฟรม (ภาพเดิม flip ซ้ายขวา) · โดนเหยียบ: **แบนแฟบ** ค้างแป๊บแล้วหาย | นอกขอบเขต asset ชุดนี้ (ด่านเราตัวเอกคือแมว) แต่ถ้าจะมี: 2 สถานะ (ปกติ/แบน) |
| **เต่าคูปา** (1 ตัว) | เขียว | เดิน 2 เฟรม · เหยียบ→หดเข้ากระดอง→กระดองไถล | ถ้าจะมี: 2 สถานะ (ตัว/กระดอง) |
| **เสาธง** | 1 ชุด | **ธงเลื่อนจากยอดลงโคน** ตอนจบด่าน (แล้วมาริโอ้ไถลตาม) — คือ "ความคืบหน้า = ตำแหน่งแนวตั้ง" เหมาะกับ scroll สุด ๆ | **ธงแยกจากเสา** เป็น 2 ภาพ |
| **บันไดท้ายด่าน** | บล็อกเดียวเรียง 8 ขั้น | นิ่ง | ใช้ hard block ซ้ำ |
| **ปราสาท** | หลังเล็ก | นิ่ง · หลังเข้า: ธงปราสาทค่อย ๆ ขึ้นยอด + พลุ | 1 ภาพ (+ ธงจิ๋วโผล่ด้วยโค้ด — ใช้ภาพธงเดิมย่อ) |

### จังหวะ 20 วินาทีแรก — "สอนโดยไม่พูด"
([HotHardware/Miyamoto](https://hothardware.com/news/gaming-legend-shigeru-miyamoto-explains-design-philosophy-behind-super-mario-bros-world-1-1), [Medium: Analysis of 1-1](https://medium.com/creating-immersive-worlds/analysis-of-super-mario-bros-1-1-2eb9a70fbeb4), [Mariowiki](https://www.mariowiki.com/World_1-1_(Super_Mario_Bros.)))

1. **พื้นราบโล่ง** — มาริโอ้เกิดชิดซ้ายหันขวา พื้นที่ว่างทางขวาคือคำสั่ง "เดินไปทางขวา" โดยไม่มีตัวหนังสือ → บนเว็บ = จอแรกโล่ง มีแมวดำอยู่ซ้าย ผู้ใช้รู้เองว่าต้อง scroll
2. **? บล็อกก้อนแรก ลอยเดี่ยว** — ของแวววาวลอยหัว = "ลองกระโดดชนสิ" ตามด้วย **กุมบ้าตัวแรก** เดินเข้าหา = สอนกระโดดข้าม/เหยียบ ในระยะที่หลบทันแน่ ๆ
3. **แผงบล็อก อิฐ-?-อิฐ-?-อิฐ (+ ? ลอยสูงอีกก้อน)** — เห็ดออกจาก ? ก้อนแรก ไหลไปขวา ชนท่อแล้ว **เด้งกลับมาหาผู้เล่นเอง** — บังคับให้ได้พาวเวอร์อัปแบบเนียน ๆ
4. **ท่อไต่ระดับ 2→3→4** — บทเรียนกระโดดที่ยากขึ้นทีละขั้น ก่อนเจอหลุมจริงครั้งแรก
→ นี่คือสคริปต์การวาง asset ช่วงเปิดเว็บของเราเลย: โล่ง → ? เดี่ยว → แผงบล็อก → ท่อ 3 ระดับ

---

## Part 3 — กลยุทธ์ "ทุกอย่างขยับได้" (scrub-safe)

หลักคิด: **การขยับทั้งหมดผูกกับ scroll progress (ฟังก์ชันล้วน ไม่มี random/เวลาจริง)** → scroll ถอยแล้วทุกอย่างถอยตาม · MJ มีหน้าที่ผลิต "อะไหล่นิ่ง" เท่านั้น

### กลุ่ม A — 1 ภาพ / โค้ดขยับทั้งก้อน
| asset | การขยับด้วยโค้ด |
|---|---|
| เมฆ 3 ขนาด | translateX ช้า ๆ ผูก scroll (parallax ชั้นไกลสุด) |
| เนินเล็ก/ใหญ่ | parallax translateX |
| พุ่มไม้ | **reuse SVG เมฆ 3 ลอน** ตามมุกต้นฉบับ: วางบนเส้นพื้น + ใส่ขีดใบไม้ทับด้วยโค้ด หรือใช้ภาพแยก (มีพรอมต์ให้ทั้งคู่) |
| แถบ skyline กรุงเทพ | translateX วนลูป (ไทล์แนวนอน) — ชั้นหลังสุด |
| ground tile | เลื่อนตามฉาก (pattern fill ใน SVG/CSS repeat) |
| stair block | วางซ้ำเป็นบันได/พีระมิด, เข้าฉากแบบ pop ทีละก้อนตาม scroll ก็ยัง scrub-safe |
| pit edge | ประกบซ้าย/ขวาของช่องว่าง (ภาพเดียว flip ใช้สองฝั่ง) |
| บล็อกอิฐ | เด้ง = translateY ผูก scroll; ฉากแตก = โค้ดหั่น path เป็น 4 ชิ้นแล้ว interpolate ตำแหน่งตาม progress (ถอยได้) |
| ปราสาท | นิ่ง + ธงจิ๋วเลื่อนขึ้นตาม progress ท้ายด่าน |

### กลุ่ม B — แยกชิ้นเพื่อ rig
| asset | ชิ้น | เหตุผล |
|---|---|---|
| เสาธง | ① เสา+ลูกกลมยอด ② ธงสามเหลี่ยม | ธงต้องเลื่อนตามแกนเสา = จุดไคลแมกซ์ของ scroll (ยอด→โคน map ตรงกับ progress 0→1) |
| ท่อ | ① ปากท่อ ② ท่อนลำ | ยืดลำได้ทุกความสูง (2/3/4 ไทล์) จาก 2 ภาพ · อนาคตอยากให้อะไรโผล่จากท่อ ก็ซ่อนหลังปากท่อได้ |
| เหรียญ | 1 ภาพพอ | หมุน = scaleX ในโค้ด (ดูล่าง) |

### กลุ่ม C — หลายสถานะ (2–3 ภาพต่อวัตถุ)
| asset | สถานะ | เทคนิคให้ดูเป็น "วัตถุเดียวกัน" |
|---|---|---|
| ? block | ปกติ / ด้าน (used) | เจนสถานะปกติให้เพอร์เฟกต์ก่อน แล้วใช้ **MJ Editor / Vary Region ลบ ? ออก เติมหมุด/ขีดถ่านหมด** บนภาพเดิม → เส้นขอบนอกตรงกัน 100% สลับภาพตอนเด้งสุด (โค้ด crossfade สั้น ๆ ผูก progress — ถอย scroll แล้วบล็อกกลับมามี ? ได้ ถือว่า "ย้อนเวลา" ตามคอนเซปต์ scrub) |
| (ถ้ามีศัตรูภายหลัง) | ปกติ / แบน | เทคนิคเดียวกัน: Vary Region เฉพาะส่วนตัว |

### เหรียญหมุน — ใช้กี่เฟรม?
**คำแนะนำ: 1 ภาพ + โค้ด** — SVG เหรียญบีบ `scaleX` 1 → 0.12 → 1 (แกนกลางเหรียญ) ก็อ่านเป็น "หมุนรอบแกนตั้ง" แล้ว และ scrub-safe โดยธรรมชาติ · ทริคให้ได้กลิ่นเรโทร: **quantize** ค่า scaleX เป็น 4 สเต็ป (เต็ม/รี/เส้น/รี) เลียนวงจร 4 เฟรมของเกมจริง โดยไม่ต้องเจนภาพเพิ่มแม้แต่ใบเดียว · ถ้าอยากได้เส้น "สันเหรียญ" ตอนตะแคงจริง ๆ ค่อยเจนเฟรมที่ 2 (edge-on) เพิ่มอีก 1 ภาพ — เกินนั้นไม่คุ้ม

### ข้อบังคับให้รอด potrace (ทุกชิ้น)
ดำสนิทบนขาวสนิท เส้นหนา (เส้นบางกว่า ~1% ของความกว้างภาพเสี่ยงขาดตอน trace) · วัตถุเดียว กลางภาพ มีขอบขาวรอบตัว · ไม่มีเงาตกกระทบ/ไล่เฉด/ลายที่ละเอียดยิบ (potrace จะกลายเป็นจุดขยะ) · เส้นปิดล้อมเป็นรูปปิด — โค้ดจะได้ fill ขาว/ดำสลับใน dark mode ได้ด้วย `fill-rule`

---

## Part 4 — ชุดพรอมต์ Midjourney (ก๊อปวางได้เลย)

### บล็อกที่ใช้ร่วมทุกพรอมต์ (คำต่อคำ — นี่คือกาวสไตล์ของทั้งชุด)

**STYLE (วางกลางประโยค):**
`drawn like a six-year-old child's crayon doodle, shaky wobbly hand-drawn black crayon lines, charmingly crooked and uneven, naive kids drawing, thick bold outlines`

**MEDIUM (วางท้ายประโยค):**
`simple coloring book line art, black ink on pure white background, outline only, no shading`

**PARAMS (ฐาน):**
`--v 8.2 --raw --s 25 --no color, red, blue, gradient, shading, gray, background scenery, text, watermark, frame, border, mario character, plumber, people`

หลังได้ภาพสมอแล้ว เติม: `--sref <URL ภาพสมอ> --sw 120` ต่อท้ายทุกพรอมต์ถัดไป
(ปิด personalization ของบัญชีระหว่างเจนชุดนี้ เพื่อไม่ให้รสนิยมส่วนตัวแทรกสไตล์)

> ด้านล่างเขียนพรอมต์เต็มทุกชิ้นเพื่อก๊อปตรง ๆ ได้ — ตำแหน่ง `[STYLE]` `[MEDIUM]` `[PARAMS]` คือบล็อกข้างบน

---

**A1 — ? BLOCK (ภาพสมอ — เจนชิ้นนี้ก่อนเสมอ)**
```
a square mystery block in the role of the super mario bros question block, slightly crooked square with one big bold question mark in the center and one small round rivet in each of the four corners, [STYLE], single object, centered, isolated on a plain white background, [MEDIUM] --ar 1:1 [PARAMS]
```

**A2 — ? BLOCK สถานะ "โดนชนแล้ว" (used block)**
วิธีหลัก: เปิดภาพ A1 ใน MJ web Editor → Vary Region ระบายทับเครื่องหมาย ? → พรอมต์เฉพาะบริเวณ:
```
blank empty metal block face, four small round rivets in the corners, a few faint crayon scribble marks, [MEDIUM]
```
วิธีสำรอง (เจนใหม่ทั้งใบ ถ้า Editor ให้ผลไม่ดี):
```
a plain spent metal block in the role of the super mario bros used block after being hit, slightly crooked empty square with one small round rivet in each corner and no symbol, [STYLE], single object, centered, isolated on a plain white background, [MEDIUM] --ar 1:1 --sref <A1_URL> --sw 200 [PARAMS]
```

**B1 — บล็อกอิฐ**
```
a brick block in the role of the super mario bros brick block, slightly crooked square filled with a simple pattern of fat uneven bricks in two offset rows, [STYLE], single object, centered, isolated on a plain white background, [MEDIUM] --ar 1:1 [PARAMS]
```

**B2 — stair block (hard block)**
```
a solid stone block in the role of the super mario bros staircase hard block, slightly crooked square with a thick double outline and four small dots in the middle, [STYLE], single object, centered, isolated on a plain white background, [MEDIUM] --ar 1:1 [PARAMS]
```

**B3 — ground tile (ต้องต่อขอบสนิท)**
```
a seamless repeating pattern of fat crooked cobblestone bricks in the role of the super mario bros ground tiles, even spacing, uniform density across the whole image, [STYLE], [MEDIUM] --ar 1:1 --tile [PARAMS]
```
(ห้าม upscale ภาพนี้ — ใช้จาก grid ตรง ๆ ตามข้อจำกัด --tile)

**B4 — pit edge (ขอบหลุม)**
```
a broken cliff edge of a stone brick ground in the role of the edge of a super mario bros pit, left side filled with fat crooked bricks, right side ending in a jagged crumbling vertical edge, empty white on the right, [STYLE], single object, centered, isolated on a plain white background, [MEDIUM] --ar 1:1 [PARAMS]
```
(ภาพเดียว flip แนวนอนใช้เป็นขอบซ้าย/ขวาของหลุมได้)

**C1 — เมฆเล็ก 1 ลอน**
```
a small puffy cloud in the role of a super mario bros sky cloud, one single rounded bump on top with a flat gently scalloped bottom edge, [STYLE], single object, centered, isolated on a plain white background, [MEDIUM] --ar 4:3 [PARAMS]
```

**C2 — เมฆกลาง 2 ลอน**
```
a puffy cloud in the role of a super mario bros sky cloud, two rounded bumps on top with a flat gently scalloped bottom edge, [STYLE], single object, centered, isolated on a plain white background, [MEDIUM] --ar 3:2 [PARAMS]
```

**C3 — เมฆใหญ่ 3 ลอน**
```
a long puffy cloud in the role of a super mario bros sky cloud, three rounded bumps on top with a flat gently scalloped bottom edge, [STYLE], single object, centered, isolated on a plain white background, [MEDIUM] --ar 2:1 [PARAMS]
```

**C4 — พุ่มไม้** (ทางเลือก — ทางหลักคือ reuse SVG เมฆ C3 ตามมุก palette-swap ของต้นฉบับ)
```
a round garden bush in the role of the super mario bros bush, exactly the same silhouette as the game's three-bump cloud: three rounded bumps with a flat bottom sitting on the ground, sparse short leaf scribbles inside, [STYLE], single object, centered, isolated on a plain white background, [MEDIUM] --ar 2:1 [PARAMS]
```

**C5 — เนินเล็ก**
```
a low smooth dome hill in the role of the small super mario bros green hill, wide half-circle mound with a flat bottom and a few tiny dash marks scattered on the slope, [STYLE], single object, centered, isolated on a plain white background, [MEDIUM] --ar 3:2 [PARAMS]
```

**C6 — เนินใหญ่**
```
a tall smooth dome hill in the role of the big super mario bros green hill, high rounded mound with a flat bottom and a few tiny dash marks scattered on the slope, [STYLE], single object, centered, isolated on a plain white background, [MEDIUM] --ar 4:3 [PARAMS]
```

**D1 — แถบ skyline กรุงเทพ (ต้องลูปแนวนอน)**
```
a flat outline strip of the bangkok city skyline in the role of the super mario bros distant background scenery, a row of simple boxy buildings of different heights on one straight baseline, one thai temple spire like wat arun, one tall tower with a pixel-notch top like mahanakhon, empty white sky above, [STYLE], [MEDIUM] --ar 3:1 --tile [PARAMS]
```
หมายเหตุ: `--tile` บังคับต่อขอบทั้งสองแกน อาจดันให้ตึกกระจายทั้งภาพ — ถ้าผลออกมาเป็น "ลายพื้น" แทนที่จะเป็นแถบตามเส้นฐาน ให้ตัด `--tile` ออก แล้วทำลูปเองตอนเป็น SVG (ก๊อปกลุ่มตึกท้ายแถบไปแปะหัวแถบ) — สำหรับ skyline วิธีหลังมักได้ผลดีกว่า [GUESS จากพฤติกรรม --tile กับภาพที่มี baseline]

**E1 — ปากท่อ (แยกชิ้น)**
```
the top rim of a warp pipe in the role of the super mario bros pipe mouth, a short wide rounded rectangle lip slightly wider than the pipe below it, with two long vertical crayon streaks for shine, [STYLE], single object, centered, isolated on a plain white background, [MEDIUM] --ar 2:1 [PARAMS]
```

**E2 — ลำท่อ (แยกชิ้น — โค้ดยืดได้ทุกความสูง)**
```
a straight vertical pipe shaft segment in the role of the super mario bros pipe body, two thick parallel vertical lines with one long vertical crayon streak inside, open at top and bottom, [STYLE], single object, centered, isolated on a plain white background, [MEDIUM] --ar 2:3 [PARAMS]
```

**F1 — เหรียญ (1 ภาพ — การหมุนทำด้วยโค้ด scaleX แบบ quantize 4 สเต็ป ดู Part 3)**
```
an upright oval coin in the role of the super mario bros coin, tall ellipse with a thick double outline and one vertical slot line in the middle, [STYLE], single object, centered, isolated on a plain white background, [MEDIUM] --ar 2:3 [PARAMS]
```
(ถ้าต้องการเฟรมตะแคงเสริม: `the same coin seen edge-on, a thin tall rounded bar` + `--sref <F1_URL> --sw 200`)

**G1 — เสาธง (ไม่รวมธง)**
```
a tall thin flagpole in the role of the super mario bros goal flagpole, one straight vertical pole with a small circle ball on the very top, no flag attached, [STYLE], single object, centered, isolated on a plain white background, [MEDIUM] --ar 1:4 [PARAMS]
```
(เสายาวจริงในเว็บให้ยืด path ตรงกลางด้วยโค้ด — หรือวาดเสาเป็น SVG เองแล้วใช้เฉพาะลูกกลม+ธงจาก MJ ก็ได้ เพราะเสาคือเส้นตรงเส้นเดียว)

**G2 — ธง (แยกจากเสา)**
```
a triangular pennant flag in the role of the super mario bros goal flag, slightly wavy crooked triangle pointing left, small doodle star in the middle, [STYLE], single object, centered, isolated on a plain white background, [MEDIUM] --ar 1:1 [PARAMS]
```

**H1 — ปราสาทท้ายด่าน (ของแถมที่ Part 2 พบว่าขาดไม่ได้)**
```
a small brick castle in the role of the super mario bros end-of-level castle, chunky square body with crenellated battlements on top, one arched black doorway, two tiny rectangular windows, crooked brick lines, [STYLE], single object, centered, isolated on a plain white background, [MEDIUM] --ar 1:1 [PARAMS]
```

---

### ลำดับการเจน (generation order)

1. **A1 (? block) = สมอของทั้งชุด** — รีรันจนได้ใบที่ "เส้นสั่นแบบเด็กวาด + ทรงชัด + ดำล้วน" แล้วเก็บ URL ไว้ (ภาพนี้คือนิยามของคำว่า kids hand-drawn ของโปรเจกต์)
2. ทดสอบกาวสไตล์: เจน **B1 (อิฐ)** พร้อม `--sref A1 --sw 120` — ถ้าเส้นสองภาพดูเป็นมือเดียวกัน แปลว่าสูตรล็อกแล้ว (ถ้ายังไม่เป็น ลอง `--sw 150–200`)
3. ไล่ครอบครัวบล็อก: B2 → B3 → B4 → A2 (A2 ทำท้ายสุดของกลุ่ม เพราะต้องใช้ A1 ที่นิ่งแล้วใน Editor)
4. ครอบครัวทรงกลม: C1 → C2 → C3 → (C4) → C5 → C6 (ทุกใบพ่วง sref A1)
5. ท่อ: E1 → E2 · จบด้วยชิ้นเดี่ยว: F1 → G1 → G2 → H1 → D1 (D1 ไว้ท้ายเพราะซับซ้อนสุด อาจต้องรีรันหลายรอบ)
6. ทุกชิ้น: เลือกจาก grid โดยดู "silhouette ชัด + เส้นหนา" ก่อน "สวย" — เพราะปลายทางคือ potrace ไม่ใช่ภาพโชว์

### เช็กลิสต์รับภาพ (ตรวจก่อนส่งเข้า potrace)

- [ ] ดำ/ขาวจริง — ลอง threshold 50% แล้วภาพไม่เปลี่ยนสาระ (ไม่มีเงา/เฉดที่แบกรายละเอียดสำคัญ)
- [ ] วัตถุเดียว อยู่กลาง มีขอบขาวรอบตัวอย่างน้อย ~5% ของภาพ ไม่มีเศษวัตถุ/ตัวหนังสือ/กรอบหลุดมา
- [ ] ไม่มีมาริโอ้ ไม่มีคน ไม่มีสีแฟรนไชส์แอบซึม
- [ ] เส้นหนาสม่ำเสมอทั้งใบ ไม่มีช่วงเส้นบางจนเสี่ยงขาดตอน trace · เส้นรอบนอกปิดสนิท
- [ ] silhouette ทดสอบด้วยการย่อเหลือ ~48px — ยังอ่านออกว่าเป็นของชิ้นไหนใน Mario
- [ ] สไตล์เข้าฝูง: วางเทียบข้างภาพสมอ A1 แล้วดูเป็น "เด็กคนเดียวกันวาด"
- [ ] เฉพาะ B3/D1: ทดสอบ seam — ก๊อปภาพวาง 2 ใบชิดกัน (และ offset ครึ่งภาพ) แล้วรอยต่อไม่สะดุด
- [ ] เฉพาะ A1/A2: ซ้อนสองภาพแบบโปร่งใส เส้นขอบนอกทับกันสนิท (ต่างกันได้เฉพาะหน้าบล็อก)

### คำสั่ง potrace ที่แนะนำ

```bash
# 1) PNG → bitmap ขาวดำ (threshold ตัดเทาทิ้ง) ด้วย ImageMagick
magick asset.png -colorspace Gray -threshold 55% asset.pbm

# 2) trace เป็น SVG — turdsize กรองจุดขยะเล็ก ๆ, alphamax คงความ "สั่น" ของเส้นเด็กวาด
potrace asset.pbm --svg -o asset.svg --turdsize 30 --alphamax 1.0 --opttolerance 0.2 --tight

# เส้นบาง/ลายเส้นดินสอ: ใส่ mkbitmap คั่นก่อน (high-pass + upscale ช่วยให้เส้นไม่ขาด)
magick asset.png -colorspace Gray asset.pgm
mkbitmap asset.pgm -f 4 -s 2 -t 0.45 -o asset.pbm
potrace asset.pbm --svg -o asset.svg --turdsize 30 --alphamax 1.0 --opttolerance 0.2 --tight
```

จูน: เส้นขาดตอน trace → ลด threshold เป็น 45–50% หรือใช้เส้นทาง mkbitmap · จุดขยะเยอะ → เพิ่ม `--turdsize` เป็น 50–80 · มุมเหลี่ยมเกินจนเสียความ "สั่น" → `--alphamax 1.2` · ไฟล์ใหญ่ → เพิ่ม `--opttolerance` เป็น 0.4–0.5 · สำหรับ dark-level mode: SVG จาก potrace เป็น path fill ดำล้วน — invert ทั้งฉากด้วย CSS `filter: invert(1)` หรือสลับ `fill` ระหว่างดำ/ขาว ที่ระดับ root ได้เลย ไม่ต้องมี asset ชุดที่สอง

---

## แหล่งอ้างอิงทั้งหมด

**Midjourney (Part 1):** [Version Docs](https://docs.midjourney.com/hc/en-us/articles/32199405667853-Version) · [Style Reference Docs](https://docs.midjourney.com/hc/en-us/articles/32180011136653-Style-Reference) · [Tile Docs](https://docs.midjourney.com/hc/en-us/articles/32197978340109-Tile) · [Omni Reference Docs](https://docs.midjourney.com/hc/en-us/articles/36285124473997-Omni-Reference) · [Blake Crosley: Midjourney 8.1 Guide](https://blakecrosley.com/guides/midjourney) · [PixMind: V8.2](https://www.pixmind.io/posts/midjourney-v8-2-release) · [Aituts: Coloring Books](https://aituts.com/ai-generated-coloring-books/) · [Aituts: --tile](https://aituts.com/midjourney-tile/) · [Midlibrary: Super Mario style](https://midlibrary.io/styles/super-mario) · [Magica: Mario prompts](https://magica.com/blog/midjourney-prompts-for-super-mario) · [Techweez: คดี WB/Disney/Universal](https://techweez.com/2026/07/07/midjourney-disney-universal-warner-copyright-lawsuit/) · [terms.law: Commercial use 2026](https://terms.law/2026/01/15/midjourney-commercial-use-rights-complete-2026-guide/) · [Spritesheets.ai: AI game assets](https://www.spritesheets.ai/blog/ai-game-asset-generation-guide) · [arXiv: Sprite Sheet Diffusion](https://arxiv.org/html/2412.03685v2)

**World 1-1 (Part 2):** [Super Mario Wiki: World 1-1](https://www.mariowiki.com/World_1-1_(Super_Mario_Bros.)) · [GoNintendo: cloud/bush palette swap](https://gonintendo.com/s/102481-super-mario-bros-dev-team-explains-why-the-clouds-grass-are-just-palette-swapped) · [HotHardware: Miyamoto on 1-1](https://hothardware.com/news/gaming-legend-shigeru-miyamoto-explains-design-philosophy-behind-super-mario-bros-world-1-1) · [Medium: Analysis of SMB 1-1](https://medium.com/creating-immersive-worlds/analysis-of-super-mario-bros-1-1-2eb9a70fbeb4)
