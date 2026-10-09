import { describe, it, expect } from 'vitest';
import { readFileSync } from 'node:fs';
import { pt } from '../src/content/pt';
import { en } from '../src/content/en';

function flatten(value: unknown, acc: string[] = []): string[] {
  if (typeof value === 'string') acc.push(value);
  else if (Array.isArray(value)) value.forEach((v) => flatten(v, acc));
  else if (value && typeof value === 'object') Object.values(value).forEach((v) => flatten(v, acc));
  return acc;
}

function keyPaths(value: unknown, prefix = ''): string[] {
  if (Array.isArray(value)) return [prefix];
  if (value && typeof value === 'object') {
    return Object.entries(value as Record<string, unknown>).flatMap(([k, v]) =>
      keyPaths(v, prefix ? `${prefix}.${k}` : k),
    );
  }
  return [prefix];
}

const ptStrings = flatten(pt);
const enStrings = flatten(en);
const ptAll = ptStrings.join('\n');
const enAll = enStrings.join('\n');

describe('copy: paridade PT/EN', () => {
  it('mesma estrutura de chaves', () => {
    expect(keyPaths(en).sort()).toEqual(keyPaths(pt).sort());
  });
});

describe('copy: frase de abertura', () => {
  it('hero PT abre sem pontos: Recicle Monetize Escale sustentabilidade', () => {
    expect(pt.hero.titleA).toBe('Recicle Monetize');
    expect(pt.hero.titleB).toBe('Escale sustentabilidade');
  });
  it('hero PT descreve rastreabilidade + blockchain como camada de confiança', () => {
    expect(ptAll).toContain('plataforma de rastreabilidade de resíduos sólidos de valor');
    expect(ptAll).toContain('blockchain como camada de confiança e auditoria');
  });
  it('hero EN abre sem pontos: Recycle Monetize Scale sustainability', () => {
    expect(en.hero.titleA).toBe('Recycle Monetize');
    expect(en.hero.titleB).toBe('Scale sustainability');
  });
});

describe('copy: resíduos são ativos de valor', () => {
  it('seção existe com os números globais e do Brasil', () => {
    expect(pt.problema.title).toMatch(/ativos de valor/i);
    for (const n of ['3,5 bi', '17%', 'US$ 640 bi', '82 mi', '4%', 'R$ 120 bi']) {
      expect(ptAll).toContain(n);
    }
  });
  it('sem o exercício de divisão per capita', () => {
    expect('divider' in pt.problema).toBe(false);
    expect('divider' in en.problema).toBe(false);
    expect(ptAll).not.toContain('US$ 76,96');
    expect(enAll).not.toContain('US$ 76.96');
  });
  it('cita ONU e Banco Mundial como fonte', () => {
    expect(ptAll).toMatch(/Fonte[^|]*(Nações Unidas|ONU)[^|]*Banco Mundial/);
  });
  it('percentuais de reciclagem trazem dados para barra visual', () => {
    expect(pt.problema.globalStats[1].bar).toBe(17);
    expect(pt.problema.brasilStats[1].bar).toBe(4);
    expect(en.problema.globalStats[1].bar).toBe(17);
    expect(en.problema.brasilStats[1].bar).toBe(4);
  });
});

describe('copy: trilho do resíduo', () => {
  it('kicker fino mantém o nome do trilho; título é a camada de tecnologia', () => {
    expect(ptAll).toMatch(/TRILHO DO RESÍDUO ATÉ A RECICLAGEM/i);
    expect(pt.trilho.title).toBe('Camada de tecnologia aplicada');
    expect(en.trilho.title).toBe('Applied technology layer');
    expect(pt.trilho.lede).toBe('Acompanhe a jornada:');
  });
  it('fluxo começa na fonte geradora e passa por verificação, sem créditos', () => {
    const ptActors = Object.values(pt.trilho.actors).map((a) => a.name).join(' ');
    const enActors = Object.values(en.trilho.actors).map((a) => a.name).join(' ');
    expect(ptActors).toContain('Fonte geradora');
    expect(ptActors).toContain('Auditoria');
    expect(enActors).toContain('Waste generator');
    expect(ptActors).not.toContain('Créditos');
    expect(enActors).not.toContain('Credits');
  });
});

