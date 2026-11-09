// selftest.mjs — runs the toolkit's own __selftest() under Node, offline.
// Usage: node kn/node/selftest.mjs        (exit 0 = all checks passed)
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { boot, snapshotFixtures } from './runtime.mjs';

// throw-away state dir: the selftest must never touch the real state/ (it temporarily rewrites __ST)
const stateDir = fs.mkdtempSync(path.join(os.tmpdir(), 'kn-selftest-'));
const { W, journalFile } = await boot({ mode: 'offline', stateDir, fixtures: snapshotFixtures() });

console.log('toolkit', W.__VER, '· mode offline · state', stateDir);
W.__selftest();
const t0 = Date.now();
// 4.1.9 wraps the selftest and appends a users/me check after the base run; wait until the text stops changing
let prev = '';
for (;;) {
  await new Promise((r) => setTimeout(r, 700));
  const cur = String(W.__STR);
  if (cur !== 'running' && cur === prev) break;
  prev = cur;
  if (Date.now() - t0 > 60000) { console.error('selftest timeout'); process.exit(2); }
}
console.log(W.__STR);
const mocked = fs.readFileSync(journalFile, 'utf8').trim().split('\n').map((l) => JSON.parse(l));
console.log(`network: 0 real requests · ${mocked.length} answered by local fixtures (${[...new Set(mocked.map((r) => r.path.replace('/wp-json/wp/v2/', '')))].join(', ')})`);
process.exit(/✅/.test(W.__STR) ? 0 : 1);
