// bridge.test.mjs — end to end, offline: real toolkit + real page glue + real desk server + runbook-as-code, against a mock WordPress,
// on a real historical set (Oct 2024 'oca', 9 rows / 50 images) rebuilt by tools/mkset.py.
import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import { start, ROOT } from '../node/bridge.mjs';
import { mockWP } from '../node/mockwp.mjs';
import { fakePage } from '../node/fakepage.mjs';
import { runSet, Stop } from '../node/run-set.mjs';

function buildSet(name) {
  const d = path.join(fs.mkdtempSync(path.join(os.tmpdir(), 'kn-set-')), name);
  fs.mkdirSync(d);
  const src = path.join(ROOT, 'work', 'oct2024', 'oca');
  const spec = JSON.parse(fs.readFileSync(path.join(src, 'spec.json'), 'utf8'));
  spec.set = name; spec.rows.forEach((r) => { r.slug = r.slug + '-' + name; }); // unique set name + slugs per test run
  fs.writeFileSync(path.join(d, 'spec.json'), JSON.stringify(spec));
  fs.copyFileSync(path.join(src, 'caps.json'), path.join(d, 'caps.json'));
  execFileSync('python', [path.join(ROOT, 'tools', 'mkset.py'), d], { env: { ...process.env, PYTHONUTF8: '1' }, stdio: 'pipe' });
  assert.ok(fs.existsSync(path.join(d, 'bridge.json')), 'mkset must emit bridge.json');
  return d;
}

test('desk refuses wrong origin / wrong token', async () => {
  const b = await start({ port: 0, token: 'tok', stateDir: fs.mkdtempSync(path.join(os.tmpdir(), 'kn-b-')) });
  const r1 = await fetch(`http://127.0.0.1:${b.port}/job?token=tok`); assert.equal(r1.status, 403);                     // no Origin
  const r2 = await fetch(`http://127.0.0.1:${b.port}/job?token=tok`, { headers: { Origin: 'https://evil.example' } }); assert.equal(r2.status, 403);
  const r3 = await fetch(`http://127.0.0.1:${b.port}/job?token=nope`, { headers: { Origin: 'https://kinnom.co' } }); assert.equal(r3.status, 403);
  const r4 = await fetch(`http://127.0.0.1:${b.port}/page.js?token=tok`, { headers: { Origin: 'https://kinnom.co' } }); assert.equal(r4.status, 200);
  assert.ok((await r4.text()).includes('__KB'));
  await b.close();
});

