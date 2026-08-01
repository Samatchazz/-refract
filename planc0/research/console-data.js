/* PlanC decision console — data + pure logic (shared with the HTML console).
   Kept as a separate file ONLY for testing; the shipped console inlines this. */
const WORLDS = {
  M0: { name: 'The Table', bg: '#181616', bg2: '#0f1613', fg: '#FFFDDB', fg2: '#F2EFDE', ac1: '#F0B32E', ac2: '#FF3831', dark: true },
  M1: { name: 'Ink & Paper', bg: '#fcfcfa', bg2: '#111111', fg: '#111111', fg2: '#4a4a48', ac1: '', ac2: '', dark: false },
  M2: { name: 'Signal', bg: '#1a1a1a', bg2: '#141414', fg: '#ffffff', fg2: '#9a9a9a', ac1: '#ff3928', ac2: '', dark: true },
  M3: { name: 'Midnight Storybook', bg: '#000818', bg2: '#00040e', fg: '#F2EFDE', fg2: '#a8b0c0', ac1: '#FFDA59', ac2: '', dark: true },
  M4: { name: 'Playground', bg: '#ffffff', bg2: '#f4f9fc', fg: '#111111', fg2: '#555555', ac1: '#2779a7', ac2: '#FF9398', dark: false },
};

const COMPS = [
  { key: 'M', tier: 1, name: 'M — COLOR WORLD', sub: 'โทนสีทั้งเว็บ (ยังไม่ตัดสินใจ) — กดดูได้เลย หน้านี้จะเปลี่ยนสีตามที่เลือก' },
  { key: 'A', tier: 1, name: 'A — Type-first HERO', sub: 'หน้าแรกที่ type คือพระเอก' },
  { key: 'B', tier: 1, name: 'B — Global SCROLL EXPERIENCE', sub: 'ฟิสิกส์ของทั้งหน้า' },
  { key: 'C', tier: 1, name: 'C — Page-wide WORDPLAY', sub: 'ระบบเล่นคำ (ต้องผ่าน MEANING test)' },
  { key: 'D', tier: 1, name: 'D — SECTION TRANSITIONS', sub: 'เครื่องจักรความ seamless' },
  { key: 'E', tier: 2, name: 'E — Manifesto scroll-reveal', sub: 'ถ้อยแถลงที่เผยตาม scroll' },
  { key: 'F', tier: 2, name: 'F — Services (3 pillars)', sub: 'EXTRACT / ENGINEER / ESTABLISH' },
  { key: 'G', tier: 2, name: 'G — Founder credibility', sub: 'อินฟลูตัวจริง ไม่ใช่นักทฤษฎี' },
  { key: 'H', tier: 2, name: 'H — Big CTA + footer', sub: 'จบทั้งหน้าให้จำ' },
  { key: 'I', tier: 3, name: 'I — Preloader', sub: 'วินาทีแรก' },
  { key: 'J', tier: 3, name: 'J — Nav + mobile menu', sub: 'เรียบ แต่มีลายเซ็น' },
  { key: 'K', tier: 3, name: 'K — Social proof strip', sub: 'หลักฐาน 5 วินาที' },
  { key: 'L', tier: 3, name: 'L — Cursor / touch feedback', sub: 'สัมผัสสุดท้ายของบุคลิก' },
];