describe('copy: CTA principal', () => {
  it('hero PT convida a falar com um especialista', () => {
    expect(pt.hero.ctaPrimary).toBe('Fale com um especialista');
  });
  it('hero EN convida a falar com um especialista', () => {
    expect(en.hero.ctaPrimary).toBe('Talk to a specialist');
  });
  it('formulário da rede se chama Fale com um especialista', () => {
    expect(pt.rede.title).toBe('Fale com um especialista');
    expect(en.rede.title).toBe('Talk to a specialist');
  });
  it('CTAs de especialista usam o mesmo rótulo do formulário', () => {
    expect(pt.empresas.ctaCommercial).toBe(pt.rede.title);
    expect(pt.legislacao.cta).toBe(pt.rede.title);
    expect(en.empresas.ctaCommercial).toBe(en.rede.title);
    expect(en.legislacao.cta).toBe(en.rede.title);
  });
});

describe('copy: escopo enxuto', () => {
  it('copy PT não tem seção de calculadora', () => {
    expect('calc' in pt).toBe(false);
    expect(ptAll).not.toContain('Quanto custa a sua meta');
  });
  it('copy EN não tem seção de calculadora', () => {
    expect('calc' in en).toBe(false);
  });
  it('sem créditos de nenhum tipo: só rastreabilidade e auditoria (PT e EN)', () => {
    expect(ptAll.toLowerCase()).not.toContain('crédito');
    expect(enAll.toLowerCase()).not.toContain('credit');
    for (const s of ['tCO₂e', 'Verra', 'Gold Standard']) {
      expect(ptAll).not.toContain(s);
      expect(enAll).not.toContain(s);
    }
  });
  it('sem seção B2C "Para você" (PT e EN)', () => {
    expect('voce' in pt).toBe(false);
    expect('voce' in en).toBe(false);
    expect(ptAll).not.toContain('Para você');
    expect(ptAll).not.toContain('Sou cidadão');
    expect(ptAll).not.toContain('Participar como cidadão');
    expect(enAll).not.toContain("I'm a citizen");
    expect(enAll).not.toContain('Join as a citizen');
  });
  it('FAQ sem pergunta sobre blockchain para usuários', () => {
    expect(ptAll).not.toContain('Preciso entender de blockchain');
    expect(enAll).not.toContain('need to understand blockchain');
  });
});

describe('copy: navegação alinhada à página', () => {
  it('nav PT: Início, Empresas, Rastreabilidade, Legislação, FAQ', () => {
    expect(pt.nav.home).toBe('Início');
    expect(pt.nav.empresas).toBe('Empresas');
    expect(pt.nav.rastreabilidade).toBe('Rastreabilidade');
    expect(pt.nav.legislacao).toBe('Legislação');
    expect(pt.nav.faq).toBe('FAQ');
  });
  it('nav EN espelha a mesma ordem', () => {
    expect(en.nav.home).toBe('Home');
    expect(en.nav.empresas).toBe('Business');
    expect(en.nav.rastreabilidade).toBe('Traceability');
    expect(en.nav.legislacao).toBe('Legislation');
    expect(en.nav.faq).toBe('FAQ');
  });
  it('CTA do app fala em plataforma, não em app', () => {
    expect(pt.nav.app).toContain('plataforma');
    expect(en.nav.app).toContain('platform');
  });
  it('footer sem links diretos para o app (camada de login pendente)', () => {
    const src = readFileSync(new URL('../src/components/SiteFooter.tsx', import.meta.url), 'utf8');
    expect(src).not.toContain('app.ecolchain.com');
    expect(src).not.toContain('appUrl');
  });
});

