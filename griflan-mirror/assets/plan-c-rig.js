/* Plan C — โลโก้แมวเวกเตอร์ rig ได้
   สร้างจาก _tools/build-rig.cjs · อย่าแก้ไฟล์นี้ตรงๆ
   ที่มา: วิดีโอโลโก้ → ffmpeg แตกเฟรม → potrace → แยกชิ้นด้วย isPointInFill
   ใช้: PlanCRig.mount(el, {coat:'#f2efde', openMs:1800})  */
(function (glob) {
  'use strict';
  var NS = 'http://www.w3.org/2000/svg';
  var SUBS = ["M 72.500 166.954 C 63.276 170.769, 55.719 195.651, 51.833 235 C 50.113 252.423, 50.104 305.426, 51.819 321.500 C 53.526 337.504, 57.476 360.329, 60.536 371.880 C 66.619 394.837, 76.436 406.312, 90 406.320 C 96.549 406.324, 100.712 404.385, 104.796 399.431 C 109.442 393.795, 111.002 386.638, 112.070 366.070 C 112.596 355.934, 113.209 347.458, 113.432 347.235 C 113.655 347.011, 119.387 346.455, 126.169 345.999 C 139.270 345.117, 144.170 344.236, 153.022 341.174 C 182.709 330.906, 203.175 306.841, 208.611 275.808 C 210.579 264.573, 210.028 246.086, 207.031 222.744 C 201.790 181.921, 194.117 164.387, 182.453 166.575 C 178.135 167.385, 171.900 171.878, 162.979 180.609 L 156.459 186.991 148.641 185.496 C 138.641 183.582, 121.374 183.579, 111.392 185.489 L 103.608 186.979 94.949 178.505 C 86.998 170.725, 79.761 165.981, 76 166.085 C 75.175 166.108, 73.600 166.499, 72.500 166.954 ","M 467.955 212.099 C 451.549 214.221, 432.145 222.330, 420.410 231.967 C 401.822 247.232, 390.518 273.745, 393.890 294.166 C 395.283 302.597, 397.553 307.265, 402.665 312.207 C 407.445 316.828, 413.442 319, 421.420 319 C 426.599 319, 428.459 318.479, 433.016 315.750 C 440.836 311.067, 444.008 304.569, 444.944 291.314 C 446.023 276.049, 450.736 268.711, 463.523 262.391 C 470.421 258.982, 471.583 258.724, 480.219 258.691 C 495.315 258.633, 504.684 262.631, 514.802 273.448 C 534.673 294.690, 532.815 330.697, 510.826 350.466 C 500.803 359.478, 487.629 364.010, 471.540 363.983 C 459.734 363.962, 450.815 362.259, 441.067 358.163 C 437.180 356.530, 434 355.263, 434 355.347 C 434 355.431, 434.675 359.027, 435.500 363.338 C 437.392 373.226, 437.422 385.948, 435.571 393.032 C 434.784 396.039, 434.447 398.810, 434.821 399.188 C 435.194 399.567, 439.550 401.122, 444.500 402.643 C 452.962 405.244, 454.637 405.412, 472.500 405.447 C 490.157 405.481, 492.186 405.293, 501.201 402.779 C 530.283 394.669, 551.456 377.428, 564.008 351.638 C 575.721 327.569, 577.055 301.086, 567.945 273.500 C 556.649 239.295, 527.877 216.107, 491.728 212.076 C 480.936 210.873, 477.414 210.876, 467.955 212.099 ","M 223.408 257.863 L 219.316 259.761 218.681 268.630 C 217.957 278.733, 215.070 290.730, 211.251 299.500 C 209.022 304.619, 201.718 316.565, 196.576 323.500 C 193.069 328.231, 189.492 359.952, 190.918 373.684 C 192.230 386.319, 195.106 393.373, 201.507 399.654 C 205.842 403.907, 207.722 405.008, 212.267 405.952 C 223.252 408.232, 232 403.012, 232 394.176 C 232 392.549, 230.398 389.314, 228.035 386.170 C 223.444 380.059, 222.452 376.359, 222.627 366 C 222.781 356.875, 225.112 346.918, 232.440 324.086 C 239.635 301.670, 242.232 289.191, 242.382 276.325 C 242.484 267.497, 242.227 265.785, 240.438 263.387 C 235.479 256.741, 229.799 254.898, 223.408 257.863 ","M 264.138 259.020 C 258.912 260.115, 253.595 263.949, 251.390 268.212 C 248.983 272.868, 249.879 282.173, 253.063 285.581 C 257.157 289.963, 260.264 291, 269.301 291 C 273.921 291, 279.231 291.511, 281.101 292.136 C 287.294 294.206, 292.416 300.314, 293.146 306.500 L 293.500 309.500 283.936 310.125 C 266.726 311.249, 254.650 316.290, 245.507 326.165 C 235.660 336.802, 231.354 349.628, 232.230 365.718 C 232.920 378.380, 235.656 384.932, 243.488 392.668 C 248.720 397.837, 250.824 399.174, 256.471 400.918 C 264.559 403.417, 268.856 403.523, 276.068 401.405 C 282.321 399.568, 286.963 396.922, 292.169 392.224 C 295.832 388.919, 295.839 388.917, 296.531 391.207 C 297.517 394.468, 301.949 399.011, 305.718 400.623 C 312.626 403.579, 320.478 401.260, 324.750 395.001 C 327.595 390.832, 327.620 386.327, 324.857 375.724 C 322.812 367.875, 322.753 366.360, 323.580 342.500 C 324.666 311.158, 324.422 300.201, 322.469 292.548 C 319.436 280.665, 311.309 270.709, 300 265.025 C 289.891 259.945, 273.127 257.138, 264.138 259.020 ","M 124 267.229 C 120.303 269.183, 120.278 272.407, 123.940 275.114 C 127.540 277.776, 127.847 280.653, 124.927 284.365 C 121.914 288.196, 116.820 288.028, 113.842 284 C 111.273 280.526, 109 280.087, 109 283.066 C 109 286.211, 110.749 288.819, 113.980 290.490 C 118.187 292.665, 122.198 292.355, 126.360 289.530 L 130 287.060 133.640 289.530 C 137.549 292.183, 141.808 292.677, 145.316 290.883 C 148.162 289.427, 150.950 285.945, 150.978 283.809 C 151.019 280.667, 148.790 280.694, 146.307 283.867 C 142.144 289.186, 136.608 288.037, 133.018 281.109 C 131.889 278.931, 132.101 278.423, 135.389 275.410 C 139.251 271.872, 139.836 269.939, 137.606 268.088 C 135.405 266.262, 126.854 265.722, 124 267.229 ","M 345.014 294.064 C 340.773 295.013, 336.499 299.570, 335.043 304.697 C 333.284 310.892, 332.661 345.856, 333.898 369 C 335.160 392.616, 336.320 397.085, 342.323 401.448 C 346.306 404.343, 355.748 404.320, 359.677 401.406 C 365.593 397.018, 366.722 393.285, 367.170 376.644 C 367.528 363.336, 367.860 360.918, 369.903 356.698 C 372.702 350.919, 376.010 348.545, 381.264 348.545 C 384.568 348.545, 385.790 349.193, 389.019 352.655 C 394.096 358.098, 395.955 364.644, 396.697 379.699 C 397.379 393.518, 398.947 397.684, 405.015 401.810 C 407.833 403.725, 409.424 404.092, 413.324 403.729 C 419.096 403.191, 422.639 400.766, 425.431 395.443 C 428.507 389.581, 428.389 368.755, 425.217 357.701 C 420.327 340.659, 411.444 328.862, 398.701 322.487 C 392.438 319.353, 390.909 319.002, 383.616 319.022 C 377.703 319.038, 374.317 319.581, 371.141 321.022 C 368.743 322.110, 366.445 323, 366.034 323 C 365.622 323, 365.043 319.458, 364.746 315.128 C 363.648 299.106, 356.514 291.491, 345.014 294.064 ","M 179 338.647 C 172.900 343.089, 157.792 349.924, 149.432 352.024 C 144.995 353.138, 137.120 354.376, 131.932 354.775 L 122.500 355.500 122.202 366 C 121.523 389.881, 127.374 403.218, 139.671 405.824 C 159.442 410.014, 173.940 391.386, 180.997 352.730 C 184.547 333.287, 184.716 334.484, 179 338.647 ","M 274.176 338.600 C 265.173 343.086, 259.978 353.475, 262.069 362.810 C 263.284 368.229, 265.313 371.366, 268.561 372.846 C 276.700 376.554, 285.612 371.457, 290.799 360.129 C 294.016 353.101, 294.399 339.496, 291.440 337.333 C 288.360 335.080, 280.009 335.693, 274.176 338.600"];

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
