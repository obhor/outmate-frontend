/* Product page template. Per-product content lives in PRODUCTS; layout in productPage(). */
const I = {
  search: '<path d="m21 21-4.34-4.34"/><circle cx="11" cy="11" r="8"/>',
  building: '<path d="M10 12h4"/><path d="M10 8h4"/><path d="M14 21v-3a2 2 0 0 0-4 0v3"/><path d="M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2"/><path d="M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16"/>',
  radar: '<path d="M19.07 4.93A10 10 0 0 0 6.99 3.34"/><path d="M4 6h.01"/><path d="M2.29 9.62A10 10 0 1 0 21.31 8.35"/><path d="M16.24 7.76A6 6 0 1 0 8.23 16.67"/><path d="M12 18h.01"/><path d="M17.99 11.66A6 6 0 0 1 15.77 16.67"/><circle cx="12" cy="12" r="2"/><path d="m13.41 10.59 5.66-5.66"/>',
  scan: '<path d="M3 7V5a2 2 0 0 1 2-2h2"/><path d="M17 3h2a2 2 0 0 1 2 2v2"/><path d="M21 17v2a2 2 0 0 1-2 2h-2"/><path d="M7 21H5a2 2 0 0 1-2-2v-2"/><circle cx="12" cy="12" r="3"/><path d="m16 16-1.9-1.9"/>',
  globe: '<path d="M21.54 15H17a2 2 0 0 0-2 2v4.54"/><path d="M7 3.34V5a3 3 0 0 0 3 3a2 2 0 0 1 2 2c0 1.1.9 2 2 2a2 2 0 0 0 2-2c0-1.1.9-2 2-2h3.17"/><path d="M11 21.95V18a2 2 0 0 0-2-2a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05"/><circle cx="12" cy="12" r="10"/>',
  workflow: '<rect width="8" height="8" x="3" y="3" rx="2"/><path d="M7 11v4a2 2 0 0 0 2 2h4"/><rect width="8" height="8" x="13" y="13" rx="2"/>',
  arrow: '<path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>',
  zap: '<path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z"/>',
  check: '<path d="M20 6 9 17l-5-5"/>',
};
const icon = (k, cls = "prd-ico") =>
  `<svg class="${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${I[k]}</svg>`;

const logo = (file, size = "") =>
  `<span class="prd-logo${size ? " prd-logo--" + size : ""}${file === "ramp.png" ? " prd-logo--fill" : ""}"><img src="/logos/${file}" alt=""></span>`;
const av = (n, size = "24", extra = "") => `<img class="prd-av prd-av--${size}${extra}" src="/avatars/${n}.webp" alt="">`;
const badge = (t, tone = "violet") => `<span class="prd-badge prd-badge--${tone}">${t}</span>`;
const sig = (t) => `<span class="prd-sig"><span class="prd-sig-ico">${icon("zap")}</span>${t}</span>`;
const tag = (t) => `<span class="prd-tag">${t}</span>`;
const mono = (t, cls = "") => `<p class="prd-mono${cls}">${t}</p>`;
const row = (cols, minw, head, rows) =>
  `<div class="prd-scroll"><div class="prd-table" style="--cols:${cols};--minw:${minw}"><div class="prd-tr prd-tr--head">${head}</div>${rows.join("")}</div></div>`;

