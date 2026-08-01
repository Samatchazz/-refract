// GL stage — the ONE persistent canvas (spec §3). Created once, never
// destroyed on navigation; the scene morphs between pages.
// Phase 1: nib + matcap + pointer lerp. Later phases bolt on the
// background shader, scroll choreography, GL typography and route poses.

import * as THREE from 'three';
import gsap from 'gsap';
import { loadMatcaps, buildTintVariants } from './matcaps.js';
import { loadNibGeometry } from './nib.js';
import { buildProps } from './props.js';
import { buildBackground } from './background.js';
import { resolvePose } from './choreography.js';
import { buildHeadline } from './headline.js';
import { buildTrail } from './trail.js';
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
    this.renderer.setClearColor(0x101014, 1);

    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(35, 1, 0.1, 60);
    this.camera.position.set(0, 0, 7);

    // pointer tracking (spec §4.2) — lerped, never snaps
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
    // `pose` chases it — so scroll scrubs AND route changes both morph,
    // never cut (spec §6.6)
    this.page = document.querySelector('[data-gl-page]')?.dataset.glPage || 'home';
    this.pose = {
      pos: new THREE.Vector3(1.18, 0.05, 0),
      rot: new THREE.Euler(-0.08, -0.15, -0.5),
      scale: 1,
    };
    this.targetPose = {
      pos: new THREE.Vector3().copy(this.pose.pos),
      rot: new THREE.Euler().copy(this.pose.rot),
      scale: 1,
    };
    this.lift = 0;       // 0..1 route-transition lift-off blend
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
    // backgrounded tabs can report 0×0 — keep the last real size
    if (w < 2 || h < 2) return;
    // cap effective resolution ≈2K (spec §8)
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

  /** dim the GL scene (overlays 25%, media-panel focus 20% — spec §6.2) */
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
    const [matcaps, nibGeo] = await Promise.all([
      loadMatcaps(onAsset),
      loadNibGeometry(onAsset),
    ]);
    this.matcaps = matcaps;

    // --- ink-in-water background, drawn first every frame ---
    this.bg = buildBackground();
    this.scene.add(this.bg.mesh);

    // --- hero group: nib + drifting props ---
    this.hero = new THREE.Group();

    this.nibMat = new THREE.MeshMatcapMaterial({
      matcap: matcaps.dark,
      normalMap: matcaps.normal,
      normalScale: new THREE.Vector2(0.35, 0.35),
    });
    this.nib = new THREE.Mesh(nibGeo, this.nibMat);
    this.nib.scale.setScalar(1.15);
    this.hero.add(this.nib);

    this.props = buildProps(matcaps);
    this.hero.add(this.props.group);

    this.scene.add(this.hero);

    // --- GL display headline (interleaves with the nib) ---
    this.headline = buildHeadline(this, this._onAsset);

    // --- neon writing trail streamed from the pen tip ---
    this.trail = buildTrail(this);

    // --- click the pen → recolor + light burst (their click-the-dog trick) ---
    this.variants = buildTintVariants(matcaps.dark);
    this.tintIndex = 0;
    this.raycaster = new THREE.Raycaster();
    addEventListener('click', (e) => {
      if (e.target.closest('a, button')) return;
      const ndc = new THREE.Vector2(
        (e.clientX / innerWidth) * 2 - 1,
        -(e.clientY / innerHeight) * 2 + 1,
      );
      this.raycaster.setFromCamera(ndc, this.camera);
      if (this.raycaster.intersectObject(this.nib).length) this.cycleTint();
    });

    // wet-ink matcap swap on interactive hover / transitions (brief §1)
    document.addEventListener('mouseover', (e) => {
      if (e.target.closest('a, button')) this.setInkwet(true);
    });
    document.addEventListener('mouseout', (e) => {
      if (e.target.closest('a, button')) this.setInkwet(false);
    });

    // case-row media focus dims the scene 20% (spec §6.2)
    document.addEventListener('mouseover', (e) => {
      if (e.target.closest('.case-row')) this.setDim(0.2);
    });
    document.addEventListener('mouseout', (e) => {
      if (e.target.closest('.case-row')) this.setDim(0);
    });
  }

  /** the matcap for the currently selected click-theme */
  currentMatcap() {
    return this.variants?.[this.tintIndex]?.matcap || this.matcaps.dark;
  }

  setInkwet(on) {
    if (!this.nibMat || this._inkwet === on) return;
    this._inkwet = on;
    this.nibMat.matcap = on ? this.matcaps.inkwet : this.currentMatcap();
    this.nibMat.needsUpdate = true;
  }

  /** cycle the pen's color theme with a glow burst + elastic pop */
  cycleTint() {
    this.tintIndex = (this.tintIndex + 1) % this.variants.length;
    const v = this.variants[this.tintIndex];
    if (!this._inkwet) {
      this.nibMat.matcap = v.matcap;
      this.nibMat.needsUpdate = true;
    }
    this.trail?.setColor(v.trail);
    this.trail?.burst(v.trail);
    this.pop = 1.09;
    gsap.to(this, { pop: 1, duration: 0.9, ease: 'elastic.out(1, 0.4)', overwrite: 'auto' });
  }

  /** entrance: GL headline lines rise first, model scales in from 96% (spec §6.1) */
  entrance() {
    if (!this.hero) return;
    this.headline?.entrance();
    gsap.from(this.hero.scale, {
      x: 0.96, y: 0.96, z: 0.96,
      duration: 1.6,
      ease: 'power3.out',
    });
  }

  tick(_time, deltaMs) {
    if (!this.running || !this.hero) return;
    const t = this.clock.getElapsedTime();
    const dt = Math.min(0.1, (deltaMs || 16.7) / 1000);

    // time-based exponential smoothing — frame-rate independent.
    // Long, liquid damping (the Dogstudio feel): the model swims after
    // its target rather than snapping to it.
    const kPointer = 1 - Math.exp(-2.6 * dt);
    const kPose = 1 - Math.exp(-3.4 * dt);

    // lerped pointer (visible lag — spec acceptance #1)
    this.pointer.x += (this.pointerTarget.x - this.pointer.x) * kPointer;
    this.pointer.y += (this.pointerTarget.y - this.pointer.y) * kPointer;

    // ScrollTrigger scrub drives the keyframe choreography (spec §4.2)
    const prevProgress = this.scrollProgress || 0;
    this.scrollProgress = getScrollProgress();
    resolvePose(this.page, this.scrollProgress, this.targetPose);

    // scroll-velocity lean: the pen banks into fast scrolls and eases
    // back — motion reads as mass, not as tracking
    const vel = (this.scrollProgress - prevProgress) / Math.max(dt, 1e-3);
    this.lean = (this.lean || 0) + (THREE.MathUtils.clamp(vel * 0.55, -0.22, 0.22) - (this.lean || 0)) * (1 - Math.exp(-3 * dt));

    // chase the target — smooths scrubbing and morphs across routes
    this.pose.pos.lerp(this.targetPose.pos, kPose);
    this.pose.rot.x += (this.targetPose.rot.x - this.pose.rot.x) * kPose;
    this.pose.rot.y += (this.targetPose.rot.y - this.pose.rot.y) * kPose;
    this.pose.rot.z += (this.targetPose.rot.z - this.pose.rot.z) * kPose;
    this.pose.scale += (this.targetPose.scale - this.pose.scale) * kPose;

    const p = this.pose;

    // adapt to narrow viewports: pull the nib in and shrink it a little
    const aspect = this.camera.aspect;
    const fitX = THREE.MathUtils.clamp(aspect / 1.55, 0.42, 1);
    const fitS = THREE.MathUtils.clamp(0.55 + 0.45 * (aspect / 1.55), 0.62, 1);

    // route-transition lift-off: rotate toward vertical + rise (brief §1)
    const lift = this.lift;
    const rotX = p.rot.x * (1 - lift) + -1.35 * lift;
    const rotY = p.rot.y * (1 - lift);
    const rotZ = p.rot.z * (1 - lift);

    this.nib.position.set(p.pos.x * fitX, p.pos.y + lift * 0.9, p.pos.z);
    this.nib.rotation.set(
      rotX + this.pointer.y * 0.55 + Math.sin(t * 0.5) * 0.02,
      rotY + this.pointer.x * 0.9,
      rotZ + Math.sin(t * 0.35) * 0.015 + (this.lean || 0),
    );
    const s = 1.05 * p.scale * fitS * (this.pop || 1);
    this.nib.scale.setScalar(s);

    // props: slow drift + depth-weighted pointer parallax
    this.props.update(t);
    this.props.group.position.x = p.pos.x * 0.25 + this.pointer.x * -0.6;
    this.props.group.position.y = -this.pointer.y * -0.45 + Math.sin(t * 0.2) * 0.05;
    this.props.group.rotation.y = this.pointer.x * 0.12;

    this.bg?.update(t, this.scrollProgress);
    this.headline?.update(window.scrollY || 0);
    this.trail?.update(t, dt);

    this.frameHooks?.forEach((fn) => fn(t));
    this.renderer.render(this.scene, this.camera);
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

  // first frame, then reveal (poster crossfades out via html.gl-ready)
  stage.renderer.render(stage.scene, stage.camera);
  document.documentElement.classList.add('gl-ready');
  onLoaderDone(() => stage.entrance());
  onReady();
}
