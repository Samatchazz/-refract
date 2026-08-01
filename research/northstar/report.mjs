// report.mjs — generates CANDIDATES.md and THAI-STRESS.md from measurements.json + notes.json.
// All numbers in the deliverables come from the measured data; only prose comes from notes.json.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const HERE = path.dirname(fileURLToPath(import.meta.url));
const M = JSON.parse(fs.readFileSync(path.join(HERE, 'measurements.json'), 'utf8'));
const NOTES = JSON.parse(fs.readFileSync(path.join(HERE, 'notes.json'), 'utf8'));
let control = [];
try { control = JSON.parse(fs.readFileSync(path.join(HERE, 'thai', 'control-kanit.json'), 'utf8')); } catch {}

const n = (v, d = 0) => (v === null || v === undefined ? '—' : (typeof v === 'number' ? v.toFixed(d).replace(/\.0+$/, '') : v));
const px = (v) => (v === null || v === undefined ? '—' : `${n(v)}px`);

const shotLink = (f) => `[${f.replace(/\.jpg$/, '').replace(/^[^-]+-/, '')}](shots/${f})`;

const EDGE_MIN_SECTIONS = 4;

function edgeRead(le) {
  if (!le || !le.n) return 'not measurable — no section painted its own text';
  if (le.n < EDGE_MIN_SECTIONS) {
    return `**not a valid test** — only ${le.n} text-bearing section${le.n === 1 ? '' : 's'} on the page, so a single shared edge here is arithmetic, not discipline`;
  }
  const d = le.distinctClustered2px, sd = le.stdDev;
  if (d === 1) return `**one shared left edge** (σ=0) — every section starts at the same x`;
  if (d === 2 && sd < 40) return `**two left edges, tight** (σ=${n(sd, 1)}px) — a primary rail plus one deliberate indent`;
  if (sd < 60) return `${d} edges but tight spread (σ=${n(sd, 1)}px) — reads as one rail with minor offsets`;
  if (sd < 200) return `${d} edges, moderate spread (σ=${n(sd, 1)}px) — a grid exists but sections opt out of it`;
  return `${d} edges, wide spread (σ=${n(sd, 1)}px) — no shared left rail`;
}

// Are a section's several left edges arbitrary, or do they all land on one
// column step? This is the difference between "no grid" and "a grid whose
// columns are being used deliberately".
function gridStep(values) {
  if (!values || values.length < 3) return null;
  const uniq = [...new Set(values.map((v) => Math.round(v)))].sort((a, b) => a - b);
  if (uniq.length < 3) return null;
  // If every edge sits within 60px of every other, the page has one rail and there
  // is no column step to find — fitting one would be reading noise as structure.
  if (uniq[uniq.length - 1] - uniq[0] < 60) return null;
  const base = uniq[0];
  let best = null;
  // Search from 40px up: any step below that fits arbitrary values trivially and
  // would "prove" a grid on a page that has none.
  for (let d = 40; d <= 400; d++) {
    let worst = 0;
    for (const v of uniq) {
      const off = (v - base) % d;
      worst = Math.max(worst, Math.min(off, d - off));
    }
    if (best === null || worst < best.worst - 0.001) best = { step: d, worst: Math.round(worst * 100) / 100 };
    if (best.worst === 0) break;
  }
  if (!best) return null;
  return { ...best, base, columnsSpanned: uniq.map((v) => Math.round((v - base) / best.step)) };
}

function ratioRead(ratios) {
  if (!ratios || ratios.length < 3) return '—';
  const r = ratios.slice(0, 8);
  const mean = r.reduce((a, b) => a + b, 0) / r.length;
  const sd = Math.sqrt(r.reduce((a, b) => a + (b - mean) ** 2, 0) / r.length);
  const tag = sd < 0.12 ? 'consistent multiplier' : sd < 0.3 ? 'loose but recognisable' : 'no single multiplier';
  return `${r.map((x) => x.toFixed(2)).join(' · ')} → mean ${mean.toFixed(2)}, σ ${sd.toFixed(2)} (${tag})`;
}

