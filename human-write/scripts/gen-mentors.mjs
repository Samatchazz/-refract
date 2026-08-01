// One-shot generator for /mentor/<slug>.html — run: node scripts/gen-mentors.mjs
import { writeFileSync, mkdirSync } from 'node:fs';
import { resolve } from 'node:path';

const SQUIGGLE = `<svg viewBox="0 0 120 12" preserveAspectRatio="none" aria-hidden="true"><path d="M2 8c10-6 18-6 28 0s18 6 28 0 18-6 28 0 18 6 32-2" pathLength="1" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/></svg>`;

const mentors = [
  {
    slug: 'pim', name: 'พี่พิม', ph: 'a', ph2: 'c',
    cat: 'สายอาหาร', platform: 'TikTok / Blog', followers: '1.2M',
    heroAlt: 'ครัวเปิดที่พี่พิมใช้ถ่ายคลิปอาหาร (ภาพตัวอย่าง)',
    breakAlt: 'โต๊ะเตรียมวัตถุดิบระหว่างถ่ายคลิป (ภาพตัวอย่าง)',
    intro: 'จากแม่ค้าข้าวแกงหน้าปากซอย สู่ช่องอาหารที่คนตามเพราะ “เล่าเรื่องวัตถุดิบเป็น” — พี่พิมทำคลิปสั้นควบคู่บล็อกสูตรมาแปดปี และยังลงครัวเองทุกคลิป',
    teach: 'พี่พิมสอนด้วยการทำให้ดูจริง: เปิดไฟล์ตัดต่อของเธอให้ดูว่าคลิปหนึ่งตัดทิ้งไปกี่นาที และรีวิวคลิปของคุณแบบเฟรมต่อเฟรม จุดแข็งคือการหา “ประโยคแรก” ที่หยุดนิ้วคนดูให้เจอ',
    caseStory: 'ลูกศิษย์รุ่นล่าสุดเป็นครีเอเตอร์สายขนมไทยที่มี 4,000 ฟอล — หลังโปรแกรม 8 สัปดาห์ งานของเขาถูกร้านวัตถุดิบสองแบรนด์ทักมาคุยเอง (เผยแพร่เคสโดยได้รับอนุญาตแล้ว)',
  },
  {
    slug: 'nan', name: 'พี่แนน', ph: 'b', ph2: 'd',
    cat: 'สายท่องเที่ยว', platform: 'YouTube / Instagram', followers: '850K',
    heroAlt: 'ภูเขาและหมู่บ้านที่พี่แนนไปถ่ายวิดีโอท่องเที่ยว (ภาพตัวอย่าง)',
    breakAlt: 'สมุดโน้ตวางแผนทริปถ่ายทำของพี่แนน (ภาพตัวอย่าง)',
    intro: 'พี่แนนทำช่องท่องเที่ยวแบบ “ไปช้า อยู่นาน” — วิดีโอยาวที่คนดูจบเพราะเล่าเหมือนเพื่อนเล่า ไม่ใช่โบรชัวร์ทัวร์ ทำงานกับการท่องเที่ยวท้องถิ่นมาแล้วกว่า 30 จังหวัด',
    teach: 'ถนัดเรื่องโครงเรื่องวิดีโอยาวและการทำงานกับแบรนด์แบบไม่เสียเสียงตัวเอง เซสชันแรกพี่แนนจะให้คุณเล่าทริปล่าสุดปากเปล่า — เพราะปัญหาโครงเรื่องได้ยินก่อนได้เห็นเสมอ',
    caseStory: 'จับคู่กับบล็อกเกอร์สายคาเฟ่ที่อยากขยับมาทำวิดีโอ — สามเดือนต่อมาได้งานแรกกับการท่องเที่ยวจังหวัดของตัวเอง (เผยแพร่เคสโดยได้รับอนุญาตแล้ว)',
  },
  {
    slug: 'ton', name: 'พี่ต้น', ph: 'c', ph2: 'f',
    cat: 'สายเทค', platform: 'YouTube / X', followers: '540K',
    heroAlt: 'โต๊ะรีวิวแกดเจ็ตของพี่ต้น (ภาพตัวอย่าง)',
    breakAlt: 'อุปกรณ์ที่ถูกแกะรีวิวบนโต๊ะทำงาน (ภาพตัวอย่าง)',
    intro: 'พี่ต้นรีวิวเทคด้วยหลักเดียว: ถ้าไม่ได้ใช้เกินสองสัปดาห์ จะไม่พูดถึง ช่องของเขาโตด้วยความเชื่อใจล้วนๆ และเป็นหนึ่งในไม่กี่ช่องที่แบรนด์ยอมให้ติได้',
    teach: 'สอนเรื่องการสร้างความน่าเชื่อถือระยะยาว การเขียนสคริปต์รีวิวที่มีจุดยืน และการปฏิเสธดีลที่ไม่ควรรับ — บทเรียนที่แพงที่สุดของสายนี้',
    caseStory: 'ลูกศิษย์สายรีวิวแอปที่เคยรับทุกดีล เรียนจบรอบแล้วเลือกเหลือแบรนด์เดียวที่ต่อสัญญารายปี รายได้เท่าเดิมแต่งานน้อยลงครึ่งหนึ่ง (เผยแพร่เคสโดยได้รับอนุญาตแล้ว)',
  },
  {
    slug: 'mind', name: 'พี่มายด์', ph: 'd', ph2: 'a',
    cat: 'สายแฟชั่น–ไลฟ์สไตล์', platform: 'Instagram', followers: '2.1M',
    heroAlt: 'สตูดิโอถ่ายแฟชั่นของพี่มายด์ (ภาพตัวอย่าง)',
    breakAlt: 'มู้ดบอร์ดผ้าและโทนสีประจำซีซัน (ภาพตัวอย่าง)',
    intro: 'พี่มายด์สร้างฟีดที่คนจำได้จากรูปเดียว — เธอเชื่อว่าสไตล์ไม่ใช่เสื้อผ้า แต่คือความสม่ำเสมอของสายตา ทำงานกับแบรนด์แฟชั่นทั้งไทยและต่างประเทศมาสิบปี',
    teach: 'ถนัดเรื่องการวางระบบภาพของฟีด การคุมโทนโดยไม่จำเจ และการต่อรองค่าตัวกับแบรนด์ — พี่มายด์จะให้คุณรื้อฟีดตัวเอง 30 โพสต์ล่าสุดเป็นการบ้านแรก',
    caseStory: 'ครีเอเตอร์สายวินเทจ 15K ฟอลที่ฟีดสวยแต่ไร้ทิศทาง — หกสัปดาห์หลังจับคู่ ได้เป็นหน้าใหม่ในแคมเปญของแบรนด์ไทยดีไซเนอร์ (เผยแพร่เคสโดยได้รับอนุญาตแล้ว)',
  },
  {
    slug: 'book', name: 'พี่บุ๊ค', ph: 'e', ph2: 'b',
    cat: 'สายหนังสือ–การเขียน', platform: 'Blog / Facebook', followers: '320K',
    heroAlt: 'ชั้นหนังสือและโต๊ะเขียนงานของพี่บุ๊ค (ภาพตัวอย่าง)',
    breakAlt: 'ต้นฉบับที่ถูกขีดแก้ด้วยปากกาแดง (ภาพตัวอย่าง)',
    intro: 'พี่บุ๊คเขียนรีวิวหนังสือและความเรียงมาสิบสองปี เพจของเขาพิสูจน์ว่างานเขียนยาวยังมีที่ยืน — ถ้าประโยคแรกทำงาน คนอ่านจะให้เวลาที่เหลือเอง',
    teach: 'สอนการเขียนแบบบรรณาธิการ: ตัดคำที่ไม่ทำงาน หาเสียงของตัวเองให้เจอ และรีวิวต้นฉบับด้วยปากกาแดงจริงๆ ทีละบรรทัด เหมาะกับบล็อกเกอร์และคนทำนิวส์เลตเตอร์',
    caseStory: 'นักเขียนนิวส์เลตเตอร์สายจิตวิทยาที่เปิดมาปีเดียว — หลังจบรอบรีวิวต้นฉบับหกครั้ง ยอดสมาชิกจ่ายเงินโตสามเท่า (เผยแพร่เคสโดยได้รับอนุญาตแล้ว)',
  },
  {
    slug: 'jay', name: 'พี่เจ', ph: 'f', ph2: 'e',
    cat: 'สายการเงิน', platform: 'Podcast / YouTube', followers: '660K',
    heroAlt: 'โต๊ะอัดพอดแคสต์การเงินของพี่เจ (ภาพตัวอย่าง)',
    breakAlt: 'ไมโครโฟนและโน้ตประเด็นก่อนอัดรายการ (ภาพตัวอย่าง)',
    intro: 'พี่เจทำพอดแคสต์การเงินที่คนฟังจบตอนโดยไม่กดข้าม เพราะแปลเรื่องยากเป็นภาษาคน ทำรายการมาหกปี กว่า 300 ตอน และยังเขียนสคริปต์เองทุกตอน',
    teach: 'ถนัดเรื่องการเล่าเรื่องด้วยเสียง โครงตอนพอดแคสต์ และการสร้างเครือข่ายแขกรับเชิญ — คอนเนกชันสายการเงินของพี่เจคือหนึ่งในเหตุผลที่คนต่อคิวเข้าโปรแกรม',
    caseStory: 'ลูกศิษย์เปิดพอดแคสต์ภาษีสำหรับฟรีแลนซ์จากศูนย์ — พี่เจช่วยวางโครง 10 ตอนแรกและแนะนำแขกสองคนแรกให้ (เผยแพร่เคสโดยได้รับอนุญาตแล้ว)',
  },
];

