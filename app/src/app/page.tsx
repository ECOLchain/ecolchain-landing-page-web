import { Leaf, ShieldCheck, Zap, Globe, ArrowRight, Code, Layers, ExternalLink } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col selection:bg-emerald-500 selection:text-slate-950">
      {/* Navigation Header */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-slate-950/80 border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="p-2 bg-emerald-500/10 border border-emerald-500/30 rounded-lg text-emerald-400">
              <Leaf className="w-5 h-5" />
            </div>
            <span className="font-bold text-xl tracking-tight bg-gradient-to-r from-emerald-400 to-teal-200 bg-clip-text text-transparent">
              ECOLchain
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
            <a href="#features" className="hover:text-emerald-400 transition-colors">Recursos</a>
            <a href="#network" className="hover:text-emerald-400 transition-colors">Rede</a>
            <a href="#sustainability" className="hover:text-emerald-400 transition-colors">Sustentabilidade</a>
            <a href="#docs" className="hover:text-emerald-400 transition-colors">Documentação</a>
          </nav>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com/ECOLchain"
              target="_blank"
              rel="noreferrer"
              className="p-2 text-slate-400 hover:text-slate-100 transition-colors flex items-center gap-1.5 text-xs font-semibold"
            >
              <Code className="w-4 h-4" />
              GitHub
            </a>
            <a
              href="#get-started"
              className="px-4 py-2 text-sm font-semibold text-slate-950 bg-emerald-400 hover:bg-emerald-300 rounded-lg transition-all shadow-lg shadow-emerald-500/20"
            >
              Começar Agora
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-24 pb-20 px-6 max-w-7xl mx-auto flex flex-col items-center text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold tracking-wide mb-6">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping"></span>
          🎉 Lançamento da Versão 1.0 da ECOLchain no Ar
        </div>

        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-100 max-w-4xl leading-[1.15]">
          A Blockchain Sustentável para a{" "}
          <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
            Próxima Geração
          </span>
        </h1>

        <p className="mt-6 text-lg sm:text-xl text-slate-400 max-w-2xl leading-relaxed">
          ECOLchain combina consenso ecológico com alta velocidade de transações para construir aplicações descentralizadas verdadeiramente verdes e escaláveis.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center gap-4">
          <a
            href="#explore"
            className="w-full sm:w-auto px-6 py-3.5 font-semibold text-slate-950 bg-emerald-400 hover:bg-emerald-300 rounded-xl transition-all shadow-lg shadow-emerald-500/25 flex items-center justify-center gap-2"
          >
            Explorar Ecossistema
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="#whitepaper"
            className="w-full sm:w-auto px-6 py-3.5 font-semibold text-slate-300 bg-slate-900 border border-slate-800 hover:bg-slate-800 hover:text-slate-100 rounded-xl transition-all flex items-center justify-center gap-2"
          >
            Ler Whitepaper
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        {/* Highlight Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-4xl">
          {[
            { label: "Pegada de Carbono", value: "99.9% Menor" },
            { label: "Tempo por Bloco", value: "< 1.2s" },
            { label: "Custo por Transação", value: "< $0.0001" },
            { label: "Uptime da Rede", value: "99.99%" },
          ].map((stat, i) => (
            <div key={i} className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-sm">
              <div className="text-2xl sm:text-3xl font-bold text-emerald-400">{stat.value}</div>
              <div className="text-xs sm:text-sm text-slate-400 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-20 px-6 max-w-7xl mx-auto w-full">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Tecnologia Projetada para o Futuro</h2>
          <p className="text-slate-400 mt-4">
            Infraestrutura robusta desenvolvida para empresas e desenvolvedores que valorizam sustentabilidade e performance.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: Leaf,
              title: "Consenso Eco-Friendly",
              desc: "Algoritmo de validação otimizado que reduz drasticamente o consumo de energia se comparado aos métodos tradicionais.",
            },
            {
              icon: Zap,
              title: "Ultra-Alta Velocidade",
              desc: "Finalidade instantânea com milhares de transações por segundo e latência quase nula.",
            },
            {
              icon: ShieldCheck,
              title: "Segurança de Nível Empresarial",
              desc: "Criptografia avançada e auditoria contínua para garantir a integridade total dos dados.",
            },
            {
              icon: Globe,
              title: "Rede Descentralizada",
              desc: "Nós distribuídos globalmente garantindo alta resiliência e disponibilidade contínua.",
            },
            {
              icon: Layers,
              title: "Contratos Inteligentes",
              desc: "Suporte nativo para desenvolvimento de smart contracts com ferramentas modernas e acessíveis.",
            },
            {
              icon: ArrowRight,
              title: "Interoperabilidade",
              desc: "Pontes seguras para conectar a ECOLchain a outros ecossistemas blockchain.",
            },
          ].map((feature, i) => (
            <div
              key={i}
              className="p-8 rounded-2xl bg-slate-900/40 border border-slate-800/80 hover:border-emerald-500/30 hover:bg-slate-900/80 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform">
                <feature.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mt-6 text-slate-100">{feature.title}</h3>
              <p className="text-slate-400 mt-2 text-sm leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-auto border-t border-slate-900 bg-slate-950 py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <Leaf className="w-5 h-5 text-emerald-400" />
            <span className="font-bold text-slate-200 tracking-tight">ECOLchain</span>
          </div>

          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} ECOLchain. Todos os direitos reservados.
          </p>

          <div className="flex items-center gap-6 text-slate-400 text-sm">
            <a href="https://github.com/ECOLchain" target="_blank" rel="noreferrer" className="hover:text-emerald-400 flex items-center gap-1">
              <Code className="w-4 h-4" />
              GitHub
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