describe('copy: legislação sobre resíduos', () => {
  it('seção de legislação existe e cita as normas-chave', () => {
    expect(ptAll).toMatch(/Legislação sobre resíduos/i);
    for (const l of ['12.305/2010', '12.688/2025', 'SINIR']) {
      expect(ptAll).toContain(l);
    }
    for (const l of ['12,305/2010', '12,688/2025', 'SINIR']) {
      expect(enAll).toContain(l);
    }
  });
  it('sem card dedicado de reporte (SINIR segue citado nas respostas)', () => {
    expect(pt.legislacao.items.map((i) => i.law)).not.toContain('Reporte SINIR');
    expect(en.legislacao.items.map((i) => i.law)).not.toContain('SINIR reporting');
  });
  it('EN tem seção equivalente', () => {
    expect(enAll).toMatch(/Waste legislation/i);
  });
  it('LandingPage renderiza a seção legislação uma única vez', () => {
    const src = readFileSync(new URL('../src/components/LandingPage.tsx', import.meta.url), 'utf8');
    expect(src.match(/id="legislacao"/g)).toHaveLength(1);
  });
});

describe('copy: seções removidas na revisão', () => {
  it('sem marketplace de dois lados, plataforma e impacto (PT e EN)', () => {
    for (const k of ['quem', 'plataforma', 'impacto']) {
      expect(k in pt).toBe(false);
      expect(k in en).toBe(false);
    }
  });
  it('hero sem CTA secundário de venda', () => {
    expect('ctaGhost' in pt.hero).toBe(false);
    expect('ctaGhost' in en.hero).toBe(false);
  });
  it('LandingPage não renderiza as seções removidas', () => {
    const src = readFileSync(new URL('../src/components/LandingPage.tsx', import.meta.url), 'utf8');
    for (const id of ['quem', 'plataforma', 'impacto']) {
      expect(src.includes(`id="${id}"`)).toBe(false);
    }
  });
  it('empresas sem card SINIR (SINIR segue só na legislação)', () => {
    expect(pt.empresas.features.map((f) => f.title)).not.toContain('Reporte SINIR');
    expect(en.empresas.features.map((f) => f.title)).not.toContain('SINIR reporting');
  });
});

describe('copy: formulário sem promessa de prazo', () => {
  it('lede do formulário sem "5 dias úteis"', () => {
    expect(pt.rede.lede).toBe('Analisamos cada entrada individualmente e com agilidade.');
    expect(en.rede.lede).toBe('We review every application individually and promptly.');
    expect(ptAll).not.toContain('5 dias úteis');
    expect(enAll).not.toContain('5 business days');
  });
});

describe('copy: materiais da rede', () => {
  it('formulário lista os tipos de resíduo da rede', () => {
    for (const m of ['Vidro incolor', 'Vidro verde', 'Vidro âmbar', 'PET 1', 'PEAD 2', 'Alumínio', 'Papelão', 'Outros']) {
      expect(ptAll).toContain(m);
    }
  });
});

describe('copy: empresas (mergulho técnico)', () => {
  it('título enxuto sem "perguntas difíceis"', () => {
    expect(pt.empresas.title).toBe('Compliance, custódia e prova.');
    expect(en.empresas.title).toBe('Compliance, custody and proof.');
  });
  it('escrow sem promessa de repartição no roadmap', () => {
    const escrow = pt.empresas.features.find((f) => /escrow/i.test(f.title));
    expect(escrow?.text).not.toContain('roadmap');
    const escrowEn = en.empresas.features.find((f) => /escrow/i.test(f.title));
    expect(escrowEn?.text).not.toContain('roadmap');
  });
});

