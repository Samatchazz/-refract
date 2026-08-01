const fs = require('fs'), path = require('path');
const ROOT = __dirname;
// resolve original strings from ORIGINAL backup
const html = fs.readFileSync(path.join(ROOT, '_orig', 'index.html'), 'utf8');
const di = html.indexOf('__NUXT_DATA__'), ds = html.indexOf('>', di) + 1, de = html.indexOf('</script>', ds);
const strs = [];
(function walk(v){ if(typeof v==='string')strs.push(v); else if(Array.isArray(v))v.forEach(walk); else if(v&&typeof v==='object')Object.values(v).forEach(walk); })(JSON.parse(html.slice(ds,de)));
const uniq = [...new Set(strs)];
const byMarker = m => uniq.find(s => s.includes(m) && !s.startsWith('http') && !s.includes('data:image'));

const stripTags = s => s.replace(/<[^>]+>/g,'').replace(/\s+/g,' ').trim();
const toPlanC = s => s.replace(/Plan Z/g,'Plan C').replace(/@planz/g,'@planc').replace(/plan\.z/g,'plan.c');

// [section, element, marker-or-literal, thai, isMarker]
const rows = [
 ['Meta','SEO title','Griflan – Creative Agency for Bold Brands & Digital Design','Plan C – Strategic Algorithm & Identity Consultant',0],
 ['Meta','SEO description','crafting unforgettable brands','',1],
 ['Hero','หัวเรื่องหลัก (flip)','Helping our partners build original Brands that shine.','เปลี่ยนครีเอเตอร์ที่หลงทาง ให้เป็นอาณาจักรของตัวเอง',0],
 ['Hero','คำโปรยข้าง','A strategy-led design studio specializing in laying down the awesome sauce.','ที่ปรึกษาเชิงกลยุทธ์แบบ 1:1 สำหรับ Micro-Influencer ที่ยอดวิวนิ่งสนิท',0],
 ['Intro','พาดหัว','Crafting brands that hit hard.','เราไม่ปั้นคอนเทนต์ เราปั้นอาณาจักร.',0],
 ['Intro','ย่อหน้าอธิบาย','companies that have something worth building','',1],
 ['Services','พาดหัวหมวด','We know what we’re good at!','เรารู้ว่าเราเก่งอะไร!',0],
 ['Services','บริการ 1 — ชื่อ','Branding','Extract',0],
 ['Services','บริการ 1 — คำอธิบาย','just seen, it','',1],
 ['Services','บริการ 2 — ชื่อ','Digital','Engineer',0],
 ['Services','บริการ 2 — คำอธิบาย','favorite canvas','',1],
 ['Services','บริการ 3 — ชื่อ','Motion','Establish',0],
 ['Services','บริการ 3 — คำอธิบาย','love when things move','',1],
 ['Wins','พาดหัว','You win. We grin.','คุณชนะ. เรายิ้ม.',0],
 ['Wins','ข่าว 1','Distributed ventures leads Armadillo','',1],
 ['Wins','ข่าว 2','Plaid Scoops up Cognito','',1],
 ['Wins','ข่าว 3','ADWEEK','',1],
 ['Wins','ข่าว 4','Blockchain security startup raises','',1],
 ['Wins','ข่าว 5','Katy Perry, Nas, and Jason Derulo','',1],
 ['Wins','ข่าว 6','TinyFish AI agent raises','',1],
 ['Wins','ข่าว 7','NeoReach helps 10,000+ creators','',1],
 ['Wins','ข่าว 8','Everest emerges from stealth','',1],
 ['Testimonials','คำรีวิว 1','best design team we have ever worked','',1],
 ['Testimonials','คำรีวิว 2','loved working with the Griflan team','',1],
 ['Testimonials','คำรีวิว 3','wildly creative, professional','',1],
 ['Testimonials','คำรีวิว 4','launching the new Hugo website','',1],
 ['Testimonials','คำรีวิว 5','exponential surge in client acquisition','',1],
 ['Testimonials','คำรีวิว 6','absolutely integral to the success','',1],
 ['Testimonials','คำรีวิว 7','extremely dedicated to delivering','',1],
 ['Testimonials','คำรีวิว 8','thoughtful, collaborative partner','',1],
 ['Testimonials','คำรีวิว 9','ideal creative partner','',1],
 ['Testimonials','คำรีวิว 10','reinforced the value of collaboration','',1],
 ['Testimonials','คำรีวิว 11','epic to work with','',1],
 ['Statement','ปรัชญา (ปิดท้าย)','creative studio at the intersection','',1],
 ['Statement','ปรัชญา (verbatim ลูกค้า)','Forever a part of Griflan','',1],
 ['Footer','สโลแกน','Partnering with ambitious brands & inspiring people.','จับมือกับครีเอเตอร์ที่ทะเยอทะยาน และผู้คนที่น่าจดจำ',0],
 ['UI','ปุ่ม — ผลงาน','Our Work','ดูผลงาน',0],
 ['UI','ปุ่ม — จองเซสชัน','Request a Proposal','จองเซสชันแรก',0],
 ['UI','ปุ่ม — ปรัชญา','Learn About Our Agency','รู้จักปรัชญาของเรา',0],
 ['UI','ปุ่ม — ผลงานทั้งหมด','View All Work','ดูผลงานทั้งหมด',0],
 ['UI','ปุ่ม — บริการทั้งหมด','View Our Services','ดูบริการทั้งหมด',0],
 ['UI','ปุ่ม — ติดต่อ','Let’s Connect','คุยกับเรา',0],
 ['UI','ปุ่ม — ดูรายละเอียด','Learn More','ดูรายละเอียด',0],
 ['UI','ลิงก์ลูกค้า','Recent Clients','ลูกค้าล่าสุด',0],
 ['UI','พาดหัวรีวิว','Client Confessions','คำสารภาพจากลูกค้า',0],
];

const out = rows.map(([section, element, orig, thai, isMarker]) => {
  let en = orig;
  if (isMarker) { const full = byMarker(orig); en = full ? stripTags(full) : '(resolve ไม่เจอ: '+orig+')'; }
  // fill thai for marker rows from _planz-content dyn map (re-declared minimally below)
  return { section, element, en, th: toPlanC(thai) };
});

// pull thai for marker rows from the pour script's dyn array
const pour = fs.readFileSync(path.join(ROOT,'_planz-content.cjs'),'utf8');
const dynMatch = pour.match(/const dyn = \[([\s\S]*?)\n\];/)[1];
const dynPairs = [...dynMatch.matchAll(/\['([^']*(?:\.[^']*)*)',\s*'([\s\S]*?)'\],?\n/g)].map(m=>[m[1],m[2]]);
const thaiByMarker = {}; dynPairs.forEach(([mk,th])=>thaiByMarker[mk]=th);
rows.forEach((r,i)=>{ if(r[4] && !out[i].th){ const th=thaiByMarker[r[2]]; if(th) out[i].th = toPlanC(th.replace(/\'/g,"'")); } });

fs.writeFileSync(path.join(ROOT,'_content-table.json'), JSON.stringify(out,null,1));
console.log('rows:', out.length);
console.log('missing EN:', out.filter(r=>r.en.includes('resolve ไม่เจอ')).length);
console.log('missing TH:', out.filter(r=>!r.th).length);
