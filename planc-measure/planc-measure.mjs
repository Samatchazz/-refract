// planc-measure.mjs — forensic measurement for PlanC beauty deconstruction
// Usage: node planc-measure.mjs
// Requires: npm i playwright && npx playwright install chromium
// Outputs: ./out/<site>/{desktop-00.png ... , mobile-00.png ...} + ./out/metrics.json

import { chromium } from 'playwright';
import fs from 'node:fs';

const SITES = [
  { name: 'studiobjork',   url: 'https://studiobjork.com' },
  { name: 'kwokyinmak',    url: 'https://www.kwokyinmak.com' },
  { name: 'henriheymans',  url: 'https://henriheymans.com' },
  { name: 'bluxstudio',    url: 'https://bluxstudio.com' },
  { name: 'poolsuite',     url: 'https://poolsuite.net' },
  { name: 'rleonardi',     url: 'https://www.rleonardi.com/interactive-resume/' },
];

const DESKTOP = { width: 1440, height: 900 };
const MOBILE  = { width: 390,  height: 844 };
const MAX_SHOTS = 14;

// Runs inside the page: ink coverage %, font census, motion census
const PAGE_METRICS = () => {
  const vw = innerWidth, vh = innerHeight;

  // ---- ink coverage of current viewport (text + media rects on a grid) ----
  const COLS = 96, ROWS = 60;
  const grid = new Uint8Array(COLS * ROWS);
  const mark = (r) => {
    if (r.width <= 0 || r.height <= 0) return;
    const x0 = Math.max(0, Math.floor(r.left / vw * COLS));
    const x1 = Math.min(COLS - 1, Math.floor(r.right / vw * COLS));
    const y0 = Math.max(0, Math.floor(r.top / vh * ROWS));
    const y1 = Math.min(ROWS - 1, Math.floor(r.bottom / vh * ROWS));
    if (r.right < 0 || r.left > vw || r.bottom < 0 || r.top > vh) return;
    for (let y = y0; y <= y1; y++) for (let x = x0; x <= x1; x++) grid[y * COLS + x] = 1;
  };
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  let n;
  while ((n = walker.nextNode())) {
    if (!n.textContent.trim()) continue;
    const el = n.parentElement;
    if (!el) continue;
    const cs = getComputedStyle(el);
    if (cs.display === 'none' || cs.visibility === 'hidden' || +cs.opacity === 0) continue;
    const range = document.createRange();
    range.selectNodeContents(n);
    for (const r of range.getClientRects()) mark(r);
  }
  document.querySelectorAll('img,canvas,video,svg,picture').forEach((el) => {
    const cs = getComputedStyle(el);
    if (cs.display === 'none' || cs.visibility === 'hidden' || +cs.opacity === 0) return;
    mark(el.getBoundingClientRect());
  });
  let ink = 0; grid.forEach((v) => (ink += v));
  const inkPct = +(100 * ink / (COLS * ROWS)).toFixed(1);

  // ---- font census (visible text) ----
  const combos = new Map(); // key -> {chars, sample, size}
  const walker2 = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  while ((n = walker2.nextNode())) {
    const t = n.textContent.trim();
    if (!t) continue;
    const el = n.parentElement; if (!el) continue;
    const cs = getComputedStyle(el);
    if (cs.display === 'none' || cs.visibility === 'hidden') continue;
    const rect = el.getBoundingClientRect();
    if (rect.width === 0 && rect.height === 0) continue;
    const key = [cs.fontFamily.split(',')[0], cs.fontSize, cs.fontWeight, cs.letterSpacing, cs.textTransform].join(' | ');
    const e = combos.get(key) || { chars: 0, sample: t.slice(0, 40), size: parseFloat(cs.fontSize) };
    e.chars += t.length;
    combos.set(key, e);
  }
  const fontCensus = [...combos.entries()]
    .map(([k, v]) => ({ combo: k, chars: v.chars, sizePx: v.size, sample: v.sample }))
    .sort((a, b) => b.sizePx - a.sizePx);
  const bodyCombo = [...fontCensus].sort((a, b) => b.chars - a.chars)[0] || null;
  const maxCombo = fontCensus[0] || null;
  const weights = [...new Set(fontCensus.map((f) => f.combo.split(' | ')[2]))];
  const families = [...new Set(fontCensus.map((f) => f.combo.split(' | ')[0]))];

  // ---- motion census ----
  let animated = 0, transitioned = 0, fixedSticky = 0;
  const easings = new Set(), animDurations = new Set();
  document.querySelectorAll('*').forEach((el) => {
    const cs = getComputedStyle(el);
    if (cs.animationName !== 'none') { animated++; animDurations.add(cs.animationDuration); }
    if (cs.transitionDuration.split(',').some((d) => parseFloat(d) > 0)) {
      transitioned++; easings.add(cs.transitionTimingFunction.split(',')[0].trim());
    }
    if (cs.position === 'fixed' || cs.position === 'sticky') fixedSticky++;
  });

  return {
    viewport: { vw, vh },
    inkPct, whitespacePct: +(100 - inkPct).toFixed(1),
    docHeightVh: +(Math.max(document.documentElement.scrollHeight, document.body.scrollHeight) / vh).toFixed(1),
    displayMax: maxCombo, bodyMode: bodyCombo,
    displayToBodyRatio: maxCombo && bodyCombo ? +(maxCombo.sizePx / bodyCombo.sizePx).toFixed(2) : null,
    familiesUsed: families.slice(0, 12), weightsUsed: weights,
    topCombos: fontCensus.slice(0, 12),
    motion: { animatedEls: animated, transitionedEls: transitioned, fixedSticky,
              animDurations: [...animDurations].slice(0, 10), easings: [...easings].slice(0, 10) },
    bg: getComputedStyle(document.body).backgroundColor,
    fg: getComputedStyle(document.body).color,
    libs: {
      lenis: !!(window.Lenis || document.documentElement.className.includes('lenis')),
      gsap: !!window.gsap, scrollTrigger: !!window.ScrollTrigger,
      skrollr: !!window.skrollr, three: !!window.THREE, pixi: !!window.PIXI,
    },
  };
};

