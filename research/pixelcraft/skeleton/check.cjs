// check.cjs — bidirectional token consistency: sections.json ↔ index.html (BRIEF §7 check 3)
// node research/pixelcraft/skeleton/check.cjs → PASS/FAIL lines, exit 0 only if clean.
'use strict';
const fs = require('fs');
const path = require('path');

const here = __dirname;
const man = JSON.parse(fs.readFileSync(path.join(here, 'sections.json'), 'utf8'));
const html = fs.readFileSync(path.join(here, 'index.html'), 'utf8');

let fail = 0;
const report = (ok, msg) => { console.log((ok ? 'PASS' : 'FAIL') + ' ' + msg); if (!ok) fail++; };

// manifest tokens (header + popup + sections)
const manTokens = [man.header, man.popup, ...man.sections].flatMap(s => s.slots.map(x => x.token.slice(1, -1)));
const manSet = new Set(manTokens);
report(manSet.size === manTokens.length, `manifest tokens unique (${manTokens.length})`);

// html tokens from data-token attributes (data-token-dup copies are display-only, excluded)
const htmlTokens = [...html.matchAll(/data-token="([^"]+)"/g)].map(m => m[1]);
const counts = {};
htmlTokens.forEach(t => counts[t] = (counts[t] || 0) + 1);
const dups = Object.entries(counts).filter(([, n]) => n > 1).map(([t]) => t);
report(dups.length === 0, `html tokens appear exactly once${dups.length ? ' — dup: ' + dups.join(',') : ` (${htmlTokens.length})`}`);

// bidirectional
const missingInHtml = manTokens.filter(t => !counts[t]);
report(missingInHtml.length === 0, `every manifest token in html${missingInHtml.length ? ' — missing: ' + missingInHtml.slice(0, 8).join(',') : ''}`);
const missingInMan = htmlTokens.filter(t => !manSet.has(t));
report(missingInMan.length === 0, `every html token in manifest${missingInMan.length ? ' — extra: ' + missingInMan.slice(0, 8).join(',') : ''}`);

// token grammar
const bad = manTokens.filter(t => !/^S\d{2}(-[A-Z0-9]+)*-[A-Z0-9-]+$/.test(t) && !/^POP-[A-Z-]+$/.test(t));
report(bad.length === 0, `token grammar${bad.length ? ' — bad: ' + bad.slice(0, 8).join(',') : ''}`);

// visible [Sxx-…] literals in html must all be data-token-carrying (no stray prose tokens)
const literals = [...html.matchAll(/\[(S\d{2}(?:-[A-Z0-9]+)*-[A-Z0-9-]+)\]/g)].map(m => m[1]);
const stray = literals.filter(t => !manSet.has(t));
report(stray.length === 0, `no stray [Sxx-…] literals${stray.length ? ' — ' + stray.slice(0, 8).join(',') : ''}`);

console.log(fail ? `\n${fail} check(s) FAILED` : '\nALL TOKEN CHECKS PASS');
process.exit(fail ? 1 : 0);
