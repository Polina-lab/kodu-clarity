import { useEffect } from "react";
import { useTranslation } from "react-i18next";
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

export default function Home() {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    document.title = t("meta.home");
  }, [t, i18n.resolvedLanguage]);

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
