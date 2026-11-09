// Count-up numbers: <b data-count="9999" data-mode="slow|fast|creep" data-suffix="+">0</b>
//   slow  — one integer tick at a time, steady (10 over ~2.5 s, 4 over ~1.6 s)
//   fast  — races up with a jackpot-reel slowdown (default)
//   creep — races to the target, then keeps adding +1 every ~1.4 s for as
//           long as the element is on the page ("และเพิ่มขึ้นทุกวัน")
// Starts when scrolled into view, one-shot. Re-initialized per barba container.

import gsap from 'gsap';

const fmt = new Intl.NumberFormat('en-US');
let io = null;

function show(el, v, suffix) { el.textContent = fmt.format(Math.round(v)) + suffix; }

function run(el) {
  const to = parseFloat(el.dataset.count || '0');
  const suffix = el.dataset.suffix || '';
  const mode = el.dataset.mode || 'fast';
  const obj = { v: 0 };
  show(el, 0, suffix);
  if (mode === 'slow') {
    gsap.to(obj, {
      v: to, duration: Math.max(1.6, to * 0.25), ease: `steps(${to})`,
      onUpdate: () => show(el, obj.v, suffix),
    });
    return;
  }
  gsap.to(obj, {
    v: to, duration: parseFloat(el.dataset.duration || '2.2'), ease: 'power3.out',
    onUpdate: () => show(el, obj.v, suffix),
    onComplete: () => {
      if (mode !== 'creep') return;
      let n = to;
      const id = setInterval(() => {
        if (!el.isConnected) { clearInterval(id); return; }
        n += 1;
        show(el, n, suffix);
      }, 1400);
    },
  });
}

export function initCounters(scope = document) {
  const els = scope.querySelectorAll('[data-count]:not([data-counted])');
  if (!els.length) return;
  if (!io) {
    io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        e.target.dataset.counted = '1';
        run(e.target);
        io.unobserve(e.target);
      });
    }, { threshold: 0.4 });
  }
  els.forEach((el) => {
    const suffix = el.dataset.suffix || '';
    show(el, 0, suffix);
    io.observe(el);
  });
  // reserve the final width so the words after the number don't slide while
  // it counts — measured with the real font once it has loaded
  (document.fonts?.ready || Promise.resolve()).then(() => {
    els.forEach((el) => {
      if (!el.isConnected) return;
      const to = parseFloat(el.dataset.count || '0');
      const probe = el.cloneNode(false);
      probe.removeAttribute('data-count');
      probe.style.cssText = 'position:absolute;visibility:hidden;white-space:nowrap;min-width:0';
      probe.textContent = fmt.format(el.dataset.mode === 'creep' ? to + 9 : to) + (el.dataset.suffix || '');
      el.after(probe);
      el.style.minWidth = `${Math.ceil(probe.offsetWidth)}px`;
      probe.remove();
    });
  });
}