describe('copy: central de informações', () => {
  it('FAQ mantém apenas a central de empresas', () => {
    expect(pt.faq.groups).toHaveLength(1);
    expect(en.faq.groups).toHaveLength(1);
    expect(ptAll).toMatch(/Central de informações/i);
    expect(ptAll).not.toMatch(/Central de conhecimento/i);
  });
  it('perguntas removidas: preço e escrow não estão no ar', () => {
    const qs = pt.faq.groups[0].items.map((i) => i.q);
    expect(qs.join(' ')).not.toMatch(/quanto custa/i);
    expect(qs.join(' ')).not.toMatch(/escrow|liquidação/i);
    expect(qs.join(' ')).not.toMatch(/como vendo/i);
    const qsEn = en.faq.groups[0].items.map((i) => i.q);
    expect(qsEn.join(' ')).not.toMatch(/how much/i);
    expect(qsEn.join(' ')).not.toMatch(/escrow|settlement/i);
  });
  it('obrigação legal fala em recuperação de embalagens, não em compra', () => {
    const q = pt.faq.groups[0].items.find((i) => /obrigada/i.test(i.q));
    expect(q?.q).toContain('recuperação de embalagens');
    expect(q?.a).toContain('12.688/2025');
    const qEn = en.faq.groups[0].items.find((i) => /required/i.test(i.q));
    expect(qEn?.q).toContain('packaging recovery');
  });
  it('dupla contagem soletra as siglas MTR, NF-e e CDF', () => {
    const q = pt.faq.groups[0].items.find((i) => /dupla contagem/i.test(i.q));
    expect(q?.a).toContain('Manifesto de Transporte de Resíduos');
    expect(q?.a).toContain('Certificado de Destinação Final');
    expect(q?.a).toContain('auditável por qualquer pessoa');
  });
  it('cooperativa pergunta como participar; entrada da rede é individual e ágil', () => {
    const qs = pt.faq.groups[0].items.map((i) => i.q);
    expect(qs.join(' ')).toMatch(/como posso participar/i);
    const join = pt.faq.groups[0].items.find((i) => /entro na rede/i.test(i.q));
    expect(join?.a).toContain('individualmente e com agilidade');
  });
});

describe('copy: planos de serviços', () => {
  it('três planos com nomes e preços corretos', () => {
    const names = pt.planos.plans.map((p) => p.name);
    expect(names).toEqual(['Básico', 'Pro', 'Enterprise']);
    expect(pt.planos.plans.map((p) => p.price)).toEqual(['R$ 99', 'R$ 319', 'R$ 979']);
    const namesEn = en.planos.plans.map((p) => p.name);
    expect(namesEn).toEqual(['Basic', 'Pro', 'Enterprise']);
  });
  it('plano Escale é o destacado', () => {
    expect(pt.planos.plans.filter((p) => p.featured)).toHaveLength(1);
    expect(pt.planos.plans[1].featured).toBe(true);
    expect(en.planos.plans[1].featured).toBe(true);
  });
  it('diferenciais de cada tier: transações Solana e comissão', () => {
    expect(pt.planos.plans[0].features.join(' ')).toMatch(/500.*Solana/i);
    expect(pt.planos.plans[0].features.join(' ')).toContain('7%');
    expect(pt.planos.plans[1].features.join(' ')).toMatch(/1\.?000.*Solana/i);
    expect(pt.planos.plans[1].features.join(' ')).toContain('5%');
    expect(pt.planos.plans[2].features.join(' ')).toMatch(/3\.?000.*Solana/i);
    expect(pt.planos.plans[2].features.join(' ')).toContain('3%');
    expect(pt.planos.plans[2].features.join(' ')).toMatch(/prioridade/i);
  });
  it('sem promessas proibidas: sem crédito nem em dash', () => {
    const s = JSON.stringify(pt.planos) + JSON.stringify(en.planos);
    expect(s.toLowerCase()).not.toContain('crédito');
    expect(s).not.toContain('—');
  });
  it('LandingPage renderiza a seção planos uma única vez', () => {
    const src = readFileSync(new URL('../src/components/LandingPage.tsx', import.meta.url), 'utf8');
    expect(src.match(/id="planos"/g)).toHaveLength(1);
  });
});

describe('copy: footer', () => {
  it('sem o mantra do ativo em blockchain', () => {
    expect('mantra' in pt.footer).toBe(false);
    expect('mantra' in en.footer).toBe(false);
    expect(ptAll).not.toMatch(/ativo que entra em blockchain/i);
    expect(enAll).not.toMatch(/enters the blockchain/i);
  });
  it('tagline sem "futuro circular"', () => {
    expect(pt.footer.tagline).toBe('Recicle. Monetize. Escale sustentabilidade.');
    expect(en.footer.tagline).toBe('Recycle. Monetize. Scale sustainability.');
    expect(ptAll).not.toContain('Juntos por um futuro circular');
    expect(enAll).not.toContain('circular future');
  });
});

describe('copy: sem travessões de IA', () => {
  it('conteúdo PT não contém em dash (U+2014)', () => {
    expect(ptAll).not.toContain('—');
  });
  it('conteúdo EN não contém em dash (U+2014)', () => {
    expect(enAll).not.toContain('—');
  });
});
