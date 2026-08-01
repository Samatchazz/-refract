/* ===========================================================
   Plan C — Living Logo (แมว) แบบโมดูล
   ใช้: PlanCCat.mount(el, { coat, sleep, zzz })  →  คืน API
   โครงสร้างเดียวกับ logo-lab/cat3.html ที่จูนไว้แล้ว
   =========================================================== */
(function (global) {
  const IMG = '/logo-lab/assets/logo-closed.png';
  const W = 2048, Y = -512;

  /* ---------- โซน (พิกัดไฟล์ 2048) ที่จูนไว้แล้ว ---------- */
  const EYE_ZONE = { x: 240, y: 758, w: 350, h: 112 };
  const EYES = [{ cx: 335, cy: 815 }, { cx: 495, cy: 815 }];
  const EYE_R = { rx: 48, ry: 62 };
  const HEAD = { x0: 185, x1: 636, yTop: 470, featBot: 962, pivX: 414, pivY: 930 };
  const HEAD_BOTTOM = HEAD.featBot, BASE_TOP = HEAD.featBot - 40;
  const PIV_VB = { x: HEAD.pivX, y: HEAD.pivY + Y };
  const TAIL_CUT_X = 1086, TAIL_CUT_ANGLE = -4, CUT_REF_Y = 1150;
  const TAIL_ROOT = { x: 1069, y: 966 };
  const _cr = TAIL_CUT_ANGLE * Math.PI / 180;
  const _cos = Math.cos(_cr), _sin = Math.sin(_cr);
  const isTailPixel = (px, py) => (px - TAIL_CUT_X) * _cos + (py - CUT_REF_Y) * _sin >= 0;
  const inHeadX = px => px >= HEAD.x0 && px <= HEAD.x1;

  const DT = 1 / 60;
  const spring = (p, v, t, k, c) => { const a = -k * (p - t) - c * v; v += a * DT; p += v * DT; return [p, v]; };
  const clamp = v => Math.max(-1, Math.min(1, v));
  const cl15 = v => Math.max(-1.15, Math.min(1.15, v));

  /* ---------- masks: สร้างครั้งเดียวแล้วแชร์ทุก instance ---------- */
  let masksPromise = null;
  function buildMasks() {
    if (masksPromise) return masksPromise;
    masksPromise = new Promise((resolve, reject) => {
      const img = new Image();
      img.onerror = () => reject(new Error('logo image failed'));
      img.onload = () => {
        const sc = document.createElement('canvas'); sc.width = sc.height = W;
        const sx = sc.getContext('2d', { willReadFrequently: true });
        sx.drawImage(img, 0, 0, W, W);
        sx.fillStyle = '#000';
        sx.fillRect(EYE_ZONE.x, EYE_ZONE.y, EYE_ZONE.w, EYE_ZONE.h);
        const sd = sx.getImageData(0, 0, W, W).data;

        const mk = () => { const c = document.createElement('canvas'); c.width = c.height = W;
          return { c, d: c.getContext('2d').createImageData(W, W) }; };
        const base = mk(), head = mk(), tail = mk();

        for (let py = 0; py < W; py++) {
          for (let px = 0; px < W; px++) {
            const i = (py * W + px) * 4;
            const a = 255 - (sd[i] + sd[i + 1] + sd[i + 2]) / 3;
            if (a < 8) continue;
            let ba = 0, ha = 0, ta = 0;
            if (isTailPixel(px, py)) ta = a;
            else {
              const hx = inHeadX(px);
              ha = (hx && py >= HEAD.yTop && py <= HEAD_BOTTOM) ? a : 0;
              ba = (hx && py < BASE_TOP) ? 0 : a;
            }
            const set = (arr, al) => { if (al > 0) { arr[i] = arr[i + 1] = arr[i + 2] = 255; arr[i + 3] = al; } };
            set(base.d.data, ba); set(head.d.data, ha); set(tail.d.data, ta);
          }
        }
        base.c.getContext('2d').putImageData(base.d, 0, 0);
        head.c.getContext('2d').putImageData(head.d, 0, 0);
        tail.c.getContext('2d').putImageData(tail.d, 0, 0);
        resolve({ base: base.c, head: head.c, tail: tail.c });
      };
      img.src = IMG;
    });
    return masksPromise;
  }

  /* ---------- grain tile (แชร์) ---------- */
  const noiseTile = (() => {
    const n = document.createElement('canvas'); n.width = n.height = 256;
    const nx = n.getContext('2d'); const id = nx.createImageData(256, 256);
    for (let i = 0; i < id.data.length; i += 4) {
      const v = 36 + Math.random() * 184;
      id.data[i] = id.data[i + 1] = id.data[i + 2] = v; id.data[i + 3] = 255;
    }
    nx.putImageData(id, 0, 0); return n;
  })();

  const tintCache = new Map();
  function tint(mask, coat, key) {
    const ck = key + '|' + coat;
    if (tintCache.has(ck)) return tintCache.get(ck);
    const c = document.createElement('canvas'); c.width = c.height = W;
    const x = c.getContext('2d');
    x.drawImage(mask, 0, 0);
    x.globalCompositeOperation = 'source-in';
    x.fillStyle = coat; x.fillRect(0, 0, W, W);
    x.globalCompositeOperation = 'overlay'; x.globalAlpha = 0.75;
    x.fillStyle = x.createPattern(noiseTile, 'repeat'); x.fillRect(0, 0, W, W);
    x.globalAlpha = 1;
    x.globalCompositeOperation = 'destination-in'; x.drawImage(mask, 0, 0);
    x.globalCompositeOperation = 'source-over';
    const url = c.toDataURL();
    tintCache.set(ck, url);
    return url;
  }

  const NS = 'http://www.w3.org/2000/svg';
  const el = (n, attrs) => { const e = document.createElementNS(NS, n);
    for (const k in attrs) e.setAttribute(k, attrs[k]); return e; };

  function mount(host, opts) {
    opts = Object.assign({ coat: '#f2efde', sleepAfter: 20000, zzz: true, interactive: true }, opts || {});

    const svg = el('svg', { viewBox: '0 0 2048 1024' });
    svg.style.cssText = 'position:absolute;inset:0;width:100%;height:100%;overflow:visible';
    const leanG = el('g', {});
    const catG = el('g', {});
    const baseImg = el('image', { x: 0, y: Y, width: W, height: W });
    const tailG = el('g', {});
    const tailImg = el('image', { x: 0, y: Y, width: W, height: W });
    const headG = el('g', {});
    const headImg = el('image', { x: 0, y: Y, width: W, height: W });
    const eyesG = el('g', {});
    tailG.appendChild(tailImg);
    headG.appendChild(headImg); headG.appendChild(eyesG);
    catG.appendChild(baseImg); catG.appendChild(tailG); catG.appendChild(headG);
    leanG.appendChild(catG); svg.appendChild(leanG);

    const zzzG = el('g', {}); zzzG.style.color = opts.coat;
    if (opts.zzz) {
      [[620, 240, 60], [680, 190, 85], [760, 130, 115]].forEach(([x, y, s], i) => {
        const t = el('text', { x, y, 'font-size': s });
        t.textContent = 'z';
        t.style.cssText = `opacity:0;fill:currentColor;font-family:Georgia,serif;font-weight:bold`;
        t.dataset.i = i; zzzG.appendChild(t);
      });
      svg.appendChild(zzzG);
    }
    host.appendChild(svg);

    // eyes — เก็บ reference ตอนสร้างเลย (อย่า query ทีหลัง เดี๋ยวจับผิดชั้นแล้วตาซ้อนกัน)
    const tracks = [], opens = [], lids = [];
    EYES.forEach(e => {
      const g = el('g', { transform: `translate(${e.cx} ${e.cy + Y})` });   // ← ตำแหน่งตาซ้าย/ขวา
      const open = el('g', {});
      open.style.cssText = 'transform-box:fill-box;transform-origin:50% 50%;transition:transform .12s,opacity .1s';
      const track = el('g', {});                                            // ← ชั้นนี้เท่านั้นที่ขยับตามเมาส์
      track.appendChild(el('ellipse', { rx: EYE_R.rx, ry: EYE_R.ry, fill: '#ffffff' }));
      open.appendChild(track); g.appendChild(open);
      const lid = el('path', { d: `M ${-EYE_R.rx} 6 Q 0 ${EYE_R.ry * 0.65} ${EYE_R.rx} 6`,
        stroke: '#ffffff', 'stroke-width': 12, fill: 'none', 'stroke-linecap': 'round' });
      lid.style.opacity = 0;
      g.appendChild(lid); eyesG.appendChild(g);
      tracks.push(track); opens.push(open); lids.push(lid);
    });

    /* ---------- state ---------- */
    let tx = 0, ty = 0, gazeX = 0, gazeY = 0;
    let ex = 0, evx = 0, ey = 0, evy = 0, hx = 0, hy = 0;
    let tailA = 0, tailV = 0;
    let hoverHeld = false, sleeping = false, alert = false;
    let coat = opts.coat, raf = null, alive = true;

    function applyCoat(c) {
      coat = c;
      buildMasks().then(m => {
        baseImg.setAttributeNS(null, 'href', tint(m.base, c, 'base'));
        headImg.setAttributeNS(null, 'href', tint(m.head, c, 'head'));
        tailImg.setAttributeNS(null, 'href', tint(m.tail, c, 'tail'));
      });
      zzzG.style.color = c;
    }
    applyCoat(coat);

    const setAlert = on => { alert = on;
      opens.forEach(o => o.style.transform = on ? 'scale(1.15)' : 'scale(1)'); };
    const setEyesClosed = closed => {
      opens.forEach(o => o.style.opacity = closed ? 0 : 1);
      lids.forEach(l => l.style.opacity = closed ? 1 : 0);
    };

    /* ---------- pointer ---------- */
    let lastX = null, lastY = null, lastT = 0, startleT = null, gazeT = null, idleT = null;
    function onMove(e) {
      tx = (e.clientX / innerWidth - .5) * 2;
      ty = (e.clientY / innerHeight - .5) * 2;
      const now = performance.now();
      if (lastX !== null) {
        const sp = Math.hypot(e.clientX - lastX, e.clientY - lastY) / Math.max(1, now - lastT);
        if (sp > 2.2) startle();
      }
      lastX = e.clientX; lastY = e.clientY; lastT = now;
      gazeX = gazeY = 0; wake(); scheduleGaze();
    }
    if (opts.interactive) addEventListener('mousemove', onMove, { passive: true });

    function startle() { if (sleeping) return; setAlert(true);
      clearTimeout(startleT); startleT = setTimeout(() => { if (!hoverHeld) setAlert(false); }, 280); }
    function scheduleGaze() { clearTimeout(gazeT); gazeT = setTimeout(doGaze, 3200 + Math.random() * 3000); }
    function doGaze() { if (sleeping) return;
      gazeX = (Math.random() * 2 - 1) * .75; gazeY = (Math.random() * 2 - 1) * .5;
      setTimeout(() => { gazeX = gazeY = 0; }, 1000 + Math.random() * 500); scheduleGaze(); }
    function wake() { if (sleeping) { sleeping = false; setEyesClosed(false); zzzOff(); }
      clearTimeout(idleT); idleT = setTimeout(() => api.sleep(true), opts.sleepAfter); }
    function zzzOn() { if (!opts.zzz) return;
      [...zzzG.children].forEach((t, i) => { t.style.animation = `planc-z 3s ${i}s linear infinite`; }); }
    function zzzOff() { [...zzzG.children].forEach(t => t.style.animation = ''); }

    /* blink */
    let blinkT = null;
    function blink(dbl) {
      if (!sleeping) { setEyesClosed(true); setTimeout(() => { if (!sleeping) setEyesClosed(false); }, 140);
        if (dbl) setTimeout(() => { if (!sleeping) { setEyesClosed(true);
          setTimeout(() => { if (!sleeping) setEyesClosed(false); }, 120); } }, 250); }
      scheduleBlink();
    }
    function scheduleBlink() { blinkT = setTimeout(() => blink(Math.random() < .25), 2600 + Math.random() * 3600); }
    scheduleBlink();

    /* ---------- loop ---------- */
    (function loop() {
      if (!alive) return;
      const tgX = clamp(tx + gazeX), tgY = clamp(ty + gazeY);
      [ex, evx] = spring(ex, evx, tgX, 170, 16);
      [ey, evy] = spring(ey, evy, tgY, 170, 16);
      const dx = cl15(ex) * 54, dy = cl15(ey) * 30;
      const sx2 = 1 + Math.abs(cl15(ex)) * .08, sy2 = 1 + Math.abs(cl15(ey)) * .05;
      tracks.forEach(p => p.setAttribute('transform', `translate(${dx} ${dy}) scale(${sx2} ${sy2})`));

      hx += (tgX - hx) * .06; hy += (tgY - hy) * .06;
      leanG.setAttribute('transform', `translate(${clamp(hx) * 6} ${clamp(hy) * 3})`);
      headG.setAttribute('transform', `rotate(${clamp(hx) * 1.2} ${PIV_VB.x} ${PIV_VB.y})`);

      const swayIdle = sleeping ? 0 : Math.sin(performance.now() / 900) * 4;
      [tailA, tailV] = spring(tailA, tailV, alert ? -6 : swayIdle, 90, 11);
      tailG.setAttribute('transform', `rotate(${tailA} ${TAIL_ROOT.x} ${TAIL_ROOT.y + Y})`);

      raf = requestAnimationFrame(loop);
    })();

    const api = {
      hover(on) { hoverHeld = on; setAlert(on); },
      click() { tailV -= 230; },
      variant(c) { applyCoat(c); },
      sleep(on) { sleeping = on === undefined ? !sleeping : on;
        setEyesClosed(sleeping); sleeping ? zzzOn() : zzzOff(); },
      destroy() { alive = false; cancelAnimationFrame(raf);
        removeEventListener('mousemove', onMove);
        [startleT, gazeT, idleT, blinkT].forEach(clearTimeout);
        svg.remove(); },
      el: svg,
    };
    wake();
    return api;
  }

  /* keyframes สำหรับ z z z */
  if (!document.getElementById('planc-cat-style')) {
    const s = document.createElement('style'); s.id = 'planc-cat-style';
    s.textContent = `@keyframes planc-z{0%{opacity:0;transform:translate(0,0)}20%{opacity:.85}` +
      `80%{opacity:0;transform:translate(50px,-110px)}100%{opacity:0}}`;
    document.head.appendChild(s);
  }

  global.PlanCCat = { mount, buildMasks };
})(window);
