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
    home: 'Home',
    empresas: 'Business',
    rastreabilidade: 'Traceability',
    legislacao: 'Legislation',
    faq: 'FAQ',
    app: 'Enter the platform ↗',
    menu: 'Menu',
    logoAlt: 'ECOLchain · home',
  },

  hero: {
    kicker: 'Waste traceability · trust and audit on blockchain',
    titleA: 'Recycle Monetize',
    titleB: 'Scale sustainability',
    lede1:
      'ECOLchain is a traceability platform for valuable solid waste. We build traceable, verifiable infrastructure that uses blockchain as a trust and audit layer, from issuance to the recycling destination of waste.',
    lede2:
      'We map the entire trail so that every package returns to the cycle renewed, with less environmental impact and real benefits for society and for everyone working in the circularity of recycling.',
    ctaPrimary: 'Talk to a specialist',
  },

  problema: {
    title: 'Waste: assets of value',
    lede: 'Most of these assets still end up in landfills.',
    globalLabel: 'Global',
    globalStats: [
      { num: '+3.5B t', label: 'of waste generated per year' },
      { num: '17%', label: 'recycled, only', count: 17, template: '{n}%', bar: 17 },
      { num: 'US$ 640B', label: 'in losses per year' },
    ],
    brasilLabel: 'Brazil',
    brasilStats: [
      { num: '+82M t', label: 'generated per year', count: 82, template: '+{n}M t' },
      { num: '4%', label: 'recycled, only', count: 4, template: '{n}%', bar: 4 },
      { num: 'R$ 120B', label: 'in losses per year' },
    ],
    source: 'Data sources: United Nations and World Bank.',
  },

  trilho: {
    kicker: 'The waste trail to recycling',
    title: 'Applied technology layer',
    lede: 'Follow the journey:',
    ariaWalkthrough: 'Interactive 7-step walkthrough',
    ariaDiagram:
      'Flow diagram: waste generator, collection transport, cooperative, logistics, industry, buyers, audit',
    chainNote: 'SOLANA · NFT TRAIL · ~US$ 0.001 PER RECORD',
    actors: {
      gerador: { name: 'Waste generator', sub: 'waste origin' },
      coleta: { name: 'Collection transport', sub: '' },
      cooperativa: { name: 'Cooperative', sub: 'weighs + sorts' },
      transportador: { name: 'Logistics', sub: 'on-chain custody' },
      industria: { name: 'Industry', sub: 'raw material' },
      compradores: { name: 'Buyers', sub: 'compliance' },
      auditoria: { name: 'Audit', sub: 'public trail' },
    },
    counterTemplate: 'STEP {n} OF {total}',
    prev: '← Previous',
    next: 'Next →',
    roadmapBadge: 'Roadmap 2027+',
  },

  empresas: {
    kicker: 'Business · technical deep dive',
    title: 'Compliance, custody and proof.',
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
        text: "The same waste can't be registered twice: the Data Passport is unique per lot and the documentary cross-check blocks reissuance.",
      },
      {
        title: 'Escrow and settlement',
        text: "The buyer's payment is held until the industry confirms receipt; the smart contract settles automatically.",
      },
    ],
    ctaCommercial: 'Talk to a specialist',
  },

  legislacao: {
    kicker: 'Compliance as a market edge',
    title: 'Waste legislation',
    lede:
      'ECOLchain maps the scope of legislation and targets, national and international, that every verified tonne must prove.',
    items: [
      {
        law: 'Law 12,305/2010 · PNRS',
        text: 'National Solid Waste Policy: mandatory reverse logistics for packaging and shared responsibility for the product life cycle.',
      },
      {
        law: 'Decree 12,688/2025',
        text: 'A 32% plastic packaging recovery target as early as 2026, with mandatory reporting and fines from R$ 5k to R$ 50M.',
      },
    ],
    footnote:
      'Complementary norms tracked by the platform: Laws 14,260/2021 and 15,394/2026 and state-level reverse logistics regulations.',
    cta: 'Talk to a specialist',
  },

  rede: {
    title: 'Talk to a specialist',
    lede: 'We review every application individually and promptly.',
    fields: {
      intentLabel: 'I want to *',
      intentPlaceholder: 'Select…',
      intents: [
        { value: 'comprar', label: 'Buy verified tonnage' },
        { value: 'vender', label: 'Sell recycled output' },
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
    statusOk: 'Request sent. Our team reviews every application and replies by e-mail.',
    statusErr: 'Could not send right now. Please try again or write to ecolchain@gmail.com.',
  },

  faq: {
    title: 'Frequently asked questions',
    groups: [
      {
        title: 'Information center · for business',
        items: [
          {
            q: 'What is verified recycled tonnage?',
            a: 'A standard unit: 1 ton of recyclable material with a documentary chain of custody (MTR + e-invoice + CDF) cross-checked and anchored on blockchain, with a publicly verifiable hash. No double counting.',
          },
          {
            q: 'Is my company required to do packaging recovery?',
            a: 'Decree 12,688/2025 requires a 32% plastic packaging recovery target as early as 2026, with SINIR reporting and fines from R$ 5k to R$ 50M. New material chains enter in the following years: whoever puts packaging on the market will have to comply.',
          },
          {
            q: 'What prevents double counting of the same waste?',
            a: "Cross-checking MTR (Waste Transport Manifest), e-invoice and CDF (Final Destination Certificate) per lot, anchored on blockchain with a public hash. Each ton's Data Passport is auditable by anyone.",
          },
          {
            q: "I'm a cooperative: how can I join ECOLchain?",
            a: 'Request to join the network via the form. With the tracking tool, your output gains documentary backing.',
          },
          {
            q: 'How do I join the network?',
            a: 'Through the "Talk to a specialist" form on this page. We review each application individually and promptly.',
          },
        ],
      },
    ],
  },

  footer: {
    tagline: 'Recycle. Monetize. Scale sustainability.',
    navLabel: 'Social media and contact',
    privacy: 'Privacidade',
    langLink: 'Português',
    carbonFallback: 'Low-carbon website · < 0.3 g CO₂/visit',
    carbonNote:
      'This page was designed to emit less than 0.3 g of CO₂ per visit. Public measurement via the Website Carbon Badge above, active after deploy.',
    carbonBubbleLabel: 'Carbon footprint of this page',
    carbonBubble: '< 0.3 g CO₂',
    carbonBubbleText:
      'This page was designed to emit less than 0.3 g of CO₂ per visit. The public measurement lives in the footer.',
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
