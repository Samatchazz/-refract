// build-data.mjs — collects every scattered decision source into data/*.json
// so the console has one place to read from. Run again whenever planc/ changes.
import fs from 'node:fs';
import path from 'node:path';
import { createRequire } from 'node:module';
import { fileURLToPath } from 'node:url';

const HERE = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(HERE, '..', '..');
const DATA = path.join(HERE, 'data');
fs.mkdirSync(DATA, { recursive: true });
const require = createRequire(import.meta.url);
const write = (name, obj) => {
  fs.writeFileSync(path.join(DATA, name), JSON.stringify(obj, null, 1));
  console.log(`${name} — ${Math.round(fs.statSync(path.join(DATA, name)).size / 1024)}KB`);
};

// ---------------------------------------------------------------- options ---
// console2-data.js is CommonJS with no ES exports, which is why gen-docs.mjs
// (which import()s it) no longer works. Load it the way it actually is.
const V2 = require(path.join(ROOT, 'planc0', 'research', 'console2-data.js'));
write('options.json', {
  worlds: V2.WORLDS,
  comps: V2.COMPS,
  opts: V2.OPTS,
  stars: Object.fromEntries(V2.COMPS.map((c) => [c.k, V2.starFor ? V2.starFor(c.k) : null])),
});

// ---------------------------------------------------------------- current ---
// What planc/ is right now. Every choice in the console is shown as a change
// from these values, so the page can say "ไม่เปลี่ยน" when a pick matches.
const cssPath = path.join(ROOT, 'planc', 'style.css');
const css = fs.readFileSync(cssPath, 'utf8');
const rootBlock = (css.match(/:root\s*\{([\s\S]*?)\n\}/) || [])[1] || '';
const tokens = {};
for (const m of rootBlock.matchAll(/(--[a-z0-9-]+)\s*:\s*([^;]+);/g)) {
  tokens[m[1]] = m[2].trim().replace(/\s*\/\*[\s\S]*$/, '').trim();
}

const html = fs.readFileSync(path.join(ROOT, 'planc', 'index.html'), 'utf8');
const sections = [...html.matchAll(/<section[^>]*\bid="([^"]+)"[^>]*>/g)].map((m) => m[1]);

// Which of the 13 colour worlds is currently in the stylesheet?
const norm = (v) => (v || '').toLowerCase().trim();
let currentWorld = null;
for (const [id, w] of Object.entries(V2.WORLDS)) {
  if (norm(w.bg) === norm(tokens['--bg']) && norm(w.fg) === norm(tokens['--fg'])) { currentWorld = id; break; }
}

write('current.json', {
  tokens,
  sections,
  sectionCount: sections.length,
  currentWorld,
  files: {
    css: 'planc/style.css',
    html: 'planc/index.html',
    js: 'planc/app.js',
    bytes: {
      css: fs.statSync(cssPath).size,
      html: fs.statSync(path.join(ROOT, 'planc', 'index.html')).size,
      js: fs.statSync(path.join(ROOT, 'planc', 'app.js')).size,
    },
  },
});

// -------------------------------------------------------------- northstar ---
const M = JSON.parse(fs.readFileSync(path.join(ROOT, 'research', 'northstar', 'measurements.json'), 'utf8'));
const THAI_FLOOR = 1.2813;
const pick = (slug) => {
  const s = M.sites.find((x) => x.slug === slug);
  const d = s.viewports['1440'];
  const le = d.leftEdgeTest.layout;
  const t = d.typeScale;
  const disp = s.thai && s.thai.tests && s.thai.tests.display;
  const body = s.thai && s.thai.tests && s.thai.tests.body;
  const grid = d.container.grids[0];
  const constrained = d.container.containerChain && d.container.containerChain.constrained;
  return {
    slug, name: s.name, url: s.url, country: s.country,
    edges: le.distinctClustered2px, edgeSd: le.stdDev, edgeValues: le.values,
    sizes: t.distinctFontSizeCount, scale: t.scaleSizesDesc,
    ratios: t.consecutiveRatios,
    vh: d.document.vhMultiple,
    near100: d.verticalRhythm.near100vhCount, sectionCount: d.verticalRhythm.sectionCount,
    baseUnit: d.verticalRhythm.baseUnitEstimate80pct,
    containerWidth: (d.container.dominantPairs[0] || {}).width,
    maxWidth: constrained ? constrained.maxWidth : null,
    grid: grid ? { cols: grid.columns, gap: grid.columnGap } : null,
    measureCh: t.readingMeasure ? t.readingMeasure.measureCh_zeroWidth : null,
    display: t.roles.biggestText,
    body: t.roles.body,
    thaiDisplayLh: disp ? disp.applied.lineHeightRatio : null,
    thaiDisplayFloor: disp ? Math.max(disp.minThaiSafeRatio, THAI_FLOOR) : null,
    thaiBodyLh: body && body.applied ? body.applied.lineHeightRatio : null,
    thaiBodyFloor: body ? body.minThaiSafeRatio : null,
    shots: (d.shots || []).filter((f) => f.includes('scroll')),
  };
};
write('northstar.json', {
  thaiFloor: THAI_FLOOR,
  attempted: 39,
  measured: M.sites.filter((s) => s.viewports['1440'] && s.viewports['1440'].ok).length,
  candidates: ['klim-soehne', 'exat', 'offbeat'].map(pick),
});

// ------------------------------------------------------------------ spine ---
// The parts of the build brief that do not depend on any choice. These get
// pasted into every generated prompt verbatim so the prompt is self-contained.
const brief = fs.readFileSync(path.join(ROOT, 'planc0', 'research', 'BUILD-BRIEF-FINAL.md'), 'utf8');
const lines = brief.split('\n');
const marks = [];
lines.forEach((l, i) => { if (/^##\s/.test(l)) marks.push({ i, title: l.replace(/^##\s*/, '').trim() }); });
const blockAt = (idx) => {
  const start = marks[idx].i;
  const end = idx + 1 < marks.length ? marks[idx + 1].i : lines.length;
  return lines.slice(start, end).join('\n').trim();
};
const spine = {};
marks.forEach((m, idx) => {
  const t = m.title;
  if (/^2 ·/.test(t)) spine.layout = blockAt(idx);
  else if (/^5 ·/.test(t)) spine.thaiSafe = blockAt(idx);
  else if (/^6 ·/.test(t)) spine.hardRules = blockAt(idx);
  else if (/^7 ·/.test(t)) spine.architecture = blockAt(idx);
  else if (/^8 ·/.test(t)) spine.seo = blockAt(idx);
  else if (/^9 ·/.test(t)) spine.dod = blockAt(idx);
  else if (/^10 ·/.test(t)) spine.placeholders = blockAt(idx);
  else if (/^⚠ 0 ·/.test(t)) spine.traps = blockAt(idx);
});
spine._headings = marks.map((m) => m.title);
write('spine.json', spine);

console.log('\ncurrent world:', currentWorld, '· sections in planc/index.html:', sections.length);
console.log('tokens read:', Object.keys(tokens).length);
console.log('spine blocks:', Object.keys(spine).filter((k) => k[0] !== '_').join(', '));
