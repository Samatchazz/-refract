// Capture desktop / full / mobile screenshots of reference sites.
// Usage: node capture.mjs [slug ...]   (no args = all sites in sites.json)
import { createRequire } from 'module';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const require = createRequire('Z:/Claude Code/package.json');
const { chromium } = require('playwright');

const here = path.dirname(fileURLToPath(import.meta.url));
const shots = path.join(here, 'shots');
fs.mkdirSync(shots, { recursive: true });
const all = JSON.parse(fs.readFileSync(path.join(here, 'sites.json'), 'utf8'));
const only = process.argv.slice(2);
const sites = only.length ? all.filter(s => only.includes(s.slug)) : all;
const resultsFile = path.join(here, 'capture-results.json');
const results = fs.existsSync(resultsFile) ? JSON.parse(fs.readFileSync(resultsFile, 'utf8')) : {};

const UA_DESK = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36';
const MAX_H = 3600;

// Click an accept button only when it sits inside something that talks about cookies.
async function dismissCookies(page) {
  try {
    await page.evaluate(() => {
      const re = /^(accept|accept all|accept all cookies|accept cookies|allow all|allow all cookies|i agree|agree|ok|okay|got it|i understand|同意する|同意|すべて同意|許可|ยอมรับ|ยอมรับทั้งหมด|accept & close|alle akzeptieren|tout accepter|accepter)$/i;
      const ctx = /cookie|consent|gdpr|privacy|クッキー|คุกกี้|プライバシー/i;
      const direct = document.querySelector('#onetrust-accept-btn-handler, #CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll, .cc-allow, .cky-btn-accept');
      if (direct) { direct.click(); return; }
      for (const b of [...document.querySelectorAll('button, a[role=button], [role=button], a')].concat([...document.querySelectorAll('div,span')].filter(e => e.childElementCount === 0))) {
        const t = (b.innerText || '').trim();
        if (!t || t.length > 30 || !re.test(t)) continue;
        let n = b, ok = false;
        for (let i = 0; i < 6 && n; i++, n = n.parentElement) {
          if (ctx.test((n.id || '') + ' ' + (n.className || '') + ' ' + (n.innerText || '').slice(0, 600))) { ok = true; break; }
        }
        if (ok) { b.click(); return; }
      }
    });
  } catch {}
}

async function settle(page, extra = 0) {
  try { await page.waitForLoadState('networkidle', { timeout: 12000 }); } catch {}
  try { await page.evaluate(() => document.fonts && document.fonts.ready); } catch {}
  await page.waitForTimeout(2500 + extra);
}

async function scrollThrough(page) {
  try {
    await page.evaluate(async (maxH) => {
      const step = 600;
      for (let y = 0; y < maxH; y += step) { window.scrollTo(0, y); await new Promise(r => setTimeout(r, 250)); }
      window.scrollTo(0, 0);
    }, MAX_H);
    await page.waitForTimeout(1200);
  } catch {}
}

async function captureOne(browser, s) {
  const out = {};
  // desktop
  const dctx = await browser.newContext({ viewport: { width: 1440, height: 900 }, userAgent: UA_DESK, locale: 'en-US' });
  const dp = await dctx.newPage();
  try {
    const resp = await dp.goto(s.url, { waitUntil: 'domcontentloaded', timeout: 30000 });
    out.status = resp ? resp.status() : null;
    out.finalUrl = dp.url();
    await settle(dp, s.wait || 0);
    await dismissCookies(dp); await dp.keyboard.press('Escape').catch(() => {});
    await dp.waitForTimeout(800);
    out.title = await dp.title();
    await dp.screenshot({ path: path.join(shots, `${s.slug}-desk.jpg`), type: 'jpeg', quality: 70 });
    await scrollThrough(dp);
    const h = await dp.evaluate(() => Math.max(document.documentElement.scrollHeight, document.body ? document.body.scrollHeight : 0)).catch(() => 900);
    const clipH = Math.min(Math.max(h, 900), MAX_H);
    await dp.screenshot({ path: path.join(shots, `${s.slug}-full.jpg`), type: 'jpeg', quality: 65, fullPage: true, clip: { x: 0, y: 0, width: 1440, height: clipH } });
    out.fullH = clipH;
  } finally { await dctx.close(); }
  // mobile
  const mctx = await browser.newContext({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 2, isMobile: true, hasTouch: true,
    userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 17_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.5 Mobile/15E148 Safari/604.1' });
  const mp = await mctx.newPage();
  try {
    await mp.goto(s.url, { waitUntil: 'domcontentloaded', timeout: 30000 });
    await settle(mp, s.wait || 0);
    await dismissCookies(mp); await mp.keyboard.press('Escape').catch(() => {});
    await mp.waitForTimeout(800);
    await mp.screenshot({ path: path.join(shots, `${s.slug}-mob.jpg`), type: 'jpeg', quality: 70 });
  } finally { await mctx.close(); }
  return out;
}

const browser = await chromium.launch();
const queue = [...sites];
async function worker() {
  while (queue.length) {
    const s = queue.shift();
    let lastErr;
    for (let attempt = 1; attempt <= 2; attempt++) {
      try {
        const r = await captureOne(browser, s);
        results[s.slug] = { ok: true, ...r };
        console.log('OK  ', s.slug, r.status, r.finalUrl, '|', r.title);
        lastErr = null; break;
      } catch (e) { lastErr = e; console.log('ERR ', s.slug, 'attempt', attempt, String(e.message).split('\n')[0]); }
    }
    if (lastErr) results[s.slug] = { ok: false, error: String(lastErr.message).split('\n')[0] };
  }
}
await Promise.all([worker(), worker(), worker(), worker()]);
await browser.close();
fs.writeFileSync(resultsFile, JSON.stringify(results, null, 2));
console.log('done');
