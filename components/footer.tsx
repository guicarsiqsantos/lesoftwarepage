"use client";

import type { ReactNode } from "react";
import { Logo } from "./ui/logo";
import { siteConfig } from "@/lib/site";

interface FooterLink {
  title: string;
  href: string;
}

interface FooterSection {
  label: string;
  links: FooterLink[];
}

const footerLinks: FooterSection[] = [
  {
    label: "Navegação",
    links: [
      { title: "Início", href: "#hero" },
      { title: "Serviços", href: "#servicos" },
      { title: "Tecnologias", href: "#tecnologias" },
      { title: "Benefícios", href: "#beneficios" },
    ],
  },
  {
    label: "Empresa",
    links: [
      { title: "Por que nos escolher", href: "#beneficios" },
      { title: "Qualidade", href: "#qualidade" },
      { title: "Contato", href: "#contato" },
    ],
  },
  {
    label: "Contato",
    links: [
      {
        title: siteConfig.email,
        href: `mailto:${siteConfig.email}`,
      },
      {
        title: siteConfig.telephone,
        href: `tel:${siteConfig.telephoneInternational}`,
      },
      {
        title: "WhatsApp",
        href: siteConfig.whatsapp,
      },
      {
        title: `${siteConfig.address.addressLocality}/${siteConfig.address.addressRegion}`,
        href: "#contato",
      },
    ],
  },
];

export function Footer() {
  return (
    <footer className="md:rounded-t-6xl relative w-full flex flex-col items-center justify-center rounded-t-4xl border-t bg-[radial-gradient(35%_128px_at_50%_0%,theme(backgroundColor.white/8%),transparent)] py-12 lg:py-16">
      <div className="bg-foreground/20 absolute top-0 right-1/2 left-1/2 h-px w-1/3 -translate-x-1/2 -translate-y-1/2 rounded-full blur" />

      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="grid w-full gap-8 xl:grid-cols-3 xl:gap-8">
          <AnimatedContainer className="flex flex-col gap-4">
            <Logo />
            <p className="text-muted-foreground text-sm">{siteConfig.tagline}</p>
            <p className="text-muted-foreground max-w-sm text-sm">
              Software house em {siteConfig.address.addressLocality}/
              {siteConfig.address.addressRegion}, com desenvolvimento de
              software sob medida para empresas em todo o Brasil.
            </p>
            <p className="text-muted-foreground mt-4 text-sm md:mt-2">
              © {new Date().getFullYear()} {siteConfig.name}. Todos os direitos
              reservados.
            </p>
          </AnimatedContainer>

          <nav
            aria-label="Rodapé"
            className="mt-10 grid grid-cols-2 gap-8 md:grid-cols-3 xl:col-span-2 xl:mt-0"
          >
            {footerLinks.map((section, index) => (
              <AnimatedContainer key={section.label} delay={0.1 + index * 0.1}>
                <div className="mb-10 md:mb-0">
                  <h3 className="text-xs font-medium text-foreground">
                    {section.label}
                  </h3>
                  <ul className="text-muted-foreground mt-4 space-y-2 text-sm">
                    {section.links.map((link) => (
                      <li key={link.title}>
                        <a
                          href={link.href}
                          className="hover:text-foreground inline-flex items-center transition-all duration-300 break-all"
                          {...(link.href.startsWith("http")
                            ? {
                                target: "_blank",
                                rel: "noopener noreferrer",
                              }
                            : {})}
                        >
                          {link.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedContainer>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}

type ViewAnimationProps = {
  delay?: number;
  className?: string;
  children: ReactNode;
};

function AnimatedContainer({ className, children }: ViewAnimationProps) {
  return <div className={className}>{children}</div>;
}
