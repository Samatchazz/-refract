// GL background (brief §1): ink-in-water gradient — deep charcoal into
// blue-black with slow-blooming darker plumes. 2-stop gradient +
// low-frequency fbm noise in one shader, ~3% film grain to kill banding.
// Animated by time + scroll (spec §4.2).

import * as THREE from 'three';

const vert = /* glsl */ `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position.xy, 1.0, 1.0); // fullscreen, ignore camera
  }
`;

const frag = /* glsl */ `
  precision highp float;
  varying vec2 vUv;
  uniform float uTime;
  uniform float uScroll;
  uniform vec3 uColA;   /* ink black  */
  uniform vec3 uColB;   /* midnight ink blue */

  /* value noise + fbm — low frequency, cheap */
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

    /* 2-stop gradient: charcoal upper-left → blue-black lower-right,
       breathing slowly and drifting with scroll */
    float g = smoothstep(-0.2, 1.15, uv.x * 0.55 + (1.0 - uv.y) * 0.75 + uScroll * 0.25);
    vec3 col = mix(uColA, uColB, g * 0.55);

    /* slow-blooming darker ink plumes */
    float t = uTime * 0.035;
    float plume = fbm(uv * 2.1 + vec2(t * 0.8, -t) + fbm(uv * 3.0 - t) * 0.55);
    col *= 1.0 - smoothstep(0.45, 0.95, plume) * 0.5;

    /* faint blue bloom where plumes thin out */
    col += uColB * smoothstep(0.5, 0.05, plume) * 0.10;

    /* ~3%% film grain */
    float grain = hash(uv * vec2(1920.0, 1080.0) + fract(uTime) * 61.7) - 0.5;
    col += grain * 0.03;

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
      uColA: { value: new THREE.Color('#101014') },
      uColB: { value: new THREE.Color('#4A5578') },
    },
    depthWrite: false,
    depthTest: false,
  });
  const mesh = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), mat);
  mesh.frustumCulled = false;
  mesh.renderOrder = -1;
  return {
    mesh,
    update(t, scroll) {
      mat.uniforms.uTime.value = t;
      mat.uniforms.uScroll.value = scroll;
    },
  };
}
