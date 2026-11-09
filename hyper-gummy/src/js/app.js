// THE WRITER — app entry (DOM layer).
// GL bundle is dynamic-imported after first paint (spec §8).

import './modules/env.js';
import { env } from './modules/env.js';
import { initInView } from './modules/inview.js';
import { initTypewriter } from './modules/typewriter.js';
import { initOverlays } from './modules/overlays.js';
import { initCovers } from './modules/covers.js';
import { initCounters } from './modules/counter.js';
import { initScroll } from './modules/scroll.js';
import { track, trackPromise, finishLoader, onLoaderDone } from './modules/loader.js';
import { initTransitions } from './modules/transitions.js';

// ---- fonts gate the loader (spec §7.3) ----
trackPromise(document.fonts?.ready ?? Promise.resolve());

initOverlays();
initScroll();

function initContainer(scope = document) {
  initInView(scope);
  initTypewriter(scope);
  initCovers(scope);
  initCounters(scope);
}
initContainer(document);
initTransitions(initContainer);

// ---- GL layer: lazy, after first paint (spec §8) ----
if (env.gl) {
  const glReady = track('gl');
  import('./gl/index.js')
    .then(({ boot }) => boot({ onAsset: track, onReady: glReady }))
    .catch((err) => {
      console.error('[gl] failed to boot, falling back to poster', err);
      document.documentElement.classList.add('no-webgl');
      glReady();
    })
    .finally(() => finishLoader());
} else {
  // poster path: nothing else to load
  finishLoader();
}

export { initContainer, onLoaderDone };
