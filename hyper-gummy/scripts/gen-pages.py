# Generates every HTML page from one shell + per-page main content:
# the five site pages plus one case page per entry in CASES.
# Run:  python scripts/gen-pages.py   (from hyper-gummy/)
# Thai copy is DRAFT — edit here, re-run, pages regenerate.
import io, os, glob
HERE = os.path.dirname(os.path.abspath(__file__))

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
EMAIL = 'hello@hypergummy.co'

# slug, title, year, outcome, dot class, candy the bear holds on the case page,
# client type, stage we joined at, services, intro, hook lines per chapter
CASES = [
    # เคสคอนเซปต์จากงานจริง — ไม่ระบุแบรนด์ (โปรดักต์ทุกตัวเป็นความลับ) ใช้ภาพ concept เท่านั้น
    dict(slug='secret-menu', build='cup', title='เมนูลับที่ไม่ได้ลับ', year='2025', outcome='ถูกคิดไว้ตั้งแต่แรก ไม่ได้รอคนค้นเจอ', dot='dot--lime', candy='cup', color='#FF9FD0',
         client='เชนกาแฟ', stage='เมนูใหม่ยังอยู่ในครัวทดลอง', services='คอนเทนต์ · เมนู DIY · ครีเอเตอร์',
         intro='<span class="lead">"เมนูลับ" ที่คนเข้าใจว่ามีใครบังเอิญค้นเจอ จริงๆ ถูกออกแบบไว้ตั้งแต่วันแรก</span><span class="big">มันไม่ได้รอให้ใครค้นเจอ</span><span class="big hl">มันรอแค่คนโพสต์คนแรก</span>',
         chn=['มาเลือกส่วนผสมกัน!', 'ลับ! ทำได้! อร่อย!', 'พาน้องสู่โลกกว้างกัน!', 'อย่าปล่อยให้น้องแมสแค่คนเดียว'],
         ch=['เราเข้าไปตอนเมนูใหม่ยังอยู่ในครัวทดลอง คุย คุย คุยและคุย จากประสบการณ์หวานๆ ของเรา ร่วมกับเจ้าของโปรดักต์และฝ่ายขาย แล้วช่วยออกแบบสูตรลับที่แมสแน่นอน ง่ายๆ ตั้งแต่ตรงนั้น',
             'การเลี้ยงเด็กคนหนึ่งต้องใช้ทั้งหมู่บ้าน ปฏิบัติการเลี้ยงน้องจึงต้องใช้ทุกฝ่าย ตั้งแต่ R&amp;D ถึง Operation น้องน่ากินไหม น้องลับพอไหม น้องอร่อยไหม และบาริสต้าที่เพิ่งมาเมื่อวานทำน้องได้ไหม?',
             'ล็อกสูตร ล็อกวิธีเรียก แล้ววางเรื่องเล่าที่เราอยากให้น้องเป็น น้องลับ น้อง DIY น้องบาริสต้าแนะนำ น้องดังเพราะอินฟลูฯ คนนี้สั่ง น้องดังเพราะอร่อยขึ้น 300 เท่า <strong>เราเท่านั้นที่รู้กัน</strong>',
             'น้องแมสแล้วยังไงต่อ? ตรงนี้แหละที่ยาก <strong>แต่ไม่ยากสำหรับเรา</strong>']),
    dict(slug='diy-menu', title='เมนู DIY ที่ไม่ได้มิกซ์มั่วๆ', year='2025', outcome='ส่วนผสมถูกกำหนดไว้ตั้งแต่แรก', dot='dot--sky', candy='star', color='#5CCBFF',
         client='ร้านสะดวกซื้อ', stage='ของยังอยู่แยกชั้นกันบนชั้นวาง', services='คอนเทนต์ · สูตร DIY · วิดีโอสั้น',
         intro='เมนู DIY ที่คนเห็นแล้วคิดว่าครีเอเตอร์เอาของมามิกซ์กันเล่นๆ จริงๆ ทุกชิ้นถูกเลือกไว้แล้วว่าต้องหยิบจากชั้นไหน ในราคาเท่าไหร่ และทำเสร็จในกี่ขั้นตอน',
         ch=['เริ่มจากรายการของที่ร้านอยากขายเพิ่ม ไม่ใช่จากเมนูที่อยากทำ เราไล่ดูว่าของ 5 อย่างนี้อยู่ชั้นไหน ราคาบวกกันแล้วเท่าไหร่ แล้วค่อยหาว่ามันรวมกันเป็นอะไรที่ "เซฟสูตรไว้ก่อน" ได้',
             'ทำสูตรต้นแบบให้คน 20 คนทำตามจากคลิปโดยไม่มีคำอธิบายเพิ่ม ถ้าใครทำพลาด แก้ที่สูตร ไม่แก้ที่คน จนเหลือ 4 ขั้นตอนที่ทำผิดไม่ได้',
             'ล็อกสูตรและลำดับหยิบของ เขียนแคปชันให้ขึ้นต้นด้วยประโยคที่คนอยากเซฟ ไม่ใช่ชื่อเมนู เพราะปุ่มเซฟคือเป้าหมาย ไม่ใช่ไลก์',
             'คลิปเดียว สูตรเดียว ทุกคนที่ทำตามได้ผลเหมือนกันเป๊ะ ของทั้ง 5 อย่างถูกหยิบพร้อมกันเป็นชุด นั่นคือสิ่งที่วางไว้ตั้งแต่บรรทัดแรก']),
    dict(slug='story-not-trend', title='สตอรี่ที่ไม่ใช่เทรนด์', year='2024', outcome='วางแผนตั้งแต่สั่งส่วนผสมและตั้งชื่อ', dot='dot--grape', candy='donut', color='#FF3D8F',
         client='แบรนด์ขนมอบ', stage='ยังไม่ได้สั่งวัตถุดิบ', services='คอนเทนต์ · ตั้งชื่อ · ลอนช์คอลเลกชัน',
         intro='คอลเลกชันที่ดูเหมือนเกาะกระแสผลไม้ตามฤดู จริงๆ ถูกวางไว้ตั้งแต่วันสั่งวัตถุดิบและวันตั้งชื่อ เรื่องเล่าไม่ได้มาทีหลัง มันคือเหตุผลที่สั่งของแบบนั้น',
         ch=['เข้าไปตอนยังไม่สั่งวัตถุดิบ คำถามแรกคือ "แต่ละรสจะถูกเล่าว่าอะไร" ก่อนจะรู้ว่าใส่อะไร ผลไม้ 3 ชนิดถูกเลือกเพราะแต่ละอย่างมีคำที่คนใช้บรรยายอยู่แล้ว',
             'ตั้งชื่อ 3 รสก่อนอบชิ้นแรก แล้วให้คน 10 คนอ่านชื่อแล้วเดารส ถ้าเดาไม่ตรง เปลี่ยนชื่อ ไม่เปลี่ยนรส เพราะชื่อคือสิ่งที่ถูกพิมพ์ต่อ',
             'พอชื่อกับรสล็อก ค่อยออกแบบหน้าตาให้ถ่ายแล้วเห็นชื่อได้จากชิ้นขนม สีของท็อปปิ้งแต่ละรสถูกเลือกให้แยกกันออกในรูปเดียวที่ถ่ายทั้งสามชิ้น',
             'วันเปิดตัวคอนเทนต์ทุกชิ้นพูดชื่อรสเหมือนกันหมด โดยไม่มีใครถูกสั่ง เพราะชื่อถูกออกแบบให้พูดแบบอื่นไม่ได้ตั้งแต่แรก']),
    dict(slug='viral-ingredient', title='ของที่ขายอยู่ดีๆ กลายเป็นเมนูไวรัล', year='2024', outcome='เพราะถูกวางแผนไว้ก่อน ไม่ใช่โชค', dot='dot--orange', candy='heart', color='#FF8A3D',
         client='แบรนด์บิสกิตและสเปรด', stage='โปรดักต์ขายอยู่แล้ว แต่ไม่มีใครเล่าถึง', services='คอนเทนต์ · สูตรไม่ง้อเตาอบ · ครีเอเตอร์',
         intro='ทำไมของที่วางขายอยู่เฉยๆ ถึงกลายเป็นส่วนผสมหลักของเมนูที่คนทำตามกันทั้งประเทศ ถ้าไม่ได้มีใครวางแผนไว้ก่อน มันก็แค่บิสกิตกับสเปรดบนชั้นเดิม',
         ch=['โปรดักต์อยู่บนชั้นมานาน ปัญหาไม่ใช่ของไม่ดี แต่คือของไม่มี "บทบาท" เราเลยไม่ทำโฆษณาให้มัน แต่หาเมนูที่มันเป็นพระเอกโดยไม่ต้องมีเตาอบ',
             'ทดลองสูตรจนเหลือของ 4 อย่างและไม่มีขั้นตอนไหนที่ต้องใช้ทักษะ ให้คนไม่เคยทำขนมลองทำจากคลิปโดยไม่มีคนช่วย ถ้ายังทำพลาดได้ ตัดขั้นตอนนั้นทิ้ง',
             'ล็อกให้โปรดักต์ปรากฏใน 3 จาก 4 ขั้นตอน ทั้งฐาน ไส้ และหน้า คนทำตามจะหยิบมันซ้ำสามครั้งโดยไม่รู้ตัว นั่นคือแผน ไม่ใช่สูตรที่บังเอิญอร่อย',
             'สูตรถูกส่งต่อโดยคนทำตาม ไม่ใช่โดยแบรนด์ ของชิ้นเดิมบนชั้นเดิมกลายเป็นของที่ต้องซื้อยกชุด และไม่มีใครเรียกมันว่าโฆษณา']),
]

