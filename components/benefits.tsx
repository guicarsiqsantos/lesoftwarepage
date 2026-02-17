"use client";

import { Target, Clock, Shield, TrendingUp } from "lucide-react";
import { BentoGrid, type BentoItem } from "@/components/ui/bento-grid";

const benefitsItems: BentoItem[] = [
  {
    title: "Foco em resultados",
    meta: "Métricas reais",
    description:
      "Cada projeto é pensado para entregar valor real e métricas concretas ao seu negócio.",
    icon: <Target className="h-5 w-5 text-primary" />,
    status: "Destaque",
    tags: ["Resultados", "Métricas", "Objetivos"],
  },
  {
    title: "Entrega no prazo",
    meta: "Transparência total",
    description:
      "Metodologia organizada para você acompanhar cada etapa do projeto.",
    icon: <Clock className="h-5 w-5 text-primary" />,
    status: "Atualizado",
    tags: ["Prazo", "Transparência", "Metodologia"],
  },
  {
    title: "Qualidade garantida",
    meta: "Código e testes",
    description:
      "Código limpo, testes e documentação para sistemas estáveis e fáceis de evoluir.",
    icon: <Shield className="h-5 w-5 text-primary" />,
    status: "Ativo",
    tags: ["Qualidade", "Testes", "Documentação"],
  },
  {
    title: "Soluções escaláveis",
    meta: "Crescimento",
    description:
      "Soluções preparadas para crescer junto com sua empresa, sem refazer do zero.",
    icon: <TrendingUp className="h-5 w-5 text-primary" />,
    status: "Ativo",
    tags: ["Escalabilidade", "Crescimento", "Tecnologia"],
  },
];

export function Benefits() {
  return (
    <section
      id="beneficios"
      className="relative w-full overflow-hidden border-t border-border/50 bg-background py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl mb-16 text-center">
          <h2 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl">
            Feito para atender suas necessidades
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            Desenvolvemos com foco em qualidade, prazo e um relacionamento
            transparente. Cada projeto é tratado com a seriedade que sua empresa
            merece.
          </p>
        </div>

        <BentoGrid items={benefitsItems} gridCols={2} />
      </div>
    </section>
  );
}
