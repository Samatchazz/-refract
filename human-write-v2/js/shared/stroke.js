/* ============================================================
   stroke.js — THE sacred hand stroke (brief §0 / tokens §6)
   ONE path, reused for: splash underline, splash number cross-out,
   hero dash, and every era-box clause underline.
   Identical d = identical jitter. Non-scaling stroke = identical weight.
   ============================================================ */
import { reducedMotion, EASE_PEN } from '../config.js';

/*
  The one path. Left->right, slightly wobbly (hand jitter baked in).
  viewBox 300x24 stretches to any width but stroke-width stays constant in
  px via vector-effect:non-scaling-stroke — same hand at every size.
*/
export const STROKE_VIEWBOX = '0 0 300 24';
export const STROKE_PATH = 'M5,13 C42,7 74,17 112,11 C150,5 176,18 214,12 C250,6 274,15 296,10';

/* Build a fresh stroke <svg>. Returns { svg, path }. */
export function createStroke(opts = {}) {
  const NS = 'http://www.w3.org/2000/svg';
  const svg = document.createElementNS(NS, 'svg');
  svg.setAttribute('viewBox', STROKE_VIEWBOX);
  svg.setAttribute('preserveAspectRatio', 'none');
  svg.setAttribute('class', 'hw-stroke' + (opts.className ? ' ' + opts.className : ''));
  svg.setAttribute('aria-hidden', 'true');

  const path = document.createElementNS(NS, 'path');
  path.setAttribute('d', STROKE_PATH);
  path.setAttribute('fill', 'none');
  path.setAttribute('stroke', opts.color || 'var(--stroke-color)');
  path.setAttribute('stroke-width', 'var(--stroke-w)');
  path.setAttribute('stroke-linecap', 'round');
  path.setAttribute('stroke-linejoin', 'round');
  path.setAttribute('vector-effect', 'non-scaling-stroke');
  svg.appendChild(path);
  return { svg, path };
}

/* Prime a path for draw-on (fully hidden). Call before animating. */
export function primeStroke(path) {
  const len = path.getTotalLength();
  path.style.strokeDasharray = len;
  path.style.strokeDashoffset = len;
  return len;
}

/*
  Draw the stroke on. Returns a GSAP tween (or null in reduced motion,
  where it snaps drawn). `ease` defaults to the human pen ease.
*/
export function drawStroke(path, opts = {}) {
  primeStroke(path);
  if (reducedMotion) { path.style.strokeDashoffset = 0; return null; }
  return gsap.to(path, {
    strokeDashoffset: 0,
    duration: opts.duration != null ? opts.duration : 0.6,
    ease: opts.ease || EASE_PEN || 'power1.inOut',
    delay: opts.delay || 0,
    onComplete: opts.onComplete,
  });
}

/*
  Attach an underline stroke beneath a clause element (the connecting
  thread — brief §3). Sizes the svg to the element's box; positioned
  absolutely just below the text. Returns { svg, path }.
*/
export function attachUnderline(clauseEl) {
  clauseEl.classList.add('has-underline');
  const s = createStroke({ className: 'clause-stroke' });
  clauseEl.appendChild(s.svg);
  primeStroke(s.path);
  return s;
}
