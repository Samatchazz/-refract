// measure.mjs — headless measurement harness for north-star candidates.
// Usage: node measure.mjs [--only slug,slug] [--from N] [--to N] [--tag label]
import { chromium } from 'playwright';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { PROBE, NAV_PROBE } from './probe.mjs';

const HERE = path.dirname(fileURLToPath(import.meta.url));
const SHOTS = path.join(HERE, 'shots');
const RAW = path.join(HERE, 'raw');
fs.mkdirSync(SHOTS, { recursive: true });
fs.mkdirSync(RAW, { recursive: true });

const argv = process.argv.slice(2);
const arg = (k) => { const i = argv.indexOf(k); return i >= 0 ? argv[i + 1] : null; };
const only = arg('--only') ? arg('--only').split(',') : null;
const from = arg('--from') ? +arg('--from') : 0;
const to = arg('--to') ? +arg('--to') : 1e9;
const tag = arg('--tag') || 'run';

let sites = JSON.parse(fs.readFileSync(path.join(HERE, 'sites.json'), 'utf8'));
if (only) sites = sites.filter((s) => only.includes(s.slug));
sites = sites.slice(from, to);

const VIEWPORTS = [
  { label: '1440', width: 1440, height: 900 },
  { label: '390', width: 390, height: 844 },
];

const log = (...a) => console.log(`[${tag}]`, ...a);

const CONSENT_REJECT = [
  /^(reject|decline|refuse)( all)?$/i, /only necessary/i, /necessary only/i, /essential only/i,
  /^(deny|no thanks|no, thanks)$/i, /reject non-essential/i, /拒否/, /すべて拒否/, /거부/, /모두 거부/,
  /rechazar/i, /weigeren/i,
];
const CONSENT_ACCEPT = [
  /^(accept|agree|ok|got it|i understand|continue)( all| cookies)?$/i, /accept all/i, /allow all/i,
  /同意/, /同意する/, /確認/, /동의/, /확인/, /aceptar/i, /akkoord/i, /^close$/i, /^enter$/i, /^ok$/i,
];

async function dismissConsent(page) {
  const acted = [];
  const clickables = await page.$$('button, a[role=button], [role=button], .cookie button, [class*=consent] button, [id*=cookie] button');
  for (const pass of [CONSENT_REJECT, CONSENT_ACCEPT]) {
    for (const el of clickables) {
      let txt = '';
      try { txt = ((await el.innerText()) || '').replace(/\s+/g, ' ').trim(); } catch { continue; }
      if (!txt || txt.length > 40) continue;
      if (!pass.some((re) => re.test(txt))) continue;
      try {
        const vis = await el.isVisible();
        if (!vis) continue;
        await el.click({ timeout: 2000 });
        acted.push(txt);
        await page.waitForTimeout(700);
      } catch { /* ignore */ }
    }
    if (acted.length) break; // reject pass succeeded — don't also run accept
  }
  return acted;
}

// ---------------------------------------------------------------------------
// Scrolling that works for native scroll, inner-overflow scrollers, and the
// transformed-wrapper "virtual scroll" libraries (Lenis/locomotive) that leave
// document.scrollHeight equal to one viewport.
// ---------------------------------------------------------------------------
async function initScroll(page) {
  return await page.evaluate(() => {
    const boxed = (el) => { const c = getComputedStyle(el); if (c.display === 'none' || c.visibility === 'hidden') return false; const r = el.getBoundingClientRect(); return r.width > 0 || r.height > 0; };
    let maxBottom = 0;
    for (const el of document.querySelectorAll('body *')) {
      if (!boxed(el)) continue;
      const b = el.getBoundingClientRect().bottom;
      if (b > maxBottom) maxBottom = b;
    }
    let scrollerH = 0;
    for (const el of document.querySelectorAll('body *')) {
      if (el.scrollHeight - el.clientHeight > 200 && el.clientHeight > window.innerHeight * 0.5) {
        if (el.scrollHeight > scrollerH) scrollerH = el.scrollHeight;
      }
    }
    const docScroll = document.documentElement.scrollHeight;
    window.__anchor = document.querySelector('section, main > *, body > div > *') || document.body.firstElementChild;
    window.__anchorTop0 = window.__anchor ? window.__anchor.getBoundingClientRect().top : 0;
    window.__pos = () => {
      if (window.scrollY > 0) return Math.round(window.scrollY);
      for (const el of document.querySelectorAll('body *')) if (el.scrollTop > 0) return Math.round(el.scrollTop);
      if (window.__anchor) return Math.round(window.__anchorTop0 - window.__anchor.getBoundingClientRect().top);
      return 0;
    };
    const contentHeight = Math.max(docScroll, Math.round(maxBottom), scrollerH);
    return {
      contentHeight,
      docScrollHeight: docScroll,
      maxElementBottom: Math.round(maxBottom),
      innerScrollerHeight: scrollerH,
      virtualScroll: docScroll <= window.innerHeight * 1.2 && contentHeight > window.innerHeight * 1.5,
    };
  });
}

