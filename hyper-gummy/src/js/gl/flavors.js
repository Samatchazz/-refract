// Gummy flavors — one translucent physical material per flavor.
// The bear wears one flavor at a time (click cycles them, the Dogstudio
// "click the dog" trick); props pick their own from the same jar.

import * as THREE from 'three';

export const FLAVORS = [
  { name: 'strawberry', color: '#FF8FBF', attenuation: '#FF3D8F', trail: '#FF7DB8' },
  { name: 'orange',     color: '#FFB07A', attenuation: '#FF7A1F', trail: '#FFB577' },
  { name: 'lime',       color: '#CBF39A', attenuation: '#7ED321', trail: '#D2FF93' },
  { name: 'blueberry',  color: '#9CDFFF', attenuation: '#2FA8FF', trail: '#9FE4FF' },
  { name: 'grape',      color: '#B9A0FF', attenuation: '#7A4BFF', trail: '#C7ABFF' },
  { name: 'lemon',      color: '#FFE58A', attenuation: '#FFC21A', trail: '#FFE98A' },
];

/** translucent, soft-glossy, slightly rubbery — the gummy look.
 *  Light base color + saturated attenuation = color deepens with thickness,
 *  which is exactly how a real gummy reads against light. */
export function gummyMaterial(flavor, overrides = {}) {
  return new THREE.MeshPhysicalMaterial({
    color: new THREE.Color(flavor.color),
    roughness: 0.14,          // glossy, wet-candy shine (reference look)
    metalness: 0,
    transmission: 0.9,
    thickness: 1.4,
    ior: 1.45,
    attenuationColor: new THREE.Color(flavor.attenuation),
    attenuationDistance: 1.5, // saturated in the thick middle, pale at the ears
    clearcoat: 0.8,
    clearcoatRoughness: 0.12,
    envMapIntensity: 1.0,
    ...overrides,
  });
}

export function applyFlavor(mat, flavor) {
  mat.color.set(flavor.color);
  mat.attenuationColor.set(flavor.attenuation);
}
