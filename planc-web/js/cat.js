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

  const shadowWrap = document.getElementById('shadow');

  let phase = 0, v = 0, dir = 1, prevY = 0, land = 0;

  /* dt is in frames-at-60Hz, so every smoothing constant below stays
     the value it was tuned at while behaving the same on a 120Hz screen */
  function update(cur, d, dt, jumps, elev){
    elev = elev || 0;
    if (Math.abs(d) > 0.00002) dir = d > 0 ? 1 : -1;

    // normalised gait speed 0..1 (tuned so a comfortable scroll sits near
    // 0.6 — retuned after SCROLL_LEN doubled and d per frame halved)
    const spd = Math.min(1, Math.abs(d) / Math.max(dt, .0001) * 1500);
    v += (spd - v) * (1 - Math.pow(1 - 0.18, dt));
    phase += GAIT_RATE * v * dir * dt;

    // jump arcs — parabolas centred on each obstacle
    let jy = 0;
    for (const j of jumps){
      const t = (cur - j.p) / j.w;
      if (t > -1 && t < 1) jy -= j.h * (1 - t*t);
    }
    const air = jy < -2;
    const vy  = jy - prevY;                 // <0 rising, >0 falling

    // landing impact
    let landed = false;
    if (prevY < -6 && jy >= -6){ land = 1; landed = true; }
    land *= Math.pow(0.86, dt);
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
    sy -= land * 0.20;  sx += land * 0.16;

    const deg = dir*LEAN_DEG*v*0.55 + rock + (air ? dir*4*v : 0);

    // elevation (pyramids, stairs) rides the same translate as the jump
    wrap.style.transform = 'translate3d(0,' + (jy + bob - elev).toFixed(2) + 'px,0)';
    lean.style.transform = 'rotate(' + deg.toFixed(2) + 'deg)';
    sq.style.transform   = 'scale(' + (dir < 0 ? -sx : sx).toFixed(3) + ',' + sy.toFixed(3) + ')';
    shadowWrap.style.transform = 'translate3d(0,' + (-elev).toFixed(2) + 'px,0)';

    // the shadow reacting to height is what actually sells the jump
    const lift = Math.min(1, -jy / 150);
    shadow.style.transform = 'scale(' + (1 - lift*0.55).toFixed(3) + ',' + (1 - lift*0.35).toFixed(3) + ')';
    shadow.style.opacity   = (0.18 * (1 - lift*0.7)).toFixed(3);

    prevY = jy;
    return {v, dir, jy, air, landed};
  }

  return {update};
})();
