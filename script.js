/* ================================================================
   PORTFOLIO — script.js
   Sections:
   1. Theme toggle (dark / light)
   2. Navbar — scroll style + active link highlighting
   3. Hamburger mobile menu
   4. Scroll-reveal (IntersectionObserver)
   5. Skill bars — animated fill on scroll into view
   6. Project filtering
   7. Contact form — client-side validation + simulated submit
   8. Back-to-top button
   9. Footer year
================================================================ */

/* ── Helpers ──────────────────────────────────────────────── */
const $  = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];


/* ── 1. THEME TOGGLE ────────────────────────────────────────── */
(function initTheme() {
  const html      = document.documentElement;
  const btn       = $('#theme-toggle');
  const icon      = $('#theme-icon');

  // Persist preference across page loads
  const saved = localStorage.getItem('theme') || 'dark';
  html.setAttribute('data-theme', saved);
  icon.textContent = saved === 'dark' ? '☀️' : '🌙';

  btn.addEventListener('click', () => {
    const current = html.getAttribute('data-theme');
    const next    = current === 'dark' ? 'light' : 'dark';
    html.setAttribute('data-theme', next);
    icon.textContent = next === 'dark' ? '☀️' : '🌙';
    localStorage.setItem('theme', next);
  });
})();


/* ── 2. NAVBAR ──────────────────────────────────────────────── */
(function initNavbar() {
  const navbar  = $('#navbar');
  const links   = $$('.navbar__links a');
  const sections = links.map(a => $(a.getAttribute('href')));

  // Add scrolled class when user scrolls past 50px
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
    highlightActiveLink();
  }, { passive: true });

  // Highlight the link whose section is currently in view
  function highlightActiveLink() {
    const scrollY = window.scrollY + window.innerHeight / 3;
    sections.forEach((section, i) => {
      if (!section) return;
      if (section.offsetTop <= scrollY &&
          section.offsetTop + section.offsetHeight > scrollY) {
        links.forEach(l => l.classList.remove('active'));
        links[i].classList.add('active');
      }
    });
  }

  highlightActiveLink();
})();


/* ── 3. HAMBURGER MOBILE MENU ───────────────────────────────── */
(function initMobileMenu() {
  const hamburger = $('#hamburger');
  const navLinks  = $('.navbar__links');

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    navLinks.classList.toggle('open');
    hamburger.setAttribute('aria-expanded',
      hamburger.classList.contains('open').toString());
  });

  // Close menu when a link is tapped
  $$('.navbar__links a').forEach(a => {
    a.addEventListener('click', () => {
      hamburger.classList.remove('open');
      navLinks.classList.remove('open');
    });
  });
})();


/* ── 4. SCROLL REVEAL ───────────────────────────────────────── */
(function initReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); // animate once
      }
    });
  }, { threshold: 0.12 });

  $$('.reveal').forEach(el => observer.observe(el));
})();


/* ── 5. SKILL BAR ANIMATION ─────────────────────────────────── */
(function initSkillBars() {
  // Fills each bar to its data-level value when it enters the viewport
  const bars     = $$('.skill-bar__fill');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const level = entry.target.dataset.level || '0';
        entry.target.style.width = level + '%';
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });

  bars.forEach(bar => observer.observe(bar));
})();


/* ── 6. PROJECT FILTERING ───────────────────────────────────── */
(function initFilter() {
  const filterBtns = $$('.filter-btn');
  const cards      = $$('.project-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const filter = btn.dataset.filter;

      // Update active button
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      // Show / hide cards with a quick fade
      cards.forEach(card => {
        const match = filter === 'all' || card.dataset.category === filter;
        if (match) {
          card.classList.remove('hidden');
          // Re-trigger reveal animation
          card.classList.remove('visible');
          requestAnimationFrame(() => card.classList.add('visible'));
        } else {
          card.classList.add('hidden');
        }
      });
    });
  });
})();


/* ── 7. CONTACT FORM ────────────────────────────────────────── */
(function initContactForm() {
  const form      = $('#contact-form');
  if (!form) return;

  const nameInput = $('#name');
  const emailInput= $('#email');
  const msgInput  = $('#message');
  const status    = $('#form-status');

  function showError(inputId, message) {
    const el = $(`#${inputId}-error`);
    if (el) el.textContent = message;
  }

  function clearError(inputId) {
    const el = $(`#${inputId}-error`);
    if (el) el.textContent = '';
  }

  function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  // Clear errors on input
  [nameInput, emailInput, msgInput].forEach(input => {
    input.addEventListener('input', () => clearError(input.id));
  });

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    let valid = true;

    if (!nameInput.value.trim()) {
      showError('name', 'Please enter your name.');
      valid = false;
    }

    if (!validateEmail(emailInput.value.trim())) {
      showError('email', 'Please enter a valid email address.');
      valid = false;
    }

    if (!msgInput.value.trim() || msgInput.value.trim().length < 10) {
      showError('message', 'Message must be at least 10 characters.');
      valid = false;
    }

    if (!valid) return;

    // Simulate an async form submission (replace with your actual API call)
    const submitBtn = form.querySelector('button[type="submit"]');
    submitBtn.disabled = true;
    submitBtn.textContent = 'Sending…';
    status.textContent = '';
    status.className = 'form-status';

    try {
      await fakeSubmit({ name: nameInput.value, email: emailInput.value, message: msgInput.value });
      status.textContent = 'Message sent! I\'ll get back to you soon.';
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

  // Replace this with a real fetch() call to your back-end or Formspree
  function fakeSubmit(data) {
    console.log('Form data (not yet wired to a backend):', data);
    return new Promise((resolve) => setTimeout(resolve, 1200));
  }
})();


/* ── 8. BACK-TO-TOP ─────────────────────────────────────────── */
(function initBackToTop() {
  const btn = $('#back-to-top');

  window.addEventListener('scroll', () => {
    btn.classList.toggle('visible', window.scrollY > 400);
  }, { passive: true });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
})();


/* ── 9. FOOTER YEAR ─────────────────────────────────────────── */
const yearEl = $('#year');
if (yearEl) yearEl.textContent = new Date().getFullYear();
