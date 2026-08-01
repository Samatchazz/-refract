/* Curtain / block reveal (§8.3) — wipe across the card, content appears mid-wipe. */

const REDUCE = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export function initBlockReveal() {
  const els = [...document.querySelectorAll('[data-block-reveal]')];

  if (REDUCE) {
    els.forEach((el) => gsap.set([...el.children], { opacity: 1 }));
    return;
  }

  els.forEach((el) => {
    const curtain = document.createElement('span');
    curtain.className = 'curtain';
    curtain.setAttribute('aria-hidden', 'true');
    el.append(curtain);

    /* wipe direction: data-block-reveal="right" -> curtain grows from the left edge */
    const dir = el.dataset.blockReveal === 'right' ? 'left' : 'right';
    const delay = el.dataset.revealDelay
      ? parseFloat(el.dataset.revealDelay)
      : (parseInt(el.dataset.revealCol || 0, 10) * 0.08);
    const content = [...el.children].filter((c) => c !== curtain);

    const tl = gsap.timeline({
      delay,
      paused: true,
      scrollTrigger: { trigger: el, start: 'top 85%' },
    });
    tl.fromTo(curtain,
        { scaleX: 0, transformOrigin: `${dir} center` },
        { scaleX: 1, duration: 0.45, ease: 'power3.inOut' })
      .set(content, { opacity: 1 }) // content appears while covered
      .to(curtain, {
        scaleX: 0,
        transformOrigin: dir === 'left' ? 'right center' : 'left center',
        duration: 0.45,
        ease: 'power3.inOut',
      });
  });
}
