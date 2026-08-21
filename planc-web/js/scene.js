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

  const TRAVEL_MIN = 7200;   // px of world movement, floor
  const SCROLL_LEN = 13000;  // px of page scroll mapped to 0..1 —
                             // ~15 screens of swiping, same level, 40% of
                             // the original speed
  const PIPE_P     = 0.265;  // the tall pipe (replaced the old pit)
  const HOLD       = 0.085;  // default: how long a text beat stands still

  const world  = document.getElementById('world');
  const spacer = document.getElementById('spacer');
  const layers = [...document.querySelectorAll('.layer')].map(el => ({
    el, f: parseFloat(el.dataset.f)
  }));

  let travel = 0, catX = 0, endPad = 0;
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

  /* ground <pattern>s — Yoshi's Island treatment, not a block grid:
     a wobbly hand-drawn lip with grass tufts on top, then mostly-empty
     soil with sparse crayon scribbles. Everything strokes currentColor
     so the dark level inverts it for free. */
  function groundPattern(){
    const svg = document.createElementNS(NS, 'svg');
    svg.setAttribute('width', 0); svg.setAttribute('height', 0);
    svg.style.position = 'absolute';
    const defs = document.createElementNS(NS, 'defs');

    const top = document.createElementNS(NS, 'pattern');
    top.id = 'groundTop';
    top.setAttribute('patternUnits', 'userSpaceOnUse');
    top.setAttribute('width', 360); top.setAttribute('height', 42);
    top.innerHTML =
      // the lip: one confident wobbly stroke + a fainter echo under it.
      // both edges of the repeat end FLAT at the same y, or the pattern
      // seam shows as a step every 360px
      '<path d="M-4 15 L6 15 Q34 8 62 14 T130 13 T198 17 T266 12 Q300 16 330 14 Q348 13 364 15" fill="none" stroke="currentColor" stroke-width="5.5" stroke-linecap="round"/>' +
      '<path d="M-4 26 L8 26 Q48 22 88 25 T192 23 T288 27 Q330 28 364 26" fill="none" stroke="currentColor" stroke-width="2" opacity=".3"/>' +
      // grass tufts poking up from the lip, three clusters per repeat
      '<g fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round">' +
      '<path d="M46 13 Q43 6 38 1"/><path d="M52 13 Q54 5 58 2"/><path d="M60 14 Q62 9 60 5"/>' +
      '<path d="M170 15 Q167 7 163 3"/><path d="M177 15 Q179 6 184 2"/>' +
      '<path d="M292 13 Q289 6 285 2"/><path d="M298 13 Q301 7 304 3"/><path d="M306 14 Q307 9 305 5"/></g>';

    const soil = document.createElementNS(NS, 'pattern');
    soil.id = 'groundSoil';
    soil.setAttribute('patternUnits', 'userSpaceOnUse');
    soil.setAttribute('width', 340); soil.setAttribute('height', 180);
    soil.innerHTML =
      // sparse crayon marks: two pebble loops, dots, a dash — mostly air
      '<path d="M46 62 q9 -9 24 -6 q14 3 10 11 q-4 8 -20 7 q-15 -2 -14 -12" fill="none" stroke="currentColor" stroke-width="2.5" opacity=".24"/>' +
      '<path d="M232 122 q11 -8 25 -3 q12 4 6 11 q-7 8 -22 5 q-12 -3 -9 -13" fill="none" stroke="currentColor" stroke-width="2.5" opacity=".22"/>' +
      '<circle cx="132" cy="146" r="3.2" fill="currentColor" opacity=".22"/>' +
      '<circle cx="308" cy="52" r="2.4" fill="currentColor" opacity=".2"/>' +
      '<circle cx="30" cy="152" r="2.2" fill="currentColor" opacity=".18"/>' +
      '<path d="M272 38 q11 3 20 -2" fill="none" stroke="currentColor" stroke-width="2" opacity=".2"/>' +
      '<path d="M150 28 q-9 6 -5 14" fill="none" stroke="currentColor" stroke-width="2" opacity=".2"/>' +
      '<path d="M92 108 q6 -5 12 -1" fill="none" stroke="currentColor" stroke-width="2" opacity=".18"/>';

    defs.appendChild(top); defs.appendChild(soil);
    svg.appendChild(defs);
    document.body.appendChild(svg);
  }
  groundPattern();

  /* world decorations: [progress, sprite ids to pick from, height in
     dvh, extra px offset]. Bushes skirt the pit + the beat positions. */
  const BUSH_P    = [0.055, 0.115, 0.19, 0.315, 0.375, 0.475, 0.575, 0.655, 0.77, 0.845, 0.925];
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
    // endPad: a full screen of "stand at the flag" scroll AFTER progress
    // hits 1, so the closing panel doesn't ride up over the finale the
    // moment the flag lands
    endPad = Math.round(innerHeight * 0.95);
    spacer.style.height = (SCROLL_LEN + innerHeight + endPad) + 'px';

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

    // ground — one continuous strip now (the pit became a pipe):
    // soil scribbles under a hand-drawn lip
    grounds.forEach(g => g.remove());
    grounds = [];
    const g = document.createElement('div');
    g.className = 'ground';
    g.style.left = '0px';
    g.style.width = (travel + innerWidth) + 'px';
    g.innerHTML = '<svg width="100%" height="100%" preserveAspectRatio="none">' +
                  '<rect y="34" width="100%" height="100%" fill="url(#groundSoil)"/>' +
                  '<rect width="100%" height="42" fill="url(#groundTop)"/></svg>';
    world.appendChild(g);
    grounds.push(g);

    decorate();

    // windows widened ~1.5x and arcs raised: with the Mario-gravity
    // curve in cat.js a jump now launches, hangs, and drops with weight
    const H = Math.min(innerHeight * 0.22, 190);
    jumps = [
      {p:PIPE_P, w:.046, h:H*1.32},  // over the tall pipe
      {p:0.415,  w:.038, h:H*0.98},  // stomp DEADLINE
      {p:0.615,  w:.040, h:H*1.21},  // hit the block
      {p:0.985,  w:.032, h:H*0.69}   // hop at the flag
    ];

    // hang the ? block so the cat's HEAD meets its underside exactly at
    // the jump apex — apex height + cat height, minus a 14px head-bump
    // overlap. Computed, not hand-tuned: stays true at every viewport.
    const blockEl = document.getElementById('block');
    const catH = document.getElementById('catWrap').offsetWidth * (617 / 560);
    blockEl.style.bottom =
      'calc(var(--ground-h) + ' + Math.round(H * 1.21 + catH - 6 - 14) + 'px)';
  }

  /* --- decorations — rebuilt with every layout() ------------ */
  let dWorld = null;
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

    // the tall pipe (took the pit's place) — the cat vaults it
    const pipe = sprite('pipe-long1', 'wd pipe');
    const ph = H * 0.20;
    pipe.style.cssText = 'position:absolute;bottom:var(--ground-h);left:' +
      (PIPE_P * travel + catX - (ph * pipe.__ar) / 2).toFixed(0) +
      'px;height:' + ph.toFixed(0) + 'px;width:' + (ph * pipe.__ar).toFixed(0) + 'px';
    dWorld.appendChild(pipe);

    // pebbles at the pipe's foot, like something once spilled there
    const peb = sprite('pebbles2', 'wd pebbles');
    const pw = H * 0.07;
    peb.style.cssText = 'position:absolute;bottom:var(--ground-h);left:' +
      (PIPE_P * travel + catX + (ph * pipe.__ar) / 2 + 6).toFixed(0) +
      'px;width:' + pw.toFixed(0) + 'px;height:' + (pw / peb.__ar).toFixed(0) + 'px';
    dWorld.appendChild(peb);

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
  }

  splitWords();

  return {
    SCROLL_LEN,
    layout, render,
    get travel(){ return travel; },
    get catX(){ return catX; },
    get jumps(){ return jumps; },
    get endPad(){ return endPad; }
  };
})();
