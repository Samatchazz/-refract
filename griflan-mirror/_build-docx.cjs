const fs = require('fs');
const { Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell, WidthType,
  BorderStyle, ShadingType, HeadingLevel, AlignmentType, PageOrientation } = require('docx');
const rows = JSON.parse(fs.readFileSync('_content-table.json', 'utf8'));

const GOLD = 'F0B32E', DARK = '1A1A1A', LIGHT = 'F5F1E0', SECT = '2E2A26';
const COLS = [1900, 3900, 3900, 3260]; // sum 12960 (landscape Letter usable)
const border = { style: BorderStyle.SINGLE, size: 4, color: 'CCCCCC' };
const borders = { top: border, bottom: border, left: border, right: border };

const cellText = (text, opts = {}) => new TableCell({
  width: { size: opts.w, type: WidthType.DXA },
  columnSpan: opts.span,
  shading: opts.shade ? { type: ShadingType.CLEAR, color: 'auto', fill: opts.shade } : undefined,
  margins: { top: 60, bottom: 60, left: 90, right: 90 },
  children: [new Paragraph({ children: [new TextRun({
    text, bold: !!opts.bold, color: opts.color || '000000', size: opts.size || 19,
    font: 'Sarabun' })] })],
});

const headerRow = new TableRow({
  tableHeader: true,
  children: [
    cellText('องค์ประกอบ', { w: COLS[0], bold: true, color: 'FFFFFF', shade: DARK, size: 20 }),
    cellText('Original (Griflan · EN)', { w: COLS[1], bold: true, color: 'FFFFFF', shade: DARK, size: 20 }),
    cellText('AI-Generated (Plan C · TH)', { w: COLS[2], bold: true, color: 'FFFFFF', shade: DARK, size: 20 }),
    cellText('Human (แปล / เกลาใหม่)', { w: COLS[3], bold: true, color: '000000', shade: GOLD, size: 20 }),
  ],
});

const tableRows = [headerRow];
let lastSection = null;
for (const r of rows) {
  if (r.section !== lastSection) {
    tableRows.push(new TableRow({ children: [
      cellText('▸ ' + r.section, { w: 12960, span: 4, bold: true, color: 'FFFFFF', shade: SECT, size: 21 }),
    ] }));
    lastSection = r.section;
  }
  tableRows.push(new TableRow({ children: [
    cellText(r.element, { w: COLS[0], bold: true, size: 18 }),
    cellText(r.en, { w: COLS[1] }),
    cellText(r.th, { w: COLS[2] }),
    cellText('', { w: COLS[3], shade: 'FFFDF5' }),
  ] }));
}

const table = new Table({
  columnWidths: COLS,
  width: { size: 12960, type: WidthType.DXA },
  borders: { ...borders, insideHorizontal: border, insideVertical: border },
  rows: tableRows,
});

const doc = new Document({
  styles: { default: { document: { run: { font: 'Sarabun', size: 19 } } } },
  sections: [{
    properties: { page: {
      size: { width: 15840, height: 12240, orientation: PageOrientation.LANDSCAPE },
      margin: { top: 720, bottom: 720, left: 720, right: 720 },
    } },
    children: [
      new Paragraph({ children: [new TextRun({ text: 'Plan C — ตารางเทียบคอนเทนต์ (Content Comparison)', bold: true, size: 32, font: 'Sarabun' })] }),
      new Paragraph({ children: [new TextRun({ text: 'Original = ข้อความต้นฉบับจาก griflan.com · AI-Generated = ฉบับไทยที่ AI ร่างไว้ในเว็บ Plan C · Human = ช่องว่างสำหรับแปล/เกลาเอง', size: 18, color: '666666', font: 'Sarabun' })] }),
      new Paragraph({ children: [new TextRun({ text: 'รวม ' + rows.length + ' รายการ · สร้างเมื่อ ' + new Date().toISOString().slice(0,10), size: 16, color: '999999', font: 'Sarabun' })] }),
      new Paragraph({ text: '' }),
      table,
    ],
  }],
});

Packer.toBuffer(doc).then(buf => { fs.writeFileSync('Plan-C-content-comparison.docx', buf); console.log('wrote Plan-C-content-comparison.docx', buf.length, 'bytes'); });
