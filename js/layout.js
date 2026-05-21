/* ══════════════════════════════════════════
   REDROCKX — NAVBAR + FOOTER INJECTOR
   Include this AFTER the CSS link, BEFORE </body>
══════════════════════════════════════════ */

(function () {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';

  // Resolve paths: pages/ are one level deeper
  const isSubPage = window.location.pathname.includes('/pages/');
  const root = isSubPage ? '../' : './';

  const links = [
    { page: 'index.html',      label: 'Home',      href: root + 'index.html' },
    { page: 'about.html',      label: 'About',     href: root + 'pages/about.html' },
    { page: 'mind.html',       label: 'Mind',      href: root + 'pages/mind.html' },
    { page: 'nutrition.html',  label: 'Nutrition', href: root + 'pages/nutrition.html' },
    { page: 'fitness.html',    label: 'Fitness',   href: root + 'pages/fitness.html' },
    { page: 'contact.html',    label: 'Contact',   href: root + 'pages/contact.html', cta: true },
  ];

  const navItems = links.map(l =>
    `<li><a href="${l.href}" class="nav-link-rrx${l.cta ? ' nav-cta-rrx' : ''}${currentPage === l.page ? ' active' : ''}" data-page="${l.page}">${l.label}</a></li>`
  ).join('');

  const mobileItems = links.map(l =>
    `<a href="${l.href}" class="nav-link-rrx${l.cta ? ' nav-cta-rrx' : ''}${currentPage === l.page ? ' active' : ''}" data-page="${l.page}">${l.label}</a>`
  ).join('');

  const navbarHTML = `
  <nav class="navbar-rrx">
    <div style="max-width:1180px;margin:0 auto;display:flex;align-items:center;justify-content:space-between;height:70px;padding:0;">
      <a href="${root}index.html" class="navbar-brand-rrx">
        <div class="brand-logo-box">RX</div>
        <div>
          <div class="brand-text-top">RedRoc<span style="color:var(--red)">X</span></div>
          <div class="brand-text-bot">Fitness Club</div>
        </div>
      </a>
      <ul class="navbar-nav-rrx">${navItems}</ul>
      <button class="hamburger-rrx" id="hamburger" aria-label="Toggle menu">
        <span></span><span></span><span></span>
      </button>
    </div>
  </nav>
  <div class="mobile-menu" id="mobileMenu">${mobileItems}</div>
  `;

  const footerHTML = `
  <footer class="footer-rrx">
    <div class="container-rrx">
      <div style="display:grid;grid-template-columns:1.4fr 1fr 1fr 1fr;gap:3rem;margin-bottom:0;" class="footer-grid">
        <div>
          <div class="footer-brand">RedRoc<span>X</span></div>
          <div class="footer-tagline">Mind · Body · Nutrition</div>
          <p class="footer-desc">A premium fitness space built for those who strive to become better every day. Founded in Pen, Maharashtra — we are more than a gym.</p>
          <div class="footer-social">
            <a href="https://www.instagram.com/redroc_x_wellness/" target="_blank" title="Instagram">📷</a>
            <a href="https://www.facebook.com/profile.php?id=61563380281038" target="_blank" title="Facebook">📘</a>
            <a href="https://wa.me/919137601243" target="_blank" title="WhatsApp">💬</a>
            <a href="https://maps.app.goo.gl/VQNYSq7yvDHKL4Fo7" target="_blank" title="Google Maps">📍</a>
          </div>
        </div>
        <div>
          <div class="footer-heading">Quick Links</div>
          <ul class="footer-links-list">
            <li><a href="${root}index.html">Home</a></li>
            <li><a href="${root}pages/about.html">About Us</a></li>
            <li><a href="${root}pages/mind.html">Mind & Wellness</a></li>
            <li><a href="${root}pages/nutrition.html">Nutrition</a></li>
            <li><a href="${root}pages/fitness.html">Fitness</a></li>
            <li><a href="${root}pages/contact.html">Contact</a></li>
          </ul>
        </div>
        <div>
          <div class="footer-heading">Our Services</div>
          <ul class="footer-links-list">
            <li><a href="${root}pages/mind.html">Meditation & Mindfulness</a></li>
            <li><a href="${root}pages/mind.html">Stress Management</a></li>
            <li><a href="${root}pages/nutrition.html">Diet Plans</a></li>
            <li><a href="${root}pages/nutrition.html">Weight Management</a></li>
            <li><a href="${root}pages/fitness.html">Strength Training</a></li>
            <li><a href="${root}pages/fitness.html">Personal Training</a></li>
          </ul>
        </div>
        <div>
          <div class="footer-heading">Contact Us</div>
          <div class="footer-contact-item">
            <div class="footer-contact-icon">📍</div>
            <div class="footer-contact-text"><strong>Address</strong>Pen, Raigad District, Maharashtra 402107</div>
          </div>
          <div class="footer-contact-item">
            <div class="footer-contact-icon">📞</div>
            <div class="footer-contact-text"><strong>Phone</strong><a href="tel:+919137601243" style="color:inherit;">+91 91376 01243</a></div>
          </div>
          <div class="footer-contact-item">
            <div class="footer-contact-icon">🕐</div>
            <div class="footer-contact-text"><strong>Hours</strong>Mon–Sat: 6AM–10PM<br>Sun: 8AM–2PM</div>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <div class="footer-copy">© 2026 <span>RedRocX</span> Fitness Club. All rights reserved.</div>
        <div class="footer-copy">Designed with ❤️ in Pen, Maharashtra</div>
      </div>
    </div>
  </footer>
  <style>
  @media(max-width:900px){
    .footer-grid{grid-template-columns:1fr 1fr!important;}
  }
  @media(max-width:576px){
    .footer-grid{grid-template-columns:1fr!important;}
  }
  </style>
  `;

  // Inject navbar immediately (script is at top of body, so this is first)
  document.body.insertAdjacentHTML('afterbegin', navbarHTML);

  // Inject footer AFTER all page content has been parsed
  document.addEventListener('DOMContentLoaded', function () {
    document.body.insertAdjacentHTML('beforeend', footerHTML);
  });
})();
