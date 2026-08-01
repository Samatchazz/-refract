// probe-effect.mjs — recover animation CONSTANTS by dense measurement.
//
// scrape.mjs sweeps the whole page coarsely. This one aims at ONE element and samples
// densely enough to recover the actual numbers: easing curve, stagger delay, marquee
// speed, magnetic strength, cursor lerp, spring stiffness/damping.
//
// Nothing here reads the theme's source. Every number comes out of measured motion.
//
//   node research/pixelcraft/probe-effect.mjs --url <URL> --mode scroll \
//        --sel ".hero-image" --from 0 --to 2400 [--steps 60]
//
//   --mode scroll    sample rect/transform across a scroll range → fit easing
//   --mode time      sample over N seconds of wall clock  → fit easing + duration
//   --mode marquee   measure px/sec of a scrolling track
//   --mode stagger   measure the delay between siblings entering their reveal
//   --mode hover     map transform response across a grid of mouse positions
//   --mode cursor    step the mouse, sample the follower each frame → fit lerp
//
// Output: research/pixelcraft/out/effects/<name>.json  (+ --name to label it)

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

let chromium;
try { ({ chromium } = await import('playwright')); }
catch { console.error('!! playwright not installed — see BRIEF §3.1'); process.exit(1); }

const HERE = path.dirname(fileURLToPath(import.meta.url));
const argv = process.argv.slice(2);
const arg = (k, d = null) => { const i = argv.indexOf(k); return i >= 0 ? argv[i + 1] : d; };
const num = (k, d) => { const v = arg(k); return v === null ? d : +v; };

const URL_ = arg('--url');
const MODE = arg('--mode', 'scroll');
const SEL = arg('--sel');
const NAME = arg('--name', `${MODE}_${(SEL || 'x').replace(/[^\w]+/g, '_').slice(0, 30)}`);
const OUT = path.join(HERE, arg('--out', 'out'), 'effects');
if (!URL_) { console.error('!! --url required'); process.exit(1); }
fs.mkdirSync(OUT, { recursive: true });
const log = (...a) => console.log('[probe-effect]', ...a);

// ===========================================================================
// Curve fitting — pure maths, runs in Node on the measured samples
// ===========================================================================

// Standard easing library, expressed as progress p∈[0,1] → eased value.
// Names match GSAP / CSS conventions so the result is directly usable.
const EASES = {
  'linear': (p) => p,
  'power1.in': (p) => p ** 2, 'power1.out': (p) => 1 - (1 - p) ** 2,
  'power1.inOut': (p) => p < .5 ? 2 * p * p : 1 - 2 * (1 - p) ** 2,
  'power2.in': (p) => p ** 3, 'power2.out': (p) => 1 - (1 - p) ** 3,
  'power2.inOut': (p) => p < .5 ? 4 * p ** 3 : 1 - 4 * (1 - p) ** 3,
  'power3.in': (p) => p ** 4, 'power3.out': (p) => 1 - (1 - p) ** 4,
  'power3.inOut': (p) => p < .5 ? 8 * p ** 4 : 1 - 8 * (1 - p) ** 4,
  'power4.in': (p) => p ** 5, 'power4.out': (p) => 1 - (1 - p) ** 5,
  'power4.inOut': (p) => p < .5 ? 16 * p ** 5 : 1 - 16 * (1 - p) ** 5,
  'sine.in': (p) => 1 - Math.cos(p * Math.PI / 2), 'sine.out': (p) => Math.sin(p * Math.PI / 2),
  'sine.inOut': (p) => -(Math.cos(Math.PI * p) - 1) / 2,
  'expo.in': (p) => p === 0 ? 0 : 2 ** (10 * p - 10), 'expo.out': (p) => p === 1 ? 1 : 1 - 2 ** (-10 * p),
  'expo.inOut': (p) => p === 0 ? 0 : p === 1 ? 1 : p < .5 ? 2 ** (20 * p - 10) / 2 : (2 - 2 ** (-20 * p + 10)) / 2,
  'circ.out': (p) => Math.sqrt(1 - (p - 1) ** 2), 'circ.in': (p) => 1 - Math.sqrt(1 - p ** 2),
  'circ.inOut': (p) => p < .5 ? (1 - Math.sqrt(1 - 4 * p * p)) / 2 : (Math.sqrt(1 - 4 * (1 - p) ** 2) + 1) / 2,
  'back.out(1.7)': (p) => 1 + 2.70158 * (p - 1) ** 3 + 1.70158 * (p - 1) ** 2,
  'back.in(1.7)': (p) => 2.70158 * p ** 3 - 1.70158 * p ** 2,
};

