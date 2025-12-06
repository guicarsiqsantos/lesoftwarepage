import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { HeaderPage } from "@/components/headerPage";
import { Hero } from "@/components/hero";
import { Services } from "@/components/services";
import { Tecnologics } from "@/components/tecnologics";

export default function Home() {
  return (
    <div className="h-screen items-center justify-center bg-background">
      <HeaderPage />
      <Hero />
      <Services />
      <Tecnologics />
      <Contact />
      <Footer />
    </div>
  );
}
