import { HeaderPage } from "@/components/headerPage";
import { Hero } from "@/components/hero";

export default function Home() {
  return (
    <div className="h-screen items-center justify-center bg-background">
      <HeaderPage />
      <Hero />
    </div>
  );
}