// Generic cubic-bezier(x1,y1,x2,y2) — CSS's own primitive. Any named ease maps to one,
// so fitting this gives a value that can be pasted straight into a transition.
function bezier(x1, y1, x2, y2) {
  const cx = 3 * x1, bx = 3 * (x2 - x1) - cx, ax = 1 - cx - bx;
  const cy = 3 * y1, by = 3 * (y2 - y1) - cy, ay = 1 - cy - by;
  const sx = (t) => ((ax * t + bx) * t + cx) * t;
  const dx = (t) => (3 * ax * t + 2 * bx) * t + cx;
  const sy = (t) => ((ay * t + by) * t + cy) * t;
  return (p) => {
    let t = p;
    for (let i = 0; i < 8; i++) { const e = sx(t) - p; if (Math.abs(e) < 1e-6) break; const d = dx(t); if (Math.abs(d) < 1e-6) break; t -= e / d; }
    return sy(Math.max(0, Math.min(1, t)));
  };
}

const rms = (pts, fn) => Math.sqrt(pts.reduce((a, [p, v]) => a + (fn(p) - v) ** 2, 0) / pts.length);

function fitEasing(pts) {
  // pts: [[progress 0..1, value 0..1], …]
  if (pts.length < 5) return { error: 'too few samples', samples: pts.length };
  const named = Object.entries(EASES).map(([name, fn]) => ({ name, rms: +rms(pts, fn).toFixed(5) }))
    .sort((a, b) => a.rms - b.rms);
  // coarse grid then local refine on cubic-bezier
  let best = { p: [0.25, 0.1, 0.25, 1], rms: Infinity };
  const grid = [0, .15, .3, .45, .6, .75, .9, 1];
  for (const x1 of grid) for (const y1 of [0, .2, .5, .8, 1, 1.3]) for (const x2 of grid) for (const y2 of [0, .3, .6, .9, 1, 1.2]) {
    const e = rms(pts, bezier(x1, y1, x2, y2));
    if (e < best.rms) best = { p: [x1, y1, x2, y2], rms: e };
  }
  for (let step = 0.08; step > 0.004; step /= 2) {
    let improved = true;
    while (improved) {
      improved = false;
      for (let i = 0; i < 4; i++) for (const d of [step, -step]) {
        const q = best.p.slice(); q[i] += d;
        if (i % 2 === 0 && (q[i] < 0 || q[i] > 1)) continue;      // x must stay in [0,1]
        const e = rms(pts, bezier(...q));
        if (e < best.rms - 1e-7) { best = { p: q, rms: e }; improved = true; }
      }
    }
  }
  return {
    samples: pts.length,
    bestNamed: named[0], runnersUp: named.slice(1, 4),
    cubicBezier: `cubic-bezier(${best.p.map((v) => +v.toFixed(3)).join(', ')})`,
    cubicBezierRms: +best.rms.toFixed(5),
    verdict: named[0].rms < 0.02 ? `confident: ${named[0].name}`
      : best.rms < 0.02 ? 'no named ease fits well — use the cubic-bezier'
        : 'poor fit — motion is probably not a single tween (spring, physics, or two chained tweens)',
  };
}

// exponential lerp:  x_{n+1} = x_n + (target - x_n) * k   →   x(n) = target*(1-(1-k)^n)
function fitLerp(series, target) {
  let best = { k: null, rms: Infinity };
  for (let k = 0.01; k <= 0.6; k += 0.002) {
    let e = 0;
    for (let n = 0; n < series.length; n++) { const pred = target * (1 - (1 - k) ** (n + 1)); e += (pred - series[n]) ** 2; }
    e = Math.sqrt(e / series.length);
    if (e < best.rms) best = { k: +k.toFixed(4), rms: +e.toFixed(4) };
  }
  return best;
}

