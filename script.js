/* ================================================================
   James Daniel Mauricio — Portfolio
   script.js

   1. Theme toggle (dark ↔ light, persisted to localStorage)
   2. Navbar — scrolled style + active-link highlighting
   3. Hamburger mobile menu
   4. Scroll-reveal via IntersectionObserver
   5. Project filtering
   6. Contact form — validation + simulated submit
   7. Back-to-top button
   8. Footer year
================================================================ */

/* ── Tiny selector helpers ─────────────────────────────────── */
const $  = (s, c = document) => c.querySelector(s);
const $$ = (s, c = document) => [...c.querySelectorAll(s)];


/* ── 1. THEME TOGGLE ────────────────────────────────────────── */
(function initTheme() {
  const html = document.documentElement;
  const btn  = $('#theme-toggle');
  const icon = $('#theme-icon');

  const saved = localStorage.getItem('jdm-theme') || 'dark';
  html.setAttribute('data-theme', saved);
  icon.textContent = saved === 'dark' ? '☀️' : '🌙';

  btn.addEventListener('click', () => {
    const next = html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    html.setAttribute('data-theme', next);
    icon.textContent = next === 'dark' ? '☀️' : '🌙';
    localStorage.setItem('jdm-theme', next);
  });
})();


/* ── 2. NAVBAR ──────────────────────────────────────────────── */
(function initNavbar() {
  const navbar   = $('#navbar');
  const links    = $$('.navbar__links a');
  const sections = links.map(a => $(a.getAttribute('href')));

  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
    highlightActive();
  }, { passive: true });

  function highlightActive() {
    const mid = window.scrollY + window.innerHeight / 3;
    sections.forEach((sec, i) => {
      if (!sec) return;
      if (sec.offsetTop <= mid && sec.offsetTop + sec.offsetHeight > mid) {
        links.forEach(l => l.classList.remove('active'));
        links[i].classList.add('active');
      }
    });
  }

  highlightActive();
})();


/* ── 3. HAMBURGER ───────────────────────────────────────────── */
(function initMobileMenu() {
  const btn   = $('#hamburger');
  const links = $('.navbar__links');

  btn.addEventListener('click', () => {
    const open = btn.classList.toggle('open');
    links.classList.toggle('open', open);
    btn.setAttribute('aria-expanded', String(open));
  });

  // Close on link tap
  $$('.navbar__links a').forEach(a => {
    a.addEventListener('click', () => {
      btn.classList.remove('open');
      links.classList.remove('open');
      btn.setAttribute('aria-expanded', 'false');
    });
  });
})();


/* ── 4. SCROLL REVEAL ───────────────────────────────────────── */
(function initReveal() {
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });

  $$('.reveal').forEach(el => io.observe(el));
})();


/* ── 5. PROJECT FILTERING ───────────────────────────────────── */
/* Not used in this version (all projects visible by default),
   but the structure is here if you want to add data-category
   attributes and filter buttons later. */


/* ── 6. CONTACT FORM ────────────────────────────────────────── */
(function initForm() {
  const form   = $('#contact-form');
  if (!form) return;

  const name   = $('#name');
  const email  = $('#email');
  const msg    = $('#message');
  const status = $('#form-status');

  const setError  = (id, txt) => { const e = $(`#${id}-error`); if (e) e.textContent = txt; };
  const clearErr  = (id)      => { const e = $(`#${id}-error`); if (e) e.textContent = '';  };
  const validMail = (v)       => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

  [name, email, msg].forEach(inp => inp.addEventListener('input', () => clearErr(inp.id)));

  form.addEventListener('submit', async e => {
    e.preventDefault();
    let ok = true;

    if (!name.value.trim())         { setError('name',    'Please enter your name.');               ok = false; }
    if (!validMail(email.value))    { setError('email',   'Please enter a valid email.');           ok = false; }
    if (msg.value.trim().length < 10) { setError('message','Message must be at least 10 chars.');  ok = false; }

    if (!ok) return;

    const submitBtn = form.querySelector('button[type="submit"]');
    submitBtn.disabled = true;
    submitBtn.textContent = 'Sending…';
    status.textContent = '';
    status.className = 'form-status';

    try {
      /* ── Replace fakeSubmit() with a real fetch() to your backend or Formspree:
         await fetch('https://formspree.io/f/YOUR_ID', {
           method: 'POST',
           headers: { 'Content-Type': 'application/json' },
           body: JSON.stringify({ name: name.value, email: email.value, message: msg.value })
         });
      ── */
      await fakeSubmit();
      status.textContent = "Message sent! I'll get back to you soon.";
      status.classList.add('success');
      form.reset();
    } catch {
      status.textContent = 'Something went wrong. Please try again.';
      status.classList.add('error');
    } finally {
      submitBtn.disabled = false;
      submitBtn.textContent = 'Send Message';
    }
  });

  function fakeSubmit() {
    return new Promise(res => setTimeout(res, 1200));
  }
})();


/* ── 7. BACK-TO-TOP ─────────────────────────────────────────── */
(function initBackToTop() {
  const btn = $('#back-to-top');
  window.addEventListener('scroll', () => {
    btn.classList.toggle('visible', window.scrollY > 400);
  }, { passive: true });
  btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
})();


/* ── 8. FOOTER YEAR ─────────────────────────────────────────── */
const yr = $('#year');
if (yr) yr.textContent = new Date().getFullYear();
