/* Plan Z — Griflan-clone interactions (vanilla, no deps) */
(() => {
  document.documentElement.classList.add('js');
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- reveal on scroll ---------- */
  const reveals = document.querySelectorAll('.reveal');
  if (reduced || !('IntersectionObserver' in window)) {
    reveals.forEach((el) => el.classList.add('in'));
  } else {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in');
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    reveals.forEach((el) => io.observe(el));
    /* fallback: never leave content hidden (throttled/hidden tabs) */
    setTimeout(() => reveals.forEach((el) => el.classList.add('in')), 4000);
  }

  /* ---------- hero flip word (clone of Griflan's rotating "Brands") ---------- */
  const flip = document.getElementById('flipWord');
  if (flip && !reduced) {
    const words = [...flip.querySelectorAll('.flip__word')];
    let i = 0;
    setInterval(() => {
      words[i].classList.remove('is-on');
      i = (i + 1) % words.length;
      words[i].classList.add('is-on');
    }, 2600);
  }

  /* ---------- confessions: drag to scroll ---------- */
  const row = document.getElementById('confessRow');
  if (row) {
    let down = false;
    let startX = 0;
    let startScroll = 0;
    row.addEventListener('pointerdown', (e) => {
      down = true;
      startX = e.clientX;
      startScroll = row.scrollLeft;
      row.classList.add('dragging');
      row.setPointerCapture(e.pointerId);
    });
    row.addEventListener('pointermove', (e) => {
      if (!down) return;
      row.scrollLeft = startScroll - (e.clientX - startX);
    });
    const up = () => {
      down = false;
      row.classList.remove('dragging');
    };
    row.addEventListener('pointerup', up);
    row.addEventListener('pointercancel', up);
  }

  /* ---------- ticker: duplicate track content so -50% loop is seamless ---------- */
  const track = document.querySelector('.ticker__track');
  if (track && !reduced) {
    track.innerHTML += track.innerHTML;
  }
})();
