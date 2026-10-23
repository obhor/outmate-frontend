/* Product content and reusable SVG icon helpers. */
export const PRODUCT = [
  {
    slug: 'prospecting', name: 'Prospecting', short: 'Find the right companies and people.',
    summary: 'Find companies and people in natural language.', eyebrow: 'FIND YOUR NEXT ACCOUNT',
    title: 'Start with the right accounts.', description: 'Describe the customers you want to reach. Build a focused list of companies and decision-makers without wrestling with a maze of filters.',
    visual: 'prospecting',
    bullets: [ ['Natural-language search', 'Describe your ICP in plain language and turn it into a useful starting list.'], ['Company and people discovery', 'Move between account context and the people who may be part of the buying committee.'], ['Qualification and list building', 'Build a working list that your team can review, refine, and use.'] ],
    steps: [ ['Describe', 'Set the audience, market, role, and constraints in your own words.'], ['Review', 'Inspect matching companies and people before taking action.'], ['Build', 'Save the prospects worth researching or reaching out to.'] ],
    signals: ['Industry and company size', 'Roles and seniority', 'Technology fit', 'Funding and growth context']
  },
  {
    slug: 'research', name: 'Account Research', short: 'See the account behind the name.',
    summary: 'Company and contact context in one place.', eyebrow: 'KNOW THE ACCOUNT',
    title: 'Walk into every conversation informed.', description: 'Bring company context, decision-makers, and recent activity together so your team has a reasoned view of the account before reaching out.',
    visual: 'research',
    bullets: [ ['Company snapshots', 'Understand what a company does, where it is focused, and what may matter now.'], ['Decision-maker context', 'Map relevant people and roles around the account.'], ['Research you can use', 'Keep key findings close to the workflow instead of scattered across tabs.'] ],
    steps: [ ['Choose an account', 'Start from a prospect, a signal, or a company your team already knows.'], ['Build context', 'Bring together company, people, and recent activity.'], ['Decide what matters', 'Use the context to shape the next useful sales action.'] ],
    signals: ['Company overview', 'Relevant leaders', 'Recent announcements', 'Potential reasons to reach out']
  },
  {
    slug: 'signals', name: 'Buying Signals', short: 'Know what changed—and why it matters.',
    summary: 'Hiring, funding, technology and more.', eyebrow: 'SPOT THE MOMENT',
    title: 'Know when an account is worth acting on.', description: 'Follow meaningful changes across companies and people. Bring hiring, funding, technology, and other account activity into a clearer prioritization workflow.',
    visual: 'signals',
    bullets: [ ['Signal coverage', 'Organize relevant changes across hiring, funding, technology, news, and web activity.'], ['Account-level context', 'Understand which company a signal relates to and why it may be relevant.'], ['Actionable prioritization', 'Use signal freshness and fit to decide which accounts deserve attention.'] ],
    steps: [ ['Detect', 'Collect relevant changes from configured signal sources.'], ['Interpret', 'Connect each change to an account and your target customer profile.'], ['Act', 'Research the account or start a timely, contextual workflow.'] ],
    signals: ['Hiring and leadership changes', 'Funding and company news', 'Technology adoption', 'Website and social activity']
  },
  {
    slug: 'website-visitors', name: 'Website Visitors', short: 'Understand the interest behind the visit.',
    summary: 'See who is interested, even without a form fill.', eyebrow: 'TURN VISITS INTO CONTEXT',
    title: 'See the accounts already showing interest.', description: 'Understand which companies are visiting your website, what they appear to care about, and how they fit the accounts you want to reach.',
    visual: 'visitors',
    bullets: [ ['Account identification', 'Connect eligible website activity to company-level context where identification is available.'], ['Page-level intent', 'Use visits to relevant pages as one input into understanding interest.'], ['A sensible next step', 'Move from a promising visit to account research or lead enrichment.'] ],
    steps: [ ['Capture activity', 'Connect the website signal source and define the activity you care about.'], ['Assess fit', 'Review available account identity, viewed pages, and fit signals.'], ['Follow up', 'Research the account and decide whether outreach is appropriate.'] ],
    signals: ['Pricing and product pages', 'Repeat visits', 'Account fit', 'Recent activity and context']
  },
  {
    slug: 'intelligence', name: 'Social & Web Intelligence', short: 'Turn market activity into useful context.',
    summary: 'LinkedIn, news and web activity that matters.', eyebrow: 'READ THE MARKET',
    title: 'Catch the context that makes outreach relevant.', description: 'Keep relevant company news, professional activity, and web changes close to the accounts you are targeting. Use what is happening now to inform the next conversation.',
    visual: 'intelligence',
    bullets: [ ['Company news', 'Keep important public announcements and changes in view.'], ['Social activity', 'Surface relevant professional activity when supported by your connected sources.'], ['Competitive context', 'Track market changes that may affect a buyer’s priorities or timing.'] ],
    steps: [ ['Follow', 'Choose the companies, people, and topics that matter to your market.'], ['Find context', 'Review relevant updates alongside account information.'], ['Connect the dots', 'Use the evidence to sharpen research and outreach.'] ],
    signals: ['Company announcements', 'Leadership and hiring posts', 'Market and category news', 'Competitive changes']
  },
  {
    slug: 'agents', name: 'GTM Agents', short: 'Connect the work between insight and action.',
    summary: 'Personalization, outreach and follow-up.', eyebrow: 'MOVE FROM INSIGHT TO ACTION',
    title: 'Give repeatable GTM work a connected flow.', description: 'Orchestrate research, personalization, outreach preparation, reply handling, and CRM tasks in workflows your team can understand and review.',
    visual: 'agents',
    bullets: [ ['Research and preparation', 'Turn account context into structured briefs and suggested next steps.'], ['Personalization support', 'Draft outreach grounded in relevant account evidence, with human review where needed.'], ['Workflow orchestration', 'Connect triggers, agent tasks, and follow-up steps instead of coordinating every handoff manually.'] ],
    steps: [ ['Set the trigger', 'Choose a signal or workflow event that should start the process.'], ['Define the agent task', 'Give the agent a bounded objective, context, and approved actions.'], ['Review and execute', 'Inspect outputs and route work to the appropriate destination.'] ],
    signals: ['Account research', 'Personalized message drafts', 'Reply classification', 'CRM and follow-up tasks']
  }
];

