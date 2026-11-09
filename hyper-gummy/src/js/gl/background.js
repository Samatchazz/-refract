// GL background: candy-shop gradient — vanilla cream with big soft
// blobs of strawberry, peach, grape and mint drifting like light through
// a jar of gummies. fbm noise + a touch of grain to kill banding.
// Animated by time + scroll.

import * as THREE from 'three';

const vert = /* glsl */ `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position.xy, 1.0, 1.0);
  }
`;

const frag = /* glsl */ `
  precision highp float;
  varying vec2 vUv;
  uniform float uTime;
  uniform float uScroll;
  uniform vec3 uBase;
  uniform vec3 uPink;
  uniform vec3 uPeach;
  uniform vec3 uGrape;
  uniform vec3 uMint;
  uniform float uSat;

  float hash(vec2 p) {
    return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
  }
  float noise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    vec2 u = f * f * (3.0 - 2.0 * f);
    return mix(mix(hash(i), hash(i + vec2(1, 0)), u.x),
               mix(hash(i + vec2(0, 1)), hash(i + vec2(1, 1)), u.x), u.y);
  }
  float fbm(vec2 p) {
    float v = 0.0;
    float a = 0.5;
    for (int i = 0; i < 4; i++) {
      v += a * noise(p);
      p = p * 2.03 + vec2(1.7, 9.2);
      a *= 0.5;
    }
    return v;
  }

  void main() {
    vec2 uv = vUv;
    uv.y += uScroll * 0.35;
    float t = uTime * 0.05;

    vec3 col = uBase;

    float pink  = fbm(uv * 1.7 + vec2(t * 0.9, -t * 0.4));
    float peach = fbm(uv * 2.1 + vec2(-t * 0.6, t * 0.7) + 3.1);
    float grape = fbm(uv * 1.4 + vec2(t * 0.5, t * 0.3) + 7.7);
    float mint  = fbm(uv * 2.5 + vec2(-t * 0.3, -t * 0.8) + 11.3);

    col = mix(col, uPeach, smoothstep(0.42, 0.78, peach) * 0.85);
    col = mix(col, uPink,  smoothstep(0.46, 0.82, pink) * 0.9);
    col = mix(col, uGrape, smoothstep(0.52, 0.86, grape) * 0.8);
    col = mix(col, uMint,  smoothstep(0.55, 0.88, mint) * 0.75);

    /* soft top-left light */
    col += vec3(0.04) * (1.0 - smoothstep(0.0, 1.2, length(vUv - vec2(0.15, 0.85))));

    /* desaturate toward a pale cream (about page: "before we came in") */
    float luma = dot(col, vec3(0.299, 0.587, 0.114));
    col = mix(mix(vec3(luma), uBase, 0.55), col, uSat);

    /* ~2% grain */
    float grain = hash(vUv * vec2(1920.0, 1080.0) + fract(uTime) * 61.7) - 0.5;
    col += grain * 0.02;

    gl_FragColor = vec4(col, 1.0);
  }
`;

export function buildBackground() {
  const mat = new THREE.ShaderMaterial({
    vertexShader: vert,
    fragmentShader: frag,
    uniforms: {
      uTime: { value: 0 },
      uScroll: { value: 0 },
      uBase:  { value: new THREE.Color('#FFF4E8') },
      uPink:  { value: new THREE.Color('#FFC4DC') },
      uPeach: { value: new THREE.Color('#FFD9B8') },
      uGrape: { value: new THREE.Color('#DCCBFF') },
      uMint:  { value: new THREE.Color('#CFF4E2') },
      uSat:   { value: 1 },
    },
    depthWrite: false,
    depthTest: false,
  });
  const mesh = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), mat);
  mesh.frustumCulled = false;
  mesh.renderOrder = -1;
  return {
    mesh,
    update(t, scroll, sat = 1) {
      mat.uniforms.uTime.value = t;
      mat.uniforms.uScroll.value = scroll;
      mat.uniforms.uSat.value = sat;
    },
  };
}
