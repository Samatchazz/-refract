// GL hero typography (spec §4.2, [DECIDED: troika]) — the display
// headline lives INSIDE the WebGL scene so the nib can interleave with
// it. The DOM keeps the real text (visually hidden) for SEO/a11y.
// Brief §3: Instrument Serif, letterpress feel — slight per-line
// x-offset (2–6px) like hand-set type [DECIDED].

import * as THREE from 'three';
import { Text } from 'troika-three-text';
import gsap from 'gsap';

const FONT_REGULAR = '/assets/fonts/InstrumentSerif-Regular.ttf';
const FONT_ITALIC = '/assets/fonts/InstrumentSerif-Italic.ttf';

// hand-set letterpress x-offsets per line, in px
const PRESS_OFFSETS = [0, 5, 2, 6];

export function buildHeadline(stage, onAsset) {
  const group = new THREE.Group();
  group.renderOrder = 0;
  stage.scene.add(group);

  const src = document.querySelector('[data-gl-headline]');
  const lines = src
    ? [...src.querySelectorAll('[data-line]')].map((el) => ({
        text: el.textContent.trim(),
        italic: !!el.querySelector('.it'),
      }))
    : [];

  const texts = [];
  const end = onAsset ? onAsset('headline-font') : () => {};
  let synced = 0;

  lines.forEach((line, i) => {
    const t = new Text();
    t.text = line.text;
    t.font = line.italic ? FONT_ITALIC : FONT_REGULAR;
    t.color = 0xf3efe6;
    t.anchorX = 'left';
    t.anchorY = 'top';
    t.material.transparent = true;
    t.fillOpacity = 0;
    t.sync(() => {
      synced += 1;
      if (synced === lines.length) end();
    });
    group.add(t);
    texts.push(t);
  });
  if (lines.length === 0) end();

  // ---- layout: mirror the DOM type scale in world units ----
  let pxToWorld = 1;
  function layout(w, h) {
    const dist = stage.camera.position.z;
    const worldH = 2 * dist * Math.tan(THREE.MathUtils.degToRad(stage.camera.fov / 2));
    pxToWorld = worldH / h;

    // --fs-display: clamp(3.5rem, 2rem + 10vw, 10rem), also capped so the
    // 4-line block never exceeds ~78% of a short viewport's height
    const fsPx = Math.min(160, Math.max(42, 32 + 0.1 * w), (h * 0.78) / (texts.length * 1.02));
    const lineH = fsPx * 1.02;
    const padPx = Math.min(Math.max(w * 0.04, 20), 64);

    const blockH = lineH * texts.length;
    const left = -((w / 2) - padPx) * pxToWorld;
    // biased above center so the block clears the bottom-anchored intro
    const top = (blockH / 2 + fsPx * 0.38) * pxToWorld;

    texts.forEach((t, i) => {
      t.fontSize = fsPx * pxToWorld;
      t.position.x = left + PRESS_OFFSETS[i % PRESS_OFFSETS.length] * pxToWorld;
      t.position.y = top - i * lineH * pxToWorld;
      t.position.z = -0.35; // the nib crosses this plane while "writing"
      t.sync();
    });
    group.userData.scrollFactor = pxToWorld;
  }
  stage.addResizeHook(layout);

  let visible = true;

  return {
    group,
    texts,
    /** entrance: lines rise + soften in, per-line delay .12s (spec §6.1) */
    entrance() {
      texts.forEach((t, i) => {
        gsap.to(t, {
          fillOpacity: 1,
          duration: 1.4, // 1.2 × 1.15 (brief §4)
          delay: 0.12 * i,
          ease: 'power2.out',
        });
        gsap.from(t.position, {
          y: t.position.y - 0.35,
          duration: 1.4,
          delay: 0.12 * i,
          ease: 'expo.out',
        });
      });
    },
    /** headline exists on the home hero only */
    setPage(page) {
      const want = page === 'home';
      if (want === visible) return;
      visible = want;
      texts.forEach((t, i) => {
        gsap.to(t, {
          fillOpacity: want ? 1 : 0,
          duration: 0.5,
          delay: 0.05 * i,
          ease: 'power2.out',
        });
      });
    },
    /** ride the page scroll + gently thin out as the hero leaves */
    update(scrollPx) {
      group.position.y = scrollPx * pxToWorld;
      const fade = visible ? Math.max(0, 1 - (scrollPx / innerHeight) * 1.4) : 0;
      texts.forEach((t) => {
        t.material.opacity = Math.min(1, fade + 0.0001);
      });
    },
  };
}