/* ---------- per-product data ---------- */
const PRODUCTS = {
  prospecting: {
    num: "01", name: "Prospecting", icon: "search", short: "Find companies and people in natural language.",
    hero: {
      h1: "Find the accounts and people that match your ICP.",
      lead: "Describe your ideal customer in plain language. OutMate finds matching companies, ranks them by fit, and shows the decision-makers at each one.",
      secondary: ["Book a demo", "mailto:sales@outmate.ai"],
    },
    demo: () => `
      <div class="prd-query">
        <div class="prd-search">${icon("search")}<span class="prd-search-text">SaaS companies in the US hiring sales leaders, 200–2,000 employees</span><span class="prd-run">${icon("arrow")}</span></div>
        <div class="prd-chips">
          <span class="prd-filter"><span class="prd-filter-k">Industry</span> incl. SaaS</span>
          <span class="prd-filter"><span class="prd-filter-k">Location</span> incl. United States</span>
          <span class="prd-filter"><span class="prd-filter-k">Headcount</span> 200–2,000</span>
          <span class="prd-filter prd-filter--accent">Signal is Hiring sales leaders</span>
          <span class="prd-filter prd-filter--add">+ Add filter</span>
        </div>
      </div>
      <div class="prd-bar"><div class="prd-seg"><span class="prd-seg-item prd-seg-item--on">Companies</span><span class="prd-seg-item">People</span></div><span class="prd-dotnote"><span class="prd-dot prd-dot--violet"></span>1,284 companies · Ranked by ICP fit</span></div>
      ${row("200px 90px minmax(0,1fr) 140px", "680px",
        `<span class="prd-td prd-td--line">Company</span><span class="prd-td prd-td--line">ICP fit</span><span class="prd-td prd-td--line">Why it matches</span><span class="prd-td">People</span>`,
        [
          ["Stripe", "stripe.svg", 96, "Hiring a VP of Sales", "+2 more", "sarah-mitchell", "jordan-ellis", "3 people"],
          ["Ramp", "ramp.png", 94, "Hiring a Head of Sales", "+1 more", "daniel-chen", "grace-lin", "2 people"],
          ["Notion", "notion.svg", 92, "Hiring a Director of Sales", "+2 more", "maya-patel", "tom-becker", "3 people"],
          ["HubSpot", "hubspot.svg", 89, "Hiring a VP of Revenue", "+1 more", "alex-morgan", "lena-okafor", "2 people"],
          ["Webflow", "webflow.svg", 87, "Hiring a CRO", "+1 more", "ryan-brooks", "sofia-ramirez", "4 people"],
          ["Figma", "figma.svg", 85, "Opened 2 enterprise AE roles", "+1 more", "emma-wilson", "omar-haddad", "2 people"],
          ["Vercel", "vercel.svg", 84, "Opened 2 sales roles", "+2 more", "david-kim", "hannah-lowe", "3 people"],
        ].map(([n, l, fit, why, more, a1, a2, ppl]) =>
          `<div class="prd-tr"><span class="prd-td prd-td--line prd-ink">${logo(l)}${n}</span><span class="prd-td prd-td--line">${badge(fit)}</span><span class="prd-td prd-td--line">${sig(why)}${tag(more)}</span><span class="prd-td"><span class="prd-stack">${av(a1)}${av(a2, "24", " prd-av--stack")}</span><span class="prd-s">${ppl}</span></span></div>`))}`,
    caps: {
      h2: "Build a target list without building a query.",
      items: [
        ["Search", "Natural-language search", "Type who you sell to. OutMate turns it into industry, size, location, technology, and signal filters you can adjust."],
        ["Fit", "ICP fit scoring", "Every company gets a fit score and the reasons behind it, so the best matches sit at the top of the list."],
        ["People", "Decision-makers at every account", "Search across 500M+ contacts and see the people at each company who own the decision."],
      ],
    },
    features: [
      {
        label: "Describe → Filter", title: "Describe your customer. OutMate builds the filters.",
        body: "Write the request the way you would explain it to a teammate. Each part becomes a filter you can see, edit, or remove.",
        visual: () => `<div class="prd-mock prd-mock--tint">
          <div class="prd-note">Fintech companies in North America that <span class="prd-hl">raised in the last 6 months</span> and <span class="prd-hl">use Salesforce</span></div>
          <div class="prd-stack-col">
            <div class="prd-kv"><span class="prd-kv-k">Industry</span><span class="prd-kv-v">Fintech</span></div>
            <div class="prd-kv"><span class="prd-kv-k">Location</span><span class="prd-kv-v">North America</span></div>
            <div class="prd-kv prd-kv--accent"><span class="prd-kv-k">Signal</span><span class="prd-kv-v">Funding · last 6 months</span></div>
            <div class="prd-kv prd-kv--accent"><span class="prd-kv-k">Technology</span><span class="prd-kv-v">Salesforce</span></div>
          </div>
          <p class="prd-s">Matched 312 companies</p>
        </div>`,
      },
      {
        label: "Account → Person", title: "Go from the account to the right person.", flip: true,
        body: "Switch from companies to people in one click. See roles, seniority, and verified contact details for the people who make or influence the decision.",
        visual: () => `<div class="prd-mock">
          <div class="prd-mock-head">${logo("ramp.png", "sm")}Ramp · 4 people match</div>
          ${[["daniel-chen", "Daniel Chen", "Head of Revenue", "Decision-maker"], ["grace-lin", "Grace Lin", "Sales Operations Lead", "Email verified"], ["ryan-brooks", "Ryan Brooks", "SDR Manager", "Email verified"], ["hannah-lowe", "Hannah Lowe", "VP Marketing", "Email verified"]]
            .map(([a, n, r, t]) => `<div class="prd-li">${av(a, "36")}<div class="prd-grow"><p class="prd-t">${n}</p><p class="prd-s">${r}</p></div>${badge(t, "green")}</div>`).join("")}
        </div>`,
      },
    ],
    how: [["Describe your ICP", "Write who you sell to in plain language."], ["Review the matches", "Companies ranked by fit, with the reason for each."], ["Find the people", "Decision-makers and verified contacts per account."], ["Take the next step", "Save the list, sync to CRM, or hand off to an agent."]],
    uses: [
      ["Outbound", "Build a target list in minutes", "Turn an ICP description into a ranked account list without writing filters.", "Start every week with fresh accounts."],
      ["Founders", "Find your first 100 customers", "Describe the companies you think need you and test fit before you hire a sales team.", "Founder-led sales, with focus."],
      ["RevOps", "Refresh territory lists", "Rebuild territories with current headcount, funding, and hiring data.", "Territories that reflect today."],
    ],
  },

  research: {
    num: "02", name: "Account Research", icon: "building", short: "Company and contact context in one place.",
    hero: {
      h1: "Understand an account before you reach out.",
      lead: "See what the company does, who makes the decision, and what is happening inside the account, in one research brief with sources.",
      secondary: ["Book a demo", "mailto:sales@outmate.ai"],
    },
    demo: () => `<div class="prd-split" style="--side:280px">
      <div class="prd-side prd-side--pad">
        <div class="prd-acct">${logo("stripe.svg", "lg")}<div class="prd-grow"><p class="prd-acct-name">Stripe</p><p class="prd-s">Payments · Fintech</p></div>${badge("Ready", "green")}</div>
        <div class="prd-facts">
          <div class="prd-fact">${mono("HQ", " prd-mono--xs")}<p class="prd-fact-v">San Francisco</p></div>
          <div class="prd-fact">${mono("Employees", " prd-mono--xs")}<p class="prd-fact-v">8,000+</p></div>
          <div class="prd-fact">${mono("Model", " prd-mono--xs")}<p class="prd-fact-v">B2B · Usage-based</p></div>
          <div class="prd-fact">${mono("ICP fit", " prd-mono--xs")}<p class="prd-fact-v prd-fact-v--accent">96</p></div>
        </div>
        <div>${mono("Buying committee", " prd-mono--xs")}<div class="prd-stack-col prd-mt8">
          ${[["sarah-mitchell", "Sarah Mitchell", "VP Revenue Operations"], ["jordan-ellis", "Jordan Ellis", "Director of Sales Development"], ["emma-wilson", "Emma Wilson", "Head of GTM Systems"]]
            .map(([a, n, r]) => `<div class="prd-mini">${av(a, "28")}<div><p class="prd-t prd-t--sm">${n}</p><p class="prd-s prd-s--xs">${r}</p></div></div>`).join("")}
        </div></div>
      </div>
      <div class="prd-mainpane prd-mainpane--pad">
        <div class="prd-tabs"><span class="prd-tab prd-tab--on">Overview</span><span class="prd-tab">People</span><span class="prd-tab">Activity</span><span class="prd-tab">Technology</span></div>
        <div>${mono("Summary", " prd-mono--xs")}<p class="prd-body prd-mt6">Stripe builds payments and financial infrastructure for internet businesses. The sales organization is expanding into enterprise, with new leadership roles opened this quarter.</p></div>
        <div>${mono("Why now", " prd-mono--xs")}<div class="prd-chips prd-mt8">${sig("Hiring a VP of Sales")}${sig("Viewed your security page")}${sig("Added a sales engagement tool")}</div></div>
        <div class="prd-callout">${mono("Suggested angle", " prd-mono--xs prd-mono--accent")}<p class="prd-body prd-body--ink prd-mt6">A new sales leader usually reviews tooling in the first 90 days. Lead with how teams prioritize accounts while the enterprise motion is being built.</p></div>
        <div class="prd-chips"><span class="prd-s prd-s--faint">Sources</span><span class="prd-src">Company website</span><span class="prd-src">Careers page</span><span class="prd-src">Press release</span><span class="prd-src">LinkedIn</span></div>
      </div>
    </div>`,
    caps: {
      h2: "The context you need for a relevant first message.",
      items: [
        ["Company", "Company overview", "Business model, products, size, funding, and technology, summarized from the company's own sources."],
        ["People", "Buying committee", "The decision-maker, likely champions, and influencers, with role and recent activity for each."],
        ["Angle", "Talking points", "A suggested reason to reach out, tied to what changed at the account and linked to its source."],
      ],
    },
    features: [
      {
        label: "Ask → Brief", title: "Ask a question about any account.",
        body: "Ask what you would ask a researcher. OutMate answers from the company website, job posts, news, and social activity, and shows where each answer came from.",
        visual: () => `<div class="prd-mock prd-mock--tint">
          <div class="prd-bubble prd-bubble--me">Is Notion building out an outbound team?</div>
          <div class="prd-bubble prd-bubble--ai">Yes. Notion opened a Director of Sales role and 2 enterprise AE roles in the last 30 days, and recently changed its sales tool stack.
            <div class="prd-chips prd-mt10"><span class="prd-src">Careers page · 3 roles</span><span class="prd-src">Website · tech change</span></div>
          </div>
        </div>`,
      },
      {
        label: "Buying committee", title: "Know who decides, and who influences.", flip: true,
        body: "OutMate groups the people at an account by their likely role in the deal, so you can plan who to contact first and who to bring in later.",
        visual: () => {
          const p = (a, n, r) => `<div class="prd-person">${av(a, "28")}<div><p class="prd-t prd-t--sm">${n}</p><p class="prd-s prd-s--xs">${r}</p></div></div>`;
          return `<div class="prd-mock prd-mock--pad">
            <div>${mono("Decision-maker", " prd-mono--xs")}<div class="prd-person prd-person--lead prd-mt8">${av("daniel-chen", "32")}<div class="prd-grow"><p class="prd-t">Daniel Chen</p><p class="prd-s">Head of Revenue</p></div><span class="prd-accent-text">High intent</span></div></div>
            <div>${mono("Champions", " prd-mono--xs")}<div class="prd-pair prd-mt8">${p("grace-lin", "Grace Lin", "Sales Ops Lead")}${p("ryan-brooks", "Ryan Brooks", "SDR Manager")}</div></div>
            <div>${mono("Influencers", " prd-mono--xs")}<div class="prd-pair prd-mt8">${p("sofia-ramirez", "Sofia Ramirez", "Finance Director")}${p("omar-haddad", "Omar Haddad", "IT Manager")}</div></div>
          </div>`;
        },
      },
    ],
    how: [["Pick an account", "Search by name or open one from a list."], ["OutMate gathers sources", "Website, job posts, news, and social activity."], ["Read the brief", "Summary, buying committee, and why now."], ["Start outreach", "Use the suggested angle or hand it to an agent."]],
    uses: [
      ["Account executives", "Prepare for a first call", "Get the business model, priorities, and recent changes in one page.", "Show up informed."],
      ["SDRs", "Personalize at scale", "Pull a relevant talking point for every account in a sequence.", "Relevance without the hours."],
      ["Account managers", "Plan expansion", "See new teams, leaders, and initiatives inside existing customers.", "Find the next deal early."],
    ],
  },

  signals: {
    num: "03", name: "Buying Signals", icon: "radar", short: "Hiring, funding, technology and more.",
    hero: {
      h1: "Know when an account is worth acting on.",
      lead: "OutMate watches hiring, funding, technology, website, social, and news activity across your accounts, and explains what each change means.",
      secondary: ["Book a demo", "mailto:sales@outmate.ai"],
    },
    demo: () => {
      const types = [["All signals", "128", "ink", true], ["Hiring", "42", "violet"], ["Website", "34", "sky"], ["Technology", "21", "amber"], ["Social", "15", "pink"], ["Funding", "9", "green"], ["News", "7", "zinc"]];
      const tone = { w: ["Website activity", "sky"], h: ["Hiring", "violet"], t: ["Technology change", "amber"] };
      const feed = [["Stripe", "stripe.svg", "viewed the security page", "Just now", "Evaluating vendors", "w"], ["Vercel", "vercel.svg", "opened 2 sales roles", "2m ago", "Team is expanding", "h"], ["Stripe", "stripe.svg", "is hiring a VP of Sales", "9m ago", "Matches your ICP", "h"], ["Ramp", "ramp.png", "visited the pricing page", "24m ago", "Second visit this week", "w"], ["Notion", "notion.svg", "changed its sales tool stack", "1h ago", "Growing sales team", "t"], ["HubSpot", "hubspot.svg", "is hiring a VP of Revenue", "3h ago", "Investing in go-to-market", "h"]];
      return `<div class="prd-split" style="--side:200px">
        <div class="prd-side prd-side--pad prd-side--tight">${mono("Signal types", " prd-mono--xs prd-pad-x8")}
          ${types.map(([n, c, t, on]) => `<div class="prd-type${on ? " prd-type--on" : ""}"><span class="prd-sq prd-sq--${t}"></span><span class="prd-grow">${n}</span><span class="prd-count">${c}</span></div>`).join("")}
        </div>
        <div class="prd-mainpane" style="--main:480px">
          <div class="prd-bar"><span class="prd-t">Signal feed</span><span class="prd-dotnote"><span class="prd-dot prd-dot--green"></span>Live · Target accounts</span></div>
          ${row("minmax(0,1.2fr) minmax(0,1fr) 140px", "560px",
            `<span class="prd-td prd-th-mono">Signal</span><span class="prd-td prd-th-mono">Context</span><span class="prd-td prd-th-mono">Type</span>`,
            feed.map(([co, l, what, when, ctx, k]) => `<div class="prd-tr prd-tr--tall"><span class="prd-td">${logo(l, "md")}<span><span class="prd-t prd-t--reg"><b>${co}</b> ${what}</span><span class="prd-s prd-s--faint prd-block">${when}</span></span></span><span class="prd-td prd-body prd-body--sm">${ctx}</span><span class="prd-td">${badge(tone[k][0], tone[k][1])}</span></div>`))}
        </div>
      </div>`;
    },
    caps: {
      h2: "Signal, context, and the reason it matters.",
      items: [
        ["Coverage", "1,000+ buying signals", "Job posts, funding rounds, leadership changes, tech-stack changes, website visits, social posts, and news."],
        ["Context", "Context on every change", "Each signal comes with a short explanation of what it suggests about the account and how it relates to your ICP."],
        ["Alerts", "Alerts where you work", "Get notified in Slack, email, or your CRM when a target account crosses the threshold you set."],
      ],
    },
    features: [
      {
        label: "Signal rules", title: "Combine signals into the moment you care about.",
        body: "One signal is a hint. Several together are a reason to reach out. Stack conditions and OutMate shows the accounts that match all of them.",
        visual: () => `<div class="prd-mock prd-mock--tint prd-gap8">
          <div class="prd-rule prd-rule--accent"><span class="prd-kv-k">Signal is</span> <b class="prd-accent-text">Hiring sales leaders</b></div>
          <div class="prd-rule-row"><span class="prd-and">AND</span><div class="prd-rule"><span class="prd-kv-k">Source incl.</span> Company careers pages</div></div>
          <div class="prd-rule-row"><span class="prd-and">AND</span><div class="prd-rule prd-rule--accent"><span class="prd-kv-k">Signal is</span> <b class="prd-accent-text">Pricing page visit</b></div></div>
          <div class="prd-rule-row"><span class="prd-and">AND</span><div class="prd-rule"><span class="prd-kv-k">Location incl.</span> United States</div></div>
          <div class="prd-darkbar"><span>38 accounts match</span><span class="prd-darkbar-s">Alert me in Slack</span></div>
        </div>`,
      },
      {
        label: "Account timeline", title: "Every signal for an account, in order.", flip: true,
        body: "Hiring, funding, technology, and website signals stack into one timeline, so you can see momentum building before you decide to act.",
        visual: () => `<div class="prd-mock prd-mock--pad prd-gap0">
          <div class="prd-mock-head prd-mock-head--flush">${logo("ramp.png", "md")}<span class="prd-grow">Ramp · account timeline</span>${badge("High intent")}</div>
          ${[["Visited the pricing page (2nd time this week)", "Website activity · Just now", "sky"], ["Daniel Chen posted about scaling outbound", "Social · 1d ago", "pink"], ["Added a sales engagement tool to its stack", "Technology change · 3d ago", "amber"], ["Opened a role: VP of Sales", "Hiring · Careers page · 6d ago", "violet"], ["Opened 2 enterprise AE roles", "Hiring · 9d ago", "violet"]]
            .map(([w, m, t]) => `<div class="prd-tl"><div class="prd-tl-rail"><span class="prd-tl-dot prd-sq--${t}"></span><span class="prd-tl-line"></span></div><div class="prd-grow"><p class="prd-t prd-t--reg">${w}</p><p class="prd-s prd-s--faint">${m}</p></div></div>`).join("")}
        </div>`,
      },
    ],
    how: [["Choose your signals", "Hiring, funding, tech, website, social, news."], ["OutMate monitors", "Target accounts are watched continuously."], ["Get alerted with context", "What changed and why it matters."], ["Take action", "Research, draft outreach, or sync to CRM."]],
    uses: [
      ["Sales teams", "Prioritize the week", "Work the accounts with the strongest recent signals first.", "Timing on your side."],
      ["Account-based teams", "Watch named accounts", "Track every change across a fixed list of strategic accounts.", "Never miss a trigger."],
      ["Marketing", "Trigger campaigns", "Start plays when accounts hit a signal threshold.", "Campaigns that match intent."],
    ],
  },

  "website-visitors": {
    num: "04", name: "Website Visitors", icon: "scan", short: "See who is interested, even without a form fill.",
    hero: {
      h1: "See who's showing interest before they raise their hand.",
      lead: "Identify companies visiting your website, see what they looked at, check fit against your ICP, and prepare the next action.",
      secondary: ["Install the tracking script", "/signup"],
    },
    demo: () => `
      <div class="prd-bar prd-bar--wrap">
        <div class="prd-inline"><span class="prd-t">Website visitors</span><span class="prd-live"><span class="prd-dot prd-dot--green"></span>Live</span></div>
        <div class="prd-chips"><span class="prd-filter">Last 7 days</span><span class="prd-filter">ICP fit ≥ 80</span><span class="prd-s">214 companies identified</span></div>
      </div>
      ${row("170px minmax(0,1fr) 70px 190px 70px 90px", "760px",
        ["Company", "Pages viewed", "Visits", "Person", "ICP", "Last seen"].map((h) => `<span class="prd-td">${h}</span>`).join(""),
        [["Ramp", "ramp.png", "/pricing", "/security", "3", "daniel-chen", "Daniel Chen", "Head of Revenue", 94, "Just now"], ["Stripe", "stripe.svg", "/security", "/integrations", "2", "sarah-mitchell", "Sarah Mitchell", "VP RevOps", 96, "4m ago"], ["Notion", "notion.svg", "/case-studies", "/pricing", "2", "maya-patel", "Maya Patel", "Director of Sales", 92, "18m ago"], ["Webflow", "webflow.svg", "/pricing", "/demo", "1", "ryan-brooks", "Ryan Brooks", "SDR Manager", 87, "1h ago"], ["Figma", "figma.svg", "/integrations", "/blog", "1", "emma-wilson", "Emma Wilson", "Head of GTM Systems", 85, "2h ago"], ["Vercel", "vercel.svg", "/pricing", "/features", "4", "david-kim", "David Kim", "VP Sales", 84, "3h ago"]]
          .map(([n, l, p1, p2, v, a, pn, r, icp, seen]) => `<div class="prd-tr prd-tr--tall"><span class="prd-td prd-ink">${logo(l)}${n}</span><span class="prd-td prd-wrap"><span class="prd-path prd-path--accent">${p1}</span><span class="prd-path">${p2}</span></span><span class="prd-td prd-body prd-body--sm">${v}</span><span class="prd-td">${av(a)}<span><span class="prd-t prd-t--sm prd-t--reg prd-block">${pn}</span><span class="prd-s prd-s--xs prd-block">${r}</span></span></span><span class="prd-td">${badge(icp)}</span><span class="prd-td prd-s">${seen}</span></div>`))}`,
    caps: {
      h2: "Act on interest that never filled out a form.",
      items: [
        ["Company", "Company identification", "Match anonymous website traffic to the companies behind it, with industry, size, and ICP fit."],
        ["Person", "Person-level matching", "See the likely visitor and verified contact details where a match is possible."],
        ["Next step", "Recommended next action", "Each high-intent visit comes with a suggested message, ready for review."],
      ],
    },
    features: [
      {
        label: "Page-level intent", title: "See what they read, not just that they came.",
        body: "Pricing, security, and case-study pages say more than a homepage visit. OutMate weighs each page and repeat visits into an intent score with a recommended action.",
        visual: () => `<div class="prd-mock">
          <div class="prd-mock-head">${logo("ramp.png", "md")}<div class="prd-grow"><p class="prd-t">Ramp</p><p class="prd-s">Second visit this week</p></div>${badge("ICP 94")}</div>
          ${[["/pricing", "4m 12s", "High", "violet"], ["/security", "2m 40s", "High", "violet"], ["/case-studies/fintech", "1m 55s", "Medium", "amber"], ["/blog/outbound-playbook", "0m 48s", "Low", "zinc"]]
            .map(([p, t, lv, tone]) => `<div class="prd-li prd-li--tight"><span class="prd-path-plain prd-grow">${p}</span><span class="prd-s">${t}</span><span class="prd-badge prd-badge--${tone} prd-badge--fixed">${lv}</span></div>`).join("")}
          <div class="prd-next">${mono("Next", " prd-mono--xs prd-mono--accent")}<span class="prd-grow prd-t prd-t--sm prd-t--reg">Send Daniel Chen a note on pricing for multi-entity teams</span><span class="prd-mini-btn">Draft</span></div>
        </div>`,
      },
    ],
    how: [["Visitor arrives", "Someone opens /pricing. No form submitted."], ["Company identified", "The visit is matched to a company."], ["Person identified", "Likely visitor matched where possible."], ["ICP scored", "Fit checked against your ICP."], ["Recommended action", "A suggested next step, ready to send."]],
    uses: [
      ["Growth teams", "Follow up on website interest", "Reach high-fit companies while their interest is fresh.", "Act on interest that never filled out a form."],
      ["Sales teams", "Warm up cold accounts", "See when a target account starts researching you.", "Call when they are looking."],
      ["Marketing", "Measure real account reach", "Know which companies your campaigns actually brought to the site.", "Attribution by account."],
    ],
  },

  intelligence: {
    num: "05", name: "Social &amp; Web Intelligence", icon: "globe", short: "LinkedIn, news and web activity that matters.",
    hero: {
      h1: "Track the conversations that signal a buying moment.",
      lead: "Follow LinkedIn posts, news, and website changes from your target accounts and the people inside them, filtered to what is relevant to your offer.",
      secondary: ["Book a demo", "mailto:sales@outmate.ai"],
    },
    demo: () => {
      const items = [
        ["av", "daniel-chen", "Daniel Chen", "Head of Revenue, Ramp · 2h", "LinkedIn", "sky", "Our team is rebuilding how we find accounts. Looking at how other revenue teams prioritize outbound.", "Evaluating prospecting workflow"],
        ["logo", "notion.svg", "Notion", "News · 5h", "News", "amber", "Notion announces an enterprise product release with new admin and security controls.", "Moving upmarket"],
        ["av", "maya-patel", "Maya Patel", "Director of Sales, Notion · 1d", "LinkedIn", "sky", "Hiring 2 enterprise AEs. Leadership is talking about growth this year.", "Sales team expanding"],
        ["logo", "webflow.svg", "Webflow", "Website · 2d", "Web", "green", "New pricing page published with an Enterprise tier.", "New enterprise motion"],
      ];
      const topics = [["Scaling outbound", "48", 92], ["Hiring sales reps", "36", 70], ["Pipeline generation", "29", 56], ["RevOps tooling", "17", 34], ["Enterprise expansion", "12", 24]];
      return `<div class="prd-split prd-split--rev" style="--side:220px">
        <div class="prd-mainpane prd-mainpane--line">
          <div class="prd-bar"><div class="prd-seg"><span class="prd-seg-item prd-seg-item--on">All</span><span class="prd-seg-item">LinkedIn</span><span class="prd-seg-item">News</span><span class="prd-seg-item">Web</span></div><span class="prd-s prd-s--faint">Filtered for relevance</span></div>
          ${items.map(([k, img, who, sub, src, tone, text, why]) => `<div class="prd-post">${k === "av" ? av(img, "32") : logo(img, "post")}<div class="prd-grow prd-post-body">
            <div class="prd-post-top"><span class="prd-t">${who}</span><span class="prd-s">${sub}</span>${badge(src, tone)}</div>
            <p class="prd-body">${text}</p>
            <p class="prd-why"><span class="prd-mono prd-mono--xs prd-mono--inline">Why it matters ·</span> ${why}</p>
          </div></div>`).join("")}
        </div>
        <div class="prd-side prd-side--pad prd-side--end">${mono("Tracked topics", " prd-mono--xs")}
          ${topics.map(([n, c, pct]) => `<div class="prd-topic"><div class="prd-topic-top"><span class="prd-t prd-t--sm prd-t--reg">${n}</span><span class="prd-count">${c}</span></div><div class="prd-track"><span class="prd-fill" style="width:${pct}%"></span></div></div>`).join("")}
          <p class="prd-s prd-topic-note">Mentions from target accounts in the last 30 days.</p>
        </div>
      </div>`;
    },
    caps: {
      h2: "What accounts say in public, in one feed.",
      items: [
        ["LinkedIn", "Posts from decision-makers", "Posts, comments, and engagement from the people at your target accounts, matched to topics you choose."],
        ["News", "Announcements and press", "Product launches, expansions, partnerships, and leadership news, summarized with a link to the source."],
        ["Web", "Website changes", "New pricing, product, and careers pages detected on account websites, with what changed."],
      ],
    },
    features: [
      {
        label: "Change detection", title: "Notice when an account changes its website.",
        body: "A new pricing tier or an enterprise page often comes before a new motion. OutMate shows the change side by side and adds it to the account's signals.",
        visual: () => `<div class="prd-mock">
          <div class="prd-browser"><span class="prd-lights"><span></span><span></span><span></span></span><span class="prd-path-plain prd-grow">webflow.com/pricing</span><span class="prd-s prd-s--xs">Changed 2h ago</span></div>
          <div class="prd-diffs">
            <div class="prd-diff">Starter · Pro · Business</div>
            <div class="prd-diff prd-diff--del">Contact sales for teams over 50 seats</div>
            <div class="prd-diff prd-diff--add">+ Enterprise plan: SSO, audit logs, dedicated support</div>
            <div class="prd-diff prd-diff--add">+ Talk to our enterprise team</div>
          </div>
          <div class="prd-next prd-next--text"><span class="prd-mono prd-mono--xs prd-mono--accent prd-mono--inline">Signal ·</span> New enterprise tier published. Likely building an enterprise sales team.</div>
        </div>`,
      },
    ],
    how: [["Choose accounts and topics", "Pick who to follow and what matters."], ["OutMate tracks", "LinkedIn, news, and websites."], ["Filtered for relevance", "Only activity tied to your offer."], ["Turn it into outreach", "Reference the post or change directly."]],
    uses: [
      ["Social sellers", "Engage at the right time", "Comment or reach out when a buyer posts about the problem you solve.", "Conversations, not cold pitches."],
      ["Account managers", "Stay close to customers", "Know about launches, reorganizations, and leadership changes first.", "Fewer surprises at renewal."],
      ["Leadership", "Track the market", "Follow how target accounts talk about their priorities.", "Strategy from real signals."],
    ],
  },

  agents: {
    num: "06", name: "GTM Agents", icon: "workflow", short: "Personalization, outreach and follow-up.",
    hero: {
      h1: "Turn research and signals into personalized outreach.",
      lead: "Agents research the account, find the decision-maker, write the message, and handle follow-up. You review and approve before anything is sent.",
      secondary: ["Book a demo", "mailto:sales@outmate.ai"],
    },
    demo: () => {
      const steps = [["Researching account", "Brief built from 6 sources", "done"], ["Finding decision maker", "Daniel Chen, Head of Revenue", "done"], ["Preparing outreach", "Email drafted from 3 signals", "done"], ["Waiting for approval", "Review the draft to send", "active"], ["Follow up", "Scheduled for 3 days after send", "todo"]];
      return `<div class="prd-split" style="--side:260px">
        <div class="prd-side prd-side--pad">
          <div class="prd-inline">${logo("ramp.png", "md")}<div><p class="prd-t">Outreach agent</p><p class="prd-s">Ramp · Daniel Chen</p></div></div>
          ${steps.map(([t, d, s]) => `<div class="prd-step prd-step--${s}"><span class="prd-step-dot">${s === "done" ? icon("check") : ""}</span><div><p class="prd-t prd-t--sm">${t}</p><p class="prd-s">${d}</p></div></div>`).join("")}
        </div>
        <div class="prd-mainpane prd-mail">
          <div class="prd-mail-head"><div class="prd-mail-row"><span class="prd-mail-k">To</span><span>Daniel Chen, Head of Revenue at Ramp</span></div><div class="prd-mail-row"><span class="prd-mail-k">Subject</span><b>Prioritizing accounts while you build the sales team</b></div></div>
          <div class="prd-mail-body">
            <p>Hi Daniel,</p>
            <p>Saw that Ramp <span class="prd-hl">opened a VP of Sales role</span> and that you <span class="prd-hl">posted about scaling outbound</span> last week. Teams at that stage usually need a clear view of which accounts to work first.</p>
            <p>OutMate shows which accounts are showing signals right now and why, so new reps start with a reason to reach out. Worth a 20-minute look next week?</p>
            <p>Best,<br>Alex</p>
          </div>
          <div class="prd-mail-foot"><span class="prd-grow prd-s">Grounded in 3 signals · 2 sources</span><span class="prd-mini-btn prd-mini-btn--ghost">Edit</span><span class="prd-mini-btn">Approve &amp; send</span></div>
        </div>
      </div>`;
    },
    caps: {
      h2: "Agents for each step between signal and reply.",
      items: [
        ["Research", "Research agent", "Builds the account brief and finds the decision-maker as soon as a signal fires."],
        ["Outreach", "Outreach agent", "Writes email and LinkedIn messages grounded in recent activity, in your team's voice."],
        ["Follow-up", "Follow-up agent", "Sorts replies, drafts responses, and keeps the CRM current so nothing is forgotten."],
      ],
    },
    features: [
      {
        label: "Approval queue", title: "You approve every message.",
        body: "Drafts land in a queue with the signals behind them. Approve, edit, or skip. Set rules for what can send automatically once you trust the output.",
        visual: () => `<div class="prd-mock">
          <div class="prd-mock-head prd-mock-head--between"><span>Ready for review</span><span class="prd-s">5 drafts</span></div>
          ${[["daniel-chen", "Daniel Chen", "Ramp", "Visited pricing twice · hiring VP of Sales", "Ready", "violet"], ["sarah-mitchell", "Sarah Mitchell", "Stripe", "Viewed security page · enterprise roles open", "Ready", "violet"], ["maya-patel", "Maya Patel", "Notion", "Posted about hiring enterprise AEs", "Edited", "amber"], ["ryan-brooks", "Ryan Brooks", "Webflow", "New enterprise pricing tier published", "Ready", "violet"], ["david-kim", "David Kim", "Vercel", "Opened 2 sales roles · 4 site visits", "Sent", "green"]]
            .map(([a, n, co, why, st, tone]) => `<div class="prd-li prd-li--tight">${av(a, "28")}<div class="prd-grow prd-min0"><p class="prd-t prd-t--sm prd-t--reg"><b>${n}</b> · ${co}</p><p class="prd-s prd-ellipsis">${why}</p></div>${badge(st, tone)}</div>`).join("")}
        </div>`,
      },
      {
        label: "Replies &amp; CRM", title: "Replies handled. CRM kept current.", flip: true,
        body: "The follow-up agent reads each reply, drafts the response, pauses the sequence, and updates the deal, so the next step is never lost between tools.",
        visual: () => `<div class="prd-mock prd-mock--tint">
          <div class="prd-note"><div class="prd-inline">${av("daniel-chen")}<span class="prd-t prd-t--sm">Daniel Chen replied</span><span class="prd-push">${badge("Interested", "green")}</span></div><p class="prd-body prd-mt8">Timing is good. Can you send a few times for next Tuesday or Wednesday?</p></div>
          <div class="prd-stack-col">
            ${["Reply drafted with 3 meeting times", "CRM deal stage updated to Meeting requested", "Sequence paused for Ramp contacts"].map((t) => `<div class="prd-done"><span class="prd-step-dot">${icon("check")}</span>${t}</div>`).join("")}
          </div>
        </div>`,
      },
    ],
    how: [["A signal fires", "An account matches your rules."], ["Agent researches", "Brief built, decision-maker found."], ["Agent drafts", "Message grounded in the signals."], ["You approve", "Edit, approve, or skip."], ["Agent follows up", "Replies sorted, CRM updated."]],
    uses: [
      ["Lean sales teams", "Cover more accounts", "Let agents handle research and first drafts across your whole list.", "More coverage without more headcount."],
      ["Outbound", "Signal-based sequences", "Start personalized outreach automatically when an account shows intent.", "Every message has a reason."],
      ["RevOps", "Keep the CRM current", "Replies, meetings, and stage changes logged without manual entry.", "Clean data, no chasing."],
    ],
  },
};

