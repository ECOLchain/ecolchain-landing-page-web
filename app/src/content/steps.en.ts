import type { TrailStep } from './steps';

export const stepsEn: TrailStep[] = [
  {
    id: 1,
    title: 'Waste generator',
    text: 'Where waste is born: the company placing the packaging on the market (manufacturer, winery, importer or distributor) registers the origin of the lot and prepares its correct disposal.',
    roadmap: false,
    actor: 'gerador',
    tx: [],
  },
  {
    id: 2,
    title: 'Collection and sorting at the cooperative',
    text: 'Collection transport takes the material to the cooperative, which takes over sorting: weighing on an audited scale, image and video records of the lot sent to the AI agent, metadata proof and evidence for the invoice. The smart contract and the lot hash are born, and the lot is listed on the marketplace with a minimum price.',
    roadmap: false,
    actor: 'coleta',
    tx: [{ hash: '3ab6…10cc', label: 'lot mint', lamports: '5.000 lamports' }],
  },
  {
    id: 3,
    title: 'Bids and escrow',
    text: 'Industries place bids on the listed lot. The winner pays US$ 50, held in escrow until delivery.',
    roadmap: false,
    actor: 'cooperativa',
    tx: [{ hash: '11b0…93cf', label: 'sale recorded', lamports: '5.000 lamports' }],
  },
  {
    id: 4,
    title: 'Custodied transport',
    text: 'The lot travels with custody and traceability: on-chain data, invoice and hash accompany the material to the industry.',
    roadmap: false,
    actor: 'transportador',
    tx: [{ hash: 'a9c3…13ac', label: 'custody → carrier', lamports: '5.000 lamports' }],
  },
  {
    id: 5,
    title: 'Receipt and settlement',
    text: 'The industry confirms receipt of the valuable waste. Escrow releases the payment to the cooperative and the transaction token is burned.',
    roadmap: false,
    actor: 'industria',
    tx: [
      { hash: 'ec51…437d', label: 'receipt', lamports: '5.000 lamports' },
      { hash: '55d8…0c65', label: 'token burned', lamports: '5.000 lamports' },
    ],
  },
  {
    id: 6,
    title: 'Verified tonnage',
    text: 'The processed tonne receives its Data Passport: a documentary dossier (MTR + e-invoice + CDF) with a public hash, ready for audit and legal target compliance.',
    roadmap: false,
    actor: 'compradores',
    tx: [{ hash: 'b21d…7f09', label: 'passport issued', lamports: '5.000 lamports' }],
  },
  {
    id: 7,
    title: 'Public audit',
    text: 'Any auditor, certifier, regulator or interested party can query all data on the explorer: every step is a signed transaction with timestamp and hash.',
    roadmap: false,
    actor: 'auditoria',
    tx: [],
  },
];
