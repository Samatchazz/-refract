// Environment detection — native feature checks (spec §2, §7.5).
// Sets html classes the CSS keys off: no-webgl / reduced-motion / touch.

export const env = {
  reducedMotion: matchMedia('(prefers-reduced-motion: reduce)').matches,
  touch: matchMedia('(hover: none), (pointer: coarse)').matches,
  webgl: (() => {
    try {
      const c = document.createElement('canvas');
      return !!(window.WebGLRenderingContext &&
        (c.getContext('webgl2') || c.getContext('webgl')));
    } catch {
      return false;
    }
  })(),
};

// GL runs only when WebGL exists AND motion is allowed (poster otherwise)
env.gl = env.webgl && !env.reducedMotion;

const html = document.documentElement;

// capture flags (for style-reference screenshots):
//   ?noui=1   hide every DOM layer — only the WebGL canvas + its background
//   ?freeze=1 stop the render loop once the scene has settled (rest pose)
const q = new URLSearchParams(location.search);
env.noui = q.get('noui') === '1';
env.freeze = q.get('freeze') === '1';
env.noprops = q.get('noprops') === '1'; // bear + held item only (for --oref crops)
if (env.noui) html.dataset.noui = '1';
if (env.freeze) html.dataset.freeze = '1';

if (!env.webgl) html.classList.add('no-webgl');
if (env.reducedMotion) html.classList.add('reduced-motion');
if (env.touch) html.classList.add('touch');

// --vh custom property (mobile 100vh fix — spec §3.4).
// Skip zero heights: backgrounded tabs / mid-rotation can report 0 and
// would collapse every full-height section.
function setVh() {
  if (window.innerHeight > 0) {
    html.style.setProperty('--vh', window.innerHeight * 0.01 + 'px');
  }
}
setVh();
addEventListener('resize', setVh);
