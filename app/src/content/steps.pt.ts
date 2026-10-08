import type { TrailStep } from './steps';

export const stepsPt: TrailStep[] = [
  {
    id: 1,
    title: 'Fonte geradora',
    text: 'Onde nasce o resíduo: a empresa que coloca a embalagem no mercado (indústria, vinícola, importadora ou distribuidora) registra a origem do lote e prepara o descarte correto.',
    roadmap: false,
    actor: 'gerador',
    tx: [],
  },
  {
    id: 2,
    title: 'Coleta e triagem na cooperativa',
    text: 'O transporte de coleta leva o material à cooperativa, que assume a triagem: pesagem em balança auditada, registro de imagem e vídeo do lote enviados ao agente de IA, prova de metadados e evidência para a Nota Fiscal. Nascem o smart contract e o hash do lote, liberado no marketplace com preço mínimo.',
    roadmap: false,
    actor: 'coleta',
    tx: [{ hash: '3ab6…10cc', label: 'mint do lote', lamports: '5.000 lamports' }],
  },
  {
    id: 3,
    title: 'Lances e escrow',
    text: 'Indústrias dão lances no lote anunciado. O vencedor paga US$ 50, que ficam em escrow até a entrega.',
    roadmap: false,
    actor: 'cooperativa',
    tx: [{ hash: '11b0…93cf', label: 'venda registrada', lamports: '5.000 lamports' }],
  },
  {
    id: 4,
    title: 'Transporte com custódia',
    text: 'O lote segue com custódia e rastreabilidade: dados on-chain, Nota Fiscal e hash acompanham o material até a indústria.',
    roadmap: false,
    actor: 'transportador',
    tx: [{ hash: 'a9c3…13ac', label: 'custódia → transp.', lamports: '5.000 lamports' }],
  },
  {
    id: 5,
    title: 'Recebimento e liquidação',
    text: 'A indústria confirma o recebimento dos resíduos de valor. O escrow libera o pagamento para a cooperativa e o token de transação é queimado.',
    roadmap: false,
    actor: 'industria',
    tx: [
      { hash: 'ec51…437d', label: 'recebimento', lamports: '5.000 lamports' },
      { hash: '55d8…0c65', label: 'queima do token', lamports: '5.000 lamports' },
    ],
  },
  {
    id: 6,
    title: 'Tonelada verificada',
    text: 'A tonelada processada recebe o Data Passport: dossiê documental (MTR + NF-e + CDF) com hash público, pronto para auditoria e comprovação de metas legais.',
    roadmap: false,
    actor: 'compradores',
    tx: [{ hash: 'b21d…7f09', label: 'passaporte emitido', lamports: '5.000 lamports' }],
  },
  {
    id: 7,
    title: 'Auditoria pública',
    text: 'Qualquer auditor, certificadora, órgão regulador ou parte interessada consulta todos os dados no explorer: cada etapa é uma transação assinada, com carimbo de tempo e hash.',
    roadmap: false,
    actor: 'auditoria',
    tx: [],
  },
];