CHAPTERS = ['ร่าง', 'ชิม', 'ปั้น', 'ปล่อย']


CTA_BAND = '''
      <!-- ================= CTA (every page except contact) ================= -->
      <section class="cta-band container js-in-view">
        <div class="cta-band-inner">
          <span class="label appear-fade-up" data-typewriter>เริ่มยังไง</span>
          <h2 class="cta-band-title appear-fade-up appear-delay--1">เอาร่างมาให้ดู<br /><span class="it">ยิ่งดิบยิ่งดี</span></h2>
          <p class="cta-band-text appear-fade-up appear-delay--2">สเก็ตช์ รูปต้นแบบ หรือแค่ไอเดียในโน้ต ส่งมาได้เลย
          เราตอบภายในสองวันทำการ พร้อมความเห็นตรงๆ ว่าช่วยได้ตรงไหน</p>
          <div class="cta-band-actions appear-fade-up appear-delay--3">
            <a class="pill" href="/contact.html" data-nav>เอาร่างมาคุยกัน →</a>
            <a class="label link-u" href="mailto:hello@hypergummy.co">hello@hypergummy.co</a>
          </div>
        </div>
      </section>
'''


def case_href(c):
    return f'/case-{c["slug"]}.html'


def case_rows(n, step):
    out = []
    for i, c in enumerate(CASES[:n]):
        delay = f' style="--iv-delay:{i * step:.2f}s"' if i else ''
        out.append(f'''          <li class="case-row js-in-view appear-fade-up"{delay}>
            <a class="case-link" href="{case_href(c)}" data-nav data-case-media="{i}">
              <h3 class="case-title"><span class="dot {c['dot']}"></span>{c['title']}</h3>
              <span class="case-meta"><span class="label">{c['year']}</span><span class="label">{c['outcome']}</span></span>
            </a>
            <div class="case-media" aria-hidden="true"></div>
          </li>''')
    return '\n'.join(out)


