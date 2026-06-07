import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Why } from "@/components/site/Why";
import { Services } from "@/components/site/Services";
import { Testimonials } from "@/components/site/Testimonials";
import { Gallery } from "@/components/site/Gallery";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { FloatingCTA } from "@/components/site/FloatingCTA";
import { Toaster } from "@/components/ui/sonner";
import { useReveal } from "@/hooks/useReveal";

const title = "Sportovní masáže Brno — Jiří Fanta | Regenerace";
const description =
  "Sportovní masáže od Jiřího Fanty v Brně. 7+ let praxe se sportovci Dukly Brno a olympioniky. Regenerace, příprava na závod, masáž po výkonu.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "LocalBusiness",
              "@id": "https://jirifanta.lovable.app/#provozovna-piky",
              name: "Jiří Fanta — Sportovní masáže (Třída Generála Píky)",
              description,
              telephone: "+420733151249",
              email: "fantajiri@email.cz",
              image: "https://jirifanta.lovable.app/og-image.png",
              url: "https://jirifanta.lovable.app/",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Třída Generála Píky 4",
                postalCode: "613 00",
                addressLocality: "Brno",
                addressCountry: "CZ",
              },
            },
            {
              "@type": "LocalBusiness",
              "@id": "https://jirifanta.lovable.app/#provozovna-lesna",
              name: "Jiří Fanta — Sportovní masáže (Poliklinika Lesná)",
              description,
              telephone: "+420733151249",
              email: "fantajiri@email.cz",
              image: "https://jirifanta.lovable.app/og-image.png",
              url: "https://jirifanta.lovable.app/",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Halasovo náměstí 597/1",
                postalCode: "638 00",
                addressLocality: "Brno – Lesná",
                addressCountry: "CZ",
              },
            },
          ],
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  useReveal();
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <About />
      <Why />
      <Services />
      <Testimonials />
      <Gallery />
      <Contact />
      <Footer />
      <FloatingCTA />
      <Toaster theme="dark" position="top-center" />
    </main>
  );
}
