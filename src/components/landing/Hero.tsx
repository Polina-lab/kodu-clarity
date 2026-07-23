import { useTranslation } from "react-i18next";
import { Calculator } from "./Calculator";
import peopleHero from "@/assets/people-hero4.jpg";
import { ArrowRight, CheckCircle2, Phone } from "lucide-react";

export function Hero() {
  const { t } = useTranslation();
  const trustItems = String(t("hero.support")).split("•").map((item) => item.trim()).filter(Boolean);
  const scrollToContact = () => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth", block: "start" });

  return (
    <section id="top" className="relative isolate overflow-hidden bg-background">
      {/* Photo — desktop: full-bleed background. Mobile: fills only the top hero area. */}
      <div className="absolute top-0 left-0 right-0 h-[78vh] lg:h-full -z-20 overflow-hidden">
        <img
          src={peopleHero}
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover"
          style={{ objectPosition: "left bottom" }}
        />
      </div>
      {/* Desktop overlays: subtle darken on right for calc legibility */}
      <div className="hidden lg:block absolute inset-0 -z-10 bg-gradient-to-r from-[#1a0f08]/45 via-[#1a0f08]/20 to-[#1a0f08]/55" />
      <div className="hidden lg:block absolute inset-0 -z-10 bg-gradient-to-b from-[#1a0f08]/30 via-transparent to-[#1a0f08]/40" />
      {/* Mobile overlays: darken top area behind centered text */}
      <div className="lg:hidden absolute top-0 left-0 right-0 h-[78vh] -z-10 bg-gradient-to-b from-[#1a0f08]/75 via-[#1a0f08]/35 to-transparent" />
      {/* Mobile: fade image bottom into solid background before calculator */}
      <div className="lg:hidden absolute left-0 right-0 -z-10 pointer-events-none"
           style={{ top: "calc(78vh - 8rem)", height: "8rem", background: "linear-gradient(to bottom, transparent, var(--background))" }} />

      {/* Warm glow accents */}
      <div className="pointer-events-none absolute -top-20 -left-20 h-96 w-96 rounded-full bg-amber-300/25 blur-[120px] -z-10" />
      <div className="pointer-events-none absolute -top-10 right-0 h-80 w-80 rounded-full bg-orange-400/15 blur-[130px] -z-10" />

      <div className="container mx-auto px-6 pt-8 lg:pt-14 pb-8 lg:pb-12 relative">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-14 items-stretch">
          {/* LEFT column */}
          {/* Mobile: centered text over photo (no badges on mobile), then empty space showing faces */}
          <div className="fade-up lg:hidden text-center text-primary-foreground min-h-[46vh] flex flex-col items-center pt-4">
            <h1 className="text-4xl sm:text-5xl leading-[1.08] drop-shadow-[0_2px_20px_rgba(0,0,0,0.5)]">
              {t("hero.title")}
            </h1>
            <div className="mt-5 h-px w-24 bg-amber-200/60" />
            <p className="mt-5 text-base text-white/90 max-w-xl leading-relaxed drop-shadow-[0_1px_10px_rgba(0,0,0,0.45)]">
              {t("hero.subtitle")}
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3 items-center">
              <button onClick={scrollToContact}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-primary text-primary-foreground px-7 py-3.5 font-medium hover:bg-secondary transition-all shadow-[0_10px_30px_-8px_rgba(232,140,80,0.55)]">
                {t("nav.cta")} <ArrowRight className="size-4" />
              </button>
              <a href={`tel:${t("topbar.phone")}`}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white/12 backdrop-blur-md border border-white/30 text-white px-7 py-3.5 font-medium hover:bg-white/20 transition-colors">
                <Phone className="size-4 text-amber-200" /> {t("topbar.phone")}
              </a>
            </div>
          </div>

          {/* Desktop LEFT: CTA buttons at top-left, badges pinned to bottom-left */}
          <div className="hidden lg:flex fade-up flex-col justify-between min-h-[70vh]">
            <div className="flex flex-wrap gap-3">
              <button onClick={scrollToContact}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3 font-medium hover:bg-secondary transition-all shadow-[0_10px_30px_-8px_rgba(232,140,80,0.55)]">
                {t("nav.cta")} <ArrowRight className="size-4" />
              </button>
              <a href={`tel:${t("topbar.phone")}`}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white/15 backdrop-blur-md border border-white/30 text-white px-6 py-3 font-medium hover:bg-white/25 transition-colors">
                <Phone className="size-4 text-amber-200" /> {t("topbar.phone")}
              </a>
            </div>
            <div className="flex flex-wrap gap-2 max-w-md">
              {trustItems.map((item) => (
                <span
                  key={item}
                  className="inline-flex items-center gap-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/25 px-3.5 py-1.5 text-xs sm:text-sm text-white drop-shadow-[0_1px_6px_rgba(0,0,0,0.5)]"
                >
                  <CheckCircle2 className="size-3.5 text-amber-200 shrink-0" />
                  <span>{item}</span>
                </span>
              ))}
            </div>
          </div>

          {/* RIGHT column: title, description, calculator */}
          <div className="lg:col-start-2 lg:pl-4 space-y-5">
            <div className="hidden lg:block fade-up text-left text-primary-foreground">
              <h1 className="text-4xl lg:text-5xl xl:text-6xl leading-[1.08] drop-shadow-[0_2px_20px_rgba(0,0,0,0.5)]">
                {t("hero.title")}
              </h1>
              <div className="mt-4 h-px w-24 bg-amber-200/60" />
              <p className="mt-4 text-base lg:text-lg text-white/90 max-w-xl leading-relaxed drop-shadow-[0_1px_10px_rgba(0,0,0,0.45)]">
                {t("hero.subtitle")}
              </p>
            </div>
            <Calculator glass />
          </div>
        </div>
      </div>
    </section>
  );
}