def shell(title, desc, ns, main, extra_attrs=''):
    cur = lambda n: ' class="is-current"' if ns == n else ''
    cur_work, cur_craft, cur_about = cur('work'), cur('craft'), cur('about')
    if ns == 'case':
        cur_work = ' class="is-current"'
    return f'''<!doctype html>
<html lang="th">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>{title}</title>
  <meta name="description" content="{desc}" />
  <link rel="stylesheet" href="/src/styles/main.css" />
  <script type="module" src="/src/js/app.js"></script>
</head>
<body data-barba="wrapper">

  <!-- persistent GL layer (never destroyed on navigation) -->
  <div class="poster" aria-hidden="true"></div>
  <canvas id="gl" aria-hidden="true"></canvas>

  <header class="header">
    <a class="logo" href="/" data-nav><span class="dot"></span>Hyper <span class="it">Gummy</span></a>
    <nav class="top-nav" aria-label="เมนูหลัก">
      <a href="/work.html" data-nav{cur_work}>งาน</a>
      <a href="/craft.html" data-nav{cur_craft}>วิธีทำงาน</a>
      <a href="/#about" data-nav{cur_about}>เรา</a>
      <a class="pill pill--ghost{' is-current' if ns == 'contact' else ''}" href="/contact.html" data-nav>คุยกัน</a>
    </nav>
    <button class="burger" aria-label="เมนู" aria-expanded="false" data-menu-toggle>
      <span></span><span></span>
    </button>
  </header>

  <div class="site">
    <main data-barba="container" data-barba-namespace="{ns}" data-gl-page="{ns}"{extra_attrs}>
{main}{CTA_BAND if ns != 'contact' else ''}
    </main>

    <!-- ================= FOOTER (persistent) ================= -->
    <footer class="footer">
      <div class="container">
        <a class="footer-email" href="mailto:{EMAIL}">hello@<span class="it">hypergummy</span>.co</a>
        <div class="footer-grid">
          <div class="footer-col">
            <span class="label" data-typewriter>เมนู</span>
            <a href="/work.html" data-nav>งาน</a>
            <a href="/craft.html" data-nav>วิธีทำงาน</a>
            <a href="/#about" data-nav>เรา</a>
            <a href="/contact.html" data-nav>คุยกัน</a>
          </div>
          <div class="footer-col">
            <span class="label" data-typewriter>ที่อื่น</span>
            <a href="#" rel="noopener">Instagram</a>
            <a href="#" rel="noopener">TikTok</a>
            <a href="#" rel="noopener">LinkedIn</a>
          </div>
          <div class="footer-col">
            <span class="label" data-typewriter>Hyper Gummy</span>
            <span style="color:var(--c-muted)">เอเจนซี่คอนเทนต์สำหรับแบรนด์ — กรุงเทพฯ</span>
            <span style="color:var(--c-muted)">© 2026 Hyper Gummy</span>
          </div>
        </div>
      </div>
    </footer>
  </div>

  <!-- ================= MENU OVERLAY ================= -->
  <div class="menu-overlay" role="dialog" aria-modal="true" aria-label="เมนู">
    <button class="pill pill--ghost menu-close" data-menu-close>ปิดเมนู ✕</button>
    <nav class="menu-nav">
      <div class="menu-item"><a href="/work.html" data-nav><span class="menu-index">01</span>งาน</a></div>
      <div class="menu-item"><a href="/craft.html" data-nav><span class="menu-index">02</span>วิธีทำงาน</a></div>
      <div class="menu-item"><a href="/#about" data-nav><span class="menu-index">03</span>เรา</a></div>
      <div class="menu-item"><a href="/contact.html" data-nav><span class="menu-index">04</span>คุยกัน</a></div>
    </nav>
    <div class="menu-meta">
      <a class="label" href="mailto:{EMAIL}">{EMAIL}</a>
      <a class="pill" href="/work.html" data-nav>ดูเคสทั้งหมด</a>
    </div>
  </div>

  <!-- ================= CASE OVERLAY ================= -->
  <div class="read-overlay" role="dialog" aria-modal="true" aria-label="เคสตัวอย่าง" data-lenis-prevent>
    <button class="read-close pill" data-read-close>ปิด — esc</button>
    <div class="read-inner" data-read-content></div>
  </div>

  <!-- transition veil + loader -->
  <div class="transition-veil" aria-hidden="true"></div>
  <div class="loader" aria-hidden="true">
    <div class="loader-mark"><span class="dot"></span>Hyper <span class="it">Gummy</span></div>
    <div class="loader-bar"><i></i></div>
    <div class="loader-pct">0%</div>
  </div>

</body>
</html>
'''


