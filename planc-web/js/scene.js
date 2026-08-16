/* ============================================================
   scene.js — the level: layout, parallax depths, ground, jumps
   ------------------------------------------------------------
   LAYOUT BY PROGRESS, NOT PIXELS.
   Every beat and prop carries data-p = the progress (0..1) at
   which the cat should meet it. Absolute px positions break on
   narrow screens: at 390px the old level was longer than the
   scroll could reach and the flag was never seen. Deriving left
   from `travel` fixes that at any viewport width.
   ============================================================ */
window.PLANC = window.PLANC || {};

PLANC.Scene = (function(){

  const TRAVEL_MIN = 10400;  // px of world movement, floor
  const SCROLL_LEN = 10400;  // px of page scroll mapped to 0..1 — doubled:
                             // ~12 screens of swiping instead of ~6, so every
                             // action breathes at half the old speed
  const HOLD       = 0.105;  // default: how long a text beat stands still

  /* World 1-1 layout (HANDOVER §5): three pits now — after the pipes,
     inside the dense block zone, and between the two pyramids */
  const PITS = [[0.395, 0.418], [0.600, 0.622], [0.685, 0.705]];

  /* stepped elevation, all in progress space — pure function of cur,
     so climbing scrubs backwards perfectly */
  const PYR_B = 52, STAIR_B = 44;   // block px per structure
  const PYR   = {up:[0.655, 0.675], down:[0.705, 0.725], n:4};
  const STAIR = {up:[0.920, 0.954], drop:[0.955, 0.961], n:8};

  function stepRamp(cur, a, b, n){   // 0..n in n steps: dwell, then quick rise
    if (cur <= a) return 0;
    if (cur >= b) return n;
    const k = (cur - a) / (b - a) * n;
    const i = Math.floor(k), f = k - i;
    return Math.min(n, i + Math.max(0, (f - 0.55) / 0.45));
  }
  function elev(cur){   // px above the ground line
    let e = 0;
    e += stepRamp(cur, PYR.up[0],   PYR.up[1],   PYR.n) * PYR_B;
    e -= stepRamp(cur, PYR.down[0], PYR.down[1], PYR.n) * PYR_B;
    e += stepRamp(cur, STAIR.up[0], STAIR.up[1], STAIR.n) * STAIR_B;
    if (cur > STAIR.drop[0]){
      const k = Math.min(1, (cur - STAIR.drop[0]) / (STAIR.drop[1] - STAIR.drop[0]));
      e -= STAIR.n * STAIR_B * k;
    }
    return Math.max(0, e);
  }

  const world  = document.getElementById('world');
  const spacer = document.getElementById('spacer');
  const layers = [...document.querySelectorAll('.layer')].map(el => ({
    el, f: parseFloat(el.dataset.f)
  }));

  let travel = 0, catX = 0;
  let beats = [], jumps = [], grounds = [];

  /* --- sprite plumbing --------------------------------------
     sprites.js injects assets-svg/sprites.svg (49 <symbol>) at the
     top of <body> with every fill swapped to currentColor, so the
     dark level inverts artwork for free. Placement is DETERMINISTIC
     (index math, never Math.random) — scroll back, same world. */
  const NS = 'http://www.w3.org/2000/svg';
  const pick = (arr, i) => arr[(i * 31) % arr.length];

  function vb(id){
    const s = document.getElementById(id);
    const p = s.getAttribute('viewBox').split(/\s+/).map(Number);
    return { w: p[2], h: p[3] };
  }
  function sprite(id, cls){
    const d = vb(id);
    const el = document.createElementNS(NS, 'svg');
    el.setAttribute('viewBox', '0 0 ' + d.w + ' ' + d.h);
    if (cls) el.setAttribute('class', cls);
    const u = document.createElementNS(NS, 'use');
    u.setAttribute('href', '#' + id);
    el.appendChild(u);
    el.__ar = d.w / d.h;          // width/height, for px sizing
    return el;
  }

  /* ground <pattern>: 4 tiles x 2 rows, blocks overlap 1px (64 art
     in 63 cells) so the hand-drawn edges never show a seam line */
  function groundPattern(){
    const B = 64, S = 63;
    const svg = document.createElementNS(NS, 'svg');
    svg.setAttribute('width', 0); svg.setAttribute('height', 0);
    svg.style.position = 'absolute';
    const defs = document.createElementNS(NS, 'defs');
    const pat = document.createElementNS(NS, 'pattern');
    pat.id = 'groundPat';
    pat.setAttribute('patternUnits', 'userSpaceOnUse');
    pat.setAttribute('width', S * 4);
    pat.setAttribute('height', S * 2);
    const ids = ['ground1','ground2','ground3','ground4'];
    for (let r = 0; r < 2; r++) for (let c = 0; c < 4; c++){
      const u = document.createElementNS(NS, 'use');
      u.setAttribute('href', '#' + ids[(c + r * 2) % 4]);   // row 2 starts at tile 3 — offset bond
      u.setAttribute('x', c * S - (r ? S / 2 : 0));
      u.setAttribute('y', r * S);
      u.setAttribute('width', B); u.setAttribute('height', B);
      pat.appendChild(u);
      if (r){ // the shifted row leaks half a block off the left — wrap a copy round the right
        const u2 = u.cloneNode();
        u2.setAttribute('x', c * S - S / 2 + S * 4);
        pat.appendChild(u2);
      }
    }
    defs.appendChild(pat); svg.appendChild(defs);
    document.body.appendChild(svg);
  }
  groundPattern();

  /* world decorations: [progress, sprite ids to pick from, height in
     dvh, extra px offset]. Bushes skirt the pit + the beat positions. */
  const BUSH_P    = [0.045, 0.10, 0.175, 0.29, 0.36, 0.455, 0.53, 0.63, 0.77, 0.83, 0.895];
  const BUSH_IDS  = ['bush1','bush2','bush3','bush4'];
  const HILL_IDS  = ['hill-s1','hill-m1','hill-s2','hill-m2'];
  const SKY_IDS   = ['skyline1','skyline2','skyline3'];
  const CLOUD_IDS = ['cloud-s1','cloud-l1','cloud-s2','cloud-l2','cloud-s3','cloud-l3'];

  /* --- Thai-safe per-word splitting -------------------------
     Naive letter-splitting shatters Thai (no spaces, combining
     marks). Intl.Segmenter with granularity 'word' keeps clusters
     whole. Falls back to whole-line animation where unsupported. */
  function splitWords(){
    if (typeof Intl === 'undefined' || !Intl.Segmenter) return;
    let seg;
    try { seg = new Intl.Segmenter('th', {granularity:'word'}); }
    catch(e){ return; }

    document.querySelectorAll('.beat h2, .beat .tag, .beat .kicker').forEach(el=>{
      const out = document.createDocumentFragment();
      [...el.childNodes].forEach(node=>{
        if (node.nodeType !== 3){ out.appendChild(node.cloneNode(true)); return; }
        let i = 0;
        for (const s of seg.segment(node.nodeValue)){
          // a whitespace-only inline-block collapses to nothing and the
          // words weld together ("THEJOURNEY") — keep spaces as text
          if (!/\S/.test(s.segment)){ out.appendChild(document.createTextNode(s.segment)); continue; }
          const w = document.createElement('span');
          w.className = 'w';
          w.textContent = s.segment;
          w.style.transitionDelay = (Math.min(i, 14) * 34) + 'ms';
          out.appendChild(w);
          i++;
        }
      });
      el.replaceChildren(out);
    });
  }

  function layout(){
    catX   = innerWidth * 0.24;
    travel = Math.max(TRAVEL_MIN, innerWidth * 4.2);

    world.style.width = (travel + innerWidth) + 'px';
    spacer.style.height = (SCROLL_LEN + innerHeight) + 'px';

    // every parallax layer must be wide enough for its own scroll rate
    layers.forEach(L => {
      L.el.style.width = (travel * L.f + innerWidth * 2) + 'px';
    });

    beats = [...document.querySelectorAll('.beat[data-p]')];
    beats.forEach(el=>{
      el.style.left = (el.dataset.p * travel + innerWidth * 0.08) + 'px';
      el.style.willChange = 'transform';
    });
    document.querySelectorAll('.prop[data-p]').forEach(el=>{
      el.style.left = (el.dataset.p * travel + catX) + 'px';
    });

    // ground, split around every pit — filled with the hand-drawn tile
    // pattern; the last block's own edge plays the pit edge
    grounds.forEach(g => g.remove());
    grounds = [];
    const cuts = [0];
    PITS.forEach(([a,b]) => cuts.push(a*travel + catX, b*travel + catX));
    cuts.push(travel + innerWidth);
    for (let s = 0; s < cuts.length; s += 2){
      const g = document.createElement('div');
      g.className = 'ground';
      g.style.left = cuts[s] + 'px';
      g.style.width = (cuts[s+1] - cuts[s]) + 'px';
      g.innerHTML = '<svg width="100%" height="100%" preserveAspectRatio="none">' +
                    '<rect width="100%" height="100%" fill="url(#groundPat)"/></svg>';
      world.appendChild(g);
      grounds.push(g);
    }

    decorate();

    const H = Math.min(innerHeight * 0.22, 190);
    jumps = [
      {p:0.2255, w:.013, h:H*0.75},   // pipe 1
      {p:0.2620, w:.013, h:H*0.90},   // pipe 2
      {p:0.3010, w:.014, h:H*1.10},   // pipe 3
      {p:0.3410, w:.014, h:H*1.25},   // pipe 4
      {p:0.4065, w:.019, h:H*1.15},   // over pit 1
      {p:0.4700, w:.013, h:H*0.85},   // stomp DEADLINE
      {p:0.5750, w:.012, h:H*1.05},   // hit the ? block
      {p:0.6110, w:.016, h:H*1.10},   // over pit 2
      {p:0.6950, w:.016, h:H*0.52}    // pyramid gap (already 4 blocks up)
    ];
  }

  /* --- decorations — rebuilt with every layout() ------------ */
  let dWorld = null, coinEls = [];
  function decorate(){
    const H = innerHeight;

    // far hills, sky layer (0.12x)
    const dHills = document.getElementById('dHills');
    dHills.replaceChildren();
    const skyW = travel * 0.12 + innerWidth * 2;
    let x = innerWidth * 0.08, i = 0;
    while (x < skyW){
      const s = sprite(pick(HILL_IDS, i), 'hill');
      const h = H * (0.13 + ((i * 7) % 3) * 0.02);
      s.style.cssText = 'position:absolute;bottom:0;left:' + x.toFixed(0) + 'px;height:' + h.toFixed(0) + 'px;width:' + (h * s.__ar).toFixed(0) + 'px';
      dHills.appendChild(s);
      x += h * s.__ar + 260 + (i * 53) % 240; i++;
    }

    // bangkok skyline strip, mid layer (0.35x) — butt-joined, tiny overlap
    const dSky = document.getElementById('dSkyline');
    dSky.replaceChildren();
    const midW = travel * 0.35 + innerWidth * 2;
    x = 0; i = 0;
    while (x < midW){
      const s = sprite(pick(SKY_IDS, i), 'sky');
      const h = H * 0.19;
      s.style.cssText = 'position:absolute;bottom:0;left:' + x.toFixed(0) + 'px;height:' + h.toFixed(0) + 'px;width:' + (h * s.__ar).toFixed(0) + 'px';
      dSky.appendChild(s);
      x += h * s.__ar - 2; i++;
    }

    // clouds — viewport-anchored, keep the old drift (the one allowed
    // self-running animation)
    const dClouds = document.getElementById('dClouds');
    dClouds.replaceChildren();
    const spots = [[14, 14, 70], [58, 24, 52], [104, 9, 86], [158, 29, 60]];
    spots.forEach((sp, j) => {
      const s = sprite(pick(CLOUD_IDS, j), 'cloud c' + (j + 1));
      s.style.left = sp[0] + 'vw';
      s.style.top = sp[1] + 'dvh';
      s.style.width = sp[2] * 1.4 + 'px';
      dClouds.appendChild(s);
    });

    // world-layer set dressing: bushes, pit pebbles, castle
    if (dWorld) dWorld.remove();
    dWorld = document.createElement('div');
    dWorld.id = 'dWorld';
    world.prepend(dWorld);   // first child — beats and props draw above

    BUSH_P.forEach((p, j) => {
      const s = sprite(pick(BUSH_IDS, j), 'wd bush');
      const h = H * (0.055 + (j % 3) * 0.012);
      s.style.cssText = 'position:absolute;bottom:var(--ground-h);left:' +
        (p * travel + catX).toFixed(0) + 'px;height:' + h.toFixed(0) + 'px;width:' + (h * s.__ar).toFixed(0) + 'px';
      dWorld.appendChild(s);
    });

    // pebbles hugging every pit lip
    let pj = 0;
    PITS.forEach(pit => {
      [[pit[0], -0.9], [pit[1], -0.1]].forEach(([p, k]) => {
        const s = sprite(pick(['pebbles1','pebbles2','pebbles3'], pj), 'wd pebbles');
        const w = H * 0.075;
        s.style.cssText = 'position:absolute;bottom:var(--ground-h);left:' +
          (p * travel + catX + k * w).toFixed(0) + 'px;width:' + w.toFixed(0) + 'px;height:' + (w / s.__ar).toFixed(0) + 'px';
        dWorld.appendChild(s);
        pj++;
      });
    });

    /* ---- World 1-1 set pieces (HANDOVER §5) ------------------
       Everything below is plain data → sprites; when CONTENT-MAP
       locks the real service count, only these arrays change. */
    const px = p => p * travel + catX;
    const put = (el, x, bottomPx, w, h) => {
      el.style.cssText = 'position:absolute;bottom:calc(var(--ground-h) + ' + bottomPx.toFixed(0) +
        'px);left:' + x.toFixed(0) + 'px;width:' + w.toFixed(0) + 'px;height:' + h.toFixed(0) + 'px';
      dWorld.appendChild(el);
    };
    const BW = Math.min(60, Math.max(44, innerWidth * 0.085));   // one block

    // lesson zone: lone ? → brick,?,brick,?,brick panel → high ?
    const rowY = H * 0.26, highY = H * 0.44;
    put(sprite('qblock2', 'wd'), px(0.112), rowY, BW, BW);
    ['brick1','qblock3','brick2','qblock2','brick3'].forEach((id, i) =>
      put(sprite(id, 'wd'), px(0.150) + i * (BW - 1), rowY, BW, BW));
    put(sprite('qblock3', 'wd'), px(0.150) + 2 * (BW - 1), highY, BW, BW);

    // four pipes, stepping taller — the cat hops each one
    [['pipe-short1', 0.2255, 0.105], ['pipe-short2', 0.2620, 0.135],
     ['pipe-long1',  0.3010, 0.175], ['pipe-long2',  0.3410, 0.205]].forEach(([id, p, hf]) => {
      const s = sprite(id, 'wd'), h = innerHeight * hf;
      put(s, px(p) - h * s.__ar / 2, 0, h * s.__ar, h);
    });

    // coin arc after pit 1 (progress-driven spin happens in render)
    coinEls = [];
    for (let c = 0; c < 6; c++){
      const s = sprite('coin' + (c % 4 + 1), 'wd coinS');
      const cw = BW * 0.95;
      const lift = H * (0.235 + 0.055 * Math.sin(c / 5 * Math.PI));
      put(s, px(0.430) + c * cw * 1.35, lift, cw, cw / 0.88);
      coinEls.push(s);
    }

    // dense block zone: brick rows around the interactive ? block
    ['brick2','brick4','brick1','brick5'].forEach((id, i) =>
      put(sprite(id, 'wd'), px(0.520) + i * (BW - 1), rowY, BW, BW));
    ['brick3','qblock2','brick5'].forEach((id, i) =>
      put(sprite(id, 'wd'), px(0.548) + i * (BW - 1), highY, BW, BW));
    ['brick4','brick1'].forEach((id, i) =>
      put(sprite(id, 'wd'), px(0.590) + i * (BW - 1), rowY, BW, BW));

    // pyramids flanking the third pit, then the closing staircase —
    // stacked ground blocks; geometry mirrors elev() exactly
    const stack = (pStart, n, B, dirUp) => {
      for (let c = 0; c < n; c++){
        const lv = dirUp ? c + 1 : n - c;
        for (let r = 0; r < lv; r++)
          put(sprite(pick(['ground1','ground2','ground3','ground4'], c * 3 + r), 'wd'),
              px(pStart) + c * (B - 1), r * (B - 1), B, B);
      }
    };
    stack(PYR.up[0],   PYR.n,   PYR_B,   true);    // up to the gap
    stack(PYR.down[0], PYR.n,   PYR_B,   false);   // down after it
    stack(STAIR.up[0], STAIR.n, STAIR_B, true);    // the big stairs

    // plateau between pyramid top and the gap — two full-height columns
    for (let c = 0; c < 2; c++)
      for (let r = 0; r < PYR.n; r++)
        put(sprite(pick(['ground1','ground2','ground3','ground4'], c * 5 + r), 'wd'),
            px(PYR.up[1]) + c * (PYR_B - 1), r * (PYR_B - 1), PYR_B, PYR_B);

    // castle closes the level, just past the flag
    const c = sprite('castle', 'wd castle');
    const ch = H * 0.26;
    c.style.cssText = 'position:absolute;bottom:var(--ground-h);left:' +
      (1.0 * travel + catX + innerWidth * 0.30).toFixed(0) + 'px;height:' + ch.toFixed(0) + 'px;width:' + (ch * c.__ar).toFixed(0) + 'px';
    dWorld.appendChild(c);
  }

  /* --- per-frame: slide the depths, hold the text ----------- */
  function render(cur, cam){
    for (const L of layers){
      L.el.style.transform =
        'translate3d(' + (-cur * travel * L.f + cam.x * L.f).toFixed(2) + 'px,' +
                          cam.y.toFixed(2) + 'px,0)';
    }
    // each beat rides the world in, HOLDS still long enough to be read,
    // then rides out — otherwise 78vw of Thai crosses a 390px screen too fast
    for (const el of beats){
      const p = +el.dataset.p;
      const h = Math.min(+(el.dataset.hold || HOLD), Math.max(0, cur - p));
      el.style.transform = h ? 'translate3d(' + (h*travel).toFixed(1) + 'px,0,0)' : '';
      el.classList.toggle('lit', cur > p - 0.055);
    }

    // coin spin: 4 quantized frames like the NES, driven by progress —
    // scroll back and the coins spin the other way
    const q = [1, .55, .12, .55];
    for (let c = 0; c < coinEls.length; c++)
      coinEls[c].style.transform = 'scaleX(' + q[((cur * travel / 110 + c) | 0) % 4] + ')';
  }

  splitWords();

  return {
    SCROLL_LEN, PITS, elev,
    layout, render,
    get travel(){ return travel; },
    get catX(){ return catX; },
    get jumps(){ return jumps; }
  };
})();
