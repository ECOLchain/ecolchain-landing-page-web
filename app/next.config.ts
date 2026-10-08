import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // URLs canônicas com barra final (paridade com o site legado: /en/, /privacidade/)
  trailingSlash: true,
  // Monorepo/git pai acima de app/ faz o Turbopack subir demais procurando a
  // raiz (há um package-lock.json solto em ~). Fixa a raiz neste diretório.
  turbopack: {
    root: new URL(".", import.meta.url).pathname,
  },
  // Preview local passa por proxy (127.0.0.1); sem isto o Next bloqueia
  // /_next/* e a hidratação não roda (data-reveal fica invisível).
  allowedDevOrigins: ["127.0.0.1", "localhost"],
};

export default nextConfig;
