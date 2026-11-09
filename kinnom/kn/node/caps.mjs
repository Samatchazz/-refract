// caps.mjs — fetch captions straight from Google Docs (/mobilebasic) with NO login, NO LLM in the path.
// The team's docs are shared "anyone with the link", so Mat's PC can read them directly (the Cowork sandbox could not: its proxy blocked Google).
// Text extraction + checksum are NOT re-implemented: the functions are lifted unchanged from tools' chromecaps.js.
//
//   node kn/node/caps.mjs verify <docpairs.json> <checks.tsv>     re-fetch a finished month and compare with Cowork's checksums
//   node kn/node/caps.mjs fetch  <docpairs.json> <out caps.json>  (writes {nrK: text} + <out>.checks.tsv)
// docpairs.json = [["nr1","<docId>"], ...]
import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', '..');
const sb = { window: {} }; sb.window = sb; vm.createContext(sb);
vm.runInContext(fs.readFileSync(path.join(ROOT, 'work', 'queue', 'chromecaps.js'), 'utf8'), sb); // defines __X_ext, __X_ck (fetch part unused)

async function one(id) {
  for (let i = 0; i < 3; i++) {
    const r = await fetch(`https://docs.google.com/document/d/${id}/mobilebasic`, { redirect: 'follow' });
    if (r.status === 200) { const t = sb.__X_ext(await r.text()); const [n, c] = sb.__X_ck(t); return { n, c, t }; }
    if (r.status === 404 || r.status === 401 || r.status === 403) throw new Error('HTTP ' + r.status);
    await new Promise((z) => setTimeout(z, 1500 * (i + 1)));
  }
  throw new Error('gave up');
}
async function fetchAll(pairs, conc = 8) {
  const out = {}, fail = {}; let i = 0;
  await Promise.all(Array.from({ length: conc }, async () => { while (i < pairs.length) { const [k, id] = pairs[i++]; try { out[k] = await one(id); } catch (e) { fail[k] = e.message; } } }));
  return { out, fail };
}

const [cmd, pairsFile, arg] = process.argv.slice(2);
if (!cmd) { console.log('usage: caps.mjs verify <docpairs.json> <checks.tsv> | fetch <docpairs.json> <out.json>'); process.exit(2); }
const pairs = JSON.parse(fs.readFileSync(pairsFile, 'utf8'));
const t0 = Date.now();
const { out, fail } = await fetchAll(pairs);
const secs = ((Date.now() - t0) / 1000).toFixed(1);
if (cmd === 'verify') {
  const want = Object.fromEntries(fs.readFileSync(arg, 'utf8').split('\n').map((l) => l.split('\t')).filter((q) => q.length >= 3 && /^\d+$/.test(q[1])).map((q) => [q[0], [Number(q[1]), Number(q[2])]]));
  let same = 0; const diff = [];
  for (const [k] of pairs) { if (!out[k] || !want[k]) continue; if (out[k].n === want[k][0] && out[k].c === want[k][1]) same++; else diff.push(`${k}(len ${want[k][0]}→${out[k].n})`); }
  console.log(`docs ${pairs.length} · fetched ${Object.keys(out).length} in ${secs}s · 0 LLM tokens · checksum identical to Cowork's: ${same} · different: ${diff.length} ${diff.join(' ')} · failed: ${JSON.stringify(fail)}`);
  process.exit(diff.length || Object.keys(fail).length ? 1 : 0);
} else {
  fs.writeFileSync(arg, JSON.stringify(Object.fromEntries(Object.entries(out).map(([k, v]) => [k, v.t])), null, 1));
  fs.writeFileSync(arg + '.checks.tsv', Object.entries(out).map(([k, v]) => `${k}\t${v.n}\t${v.c}`).join('\n') + '\n');
  console.log(`fetched ${Object.keys(out).length}/${pairs.length} in ${secs}s · failed: ${JSON.stringify(fail)}`);
}
