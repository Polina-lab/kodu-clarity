import { useTranslation } from "react-i18next";
import { Link } from "@tanstack/react-router";
import { TopBar } from "@/components/landing/TopBar";
import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import { ScrollToTop } from "@/components/landing/ScrollToTop";
import { LeadProvider } from "@/lib/lead-context";
import { Toaster } from "@/components/ui/sonner";
import { ArrowLeft } from "lucide-react";

type Section = { h: string; p: string };

export function LegalPage({ slug }: { slug: "privacy" | "cookies" | "terms" }) {
  const { t } = useTranslation();
  const sections = t(`legal.${slug}.sections`, { returnObjects: true }) as Section[];

  return (
    <LeadProvider>
      <div className="min-h-screen bg-background">
        <TopBar />
        <Header />
        <main className="bg-hearth-gradient">
          <article className="container mx-auto px-6 py-16 lg:py-24 max-w-3xl">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-sm text-secondary hover:text-primary transition-colors mb-8"
            >
              <ArrowLeft className="size-4" />
              {t("legal.back")}
            </Link>
            <h1 className="text-4xl sm:text-5xl text-foreground leading-tight">
              {t(`legal.${slug}.title`)}
            </h1>
            <p className="mt-3 text-sm text-muted-foreground">{t(`legal.${slug}.updated`)}</p>

            <div className="mt-10 space-y-8">
              {Array.isArray(sections) &&
                sections.map((s, i) => (
                  <section key={i} className="bg-card border border-border rounded-2xl p-6 sm:p-8 shadow-soft">
                    <h2 className="text-2xl text-foreground mb-3">{s.h}</h2>
                    <p className="text-foreground/80 leading-relaxed whitespace-pre-line">{s.p}</p>
                  </section>
                ))}
            </div>
          </article>
        </main>
        <Footer />
        <ScrollToTop />
        <Toaster richColors position="top-center" />
      </div>
    </LeadProvider>
  );
}
