// safety.test.mjs — node --test kn/test/
// 1. the transport guard refuses everything Mat's rule 5 forbids
// 2. a non-JSON reply to a write is a hard error and is NOT retried (the Dec 2024 half-created-post case)
// 3. negative control: if a gate is sabotaged, the toolkit selftest under Node really fails (so 56/56 is not vacuous)
import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { boot, guard, snapshotFixtures } from '../node/runtime.mjs';

test('guard: forbidden requests are refused', () => {
  const bad = [
    ['DELETE', '/wp-json/wp/v2/posts/123'],
    ['DELETE', '/wp-json/wp/v2/media/9?force=true'],
    ['POST', '/wp-json/wp/v2/settings'],
    ['POST', '/wp-json/wp/v2/plugins'],
    ['POST', '/wp-json/wp/v2/themes'],
    ['POST', '/wp-json/wp/v2/users/2'],
    ['GET', '/wp-json/wp/v2/users'],
    ['PUT', '/wp-json/wp/v2/posts/1'],
    ['POST', '/wp-admin/admin-ajax.php'],
    ['POST', '/wp-json/wp/v2/tags/55'], // creating a tag is allowed, editing one is not
  ];
  for (const [m, p] of bad) assert.throws(() => guard(m, p), /GUARD/, `${m} ${p}`);
  assert.throws(() => guard('POST', '/wp-json/wp/v2/posts/123', JSON.stringify({ status: 'draft' })), /status change/);
  assert.throws(() => guard('POST', '/wp-json/wp/v2/posts/123', JSON.stringify({ content: 'x', status: 'publish' })), /status change/);
});

test('guard: what the pipeline needs is allowed', () => {
  guard('GET', '/wp-json/wp/v2/posts?slug=x&status=publish,draft');
  guard('GET', '/wp-json/wp/v2/users/me?_fields=id');
  guard('POST', '/wp-json/wp/v2/posts', JSON.stringify({ title: 't', status: 'publish' })); // new post
  guard('POST', '/wp-json/wp/v2/posts/60584', JSON.stringify({ content: 'month page' }));   // month page / hub edit
  guard('POST', '/wp-json/wp/v2/media');
  guard('POST', '/wp-json/wp/v2/media/77', JSON.stringify({ alt_text: 'a' }));
  guard('POST', '/wp-json/wp/v2/tags', JSON.stringify({ name: 'x' }));
});

test('runtime: HTML reply on a write throws once, no retry; GET retries; selftest negative control', async () => {
  const stateDir = fs.mkdtempSync(path.join(os.tmpdir(), 'kn-test-'));
  const calls = { post: 0, get: 0 };
  const base = snapshotFixtures();
  const fixtures = (method, url, body) => {
    if (method === 'POST' && /\/posts(\?|$)/.test(url)) { calls.post++; return { __raw: '<!DOCTYPE html><html><body>502 Bad Gateway</body></html>', status: 502 }; }
    if (method === 'GET' && /\/posts\?slug=flaky/.test(url)) { calls.get++; return calls.get < 3 ? { __raw: '<html>oops</html>', status: 500 } : []; }
    return base(method, url, body);
  };
  const { W } = await boot({ mode: 'offline', stateDir, fixtures });

  await assert.rejects(() => W.__api('posts', { method: 'POST', body: JSON.stringify({ title: 'x', status: 'publish' }) }), /NONJSON 502 POST/);
  assert.equal(calls.post, 1, 'a failed write must not be retried');

  assert.deepEqual(await W.__api('posts?slug=flaky'), []);
  assert.equal(calls.get, 3, 'reads may retry');

  await assert.rejects(() => W.__api('posts/5', { method: 'DELETE' }), /GUARD/);
  await assert.rejects(() => W.__up1('fid', 'a.jpg', 'alt'), /image adapter not installed/);

  // negative control: neuter the traceability gate → the selftest must notice
  const keep = W.__vtrace;
  W.__vtrace = () => [];
  const e = W.__selftestBase();
  W.__vtrace = keep;
  assert.ok(e.some((x) => /เนื้อหาแต่งเอง/.test(x) && /FAIL/.test(x)), 'sabotaged __vtrace must make the selftest fail');
  assert.ok(!W.__selftestBase().some((x) => /FAIL|❌/.test(x)), 'restored toolkit passes again');
});
