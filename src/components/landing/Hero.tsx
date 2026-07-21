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
    <section id="top" className="relative overflow-hidden isolate">
      {/* Full-bleed hero photo */}
      <div className="absolute inset-0 -z-20">
        <img
          src={peopleHero}
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover object-center"
        />
      </div>
      {/* Warm dark gradient overlay for legibility */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#2a1a10]/85 via-[#2a1a10]/55 to-transparent" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#1a0f08]/70 via-transparent to-[#1a0f08]/20" />
      {/* Warm glow accents (LED-inspired) */}
      <div className="pointer-events-none absolute -top-20 -left-20 h-96 w-96 rounded-full bg-amber-300/25 blur-[120px] -z-10" />
      <div className="pointer-events-none absolute bottom-10 right-1/3 h-80 w-80 rounded-full bg-orange-400/15 blur-[130px] -z-10" />

      <div className="container mx-auto px-6 pt-16 pb-20 lg:pt-24 lg:pb-28 grid lg:grid-cols-2 gap-10 lg:gap-14 items-center min-h-[640px]">
        <div className="fade-up text-center lg:text-left text-primary-foreground">
          <div className="inline-flex items-center gap-3 rounded-full border border-white/25 bg-white/10 backdrop-blur-md px-3 py-2 shadow-soft mb-5">
            <span className="size-8 rounded-full bg-amber-300/30 flex items-center justify-center">
              <Home className="size-4 text-amber-100" />
            </span>
            <span className="text-xs font-medium uppercase tracking-[0.22em] text-amber-100">{t("hero.eyebrow")}</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl leading-[1.08] drop-shadow-[0_2px_20px_rgba(0,0,0,0.35)]">
            {t("hero.title")}
          </h1>
          <div className="mt-5 h-px w-24 bg-amber-200/60 mx-auto lg:mx-0" />
          <p className="mt-5 text-base lg:text-lg text-white/85 max-w-xl leading-relaxed mx-auto lg:mx-0">
            {t("hero.subtitle")}
          </p>
          <div className="mt-7 flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
            <button
              onClick={scrollToContact}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary text-primary-foreground px-7 py-3.5 font-medium hover:bg-secondary transition-all shadow-[0_10px_30px_-8px_rgba(232,140,80,0.55)] hover:shadow-[0_14px_40px_-8px_rgba(232,140,80,0.7)]"
            >
              {t("nav.cta")} <ArrowRight className="size-4" />
            </button>
            <a
              href={`tel:${t("topbar.phone")}`}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white/12 backdrop-blur-md border border-white/30 text-white px-7 py-3.5 font-medium hover:bg-white/20 transition-colors"
            >
              <Phone className="size-4 text-amber-200" /> {t("topbar.phone")}
            </a>
          </div>
          <div className="mt-7 grid gap-2 text-left max-w-xl mx-auto lg:mx-0">
            {trustItems.map((item) => (
              <div key={item} className="flex items-center gap-2 text-sm text-white/85">
                <CheckCircle2 className="size-4 text-amber-200 shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>
          <div className="mt-8 hidden lg:flex items-center gap-3 opacity-90">
            <img src={logo} alt="Kodu ja Lagi" className="h-8 w-auto drop-shadow" />
            <span className="text-xs uppercase tracking-[0.22em] text-white/80">Kodu ja Lagi</span>
          </div>
        </div>
        <div className="lg:pl-4">
          <Calculator glass />
        </div>
      </div>
    </section>
  );
}
