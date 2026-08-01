/* Blog reader — "expanding grid item" overlay (Codrops-style, GSAP implementation).
   Click a blog card: its cover image flies to a fullscreen article view.
   Close via X, ESC, or browser back. Deep-links as #blog/<slug>. */

const REDUCE = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export function initReader() {
  const reader = document.querySelector('[data-reader]');
  if (!reader) return;

  const panel = reader.querySelector('.reader__panel');
  const scrollEl = reader.querySelector('[data-reader-scroll]');
  const heroBox = reader.querySelector('[data-reader-hero]');
  const heroImg = heroBox.querySelector('img');
  const metaEl = reader.querySelector('[data-reader-meta]');
  const titleEl = reader.querySelector('[data-reader-title]');
  const contentEl = reader.querySelector('[data-reader-content]');
  const closeBtn = reader.querySelector('[data-reader-close]');
  const cards = [...document.querySelectorAll('.blog-card[data-slug]')];

  let isOpen = false;
  let animating = false;
  let opener = null;

  function lockScroll(lock) {
    if (lock) {
      const sw = window.innerWidth - document.documentElement.clientWidth;
      document.body.style.overflow = 'hidden';
      document.body.style.paddingRight = sw > 0 ? sw + 'px' : '';
    } else {
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
    }
  }

  function fill(card) {
    const slug = card.dataset.slug;
    const tpl = document.querySelector(`template[data-article-tpl="${slug}"]`);
    heroImg.src = card.querySelector('img').getAttribute('src');
    heroImg.alt = '';
    titleEl.textContent = card.querySelector('.blog-card__title').textContent.trim();
    const date = card.querySelector('time')?.textContent || '';
    const bits = [tpl?.dataset.category, date, tpl?.dataset.readtime].filter(Boolean);
    metaEl.textContent = bits.join('  ·  ');
    contentEl.innerHTML = '';
    if (tpl) contentEl.append(tpl.content.cloneNode(true));
  }

  function makeGhost(rect) {
    const ghost = document.createElement('img');
    ghost.src = heroImg.src;
    ghost.alt = '';
    ghost.className = 'reader__ghost';
    document.body.append(ghost);
    gsap.set(ghost, { top: rect.top, left: rect.left, width: rect.width, height: rect.height });
    return ghost;
  }

  function open(card, animate = true, push = true) {
    if (isOpen || animating) return;
    isOpen = true;
    opener = card;
    fill(card);

    if (push) history.pushState({ reader: card.dataset.slug }, '', '#blog/' + card.dataset.slug);

    lockScroll(true);
    reader.classList.add('is-open');
    reader.setAttribute('aria-hidden', 'false');
    scrollEl.scrollTop = 0;

    if (!animate || REDUCE) {
      gsap.set(panel, { opacity: 1 });
      gsap.set([metaEl, titleEl, contentEl], { opacity: 1, y: 0 });
      gsap.set(heroImg, { visibility: 'visible' });
      closeBtn.focus();
      return;
    }

    // FLIP: measure after scroll-lock so the scrollbar shift doesn't skew rects
    const from = card.querySelector('.blog-card__thumb').getBoundingClientRect();
    const to = heroBox.getBoundingClientRect();
    const ghost = makeGhost(from);

    gsap.set(heroImg, { visibility: 'hidden' });
    gsap.set(panel, { opacity: 0 });
    gsap.set([metaEl, titleEl, contentEl], { opacity: 0, y: 24 });

    animating = true;
    gsap.timeline({
      onComplete: () => { ghost.remove(); animating = false; closeBtn.focus(); },
    })
      .to(panel, { opacity: 1, duration: 0.45, ease: 'power2.out' }, 0)
      .to(ghost, {
        top: to.top, left: to.left, width: to.width, height: to.height,
        borderRadius: 0, duration: 0.7, ease: 'expo.inOut',
      }, 0)
      .set(heroImg, { visibility: 'visible' })
      .to([metaEl, titleEl, contentEl], {
        opacity: 1, y: 0, duration: 0.6, ease: 'expo.out', stagger: 0.08,
      }, '-=0.05');
  }

  function doClose(animate = true) {
    if (!isOpen || animating) return;
    isOpen = false;
    const card = opener;

    const finish = () => {
      reader.classList.remove('is-open');
      reader.setAttribute('aria-hidden', 'true');
      gsap.set(panel, { opacity: 0 });
      lockScroll(false);
      card?.querySelector('a')?.focus();
    };

    const thumb = card?.querySelector('.blog-card__thumb');
    const cardRect = thumb?.getBoundingClientRect();
    const heroRect = heroBox.getBoundingClientRect();
    const cardOnScreen = cardRect && cardRect.bottom > 0 && cardRect.top < window.innerHeight;
    const heroOnScreen = heroRect.bottom > 40; // article scrolled: hero gone -> just fade

    if (!animate || REDUCE || !cardOnScreen || !heroOnScreen) {
      animating = true;
      gsap.to(panel, {
        opacity: 0, duration: 0.3, ease: 'power2.in',
        onComplete: () => { animating = false; finish(); },
      });
      return;
    }

    const ghost = makeGhost(heroRect);
    gsap.set(heroImg, { visibility: 'hidden' });

    animating = true;
    gsap.timeline({
      onComplete: () => {
        ghost.remove();
        gsap.set(heroImg, { visibility: 'visible' });
        animating = false;
        finish();
      },
    })
      .to([contentEl, titleEl, metaEl], { opacity: 0, y: 12, duration: 0.25, ease: 'power2.in' }, 0)
      .to(ghost, {
        top: cardRect.top, left: cardRect.left, width: cardRect.width, height: cardRect.height,
        borderRadius: 'var(--radius-card)', duration: 0.6, ease: 'expo.inOut',
      }, 0.1)
      .to(panel, { opacity: 0, duration: 0.4, ease: 'power2.in' }, 0.25);
  }

  /* Close via UI -> pop the #blog/ entry so history stays clean */
  function requestClose() {
    if (!isOpen || animating) return;
    if (/^#blog\//.test(location.hash)) history.back();
    else doClose();
  }

  cards.forEach((card) => {
    card.querySelector('a').addEventListener('click', (e) => {
      e.preventDefault();
      open(card);
    });
  });
  closeBtn.addEventListener('click', requestClose);

  window.addEventListener('keydown', (e) => {
    if (!isOpen) return;
    if (e.key === 'Escape') requestClose();
    if (e.key === 'Tab') {
      // minimal focus trap within the panel
      const focusables = [closeBtn, ...contentEl.querySelectorAll('a, button')];
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    }
  });

  window.addEventListener('popstate', () => {
    const m = location.hash.match(/^#blog\/(.+)$/);
    if (m) {
      const card = document.querySelector(`.blog-card[data-slug="${m[1]}"]`);
      if (card && !isOpen) open(card, false, false);
    } else if (isOpen) {
      doClose();
    }
  });

  /* Deep link: page loaded with #blog/<slug> already in the URL */
  const m = location.hash.match(/^#blog\/(.+)$/);
  if (m) {
    const card = document.querySelector(`.blog-card[data-slug="${m[1]}"]`);
    if (card) open(card, false, false);
  }
}
