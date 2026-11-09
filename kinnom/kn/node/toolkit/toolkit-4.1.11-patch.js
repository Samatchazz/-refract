/* v4.1.10 → v4.1.11 (12 ก.ย. 2026, fbh nr78): __tagcheck เทียบชื่อแท็กแบบไม่สนตัวพิมพ์ (เดิม __norm ไม่ lowercase → แท็ก "ITO EN" #2126 vs แบรนด์ "Ito en" ตก ทั้งที่ build resolver จับคู่แบบไม่สนตัวพิมพ์อยู่แล้ว) · ไม่มี alert */
(function () {
  var s = localStorage.getItem('kntk');
  if (!s) { return 'no kntk'; }
  if (s.indexOf("window.__VER='4.1.11'") >= 0) { return 'already 4.1.11'; }
  if (s.indexOf("window.__VER='4.1.10'") < 0) { return 'not 4.1.10'; }
  var LAYER = "\n/* ===== v4.1.11 (12 ก.ย. 2026, tagcheck case-insensitive) ===== */\n" +
    "window.__VER='4.1.11';\n" +
    "window.__tagcheck = async function (p) {\n" +
    "  var e = [], ids = (p.tags || []).map(Number);\n" +
    "  if (!ids.length) return ['ไม่มีแท็ก'];\n" +
    "  if (new Set(ids).size !== ids.length) e.push('แท็กซ้ำ');\n" +
    "  var info = await window.__tagfetch(ids);\n" +
    "  var hay = window.__norm([p.title, p.__cap, p.__brand, p.__menu, (p.meta || {})._yoast_wpseo_title].join('|')).toLowerCase();\n" +
    "  ids.forEach(function (id, i) {\n" +
    "    var t = info[i];\n" +
    "    if (!t) { e.push('แท็ก #' + id + ' ไม่มีอยู่จริง'); return; }\n" +
    "    if (window.__TAG_OK[id]) return;\n" +
    "    var nm = window.__norm(t.name).toLowerCase();\n" +
    "    if (!nm || hay.indexOf(nm) < 0) e.push('แท็ก \"' + t.name + '\" (#' + id + ') ไม่พบใน title/แคปชั่น/แบรนด์');\n" +
    "  });\n" +
    "  return e;\n" +
    "};\n" +
    "window.__selftestBase2 = window.__selftestBase2 || window.__selftestBase;\n" +
    "window.__selftestBase = function () {\n" +
    "  var e = window.__selftestBase2();\n" +
    "  var hay = window.__norm(['ชานมมะลิ Ito en', '', 'Ito en'].join('|')).toLowerCase();\n" +
    "  e.push('tagcheck ไม่สนตัวพิมพ์ ITO EN vs Ito en: ' + (hay.indexOf(window.__norm('ITO EN').toLowerCase()) >= 0 ? 'PASS' : '❌FAIL'));\n" +
    "  e.push('tagcheck ยังตกเมื่อไม่มีจริง: ' + (hay.indexOf(window.__norm('Meiji').toLowerCase()) < 0 ? 'PASS' : '❌FAIL'));\n" +
    "  return e;\n" +
    "};\n";
  localStorage.setItem('kntk_bak_4110', s);
  localStorage.setItem('kntk', s + LAYER);
  (0, eval)(LAYER);
  return 'patched ' + window.__VER;
})();
