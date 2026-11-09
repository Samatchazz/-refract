# กินหนม (kinnom.co) — ย้ายเครื่อง

## Mat ทำแค่นี้
1. ดาวน์โหลดโฟลเดอร์ `kinnom-handoff` นี้จาก Google Drive มาไว้ที่ไหนก็ได้ในเครื่องใหม่
2. เปิด Claude Code ในโฟลเดอร์นี้ แล้วพิมพ์:

> อ่าน START-HERE.md แล้วจัดการให้หมด

ที่เหลือ Claude ทำเอง ถ้ามีอะไรต้องให้ Mat กด (ติดตั้งโปรแกรม, ล็อกอิน) Claude จะบอกทีละขั้น

---

## ถึง Claude — ทำตามนี้ตามลำดับ

1. **ติดตั้งของ** ถ้ายังไม่มี: Node.js 24+, Python 3.10+ (พร้อม `pip install pillow`). ขอ Mat ก่อนติดตั้ง (เช่น `winget install OpenJS.NodeJS` / `winget install Python.Python.3.12`)
2. **วางไฟล์**: รัน `powershell -ExecutionPolicy Bypass -File setup.ps1` ในโฟลเดอร์นี้
   - แตก `kinnom-everything.zip` → `Z:\Claude Code\kinnom` (ถ้าไม่มีไดรฟ์ Z: → `%USERPROFILE%\Claude Code\kinnom`)
   - ใส่ความจำของ Claude + ประวัติแชทเก่าเข้า `~/.claude/projects/<ชื่อตาม path>/` (ไม่ทับของที่มีอยู่)
   - รันซ้ำได้ ไม่ลบอะไร · ทดสอบแล้วบนเครื่องเก่า: ไฟล์ออกมาครบตรงต้นฉบับ
3. **บอก Mat** ให้เปิด Claude Code ใหม่ในโฟลเดอร์ที่ setup บอก (เช่น `Z:\Claude Code`) เพื่อให้ความจำโหลด — ถ้าไม่สะดวก ทำต่อในแชทนี้ได้
   โดยอ่าน `kinnom/docs/HANDOFF.md` → `kinnom/CLAUDE.md` → `kinnom/docs/BACKLOG.md` → `kinnom/docs/PHASES.md`
   และ memory `kinnom-backfill-project.md`
4. **ตรวจว่าใช้ได้**: ใน `kinnom/` รัน `node kn/node/selftest.mjs` (ต้องได้ 56/56) และ `node --test "kn/test/*.test.mjs"` (11/11)
5. **Chrome**: Mat ล็อกอิน kinnom.co/wp-admin · toolkit ใน localStorage ไม่ได้ย้ายมา — ถ้าไม่มี ให้โหลด
   `kinnom/kn/node/toolkit/kntk-4.1.11.js` ใส่ localStorage `kntk` (ตรวจ sha256 กับไฟล์ข้างกัน) แล้วรัน `node kn/node/preflight.mjs`
6. **สรุปให้ Mat** แบบง่าย ๆ ว่าพร้อมแล้ว และถามเรื่องที่ค้างอยู่:
   (1) แก้บั๊ก `categories:[12]` เลยไหม (2) ธ.ค. 2023 ให้ Cowork หรือระบบนี้อัป
   **อย่าแตะเว็บก่อนได้คำตอบ** และอย่าเลือกเดือนจาก `work/*-items.tsv` (ค้างตั้งแต่ 17 ก.ย.) — นับโพสต์บนเว็บจริงก่อนเสมอ

ข้อมูลใน zip มี caption และชื่อคนในทีม — เก็บใน Drive ส่วนตัว ห้ามแชร์ลิงก์
`kinnom/recat/apply-log.jsonl` = ค่าหมวดเดิมของ 1,490 โพสต์ (ใช้ย้อนกลับ) ห้ามลบ
