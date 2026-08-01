// Typewriter-adjacent reveal (brief §4) — SMALL LABELS ONLY, never headlines.
// Characters fade in sequentially, 14ms/char, no cursor caret.
// Elements opt in with [data-typewriter]; fires when the in-view system
// marks them (or immediately if already visible).

const PER_CHAR = 14;

function split(el) {
  if (el.dataset.twSplit) return;
  el.dataset.twSplit = '1';
  const text = el.textContent;
  el.setAttribute('aria-label', text);
  el.textContent = '';
  const frag = document.createDocumentFragment();
  for (const ch of text) {
    const s = document.createElement('span');
    s.className = 'tw-char';
    s.setAttribute('aria-hidden', 'true');
    s.textContent = ch;
    frag.appendChild(s);
  }
  el.appendChild(frag);
}

function play(el) {
  if (el.dataset.twPlayed) return;
  el.dataset.twPlayed = '1';
  el.querySelectorAll('.tw-char').forEach((s, i) => {
    setTimeout(() => s.classList.add('on'), i * PER_CHAR);
  });
}

let io = null;

export function initTypewriter(scope = document) {
  const els = scope.querySelectorAll('[data-typewriter]:not([data-tw-split])');
  if (document.documentElement.classList.contains('reduced-motion')) {
    // reduced motion: leave text intact, no effect
    return;
  }
  if (!io) {
    io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          play(e.target);
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.5 });
  }
  els.forEach((el) => {
    split(el);
    io.observe(el);
  });
}
