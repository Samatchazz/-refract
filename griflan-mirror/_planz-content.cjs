/* Pour Plan Z content into the Griflan mirror.
   Replaces copy in: index.html (SSR HTML + inline __NUXT_DATA__), _payload.json, _nuxt/*.js
   Run:  node _planz-content.cjs        (backups: *.orig / _orig/) */
const fs = require('fs');
const path = require('path');

const ROOT = __dirname;
const jsFiles = fs.readdirSync(path.join(ROOT, '_nuxt')).filter(f => f.endsWith('.js')).map(f => '_nuxt/' + f);
const FILES = ['index.html', '_payload.json', ...jsFiles];

/* ---------- backups (once) ---------- */
if (!fs.existsSync(path.join(ROOT, '_orig'))) {
  fs.mkdirSync(path.join(ROOT, '_orig'));
  for (const f of FILES) {
    const dest = path.join(ROOT, '_orig', f.replace(/[\\/]/g, '__'));
    fs.copyFileSync(path.join(ROOT, f), dest);
  }
  console.log('backups → _orig/');
}

/* ---------- collect exact long strings from NUXT_DATA (marker → exact source string) ---------- */
const html = fs.readFileSync(path.join(ROOT, 'index.html'), 'utf8');
const di = html.indexOf('__NUXT_DATA__');
const ds = html.indexOf('>', di) + 1;
const de = html.indexOf('</script>', ds);
const strs = [];
(function walk(v) { if (typeof v === 'string') strs.push(v); else if (Array.isArray(v)) v.forEach(walk); else if (v && typeof v === 'object') Object.values(v).forEach(walk); })(JSON.parse(html.slice(ds, de)));
const uniq = [...new Set(strs)];
const byMarker = m => uniq.find(s => s.includes(m) && !s.startsWith('http') && !s.includes('data:image'));

