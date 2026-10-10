// Copy PT-BR da landing. Fonte da verdade do tipo LandingCopy.
// Regra da casa: sem em dash (U+2014) em nenhuma string.

export const pt = {
  locale: 'pt-BR',
  appUrl: 'https://manage.ecolchain.com/pt-br',
  langSwitch: { href: '/en/', label: 'EN', lang: 'en' },

  meta: {
    title: 'ECOLchain · Recicle. Monetize. Escale sustentabilidade.',
    description:
      'A ECOLchain é uma plataforma de rastreabilidade de resíduos sólidos de valor: infraestrutura verificável que usa blockchain como camada de confiança e auditoria, da emissão ao destino de reciclagem.',
    ogTitle: 'ECOLchain · Recicle. Monetize. Escale sustentabilidade.',
    ogDescription:
      'Rastreabilidade de resíduos sólidos de valor, com blockchain como camada de confiança e auditoria: da emissão ao destino de reciclagem.',
    canonical: 'https://ecolchain.com/',
  },

  ticker:
    'PET R$ 300–350/t · ALUMÍNIO R$ 300–350/t eq. · PAPELÃO R$ 300–350/t eq. · 1 t verificada = MTR + NF-e + CDF ⛓ hash público · ~80% mais barata que logística reversa convencional (R$ 1.800/t)',

  nav: {
    home: 'Início',
    empresas: 'Empresas',
    rastreabilidade: 'Rastreabilidade',
    legislacao: 'Legislação',
    faq: 'FAQ',
    app: 'Entrar na plataforma ↗',
    menu: 'Menu',
    logoAlt: 'ECOLchain · início',
  },

  hero: {
    kicker: 'Rastreabilidade de resíduos · confiança e auditoria em blockchain',
    titleA: 'Recicle Monetize',
    titleB: 'Escale sustentabilidade',
    lede1:
      'A ECOLchain é uma plataforma de rastreabilidade de resíduos sólidos de valor. Desenvolvemos uma infraestrutura rastreável e verificável que utiliza blockchain como camada de confiança e auditoria, da emissão ao destino de reciclagem de resíduos.',
    lede2:
      'Mapeamos todo o trilho para que cada embalagem volte ao ciclo renovada, com menor impacto ao meio ambiente e benefícios reais para a sociedade e para quem atua na circularidade da reciclagem.',
    ctaPrimary: 'Fale com um especialista',
  },

  problema: {
    title: 'Resíduos: ativos de valor',
    lede: 'Esses ativos ainda terminam, em sua maioria, num aterro.',
    globalLabel: 'Global',
    globalStats: [
      { num: '+3,5 bi t', label: 'de resíduos gerados por ano' },
      { num: '17%', label: 'reciclados, somente', count: 17, template: '{n}%', bar: 17 },
      { num: 'US$ 640 bi', label: 'de prejuízo por ano' },
    ],
    brasilLabel: 'Brasil',
    brasilStats: [
      { num: '+82 mi t', label: 'geradas por ano', count: 82, template: '+{n} mi t' },
      { num: '4%', label: 'reciclados, apenas', count: 4, template: '{n}%', bar: 4 },
      { num: 'R$ 120 bi', label: 'de prejuízo por ano' },
    ],
    source: 'Fonte de dados: Organização das Nações Unidas e Banco Mundial.',
  },

  trilho: {
    kicker: 'Trilho do resíduo até a reciclagem',
    title: 'Camada de tecnologia aplicada',
    lede: 'Acompanhe a jornada:',
    ariaWalkthrough: 'Walkthrough interativo em 7 etapas',
    ariaDiagram:
      'Diagrama do fluxo: fonte geradora, transporte de coleta, cooperativa, logística, indústria, compradores, auditoria',
    chainNote: 'SOLANA · TRILHA DO NFT · ~US$ 0,001 POR REGISTRO',
    actors: {
      gerador: { name: 'Fonte geradora', sub: 'origem do resíduo' },
      coleta: { name: 'Transporte de coleta', sub: '' },
      cooperativa: { name: 'Cooperativa', sub: 'pesa + classifica' },
      transportador: { name: 'Logística', sub: 'custódia on-chain' },
      industria: { name: 'Indústria', sub: 'matéria-prima' },
      compradores: { name: 'Compradores', sub: 'compliance' },
      auditoria: { name: 'Auditoria', sub: 'trilha pública' },
    },
    counterTemplate: 'ETAPA {n} DE {total}',
    prev: '← Anterior',
    next: 'Próxima →',
    roadmapBadge: 'Roadmap 2027+',
  },

  empresas: {
    kicker: 'Empresas · mergulho técnico',
    title: 'Compliance, custódia e prova.',
    features: [
      {
        title: 'Cadeia de custódia tripla',
        text: 'Cada lote cruza MTR (Manifesto de Transporte de Resíduos), NF-e e CDF (Certificado de Destinação Final). Os três documentos precisam fechar em peso, material e CNPJ, ou o lote não vira tonelada verificada.',
      },
      {
        title: 'Âncora on-chain',
        text: 'O hash do dossiê documental é gravado na Solana (~US$ 0,001 por registro). Qualquer auditor confere no explorer público, sem pedir acesso a ninguém.',
      },
      {
        title: 'Sem dupla contagem',
        text: 'O mesmo resíduo não gera dois registros: o Data Passport é único por lote e o cruzamento documental bloqueia reemissão.',
      },
      {
        title: 'Escrow e liquidação',
        text: 'O pagamento do comprador fica retido até a confirmação de recebimento na indústria; o smart contract liquida automaticamente.',
      },
    ],
    ctaCommercial: 'Fale com um especialista',
  },

  legislacao: {
    kicker: 'Conformidade como diferencial de mercado',
    title: 'Legislação sobre resíduos',
    lede:
      'A ECOLchain delineia o escopo de legislação e metas, nacionais e internacionais, que cada tonelada verificada precisa comprovar.',
    items: [
      {
        law: 'Lei 12.305/2010 · PNRS',
        text: 'Política Nacional de Resíduos Sólidos: institui a logística reversa obrigatória para embalagens e a responsabilidade compartilhada pelo ciclo de vida do produto.',
      },
      {
        law: 'Decreto 12.688/2025',
        text: 'Meta de 32% de recuperação de embalagens plásticas já em 2026, com reporte obrigatório e multas de R$ 5 mil a R$ 50 milhões.',
      },
    ],
    footnote:
      'Normas complementares acompanhadas pela plataforma: Leis 14.260/2021 e 15.394/2026 e regulamentos estaduais de logística reversa.',
    cta: 'Fale com um especialista',
  },

  planos: {
    kicker: 'Planos de serviços',
    title: 'Escolha o plano da sua operação',
    lede: 'Assinatura mensal na plataforma. Comissão sobre lotes negociados no marketplace.',
    perMonth: '/mês',
    cta: 'Fale com um especialista',
    footnote:
      'Diagnóstico e implantação sob consulta em todos os planos. Valores de referência, out/2026.',
    plans: [
      {
        name: 'Básico',
        price: 'R$ 99',
        features: [
          'Publicações de lotes de venda',
          'Publicações de lotes de compra',
          'Marketplace B2B',
          '500 transações em Solana/mês',
          '7% de comissão acima de 5 lotes',
          'Suporte',
          'Histórico operacional',
          'Histórico documental',
          'Rastreabilidade de transações',
        ],
      },
      {
        name: 'Pro',
        price: 'R$ 319',
        featured: true,
        features: [
          'Publicações de lotes de venda',
          'Publicações de lotes de compra',
          'Marketplace B2B',
          '1.000 transações em Solana/mês',
          '5% de comissão por lotes',
          'Suporte',
          'Histórico operacional',
          'Histórico documental',
          'Rastreabilidade de transações',
        ],
      },
      {
        name: 'Enterprise',
        price: 'R$ 979',
        premium: true,
        features: [
          'Publicações de lotes de venda',
          'Publicações de lotes de compra',
          'Prioridade alta',
          'Marketplace B2B',
          '3.000 transações em Solana/mês',
          '3% de comissão por lotes',
          'Suporte',
          'Histórico operacional',
          'Histórico documental',
          'Rastreabilidade de transações',
        ],
      },
    ],
  },

  rede: {
    title: 'Fale com um especialista',
    lede: 'Analisamos cada entrada individualmente e com agilidade.',
    fields: {
      intentLabel: 'Eu quero *',
      intentPlaceholder: 'Selecione…',
      intents: [
        { value: 'comprar', label: 'Comprar toneladas verificadas' },
        { value: 'vender', label: 'Vender produção reciclada' },
        { value: 'institucional', label: 'Parceria institucional / poder público' },
        { value: 'investir', label: 'Investir' },
        { value: 'outro', label: 'Outro' },
      ],
      name: 'Nome completo / organização *',
      email: 'E-mail *',
      phone: 'Telefone / WhatsApp',
      city: 'Cidade / UF *',
      volume: 'Volume estimado (t/mês) *',
      materialsLabel: 'Tipos de resíduos de interesse *',
      materials: [
        { value: 'Vidro incolor', label: 'Vidro incolor' },
        { value: 'Vidro verde', label: 'Vidro verde' },
        { value: 'Vidro âmbar/marrom', label: 'Vidro âmbar/marrom' },
        { value: 'PET 1', label: 'Plástico PET 1' },
        { value: 'PEAD 2', label: 'Plástico PEAD 2' },
        { value: 'Alumínio', label: 'Alumínio' },
        { value: 'Papelão', label: 'Papelão' },
        { value: 'Outros', label: 'Outros (análise de reciclagem)' },
      ],
      message: 'Mensagem (máx. 500 caracteres)',
      honeypot: 'Website',
      consentBefore: 'Autorizo o contato da ECOLchain sobre minha solicitação, conforme a ',
      consentLink: 'política de privacidade',
      consentAfter: '. *',
      submit: 'Enviar solicitação',
    },
    statusOk: 'Solicitação enviada. Nossa equipe analisa cada entrada na rede e retorna por e-mail.',
    statusErr: 'Não foi possível enviar agora. Tente novamente ou escreva para ecolchain@gmail.com.',
  },

  faq: {
    title: 'Perguntas frequentes',
    groups: [
      {
        title: 'Central de informações · para empresas',
        items: [
          {
            q: 'O que é a tonelada reciclada verificada?',
            a: 'Uma unidade padrão: 1 tonelada de material reciclável com cadeia de custódia documental (MTR + NF-e + CDF) cruzada e ancorada em blockchain, com hash público verificável. Sem dupla contagem.',
          },
          {
            q: 'Minha empresa é obrigada a fazer recuperação de embalagens?',
            a: 'O Decreto 12.688/2025 exige meta de 32% de recuperação de embalagens plásticas já em 2026, com reporte ao SINIR e multas de R$ 5 mil a R$ 50 milhões. Novas cadeias de materiais entram nos anos seguintes: quem coloca embalagem no mercado terá de se enquadrar.',
          },
          {
            q: 'O que impede a dupla contagem de um mesmo resíduo?',
            a: 'O cruzamento de MTR (Manifesto de Transporte de Resíduos), NF-e (Nota Fiscal eletrônica) e CDF (Certificado de Destinação Final) por lote, ancorado em blockchain com hash público. O Data Passport de cada tonelada é auditável por qualquer pessoa.',
          },
          {
            q: 'Sou uma cooperativa: como posso participar da ECOLchain?',
            a: 'Solicite a entrada na rede pelo formulário. Com a ferramenta de rastreio, sua produção ganha lastro documental.',
          },
          {
            q: 'Como entro na rede?',
            a: 'Pelo formulário "Fale com um especialista" nesta página. Analisamos cada solicitação individualmente e com agilidade.',
          },
        ],
      },
    ],
  },

  footer: {
    tagline: 'Recicle. Monetize. Escale sustentabilidade.',
    navLabel: 'Redes sociais e contato',
    privacy: 'Privacidade',
    langLink: 'English',
    carbonFallback: 'Site de baixo carbono · < 0,3 g CO₂/visita',
    carbonNote:
      'Esta página foi projetada para emitir menos de 0,3 g de CO₂ por visita. Medição pública pelo Website Carbon Badge acima, ativa após o deploy.',
    carbonBubbleLabel: 'Emissão de carbono desta página',
    carbonBubblePre: 'menos de',
    carbonBubble: '0,3 g CO₂',
    carbonBubbleSub: 'por visita',
    carbonBubbleTitle: 'Quer ver como seu site impacta o planeta?',
    carbonBubbleText:
      'Esta página foi projetada para emitir menos de 0,3 g de CO₂ por visita. A medição pública fica no rodapé.',
    carbonBubbleText2:
      'Ferramentas gratuitas ajudam a medir e melhorar: o Website Carbon (Wholegrain Digital) estima emissões por página e o Ecograder (Mightybytes) gera relatórios práticos.',
    carbonBubbleBtn1: 'Website Carbon',
    carbonBubbleBtn2: 'Ecograder',
    carbonBubbleClose: 'Fechar',
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

export type LandingCopy = typeof pt;
