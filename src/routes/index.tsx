import { createFileRoute } from "@tanstack/react-router";
import "@/i18n";
import { LeadProvider } from "@/lib/lead-context";
import { TopBar } from "@/components/landing/TopBar";
import { Header } from "@/components/landing/Header";
import { Hero } from "@/components/landing/Hero";
import { Services } from "@/components/landing/Services";
import { Advantages } from "@/components/landing/Advantages";
import { Portfolio } from "@/components/landing/Portfolio";
import { Process } from "@/components/landing/Process";
import { Faq } from "@/components/landing/Faq";
import { Reviews } from "@/components/landing/Reviews";
import { Contact } from "@/components/landing/Contact";
import { Footer } from "@/components/landing/Footer";
import { ScrollToTop } from "@/components/landing/ScrollToTop";
import { Toaster } from "@/components/ui/sonner";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Kodu ja Lagi — Soojad, kaasaegsed laed sinu kodusse" },
      { name: "description", content: "Pinguldatud, ripp- ja akustilised laed, valgustusega lahendused ja eritellimused. Tasuta konsultatsioon ja kuni 12-aastane garantii." },
      { property: "og:title", content: "Kodu ja Lagi — Laed, mis loovad kodutunde" },
      { property: "og:description", content: "Elegantsed laelahendused: pinguldatud, ripp-, akustilised ja eritellimuslaed kogu Eestis." },
      { property: "og:type", content: "website" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600&family=Inter:wght@400;500;600&display=swap" },
      { rel: "stylesheet", href: "https://use.typekit.net/hqc2kpp.css" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <LeadProvider>
      <div className="min-h-screen bg-background">
        <TopBar />
        <Header />
        <main>
          <Hero />
          <Services />
          <Advantages />
          <Portfolio />
          <Process />
          <Faq />
          <Reviews />
          <Contact />
        </main>
        <Footer />
        <ScrollToTop />
        <Toaster richColors position="top-center" />
      </div>
    </LeadProvider>
  );
}
