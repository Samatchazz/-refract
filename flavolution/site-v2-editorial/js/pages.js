/* visual helpers shared by pages + quiz (load after data.js) */
(function () {
  var F = window.FLAV;
  if (!F) return;

  /* album-cover colours per archetype (visual only; content lives in data.js) */
  F.COVERS = {
    chef:    ['#3A1C12', '#C8452B'],
    kind:    ['#B8573A', '#F2B8A0'],
    hype:    ['#4B2A86', '#F0629A'],
    rush:    ['#1B2E4A', '#E9A23B'],
    craft:   ['#2F3B2A', '#9DB07A'],
    host:    ['#1F3A3E', '#8FC1B5'],
    brand:   ['#15120F', '#8C7F70'],
    calc:    ['#233044', '#9FB4D8'],
    formula: ['#6A3B12', '#F2C14E'],
    remote:  ['#2B2233', '#A99BC9']
  };
  F.coverStyle = function (code) { var c = F.COVERS[code]; return '--c1:' + c[0] + ';--c2:' + c[1]; };

  /* sky per chapter, for the home-page day strip (mirrors .stage[data-sky] in CSS) */
  var SKY = {
    1: ['linear-gradient(170deg,#141a36,#2e2f5e 40%,#8a5d86 78%,#e39a70)', '#F6EFE6'],
    2: ['linear-gradient(170deg,#f6e4c8,#f3c795 45%,#ea9a6e)', '#15120F'],
    3: ['linear-gradient(170deg,#fbf1d7,#f6d28a 50%,#efae4a)', '#15120F'],
    4: ['linear-gradient(170deg,#f1eadf,#e5d6c4 55%,#d4b79c)', '#15120F'],
    5: ['linear-gradient(170deg,#3b2150,#a33f63 45%,#ec7a45 85%,#f4b06a)', '#FFF4EA'],
    6: ['linear-gradient(170deg,#0d1024,#1b1f3e 60%,#35305a)', '#EDE8F5'],
    7: ['linear-gradient(170deg,#efe9f4,#dcd3ea 50%,#c7bddf)', '#15120F']
  };

  var day = document.getElementById('day-strip');
  if (day) {
    day.innerHTML = F.CHAPTERS.map(function (c) {
      var s = SKY[c.id];
      return '<div class="day__cell" style="background:' + s[0] + ';color:' + s[1] + '"><span class="day__time">' + c.time + '</span><span class="day__label">' + c.title + '</span></div>';
    }).join('');
  }

  var shelf = document.getElementById('shelf');
  if (shelf) {
    shelf.innerHTML = F.ARCH_ORDER.map(function (code, i) {
      var a = F.ARCH[code];
      return '<a class="cover" href="quiz.html" style="' + F.coverStyle(code) + '"><span class="cover__no">' + String(i + 1).padStart(2, '0') + ' / 10</span>' +
        '<span><span class="cover__name">' + a.n + '</span><span class="cover__e" style="display:block">' + a.e + '</span></span></a>';
    }).join('');
  }

  var link = document.getElementById('line-link');
  if (link) {
    var id = (F.LINE_OA_ID || '').trim();
    var note = document.getElementById('line-note');
    if (id) { link.href = 'https://line.me/R/ti/p/' + encodeURIComponent(id); link.target = '_blank'; link.rel = 'noopener'; }
    else { link.addEventListener('click', function (e) { e.preventDefault(); }); if (note) note.textContent = 'ยังไม่ได้ใส่ LINE OA ID (ตั้งค่าใน js/data.js)'; }
  }
})();
