// ─────────────────────────────────────────────────────────────
//  Single source of truth for all site content.
//  Edit here — never inside components.
//
//  OPEN ITEMS flagged for confirmation (see NOTES at bottom):
//   • IIM Calcutta CGPA  → CGPA_IIMC below
//   • NIT K degree name  → EDUCATION[1].degree
//   • Shopdeck job title → EXPERIENCE[1].role
// ─────────────────────────────────────────────────────────────

export const CGPA_IIMC = '6.44 / 9'

export const profile = {
  name: 'Sumit Yadav',
  first: 'Sumit',
  last: 'Yadav',
  eyebrow: 'Open to Growth · Strategy · PM Roles',
  headline: ['I build strategy', 'that ships.'],
  summary:
    "IIM Calcutta MBA. I build the systems inside India's fastest-moving companies — 2,300+ Blinkit dark stores, ₹100 Cr+ D2C revenue, ₹235 Cr+ capex.",
  location: 'Gurugram, India',
  timezone: 'Asia/Kolkata',
  email: 'sumity2025@email.iimcal.ac.in',
  phone: '+91 9728502596',
  phoneHref: '+919728502596',
  linkedin: 'https://www.linkedin.com/in/sumit-yadav1/',
  linkedinLabel: 'linkedin.com/in/sumit-yadav1',
  github: 'https://github.com/sumity2025-byte/IIM_C_Sumit',
}

export const nav = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'work', label: 'Work' },
  { id: 'frameworks', label: 'Frameworks' },
  { id: 'skills', label: 'Skills' },
  { id: 'documents', label: 'Documents' },
]

export const stats = [
  { value: 2300, suffix: '+', label: 'Dark stores impacted', note: 'Blinkit · pan-India' },
  { value: 100, prefix: '₹', suffix: ' Cr+', label: 'D2C revenue / yr', note: 'Shopdeck' },
  { value: 15, suffix: '+', label: 'Pilots scaled', note: 'Pan-India rollout' },
  { value: 335, prefix: '₹', suffix: ' Cr+', label: 'Economic value created', note: 'Strategy · growth · ops' },
]

export const marquee = [
  'Blinkit · Zomato',
  'Shopdeck',
  'Accenture',
  'Adani Wilmar',
  'Honda',
  'IIM Calcutta',
  'CAT 99.64%ile',
  '₹235 Cr+ capex',
  'NIT Kurukshetra',
  '6,500+ global peers',
]

export const logos = [
  { src: '/logos/blinkit.svg', name: 'Blinkit', href: '#experience' },
  { src: '/logos/shopdeck.ico', name: 'Shopdeck', href: '#experience' },
  { src: '/logos/adani.svg', name: 'Adani Wilmar', href: '#experience' },
  { src: '/logos/accenture.svg', name: 'Accenture', href: '#experience' },
  { src: '/logos/honda.svg', name: 'Honda', href: '#experience' },
  { src: '/logos/iimc.svg', name: 'IIM Calcutta', href: '#education' },
  { src: '/logos/nitk.png', name: 'NIT Kurukshetra', href: '#education' },
]

export const lanes = [
  {
    icon: 'compass',
    title: 'Strategy',
    line: 'Issue trees, should-cost, market sizing, business cases.',
  },
  {
    icon: 'chart',
    title: 'Growth',
    line: 'GTM, unit economics, funnels, LTV/CAC, retention.',
  },
  {
    icon: 'gear',
    title: 'Operations',
    line: 'Pilot scaling, spatial analytics, inventory, KPIs.',
  },
  {
    icon: 'hammer',
    title: 'Builder',
    line: 'Dashboards, SOPs, frameworks used daily at scale.',
  },
]

export const about = {
  quote: 'The best strategy is the one that survives contact with the store floor.',
  paras: [
    'I started as a mechanical engineer who liked fixing systems more than parts. Today I work where strategy meets execution: digitising 2,300+ dark stores, building D2C growth engines, and coordinating ₹235 Cr+ of capex.',
    'My edge is translation — turning a fuzzy business question into a framework, a dashboard, and a pilot that actually ships. I have built the operating playbooks companies now run daily across 80+ brands.',
  ],
}

