// thai-stress.mjs — applies each candidate's MEASURED heading/body type system to
// PlanC's real Thai copy in PlanC's real fonts (Kanit display / Anuphan body) and
// detects glyph-ink collision between consecutive lines.
//
// Method (same one that established line-height 1.30 for this project):
//   Consecutive baselines are exactly line-height apart. Therefore
//       gap(i-1, i) = lineHeightPx - inkDescent(line i-1) - inkAscent(line i)
//   Ink extents come from canvas measureText actualBoundingBoxAscent/Descent on the
//   ACTUAL text of each rendered line, so stacked marks (ปุ๋ย, กุ๊กกิ๊ก) are counted.
//   gap < 0  ->  the upper vowel of one line touches the lower vowel of the line above.
import { chromium } from 'playwright';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const HERE = path.dirname(fileURLToPath(import.meta.url));

const THAI = [
  { id: 'h-1', text: 'สร้างตัวตนที่เป็นของคุณ ไม่ใช่ของเทรนด์' },
  { id: 'h-2', text: 'เทรนด์มาแล้วก็ไป ตัวตนอยู่ต่อ' },
  { id: 'h-3', text: 'คุณคือครีเอเตอร์ที่รู้ว่าตัวเองคือใคร' },
  { id: 'stress', text: 'เปี่ยม ปุ๋ย หญิง ปฏิญาณ ฟื้นฟู เรื่อง ที่ กุ๊กกิ๊ก' },
];

const PAGE = `<!doctype html><html lang="th"><head><meta charset="utf-8">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Kanit:wght@400;500;700&family=Anuphan:wght@100..700&display=block">
<style>html,body{margin:0;padding:0}#probe{margin:0;padding:0;border:0;position:absolute;top:0;left:0;white-space:normal;overflow-wrap:break-word}</style>
</head><body><div id="probe"></div><canvas id="cv" width="10" height="10"></canvas></body></html>`;

const RUNNER = function () {
  const probe = document.getElementById('probe');
  const ctx = document.getElementById('cv').getContext('2d');

  function splitLines(text, style) {
    Object.assign(probe.style, style);
    probe.textContent = text;
    const tn = probe.firstChild;
    const range = document.createRange();
    const lines = [];
    let cur = null;
    for (let i = 0; i < text.length; i++) {
      range.setStart(tn, i);
      range.setEnd(tn, i + 1);
      const rects = range.getClientRects();
      if (!rects.length) { if (cur) cur.text += text[i]; continue; }
      const r = rects[0];
      if (r.width === 0 && r.height === 0) { if (cur) cur.text += text[i]; continue; }
      if (!cur || Math.abs(r.top - cur.top) > 2) {
        cur = { top: r.top, height: r.height, text: text[i] };
        lines.push(cur);
      } else {
        cur.text += text[i];
      }
    }
    return lines;
  }

  window.__run = function (spec) {
    // spec: {family, weight, fontSizePx, lineHeightPx, letterSpacingPx, widthPx}
    const style = {
      fontFamily: `"${spec.family}", sans-serif`,
      fontWeight: String(spec.weight),
      fontSize: spec.fontSizePx + 'px',
      lineHeight: spec.lineHeightPx === null ? 'normal' : spec.lineHeightPx + 'px',
      letterSpacing: spec.letterSpacingPx + 'px',
      width: spec.widthPx + 'px',
    };
    ctx.font = `${spec.weight} ${spec.fontSizePx}px "${spec.family}"`;
    if ('letterSpacing' in ctx) ctx.letterSpacing = spec.letterSpacingPx + 'px';

    const out = [];
    for (const item of spec.strings) {
      let usedWidth = spec.widthPx;
      let lines = splitLines(item.text, style);
      // A single line cannot collide with anything. Narrow the column until the
      // string actually wraps, so the leading under test is genuinely exercised.
      let guard = 0;
      while (lines.length < 2 && guard++ < 12) {
        const natural = ctx.measureText(item.text).width;
        usedWidth = Math.max(120, Math.round(Math.min(usedWidth, natural) * 0.6));
        lines = splitLines(item.text, { ...style, width: usedWidth + 'px' });
      }
      const widthOverridden = usedWidth !== spec.widthPx;
      const ink = lines.map((L) => {
        const m = ctx.measureText(L.text);
        return {
          text: L.text.slice(0, 40),
          ascent: Math.round(m.actualBoundingBoxAscent * 100) / 100,
          descent: Math.round(m.actualBoundingBoxDescent * 100) / 100,
        };
      });
      // Baseline-to-baseline distance is read from the rendered line boxes rather
      // than assumed, so `line-height: normal` is handled the same as a declared value.
      const gaps = [];
      let worstStack = 0;
      let spacingSum = 0;
      for (let i = 1; i < ink.length; i++) {
        const spacing = lines[i].top - lines[i - 1].top;
        spacingSum += spacing;
        gaps.push(Math.round((spacing - ink[i - 1].descent - ink[i].ascent) * 100) / 100);
        worstStack = Math.max(worstStack, ink[i - 1].descent + ink[i].ascent);
      }
      const measuredSpacing = ink.length > 1 ? spacingSum / (ink.length - 1) : null;
      out.push({
        id: item.id,
        lineCount: lines.length,
        usedWidthPx: usedWidth,
        widthOverridden,
        measuredLineSpacingPx: measuredSpacing === null ? null : Math.round(measuredSpacing * 100) / 100,
        effectiveLineHeightRatio: measuredSpacing === null ? null : Math.round(measuredSpacing / spec.fontSizePx * 1000) / 1000,
        lines: ink,
        gaps,
        minGap: gaps.length ? Math.min(...gaps) : null,
        collides: gaps.some((g) => g < 0),
        requiredLineHeightPx: Math.ceil(worstStack * 100) / 100,
      });
    }
    return out;
  };
  return true;
};

