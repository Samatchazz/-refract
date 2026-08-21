/* ============================================================
   cat.js — the faked walk
   ------------------------------------------------------------
   There is no walk clip. Midjourney grew extra legs on every
   attempt, so the gait is built in code from ONE still frame.
   The site's own mechanic makes this work: the world slides and
   the cat stays put, so the legs never need to travel — only the
   body has to behave like it's walking.

   Four coupled signals, all driven by scroll VELOCITY (not time):
     gait   – a phase that advances with scroll speed
     bob    – vertical lift, one hop per half cycle
     lean   – rotation into the direction of travel
     squash – scaleX/scaleY, compressed at contact, stretched at lift
   Plus jump stretch and a landing impact that decays.
   Scroll backwards and every one of them reverses. Scrub-safe.
   ============================================================ */
window.PLANC = window.PLANC || {};

PLANC.Cat = (function(){

  const GAIT_RATE = 0.46;   // cycle speed per unit of normalised scroll speed
  const BOB_PX    = 10;     // step lift
  const LEAN_DEG  = 7;      // max body tilt
  const SQUASH    = 0.085;  // contact compression

  const wrap   = document.getElementById('catWrap');
  const lean   = document.getElementById('catLean');
  const sq     = document.getElementById('catSq');
  const shadow = document.getElementById('shadow').firstElementChild;

  let phase = 0, v = 0, dir = 1, prevY = 0, land = 0;

  /* dt is in frames-at-60Hz, so every smoothing constant below stays
     the value it was tuned at while behaving the same on a 120Hz screen */
  function update(cur, d, dt, jumps){
    if (Math.abs(d) > 0.00004) dir = d > 0 ? 1 : -1;

    // normalised gait speed 0..1 (tuned so a comfortable scroll sits near
    // 0.6 — factor doubled with SCROLL_LEN so the same finger speed keeps
    // the same gait energy)
    const spd = Math.min(1, Math.abs(d) / Math.max(dt, .0001) * 2050);
    v += (spd - v) * (1 - Math.pow(1 - 0.18, dt));
    phase += GAIT_RATE * v * dir * dt;

    // jump arcs — Mario gravity, not a symmetric parabola:
    // launch fast, HANG at the apex, fall steeper than the rise.
    // Shape stays a pure function of progress, so it scrubs both ways.
    let jy = 0, crouch = 0;
    for (const j of jumps){
      const t = (cur - j.p) / j.w;
      if (t > -1 && t < 1){
        const rising = t < 0 ? -t : 0;          // 1 → 0 on the way up
        const falling = t > 0 ? t : 0;          // 0 → 1 on the way down
        // |t|^3 flattens the top (hang); the falling side is squeezed so
        // the drop spends fewer progress-px in the air = reads heavier
        const shape = 1 - Math.pow(rising, 3) - Math.pow(Math.min(1, falling * 1.18), 2.1);
        jy -= j.h * Math.max(0, shape);
      }
      // anticipation: a tiny crouch right before takeoff
      if (t > -1.28 && t < -1) crouch = Math.max(crouch, 1 - (-t - 1) / 0.28);
    }
    const air = jy < -2;
    const vy  = jy - prevY;                 // <0 rising, >0 falling

    // landing impact — decays slower than before: a thud, not a tap
    let landed = false;
    if (prevY < -6 && jy >= -6){ land = 1; landed = true; }
    land *= Math.pow(0.90, dt);
    if (land < 0.004) land = 0;

    const step = Math.abs(Math.sin(phase));   // 0 = foot planted, 1 = mid-lift
    const bob  = air ? 0 : -step * BOB_PX * v;
    const rock = Math.sin(phase * 2) * 2.2 * v;

    let sx, sy;
    if (air){
      const s = Math.max(-0.10, Math.min(0.13, -vy * 0.011));
      sy = 1 + s;  sx = 1 - s * 0.8;
    } else {
      sy = 1 - (SQUASH*(1-step) - SQUASH*0.55*step) * v;
      sx = 1 + (SQUASH*0.8*(1-step) - SQUASH*0.45*step) * v;
    }
    sy -= land * 0.26;  sx += land * 0.20;      // heavier landing
    sy -= crouch * 0.10; sx += crouch * 0.08;   // pre-jump crouch

    const deg = dir*LEAN_DEG*v*0.55 + rock + (air ? dir*4*v : 0);

    wrap.style.transform = 'translate3d(0,' + (jy + bob).toFixed(2) + 'px,0)';
    lean.style.transform = 'rotate(' + deg.toFixed(2) + 'deg)';
    sq.style.transform   = 'scale(' + (dir < 0 ? -sx : sx).toFixed(3) + ',' + sy.toFixed(3) + ')';

    // the shadow reacting to height is what actually sells the jump
    const lift = Math.min(1, -jy / 150);
    shadow.style.transform = 'scale(' + (1 - lift*0.55).toFixed(3) + ',' + (1 - lift*0.35).toFixed(3) + ')';
    shadow.style.opacity   = (0.18 * (1 - lift*0.7)).toFixed(3);

    prevY = jy;
    return {v, dir, jy, air, landed};
  }

  return {update};
})();
