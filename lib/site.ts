const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "https://lesoftware.com.br"
);

export const siteConfig = {
  name: "Lesoftware",
  legalName: "Lesoftware",
  siteUrl,
  locale: "pt_BR",
  language: "pt-BR",
  title: "Lesoftware | Desenvolvimento de Software Sob Medida",
  tagline: "Soluções Tecnológicas para Empresas",
  description:
    "Desenvolvimento de software sob medida para empresas. Criamos sistemas web, aplicativos, integrações e automações alinhadas aos processos e objetivos do seu negócio.",
  ogHeadline: "Software sob medida para transformar negócios",
  ogImage: {
    path: "/og_image.png",
    width: 1774,
    height: 887,
    alt: "Lesoftware — soluções de software sob medida para transformar negócios",
  },
  category: "technology",
  logoPath: "/logo.png",
  keywords: [
    "desenvolvimento de software sob medida",
    "empresa de desenvolvimento de software",
    "software house",
    "desenvolvimento de sistemas web",
    "desenvolvimento de aplicativos",
    "criação de sistemas personalizados",
    "automação de processos",
    "integração de APIs",
    "soluções digitais para empresas",
    "software house em Jales",
    "desenvolvimento de software em Jales",
  ],
  email: "contato@lesoftware.com.br",
  telephone: "(17) 99703-3387",
  telephoneInternational: "+55-17-99703-3387",
  whatsapp: "https://wa.me/5517997033387",
  address: {
    streetAddress: "Av Salustiano Pupim, nº1518, Jardim São Jorge",
    addressLocality: "Jales",
    addressRegion: "SP",
    postalCode: "15704-190",
    addressCountry: "BR",
    formatted:
      "Av Salustiano Pupim, nº1518, Jardim São Jorge, Jales/SP CEP 15704-190",
  },
  /** Incluir somente URLs reais de redes sociais quando existirem */
  socialLinks: [] as string[],
  services: [
    {
      name: "Desenvolvimento Web",
      description:
        "Sites e aplicações web modernas e responsivas para gerar resultados reais para sua empresa.",
    },
    {
      name: "Apps Mobile",
      description:
        "Aplicativos para Android e iOS com design fluido e excelente usabilidade.",
    },
    {
      name: "E-commerce",
      description:
        "Lojas virtuais completas com gestão, pagamento e integração eficiente.",
    },
    {
      name: "Sistemas Corporativos",
      description:
        "Automatize processos com sistemas sob medida que otimizam o negócio.",
    },
    {
      name: "Automação de processos",
      description:
        "Reduza tarefas manuais e aumente a eficiência com soluções inteligentes.",
    },
    {
      name: "Segurança Digital",
      description:
        "Proteja dados com sistemas robustos e práticas de segurança em foco.",
    },
  ],
} as const;

export function absoluteUrl(path = "/") {
  if (path.startsWith("http")) return path;
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${siteConfig.siteUrl}${normalized === "/" ? "" : normalized}`;
}
