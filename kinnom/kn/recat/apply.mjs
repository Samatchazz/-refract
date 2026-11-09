// apply.mjs — applies recat/plan.json through the connected wp-admin tab, one post at a time. Only `categories` and added `tags` can change
// (enforced in the page glue's setTerms). Resumable: ids already 'updated'/'already' in the log are skipped. Stops on the first error.
//
//   node kn/recat/apply.mjs --limit 20          canary: first 20 not-yet-done posts, then stop
//   node kn/recat/apply.mjs                     everything remaining
//   node kn/recat/apply.mjs --rollback          restore every post in the log to its logged "before" categories (tags are left: only ever added)
//   options: --delay 2000 (ms between posts) · --plan <file> · --log <file>
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
export function readLog(file) {
  if (!fs.existsSync(file)) return [];
  return fs.readFileSync(file, 'utf8').split('\n').filter(Boolean).map((l) => JSON.parse(l));
}

/** plan rows: {id, expectCats:[…], cats:[…], addTags:[…]} */
export async function apply(bridge, plan, { logFile, limit = Infinity, delay = 2000, out = () => {} }) {
  const done = new Set(readLog(logFile).filter((r) => r.result === 'updated' || r.result === 'already').map((r) => r.id));
  const todo = plan.filter((p) => !done.has(p.id)).slice(0, limit);
  const tally = {};
  for (const [i, p] of todo.entries()) {
    let r;
    try { r = await bridge.submit('setTerms', { id: p.id, expectCats: p.expectCats, cats: p.cats, addTags: p.addTags || [] }, { timeoutMs: 120000 }); }
    catch (e) {
      fs.appendFileSync(logFile, JSON.stringify({ t: new Date().toISOString(), id: p.id, result: 'error', error: e.message, sent: { cats: p.cats, addTags: p.addTags || [] } }) + '\n');
      throw new Error(`STOP at post ${p.id} (${i + 1}/${todo.length}): ${e.message}`);
    }
    fs.appendFileSync(logFile, JSON.stringify({ t: new Date().toISOString(), id: p.id, ...r, sent: { cats: p.cats, addTags: p.addTags || [] } }) + '\n');
    tally[r.result] = (tally[r.result] || 0) + 1;
    out(`${i + 1}/${todo.length} ${p.id} ${r.result}`);
    if (r.result === 'updated' && i < todo.length - 1) await sleep(delay);
  }
  return { attempted: todo.length, skippedDone: plan.length - plan.filter((p) => !done.has(p.id)).length, tally };
}

/** rollback: set categories back to the logged "before" for every post this log updated */
export async function rollback(bridge, { logFile, delay = 2000, out = () => {} }) {
  const rows = readLog(logFile).filter((r) => r.result === 'updated');
  const last = new Map(); for (const r of rows) if (!last.has(r.id)) last.set(r.id, r); // first update holds the original state
  const plan = [...last.values()].map((r) => ({ id: r.id, expectCats: r.after.cats, cats: r.before.cats, addTags: [] }));
  return apply(bridge, plan, { logFile: logFile.replace(/\.jsonl$/, '') + '.rollback.jsonl', delay, out });
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const { start, ROOT } = await import('../node/bridge.mjs');
  const a = process.argv.slice(2); const opt = (k, d) => (a.includes(k) ? a[a.indexOf(k) + 1] : d);
  const planFile = opt('--plan', path.join(ROOT, 'recat', 'plan.json')); const logFile = opt('--log', path.join(ROOT, 'recat', 'apply-log.jsonl'));
  const bridge = await start({ log: () => {} });
  console.log('waiting for the wp-admin tab…');
  const t0 = Date.now(); while (!bridge.connected()) { if (Date.now() - t0 > 300000) { console.error('tab not connected'); process.exit(3); } await sleep(1000); }
  try {
    const r = a.includes('--rollback')
      ? await rollback(bridge, { logFile, delay: Number(opt('--delay', 2000)), out: console.log })
      : await apply(bridge, JSON.parse(fs.readFileSync(planFile, 'utf8')), { logFile, limit: Number(opt('--limit', Infinity)), delay: Number(opt('--delay', 2000)), out: console.log });
    console.log('DONE', JSON.stringify(r));
  } catch (e) { console.error(e.message); process.exitCode = 1; } finally { await bridge.close(); }
}