const header = `  <a class="skip-link" href="#main">ข้ามไปยังเนื้อหา</a>

  <header class="site-header">
    <a class="brand" href="/">Human<span class="brand__dash">–</span>Write</a>
    <nav class="site-nav" aria-label="เมนูหลัก">
      <ul>
        <li><a href="/mentors.html" aria-current="page">พี่เลี้ยง</a></li>
        <li><a href="/how-it-works.html">วิธีทำงาน</a></li>
        <li><a href="/journal.html">เขียนด้วยมือ</a></li>
        <li><a href="/about.html">เกี่ยวกับเรา</a></li>
        <li><a href="/contact.html">ติดต่อ</a></li>
      </ul>
    </nav>
    <img class="stamp" src="/assets/img/stamp.svg" alt="ตรารับรอง: 100% Human-made — ไม่ใช้ AI" width="72" height="72">
  </header>`;

const footer = `  <footer class="site-footer">
    <p class="footer-banner" data-availability>รอบนี้รับ 6 คู่ — เปิดรอบถัดไป ตุลาคม 2026</p>
    <div class="footer-inner">
      <p class="footer-recruit">อยากเป็นพี่เลี้ยงกับเรา? <a href="/contact.html">ชวนคุยได้ →</a></p>
      <a class="footer-mailto" href="mailto:hello@human-write.studio">hello@human-write.studio</a>
      <div class="footer-row">
        <ul class="social-row">
          <li><a href="https://instagram.com/humanwrite.studio" rel="noopener">Instagram</a></li>
          <li><a href="https://facebook.com/humanwrite.studio" rel="noopener">Facebook</a></li>
          <li><a href="https://line.me/R/ti/p/@humanwrite" rel="noopener">LINE</a></li>
        </ul>
        <img class="stamp stamp--footer" src="/assets/img/stamp.svg" alt="ตรารับรอง: 100% Human-made — ไม่ใช้ AI" width="88" height="88">
      </div>
      <p class="footer-tiny">เว็บไซต์นี้ออกแบบและเขียนโดยมนุษย์ทั้งหมด · © 2026 Human-Write</p>
    </div>
  </footer>`;

