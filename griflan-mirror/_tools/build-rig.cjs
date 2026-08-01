/**
 * สร้าง assets/plan-c-rig.js — โมดูลโลโก้แมวเวกเตอร์ rig ได้ (ฝัง path ไว้ในไฟล์เลย)
 * ใช้: node _tools/build-rig.cjs
 */
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const subs = JSON.parse(fs.readFileSync(path.join(ROOT, 'logo-lab', '_frame1_fine.json'), 'utf8'));

const BODY = `/* Plan C — โลโก้แมวเวกเตอร์ rig ได้
   สร้างจาก _tools/build-rig.cjs · อย่าแก้ไฟล์นี้ตรงๆ
   ที่มา: วิดีโอโลโก้ → ffmpeg แตกเฟรม → potrace → แยกชิ้นด้วย isPointInFill
   ใช้: PlanCRig.mount(el, {coat:'#f2efde', openMs:1800})  */
(function (glob) {
  'use strict';
  var NS = 'http://www.w3.org/2000/svg';
  var SUBS = __SUBPATHS__;

  // จุดหมุน + ตา (วัดจากรูปอ้างอิง สอบเทียบกับปากแล้ว คลาดเคลื่อน 2-3px จาก 624)
  var HEAD_PIVOT = { x: 130, y: 400 };
  var TAIL_PIVOT = { x: 430, y: 340 };
  var EYE = { lx: 91.8, rx: 168.6, y: 251.4, rx_: 15.1, ry: 16.8, prx: 6.1, pry: 10.0 };
  var K = 0.5523;

  function ellipse(cx, cy, rx, ry) {
    return 'M' + (cx - rx) + ',' + cy +
      'C' + (cx - rx) + ',' + (cy - ry * K) + ' ' + (cx - rx * K) + ',' + (cy - ry) + ' ' + cx + ',' + (cy - ry) +
      'C' + (cx + rx * K) + ',' + (cy - ry) + ' ' + (cx + rx) + ',' + (cy - ry * K) + ' ' + (cx + rx) + ',' + cy +
      'C' + (cx + rx) + ',' + (cy + ry * K) + ' ' + (cx + rx * K) + ',' + (cy + ry) + ' ' + cx + ',' + (cy + ry) +
      'C' + (cx - rx * K) + ',' + (cy + ry) + ' ' + (cx - rx) + ',' + (cy + ry * K) + ' ' + (cx - rx) + ',' + cy + 'Z';
  }

  // ---- วิเคราะห์โครงสร้างครั้งเดียว แล้วใช้ซ้ำทุก instance ----
  var MODEL = null;
  function analyse() {
    if (MODEL) return MODEL;
    var probe = document.createElementNS(NS, 'svg');
    probe.setAttribute('viewBox', '0 0 624 624');
    probe.style.cssText = 'position:absolute;left:-9999px;top:0;width:624px;height:624px';
    document.body.appendChild(probe);
    var els = SUBS.map(function (d) {
      var p = document.createElementNS(NS, 'path'); p.setAttribute('d', d); probe.appendChild(p); return p;
    });
    var box = els.map(function (p) { return p.getBBox(); });
    var area = box.map(function (b) { return b.width * b.height; });
    function innerPt(i) {
      var b = box[i], q;
      for (var k = 0; k < 60; k++) {
        q = probe.createSVGPoint();
        q.x = b.x + b.width * (0.5 + 0.38 * Math.sin(k * 1.7));
        q.y = b.y + b.height * (0.5 + 0.38 * Math.cos(k * 2.3));
        if (els[i].isPointInFill(q)) return q;
      }
      q = probe.createSVGPoint(); q.x = b.x + b.width / 2; q.y = b.y + b.height / 2; return q;
    }
    var parent = SUBS.map(function () { return null; });
    for (var i = 0; i < SUBS.length; i++) {
      var q = innerPt(i);
      for (var j = 0; j < SUBS.length; j++) {
        if (i !== j && area[j] > area[i] && els[j].isPointInFill(q))
          if (parent[i] === null || area[j] < area[parent[i]]) parent[i] = j;
      }
    }
    probe.remove();

    var shapes = [];
    SUBS.forEach(function (d, i) { if (parent[i] === null) shapes.push({ root: i, holes: [] }); });
    SUBS.forEach(function (d, i) {
      if (parent[i] !== null) {
        var s = shapes.filter(function (s) { return s.root === parent[i]; })[0];
        if (s) s.holes.push(i); else shapes.push({ root: i, holes: [] });
      }
    });
    shapes.forEach(function (s) {
      s.bbox = box[s.root];
      s.d = [s.root].concat(s.holes).map(function (i) { return SUBS[i]; }).join(' ');
    });

    var head = shapes.slice().sort(function (a, b) { return a.bbox.x - b.bbox.x; })[0];
    var tail = shapes.reduce(function (m, s) { return s.bbox.x > m.bbox.x ? s : m; }, shapes[0]);
    var hb = head.bbox, TOL = 2;   // ขาหน้าล้นกรอบหัว 0.083px — ต้องเผื่อ
    function inHead(s) {
      return s !== head && s.bbox.x >= hb.x - TOL && s.bbox.y >= hb.y - TOL &&
        s.bbox.x + s.bbox.width <= hb.x + hb.width + TOL &&
        s.bbox.y + s.bbox.height <= hb.y + hb.height + TOL;
    }
    MODEL = {
      head: head, tail: tail,
      headExtra: shapes.filter(inHead),
      body: shapes.filter(function (s) { return s !== head && s !== tail && !inHead(s); })
    };
    return MODEL;
  }

  function mount(host, opts) {
    opts = opts || {};
    var coat = opts.coat || '#f2efde';
    var M = analyse();

    var svg = document.createElementNS(NS, 'svg');
    svg.setAttribute('viewBox', '0 0 624 624');
    svg.setAttribute('preserveAspectRatio', 'xMidYMid meet');
    svg.style.cssText = 'width:100%;height:100%;display:block;overflow:visible';
    host.appendChild(svg);

    function mk(d) {
      var p = document.createElementNS(NS, 'path');
      p.setAttribute('d', d); p.setAttribute('fill', coat);
      p.setAttribute('fill-rule', 'evenodd'); return p;
    }
    function grp(id) { var g = document.createElementNS(NS, 'g'); g.setAttribute('data-id', id); return g; }

    var gBody = grp('body');
    M.body.forEach(function (s) { gBody.appendChild(mk(s.d)); });
    var gHead = grp('head');
    var headPath = mk(M.head.d); gHead.appendChild(headPath);
    M.headExtra.forEach(function (s) { gHead.appendChild(mk(s.d)); });   // ขาหน้า
    var pupilL = mk(''), pupilR = mk('');
    gHead.appendChild(pupilL); gHead.appendChild(pupilR);
    var gTail = grp('tail'); gTail.appendChild(mk(M.tail.d));
    svg.appendChild(gBody); svg.appendChild(gHead); svg.appendChild(gTail);

    // ---- spring ----
    function sp(k, c) { return { p: 0, v: 0, t: 0, k: k, c: c }; }
    function step(s, dt) { var a = -s.k * (s.p - s.t) - s.c * s.v; s.v += a * dt; s.p += s.v * dt; }
    var tail = sp(90, 11), headR = sp(120, 14), headY = sp(150, 15);
    var open = sp(190, 13), gazeX = sp(150, 16), gazeY = sp(150, 16);
    var sleepAt = 0, held = false, raf = 0, alive = true;
    var openMs = opts.openMs || 1800;

    function frame(now) {
      if (!alive) return;
      var dt = 1 / 60;
      [tail, headR, headY, open, gazeX, gazeY].forEach(function (s) { step(s, dt); });
      if (sleepAt && now > sleepAt) { open.t = 0; sleepAt = 0; }

      gTail.setAttribute('transform', 'rotate(' + tail.p.toFixed(2) + ' ' + TAIL_PIVOT.x + ' ' + TAIL_PIVOT.y + ')');
      gHead.setAttribute('transform', 'rotate(' + headR.p.toFixed(2) + ' ' + HEAD_PIVOT.x + ' ' + HEAD_PIVOT.y +
        ') translate(0 ' + headY.p.toFixed(2) + ')');

      var o = Math.max(0, Math.min(1.15, open.p));
      if (o < 0.02) {
        headPath.setAttribute('d', M.head.d);       // หลับ = โลโก้ต้นฉบับเป๊ะ
        pupilL.setAttribute('d', ''); pupilR.setAttribute('d', '');
      } else {
        var ry = EYE.ry * o, rx = EYE.rx_ * Math.min(1, 0.35 + o * 0.65);
        headPath.setAttribute('d', M.head.d + ' ' +
          ellipse(EYE.lx, EYE.y, rx, ry) + ' ' + ellipse(EYE.rx, EYE.y, rx, ry));
        var lim = function (r, pr) { return Math.max(0, r - pr - 1.2); };
        var dx = gazeX.p * lim(rx, EYE.prx), dy = gazeY.p * lim(ry, EYE.pry);
        var pr = Math.min(1, o), sq = Math.min(1, ry / EYE.ry);
        pupilL.setAttribute('d', ellipse(EYE.lx + dx, EYE.y + dy, EYE.prx * pr, EYE.pry * pr * sq));
        pupilR.setAttribute('d', ellipse(EYE.rx + dx, EYE.y + dy, EYE.prx * pr, EYE.pry * pr * sq));
      }
      raf = requestAnimationFrame(frame);
    }
    raf = requestAnimationFrame(frame);

    // ---- อินพุต: ตามเมาส์ทั้งหน้าจอ (โลโก้เล็กเกินกว่าจะรอให้เมาส์มาทับ) ----
    function onMove(e) {
      var r = svg.getBoundingClientRect();
      if (!r.width) return;
      var cx = r.left + r.width / 2, cy = r.top + r.height / 2;
      var reach = Math.max(260, r.width * 4);
      var nx = Math.max(-1, Math.min(1, (e.clientX - cx) / reach));
      var ny = Math.max(-1, Math.min(1, (e.clientY - cy) / reach));
      headR.t = nx * 9; headY.t = ny * 12; tail.t = nx * 7;
      gazeX.t = Math.max(-1, Math.min(1, nx * 2.2));
      gazeY.t = Math.max(-1, Math.min(1, ny * 2.2));
    }
    addEventListener('mousemove', onMove, { passive: true });

    var api = {
      el: svg,
      wake: function () {
        tail.v -= 260; headY.v -= 90; open.t = 1; open.v += 3.5;
        sleepAt = held ? 0 : performance.now() + openMs;
      },
      sleep: function () { open.t = 0; sleepAt = 0; held = false; },
      hover: function (on) { if (!on) { headR.t = 0; headY.t = 0; tail.t = 0; } },
      coat: function (c) {
        coat = c;
        var ps = svg.querySelectorAll('path');
        for (var i = 0; i < ps.length; i++) ps[i].setAttribute('fill', c);
      },
      destroy: function () { alive = false; cancelAnimationFrame(raf); removeEventListener('mousemove', onMove); svg.remove(); }
    };

    // ตาหลับตลอด ลืมเฉพาะตอนคลิก
    var hit = opts.hitArea || host;
    hit.addEventListener('pointerdown', function () { held = true; api.wake(); });
    addEventListener('pointerup', function () { if (held) { held = false; sleepAt = performance.now() + openMs; } });
    addEventListener('pointercancel', function () { if (held) { held = false; sleepAt = performance.now() + openMs; } });

    return api;
  }

  glob.PlanCRig = { mount: mount, EYE: EYE, HEAD_PIVOT: HEAD_PIVOT, TAIL_PIVOT: TAIL_PIVOT };
})(window);
`;

const out = BODY.replace('__SUBPATHS__', JSON.stringify(subs));
const dest = path.join(ROOT, 'assets', 'plan-c-rig.js');
fs.writeFileSync(dest, out);
console.log('เขียน', dest, '—', (out.length / 1024).toFixed(1), 'KB (' + subs.length + ' subpaths)');