/* ---------- shared content ---------- */
const EXEC = [
  ["Data", "500M+", "Contacts to search", "Companies and people that match your ICP, with verified contact details."],
  ["AI", "6", "Sources behind every brief", "Briefs and messages draw on websites, job posts, news, and social activity, with links."],
  ["Speed", "&lt; 60 sec", "For key identification and enrichment steps", "A draft next step while the interest is still fresh."],
  ["Signals", "1,000+", "Buying signals", "Hiring, funding, technology, website, social, and news activity."],
  ["Impact", "3.2x", "Reply rate", "Teams report more replies once messages start from a real signal."],
];
// Placeholder customer evidence, matching the pricing page; replace before launch.
const CUSTOMERS = [["Stripe", "stripe.svg"], ["Ramp", "ramp.png"], ["Notion", "notion.svg"], ["HubSpot", "hubspot.svg"], ["Webflow", "webflow.svg"], ["Figma", "figma.svg"], ["Vercel", "vercel.svg"]];
// The integrations themselves come from the approved mockup and are unconfirmed.
const INTEGRATIONS = [["Salesforce", "CRM", "salesforce.svg"], ["HubSpot", "CRM", "hubspot.svg"], ["Slack", "Alerts", "slack.svg"], ["Gmail", "Email", "gmail.svg"], ["Outlook", "Email", "outlook.svg"], ["LinkedIn", "Social", "linkedin.svg"], ["Zapier", "Automation", "zapier.svg"], ["Snowflake", "Data warehouse", "snowflake.svg"]];
// PLACEHOLDER: these quotes are invented, same identities as the pricing page. Replace before launch.
const QUOTES = [
  ["We started on Free to test it on one territory. Two weeks later the whole team was on Growth.", "hannah-lowe", "Hannah Lowe", "VP Sales, Brightpath", "3x pipeline"],
  ["One credit pool for research, enrichment, and agents replaced three separate tool budgets.", "ryan-brooks", "Ryan Brooks", "RevOps Manager, Lumen", "-40% tool spend"],
  ["Scale paid for itself in the first month. Website visitors alone sourced two closed deals.", "daniel-chen", "Daniel Chen", "Head of Revenue, Meridian", "ROI in 30 days"],
];
const quote = ([text, img, name, role, result]) =>
  `<figure class="prd-quote"><span class="prd-stars" aria-label="5 out of 5">★★★★★</span>
  <blockquote class="prd-quote-text">“${text}”</blockquote>
  <figcaption class="prd-quote-by"><img src="/avatars/${img}.webp" alt="" width="36" height="36"><span><span class="prd-quote-name">${name}</span><span class="prd-quote-role">${role}</span></span><span class="prd-result">${result}</span></figcaption></figure>`;

