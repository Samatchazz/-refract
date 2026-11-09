// recat.test.mjs — the recategorisation path end to end against the mock WordPress (real desk, real page glue).
import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { start } from '../node/bridge.mjs';
import { mockWP } from '../node/mockwp.mjs';
import { fakePage } from '../node/fakepage.mjs';
import { apply, rollback, readLog } from '../recat/apply.mjs';

test('setTerms: only categories/tags move, guarded by the expected state; resumable; STOP on a bad reply; rollback restores', async () => {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'kn-recat-'));
  const logFile = path.join(dir, 'apply-log.jsonl');
  let failId = null; const bodies = [];
  const wp = mockWP({ intercept: (m, url, body) => {
    if (m === 'POST' && /\/posts\/\d+$/.test(url.split('?')[0])) { bodies.push(JSON.parse(body)); if (failId && url.includes('/posts/' + failId)) return { __raw: '<html>502</html>', status: 502 }; }
  } });
  const mk = (id, extra) => wp.$.addPost({ id, slug: 'p' + id, title: { raw: 'T' + id }, content: { raw: 'BODY' + id }, categories: [12], tags: [5, 6, 7], ...extra });
  mk(1); mk(2); mk(3, { categories: [12, 11] }); mk(4, { status: 'draft' }); mk(5, { categories: [11, 3540], tags: [5, 21] }); mk(6); mk(7);
  const b = await start({ port: 0, stateDir: dir });
  const page = await fakePage({ bridge: b, fixtures: wp, stateDir: dir });
  const plan = [
    { id: 1, expectCats: [12], cats: [11, 3540], addTags: [21] },  // normal
    { id: 2, expectCats: [12], cats: [12, 3655], addTags: [] },    // café drink keeps Cafe
    { id: 3, expectCats: [12], cats: [11], addTags: [] },          // someone edited it since the plan → must be left alone
    { id: 4, expectCats: [12], cats: [11], addTags: [] },          // not published → never touched
    { id: 5, expectCats: [12], cats: [11, 3540], addTags: [21] },  // already in the target state
  ];
  const r1 = await apply(b, plan, { logFile, delay: 0 });
  assert.deepEqual(r1.tally, { updated: 2, 'skip-changed': 1, 'skip-status': 1, already: 1 });
  const P = (id) => wp.$.posts.get(id);
  assert.deepEqual(P(1).categories, [11, 3540]); assert.deepEqual(P(1).tags, [5, 6, 7, 21]);   // tag appended, none removed
  assert.deepEqual(P(2).categories, [12, 3655]); assert.deepEqual(P(3).categories, [12, 11]); assert.deepEqual(P(4).categories, [12]);
  for (const id of [1, 2, 3, 4, 5]) { assert.equal(P(id).content.raw, 'BODY' + id); assert.equal(P(id).title.raw, 'T' + id); assert.equal(P(id).slug, 'p' + id); }
  assert.equal(P(4).status, 'draft');
  assert.ok(bodies.every((x) => Object.keys(x).sort().join() === 'categories,tags'), 'only categories + tags are ever sent');
  assert.equal(bodies.length, 2);

  // re-run: nothing is sent again
  const r2 = await apply(b, plan, { logFile, delay: 0 });
  assert.equal(bodies.length, 2); assert.equal(r2.skippedDone, 3);

  // a broken reply stops the run; the next post is not attempted
  failId = 6;
  await assert.rejects(() => apply(b, [{ id: 6, expectCats: [12], cats: [11], addTags: [] }, { id: 7, expectCats: [12], cats: [11], addTags: [] }], { logFile, delay: 0 }), /STOP at post 6/);
  assert.deepEqual(P(7).categories, [12]);
  assert.equal(readLog(logFile).filter((x) => x.result === 'error').length, 1);
  failId = null;

  // the glue refuses malformed jobs
  await assert.rejects(() => b.submit('setTerms', { id: 1, expectCats: [11], cats: [], addTags: [] }), /bad args/);
  await assert.rejects(() => b.submit('setTerms', { id: 1, expectCats: [11], cats: ['11'], addTags: [] }), /bad args/);

  // rollback puts categories back exactly; tags stay (they were only added)
  const rb = await rollback(b, { logFile, delay: 0 });
  assert.equal(rb.tally.updated, 2);
  assert.deepEqual(P(1).categories, [12]); assert.deepEqual(P(2).categories, [12]); assert.deepEqual(P(1).tags, [5, 6, 7, 21]);

  page.stop(); await b.close();
});
