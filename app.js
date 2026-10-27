/* Site router, interactions, and legacy account/workspace handoff. */
import { PRODUCT, icon } from './src/catalog.js';
import { productPage, featuresPage, notFound } from './src/views.js';
import { pricingPage } from './src/pricing.js';

function renderRoute() {
  const path = window.location.pathname.replace(/\/+$/, '') || '/';
  document.body.dataset.site = 'outmate';
  document.body.dataset.page = path === '/pricing' ? 'pricing' : path.startsWith('/product/') ? 'product' : '';
  let markup;
  let pageDescription = 'OutMate connects prospecting, account research, buying signals, website visitors, social intelligence, and GTM agents in one revenue workflow.';
  if (path === '/') { window.location.reload(); return; }
  else if (path === '/features') { document.title = 'Platform overview — OutMate'; pageDescription = 'Explore the six connected OutMate capabilities: prospecting, account research, buying signals, website visitors, social and web intelligence, and GTM agents.'; markup = featuresPage(); }
  else if (path === '/pricing') { document.title = 'Pricing and access — OutMate'; pageDescription = 'Review OutMate capabilities and confirm current plan details, availability, and usage terms before making a decision.'; markup = pricingPage(); }
  else if (path.startsWith('/product/')) {
    const slug = path.split('/')[2]; const p = PRODUCT.find(x => x.slug === slug);
    if (p) { document.title = `${p.name} — OutMate`; pageDescription = p.description; markup = productPage(p); }
    else { document.title = 'Page not found — OutMate'; markup = notFound(); }
  } else { document.title = 'Page not found — OutMate'; markup = notFound(); }
  document.querySelector('meta[name="description"]')?.setAttribute('content', pageDescription);
  document.querySelector('meta[property="og:title"]')?.setAttribute('content', document.title);
  document.querySelector('meta[property="og:description"]')?.setAttribute('content', pageDescription);
  document.getElementById('app').innerHTML = markup;
  document.getElementById('year')?.replaceChildren(document.createTextNode(String(new Date().getFullYear())));
  wireInteractions();
  revealNow();
}
function wireInteractions() {
  const trigger = document.querySelector('.product-trigger');
  const menu = document.querySelector('.mega-menu');
  const productWrap = document.querySelector('.nav-product-wrap');
  const setProductMenu = open => {
    trigger?.setAttribute('aria-expanded', String(open));
    if (menu) menu.hidden = !open;
    productWrap?.classList.toggle('menu-open', open);
  };
  trigger?.addEventListener('click', () => setProductMenu(trigger.getAttribute('aria-expanded') !== 'true'));
  productWrap?.addEventListener('mouseenter', () => setProductMenu(true));
  productWrap?.addEventListener('mouseleave', () => setProductMenu(false));
  const megaLinks = [...document.querySelectorAll('.mega-link[data-mega]')];
  const megaPanels = [...document.querySelectorAll('[data-mega-panel]')];
  const activateMega = slug => {
    megaLinks.forEach(link => link.classList.toggle('is-active', link.dataset.mega === slug));
    megaPanels.forEach(panel => { panel.hidden = panel.dataset.megaPanel !== slug; });
  };
  if (megaLinks.length) {
    const current = window.location.pathname.split('/')[2];
    activateMega(megaLinks.some(link => link.dataset.mega === current) ? current : 'prospecting');
    megaLinks.forEach(link => link.addEventListener('mouseenter', () => activateMega(link.dataset.mega)));
  }
  const mobileToggle = document.querySelector('.mobile-menu-toggle');
  const mobileNav = document.querySelector('.mobile-nav');
  mobileToggle?.addEventListener('click', () => {
    const open = mobileToggle.getAttribute('aria-expanded') === 'true';
    mobileToggle.setAttribute('aria-expanded', String(!open));
    mobileToggle.setAttribute('aria-label', open ? 'Open navigation' : 'Close navigation');
    mobileToggle.innerHTML = icon(open ? 'menu' : 'close');
    if (mobileNav) mobileNav.hidden = open;
  });
  document.querySelectorAll('[data-preview-action]').forEach(button => button.addEventListener('click', () => showToast('This is illustrative sample data. Connect the live signal feed to open account-level results.')));
  const plans = document.querySelector('[data-billing]');
  if (plans) {
    const options = document.querySelectorAll('[data-billing-option]');
    options.forEach(button => button.addEventListener('click', () => {
      plans.dataset.billing = button.dataset.billingOption;
      options.forEach(other => other.setAttribute('aria-pressed', String(other === button)));
    }));
    document.querySelectorAll('[data-compare-group]').forEach(button => button.addEventListener('click', () => {
      const rows = document.getElementById(button.dataset.compareGroup);
      const open = button.getAttribute('aria-expanded') !== 'false';
      button.setAttribute('aria-expanded', String(!open));
      if (rows) rows.hidden = open;
    }));
  }
  document.querySelectorAll('a[href^="/"]').forEach(link => {
    if (link.hasAttribute('data-no-router') || link.target === '_blank') return;
    link.addEventListener('click', event => {
      const url = new URL(link.href, window.location.href);
      if (url.origin !== window.location.origin || url.pathname === '/' || url.pathname === '/login' || url.pathname === '/signup' || url.pathname.startsWith('/forgot-password') || url.pathname.startsWith('/reset-password') || url.pathname.startsWith('/verify-email') || url.pathname === '/app') return;
      if (url.pathname === window.location.pathname && url.hash) return;
      event.preventDefault();
      history.pushState({}, '', url.pathname + url.search + url.hash);
      renderRoute();
      if (url.hash) requestAnimationFrame(() => document.querySelector(url.hash)?.scrollIntoView({ behavior: 'smooth', block: 'start' }));
      else window.scrollTo(0, 0);
    });
  });
}
function showToast(message) {
  let toast = document.querySelector('.site-toast');
  if (!toast) { toast = document.createElement('div'); toast.className = 'site-toast'; toast.setAttribute('role','status'); document.body.appendChild(toast); }
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => toast.classList.remove('show'), 5200);
}
function revealNow() {
  const elements = document.querySelectorAll('.reveal:not(.is-visible)');
  if (!('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) { elements.forEach(el => el.classList.add('is-visible')); return; }
  const observer = new IntersectionObserver((entries, obs) => entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('is-visible'); obs.unobserve(entry.target); } }), { threshold: .08, rootMargin: '0px 0px -4% 0px' });
  elements.forEach(el => observer.observe(el));
}

