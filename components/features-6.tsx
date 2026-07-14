import Image from "next/image";
import { Cpu, Lock, Sparkles, Zap } from "lucide-react";
import mail2 from "../public/mail2.webp";
import mail2Light from "../public/mail2-light.webp";

export function Features() {
  return (
    <section
      id="qualidade"
      aria-labelledby="qualidade-heading"
      className="py-24 md:py-32"
    >
      <div className="mx-auto max-w-5xl space-y-12 px-6">
        <div className="relative z-10 grid items-center gap-4 md:grid-cols-2 md:gap-12">
          <h2 id="qualidade-heading" className="text-4xl font-semibold">
            Qualidade em nosso desenvolvimento
          </h2>
          <p className="max-w-sm sm:ml-auto text-muted-foreground">
            Sistemas com boas práticas, código limpo e entrega que faz a
            diferença no seu negócio.
          </p>
        </div>
        <div className="relative rounded-3xl p-3 md:-mx-8 lg:col-span-3">
          <div className="aspect-88/36 relative overflow-hidden rounded-2xl">
            <div
              aria-hidden
              className="bg-linear-to-t z-1 from-background absolute inset-0 to-transparent"
            />
            <Image
              src={mail2}
              alt="Interface de sistema desenvolvido pela Lesoftware em tema escuro"
              className="absolute inset-0 hidden h-full w-full object-cover object-top dark:block"
              sizes="(max-width: 1024px) 100vw, 1024px"
              placeholder="blur"
            />
            <Image
              src={mail2Light}
              alt="Interface de sistema desenvolvido pela Lesoftware em tema claro"
              className="absolute inset-0 h-full w-full object-cover object-top dark:hidden"
              sizes="(max-width: 1024px) 100vw, 1024px"
              placeholder="blur"
            />
          </div>
        </div>
        <div className="relative mx-auto grid grid-cols-2 gap-x-3 gap-y-6 sm:gap-8 lg:grid-cols-4">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Zap className="size-4 text-primary" aria-hidden />
              <h3 className="text-sm font-medium">Performance</h3>
            </div>
            <p className="text-muted-foreground text-sm">
              Sistemas rápidos e otimizados para não travar no dia a dia da sua
              empresa.
            </p>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Cpu className="size-4 text-primary" aria-hidden />
              <h3 className="text-sm font-medium">Sólido e escalável</h3>
            </div>
            <p className="text-muted-foreground text-sm">
              Arquitetura pensada para crescer com você, sem precisar refazer do
              zero.
            </p>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Lock className="size-4 text-primary" aria-hidden />
              <h3 className="text-sm font-medium">Segurança</h3>
            </div>
            <p className="text-muted-foreground text-sm">
              Desenvolvimento seguro: boas práticas, dados protegidos e
              conformidade em foco.
            </p>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Sparkles className="size-4 text-primary" aria-hidden />
              <h3 className="text-sm font-medium">Excelência</h3>
            </div>
            <p className="text-muted-foreground text-sm">
              Código limpo, testado e documentado para manutenção e evolução sem
              dor de cabeça.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
