// secret.mjs — keeps the WordPress application password OUT of plaintext files.
//
// Storage: %APPDATA%\kinnom\wp-credential.json  (outside the project: never in git, tarballs or the folder Claude works in)
//          { base, user, enc }  where enc = Windows DPAPI ciphertext bound to Mat's Windows account on this PC.
//          Copy the file to another machine / another Windows user / a backup → it cannot be decrypted.
// Entry:   a native Windows credential dialog (not the chat, not a text file, not the command line).
// Use:     decrypted inside the Node process right before a run; never printed, never logged, never passed on argv.
//
//   node kn/node/secret.mjs set      ← Mat runs this himself; a Windows dialog asks for the user name + application password
//   node kn/node/secret.mjs status   ← shows user, site, when saved. Never shows the password.
//   node kn/node/secret.mjs forget   ← deletes the stored credential (then Revoke it in WordPress too)
import fs from 'node:fs';
import path from 'node:path';
import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

export const STORE = path.join(process.env.APPDATA || path.join(process.env.USERPROFILE || '.', 'AppData', 'Roaming'), 'kinnom', 'wp-credential.json');
const BASE = 'https://kinnom.co';

function ps(script, input) {
  const r = spawnSync('powershell.exe', ['-NoProfile', '-NonInteractive', '-Command', script], { input, encoding: 'utf8', windowsHide: true });
  if (r.status !== 0) throw new Error('powershell failed: ' + String(r.stderr || '').split('\n')[0].slice(0, 120));
  return r.stdout.trim();
}
// plaintext goes in on stdin (argv would be visible in the process list); DPAPI scope = current Windows user
export function encrypt(plain) { return ps('$p = [Console]::In.ReadToEnd(); ConvertFrom-SecureString (ConvertTo-SecureString $p -AsPlainText -Force)', plain); }
export function decrypt(enc) {
  if (!/^[0-9a-f]+$/i.test(enc)) throw new Error('stored credential is not DPAPI ciphertext');
  return ps('$e = [Console]::In.ReadToEnd().Trim(); [System.Net.NetworkCredential]::new("", (ConvertTo-SecureString $e)).Password', enc);
}

export function loadCredential(file = STORE) {
  if (!fs.existsSync(file)) return null;
  const o = JSON.parse(fs.readFileSync(file, 'utf8'));
  return { base: o.base, user: o.user, appPassword: decrypt(o.enc) };
}
export function saveCredential(user, plain, file = STORE) {
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, JSON.stringify({ base: BASE, user, enc: encrypt(plain), saved: new Date().toISOString() }, null, 1));
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const cmd = process.argv[2];
  if (cmd === 'set') {
    // interactive on purpose: the dialog is drawn by Windows; the secret goes Windows → DPAPI → file, and is never echoed
    const r = spawnSync('powershell.exe', ['-NoProfile', '-Command',
      '$c = Get-Credential -Message "kinnom.co — WordPress user (Editor) + Application Password"; if (-not $c) { exit 3 }; ' +
      '$c.UserName; ConvertFrom-SecureString $c.Password'], { encoding: 'utf8', stdio: ['inherit', 'pipe', 'inherit'] });
    const [user, enc] = String(r.stdout || '').trim().split(/\r?\n/);
    if (r.status !== 0 || !user || !/^[0-9a-f]+$/i.test(enc || '')) { console.error('cancelled — nothing saved'); process.exit(1); }
    fs.mkdirSync(path.dirname(STORE), { recursive: true });
    fs.writeFileSync(STORE, JSON.stringify({ base: BASE, user: user.replace(/^\\/, ''), enc, saved: new Date().toISOString() }, null, 1));
    console.log(`saved (encrypted for this Windows account only): ${STORE}`);
  } else if (cmd === 'status') {
    if (!fs.existsSync(STORE)) { console.log('no credential stored'); process.exit(0); }
    const o = JSON.parse(fs.readFileSync(STORE, 'utf8'));
    console.log(`site ${o.base} · user ${o.user} · saved ${o.saved} · password: [encrypted, ${o.enc.length} hex chars]`);
  } else if (cmd === 'forget') {
    if (fs.existsSync(STORE)) fs.rmSync(STORE);
    console.log('local credential removed. Also press Revoke on the user page in WordPress.');
  } else console.log('usage: node kn/node/secret.mjs set | status | forget');
}
