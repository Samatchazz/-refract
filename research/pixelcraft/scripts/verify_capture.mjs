// verify_capture.mjs — P2 gates G0..G5 per BRIEF.md §4.1
// Usage: node research/pixelcraft/scripts/verify_capture.mjs [--out out] [--label home]
// Prints PASS/FAIL per gate and writes out/derived/verify.json
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const args = process.argv.slice(2);
const getFlag = (name, dflt) => {
  const i = args.indexOf('--' + name);
  return i >= 0 ? args[i + 1] : dflt;
};
const OUT = path.resolve(__dirname, '..', getFlag('out', 'out'));
const LABEL = getFlag('label', 'home');

const readJson = (p) => JSON.parse(fs.readFileSync(p, 'utf8'));
const exists = (p) => fs.existsSync(p);
const results = [];
const gate = (id, pass, detail) => {
  results.push({ gate: id, pass, detail });
  console.log(`${id}: ${pass ? 'PASS' : 'FAIL'} — ${detail}`);
};

// ---------- G0: not a fixture / localhost ----------
let halt = false;
{
  const urlFile = path.join(OUT, '_demo_url.txt');
  const metaFile = path.join(OUT, '_capture_meta.json');
  if (!exists(urlFile) || !exists(metaFile)) {
    gate('G0', false, `missing ${!exists(urlFile) ? '_demo_url.txt' : '_capture_meta.json'}`);
    halt = true;
  } else {
    const url = fs.readFileSync(urlFile, 'utf8').trim();
    const meta = readJson(metaFile);
    const warnings = meta.warnings || [];
    const isLocal = /localhost|127\.0\.0\.1/i.test(url);
    const fixtureWarn = warnings.filter((w) => /fixture/i.test(String(w)));
    const pass = !isLocal && fixtureWarn.length === 0;
    gate('G0', pass, pass ? `url=${url}` : `url=${url} localhost=${isLocal} fixtureWarnings=${JSON.stringify(fixtureWarn)}`);
    if (!pass) halt = true;
  }
}
if (halt) {
  console.log('\nG0 FAILED — HALT. This is test data; do not write findings.');
  process.exit(1);
}

// ---------- G1: section count sane ----------
{
  // canonical probe per §4.2: probe/<label>_1440.json (fall back to probe/<label>.json)
  const cands = [path.join(OUT, 'probe', `${LABEL}_1440.json`), path.join(OUT, 'probe', `${LABEL}.json`)];
  const probeFile = cands.find(exists);
  if (!probeFile) {
    gate('G1', false, `no probe file among ${cands.map((c) => path.relative(OUT, c)).join(', ')}`);
  } else {
    const probe = readJson(probeFile);
    const secs = probe.sections || [];
    const tall = secs.filter((s) => (s.vhFraction ?? 0) > 6);
    const pass = secs.length >= 6 && secs.length <= 40 && tall.length === 0;
    gate('G1', pass, `${path.basename(probeFile)}: ${secs.length} sections, ${tall.length} with vhFraction>6` +
      (tall.length ? ` (${tall.map((s) => `${s.sid}=${s.vhFraction}`).join(', ')})` : ''));
  }
}

// ---------- G2: >=18 byte-distinct scroll shots ----------
{
  const shotsDir = path.join(OUT, 'shots');
  const files = exists(shotsDir)
    ? fs.readdirSync(shotsDir).filter((f) => new RegExp(`^${LABEL}.*_s\\d{2}\\.jpg$`).test(f))
    : [];
  const md5s = new Set(files.map((f) => crypto.createHash('md5').update(fs.readFileSync(path.join(shotsDir, f))).digest('hex')));
  const pass = md5s.size >= 18;
  gate('G2', pass, `${files.length} step shots, ${md5s.size} byte-distinct (need >=18)`);
}

// ---------- G3: scroll-effect classes >= 3 ----------
{
  const f = path.join(OUT, `analysis_scroll_${LABEL}_1440.json`);
  const alt = path.join(OUT, `analysis_scroll_${LABEL}.json`);
  const file = exists(f) ? f : exists(alt) ? alt : null;
  if (!file) {
    gate('G3', false, `no analysis_scroll file for label ${LABEL}`);
  } else {
    const a = readJson(file);
    let count = 0;
    const parts = [];
    for (const [k, v] of Object.entries(a)) {
      if (Array.isArray(v) && /^(pinned|horizontal|parallax|opacityReveal)/i.test(k)) {
        count += v.length;
        parts.push(`${k}=${v.length}`);
      }
    }
    const pass = count >= 3;
    gate('G3', pass, `${path.basename(file)}: total ${count} (${parts.join(', ')})` +
      (pass ? '' : ' — acceptable if G2 passed (CSS-only site); record, do not fix'));
  }
}

// ---------- G4: console errors <= 15 ----------
{
  const f = path.join(OUT, `console_errors_${LABEL}_1440.json`);
  const alt = path.join(OUT, `console_errors_${LABEL}.json`);
  const file = exists(f) ? f : exists(alt) ? alt : null;
  if (!file) {
    gate('G4', true, 'no console_errors file found (0 errors recorded)');
  } else {
    const errs = readJson(file);
    const n = Array.isArray(errs) ? errs.length : (errs.errors?.length ?? 0);
    gate('G4', n <= 15, `${n} console errors (limit 15)`);
  }
}

// ---------- G5: notCaptured empty or deliberate ----------
{
  const meta = readJson(path.join(OUT, '_capture_meta.json'));
  const nc = meta.notCaptured || [];
  gate('G5', nc.length === 0, nc.length === 0 ? 'notCaptured is empty'
    : `notCaptured has ${nc.length} entries — each must be deliberate & marked "not measured" in docs: ${JSON.stringify(nc)}`);
}

// ---------- warnings dump (required reading) ----------
{
  const meta = readJson(path.join(OUT, '_capture_meta.json'));
  console.log('\n_capture_meta.json.warnings:');
  for (const w of meta.warnings || []) console.log('  - ' + w);
  if (!(meta.warnings || []).length) console.log('  (none)');
}

fs.mkdirSync(path.join(OUT, 'derived'), { recursive: true });
fs.writeFileSync(path.join(OUT, 'derived', 'verify.json'),
  JSON.stringify({ ts: new Date().toISOString(), label: LABEL, results }, null, 2));
console.log(`\nwrote ${path.join(OUT, 'derived', 'verify.json')}`);
process.exit(results.every((r) => r.pass) ? 0 : 2);