const page = (m, prev, next) => `<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${m.name} — ${m.cat} — Human-Write</title>
  <meta name="description" content="${m.name}: พี่เลี้ยง${m.cat}ของ Human-Write — ${m.platform}, ผู้ติดตาม ${m.followers}">
  <link rel="stylesheet" href="/assets/css/tokens.css">
  <link rel="stylesheet" href="/assets/css/base.css">
  <link rel="stylesheet" href="/assets/css/components.css">
  <link rel="stylesheet" href="/assets/css/motion.css">
</head>
<body>
${header}

  <main id="main" tabindex="-1">
    <div class="progress" aria-hidden="true"></div>
    <article class="section section--first container">
      <div class="case-hero duotone ph--${m.ph}" style="--vt: mentor-${m.slug}-img; --order: 2" role="img" aria-label="${m.heroAlt}"></div>
      <h1 class="case-title" style="--vt: mentor-${m.slug}; --order: 3">${m.name}</h1>
      <dl class="meta-rail">
        <div><dt>สายคอนเทนต์</dt><dd>${m.cat}</dd></div>
        <div><dt>แพลตฟอร์ม</dt><dd>${m.platform}</dd></div>
        <div><dt>ผู้ติดตาม</dt><dd>${m.followers}</dd></div>
        <div><dt>รับลูกศิษย์</dt><dd>2 คน / รอบ</dd></div>
      </dl>
      <div class="case-body">
        <p>${m.intro}</p>
        <h2>สไตล์การ<span class="squiggle">สอน${SQUIGGLE}</span></h2>
        <p class="sda-reveal">${m.teach}</p>
        <h2>เคสลูกศิษย์</h2>
        <p class="sda-reveal">${m.caseStory}</p>
      </div>
      <div class="case-break duotone sda-parallax" role="img" aria-label="${m.breakAlt}"><span class="fill ph--${m.ph2}"></span></div>
      <p class="case-cta"><a class="button" href="/contact.html">ขอจับคู่กับพี่คนนี้</a></p>

      <nav class="prevnext" aria-label="พี่เลี้ยงคนอื่น">
        <a class="pn--prev" href="/mentor/${prev.slug}.html">
          <span class="pn__thumb duotone ph--${prev.ph}" style="--vt: mentor-${prev.slug}-img" aria-hidden="true"></span>
          <span><span class="pn__dir">← คนก่อนหน้า</span><br><span class="pn__name">${prev.name}</span></span>
        </a>
        <a class="pn--next" href="/mentor/${next.slug}.html">
          <span><span class="pn__dir">คนถัดไป →</span><br><span class="pn__name">${next.name}</span></span>
          <span class="pn__thumb duotone ph--${next.ph}" style="--vt: mentor-${next.slug}-img" aria-hidden="true"></span>
        </a>
      </nav>
    </article>
  </main>

${footer}

  <script type="module" src="/assets/js/app.js"></script>
</body>
</html>
`;

const outDir = resolve(import.meta.dirname, '..', 'mentor');
mkdirSync(outDir, { recursive: true });
mentors.forEach((m, i) => {
  const prev = mentors[(i - 1 + mentors.length) % mentors.length];
  const next = mentors[(i + 1) % mentors.length];
  writeFileSync(resolve(outDir, `${m.slug}.html`), page(m, prev, next));
  console.log(`wrote mentor/${m.slug}.html`);
});
