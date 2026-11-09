// Sugar trail — a soft candy-colored ribbon streamed from the bear's paw
// as it moves. Ring buffer of recent paw positions → camera-facing
// triangle strip; pale core, soft edges, fades with age. A small glow
// sprite rides the paw and flares with speed. Normal blending (additive
// would vanish on a light background).

import * as THREE from 'three';
import { PAW } from './bear.js';

const MAX = 72;           // trail samples
const LIFE = 1.8;         // seconds before a sample fades out
const WIDTH = 0.075;      // ribbon half-width at the head

const vert = /* glsl */ `
  attribute vec3 aInfo;   /* x: side −1/+1, y: along 0..1, z: age fade */
  varying vec3 vInfo;
  void main() {
    vInfo = aInfo;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const frag = /* glsl */ `
  precision highp float;
  uniform vec3 uColor;
  uniform float uIntensity;
  varying vec3 vInfo;
  void main() {
    float across = 1.0 - abs(vInfo.x);
    float core = pow(across, 2.0);
    float alpha = across * (1.0 - vInfo.y * 0.75) * vInfo.z * uIntensity * 0.9;
    vec3 col = mix(uColor, vec3(1.0), core * 0.55);
    gl_FragColor = vec4(col, alpha);
  }
`;

function glowTexture() {
  const s = 128;
  const c = document.createElement('canvas');
  c.width = c.height = s;
  const ctx = c.getContext('2d');
  const g = ctx.createRadialGradient(s / 2, s / 2, 0, s / 2, s / 2, s / 2);
  g.addColorStop(0, 'rgba(255,255,255,1)');
  g.addColorStop(0.25, 'rgba(255,255,255,0.7)');
  g.addColorStop(0.6, 'rgba(255,255,255,0.18)');
  g.addColorStop(1, 'rgba(255,255,255,0)');
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, s, s);
  return new THREE.CanvasTexture(c);
}

/** comic starburst: spiky radial shape, color fill, dark outline, white core */
function starburstTexture(hex) {
  const s = 256;
  const c = document.createElement('canvas');
  c.width = c.height = s;
  const ctx = c.getContext('2d');
  const cx = s / 2, cy = s / 2;
  const spikes = 14;
  ctx.beginPath();
  for (let i = 0; i < spikes * 2; i++) {
    const r = i % 2 ? s * 0.26 : s * 0.47 * (0.85 + 0.15 * Math.sin(i * 2.3));
    const a = (i / (spikes * 2)) * Math.PI * 2;
    i ? ctx.lineTo(cx + Math.cos(a) * r, cy + Math.sin(a) * r) : ctx.moveTo(cx + Math.cos(a) * r, cy + Math.sin(a) * r);
  }
  ctx.closePath();
  ctx.fillStyle = hex;
  ctx.fill();
  ctx.lineWidth = 7;
  ctx.lineJoin = 'round';
  ctx.strokeStyle = '#2B1735';
  ctx.stroke();
  // white inner flash
  ctx.beginPath();
  for (let i = 0; i < spikes * 2; i++) {
    const r = i % 2 ? s * 0.12 : s * 0.22;
    const a = (i / (spikes * 2)) * Math.PI * 2 + 0.1;
    i ? ctx.lineTo(cx + Math.cos(a) * r, cy + Math.sin(a) * r) : ctx.moveTo(cx + Math.cos(a) * r, cy + Math.sin(a) * r);
  }
  ctx.closePath();
  ctx.fillStyle = '#ffffff';
  ctx.fill();
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  return t;
}

/** small four-point sparkle star with a dark outline */
function sparkleTexture() {
  const s = 96;
  const c = document.createElement('canvas');
  c.width = c.height = s;
  const ctx = c.getContext('2d');
  const cx = s / 2, cy = s / 2;
  ctx.beginPath();
  for (let i = 0; i < 8; i++) {
    const r = i % 2 ? s * 0.12 : s * 0.46;
    const a = (i / 8) * Math.PI * 2;
    i ? ctx.lineTo(cx + Math.cos(a) * r, cy + Math.sin(a) * r) : ctx.moveTo(cx + Math.cos(a) * r, cy + Math.sin(a) * r);
  }
  ctx.closePath();
  ctx.fillStyle = '#ffffff';
  ctx.fill();
  ctx.lineWidth = 4;
  ctx.lineJoin = 'round';
  ctx.strokeStyle = '#2B1735';
  ctx.stroke();
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  return t;
}

const burstTexCache = {};
let sparkleTex = null;
/** shared four-point sparkle texture (built once) */
export function getSparkleTexture() {
  return (sparkleTex ??= sparkleTexture());
}

/** twinkling, bouncing sparkles that orbit a point (the heart as it "gets cared for") */
export function buildSparkles(stage, count = 12) {
  sparkleTex ??= sparkleTexture();
  const group = new THREE.Group();
  const items = [];
  for (let i = 0; i < count; i++) {
    const sp = new THREE.Sprite(new THREE.SpriteMaterial({ map: sparkleTex, depthTest: false, transparent: true, opacity: 0 }));
    sp.renderOrder = 9;
    const a = (i / count) * Math.PI * 2;
    const r = 0.95 + (i % 3) * 0.28;
    items.push({ sp, a, r, phase: i * 1.37, speed: 2.4 + (i % 4) * 0.5 });
    group.add(sp);
  }
  stage.scene.add(group);
  let level = 0;
  return {
    group,
    /** center = world position to orbit; intensity 0..1 (lerped) */
    update(t, dt, center, intensity) {
      level += (intensity - level) * (1 - Math.exp(-4 * dt));
      group.position.copy(center);
      group.position.z += 0.6;
      group.visible = level > 0.01;
      if (!group.visible) return;
      for (const it of items) {
        const bounce = Math.abs(Math.sin(t * it.speed + it.phase));       // bouncy hop
        const twinkle = 0.55 + 0.45 * Math.abs(Math.sin(t * 5.3 + it.phase * 2.1));
        const wob = Math.sin(t * 0.7 + it.phase) * 0.12;
        it.sp.position.set(
          Math.cos(it.a + wob) * it.r * level,
          Math.sin(it.a + wob) * it.r * 0.8 * level + bounce * 0.22,
          (Math.sin(it.phase) * 0.3),
        );
        it.sp.scale.setScalar((0.07 + 0.11 * twinkle) * level);
        it.sp.material.opacity = level * (0.35 + 0.65 * twinkle);
        it.sp.material.rotation = t * 0.8 + it.phase;
      }
    },
  };
}

export function buildTrail(stage, initialColor) {
  const pts = [];

  const positions = new Float32Array(MAX * 2 * 3);
  const info = new Float32Array(MAX * 2 * 3);
  const indices = [];
  for (let i = 0; i < MAX - 1; i++) {
    const a = i * 2;
    indices.push(a, a + 1, a + 2, a + 1, a + 3, a + 2);
  }

  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.BufferAttribute(positions, 3).setUsage(THREE.DynamicDrawUsage));
  geo.setAttribute('aInfo', new THREE.BufferAttribute(info, 3).setUsage(THREE.DynamicDrawUsage));
  geo.setIndex(indices);
  geo.setDrawRange(0, 0);

  const mat = new THREE.ShaderMaterial({
    vertexShader: vert,
    fragmentShader: frag,
    uniforms: {
      uColor: { value: new THREE.Color(initialColor) },
      uIntensity: { value: 0 },
    },
    transparent: true,
    blending: THREE.NormalBlending,
    depthWrite: false,
    side: THREE.DoubleSide,
  });

  const mesh = new THREE.Mesh(geo, mat);
  mesh.frustumCulled = false;
  mesh.renderOrder = 6;
  stage.scene.add(mesh);

  const glow = new THREE.Sprite(new THREE.SpriteMaterial({
    map: glowTexture(),
    color: new THREE.Color(initialColor),
    blending: THREE.NormalBlending,
    depthTest: false,
    transparent: true,
    opacity: 0,
  }));
  glow.renderOrder = 7;
  glow.scale.setScalar(0.3);
  stage.scene.add(glow);

  const _tip = new THREE.Vector3();
  const _prev = new THREE.Vector3();
  const _dir = new THREE.Vector3();
  const _toCam = new THREE.Vector3();
  const _side = new THREE.Vector3();
  const _lastSide = new THREE.Vector3(0, 1, 0);
  let intensity = 0;
  let hasPrev = false;

  return {
    pts,
    mesh,
    /** re-tint the sugar (click-to-recolor follows the bear's flavor) */
    setColor(hex) {
      const c = new THREE.Color(hex);
      mat.uniforms.uColor.value.copy(c);
      glow.material.color.copy(c).lerp(new THREE.Color('#ffffff'), 0.25);
    },
    /** comic "POW" at a world position: starburst pops + sparkles fly out */
    comic(hex, at) {
      const tex = (burstTexCache[hex] ??= starburstTexture(hex));
      sparkleTex ??= sparkleTexture();
      const star = new THREE.Sprite(new THREE.SpriteMaterial({ map: tex, depthTest: false, transparent: true, opacity: 1 }));
      star.renderOrder = 9;
      star.position.copy(at);
      star.position.z += 0.9;
      star.material.rotation = Math.random() * 0.6 - 0.3;
      star.scale.setScalar(0.1);
      stage.scene.add(star);
      const sparks = [];
      for (let i = 0; i < 6; i++) {
        const sp = new THREE.Sprite(new THREE.SpriteMaterial({ map: sparkleTex, depthTest: false, transparent: true }));
        sp.renderOrder = 10;
        sp.position.copy(star.position);
        const a = (i / 6) * Math.PI * 2 + Math.random() * 0.5;
        const sp2 = 1.2 + Math.random() * 0.8;
        sp.userData.v = new THREE.Vector3(Math.cos(a) * sp2, Math.sin(a) * sp2 + 0.4, 0);
        sp.userData.spin = (Math.random() - 0.5) * 6;
        sp.scale.setScalar(0.06 + Math.random() * 0.07);
        stage.scene.add(sp);
        sparks.push(sp);
      }
      let age = 0;
      let last = performance.now();
      const tick = () => {
        const now = performance.now();
        const dt = Math.min(0.05, (now - last) / 1000);
        last = now;
        age += dt;
        // starburst: snap out fast, hold, then vanish
        const grow = age < 0.12 ? age / 0.12 : 1;
        const ease = 1 - Math.pow(1 - grow, 3);
        star.scale.setScalar(0.1 + ease * 0.5);
        star.material.opacity = age < 0.22 ? 1 : Math.max(0, 1 - (age - 0.22) / 0.1);
        for (const sp of sparks) {
          sp.position.addScaledVector(sp.userData.v, dt);
          sp.userData.v.y -= 6 * dt;
          sp.userData.v.multiplyScalar(0.96);
          sp.material.rotation += sp.userData.spin * dt;
          sp.material.opacity = Math.max(0, 1 - age / 0.7);
        }
        if (age < 0.75) requestAnimationFrame(tick);
        else {
          stage.scene.remove(star);
          star.material.dispose();
          for (const sp of sparks) { stage.scene.remove(sp); sp.material.dispose(); }
        }
      };
      tick();
    },
    /** candy burst at the bear — click feedback */
    burst(hex) {
      const b = new THREE.Sprite(new THREE.SpriteMaterial({
        map: glow.material.map,
        color: new THREE.Color(hex),
        blending: THREE.NormalBlending,
        depthTest: false,
        transparent: true,
        opacity: 0.85,
      }));
      b.renderOrder = 8;
      b.position.copy(stage.bear.position);
      b.scale.setScalar(1.2);
      stage.scene.add(b);
      const s = { v: 1.2 };
      const anim = { o: 0.85 };
      const tick = () => {
        s.v += 0.22;
        anim.o *= 0.86;
        b.scale.setScalar(s.v);
        b.material.opacity = anim.o;
        if (anim.o > 0.02) requestAnimationFrame(tick);
        else {
          stage.scene.remove(b);
          b.material.dispose();
        }
      };
      tick();
    },
    update(t, dt) {
      stage.bear.updateMatrixWorld();
      _tip.copy(PAW);
      stage.bear.localToWorld(_tip);

      const speed = hasPrev ? _prev.distanceTo(_tip) / Math.max(dt, 1e-3) : 0;
      _prev.copy(_tip);
      hasPrev = true;
      const target = THREE.MathUtils.clamp(speed * 1.4, 0, 1);
      intensity += (target - intensity) * (1 - Math.exp(-6 * dt));
      mat.uniforms.uIntensity.value = intensity;

      if (!pts.length || pts[0].pos.distanceTo(_tip) > 0.006) {
        pts.unshift({ pos: _tip.clone(), t });
        if (pts.length > MAX) pts.pop();
      } else {
        pts[0].pos.copy(_tip);
      }
      while (pts.length && t - pts[pts.length - 1].t > LIFE) pts.pop();

      const n = pts.length;
      for (let i = 0; i < n; i++) {
        const p = pts[i].pos;
        const q = pts[Math.min(i + 1, n - 1)].pos;
        _dir.subVectors(q, p);
        if (_dir.lengthSq() < 1e-8) _side.copy(_lastSide);
        else {
          _toCam.subVectors(stage.camera.position, p).normalize();
          _side.crossVectors(_dir.normalize(), _toCam).normalize();
          _lastSide.copy(_side);
        }
        const along = n > 1 ? i / (n - 1) : 0;
        const fade = THREE.MathUtils.clamp(1 - (t - pts[i].t) / LIFE, 0, 1);
        const w = WIDTH * (1 - along * 0.75);
        const o = i * 6;
        positions[o] = p.x + _side.x * w;
        positions[o + 1] = p.y + _side.y * w;
        positions[o + 2] = p.z + _side.z * w;
        positions[o + 3] = p.x - _side.x * w;
        positions[o + 4] = p.y - _side.y * w;
        positions[o + 5] = p.z - _side.z * w;
        info[o] = 1; info[o + 1] = along; info[o + 2] = fade;
        info[o + 3] = -1; info[o + 4] = along; info[o + 5] = fade;
      }
      geo.attributes.position.needsUpdate = true;
      geo.attributes.aInfo.needsUpdate = true;
      geo.setDrawRange(0, Math.max(0, n - 1) * 6);

      glow.position.copy(_tip);
      glow.material.opacity = 0.12 + intensity * 0.5 + Math.sin(t * 2.2) * 0.03;
      glow.scale.setScalar(0.22 + intensity * 0.3);
    },
  };
}
