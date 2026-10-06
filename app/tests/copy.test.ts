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
  it('hero PT abre com Recicle. Monetize. Escale sustentabilidade', () => {
    expect(pt.hero.titleA).toBe('Recicle. Monetize.');
    expect(pt.hero.titleB).toBe('Escale sustentabilidade.');
  });
  it('hero PT descreve rastreabilidade + blockchain como camada de confiança', () => {
    expect(ptAll).toContain('plataforma de rastreabilidade de resíduos sólidos de valor');
    expect(ptAll).toContain('blockchain como camada de confiança e auditoria');
  });
  it('hero EN abre com Recycle. Monetize. Scale sustainability', () => {
    expect(en.hero.titleA).toBe('Recycle. Monetize.');
    expect(en.hero.titleB).toBe('Scale sustainability.');
  });
});

describe('copy: resíduos têm valor', () => {
  it('seção existe com os números globais e do Brasil', () => {
    expect(ptAll).toMatch(/resíduos têm valor/i);
    for (const n of ['3,5 bi', '17%', 'US$ 640 bi', '82 mi', '4%', 'R$ 120 bi', 'US$ 76,96']) {
      expect(ptAll).toContain(n);
    }
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
  it('walkthrough usa o título do trilho', () => {
    expect(ptAll).toMatch(/TRILHO DO RESÍDUO ATÉ A RECICLAGEM/i);
  });
  it('cadeia circular aparece (descarte → consumidor → descarte correto)', () => {
    expect(ptAll).toContain('Descarte');
    expect(ptAll).toContain('Circularidade');
  });
  it('primeira etapa é Transporte de coleta (sem ator "Coletor")', () => {
    expect(ptAll).toContain('Transporte de coleta');
    expect(ptAll).not.toContain('→ Coletor →');
  });
  it('fluxo passa por verificação, não por créditos', () => {
    expect(pt.trilho.lede).toContain('→ Verificação →');
    expect(pt.trilho.lede).not.toContain('Créditos');
    expect(en.trilho.lede).toContain('→ Verification →');
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
  it('EN tem seção equivalente', () => {
    expect(enAll).toMatch(/Waste legislation/i);
  });
  it('LandingPage renderiza a seção legislação uma única vez', () => {
    const src = readFileSync(new URL('../src/components/LandingPage.tsx', import.meta.url), 'utf8');
    expect(src.match(/id="legislacao"/g)).toHaveLength(1);
  });
});

describe('copy: plataforma', () => {
  it('título reformulado sem a frase de commodity', () => {
    expect(pt.plataforma.title).not.toContain('Commodity');
    expect(pt.plataforma.title).toBe('Rastreabilidade e auditoria, ponta a ponta.');
    expect(en.plataforma.title).toBe('End-to-end traceability and audit.');
  });
});

describe('copy: formulário sem promessa de prazo', () => {
  it('lede do formulário sem "5 dias úteis"', () => {
    expect(pt.rede.lede).toBe('Analisamos cada entrada manualmente.');
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

describe('copy: central de informações', () => {
  it('FAQ mantém apenas a central de empresas', () => {
    expect(pt.faq.groups).toHaveLength(1);
    expect(en.faq.groups).toHaveLength(1);
    expect(ptAll).toMatch(/Central de informações/i);
    expect(ptAll).not.toMatch(/Central de conhecimento/i);
  });
});

describe('copy: footer', () => {
  it('traz o mantra do ativo em blockchain', () => {
    expect(ptAll).toMatch(/ativo que entra em blockchain circula na blockchain/i);
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