export const experience = [
  {
    company: 'Blinkit · Zomato',
    logo: '/logos/blinkit.svg',
    role: 'Generalist — Product, Strategy & Operations',
    period: 'May 2025 — Present',
    duration: '14 mo',
    place: 'Gurugram',
    current: true,
    blurb:
      'Owned product for 2,300+ dark stores. Digitised the network, built the inventory logic, and scaled 15+ pilots pan-India.',
    bullets: [
      'Owned product for 2,300+ dark stores; achieved 100% layout digitisation and built a network-wide bin-ID framework adopted chain-wide.',
      'Conducted field discovery across 50+ dark stores; authored PRD and designed the end-to-end digitisation flow adopted chain-wide.',
      'Built a prioritisation engine and execution dashboard 0→1; cut inventory variance 43% across 2,300+ stores with full rollout.',
      'Developed 4 diagnostic heatmaps on the spatial engine; improved placement accuracy 22% and cut complaints 23%.',
      'Piloted picklist suppression to enforce pick-path adherence; adherence 43% → 92% pan-India, cutting PPI by 10% and boosting throughput 7.5%.',
      'Led a 10+ member cross-functional team (product, engg, ops) to define, ship and scale 15+ pilots pan-India.',
      'Redesigned LT store layouts using spatial analytics; space utilisation 1.5× and 18% GMV uplift per sq. ft.',
      'Designed FEFO inventory logic with batch segregation for perishables and pharma; drove a 76% decline in expiry complaints.',
      'Automated storage-to-replenishment integration, eliminating manual flows and improving replenishment accuracy to 90%.',
    ],
    tags: ['Product', 'Spatial analytics', 'Inventory', 'Pilot scaling'],
  },
  {
    company: 'Shopdeck',
    logo: '/logos/shopdeck.ico',
    role: 'Assistant Manager — Growth',
    period: 'Sep 2022 — May 2023',
    duration: '8 mo',
    place: 'Bengaluru',
    blurb:
      'Drove ₹100 Cr+/yr across 80+ D2C brands and took order volume from 0 to 3M/yr.',
    bullets: [
      'Drove business worth ₹100 Cr+/yr for 80+ clients; grew order volume 0 → 3M orders/yr via CTR, CPR and drop-off funnel optimisation.',
      'Boosted profitability of 42 firms (118% increase) from a portfolio of 80+ D2C clients through persistent growth troubleshooting.',
      'Shipped 5+ merchant dashboard features (bulk grouping, WhatsApp cart-drop, product coupons) — all live on production.',
      'Scoped 20+ Superset dashboards; cut consultant analysis time 30% and reduced client escalation meetings by 20/week.',
      'Authored a 100-point pre-live checklist and 25-step campaign SOP; standardised go-live for 500+ clients and 80 consultants.',
      'Attained 9/10 CSAT (50% above team average) and 92% action compliance — highest in the team — across 80+ clients.',
      'Formulated diagnostic frameworks for RTO and marketing fluctuations; deployed as troubleshooting SOP across 80 consultants.',
    ],
    tags: ['GTM', 'Funnels', 'D2C', 'Dashboards'],
  },
  {
    company: 'Adani Enterprises',
    logo: '/logos/adani.svg',
    role: 'Senior Engineer',
    period: 'Jan 2022 — Jul 2022',
    duration: '6 mo',
    place: 'Mundra',
    blurb: 'SPOC for ₹235 Cr+ of capex across RMHS and Steam Dryer packages.',
    bullets: [
      'Acted as SPOC for RMHS (₹180 Cr+) and Steam Dryer (₹55 Cr+); evaluated proposals from 15+ international suppliers.',
      'Reviewed 200+ technical documents from China Nerin and TCE; built a bid-evaluation framework covering 10+ international suppliers.',
      'Managed vehicle logistics for 1,000+ employees at Mundra; delivered 25% logistics cost reduction via strategic fleet planning.',
    ],
    tags: ['Capex', 'Procurement', 'Should-cost'],
  },
  {
    company: 'UPS Lakshmi',
    logo: null,
    role: 'Graduate Engineer Trainee — B2B Sales',
    period: 'Jun 2021 — Jan 2022',
    duration: '7 mo',
    place: 'Rohtak',
    blurb: 'Owned 9+ key accounts including Honeywell and Boeing; ₹5 Cr/month peak revenue.',
    bullets: [
      'SPOC for 9+ accounts including Honeywell and Boeing; generated the highest-ever monthly revenue of ₹5 Cr/month.',
      'Drove 60% increase in Honeywell sales to ₹80 Lakhs, upholding 95%+ on-time delivery and zero quality rejections.',
      'Managed demand-driven procurement for 50+ critical items via 3-year forecast; independently handled 100+ RFQs.',
      'Cut setup time 67% (12 hrs → 4 hrs) by automating line processes with SMED Lean; saved 200+ man-hours.',
      'Delivered 25% (₹80 lakh) cost reduction; saved 380+ man-hours via six-sigma and lean waste-reduction tools.',
    ],
    tags: ['B2B sales', 'Lean', 'Six Sigma'],
  },
  {
    company: 'Accenture',
    logo: '/logos/accenture.svg',
    role: 'Strategy Analyst Intern',
    period: 'May 2024 — Jun 2024',
    duration: '2 mo',
    place: 'Gurugram',
    blurb: 'Should-cost model across 15+ cost drivers; identified 10% budget savings.',
    bullets: [
      'Scrutinised 5 international vendor proposals across 50+ metrics; built a structured bid-evaluation framework for the client.',
      'Designed a bottom-up should-cost model; identified cost levers across 15+ drivers for 10% budget savings.',
    ],
    tags: ['Should-cost', 'Benchmarking'],
  },
  {
    company: 'X-Culture',
    logo: null,
    role: 'International Business Consultant',
    period: 'Aug 2024 — Dec 2024',
    duration: '5 mo',
    place: 'Global · Virtual',
    blurb: 'Top 9.1% individually among 6,500+ students; Top 5% peer-rated.',
    bullets: [
      'Led GTM and market entry for an international FMCG client — competitive benchmarking, segmentation and pricing; Top 40% of 1,000+ global teams.',
      'Ranked Top 5% on peer evaluations (4.9/5) among 6,500+ students; rated 5.0/5 on effort, IP and technical skills.',
      'Ranked Top 9.1% individually among 6,500+ students; consulting report scored 5.2/7.',
    ],
    tags: ['GTM', 'Market entry', 'Pricing'],
  },
]