/* ---------- template ---------- */
const btn = (label, href, kind, withArrow) =>
  `<a class="prd-btn prd-btn--${kind}" href="${href}"${href.startsWith("mailto:") ? ' data-no-router=""' : ""}>${label}${withArrow ? icon("arrow", "prd-ico prd-ico--sm") : ""}</a>`;
const eyebrow = (t, ico, tone = "violet") =>
  `<div class="prd-eyebrow"><span class="prd-eyebrow-tile prd-eyebrow-tile--${tone}">${ico ? icon(ico, "prd-ico prd-ico--xs") : ""}</span>${t}</div>`;

export function productPage(p) {
  const slug = typeof p === "string" ? p : p.slug;
  const d = PRODUCTS[slug];
  if (!d) return "";

  const features = d.features.map((f) => {
    const text = `<div class="prd-feature-text reveal">${mono(f.label)}<h2 class="prd-h3">${f.title}</h2><p class="prd-feature-body">${f.body}</p></div>`;
    const vis = `<div class="prd-feature-visual reveal">${f.visual()}</div>`;
    return `<div class="prd-feature${f.flip ? " prd-feature--flip" : ""}">${f.flip ? vis + text : text + vis}</div>`;
  }).join("");

  const platform = Object.entries(PRODUCTS).map(([s, x]) => {
    const here = s === slug;
    return `<a class="prd-plat${here ? " prd-plat--here" : ""}" href="/product/${s}"${here ? ' aria-current="page"' : ""}>
      <span class="prd-plat-top"><span class="prd-plat-ico">${icon(x.icon)}</span><span class="prd-plat-num">${x.num}</span></span>
      <span class="prd-plat-name">${x.name}</span><span class="prd-plat-desc">${x.short}</span>
      <span class="prd-plat-link">${here ? "You are here" : `Explore ${x.name} →`}</span></a>`;
  }).join("");

  return `<main class="prd-page" id="top">
  <section class="prd-hero"><div class="prd-wrap prd-center">
    <span class="prd-pill"><span class="prd-dot prd-dot--violet"></span>PRODUCT · ${d.num} ${d.name.toUpperCase()}</span>
    <h1 class="prd-h1">${d.hero.h1}</h1>
    <p class="prd-lead">${d.hero.lead}</p>
    <div class="prd-actions">${btn("Start for free", "/signup", "primary")}${btn(d.hero.secondary[0], d.hero.secondary[1], "secondary")}</div>
    <div class="prd-demo"><div class="prd-demo-glow" aria-hidden="true"></div><div class="prd-frame"><div class="prd-frame-in">${d.demo()}</div></div></div>
  </div></section>

  <section class="prd-sec"><div class="prd-wrap"><div class="prd-inset">
    ${eyebrow("Capabilities", d.icon)}
    <h2 class="prd-h2">${d.caps.h2}</h2>
    <div class="prd-grid prd-grid--cards">${d.caps.items.map(([l, t, x]) => `<article class="prd-card reveal">${mono(l)}<h3 class="prd-card-title">${t}</h3><p class="prd-card-body">${x}</p></article>`).join("")}</div>
  </div></div></section>

  <section class="prd-sec prd-sec--features"><div class="prd-wrap"><div class="prd-inset prd-features">${features}</div></div></section>

  <section class="prd-sec prd-sec--tight-top"><div class="prd-wrap"><div class="prd-inset">
    ${eyebrow("Built for GTM execution")}
    <h2 class="prd-h2">Data, AI, and speed your team can feel.</h2>
    <div class="prd-tiles">${EXEC.map(([l, s, t, x]) => `<div class="prd-tile">${mono(l, " prd-mono--accent")}<p class="prd-tile-stat">${s}</p><p class="prd-tile-title">${t}</p><p class="prd-card-body">${x}</p></div>`).join("")}</div>
  </div></div></section>

  <section class="prd-sec"><div class="prd-wrap"><div class="prd-inset">
    ${eyebrow("How it works")}
    <h2 class="prd-h2">From signal to action.</h2>
    <ol class="prd-steps">${d.how.map(([t, x], i) => `<li class="prd-howstep reveal"><span class="prd-howstep-n">${String(i + 1).padStart(2, "0")}</span><p class="prd-howstep-t">${t}</p><p class="prd-card-body">${x}</p></li>`).join("")}</ol>
  </div></div></section>

  <section class="prd-sec"><div class="prd-wrap"><div class="prd-inset">
    ${eyebrow("Use cases")}
    <h2 class="prd-h2">Built for your GTM motion.</h2>
    <div class="prd-grid prd-grid--cards">${d.uses.map(([team, t, x, out]) => `<article class="prd-card prd-card--use reveal">${mono(team)}<h3 class="prd-card-title">${t}</h3><p class="prd-card-body">${x}</p><p class="prd-card-out">${out}</p></article>`).join("")}</div>
  </div></div></section>

  <section class="prd-sec"><div class="prd-wrap"><div class="prd-inset">
    ${eyebrow("Customers")}
    <p class="prd-proof-label">Trusted by GTM teams at fast-growing companies</p>
    <div class="prd-logos">${CUSTOMERS.map(([n, f]) => `<span class="prd-cust"><img src="/logos/${f}" alt="">${n}</span>`).join("")}</div>
    <div class="prd-proof-head"><h2 class="prd-h2">Teams that switched don't go back.</h2><span class="prd-rating"><span class="prd-stars" aria-hidden="true">★★★★★</span><b>4.8 / 5</b> from 200+ reviews</span></div>
    <div class="prd-quotes">${QUOTES.map(quote).join("")}</div>
  </div></div></section>

  <section class="prd-sec prd-sec--tight-bottom"><div class="prd-wrap"><div class="prd-inset">
    ${eyebrow("Integrations", null, "green")}
    <h2 class="prd-h2">Works with your GTM stack.</h2>
    <p class="prd-sub">Sync accounts, contacts, and activity with your CRM. Send alerts to Slack. Send outreach from the inbox your team already uses.</p>
    <ul class="prd-integrations">${INTEGRATIONS.map(([n, c, file]) => `<li class="prd-int">${file ? `<span class="prd-int-logo"><img src="/logos/${file}" alt=""></span>` : `<span class="prd-int-logo prd-int-logo--placeholder" aria-hidden="true">${n[0]}</span>`}<span><span class="prd-int-name">${n}</span><span class="prd-int-cat">${c}</span></span></li>`).join("")}</ul>
  </div></div></section>

  <section class="prd-sec prd-sec--platform"><div class="prd-wrap"><div class="prd-inset">
    ${eyebrow("The platform", null, "green")}
    <h2 class="prd-h2">Everything between a signal and a conversation.</h2>
    <nav class="prd-platform" aria-label="OutMate products">${platform}</nav>
  </div></div></section>

  <section class="prd-cta"><div class="prd-cta-glow" aria-hidden="true"></div><div class="prd-wrap prd-center prd-cta-inner">
    <p class="prd-kicker">SIGNALS → INTELLIGENCE → ACTION</p>
    <h2 class="prd-h2 prd-h2--center">Turn intelligence into action.</h2>
    <p class="prd-sub prd-sub--center">Know which accounts to prioritize, why now, and what to do next.</p>
    <div class="prd-actions">${btn("Start for free", "/signup", "primary")}</div>
  </div></section>
</main>`;
}

export const PRODUCT_SLUGS = Object.keys(PRODUCTS);