document.addEventListener('click', (event) => {
  if (!event.target.closest('.nav-product-wrap')) {
    const trigger = document.querySelector('.product-trigger');
    const menu = document.querySelector('.mega-menu');
    trigger?.setAttribute('aria-expanded', 'false');
    if (menu) menu.hidden = true;
    document.querySelector('.nav-product-wrap')?.classList.remove('menu-open');
  }
});

/* Keep existing compiled auth and app routes intact: the uploaded archive includes the deployed
   bundle but not source. Load that bundle for those routes rather than replacing auth/workspace. */
const pathname = window.location.pathname.replace(/\/+$/, '') || '/';
const legacyRoutes = ['/', '/login', '/signup', '/forgot-password', '/reset-password', '/verify-email', '/app'];
if (legacyRoutes.some(route => pathname === route || pathname.startsWith(route + '/'))) {
  document.body.removeAttribute('data-site');
  document.body.className = 'font-sans antialiased';
  document.getElementById('app').id = 'root';
  document.getElementById('root').innerHTML = '';
  document.title = pathname === '/' ? 'OutMate — GTM Signals, Intelligence, and Action' : pathname.startsWith('/app') ? 'OutMate Workspace' : 'OutMate account';
  const link = document.createElement('link'); link.rel = 'stylesheet'; link.href = '/assets/index-DOSa__M2.css'; document.head.appendChild(link);
  const overrides = document.createElement('link'); overrides.rel = 'stylesheet'; overrides.href = '/layout-overrides.css'; document.head.appendChild(overrides);
  const script = document.createElement('script'); script.type = 'module'; script.src = '/assets/index-BR2VCtzM.js'; document.body.appendChild(script);
} else {
  window.addEventListener('popstate', renderRoute);
  window.addEventListener('keydown', event => { if (event.key === 'Escape') { const m = document.querySelector('.mega-menu'); const t = document.querySelector('.product-trigger'); if (m) m.hidden = true; if (t) t.setAttribute('aria-expanded', 'false'); document.querySelector('.nav-product-wrap')?.classList.remove('menu-open'); } });
  renderRoute();
}
