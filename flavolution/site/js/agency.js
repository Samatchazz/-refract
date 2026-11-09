/* Agency pages: pills, loader, reveals, cursor card, quiz chips, LINE link */
(function () {
  var doc = document.documentElement;
  doc.classList.add('js');
  var reduce = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;

  // pill hover roll: wrap label so it can slide to a copy of itself
  [].forEach.call(document.querySelectorAll('.pill'), function (p) {
    if (p.querySelector('.pill__in')) return;
    var t = p.textContent.trim();
    p.innerHTML = '<span class="pill__clip"><span class="pill__in" data-t="' + t.replace(/"/g, '&quot;') + '">' + p.innerHTML + '</span></span>';
  });

  // loader: home only, once per browser session
  var loader = document.querySelector('.loader');
  // (an inline script right after the loader un-hides it before first paint)
  if (loader && !loader.hidden) {
    var out = function () { loader.classList.add('is-out'); setTimeout(function () { loader.hidden = true; }, 900); };
    setTimeout(out, 1900);
    loader.addEventListener('click', out);
  }

  // voices: drag to scroll on desktop
  var vs = document.getElementById('voices');
  if (vs) {
    var down = false, sx = 0, sl = 0, moved = false;
    vs.addEventListener('pointerdown', function (e) { if (e.pointerType !== 'mouse') return; down = true; moved = false; sx = e.clientX; sl = vs.scrollLeft; vs.style.scrollSnapType = 'none'; });
    window.addEventListener('pointerup', function () { if (!down) return; down = false; vs.style.scrollSnapType = ''; });
    vs.addEventListener('pointermove', function (e) { if (!down) return; var d = e.clientX - sx; if (Math.abs(d) > 4) moved = true; vs.scrollLeft = sl - d; });
    vs.addEventListener('click', function (e) { if (moved) { e.preventDefault(); moved = false; } }, true);
    vs.addEventListener('dragstart', function (e) { e.preventDefault(); });
  }

  // reveal on scroll (.rv fades up; .roll lines roll to their second copy)
  var rv = document.querySelectorAll('.rv, .roll');
  if ('IntersectionObserver' in window && !reduce) {
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('is-in'); io.unobserve(e.target); } });
    }, { rootMargin: '0px 0px -8% 0px' });
    [].forEach.call(rv, function (el) { io.observe(el); });
  } else {
    [].forEach.call(rv, function (el) { el.classList.add('is-in'); });
  }

  // cursor card over [data-cursor] sections
  var cur = document.querySelector('.cursor');
  if (cur && matchMedia('(hover: hover) and (pointer: fine)').matches) {
    var zones = document.querySelectorAll('[data-cursor]');
    var x = 0, y = 0, raf = 0;
    [].forEach.call(zones, function (z) {
      z.addEventListener('pointerenter', function () { cur.classList.add('is-on'); });
      z.addEventListener('pointerleave', function () { cur.classList.remove('is-on'); });
    });
    document.addEventListener('pointermove', function (e) {
      x = e.clientX + 16; y = e.clientY + 16;
      if (!raf) raf = requestAnimationFrame(function () { cur.style.transform = 'translate(' + x + 'px,' + y + 'px)'; raf = 0; });
    });
    // hide over links so it never covers a button label
    document.addEventListener('pointerover', function (e) {
      var onLink = e.target.closest && e.target.closest('a, button, summary');
      cur.style.visibility = onLink ? 'hidden' : '';
    });
  }

  // logo: white over photo sections, black elsewhere
  var logo = document.querySelector('.top__logo');
  if (logo) {
    var dark = [].slice.call(document.querySelectorAll('.hero, .phero, .pre, .sec--ink'));
    var tone = function () {
      var y = logo.getBoundingClientRect().top + 12;
      logo.classList.toggle('is-light', dark.some(function (d) { var r = d.getBoundingClientRect(); return r.top <= y && r.bottom >= y; }));
    };
    tone();
    window.addEventListener('scroll', tone, { passive: true });
    window.addEventListener('resize', tone);
  }

  // quiz opens as an overlay on top of the current page (quiz.html?embed=1 in an iframe)
  var qo = null, lastFocus = null;
  function openQuiz(r) {
    if (qo) return;
    lastFocus = document.activeElement;
    qo = document.createElement('div');
    qo.className = 'qo';
    qo.setAttribute('role', 'dialog');
    qo.setAttribute('aria-modal', 'true');
    qo.setAttribute('aria-label', 'ควิซ หนึ่งวันในร้านของคุณ');
    qo.innerHTML = '<a class="pill qo__close" href="#" data-close>✕ ปิด</a><iframe title="ควิซ หนึ่งวันในร้านของคุณ" src="quiz.html?embed=1' + (r ? '#r=' + encodeURIComponent(r) : '') + '"></iframe>';
    document.body.appendChild(qo);
    document.body.classList.add('qo-open');
    void qo.offsetWidth; qo.classList.add('is-on');
    qo.querySelector('[data-close]').addEventListener('click', function (e) { e.preventDefault(); closeQuiz(); });
    var fr = qo.querySelector('iframe');
    fr.addEventListener('load', function () { try { fr.contentWindow.focus(); } catch (e) {} });
    if (!/^#play/.test(location.hash)) history.pushState({ quiz: 1 }, '', '#play');
  }
  function closeQuiz(fromHistory) {
    if (!qo) return;
    var el = qo; qo = null;
    el.classList.remove('is-on');
    document.body.classList.remove('qo-open');
    setTimeout(function () { el.remove(); }, 300);
    if (!fromHistory && /^#play/.test(location.hash)) history.replaceState(null, '', location.pathname + location.search);
    if (lastFocus && lastFocus.focus) lastFocus.focus();
  }
  document.addEventListener('click', function (e) {
    // match quiz.html and host-rewritten forms like /quiz (Netlify "Pretty URLs")
    var a = e.target.closest && e.target.closest('a[href]');
    if (!a || !/(^|\/)quiz(\.html)?$/.test(a.pathname) || a.hash || e.metaKey || e.ctrlKey || e.shiftKey || e.button) return;
    e.preventDefault();
    openQuiz();
  });
  window.addEventListener('message', function (e) { if (e.origin === location.origin && e.data === 'flav-quiz-close') closeQuiz(); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && qo) closeQuiz(); });
  window.addEventListener('popstate', function () { if (qo && !/^#play/.test(location.hash)) closeQuiz(true); else if (!qo && /^#play/.test(location.hash)) openQuiz(); });
  var hm = location.hash.match(/^#play(?:-r=([a-z]+))?/);
  if (hm) openQuiz(hm[1]);

  var F = window.FLAV;
  if (!F) return;

  // home: 10 archetype chips
  var chips = document.getElementById('arch-chips');
  if (chips) {
    var cols = ['#fff', '#ECC8EB', '#69B16A', '#5A92E7', '#FFA23C'];
    var rot = [-3, 2, -1, 3, -2, 1, -3, 2, 0, -2];
    chips.innerHTML = F.ARCH_ORDER.map(function (c, i) {
      return '<li style="--c:' + cols[i % cols.length] + ';--r:' + rot[i] + 'deg">' + F.ARCH[c].n + '</li>';
    }).join('');
  }

  // contact: LINE button
  var link = document.getElementById('line-link');
  if (link) {
    var id = (F.LINE_OA_ID || '').trim();
    var note = document.getElementById('line-note');
    if (id) {
      link.href = 'https://line.me/R/ti/p/' + encodeURIComponent(id);
      link.target = '_blank'; link.rel = 'noopener';
    } else {
      link.addEventListener('click', function (e) { e.preventDefault(); });
      if (note) note.textContent = 'ยังไม่ได้ใส่ LINE OA ID (ตั้งค่าใน js/data.js)';
    }
  }
})();
