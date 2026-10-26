/* Pricing page: plan data, comparison matrix, and page template.
   All prices and allowances are provisional sample data—edit PLANS and COMPARE only. */
import { icon } from './catalog.js';
import { header, footer } from './views.js';

export const PLANS = [
  { id: 'free', name: 'Free', monthly: 0, annual: 0, seats: '1', credits: '250',
    tagline: 'Explore OutMate with a limited monthly allocation—enough to research a short list and see how the workflow fits.',
    cta: 'Start for free', href: '/signup', popular: false, foot: 'No credit card required.',
    features: ['Natural-language search and basic company research', 'Up to 1 saved list and CSV export (100 rows)', 'Weekly hiring and funding digest', 'Community support'] },
  { id: 'growth', name: 'Growth', monthly: 49, annual: 39, seats: '3', credits: '5,000',
    tagline: 'For individuals and small GTM teams who research every week and want enrichment and signals in one workspace.',
    cta: 'Start with Growth', href: '/signup', popular: true, foot: 'Start instantly. Upgrade or cancel anytime.',
    features: ['Advanced search filters and saved segments', '2,500 enriched company and contact records / mo', 'Daily hiring, funding, and web signals', 'HubSpot integration and 5 research agents', 'Email support'] },
  { id: 'scale', name: 'Scale', monthly: 149, annual: 119, seats: '10', credits: '25,000',
    tagline: 'For revenue teams running recurring research, richer signal coverage, and repeatable agent workflows.',
    cta: 'Start with Scale', href: '/signup', popular: false, foot: 'Guided setup available for your first workflow.',
    features: ['Advanced enrichment and 10 saved segments', 'Visitor identification for 10,000 accounts / mo', 'Real-time hiring, funding, technology, and web signals', '20 GTM workflows and read API access', 'Roles, permissions, and priority support'] },
  { id: 'enterprise', name: 'Enterprise', monthly: null, annual: null, seats: 'Custom', credits: 'Custom',
    tagline: 'For organizations that need custom capacity, additional controls, and a dedicated rollout.',
    cta: 'Talk to sales', href: 'mailto:sales@outmate.ai?subject=OutMate%20Enterprise', popular: false, foot: 'Custom onboarding and procurement support.',
    features: ['Custom research credit and enrichment volume', 'Custom signal sources and integration work', 'Unlimited seats with SSO, SCIM, and audit logs', 'Usage analytics and workspace administration', 'Full API and webhook access', 'Dedicated success manager, DPA, and SLA'] }
];

const Y = '✓', N = '—';

export const COMPARE = [
  { id: 'cg-1', title: 'Prospecting and data', open: true, rows: [
    ['Company and contact discovery', '250 credits / mo', '5,000 credits / mo', '25,000 credits / mo', 'Custom'],
    ['Search filters', 'Basic', 'Advanced', 'Advanced + saved segments', 'Custom'],
    ['Company and contact enrichment', '100 records / mo', '2,500 records / mo', '15,000 records / mo', 'Custom'],
    ['Saved lists', '1', '10', 'Unlimited', 'Unlimited'],
    ['Export capabilities', 'CSV · 100 rows / mo', 'CSV · 10,000 rows / mo', 'CSV + API', 'CSV + API + webhooks']
  ] },
  { id: 'cg-2', title: 'Account research', open: true, rows: [
    ['Company research', Y, Y, Y, Y],
    ['Decision-maker discovery', 'Limited', '5 per account', '10 per account', 'Custom'],
    ['Account summaries', '25 / mo', '500 / mo', '2,500 / mo', 'Custom'],
    ['Research runs and usage', '250 credits / mo', '5,000 credits / mo', '25,000 credits / mo', 'Custom']
  ] },
  { id: 'cg-3', title: 'Buying signals and intelligence', open: true, rows: [
    ['Website visitor identification', N, '1,000 accounts / mo', '10,000 accounts / mo', 'Custom'],
    ['Buying-intent signals', N, Y, '✓ + custom sources', '✓ + custom sources'],
    ['Hiring and funding signals', 'Weekly digest', 'Daily', 'Real-time', 'Real-time'],
    ['Technology intelligence', N, 'Basic', 'Advanced', 'Advanced'],
    ['Social and web intelligence', N, 'Limited', Y, Y]
  ] },
  { id: 'cg-4', title: 'AI agents and automation', open: false, rows: [
    ['Research agents', N, '5 active', '25 active', 'Custom'],
    ['GTM agents', N, '2 workflows', '20 workflows', 'Custom'],
    ['Workflow execution', N, '500 runs / mo', '5,000 runs / mo', 'Custom'],
    ['Scheduled or recurring workflows', N, Y, Y, Y],
    ['Advanced automation capabilities', N, N, Y, 'Custom']
  ] },
  { id: 'cg-5', title: 'Integrations', open: false, rows: [
    ['CRM integrations', N, '1', '3', 'Custom'],
    ['HubSpot integration', N, Y, Y, Y],
    ['Additional integrations', N, N, Y, 'Custom'],
    ['API access', N, N, 'Read API', 'Full API + webhooks'],
    ['Custom integration requirements', N, N, N, Y]
  ] },
  { id: 'cg-6', title: 'Administration and support', open: false, rows: [
    ['Included seats', ...PLANS.map(p => p.seats)],
    ['Usage limits', ...PLANS.map(p => `${p.credits} credits / mo`)],
    ['Workspace administration', N, 'Basic', Y, 'Advanced'],
    ['Access controls', N, N, 'Roles and permissions', 'SSO, SCIM, audit logs'],
    ['Usage analytics', N, 'Basic', 'Advanced', 'Custom reporting'],
    ['Support level', 'Community', 'Email', 'Priority email + Slack', 'Dedicated success manager'],
    ['Enterprise requirements', N, N, N, 'DPA, SLA, custom onboarding']
  ] }
];

