const fs = require('fs');
for (const f of ['index.html', '_payload.json']) {
  let t = fs.readFileSync(f, 'utf8');
  const before = (t.match(/\\(?=[฀-๿])/g) || []).length;
  t = t.replace(/\\(?=[฀-๿])/g, '');
  fs.writeFileSync(f, t);
  console.log(f, 'stray backslashes removed:', before);
}
const html = fs.readFileSync('index.html', 'utf8');
const i = html.indexOf('__NUXT_DATA__');
const s = html.indexOf('>', i) + 1;
const e = html.indexOf('</script>', s);
try { JSON.parse(html.slice(s, e)); console.log('NUXT_DATA JSON: VALID'); } catch (err) { console.log('STILL BROKEN:', err.message.slice(0, 200)); }
try { JSON.parse(fs.readFileSync('_payload.json', 'utf8')); console.log('_payload.json: VALID'); } catch (err) { console.log('payload BROKEN:', err.message.slice(0, 200)); }
