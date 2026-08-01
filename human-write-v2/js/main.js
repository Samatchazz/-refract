/* ============================================================
   main.js — ES-module orchestrator (mirrors Idiology main.js §8.1).
   GSAP + plugins are set up by the inline classic script in index.html
   (so globals exist before these modules evaluate). This module wires
   splash → site in the load-bearing order.
   ============================================================ */
import { reducedMotion } from './config.js';
import { playSplash } from './splash.js';
import { initHero } from './hero.js';
import { initEras } from './eras.js';
import { initTextReveal } from './idiology/textReveal.js';

const splashSeen = document.documentElement.classList.contains('no-splash');

async function startSite() {
  document.body.classList.remove('splash-lock');

  /* Split text only once fonts are in — line measurement depends on final
     metrics (Idiology §8.1). Race a 2s cap so a slow CDN can't stall. */
  await Promise.race([document.fonts.ready, new Promise((r) => setTimeout(r, 2000))]);

  initTextReveal();   // generic company-voice reveals (scroll-triggered, non-hero)
  initHero();
  initEras();
  if (window.ScrollTrigger) ScrollTrigger.refresh();
}

/* Module scripts are deferred, so the DOM is already parsed here. */
if (splashSeen) {
  // reduced motion OR already seen this session → no splash
  startSite();
} else {
  playSplash(startSite);
}