const FAQS = [
  ['What is included in the free plan?', 'The Free plan includes 250 research credits per month, natural-language search, basic company research, one saved list, a limited CSV export, and the weekly hiring and funding digest. It is meant for evaluating the workspace, not running an ongoing GTM motion.'],
  ['How do OutMate credits work?', 'Credits are the shared usage unit across the workspace. Company research, company and contact enrichment, and AI workflow runs each consume credits, and the amount depends on the request—a short company summary costs less than a full account brief with decision-maker context. Your plan resets the allocation each billing month.'],
  ['What happens when I use all my credits?', 'Research and enrichment stop consuming new requests until the next reset, while data you have already saved remains available. Paid plans can buy additional credits or move to a higher tier; Free workspaces can upgrade at any time.'],
  ['Can I change plans later?', 'Yes. Upgrades take effect immediately and the unused portion of the current period is prorated. Downgrades apply at the end of the current billing period so you keep the capacity you have already paid for.'],
  ['How does annual billing work?', 'Annual plans are charged once for twelve months at the discounted monthly-equivalent rate shown on each card. Monthly plans renew every month. Both can be cancelled, and annual plans receive the saving shown next to the billing selector.'],
  ['Can multiple teammates use the same workspace?', 'Yes. Growth includes three seats and Scale includes ten, each with a separate sign-in and shared access to research, lists, and workflows. Enterprise supports custom seat counts plus roles, SSO, and audit controls.'],
  ['Which integrations are available?', 'HubSpot is available on every paid plan. Growth supports one CRM integration, Scale supports three plus a read API, and Enterprise adds the full API, webhooks, and custom integration work.'],
  ['Can I purchase additional usage?', 'Paid workspaces can add credit packs at any time without changing plans. Enterprise contracts can include committed or flexible capacity instead of fixed monthly allocations.'],
  ['What should larger organizations do if they need custom requirements?', 'Talk to sales. Enterprise covers custom seat counts, signal sources, integration work, security review, a DPA and SLA, and a dedicated success manager for onboarding and rollout.']
];

function price(p) {
  if (p.monthly === null) return '<span class="plan-amount">Custom</span><span class="plan-unit">pricing</span>';
  const amt = n => `$${n.toLocaleString('en-US')}`;
  return `<span class="plan-amount"><span class="amt-annual">${amt(p.annual)}</span><span class="amt-monthly">${amt(p.monthly)}</span></span><span class="plan-unit">/ month</span>`;
}

function billingLine(p) {
  if (p.id === 'free') return 'No card required.';
  if (p.id === 'enterprise') return '<span class="bill-annual">Annual agreement</span><span class="bill-monthly">Monthly agreement</span>';
  return `<span class="bill-annual">Billed $${(p.annual * 12).toLocaleString('en-US')} once a year</span><span class="bill-monthly">Billed $${p.monthly.toLocaleString('en-US')} each month</span>`;
}

function planCard(p, index) {
  const cls = p.popular ? 'plan-card is-popular reveal' : 'plan-card reveal';
  const cta = p.popular ? 'button button-primary plan-cta' : 'button button-secondary plan-cta';
  return `<article class="${cls}" style="--delay:${index * 55}ms">
    <div class="plan-top"><span class="plan-name">${p.name}</span>${p.popular ? '<span class="plan-badge">Most popular</span>' : ''}</div>
    <p class="plan-desc">${p.tagline}</p>
    <div class="plan-price">${price(p)}</div>
    <div class="plan-billing">${billingLine(p)}</div>
    <div class="plan-meta"><span><b>${p.seats}</b> ${p.seats === '1' ? 'seat' : 'seats'}</span><span><b>${p.credits}</b> credits / mo</span></div>
    <a class="${cta}" href="${p.href}" ${p.href.startsWith('mailto:') ? 'data-no-router' : ''}>${p.cta} ${icon('arrow')}</a>
    <span class="plan-foot">${p.foot}</span>
    <ul class="plan-features">${p.features.map(f => `<li>${icon('check')}<span>${f}</span></li>`).join('')}</ul>
  </article>`;
}

