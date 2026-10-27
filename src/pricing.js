/* Pricing page. Layout and copy from the approved design; interactions are wired in app.js. */
import { header, footer } from './views.js';

const arrow = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>`;
const check = `<span class="prc-check"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg></span>`;
const chev = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m6 9 6 6 6-6"/></svg>`;
const Y = `<span class="prc-yes" aria-label="Included">✓</span>`;
const N = `<span class="prc-no" aria-label="Not included">—</span>`;

const feats = (list) => `<ul class="prc-features">${list.map((f) => `<li class="prc-feature">${check}<span>${f}</span></li>`).join('')}</ul>`;

const row = (label, cells) =>
  `<tr class="prc-row"><td class="prc-td">${label}</td>${cells
    .map((c, i) => `<td class="prc-td${i === 1 ? ' prc-td--popular' : ''}">${c === 'Y' ? Y : c === 'N' ? N : c}</td>`)
    .join('')}</tr>`;

const group = (id, name, open, rows) => `
  <tbody><tr><td class="prc-group-cell" colspan="5"><button class="prc-group-btn" type="button" aria-expanded="${open}" aria-controls="${id}" data-compare-group="${id}"><span>${name}</span><span class="prc-chev">${chev}</span></button></td></tr></tbody>
  <tbody id="${id}"${open ? '' : ' hidden'}>${rows.map((r) => row(r[0], r.slice(1))).join('')}</tbody>`;

const faq = (q, a, open) => `
  <details class="prc-faq-item"${open ? ' open' : ''}><summary class="prc-faq-q">${q}<span class="prc-faq-chev">${chev}</span></summary><p class="prc-faq-a">${a}</p></details>`;

const quote = (text, img, name, role, result) => `
  <figure class="prc-quote"><span class="prc-stars">★★★★★</span><blockquote class="prc-quote-text">“${text}”</blockquote>
  <figcaption class="prc-quote-by"><img src="/avatars/${img}.webp" alt="" width="36" height="36"><span><span class="prc-quote-name">${name}</span><span class="prc-quote-role">${role}</span></span><span class="prc-result">${result}</span></figcaption></figure>`;

const logo = (name, file) => `<span class="prc-logo"><img src="/logos/${file}" alt="" width="22" height="22"><span class="prc-logo-name">${name}</span></span>`;