const results = {};
const browser = await chromium.launch();

for (const site of SITES) {
  const dir = `out/${site.name}`;
  fs.mkdirSync(dir, { recursive: true });
  const entry = { url: site.url };
  console.log(`\n=== ${site.name} ===`);
  try {
    // ---------- desktop ----------
    const page = await browser.newPage({ viewport: DESKTOP });
    await page.goto(site.url, { timeout: 45000, waitUntil: 'load' });
    await page.waitForTimeout(6000); // let intros/boot sequences play
    await page.screenshot({ path: `${dir}/desktop-00.png` });
    entry.desktopTop = await page.evaluate(PAGE_METRICS);

    // scroll pass: wheel events survive scroll-hijack (Lenis/horizontal/canvas)
    let prevY = -1, shot = 1;
    for (let i = 1; i < MAX_SHOTS; i++) {
      await page.mouse.move(DESKTOP.width / 2, DESKTOP.height / 2);
      for (let w = 0; w < 8; w++) { await page.mouse.wheel(0, 120); await page.waitForTimeout(80); }
      await page.waitForTimeout(1200);
      const y = await page.evaluate(() =>
        Math.max(scrollY, ...[...document.querySelectorAll('*')].slice(0, 400).map((e) => e.scrollTop || 0)));
      await page.screenshot({ path: `${dir}/desktop-${String(shot).padStart(2, '0')}.png` });
      shot++;
      if (y === prevY && i > 2) break; // no further movement (end, or canvas site — shots still captured)
      prevY = y;
    }
    entry.desktopMid = await page.evaluate(PAGE_METRICS); // census after scroll (lazy content now in DOM)
    entry.shots = shot;
    await page.close();

    // ---------- mobile ----------
    const mp = await browser.newPage({ viewport: MOBILE, isMobile: true, hasTouch: true,
      userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1' });
    await mp.goto(site.url, { timeout: 45000, waitUntil: 'load' });
    await mp.waitForTimeout(6000);
    await mp.screenshot({ path: `${dir}/mobile-00.png` });
    entry.mobileTop = await mp.evaluate(PAGE_METRICS);
    for (let i = 1; i <= 3; i++) {
      await mp.mouse.wheel(0, 900).catch(() => {});
      await mp.waitForTimeout(1000);
      await mp.screenshot({ path: `${dir}/mobile-0${i}.png` });
    }
    await mp.close();
    console.log(`ok — whitespace ${entry.desktopTop.whitespacePct}%, ratio ${entry.desktopTop.displayToBodyRatio}, len ${entry.desktopTop.docHeightVh}vh`);
  } catch (e) {
    entry.error = String(e).split('\n')[0];
    console.log('FAILED:', entry.error);
  }
  results[site.name] = entry;
}

await browser.close();
fs.writeFileSync('out/metrics.json', JSON.stringify(results, null, 2));
console.log('\nWrote out/metrics.json');