WORK = f'''
      <section class="page-head container" data-gl-window>
        <span class="label js-in-view" data-typewriter>งาน — ทุกชิ้นเริ่มตอนยังเป็นร่าง</span>
        <h1 class="page-title">งานที่เข้าไป<br /><span class="it">ก่อนเสร็จ</span></h1>
      </section>

      <section class="page-body container">
        <div class="prose js-in-view appear-fade-up">
          <p><strong>เราไม่โชว์โปสเตอร์สวยๆ ที่ทำหลังของเสร็จ</strong>
          สิ่งที่โชว์คือจุดที่เราเข้าไป ปีที่ทำ และการตัดสินใจที่เปลี่ยนไปเพราะคิดคอนเทนต์ก่อน
          ถ้าโปรเจกต์ไหนข้างล่างฟังดูเหมือนของที่คุณกำลังร่างอยู่ ทักมาได้เลย</p>
        </div>

        <ul class="cases-list" style="margin-top:3.5rem">
{case_rows(7, 0.06)}
        </ul>
      </section>
'''

CRAFT = '''
      <section class="page-head container" data-gl-window>
        <span class="label js-in-view" data-typewriter>วิธีทำงาน — สี่ขั้น</span>
        <h1 class="page-title">ร่าง ชิม ปั้น<br /><span class="it">ปล่อย</span></h1>
      </section>

      <section class="page-body container">
        <div class="prose js-in-view appear-fade-up">
          <p><strong>โปรดักต์ทุกตัวมีเรื่องเล่าซ่อนอยู่ในร่างแรก</strong>
          ก่อนจะเขียนสักบรรทัด เราขอนั่งในห้องเดียวกับทีมโปรดักต์
          ดูสเก็ตช์ ดูโมลด์ ดูตัวเลือกที่ยังตัดสินใจไม่ได้ เพราะตรงนั้นคือที่ที่คอนเทนต์เกิด</p>
        </div>

        <div class="craft-steps">
          <div class="craft-step js-in-view appear-fade-up">
            <span class="craft-num">1</span>
            <div>
              <h3>ร่าง</h3>
              <p>เข้าไปตั้งแต่โปรดักต์ยังเป็นสเก็ตช์ เราถามคำถามเดียวซ้ำๆ ว่า
              "คนจะเล่าเรื่องนี้ต่อยังไง" แล้วเอาคำตอบกลับไปแก้ที่ตัวโปรดักต์ ไม่ใช่ที่แคปชัน</p>
            </div>
          </div>
          <div class="craft-step js-in-view appear-fade-up" style="--iv-delay:.06s">
            <span class="craft-num">2</span>
            <div>
              <h3>ชิม</h3>
              <p>ทดสอบเรื่องเล่ากับคนจริงก่อนของจริงเสร็จ ต้นแบบหนึ่งชิ้น ครีเอเตอร์สามคน
              หนึ่งสัปดาห์ ดูว่าอะไรถูกถ่าย อะไรถูกข้าม แล้วปรับร่างต่อ</p>
            </div>
          </div>
          <div class="craft-step js-in-view appear-fade-up" style="--iv-delay:.12s">
            <span class="craft-num">3</span>
            <div>
              <h3>ปั้น</h3>
              <p>พอโปรดักต์ล็อกแล้ว ค่อยปั้นระบบคอนเทนต์: ฟอร์แมตหลัก เสียงของแบรนด์
              และชุดไอเดียที่ทีมในบ้านทำต่อเองได้โดยไม่ต้องรอเรา</p>
            </div>
          </div>
          <div class="craft-step js-in-view appear-fade-up" style="--iv-delay:.18s">
            <span class="craft-num">4</span>
            <div>
              <h3>ปล่อย</h3>
              <p>วันเปิดตัวคือวันที่เราทำน้อยที่สุด เพราะเรื่องเล่าถูกฝังไว้ในโปรดักต์แล้ว
              เราแค่คอยดูว่าคนหยิบมันไปเล่าแบบไหน แล้วจดไว้สำหรับร่างถัดไป</p>
            </div>
          </div>
        </div>
      </section>
'''