const OPTS = [
  // M
  { id: 'M0', c: 'M', site: 'Previous PlanC — "The Table"', url: '', what: 'เขียวโต๊ะโป๊กเกอร์ + ivory + ทอง + แดง — ประเมินตรงๆ: EVOLVE (เก็บทุก hex เพิ่มกติกา: ทองห้ามอยู่บน ivory เพราะ AA fail 1.82)', m: 'dark:light ~70:30 และสลับ world เฉพาะตอนข้าม section', b: 'POKER — เปิดเรื่องบนโต๊ะ ทองโผล่หลังผ่าน services เท่านั้น (ยังไม่เห็นชิปจนเล่นมือจบ) แดงมีหน้าที่เดียว: สีของทุกอย่างที่คุณเลิกเป็น', s: 28, star: 1, sw: ['#181616', '#0f1613', '#FFFDDB', '#F2EFDE', '#F0B32E', '#FF3831'] },
  { id: 'M1', c: 'M', site: 'Henri Heymans — "Ink & Paper"', url: 'https://henriheymans.com', what: 'ขาวดำเคร่งครัด ไม่มี accent เลย ลำดับชั้นด้วยน้ำหนัก/ขนาด (AA 18.38 ทุกคู่)', m: 'จาก light ตลอด → กลับด้านเต็มจอ 2 ครั้งเป็นโครงเรื่อง (มืด-สว่าง-มืด)', b: 'CAT — แมวดำคือสิ่งเดียวที่ดำสนิทบนหน้ากระดาษ: ชี้จุดสำคัญด้วยแมสคอต ไม่ใช่ด้วยสี', s: 26, sw: ['#111111', '#fcfcfa'] },
  { id: 'M2', c: 'M', site: 'Zajno — "Signal"', url: 'https://zajno.com', what: 'เกือบดำ + ส้มแดงร้อนตัวเดียว (AA 4.86 บนดำ ใช้ได้; บนขาว large-only)', m: 'ต้นฉบับใช้ accent static → ที่นี่สีโผล่เฉพาะใน motion, พักนิ่ง = grayscale ล้วน', b: 'IDENTITY — สีคือเสียงจริง: ทุกจุดที่เสียงตรงๆ โผล่ (C1 reveal, ขีดฆ่า, คำว่า ตัวตน ตอน settle) คือที่เดียวที่มีสี', s: 27, sw: ['#1a1a1a', '#ffffff', '#ff3928'] },
  { id: 'M3', c: 'M', site: 'DeSo — "Midnight Storybook"', url: 'https://www.awwwards.com/sites/deso', what: 'น้ำเงินเที่ยงคืน + ทองอุ่น — contrast สวยสุดในลิสต์ (14.7–20.0 ทุกคู่)', m: 'ทองต้นฉบับกระจายทั้ง UI → บีบเหลือ "เส้นด้ายทอง" เส้นเดียว (tail-line + markers + ตัวเลข)', b: 'CAT — เที่ยงคืนคือกะของแมวดำ: ดวงตา preloader คือทองคู่แรก หลังจากนั้นทอง = สิ่งที่ตาแมวจับ', s: 27, sw: ['#000818', '#F2EFDE', '#FFDA59'] },
  { id: 'M4', c: 'M', site: 'Chungi Yoo — "Playground"', url: 'https://www.chungiyoo.com', what: 'ขาว + teal + coral (coral ห้ามเป็นตัวหนังสือบนขาว 2.13 fail — graphic เท่านั้น)', m: 'จากสีทั้งเว็บ → ขาวถือ ~85% สีเข้าเฉพาะผ่าน interaction/scroll', b: 'GAME — teal/coral = สี P1/P2: teal คือการเดินหมากของระบบ, coral คือการเดินหมากของคุณ', s: 24, sw: ['#ffffff', '#111111', '#2779a7', '#FF9398'] },
  // A
  { id: 'A1', c: 'A', site: 'Exo Ape', url: 'https://www.exoape.com', what: 'สามคำยักษ์ซ้อนกันเต็มจอ + mission line', m: 'เข้าเป็นสเต็ปแบบเกม สลับซ้าย/ขวา ทริกเกอร์จาก preloader ไม่ใช่ scroll', b: 'IDENTITY — คำกลางไล่ลองตัวตนคนอื่น (สายเกม สายบิวตี้…) ขีดฆ่าทีละคำ แล้วหยุดที่ "ตัวตน"', s: 29, star: 1 },
  { id: 'A2', c: 'A', site: 'Aristide Benoist', url: 'https://www.aristidebenoist.com', what: 'Type ยักษ์ condensed นิ่งๆ ทั้งเว็บ JS แค่ 67KB', m: 'ไทยหนาพิเศษ 20vw เข้าแบบ mask-wipe เดียว', b: 'CAT — headline นิ่งเหมือนแมวแกล้งหลับ หางกลิ้กทุก ~7 วิ hover แล้วเอียง 1.5°', s: 27, flag: 'JS shell — motion จาก case pages' },
  { id: 'A3', c: 'A', site: '14islands', url: 'https://www.14islands.com', what: 'Hero สลับลำดับคำรอบจุด pivot', m: 'สลับตำแหน่งคำรอบแกนตั้ง แล้วล็อก', b: 'GAME — สลับใน 8 เฟรมแบบ sprite + แฟลช 1 เฟรม + ป้าย mono "LV.1 — IDENTITY FOUND"', s: 24, game: 1 },
  { id: 'A4', c: 'A', site: 'Kwok Yin Mak', url: 'https://www.kwokyinmak.com', what: 'เปิดด้วยประโยคยักษ์เต็มจอก่อนเนื้อหาจริง', m: 'ล็อกแนวนอน — gesture แรกของผู้ใช้ปัดประโยคทิ้งทั้งก้อน', b: 'IDENTITY — ประโยคเปิดคือคำถาม "คุณกำลังเป็นใครอยู่?" ให้ผู้ชมปัดตัวตนที่ยืมมาทิ้งเอง', s: 24 },
  // B
  { id: 'B1', c: 'B', site: 'darkroom.engineering (ผู้สร้าง Lenis)', url: 'https://darkroom.engineering', what: 'Lenis smooth scroll — มาตรฐาน buttery scroll ของวงการ', m: 'ลด lerp ให้หน้ารู้สึกหนัก + ส่ง scroll-velocity เป็น CSS var ให้ทุก component ใช้', b: 'CAT — เลื่อนปกติ = แมวเดิน, สะบัดเร็ว = pounce (overshoot แล้ว settle) ทั้งหน้ามีฟิสิกส์แมวเดียวกัน', s: 28, star: 1, ipounce: 1 },
  { id: 'B2', c: 'B', site: 'Locomotive', url: 'https://locomotive.ca/en', what: 'ระบบ parallax/sticky ผ่าน data-attributes', m: 'จำกัด parallax เหลือ 3 ชั้นตายตัว + sticky ปล่อยแบบสเต็ป', b: 'IDENTITY — 3 ชั้นมีความหมาย: เทรนด์ลอยเร็ว/เบลอหลังสุด, ตัวตนขยับช้าสุด — ความลึก = ความถาวร', s: 24 },
  { id: 'B3', c: 'B', site: 'Robin Noguier', url: 'https://robin-noguier.com', what: 'Custom inertia scroll ที่ velocity ไปขับ visual', m: 'velocity บิดตัวหนังสือไม่ใช่รูป — wght ของ variable font หายใจตามความเร็ว', b: 'GAME — HUD bar 8 บล็อกมุมจอ เลื่อนเร็วพอขึ้น TURBO — ใครเลื่อนช้าไม่มีวันเห็น', s: 21, game: 1 },
  { id: 'B4', c: 'B', site: 'DeSo (Studio Freight)', url: 'https://www.awwwards.com/case-study-deso-by-studio-freight.html', what: 'Scrollytelling 7 บท กล้องผูกกับ scroll', m: 'บทเป็น typographic ไม่ใช่ 3D + progress rail แทน camera path', b: 'GAME — บท = ด่าน LV.1/2/3 บน rail + paw stamp ตอนผ่าน checkpoint', s: 26, game: 1, flag: 'deso.studio live = shell; ยึด case study' },
  // C
  { id: 'C1', c: 'C', site: 'Minh Pham', url: 'https://minhpham.design', what: 'ก็อปปี้สองเสียง: ทางการ vs เสียงจริงที่ซ่อนอยู่ เปิดด้วย mask', m: 'มือถือใช้ scroll-mask / tap-hold, mask เป็นเส้นโค้งหาง C ไม่ใช่วงกลม', b: 'IDENTITY — เสียง default = ภาษาการตลาดที่ใครก็พูด, เสียงที่เผย = เสียงจริงตรงๆ — กลไกนี้คือ pitch ของ PlanC เอง', s: 28, star: 1, reveal: 1 },
  { id: 'C2', c: 'C', site: 'Igloo Inc', url: 'https://igloo.inc', what: 'Text scramble/glitch แล้ว settle', m: 'DOM แทน WebGL เล่นครั้งเดียวตอนเข้าจอ quantize 12fps', b: 'IDENTITY — pool เป็นคำของครีเอเตอร์คนอื่น (ปัง/viral/แมส) ลองสวม ขีดฆ่า แล้วจบที่คำจริง (ตัด grapheme ผ่าน Intl.Segmenter เท่านั้น)', s: 25, game: 1 },
  { id: 'C3', c: 'C', site: 'Obys', url: 'https://obys.agency', what: 'Kinetic typography เป็นระบบหลักของเว็บ', m: 'morph เฉพาะตอนข้าม section + แกนตั้งเท่านั้น (สระบนล่างห้ามบีบแนวนอน)', b: 'CAT — สิ่งเดียวที่ขยับตลอด = เส้นใต้หัวข้อที่ลากตาม scroll เหมือนหางตามแมว สะบัดตอน scroll กลับ', s: 22 },
  { id: 'C4', c: 'C', site: 'Locomotive', url: 'https://locomotive.ca/en', what: 'Letter-shuffle + glyph ของ custom typeface เป็น identity', m: 'ไม่มี custom font: shuffle เฉพาะคำ EN mono ผ่าน 3 น้ำหนักของคำเดิม', b: 'POKER — ป้าย EXTRACT/ENGINEER/ESTABLISH แจกเหมือนไพ่: คว่ำแล้วเปิดหน้าไพ่ตอน reveal ใช้ ≤4 ครั้ง', s: 23 },
  // D
  { id: 'D1', c: 'D', site: 'Exo Ape', url: 'https://www.exoape.com', what: 'Transition ที่มี element ถูกพาข้ามให้รู้สึกต่อเนื่อง + sense of direction', m: 'สิ่งที่พาข้ามคือเส้นเดียว: underline ของ section นี้โค้งเป็นเส้นบนของ section หน้า สลับทิศทุก boundary', b: 'CAT — เส้นนั้นคือหางแมว วิ่งตาม curve ของโลโก้ C ทั้งเว็บ และมี 2 จุดที่หาง pounce พาสายตาข้ามรอยต่อ', s: 29, star: 1, pounce: 2, thread: 1 },
  { id: 'D2', c: 'D', site: 'Unseen Studio', url: 'https://unseen.co', what: 'Transition เป็น set piece มีชื่อ (SOTD Animations 9.2/10)', m: 'ยิงตอนข้าม section แทน route + ตัวกลางเป็นกำแพงคำเต็ม viewport', b: 'IDENTITY — 2 จุดเปลี่ยนของเรื่อง: หลงทาง→เจอตัวเอง / ตัวคนเดียว→มีทีม — wipe คือชื่อบทของเรื่องเล่า', s: 23 },
  { id: 'D3', c: 'D', site: 'Igloo Inc', url: 'https://igloo.inc', what: 'Blend ฉากด้วย effect (frost/chromatic/displacement)', m: 'ไม่ใช้ WebGL: หมึกซึม SVG turbulence quantize 6 สเต็ปให้เหมือนงานพิมพ์', b: 'GAME — screen-wipe ระหว่างด่าน มี pause 1 เฟรมที่ 50% + ป้าย LV. ประทับตอนจบ', s: 19, game: 3, cost: 1, flag: 'แพง — ทดสอบ 390px ก่อน' },
  { id: 'D4', c: 'D', site: 'Dennis Snellenberg', url: 'https://dennissnellenberg.com', what: 'ม่านโค้งเลื่อนปิด/เปิดระหว่างหน้า (GSAP+Barba)', m: 'ขอบโค้งใช้รัศมี C ของโลโก้ + ยิงตอน scroll ไม่ใช่ route + สลับบน/ล่าง', b: 'CAT — ม่านคือเปลือกตา: เว็บกระพริบตาช้าๆ ระหว่างความคิด (slow-blink = ความไว้ใจของแมว) ใช้แค่ 2 ครั้ง', s: 26, darkLean: 1, flag: 'เว็บ block fetcher' },
  // E
  { id: 'E1', c: 'E', site: 'Nikola Radeski', url: 'https://nikolaradeski.com', what: 'Text-fill ตาม scroll', m: 'fill ทีละคำ (ไม่ใช่ตัวอักษร — ปลอดภัยกับไทย) + snap ล่วงหน้า 1 คำให้บรรทัดจบคม', b: 'IDENTITY — ยังไม่ fill = เสียงเทรนด์ (บาง เบลอ), fill แล้ว = เสียงจริง — การ scroll คือการที่คำของคุณทับเสียงรบกวน', s: 28, star: 1, vf: 1 },
  { id: 'E2', c: 'E', site: 'monopo london', url: 'https://monopo.london', what: 'หน้าแรกคือ manifesto ที่เป็นเศษประโยคแตกกระจาย', m: 'เศษประโยคเข้าจากสองฝั่งสลับกัน แล้วสานเป็นคอลัมน์เดียว', b: 'IDENTITY — สองเสียงมี label: "สิ่งที่โลกเห็น" / "สิ่งที่คุณเป็น" จุดพีคคือตอนมันรวมเป็นประโยคเดียว', s: 24 },
  { id: 'E3', c: 'E', site: 'Lusion', url: 'https://lusion.co', what: 'บล็อกปรัชญา "We do not chase trends" (ตรง theme มาก)', m: 'pin เต็มจอ + highlight ไล่ทีละบรรทัดแบบ teleprompter สเต็ป', b: 'POKER — แต่ละบรรทัดเปิดเหมือนไพ่หงายหน้า บรรทัดสุดท้าย = การเปิดมือที่ PlanC เล่นแบบแบไต๋', s: 24 },
  // F
  { id: 'F1', c: 'F', site: 'Cuberto', url: 'https://cuberto.com', what: 'Services 3 เสาแบบชัดเจนใน one-flow', m: 'เสาเป็นแถวเต็มจอ accordion เปิดเองตอน scroll ถึง — พูดทีละเสา', b: 'IDENTITY — สามแถวคือการเดินทางตามลำดับ + เลขแถวเป็น depth marker 00m→-30m: ยิ่งขุดลึก ยิ่งเป็นของคุณ', s: 28, star: 1 },
  { id: 'F2', c: 'F', site: 'Bluxstudio', url: 'https://bluxstudio.com', what: 'Services + methodology เป็นขั้นตอนมีตัวเลข', m: 'ลากแนวนอนบน desktop / snap แนวตั้งบนมือถือ + เลขหมุนแบบ odometer', b: 'GAME — แต่ละเสาเป็น level-select tile + mission objective + checkpoint ติ๊กเมื่ออ่านผ่าน ครบ 3 อัน CTA ท้ายเว็บเปลี่ยนข้อความ', s: 25, game: 1 },
  { id: 'F3', c: 'F', site: 'basement.studio', url: 'https://basement.studio', what: 'Capabilities + ก็อปปี้ผลลัพธ์จัดๆ', m: 'ผลลัพธ์เป็น type ยักษ์หลังเสา เลื่อน 0.5× ความเร็ว scroll', b: 'CAT — แต่ละเสามีท่าแมวประจำ (หูฟัง/ตะปบไหมพรม/นั่งบัลลังก์) icon 24px กระพริบตาเมื่อเข้าจอ', s: 22 },
  // G
  { id: 'G1', c: 'G', site: 'Henri Heymans', url: 'https://henriheymans.com', what: 'Bio + ลิสต์รางวัล 15 รายการเป็น type ล้วน', m: 'แถวเผยแบบบัญชี: เส้นวาดก่อน แล้วตัวหนังสือตาม + hover เล่าเรื่อง 1 บรรทัด', b: 'IDENTITY — ledger กรอบ "หลักฐาน ไม่ใช่คำโฆษณา": ทุกแถวคือเลขจริงจากอาชีพครีเอเตอร์ของผู้ก่อตั้ง ไม่มี adjective', s: 28, star: 1, game: 1 },
  { id: 'G2', c: 'G', site: 'Nikola Radeski', url: 'https://nikolaradeski.com', what: 'Stats + timeline อาชีพ + testimonials 4.9/5', m: 'ตัวเลขกระโดด 3 สเต็ปแบบ odometer + timeline เป็นเส้นเดียวมีสถานี', b: 'GAME — timeline คือ level map: ปี = checkpoint มี paw marker + ด่านลับ (กดค้าง) เผยปีที่เจ๊ง', s: 23, game: 1 },
  { id: 'G3', c: 'G', site: 'Phantom', url: 'https://phantom.land', what: 'About ทีมด้วย face-scan effects', m: 'ไม่ใช้ WebGL: ภาพผู้ก่อตั้งใต้ CSS scanline mask จาก halftone→ภาพจริง', b: 'IDENTITY — ภาพค่อยๆ ชัด + แคปชัน "กว่าจะชัดว่าตัวเองเป็นใคร ก็ใช้เวลาเหมือนกัน" — รูปแสดง EXTRACT ด้วยตัวเอง', s: 25 },
  // H
  { id: 'H1', c: 'H', site: 'Bluxstudio', url: 'https://bluxstudio.com', what: '"Fullscreen footer" เป็น featured element', m: 'footer ไม่ scroll เข้า — ทั้งหน้ายกออกเผยสิ่งที่อยู่ข้างใต้ + CTA 15vw', b: 'CAT — ใต้ผ้าคือแมวดำนั่งอยู่แล้วทั้งเว็บ (วาดเส้นเดียว หาง = C) ข้างคำว่า "พร้อมจะเป็นตัวเองหรือยัง" — ตัวตนอยู่ข้างใต้มาตลอด', s: 29, star: 1, epic: 1, darkLean: 1 },
  { id: 'H2', c: 'H', site: '14islands', url: 'https://www.14islands.com', what: 'Footer มี watercolor interaction เป็น signature', m: 'เปลี่ยน fluid canvas เป็นรอยเท้าแมวหมึกที่ค่อยๆ จาง ตาม pointer/tap', b: 'IDENTITY — ครบ ~6 รอย เส้นเชื่อมกันเป็นคำว่า "คุณ" — การขยับของคุณเขียนคำว่าคุณเอง', s: 24 },
  { id: 'H3', c: 'H', site: 'Chungi Yoo', url: 'https://www.chungiyoo.com', what: 'Double-CTA ใหญ่ใจดี "Say a simple Hello!"', m: 'รวมเป็น split-button ยักษ์ เส้นแบ่งเอียงหาฝั่งที่ hover แบบสปริง', b: 'POKER — ปุ่มคือไพ่คว่ำสองใบ hover = แง้มมุม 5° คลิก = เปิดไพ่เต็มจอเป็นทางเข้า contact', s: 24, ipounce: 1 },
  // I
  { id: 'I1', c: 'I', site: 'Unseen Studio', url: 'https://unseen.co', what: '"Suspicious Loader" — preloader มีบุคลิก', m: 'ไม่มี % — นับผ่านคำตัวตนที่โดนขีดฆ่า จังหวะสเต็ป', b: 'CAT — ตาสองดวงในความมืด ตามเมาส์ กระพริบที่ 60% แล้วกลายเป็นช่องว่างของ ส ตัวแรกของ headline — แมวเห็นคุณก่อนคุณเห็นเว็บ', s: 29, star: 1, epic: 1, eyes: 1 },
  { id: 'I2', c: 'I', site: 'Poolsuite', url: 'https://poolsuite.net', what: 'Retro ASCII boot loader สไตล์ OS ยุค 90', m: 'boot log ภาษาไทยแบบ mono เป็น batch สเต็ป ≤1.2 วิ', b: 'GAME — เว็บบูต "คุณ" ไม่ใช่ตัวมันเอง: LOADING PLAYER: YOU → IDENTITY: NOT FOUND → สร้างใหม่เลยไหม?', s: 26, game: 1 },
  { id: 'I3', c: 'I', site: 'Phantom', url: 'https://phantom.land', what: '"Loading Sequence" ที่ได้รางวัล', m: 'ย่อเหลือ wipe เดียว ผูกกับ font-load event — รอแบบมีหน้าที่', b: 'IDENTITY — เส้นขีดฆ่าคำว่า "เหมือนใคร" สิ่งที่เหลือคือ "เป็นตัวเอง" — วิทยานิพนธ์ใน 0.8 วินาที', s: 26 },
  // J
  { id: 'J1', c: 'J', site: 'Dennis Snellenberg', url: 'https://dennissnellenberg.com', what: 'Nav minimal + overlay menu ระดับตำนาน', m: 'ขอบ overlay ใช้รัศมี C + press-state บน pointerdown ให้มือถือเป็นพลเมืองชั้นหนึ่ง', b: 'CAT — burger คือหนวดแมว 3 เส้น เปิดแล้วสวิงเป็นเส้นโปรไฟล์แมว รายการเข้าแบบ paw-step ปิด = กระพริบตา', s: 27, star: 1, eyes: 1, flag: 'เว็บ block fetcher' },
  { id: 'J2', c: 'J', site: 'Obys', url: 'https://obys.agency', what: 'Nav เหลือแค่ 2 ลิงก์ + นาฬิกา + ปุ่มสลับ view', m: 'เปลี่ยนแกน toggle จาก layout เป็นภาษา/ความหนา EN accents', b: 'IDENTITY — สวิตช์ "โหมดตัวตน: สุภาพ/ตรงๆ" สลับก็อปปี้ทั้งเว็บระหว่างเสียงขัดเกลากับเสียงตรงๆ', s: 25, voiceToggle: 1 },
  { id: 'J3', c: 'J', site: 'Poolsuite', url: 'https://poolsuite.net', what: 'Retro-OS navigation หน้าต่างลากได้', m: 'ตัดหน้าต่างลาก — เหลือ menu sheet เป็น HUD panel "PLANC.SYS" ลิสต์ section เป็นไฟล์', b: 'GAME — เมนู = pause screen: เปิดแล้ว marquee หลังฉากหยุดจริง ขึ้น PAUSED — เกมฟีลแท้ในราคาศูนย์', s: 22, game: 1 },
  // K
  { id: 'K1', c: 'K', site: 'basement.studio', url: 'https://basement.studio', what: 'กำแพงโลโก้ "Trusted by Visionaries" 30+', m: 'โลโก้→ตัวเลข: marquee เมตริกจริงของผู้ก่อตั้ง วิ่งสวนทาง scroll ตัว mono', b: 'IDENTITY — แทรกคำเทรนด์ที่ตายแล้วแบบขีดฆ่าจางๆ ระหว่างเมตริก — สิ่งที่ผ่านไป vs สิ่งที่อยู่ (ตัวเลข)', s: 27, star: 1 },
  { id: 'K2', c: 'K', site: 'darkroom.engineering', url: 'https://darkroom.engineering', what: 'Testimonials + activity log มี timestamp', m: 'พิมพ์เป็น batch ทีละคำ ใหม่สุดขึ้นก่อน จำกัด 5 บรรทัด', b: 'GAME — log เป็น match history: W·W·L·W มี L หนึ่งตัวโชว์จริง — เคสที่ไม่เวิร์กก็เล่าตรงๆ', s: 24, game: 1 },
  // L
  { id: 'L1', c: 'L', site: 'Cuberto', url: 'https://cuberto.com', what: 'เจ้าของไลบรารี Mouse Follower', m: 'ไม่มี blob: จุด 6px + หางโค้ง 3 จุดหน่วง 120ms, เปลี่ยน state แบบ 2 เฟรม', b: 'CAT — states คือภาษากายแมว: ปกติ=นิ่ง, ลิงก์=ยกอุ้งเตรียมตะปบ, ลากได้=ยืดตัว, คลิก=pounce สควอช / มือถือ: ripple เป็นรอยอุ้งเท้า', s: 26, star: 1, ipounce: 1 },
  { id: 'L2', c: 'L', site: 'Minh Pham', url: 'https://minhpham.design', what: 'Mask cursor เผยเลเยอร์ความจริง', m: 'เปลี่ยนเป็นกรวยไฟฉาย anchor โซนหัวแม่มือบนมือถือ รัศมีเต้นตาม velocity', b: 'IDENTITY — แสงเผย "โน้ตข้างกระดาษ" ของผู้ก่อตั้ง — เว็บมีไดอารี่ใต้ผิว', s: 23, reveal: 1, flag: 'ทับซ้อน C1' },
  { id: 'L3', c: 'L', site: 'monopo london', url: 'https://monopo.london', what: 'Mouse interaction ที่เป็น featured element', m: 'WebGL→DOM: pointer ทิ้งเทรลคำ EN จิ๋ว กระจายแล้วจางใน 600ms', b: 'CAT — คำที่หลุดคือขน: ลูบแรงขนร่วงเยอะ ลูบเบาๆ ไม่ร่วง — จับเว็บเบาๆ มันก็เรียบร้อย', s: 22 },
];

