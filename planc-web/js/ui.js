/* ============================================================
   ui.js — the site chrome: preloader, nav, menu, game HUD
   ------------------------------------------------------------
   The hybrid: polite award-site nav and footer on the outside,
   a game HUD on the inside. The HUD rail doubles as the scroll
   progress bar and as the level's checkpoint map.
   ============================================================ */
window.PLANC = window.PLANC || {};

PLANC.UI = (function(){

  const scenes = [...document.querySelectorAll('.beat[data-p]')].map(el => ({
    p: +el.dataset.p,
    name: el.dataset.name || ''
  }));

  /* ---------- PRELOADER ---------- */
  function preload(done){
    const pre  = document.getElementById('preload');
    const bar  = pre.querySelector('.pl-bar i');
    const img  = document.getElementById('catImg');
    let pct = 0, fake = null;

    const tick = () => { pct = Math.min(92, pct + 7 + Math.random()*11); bar.style.width = pct + '%'; };
    fake = setInterval(tick, 110); tick();

    const finish = () => {
      clearInterval(fake);
      bar.style.width = '100%';
      setTimeout(()=>{
        pre.classList.add('gone');
        document.body.classList.add('ready');
        done && done();
      }, 320);
    };

    // the cat image must be decoded before the curtain lifts, or the
    // first frame of the walk plays against an empty stage
    const ready = () => (img.decode ? img.decode().catch(()=>{}) : Promise.resolve());
    if (img.complete) ready().then(finish);
    else { img.addEventListener('load', ()=>ready().then(finish)); img.addEventListener('error', finish); }
    setTimeout(finish, 4000);            // never trap the visitor
  }

  /* ---------- NAV + MENU OVERLAY ---------- */
  function nav(scrollToP){
    const btn  = document.getElementById('menuBtn');
    const list = document.getElementById('menuList');

    scenes.forEach((s, i)=>{
      const li = document.createElement('li');
      const b  = document.createElement('button');
      b.innerHTML = '<span class="num">' + String(i+1).padStart(2,'0') + '</span><span>' + s.name + '</span>';
      b.style.transitionDelay = (i * 45) + 'ms';
      b.addEventListener('click', ()=>{ close(); scrollToP(s.p); });
      li.appendChild(b); list.appendChild(li);
    });

    function open(){ document.body.classList.add('menu-open'); btn.setAttribute('aria-expanded','true');
                     document.getElementById('menu').setAttribute('aria-hidden','false'); }
    function close(){ document.body.classList.remove('menu-open'); btn.setAttribute('aria-expanded','false');
                      document.getElementById('menu').setAttribute('aria-hidden','true'); }

    btn.addEventListener('click', ()=> document.body.classList.contains('menu-open') ? close() : open());
    addEventListener('keydown', e => { if (e.key === 'Escape') close(); });

    return {close, items:[...list.children]};
  }

  /* ---------- GAME HUD ---------- */
  function hud(){
    const fill = document.getElementById('hudFill');
    const pins = document.getElementById('hudPins');
    const name = document.getElementById('hudScene');
    let last = -1;

    scenes.forEach(s=>{
      const b = document.createElement('b');
      b.style.left = (s.p * 100) + '%';
      pins.appendChild(b);
    });
    const dots = [...pins.children];

    return function update(cur, menuItems){
      fill.style.transform = 'scaleX(' + cur.toFixed(4) + ')';
      let idx = 0;
      for (let i = 0; i < scenes.length; i++) if (cur >= scenes[i].p - 0.02) idx = i;
      if (idx !== last){
        dots.forEach((d,i)=> d.classList.toggle('on', i <= idx));
        name.textContent = scenes[idx].name;
        if (menuItems) menuItems.forEach((li,i)=> li.classList.toggle('here', i === idx));
        last = idx;
      }
    };
  }

  return {scenes, preload, nav, hud};
})();