ABOUT = '''
      <!-- scrollytelling: the bear stays in the GL layer; each chapter is one
           "small adjustment" — chapters are read by the stage via [data-chapter] -->
      <section class="about-chapter about-chapter--first container" data-chapter="0" data-gl-window>
        <div class="about-copy js-in-view">
          <span class="label appear-fade-up" data-typewriter>Hyper Gummy เกิดขึ้นมาเพราะ?</span>
          <h2 class="appear-fade-up appear-delay--1">โปรดักต์ส่วนใหญ่<br />มาแค่ส่วนผสมและต้นทุน</h2>
          <p class="appear-fade-up appear-delay--2">ส่วนผสมใหม่ การผลิตใหม่ ฉลากใหม่ ซัพพลายเออร์ให้ราคาดี
          ผ่านการอนุมัติมาแล้วทุกขั้น น้องจะเกิดละ <strong>แต่ยังไม่มีใครอยากเล่าถึงน้อง</strong>
          รู้ตัวอีกที เรา "ทุกคน" ก็ต้องหาคอนเทนต์มาช่วยเหลือน้องเท่าที่ทำได้</p>
        </div>
      </section>

      <section class="about-chapter container" data-chapter="1" data-gl-window style="--rise:0">
        <div class="about-copy about-copy--wide js-in-view">
          <!-- three equal lines; the strawberry fill rises through the text
               exactly as it rises through the bear (--rise is set by the stage) -->
          <h2 class="about-h2 about-h2--rise appear-fade-up">
            <span class="ln">จะดีกว่าไหมถ้า</span>
            <span class="ln">ให้น้องแมส</span>
            <span class="ln">ตั้งแต่ยังไม่เกิด<span class="echo">ดดดด</span></span>
          </h2>
          <p class="appear-fade-up appear-delay--2">Hyper Gummy เกิดจากความเข้าใจโปรดักต์ที่ผ่านมือเราไปมากกว่า
          10,000 ชิ้นตลอด 10 ปี เพราะการตัดสินใจที่ทำให้น้องขนมชิ้นหนึ่ง "เล่าง่าย" หรือ "เล่ายาก"
          ไม่ได้อยู่แค่ที่แคปชันหรือการถ่ายรูป <strong>มันควรอยู่ตั้งแต่น้องเกิด</strong></p>
        </div>
      </section>

      <section class="about-chapter container" data-chapter="2" data-gl-window style="--heart:0">
        <div class="about-copy js-in-view">
          <!-- turns sky-blue with the heart, then beats + twinkles once it is full -->
          <h2 class="about-h2 about-h2--heart appear-fade-up">
            <span class="ln">พวกเรามา</span>
            <span class="ln">ใส่ใจให้น้อง</span>
            <span class="ln">ก่อนใส่อะไรทั้งนั้น</span>
          </h2>
          <p class="appear-fade-up appear-delay--2">เราเรียกโปรดักต์ทุกตัวว่า <strong>"น้อง"</strong>
          สิ่งแรกที่เราทำในทุกห้องประชุมจึงไม่ใช่เสนอไอเดีย
          แต่ชวนทุกคน ทั้ง R&amp;D มาร์เก็ตติ้ง และเจ้าของโปรดักต์
          มาใส่ใจทะนุถนอมวางแผนอนาคตของน้องร่วมกัน
          <strong>ไม่ต่างกับการวางแผนลูกหลานสักคนให้ประสบความสำเร็จในชีวิต</strong></p>
        </div>
      </section>

      <section class="about-chapter container" data-chapter="3" data-gl-window>
        <div class="about-copy about-copy--wide js-in-view">
          <!-- three equal lines, three counters: 10 ticks slowly, 10,000+ races
               to 9,999 then creeps up forever, 4 ticks slowly -->
          <h2 class="about-h2 about-h2--count appear-fade-up">
            <span class="ln">ตลอด <b data-count="10" data-mode="slow">0</b> ปีที่ผ่านมา</span>
            <span class="ln">เรากินน้องขนมไป <b data-count="10128" data-mode="creep" data-suffix="+">0</b> ชิ้น</span>
            <span class="ln">หรือ <b data-count="4" data-mode="slow">0</b> โปรดักต์ต่อวัน <span class="grow">และเพิ่มขึ้นทุกวัน</span></span>
          </h2>
          <a class="pill pill--gummy pill--twinkle appear-fade-up appear-delay--3" href="https://www.facebook.com/KinNhom" target="_blank" rel="noopener">รู้จักกับทีมชิม Hyper Gummy <span class="arrow" aria-hidden="true">→</span><span class="sheen" aria-hidden="true"></span></a>
        </div>
      </section>

      <section class="about-chapter about-chapter--long container" data-chapter="4" data-gl-window>
        <div class="about-copy js-in-view">
          <span class="label appear-fade-up" data-typewriter>ช่วยกันทำให้</span>
          <h2 class="appear-fade-up appear-delay--1">น้องขายดี<br />ตั้งแต่เกิด</h2>
          <p class="appear-fade-up appear-delay--2">เราไม่ได้ขอให้แบรนด์รื้อโปรดักต์ เราขอเข้าไปมีส่วนร่วมตอนที่ยังปรับได้
          แล้วปรับแค่จุดเดียวที่ทำให้ทุกคนที่เข้าถึงน้องขนมของเรา <strong>อยากเล่าต่อ</strong></p>
          <div class="about-steps appear-fade-up appear-delay--3">
            <a class="about-step" href="/case-secret-menu.html" data-nav><span class="dot dot--lime"></span><span>ออกแบบ "เมนูลับ" ให้รอคนโพสต์คนแรก</span><span class="about-step-to">เชนกาแฟ →</span></a>
            <a class="about-step" href="/case-diy-menu.html" data-nav><span class="dot dot--sky"></span><span>กำหนดของ 5 อย่างก่อนคลิป DIY</span><span class="about-step-to">ร้านสะดวกซื้อ →</span></a>
            <a class="about-step" href="/case-story-not-trend.html" data-nav><span class="dot dot--grape"></span><span>ตั้งชื่อรสก่อนสั่งวัตถุดิบ</span><span class="about-step-to">ขนมอบ →</span></a>
            <a class="about-step" href="/case-viral-ingredient.html" data-nav><span class="dot dot--orange"></span><span>ให้ของบนชั้นมีบทบาทในสูตร</span><span class="about-step-to">บิสกิต →</span></a>
          </div>
        </div>
      </section>

      <section class="about-chapter container" data-chapter="5" data-gl-window>
        <div class="about-copy js-in-view">
          <span class="label appear-fade-up" data-typewriter>ผลลัพธ์</span>
          <h2 class="appear-fade-up appear-delay--1">น้องทุกตัวที่ผ่านมือเรา<br />มีเรื่องเล่าของตัวเอง</h2>
          <p class="appear-fade-up appear-delay--2">ไม่มีสูตรสำเร็จ ไม่มีเทมเพลต มีแค่การเข้าไปให้ทันเวลา
          แล้วหาจุดเล็กๆ ที่ทำให้น้องเป็นตัวของน้องเอง</p>
          <a class="pill pill--ghost appear-fade-up appear-delay--3" href="/work.html" data-nav>ดูงานทั้งหมด →</a>
        </div>
      </section>
'''