/* [marker, thai replacement] — full source string resolved via byMarker */
const dyn = [
  // intro paragraph
  ['companies that have something worth building', 'เราไม่ใช่เอเจนซีรับทำคอนเทนต์ ไม่ใช่คอร์สสอนยิงแอด และไม่ใช่กูรูขายสูตรโกงไวรัล — เราคือที่ปรึกษาเชิงกลยุทธ์แบบ 1:1 สำหรับ Micro-Influencer ที่กำลังหลงทาง หมดไฟ หรือยอดวิวนิ่งสนิท เราเปลี่ยนเกมที่คาดเดาไม่ได้แบบ "หมากรุก" ให้เป็นการบริหารความเสี่ยงแบบ "โป๊กเกอร์" ที่เฉียบขาด'],
  // services descriptions
  ['just seen, it', 'สกัดแก่นแท้ของตัวตน (Core Identity) ที่เป็นของจริง ไม่ต้องฝืน ไม่เบิร์นเอาท์ — จิตวิทยาการค้นหาตัวตนแบบ 1:1 ที่ทำให้คุณเขียน พูด และเล่าเป็นเสียงของตัวเองทุกคำ เพราะตัวตนที่แข็งแรงจากภายใน คือสิ่งเดียวที่อัลกอริทึมลอกเลียนไม่ได้'],
  ['favorite canvas', 'วางโครงสร้างสคริปต์แบบ Minto Pyramid และจังหวะคลิปที่ตรึงคนดูให้อยู่หมัด — ออกแบบโครงสร้างรายการที่ Machine Learning หลงรัก เลิกเดาใจระบบ แล้วหันมาออกแบบให้ระบบต้องเลือกคุณ'],
  ['love when things move', 'สร้างวงจรแฟนคลับ (Fandom Loop) ให้อัลกอริทึมทำงานแทนคุณ — เปลี่ยนผู้ติดตามขาจรให้เป็นแฟนด้อมที่รอดู แชร์ และปกป้องคุณ จนกลายเป็น Micro-Sovereignty อาณาจักรที่เป็นของคุณจริงๆ'],
  // testimonials
  ['best design team we have ever worked', 'ก่อนเจอ Plan Z เราถ่ายคลิปตามเทรนด์จนหมดไฟ พอสกัดตัวตนออกมาได้จริงๆ ถึงเข้าใจว่าที่ผ่านมาเราไม่ได้ขี้เกียจ — เราแค่ฝืนเป็นคนอื่นมาตลอด'],
  ['loved working with the Griflan team', 'เขาไม่เคยเขียนสคริปต์ให้เราเลยสักบรรทัด แต่โครงที่วางให้ทำให้เราเขียนเองได้เร็วขึ้นสามเท่า และเป็นเสียงของเราเองทุกคำ'],
  ['wildly creative, professional', 'ยอดวิวนิ่งมาปีกว่า พอปรับโครงรายการตามที่วิเคราะห์กันในเซสชัน อัลกอริทึมเหมือนเพิ่งมองเห็นเราเป็นครั้งแรก'],
  ['launching the new Hugo website', 'สองเดือนแรกไม่มีอะไรเปลี่ยน เดือนที่สาม engagement ขึ้นสามเท่าและไม่ลงมาอีกเลย — เพราะคราวนี้มันสร้างอยู่บนตัวตนจริง ไม่ใช่เทรนด์'],
  ['exponential surge in client acquisition', 'จากครีเอเตอร์ที่คิดจะเลิกทำ กลายเป็นมีแฟนด้อมเล็กๆ ที่รอดูทุกคลิป ภายในปีเดียว'],
  ['absolutely integral to the success', 'Plan Z ไม่ได้สอนให้เราวิ่งตามอัลกอริทึม แต่สอนให้อัลกอริทึมวิ่งตามเรา — Fandom Loop ที่เขาพูดถึงมันทำงานจริง'],
  ['extremely dedicated to delivering', 'ทุกเซสชันเหมือนคุยกับคนที่รู้จักเรามานานสิบปี ทั้งที่เพิ่งเจอกันเป็นครั้งที่สอง'],
  ['thoughtful, collaborative partner', 'สิ่งที่ได้ไม่ใช่ยอด follower แต่เป็นความกล้าที่จะเป็นตัวเองหน้ากล้อง — แล้วยอดมันตามมาเอง'],
  ['ideal creative partner', 'เราเคยซื้อคอร์ส ซื้อโฆษณา จ้างทีมตัดต่อ — ไม่มีอะไรเวิร์กเท่านั่งสกัดตัวตนกับ Plan Z สามเซสชัน'],
  ['reinforced the value of collaboration', 'Micro-Sovereignty ที่เขาพูดถึงมีอยู่จริง ตอนนี้แฟนคลับดูแลคอมมูนิตี้กันเองโดยเราไม่ต้องอยู่ตลอด'],
  ['epic to work with', 'เลิกเช่าพื้นที่อัลกอริทึม แล้วมาเป็นเจ้าของอาณาจักรตัวเอง — ประโยคแรกที่เขาพูดกับเรา และมันเปลี่ยนทุกอย่าง'],
  // suzy welch long role
  ['NYU Stern Professor', 'ครีเอเตอร์สายท่องเที่ยว | อดีตพนักงานออฟฟิศที่ลาออกมาเดินป่า | เจ้าของอาณาจักรแฟนด้อม 40,000 คน'],
  // ticker wins
  ['Distributed ventures leads Armadillo', '@ครัวหลังบ้าน โตจาก 8K เป็น 210K follower ใน 10 เดือน'],
  ['Plaid Scoops up Cognito', 'คลิปแรกหลังปรับตัวตนของ @หมอยิ้มเล่าเคส แตะ 2.4M วิว'],
  ['ADWEEK', '@สายเดินป่า ปิดดีลสปอนเซอร์รายปีรายแรก หลังปั้นตัวตนได้ 6 เดือน'],
  ['Blockchain security startup raises', '@นักอ่านตัวยง เปิด membership เดือนแรกมีผู้สมัคร 1,200 คน'],
  ['Katy Perry, Nas, and Jason Derulo', 'Engagement เฉลี่ยของลูกค้า Plan Z สูงกว่าค่ากลางอุตสาหกรรม 4 เท่า'],
  ['TinyFish AI agent raises', '@ครูตุลย์เล่าฟิสิกส์ กลายเป็นเสียงหลักของเด็ก ม.ปลาย ทั้งไทม์ไลน์'],
  ['NeoReach helps 10,000+ creators', '@ช่างภาพเงียบๆ กลับมาถ่ายรูปอีกครั้ง หลังหมดไฟไปสองปี'],
  ['Everest emerges from stealth', 'ลูกค้า Plan Z รุ่นแรกทั้ง 12 คน ยังทำคอนเทนต์อยู่ครบทุกคน'],
  // statement + memorial slot → locked philosophy
  ['creative studio at the intersection', 'Plan Z คือที่ปรึกษา ณ จุดตัดระหว่างจิตวิทยาการค้นหาตัวตนกับวิศวกรรมข้อมูล — เปลี่ยนคนทำคอนเทนต์ที่หลงทาง ให้เป็นเจ้าของอาณาจักรของตัวเอง'],
  ['Forever a part of Griflan', 'เราอยู่ในสปอตไลท์ตั้งแต่ก่อนจะมีคำว่าคอนเทนต์ ตั้งแต่หนังสือเฉพาะทางเล่มหนา เว็บไซต์ของนักสัญจรเว็บ ตลอดจนเว็บบอร์ดที่พักพิงของผู้คนมากหน้าหลายตา และการมาถึงของ Social Media ที่การเป็นตัวตนที่แตกต่างนั้นสำคัญมากกว่าทุกสิ่ง'],
  // meta description
  ['crafting unforgettable brands', 'Plan Z คือที่ปรึกษาเชิงกลยุทธ์แบบ 1:1 สำหรับ Micro-Influencer — ผสมจิตวิทยาการค้นหาตัวตนเข้ากับวิศวกรรมอัลกอริทึม'],
];