export const projects = [
  {
    id: 'blinkit',
    kicker: 'Blinkit · 2025',
    featured: true,
    icon: 'store',
    title: 'Dark Store Digitisation & Ops Strategy',
    subtitle: '2,300+ locations',
    summary:
      "End-to-end overhaul of Blinkit's dark store infrastructure. Built location intelligence, FEFO logic, spatial pick-path optimisation and execution dashboards — turning a fragmented manual system into a digitised, scalable operating model.",
    hero: ['100%', 'Digitised'],
    metrics: [
      { v: '2,300+', l: 'Stores' },
      { v: '43%', l: 'Variance ↓' },
      { v: '18%', l: 'GMV uplift' },
      { v: '1.5×', l: 'Space util.' },
      { v: '90%', l: 'Replenishment' },
      { v: '23%', l: 'Complaints ↓' },
      { v: '7.5%', l: 'Throughput ↑' },
      { v: '15+', l: 'Pilots' },
    ],
    story:
      'Fifty store visits, four spatial heatmaps, one PRD. The insight was that variance was not a discipline problem — it was a layout and pick-path problem. Fix the geometry and the behaviour follows.',
  },
  {
    id: 'shopdeck',
    kicker: 'Shopdeck · Growth',
    icon: 'chart',
    title: 'D2C Growth Engine',
    subtitle: '80+ brands',
    summary:
      'Drove ₹100 Cr+/yr and scaled orders 0→3M/yr. 20+ Superset dashboards, 5+ live merchant features, 118% profitability uplift, 9/10 CSAT.',
    hero: ['₹100 Cr+', 'Revenue'],
    metrics: [
      { v: '₹100 Cr+', l: 'Revenue/yr' },
      { v: '3M', l: 'Orders/yr' },
      { v: '118%', l: 'Profit uplift' },
      { v: '20+', l: 'Dashboards' },
      { v: '500+', l: 'Go-lives' },
      { v: '9/10', l: 'CSAT' },
    ],
    story:
      'I inherited 80+ chaotic D2C accounts and built the growth system: funnel diagnosis, live dashboards, and a standardised go-live SOP. Result — ₹100 Cr+/yr and the playbook 80 consultants still use.',
  },
  {
    id: 'accenture',
    kicker: 'Accenture · Consulting',
    icon: 'compass',
    title: 'Strategic Procurement — Should-Cost',
    subtitle: '5 vendors, 50+ metrics',
    summary:
      'Should-cost model across 15+ cost drivers, 5 vendors and 50+ metrics. 10% budget savings. Built the structured bid-evaluation framework.',
    hero: ['10%', 'Saved'],
    metrics: [
      { v: '10%', l: 'Budget saved' },
      { v: '15+', l: 'Cost drivers' },
      { v: '50+', l: 'Metrics' },
      { v: '5', l: 'Vendors' },
    ],
    story:
      'Faced with five vendor proposals, I built a bottom-up should-cost model across 15+ drivers and 50+ metrics — turning a gut-feel negotiation into a defensible 10% saving.',
  },
  {
    id: 'adani',
    kicker: 'Adani · Capex',
    icon: 'factory',
    title: '₹235 Cr+ Capex Evaluation',
    subtitle: 'RMHS + Steam Dryer',
    summary:
      'SPOC for RMHS (₹180 Cr+) and Steam Dryer (₹55 Cr+). 15+ suppliers, 200+ technical documents from Nerin and TCE, 25% logistics cost cut for 1,000+ employees.',
    hero: ['₹235 Cr+', 'Owned'],
    metrics: [
      { v: '₹235 Cr+', l: 'Capex' },
      { v: '15+', l: 'Suppliers' },
      { v: '200+', l: 'Documents' },
      { v: '25%', l: 'Cost ↓' },
    ],
    story:
      'I became the single point of coordination across 15+ global suppliers and 200+ technical documents — turning a fragmented capex decision into one clear, defensible recommendation.',
  },
  {
    id: 'xculture',
    kicker: 'X-Culture · International',
    icon: 'globe',
    title: 'Global Market Entry Strategy',
    subtitle: 'Top 9.1% of 6,500+',
    summary:
      'Led GTM and market entry for an international FMCG client — benchmarking, segmentation, pricing. Top 9.1% individually; Top 5% peer-rated at 4.9/5.',
    hero: ['Top 9.1%', 'of 6,500+'],
    metrics: [
      { v: 'Top 9.1%', l: 'Individual' },
      { v: 'Top 5%', l: 'Peer-rated' },
      { v: '4.9/5', l: 'Peer score' },
      { v: '6,500+', l: 'Students' },
    ],
    story:
      'Led a virtual global team through GTM and market entry for an FMCG client — ranked top 5% on peer reviews and top 9.1% individually among 6,500+ students.',
  },
  {
    id: 'ups',
    kicker: 'UPS Lakshmi · B2B Sales',
    icon: 'plane',
    title: 'Aerospace & Industrial Sales',
    subtitle: 'Honeywell · Boeing',
    summary:
      'SPOC for 9+ accounts including Honeywell and Boeing; ₹5 Cr/month peak revenue. 60% Honeywell growth, 95%+ on-time delivery, 25% cost reduction, 67% setup-time cut.',
    hero: ['₹5 Cr', '/ month'],
    metrics: [
      { v: '₹5 Cr', l: 'Peak / month' },
      { v: '60%', l: 'Honeywell ↑' },
      { v: '95%+', l: 'On-time' },
      { v: '67%', l: 'Setup ↓' },
    ],
    story:
      'Owned 9+ key accounts including Honeywell and Boeing, hitting the highest-ever monthly revenue while cutting costs 25% and setup time 67% with lean methods.',
  },
  {
    id: 'frameworks-ip',
    kicker: 'Shopdeck · IP',
    icon: 'layers',
    title: 'Frameworks I Built',
    subtitle: 'RTO triage, SOPs',
    summary:
      'RTO and marketing-fluctuation diagnostic frameworks deployed as troubleshooting SOP across 80 consultants; 100-point pre-live checklist and 25-step campaign SOP.',
    hero: ['80', 'Consultants'],
    metrics: [
      { v: '80', l: 'Consultants' },
      { v: '500+', l: 'Go-lives' },
      { v: '100-pt', l: 'Checklist' },
      { v: '25-step', l: 'Campaign SOP' },
    ],
    story:
      'I turned recurring fires into reusable diagnostics — RTO triage and fluctuation audits now run as SOPs across 80 consultants and 500+ client go-lives.',
  },
]

