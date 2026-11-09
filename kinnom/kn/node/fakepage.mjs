// fakepage.mjs — stands in for Mat's wp-admin tab in tests: the real toolkit (runtime.boot, offline) + the real page glue
// (bridge-page.js), talking to a real bridge server, against the in-memory mock WordPress. Nothing here is used in production.
import { boot } from './runtime.mjs';
import { pageScript, ORIGIN } from './bridge.mjs';

export async function fakePage({ bridge, fixtures, stateDir }) {
  const real = globalThis.fetch;
  const { W } = await boot({ mode: 'offline', stateDir, fixtures });
  const toolkitFetch = globalThis.fetch; // knFetch installed by boot
  // route: desk URLs → real network (with the Origin header a browser would send); WordPress paths → the guarded offline transport
  globalThis.fetch = (url, init = {}) => {
    const u = String(url);
    if (u.startsWith('http://127.0.0.1')) return real(u, { ...init, headers: { ...(init.headers || {}), Origin: ORIGIN } });
    return toolkitFetch(u, init);
  };
  // image upload adapter for the mock: pretend the bytes arrived and register the media item (the real adapter is phase 3)
  W.__up1 = async (fid, name, alt) => { const m = await W.__api('media', { method: 'POST', body: `mock-bytes:${fid}` }); await W.__api('media/' + m.id, { method: 'POST', body: JSON.stringify({ alt_text: alt, title: alt }) }); return { id: m.id, url: m.source_url }; };
  globalThis.location = { href: `${ORIGIN}/wp-admin/`, origin: ORIGIN };
  // a real page load starts with a clean window; in one test process the previous fake page's loop object would otherwise be reused
  if (globalThis.__KB) { globalThis.__KB.stop = true; delete globalThis.__KB; }
  const ret = (0, eval)(pageScript(bridge.token, bridge.port));
  return { W, ret, stop: () => { W.__KB.stop = true; } };
}
