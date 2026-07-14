import Link from "next/link";
import { Logo } from "@/components/ui/logo";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-8 bg-background px-6 text-center">
      <Logo />
      <div className="space-y-3">
        <p className="text-sm font-medium text-primary">Erro 404</p>
        <h1 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
          Página não encontrada
        </h1>
        <p className="mx-auto max-w-md text-muted-foreground">
          O endereço que você acessou não existe ou foi movido. Volte para a
          página inicial da {siteConfig.name} e continue navegando.
        </p>
      </div>
      <Button asChild size="lg" className="rounded-xl">
        <Link href="/">Voltar para o início</Link>
      </Button>
    </div>
  );
}