export const frameworks = [
  { title: 'Operating model canvas', src: '/frameworks/operating-model-canvas.jpg' },
  { title: 'Diagnostics taxonomy', src: '/frameworks/diagnostics-taxonomy.jpg' },
  { title: 'Scaling playbook', src: '/frameworks/scaling-playbook.jpg' },
  { title: 'Cohort & variance logic', src: '/frameworks/cohort-variance.jpg' },
]

export const process = [
  {
    n: '01',
    title: 'Diagnose',
    text: 'Field discovery across 50+ dark stores; four spatial heatmaps exposed variance and pick-accuracy hotspots.',
    proof: '22% ↑ accuracy',
  },
  {
    n: '02',
    title: 'Build',
    text: 'Authored the PRD; shipped a 0→1 prioritisation engine and execution dashboard with a bin-ID framework.',
    proof: '43% ↓ variance',
  },
  {
    n: '03',
    title: 'Ship',
    text: 'Piloted picklist suppression and FEFO logic; adherence jumped and expiry complaints collapsed.',
    proof: '43% → 92% adherence',
  },
  {
    n: '04',
    title: 'Scale',
    text: 'Led a 10+ member team to scale 15+ pilots across 2,300+ stores — network-wide adoption.',
    proof: '2,300+ stores',
  },
]

