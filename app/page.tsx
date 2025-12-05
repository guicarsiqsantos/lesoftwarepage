import { HeaderPage } from "@/components/headerPage";
import { Hero } from "@/components/hero";
import { Tecnologics } from "@/components/tecnologics";

export default function Home() {
  return (
    <div className="h-screen items-center justify-center bg-background">
      <HeaderPage />
      <Hero />
      <Tecnologics />
    </div>
  );
}
