import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { AnimatedGroup } from "./ui/animationGroup";
import { Button } from "./ui/button";
import Image from "next/image";
import mail2 from "../public/mail2.webp";
import mail2Light from "../public/mail2-light.webp";
import { siteConfig } from "@/lib/site";

export function Hero() {
  return (
    <div className="overflow-x-hidden">
      <div
        aria-hidden
        className="z-2 absolute inset-0 pointer-events-none isolate opacity-50 contain-strict hidden lg:block overflow-hidden"
      >
        <div className="w-140 h-320 -translate-y-[350px] absolute left-0 top-0 -rotate-45 rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,hsla(0,0%,85%,.08)_0,hsla(0,0%,55%,.02)_50%,hsla(0,0%,45%,0)_80%)]" />
        <div className="h-320 absolute left-0 top-0 w-56 -rotate-45 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.06)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)] [translate:5%_-50%]" />
        <div className="h-320 -translate-y-[350px] absolute left-0 top-0 w-56 -rotate-45 bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.04)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)]" />
      </div>
      <div className="hidden lg:flex gap-40 rotate-[-20deg] absolute -top-160 -right-120 z-0 blur-[6rem] skew-[-40deg] opacity-55 pointer-events-none overflow-hidden">
        <div className="w-56 h-120 bg-linear-90 from-white to-blue-300"></div>
        <div className="w-56 h-120 bg-linear-90 from-white to-blue-300"></div>
      </div>
      <div className="hidden lg:flex gap-40 rotate-[-20deg] absolute -top-200 -right-160 z-0 blur-[6rem] skew-[-40deg] opacity-55 pointer-events-none overflow-hidden">
        <div className="w-56 h-120 bg-linear-90 from-white to-blue-300"></div>
        <div className="w-56 h-120 bg-linear-90 from-white to-blue-300"></div>
        <div className="w-56 h-120 bg-linear-90 from-white to-blue-300"></div>
      </div>
      <div className="hidden lg:flex gap-40 rotate-[-20deg] absolute -top-240 -right-240 z-0 blur-[6rem] skew-[-40deg] opacity-55 pointer-events-none overflow-hidden">
        <div className="w-56 h-160 bg-linear-90 from-white to-blue-300"></div>
        <div className="w-56 h-160 bg-linear-90 from-white to-blue-300"></div>
        <div className="w-56 h-160 bg-linear-90 from-white to-blue-300"></div>
      </div>
      <section id="hero" aria-labelledby="hero-heading">
        <div className="relative pt-24 md:pt-36">
          <div
            aria-hidden
            className="absolute inset-0 -z-10 size-full [background:radial-gradient(125%_125%_at_50%_100%,transparent_0%,var(--background)_75%)]"
          />
          <div className="mx-auto max-w-7xl px-6">
            <div className="text-center sm:mx-auto lg:mr-auto lg:mt-0">
              <AnimatedGroup>
                <span className="hover:bg-background dark:hover:border-t-border bg-muted group mx-auto flex w-fit cursor-default items-center gap-4 rounded-full border p-1 pl-4 shadow-md shadow-black/5 transition-all duration-300 dark:border-t-white/5 dark:shadow-zinc-950">
                  <span className="text-foreground text-sm">
                    {siteConfig.tagline}
                  </span>
                  <span className="dark:border-background block h-4 w-0.5 border-l bg-white dark:bg-zinc-700"></span>

                  <div className="bg-background group-hover:bg-muted size-6 overflow-hidden rounded-full duration-500">
                    <div className="flex w-12 -translate-x-1/2 duration-500 ease-in-out group-hover:translate-x-0">
                      <span className="flex size-6">
                        <ArrowRight className="m-auto size-3" />
                      </span>
                      <span className="flex size-6">
                        <ArrowRight className="m-auto size-3" />
                      </span>
                    </div>
                  </div>
                </span>

                <h1
                  id="hero-heading"
                  className="mt-8 max-w-5xl mx-auto text-balance text-4xl font-semibold md:text-6xl lg:mt-16 xl:text-7xl"
                >
                  Desenvolvimento de software sob medida para transformar seu
                  negócio
                </h1>
                <p className="mx-auto mt-8 max-w-2xl text-balance text-lg text-muted-foreground">
                  Criamos sistemas web, aplicativos, integrações e automações
                  desenvolvidas de acordo com os processos e objetivos da sua
                  empresa.
                </p>
              </AnimatedGroup>

              <AnimatedGroup
                variants={{
                  container: {
                    visible: {
                      transition: {
                        staggerChildren: 0.05,
                        delayChildren: 0.75,
                      },
                    },
                  },
                }}
                className="mt-12 flex flex-col items-center justify-center gap-2 md:flex-row"
              >
                <div className="bg-foreground/10 rounded-[14px] border p-0.5">
                  <Button
                    asChild
                    size="lg"
                    className="rounded-xl px-5 text-base"
                  >
                    <Link href="#contato">
                      <span className="text-nowrap">Fale conosco</span>
                    </Link>
                  </Button>
                </div>
                <Button
                  asChild
                  size="lg"
                  variant="ghost"
                  className="h-10.5 rounded-xl px-5"
                >
                  <Link href="#servicos">
                    <span className="text-nowrap">Conheça nossos serviços</span>
                  </Link>
                </Button>
              </AnimatedGroup>
            </div>
          </div>

          <AnimatedGroup
            variants={{
              container: {
                visible: {
                  transition: {
                    staggerChildren: 0.05,
                    delayChildren: 0.75,
                  },
                },
              },
            }}
          >
            <div className="relative -mr-56 mt-8 overflow-hidden px-2 sm:mr-0 sm:mt-12 md:mt-20 pb-16 md:pb-24">
              <div
                aria-hidden
                className="bg-linear-to-b to-background absolute inset-0 z-10 from-transparent from-35%"
              />
              <div className="inset-shadow-2xs ring-background dark:inset-shadow-white/20 bg-background relative mx-auto max-w-6xl overflow-hidden rounded-2xl border p-4 shadow-lg shadow-zinc-950/15 ring-1">
                <Image
                  className="bg-background aspect-15/8 relative hidden rounded-2xl dark:block"
                  src={mail2}
                  alt="Painel de um sistema web desenvolvido pela Lesoftware"
                  quality={90}
                  width={2700}
                  height={1440}
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1152px"
                />
                <Image
                  className="z-2 border-border/25 aspect-15/8 relative rounded-2xl border dark:hidden"
                  src={mail2Light}
                  alt="Painel de um sistema web desenvolvido pela Lesoftware"
                  quality={90}
                  width={2700}
                  height={1440}
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1152px"
                />
              </div>
            </div>
          </AnimatedGroup>
        </div>
      </section>
    </div>
  );
}