HOME = f'''
      <!-- ================= HERO ================= -->
      <section class="hero container" data-gl-window>
        <!-- real text twin of the GL headline (SEO/a11y; visible when no GL) -->
        <h1 class="hero-headline" data-gl-headline>
          <span data-line><span class="sm">เราทำให้</span></span>
          <span data-line>โปรดักต์</span>
          <span data-line><span class="hl xl">แมส</span></span>
          <span data-line>ตั้งแต่</span>
          <span data-line>ยังไม่เกิด<span class="echo">ดดดด</span></span>
        </h1>

        <div class="hero-foot">
          <div class="hero-intro appear-fade-up js-in-view">
            <p><strong>Hyper Gummy</strong> คือเอเจนซี่คอนเทนต์สำหรับแบรนด์
            เราเข้าไปนั่งในห้องตั้งแต่วันที่โปรดักต์ยังเป็นแค่ส่วนผสม
            <strong>ไม่ใช่วันที่มันเสร็จแล้วค่อยมาหาเรื่องเล่า</strong></p>
            <a class="pill pill--gummy pill--twinkle" href="#about" data-nav>ฮาวทูแมส <span class="arrow" aria-hidden="true">→</span><span class="sheen" aria-hidden="true"></span></a>
          </div>
          <div class="scroll-ind appear-fade-up js-in-view" style="--iv-delay:.15s" aria-hidden="true"></div>
        </div>
      </section>

      <!-- ================= เรา (anchor: #about) — the story, in one scroll ================= -->
      <div id="about" class="about-inline">
{ABOUT}
      </div>

'''