const pairs = [];
for (const [marker, to] of dyn) {
  const from = byMarker(marker);
  if (!from) { console.log('⚠ marker not found:', marker); continue; }
  pairs.push([from, to]);
}

/* ---------- static literal pairs (longest/most specific first) ---------- */
pairs.push(
  // hero payload <p> (JSON-escaped variant auto-generated below)
  ['<p>Helping our partners build original bands that <em>shine.</em></p>', '<p>เปลี่ยนครีเอเตอร์ที่หลงทาง ให้เป็นอาณาจักรของ<em>ตัวเอง</em></p>'],
  // hero aside
  ['<p><span>A strategy-led brand<br>studio specializing in laying<br>down the awesome sauce</span></p>', '<p><span>ที่ปรึกษาเชิงกลยุทธ์แบบ 1:1<br>ผสมจิตวิทยาการค้นหาตัวตน<br>เข้ากับวิศวกรรมอัลกอริทึม<br>สำหรับครีเอเตอร์</span></p>'],
  ['A strategy-led design studio specializing in laying down the awesome sauce.', 'ที่ปรึกษาเชิงกลยุทธ์แบบ 1:1 สำหรับ Micro-Influencer ที่ยอดวิวนิ่งสนิท'],
  // intro h2
  ['<p>Crafting brands<br>that hit hard.</p>', '<p>เราไม่ปั้นคอนเทนต์<br>เราปั้นอาณาจักร.</p>'],
  // titles
  ['Griflan – Creative Agency for Bold Brands & Digital Design', 'Plan Z – Strategic Algorithm & Identity Consultant'],
  ['Griflan – Creative Agency for Bold Brands &amp; Digital Design', 'Plan Z – Strategic Algorithm &amp; Identity Consultant'],
  // you win. we grin.
  ['<em>You</em> win.<br>We <em>grin</em>.', '<em>คุณ</em>ชนะ.<br>เรา<em>ยิ้ม</em>.'],
  ['e("em",null,"You"),d(" win. "),e("br"),d("We "),e("em",null,"grin"),d(".")', 'e("em",null,"คุณ"),d("ชนะ. "),e("br"),d("เรา"),e("em",null,"ยิ้ม"),d(".")'],
  // client confessions
  ['>Client<br><em>Confessions</em>', '>คำสารภาพ<br><em>จากลูกค้า</em>'],
  ['Me("Client"),a("br"),a("em",null,"Confessions")', 'Me("คำสารภาพ"),a("br"),a("em",null,"จากลูกค้า")'],
  // recent clients
  ['fe("Recent "),L("br"),fe("Clients")', 'fe("ลูกค้า "),L("br"),fe("ล่าสุด")'],
  ['>Recent <br>Clients<', '>ลูกค้า <br>ล่าสุด<'],
  // services heading
  ['fe("We know what "),L("br"),fe("we\'re good at!")', 'fe("เรารู้ว่าเรา "),L("br"),fe("เก่งอะไร!")'],
  ['We know what <br>we\'re good at!', 'เรารู้ว่าเรา <br>เก่งอะไร!'],
  [' We know what we\'re good at! ', ' เรารู้ว่าเราเก่งอะไร! '],
  // buttons
  ['label:"Our Work"', 'label:"ดูผลงาน"'],
  ['label:"Request a Proposal"', 'label:"จองเซสชันแรก"'],
  ['label:"Learn About Our Agency"', 'label:"รู้จักปรัชญาของเรา"'],
  ['label:"View All Work"', 'label:"ดูผลงานทั้งหมด"'],
  ['label:"View Our Services"', 'label:"ดูบริการทั้งหมด"'],
  ['label:"Let\'s Connect"', 'label:"คุยกับเรา"'],
  ['fe("Learn More",-1)', 'fe("ดูรายละเอียด",-1)'],
  ['S("Join our workshop",-1)', 'S("จองเซสชันแรก",-1)'],
  // footer
  ['Partnering with ambitious brands & inspiring people.', 'จับมือกับครีเอเตอร์ที่ทะเยอทะยาน และผู้คนที่น่าจดจำ'],
  ['Partnering with ambitious brands &amp; inspiring people.', 'จับมือกับครีเอเตอร์ที่ทะเยอทะยาน และผู้คนที่น่าจดจำ'],
  ['856.816.6159', 'LINE @planz'],
  ['610.952.1398', 'IG @plan.z'],
  ['hello@griflan.com', 'hello@planz.example'],
  // service names (quoted JSON tokens)
  ['"Branding"', '"Extract"'],
  ['"Digital"', '"Engineer"'],
  ['"Motion"', '"Establish"'],
  // work-grid tags (quoted JSON tokens)
  ['"A.I."', '"Identity"'],
  ['"B2B"', '"Fandom Loop"'],
  ['"B2C"', '"Algorithm"'],
  ['"SaaS"', '"สายความรู้"'],
  ['"E-Commerce"', '"สายอาหาร"'],
  ['"AI Focused"', '"สายสุขภาพ"'],
  ['"Technology"', '"สายเทค"'],
  ['"Venture Capital"', '"สายการเงิน"'],
  ['"Healthcare"', '"สายฟิตเนส"'],
  ['"Education"', '"สายการศึกษา"'],
  ['"Marketing"', '"สายไลฟ์สไตล์"'],
  ['"Food"', '"สายอาหาร"'],
  // case names (longest first)
  ['Barrow Street Nursery School', '@หมอยิ้มเล่าเคส'],
  ['Five Pathways test', '@อ่านให้ฟังก่อนนอน'],
  ['Five Pathways', '@อ่านให้ฟังก่อนนอน'],
  ['Vincent Van Dough', '@วาดเส้นวันหยุด'],
  ['In Revenue Capital', '@ปลูกเองกินเอง'],
  ['Portal To Bitcoin', '@ช่างซ่อมของเก่า'],
  ['Dogelon Mars', '@เย็บผ้าเล่าชีวิต'],
  ['Barrow Street', '@ภาษาญี่ปุ่นวันละคำ'],
  ['New Engen', '@นักอ่านตัวยง'],
  ['Suzy Welch', '@สายเดินป่า'],
  ['TinyFish', '@ครูตุลย์เล่าฟิสิกส์'],
  ['Upshop', '@ครัวหลังบ้าน'],
  ['Prosupps', '@ช่างภาพเงียบๆ'],
  ['ProSupps', '@ช่างภาพเงียบๆ'],
  ['Altgage', '@เล่าเรื่องเมือง'],
  ['AOTM', '@บ้านต้นไม้ของยาย'],
  ['Armadillo', '@วิ่งช้าๆ กับหมอเมย์'],
  ['Audius', '@ช่างไม้วันอาทิตย์'],
  ['Brainsave', '@กาแฟคนขี้เหงา'],
  ['Cly-Del', '@สวนผักหลังคอนโด'],
  ['Cognito', '@เกมเก่าเล่าใหม่'],
  ['DashQ', '@ประวัติศาสตร์ข้างถนน'],
  ['Elevate', '@ครัวริมคลอง'],
  ['Everest', '@เทรนเนอร์ข้างบ้าน'],
  ['Halborn', '@สเก็ตช์ทุกเช้า'],
  ['Hugo', '@หมากรุกริมทาง'],
  ['Neoreach', '@โค้ชวิ่งมาราธอน'],
  ['NeoReach', '@โค้ชวิ่งมาราธอน'],
  ['OpenHome', '@ครูสอนว่ายน้ำ'],
  ['Shareum', '@เล่านิทานพื้นบ้าน'],
  ['Solana', '@บาริสต้าหลังบ้าน'],
  ['Stax.ai', '@นักสะสมแสตมป์'],
  ['STP Federal', '@เชฟมือใหม่'],
  ['Techspeed', '@ภาพยนตร์เก่าเล่าใหม่'],
  ['TechSpeed', '@ภาพยนตร์เก่าเล่าใหม่'],
  ['Mew', '@แมวน้อยนักเดินทาง'],
  // testimonial author names
  ['@phobosdei', '@ครูตุลย์เล่าฟิสิกส์'],
  ['Ashley Warren', 'ต้นข้าว'],
  ['Ryan Keisel', 'หมอเมย์'],
  ['Yuri Pereira', 'บิว'],
  ['Matan Slagter', 'กานต์'],
  ['Vidya Plainfield', 'แพรว'],
  ['Shannon Hill', 'มายด์'],
  ['Mike Weber', 'ปั้น'],
  ['Nate Towers', 'กล้า'],
  ['Jeff Mziray', 'เฟิร์น'],
  // testimonial roles
  ['Director of Enrollment', 'ครีเอเตอร์สายอาหาร'],
  ['Chief Growth Officer', 'ครีเอเตอร์สายเกม'],
  ['Sr. Director of Marketing', 'ครีเอเตอร์สายงานคราฟต์'],
  ['Member of the Board', 'ครีเอเตอร์สายภาษา'],
  ['Marketing & Growth', 'ครีเอเตอร์สายไลฟ์สไตล์'],
  ['Marketing &amp; Growth', 'ครีเอเตอร์สายไลฟ์สไตล์'],
);