// Google Fonts splits each family into unicode-range subsets. `document.fonts.load()`
// without a text argument only requests the subset covering its default probe string
// (Latin), so Thai text would silently measure against a fallback face with different
// vertical metrics. The Thai sample must be passed explicitly, and checked.
async function loadFonts(page, sample) {
  await page.setContent(PAGE, { waitUntil: 'networkidle' });
  await page.evaluate(async (text) => {
    const specs = ['700 100px Kanit', '400 100px Kanit', '500 100px Kanit', '700 100px Anuphan', '400 100px Anuphan'];
    await Promise.all(specs.map((s) => document.fonts.load(s, text)));
    await document.fonts.ready;
  }, sample);
  const ok = await page.evaluate((text) => ({
    kanit700: document.fonts.check('700 100px Kanit', text),
    kanit400: document.fonts.check('400 100px Kanit', text),
    anuphan400: document.fonts.check('400 100px Anuphan', text),
    anuphan700: document.fonts.check('700 100px Anuphan', text),
  }), sample);
  if (!ok.kanit700 || !ok.anuphan400) throw new Error(`Thai subsets not loaded: ${JSON.stringify(ok)}`);
  console.log('font check (Thai subset):', JSON.stringify(ok));
  await page.evaluate(RUNNER);
}

function pickSystems(raw) {
  // Choose the candidate's display/heading system and its body system from measured data.
  const t = raw.typeScale || {};
  const roles = t.roles || {};
  const heading = roles.biggestText && roles.biggestText.fontSize >= 24 ? roles.biggestText
    : (roles.h1 || (roles.h2All && roles.h2All[0]) || roles.biggestText);
  const h2 = (roles.h2All && roles.h2All.find(Boolean)) || null;
  const body = roles.body || null;
  const asSpec = (d, fallbackWidth) => {
    if (!d) return null;
    const lhRatio = d.lineHeightRatio || (d.lineHeightPx === 'normal' ? null : null);
    return {
      fontSize: d.fontSize,
      weight: d.fontWeight,
      lineHeightRatio: lhRatio,
      lineHeightPx: typeof d.lineHeightPx === 'number' ? d.lineHeightPx : null,
      letterSpacingEm: d.letterSpacingEm || 0,
      widthPx: Math.round(d.widthPx || fallbackWidth || 900),
      sourceFontFamily: d.fontFamily,
      sourceTag: d.tag,
    };
  };
  const domW = (raw.container && raw.container.dominantPairs && raw.container.dominantPairs[0])
    ? raw.container.dominantPairs[0].width : 900;
  return {
    display: asSpec(heading, domW),
    h2: asSpec(h2, domW),
    body: asSpec(body, domW),
  };
}

