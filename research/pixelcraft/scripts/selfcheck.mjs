// selfcheck.mjs — P7 gate (BRIEF §7). Serves skeleton/ via serve.cjs, drives a real browser,
// prints PASS/FAIL per check, writes out/derived/selfcheck.json. Node + Playwright only (no grep).
// Motion is judged from computed numbers, never screenshots (HANDOFF lesson 4).
import fs from 'node:fs';
import path from 'node:path';
import { spawn, execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const here = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(here, '..');
const SKEL = path.join(ROOT, 'skeleton');
const OUT = path.join(ROOT, 'out');
const results = [];
const check = (id, pass, detail) => { results.push({ id, pass, detail }); console.log(`${id}: ${pass ? 'PASS' : 'FAIL'} — ${detail}`); };
const note = (id, detail) => { results.push({ id, pass: true, note: true, detail }); console.log(`${id}: NOTE — ${detail}`); };

// ---------- start server ----------
const server = spawn(process.execPath, [path.join(SKEL, 'serve.cjs')], { stdio: 'pipe' });
await new Promise(r => server.stdout.once('data', r));
const BASE = 'http://localhost:8123/';

// ---------- browser (same fallback order as scrape.mjs; never `playwright install`) ----------
const { chromium } = await import('playwright');
let browser = null;
for (const opt of [{}, { channel: 'chrome' }, { channel: 'msedge' }]) {
  try { browser = await chromium.launch(opt); break; } catch { /* try next */ }
}
if (!browser) { console.error('no browser launches'); process.exit(1); }

const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
// cap long timers (the 20s popup) so check 7 can observe it without waiting
await page.addInitScript(() => {
  const orig = window.setTimeout;
  window.setTimeout = (fn, ms, ...a) => orig(fn, ms > 5000 ? 2500 : ms, ...a);
});
const errors = [];
page.on('console', m => { if (m.type() === 'error') errors.push(m.text()); });
page.on('pageerror', e => errors.push(String(e)));
await page.goto(BASE, { waitUntil: 'load' });
await page.waitForTimeout(1200);

// ---------- 1. console errors == 0 ----------
check('1-console', errors.length === 0, errors.length ? `${errors.length} errors: ${errors.slice(0, 3).join(' | ')}` : '0 console errors');

// ---------- 2. sections present & ordered ----------
{
  const ids = await page.$$eval('[data-section]', els => els.map(e => e.dataset.section));
  const expect = ['S00', ...Array.from({ length: 25 }, (_, i) => 'S' + String(i + 1).padStart(2, '0'))];
  const ok = ids.length === expect.length && ids.every((v, i) => v === expect[i]);
  check('2-sections', ok, ok ? `${ids.length} sections S00..S25 in order` : `got [${ids.join(',')}]`);
}

// ---------- 3. token bidirectional (check.cjs) ----------
{
  let ok = true, out = '';
  try { out = execFileSync(process.execPath, [path.join(SKEL, 'check.cjs')], { encoding: 'utf8' }); }
  catch (e) { ok = false; out = e.stdout || String(e); }
  check('3-tokens', ok, out.trim().split('\n').pop());
}

// ---------- 4. section heights vs probe ±10% ----------
{
  const probe = JSON.parse(fs.readFileSync(path.join(OUT, 'probe', 'home_1440.json'), 'utf8'));
  const rendered = await page.$$eval('section[data-section]', els =>
    Object.fromEntries(els.map(e => [e.dataset.section, e.getBoundingClientRect().height])));
  let out = 0;
  const rows = probe.sections.map(s => {
    const act = rendered[s.sid] || 0;
    const diff = ((act - s.height) / s.height) * 100;
    const within = Math.abs(diff) <= 10;
    if (!within) out++;
    return { sid: s.sid, expected: Math.round(s.height), actual: Math.round(act), diffPct: +diff.toFixed(1), within };
  });
  console.log('   S    expected  actual  %diff  within±10%');
  for (const r of rows) console.log(`   ${r.sid}  ${String(r.expected).padStart(7)} ${String(r.actual).padStart(7)}  ${String(r.diffPct).padStart(6)}  ${r.within ? 'yes' : 'NO'}`);
  note('4-heights', `${rows.length - out}/${rows.length} within ±10%; ${out} outside (not an automatic fail per §7.4 — explanations in skeleton/README.md)`);
  results.push({ id: '4-heights-table', pass: true, rows });
}

// ---------- 5. no external URLs in skeleton files ----------
{
  const offenders = [];
  const walk = (d) => { for (const f of fs.readdirSync(d)) { const p = path.join(d, f); fs.statSync(p).isDirectory() ? walk(p) : null; } };
  const files = [];
  (function collect(d) { for (const f of fs.readdirSync(d)) { const p = path.join(d, f); if (fs.statSync(p).isDirectory()) collect(p); else if (/\.(html|css|js|cjs|json|md|txt)$/.test(f)) files.push(p); } })(SKEL);
  for (const f of files) {
    if (/LICENSE-/.test(f)) continue; // OFL licence texts legitimately contain URLs; nothing is loaded from them
    const lines = fs.readFileSync(f, 'utf8').split('\n');
    lines.forEach((ln, i) => {
      if (/https?:\/\//.test(ln) && !/SOURCE:/.test(ln)
        && !/demoUrl|measuredFrom|pixel-craft\.cmsmasters/.test(ln)   // provenance strings in sections.json
        && !/localhost|http:\/\/x/.test(ln))                          // serve.cjs dummy URL base + README run link
        offenders.push(`${path.relative(SKEL, f)}:${i + 1}`);
    });
  }
  check('5-external-urls', offenders.length === 0, offenders.length ? offenders.slice(0, 6).join(', ') : 'no external URLs (licence texts + provenance strings + localhost whitelisted — nothing external is fetched)');
}

// ---------- 6. no copied theme selectors ----------
{
  const css = fs.readFileSync(path.join(SKEL, 'styles.css'), 'utf8');
  const sels = [...css.matchAll(/^([.#][\w-]+)/gm)].map(m => m[1]);
  const uniq = [...new Set(sels)];
  // deterministic sample of 10 (seeded stride), then search all theme css files
  const sample = uniq.filter((_, i) => i % Math.max(1, Math.floor(uniq.length / 10)) === 0).slice(0, 10);
  const themeCss = fs.readdirSync(path.join(OUT, 'css')).map(f => fs.readFileSync(path.join(OUT, 'css', f), 'utf8')).join('\n');
  const hits = sample.filter(s => themeCss.includes(s + '{') || themeCss.includes(s + ' {') || themeCss.includes(s + ','));
  check('6-no-theme-code', hits.length === 0, hits.length ? 'selectors found in theme css: ' + hits.join(',') : `10 sampled selectors (${sample.join(' ')}) absent from out/css/`);
}

// ---------- 7. motion actually moves — computed numbers, per effect ----------
{
  const sig = (sel) => page.$eval(sel, el => {
    const cs = getComputedStyle(el);
    const sec = el.closest('section');
    const rel = sec ? (el.getBoundingClientRect().top - sec.getBoundingClientRect().top).toFixed(0) : '0';
    return [cs.transform, cs.translate, cs.opacity, cs.backgroundSize, cs.backgroundColor, cs.color,
      el.offsetWidth, rel, el.textContent.slice(0, 24)].join('|');
  });
  // reveal effects are one-shot per element — count how many have fired instead of
  // watching a single element (counts strictly grow as the page is scrolled)
  const revealCounts = () => page.evaluate(() => [
    document.querySelectorAll('.fx-in').length,
    [...document.querySelectorAll('[data-stagger]')].reduce((n, p) => n + p.querySelectorAll(':scope > .fx-in').length, 0),
    document.querySelectorAll('.hl-host.is-in').length,
  ].join('|'));
  const scrollTo = async (y) => { await page.evaluate(yy => scrollTo(0, yy), y); await page.waitForTimeout(700); };
  const docH = await page.evaluate(() => document.documentElement.scrollHeight - innerHeight);

  const targets = [
    ['E10', '[data-effect~="E10"]', 'scroll'], ['E11', '[data-scroll-speed]', 'scroll'],
    ['E12', '[data-effect~="E12"]', 'scroll'],
    ['E20', 'reveal-count', 'scroll'], ['E21', 'reveal-count', 'scroll'], ['E30', 'reveal-count', 'scroll'],
    ['E32', '[data-effect~="E32"]', 'scroll'], ['E33', '.marquee-track', 'time'],
    ['E50', '.conveyor-track', 'time'], ['E52', '[data-effect~="E52"]', 'time'],
    ['E31', '.typed .live', 'time'],
    ['E22', '.acc .pane', 'hover'], ['E40', '.btn.swap', 'hover'],
    ['E41', '.panbox .imgalt', 'hover'], ['E42', '.iconitem .dot', 'hover'],
    ['E51', '.ba', 'click'], ['E62', '#offcanvas', 'click'], ['E61', '.popup', 'timer'],
  ];
  const rows = [];
  // scroll trio
  const grab = async (bag) => {
    const rc = (await revealCounts()).split('|');
    for (const [id, sel, kind] of targets) {
      if (kind !== 'scroll') continue;
      if (sel === 'reveal-count') bag[id] = rc[{ E20: 0, E21: 1, E30: 2 }[id]];
      else bag[id] = await sig(sel).catch(() => 'n/a');
    }
  };
  // step between trio positions (6 sub-steps) — an instant 9000px jump never lets
  // skipped elements cross the IO threshold, which is correct effect behaviour but
  // would make one-shot reveal counts land on whatever the target viewport happens to hold
  const stepTo = async (y) => {
    const from = await page.evaluate(() => scrollY);
    for (let i = 1; i <= 6; i++) { await page.evaluate(yy => scrollTo(0, yy), Math.round(from + (y - from) * i / 6)); await page.waitForTimeout(250); }
    await page.waitForTimeout(450);
  };
  await scrollTo(0);
  const s0 = {}; await grab(s0);
  await stepTo(Math.round(docH * 0.33));
  const s33 = {}; await grab(s33);
  await stepTo(Math.round(docH * 0.66));
  const s66 = {}; await grab(s66);
  for (const [id, sel, kind] of targets) {
    if (kind !== 'scroll') continue;
    const moved = new Set([s0[id], s33[id], s66[id]]).size >= 2;
    rows.push({ id, kind, moved });
  }
  // time pair (fixed scroll)
  await scrollTo(0);
  for (const [id, sel, kind] of targets) {
    if (kind !== 'time') continue;
    // three samples over ~3s — the typed rotator legitimately sits still for its
    // measured 2500ms delay between words, so one 900ms pair can alias to "static"
    const a = await sig(sel).catch(() => 'n/a');
    await page.waitForTimeout(1100);
    const b = await sig(sel).catch(() => 'n/a');
    await page.waitForTimeout(1900);
    const c = await sig(sel).catch(() => 'n/a');
    rows.push({ id, kind, moved: a !== 'n/a' && new Set([a, b, c]).size >= 2 });
  }
  // E61 popup: appears within the capped timer window, then close it so it can't
  // intercept the hover/click checks below
  {
    let appeared = false;
    try { await page.waitForSelector('.popup:not([hidden])', { timeout: 4000 }); appeared = true; } catch { }
    rows.push({ id: 'E61', kind: 'timer', moved: appeared });
    if (appeared) { await page.click('.pop-close'); await page.waitForTimeout(200); }
  }
  // hover
  for (const [id, sel, kind] of targets) {
    if (kind !== 'hover') continue;
    const el = await page.$(sel);
    await el.scrollIntoViewIfNeeded(); await page.waitForTimeout(400);
    const a = await sig(sel);
    await el.hover(); await page.waitForTimeout(600);
    const b = await sig(sel);
    rows.push({ id, kind, moved: a !== b });
  }
  // click: E51 divider, E62 offcanvas
  {
    const ba = await page.$('.ba');
    await ba.scrollIntoViewIfNeeded();
    const before = await page.$eval('.ba', el => getComputedStyle(el).getPropertyValue('--ba'));
    const box = await ba.boundingBox();
    await page.mouse.click(box.x + box.width * 0.25, box.y + box.height / 2);
    await page.waitForTimeout(200);
    const after = await page.$eval('.ba', el => getComputedStyle(el).getPropertyValue('--ba'));
    rows.push({ id: 'E51', kind: 'click', moved: before.trim() !== after.trim() });
    // burger renders only ≤768px — test the offcanvas at mobile width
    await page.setViewportSize({ width: 390, height: 844 });
    await page.evaluate(() => scrollTo(0, 0));
    await page.waitForTimeout(400);
    await page.click('.burger');
    await page.waitForTimeout(500);
    rows.push({ id: 'E62', kind: 'click', moved: await page.$eval('#offcanvas', el => el.classList.contains('open')) });
    await page.click('.oc-close');
    await page.setViewportSize({ width: 1440, height: 900 });
  }
  console.log('   E    stimulus  MOVED?');
  for (const r of rows) console.log(`   ${r.id.padEnd(4)} ${r.kind.padEnd(8)} ${r.moved ? 'yes' : 'NO'}`);
  const bad = rows.filter(r => !r.moved);
  check('7-motion', bad.length === 0, bad.length ? 'no movement: ' + bad.map(r => r.id).join(',') : `all ${rows.length} effects respond (computed values, not screenshots)`);
  results.push({ id: '7-motion-table', pass: true, rows });
}

// ---------- 8. no horizontal overflow at 360/768/1440 ----------
{
  const bad = [];
  for (const w of [360, 768, 1440]) {
    await page.setViewportSize({ width: w, height: 900 });
    await page.waitForTimeout(500);
    const over = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
    if (over > 1) bad.push(`${w}px: +${over}px`);
  }
  check('8-overflow', bad.length === 0, bad.length ? bad.join(', ') : 'no horizontal overflow at 360/768/1440');
}

// ---------- JS budget (README promise) ----------
{
  const kb = ['effects.js', 'debug.js', 'filler-th.js'].reduce((n, f) => n + fs.statSync(path.join(SKEL, f)).size, 0) / 1024;
  check('js-budget', kb < 25, `runtime JS ${kb.toFixed(1)} KB (< 25 KB)`);
}

await browser.close();
server.kill();
fs.mkdirSync(path.join(OUT, 'derived'), { recursive: true });
fs.writeFileSync(path.join(OUT, 'derived', 'selfcheck.json'), JSON.stringify({ ts: new Date().toISOString(), results }, null, 1));
const failed = results.filter(r => r.pass === false).length;
console.log(failed ? `\n${failed} CHECK(S) FAILED` : '\nALL CHECKS PASS');
console.log('wrote out/derived/selfcheck.json');
process.exit(failed ? 1 : 0);
