// EN copy. Same shape as pt (checked by copy.test.ts).
import type { LandingCopy } from './pt';

export const en: LandingCopy = {
  locale: 'en',
  appUrl: 'https://app.ecolchain.com/en',
  langSwitch: { href: '/', label: 'PT', lang: 'pt-BR' },

  meta: {
    title: 'ECOLchain · Recycle. Monetize. Scale sustainability.',
    description:
      'ECOLchain is a traceability platform for valuable solid waste: verifiable infrastructure using blockchain as a trust and audit layer, from issuance to recycling destination.',
    ogTitle: 'ECOLchain · Recycle. Monetize. Scale sustainability.',
    ogDescription:
      'Traceability for valuable solid waste, with blockchain as a trust and audit layer: from issuance to recycling destination.',
    canonical: 'https://ecolchain.com/en/',
  },

  ticker:
    'PET R$ 300–350/t · ALUMINIUM R$ 300–350/t eq. · CARDBOARD R$ 300–350/t eq. · 1 verified t = MTR + e-invoice + CDF ⛓ public hash · ~80% cheaper than conventional reverse logistics (R$ 1,800/t)',

  nav: {
    voce: 'For you',
    empresas: 'For business',
    credito: 'The mechanism',
    faq: 'FAQ',
    app: 'Open the app ↗',
    menu: 'Menu',
    logoAlt: 'ECOLchain · home',
  },

  hero: {
    kicker: 'Waste traceability · trust and audit on blockchain',
    titleA: 'Recycle. Monetize.',
    titleB: 'Scale sustainability.',
    lede1:
      'ECOLchain is a traceability platform for valuable solid waste. We build traceable, verifiable infrastructure that uses blockchain as a trust and audit layer, from issuance to the recycling destination of waste.',
    lede2:
      'We map the entire trail so that every package returns to the cycle renewed, with less environmental impact and real benefits for society and for everyone working in the circularity of recycling.',
    ctaPrimary: 'Request to join the Network',
    ctaGhost: 'Sell recycled output',
    ctaCitizen: "I'm a citizen →",
  },

  problema: {
    title: 'Is waste valuable?',
    lede: 'It is. Very much so. The problem is that almost all of that value still ends up in landfills.',
    globalLabel: 'Global',
    globalStats: [
      { num: '+3.5B t', label: 'of waste generated per year' },
      { num: '17%', label: 'recycled, only', count: 17, template: '{n}%' },
      { num: 'US$ 640B', label: 'in losses per year' },
    ],
    divider:
      'If that value were divided by the global population of 8.3 billion, every person on the planet would receive roughly US$ 76.96.',
    brasilLabel: 'Brazil',
    brasilStats: [
      { num: '+82M t', label: 'generated per year', count: 82, template: '+{n}M t' },
      { num: '4%', label: 'recycled, only', count: 4, template: '{n}%' },
      { num: 'R$ 120B', label: 'in losses per year' },
    ],
    source: 'Data sources: United Nations and World Bank.',
  },

  voce: {
    kicker: 'For you · no jargon, no "blockchain"',
    title: 'Return the packaging. Get rewarded. See where it went.',
    lede:
      "You don't need to understand any technology: take your packaging to a network collection point and every return becomes a reward, paid by brands that sponsor recycling. You never pay anything to take part.",
    features: [
      {
        title: '1 · Return',
        text: 'Sort packaging at home and take it to the nearest drop-off point. The app shows the map.',
      },
      {
        title: '2 · Earn',
        text: 'Every registered return becomes recycling credits and rewards: coupons, benefits and discounts from partner brands.',
      },
      {
        title: '3 · Track',
        text: "Follow your packaging's journey until it becomes a product again, with a public, verifiable record.",
      },
    ],
    outlook:
      "What's next? More drop-off points, more brands sponsoring rewards and new forms of value for everyone who returns packaging.",
    ctaPrimary: 'Get started ↗',
    ctaFaq: 'Frequently asked questions ↓',
  },

  trilho: {
    kicker: 'The waste trail to recycling · applied technology layer',
    title: 'The waste trail to recycling',
    lede:
      'Follow the journey of the applied technology layer: Disposal → Collection transport → Cooperative (sorting, weighing and classification) → Logistics (custody with on-chain data) → Industry (receives and processes) → Credits → Public audit → Consumer goods industry → Retail → Consumer → Correct disposal. Circularity.',
    ariaWalkthrough: 'Interactive 7-step walkthrough',
    ariaDiagram: 'Flow diagram: collection transport, cooperative, logistics, industry, buyers, audit',
    chainNote: 'SOLANA · NFT TRAIL · ~US$ 0.001 PER RECORD',
    actors: {
      coleta: { name: 'Collection transport', sub: '' },
      cooperativa: { name: 'Cooperative', sub: 'weighs + sorts' },
      transportador: { name: 'Logistics', sub: 'on-chain custody' },
      industria: { name: 'Industry', sub: 'raw material' },
      compradores: { name: 'Buyers', sub: 'credits' },
      auditoria: { name: 'Audit', sub: 'public trail' },
    },
    counterTemplate: 'STEP {n} OF {total}',
    prev: '← Previous',
    next: 'Next →',
    roadmapBadge: 'Roadmap 2027+',
  },

  quem: {
    title: 'Two sides of the market. One single unit.',
    cards: [
      {
        kicker: 'Buyers',
        title: 'Industries and brands',
        text: 'Meet Decree 12,688/2025 and the PNRS with verified tonnage, public hash and an auditable ESG report, about 80% cheaper than conventional reverse logistics.',
        cta: 'Buy tonnage',
        style: 'primary',
      },
      {
        kicker: 'Suppliers',
        title: 'Cooperatives and collection',
        text: 'Sell your output with backing that values your material: documentary proof, access to legally obligated buyers and revenue anticipation.',
        cta: 'Sell output',
        style: 'ghost',
      },
      {
        kicker: 'Citizens',
        title: 'Return and earn',
        text: 'Return packaging at network drop-off points, earn rewards funded by brands and see the real destination of your disposal.',
        cta: 'How it works for you →',
        style: 'quiet',
      },
    ],
  },

  plataforma: {
    title: 'A commodity is only a commodity with a standard.',
    lede: 'The ECOLchain platform is the infrastructure that measures, verifies and publishes every ton.',
    features: [
      { title: 'Public dashboard', text: "Brazil's recycling panorama with SINIR data." },
      { title: 'Drop-off map', text: 'Cooperatives, reverse logistics and rewards near you.' },
      { title: 'Project ranking', text: 'ECOLchain Sustainability Score: traceability, impact, governance.' },
      { title: 'Data Passport', text: 'Evidence record with hash and verifiable blockchain transaction.' },
      { title: 'AI assistant', text: 'Ask about projects, collection points and evidence.' },
      { title: 'State-by-state view', text: 'Recycling rates compared, state by state.' },
    ],
    cta: 'Explore the platform ↗',
  },

  impacto: {
    title: 'Reference pricing, open anatomy.',
    stats: [
      { num: 'R$ 300–350/t', label: 'recycling credit (ref. Ipea 2022 / ANICER 2023)' },
      { num: '~80%', label: 'cheaper than conventional reverse logistics (~R$ 1,800/t)', count: 80, template: '~{n}%' },
      { num: '~R$ 285', label: 'of each R$ 350/t goes back to the cooperative', count: 285, template: '~R$ {n}' },
    ],
    lede:
      'Projected 2030 targets: 200,000 t recycled/year · 15–20k waste pickers benefited · SROI of R$ 8–10 per R$ 1 invested. Aligned with PNRS (Law 12,305/2010), Decree 12,688/2025 and Laws 14,260/2021 and 15,394/2026.',
    footnote:
      'Targets projected by ECOLchain (Executive Summary, Sep/2026), not realized results. Market reference prices: Ipea 2022, ANICER 2023, ALMG 2025. Verified Sep/2026.',
  },

  empresas: {
    kicker: 'For business · technical deep dive',
    title: 'Compliance, custody and proof: the hard questions, answered.',
    features: [
      {
        title: 'Triple chain of custody',
        text: 'Every lot cross-checks MTR (Waste Transport Manifest), e-invoice and CDF (Final Destination Certificate). All three documents must match on weight, material and tax ID, or the lot never becomes verified tonnage.',
      },
      {
        title: 'On-chain anchor',
        text: 'The hash of the documentary dossier is written to Solana (~US$ 0.001 per record). Any auditor verifies it on the public explorer, without asking anyone for access.',
      },
      {
        title: 'No double counting',
        text: "The same waste can't mint two credits: the Data Passport is unique per lot and the documentary cross-check blocks reissuance.",
      },
      {
        title: 'Escrow and settlement',
        text: "The buyer's payment is held until the industry confirms receipt; the smart contract settles automatically (full split on the 2027+ roadmap).",
      },
      {
        title: 'SINIR reporting',
        text: 'Ready-made reports for the annual reverse logistics declaration and the ESG inventory, with an end-to-end auditable trail.',
      },
    ],
    ctaCommercial: 'Talk to a specialist',
    ctaCommercialHref: 'mailto:ecolchain@gmail.com?subject=I%20want%20to%20talk%20to%20a%20specialist',
  },

  legislacao: {
    kicker: 'Compliance as a market edge',
    title: 'Waste legislation',
    lede:
      'ECOLchain was designed for the law from day one: every verified tonne carries the documentary proof the regulation requires.',
    items: [
      {
        law: 'Law 12,305/2010 · PNRS',
        text: 'National Solid Waste Policy: mandatory reverse logistics for packaging and shared responsibility for the product life cycle.',
      },
      {
        law: 'Decree 12,688/2025',
        text: 'A 32% plastic packaging recovery target as early as 2026, with mandatory reporting and fines from R$ 5k to R$ 50M.',
      },
      {
        law: 'SINIR reporting',
        text: 'Annual declaration in the National Solid Waste Management Information System: our reports come ready to attach.',
      },
    ],
    footnote:
      'Complementary norms tracked by the platform: Laws 14,260/2021 and 15,394/2026 and state-level reverse logistics regulations.',
    cta: 'Talk to a specialist',
    ctaHref: 'mailto:ecolchain@gmail.com?subject=Waste%20legislation%3A%20talk%20to%20a%20specialist',
  },

  rede: {
    title: 'Talk to a specialist',
    lede: 'We review every application manually. Response within 5 business days.',
    fields: {
      intentLabel: 'I want to *',
      intentPlaceholder: 'Select…',
      intents: [
        { value: 'comprar', label: 'Buy verified tonnage' },
        { value: 'vender', label: 'Sell recycled output' },
        { value: 'cidadao', label: 'Join as a citizen' },
        { value: 'institucional', label: 'Institutional / government partnership' },
        { value: 'investir', label: 'Invest' },
        { value: 'outro', label: 'Other' },
      ],
      name: 'Full name / organization *',
      email: 'E-mail *',
      phone: 'Phone / WhatsApp',
      city: 'City / State *',
      volume: 'Estimated volume (t/month) *',
      materialsLabel: 'Waste types of interest *',
      materials: [
        { value: 'Vidro incolor', label: 'Clear glass' },
        { value: 'Vidro verde', label: 'Green glass' },
        { value: 'Vidro âmbar/marrom', label: 'Amber/brown glass' },
        { value: 'PET 1', label: 'PET 1 plastic' },
        { value: 'PEAD 2', label: 'HDPE 2 plastic' },
        { value: 'Alumínio', label: 'Aluminium' },
        { value: 'Papelão', label: 'Cardboard' },
        { value: 'Outros', label: 'Other (recycling analysis)' },
      ],
      message: 'Message (max. 500 characters)',
      honeypot: 'Website',
      consentBefore: 'I authorize ECOLchain to contact me about my request, according to the ',
      consentLink: 'privacy policy',
      consentAfter: '. *',
      submit: 'Send request',
    },
    statusOk: 'Request sent. Our team reviews every application and replies within 5 business days.',
    statusErr: 'Could not send right now. Please try again or write to ecolchain@gmail.com.',
  },

  faq: {
    title: 'Frequently asked questions',
    groups: [
      {
        title: 'Knowledge center · for users',
        items: [
          {
            q: 'What do I earn by returning packaging?',
            a: 'Real rewards: coupons, discounts and benefits from partner brands. The funding comes from companies that sponsor recycling. You never pay to take part.',
          },
          {
            q: 'Where do I return my packaging?',
            a: 'At network drop-off points: cooperatives and reverse logistics spots near you. The app shows the map and what each point accepts.',
          },
          {
            q: 'What are recycling credits?',
            a: 'Think of an "impact voucher": it proves the material went back to industry. Companies buy these credits to comply with reverse logistics law, and part of that value funds your reward.',
          },
        ],
      },
      {
        title: 'Information center · for business',
        items: [
          {
            q: 'What is verified recycled tonnage?',
            a: 'A standard unit: 1 ton of recyclable material with a documentary chain of custody (MTR + e-invoice + CDF) cross-checked and anchored on blockchain, with a publicly verifiable hash. No double counting.',
          },
          {
            q: 'How much does a verified ton cost?',
            a: 'The recycling credit has a reference price of R$ 300–350/t (Ipea 2022, ANICER 2023), varying by material and region. About 80% cheaper than conventional reverse logistics (~R$ 1,800/t).',
          },
          {
            q: 'Is my company required to buy?',
            a: 'Decree 12,688/2025 requires a 32% plastic packaging recovery target as early as 2026, with SINIR reporting and fines from R$ 5k to R$ 50M. If your company puts packaging on the market, it is probably obligated.',
          },
          {
            q: 'What prevents double counting of the same waste?',
            a: "Cross-checking MTR + e-invoice + CDF per lot, anchored on blockchain with a public hash: each ton's Data Passport is auditable by anyone.",
          },
          {
            q: 'How do escrow and settlement work?',
            a: "The buyer pays into escrow when their bid wins; the funds are only released when the industry confirms receipt. Automatic smart-contract splitting enters the 2027+ roadmap.",
          },
          {
            q: "I'm a cooperative: how do I sell my output?",
            a: 'Request to join the network via the form. With the tracking tool, your output gains documentary backing and access to legally obligated buyers.',
          },
          {
            q: 'How do I join the network?',
            a: 'Through the "Talk to a specialist" form on this page. We review each application manually and respond within 5 business days.',
          },
        ],
      },
    ],
  },

  footer: {
    mantra: 'An asset that enters the blockchain circulates on the blockchain',
    tagline: 'Recycle. Monetize. Scale sustainability. Together for a circular future.',
    navLabel: 'Social media and contact',
    privacy: 'Privacidade',
    langLink: 'Português',
    carbonFallback: 'Low-carbon website · < 0.3 g CO₂/visit',
    carbonNote:
      'This page was designed to emit less than 0.3 g of CO₂ per visit. Public measurement via the Website Carbon Badge above, active after deploy.',
  },

  privacidade: {
    title: 'Política de Privacidade',
    metaTitle: 'Política de Privacidade · ECOLchain',
    controller: 'Controlador: ECOLchain · Contato:',
    sections: [
      {
        h: '1. Dados coletados',
        p: 'Coletamos os dados do formulário "Fale com um especialista": nome/organização, e-mail, telefone (opcional), cidade/UF, perfil de interesse, volume e materiais (quando aplicável) e mensagem.',
      },
      {
        h: '2. Finalidade',
        p: 'Os dados são usados exclusivamente para avaliar sua entrada na rede ECOLchain e qualificar demanda ou oferta de toneladas verificadas. Não usamos para marketing sem novo consentimento nem compartilhamos com terceiros.',
      },
      {
        h: '3. Base legal e retenção',
        p: 'Consentimento (art. 7º, I, LGPD, Lei 13.709/2018). Os dados são retidos enquanto durar a análise e a eventual relação comercial; você pode pedir exclusão a qualquer momento pelo e-mail do controlador.',
      },
      {
        h: '4. Cookies',
        p: 'Esta página não usa cookies de rastreamento. Por isso não exibimos banner de consentimento de cookies.',
      },
      {
        h: '5. Seus direitos',
        p: 'Confirmação, acesso, correção, anonimização, portabilidade e eliminação: escreva para ecolchain@gmail.com.',
      },
    ],
    version: 'Versão 1.0 · set/2026. Documento em revisão jurídica.',
    back: '← Voltar',
  },
};
