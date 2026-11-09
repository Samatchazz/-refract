/* v4.1.8 → v4.1.9 (5 ก.ย. 2026, Mat เคาะ D24+D26): (1) __norm ถอด HTML entity ก่อนเทียบ — แท็ก 29 ตัวที่ชื่อมี & (M&M, S&P, Ben & Jerry's …) ผ่านด่านได้โดยไม่ต้องแจกบัตรผ่าน __TAG_OK  (2) __refresh มี fallback อ่าน nonce จาก wpApiSettings ในหน้า profile.php ถ้า admin-ajax ตอบค่าที่ไม่ใช่ nonce (เดิมเอา "0" ไปใช้แล้วพังทั้งกะ)  (3) selftest เพิ่ม 4 ข้อ: __norm 3 ข้อ + nonce ใช้ได้จริง 1 ข้อ · วางใน Console ของ wp-admin */
(function () {
  var s = localStorage.getItem('kntk');
  if (!s) { alert('ไม่พบทูลคิตในแท็บนี้ — ต้องกดบนแท็บ kinnom.co/wp-admin'); return; }
  if (s.indexOf("window.__VER='4.1.9'") >= 0) { alert('เป็น 4.1.9 อยู่แล้ว ไม่ต้องทำอะไร'); return; }
  if (s.indexOf("window.__VER='4.1.8'") < 0) { alert('ทูลคิตไม่ใช่ 4.1.8 ไม่ได้แก้อะไร'); return; }
  var LAYER = "\n/* ===== v4.1.9 (5 ก.ย. 2026, Mat เคาะ D24+D26) ===== */\n" +
    "window.__VER='4.1.9';\n" +
    "window.__norm0 = window.__norm0 || window.__norm;\n" +
    "window.__unent = function (e) { return String(e == null ? '' : e).replace(/&amp;/gi, '&').replace(/&#0*38;/g, '&').replace(/&#0*39;|&apos;/gi, \"'\").replace(/&quot;/gi, '\"').replace(/&lt;/gi, '<').replace(/&gt;/gi, '>').replace(/&nbsp;/gi, ' '); };\n" +
    "window.__norm = function (e) { return window.__norm0(window.__unent(e)); };\n" +
    "window.__refresh = async function () {\n" +
    "  var n = '';\n" +
    "  try { var r = await fetch('/wp-admin/admin-ajax.php', { method: 'POST', credentials: 'include', headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, body: 'action=rest-nonce' }); n = (await r.text()).trim(); } catch (e) { }\n" +
    "  if (/^[a-f0-9]{8,12}$/.test(n)) { window.__NONCE = n; return n; }\n" +
    "  var r2 = await fetch('/wp-admin/profile.php', { credentials: 'include', cache: 'no-store' }); var t = await r2.text();\n" +
    "  var m = t.match(/wpApiSettings\\s*=\\s*\\{[^}]*\"nonce\":\"([a-f0-9]{6,20})\"/);\n" +
    "  if (!m) { if (/id=\"loginform\"|wp-login\\.php\\?/.test(t)) throw new Error('หลุดล็อกอิน WP แล้ว — Mat ต้องล็อกอินใหม่เอง'); throw new Error('__refresh: หา nonce ไม่เจอทั้ง admin-ajax (ตอบ \"' + n.slice(0, 10) + '\") และ profile.php'); }\n" +
    "  window.__NONCE = m[1]; return m[1];\n" +
    "};\n" +
    "window.__selftestBase0 = window.__selftestBase0 || window.__selftestBase;\n" +
    "window.__selftestBase = function () {\n" +
    "  var e = window.__selftestBase0(); var A = String.fromCharCode(38);\n" +
    "  e.push('__norm ถอด HTML entity (M&amp;M&#039;s = M&M\\'s): ' + (window.__norm('M' + A + 'amp;M' + A + '#039;s') === window.__norm('M' + A + 'M' + String.fromCharCode(39) + 's') ? 'PASS' : '❌FAIL'));\n" +
    "  e.push('__norm ข้อความธรรมดาผลเหมือน 4.1.8: ' + (window.__norm('เค้ก ช็อกโกแลต ๆ 25 บาท|x') === window.__norm0('เค้ก ช็อกโกแลต ๆ 25 บาท|x') && window.__norm('เค้ก ช็อกโกแลต ๆ 25 บาท|x') === 'เค้กช็อกโกแลต25บาทx' ? 'PASS' : '❌FAIL'));\n" +
    "  e.push('__norm ไม่ทำให้ของต่างกันเท่ากัน (S&amp;P vs SP2): ' + (window.__norm('S' + A + 'amp;P') !== window.__norm('SP2') ? 'PASS' : '❌FAIL'));\n" +
    "  return e;\n" +
    "};\n" +
    "window.__selftest0 = window.__selftest0 || window.__selftest;\n" +
    "window.__selftest = function () {\n" +
    "  var r = window.__selftest0();\n" +
    "  (async function () {\n" +
    "    for (var i = 0; i < 240 && window.__STR === 'running'; i++) await new Promise(function (z) { setTimeout(z, 500); });\n" +
    "    if (window.__STR === 'running') return;\n" +
    "    var extra = [];\n" +
    "    try { var me = await window.__api('users/me?_fields=id'); extra.push('nonce ใช้ได้จริง (users/me): ' + (me && me.id ? 'PASS' : '❌FAIL')); } catch (err) { extra.push('nonce ใช้ได้จริง (users/me): ❌FAIL ' + err.message); }\n" +
    "    var bad = extra.filter(function (x) { return x.indexOf('FAIL') >= 0; });\n" +
    "    if (bad.length) { window.__ST.selftest = 0; window.__save(); window.__STR = 'v' + window.__VER + ' | ❌ ไม่ผ่าน (ข้อเพิ่ม 4.1.9): ' + bad.join(' / ') + '\\n' + window.__STR; }\n" +
    "    else { window.__STR = window.__STR.replace(/ผ่านทั้งหมด (\\d+) ข้อ/, function (m, n) { return 'ผ่านทั้งหมด ' + (Number(n) + extra.length) + ' ข้อ'; }); }\n" +
    "  })();\n" +
    "  return r;\n" +
    "};\n";
  localStorage.setItem('kntk_bak_418', s);
  s = s + LAYER;
  localStorage.setItem('kntk', s);
  (0, eval)(LAYER);
  delete window.__TAG_OK[58]; delete window.__TAG_OK[1261]; /* บัตรผ่านชั่วคราวคืน 5 ก.ย. ไม่ต้องใช้แล้ว */
  try { window.__selftest(); } catch (e) { }
  setTimeout(function () { alert('ทูลคิต ' + window.__VER + '\n' + (window.__STR || 'selftest กำลังรัน… ดูผลใน console') + '\n(สำรองตัวเก่าไว้ที่ kntk_bak_418)'); }, 8000);
})();
