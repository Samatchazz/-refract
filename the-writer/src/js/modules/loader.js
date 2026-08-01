// Loader (spec §7.3): dark veil + real progress, gated on fonts +
// GL assets. Min display 500ms; exit hands off directly into the hero
// entrance (the GL module chains it — no gap).

const MIN_MS = 500;
const start = performance.now();

const el = document.querySelector('.loader');
const bar = el?.querySelector('.loader-bar i');
const pct = el?.querySelector('.loader-pct');

let total = 0;
let done = 0;
let finished = false;
const doneCallbacks = [];

function render() {
  const p = total === 0 ? 0 : done / total;
  if (bar) bar.style.transform = `scaleX(${p})`;
  if (pct) pct.textContent = `${Math.round(p * 100)}%`;
}

/** Register a loading task; returns a completion callback. */
export function track(label = '') {
  total += 1;
  render();
  let called = false;
  return () => {
    if (called) return;
    called = true;
    done += 1;
    render();
  };
}

/** Wrap a promise as a tracked task. */
export function trackPromise(promise) {
  const end = track();
  return Promise.resolve(promise).finally(end);
}

/** Everything registered — hide after MIN_MS, then fire entrance chain. */
export function finishLoader() {
  if (finished || !el) return;
  finished = true;
  done = total; // clamp
  render();
  const wait = Math.max(0, MIN_MS - (performance.now() - start));
  setTimeout(() => {
    el.style.transition = 'opacity .6s cubic-bezier(.16,1,.3,1)';
    el.style.opacity = '0';
    // hand off into the hero entrance timeline immediately — not after fade
    doneCallbacks.forEach((fn) => fn());
    setTimeout(() => el.remove(), 700);
  }, wait);
}

export function onLoaderDone(fn) {
  if (finished) fn();
  else doneCallbacks.push(fn);
}