export const proof = [
  { icon: 'arrow-down', v: '−23%', l: 'Complaints', d: 'Four diagnostic heatmaps; placement accuracy up 22%.' },
  { icon: 'box', v: '−43%', l: 'Inventory variance', d: 'Prioritisation engine and execution dashboard across 2,300+ stores.' },
  { icon: 'arrow-up', v: '+118%', l: 'Profitability', d: 'Uplift across 42 firms from a portfolio of 80+ D2C clients.' },
]

export const skills = [
  { group: 'Strategy & Consulting', items: ['Issue Trees', 'MECE', 'Market Sizing', 'Should-Cost', 'Benchmarking', 'Scenarios', 'Business Cases'] },
  { group: 'Growth & Commercial', items: ['GTM', 'Unit Economics', 'Pricing', 'Funnel Diagnosis', 'P&L', 'Cohorts', 'LTV/CAC', 'Retention', 'D2C'] },
  { group: 'Program & Operations', items: ['Pilot Scaling', 'Cross-functional', 'Stakeholders', 'Spatial Analytics', 'Inventory', 'Process', 'OKR/KPI'] },
  { group: 'Tools', items: ['Advanced Excel', 'Superset', 'Tableau', 'Asana', 'Figma', 'SQL', 'GA'] },
]

export const certs = [
  { icon: 'cap', title: 'Consulting & Strategy Certs', issuer: 'Alison (CPD) · Oxford Home Study', score: '93%+', href: '/docs/docs-pending.pdf', missing: 'Certifications-Consult.pdf' },
  { icon: 'search', title: 'Product Management Certs', issuer: 'Product School · UXCam', score: '93%+', href: '/docs/docs-pending.pdf', missing: 'Verification_Prod.pdf' },
  { icon: 'clipboard', title: 'Business Strategy Live Project', issuer: 'Skilled Sapiens · MSME Certified', href: '/docs/docs-pending.pdf', missing: 'Live_project_consult.pdf' },
  { icon: 'rocket', title: 'Product Mgmt Live Project', issuer: 'Skilled Sapiens · MSME Certified', href: '/docs/docs-pending.pdf', missing: 'Live_project_prod.pdf' },
]