/* ---------- hero flip words in JS bundles (contextual) ---------- */
const heroPairs = [
  ['>Helping</span>', '>เปลี่ยน</span>'],
  ['},"Helping")', '},"เปลี่ยน")'],
  ['>Brands</span>', '>อาณาจักร</span>'],
  ['},"brands")', '},"อาณาจักร")'],
  ['>shine.</span>', '>ตัวเอง.</span>'],
  ['},"shine.")', '},"ตัวเอง.")'],
  ['js-i-chars" data-v-fcd5b36b>that</span>', 'js-i-chars" data-v-fcd5b36b>ของ</span>'],
  ['js-i-chars">that</span>', 'js-i-chars">ของ</span>'],
  ['L("span",null,"brands.",-1)', 'L("span",null,"ที่ยอดวิวนิ่ง",-1)'],
];
pairs.push(...heroPairs);

/* hero "our partners <br...>build original" — regex (br may carry data-v attr) */
const regexPairs = [
  [/our partners (<br[^>]*>)build original/g, 'ครีเอเตอร์ที่หลงทาง $1ให้เป็น'],
  [/"[^"]{0,220}for clients all over the world\."/g, '"เราช่วย Micro-Influencer สกัดตัวตน วางโครงสร้าง และสร้างแฟนด้อมของตัวเองอยู่ทั่วประเทศ"'],
  [/>[^<]{0,200}brand experiences worldwide\.</g, '>เปลี่ยนครีเอเตอร์ที่หลงทาง ให้เป็นเจ้าของอาณาจักรของตัวเอง<'],
];

/* ---------- apply ---------- */
const esc = s => s.replace(/</g, '\\u003C');
let grand = 0;
for (const f of FILES) {
  const p = path.join(ROOT, f);
  let t = fs.readFileSync(p, 'utf8');
  let count = 0;
  for (const [from, to] of pairs) {
    for (const [F, T] of [[from, to], [esc(from), esc(to)]]) {
      if (F === from && T === to && esc(from) === from) { /* no tags: single pass */ }
      const parts = t.split(F);
      if (parts.length > 1) { count += parts.length - 1; t = parts.join(T); }
      if (esc(from) === from) break; // no < in source → skip escaped pass
    }
  }
  for (const [re, to] of regexPairs) {
    t = t.replace(re, m => { count++; return m.replace(re, to); });
    // also escaped variant for JSON regions
    const reEsc = new RegExp(re.source.replace(/</g, '\\\\u003C').replace(/>/g, '>'), re.flags);
    t = t.replace(reEsc, m => { count++; return m.replace(reEsc, to.replace(/</g, '\\u003C')); });
  }
  if (count) { fs.writeFileSync(p, t); console.log(f, '→', count, 'replacements'); grand += count; }
}
console.log('TOTAL:', grand);
