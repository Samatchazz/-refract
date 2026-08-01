// build-page.mjs — injects fonts, screenshots and measured numbers into the
// decision page template. Every figure comes from measurements.json / thai-results.json;
// only the trade-off sentences are authored.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const HERE = path.dirname(fileURLToPath(import.meta.url));
const M = JSON.parse(fs.readFileSync(path.join(HERE, 'measurements.json'), 'utf8'));
const A = JSON.parse(fs.readFileSync(path.join(HERE, 'assets.json'), 'utf8'));
const NOTES = JSON.parse(fs.readFileSync(path.join(HERE, 'notes.json'), 'utf8'));
let tmpl = fs.readFileSync(path.join(HERE, 'decide.template.html'), 'utf8');

const THAI_FLOOR = 1.2813;
const by = (slug) => M.sites.find((s) => s.slug === slug);
const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const r1 = (v) => (v === null || v === undefined ? '—' : (Math.round(v * 10) / 10).toString());

// A 40-track grid with a `normal` gap is a specimen table the probe happened to
// catch, not the page's layout grid — say so rather than printing a useless figure.
function gridLabel(grid) {
  if (!grid) return 'ไม่มีกริด CSS — เส้นเดียว';
  const gap = parseFloat(grid.columnGap);
  // A real page gutter is never 1px, and a real page grid is never 40 tracks.
  if (grid.columns > 16 || !Number.isFinite(gap) || gap <= 2) return 'ไม่มีกริดหน้าชัดเจน';
  return `${grid.columns} คอลัมน์ · gap ${Math.round(gap)}px`;
}

// ---- fonts ----------------------------------------------------------------
const fontCss = A.fonts.map((f) => {
  const range = f.subset === 'thai'
    ? 'U+0E01-0E5B, U+200C-200D, U+25CC'
    : 'U+0000-00FF, U+2018-201A, U+201C-201E, U+2013-2014, U+2026, U+00D7';
  return `@font-face{font-family:${f.family};font-style:normal;font-weight:${f.weight};font-display:swap;`
    + `src:url(data:font/woff2;base64,${f.b64}) format("woff2");unicode-range:${range}}`;
}).join('\n');

// ---- candidate cards ------------------------------------------------------
const CARDS = [
  {
    slug: 'klim-soehne', key: 'klim', name: 'Klim — Söhne',
    kind: 'หน้าโชว์ฟอนต์ที่เขียนเป็นบทความยาว ไม่มีรูปถ่ายเลยสักรูป',
    reco: false,
    plus: 'ระบบเนี้ยบที่สุดที่วัดเจอทั้งชุด — ทุก section เริ่มที่ขอบซ้ายเดียวกันเป๊ะตลอด 30 เท่าจอ และใช้ตัวอักษรแค่ 9 ขนาดทั้งหน้า',
    minus: 'เป็นหน้าโชว์ฟอนต์ ไม่มี "หัว section" แบบที่เรามี (เลข · eyebrow · หัวเรื่อง · คำโปรย) ส่วนนั้นต้องคิดเอง',
  },
  {
    slug: 'exat', key: 'exat', name: 'EXAT',
    kind: 'หน้าเดียวที่เถียงเรื่องฟอนต์เป็นตอน ๆ — โครงเนื้อหาใกล้หน้าเรามากที่สุด',
    reco: false,
    plus: 'โครงหน้าเหมือนเรา เถียงทีละประเด็นแล้วส่งต่อ และความกว้างวัดได้ 1439.91px ตรงกับ 1440px ที่เราเดาไว้พอดี',
    minus: 'ระยะบรรทัดเนื้อหา 1.20 ต้องบวกให้ไทยอีก 0.18 ⇒ ทุก section ที่มีตัวหนังสือจะยาวขึ้นหมด',
  },
  {
    slug: 'offbeat', key: 'offbeat', name: 'Studio OFF-BEAT',
    kind: 'เว็บสตูดิโอเกาหลีที่เขียนเป็นเอกสาร วางเกาหลีกับอังกฤษคนละลำดับชัดเจน',
    reco: false,
    plus: 'ปัญหาเดียวกับเราเป๊ะ — สคริปต์ที่ไม่ใช่ละตินคู่กับละติน และระยะบรรทัดเนื้อหา 1.40 รองรับไทยได้เลยไม่ต้องแก้',
    minus: 'ขอบซ้ายมี 4 แนว ไม่ใช่แนวเดียว ต้องเลือกเองว่าจะยึดแนวไหนเป็นหลัก',
  },
];