export const education = [
  {
    school: 'IIM Calcutta',
    logo: '/logos/iimc.svg',
    period: '2023 — 2025',
    degree: 'MBA',
    score: `CGPA ${CGPA_IIMC}`,
    detail: 'CAT 99.64%ile (QA 99.83) · Converted 12 of 15 IIM calls incl. IIM-C, IIM-A and IIFT.',
  },
  {
    school: 'NIT Kurukshetra',
    logo: '/logos/nitk.png',
    period: '2017 — 2021',
    degree: 'B.Tech — Mechanical Engineering',
    score: 'CGPA 8.36 / 10',
    detail: '10/10 GPA in Semester 6 · Academic Excellence Award · Mechanical Society Secretary (₹4L+ budget, 4K+ footfall).',
  },
  {
    school: 'CBSE XII & X',
    logo: null,
    period: '2016 / 2014',
    degree: 'Senior Secondary & Secondary',
    score: 'XII 87.2% · X 10/10 CGPA',
    detail: 'Ranked 1st among 1,000+ for 10 years · Head Boy · Student of the Year.',
  },
]

export const achievements = [
  { icon: 'target', text: 'CAT 99.64%ile of 2L+ — QA 99.83%. Converted 12/15 calls.' },
  { icon: 'ruler', text: 'GATE AIR 2070 of 1.2L+ (Mechanical Engineering).', href: '/docs/docs-pending.pdf', linkLabel: 'Scorecard' },
  { icon: 'anchor', text: 'Top 1.5%ile NDA twice; Indian Navy B.Tech Cadet Entry selectee.' },
  { icon: 'medal', text: '10+ certifications in Strategy, Consulting and PM at 93%+ average; 2 from Oxford.' },
  { icon: 'cap', text: 'Academic Excellence Award — NIT Kurukshetra; 10/10 GPA in Semester 6.' },
  { icon: 'users', text: 'Mechanical Society Secretary — ₹4L+ budget, 4K+ footfall; Head Boy from 1,000+.' },
]

export const documents = [
  {
    group: 'Resumes',
    items: [
      { title: 'Product & Growth CV', meta: 'PM & Growth roles', href: '/docs/Sumit_Yadav_Product.pdf' },
      { title: 'Strategy & Operations CV', meta: 'Primary resume', href: '/docs/My_Resume.pdf' },
    ],
  },
  {
    group: 'Shopdeck — SOPs & Decks',
    items: [
      { title: 'Campaign Creation Handbook', meta: 'Facebook Ads SOP', href: '/docs/Campaign_Handbook__2_.pdf' },
      { title: 'Pre-Live D2C Enabler Deck', meta: 'Client onboarding', href: '/docs/Pre-Live__PPT_Final__1_.pdf' },
    ],
  },
  {
    group: 'Certifications & Credentials',
    items: [
      { title: 'GATE AIR 2070', meta: 'ME · score 696', pending: 'GATE.pdf' },
      { title: 'Strategy & Consulting', meta: 'Oxford, Alison · 93%+', pending: 'Certifications-Consult.pdf' },
      { title: 'Product Management', meta: 'Product School · 93%+', pending: 'Verification_Prod.pdf' },
      { title: 'Business Strategy Project', meta: 'Skilled Sapiens', pending: 'Live_project_consult.pdf' },
    ],
  },
]

export const roles = [
  {
    icon: 'chart',
    title: 'Strategy & Ops',
    text: 'Strategy Analyst / Manager, Operations Lead, Chief of Staff.',
  },
  {
    icon: 'rocket',
    title: 'Growth & PM',
    text: 'Growth Manager, D2C Lead, Product / Program Manager.',
  },
  {
    icon: 'compass',
    title: 'Consulting',
    text: 'Management Consulting, Business Analyst, Engineering Consulting.',
  },
]

// NOTES — three facts conflict between the old site's body and its print-resume block.
// Resolved below to the body values; change the constants above if the print block is correct.
// 1. IIM-C CGPA:      body "6.44/9"        vs print "3.35/4.0"
// 2. NIT-K degree:    body "Mechanical Engineering" vs print "Industrial"
// 3. Shopdeck title:  body "Assistant Manager — Growth" vs print "Sr. Analyst"