function compareCell(v) {
  if (v === Y) return '<td><span class="c-yes" aria-label="Included">✓</span></td>';
  if (v === N) return '<td><span class="c-no" aria-label="Not included">—</span></td>';
  return `<td><span class="c-lim">${v}</span></td>`;
}

function compareTable() {
  const head = `<thead><tr><th scope="col">Feature</th>${PLANS.map(p => `<th scope="col" class="${p.popular ? 'is-popular' : ''}">${p.name}</th>`).join('')}</tr></thead>`;
  const body = COMPARE.map(g => `<tr class="group-head"><td colspan="5"><button class="compare-toggle" type="button" aria-expanded="${g.open}" aria-controls="${g.id}" data-compare-group="${g.id}"><span>${g.title}</span>${icon('down')}</button></td></tr>
    <tbody id="${g.id}"${g.open ? '' : ' hidden'}>${g.rows.map(r => `<tr><td>${r[0]}</td>${r.slice(1).map(compareCell).join('')}</tr>`).join('')}</tbody>`).join('');
  return `<p class="compare-hint">Swipe to compare all four plans ${icon('arrow')}</p><div class="compare-scroll" role="region" aria-label="Plan feature comparison" tabindex="0"><table class="compare-table">${head}<tbody>${body}</tbody></table></div>`;
}

export function pricingPage() {
  return `${header()}<main id="top">
    <section class="simple-hero pricing-hero"><div class="container simple-hero-inner reveal"><span class="eyebrow"><span class="eyebrow-dot"></span> PLANS &amp; USAGE</span><h1>Start small.<br><span>Scale when the signal does.</span></h1><p>Begin with the research you need today and add capacity as prospecting, account intelligence, and automation grow. Every plan runs on the same connected OutMate workspace—free to start, straightforward to expand.</p></div></section>
    <section class="section pricing-options" id="plans"><div class="container">
      <div class="billing-bar reveal" role="group" aria-label="Billing period">
        <div class="billing-toggle"><button class="billing-option" type="button" data-billing-option="monthly" aria-pressed="false">Monthly</button><button class="billing-option" type="button" data-billing-option="annual" aria-pressed="true">Annual <span class="billing-save">Save 20%</span></button></div>
        <p class="billing-note">Annual billing is charged once for twelve months at the monthly-equivalent rate shown. Monthly billing renews each month.</p>
      </div>
      <div class="plans-grid" data-billing="annual">${PLANS.map(planCard).join('')}</div>
      <p class="pricing-note">Plan names, prices, and usage allowances are provisional and subject to change before launch.</p>
      <div class="usage-note reveal"><span>${icon('layers')}</span><p><b>One credit pool, shared across the workspace.</b> Credits cover company research, company and contact enrichment, and AI workflow runs. A short company summary costs less than a full account brief with decision-maker context, so usage depends on what you run. Allocations reset each billing month and unused credits do not roll over. <a href="#faq">Read the credit FAQ</a>.</p></div>
    </div></section>
    <section class="section compare-section" id="compare"><div class="container"><div class="section-heading reveal"><span class="eyebrow">COMPARE PLANS</span><h2>See what changes<br><span>as you move up.</span></h2><p>Every tier keeps the same connected workspace. The differences are capacity, signal coverage, enrichment depth, and the controls your team needs.</p></div>${compareTable()}</div></section>
    <section class="section faq-section" id="faq"><div class="container faq-layout"><div class="faq-intro reveal"><span class="eyebrow">QUESTIONS &amp; DETAILS</span><h2>Before you<br><span>choose a plan.</span></h2><p>How credits, billing, seats, and integrations work across OutMate plans.</p></div><div class="faq-list reveal">${FAQS.map(([q, a]) => `<details class="faq-item"><summary>${q}${icon('down')}</summary><p>${a}</p></details>`).join('')}</div></div></section>
    <section class="closing-section" id="get-started"><div class="container"><div class="closing-card reveal"><div class="closing-orb closing-orb-one"></div><div class="closing-orb closing-orb-two"></div><div class="closing-copy"><span class="eyebrow eyebrow-light">START WITH A SIGNAL</span><h2>Pick a plan.<br>Make the next move.</h2><p>Every plan starts with the same connected workspace. Move up when your research and automation need more room.</p><div class="closing-actions"><a class="button button-light" href="/signup">Start for free ${icon('arrow')}</a><a class="button button-outline-light" href="mailto:sales@outmate.ai" data-no-router>Talk to sales</a></div></div><div class="closing-art"><div class="closing-art-card"><div class="closing-art-head"><span></span><span></span><span></span></div><div class="closing-art-flow"><i>${icon('search')}</i><b></b><i>${icon('signal')}</i><b></b><i>${icon('sparkles')}</i></div><div class="closing-art-lines"><span></span><span></span><span></span></div><div class="closing-art-status"><span></span> SIGNAL TO ACTION</div></div></div></div></div></section>
  </main>${footer()}`;
}
