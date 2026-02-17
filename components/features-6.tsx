import { Cpu, Lock, Sparkles, Zap } from "lucide-react";

export function Features() {
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-5xl space-y-12 px-6">
        <div className="relative z-10 grid items-center gap-4 md:grid-cols-2 md:gap-12">
          <h2 className="text-4xl font-semibold">
            Qualidade em nosso desenvolvimento
          </h2>
          <p className="max-w-sm sm:ml-auto text-muted-foreground">
            Sistemas com boas práticas, código limpo e entrega que faz a
            diferença no seu negócio.
          </p>
        </div>
        <div className="relative rounded-3xl p-3 md:-mx-8 lg:col-span-3">
          <div className="aspect-[88/36] relative">
            <div className="bg-gradient-to-t z-1 from-background absolute inset-0 to-transparent"></div>
            <img
              src="https://tailark.com/_next/image?url=%2Fmail-upper.png&w=3840&q=75"
              className="absolute inset-0 z-10"
              alt="payments illustration dark"
              width={2797}
              height={1137}
            />
            <img
              src="https://tailark.com/_next/image?url=%2Fmail-back.png&w=3840&q=75"
              className="hidden dark:block"
              alt="payments illustration dark"
              width={2797}
              height={1137}
            />
            <img
              src="https://tailark.com/_next/image?url=%2Fmail-back-light.png&w=3840&q=75
"
              className="dark:hidden"
              alt="payments illustration light"
              width={2797}
              height={1137}
            />
          </div>
        </div>
        <div className="relative mx-auto grid grid-cols-2 gap-x-3 gap-y-6 sm:gap-8 lg:grid-cols-4">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Zap className="size-4 text-primary" />
              <h3 className="text-sm font-medium">Performance</h3>
            </div>
            <p className="text-muted-foreground text-sm">
              Sistemas rápidos e otimizados para não travar no dia a dia da sua
              empresa.
            </p>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Cpu className="size-4 text-primary" />
              <h3 className="text-sm font-medium">Sólido e escalável</h3>
            </div>
            <p className="text-muted-foreground text-sm">
              Arquitetura pensada para crescer com você, sem precisar refazer do
              zero.
            </p>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Lock className="size-4 text-primary" />
              <h3 className="text-sm font-medium">Segurança</h3>
            </div>
            <p className="text-muted-foreground text-sm">
              Desenvolvimento seguro: boas práticas, dados protegidos e
              conformidade em foco.
            </p>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Sparkles className="size-4 text-primary" />
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
