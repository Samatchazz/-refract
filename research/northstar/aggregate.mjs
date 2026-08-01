// aggregate.mjs — merge raw/*.json into measurements.json and print a compact digest.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const HERE = path.dirname(fileURLToPath(import.meta.url));
const RAW = path.join(HERE, 'raw');
const sites = JSON.parse(fs.readFileSync(path.join(HERE, 'sites.json'), 'utf8'));

let thai = [];
try { thai = JSON.parse(fs.readFileSync(path.join(HERE, 'thai', 'thai-results.json'), 'utf8')); } catch {}
const thaiBySlug = Object.fromEntries(thai.map((t) => [t.slug, t]));

const out = { generated: null, viewports: ['1440x900', '390x844'], sites: [] };
const digest = [];

for (const s of sites) {
  const rec = { slug: s.slug, name: s.name, url: s.url, country: s.country, kind: s.kind, viewports: {} };
  for (const vp of ['1440', '390']) {
    const f = path.join(RAW, `${s.slug}-${vp}.json`);
    if (!fs.existsSync(f)) { rec.viewports[vp] = { missing: true }; continue; }
    rec.viewports[vp] = JSON.parse(fs.readFileSync(f, 'utf8'));
  }
  rec.thai = thaiBySlug[s.slug] || null;
  out.sites.push(rec);

  const d = rec.viewports['1440'];
  if (!d || d.missing) { digest.push({ slug: s.slug, status: 'NOT RUN' }); continue; }
  if (!d.ok) { digest.push({ slug: s.slug, status: 'FAIL', why: d.error || d.notMeasurable }); continue; }

  const t = d.typeScale, le = d.leftEdgeTest.layout, vr = d.verticalRhythm;
  const cp = d.container.dominantPairs[0] || {};
  const grid = d.container.grids[0] || null;
  const th = rec.thai && rec.thai.tests && rec.thai.tests.display;
  digest.push({
    slug: s.slug,
    country: s.country,
    vh: d.document.vhMultiple,
    mode: d.document.scrollMode === 'native' ? 'nat' : 'virt',
    secs: d.sections.length,
    edgesDistinct: le.distinctClustered2px,
    edgeSD: le.stdDev,
    edgeMain: le.clusters && le.clusters.length ? le.clusters.sort((a, b) => b.count - a.count)[0] : null,
    contW: cp.width,
    contLeft: cp.left,
    maxW: d.container.containerChain && d.container.containerChain.constrained ? d.container.containerChain.constrained.maxWidth : 'none',
    grid: grid ? `${grid.columns}col/${grid.columnGap}` : '-',
    sizes: t.distinctFontSizeCount,
    sizes2: t.distinctFontSizeCount_used2plus,
    ratios: (t.consecutiveRatios || []).slice(0, 6),
    display: t.roles.biggestText ? `${t.roles.biggestText.fontSize}/${t.roles.biggestText.lineHeightRatio}/${t.roles.biggestText.fontWeight}` : '-',
    body: t.roles.body ? `${t.roles.body.fontSize}/${t.roles.body.lineHeightRatio}` : '-',
    measureCh: t.readingMeasure ? t.readingMeasure.measureCh_spec : null,
    near100: `${vr.near100vhCount}/${vr.sectionCount}`,
    baseUnit: vr.baseUnitEstimate80pct,
    txtColors: d.color.distinctTextColorCount,
    bgColors: d.color.distinctBgColorCount,
    fixed: d.persistent.fixedOrSticky.length,
    navChanged: d.navState ? d.navState.changed : null,
    textNodes: d.document.textNodeCount,
    thaiSafe: th ? th.minThaiSafeRatio : null,
    thaiDelta: th ? th.leadingCorrection : null,
  });
}

out.generated = process.env.RUN_STAMP || 'see file mtime';
fs.writeFileSync(path.join(HERE, 'measurements.json'), JSON.stringify(out, null, 2));
fs.writeFileSync(path.join(HERE, 'digest.json'), JSON.stringify(digest, null, 2));

const ok = digest.filter((d) => !d.status);
console.log(`sites in list: ${sites.length} | measured: ${ok.length} | failed/not-run: ${digest.length - ok.length}`);
console.table(ok.map((d) => ({
  slug: d.slug, vh: d.vh, m: d.mode, sec: d.secs, edges: d.edgesDistinct, edgeSD: d.edgeSD,
  cont: `${d.contW}@${d.contLeft}`, maxW: d.maxW, grid: d.grid,
  sizes: `${d.sizes}(${d.sizes2})`, disp: d.display, body: d.body, ch: d.measureCh,
  v100: d.near100, unit: d.baseUnit, col: `${d.txtColors}/${d.bgColors}`, fx: d.fixed, nav: d.navChanged,
  thai: d.thaiSafe, dlt: d.thaiDelta,
})));
console.log('\nFAILED:');
for (const d of digest.filter((x) => x.status)) console.log(` ${d.slug}: ${d.status} — ${d.why || ''}`);
