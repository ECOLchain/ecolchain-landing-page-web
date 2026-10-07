# ECOLchain Landing Page · Guia de contexto para agentes

Este documento dá a qualquer agente (humano ou IA) o contexto necessário para entender,
modificar e publicar este repositório com segurança. Leia inteiro antes de commitar.

## 1. O que é este projeto

Landing page oficial da ECOLchain em https://ecolchain.com (também www).
É uma página única, institucional, bilíngue (PT-BR em `/` e EN em `/en/`), com
formulário de contato. O produto real (dApp) fica em outro repositório e roda em
https://app.ecolchain.com/pt e /en; os CTAs da landing apontam para lá ou para a
seção de formulário (`#rede`).

## 2. Posicionamento atual do produto (não contradizer no copy)

Escopo fechado em 06/10/2026:

- O produto é **rastreabilidade e auditoria de resíduos sólidos via blockchain**
  (cadeia de custódia MTR + NF-e + CDF, hash público na Solana, Data Passport por lote).
- **NÃO oferecemos créditos** de nenhum tipo (nem carbono, nem reciclagem).
  Nenhuma string pode conter "crédito" (PT) ou "credit" (EN); há teste que falha se aparecer.
- **NÃO somos B2C**: não existe jornada de cidadão, recompensas para consumidor ou
  seção "Para você". Público-alvo: indústrias, marcas, cooperativas e poder público.
- **NÃO temos calculadora** de metas/custos (removida para evitar alegações não
  comprovadas; o projeto ainda não tem clientes).
- Conformidade regulatória é o diferencial: seção "Legislação sobre resíduos"
  (Lei 12.305/2010 · PNRS, Decreto 12.688/2025, Reporte SINIR).
- CTA principal: "Fale com um especialista" (leva ao formulário `#rede`, que envia
  e-mail para ecolchain@gmail.com para aprovação manual de entrada na rede).
- MVP com foco em vidro (experiência da fundadora na cadeia do vidro); materiais
  listados no formulário: vidros, PET 1, PEAD 2, alumínio, papelão, outros.

## 3. Stack e estrutura

- Next.js 16 (App Router) + TypeScript + Tailwind CSS v4 + Vitest. Código em `app/`.
- `app/src/content/pt.ts` é a **fonte da verdade** do copy e do tipo `LandingCopy`;
  `app/src/content/en.ts` espelha a mesma estrutura (paridade verificada por teste).
  Nunca hardcode texto em componentes: todo texto vem de `content/`.
- `app/src/content/steps.pt.ts` / `steps.en.ts`: as 7 etapas do walkthrough
  (ator `coleta` = "Transporte de coleta"; não existe mais ator "coletor").
- Componentes: `LandingPage.tsx` (seções), `TrilhoWalkthrough.tsx` (diagrama em linha
  reta + cards), `RedeForm.tsx` (formulário), `SiteHeader/SiteFooter`, `Reveal`
  (animações de scroll/countup), `CarbonBadge`.
- `app/src/app/api/solicitar/route.ts`: POST do formulário → e-mail via Resend.
  Env: `SOLICITAR_TO` (padrão ecolchain@gmail.com), `SOLICITAR_FROM`, `RESEND_API_KEY`.
  Sem `RESEND_API_KEY` responde 503 `email_unavailable` (comportamento testado).
- Assets em `app/public/`: `favicon.svg` (marca E), `img/ecolchain-logo.webp`
  (wordmark), `img/og.jpg` (imagem social 1200x630), `fonts/inter-var-latin.woff2`.

## 4. Marca e regras de copy

- Paleta: texto verde-floresta `#0e4330` / tinta `#0a3a28`, acento `#58b183`,
  bandas verde-claro `#e4f2ea`, fundos creme `#fdfbf6` e papel `#f2eedd`.
- **Nunca usar em dash (U+2014)** em nenhuma string de copy (teste bloqueia).
- Tom: direto, sem jargão de cripto para público geral; sem promessas de prazo
  (não prometer "resposta em N dias"); números sempre com fonte citada.
- Low-carbon: alvo < 0,3 g CO₂/visita. CSS puro para visualizações, imagens WebP/JPG
  otimizadas, fonte única self-hosted, sem frameworks JS de UI além do React do Next.
  Referências: sustainablewebdesign.org, ecograder.com, websitecarbon.com.

## 5. Fluxo de trabalho obrigatório (TDD + esteira)

1. **TDD**: ajuste/crie testes em `app/tests/` primeiro, veja falhar (RED),
   implemente (GREEN). `cd app && npm test` (vitest run), `npm run lint`, `npm run build`.
   Testes atuais cobrem: paridade PT/EN, escopo (sem créditos/B2C/calculadora),
   legislação única na página, CTA/formulário, steps, formulário API, countup/spring.
2. Branch de trabalho: `feature/<nome>` a partir de `develop`. Commits em pt-BR,
   conventional commits (`feat:`, `fix:`...).
3. Push da feature → CI roda lint+build e abre/atualiza PR para `develop`.
4. Merge do PR (squash) → CI da develop → abre/atualiza PR para `main`.
5. Merge para `main` → deploy de produção.

### Armadilha conhecida: squash-merge híbrido

A esteira usa squash nos dois estágios. Se a mesma linha foi alterada e revertida em
ramos paralelos, o merge entre develop e main pode gerar **árvore híbrida** (parte
antiga + parte nova) ou duplicação silenciosa de blocos. Procedimento seguro ao
resolver conflito de PR:

```bash
git checkout <branch-destino-do-merge-local>   # ex.: feature recebendo develop
git fetch origin develop && git merge origin/develop --no-commit
git checkout HEAD -- app                        # conteúdo da branch atual é autoritativo
git commit -m "merge: <origem> em <destino> (conteúdo autoritativo)"
git push
```

Depois de qualquer merge desse tipo, rodar `npm test` e conferir que a árvore final
é idêntica à da branch de origem do conteúdo. Existe teste que garante ocorrência
única da seção `#legislacao` no `LandingPage.tsx` (regressão real que foi a produção).

## 6. Deploy e infraestrutura

- Hoje o workflow de main publica na Vercel (que serve ecolchain.com).
- Alvo oficial decidido pelo time: **Cloudflare Workers via OpenNext**
  (`app/wrangler.jsonc`, `app/open-next.config.ts`, scripts `preview:cf`/`deploy:cf`).
  Pendência: editar `.github/workflows/*` exige token com escopo `workflow`;
  os segredos Cloudflare (`CLOUDFLARE_API_TOKEN`, `CLOUDFLARE_ACCOUNT_ID`,
  `RESEND_API_KEY` via `wrangler secret`) precisam ser configurados.
- Infra como código: repo `ecolchain-infra-networks-networks`, dir
  `infra/terraform/landing-page` (DNS na Cloudflare; recurso Vercel a migrar para
  `cloudflare_workers_custom_domain`).
- Pós-deploy, verificar com curl: conteúdo-chave, ausência de strings proibidas
  ("crédito", "Para você", "5 dias úteis") e assets (favicon.svg, img/og.jpg).

## 7. Verificação rápida antes de finalizar qualquer tarefa

- [ ] `npm test` verde (vitest)
- [ ] `npm run lint` e `npm run build` verdes (ou CI verde no PR)
- [ ] Paridade PT/EN mantida (o teste de chaves cobre)
- [ ] Sem em dash, sem "crédito"/"credit", sem B2C, sem promessa de prazo
- [ ] Produção verificada com curl após o deploy
