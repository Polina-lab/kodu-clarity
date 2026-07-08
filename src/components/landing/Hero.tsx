import { useTranslation } from "react-i18next";
import { Calculator } from "./Calculator";
import logo from "@/assets/logo.svg";
import peopleHero from "@/assets/people-hero.jpg";
import { ArrowRight, CheckCircle2, Home, Phone } from "lucide-react";

export function Hero() {
  const { t } = useTranslation();
  const trustItems = String(t("hero.support")).split("•").map((item) => item.trim()).filter(Boolean);
  const scrollToContact = () => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth", block: "start" });

  return (
    <section id="top" className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-warm-gradient" />
      <div className="absolute left-0 top-0 h-40 w-40 rounded-full bg-secondary/10 blur-3xl -z-10" />
      <div className="absolute left-[8%] bottom-10 h-32 w-32 rounded-full bg-primary/10 blur-3xl -z-10 hidden lg:block" />
      {/* decorative logo watermark */}
      <img
        src={logo}
        alt=""
        aria-hidden="true"
        className="pointer-events-none select-none absolute -right-24 -bottom-24 w-[620px] max-w-[75%] opacity-[0.05] -z-10 hidden md:block"
      />
      <img
        src={logo}
        alt=""
        aria-hidden="true"
        className="pointer-events-none select-none absolute -left-16 top-10 w-[300px] opacity-[0.05] -z-10 hidden lg:block"
      />

      <div className="container mx-auto px-6 pt-10 pb-14 lg:pt-16 lg:pb-20 grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">
        <div className="fade-up text-center lg:text-left">
          <div className="inline-flex items-center gap-3 rounded-full border border-border bg-card/70 px-3 py-2 shadow-soft backdrop-blur-sm mb-5">
            <span className="size-8 rounded-full bg-primary/10 flex items-center justify-center">
              <Home className="size-4 text-primary" />
            </span>
            <span className="text-xs font-medium uppercase tracking-[0.22em] text-secondary">{t("hero.eyebrow")}</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl text-foreground leading-[1.08]">
            {t("hero.title")}
          </h1>
          <div className="mt-5 h-px w-24 bg-secondary/30 mx-auto lg:mx-0" />
          <p className="mt-5 text-base lg:text-lg text-muted-foreground max-w-xl leading-relaxed mx-auto lg:mx-0">
            {t("hero.subtitle")}
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
            <button onClick={scrollToContact} className="inline-flex items-center justify-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3 font-medium hover:bg-secondary transition-colors shadow-soft">
              {t("nav.cta")} <ArrowRight className="size-4" />
            </button>
            <a href={`tel:${t("topbar.phone")}`} className="inline-flex items-center justify-center gap-2 rounded-full bg-card/80 border border-border text-foreground px-6 py-3 font-medium hover:bg-sand transition-colors">
              <Phone className="size-4 text-primary" /> {t("topbar.phone")}
            </a>
          </div>
          <div className="mt-6 grid gap-2 text-left max-w-xl mx-auto lg:mx-0">
            {trustItems.map((item) => (
              <div key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                <CheckCircle2 className="size-4 text-secondary shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>
          <div className="mt-8 relative rounded-3xl overflow-hidden border border-border shadow-warm max-w-xl mx-auto lg:mx-0">
            <img src={peopleHero} alt="" loading="lazy" width={1280} height={960} className="w-full h-56 sm:h-64 object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/50 via-primary/10 to-transparent" />
            <div className="absolute bottom-4 left-5 right-5 flex items-center gap-3">
              <img src={logo} alt="Kodu ja Lagi" className="h-9 w-auto opacity-95 drop-shadow" />
              <span className="text-xs uppercase tracking-[0.22em] text-primary-foreground/95 drop-shadow">Kodu ja Lagi</span>
            </div>
          </div>
        </div>
        <div className="lg:pl-6">
          <Calculator />
        </div>
      </div>
    </section>
  );
}