// damped spring from overshoot + settle behaviour
function fitSpring(series, target) {
  const peak = Math.max(...series.map(Math.abs));
  const overshoot = target ? (peak - Math.abs(target)) / Math.abs(target) : 0;
  if (overshoot <= 0.01) return { type: 'overdamped or non-spring', overshoot: +overshoot.toFixed(3) };
  const zeta = -Math.log(overshoot) / Math.sqrt(Math.PI ** 2 + Math.log(overshoot) ** 2);
  const peakIdx = series.findIndex((v) => Math.abs(v) === peak);
  const tPeak = (peakIdx + 1) / 60;                       // assume ~60fps sampling
  const wd = Math.PI / Math.max(tPeak, 1e-3);
  const wn = wd / Math.sqrt(Math.max(1 - zeta ** 2, 1e-6));
  return {
    type: 'underdamped spring', overshoot: +overshoot.toFixed(3),
    dampingRatio: +zeta.toFixed(3), naturalFreqHz: +(wn / (2 * Math.PI)).toFixed(2),
    gsapEquivalent: `elastic.out(1, ${(+zeta.toFixed(2))})`,
    cssNote: 'CSS cannot express this; implement as a rAF spring loop',
  };
}

// ===========================================================================
const UA = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36';
// Same fallback chain as scrape.mjs: bundled Chromium, else the machine's Chrome/Edge,
// so `npx playwright install` is never required.
const browser = await (async () => {
  const base = { headless: true, args: ['--autoplay-policy=no-user-gesture-required'] };
  const want = arg('--browser');
  const attempts = process.env.PW_CHROME ? [{ l: 'PW_CHROME', o: { ...base, executablePath: process.env.PW_CHROME } }]
    : want ? [{ l: want, o: { ...base, ...(want === 'chromium' ? {} : { channel: want }) } }]
      : [{ l: 'bundled chromium', o: base }, { l: 'Chrome', o: { ...base, channel: 'chrome' } }, { l: 'Edge', o: { ...base, channel: 'msedge' } }];
  const errs = [];
  for (const a of attempts) {
    try { const b = await chromium.launch(a.o); log('browser:', a.l); return b; }
    catch (e) { errs.push(`${a.l}: ${e.message.split('\n')[0].slice(0, 100)}`); }
  }
  console.error('!! no usable browser:\n  ' + errs.join('\n  ') + '\n  Install Chrome or Edge, or use --browser chrome|msedge|chromium');
  process.exit(1);
})();
const ctx = await browser.newContext({ viewport: { width: num('--w', 1440), height: num('--h', 900) }, userAgent: UA, reducedMotion: 'no-preference' });
const page = await ctx.newPage();
const result = { mode: MODE, url: URL_, selector: SEL, capturedAt: new Date().toISOString() };

