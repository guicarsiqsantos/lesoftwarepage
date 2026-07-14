import { Benefits } from "@/components/benefits";
import { Contact } from "@/components/contact";
import { Features } from "@/components/features-6";
import { Footer } from "@/components/footer";
import { HeaderPage } from "@/components/headerPage";
import { Hero } from "@/components/hero";
import { Services } from "@/components/services";
import { Tecnologics } from "@/components/tecnologics";
import { absoluteUrl, siteConfig } from "@/lib/site";

const organizationId = `${siteConfig.siteUrl}/#organization`;
const websiteId = `${siteConfig.siteUrl}/#website`;

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": organizationId,
      name: siteConfig.name,
      legalName: siteConfig.legalName,
      url: siteConfig.siteUrl,
      logo: absoluteUrl(siteConfig.logoPath),
      email: siteConfig.email,
      telephone: siteConfig.telephoneInternational,
      description: siteConfig.description,
      address: {
        "@type": "PostalAddress",
        streetAddress: siteConfig.address.streetAddress,
        addressLocality: siteConfig.address.addressLocality,
        addressRegion: siteConfig.address.addressRegion,
        postalCode: siteConfig.address.postalCode,
        addressCountry: siteConfig.address.addressCountry,
      },
      areaServed: {
        "@type": "Country",
        name: "Brasil",
      },
      ...(siteConfig.socialLinks.length > 0
        ? { sameAs: [...siteConfig.socialLinks] }
        : {}),
    },
    {
      "@type": "WebSite",
      "@id": websiteId,
      url: siteConfig.siteUrl,
      name: siteConfig.name,
      description: siteConfig.description,
      inLanguage: siteConfig.language,
      publisher: {
        "@id": organizationId,
      },
    },
    {
      "@type": "OfferCatalog",
      "@id": `${siteConfig.siteUrl}/#services`,
      name: "Serviços Lesoftware",
      itemListElement: siteConfig.services.map((service, index) => ({
        "@type": "Offer",
        position: index + 1,
        itemOffered: {
          "@type": "Service",
          name: service.name,
          description: service.description,
          provider: {
            "@id": organizationId,
          },
          areaServed: {
            "@type": "Country",
            name: "Brasil",
          },
        },
      })),
    },
  ],
};

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <HeaderPage />
      <main id="conteudo-principal">
        <Hero />
        <Services />
        <Features />
        <Tecnologics />
        <Benefits />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
