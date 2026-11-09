# REPORT — Pixel Craft teardown → Plan C skeleton (จบรัน 2026-08-01)

## 1. จับเดโมไหน ทำไม

`https://pixel-craft.cmsmasters.studio/` (หน้า landing หลักของธีม) ตาม BRIEF §3.1a — ระหว่างรันพบว่า
หน้านี้เป็น**หน้า landing ขายธีมของ CMSMasters** ไม่ใช่เดโมเอเจนซี่ (`/main/`) จึงหยุดถามเจ้าของงาน
**มติเจ้าของงาน (แชท 2026-08-01): "เอาตามเดิมมาก่อน ค่อยมาขยับเพิ่มลดกันทีหลัง"** — ใช้หน้า root เป็นหลัก
และเก็บ `/main/` (deep capture ลง `out-main/`) เป็นตัวรองสำหรับย่อหน้าเทียบใน FINDINGS §8 เท่านั้น

## 2. ตัวเลขรวม

| อะไร | เท่าไหร่ |
|---|---|
| Section ที่พบ (probe 1440) | **25** (+S00 header) — สร้างครบทุกตัว |
| Effect ที่ catalog | **21** (E01–E62) + บันทึกสิ่งที่ไม่มี 10 รายการ |
| Effect ที่สร้าง | **21/21** — `implemented: true` 17 · `partial` 4 (E30 E31 E41 E61 — ค่าที่วัดไม่ได้เลือกเองแบบประกาศ + จูนได้ใน `?debug`) · `false` 0 |
| Token placeholder | 287 ช่อง (ไม่ซ้ำ ตรวจสองทางผ่าน) |
| probe-effect รัน | 20 ครั้ง (marquee ×5, sticky ×3, parallax ×5, hover ×4, time ×1, scroll-อื่น ×2) |
| Citation ในเอกสาร | SECTIONS.md 200 + FINDINGS.md 72 — **0 failed ทั้งคู่** |
| JS runtime ของ skeleton | 16.4 KB (งบ 25) — ไลบรารี 0 ตัว |

## 3. ตาราง "not worth it" — ไม่มี

ทุก effect ในหน้านี้สร้างด้วยมือได้จริง (Table B คอลัมน์ "สร้างเองด้วยมือ?" = yes ทั้ง 21) —
ธีมนี้ไม่ใช้ GSAP/WebGL/สมูทสกรอลเลย ของที่ out-of-scope โดยชนิด (ตาราง §6.6 ของ BRIEF) ไม่มีตัวไหน
ปรากฏบนหน้าที่จับ ยกเว้นที่ธีมโหลด JS ไว้เฉยๆ โดยไม่ใช้ (cursor / tilt / headroom) ซึ่งบันทึกเป็น absence
ไม่ใช่ effect

## 4. Needs a decision — เจ้าของงานตัดสินรายแถว

| Effect | วัดได้ | วัดไม่ได้ | อะไรจะทำให้จบ | ที่ ship ไปตอนนี้ |
|---|---|---|---|---|
| E30 highlight-title | keyframes มีจริง, จุด trigger | duration (one-shot ยิงครั้งเดียว) | เลือกค่าที่ชอบใน `?debug` แล้วบอกเลข หรือหา reference อื่นที่วัด duration ได้ | partial — 0.6s จูนได้ |
| E31 typed rotator | delay ระหว่างคำ 2500ms, loop | ms/ตัวอักษร (ไม่ serialize) | เลือกใน `?debug` (หรือคงคำแนะนำ "ตัด" จาก 3/3) | partial — 60ms/grapheme + Segmenter ไทย |
| E41 image pan | ทิศ vertical, trigger hover | ความเร็ว pan (ตัวขยับคือ img ลูก) | เลือกใน `?debug` หรือ probe เพิ่มที่ img โดยตรง (ยังไม่ทำ — เกิน 2 attempts/effect ไม่คุ้ม) | partial — 6s เต็มช่วง จูนได้ |
| E61 timed popup | trigger id 50, มี close, fixed เต็มจอ | หน่วยของค่า `start_popup: 200` | เทียบเวลาจริงบนเดโมด้วยนาฬิกา (ยังไม่ทำ — ต้องเฝ้าหน้า ~นาที) หรือกำหนดเอง | partial — 20s จูนได้ |
| E11 บน S17 | กลไก+กฎ speed×100px (จาก S05) | สอง element ของ S17 นิ่งสนิท 2 ครั้ง | ลอง probe ด้วย viewport สูงกว่า หรือยอมรับว่า element นั้นปิดบน desktop | สร้างด้วยค่าที่วัดจาก S05 |
| E20 ระยะ reveal | duration 1.25s + ease | ระยะ px ของบล็อกทั่วไป (one-shot) | ยอมรับ 60px (ค่าที่ธีม serialize บน fancy-text) หรือเลือกใหม่ | partial-distance — 60px ประกาศที่มาแล้ว |
| ความสูง S11/S15 | โครง+จำนวนบล็อก | ความสูงจริง (ค่า probe เป็น pre-lazy lower bound — ภาพจริง S11 สูง 2775px) | ไม่มีอะไรต้องทำ นอกจากรู้ว่า ±10% เทียบกับ lower bound | สร้างตามเนื้อหา (+47%/+56% อธิบายใน skeleton/README) |

## 5. อะไรพัง/สะดุดบ้าง (และจบยังไง)