const cardHtml = CARDS.map((c) => {
  const s = by(c.slug);
  const d = s.viewports['1440'];
  const le = d.leftEdgeTest.layout;
  const t = d.typeScale;
  const vr = d.verticalRhythm;
  const grid = d.container.grids[0];
  const disp = s.thai && s.thai.tests && s.thai.tests.display;
  const body = s.thai && s.thai.tests && s.thai.tests.body;
  const need = disp ? Math.max(0, Math.round((Math.max(disp.minThaiSafeRatio, THAI_FLOOR) - disp.applied.lineHeightRatio) * 100) / 100) : null;
  const bodyLh = body && body.applied ? body.applied.lineHeightRatio : null;
  const bodyNeed = body && body.applied ? Math.round((body.minThaiSafeRatio - body.applied.lineHeightRatio) * 100) / 100 : null;
  const note = NOTES[c.slug] || {};

  const imgs = (A.shots[c.slug] || []).map((sh) =>
    `<img data-scroll="${sh.label}" src="${sh.data}" alt="${esc(c.name)} ช่วง ${sh.label.replace('scroll', '')}% ของหน้า" loading="lazy">`
  ).join('');

  const stat = (label, value, tone) =>
    `<div class="stat"><span>${label}</span><b${tone ? ` class="${tone}"` : ''}>${value}</b></div>`;

  return `
        <button class="card" data-group="star" data-value="${c.key}" aria-pressed="false" type="button">
          <div class="shotwrap">${imgs}</div>
          <div class="body">
            <h3>${esc(c.name)}${c.reco ? '<span class="reco">แนะนำ</span>' : ''}</h3>
            <div class="kind">${esc(c.kind)}</div>
            <div class="url mono">${esc(s.url.replace(/^https?:\/\//, ''))} · ${esc(s.country)}</div>
            <div class="stats">
              ${stat('ขอบซ้าย', `${le.distinctClustered2px} แนว · σ ${r1(le.stdDev)}`, le.distinctClustered2px <= 2 ? 'good' : null)}
              ${stat('ขนาดตัวอักษร', `${t.distinctFontSizeCount} ขนาด`, t.distinctFontSizeCount <= 10 ? 'good' : null)}
              ${stat('ความยาวหน้า', `${r1(d.document.vhMultiple)}× จอ`)}
              ${stat('section เท่าจอพอดี', `${vr.near100vhCount} / ${vr.sectionCount}`)}
              ${stat('กริด', gridLabel(grid))}
              ${stat('หัวเรื่อง ไทยต้องบวก', need ? `+${need.toFixed(2)}` : 'ไม่ต้องบวก', need >= 0.4 ? 'warn' : null)}
              ${stat('เนื้อหา ไทยต้องบวก', bodyLh === null ? '—' : (bodyNeed > 0.01 ? `+${bodyNeed.toFixed(2)}` : 'ไม่ต้องบวก'), bodyNeed > 0.01 ? 'warn' : 'good')}
            </div>
            <div class="tradeoff">
              <div class="plus"><span class="k">ได้</span><span>${esc(c.plus)}</span></div>
              <div class="minus"><span class="k">เสีย</span><span>${esc(c.minus)}</span></div>
            </div>
          </div>
          <div class="pick">เลือกอันนี้</div>
        </button>`;
}).join('\n');

// ---- full table -----------------------------------------------------------
const EDGE_MIN = 4;
const rows = M.sites.map((s) => {
  const d = s.viewports['1440'];
  if (!d || d.missing || !d.ok) return null;
  const le = d.leftEdgeTest.layout;
  const t = d.typeScale;
  const vr = d.verticalRhythm;
  const disp = s.thai && s.thai.tests && s.thai.tests.display;
  const need = disp ? Math.max(0, Math.round((Math.max(disp.minThaiSafeRatio, THAI_FLOOR) - disp.applied.lineHeightRatio) * 100) / 100) : null;
  const valid = le.n >= EDGE_MIN;
  return {
    name: s.name, country: s.country,
    edges: le.distinctClustered2px, sd: le.stdDev, n: le.n, valid,
    sizes: t.distinctFontSizeCount,
    vh: d.document.vhMultiple,
    near: `${vr.near100vhCount}/${vr.sectionCount}`,
    need,
    hi: ['Klim — Söhne specimen', 'EXAT (Hot Type)', 'Offbeat'].includes(s.name),
    score: valid ? (le.distinctClustered2px * 40 + Math.min(le.stdDev, 600) + t.distinctFontSizeCount * 12) : 1e6 + t.distinctFontSizeCount,
  };
}).filter(Boolean).sort((a, b) => a.score - b.score);

const rowHtml = rows.map((r) => `
              <tr${r.hi ? ' class="hi"' : ''}>
                <td class="name">${esc(r.name)}</td>
                <td>${esc(r.country)}</td>
                <td class="num">${r.valid ? `${r.edges} <span style="color:var(--faint)">(σ ${r1(r.sd)})</span>` : `<span style="color:var(--faint)">n=${r.n} วัดไม่ได้</span>`}</td>
                <td class="num">${r.sizes}</td>
                <td class="num">${r1(r.vh)}×</td>
                <td class="num">${r.near}</td>
                <td class="num">${r.need === null ? '—' : (r.need > 0 ? '+' + r.need.toFixed(2) : 'ไม่ต้อง')}</td>
              </tr>`).join('');

// ---- assemble -------------------------------------------------------------
tmpl = tmpl.replace('/*<!--FONTS-->*/', fontCss);
tmpl = tmpl.replace('<!--CARDS-->', cardHtml);
tmpl = tmpl.replace('<!--ROWS-->', rowHtml);

const out = path.join(HERE, 'decide.html');
fs.writeFileSync(out, tmpl);
console.log(`decide.html — ${Math.round(fs.statSync(out).size / 1024)}KB · ${rows.length} rows · ${A.fonts.length} font faces`);
