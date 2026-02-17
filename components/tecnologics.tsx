"use client";

import Image from "next/image";
import { Sparkles } from "@/components/ui/sparkles";

// Logos em public/logos: versão light (tema claro) e dark (tema escuro) – troca via CSS para evitar hydration
const LOGOS = [
  {
    name: "PostgreSQL",
    light: "PostgreSql-Black.png",
    dark: "PostgreSql-White.png",
  },
  { name: "React", light: "React-black.png", dark: "React-white.png" },
  { name: "Shadcn", light: "Shadcn-black.png", dark: "Shadcn-white.png" },
  {
    name: "TypeScript",
    light: "typescript-black.png",
    dark: "typescript-white.png",
  },
  { name: "Next.js", light: "next-black.png", dark: "next-white.png" },
  { name: "Node.js", light: "node-black.png", dark: "node-white.png" },
  { name: "Prisma", light: "prisma-black.png", dark: "prisma-white.png" },
] as const;

const imgClass = "h-8 w-auto object-contain object-center";

export function Tecnologics() {
  return (
    <div id="tecnologias" className="h-screen w-full overflow-hidden mt-24">
      <div className="mx-auto w-full max-w-4xl px-4">
        <div className="text-center text-3xl text-foreground">
          <span className="text-indigo-900 dark:text-indigo-200">
            Tecnologia que nos trabalhamos
          </span>
          <br />
          <span>Development.</span>
        </div>

        {/* Carrossel infinito – duas imagens por logo (light/dark) e CSS controla qual mostrar */}
        <div className="mt-14 w-full overflow-hidden">
          <div className="relative flex w-max animate-logos-scroll gap-12">
            {[1, 2].map((copy) => (
              <div key={copy} className="flex shrink-0 items-center gap-12">
                {LOGOS.map((logo) => (
                  <div
                    key={`${copy}-${logo.name}`}
                    className="relative flex h-12 w-24 shrink-0 items-center justify-center"
                  >
                    <Image
                      src={`/logos/${logo.light}`}
                      alt={logo.name}
                      width={96}
                      height={48}
                      className={`${imgClass} dark:hidden`}
                    />
                    <Image
                      src={`/logos/${logo.dark}`}
                      alt={logo.name}
                      width={96}
                      height={48}
                      className={`${imgClass} hidden dark:block`}
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="relative -mt-32 h-96 w-full overflow-hidden mask-[radial-gradient(50%_50%,white,transparent)]">
        <div className="absolute inset-0 before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_bottom_center,#f1f1f1f1,transparent_70%)] before:opacity-40" />
        <div className="absolute -left-1/2 top-1/2 aspect-[1/0.7] z-10 w-[200%] rounded-[100%] border-t border-zinc-900/20 dark:border-white/20 bg-white dark:bg-zinc-900" />
        <Sparkles
          density={1200}
          className="absolute inset-x-0 bottom-0 h-full w-full mask-[radial-gradient(50%_50%,white,transparent_85%)]"
        />
      </div>
    </div>
  );
}
