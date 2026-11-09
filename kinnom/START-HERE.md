# กินหนม (kinnom.co) — ย้ายเครื่อง: เริ่มที่นี่

แพ็กเกจนี้ทำเมื่อ 9 พ.ย. 2026 ก่อน Mat ย้ายคอม มีทุกอย่างของงานเว็บกินหนมที่ทำกับ Claude Code

## ในแพ็กเกจมีอะไร
`kinnom-everything.zip` ข้างในมี 2 โฟลเดอร์:
1. `kinnom/` — งานทั้งหมด: สคริปต์, toolkit, ข้อมูลที่ export จาก Cowork (`work/`), สถานะ (`state/`),
   และ **`recat/apply-log.jsonl` = ค่าหมวดเดิมของ 1,490 โพสต์ ใช้คืนค่าได้ ห้ามหาย**
2. `claude-project-data/` — ความจำของ Claude (`memory/`) + ประวัติแชทนี้ (`c05b5a08-….jsonl` และโฟลเดอร์ชื่อเดียวกัน)

## วิธีตั้งบนเครื่องใหม่ (Mat ทำ)
1. ลง Node.js (เวอร์ชัน 24 ขึ้นไป), Python 3.10+, และ Claude desktop app
2. แตก zip แล้ววาง:
   - `kinnom/` → `Z:\Claude Code\kinnom\` (ใช้ path เดิมถ้าทำได้)
   - `claude-project-data/*` → `C:\Users\<ชื่อผู้ใช้>\.claude\projects\Z--Claude-Code\`
     (ถ้าโปรเจกต์ไม่ได้อยู่ที่ `Z:\Claude Code` ชื่อโฟลเดอร์นี้จะต่างไป — ข้ามได้ Claude อ่านข้อ 3 แทนได้)
3. เปิด Claude Code ในโฟลเดอร์ `Z:\Claude Code` แล้วพิมพ์:

   > อ่าน kinnom/docs/HANDOFF.md, kinnom/CLAUDE.md, kinnom/docs/BACKLOG.md แล้วทำงานเว็บกินหนมต่อ

4. เปิด Chrome ล็อกอิน kinnom.co/wp-admin ไว้ (toolkit ใน Chrome เครื่องเก่าไม่ย้ายมาเอง — Claude สร้างใส่ให้ใหม่ได้)

## ถึง Claude ที่อ่านไฟล์นี้
อ่านตามลำดับ: `kinnom/docs/HANDOFF.md` (สถานะล่าสุด + เช็กลิสต์เครื่องใหม่) → `kinnom/CLAUDE.md` (กฎเหล็กของ Mat, โครงสร้าง, คำสั่ง)
→ `kinnom/docs/BACKLOG.md` (งานที่เหลือจริง ตรวจกับเว็บแล้ว) → `kinnom/docs/PHASES.md`.
ถ้า memory ไม่ถูกโหลดอัตโนมัติ ให้อ่าน `claude-project-data/memory/kinnom-backfill-project.md` ด้วย
ก่อนแตะเว็บ: รัน `node kn/node/selftest.mjs` (ต้อง 56/56) และ `node --test "kn/test/*.test.mjs"` (11/11)
เรื่องที่รอ Mat ตัดสิน: (1) แก้บั๊ก `categories:[12]` (2) ธ.ค. 2023 ให้ Cowork หรือระบบนี้อัป — อย่าเริ่มเองก่อนได้คำตอบ
อย่าเลือกเดือนจาก `work/*-items.tsv` (ค้างตั้งแต่ 17 ก.ย.) ให้นับโพสต์บนเว็บจริงก่อนเสมอ
