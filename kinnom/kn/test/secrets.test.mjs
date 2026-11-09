// secrets.test.mjs — the application password must not leak through anything this code writes or sends.
// Uses a FAKE credential and a stubbed network; never reads the real .env.
import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { boot } from '../node/runtime.mjs';

const FAKE = { user: 'claude-bot', appPassword: 'FAKE abcd EFGH 1234 zzzz' };
const B64 = Buffer.from(`${FAKE.user}:${FAKE.appPassword}`).toString('base64');

test('credentials are refused for any host other than https://kinnom.co', async () => {
  for (const base of ['http://kinnom.co', 'https://kinnom.co.evil.example', 'https://evil.example/?x=kinnom.co', 'https://kinnom.com']) {
    await assert.rejects(() => boot({ mode: 'readonly', stateDir: fs.mkdtempSync(path.join(os.tmpdir(), 'kn-sec-')), base, ...FAKE }), /refusing to send credentials/, base);
  }
});

test('password never reaches the journal, state files, error messages, or a non-kinnom URL', async () => {
  const stateDir = fs.mkdtempSync(path.join(os.tmpdir(), 'kn-sec-'));
  const seen = [];
  globalThis.fetch = async (url, init) => { // stub network (boot captures this as the "real" fetch)
    seen.push({ url: String(url), auth: init.headers.Authorization, redirect: init.redirect });
    if (/slug=html/.test(url)) return new Response('<html>login</html>', { status: 200 });
    if (/slug=denied/.test(url)) return new Response('{"code":"rest_forbidden"}', { status: 403 });
    return new Response('[]', { status: 200, headers: { 'content-type': 'application/json' } });
  };
  const { W } = await boot({ mode: 'readonly', stateDir, base: 'https://kinnom.co', ...FAKE });

  await W.__api('posts?slug=ok');
  const errs = [];
  for (const q of ['posts?slug=html', 'posts?slug=denied']) await W.__api(q).catch((e) => errs.push(String(e.message)));
  await W.__api('posts', { method: 'POST', body: '{}' }).catch((e) => errs.push(String(e.message))); // readonly → refused before the network

  assert.ok(seen.length >= 3 && seen.every((r) => r.url.startsWith('https://kinnom.co/wp-json/wp/v2/')), 'only kinnom.co REST URLs are contacted');
  assert.ok(seen.every((r) => r.auth === 'Basic ' + B64 && r.redirect === 'error'), 'auth header is sent, redirects are never followed');
  assert.ok(!seen.some((r) => /POST/.test(r.method || '')), 'readonly never reaches the network with a write');

  const written = fs.readdirSync(stateDir).map((f) => fs.readFileSync(path.join(stateDir, f), 'utf8')).join('\n') + '\n' + errs.join('\n');
  assert.equal(errs.length, 3);
  for (const secret of [FAKE.appPassword, B64, FAKE.appPassword.replace(/ /g, '')]) assert.ok(!written.includes(secret), 'secret found in journal/state/errors');
  assert.ok(!/Authorization|Basic /.test(written), 'no auth header text in anything written');
});

test('DPAPI store: round-trips a fake secret, file holds no plaintext, tampered file is refused', async () => {
  const { encrypt, decrypt, saveCredential, loadCredential } = await import('../node/secret.mjs');
  const file = path.join(fs.mkdtempSync(path.join(os.tmpdir(), 'kn-dpapi-')), 'cred.json');
  saveCredential(FAKE.user, FAKE.appPassword, file);
  const raw = fs.readFileSync(file, 'utf8');
  assert.ok(!raw.includes(FAKE.appPassword) && !raw.includes(FAKE.appPassword.replace(/ /g, '')) && !raw.includes(B64), 'plaintext found in credential file');
  assert.deepEqual(loadCredential(file), { base: 'https://kinnom.co', user: FAKE.user, appPassword: FAKE.appPassword });
  assert.notEqual(encrypt('x'), encrypt('x'), 'DPAPI output is salted');
  assert.throws(() => decrypt('not-hex; Remove-Item x'), /not DPAPI ciphertext/);
});
