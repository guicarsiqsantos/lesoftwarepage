"use client";

import {
  Code,
  Smartphone,
  ShoppingCart,
  Database,
  Zap,
  Shield,
} from "lucide-react";
import { AnimatedGroup } from "./ui/animationGroup";
import { motion } from "framer-motion";

const services = [
  {
    icon: Code,
    title: "Desenvolvimento Web",
    description:
      "Sites modernos e responsivos para gerar resultados reais para sua empresa.",
  },
  {
    icon: Smartphone,
    title: "Apps Mobile",
    description:
      "Aplicativos para Android e iOS com design fluido e excelente usabilidade.",
  },
  {
    icon: ShoppingCart,
    title: "E-commerce",
    description:
      "Lojas virtuais completas com gestão, pagamento e integração eficiente.",
  },
  {
    icon: Database,
    title: "Sistemas Corporativos",
    description:
      "Automatize seus processos com sistemas sob medida que otimizam seu negócio.",
  },
  {
    icon: Zap,
    title: "Automação",
    description:
      "Reduza tarefas manuais e aumente a eficiência com soluções inteligentes.",
  },
  {
    icon: Shield,
    title: "Segurança Digital",
    description:
      "Proteja seus dados com sistemas robustos e segurança de alto nível.",
  },
];

export function Services() {
  return (
    <section id="servicos" className="relative w-full overflow-hidden pb-24 md:pb-32">
      <div className="mx-auto max-w-7xl px-6">
        <AnimatedGroup className="mb-16 text-center">
          <h2 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl">
            Nossos Serviços
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            Soluções tecnológicas sob medida para impulsionar o crescimento da
            sua empresa.
          </p>
        </AnimatedGroup>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({
  service,
  index,
}: {
  service: (typeof services)[0];
  index: number;
}) {
  const Icon = service.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative"
    >
      <div className="relative h-full rounded-2xl border border-border bg-card p-8 transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 dark:hover:shadow-primary/10">
        {/* Efeito de brilho sutil no hover */}
        <div className="absolute inset-0 rounded-2xl bg-linear-to-br from-primary/0 via-primary/0 to-primary/0 opacity-0 transition-opacity duration-300 group-hover:opacity-5" />

        {/* Ícone */}
        <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all duration-300 group-hover:scale-110 group-hover:bg-primary/20">
          <Icon className="h-7 w-7" strokeWidth={2} />
        </div>

        {/* Conteúdo */}
        <h3 className="mb-3 text-xl font-semibold text-foreground">
          {service.title}
        </h3>
        <p className="text-sm leading-relaxed text-muted-foreground">
          {service.description}
        </p>

        {/* Linha decorativa sutil */}
        <div className="absolute bottom-0 left-0 h-0.5 w-0 rounded-b-2xl bg-primary transition-all duration-300 group-hover:w-full" />
      </div>
    </motion.div>
  );
}
