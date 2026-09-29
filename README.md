# 🌿 ECOLchain Landing Page (`ecolchain-landing-page-web`)

Landing Page oficial da **ECOLchain**, desenvolvida para apresentar a infraestrutura blockchain ecológica com alto desempenho e SEO otimizado.

---

## 🚀 1. Tecnologias Utilizadas

- **Framework:** Next.js 16+ (App Router)
- **Linguagem:** TypeScript
- **Estilização:** Tailwind CSS v4
- **Ícones:** Lucide Icons
- **Hospedagem:** Vercel (Projeto `ecolchain-landing-page-web`)
- **Localização do Código:** Diretório `/app`

---

## 🌐 2. Arquitetura de Domínios & Redirecionamentos

| Serviço | Domínio Oficial | Descrição |
| :--- | :--- | :--- |
| **Landing Page** | [`ecolchain.com`](https://ecolchain.com) / [`www.ecolchain.com`](https://www.ecolchain.com) | Portal de apresentação institucional, recursos e SEO. |
| **dApp / Aplicação Web3** | [`app.ecolchain.com`](https://app.ecolchain.com) | Aplicação Web real (login, carteira, transações e abertura de conta). |

> 🔗 Os botões de chamada para ação (*CTA*) da Landing Page redirecionam os usuários diretamente para a aplicação principal em `https://app.ecolchain.com`.

---

## 🔄 3. Estrutura de Branches & Git Flow

Seguimos a estratégia de **Git Flow** automatizada:

* **`feature/*`**: Branches de desenvolvimento de novas funcionalidades e correções.
* **`develop`**: Branch de integração e testes em ambiente de Staging/Preview.
* **`main`**: Branch de Produção oficial (`ecolchain.com`). Exige revisão e aprovação via Pull Request.

### Como contribuir:
```bash
# 1. Atualize a develop e crie sua feature branch
git checkout develop
git pull origin develop
git checkout -b feature/nome-da-funcionalidade

# 2. Faça os commits e o push da branch
git add .
git commit -m "feat: descricao da alteracao"
git push origin feature/nome-da-funcionalidade
```

---

## ⚙️ 4. Esteira de CI/CD & URLs de Preview nos PRs

A esteira executa automaticamente as validações, deploys de preview e movimentações de código:

1. **Push em `feature/*`**: Roda o linter e o build. Faz o deploy de preview na Vercel e abre automaticamente um **Pull Request** para a `develop` **contendo o link direto do ambiente de teste**.
2. **Merge em `develop`**: Roda o build, realiza o **Deploy de Preview/Staging** na Vercel e abre automaticamente um **Pull Request** para a branch `main` **anexando a URL de Preview** para validação final.
3. **Merge em `main`**: Realiza o **Deploy de Produção** na Vercel para [`ecolchain.com`](https://ecolchain.com).

> 💡 **Visualização de Alterações:** Todo Pull Request (seja de `feature` $\rightarrow$ `develop` ou `develop` $\rightarrow$ `main`) possui o link direto da URL de Preview gerada pela Vercel no corpo e nos comentários do PR. Isso permite testar e visualizar as alterações no navegador antes de aprovar e promover para produção.

---

## 🛠️ 5. Infraestrutura como Código (Terraform)

- **Gerenciamento de Infraestrutura:** A infraestrutura (projeto Vercel e registros DNS A/CNAME no Cloudflare) é provisionada via **Terraform** no repositório central:
  - 🔗 **[ecolchain-infra-networks-networks](https://github.com/ECOLchain/ecolchain-infra-networks-networks)** (diretório `infra/terraform/landing-page`).

---

## 💻 6. Execução Local

```bash
# Navegar até o projeto Next.js
cd app

# Instalar dependências
npm install

# Executar ambiente de desenvolvimento
npm run dev

# Executar build de produção local
npm run build
```
