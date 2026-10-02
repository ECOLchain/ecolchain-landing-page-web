import { describe, it, expect } from 'vitest';
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
});

describe('copy: trilho do resíduo', () => {
  it('walkthrough usa o título do trilho', () => {
    expect(ptAll).toMatch(/TRILHO DO RESÍDUO ATÉ A RECICLAGEM/i);
  });
  it('cadeia circular aparece (descarte → consumidor → descarte correto)', () => {
    expect(ptAll).toContain('Descarte');
    expect(ptAll).toContain('Circularidade');
  });
});

describe('copy: materiais da rede', () => {
  it('formulário lista os tipos de resíduo da rede', () => {
    for (const m of ['Vidro incolor', 'Vidro verde', 'Vidro âmbar', 'PET 1', 'PEAD 2', 'Alumínio', 'Papelão', 'Outros']) {
      expect(ptAll).toContain(m);
    }
  });
});

describe('copy: centrais de conhecimento', () => {
  it('FAQ agrupa por central de usuários e de empresas', () => {
    expect(ptAll).toMatch(/Central de conhecimento/i);
    expect(ptAll).toMatch(/Central de informações/i);
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
