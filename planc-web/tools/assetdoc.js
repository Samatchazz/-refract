const {
  Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell,
  WidthType, HeadingLevel, AlignmentType, BorderStyle, ShadingType,
  LevelFormat, PageBreak,
} = require('docx');
const fs = require('fs');

const FONT = 'Sarabun';
const MONO = 'Consolas';
const INK = '111111';
const DIM = '666666';

const t = (text, opts = {}) => new TextRun({ text, font: FONT, size: opts.size || 22, bold: !!opts.bold, color: opts.color || INK, italics: !!opts.it });
const mono = (text, size = 18) => new TextRun({ text, font: MONO, size, color: INK });
const P = (children, opts = {}) => new Paragraph({ children: Array.isArray(children) ? children : [children], spacing: { after: opts.after ?? 120, before: opts.before ?? 0 }, alignment: opts.align, ...opts.extra });
const H1 = (s) => new Paragraph({ heading: HeadingLevel.HEADING_1, children: [t(s, { size: 30, bold: true })], spacing: { before: 320, after: 160 } });
const H2 = (s) => new Paragraph({ heading: HeadingLevel.HEADING_2, children: [t(s, { size: 25, bold: true })], spacing: { before: 260, after: 120 } });

const codeBox = (lines) => new Table({
  width: { size: 9360, type: WidthType.DXA }, columnWidths: [9360],
  rows: [new TableRow({ children: [new TableCell({
    width: { size: 9360, type: WidthType.DXA },
    shading: { type: ShadingType.CLEAR, fill: 'F2F2F2' },
    margins: { top: 100, bottom: 100, left: 140, right: 140 },
    children: lines.map((l) => new Paragraph({ children: [mono(l)], spacing: { after: 40 } })),
  })] })],
});

function tbl(headers, rows, widths) {
  const total = widths.reduce((a, b) => a + b, 0);
  const mk = (cells, isHead) => new TableRow({
    tableHeader: isHead,
    children: cells.map((c, i) => new TableCell({
      width: { size: widths[i], type: WidthType.DXA },
      shading: isHead ? { type: ShadingType.CLEAR, fill: 'EDEDED' } : undefined,
      margins: { top: 60, bottom: 60, left: 100, right: 100 },
      children: (Array.isArray(c) ? c : [c]).map((line) =>
        new Paragraph({ children: [typeof line === 'string' ? t(line, { bold: isHead, size: 20 }) : line], spacing: { after: 20 } })),
    })),
  });
  return new Table({ width: { size: total, type: WidthType.DXA }, columnWidths: widths, rows: [mk(headers, true), ...rows.map((r) => mk(r, false))] });
}

const A = [
  ['1', 'ตึกกรุงเทพแถบยาว (ตัวตั้งต้น)', 'sky-city.png', '3:1', 'ใช่', 'bangkok shophouses + condo towers as chunky blocks, water tanks, antennas — sits behind the action like the 1-1 hills, seamless'],
  ['2', 'พื้น 1 ช่อง', 'tile-ground.png', '1:1', 'ใช่', 'ground block role from SMB: crisp walkable top line, soil + pebbles below, modular, seamless all sides'],
  ['3', 'เมฆเล็ก', 'cloud-s.png', '3:2', '-', 'classic SMB cloud DNA: 2 plump lobes, scalloped top, perfectly flat base, one bold outline'],
  ['4', 'เมฆกลาง', 'cloud-m.png', '2:1', '-', 'classic SMB cloud DNA: 3 lobes in a row, flat base, one bold outline'],
  ['5', 'เมฆใหญ่', 'cloud-l.png', '3:1', '-', 'classic SMB cloud DNA: 4 lobes stretched wide, flat base, one bold outline'],
  ['6', 'พุ่มไม้', 'bush.png', '2:1', '-', 'the SMB cloud=bush trick: identical scalloped silhouette, solid filled, sits flat on the ground line'],
  ['7', 'เนินเล็ก', 'hill-s.png', '2:1', '-', 'SMB 1-1 hill role: single smooth dome, perfectly flat base, far-background calm'],
  ['8', 'เนินใหญ่', 'hill-l.png', '2:1', '-', 'same dome stretched wider + taller, two dark oval marks on the slope, flat base'],
  ['9', 'อิฐ', 'block-brick.png', '1:1', '-', 'SMB brick role: even brick bond, thick mortar, chunky bevel, looks smashable from below'],
  ['10', 'บล็อกรางวัล ?', 'block-q.png', '1:1', '-', 'SMB question-block role: fat bold ? dead center, rivet in each corner, begs to be bumped'],
  ['11', 'ขอบหลุม', 'pit-edge.png', '1:1', '-', 'SMB pit edge: walkable top line ending in a jagged vertical break, soil layers in the cut face'],
  ['12', 'เสาธง', 'flagpole.png', '1:4', '-', 'SMB goal flagpole role: very tall thin pole on a small block base, ball on top, no cloth'],
];

