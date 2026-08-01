// Neon writing trail — a glowing green ribbon streamed from the pen's
// tip as it moves (the "invisible line" of the brief, made visible).
// Ring buffer of recent tip positions → camera-facing triangle strip
// with additive blending; bright core, soft edges, fades with age.
// A small glow sprite rides the tip and flares with writing speed.

import * as THREE from 'three';

const NEON = '#39ff14';   // neon green — swap here to re-tint the ink
const MAX = 72;           // trail samples
const LIFE = 2.0;         // seconds before a sample fades out
const WIDTH = 0.065;      // ribbon half-width at the head

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
    float across = 1.0 - abs(vInfo.x);           /* 0 edge → 1 core */
    float core = pow(across, 3.0);
    float alpha = across * (1.0 - vInfo.y * 0.7) * vInfo.z * uIntensity;
    /* neon: saturated color body + near-white hot core.
       NOTE: no premultiply — additive blending already scales by srcAlpha */
    vec3 col = uColor * (0.55 + 1.9 * core) + vec3(0.75, 1.0, 0.8) * core * 0.5;
    gl_FragColor = vec4(col, alpha);
  }
`;

function glowTexture() {
  const s = 128;
  const c = document.createElement('canvas');
  c.width = c.height = s;
  const ctx = c.getContext('2d');
  const g = ctx.createRadialGradient(s / 2, s / 2, 0, s / 2, s / 2, s / 2);
  g.addColorStop(0, 'rgba(220,255,225,1)');
  g.addColorStop(0.18, 'rgba(90,255,80,0.85)');
  g.addColorStop(0.5, 'rgba(57,255,20,0.25)');
  g.addColorStop(1, 'rgba(57,255,20,0)');
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, s, s);
  return new THREE.CanvasTexture(c);
}

export function buildTrail(stage) {
  const pts = []; // ring: [{pos, t}], head first

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
      uColor: { value: new THREE.Color(NEON) },
      uIntensity: { value: 0 },
    },
    transparent: true,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
    // camera-facing ribbon: winding flips as the path bends — never cull
    side: THREE.DoubleSide,
  });

  const mesh = new THREE.Mesh(geo, mat);
  mesh.frustumCulled = false;
  mesh.renderOrder = 6;
  stage.scene.add(mesh);

  const glow = new THREE.Sprite(new THREE.SpriteMaterial({
    map: glowTexture(),
    blending: THREE.AdditiveBlending,
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
    /** re-ink the neon (click-to-recolor follows the pen's theme) */
    setColor(hex) {
      const c = new THREE.Color(hex);
      mat.uniforms.uColor.value.copy(c);
      glow.material.color.copy(c).lerp(new THREE.Color('#ffffff'), 0.35);
    },
    /** radial light burst at the pen — click feedback */
    burst(hex) {
      const b = new THREE.Sprite(new THREE.SpriteMaterial({
        map: glow.material.map,
        color: new THREE.Color(hex),
        blending: THREE.AdditiveBlending,
        depthTest: false,
        transparent: true,
        opacity: 0.9,
      }));
      b.renderOrder = 8;
      b.position.copy(stage.nib.position);
      b.scale.setScalar(0.6);
      stage.scene.add(b);
      const s = { v: 0.6 };
      const anim = { o: 0.9 };
      const tick = () => {
        s.v += 0.14;
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
      // world position of the writing tip (geometry is centered, len 3)
      stage.nib.updateMatrixWorld();
      _tip.set(0, -1.5, 0);
      stage.nib.localToWorld(_tip);

      // speed → neon flares while the pen is actually writing
      const speed = hasPrev ? _prev.distanceTo(_tip) / Math.max(dt, 1e-3) : 0;
      _prev.copy(_tip);
      hasPrev = true;
      const target = THREE.MathUtils.clamp(speed * 1.6, 0, 1);
      intensity += (target - intensity) * (1 - Math.exp(-6 * dt));
      mat.uniforms.uIntensity.value = intensity;

      // sample the tip
      if (!pts.length || pts[0].pos.distanceTo(_tip) > 0.006) {
        pts.unshift({ pos: _tip.clone(), t });
        if (pts.length > MAX) pts.pop();
      } else {
        pts[0].pos.copy(_tip);
      }
      while (pts.length && t - pts[pts.length - 1].t > LIFE) pts.pop();

      // rebuild the camera-facing strip
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

      // tip glow: subtle idle pulse, flares with speed
      glow.position.copy(_tip);
      glow.material.opacity = 0.14 + intensity * 0.55 + Math.sin(t * 2.2) * 0.03;
      glow.scale.setScalar(0.22 + intensity * 0.28);
    },
  };
}
