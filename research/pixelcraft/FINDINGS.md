# FINDINGS — Pixel Craft (หน้า landing หลักของธีม)

โครงเอกสารล้อ `research/xxix/FINDINGS.md` · ทุกตัวเลขมี citation ชี้ไฟล์ใต้ `research/pixelcraft/out/`
· ผลรัน checker แปะท้ายไฟล์ · ตาราง section/effect ฉบับเต็มอยู่ที่ `SECTIONS.md` (ไฟล์นี้ไม่เล่าซ้ำ)

---

## 1. จับอะไรมา (What was captured)

- **URL:** `https://pixel-craft.cmsmasters.studio/` — หน้า landing ขายธีมของ CMSMasters
  (มติเจ้าของงาน 2026-08-01: ใช้หน้านี้เป็นฐานหลัก; เดโมเอเจนซี่ `/main/` เก็บเป็นตัวรอง — ดู §8)
- **วันเวลา:** 2026-08-01T08:43–08:51Z ⟨_capture_meta.json#startedAt⟩ · Playwright 1.62.1
  ⟨_capture_meta.json#playwright⟩ · เบราว์เซอร์ installed Chrome 150 ⟨_capture_meta.json#chromium⟩
- **Viewports:** 1440×900 (deep) + 390×844 (deep) + หน้ารอง `/main/`, `/main/home-two/`, `/main/home-three/` (ตื้น)
- **flags:** ไม่ใช้ `--quick` / `--no-shots` (รันเต็ม) ⟨_capture_meta.json#flags⟩
- **`notCaptured`: ว่าง** ⟨_capture_meta.json#notCaptured⟩ · **`warnings`: ว่าง** ⟨_capture_meta.json#warnings⟩
  · console error 0 ทั้งสอง viewport