const B = [
  ['บันได 1 บล็อก', 'step.png', '1:1', 'ผังด่าน (CONTENT-MAP)', 'SMB hard staircase block role: plain heavy square, subtle bevel, stacks into stairs'],
  ['เหรียญ', 'coin.png', '1:1', 'ยังไม่ตัดสินว่ามีของเก็บไหม', 'SMB coin role: face-on flat coin, thick rim, small star carved center'],
  ['อุปสรรคสูง (กองแฟ้ม)', 'stack.png', '2:3', 'ลิสต์บริการจาก BMC', 'paper documents + ring binders stacked taller than a cat, leaning, jumped over like a pipe'],
  ['ศัตรู (นาฬิกาปลุก)', 'foe.png', '1:1', 'รอ Mat ตอบ: มีศัตรูไหม', 'walks like a goomba but is a grumpy round alarm clock: bell ears, angry dial face, stubby feet'],
  ['ศัตรูโดนเหยียบ', 'foe-flat.png', '2:1', 'รอข้อบน', 'same clock one instant after the stomp, goomba-flat pancake, bell ears splayed'],
  ['อาคารปลายทาง', 'office.png', '1:1', 'สคริปต์ปลายด่าน + CTA', 'stands where the SMB castle stands: flat facade, welcoming door, small roof flag'],
];

const NOGEN = [
  ['หญ้าที่แมวเบียดผ่าน', 'ต้องบิดตัวตามระยะห่างของแมว ภาพนิ่งทำไม่ได้'],
  ['ผ้าธงที่ปลิว', 'เปลี่ยนรูปทรงทุกเฟรมตามลม'],
  ['ฝุ่นใต้เท้า / รอยเท้า', 'เกิดและหายตามตำแหน่งสกรอล'],
  ['สายไฟที่แกว่ง', 'เส้นโค้งที่คำนวณสด'],
  ['ตัวหนังสือทุกตัว', 'MJ สะกดไทยไม่ได้ และต้องเลือก/อ่านด้วยสกรีนรีดเดอร์ได้'],
  ['ชิ้นส่วนแมว', 'มีสเปกแยกที่ PHASE3-CAT.md ต้องตัดจากคลิปเดิม ห้ามเจนใหม่'],
];

