// Headless capture of candidate reference sites.
// Usage: node capture.mjs sites-batchN.json
import { chromium } from 'playwright';
import fs from 'fs';
import path from 'path';

const listFile = process.argv[2];
const sites = JSON.parse(fs.readFileSync(listFile, 'utf8'));
const OUT = path.resolve('shots');
fs.mkdirSync(OUT, { recursive: true });

const results = [];

const browser = await chromium.launch({
  headless: true,
  args: ['--disable-blink-features=AutomationControlled', '--enable-unsafe-swiftshader'],
});

for (const site of sites) {
  const { id, url } = site;
  const res = { id, url, ok: false, title: '', tech: [], error: null, finalUrl: '' };
  const ctx = await browser.newContext({
    viewport: { width: 1440, height: 900 },
    userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
    deviceScaleFactor: 1,
    locale: 'en-US',
  });
  const page = await ctx.newPage();
  try {
    const resp = await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 35000 });
    if (!resp) throw new Error('no response');
    res.status = resp.status();
    // let preloaders finish
    await page.waitForTimeout(9000);
    res.title = await page.title();
    res.finalUrl = page.url();
    res.tech = await page.evaluate(() => {
      const t = [];
      const w = window;
      if (w.gsap) t.push('gsap@' + (w.gsap.version || '?'));
      if (w.ScrollTrigger || (w.gsap && w.gsap.plugins && w.gsap.plugins.ScrollTrigger)) t.push('ScrollTrigger');
      if (w.Lenis || w.lenis) t.push('lenis');
      if (w.LocomotiveScroll) t.push('locomotive-scroll');
      if (w.THREE) t.push('three.js');
      if (w.PIXI) t.push('pixi');
      if (w.barba) t.push('barba');
      if (w.SplitType) t.push('SplitType');
      if (document.querySelector('canvas')) t.push('canvas-present');
      const scripts = [...document.querySelectorAll('script[src]')].map(s => s.src.toLowerCase());
      for (const lib of ['gsap', 'lenis', 'three', 'locomotive', 'swiper', 'barba', 'splitting', 'curtains', 'webflow', 'next', 'nuxt']) {
        if (scripts.some(s => s.includes(lib)) && !t.some(x => x.includes(lib))) t.push('script:' + lib);
      }
      return t;
    }).catch(() => []);

    // top of page
    await page.screenshot({ path: `${OUT}/${id}-0-top.jpg`, quality: 70, type: 'jpeg' });
    // scroll through the page slowly to trigger scroll animations
    const H = await page.evaluate(() => Math.max(document.body.scrollHeight, document.documentElement.scrollHeight));
    res.pageHeight = H;
    const stops = [0.18, 0.38, 0.6, 0.85];
    for (let i = 0; i < stops.length; i++) {
      const y = Math.floor(H * stops[i]);
      // smooth-ish scroll via mouse wheel so Lenis/virtual scrollers respond
      await page.evaluate((y) => window.scrollTo({ top: y, behavior: 'instant' }), y);
      await page.mouse.wheel(0, 300); // nudge virtual scrollers
      await page.waitForTimeout(2600);
      await page.screenshot({ path: `${OUT}/${id}-${i + 1}.jpg`, quality: 70, type: 'jpeg' });
    }
    res.ok = true;
  } catch (e) {
    res.error = String(e.message || e).slice(0, 200);
    try { await page.screenshot({ path: `${OUT}/${id}-err.jpg`, quality: 60, type: 'jpeg' }); } catch {}
  }
  await ctx.close();
  results.push(res);
  console.log(JSON.stringify(res));
}

await browser.close();
fs.writeFileSync(`results-${path.basename(listFile, '.json')}.json`, JSON.stringify(results, null, 2));
