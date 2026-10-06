// Copy PT-BR da landing. Fonte da verdade do tipo LandingCopy.
// Regra da casa: sem em dash (U+2014) em nenhuma string.

export const pt = {
  locale: 'pt-BR',
  appUrl: 'https://app.ecolchain.com/pt',
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
    empresas: 'Para empresas',
    credito: 'O mecanismo',
    faq: 'FAQ',
    app: 'Entrar no app ↗',
    menu: 'Menu',
    logoAlt: 'ECOLchain · início',
  },

  hero: {
    kicker: 'Rastreabilidade de resíduos · confiança e auditoria em blockchain',
    titleA: 'Recicle. Monetize.',
    titleB: 'Escale sustentabilidade.',
    lede1:
      'A ECOLchain é uma plataforma de rastreabilidade de resíduos sólidos de valor. Desenvolvemos uma infraestrutura rastreável e verificável que utiliza blockchain como camada de confiança e auditoria, da emissão ao destino de reciclagem de resíduos.',
    lede2:
      'Mapeamos todo o trilho para que cada embalagem volte ao ciclo renovada, com menor impacto ao meio ambiente e benefícios reais para a sociedade e para quem atua na circularidade da reciclagem.',
    ctaPrimary: 'Fale com um especialista',
    ctaGhost: 'Vender produção reciclada',
  },

  problema: {
    title: 'Resíduos têm valor?',
    lede: 'Têm. E muito. O problema é que quase todo esse valor ainda termina em aterro.',
    globalLabel: 'Global',
    globalStats: [
      { num: '+3,5 bi t', label: 'de resíduos gerados por ano' },
      { num: '17%', label: 'reciclados, somente', count: 17, template: '{n}%', bar: 17 },
      { num: 'US$ 640 bi', label: 'de prejuízo por ano' },
    ],
    divider:
      'Se esse valor fosse dividido pela população global de 8,3 bilhões, cada pessoa no planeta receberia aproximadamente US$ 76,96.',
    brasilLabel: 'Brasil',
    brasilStats: [
      { num: '+82 mi t', label: 'geradas por ano', count: 82, template: '+{n} mi t' },
      { num: '4%', label: 'reciclados, apenas', count: 4, template: '{n}%', bar: 4 },
      { num: 'R$ 120 bi', label: 'de prejuízo por ano' },
    ],
    source: 'Fonte de dados: Organização das Nações Unidas e Banco Mundial.',
  },

  trilho: {
    kicker: 'Trilho do resíduo até a reciclagem · camada de tecnologia aplicada',
    title: 'Trilho do resíduo até a reciclagem',
    lede:
      'Acompanhe a jornada da camada de tecnologia aplicada: Descarte → Transporte de coleta → Cooperativa (triagem, pesagem e classificação) → Logística (custódia com dados on-chain) → Indústria (recebe e processa) → Verificação → Auditoria pública → Indústria de consumo → Varejo → Consumidor → Descarte correto. Circularidade.',
    ariaWalkthrough: 'Walkthrough interativo em 7 etapas',
    ariaDiagram: 'Diagrama do fluxo: transporte de coleta, cooperativa, logística, indústria, compradores, auditoria',
    chainNote: 'SOLANA · TRILHA DO NFT · ~US$ 0,001 POR REGISTRO',
    actors: {
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

  quem: {
    title: 'Dois lados do mercado. Uma unidade só.',
    cards: [
      {
        kicker: 'Compradores',
        title: 'Indústrias e marcas',
        text: 'Cumpra o Decreto 12.688/2025 e a PNRS com toneladas verificadas, hash público e relatório ESG auditável, cerca de 80% mais barato que logística reversa convencional.',
        cta: 'Comprar toneladas',
        style: 'primary',
      },
      {
        kicker: 'Fornecedores',
        title: 'Cooperativas e coleta',
        text: 'Venda sua produção com lastro que valoriza seu material: prova documental, acesso a compradores obrigados por lei e antecipação de receita.',
        cta: 'Vender produção',
        style: 'ghost',
      },
    ],
  },

  plataforma: {
    title: 'Rastreabilidade e auditoria, ponta a ponta.',
    lede: 'A plataforma ECOLchain é a infraestrutura que mede, verifica e publica cada tonelada.',
    features: [
      { title: 'Dashboard público', text: 'Panorama da reciclagem no Brasil com dados SINIR.' },
      { title: 'Mapa de ecopontos', text: 'Cooperativas, logística reversa e recompensas perto de você.' },
      { title: 'Ranking de projetos', text: 'ECOLchain Sustainability Score: rastreabilidade, impacto, governança.' },
      { title: 'Data Passport', text: 'Registro de evidência com hash e transação blockchain verificável.' },
      { title: 'Assistente IA', text: 'Pergunte sobre projetos, pontos de coleta e evidências.' },
      { title: 'Panorama por estado', text: 'Taxas de reciclagem comparadas, estado a estado.' },
    ],
    cta: 'Explorar a plataforma ↗',
  },

  impacto: {
    title: 'Preço de referência, anatomia aberta.',
    stats: [
      { num: 'R$ 300–350/t', label: 'tonelada reciclada verificada (ref. Ipea 2022 / ANICER 2023)' },
      { num: '~80%', label: 'mais barato que logística reversa convencional (~R$ 1.800/t)', count: 80, template: '~{n}%' },
      { num: '~R$ 285', label: 'de cada R$ 350/t voltam para a cooperativa', count: 285, template: '~R$ {n}' },
    ],
    lede:
      'Metas projetadas para 2030: 200.000 t recicladas/ano · 15–20 mil catadores beneficiados · SROI de R$ 8–10 por R$ 1 investido. Alinhada à PNRS (Lei 12.305/2010), ao Decreto 12.688/2025 e às Leis 14.260/2021 e 15.394/2026.',
    footnote:
      'Metas projetadas pela ECOLchain (Sumário Executivo, set/2026), não resultados realizados. Preços de referência de mercado: Ipea 2022, ANICER 2023, ALMG 2025. Verificado em set/2026.',
  },

  empresas: {
    kicker: 'Para empresas · mergulho técnico',
    title: 'Compliance, custódia e prova: as perguntas difíceis, respondidas.',
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
        text: 'O pagamento do comprador fica retido até a confirmação de recebimento na indústria; o smart contract liquida automaticamente (repartição completa no roadmap 2027+).',
      },
      {
        title: 'Reporte SINIR',
        text: 'Relatórios prontos para a declaração anual de logística reversa e para o inventário ESG, com trilha auditável ponta a ponta.',
      },
    ],
    ctaCommercial: 'Fale com um especialista',
  },

  legislacao: {
    kicker: 'Conformidade como diferencial de mercado',
    title: 'Legislação sobre resíduos',
    lede:
      'A ECOLchain nasce desenhada para a lei: cada tonelada verificada carrega a prova documental que a regulamentação exige.',
    items: [
      {
        law: 'Lei 12.305/2010 · PNRS',
        text: 'Política Nacional de Resíduos Sólidos: institui a logística reversa obrigatória para embalagens e a responsabilidade compartilhada pelo ciclo de vida do produto.',
      },
      {
        law: 'Decreto 12.688/2025',
        text: 'Meta de 32% de recuperação de embalagens plásticas já em 2026, com reporte obrigatório e multas de R$ 5 mil a R$ 50 milhões.',
      },
      {
        law: 'Reporte SINIR',
        text: 'Declaração anual no Sistema Nacional de Informações sobre a Gestão dos Resíduos Sólidos: nossos relatórios saem prontos para anexar.',
      },
    ],
    footnote:
      'Normas complementares acompanhadas pela plataforma: Leis 14.260/2021 e 15.394/2026 e regulamentos estaduais de logística reversa.',
    cta: 'Fale com um especialista',
  },

  rede: {
    title: 'Fale com um especialista',
    lede: 'Analisamos cada entrada manualmente.',
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
            q: 'Quanto custa uma tonelada verificada?',
            a: 'A tonelada verificada tem preço de referência de R$ 300–350/t (Ipea 2022, ANICER 2023), variando por material e região. Cerca de 80% mais barato que logística reversa convencional (~R$ 1.800/t).',
          },
          {
            q: 'Minha empresa é obrigada a comprar?',
            a: 'O Decreto 12.688/2025 exige meta de 32% de recuperação de embalagens plásticas já em 2026, com reporte ao SINIR e multas de R$ 5 mil a R$ 50 milhões. Se sua empresa coloca embalagens no mercado, ela provavelmente está obrigada.',
          },
          {
            q: 'O que impede a dupla contagem de um mesmo resíduo?',
            a: 'O cruzamento MTR + NF-e + CDF por lote, ancorado em blockchain com hash público: o Data Passport de cada tonelada é auditável por qualquer pessoa.',
          },
          {
            q: 'Como funcionam escrow e liquidação?',
            a: 'O comprador paga em escrow no momento do lance vencedor; o valor só é liberado quando a indústria confirma o recebimento. A repartição automática via smart contract entra no roadmap 2027+.',
          },
          {
            q: 'Sou uma cooperativa: como vendo minha produção?',
            a: 'Solicite entrada na rede pelo formulário. Com a ferramenta de rastreio, sua produção ganha lastro documental e acesso a compradores obrigados por lei.',
          },
          {
            q: 'Como entro na rede?',
            a: 'Pelo formulário "Fale com um especialista" nesta página. Analisamos cada solicitação manualmente.',
          },
        ],
      },
    ],
  },

  footer: {
    mantra: 'Ativo que entra em blockchain circula na blockchain',
    tagline: 'Recicle. Monetize. Escale sustentabilidade. Juntos por um futuro circular.',
    navLabel: 'Redes sociais e contato',
    privacy: 'Privacidade',
    langLink: 'English',
    carbonFallback: 'Site de baixo carbono · < 0,3 g CO₂/visita',
    carbonNote:
      'Esta página foi projetada para emitir menos de 0,3 g de CO₂ por visita. Medição pública pelo Website Carbon Badge acima, ativa após o deploy.',
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