try {
  await page.goto(URL_, { waitUntil: 'domcontentloaded', timeout: 120000 });
  try { await page.evaluate(() => document.fonts && document.fonts.ready); } catch { }
  await page.waitForTimeout(6000);

  const stable = () => page.evaluate(() => new Promise((res) => {
    let last = null, same = 0, t0 = performance.now();
    const tick = () => {
      const v = Array.from(document.querySelectorAll('body *')).slice(0, 30).map((e) => Math.round(e.getBoundingClientRect().top)).join();
      if (v === last) same++; else { same = 0; last = v; }
      if (same >= 3 || performance.now() - t0 > 2000) return res();
      requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }));

  // -----------------------------------------------------------------------
  if (MODE === 'scroll') {
    const from = num('--from', 0), to = num('--to', 2000), steps = num('--steps', 60);
    const raw = [];
    for (let i = 0; i <= steps; i++) {
      const y = Math.round(from + (to - from) * (i / steps));
      await page.evaluate((yy) => window.scrollTo(0, yy), y);
      await page.waitForTimeout(90);
      await stable();
      const s = await page.evaluate((sel) => {
        const el = document.querySelector(sel); if (!el) return null;
        const r = el.getBoundingClientRect(); const c = getComputedStyle(el);
        const m = new DOMMatrixReadOnly(c.transform === 'none' ? '' : c.transform);
        return { top: r.top, left: r.left, w: r.width, h: r.height, opacity: +c.opacity, tx: m.m41, ty: m.m42, scale: m.a, y: window.pageYOffset };
      }, SEL);
      if (s) raw.push({ target: y, ...s });
    }
    if (!raw.length) throw new Error(`selector matched nothing: ${SEL}`);
    result.samples = raw;
    // Which channel actually moved? Fit whichever has the largest range.
    const channels = ['ty', 'tx', 'scale', 'opacity', 'top'];
    const last = raw.length - 1;
    // Normalise on FIRST→LAST, not min→max: a downward parallax decreases, and min/max
    // normalisation would flip it, so every (monotonically increasing) easing fits terribly.
    const ranges = channels.map((k) => ({
      k, first: raw[0][k], last: raw[last][k],
      min: Math.min(...raw.map((r) => r[k])), max: Math.max(...raw.map((r) => r[k])),
    })).map((c) => ({ ...c, span: c.last - c.first, absSpan: Math.abs(c.last - c.first), extent: c.max - c.min }));
    result.channelRanges = ranges;
    const drive = ranges.filter((c) => c.k !== 'top').sort((a, b) => b.absSpan - a.absSpan)[0];
    result.drivenChannel = drive;
    if (drive.absSpan < 0.5) {
      result.fit = { verdict: 'no measurable animated channel — the element may just be in normal flow, or the scroll range is wrong' };
    } else {
      const pts = raw.map((r, i) => [i / last, (r[drive.k] - drive.first) / drive.span]);
      result.fit = fitEasing(pts);
      result.fit.channel = drive.k;
      result.fit.direction = drive.span < 0 ? 'decreasing' : 'increasing';
      result.fit.totalTravel = +drive.span.toFixed(2);
      result.fit.perScrollPixel = +(drive.span / (to - from)).toFixed(4);
      // extent noticeably larger than the net span means the motion reverses inside the
      // window — a single tween cannot describe it, so say so rather than fitting noise.
      if (drive.extent > drive.absSpan * 1.15) {
        result.fit.nonMonotonic = { extent: +drive.extent.toFixed(2), netSpan: +drive.span.toFixed(2) };
        result.fit.verdict = 'motion reverses within this window — split the range at the turning point and fit each leg separately';
      }
    }
  }

  // -----------------------------------------------------------------------
  if (MODE === 'time') {
    const secs = num('--secs', 3);
    const series = await page.evaluate(async ([sel, s]) => {
      const el = document.querySelector(sel); if (!el) return null;
      const out = []; const t0 = performance.now();
      await new Promise((res) => {
        const tick = () => {
          const c = getComputedStyle(el); const m = new DOMMatrixReadOnly(c.transform === 'none' ? '' : c.transform);
          out.push({ t: +(performance.now() - t0).toFixed(1), tx: m.m41, ty: m.m42, scale: m.a, opacity: +c.opacity });
          if (performance.now() - t0 > s * 1000) return res();
          requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      });
      return out;
    }, [SEL, secs]);
    if (!series) throw new Error(`selector matched nothing: ${SEL}`);
    result.samples = series;
    const ch = ['tx', 'ty', 'scale', 'opacity'].map((k) => ({ k, span: Math.max(...series.map((s) => s[k])) - Math.min(...series.map((s) => s[k])) }))
      .sort((a, b) => Math.abs(b.span) - Math.abs(a.span))[0];
    result.drivenChannel = ch;
    const mn = Math.min(...series.map((s) => s[ch.k]));
    const pts = series.map((s, i) => [i / (series.length - 1), (s[ch.k] - mn) / (ch.span || 1)]);
    result.fit = fitEasing(pts);
    result.fit.channel = ch.k;
    result.fit.observedDurationMs = series[series.length - 1].t;
    result.fit.fps = +(series.length / secs).toFixed(1);
  }

  // -----------------------------------------------------------------------
  if (MODE === 'marquee') {
    const r = await page.evaluate(async (sel) => {
      const el = document.querySelector(sel); if (!el) return null;
      const read = () => { const m = new DOMMatrixReadOnly(getComputedStyle(el).transform === 'none' ? '' : getComputedStyle(el).transform); return { x: m.m41, t: performance.now() }; };
      const a = read(); await new Promise((s) => setTimeout(s, 1500)); const b = read();
      const width = el.getBoundingClientRect().width;
      const dur = getComputedStyle(el).animationDuration;
      // Copies may be element children, or the same text repeated inside one node.
      let copies = el.children.length;
      if (copies < 2) {
        const t = (el.textContent || '').trim();
        for (let n = 2; n <= 6; n++) { const unit = t.slice(0, Math.floor(t.length / n)); if (unit.length > 4 && unit.repeat(n).replace(/\s+/g, '') === t.replace(/\s+/g, '').slice(0, unit.repeat(n).replace(/\s+/g, '').length) && t.replace(/\s+/g, '').length / unit.replace(/\s+/g, '').length >= n) { copies = n; break; } }
      }
      return { a, b, width, cssDuration: dur, children: el.children.length, copies, textLen: (el.textContent || '').trim().length };
    }, SEL);
    if (!r) throw new Error(`selector matched nothing: ${SEL}`);
    const dx = r.b.x - r.a.x, dt = (r.b.t - r.a.t) / 1000;
    result.measured = {
      pxPerSecond: +(dx / dt).toFixed(1), direction: dx < 0 ? 'right-to-left' : 'left-to-right',
      trackWidthPx: +r.width.toFixed(1), duplicatedCopies: r.copies, elementChildren: r.children,
      secondsForOneCopy: r.copies > 1 ? +((r.width / r.copies) / Math.abs(dx / dt)).toFixed(2) : null,
      cssAnimationDuration: r.cssDuration,
      rebuildHint: 'translateX from 0 to -100%/copies over secondsForOneCopy, linear, infinite',
    };
  }

  // -----------------------------------------------------------------------
  if (MODE === 'stagger') {
    const from = num('--from', 0), to = num('--to', 1600), steps = num('--steps', 50);
    const series = [];
    for (let i = 0; i <= steps; i++) {
      const y = Math.round(from + (to - from) * (i / steps));
      await page.evaluate((yy) => window.scrollTo(0, yy), y);
      await page.waitForTimeout(70);
      const row = await page.evaluate((sel) => Array.from(document.querySelectorAll(sel)).map((el) => {
        const c = getComputedStyle(el); const m = new DOMMatrixReadOnly(c.transform === 'none' ? '' : c.transform);
        return { o: +c.opacity, ty: +m.m42.toFixed(2) };
      }), SEL);
      series.push({ y, row });
    }
    result.samples = series;
    const n = series[0].row.length;
    const crossings = [];
    for (let k = 0; k < n; k++) {
      const idx = series.findIndex((s) => s.row[k] && s.row[k].o > 0.5);
      crossings.push(idx >= 0 ? series[idx].y : null);
    }
    const deltas = [];
    for (let k = 1; k < crossings.length; k++) if (crossings[k] != null && crossings[k - 1] != null) deltas.push(crossings[k] - crossings[k - 1]);
    const med = deltas.slice().sort((a, b) => a - b)[Math.floor(deltas.length / 2)];
    result.measured = {
      itemCount: n, revealScrollY: crossings, deltasScrollPx: deltas, medianDeltaScrollPx: med ?? null,
      note: 'scroll-driven stagger is expressed in scroll pixels, not ms. If all deltas are ~0 the reveal is simultaneous, not staggered.',
    };
  }

  // -----------------------------------------------------------------------
  if (MODE === 'hover') {
    const box = await page.evaluate((sel) => { const el = document.querySelector(sel); if (!el) return null; el.scrollIntoView({ block: 'center' }); const r = el.getBoundingClientRect(); return { x: r.left, y: r.top, w: r.width, h: r.height }; }, SEL);
    if (!box) throw new Error(`selector matched nothing: ${SEL}`);
    await page.waitForTimeout(600);
    const grid = [];
    for (const fy of [0.15, 0.5, 0.85]) for (const fx of [0.15, 0.5, 0.85]) {
      const px = Math.round(box.x + box.w * fx), py = Math.round(box.y + box.h * fy);
      await page.mouse.move(px, py, { steps: 4 });
      await page.waitForTimeout(700);
      const s = await page.evaluate((sel) => { const el = document.querySelector(sel); const c = getComputedStyle(el);
        const m = new DOMMatrixReadOnly(c.transform === 'none' ? '' : c.transform);
        return { tx: +m.m41.toFixed(2), ty: +m.m42.toFixed(2), scale: +m.a.toFixed(4), rotate: +(Math.atan2(m.b, m.a) * 180 / Math.PI).toFixed(2), bg: c.backgroundColor, color: c.color, filter: c.filter.slice(0, 40) }; }, SEL);
      grid.push({ fx, fy, ...s });
    }
    await page.mouse.move(5, 5); await page.waitForTimeout(700);
    const rest = await page.evaluate((sel) => { const c = getComputedStyle(document.querySelector(sel)); const m = new DOMMatrixReadOnly(c.transform === 'none' ? '' : c.transform); return { tx: +m.m41.toFixed(2), ty: +m.m42.toFixed(2), scale: +m.a.toFixed(4) }; }, SEL);
    const spanX = Math.max(...grid.map((g) => g.tx)) - Math.min(...grid.map((g) => g.tx));
    const spanR = Math.max(...grid.map((g) => g.rotate)) - Math.min(...grid.map((g) => g.rotate));
    result.rest = rest; result.grid = grid;
    result.measured = {
      magnetic: spanX > 1.5, magnetTravelPx: +spanX.toFixed(2),
      magnetCoefficient: spanX > 1.5 ? +(spanX / (box.w * 0.7)).toFixed(3) : null,
      tilt: spanR > 0.5, tiltRangeDeg: +spanR.toFixed(2),
      liftPx: +(Math.min(...grid.map((g) => g.ty)) - rest.ty).toFixed(2),
      scaleOnHover: +(grid[4].scale / (rest.scale || 1)).toFixed(4),
      note: 'magnetCoefficient = travel divided by the distance the cursor moved across the element',
    };
  }

  // -----------------------------------------------------------------------
  if (MODE === 'cursor') {
    const sel = SEL || '[class*=cursor]';
    await page.mouse.move(200, 200); await page.waitForTimeout(1200);
    const series = await page.evaluate(async ([s, tx, ty]) => {
      const el = document.querySelector(s); if (!el) return null;
      const read = () => { const c = getComputedStyle(el); const m = new DOMMatrixReadOnly(c.transform === 'none' ? '' : c.transform); return { x: m.m41, y: m.m42, l: el.getBoundingClientRect().left, t: el.getBoundingClientRect().top }; };
      const start = read(); const out = [];
      window.dispatchEvent(new MouseEvent('mousemove', { clientX: tx, clientY: ty, bubbles: true }));
      document.dispatchEvent(new MouseEvent('mousemove', { clientX: tx, clientY: ty, bubbles: true }));
      await new Promise((res) => { let n = 0; const tick = () => { out.push(read()); if (++n > 90) return res(); requestAnimationFrame(tick); }; requestAnimationFrame(tick); });
      return { start, out };
    }, [sel, 1100, 700]);
    if (!series) throw new Error(`no cursor element matched: ${sel}`);
    const dl = series.out.map((o) => o.l - series.start.l);
    const target = dl[dl.length - 1];
    result.samples = series.out.slice(0, 90);
    result.measured = {
      targetTravelPx: +target.toFixed(1),
      lerpFit: fitLerp(dl, target),
      framesTo95pct: dl.findIndex((v) => Math.abs(v) >= Math.abs(target) * 0.95) + 1 || null,
      spring: fitSpring(dl, target),
      note: 'lerpFit.k is the per-frame catch-up factor: pos += (target - pos) * k inside rAF',
    };
  }

  const f = path.join(OUT, `${NAME}.json`);
  fs.writeFileSync(f, JSON.stringify(result, null, 2));
  log('wrote', path.relative(process.cwd(), f));
  const summary = result.fit || result.measured || {};
  for (const [k, v] of Object.entries(summary)) if (typeof v !== 'object') log(`  ${k}: ${v}`);
  if (result.fit && result.fit.bestNamed) log(`  bestNamed: ${result.fit.bestNamed.name} (rms ${result.fit.bestNamed.rms}) · ${result.fit.cubicBezier}`);
} catch (e) {
  console.error('!! failed:', e.message);
  result.error = e.message;
  fs.writeFileSync(path.join(OUT, `${NAME}.error.json`), JSON.stringify(result, null, 2));
  process.exitCode = 1;
} finally {
  await browser.close();
}
