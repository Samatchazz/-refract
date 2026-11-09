/* small helpers for non-quiz pages */
(function () {
  var F = window.FLAV;
  if (!F) return;

  // หน้าแรก: 10 บุคลิก
  var grid = document.getElementById('arch-grid');
  if (grid) {
    grid.innerHTML = F.ARCH_ORDER.map(function (c) {
      var a = F.ARCH[c];
      return '<div class="arch-chip" style="border-top:10px solid ' + a.bg + '"><b>' + a.n + '</b><span>' + a.e + '</span></div>';
    }).join('');
  }

  // หน้าติดต่อ: ปุ่ม LINE
  var link = document.getElementById('line-link');
  if (link) {
    var id = (F.LINE_OA_ID || '').trim();
    var note = document.getElementById('line-note');
    if (id) {
      link.href = 'https://line.me/R/ti/p/' + encodeURIComponent(id);
      link.target = '_blank'; link.rel = 'noopener';
    } else {
      link.addEventListener('click', function (e) { e.preventDefault(); });
      if (note) note.textContent = 'ยังไม่ได้ใส่ LINE OA ID (ตั้งค่าใน js/data.js)';
    }
  }
})();