const ICONS = {
  arrow: '<path d="M5 12h14M12 5l7 7-7 7"/>', chevron: '<path d="m9 18 6-6-6-6"/>', down: '<path d="m6 9 6 6 6-6"/>',
  search: '<circle cx="11" cy="11" r="6.5"/><path d="m16 16 4.5 4.5"/>', target: '<circle cx="12" cy="12" r="8.5"/><circle cx="12" cy="12" r="4.5"/><circle cx="12" cy="12" r="1"/>',
  building: '<rect x="4" y="3" width="16" height="18" rx="2"/><path d="M8 7h2m4 0h2M8 11h2m4 0h2M8 15h2m4 0h2M10 21v-3h4v3"/>',
  users: '<path d="M16 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2"/><circle cx="9.5" cy="7" r="4"/><path d="M20 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>',
  signal: '<path d="M2 12h4l3-8 5 16 3-8h5"/>', globe: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18"/>',
  sparkles: '<path d="m12 3 1.7 5.3L19 10l-5.3 1.7L12 17l-1.7-5.3L5 10l5.3-1.7L12 3Z"/><path d="m19 16 .9 2.1L22 19l-2.1.9L19 22l-.9-2.1L16 19l2.1-.9L19 16Z"/>',
  compass: '<circle cx="12" cy="12" r="9"/><path d="m15.5 8.5-2.4 4.6-4.6 2.4 2.4-4.6 4.6-2.4Z"/>',
  layers: '<path d="m12 3 9 5-9 5-9-5 9-5Z"/><path d="m3 12 9 5 9-5M3 16l9 5 9-5"/>',
  check: '<path d="m5 12 4 4L19 6"/>', bolt: '<path d="m13 2-3 8H5l6 12 3-9h5L13 2Z"/>',
  menu: '<path d="M4 7h16M4 12h16M4 17h16"/>', close: '<path d="m6 6 12 12M18 6 6 18"/>', play: '<path d="m8 5 11 7-11 7V5Z"/>', clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  chart: '<path d="M3 3v18h18"/><path d="m7 14 4-4 3 3 5-7"/>', mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/>',
  shield: '<path d="M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11Z"/><path d="m9 12 2 2 4-4"/>',
  command: '<rect x="3" y="3" width="7" height="7" rx="2"/><rect x="14" y="3" width="7" height="7" rx="2"/><rect x="3" y="14" width="7" height="7" rx="2"/><rect x="14" y="14" width="7" height="7" rx="2"/>',
  document: '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z"/><path d="M14 2v6h6M8 13h8M8 17h8"/>',
  eye: '<path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12Z"/><circle cx="12" cy="12" r="3"/>',
  network: '<circle cx="12" cy="5" r="2.5"/><circle cx="5" cy="18" r="2.5"/><circle cx="19" cy="18" r="2.5"/><path d="m10.8 7-4.6 8.8M13.2 7l4.6 8.8M7.5 18h9"/>'
};
export function icon(name, cls='') { return `<svg class="icon ${cls}" aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">${ICONS[name] || ICONS.sparkles}</svg>`; }
export function productHref(p) { return `/product/${p.slug}`; }
export function productCard(p, index=0) {
  return `<a class="product-card reveal" style="--delay:${index * 55}ms" href="${productHref(p)}">
    <span class="card-icon ${p.slug}">${icon(({prospecting:'search',research:'building',signals:'signal','website-visitors':'eye',intelligence:'globe',agents:'sparkles'})[p.slug])}</span>
    <span class="card-arrow">${icon('arrow')}</span>
    <span class="card-title">${p.name}</span><span class="card-desc">${p.short}</span><span class="card-foot">Explore capability ${icon('arrow')}</span>
  </a>`;
}
