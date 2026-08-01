/* ============================================================
   splash.js — §1 splash (3.0s, two parallel layers)
   Plays once/session; skip button; bypassed under reduced motion.
   ============================================================ */
import { EASE_PEN } from './config.js';
import { createStroke, primeStroke, drawStroke } from './shared/stroke.js';

/* Brief §1: LOCKED 9,000,000 (MI Group 2026). Single change point. */
const SPLASH_COUNT = 9000000;

const SEEN_KEY = 'hw-splash-seen';
function markSeen() { try { sessionStorage.setItem(SEEN_KEY, '1'); } catch (e) {} }
function rand(a, b) { return a + Math.random() * (b - a); }

/* Play the splash, then call onDone() at the hard cut. */
export function playSplash(onDone) {
  const splash = document.getElementById('splash');
  const countEl = document.getElementById('splash-count');
  const crossHolder = splash.querySelector('.splash-cross');
  const percent = splash.querySelector('.splash-percent');
  const capA = splash.querySelector('.cap-a');
  const capB = splash.querySelector('.cap-b');
  const aiCrisp = splash.querySelector('.ai-crisp');
  const aiGhost = splash.querySelector('.ai-ghost');
  const logoHuman = splash.querySelector('.logo-human');
  const eraser = splash.querySelector('.splash-eraser');
  const black = document.getElementById('splash-black');
  const skipBtn = document.getElementById('splash-skip');

  markSeen();

  /* split the Latin logo into chars (Latin — .split is safe here, no Thai marks) */
  const text = logoHuman.textContent;
  logoHuman.textContent = '';
  const chars = [...text].map((c) => {
    const s = document.createElement('span');
    s.className = 'lh-ch';
    s.textContent = c;
    logoHuman.appendChild(s);
    return s;
  });

  /* the sacred stroke crosses out the number */
  const cross = createStroke({ className: 'splash-cross-stroke' });
  crossHolder.appendChild(cross.svg);
  primeStroke(cross.path);

  let finished = false;
  function finish() {
    if (finished) return; finished = true;
    gsap.set(splash, { display: 'none' });
    if (typeof onDone === 'function') onDone();
    gsap.to(black, { opacity: 0, duration: .25, delay: .02, onComplete() { gsap.set(black, { display: 'none' }); } });
  }

  /* initial states */
  gsap.set([capA, capB, percent, logoHuman, eraser, black], { opacity: 0 });
  gsap.set(aiCrisp, { opacity: 0, clipPath: 'inset(0 0 0 0)' });
  gsap.set(aiGhost, { opacity: 0 });
  gsap.set(chars, { opacity: 0, scale: .8 });

  const counter = { val: 0 };
  const tl = gsap.timeline({ onComplete: finish });

  /* --- TOP LAYER: number --- */
  // 0.2–1.4 count up (AI voice: flat, machine-precise)
  tl.to(counter, {
    val: SPLASH_COUNT, duration: 1.2, ease: 'power2.out',
    onUpdate() { countEl.textContent = Math.round(counter.val).toLocaleString('en-US'); },
  }, 0.2);
  tl.to(capA, { opacity: 1, duration: .4, ease: 'power1.inOut' }, 0.2);
  // 1.6–2.2 hand stroke crosses out → 0.1% + caption b (human hand)
  tl.add(() => { drawStroke(cross.path, { duration: .55, ease: EASE_PEN }); }, 1.6);
  tl.fromTo(percent, { opacity: 0, scale: .7, rotation: -10 }, { opacity: 1, scale: 1, rotation: -4, duration: .35, ease: EASE_PEN }, 1.9);
  tl.to(capB, { opacity: 1, duration: .3, ease: EASE_PEN }, 1.95);

  /* --- BOTTOM LAYER: logo (parallel) --- */
  // 0.2–0.6 Ai-Write appears crisp (uncannily flawless)
  tl.to(aiCrisp, { opacity: 1, duration: .28, ease: 'power1.inOut' }, 0.2);
  // 0.6–1.1 eraser wipes L→R, clip follows, faint ghost remains
  tl.to(eraser, { opacity: 1, duration: .1 }, 0.55);
  tl.fromTo(eraser, { xPercent: -120 }, { xPercent: 130, duration: .5, ease: 'power1.inOut' }, 0.6);
  tl.to(aiCrisp, { clipPath: 'inset(0 0 0 100%)', duration: .5, ease: 'power1.inOut' }, 0.6);
  tl.to(aiGhost, { opacity: .24, duration: .4, ease: 'power1.inOut' }, 0.72);
  tl.to(eraser, { opacity: 0, duration: .15 }, 1.05);
  // 1.1–1.8 Human-Write letters pop in one by one (irregular timing, uneven baselines)
  tl.set(logoHuman, { opacity: 1 }, 1.1);
  let t = 1.1;
  chars.forEach((ch) => {
    if (ch.textContent === '-') { // hyphen is load-bearing to the brand, keep it snappy
      tl.fromTo(ch, { opacity: 0, scale: .8, rotation: 0, y: 0 }, { opacity: 1, scale: 1, duration: .3, ease: EASE_PEN }, t);
    } else {
      tl.fromTo(ch,
        { opacity: 0, scale: .8, rotation: rand(-3, 3), y: rand(-6, 6) },
        { opacity: 1, scale: 1, rotation: rand(-3, 3), y: rand(-3, 3), duration: .42, ease: EASE_PEN }, t);
    }
    t += rand(0.045, 0.085); // irregular child-like rhythm
  });

  // 2.2–2.9 hold, then 3.0 hard cut to black (150ms)
  tl.to(black, { opacity: 1, duration: .15, ease: 'none' }, 3.0);

  /* skip button — jump to the cut immediately */
  skipBtn.addEventListener('click', () => {
    tl.kill();
    gsap.set(black, { opacity: 1, display: 'block' });
    finish();
  });
}
