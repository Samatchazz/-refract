/* Custom cursor with pulse effect (§4.3) — dot 1:1, ring lerped in rAF. */

export function initCursor() {
  if (window.matchMedia('(hover: none)').matches) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const dot = document.querySelector('[data-cursor-dot]');
  const ring = document.querySelector('[data-cursor-ring]');
  if (!dot || !ring) return;

  let px = -100, py = -100;   // pointer
  let rx = -100, ry = -100;   // ring (lerped)
  let visible = false;

  dot.style.opacity = '0';
  ring.style.opacity = '0';

  window.addEventListener('pointermove', (e) => {
    px = e.clientX;
    py = e.clientY;
    if (!visible) {
      visible = true;
      rx = px; ry = py;
      dot.style.opacity = '1';
      ring.style.opacity = '1';
    }
    dot.style.transform = `translate(${px}px, ${py}px)`;
  }, { passive: true });

  (function loop() {
    rx += (px - rx) * 0.15;
    ry += (py - ry) * 0.15;
    ring.style.transform = `translate(${rx}px, ${ry}px)`;
    requestAnimationFrame(loop);
  })();

  /* Pulse on interactive elements (delegated, so dynamic nodes work too). */
  const HOVER_SEL = 'a, button, [data-cursor]';
  document.addEventListener('pointerover', (e) => {
    if (e.target.closest(HOVER_SEL)) ring.classList.add('is-hover');
  });
  document.addEventListener('pointerout', (e) => {
    if (e.target.closest(HOVER_SEL)) ring.classList.remove('is-hover');
  });
}