// ---------- pure logic (tested) ----------
function optById(id) { return OPTS.find(o => o.id === id); }
function starFor(key) { return OPTS.find(o => o.c === key && o.star).id; }
function defaultPicks() { const p = {}; COMPS.forEach(c => p[c.key] = starFor(c.key)); return p; }

function encodeState(picks, notes) {
  const p = COMPS.map(c => picks[c.key] || '').join('.');
  let n = '';
  const clean = {};
  Object.keys(notes || {}).forEach(k => { if ((notes[k] || '').trim()) clean[k] = notes[k].trim(); });
  if (Object.keys(clean).length) {
    const json = JSON.stringify(clean);
    const b64 = (typeof btoa === 'function')
      ? btoa(String.fromCharCode(...new TextEncoder().encode(json)))
      : Buffer.from(json, 'utf8').toString('base64');
    n = '&n=' + encodeURIComponent(b64);
  }
  return 'p=' + p + n;
}

function decodeState(hash) {
  const out = { picks: {}, notes: {} };
  const h = (hash || '').replace(/^#/, '');
  if (!h) return null;
  const params = {};
  h.split('&').forEach(kv => { const i = kv.indexOf('='); if (i > 0) params[kv.slice(0, i)] = kv.slice(i + 1); });
  if (!params.p) return null;
  const ids = params.p.split('.');
  COMPS.forEach((c, i) => { const id = ids[i]; if (id && optById(id) && optById(id).c === c.key) out.picks[c.key] = id; });
  if (params.n) {
    try {
      const b64 = decodeURIComponent(params.n);
      const json = (typeof atob === 'function')
        ? new TextDecoder().decode(Uint8Array.from(atob(b64), ch => ch.charCodeAt(0)))
        : Buffer.from(b64, 'base64').toString('utf8');
      out.notes = JSON.parse(json);
    } catch (e) { out.notes = {}; }
  }
  return out;
}

function picksetCode(picks) { return COMPS.map(c => picks[c.key]).filter(Boolean).join('-'); }

// clash + synergy engine
function analyze(picks) {
  const has = id => Object.values(picks).indexOf(id) > -1;
  const sel = Object.values(picks).map(optById).filter(Boolean);
  const warn = [], syn = [], budget = {};

  budget.game = sel.reduce((a, o) => a + (o.game || 0), 0);
  budget.pounce = sel.reduce((a, o) => a + (o.pounce || 0), 0);      // boundary pounces (max 2)
  budget.ipounce = sel.reduce((a, o) => a + (o.ipounce || 0), 0);    // interaction pounces (max 2)
  budget.epic = sel.reduce((a, o) => a + (o.epic || 0), 0);

  if (has('B4') && has('D1')) warn.push({ t: 'B4 + D1 — สองอย่างแย่งหน้าที่ "เส้นนำสายตา" กัน', f: 'ให้ rail ทำหน้าที่บอกตำแหน่ง (LV./checkpoint) ส่วน tail-line ทำงานเฉพาะ "ภายใน" รอยต่อ ไม่ต้องวิ่งขอบขวาทั้งหน้า' });
  if (has('C1') && has('L2')) warn.push({ t: 'C1 + L2 — กลไก "เผยความจริงใต้ผิว" ซ้ำสองที่', f: 'เลือกบ้านเดียว: ให้ C1 ถือ headline/body ทั้งหมด แล้วตัด L2 ออก (หรือกลับกัน) ใช้ทั้งคู่จะกลายเป็น noise' });
  if (has('A4') && (has('I1') || has('I2') || has('I3'))) warn.push({ t: 'A4 + preloader — มีสองด่านก่อนถึง hero (โหลด → ประโยคให้ปัด)', f: 'ย่อ preloader เหลือ ≤600ms หรือให้ preloader กลายเป็นประโยคของ A4 เลย (รวมสองจังหวะเป็นหนึ่ง)' });
  if (budget.game > 3) warn.push({ t: 'งบ GAME เกิน (' + budget.game + '/3 จุด quantized/HUD)', f: 'เลือกไว้ 3 จุดที่ได้ผลสุด ที่เหลือลดเป็น motion ปกติ — เกม DNA เป็น "accent" ไม่ใช่ธีมหลัก' });
  if (budget.pounce > 2) warn.push({ t: 'งบ pounce ที่รอยต่อเกิน (' + budget.pounce + '/2 จุด)', f: 'ให้ boundary ได้ pounce แค่ 2 จุด ที่เหลือใช้ --ease-flick' });
  if (budget.ipounce > 2) warn.push({ t: 'งบ pounce ตอน interact เกิน (' + budget.ipounce + '/2) — เด้งบ่อยจะเลี่ยน', f: 'เลือกว่าจะให้ scroll-flick หรือ click เป็นตัวเด้ง อย่าให้ทั้งคู่เด้งพร้อมกัน' });
  if (budget.epic > 2) warn.push({ t: 'งบ --t-epic เกิน (' + budget.epic + '/2 จังหวะยาว 1200ms)', f: 'ให้ preloader→hero กับ footer reveal เท่านั้นที่ได้ epic' });
  if (has('D3')) warn.push({ t: 'D3 แพงสุดในลิสต์ (SVG turbulence 6 สเต็ป)', f: 'pre-render 6 สเต็ปเป็น layer เดียว scale ด้วย transform และเทสบน 390px ก่อนลงจริง ถ้าเฟรมตกให้ถอยไป D1/D4' });
  if (has('M1')) {
    const accentDependent = sel.filter(o => /IDENTITY — สีคือเสียงจริง|ทองคู่แรก/.test(o.b || '')).length;
    if (accentDependent) warn.push({ t: 'M1 ไม่มี accent เลย แต่มีตัวเลือกที่ยืมสี accent มาสื่อความหมาย', f: 'ใน M1 ให้เปลี่ยนจาก "ชี้ด้วยสี" เป็น "ชี้ด้วยน้ำหนัก/ขนาด/แมสคอต" ตามที่ระบุใน TWIST-B ของ M1' });
  }
  const light = picks.M === 'M1' || picks.M === 'M4';
  if (picks.M === 'M4' && (has('D4') || has('H1'))) warn.push({ t: 'M4 (โลกสว่างสดใส) + ' + [has('D4') ? 'D4 ม่านกระพริบ' : '', has('H1') ? 'H1 ยกผ้าเผยแมวใต้พื้น' : ''].filter(Boolean).join(' / ') + ' — ทั้งคู่ออกแบบมาให้ทำงานกับพื้นเข้ม', f: 'ใน M4 ให้ม่าน/ผ้าใช้ teal เข้ม (#1c5878) แทนสีเข้มกลาง และให้แมวเป็นเส้น #111 บนพื้น tint แทนซิลูเอตต์บนดำ' });
  if (has('I1') && has('D4')) syn.push('I1 + D4 — ใช้เส้นเปลือกตาเดียวกันได้เลย (path ชุดเดียว ประหยัดโค้ดและได้ภาษาเดียวกันทั้งเว็บ)');
  if (has('C1') && has('J2')) syn.push('C1 + J2 — ต่อสวิตช์ "โหมดตัวตน" เข้ากับ span คู่เสียงของ C1 ได้ตรงๆ กลายเป็นฟีเจอร์เดียวที่คุมทั้งเว็บ');
  if ((picks.M === 'M0' || picks.M === 'M3') && has('I1')) syn.push('M' + (picks.M === 'M0' ? '0' : '3') + ' + I1 — ให้ดวงตา preloader เป็นสีทอง = accent ครั้งแรกของเว็บ เปิดเรื่องได้คมมาก');
  if (has('K1') && has('C2')) syn.push('K1 + C2 — คลังคำเทรนด์ที่ขีดฆ่าใช้ชุดเดียวกันได้ (เขียนครั้งเดียว ใช้สองที่)');
  if (has('E1') && (picks.M === 'M2' || picks.M === 'M0' || picks.M === 'M3')) syn.push('E1 + โลกที่มี accent — คำสุดท้ายของ manifesto fill เป็นสี accent ได้ (ตามกติกาการใช้สีของโลกนั้น)');
  if (has('B1') && has('L1')) syn.push('B1 + L1 — ฟิสิกส์แมวชุดเดียวกันทั้ง scroll และ cursor: pounce curve ตัวเดียว ใช้ซ้ำได้');
  return { warn, syn, budget, light };
}

if (typeof module !== 'undefined') module.exports = { WORLDS, COMPS, OPTS, optById, starFor, defaultPicks, encodeState, decodeState, picksetCode, analyze };
