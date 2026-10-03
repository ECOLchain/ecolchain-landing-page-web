// Calculadora enterprise — Decreto 12.688/2025.
// Apenas números públicos de referência; toda saída é estimativa.

export const META_RATE = 0.32; // meta de recuperação de embalagens em 2026
export const ECO_PRICE = 325; // R$/t — referência crédito de reciclagem (meio de 300–350)
export const CONV_PRICE = 1800; // R$/t — logística reversa convencional

export interface ComplianceResult {
  metaT: number;
  ecoCost: number;
  convCost: number;
  savings: number;
  savingsPct: number;
}

export function computeCompliance(volumeInput: number | string): ComplianceResult {
  const raw = typeof volumeInput === 'string' ? volumeInput.replace(',', '.') : volumeInput;
  const volume = Number(raw);
  if (!Number.isFinite(volume) || volume <= 0) {
    return { metaT: 0, ecoCost: 0, convCost: 0, savings: 0, savingsPct: 0 };
  }
  const metaT = volume * META_RATE;
  const ecoCost = metaT * ECO_PRICE;
  const convCost = metaT * CONV_PRICE;
  return {
    metaT,
    ecoCost,
    convCost,
    savings: convCost - ecoCost,
    savingsPct: (1 - ECO_PRICE / CONV_PRICE) * 100,
  };
}