const doc = new Document({
  numbering: {
    config: [{
      reference: 'bullets',
      levels: [{ level: 0, format: LevelFormat.BULLET, text: '•', alignment: AlignmentType.LEFT, style: { paragraph: { indent: { left: 360, hanging: 200 } } } }],
    }],
  },
  styles: { default: { document: { run: { font: FONT, size: 22, color: INK } } } },
  sections: [{
    properties: { page: { margin: { top: 1100, bottom: 1100, left: 1250, right: 1250 } } },
    children: [
      P(t('planc* — ลิสต์ asset ที่ต้องเจนจาก Midjourney', { size: 40, bold: true }), { after: 60 }),
      P(t('สถานะ ณ 1 ส.ค. 2026 · ฉบับปรับใหม่ มี DNA มาริโอทุกชิ้น · คำสั่งเต็มก็อปจาก docs/MJ-PROMPTS.md และ docs/MIDJOURNEY-BRIEF.md (เหตุผล)', { color: DIM, size: 19 }), { after: 60 }),
      P(t('ทุกการตัดสินใจด้านดีไซน์เป็นของ Mat — เอกสารนี้คือรายการของ ไม่ใช่คำสั่งให้เริ่ม', { color: DIM, size: 19, it: true }), { after: 200 }),

      H1('1. เจนได้ตอนนี้เลย — 12 ชิ้น (ไม่ผูกกับผังด่าน)'),
      P([t('ชิ้นพวกนี้ต้องมีแน่นอนไม่ว่าผังด่านจะออกมาหน้าตายังไง เจนคู่ขนานกับงานวางผังได้เลย '), t('เงื่อนไขเดียวที่ค้าง: ต้องเลือกสไตล์ ก/ข/ค ก่อนกดเจนชิ้นแรก', { bold: true })]),
      tbl(['#', 'ชิ้น', 'ไฟล์', 'AR', 'tile', 'แก่นของ prompt (ฉบับเต็มก็อปจาก MJ-PROMPTS.md)'],
        A.map((r) => [r[0], r[1], [mono(r[2], 17)], r[3], r[4], [mono(r[5], 16)]]),
        [560, 1750, 1500, 560, 620, 4370]),
      P(t('ชิ้นที่ 1 คือตัวตั้งต้น — ต้องเจนให้ได้ก่อนอย่างเดียว แล้วเอา URL ใบที่ชอบไปเป็น --sref ของอีก 11 ชิ้น ไม่งั้นทั้งชุดจะเหมือนมาจากคนวาด 12 คน', { bold: true }), { before: 120 }),

      H1('2. ยังห้ามเจน — 6 ชิ้นที่รอปลดล็อก'),
      tbl(['ชิ้น', 'ไฟล์', 'AR', 'ติดอะไรอยู่', 'แก่นของ prompt (ฉบับเต็มเตรียมไว้แล้ว)'],
        B.map((r) => [r[0], [mono(r[1], 17)], r[2], r[3], [mono(r[4], 16)]]),
        [1800, 1300, 560, 2100, 3600]),
      P([t('เหตุผลที่กันไว้: ทั้งหกชิ้นผูกกับผังด่าน (CONTENT-MAP จาก BMC) หรือคำถามที่ Mat ยังไม่ตอบ — เจนตอนนี้แล้วผังเปลี่ยน = ทิ้ง และเจนรอบใหม่ทีหลังจะให้สไตล์ตรงกับชุดแรกยากมาก')]),

      H1('3. ของที่ห้ามเจนเด็ดขาด — ต้องเป็นโค้ดเท่านั้น'),
      P(t('กฎง่ายๆ: ถ้ามันเปลี่ยนรูปทรงตามสกรอล = โค้ด · ถ้ามันแค่เลื่อนไปมา = เจนได้')),
      tbl(['ชิ้น', 'ทำไมเจนไม่ได้'], NOGEN.map((r) => [r[0], r[1]]), [2700, 6660]),

      new Paragraph({ children: [new PageBreak()] }),

      H1('4. วิธีประกอบคำสั่ง'),
      P([t('สูตร 4 เลเยอร์ (เรียงตามลำดับความสำคัญ — MJ ให้น้ำหนักคำต้น prompt): '), mono('<ตัวของ + DNA มาริโอ> + <การจัดวาง> + BASE + <STYLE> + --ar [+ --tile ชิ้น 1,2] + --raw --s 50 --c 0 + NEG', 18)]),
      P([t('DNA มาริโอ = อ้างทั้งชื่อเกมและบทบาทของชิ้น (in the role of the question block) พร้อมรูปทรงเจาะจง (พูก้นแบน หมุดสี่มุม) — ชื่อเกมดึงอารมณ์ รูปทรงกันเพี้ยน ถ้าภาพหลุดเป็นสีหรือมีตัวมาริโอโผล่ เปลี่ยน super mario bros เป็น a classic 1985 NES side-scroller', { size: 19, color: DIM })]),
      H2('BASE (ใส่ทุกคำสั่ง)'),
      codeBox(['2D side-scrolling platformer level prop in the spirit of classic 1985', 'Super Mario Bros, black ink on pure white, flat orthographic side view,', 'bold chunky cartoon shapes with thick confident outlines, friendly and', 'readable like a video game sprite', '+ ท่อนจัดวาง: single object only, centered, filling most of the frame,', 'nothing cropped, plain white background']),
      H2('NEG (ใส่ทุกคำสั่ง)'),
      codeBox(['--no color, gradient, soft shading, cast shadow, text, watermark,', '3d render, photo, frame, people, characters', '(สั้นลงจากเดิม — คู่มือ MJ บอกให้บรรยายสิ่งที่อยากได้แทนการห้ามยาวๆ)']),
      H2('STYLE — เลือกอันเดียว ใช้ทั้ง 18 ชิ้น ห้ามผสม (รอ Mat เลือก)'),
      tbl(['สไตล์', 'ท่อนที่ใส่ในคำสั่ง'], [
        ['ก Swiss', [mono('swiss graphic design, flat geometric vector shapes, hard clean edges, uniform stroke weight, bauhaus poster', 16)]],
        ['ข Riso', [mono('risograph print, coarse halftone dot shading, screenprint grain, slightly misregistered ink', 16)]],
        ['ค วาดมือ', [mono('hand-inked linocut, uneven wobbly ink line, crosshatch shading, woodblock print', 16)]],
      ], [1200, 8160]),
      P([t('ตัวอย่างประกอบเสร็จ (ชิ้นที่ 3 สไตล์ ก): ', { bold: true })], { before: 120 }),
      codeBox(['one small cloud in the exact spirit of the classic super mario bros cloud', 'sprite: two plump round lobes touching to form a scalloped top, perfectly', 'flat base, one bold continuous outline, puffy and friendly, single object', 'only, centered, filling most of the frame, nothing cropped, plain white', 'background, 2D side-scrolling platformer level prop in the spirit of classic', '1985 Super Mario Bros, black ink on pure white, flat orthographic side view,', 'bold chunky cartoon shapes with thick confident outlines, friendly and', 'readable like a video game sprite, rendered as swiss graphic design: flat', 'geometric vector shapes, hard clean edges, uniform stroke weight, bauhaus', 'poster discipline --ar 3:2 --sref <URL> --sw 100 --raw --s 50 --c 0', '--no color, gradient, soft shading, cast shadow, text, watermark, 3d render,', 'photo, frame, people, characters']),

      H1('5. เช็คก่อนเก็บ + แปลงก่อนใช้'),
      ...[
        'พื้นหลังขาวสนิท ไม่มีเงาตกพื้น ไม่มีเส้นพื้นติดมา — มี = ทิ้ง',
        'ไม่มีเทาไล่เฉด มีแค่ดำ/ขาว (หรือจุดสกรีน) — เทาเนียน = ทิ้ง เพราะด่านมืดกลับสีไม่ได้',
        'หรี่ตาแล้วยังรู้ว่าเป็นอะไร — ต้องเพ่ง = ละเอียดเกิน potrace จะเละ เจนใหม่ให้เรียบลง',
      ].map((s) => new Paragraph({ numbering: { reference: 'bullets', level: 0 }, children: [t(s)], spacing: { after: 60 } })),
      P(t('ผ่านสามข้อแล้ว ต้องแปลงเป็น SVG path ก่อนใช้เสมอ ห้ามเอา PNG แปะตรงๆ:', { bold: true }), { before: 120 }),
      codeBox(['convert in.png -colorspace gray -threshold 55% -negate out.pbm', 'potrace out.pbm -s -o out.svg --turdsize 8 --alphamax 1']),
      P([t('เก็บทุกใบที่เจนไว้ที่ '), mono('Z:\\Claude Code\\planc-web\\assets\\art\\raw\\', 19), t(' แล้วก็อปใบที่เลือกออกมาที่ '), mono('assets\\art\\', 19), t(' ตั้งชื่อไฟล์ตามตารางเป๊ะ เพราะโค้ดจะอ้างชื่อพวกนี้')]),
    ],
  }],
});

Packer.toBuffer(doc).then((buf) => {
  fs.writeFileSync('/home/claude/planc-site/docs/MJ-ASSET-LIST.docx', buf);
  console.log('ok', buf.length);
});