// A same-document route change or a reload wipes the injected globals, so every
// read of __pos re-installs them if they've gone missing.
async function pos(page) {
  try {
    const v = await page.evaluate(() => (typeof window.__pos === 'function' ? window.__pos() : null));
    if (v !== null) return v;
  } catch { /* fall through to re-init */ }
  await initScroll(page);
  try { return await page.evaluate(() => window.__pos()); } catch { return 0; }
}

async function scrollToY(page, y, scrollInfo) {
  const near = (a, b) => Math.abs(a - b) < 60;
  await page.evaluate((t) => window.scrollTo(0, t), y);
  await page.waitForTimeout(220);
  let cur = await pos(page);
  if (near(cur, y)) { await page.waitForTimeout(250); return cur; }

  await page.evaluate((t) => {
    for (const el of document.querySelectorAll('body *')) {
      if (el.scrollHeight - el.clientHeight > 200 && el.clientHeight > window.innerHeight * 0.5) el.scrollTop = t;
    }
  }, y);
  await page.waitForTimeout(220);
  cur = await pos(page);
  if (near(cur, y)) { await page.waitForTimeout(250); return cur; }

  // Virtual scroller: drive it with real wheel events.
  await page.mouse.move(Math.round(page.viewportSize().width / 2), Math.round(page.viewportSize().height / 2));
  let guard = 0, stuck = 0, last = cur;
  while (guard++ < 250) {
    cur = await pos(page);
    const d = y - cur;
    if (Math.abs(d) < 80) break;
    await page.mouse.wheel(0, Math.max(-1400, Math.min(1400, d)));
    await page.waitForTimeout(110);
    if (Math.abs(cur - last) < 5) { if (++stuck > 8) break; } else stuck = 0;
    last = cur;
  }
  await page.waitForTimeout(500);
  return await pos(page);
}

async function fullScrollThrough(page, scrollInfo) {
  const max = Math.max(0, scrollInfo.contentHeight - (await page.evaluate(() => window.innerHeight)));
  const step = Math.round((await page.evaluate(() => window.innerHeight)) * 0.7);
  for (let y = 0; y <= max; y += step) {
    await scrollToY(page, Math.min(y, max), scrollInfo);
  }
  await page.waitForTimeout(600);
  await scrollToY(page, 0, scrollInfo);
  await page.waitForTimeout(900);
}

async function shoot(page, file, opts = {}) {
  try {
    await page.screenshot({ path: file, type: 'jpeg', quality: 70, ...opts });
    return true;
  } catch (e) {
    if (opts.fullPage) {
      try { await page.screenshot({ path: file, type: 'jpeg', quality: 70 }); return true; } catch { /* */ }
    }
    return false;
  }
}