// The project-wide Thai floor, interpolated from the control sweep (Kanit 700, 64px,
// 700px column — the configuration closest to how our own h1 is actually set).
// A candidate's own minimum can come out below this because the harness narrows the
// column until the string wraps, which changes where the line breaks fall. The number
// to build against is the higher of the two.
const THAI_FLOOR = (() => {
  const sorted = [...control].sort((a, b) => a.lineHeightRatio - b.lineHeightRatio);
  for (let i = 1; i < sorted.length; i++) {
    const lo = sorted[i - 1], hi = sorted[i];
    if (lo.worst < 0 && hi.worst >= 0) {
      return Math.round((lo.lineHeightRatio + (hi.lineHeightRatio - lo.lineHeightRatio) * (-lo.worst / (hi.worst - lo.worst))) * 10000) / 10000;
    }
  }
  return null;
})();

function thaiVerdict(t) {
  if (!t || !t.tests) return { line: 'not tested', delta: null, safe: null };
  const d = t.tests.display;
  if (!d || d.skipped) return { line: 'not tested — no measurable display line-height', delta: null, safe: null };
  if (d.notViable) return { line: '**not viable** — collides at every leading up to 2.40', delta: null, safe: null };
  const applied = d.applied.lineHeightRatio;
  const safe = d.minThaiSafeRatio;
  const delta = d.leadingCorrection;
  const src = d.applied.declaredNormal ? ` They declare \`line-height: normal\`, which resolves to ${applied} in Kanit.` : '';
  // Build against the higher of this candidate's own minimum and the project floor.
  const floor = THAI_FLOOR === null ? safe : Math.max(safe, THAI_FLOOR);
  const realDelta = Math.round((floor - applied) * 1000) / 1000;
  if (realDelta <= 0) {
    return { line: `**usable as-is** — their display leading ${applied} is at or above the ${THAI_FLOOR} Thai floor (clears by ${n(d.asIs.minGapPx, 1)}px at their own size).${src}`, delta: 0, safe: floor, applied };
  }
  const why = safe < (THAI_FLOOR || 0)
    ? ` Its own configuration bottoms out at ${safe}, but ${THAI_FLOOR} is the binding floor for our copy — build against ${floor}.`
    : '';
  return { line: `**needs +${n(realDelta, 2)} leading** — ${applied} → **${floor}** (worst overlap ${n(d.asIs.minGapPx, 1)}px at their display size).${why}${src}`, delta: realDelta, safe: floor, applied };
}

// --------------------------------------------------------------------------
const rows = [];
const sections = [];
const failed = [];