CONTACT = f'''
      <section class="page-head container" data-gl-window>
        <span class="label js-in-view" data-typewriter>คุยกัน — ยิ่งดิบยิ่งดี</span>
        <h1 class="page-title">เอาร่างมาให้ดู<br /><span class="it">ยิ่งดิบยิ่งดี</span></h1>
      </section>

      <section class="page-body container">
        <div class="prose js-in-view appear-fade-up">
          <p><strong>อีเมลเดียวก็เริ่มได้</strong> เล่าว่ากำลังทำอะไรอยู่ อยู่ขั้นไหน
          และเปิดตัวเมื่อไหร่ แนบสเก็ตช์หรือรูปต้นแบบมาได้เลย ไม่ต้องสวย
          เราตอบภายในสองวันทำการ พร้อมความเห็นตรงๆ ว่าเราช่วยได้ตรงไหน</p>
          <p>ยังไม่อยากเปิดชื่อแบรนด์? ได้ เราเซ็น NDA ก่อนดูของจริงเสมอ</p>
        </div>
        <div class="contact-block">
          <a class="footer-email js-in-view appear-fade-up" style="--iv-delay:.1s" href="mailto:{EMAIL}">hello@<span class="it">hypergummy</span>.co</a>
          <span class="label js-in-view" data-typewriter>ตอบภายในสองวันทำการ — NDA ก่อน ชื่อแบรนด์ทีหลัง</span>
        </div>
      </section>
'''


def art(slug, shot, seed, cls, extra=''):
    """media figure: the rendered case art if scripts/render-art.mjs has produced
    it (public/assets/cases/<slug>/<shot>.jpg), else the procedural candy blur"""
    rel = f'assets/cases/{slug}/{shot}.jpg'
    if os.path.exists(os.path.join(HERE, '..', 'public', rel)):
        return f'<figure class="{cls}"{extra}><img src="/{rel}" alt="" loading="lazy" decoding="async" /></figure>'
    return f'<figure class="{cls}"{extra} data-seed="{seed}"></figure>'


def words(title):
    """build chapters: each word is a span the stage lights up in sync with the 3D"""
    return ' '.join(f'<span class="w">{w}</span>' for w in title.split())


