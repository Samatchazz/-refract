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
  const SCROLL_LEN = 5200;   // px of page scroll mapped to 0..1
  const PIT        = [0.245, 0.285];  // ground gap, in progress
  const HOLD       = 0.085;  // default: how long a text beat stands still

  const world  = document.getElementById('world');
  const spacer = document.getElementById('spacer');
  const layers = [...document.querySelectorAll('.layer')].map(el => ({
    el, f: parseFloat(el.dataset.f)
  }));

  let travel = 0, catX = 0;
  let beats = [], jumps = [], grounds = [];

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

    // ground, split in two around the pit
    grounds.forEach(g => g.remove());
    grounds = [];
    [[0, PIT[0]*travel + catX], [PIT[1]*travel + catX, travel + innerWidth]].forEach(([a,b])=>{
      const g = document.createElement('div');
      g.className = 'ground';
      g.style.left = a + 'px';
      g.style.width = (b - a) + 'px';
      world.appendChild(g);
      grounds.push(g);
    });

    const H = Math.min(innerHeight * 0.22, 190);
    jumps = [
      {p:(PIT[0]+PIT[1])/2, w:.034, h:H*1.15},  // over the pit
      {p:0.415,             w:.026, h:H*0.85},  // stomp DEADLINE
      {p:0.615,             w:.028, h:H*1.05},  // hit the block
      {p:0.985,             w:.022, h:H*0.60}   // hop at the flag
    ];
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
    SCROLL_LEN, PIT,
    layout, render,
    get travel(){ return travel; },
    get catX(){ return catX; },
    get jumps(){ return jumps; }
  };
})();
