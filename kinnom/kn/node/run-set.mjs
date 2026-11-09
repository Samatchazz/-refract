// run-set.mjs — the operators' UPLOAD-RUNBOOK as code. One set, through the bridge, with every STOP condition kept.
//
//   node kn/node/run-set.mjs <setdir> --page <monthPageId> [--port 47321]
//
// Invariants (from the runbook + RESUME lessons):
//   - __open is never called for a set that is already open (it would wipe gated/pub state)
//   - __runPub is called at most once per set, ever; if the set already has published ids → never again
//   - a partial publish (some ids missing) is a STOP for a human: nothing is finalized, nothing is closed, nothing is retried
//   - every step's raw result goes to the journal before the next step starts
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

export class Stop extends Error { constructor(set, step, why, extra) { super(`STOP ${set} at step ${step}: ${why}`); this.set = set; this.step = step; this.extra = extra; } }

// Month guard (added 28 Sep 2026 after a near-miss: the plan named a month Cowork had already published).
// A month may only be worked on by this pipeline if the site has NO backfill posts in it yet, or this pipeline started it itself
// (recorded in monthsFile). Otherwise STOP before anything is opened. Override only on Mat's explicit word: allowMonth.
async function monthGuard(bridge, data, monthsFile, allowMonth, J, stop) {
  const ym = String(data.R[0].date).slice(0, 7);
  if (data.R.some((r) => String(r.date).slice(0, 7) !== ym)) stop(0, 'set spans more than one month');
  const mine = fs.existsSync(monthsFile) ? JSON.parse(fs.readFileSync(monthsFile, 'utf8')) : {};
  const [y, m] = ym.split('-').map(Number); const ny = m === 12 ? y + 1 : y, nm = m === 12 ? 1 : m + 1;
  const q = `posts?after=${encodeURIComponent(`${ym}-01T00:00:00`)}&before=${encodeURIComponent(`${ny}-${String(nm).padStart(2, '0')}-01T00:00:00`)}&status=publish,draft,pending,future&search=kn-record&per_page=100&_fields=id,slug`;
  const hits = await bridge.submit('get', { path: q });
  const n = Array.isArray(hits) ? hits.length : -1;
  J(0, 'month guard', { ym, backfillPostsOnSite: n, startedHere: !!mine[ym] });
  if (n < 0) stop(0, 'month guard: could not read the site');
  if (n > 0 && !mine[ym] && ym !== allowMonth) stop(0, `month ${ym} already has ${n} backfill posts on the site that this pipeline did not create (e.g. ids ${hits.slice(0, 5).map((h) => h.id).join(',')}). Refusing — it would duplicate posts. Only Mat can override (allowMonth).`);
  if (!mine[ym]) { mine[ym] = { started: new Date().toISOString(), setFirst: data.set }; fs.mkdirSync(path.dirname(monthsFile), { recursive: true }); fs.writeFileSync(monthsFile, JSON.stringify(mine, null, 1)); }
}

