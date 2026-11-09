// GL stage — the ONE persistent canvas. Created once, never destroyed on
// navigation; the scene morphs between pages.
// Gummy bear + candy props (translucent physical materials under a room
// environment), candy-gradient background, canvas-rasterized Thai
// headline the bear tumbles through, sugar trail from the paw.

import * as THREE from 'three';
import gsap from 'gsap';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';
import { buildBearGeometry, HEART, MODEL_SCALE } from './bear.js';
import { buildHeld } from './held.js';
import { FLAVORS, gummyMaterial, applyFlavor } from './flavors.js';
import { buildProps } from './props.js';
import { buildBackground } from './background.js';
import { resolvePose } from './choreography.js';
import { buildHeadline } from './headline.js';
import { buildTrail, buildSparkles } from './trail.js';
import { setDimHook } from '../modules/overlays.js';
import { onLoaderDone } from '../modules/loader.js';
import { env } from '../modules/env.js';
import { getScrollProgress } from '../modules/scroll.js';

export let stage = null;

class Stage {
  constructor(canvas) {
    this.canvas = canvas;
    this.renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: false,
      powerPreference: 'high-performance',
    });
    this.renderer.setClearColor(0xfff4e8, 1);
    this.renderer.toneMapping = THREE.NoToneMapping;

    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(35, 1, 0.1, 60);
    this.camera.position.set(0, 0, 7);

    // image-based lighting for the physical gummy material
    const pmrem = new THREE.PMREMGenerator(this.renderer);
    this.scene.environment = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;
    pmrem.dispose();
    const key = new THREE.DirectionalLight(0xffffff, 1.6);
    key.position.set(-3, 4, 6);
    this.scene.add(key);
    const rim = new THREE.DirectionalLight(0xffd9e6, 0.8);
    rim.position.set(4, -2, -3);
    this.scene.add(rim);

    // pointer tracking — lerped, never snaps
    this.pointerTarget = new THREE.Vector2();
    this.pointer = new THREE.Vector2();
    if (!env.touch) {
      addEventListener('pointermove', (e) => {
        this.pointerTarget.set(
          (e.clientX / innerWidth - 0.5) * 0.5,
          (e.clientY / innerHeight - 0.5) * 0.3,
        );
      });
    }

    // pose state: `target` comes from the scroll keyframes each frame,
    // `pose` chases it — so scroll scrubs AND route changes both morph
    this.page = document.querySelector('[data-gl-page]')?.dataset.glPage || 'home';
    this.pose = {
      pos: new THREE.Vector3(1.15, -0.05, 0),
      rot: new THREE.Euler(0.06, -0.32, -0.12),
      scale: 1,
    };
    this.targetPose = {
      pos: new THREE.Vector3().copy(this.pose.pos),
      rot: new THREE.Euler().copy(this.pose.rot),
      scale: 1,
    };
    this.lift = 0;       // 0..1 route-transition hop blend
    this.spin = 0;       // accumulated route-transition spin (radians)
    this.pop = 1;
    // jelly spring: squash & stretch driven by scroll velocity + clicks
    this.jelly = { x: 0, v: 0 };
    this.clock = new THREE.Clock();

    this.onResize();
    addEventListener('resize', () => this.onResize());

    document.addEventListener('visibilitychange', () => {
      this.running = !document.hidden;
    });
    this.running = true;

    this.tick = this.tick.bind(this);
    gsap.ticker.add(this.tick);
  }

  onResize() {
    const w = innerWidth;
    const h = innerHeight;
    if (w < 2 || h < 2) return;
    const ratio = Math.min(devicePixelRatio || 1, 2, 2560 / w);
    this.renderer.setPixelRatio(ratio);
    this.renderer.setSize(w, h);
    this.camera.aspect = w / h;
    this.camera.updateProjectionMatrix();
    this.viewport = { w, h };
    this.resizeHooks?.forEach((fn) => fn(w, h));
  }

  addResizeHook(fn) {
    (this.resizeHooks ??= []).push(fn);
    fn(innerWidth, innerHeight);
  }

  /** dim the GL scene (overlays 25%, media-panel focus 20%) */
  setDim(amount) {
    gsap.to(this.canvas.style, {
      opacity: 1 - amount,
      duration: 0.5,
      ease: 'power2.out',
      overwrite: 'auto',
    });
  }

  async build(onAsset) {
    this._onAsset = onAsset;
    const endGeo = onAsset ? onAsset('bear') : () => {};
    const bearGeo = buildBearGeometry();
    endGeo();

    // --- candy background, drawn first every frame ---
    this.bg = buildBackground();
    this.scene.add(this.bg.mesh);

    // --- hero group: bear + drifting gummies ---
    this.hero = new THREE.Group();

    this.flavorIndex = 0;
    this.bearMat = gummyMaterial(FLAVORS[0]);
    // about-page "color flows in from the feet up": a fill line (local y)
    // below which the bear is grey — injected into the physical shader
    this.fill = { value: 10 };
    this.bearMat.onBeforeCompile = (shader) => {
      shader.uniforms.uFill = this.fill;
      shader.vertexShader = shader.vertexShader
        .replace('#include <common>', '#include <common>\nvarying float vFillY;')
        .replace('#include <begin_vertex>', '#include <begin_vertex>\nvFillY = transformed.y;');
      shader.fragmentShader = shader.fragmentShader
        .replace('#include <common>', '#include <common>\nvarying float vFillY;\nuniform float uFill;')
        .replace('#include <color_fragment>', `#include <color_fragment>
          float fillMix = smoothstep(uFill - 0.25, uFill + 0.25, vFillY);
          diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.80, 0.77, 0.82), fillMix);`);
    };
    this.bear = new THREE.Mesh(bearGeo, this.bearMat);
    this.bear.morphTargetInfluences = [0]; // [0] = smile
    this.hero.add(this.bear);

    // about-page finale: a crowd of mini bears in every color, hidden
    // (scale 0) until the last chapter
    const CROWD = 10;
    // instanced meshes can't carry morph targets — use a morph-free copy
    const plainGeo = bearGeo.clone();
    plainGeo.morphAttributes = {};
    // white base so each instance color IS the flavor (not multiplied down)
    this.crowd = new THREE.InstancedMesh(plainGeo, gummyMaterial({ color: '#ffffff', attenuation: '#d8c8dc' }, { thickness: 0.5, attenuationDistance: 2.5 }), CROWD);
    this.crowd.frustumCulled = false;
    this.crowdSlots = [];
    const _m = new THREE.Matrix4();
    for (let i = 0; i < CROWD; i++) {
      // a loose ring around the bear, kept on the right half so the copy stays clear
      const a = (i / CROWD) * Math.PI * 2 + 0.4;
      const r = 1.7 + (i % 3) * 0.3;
      this.crowdSlots.push({ pos: new THREE.Vector3(1.0 + Math.cos(a) * r, Math.sin(a) * r * 0.75 - 0.1, -0.7 - (i % 4) * 0.4), rot: Math.sin(i * 1.7) * 0.5, s: 0.26 + (i % 3) * 0.05, delay: (i * 0.37) % 1 });
      _m.makeScale(0, 0, 0);
      this.crowd.setMatrixAt(i, _m);
      this.crowd.setColorAt(i, new THREE.Color(FLAVORS[i % FLAVORS.length].color));
    }
    this.crowd.instanceMatrix.needsUpdate = true;
    this.crowd.instanceColor.needsUpdate = true;
    this.hero.add(this.crowd);
    this.crowdReveal = 0;

    // about chapters (refreshed on every route)
    this.about = { chapter: -1, t: 0 };
    this.refreshChapters();

    // --- what the bear hugs: a simple cute shape in a color — the
    //     strawberry heart by default, or the case's shape + color
    //     (data-gl-candy / data-gl-color) on a case page ---
    this.heart = new THREE.Group();          // holder at the belly anchor
    this.heart.position.copy(HEART);
    this.bear.add(this.heart);
    this.heldKind = null;
    this.heldColor = null;
    this.heldScale = 1;                      // tweened 0→1 on swaps
    const first = document.querySelector('[data-gl-candy]');
    this.setHeld(first?.dataset.glCandy || 'heart', first?.dataset.glColor || '#FF3D8F', true);

    this.props = buildProps(bearGeo);
    this.props.group.visible = !env.noprops;
    this.hero.add(this.props.group);

    // tall phones only: a sky-blue gummy star fills the empty right side of
    // the headline (beside โปรดักต์/แมส) once the bear has parked below it
    const star = buildHeld('star', '#5CCBFF');
    this.mobStar = star.group;
    this.mobStar.visible = false;
    this.hero.add(this.mobStar);
    this.scene.add(this.hero);

    // --- GL display headline (the bear tumbles through it) ---
    // (skipped entirely in ?noui capture mode — no letterforms may leak)
    this.headline = env.noui ? null : buildHeadline(this, this._onAsset);

    // --- sugar trail streamed from the paw ---
    this.trail = buildTrail(this, FLAVORS[0].trail);
    // twinkles around the heart for the "ใส่ใจน้อง" chapter
    this.sparkles = buildSparkles(this);
    this.sparkleLevel = 0;

    // --- click the bear → next flavor + candy burst + jelly wobble ---
    this.raycaster = new THREE.Raycaster();
    addEventListener('click', (e) => {
      if (e.target.closest('a, button')) return;
      const ndc = new THREE.Vector2(
        (e.clientX / innerWidth) * 2 - 1,
        -(e.clientY / innerHeight) * 2 + 1,
      );
      this.raycaster.setFromCamera(ndc, this.camera);
      if (this.raycaster.intersectObject(this.bear, true).length) this.cycleFlavor();
    });

    // extra gloss on interactive hover / route transitions
    document.addEventListener('mouseover', (e) => {
      if (e.target.closest('a, button')) this.setShiny(true);
    });
    document.addEventListener('mouseout', (e) => {
      if (e.target.closest('a, button')) this.setShiny(false);
    });

    // case-row media focus dims the scene 20%
    document.addEventListener('mouseover', (e) => {
      if (e.target.closest('.case-row')) this.setDim(0.2);
    });
    document.addEventListener('mouseout', (e) => {
      if (e.target.closest('.case-row')) this.setDim(0);
    });
  }

  /** re-read [data-chapter] sections after a route change */
  refreshChapters() {
    this.chapters = [...document.querySelectorAll('[data-chapter]')];
    this.steps = [...document.querySelectorAll('.about-step')];
    this._activeStep = -1;
    this.about = { chapter: -1, t: 0 };
    this.refreshBuild();
  }

  /** case pages with data-gl-build="<rig>": a scroll-assembled prop (the
   *  secret-menu cup) lives in this same scene while the bear is off-screen */
  refreshBuild() {
    const el = document.querySelector('[data-gl-build]');
    this.buildChapters = el ? [...document.querySelectorAll('.post-chapter--build')] : [];
    this.buildWords = this.buildChapters.map((c) => [...c.querySelectorAll('.chapter-title .w')]);
    this.buildReturn = 0;
    const kind = el?.dataset.glBuild || null;
    if (!kind) { if (this.rig) { this.rig.active = false; this.rig.group.visible = false; } return; }
    if (this.rig && this.rigKind === kind) { this.rig.active = true; return; }
    this.rigKind = kind;
    import('./art/build-cup.js').then(({ buildCupRig }) => {
      if (this.rigKind !== kind) return;
      if (this.rig) this.scene.remove(this.rig.group);
      // POW bursts reuse the bear's comic starburst
      this.rig = buildCupRig({ pow: (color, at) => this.trail?.comic(color, at) });
      this.rig.active = true;
      this.scene.add(this.rig.group);
    });
  }

  /** drive the build rig from the chapter under the viewport middle */
  buildEffects(t, dt) {
    this.rigVis = 0;
    this.buildReturn = 0;
    if (!this.rig || !this.rig.active || !this.buildChapters?.length) return;
    const vh = innerHeight;
    const mid = vh * 0.5;
    const rects = this.buildChapters.map((c) => c.getBoundingClientRect());
    let ch = -1, ct = 0;
    rects.forEach((r, i) => {
      if (r.top <= mid) { ch = i; ct = THREE.MathUtils.clamp((mid - r.top) / r.height, 0, 1); }
    });
    const last = rects.length - 1;
    // before the first chapter: show the empty cup arriving; after the last: hold
    const enter = THREE.MathUtils.smoothstep(vh * 0.95 - rects[0].top, 0, vh * 0.35);
    if (ch < 0) { ch = 0; ct = 0; }
    // 4th chapter: the bear comes back and takes the cup
    const ret = ch === last ? THREE.MathUtils.smoothstep(ct, 0.1, 0.5) : ch > last ? 1 : 0;
    this.buildReturn = ret;
    const vis = enter * (1 - THREE.MathUtils.smoothstep(ret, 0.55, 0.8));
    this.rigVis = enter * (1 - ret); // the bear stays off-screen while the prop owns the stage

    const g = this.rig.group;
    const aspect = this.camera.aspect;
    const portrait = THREE.MathUtils.smoothstep(1.0 - aspect, 0, 0.3);
    const fit = THREE.MathUtils.clamp(aspect / 1.55, 0.5, 1);
    // chapter 2 (the pour): the cup starts tipped toward you and BIG, close
    // to the middle, then rights itself and pulls back as it fills — the
    // motion arc of a product pour shot. Other chapters: the rest pose.
    const pourArc = ch === 1 ? 1 - THREE.MathUtils.smoothstep(ct, 0.08, 0.72) : 0;
    let sc = THREE.MathUtils.lerp(0.72 * fit, 0.32, portrait) * (0.15 + 0.85 * enter) * (1 + 0.3 * pourArc);
    let px = THREE.MathUtils.lerp(1.7 * fit, 0.55, portrait) - pourArc * 0.4 * fit + this.pointer.x * -0.15;
    let py = THREE.MathUtils.lerp(-1.05, 0.3, portrait) + (1 - enter) * -0.9 + Math.sin(t * 0.8) * 0.02 - pourArc * 0.35;
    // hand-over: the cup shrinks into the bear's paws as it lands
    if (ret > 0) {
      const at = new THREE.Vector3();
      this.heart.getWorldPosition(at);
      const k = THREE.MathUtils.smoothstep(ret, 0.15, 0.7);
      px = THREE.MathUtils.lerp(px, at.x, k);
      py = THREE.MathUtils.lerp(py, at.y - 0.25, k);
      sc *= (1 - 0.7 * k);
    }
    g.scale.setScalar(Math.max(0.001, sc));
    g.position.set(px, py, 0);
    // same three-quarter rest view + pointer parallax + breathe as the hero bear
    // three-quarter turn like the bear on the whole rig; the cup itself is
    // tipped toward the camera so you look INTO it (drink, floating bits)
    g.rotation.set(0, -0.4 + this.pointer.x * 0.9, -0.04 + Math.sin(t * 0.5) * 0.02);
    this.rig.tilt.rotation.set(
      THREE.MathUtils.lerp(0.34, 0.62, pourArc) + this.pointer.y * 0.4 + Math.sin(t * 0.7) * 0.03,
      0,
      THREE.MathUtils.lerp(-0.06, -0.42, pourArc),
    );
    const br = Math.sin(t * 1.6) * 0.012;
    g.scale.set(g.scale.x * (1 - br), g.scale.y * (1 + br), g.scale.z * (1 - br));
    g.visible = vis > 0.01;
    this.rig.apply(ch, ct, t, dt);

    // chapter-title words pop in as the events land (text <-> 3D)
    if (this.buildWords) {
      const n = this.rig.state.words;
      this.buildWords.forEach((ws, i) => {
        ws.forEach((w, j) => w.classList.toggle('is-on', i < ch || (i === ch && j < n)));
      });
    }
  }

  /** which about-chapter is under the viewport center, and how far through it */
  readAbout() {
    const mid = innerHeight * 0.5;
    let chapter = -1;
    let t = 0;
    for (let i = 0; i < this.chapters.length; i++) {
      const r = this.chapters[i].getBoundingClientRect();
      if (r.top <= mid) {
        chapter = i;
        t = THREE.MathUtils.clamp((mid - r.top) / r.height, 0, 1);
      }
    }
    this.about.chapter = chapter;
    this.about.t = t;
  }

  /** the about story: each chapter is one "small adjustment" to the same bear */
  aboutEffects(dt) {
    const k = 1 - Math.exp(-4 * dt);
    // the story runs wherever [data-chapter] sections exist (the one-page
    // home carries it after the cases) — but only once the reader is in them
    const isAbout = !!this.chapters?.length && this.about.chapter >= 0;
    let fill = 10, sat = 1, smile = 0, crowd = 0, showHeld = 1, sparkle = 0;
    if (isAbout) {
      const { chapter, t } = this.about;
      // 0 → grey, nothing in the arms · 1 → color rises from the feet
      const rise = chapter <= 0 ? 0 : chapter === 1 ? THREE.MathUtils.smoothstep(t, 0.1, 0.8) : 1;
      fill = -1.9 + rise * 4.2;
      sat = rise;
      // 2 → "ใส่ใจน้อง": the heart grows with the scroll; once it is full,
      //     sparkles bounce and twinkle around it
      if (chapter === 2) {
        // silent swap (no POW) — this moment is tender, the heart just grows in
        this.setHeld('heart', '#5CCBFF', true);
        showHeld = THREE.MathUtils.smoothstep(t, 0.08, 0.55);
        sparkle = THREE.MathUtils.smoothstep(showHeld, 0.85, 1);
      } else {
        showHeld = chapter >= 2 ? 1 : 0;
      }
      // 3 → cycle the held shapes with scroll — long holds, and the matching
      //     list row lights up so eyes go text ↔ bear
      if (chapter === 4) {
        // mirrors the 4 real-work cases: secret menu / DIY menu / story / viral ingredient
        const seq = [['cup', '#A6E85C'], ['star', '#5CCBFF'], ['donut', '#FF3D8F'], ['heart', '#FF8A3D']];
        const idx = t < 0.28 ? 0 : t < 0.52 ? 1 : t < 0.76 ? 2 : 3;
        const [kind, color] = seq[idx];
        this.setHeld(kind, color);
        if (this.steps && this._activeStep !== idx) {
          this._activeStep = idx;
          this.steps.forEach((el, i) => el.classList.toggle('is-active', i === idx));
        }
      } else if (this._activeStep !== -1 && this.steps) {
        this._activeStep = -1;
        this.steps.forEach((el) => el.classList.remove('is-active'));
      }
      // 3 → the 10,000+ counter: the friends (น้องขนม) crowd in while it counts,
      //     and step back out for the case list
      // 5 → the smile, then the friends come back for the finale
      smile = chapter === 5 ? THREE.MathUtils.smoothstep(t, 0.05, 0.4) : chapter > 5 ? 1 : 0;
      crowd = chapter === 3 ? THREE.MathUtils.smoothstep(t, 0.08, 0.6)
        : chapter === 5 ? THREE.MathUtils.smoothstep(t, 0.3, 0.85) : chapter > 5 ? 1 : 0;
    }
    this.sparkleLevel = sparkle;
    this.fill.value += (fill - this.fill.value) * k;
    // mirror the bear's state onto the About headlines (CSS reads the vars)
    if (isAbout) {
      const rise = THREE.MathUtils.clamp((this.fill.value + 1.9) / 4.2, 0, 1);
      this.chapters[1]?.style.setProperty('--rise', rise.toFixed(3));
      const heart = this.about.chapter >= 2 ? THREE.MathUtils.clamp(this.heldVisible ?? 0, 0, 1) : 0;
      this.chapters[2]?.style.setProperty('--heart', heart.toFixed(3));
      this.chapters[2]?.classList.toggle('is-full', sparkle > 0.5);
    }
    this.sat = (this.sat ?? 1) + (sat - (this.sat ?? 1)) * k;
    if (!isAbout) smile = THREE.MathUtils.smoothstep(this.buildReturn || 0, 0.5, 0.9);
    this.bear.morphTargetInfluences[0] += (smile - this.bear.morphTargetInfluences[0]) * k;
    this.heldVisible = (this.heldVisible ?? 1) + (showHeld - (this.heldVisible ?? 1)) * k;
    this.crowdReveal += (crowd - this.crowdReveal) * k;
    // attenuation follows saturation so a grey bear isn't glowing red inside
    const f = FLAVORS[this.flavorIndex];
    this.bearMat.attenuationColor.set(f.attenuation).lerp(new THREE.Color('#9A93A1'), 1 - this.sat);
    // crowd matrices
    if (this.crowdReveal > 0.001 || this._crowdShown) {
      const _m = new THREE.Matrix4();
      const _q = new THREE.Quaternion();
      const _e = new THREE.Euler();
      this.crowdSlots.forEach((slot, i) => {
        const local = THREE.MathUtils.clamp((this.crowdReveal - slot.delay * 0.5) / 0.5, 0, 1);
        const pop = local < 1 ? 1 - Math.pow(1 - local, 3) : 1;
        const s = slot.s * pop;
        _e.set(0.05, slot.rot, Math.sin(i + this.clock.elapsedTime * 1.2) * 0.08);
        _q.setFromEuler(_e);
        _m.compose(slot.pos, _q, new THREE.Vector3(s, s, s));
        this.crowd.setMatrixAt(i, _m);
      });
      this.crowd.instanceMatrix.needsUpdate = true;
      this._crowdShown = this.crowdReveal > 0.001;
    }
  }

  /** swap what the bear is hugging: shrink out → rebuild shape in color → pop in */
  setHeld(kind, color = '#FF3D8F', immediate = false) {
    if (kind === this.heldKind && color === this.heldColor) return;
    this.heldKind = kind;
    this.heldColor = color;
    // every call supersedes the last: a two-beat swap still in flight, or a
    // queued one, must not land its OLD item on top of this one (that is how
    // the About heart used to turn into the cup after a fast scroll)
    const seq = (this._swapSeq = (this._swapSeq || 0) + 1);
    const apply = () => {
      this.heart.clear();
      const built = buildHeld(kind, color);
      this.heart.add(built.group);
      this.heart.rotation.set(...built.rot);
      this.heldBase = built.s * MODEL_SCALE;
    };
    if (immediate) {
      this._pendingHeld = null;
      if (this._pendingTimer) { clearTimeout(this._pendingTimer); this._pendingTimer = null; }
      gsap.killTweensOf(this, 'heldScale');
      apply();
      this.heldScale = 1;
      return;
    }
    // ONE beat: the POW covers the swap — new item is already there when the
    // burst fires, then it settles with an elastic pop. Swaps closer than
    // 900 ms apart are queued so fast scrolling never machine-guns POWs.
    const now = performance.now();
    const since = now - (this._lastSwap || 0);
    if (since < 900) {
      this._pendingHeld = [kind, color];
      // roll back the bookkeeping so the queued call passes the guard
      this.heldKind = null;
      if (!this._pendingTimer) {
        this._pendingTimer = setTimeout(() => {
          this._pendingTimer = null;
          const p = this._pendingHeld;
          this._pendingHeld = null;
          if (p) this.setHeld(p[0], p[1]);
        }, 900 - since);
      }
      return;
    }
    this._lastSwap = now;
    // beat 1: the old item shrinks away · beat 2: POW, the new one pops in
    gsap.to(this, {
      heldScale: 0, duration: 0.32, ease: 'back.in(1.7)', overwrite: 'auto',
      onComplete: () => {
        if (seq !== this._swapSeq) return; // superseded
        apply();
        this.heldScale = 0.4;
        gsap.to(this, { heldScale: 1, duration: 0.7, ease: 'elastic.out(1, 0.45)', overwrite: 'auto' });
        const at = new THREE.Vector3();
        this.heart.getWorldPosition(at);
        this.trail?.comic(color, at);
        this.jelly.v += 3.0;
        this.pop = 1.08;
        gsap.to(this, { pop: 1, duration: 0.8, ease: 'elastic.out(1, 0.4)', overwrite: 'auto' });
      },
    });
  }

  /** wet-candy gloss: clearcoat up, roughness down */
  setShiny(on) {
    if (!this.bearMat || this._shiny === on) return;
    this._shiny = on;
    gsap.to(this.bearMat, {
      clearcoat: on ? 1 : 0.8,
      roughness: on ? 0.05 : 0.14,
      duration: 0.5,
      ease: 'power2.out',
      overwrite: 'auto',
    });
  }

  /** cycle the bear's flavor with a burst + jelly wobble */
  cycleFlavor() {
    this.flavorIndex = (this.flavorIndex + 1) % FLAVORS.length;
    const f = FLAVORS[this.flavorIndex];
    const from = { c: this.bearMat.color.clone(), a: this.bearMat.attenuationColor.clone() };
    const to = { c: new THREE.Color(f.color), a: new THREE.Color(f.attenuation) };
    const mix = { t: 0 };
    gsap.to(mix, {
      t: 1, duration: 0.45, ease: 'power2.out',
      onUpdate: () => {
        this.bearMat.color.copy(from.c).lerp(to.c, mix.t);
        this.bearMat.attenuationColor.copy(from.a).lerp(to.a, mix.t);
      },
      onComplete: () => applyFlavor(this.bearMat, f),
    });
    this.trail?.setColor(f.trail);
    this.trail?.burst(f.trail);
    this.jelly.v += 3.2;
    this.pop = 1.12;
    gsap.to(this, { pop: 1, duration: 0.9, ease: 'elastic.out(1, 0.4)', overwrite: 'auto' });
  }

  /** entrance: headline lines rise first, bear pops in from 80% with a wobble */
  entrance() {
    if (!this.hero) return;
    this.headline?.entrance();
    gsap.from(this.hero.scale, {
      x: 0.8, y: 0.8, z: 0.8,
      duration: 1.4,
      ease: 'elastic.out(1, 0.55)',
    });
    this.jelly.v += 2.5;
  }

  tick(_time, deltaMs) {
    if (!this.running || !this.hero) return;
    const t = this.clock.getElapsedTime();
    const dt = Math.min(0.1, (deltaMs || 16.7) / 1000);

    // time-based exponential smoothing — frame-rate independent, liquid
    const kPointer = 1 - Math.exp(-2.6 * dt);
    const kPose = 1 - Math.exp(-3.4 * dt);

    this.pointer.x += (this.pointerTarget.x - this.pointer.x) * kPointer;
    this.pointer.y += (this.pointerTarget.y - this.pointer.y) * kPointer;

    // ScrollTrigger scrub drives the keyframe choreography
    const prevProgress = this.scrollProgress || 0;
    this.scrollProgress = getScrollProgress();
    if (this.chapters?.length) this.readAbout(); else this.about = { chapter: -1, t: 0 };
    // one-page home: the home choreography plays out over the part ABOVE the
    // story, then the story's own choreography takes over (blended at the seam)
    this.storyMix = 0;
    if (this.page === 'home' && this.chapters?.length) {
      const first = this.chapters[0].getBoundingClientRect();
      const last = this.chapters[this.chapters.length - 1].getBoundingClientRect();
      const storyTop = first.top + (window.scrollY || 0);
      const vh = innerHeight;
      this.scrollProgress = THREE.MathUtils.clamp((window.scrollY || 0) / Math.max(1, storyTop - vh), 0, 1);
      const storyP = THREE.MathUtils.clamp((vh * 0.5 - first.top) / Math.max(1, last.bottom - first.top), 0, 1);
      this.storyMix = THREE.MathUtils.smoothstep(vh * 0.5 - first.top, -vh * 0.4, 0);
      resolvePose('home', this.scrollProgress, this.targetPose);
      if (this.storyMix > 0) {
        const story = this._storyPose ??= { pos: new THREE.Vector3(), rot: new THREE.Euler(), scale: 1 };
        resolvePose('about', storyP, story);
        const tp = this.targetPose, k = this.storyMix;
        tp.pos.lerp(story.pos, k);
        tp.rot.set(
          THREE.MathUtils.lerp(tp.rot.x, story.rot.x, k),
          THREE.MathUtils.lerp(tp.rot.y, story.rot.y, k),
          THREE.MathUtils.lerp(tp.rot.z, story.rot.z, k),
        );
        this.targetPose.scale = THREE.MathUtils.lerp(this.targetPose.scale, story.scale, this.storyMix);
      }
    } else {
      resolvePose(this.page, this.scrollProgress, this.targetPose);
    }

    // scroll-velocity → lean + jelly impulse: the bear reads as mass
    const vel = (this.scrollProgress - prevProgress) / Math.max(dt, 1e-3);
    this.lean = (this.lean || 0) + (THREE.MathUtils.clamp(vel * 0.55, -0.25, 0.25) - (this.lean || 0)) * (1 - Math.exp(-3 * dt));
    this.jelly.v += THREE.MathUtils.clamp(vel * 0.9, -1.2, 1.2) * dt * 6;

    // jelly spring (under-damped) → squash & stretch
    const K = 60, Cd = 5.5;
    this.jelly.v += (-K * this.jelly.x - Cd * this.jelly.v) * dt;
    this.jelly.x += this.jelly.v * dt;
    const jelly = THREE.MathUtils.clamp(this.jelly.x, -0.35, 0.35);

    // chase the target — smooths scrubbing and morphs across routes
    this.pose.pos.lerp(this.targetPose.pos, kPose);
    this.pose.rot.x += (this.targetPose.rot.x - this.pose.rot.x) * kPose;
    this.pose.rot.y += (this.targetPose.rot.y - this.pose.rot.y) * kPose;
    this.pose.rot.z += (this.targetPose.rot.z - this.pose.rot.z) * kPose;
    this.pose.scale += (this.targetPose.scale - this.pose.scale) * kPose;

    const p = this.pose;

    // adapt to narrow viewports: pull the bear in and shrink it a little;
    // in portrait, lift it into the upper half so the copy below stays clear
    const aspect = this.camera.aspect;
    const fitX = THREE.MathUtils.clamp(aspect / 1.55, 0.42, 1);
    const fitS = THREE.MathUtils.clamp(0.55 + 0.45 * (aspect / 1.55), 0.55, 1);
    const portrait = THREE.MathUtils.smoothstep(1.0 - aspect, 0, 0.3); // 0 landscape → 1 tall phone
    // per-page phone layout: home = mid-right under the headline; about = upper
    // half above the bottom-anchored copy; everything else = peeking in from
    // the right edge so titles stay clear
    let mobX = 0.6, mobY = 0.9, mobS = 0.7;
    // home on a tall phone: the headline spans the full width, so the bear
    // can't interleave — it PARKS in its own band under the last line, riding
    // the page scroll like the headline, sized to fit above the fold. Only
    // once it has scrolled off the top does it re-enter small at the right
    // edge (peeking over the case list), so it never sits behind the intro copy.
    let park = null;
    const inStory = (this.storyMix || 0) > 0.5;
    if (this.page === 'home' && !inStory) {
      let listed = THREE.MathUtils.smoothstep(this.scrollProgress, 0.05, 0.2);
      if (this.headline && portrait >= 0.5 && this.bear.scale.y > 0.01) {
        const botPx = this.headline.bottomEdgePx();
        if (Number.isFinite(botPx)) {
          const h = innerHeight, w = innerWidth;
          const dist = this.camera.position.z;
          const p2w = 2 * dist * Math.tan(THREE.MathUtils.degToRad(this.camera.fov / 2)) / h;
          if (!this.bearUnitH) {
            const size = new THREE.Box3().setFromObject(this.bear).getSize(new THREE.Vector3());
            this.bearUnitH = size.y / this.bear.scale.y;
          }
          // parked = the page's rest keyframe (no tumble): scale, depth, rotation
          const rest = this._restPose ??= { pos: new THREE.Vector3(), rot: new THREE.Vector3(), scale: 1 };
          resolvePose(this.page, 0, rest);
          const sParked = 1.05 * rest.scale * fitS * THREE.MathUtils.lerp(1, 0.85, portrait);
          const gap = 22, safe = 28;
          const availPx = h - botPx - gap - safe;
          const needPx = this.bearUnitH * sParked / p2w;
          const fit = THREE.MathUtils.clamp(availPx / Math.max(needPx, 1), 0.45, 1);
          const bearPx = needPx * fit;
          const bottomPx = botPx + gap + bearPx; // parked bear's bottom, screen px
          // hand over once the parked bear has left through the top
          listed = THREE.MathUtils.smoothstep(-bottomPx, 0, 260);
          park = {
            x: (0.57 - 0.5) * w * p2w,
            y: (h / 2 - (botPx + gap + bearPx / 2)) * p2w,
            fit, listed, rest, botPx,
          };
        }
      }
      mobX = (park ? 1.3 : 0.95) * listed;
      mobY = park ? 0.05 : 0.3;
      mobS = park ? 0.85 - 0.35 * listed : 0.8 - 0.25 * listed;
    } else if (this.page === 'about' || inStory) {
      mobX = 0.25; mobY = 1.05; mobS = 0.72;
    }
    const pFitS = THREE.MathUtils.lerp(1, mobS, portrait);

    // route-transition hop: rise + spin, then settle into the new pose
    const lift = this.lift;
    const hop = Math.sin(lift * Math.PI) * 0.9;

    let bx = p.pos.x * fitX + portrait * mobX;
    if (this.rigVis) bx += this.rigVis * 4.0; // case build: the prop has the stage
    // capture mode: no headline to interleave with — sit right-of-center on
    // wide frames, dead center on square/portrait frames
    if (env.noui) bx = aspect > 1.2 ? 0.45 : 0;
    // home, at rest, landscape: the bear comes to the text — its shoulder
    // overlaps the end of the widest line (the Dogstudio interleave), so wide
    // screens don't open a void between headline and bear
    if (this.page === 'home' && this.headline && portrait < 0.5 && !inStory) {
      const rest = 1 - THREE.MathUtils.smoothstep(this.scrollProgress, 0.0, 0.14);
      const right = this.headline.rightEdge();
      if (Number.isFinite(right)) {
        const halfW = 1.15 * (this.bear.scale.x || 1);
        const want = right + halfW + 0.04; // shoulder just kisses the line end, no letters hidden
        if (want < bx) bx = THREE.MathUtils.lerp(bx, want, rest);
      }
    }
    let by = p.pos.y + hop + portrait * mobY;
    let bz = p.pos.z, rx = p.rot.x, ry = p.rot.y, rz = p.rot.z, pScale = p.scale;
    // scroll-built case, last chapter: the bear hops back in, faces the
    // camera and takes the cup (Stage.buildEffects sets buildReturn)
    if (this.buildReturn > 0) {
      const k = this.buildReturn;
      const kx = THREE.MathUtils.lerp(1.35 * fitX, 0.45, portrait);
      const ky = THREE.MathUtils.lerp(-0.2, 0.35, portrait);
      bx = THREE.MathUtils.lerp(bx, kx, k);
      by = THREE.MathUtils.lerp(by, ky, k) + Math.sin(k * Math.PI) * 1.1;
      bz = THREE.MathUtils.lerp(bz, 0, k);
      ry = THREE.MathUtils.lerp(ry, 0.05, k) + Math.sin(k * Math.PI) * 1.2; // a spin on the way in
      rz = THREE.MathUtils.lerp(rz, 0, k);
      pScale = THREE.MathUtils.lerp(pScale, 0.86, k);
    }
    if (park) {
      const k = park.listed;
      bx = THREE.MathUtils.lerp(park.x, bx, k);
      by = THREE.MathUtils.lerp(park.y + hop, by, k);
      bz = THREE.MathUtils.lerp(park.rest.pos.z, bz, k);
      rx = THREE.MathUtils.lerp(park.rest.rot.x, rx, k);
      ry = THREE.MathUtils.lerp(park.rest.rot.y, ry, k);
      rz = THREE.MathUtils.lerp(park.rest.rot.z, rz, k);
      pScale = THREE.MathUtils.lerp(park.rest.scale * park.fit, pScale, k);
    }
    // portrait-home filler: blue star rides the scroll with the headline
    if (this.mobStar) {
      this.mobStar.visible = !!park && !env.noprops;
      if (park) {
        const h = innerHeight, w = innerWidth;
        const p2w = 2 * this.camera.position.z * Math.tan(THREE.MathUtils.degToRad(this.camera.fov / 2)) / h;
        const topPx = this.headline.topEdgePx();
        const cy = topPx + (park.botPx - topPx) * 0.42; // beside lines 2–3
        this.mobStar.position.set(
          (0.80 - 0.5) * w * p2w,
          (h / 2 - cy) * p2w + Math.sin(t * 0.9) * 0.03,
          0.1,
        );
        const ss = Math.min(w * 0.2, 150) * p2w * (1 - park.listed * 0.3);
        this.mobStar.scale.setScalar(ss);
        // faces the camera; a lazy wobble so it never turns edge-on
        this.mobStar.rotation.set(0.12 + Math.sin(t * 0.5) * 0.1, 0.3 + Math.sin(t * 0.6) * 0.4, 0.25 + Math.sin(t * 0.45) * 0.18);
      }
    }
    this.bear.position.set(bx, by, bz);
    this.bear.rotation.set(
      rx + this.pointer.y * 0.45 + Math.sin(t * 0.7) * 0.03,
      ry + this.pointer.x * 0.9 + this.spin,
      rz + Math.sin(t * 0.5) * 0.02 + (this.lean || 0),
    );
    const s = 1.05 * pScale * fitS * pFitS * (this.pop || 1);
    const breathe = Math.sin(t * 1.6) * 0.012;
    this.bear.scale.set(
      s * (1 - jelly * 0.55 - breathe),
      s * (1 + jelly + breathe),
      s * (1 - jelly * 0.55 - breathe),
    );

    // held candy: the heart beats a slow lub-dub (~43 bpm); other candies
    // just breathe. heldScale handles the swap pop.
    if (this.heart) {
      let beat = 0;
      if (this.heldKind === 'heart') {
        const period = 1.4;
        const ph = ((t % period) / period) * Math.PI * 2;
        const thump = (o) => Math.pow(Math.max(0, Math.sin(ph - o)), 10);
        beat = (thump(0) + 0.55 * thump(1.1)) * 0.07;
      } else {
        beat = Math.sin(t * 1.3) * 0.02;
      }
      this.heart.scale.setScalar((this.heldBase || 0.56 * MODEL_SCALE) * (1 + beat) * this.heldScale * (this.heldVisible ?? 1));
    }

    // about-page story adjustments (no-ops on other pages)
    this.aboutEffects(dt);
    this.buildEffects(t, dt);

    // props: slow drift + depth-weighted pointer parallax
    this.props.update(t);
    this.props.group.position.x = p.pos.x * 0.25 + this.pointer.x * -0.6;
    // tall phones: spread the cloud outward so candies peek in from the edges
    // instead of sitting behind the copy
    // while a scroll-built prop owns the stage the candy cloud clears out
    this._propsGone = (this._propsGone ?? 0) + ((this.rigVis || 0) - (this._propsGone ?? 0)) * (1 - Math.exp(-5 * dt));
    const propsK = 1 - THREE.MathUtils.smoothstep(this._propsGone, 0, 1);
    this.props.group.scale.setScalar(THREE.MathUtils.lerp(1, 2.0, portrait) * Math.max(0.001, propsK));
    this.props.group.visible = propsK > 0.01 && !env.noprops;
    // the near upper-left heart lands right behind เราทำให้/โปรดักต์ on phones — drop it there
    this.props.group.children[0].visible = portrait < 0.5 || env.noprops;
    this.props.group.position.y = -this.pointer.y * -0.45 + Math.sin(t * 0.2) * 0.05;
    this.props.group.rotation.y = this.pointer.x * 0.12;

    this.bg?.update(t, this.scrollProgress, this.sat ?? 1);
    this.headline?.update(window.scrollY || 0);
    this.trail?.update(t, dt);
    if (this.sparkles) {
      const c = new THREE.Vector3();
      this.heart.getWorldPosition(c);
      this.sparkles.update(t, dt, c, this.sparkleLevel || 0);
    }

    this.frameHooks?.forEach((fn) => fn(t));
    this.renderer.render(this.scene, this.camera);
    this.frames = (this.frames || 0) + 1;
    window.__frames = this.frames;

    // ?freeze=1 — once the entrance has settled, stop the loop on a clean
    // rest frame (bear + heart still, props parked) for screenshots
    if (env.freeze && !this.frozen && t > 4.5 && this.frames > 40) {
      this.frozen = true;
      this.running = false;
      window.__frozen = true;
    }
  }

  /** screen-space bounding box of the bear (+ held item), in CSS px */
  bearBox(padding = 0.08) {
    const box = new THREE.Box3().setFromObject(this.bear);
    const pts = [];
    for (let i = 0; i < 8; i++) {
      pts.push(new THREE.Vector3(
        i & 1 ? box.max.x : box.min.x,
        i & 2 ? box.max.y : box.min.y,
        i & 4 ? box.max.z : box.min.z,
      ).project(this.camera));
    }
    const w = innerWidth, h = innerHeight;
    let x0 = Infinity, y0 = Infinity, x1 = -Infinity, y1 = -Infinity;
    for (const p of pts) {
      const sx = (p.x + 1) / 2 * w, sy = (1 - p.y) / 2 * h;
      x0 = Math.min(x0, sx); x1 = Math.max(x1, sx);
      y0 = Math.min(y0, sy); y1 = Math.max(y1, sy);
    }
    const pad = Math.max(x1 - x0, y1 - y0) * padding;
    return { x: x0 - pad, y: y0 - pad, width: x1 - x0 + pad * 2, height: y1 - y0 + pad * 2 };
  }

  addFrameHook(fn) {
    (this.frameHooks ??= []).push(fn);
  }
}

export async function boot({ onAsset, onReady }) {
  const canvas = document.getElementById('gl');
  stage = new Stage(canvas);
  window.__stage = stage;
  setDimHook((amount) => stage.setDim(amount));

  await stage.build(onAsset);
  await stage.headline?.ready;

  stage.renderer.render(stage.scene, stage.camera);
  document.documentElement.classList.add('gl-ready');
  onLoaderDone(() => stage.entrance());
  onReady();
}