for (const s of M.sites) {
  const note = NOTES[s.slug] || {};
  const d = s.viewports['1440'];
  const m = s.viewports['390'];
  if (!d || d.missing || !d.ok) {
    failed.push({ slug: s.slug, name: s.name, url: s.url, why: (d && (d.notMeasurable || d.error)) || 'not run', note: note.failNote || '' });
    continue;
  }
  const t = d.typeScale, le = d.leftEdgeTest.layout, hle = d.leftEdgeTest.headings, vr = d.verticalRhythm;
  const cp = d.container.dominantPairs[0] || {};
  const mcp = (m && !m.missing && m.ok && m.container.dominantPairs[0]) || {};
  const grid = d.container.grids[0];
  const tv = thaiVerdict(s.thai);
  const disp = t.roles.biggestText, body = t.roles.body, small = t.roles.small, mono = t.roles.mono;
  const constrained = d.container.containerChain && d.container.containerChain.constrained;

  const shots = (d.shots || []);
  const mshots = ((m && m.shots) || []);

  const heights = d.sections.map((x) => x.vhFraction);

  sections.push(`
### ${note.rank ? `${note.rank}. ` : ''}${s.name}

**${s.url}** · ${s.country}${note.award ? ` · ${note.award}` : ' · no award recorded'}${note.awardUrl ? ` ([award page](${note.awardUrl}))` : ''}
*${note.docType || 'document type not classified'}*

${note.criteria ? `**Criteria:** ${note.criteria}\n` : ''}
| | 1440×900 | 390×844 |
|---|---|---|
| page length | ${n(d.document.vhMultiple, 2)}vh (${px(d.document.contentHeight)}) | ${m && m.ok ? `${n(m.document.vhMultiple, 2)}vh` : '—'} |
| scroll | ${d.document.scrollMode} | ${m && m.ok ? m.document.scrollMode : '—'} |
| top-level sections | ${d.sections.length} (found by ${d.leftEdgeTest.sectionDiscovery}) | ${m && m.ok ? m.sections.length : '—'} |
| dominant text column | ${px(cp.width)} at x=${n(cp.left)} | ${px(mcp.width)} at x=${n(mcp.left)} |
| declared max-width | ${constrained ? constrained.maxWidth : 'none found'} | — |
| page padding-inline | ${d.container.bodyPaddingInline} | ${m && m.ok ? m.container.bodyPaddingInline : '—'} |
| CSS grid | ${grid ? `${grid.columns} cols, gap ${grid.columnGap} (width ${px(grid.width)})` : 'no page-level CSS grid'} | ${(m && m.ok && m.container.grids[0]) ? `${m.container.grids[0].columns} cols, gap ${m.container.grids[0].columnGap}` : '—'} |
| section padding-block (first 4) | ${d.sections.slice(0, 4).map((x) => `${x.paddingBlockStart}/${x.paddingBlockEnd}`).join(' · ')} | — |
| section heights (×vh) | ${heights.slice(0, 10).map((x) => n(x, 2)).join(' · ')} | — |
| sections within ±3% of 100vh | **${vr.near100vhCount} of ${vr.sectionCount}** | ${m && m.ok ? `${m.verticalRhythm.near100vhCount} of ${m.verticalRhythm.sectionCount}` : '—'} |
| base spacing unit (80% divisor) | ${vr.baseUnitEstimate80pct ? `${vr.baseUnitEstimate80pct}px` : 'none ≥2px'} (strict GCD ${vr.strictGcdOfSpacing ? vr.strictGcdOfSpacing + 'px' : '—'}) | ${m && m.ok ? (m.verticalRhythm.baseUnitEstimate80pct ? m.verticalRhythm.baseUnitEstimate80pct + 'px' : 'none') : '—'} |
| display type | ${disp ? `${px(disp.fontSize)} / lh ${n(disp.lineHeightRatio, 2)} / w${disp.fontWeight} / ls ${n(disp.letterSpacingEm, 3)}em` : '—'} | ${(m && m.ok && m.typeScale.roles.biggestText) ? `${px(m.typeScale.roles.biggestText.fontSize)} / lh ${n(m.typeScale.roles.biggestText.lineHeightRatio, 2)}` : '—'} |
| body type | ${body ? `${px(body.fontSize)} / lh ${n(body.lineHeightRatio, 2)} / w${body.fontWeight}` : '—'} | ${(m && m.ok && m.typeScale.roles.body) ? `${px(m.typeScale.roles.body.fontSize)} / lh ${n(m.typeScale.roles.body.lineHeightRatio, 2)}` : '—'} |
| meta / smallest | ${small ? `${px(small.fontSize)} / lh ${n(small.lineHeightRatio, 2)}` : '—'} | — |
| mono label | ${mono ? `${px(mono.fontSize)} ${mono.fontFamily}` : 'none' } | — |
| display : body ratio | ${disp && body ? n(disp.fontSize / body.fontSize, 2) + '×' : '—'} | — |
| reading measure | ${t.readingMeasure ? `${n(t.readingMeasure.measureCh_spec, 1)} ch (column ${px(t.readingMeasure.columnWidthPx)})` : '—'} | ${(m && m.ok && m.typeScale.readingMeasure) ? `${n(m.typeScale.readingMeasure.measureCh_spec, 1)} ch` : '—'} |
| distinct font-sizes | **${t.distinctFontSizeCount}** (${t.distinctFontSizeCount_used2plus} used more than once) | ${m && m.ok ? m.typeScale.distinctFontSizeCount : '—'} |
| distinct font families | ${t.distinctFontFamilyCount} — ${(t.fontFamilies || []).slice(0, 3).map((f) => f.family).join(', ')} | — |
| distinct text colours | ${d.color.distinctTextColorCount} · backgrounds ${d.color.distinctBgColorCount} | — |
| persistent elements | ${d.persistent.fixedOrSticky.length} fixed/sticky${d.persistent.fixedOrSticky.length ? ` — ${d.persistent.fixedOrSticky.slice(0, 3).map((f) => `${f.tag}${f.text ? ` "${f.text.slice(0, 22)}"` : ''} ${n(f.rect.width)}×${n(f.rect.height)}`).join('; ')}` : ''} | ${m && m.ok ? `${m.persistent.fixedOrSticky.length}` : '—'} |
| nav changes on scroll | ${d.navState && d.navState.changed ? `yes — ${Object.keys(d.navState.diff).join(', ')}` : (d.navState === undefined || d.navState === null ? 'not measurable' : 'no')} | — |

**LEFT-EDGE TEST** — first text element of each section, transform-immune layout left:
\`${le.values.map((v) => n(v)).join(' · ')}\`
${le.distinctClustered2px} distinct edge${le.distinctClustered2px === 1 ? '' : 's'} (2px tolerance), σ = ${n(le.stdDev, 2)}px. Heading edges: ${hle && hle.n ? `${hle.distinctClustered2px} distinct, σ = ${n(hle.stdDev, 2)}px` : 'not measurable'}.
→ ${edgeRead(le)}.${(() => {
  const g = gridStep(le.values);
  if (!g) return '';
  if (g.worst <= 4) return ` All edges land on a **${g.step}px step** from x=${n(g.base)} (worst deviation ${n(g.worst, 1)}px) — the several edges are grid columns, not drift.`;
  return ` Edges do not resolve to a common column step (best fit ${g.step}px leaves ${n(g.worst, 1)}px of error) — this is drift, not a grid.`;
})()}${note.edgeNote ? ` ${note.edgeNote}` : ''}

**TYPE SCALE** — ${t.distinctFontSizeCount} distinct sizes; the ${t.distinctFontSizeCount_used2plus} used more than once are \`${(t.scaleSizesDesc || []).map((x) => n(x, 1)).join(' · ')}\`.
Consecutive ratios: ${ratioRead(t.consecutiveRatios)}

**THAI VERDICT** — ${tv.line}${note.thaiNote ? ` ${note.thaiNote}` : ''}

**FIT FOR PLANC** — ${note.fit || '_not assessed_'}

**Screenshots** — 1440: ${shots.filter((f) => f.includes('scroll')).map(shotLink).join(' · ') || '—'} · [full page](shots/${s.slug}-1440-full.jpg)${d.fullPageShotRepresentative === false ? ' _(virtual scroller — full-page capture is one screen only, use the scroll series)_' : ''} · 390: [full page](shots/${s.slug}-390-full.jpg)
`);

  rows.push({
    slug: s.slug, name: s.name, country: s.country,
    edges: le.distinctClustered2px, sd: le.stdDev, edgeN: le.n, sizes: t.distinctFontSizeCount,
    vh: d.document.vhMultiple, near100: `${vr.near100vhCount}/${vr.sectionCount}`,
    thaiDelta: tv.delta, thaiSafe: tv.safe, thaiApplied: tv.applied,
    note,
  });
}