export async function runSet(bridge, setDir, { pageId, journal = () => {}, expectVer = '4.1.11', monthsFile, allowMonth }) {
  const data = JSON.parse(fs.readFileSync(path.join(setDir, 'bridge.json'), 'utf8'));
  const k = data.set; const N = data.R.length; const FIRST = data.R[0].row; const slugs = data.R.map((r) => r.slug);
  const J = (step, note, extra) => journal({ set: k, step, note, ...(extra || {}) });
  const stop = (step, why, extra) => { J(step, 'STOP ' + why, extra); throw new Stop(k, step, why, extra); };
  const warnings = [];

  // 0 sanity
  const ping = await bridge.submit('ping', {}, { timeoutMs: 60000 });
  J(0, 'ping', ping);
  if (ping.ver !== expectVer) stop(0, `toolkit ${ping.ver} in the tab, expected ${expectVer}`);
  let st = await bridge.submit('state', {});
  const mine = st.sets[k];
  if (mine && mine.closed) { J(0, 'already closed — nothing to do', { ids: mine.pub }); return { set: k, skipped: 'closed', ids: mine.pub }; }
  if (st.cur && st.cur !== k && st.sets[st.cur] && !st.sets[st.cur].closed) stop(0, `previous set ${st.cur} is still open (not __close'd)`);
  if (!mine) { if (!monthsFile) stop(0, 'monthsFile is required for a new set (month guard)'); await monthGuard(bridge, data, monthsFile, allowMonth, J, stop); }

  // 1 open (only if this set is not already open — reopening wipes its state)
  if (!mine) {
    const r = await bridge.submit('open', { k, items: data.items, pics: data.pics, cook: data.cook, decisions: data.decisions });
    J(1, 'open', { r });
    if (!Array.isArray(r) || !/^OPEN /.test(r[0] || '')) stop(1, 'open refused: ' + JSON.stringify(r).slice(0, 400));
    if (!r[0].includes(` ${N} แถว`)) stop(1, `open reports ${r[0]} but the set has ${N} rows`);
    warnings.push(...r.slice(1));
  } else J(1, 'resume: set already open', { pub: Object.keys(mine.pub || {}).length, gated: Object.keys(mine.gated || {}).length });

  // 2 images (up to 3 rounds, like RESUME says)
  let up;
  for (let round = 1; round <= 3; round++) {
    up = await bridge.submit('runUp', { pics: data.pics });
    J(2, `runUp round ${round}`, up);
    if (up.refused) stop(2, 'runUp refused: ' + up.refused.join(','));
    if (!up.missing.length) break;
  }
  if (up.missing.length) stop(2, `${up.missing.length} images still missing after 3 rounds: ${up.missing.join(',')} err=${JSON.stringify(up.err).slice(0, 300)}`);

  // 3/4 build + gate + publish — unless this set already published something
  st = await bridge.submit('state', {});
  const pubBefore = Object.keys((st.sets[k] || {}).pub || {});
  let ids;
  if (pubBefore.length) {
    const missing = slugs.filter((s) => !st.sets[k].pub[s]);
    if (missing.length) {
      const onSite = {};
      for (const s of missing) { const hit = await bridge.submit('get', { path: `posts?slug=${encodeURIComponent(s)}&status=publish,draft,pending,future&_fields=id,status` }); if (Array.isArray(hit) && hit.length) onSite[s] = hit; }
      stop(4, `set was partially published earlier (${pubBefore.length}/${N}); never re-running __runPub. Missing: ${missing.join(',')}. Found on the site by slug: ${JSON.stringify(onSite)}. A human must decide (new set for the missing rows, or PATCH).`, { missing, onSite });
    }
    ids = slugs.map((s) => st.sets[k].pub[s]);
    J(4, 'resume: all ids already published, skipping build/publish', { ids });
  } else {
    const b = await bridge.submit('build', { R: data.R, alt: data.alt });
    J(3, 'build', b);
    const entries = String(b.gate).split(' | ');
    const bad = entries.filter((e) => !/^\d+:OK$/.test(e));
    if (b.n !== N || b.first !== FIRST) stop(3, `LIST ${b.n} first ${b.first} ≠ set ${N}/${FIRST}`);
    if (bad.length || entries.length !== N) stop(3, `gate: ${bad.join(' | ') || 'count ' + entries.length}`);

    J(4, 'publish intent (one call)', { n: N, first: FIRST });
    const p = await bridge.submit('runPub', { n: N, first: FIRST });
    J(4, 'publish result', p);
    if (p.refused) stop(4, 'runPub refused: ' + p.refused.join(','));
    ids = p.ids.map((x) => x.id);
    if (ids.some((x) => !x)) {
      const missing = p.ids.filter((x) => !x.id).map((x) => x.slug);
      const onSite = {};
      for (const s of missing) { const hit = await bridge.submit('get', { path: `posts?slug=${encodeURIComponent(s)}&status=publish,draft,pending,future&_fields=id,status` }); if (Array.isArray(hit) && hit.length) onSite[s] = hit; }
      stop(4, `published ${ids.filter(Boolean).length}/${N}; missing ${missing.join(',')}; err=${JSON.stringify(p.err).slice(0, 300)}; found on site by slug: ${JSON.stringify(onSite)}. Not finalized, not closed, will not retry.`, { missing, onSite, ids });
    }
  }

  // 5 finalize (idempotent: __addReview answers 'มีอยู่แล้ว' for a slug already on the page)
  const fin = await bridge.submit('finalize', { pageId, ids });
  J(5, 'finalize', { fin });
  const finBad = fin.filter((x) => !/^(OK|มีอยู่แล้ว)/.test(String(x.review)));
  if (finBad.length) stop(5, 'addReview: ' + JSON.stringify(finBad).slice(0, 400));
  const cov = await bridge.submit('pageHas', { pageId, slugs });
  J(5, 'month page check', cov);
  if (cov.missing.length) stop(5, `month page ${pageId} is missing ${cov.missing.join(',')}`);

  // 6 close
  const c = await bridge.submit('close', { k, ids });
  J(6, 'close', { c });
  if (!/^CLOSED /.test((c && c[0]) || '')) stop(6, 'close refused: ' + JSON.stringify(c).slice(0, 300));
  return { set: k, ids, figs: cov.figs, warnings };
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const { start, ROOT } = await import('./bridge.mjs');
  const args = process.argv.slice(2); const setDir = args[0];
  const pageId = Number(args[args.indexOf('--page') + 1]); const port = args.includes('--port') ? Number(args[args.indexOf('--port') + 1]) : undefined;
  if (!setDir || !pageId) { console.log('usage: run-set.mjs <setdir> --page <monthPageId> [--port N]'); process.exit(2); }
  const jf = path.join(ROOT, 'state', 'journal.jsonl');
  const journal = (row) => fs.appendFileSync(jf, JSON.stringify({ t: new Date().toISOString(), ...row }) + '\n');
  const bridge = await start({ port, log: (x) => journal({ bridge: x }) });
  console.log(`desk on 127.0.0.1:${bridge.port}; waiting for the wp-admin tab (click the bookmarklet)…`);
  while (!bridge.connected()) await new Promise((r) => setTimeout(r, 2000));
  try { const r = await runSet(bridge, setDir, { pageId, journal, monthsFile: path.join(ROOT, 'state', 'months-started.json'), allowMonth: args.includes('--allow-month') ? args[args.indexOf('--allow-month') + 1] : undefined }); console.log('DONE', JSON.stringify(r)); }
  catch (e) { console.error(e.message); process.exitCode = 1; }
  finally { await bridge.close(); }
}