export function pricingPage() {
  return `${header('pricing')}<main class="prc-page" id="top">
  <section class="prc-hero"><div class="prc-wrap">
    <span class="prc-pill"><span class="prc-dot"></span>PLANS &amp; USAGE</span>
    <h1 class="prc-h1">Start small.<br>Scale when the signal does.</h1>
    <p class="prc-lead">Begin with the research you need today and add capacity as prospecting, account intelligence, and automation grow. Every plan runs on the same connected OutMate workspace—free to start, straightforward to expand.</p>
  </div></section>

  <section class="prc-plans-sec" id="plans"><div class="prc-wrap">
    <div class="prc-billing" role="group" aria-label="Billing period">
      <div class="prc-toggle"><button class="prc-billing-opt" type="button" data-billing-option="monthly" aria-pressed="false">Monthly</button><button class="prc-billing-opt" type="button" data-billing-option="annual" aria-pressed="true">Annual <span class="prc-save">Save 20%</span></button></div>
      <p class="prc-billing-note">Annual billing is charged once for twelve months at the monthly-equivalent rate shown. Monthly billing renews each month.</p>
    </div>
    <div class="prc-plans-stage">
      <div class="prc-glow" aria-hidden="true"></div>
      <div class="prc-plans" data-billing="annual">
        <div class="prc-plan-pair">
          <article class="prc-plan">
            <div class="prc-plan-top"><h3 class="prc-plan-name">Free</h3></div>
            <p class="prc-plan-desc">Explore OutMate with a limited monthly allocation—enough to research a short list and see how the workflow fits.</p>
            <div class="prc-price"><span class="prc-amount">$0</span><span class="prc-unit">/ month</span></div>
            <p class="prc-billed">No card required.</p>
            <div class="prc-meta"><div class="prc-meta-cell"><p class="prc-meta-val">1</p><p class="prc-meta-label">seats</p></div><div class="prc-meta-cell"><p class="prc-meta-val">250</p><p class="prc-meta-label">credits / mo</p></div></div>
            <a class="prc-cta" href="/signup">Start for free ${arrow}</a>
            <p class="prc-foot">No credit card required.</p>
            ${feats(['Natural-language search and basic company research', 'Up to 1 saved list and CSV export (100 rows)', 'Weekly hiring and funding digest', 'Community support'])}
          </article>
          <article class="prc-plan prc-popular">
            <div class="prc-plan-top"><h3 class="prc-plan-name">Growth</h3><span class="prc-badge">Most popular</span></div>
            <p class="prc-plan-desc">For individuals and small GTM teams who research every week and want enrichment and signals in one workspace.</p>
            <div class="prc-price"><span class="prc-amount"><span class="prc-amt-annual">$39</span><span class="prc-amt-monthly">$49</span></span><span class="prc-unit">/ month</span></div>
            <p class="prc-billed"><span class="prc-bill-annual">Billed $468 once a year</span><span class="prc-bill-monthly">Billed $49 each month</span></p>
            <div class="prc-meta"><div class="prc-meta-cell"><p class="prc-meta-val">3</p><p class="prc-meta-label">seats</p></div><div class="prc-meta-cell"><p class="prc-meta-val">5,000</p><p class="prc-meta-label">credits / mo</p></div></div>
            <a class="prc-cta" href="/signup">Start with Growth ${arrow}</a>
            <p class="prc-foot">Start instantly. Upgrade or cancel anytime.</p>
            ${feats(['Advanced search filters and saved segments', '2,500 enriched company and contact records / mo', 'Daily hiring, funding, and web signals', 'HubSpot integration and 5 research agents', 'Email support'])}
          </article>
        </div>
        <div class="prc-plan-pair">
          <article class="prc-plan">
            <div class="prc-plan-top"><h3 class="prc-plan-name">Scale</h3></div>
            <p class="prc-plan-desc">For revenue teams running recurring research, richer signal coverage, and repeatable agent workflows.</p>
            <div class="prc-price"><span class="prc-amount"><span class="prc-amt-annual">$119</span><span class="prc-amt-monthly">$149</span></span><span class="prc-unit">/ month</span></div>
            <p class="prc-billed"><span class="prc-bill-annual">Billed $1,428 once a year</span><span class="prc-bill-monthly">Billed $149 each month</span></p>
            <div class="prc-meta"><div class="prc-meta-cell"><p class="prc-meta-val">10</p><p class="prc-meta-label">seats</p></div><div class="prc-meta-cell"><p class="prc-meta-val">25,000</p><p class="prc-meta-label">credits / mo</p></div></div>
            <a class="prc-cta" href="/signup">Start with Scale ${arrow}</a>
            <p class="prc-foot">Guided setup available for your first workflow.</p>
            ${feats(['Advanced enrichment and 10 saved segments', 'Visitor identification for 10,000 accounts / mo', 'Real-time hiring, funding, technology, and web signals', '20 GTM workflows and read API access', 'Roles, permissions, and priority support'])}
          </article>
          <article class="prc-plan">
            <div class="prc-plan-top"><h3 class="prc-plan-name">Enterprise</h3></div>
            <p class="prc-plan-desc">For organizations that need custom capacity, additional controls, and a dedicated rollout.</p>
            <div class="prc-price"><span class="prc-amount">Custom</span><span class="prc-unit">pricing</span></div>
            <p class="prc-billed"><span class="prc-bill-annual">Annual agreement</span><span class="prc-bill-monthly">Monthly agreement</span></p>
            <div class="prc-meta"><div class="prc-meta-cell"><p class="prc-meta-val">Custom</p><p class="prc-meta-label">seats</p></div><div class="prc-meta-cell"><p class="prc-meta-val">Custom</p><p class="prc-meta-label">credits / mo</p></div></div>
            <a class="prc-cta" href="mailto:sales@outmate.ai?subject=OutMate%20Enterprise" data-no-router>Talk to sales ${arrow}</a>
            <p class="prc-foot">Custom onboarding and procurement support.</p>
            ${feats(['Custom research credit and enrichment volume', 'Custom signal sources and integration work', 'Unlimited seats with SSO, SCIM, and audit logs', 'Usage analytics and workspace administration', 'Full API and webhook access', 'Dedicated success manager, DPA, and SLA'])}
          </article>
        </div>
      </div>
    </div>
    <p class="prc-provisional">Plan names, prices, and usage allowances are provisional and subject to change before launch.</p>
  </div></section>

  <section class="prc-proof"><div class="prc-wrap"><div class="prc-inset">
    <p class="prc-proof-label">Trusted by GTM teams at fast-growing companies</p>
    <div class="prc-logos">${logo('Stripe', 'stripe.svg')}${logo('Ramp', 'ramp.png')}${logo('Notion', 'notion.svg')}${logo('HubSpot', 'hubspot.svg')}${logo('Webflow', 'webflow.svg')}${logo('Figma', 'figma.svg')}${logo('Vercel', 'vercel.svg')}</div>
    <div class="prc-proof-head">
      <h2 class="prc-proof-title">Teams that switched don't go back.</h2>
      <span class="prc-rating"><span class="prc-stars">★★★★★</span><span class="prc-rating-val">4.8 / 5</span>from 200+ reviews</span>
    </div>
    <div class="prc-quotes">
      ${quote('We started on Free to test it on one territory. Two weeks later the whole team was on Growth.', 'hannah-lowe', 'Hannah Lowe', 'VP Sales, Brightpath', '3x pipeline')}
      ${quote('One credit pool for research, enrichment, and agents replaced three separate tool budgets.', 'ryan-brooks', 'Ryan Brooks', 'RevOps Manager, Lumen', '-40% tool spend')}
      ${quote('Scale paid for itself in the first month. Website visitors alone sourced two closed deals.', 'daniel-chen', 'Daniel Chen', 'Head of Revenue, Meridian', 'ROI in 30 days')}
    </div>
  </div></div></section>

  <section class="prc-compare" id="compare"><div class="prc-wrap"><div class="prc-inset">
    <div class="prc-eyebrow"><span class="prc-eyebrow-tile"></span>Compare plans</div>
    <h2 class="prc-h2">See what changes<br>as you move up.</h2>
    <p class="prc-sub">Every tier keeps the same connected workspace. The differences are capacity, signal coverage, enrichment depth, and the controls your team needs.</p>
    <p class="prc-swipe">Swipe to compare all four plans →</p>
    <div class="prc-table-wrap" role="region" aria-label="Plan feature comparison" tabindex="0">
      <table class="prc-table">
        <colgroup><col class="prc-col-feature"><col><col><col><col></colgroup>
        <thead><tr><th scope="col" class="prc-th prc-th--feature">Feature</th><th scope="col" class="prc-th">Free</th><th scope="col" class="prc-th prc-th--popular">Growth</th><th scope="col" class="prc-th">Scale</th><th scope="col" class="prc-th">Enterprise</th></tr></thead>
        ${group('cg-1', 'Prospecting and data', true, [
          ['Company and contact discovery', '250 credits / mo', '5,000 credits / mo', '25,000 credits / mo', 'Custom'],
          ['Search filters', 'Basic', 'Advanced', 'Advanced + saved segments', 'Custom'],
          ['Company and contact enrichment', '100 records / mo', '2,500 records / mo', '15,000 records / mo', 'Custom'],
          ['Saved lists', '1', '10', 'Unlimited', 'Unlimited'],
          ['Export capabilities', 'CSV · 100 rows / mo', 'CSV · 10,000 rows / mo', 'CSV + API', 'CSV + API + webhooks']
        ])}
        ${group('cg-2', 'Account research', true, [
          ['Company research', 'Y', 'Y', 'Y', 'Y'],
          ['Decision-maker discovery', 'Limited', '5 per account', '10 per account', 'Custom'],
          ['Account summaries', '25 / mo', '500 / mo', '2,500 / mo', 'Custom'],
          ['Research runs and usage', '250 credits / mo', '5,000 credits / mo', '25,000 credits / mo', 'Custom']
        ])}
        ${group('cg-3', 'Buying signals and intelligence', true, [
          ['Website visitor identification', 'N', '1,000 accounts / mo', '10,000 accounts / mo', 'Custom'],
          ['Buying-intent signals', 'N', 'Y', '✓ + custom sources', '✓ + custom sources'],
          ['Hiring and funding signals', 'Weekly digest', 'Daily', 'Real-time', 'Real-time'],
          ['Technology intelligence', 'N', 'Basic', 'Advanced', 'Advanced'],
          ['Social and web intelligence', 'N', 'Limited', 'Y', 'Y']
        ])}
        ${group('cg-4', 'AI agents and automation', false, [
          ['Research agents', 'N', '5 active', '25 active', 'Custom'],
          ['GTM agents', 'N', '2 workflows', '20 workflows', 'Custom'],
          ['Workflow execution', 'N', '500 runs / mo', '5,000 runs / mo', 'Custom'],
          ['Scheduled or recurring workflows', 'N', 'Y', 'Y', 'Y'],
          ['Advanced automation capabilities', 'N', 'N', 'Y', 'Custom']
        ])}
        ${group('cg-5', 'Integrations', false, [
          ['CRM integrations', 'N', '1', '3', 'Custom'],
          ['HubSpot integration', 'N', 'Y', 'Y', 'Y'],
          ['Additional integrations', 'N', 'N', 'Y', 'Custom'],
          ['API access', 'N', 'N', 'Read API', 'Full API + webhooks'],
          ['Custom integration requirements', 'N', 'N', 'N', 'Y']
        ])}
        ${group('cg-6', 'Administration and support', false, [
          ['Included seats', '1', '3', '10', 'Custom'],
          ['Usage limits', '250 credits / mo', '5,000 credits / mo', '25,000 credits / mo', 'Custom credits / mo'],
          ['Workspace administration', 'N', 'Basic', 'Y', 'Advanced'],
          ['Access controls', 'N', 'N', 'Roles and permissions', 'SSO, SCIM, audit logs'],
          ['Usage analytics', 'N', 'Basic', 'Advanced', 'Custom reporting'],
          ['Support level', 'Community', 'Email', 'Priority email + Slack', 'Dedicated success manager'],
          ['Enterprise requirements', 'N', 'N', 'N', 'DPA, SLA, custom onboarding']
        ])}
      </table>
    </div>
  </div></div></section>

  <section class="prc-faq" id="faq"><div class="prc-wrap"><div class="prc-inset prc-faq-grid">
    <div class="prc-faq-intro">
      <div class="prc-eyebrow"><span class="prc-eyebrow-tile prc-eyebrow-tile--green"></span>Questions &amp; details</div>
      <h2 class="prc-h2">Before you<br>choose a plan.</h2>
      <p class="prc-sub prc-sub--narrow">How credits, billing, seats, and integrations work across OutMate plans.</p>
    </div>
    <div class="prc-faq-list">
      ${faq('What is included in the free plan?', 'The Free plan includes 250 research credits per month, natural-language search, basic company research, one saved list, a limited CSV export, and the weekly hiring and funding digest. It is meant for evaluating the workspace, not running an ongoing GTM motion.', true)}
      ${faq('How do OutMate credits work?', 'Credits are the shared usage unit across the workspace. Company research, company and contact enrichment, and AI workflow runs each consume credits, and the amount depends on the request—a short company summary costs less than a full account brief with decision-maker context. Your plan resets the allocation each billing month.')}
      ${faq('What happens when I use all my credits?', 'Research and enrichment stop consuming new requests until the next reset, while data you have already saved remains available. Paid plans can buy additional credits or move to a higher tier; Free workspaces can upgrade at any time.')}
      ${faq('Can I change plans later?', 'Yes. Upgrades take effect immediately and the unused portion of the current period is prorated. Downgrades apply at the end of the current billing period so you keep the capacity you have already paid for.')}
      ${faq('How does annual billing work?', 'Annual plans are charged once for twelve months at the discounted monthly-equivalent rate shown on each card. Monthly plans renew every month. Both can be cancelled, and annual plans receive the saving shown next to the billing selector.')}
      ${faq('Can multiple teammates use the same workspace?', 'Yes. Growth includes three seats and Scale includes ten, each with a separate sign-in and shared access to research, lists, and workflows. Enterprise supports custom seat counts plus roles, SSO, and audit controls.')}
      ${faq('Which integrations are available?', 'HubSpot is available on every paid plan. Growth supports one CRM integration, Scale supports three plus a read API, and Enterprise adds the full API, webhooks, and custom integration work.')}
      ${faq('Can I purchase additional usage?', 'Paid workspaces can add credit packs at any time without changing plans. Enterprise contracts can include committed or flexible capacity instead of fixed monthly allocations.')}
      ${faq('What should larger organizations do if they need custom requirements?', 'Talk to sales. Enterprise covers custom seat counts, signal sources, integration work, security review, a DPA and SLA, and a dedicated success manager for onboarding and rollout.')}
    </div>
  </div></div></section>

  <section class="prc-cta-sec" id="get-started">
    <div class="prc-cta-glow" aria-hidden="true"></div>
    <div class="prc-wrap prc-cta-inner">
      <p class="prc-kicker">START WITH A SIGNAL</p>
      <h2 class="prc-h2 prc-h2--center">Pick a plan.<br>Make the next move.</h2>
      <p class="prc-sub prc-sub--center">Every plan starts with the same connected workspace. Move up when your research and automation need more room.</p>
      <div class="prc-actions"><a class="prc-btn prc-btn--primary" href="/signup">Start for free ${arrow}</a><a class="prc-btn prc-btn--secondary" href="mailto:sales@outmate.ai" data-no-router>Talk to sales</a></div>
      <p class="prc-signal">SIGNAL TO ACTION</p>
    </div>
  </section>
</main>${footer()}`;
}
