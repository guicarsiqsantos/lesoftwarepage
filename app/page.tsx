import { Benefits } from "@/components/benefits";
import { Contact } from "@/components/contact";
import { Features } from "@/components/features-6";
import { Footer } from "@/components/footer";
import { HeaderPage } from "@/components/headerPage";
import { Hero } from "@/components/hero";
import { Services } from "@/components/services";
import { Tecnologics } from "@/components/tecnologics";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <HeaderPage />
      <Hero />
      <Services />
      <Benefits />
      <Tecnologics />
      <Features />
      <Contact />
      <Footer />
    </div>
  );
}
