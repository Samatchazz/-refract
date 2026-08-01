/* Final leftover sweep: intro h2, footer tagline, Read More, tags, video label, copyright, "for" */
const fs = require('fs');
const path = require('path');
const jsFiles = fs.readdirSync(path.join(__dirname, '_nuxt')).filter(f => f.endsWith('.js')).map(f => '_nuxt/' + f);
const FILES = ['index.html', '_payload.json', ...jsFiles];

const LS = '\\u2028'; // the six-char escape sequence as it appears in NUXT_DATA text

const pairs = [
  // intro h2 — SSR + NUXT (with (LS) or <br>) + payload escaped
  ['Crafting brands<br>that hit hard.', 'เราไม่ปั้นคอนเทนต์<br>เราปั้นอาณาจักร.'],
  ['Crafting brands\\u003Cbr>that hit hard.', 'เราไม่ปั้นคอนเทนต์\\u003Cbr>เราปั้นอาณาจักร.'],
  ['Crafting brands' + LS + 'that hit hard.', 'เราไม่ปั้นคอนเทนต์' + LS + 'เราปั้นอาณาจักร.'],
  // footer tagline — NUXT uses (LS), SSR uses plain &, JS render fn splits words
  ['Partnering with ambitious brands & inspiring people.', 'จับมือกับครีเอเตอร์ที่ทะเยอทะยาน และผู้คนที่น่าจดจำ'],
  ['Partnering with ambitious brands' + LS + '& inspiring people.', 'จับมือกับครีเอเตอร์ที่ทะเยอทะยาน' + LS + 'และผู้คนที่น่าจดจำ'],
  ['d("Partnering with ",-1)', 'd("จับมือกับครีเอเตอร์ที่ทะเยอทะยาน ",-1)'],
  // Read More
  ['>Read More<', '>อ่านต่อ<'],
  ['"Read More"', '"อ่านต่อ"'],
  ['Read More', 'อ่านต่อ'],
  // work-grid tag strings (rendered combined in SSR; raw values in JSON)
  ['A.I., SaaS', 'Identity · สายความรู้'],
  ['SaaS, Food, B2B', 'สายอาหาร · Fandom Loop'],
  ['E-Commerce, B2C', 'Rebrand · Algorithm'],
  ['Education, B2C, B2B', 'Burnout Recovery · Fandom'],
  ['>Education<', '>Burnout Recovery<'],
  ['>Marketing<', '>Micro-Sovereignty<'],
  ['"A.I."', '"Identity"'],
  ['"SaaS"', '"สายความรู้"'],
  ['"B2B"', '"Fandom Loop"'],
  ['"B2C"', '"Algorithm"'],
  ['"Education"', '"Burnout Recovery"'],
  ['"Marketing"', '"Micro-Sovereignty"'],
  ['"Food"', '"สายอาหาร"'],
  // video overlay label
  ['>Griflan</div>', '>Plan Z</div>'],
  // copyright
  ['Copyright 2026 Griflan Design Inc. All Rights Reserved', 'Copyright 2026 Plan Z Consulting. All Rights Reserved'],
  [' Griflan Design Inc. All Rights Reserved', ' Plan Z Consulting. All Rights Reserved'],
];

let grand = 0;
for (const f of FILES) {
  const p = path.join(__dirname, f);
  let t = fs.readFileSync(p, 'utf8');
  let c = 0;
  for (const [from, to] of pairs) {
    const parts = t.split(from);
    if (parts.length > 1) { c += parts.length - 1; t = parts.join(to); }
  }
  if (c) { fs.writeFileSync(p, t); console.log(f, '→', c); grand += c; }
}

// "for" before the aside flip — find exact context in mw bundle & html
for (const f of ['index.html', '_nuxt/mw1A9tND.js']) {
  const p = path.join(__dirname, f);
  let t = fs.readFileSync(p, 'utf8');
  const m = t.match(/.{0,25}for(&#8203;|​).{0,25}/);
  if (m) console.log(f, 'for-context:', JSON.stringify(m[0]));
}

// validate JSONs
const html = fs.readFileSync(path.join(__dirname, 'index.html'), 'utf8');
const i = html.indexOf('__NUXT_DATA__');
const s = html.indexOf('>', i) + 1;
const e = html.indexOf('</script>', s);
try { JSON.parse(html.slice(s, e)); console.log('NUXT_DATA: VALID'); } catch (err) { console.log('NUXT_DATA BROKEN:', err.message.slice(0, 150)); }
try { JSON.parse(fs.readFileSync(path.join(__dirname, '_payload.json'), 'utf8')); console.log('_payload.json: VALID'); } catch (err) { console.log('payload BROKEN:', err.message.slice(0, 150)); }
console.log('TOTAL:', grand);