(async () => {
  const RAW = path.join(HERE, 'raw');
  const files = fs.readdirSync(RAW).filter((f) => f.endsWith('-1440.json'));
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1600, height: 1000 } });
  await loadFonts(page, THAI.map((t) => t.text).join(" "));

  const results = [];

  // Control run: PlanC's own current system (Kanit 700, lh 1.30) for reference.
  const controls = [];
  for (const lh of [1.0, 1.1, 1.2, 1.25, 1.3, 1.4, 1.5]) {
    const r = await page.evaluate((s) => window.__run(s), {
      family: 'Kanit', weight: 700, fontSizePx: 64, lineHeightPx: Math.round(64 * lh * 100) / 100,
      letterSpacingPx: 0, widthPx: 700, strings: THAI,
    });
    controls.push({ lineHeightRatio: lh, worst: Math.min(...r.map((x) => (x.minGap === null ? 999 : x.minGap))), detail: r });
  }
  fs.writeFileSync(path.join(HERE, 'thai', 'control-kanit.json'), JSON.stringify(controls, null, 2));

  for (const f of files) {
    const raw = JSON.parse(fs.readFileSync(path.join(RAW, f), 'utf8'));
    if (!raw.ok) continue;
    const sys = pickSystems(raw);
    const entry = { slug: raw.slug, name: raw.name, url: raw.url, systems: sys, tests: {} };

    for (const [role, spec] of Object.entries(sys)) {
      if (!spec || !spec.fontSize) { entry.tests[role] = { skipped: 'no measurable type role' }; continue; }
      const family = role === 'body' ? 'Anuphan' : 'Kanit';
      const weight = role === 'body' ? 400 : 700; // spec: test headings at weight 700
      const fontSizePx = spec.fontSize;
      // line-height:normal is a real design decision, not missing data — render it as
      // `normal` and read back the ratio Kanit actually produces.
      const declaredNormal = !spec.lineHeightPx && !spec.lineHeightRatio;
      const lineHeightRatio = declaredNormal ? null : (spec.lineHeightRatio || (spec.lineHeightPx / fontSizePx));
      const lineHeightPx = declaredNormal ? null : Math.round(fontSizePx * lineHeightRatio * 100) / 100;
      const letterSpacingPx = Math.round(spec.letterSpacingEm * fontSizePx * 100) / 100;
      const widthPx = Math.max(240, Math.min(spec.widthPx, 1400));

      const asIs = await page.evaluate((s) => window.__run(s), {
        family, weight, fontSizePx, lineHeightPx, letterSpacingPx, widthPx, strings: THAI,
      });
      // For `normal`, the ratio under test is whatever Kanit resolved it to.
      const effRatio = lineHeightRatio !== null ? lineHeightRatio
        : (asIs.map((x) => x.effectiveLineHeightRatio).find((x) => x) || 1.5);

      // Minimum Thai-safe line-height: bisect on the ratio until no collision anywhere.
      let lo = lineHeightRatio, hi = lineHeightRatio;
      const evalRatio = async (ratio) => {
        const r = await page.evaluate((s) => window.__run(s), {
          family, weight, fontSizePx, lineHeightPx: Math.round(fontSizePx * ratio * 100) / 100,
          letterSpacingPx, widthPx, strings: THAI,
        });
        const minGap = Math.min(...r.map((x) => (x.minGap === null ? 999 : x.minGap)));
        return { ok: minGap >= 0, minGap, r };
      };
      const base = await evalRatio(effRatio);
      let minSafe = null, notViable = false;
      if (base.ok) {
        lo = 0.7; hi = effRatio; // find the floor, i.e. how much headroom they have
        const bottom = await evalRatio(lo);
        if (bottom.ok) minSafe = lo; // safe even at 0.70 — single-line strings, no stacking risk
      } else {
        lo = effRatio; hi = 2.4;
        const top = await evalRatio(hi);
        if (!top.ok) notViable = true;
      }
      if (minSafe === null && !notViable) {
        for (let i = 0; i < 18; i++) {
          const mid = (lo + hi) / 2;
          const r = await evalRatio(mid);
          if (r.ok) hi = mid; else lo = mid;
        }
        minSafe = Math.round(hi * 1000) / 1000;
      }

      entry.tests[role] = {
        applied: { family, weight, fontSizePx, lineHeightRatio: Math.round(effRatio * 1000) / 1000, declaredNormal, lineHeightPx, letterSpacingPx, widthPx },
        sourceSystem: { fontFamily: spec.sourceFontFamily, tag: spec.sourceTag, weight: spec.weight },
        asIs: {
          collides: asIs.some((x) => x.collides),
          minGapPx: Math.min(...asIs.map((x) => (x.minGap === null ? 999 : x.minGap))),
          perString: asIs.map((x) => ({ id: x.id, lines: x.lineCount, minGap: x.minGap, collides: x.collides, requiredLineHeightPx: x.requiredLineHeightPx })),
        },
        minThaiSafeRatio: minSafe,
        notViable,
        leadingCorrection: minSafe === null ? null : Math.round((minSafe - effRatio) * 1000) / 1000,
      };
      console.log(`${raw.slug}/${role}: lh ${effRatio.toFixed(3)}${declaredNormal?"(normal)":""} -> safe ${minSafe} (${entry.tests[role].asIs.collides ? 'COLLIDES' : 'ok'})`);
    }
    results.push(entry);
  }

  fs.writeFileSync(path.join(HERE, 'thai', 'thai-results.json'), JSON.stringify(results, null, 2));
  await browser.close();
  console.log(`\nwrote ${results.length} candidate results`);
})();