test('one set end to end, then idempotent re-run, then partial-publish STOP with no duplicates', async () => {
  const stateDir = fs.mkdtempSync(path.join(os.tmpdir(), 'kn-e2e-'));
  const journal = []; const jl = (row) => journal.push(row);
  const monthsFile = path.join(stateDir, 'months-started.json');
  let failSlug = null;
  const wp = mockWP({ intercept: (method, url, body) => { if (failSlug && method === 'POST' && /\/posts$/.test(url.split('?')[0]) && body.includes(`"slug":"${failSlug}"`)) return { __raw: '<!DOCTYPE html><html>maintenance</html>', status: 200 }; } });
  const b = await start({ port: 0, stateDir, log: (x) => jl({ bridge: x }) });
  const page = await fakePage({ bridge: b, fixtures: wp, stateDir });
  assert.match(page.ret, /bridge running/);

  // selftest through the desk (what a session does before any upload)
  const st = await b.submit('selftest', {}, { timeoutMs: 120000 });
  assert.match(st, /✅ ผ่านทั้งหมด 56 ข้อ/);

  // 1) happy path
  const setA = buildSet('zta');
  const r = await runSet(b, setA, { pageId: 60584, journal: jl, monthsFile });
  assert.equal(r.ids.length, 9); assert.ok(r.ids.every(Boolean));
  const created = [...wp.$.posts.values()].filter((p) => p.id !== 60584);
  assert.equal(created.length, 9, 'exactly 9 posts created');
  assert.equal(wp.$.media.size, 50, '50 images uploaded');
  const pageRaw = wp.$.monthPage.content.raw;
  for (const p of created) assert.ok(pageRaw.includes('/' + p.slug + '/'), 'month page links ' + p.slug);
  assert.equal(r.figs, 9);
  for (const p of created) { assert.equal(p.status, 'publish'); assert.ok(p.content.raw.includes('<h3>บันทึกกินหนม</h3>')); assert.ok(p.content.raw.includes('application/ld+json')); assert.ok(p.tags.length >= 3); }
  const state = JSON.parse(JSON.parse(fs.readFileSync(path.join(stateDir, 'localStorage.json'), 'utf8')).knst);
  assert.ok(state.sets.zta.closed && Object.keys(state.sets.zta.pub).length === 9);

  // 2) running the same set again publishes nothing
  const postsBefore = wp.$.log.filter((l) => l.method === 'POST' && l.path.endsWith('/posts')).length;
  const r2 = await runSet(b, setA, { pageId: 60584, journal: jl, monthsFile });
  assert.equal(r2.skipped, 'closed');
  assert.equal(wp.$.log.filter((l) => l.method === 'POST' && l.path.endsWith('/posts')).length, postsBefore, 'no new POST /posts');

  // 3) HTML reply while publishing the 3rd post → STOP, nothing finalized/closed, no retry, no duplicate; a re-run also STOPs
  const setB = buildSet('ztb');
  const dataB = JSON.parse(fs.readFileSync(path.join(setB, 'bridge.json'), 'utf8'));
  failSlug = dataB.R[2].slug;
  await assert.rejects(() => runSet(b, setB, { pageId: 60584, journal: jl, monthsFile }), (e) => e instanceof Stop && e.step === 4 && /published 8\/9/.test(e.message) && e.extra.missing[0] === failSlug);
  const bPosts = [...wp.$.posts.values()].filter((p) => p.slug.endsWith('-ztb'));
  assert.equal(bPosts.length, 8);
  assert.equal(new Set(bPosts.map((p) => p.slug)).size, 8, 'no duplicate slugs');
  assert.ok(!wp.$.monthPage.content.raw.includes('-ztb/'), 'nothing finalized onto the month page');
  failSlug = null;
  const before = wp.$.log.filter((l) => l.method === 'POST' && l.path.endsWith('/posts')).length;
  await assert.rejects(() => runSet(b, setB, { pageId: 60584, journal: jl, monthsFile }), (e) => e instanceof Stop && /never re-running __runPub/.test(e.message));
  assert.equal(wp.$.log.filter((l) => l.method === 'POST' && l.path.endsWith('/posts')).length, before, 'resume must not publish');
  assert.equal([...wp.$.posts.values()].filter((p) => p.slug.endsWith('-ztb')).length, 8);

  page.stop(); await b.close();
});

test('month guard: refuses a new set in a month that already has backfill posts it did not create', async () => {
  const stateDir = fs.mkdtempSync(path.join(os.tmpdir(), 'kn-mg-'));
  const wp = mockWP();
  wp.$.addPost({ id: 777, slug: 'someone-elses-post', date: '2024-10-05T10:00:00', content: { raw: '<table class="kn-record"></table>' } });
  const b = await start({ port: 0, stateDir });
  const page = await fakePage({ bridge: b, fixtures: wp, stateDir });
  try {
    const setC = buildSet('ztc');
    const before = wp.$.posts.size;
    await assert.rejects(() => runSet(b, setC, { pageId: 60584, monthsFile: path.join(stateDir, 'months.json') }),
      (e) => e instanceof Stop && e.step === 0 && /2024-10 already has 1 backfill posts/.test(e.message) && /777/.test(e.message));
    assert.equal(wp.$.posts.size, before, 'nothing created');
    assert.equal(wp.$.media.size, 0, 'no image uploaded');
    assert.ok(!(await b.submit('state', {})).sets.ztc, 'set never opened');
    await assert.rejects(() => runSet(b, setC, { pageId: 60584 }), /monthsFile is required/);
  } finally { page.stop(); await b.close(); }
});

test('desk decodes a large Thai result without corrupting characters at chunk boundaries', async () => {
  const b = await start({ port: 0, token: 'tok', stateDir: fs.mkdtempSync(path.join(os.tmpdir(), 'kn-b-')) });
  const H = { Origin: 'https://kinnom.co' }; const base = `http://127.0.0.1:${b.port}`;
  const big = 'สอดไส้คุ้กกี้แอนด์ครีม กัดเข้าไปเจอไส้มิลค์ครีม 🍓'.repeat(60000); // ~7 MB of 3–4 byte characters
  const pending = b.submit('ping', {});
  const job = await (await fetch(`${base}/job?token=tok`, { headers: H })).json();
  await fetch(`${base}/result?token=tok`, { method: 'POST', headers: { ...H, 'content-type': 'application/json' }, body: JSON.stringify({ id: job.id, result: big }) });
  const got = await pending;
  assert.equal(got.length, big.length); assert.ok(!got.includes('�')); assert.equal(got, big);
  await b.close();
});
