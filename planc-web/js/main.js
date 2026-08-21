/* ============================================================
   main.js — the loop that ties scroll to everything else
   ============================================================ */
(function(){
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const Scene = PLANC.Scene, Cat = PLANC.Cat, UI = PLANC.UI;
  const S = Scene.SCROLL_LEN;

  const hint  = document.getElementById('hint');
  const enemy = document.getElementById('enemy');
  const block = document.getElementById('block');
  const qcoin = block.querySelector('.q-coin');
  const pupils = [...enemy.querySelectorAll('.pupil')];

  Scene.layout();
  addEventListener('resize', Scene.layout);

  // the flag rides down the pole over the last stretch — position is a
  // pure function of progress, so scrubbing back hoists it again
  // NOTE: svg elements have no offsetHeight — use getBoundingClientRect
  const flagS = document.getElementById('flagSvg');
  let flagRange = 0;
  const measureFlag = () =>
    flagRange = flagS.parentElement.offsetHeight * 0.80 - flagS.getBoundingClientRect().height;
  measureFlag();
  addEventListener('resize', measureFlag);

  const scrollToP = p => scrollTo({top: p * S, behavior:'smooth'});
  const menu = UI.nav(scrollToP);
  const hudUpdate = UI.hud();
  UI.preload();

  /* ---------- camera ----------
     look-ahead: at speed the camera leads the cat slightly, so you
     see where you're going instead of where you are.
     shake: a short decaying jolt on landing, applied to every depth. */
  const cam = {x:0, y:0};
  let shake = 0, shakeT = 0;

  let target = 0, cur = 0, lastCur = 0, prevT = performance.now();

  function frame(now){
    // dt in 60Hz-frames: keeps every smoothing constant frame-rate independent
    const dt = Math.min(3, Math.max(.2, (now - prevT) / 16.667));
    prevT = now;

    // 0.10 (was 0.14): more glide inertia — mass is half of what makes
    // gravity read as real
    target = Math.min(1, Math.max(0, scrollY / S));
    cur += (target - cur) * (1 - Math.pow(1 - 0.10, dt));
    if (Math.abs(target - cur) < 0.0002) cur = target;

    const d = cur - lastCur;
    const cat = Cat.update(cur, d, dt, Scene.jumps);

    // camera
    const lookAhead = -cat.dir * cat.v * 30;
    cam.x += (lookAhead - cam.x) * (1 - Math.pow(1 - 0.08, dt));
    if (cat.landed) shake = 1;
    if (shake > 0.002){
      shakeT += dt;
      cam.y = Math.sin(shakeT * 1.9) * shake * 7;
      shake *= Math.pow(0.80, dt);
    } else { shake = 0; cam.y += (0 - cam.y) * 0.3; }

    Scene.render(cur, cam);

    // DEADLINE watches the cat walk in, then loses its nerve
    const dx = (0.415 - cur) * Scene.travel;
    const look = Math.max(-1, Math.min(1, -dx / 420)) * 2.4;
    for (const p of pupils) p.style.transform = 'translateX(' + look.toFixed(2) + 'px)';

    enemy.classList.toggle('squashed', cur > 0.419);

    /* ---- ? block head-bump — every piece a pure function of cur ----
       contact at 0.615 (the jump apex, where scene.js hung the block) */
    const bt = (cur - 0.615) / 0.016;          // 0..1 = bump, ..2.6 = coin flight
    // the block takes the hit: snaps up 16px and drops back
    const bump = (bt > 0 && bt < 1) ? Math.sin(Math.min(bt / 0.45, 1) * Math.PI) * 16 : 0;
    block.style.transform = 'translateY(' + (-bump).toFixed(1) + 'px)';
    block.classList.toggle('hit', bt > 0.12);  // face swaps as it jolts
    // camera feels the thunk (same treatment landings get)
    if (lastCur < 0.615 && cur >= 0.615) shake = Math.max(shake, 0.55);
    // the coin: launches off the block top, spins in 4 quantized frames,
    // gravity pulls it back, it fades — scrub back and it dives home
    if (bt > 0.06 && bt < 2.6){
      const ct = (bt - 0.06) / 2.54;
      const rise = 1 - Math.pow(1 - Math.min(ct / 0.42, 1), 2);   // fast up
      const fall = Math.pow(Math.max(0, (ct - 0.42) / 0.58), 2);  // heavy down
      const y = -(rise * 122 - fall * 72);
      const spin = [1, .5, .12, .5][((cur * Scene.travel) / 60 | 0) % 4];
      qcoin.style.transform = 'translate(-50%,' + y.toFixed(1) + 'px) scaleX(' + spin + ')';
      qcoin.style.opacity = ct < 0.72 ? 1 : Math.max(0, 1 - (ct - 0.72) / 0.28).toFixed(2);
    } else {
      qcoin.style.opacity = 0;
    }

    const fk = Math.min(1, Math.max(0, (cur - 0.952) / 0.04));
    flagS.style.transform = 'translateY(' + (fk * flagRange).toFixed(1) + 'px)';
    document.body.classList.toggle('inverted', cur > 0.690 && cur < 0.860);

    hudUpdate(cur, menu.items);
    hint.style.opacity = cur < 0.015 ? 1 : 0;

    // hand the page over to the real closing panel — which now starts
    // rising only after Scene.endPad of "stand at the flag" scroll.
    // Two different thresholds: the HUD sits at the bottom so the footer
    // covers it the moment it appears, but the nav only needs to flip to
    // paper once the footer has actually risen far enough to be under it.
    const endAt = S + Scene.endPad;
    document.body.classList.toggle('hud-hidden', scrollY > endAt + 40);
    document.body.classList.toggle('on-end',     scrollY > endAt + innerHeight - 70);

    lastCur = cur;
    requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);
})();
