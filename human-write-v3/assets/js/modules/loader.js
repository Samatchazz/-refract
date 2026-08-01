/* Loading overlay (§4.1). Resolves AFTER the fade-out completes,
   so the hero reveal can be chained (never overlapped). */

export function initLoader() {
  const el = document.querySelector('[data-loader]');
  if (!el) return Promise.resolve();

  const minDelay = new Promise((r) => setTimeout(r, 400));
  const loaded = document.readyState === 'complete'
    ? Promise.resolve()
    : new Promise((r) => window.addEventListener('load', r, { once: true }));

  return Promise.all([minDelay, loaded])
    .then(() => {
      el.classList.add('is-done'); // opacity -> 0 over .6s
      return new Promise((r) => setTimeout(r, 600));
    })
    .then(() => { el.classList.add('is-hidden'); });
}
