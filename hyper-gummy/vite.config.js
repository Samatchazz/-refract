import { defineConfig } from 'vite';
import { resolve } from 'path';
import { readdirSync } from 'fs';

// every top-level *.html is a page (site pages + generated case-*.html)
const input = Object.fromEntries(
  readdirSync(__dirname)
    .filter((f) => f.endsWith('.html') && f !== 'art.html') // art.html = dev-only renderer
    .map((f) => [f.replace(/\.html$/, ''), resolve(__dirname, f)]),
);

export default defineConfig({
  base: process.env.SITE_BASE || '/',
  build: {
    target: 'es2020',
    rollupOptions: { input },
  },
});
