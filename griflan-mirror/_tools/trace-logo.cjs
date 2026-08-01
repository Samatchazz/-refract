/**
 * แปลงไฟล์โลโก้ (png/jpg) → subpath เวกเตอร์ พร้อมผังว่าชิ้นไหนอยู่ในชิ้นไหน
 * ใช้: node trace-logo.cjs <ไฟล์ภาพ> <ชื่อออก>
 * เช่น: node trace-logo.cjs "C:/.../planc-eyes.png" eyes
 *   → เขียน ../logo-lab/_logo_eyes.json
 */
const potrace = require('potrace');
const fs = require('fs');
const path = require('path');

const src = process.argv[2];
const name = process.argv[3] || 'out';
if (!src || !fs.existsSync(src)) {
  console.error('ไม่เจอไฟล์:', src);
  console.error('ใช้: node trace-logo.cjs <ไฟล์ภาพ> <ชื่อออก>');
  process.exit(1);
}

const opts = { threshold: 128, turdSize: 2, optCurve: true, optTolerance: 0.2, alphaMax: 1.0 };

potrace.trace(src, opts, (err, svg) => {
  if (err) { console.error('trace ล้มเหลว:', err.message); process.exit(1); }
  const m = /<path[^>]*d="([^"]*)"/.exec(svg);
  if (!m) { console.error('ไม่เจอ path ในผลลัพธ์'); process.exit(1); }
  const vb = /viewBox="([^"]*)"/.exec(svg);
  const subs = m[1].split(/(?=M)/).map(s => s.trim()).filter(Boolean);

  const out = { source: path.basename(src), viewBox: vb ? vb[1] : null, subpaths: subs };
  const dest = path.join(__dirname, '..', 'logo-lab', `_logo_${name}.json`);
  fs.writeFileSync(dest, JSON.stringify(out));

  console.log('ไฟล์ต้นทาง :', src);
  console.log('viewBox    :', out.viewBox);
  console.log('subpath    :', subs.length, 'ชิ้น');
  console.log('ขนาด       :', (JSON.stringify(subs).length / 1024).toFixed(1), 'KB (ก่อนบีบ)');
  console.log('เขียนไปที่  :', dest);
  console.log('\nดูผลได้ที่ http://localhost:5500/logo-lab/eye-lab.html?src=' + name);
});