- **ข้อจำกัดที่ต้องรู้ตอนอ่านตัวเลข:**
  - ภาพ `shots/*_full.jpg` อาจมีช่วงล่างว่าง (เนื้อหา lazy-load) — ใช้ `shots/home_1440_full_forced.jpg` เป็นแผนที่โครงสร้าง
  - ช่วง scroll จาก sweep หยาบละเอียด ~docHeight/26 = อ่านเป็น ±1 step เสมอ; ค่าที่ใช้สร้างจริงวัดซ้ำด้วย `probe-effect.mjs` แล้ว (RMS กำกับใน Table B)
  - probe ที่ 390 พบ 24 section เทียบ 25 ที่ 1440 ⟨derived/sections.json#note390⟩ — แถว S25 จึงไม่มีค่าสูง @390
  - จุดที่วัดไม่สำเร็จถูกบันทึกคำว่า "ไม่ได้วัด" พร้อมเหตุผลใน `SECTIONS.md` Table B (เช่น parallax S17 ที่นิ่งสนิท 2 ครั้ง ⟨effects/parallax_S17_speed1_retry.json#fit.verdict⟩)

## 2. เฟรมเวิร์กและสแต็ค

- **WordPress theme:** `pixel-craft 1.0.0` ⟨probe/home_1440.json#themeHints[0].name⟩ + addon
  `cmsmasters-elementor-addon 1.25.1` ⟨probe/home_1440.json#themeHints[3].ver⟩ · page builder = **Elementor**
- **ไลบรารี runtime:** jQuery 3.7.1 ⟨probe/home_1440.json#libs.jQuery⟩ · Swiper · anime.js · imagesLoaded
  ⟨probe/home_1440.json#libs.Swiper⟩ + ในบันเดิลมี basicScroll (parallax), headroom (nav), vanilla-tilt,
  custom-cursor, jquery-numerator, typed-caret ⟨analysis_js.json#files[6].file⟩ —
  **สามตัวหลัง tilt/cursor/headroom โหลดมาแต่ไม่ทำงานบนหน้านี้** (ดู absences ใน `SECTIONS.md`)
- **ไม่มี GSAP/ScrollTrigger เลย** ⟨probe/home_1440.json#libs.gsap⟩ — motion ทั้งหน้าเป็น CSS keyframes + IO + ไลบรารีเล็ก
- **น้ำหนักหน้า (รายงานสามตัวเลขตามข้อบังคับ):** responses 240 ⟨analysis_network_home_1440.json#responses⟩
  · วัดได้ 3,773,013 bytes ≈ 3.6 MB ⟨analysis_network_home_1440.json#measuredBytes⟩
  · วัดไม่ได้ 0 รายการ ⟨analysis_network_home_1440.json#unmeasured⟩ — **ตัวเลขนี้คือ lower bound** (นับเฉพาะที่โหลดระหว่างเซสชันจับ)
  - แยกตามชนิด: ภาพ 128 ไฟล์ 3.06 MB ⟨analysis_network_home_1440.json#byType.image.bytes⟩ (=81% ของทั้งหมด)
    · สคริปต์ 46 ไฟล์ 302 KB ⟨analysis_network_home_1440.json#byType.script.bytes⟩
    · CSS 52 ไฟล์ 181 KB ⟨analysis_network_home_1440.json#byType.stylesheet.bytes⟩
    · ฟอนต์ 8 ไฟล์ 169 KB ⟨analysis_network_home_1440.json#byType.font.bytes⟩
    · เอกสาร 48 KB ⟨analysis_network_home_1440.json#byType.document.bytes⟩
  - ไฟล์หนักสุดคือภาพ webp 247 KB ⟨analysis_network_home_1440.json#heaviest[0].kb⟩ — บทเรียนตรงๆ ว่าน้ำหนักอยู่ที่ภาพ ไม่ใช่โค้ด

## 3. ระบบเลย์เอาต์

- **กลไก:** Elementor flex container (`e-con`) ล้วน — probe ไม่พบ CSS grid ระดับหน้าเลย ⟨probe/home_1440.json#layout.grids⟩
  ทุกอย่างเป็น flex ซ้อนชั้น
- **ความกว้างเนื้อหา:** เต็มจอ 1440 (×45 ครั้ง ⟨probe/home_1440.json#layout.dominantWidths[0].count⟩)
  → คอนเทนเนอร์ **1280px เริ่มที่ x=80** (×27 ⟨probe/home_1440.json#layout.dominantWidths[2].count⟩)
  → คอลัมน์ครึ่ง 472px ⟨probe/home_1440.json#layout.dominantWidths[1].width⟩ และ 708px
  ⟨probe/home_1440.json#layout.dominantWidths[3].width⟩ (คู่ 472+708 = โครง 2 คอลัมน์ ซ้ายแคบ-ขวากว้าง ของ section แบบ sticky)
- **Breakpoints (นับจากไฟล์ CSS):** จุดหลักคือ **767/768px** (×85/×88 ⟨analysis_css.json#breakpoints[1].count⟩
  ⟨analysis_css.json#breakpoints[0].count⟩) และ **1180/1181px** (×40/×20 ⟨analysis_css.json#breakpoints[2].count⟩
  ⟨analysis_css.json#breakpoints[3].count⟩) + 1601px สำหรับจอกว้าง (×15 ⟨analysis_css.json#breakpoints[4].count⟩)
  — สรุปเชิงระบบ: **mobile <768 · tablet 768–1180 · desktop 1181–1600 · widescreen ≥1601**
- **ช่องไฟที่วัดได้จริง:** gutter การ์ด marquee 120px ⟨derived/sections.json#sections[0].repeatGeometry.colGap⟩,
  แถวการ์ด S02 ห่างแนวตั้ง 100px ⟨derived/sections.json#sections[1].repeatGeometry.rowGap⟩,
  ช่องไฟ carousel 80px ⟨derived/widget_settings.json#widgets.cmsmasters-media-carousel[0].settings.slider_space_between.size⟩,
  padding ข้างมาตรฐานของ section = 40px ⟨derived/sections.json#sections[1].padding⟩
- **รัศมีมุม:** โทนเดียวทั้งหน้า 30px เป็นหลัก (×9 ⟨probe/home_1440.json#effects.radii[0].count⟩) รองด้วย 26px ⟨probe/home_1440.json#effects.radii[1].value⟩

## 4. Type scale

**rem basis = 18px** ⟨probe/home_1440.json#doc.rootFontSizePx⟩ (ไม่ใช่ 16 — สำคัญตอนแปลง rem)
· ไม่มี `clamp()` เลย ⟨analysis_css.json#fluidFontSizes⟩ — สเกลตอบสนองทำด้วย media query ล้วน

| px | rem | weight | family | transform | line-height | tracking | บทบาท | พบ |
|---|---|---|---|---|---|---|---|---|
| 140 | 7.78 | 700 | Inter Tight | none | **1.0** | −0.007em | display ยักษ์ (H1/H2 หลัก) | ×4 ⟨derived/typescale.json#rows[0].count⟩ |
| 130 | 7.22 | 700 | Host Grotesk Local | none | 1.2 | 0 | ข้อความ marquee ยักษ์ฉากหลัง | ×1 ⟨probe/home_1440.json#typeScale.rows[1].px⟩ |
| 32 | 1.78 | 400 | **Instrument Serif** | none | 1.2 | 0 | คำ serif แทรกในหัวข้อ (สลับ sans) | ×1 ⟨probe/home_1440.json#typeScale.rows[2].px⟩ |
| 32 | 1.78 | 600 | Inter Tight | none | 1.2 | 0 | หัวข้อรอง | ×1 ⟨probe/home_1440.json#typeScale.rows[3].px⟩ |
| 18 | 1.00 | 400 | Inter | none | 1.45 | 0 | body หลัก | ×3 ⟨derived/typescale.json#rows[1].count⟩ |
| 16 | 0.89 | 400 | Inter | none | 1.6 | 0 | body รอง/คำอธิบาย | ×8 ⟨derived/typescale.json#rows[2].count⟩ |
| 15 | 0.83 | 600 | Inter | **uppercase** | 1.6–1.85 | 0 | ป้ายกำกับ `( LABEL )` | ×8+×5 ⟨derived/typescale.json#rows[3].count⟩ ⟨derived/typescale.json#rows[4].count⟩ |
| 14 | 0.78 | 600 | Inter | uppercase | 1.7 | 0 | ป้ายเล็ก/meta | ×3 ⟨derived/typescale.json#rows[5].count⟩ |

- **ครอบครัวฟอนต์:** Inter (body ×27 ⟨probe/home_1440.json#typeScale.families[0].count⟩) · Inter Tight (display ×5)
  · Instrument Serif (สำเนียง serif แทรก ×1) · Host Grotesk Local (marquee ×1) — โหลดจริง 8 ไฟล์ 169 KB (ดู §2)
- **คาแรกเตอร์ของสเกล:** คอนทราสต์สุดขั้วแบบเดียวกับ xxix — display 140px ชน label 15px แทบไม่มีขั้นกลาง
  (32px เป็นสะพานเดียว) · display อัดแน่น lh 1.0 · ป้าย uppercase ตัวเล็ก tracking ปกติ · จุดเด่นเอกลักษณ์คือ
  **สลับ serif italic กลางประโยค sans** ในหัวข้อใหญ่แทบทุก section
- ⚠️ **ค่าทั้งหมดวัดจากข้อความละติน — ภาษาไทยต้องเผื่อ leading เพิ่ม ~10–20%** สำหรับสระบน/วรรณยุกต์ซ้อน:
  Kanit มี line-height ขั้นต่ำ 1.495 (`--lh-tight: 1.50` คือพื้น) ตามที่วัดไว้ใน `fonts/type.css` แล้ว —
  แปลว่า display lh 1.0 ของธีมนี้**ทำซ้ำตรงๆ ในไทยไม่ได้** ต้องใช้ `--lh-display: 1.3` ของเรา
  และ Anuphan ต้องคูณ `--optical-anuphan: 0.83` เมื่อวางเทียบ Kanit ขนาดเท่ากัน

## 5. พาเลตต์สี

| Hex | บทบาท | ที่มา |
|---|---|---|
| `#111010` | ดำหลัก (secondary token, พื้น section มืด) | ⟨derived/palette.json#rootVarsColor⟩ (`--e-global-color-secondary`) + พื้น ×4 ⟨derived/palette.json#bg[4].count⟩ |
| `#000000` | ดำสนิท (primary token, ปุ่ม/ตัวอักษร) | `--e-global-color-primary` ⟨derived/palette.json#rootVarsColor⟩ |
| `#97FC55` | **เขียวมะนาว — สีลายเซ็นของธีม** (ไฮไลต์/ปุ่ม/ป้าย NEW) | `--e-global-color-accent` ⟨derived/palette.json#rootVarsColor⟩ + พื้น ×5 ⟨derived/palette.json#bg[3].count⟩ + ตัวอักษร ×2 ⟨derived/palette.json#text[3].count⟩ |
| `#545454` | เทาตัวหนังสือรอง | `--e-global-color-text` ⟨derived/palette.json#rootVarsColor⟩ ตัวอักษร ×4 ⟨derived/palette.json#text[2].count⟩ |
| `#8B8A89` | เทาอ่อน (tertiary/ลิงก์ hover) | `--e-global-color-tertiary` ⟨derived/palette.json#rootVarsColor⟩ |
| `#F5F5F5` | เทาจานรอง (พื้น section สว่าง) | พื้น ×6 ⟨derived/palette.json#bg[2].count⟩ |
| `#FFFFFF` / โปร่ง | ขาว/พื้นโปร่ง | ⟨derived/palette.json#bg[0].value⟩ |
| gradient ขาวโปร่ง 0.54 ทับภาพ | ชั้น overlay อ่านตัวหนังสือบนภาพ | ⟨derived/palette.json#gradients[0].value⟩ ×5 |

ระบบสีจริงๆ เรียบมาก: ดำ-ขาว-เทา + เขียวมะนาวตัวเดียวตะโกนทั้งหน้า (ภาพประกอบ/gradient ฉูดฉาดมาจากไฟล์ภาพ ไม่ใช่ CSS)
— แผนที่ตรงมากกับ Plan C ที่เป็น เขียวดำ `#0f1613` / งาช้าง `#F2EFDE` / ทอง `#F0B32E` ตัวเดียว

## 6. คลังเอฟเฟกต์ (อ้าง Table B ใน `SECTIONS.md` — ไม่เล่าซ้ำ)

รวม **21 effect (E01–E62)** จำแนก 7 กลุ่ม + บันทึก "สิ่งที่ไม่มี" 10 รายการ ⟨derived/effects.json#counts.effects⟩

**ภาษา motion ของหน้านี้เป็นแบบ "โบรชัวร์สงบ":** โครงหลักคือ scroll-reveal fade-in-up 1.25s ease ทั้งหน้า
(ตัวเดียวกันทุก widget ต่างแค่ delay 150–700ms) + จุดสนใจต่อเนื่องเบื้องหลังสามชนิด (marquee −45/−75 px/s,
carousel สายพาน 10s, พื้นหลัง hero ลอย ±5%/15s) + hover ที่**ไม่มีการเคลื่อนไหวเชิงเรขาคณิตเลย** —
ทุก hover เป็นการสลับสี (probe ยืนยัน lift 0, scale 1, magnetic 0, tilt 0 ทุกจุด) ยกเว้น
image-scroll (ภาพ pan ในกรอบ) กับ image-accordion (แผงขยาย) · sticky ใช้เนทีฟล้วนไม่มี JS ·
ไม่มี smooth scroll — ทั้งหมดแปลว่า **สร้างซ้ำได้ครบด้วย CSS + IntersectionObserver + rAF ลูปเดียว
โดยไม่ต้องมีไลบรารีสักตัว** ซึ่งตรงกับกติกา zero-dependency ของ Plan C พอดี

## 7. Cheat-sheet สร้างซ้ำ (พอเปิดไฟล์นี้ไฟล์เดียวแล้วสร้างได้)

- **โครงหน้า:** container 1280 กลางจอ (ขอบข้าง 80 ที่ 1440 / padding 40 ใน section) · section สลับพื้น ขาว→เทา `#F5F5F5`→ดำ `#111010` เป็นจังหวะ · มุมโค้ง 30px
- **Breakpoints:** 768 / 1181 / 1601 (ตาม §3)
- **Type:** display 700 lh1.0 ใหญ่สุดขั้ว (140px @1440) + serif italic แทรกกลางประโยค + ป้าย `( LABEL )`
  uppercase 15px/600 + body 16–18px lh1.45–1.6 · rem = 18px — **ไทย: Kanit/Anuphan ตาม `fonts/type.css`, floor lh 1.50**
- **สี:** พื้นสามระดับ (ขาว/เทา/ดำ) + accent สะท้อนแสงตัวเดียวใช้ทุกที่ที่อยากให้กด
- **Motion สูตรสำเร็จ:** ทุกบล็อกเข้าจอ = fade + ขึ้น 60px, 1.25s ease, ลูกไล่ทีละ 200ms ·
  ของวิ่งฉากหลัง = marquee เชิงเส้น ~45–75 px/s สำเนา 2 ชุด · sticky column: top 40px ·
  parallax = translateY เชิงเส้น (speed×100px ต่อการผ่านจอ) · hover = เปลี่ยนสีใน 0.3s ไม่ขยับตำแหน่ง ·
  ปุ่มลอย fixed โผล่ช่วง 10–20% ของหน้า ด้วย cubic-bezier(0.39,−0.06,0.54,1.17)
- **สิ่งที่ไม่ต้องสร้างเพราะต้นฉบับก็ไม่มี:** custom cursor, smooth scroll, WebGL, split-text, magnetic, grain

## 8. ย่อหน้าเปรียบเทียบเดโมรอง `/main/` (ตาม BRIEF §3.3 — หนึ่งย่อหน้าจบ)

เดโมเอเจนซี่จริง (`out-main/`, title "Main Demo" ⟨../out-main/probe/main_1440.json#title⟩) ใช้สแต็คเดียวกันเป๊ะ
(Swiper + anime + jQuery, ไม่มี GSAP ⟨../out-main/probe/main_1440.json#libs.gsap⟩, rem 18px เท่ากัน) แต่โทนต่าง:
display อัดใหญ่ถึง 200px ⟨../out-main/probe/main_1440.json#typeScale.rows[0].px⟩ กับ serif 38px, มี **วิดีโอ 1 ตัว**
⟨../out-main/probe/main_1440.json#effects.videos[0].tag⟩ และ scroll sweep พบ pinned 11 + parallax-fast 12
⟨../out-main/analysis_scroll_main_1440.json#pinned[10].kind⟩ ⟨../out-main/analysis_scroll_main_1440.json#parallaxFast[11].kind⟩
(เร็วกว่า scroll — คนละภาษากับหน้า landing ที่มีแต่ parallax ช้า) และมีสีน้ำเงิน `rgb(50,91,255)`
⟨../out-main/probe/main_1440.json#color.bg[4].value⟩ โผล่เป็น accent — ข้อควรระวังไว้อ่านตัวเลขนี้:
pickSections ของ `/main/` fallback เป็น tall-children ได้แค่ 4 section ⟨../out-main/probe/main_1440.json#sections[3].sid⟩
ถ้าวันหน้าจะยกให้เป็นตัวหลักต้องแก้ `pickSections()` ก่อนหนึ่งรอบ — ตัวเลขฝั่ง `/main/` ทั้งหมดในย่อหน้านี้เป็นระดับ
"ตัวชี้ทิศ" ไม่ใช่ค่าที่ใช้สร้าง

---

## ผลรัน `check_citations.mjs` (ข้อบังคับ §4.4)

```
$ node research/pixelcraft/scripts/check_citations.mjs research/pixelcraft/FINDINGS.md
OK L12 ⟨_capture_meta.json#startedAt⟩ = "2026-08-01T08:43:51.777Z"
OK L13 ⟨_capture_meta.json#playwright⟩ = "1.62.1"
OK L13 ⟨_capture_meta.json#chromium⟩ = "150.0.7871.187"
OK L15 ⟨_capture_meta.json#flags⟩ = ["--url","https://pixel-craft.cmsmasters.studio/"]
OK L16 ⟨_capture_meta.json#notCaptured⟩ = []
OK L16 ⟨_capture_meta.json#warnings⟩ = []
OK L21 ⟨derived/sections.json#note390⟩ = "home_390 probe found 24 sections vs 25 at 1440; height390 matched by array inde
OK L22 ⟨effects/parallax_S17_speed1_retry.json#fit.verdict⟩ = "no measurable animated channel — the element may just be in normal flow, or the
OK L26 ⟨probe/home_1440.json#themeHints[0].name⟩ = "pixel-craft"
OK L27 ⟨probe/home_1440.json#themeHints[3].ver⟩ = "1.25.1"
OK L28 ⟨probe/home_1440.json#libs.jQuery⟩ = "3.7.1"
OK L29 ⟨probe/home_1440.json#libs.Swiper⟩ = true
OK L30 ⟨analysis_js.json#files[6].file⟩ = "19_basicScroll.min.js"
OK L32 ⟨probe/home_1440.json#libs.gsap⟩ = false
OK L33 ⟨analysis_network_home_1440.json#responses⟩ = 240
OK L34 ⟨analysis_network_home_1440.json#measuredBytes⟩ = 3773013
OK L35 ⟨analysis_network_home_1440.json#unmeasured⟩ = 0
OK L36 ⟨analysis_network_home_1440.json#byType.image.bytes⟩ = 3059939
OK L37 ⟨analysis_network_home_1440.json#byType.script.bytes⟩ = 302075
OK L38 ⟨analysis_network_home_1440.json#byType.stylesheet.bytes⟩ = 180790
OK L39 ⟨analysis_network_home_1440.json#byType.font.bytes⟩ = 168728
OK L40 ⟨analysis_network_home_1440.json#byType.document.bytes⟩ = 48115
OK L41 ⟨analysis_network_home_1440.json#heaviest[0].kb⟩ = 247
OK L45 ⟨probe/home_1440.json#layout.grids⟩ = []
OK L47 ⟨probe/home_1440.json#layout.dominantWidths[0].count⟩ = 45
OK L48 ⟨probe/home_1440.json#layout.dominantWidths[2].count⟩ = 27
OK L49 ⟨probe/home_1440.json#layout.dominantWidths[1].width⟩ = 472
OK L50 ⟨probe/home_1440.json#layout.dominantWidths[3].width⟩ = 708
OK L51 ⟨analysis_css.json#breakpoints[1].count⟩ = 85
OK L52 ⟨analysis_css.json#breakpoints[0].count⟩ = 88
OK L52 ⟨analysis_css.json#breakpoints[2].count⟩ = 40
OK L53 ⟨analysis_css.json#breakpoints[3].count⟩ = 20
OK L53 ⟨analysis_css.json#breakpoints[4].count⟩ = 15
OK L55 ⟨derived/sections.json#sections[0].repeatGeometry.colGap⟩ = 120
OK L56 ⟨derived/sections.json#sections[1].repeatGeometry.rowGap⟩ = 100
OK L57 ⟨derived/widget_settings.json#widgets.cmsmasters-media-carousel[0].settings.slider_space_between.size⟩ = 80
OK L58 ⟨derived/sections.json#sections[1].padding⟩ = "0px 40px 0px 40px"
OK L59 ⟨probe/home_1440.json#effects.radii[0].count⟩ = 9
OK L59 ⟨probe/home_1440.json#effects.radii[1].value⟩ = "26px"
OK L63 ⟨probe/home_1440.json#doc.rootFontSizePx⟩ = 18
OK L64 ⟨analysis_css.json#fluidFontSizes⟩ = []
OK L68 ⟨derived/typescale.json#rows[0].count⟩ = 4
OK L69 ⟨probe/home_1440.json#typeScale.rows[1].px⟩ = 130
OK L70 ⟨probe/home_1440.json#typeScale.rows[2].px⟩ = 32
OK L71 ⟨probe/home_1440.json#typeScale.rows[3].px⟩ = 32
OK L72 ⟨derived/typescale.json#rows[1].count⟩ = 3
OK L73 ⟨derived/typescale.json#rows[2].count⟩ = 8
OK L74 ⟨derived/typescale.json#rows[3].count⟩ = 8
OK L74 ⟨derived/typescale.json#rows[4].count⟩ = 5
OK L75 ⟨derived/typescale.json#rows[5].count⟩ = 3
OK L77 ⟨probe/home_1440.json#typeScale.families[0].count⟩ = 27
OK L91 ⟨derived/palette.json#rootVarsColor⟩ = {"--cmsmasters-colors-primary":"var(--e-global-color-primary,#000)","--cmsmaster
OK L91 ⟨derived/palette.json#bg[4].count⟩ = 4
OK L92 ⟨derived/palette.json#rootVarsColor⟩ = {"--cmsmasters-colors-primary":"var(--e-global-color-primary,#000)","--cmsmaster
OK L93 ⟨derived/palette.json#rootVarsColor⟩ = {"--cmsmasters-colors-primary":"var(--e-global-color-primary,#000)","--cmsmaster
OK L93 ⟨derived/palette.json#bg[3].count⟩ = 5
OK L93 ⟨derived/palette.json#text[3].count⟩ = 2
OK L94 ⟨derived/palette.json#rootVarsColor⟩ = {"--cmsmasters-colors-primary":"var(--e-global-color-primary,#000)","--cmsmaster
OK L94 ⟨derived/palette.json#text[2].count⟩ = 4
OK L95 ⟨derived/palette.json#rootVarsColor⟩ = {"--cmsmasters-colors-primary":"var(--e-global-color-primary,#000)","--cmsmaster
OK L96 ⟨derived/palette.json#bg[2].count⟩ = 6
OK L97 ⟨derived/palette.json#bg[0].value⟩ = "rgba(255,255,255,0)"
OK L98 ⟨derived/palette.json#gradients[0].value⟩ = "linear-gradient(rgba(255, 255, 255, 0.54), rgba(255, 255, 255, 0.54))"
OK L105 ⟨derived/effects.json#counts.effects⟩ = 21
OK L130 ⟨../out-main/probe/main_1440.json#title⟩ = "Main Demo"
OK L131 ⟨../out-main/probe/main_1440.json#libs.gsap⟩ = false
OK L132 ⟨../out-main/probe/main_1440.json#typeScale.rows[0].px⟩ = 200
OK L133 ⟨../out-main/probe/main_1440.json#effects.videos[0].tag⟩ = "video"
OK L134 ⟨../out-main/analysis_scroll_main_1440.json#pinned[10].kind⟩ = "pinned"
OK L134 ⟨../out-main/analysis_scroll_main_1440.json#parallaxFast[11].kind⟩ = "parallax-fast"
OK L136 ⟨../out-main/probe/main_1440.json#color.bg[4].value⟩ = "rgb(50,91,255)"
OK L137 ⟨../out-main/probe/main_1440.json#sections[3].sid⟩ = "S04"

72 citations, 0 failed
```