- **probe-effect marquee mode วัดนอกจอได้ 0 px/s** — เพิ่ม flag `--scrollto` ในเครื่องมือ (แก้ 6 บรรทัด) แล้ววัดใหม่สำเร็จ
- **S17 parallax นิ่ง 2 ครั้ง** — บันทึกเป็น not measured ตาม rule 6 (ไม่ grind ต่อ)
- **บั๊กของผมเองตอน P6 ที่ selfcheck จับได้:** popup `hidden` โดน `display:grid` ทับ (คลิกทะลุไม่ได้ทั้งหน้า) ·
  marquee track ดัน hero หลุดจอไปขวา 3,232px แบบมองไม่เห็น (grid max-content) — สองตัวนี้คือเหตุผลที่ P7 มีจริง
- ตัว selfcheck เองต้องแก้ 3 รอบ (jump-scroll ไม่ยิง IO ให้ element ที่ถูกข้าม, จังหวะ sample ชนช่วงพักของ typed, burger มีเฉพาะจอเล็ก)
- ไม่มีการ HALT ใดๆ ตลอดรัน

## 6. ผลรันดิบ (ตามข้อบังคับ)

### selfcheck.mjs (รันซ้ำหลังแก้ครบ — exit 0)

```
1-console: PASS — 0 console errors
2-sections: PASS — 26 sections S00..S25 in order
3-tokens: PASS — ALL TOKEN CHECKS PASS
   S    expected  actual  %diff  within±10%
   S01     1176    1176       0  yes
   S02     2206    2206       0  yes
   S03     2148    2148       0  yes
   S04      583     583     0.1  yes
   S05      671     671       0  yes
   S06      520     520       0  yes
   S07     1019    1019       0  yes
   S08      905     965     6.7  yes
   S09      403     436     8.1  yes
   S10      610     659     8.1  yes
   S11     1108    1634    47.4  NO
   S12      812     820       1  yes
   S13      486     527     8.5  yes
   S14      584     606     3.7  yes
   S15      857    1337      56  NO
   S16      800     800       0  yes
   S17      860     860       0  yes
   S18     1886    1886       0  yes
   S19      965     965       0  yes
   S20      861     861       0  yes
   S21     1905    1905       0  yes
   S22     1071    1071       0  yes
   S23     1149    1149       0  yes
   S24      356     356     0.1  yes
   S25     1007    1007       0  yes
4-heights: NOTE — 23/25 within ±10%; 2 outside (not an automatic fail per §7.4 — explanations in skeleton/README.md)
5-external-urls: PASS — no external URLs (licence texts + provenance strings + localhost whitelisted — nothing external is fetched)
6-no-theme-code: PASS — 10 sampled selectors (.skip .center .hl-host .burger .marquee .show-meta .conveyor .acc .tgllist .priceitem) absent from out/css/
   E    stimulus  MOVED?
   E10  scroll   yes
   E11  scroll   yes
   E12  scroll   yes
   E20  scroll   yes
   E21  scroll   yes
   E30  scroll   yes
   E32  scroll   yes
   E33  time     yes
   E50  time     yes
   E52  time     yes
   E31  time     yes
   E61  timer    yes
   E22  hover    yes
   E40  hover    yes
   E41  hover    yes
   E42  hover    yes
   E51  click    yes
   E62  click    yes
7-motion: PASS — all 18 effects respond (computed values, not screenshots)
8-overflow: PASS — no horizontal overflow at 360/768/1440
js-budget: PASS — runtime JS 16.4 KB (< 25 KB)

ALL CHECKS PASS
wrote out/derived/selfcheck.json
```

### check_citations.mjs

```
SECTIONS.md → 200 citations, 0 failed   (ผลเต็มแปะท้าย SECTIONS.md)
FINDINGS.md →  72 citations, 0 failed   (ผลเต็มแปะท้าย FINDINGS.md)
```

## 7. ไฟล์ที่แตะนอก `research/pixelcraft/`

| ไฟล์ | อะไร |
|---|---|
| `HANDOFF-plan-c.md` | **ผนวกท้ายไฟล์** (ข้อยกเว้น append-only ตาม BRIEF §8) — บันทึกว่างานนี้คืออะไร อยู่ไหน สถานะอะไร |
| `.gitignore` | **ไม่ได้แตะ** — 4 บรรทัด `out*/…` มีอยู่แล้วจากรอบก่อน |
| scratchpad (นอก repo) | ภาพ screenshot 2 ไฟล์ที่ส่งในแชท |

ไม่มีไฟล์อื่นนอก scope ถูกเขียน · `git status` ยืนยันไม่มีไฟล์ใต้ `out*/shots|dom|css|js` เข้า git
(gitignore ครอบ `out-main/` ด้วยแพทเทิร์น `out*/`)

## 8. สถานะส่งมอบ

- ✅ P1–P8 ครบ ทุก gate ผ่าน (`_state.json` = P8 done · ลำดับเหตุการณ์เต็มใน `RUN-LOG.md`)
- ✅ `SECTIONS.md` `FINDINGS.md` `CONTENT-MAP.md` `skeleton/` (รัน `node skeleton/serve.cjs` → :8123)
- รอเจ้าของงาน: เดินดู skeleton เต็มๆ → ตัดสิน "Plan C content" รายช่อง + แถว Needs-a-decision ข้างบน