// --------------------------------------------------------------------------
const attempted = M.sites.length;
const measured = rows.length;

// Lower is better: edge discipline + size discipline. Sites without enough
// text-bearing sections to run the left-edge test are pushed to the bottom and
// labelled, rather than being flattered by a meaningless σ of 0.
const coherence = (r) => {
  if (r.edgeN < EDGE_MIN_SECTIONS) return 1e6 + (r.sizes || 99);
  const e = r.sd === null ? 999 : r.sd;
  return (r.edges || 99) * 40 + Math.min(e, 600) + (r.sizes || 99) * 12;
};

const ranked = [...rows].sort((a, b) => coherence(a) - coherence(b));

const master = `
| # | site | country | left edges (σ) | distinct font-sizes | length | =100vh sections | Thai correction | content-shape match | adoption cost |
|---:|---|---|---|---:|---:|---|---|---|---|
${ranked.map((r, i) => `| ${i + 1} | [${r.name}](#${r.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')}) | ${r.country} | ${r.edgeN < EDGE_MIN_SECTIONS ? `_n=${r.edgeN}, not testable_` : `${r.edges} (σ ${n(r.sd, 1)})`} | ${r.sizes} | ${n(r.vh, 1)}vh | ${r.near100} | ${r.thaiDelta === null ? '—' : r.thaiDelta === 0 ? 'none' : `+${n(r.thaiDelta, 2)}`} | ${(r.note && r.note.shapeMatch) || '—'} | ${(r.note && r.note.adoptionCost) || '—'} |`).join('\n')}
`;

const doc = `# North-star candidates — measured

_Generated from \`measurements.json\`. Every number below was extracted from the live site in a headless Chromium at 1440×900 and 390×844, after dismissing consent UI and scrolling the full page height so lazy and scroll-triggered layout existed before measuring. Nothing here is estimated; anything that could not be read says "not measurable"._

**Sites attempted: ${attempted} · successfully measured: ${measured} · could not measure: ${failed.length}**

${NOTES._intro || ''}

---

## Master comparison

Ranked by measured coherence evidence (left-edge discipline first, then font-size discipline). Ranking is mechanical — it is not a recommendation. The three recommended candidates are called out below the table.

${master}

${NOTES._recommendations || ''}

---

${NOTES._contradictions || ''}

---

## Candidates in detail

${sections.join('\n---\n')}

---

## Could not measure

${failed.length ? failed.map((f) => `- **${f.name}** — ${f.url}\n  ${f.why}${f.note ? `\n  ${f.note}` : ''}`).join('\n') : '_none_'}

---

## Method

- Headless Chromium (Playwright ${JSON.parse(fs.readFileSync(path.join(HERE, 'node_modules', 'playwright', 'package.json'), 'utf8')).version}), two viewports: 1440×900 and 390×844 (the mobile pass uses a mobile UA and touch).
- \`domcontentloaded\` → \`networkidle\` (25s cap) → 2.5s settle → \`document.fonts.ready\`.
- Consent UI dismissed before measuring, preferring the reject/necessary-only option where one existed.
- Full page scrolled in 0.7-viewport steps, then returned to top, so scroll-triggered and lazy layout is present at measurement time. Sites using a transformed-wrapper "virtual scroll" (where \`document.scrollHeight\` stays at one viewport) are driven with real wheel events and their true content height is taken as the maximum element bottom.
- **Left edges** use a transform-immune layout left (accumulated \`offsetLeft\` up the \`offsetParent\` chain), not \`getBoundingClientRect().left\`, so a section parked mid-reveal by a CSS transform still reports its real grid position. Both are recorded in \`measurements.json\`.
- **Distinct font-size count** counts every rendered element that paints at least one character. The parenthesised second number counts only sizes used by two or more elements, which strips one-off accidents from the real scale.
- **Reading measure** follows the brief's method: the rendered width of a 100-character string in the element's exact computed font, divided into the column's content width. The conventional \`0\`-glyph ch value is also recorded in \`measurements.json\`.
- Sites with fewer than 15 rendered text nodes are recorded as not measurable rather than reported with thin data.
`;

fs.writeFileSync(path.join(HERE, 'CANDIDATES.md'), doc.trimStart());
console.log(`CANDIDATES.md — ${measured} measured, ${failed.length} failed`);
console.log('ranking:', ranked.map((r) => r.slug).join(' > '));

// ---- THAI-STRESS.md -------------------------------------------------------
const thaiRows = M.sites.filter((s) => s.thai && s.thai.tests && s.thai.tests.display && !s.thai.tests.display.skipped);
const ctrl = control.map((c) => `| ${c.lineHeightRatio.toFixed(2)} | ${c.worst >= 0 ? '✅ clears' : '❌ collides'} | ${c.worst.toFixed(2)}px |`).join('\n');

// Interpolate the exact collision threshold from the control sweep rather than
// quoting a remembered number.
const ctrlThreshold = (() => {
  const sorted = [...control].sort((a, b) => a.lineHeightRatio - b.lineHeightRatio);
  for (let i = 1; i < sorted.length; i++) {
    const lo = sorted[i - 1], hi = sorted[i];
    if (lo.worst < 0 && hi.worst >= 0) {
      const t = lo.lineHeightRatio + (hi.lineHeightRatio - lo.lineHeightRatio) * (-lo.worst / (hi.worst - lo.worst));
      return { threshold: Math.round(t * 10000) / 10000, firstClear: hi };
    }
  }
  return null;
})();
const ctrlAt = (r) => control.find((c) => Math.abs(c.lineHeightRatio - r) < 1e-6);
const c125 = ctrlAt(1.25), c130 = ctrlAt(1.3), c120 = ctrlAt(1.2);

const thaiDoc = `# Thai stress test — do these type systems survive Thai?

Every candidate's **measured** display and body type system was re-applied to PlanC's real Thai copy in PlanC's real fonts — **Kanit 700** for display, **Anuphan 400** for body — not the reference site's own fonts. The question is only whether the *proportions* (size, leading, tracking, column width) hold up when Thai glyphs are poured into them.

## Method

Consecutive baselines in a block of text sit exactly \`line-height\` apart. So for any two adjacent lines:

\`\`\`
gap = lineHeightPx − inkDescent(upper line) − inkAscent(lower line)
\`\`\`

Ink extents come from canvas \`measureText\` \`actualBoundingBoxAscent\`/\`actualBoundingBoxDescent\` on **the actual text of each rendered line**, so a line containing ปุ๋ย or กุ๊กกิ๊ก is measured with its full stacked mark height, not an average. \`gap < 0\` means the upper vowel of one line touches the lower vowel of the line above.

Test strings:

\`\`\`
สร้างตัวตนที่เป็นของคุณ ไม่ใช่ของเทรนด์
เทรนด์มาแล้วก็ไป ตัวตนอยู่ต่อ
คุณคือครีเอเตอร์ที่รู้ว่าตัวเองคือใคร
เปี่ยม ปุ๋ย หญิง ปฏิญาณ ฟื้นฟู เรื่อง ที่ กุ๊กกิ๊ก
\`\`\`

A single line cannot collide with anything, so where a string did not wrap at the candidate's own column width, the column was narrowed until it did. The leading under test is therefore always genuinely exercised. Where this happened it is flagged in \`thai/thai-results.json\` as \`widthOverridden\`.

## Control — PlanC's own current system

Kanit 700 at 64px, no tracking, 700px column. This is a check on the harness, not on any candidate:

| line-height | verdict | worst gap |
|---|---|---|
${ctrl}

**This independently confirms the \`line-height: 1.30\` already in the build — and shows it has less margin than it looks.** Interpolating the sweep, the collision threshold is **${ctrlThreshold ? ctrlThreshold.threshold : '—'}**. So 1.25 still collides (by ${c125 ? Math.abs(c125.worst).toFixed(2) : '—'}px) and 1.30 clears by only **${c130 ? c130.worst.toFixed(2) : '—'}px** at 64px. 1.30 is not a conservative choice; it is the first round value above the floor. Do not reduce it, and treat any candidate's leading below ~1.29 as unusable rather than borderline.

Note which string drives the number. At 1.20 the ordinary headline strings are already clear or nearly so, while \`เปี่ยม ปุ๋ย หญิง ปฏิญาณ ฟื้นฟู เรื่อง ที่ กุ๊กกิ๊ก\` — the deliberate stacked-mark stress list — is still ${c120 ? Math.abs(c120.worst).toFixed(2) : '—'}px into collision. A type system tested only on ordinary Thai copy will look safe and then break on a real headline containing ปุ๋ย or กุ๊กกิ๊ก.

**A note on how this number was reached.** The first run of this harness produced a threshold about 0.05 lower, because \`document.fonts.load()\` without a text argument only requests the Latin unicode-range subset of a Google font — Thai text was silently measured against a fallback face with different vertical metrics. The harness now passes the Thai sample to both \`load()\` and \`check()\` and asserts all four faces resolve before measuring. Anyone reusing this technique should do the same; the failure is silent and the numbers look plausible.

## Per-candidate results

| site | their display lh | Thai-safe minimum | correction | collides as-is? | their body lh | body Thai-safe |
|---|---:|---:|---:|---|---:|---:|
${thaiRows.map((s) => {
  const d = s.thai.tests.display, b = s.thai.tests.body;
  return `| ${s.name} | ${n(d.applied.lineHeightRatio, 2)} | ${d.notViable ? '—' : n(Math.max(d.minThaiSafeRatio, THAI_FLOOR), 3)} | ${d.notViable ? 'not viable' : (Math.max(d.minThaiSafeRatio, THAI_FLOOR) - d.applied.lineHeightRatio > 0.001 ? `**+${n(Math.max(d.minThaiSafeRatio, THAI_FLOOR) - d.applied.lineHeightRatio, 2)}**` : 'none needed')} | ${d.asIs.collides ? `yes (${n(d.asIs.minGapPx, 1)}px)` : `no (+${n(d.asIs.minGapPx, 1)}px clear)`} | ${b && b.applied ? n(b.applied.lineHeightRatio, 2) : '—'} | ${b && b.minThaiSafeRatio ? n(b.minThaiSafeRatio, 3) : '—'} |`;
}).join('\n')}

${NOTES._thaiProse || ''}

Raw per-line ink measurements for every candidate are in \`thai/thai-results.json\`; the control sweep is in \`thai/control-kanit.json\`.
`;

fs.writeFileSync(path.join(HERE, 'THAI-STRESS.md'), thaiDoc.trimStart());
console.log('THAI-STRESS.md written');
