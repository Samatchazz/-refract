/* v4.1.9 → v4.1.10 (12 ก.ย. 2026, Mat เคาะ brand canon "ไทย (English)"): __brandInCap ยอมรับแบรนด์รูปแบบ "ยามาซากิ (Yamazaki)" ถ้าส่วนไทยหรือส่วนอังกฤษอยู่ในแคปชั่น (เดิมเทียบทั้งก้อน → ตกทุกแถว) · ไม่มี alert (รันผ่าน javascript_tool ได้) */
(function () {
  var s = localStorage.getItem('kntk');
  if (!s) { return 'no kntk'; }
  if (s.indexOf("window.__VER='4.1.10'") >= 0) { return 'already 4.1.10'; }
  if (s.indexOf("window.__VER='4.1.9'") < 0) { return 'not 4.1.9'; }
  var LAYER = "\n/* ===== v4.1.10 (12 ก.ย. 2026, brand canon) ===== */\n" +
    "window.__VER='4.1.10';\n" +
    "window.__brandInCap0 = window.__brandInCap0 || window.__brandInCap;\n" +
    "window.__brandParts = function (b) { b = String(b || ''); var m = b.match(/^(.*?)\\s*\\((.*?)\\)\\s*$/); var p = [b]; if (m) { p.push(m[1]); p.push(m[2]); } return p.filter(function (x) { return window.__norm(x).length >= 2; }); };\n" +
    "window.__brandInCap = function (brand, cap) { return window.__brandParts(brand).some(function (p) { return window.__brandInCap0(p, cap); }); };\n" +
    "window.__selftestBase1 = window.__selftestBase1 || window.__selftestBase;\n" +
    "window.__selftestBase = function () {\n" +
    "  var e = window.__selftestBase1();\n" +
    "  e.push('brandInCap สองภาษา ไทยในแคปชั่น: ' + (window.__brandInCap('ยามาซากิ (Yamazaki)', 'ขนมปังยามาซากิ 📍 7-11') ? 'PASS' : '❌FAIL'));\n" +
    "  e.push('brandInCap สองภาษา อังกฤษในแคปชั่น: ' + (window.__brandInCap('คัดสรร (Kudsan)', 'kudsan new menu 📍 7-11') ? 'PASS' : '❌FAIL'));\n" +
    "  e.push('brandInCap ไม่อยู่ในแคปชั่น ต้องตก: ' + (!window.__brandInCap('คัดสรร (Kudsan)', 'ขนมปังยามาซากิ 📍 7-11') ? 'PASS' : '❌FAIL'));\n" +
    "  e.push('brandInCap แบรนด์แม่ D20 ยังผ่าน: ' + (window.__brandInCap('ยามาซากิ (Yamazaki)', 'ขนมปัง 📍 Sunmoulin สาขาสยาม') ? 'PASS' : '❌FAIL'));\n" +
    "  return e;\n" +
    "};\n";
  localStorage.setItem('kntk_bak_419', s);
  localStorage.setItem('kntk', s + LAYER);
  (0, eval)(LAYER);
  return 'patched ' + window.__VER;
})();
