export type ActorId =
  | 'gerador'
  | 'coleta'
  | 'cooperativa'
  | 'transportador'
  | 'industria'
  | 'compradores'
  | 'auditoria';

export interface TrailTx {
  hash: string;
  label: string;
  lamports: string;
}

export interface TrailStep {
  id: number;
  title: string;
  text: string;
  roadmap: boolean;
  actor: ActorId;
  tx: TrailTx[];
}