async function measureSite(browser, site, vp) {
  const key = `${site.slug}-${vp.label}`;
  const ctx = await browser.newContext({
    viewport: { width: vp.width, height: vp.height },
    deviceScaleFactor: 1,
    userAgent: vp.label === '390'
      ? 'Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1'
      : undefined,
    isMobile: vp.label === '390',
    hasTouch: vp.label === '390',
    locale: 'en-US',
    ignoreHTTPSErrors: true,
  });
  const page = await ctx.newPage();
  const consoleErrors = [];
  page.on('pageerror', (e) => consoleErrors.push(String(e).slice(0, 160)));

  const out = { slug: site.slug, url: site.url, name: site.name, country: site.country, viewport: vp.label, ok: false };

  try {
    let resp = null;
    for (let attempt = 1; attempt <= 3; attempt++) {
      try { resp = await page.goto(site.url, { waitUntil: 'domcontentloaded', timeout: 60000 }); break; }
      catch (e) { if (attempt === 3) throw e; await page.waitForTimeout(3000); }
    }
    out.httpStatus = resp ? resp.status() : null;
    out.finalUrl = page.url();
    try { await page.waitForLoadState('networkidle', { timeout: 25000 }); } catch { out.networkIdleTimeout = true; }
    await page.waitForTimeout(2500);
    try { await page.evaluate(() => document.fonts && document.fonts.ready); } catch {}

    out.consentDismissed = await dismissConsent(page);
    await page.waitForTimeout(500);

    const scrollInfo = await initScroll(page);
    out.scrollInfo = scrollInfo;
    await fullScrollThrough(page, scrollInfo);
    await initScroll(page); // refresh anchor/content height after lazy content settled

    const data = await page.evaluate(PROBE);
    Object.assign(out, data);
    const si2 = await initScroll(page);
    out.scrollInfo = si2;
    out.document.contentHeight = si2.contentHeight;
    out.document.vhMultiple = Math.round(si2.contentHeight / vp.height * 100) / 100;
    out.document.scrollMode = si2.virtualScroll ? 'virtual (transformed wrapper / JS scroller)' : 'native';

    // Nav state diff: scrollY 0 (already captured) vs scrollY 2000
    const navAt0 = await page.evaluate(NAV_PROBE);
    await scrollToY(page, 2000, out.scrollInfo);
    await page.waitForTimeout(1400);
    const navAt2000 = await page.evaluate(NAV_PROBE);
    out.navState = { at0: navAt0, at2000: navAt2000 };
    if (navAt0 && navAt2000) {
      const diff = {};
      for (const k of Object.keys(navAt0.nav)) if (navAt0.nav[k] !== navAt2000.nav[k]) diff[k] = { at0: navAt0.nav[k], at2000: navAt2000.nav[k] };
      out.navState.changed = Object.keys(diff).length > 0;
      out.navState.diff = diff;
    }
    await scrollToY(page, 0, out.scrollInfo);
    await page.waitForTimeout(900);

    // ---- screenshots ----
    out.shots = [];
    const fullFile = path.join(SHOTS, `${key}-full.jpg`);
    if (await shoot(page, fullFile, { fullPage: true })) {
      out.shots.push(path.basename(fullFile));
      // A virtual scroller can't produce a real full-page capture — say so rather
      // than shipping a one-screen image labelled "full".
      out.fullPageShotRepresentative = !out.scrollInfo.virtualScroll;
    }

    if (vp.label === '1440') {
      const maxScroll = Math.max(0, out.scrollInfo.contentHeight - vp.height);
      const pcts = out.scrollInfo.virtualScroll ? [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100] : [0, 25, 50, 75, 100];
      for (const pct of pcts) {
        await scrollToY(page, Math.round(maxScroll * pct / 100), out.scrollInfo);
        await page.waitForTimeout(1100);
        const f = path.join(SHOTS, `${key}-scroll${String(pct).padStart(3, '0')}.jpg`);
        if (await shoot(page, f)) out.shots.push(path.basename(f));
      }
      await scrollToY(page, 0, out.scrollInfo);
    }

    // Measurability verdict
    if (data.document.textNodeCount < 15) {
      out.ok = false;
      out.notMeasurable = `only ${data.document.textNodeCount} rendered text nodes (${data.document.canvasCount} canvas element(s)) — WebGL/canvas-driven, no DOM grid to learn from`;
    } else {
      out.ok = true;
    }
    out.pageErrors = consoleErrors.slice(0, 5);
  } catch (e) {
    out.ok = false;
    out.error = String(e && e.message ? e.message : e).slice(0, 300);
  } finally {
    await ctx.close().catch(() => {});
  }

  fs.writeFileSync(path.join(RAW, `${key}.json`), JSON.stringify(out, null, 2));
  return out;
}

(async () => {
  const browser = await chromium.launch({ headless: true, args: ['--disable-blink-features=AutomationControlled'] });
  for (const site of sites) {
    for (const vp of VIEWPORTS) {
      const t0 = Date.now();
      const r = await measureSite(browser, site, vp);
      const secs = ((Date.now() - t0) / 1000).toFixed(0);
      log(`${r.ok ? 'OK  ' : 'FAIL'} ${site.slug}@${vp.label} ${secs}s ${r.error || r.notMeasurable || `${r.document?.vhMultiple}vh, ${r.sections?.length} sec, ${r.typeScale?.distinctFontSizeCount} sizes`}`);
    }
  }
  await browser.close();
  log('done');
})();