def case_page(i, c):
    nxt = CASES[(i + 1) % len(CASES)]
    seed = i * 10
    slug = c['slug']
    # post-contents: chapter → media list → chapter → cover → chapter → media list → chapter
    blocks = []
    build = c.get('build')  # scroll-assembled 3D prop instead of static media
    intro_cls = ' case-intro--stack' if 'class="big"' in c['intro'] else ''
    for k, (name, text) in enumerate(zip(c.get('chn', CHAPTERS), c['ch'])):
        blocks.append(f'''        <div class="post-chapter{' post-chapter--build' if build else ''} js-in-view">
          <span class="chapter-num appear-fade-up">/0{k + 1}</span>
          <div>
            <h2 class="chapter-title appear-fade-up appear-delay--1">{words(name) if build else name}</h2>
            <p class="chapter-text appear-fade-up appear-delay--2">{text}</p>
          </div>
        </div>''')
        if build:
            continue
        if k == 0 or k == 2:
            a, b = ('media-1', 'media-2') if k == 0 else ('media-3', 'media-4')
            blocks.append(f'''        <div class="post-medias post-medias--list js-in-view">
          {art(slug, a, seed + k * 2 + 1, 'media-art appear-fade-up')}
          {art(slug, b, seed + k * 2 + 2, 'media-art media-art--offset appear-fade-up appear-delay--2')}
        </div>''')
        elif k == 1:
            blocks.append(f'''        <div class="post-cover js-in-view">
          {art(slug, 'wide', seed + 7, 'media-art appear-fade')}
        </div>''')
    main = f'''
      <header class="case-header container" data-gl-window>
        <a class="case-back label js-in-view appear-fade-up" href="/work.html" data-nav>← งานทั้งหมด</a>
        <span class="label js-in-view appear-fade-up" data-typewriter>เคส 0{i + 1} — {c['client']}</span>
        <h1 class="page-title js-in-view appear-fade-up appear-delay--1">{c['title']}</h1>
        <p class="case-intro{intro_cls} js-in-view appear-fade-up appear-delay--3">{c['intro']}</p>
        <dl class="case-metas js-in-view appear-fade-up appear-delay--4">
          <div><dt class="label">เข้าไปตอน</dt><dd>{c['stage']}</dd></div>
          <div><dt class="label">ปี</dt><dd>{c['year']}</dd></div>
          <div><dt class="label">สิ่งที่เปลี่ยน</dt><dd>{c['outcome']}</dd></div>
          <div><dt class="label">บริการ</dt><dd>{c['services']}</dd></div>
        </dl>
        {'' if build else art(slug, 'cover', seed, 'case-cover media-art js-in-view appear-fade-up appear-delay--5')}
      </header>

      <section class="post-contents{' post-contents--build' if build else ''} container">
{chr(10).join(blocks)}
      </section>

      <footer class="case-footer container js-in-view">
        <span class="label appear-fade-up">เคสถัดไป</span>
        <a class="case-next-link appear-fade-up appear-delay--2" href="{case_href(nxt)}" data-nav>
          <span class="case-next-title"><span class="dot {nxt['dot']}"></span>{nxt['title']}</span>
          <span class="case-next-arrow" aria-hidden="true">→</span>
        </a>
      </footer>
'''
    return main


PAGES = {
    'index.html': ('Hyper Gummy — เราทำให้โปรดักต์แมส ตั้งแต่ยังไม่เกิด',
                   'Hyper Gummy คือเอเจนซี่คอนเทนต์สำหรับแบรนด์ เราเข้าไปตั้งแต่โปรดักต์ยังเป็นแค่ส่วนผสม ไม่ใช่ตอนเสร็จแล้ว',
                   'home', HOME, ''),
    'work.html': ('งาน — Hyper Gummy', 'งานที่เราเข้าไปตั้งแต่ร่างแรก ก่อนโปรดักต์เสร็จ', 'work', WORK, ''),
    'craft.html': ('วิธีทำงาน — Hyper Gummy', 'ร่าง ชิม ปั้น ปล่อย — วิธีที่ Hyper Gummy ทำงานกับทีมโปรดักต์', 'craft', CRAFT, ''),
    'about.html': ('เรา — Hyper Gummy', 'เราคือคนที่อยู่ในห้องก่อนโปรดักต์จะมีชื่อ', 'about', ABOUT, ''),
    'contact.html': ('คุยกัน — Hyper Gummy', 'เอาร่างมาให้ดู ยิ่งดิบยิ่งดี — ตอบภายในสองวันทำการ', 'contact', CONTACT, ''),
}
for i, c in enumerate(CASES):
    PAGES[f'case-{c["slug"]}.html'] = (
        f'{c["title"]} — เคส Hyper Gummy', c['outcome'], 'case', case_page(i, c),
        f' data-gl-candy="{c["candy"]}" data-gl-color="{c["color"]}"' + (f' data-gl-build="{c["build"]}"' if c.get('build') else ''))

# drop stale case pages
for old in glob.glob(os.path.join(ROOT, 'case-*.html')):
    if os.path.basename(old) not in PAGES:
        os.remove(old)

BASE = os.environ.get('SITE_BASE', '/')  # e.g. /-refract/ when building for GitHub Pages


def rebase(html):
    """Prefix page links with BASE. /src/... stays absolute — Vite applies `base` to those."""
    if BASE == '/':
        return html
    import re
    html = html.replace('href="/"', f'href="{BASE}"').replace('href="/#', f'href="{BASE}#')
    return re.sub(r'href="/((?:case-)?[a-z-]+\.html)"', lambda m: f'href="{BASE}{m.group(1)}"', html)


for name, (title, desc, ns, main, extra) in PAGES.items():
    with io.open(os.path.join(ROOT, name), 'w', encoding='utf-8', newline='\n') as f:
        f.write(rebase(shell(title, desc, ns, main, extra)))
    print('wrote', name)
