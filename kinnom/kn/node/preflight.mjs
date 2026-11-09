// preflight.mjs — READ-ONLY check of the real tab through the desk. Writes nothing to the site.
//   node kn/node/preflight.mjs        (start, wait for the bookmarklet click, report, exit)
import fs from 'node:fs';
import path from 'node:path';
import { start, ROOT } from './bridge.mjs';

const h = (t) => { let x = 0; for (let i = 0; i < t.length; i++) x = (Math.imul(x, 31) + t.charCodeAt(i)) >>> 0; return x; }; // = toolkit __h
const local = fs.readFileSync(path.join(ROOT, 'kn', 'node', 'toolkit', 'kntk-4.1.11.js'), 'utf8');
const b = await start({ log: () => {} });
console.log(`desk on 127.0.0.1:${b.port} — click the "kinnom bridge" bookmark on the kinnom.co/wp-admin tab…`);
while (!b.connected()) await new Promise((r) => setTimeout(r, 1500));
const out = {};
out.ping = await b.submit('ping', {}, { timeoutMs: 30000 });
const k = await b.submit('kntk', {});
out.toolkit = { tab: `${k.len} chars h=${k.h}`, local: `${local.length} chars h=${h(local)}`, identical: k.len === local.length && k.h === h(local) };
out.selftest = await b.submit('selftest', {}, { timeoutMs: 180000 });
const st = await b.submit('state', {});
const sets = Object.keys(st.sets || {});
out.state = { ver: st.ver, cur: st.cur, sets: sets.length, open: sets.filter((s) => !st.sets[s].closed), posts: sets.reduce((n, s) => n + Object.keys(st.sets[s].pub || {}).length, 0) };
const hub = await b.submit('get', { path: 'posts/42102?_fields=id,title,modified' });
out.hub = { id: hub.id, title: hub.title && hub.title.rendered, modified: hub.modified };
console.log(JSON.stringify(out, null, 1));
fs.writeFileSync(path.join(ROOT, 'state', 'preflight-' + new Date().toISOString().slice(0, 10) + '.json'), JSON.stringify(out, null, 1));
await b.close();
