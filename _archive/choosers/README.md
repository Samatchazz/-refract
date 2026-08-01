# หน้าเลือกตัวเลือกรุ่นเก่า — ย้ายมาเก็บ 27 ก.ค. 2026

ทั้งหมดถูกดูดเข้า **`research/console/`** (Console v3) แล้ว ไม่ต้องเปิดหน้าพวกนี้อีก
เก็บไว้เผื่อย้อนดูเท่านั้น — ไม่ลบ

| ไฟล์เดิม | เคยให้เลือกอะไร | ตอนนี้อยู่ที่ไหน |
|---|---|---|
| `planc0/research/DECISION-CONSOLE.html` | 16 component · 94 ตัวเลือก · 3 tier | Console v3 แผง 4 |
| `planc0/research/FONT-LAB.html` | ฟอนต์ไทย A/B · สระซ้อน · อัปโหลดเอง | Console v3 แผง 3 |
| `planc0/palette-preview.html` | โลกสี M0–M4 | Console v3 แผง 2 (13 โลก ครบกว่าเดิม) |
| `planc0/research/options-gallery.html` | แกลเลอรีตัวเลือกรุ่นแรก | ถูกแทนที่ตั้งแต่ console v2 |
| `planc-web/tools/lab.html` | ห้องทดลอง motion | Console v3 แผง 5 |
| `griflan-mirror/plan-c/design-board.html` | ทิศทางธีม → สี/ฟอนต์ | Console v3 แผง 2–3 |
| `griflan-mirror/plan-c/theme-mockups.html` | 3 ธีม ภาพนิ่ง | เลิกใช้ — มาจากโปรเจกต์ griflan ที่หยุดแล้ว |
| `griflan-mirror/fontcompare/index.html` | ฟอนต์จาก thaifaces | Console v3 แผง 3 |

## ที่ไม่ได้ย้าย และทำไม

- **`planc0/research/console2-data.js`** — ยังอยู่ที่เดิม เพราะ Console v3 อ่านข้อมูล 94 ตัวเลือกจากไฟล์นี้
  (`research/console/build-data.mjs` แปลงเป็น `data/options.json`)
- **`research/northstar/decide.html`** — ยังอยู่ เพราะเป็นเวอร์ชันที่เผยแพร่เป็น artifact ให้ลูกค้าดูได้จากที่อื่น
  Console v3 เป็นเวอร์ชันเต็มสำหรับใช้งานในเครื่อง ทั้งคู่อ่านตัวเลขจาก `research/northstar/measurements.json` ชุดเดียวกัน
- **ไฟล์ `.md` ทั้งหมดใน `planc0/research/`** — ยังอยู่ เพราะ Console v3 ดึงส่วนที่ไม่ขึ้นกับตัวเลือก
  (โครงหน้า · กฎไทย · กฎเหล็ก · สถาปัตยกรรม · DoD) จาก `BUILD-BRIEF-FINAL.md` ไปประกอบใน prompt
