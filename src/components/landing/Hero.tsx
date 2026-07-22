import { useTranslation } from "react-i18next";
import { Calculator } from "./Calculator";
import peopleHero from "@/assets/people-hero4.jpg";
import { ArrowRight, CheckCircle2, Phone } from "lucide-react";

export function Hero() {
  const { t } = useTranslation();
  const trustItems = String(t("hero.support")).split("•").map((item) => item.trim()).filter(Boolean);
  const scrollToContact = () => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth", block: "start" });

  return (
    <section id="top" className="relative overflow-hidden isolate">
      {/* Full-bleed hero photo */}
      <div className="absolute bottom-0 left-0 w-[100%] h-[100%] -z-20 overflow-hidden">
        <img
          src={peopleHero}
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover"
          style={{ objectPosition: "top right" }}
        />
      </div>
      {/* Soft top-to-bottom overlay so upper text/calc area stays legible while faces below remain visible */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#1a0f08]/75 via-[#1a0f08]/25 to-transparent" />
      {/* Warm glow accents (LED-inspired) */}
      <div className="pointer-events-none absolute -top-20 -left-20 h-96 w-96 rounded-full bg-amber-300/25 blur-[120px] -z-10" />
      <div className="pointer-events-none absolute -top-10 right-0 h-80 w-80 rounded-full bg-orange-400/15 blur-[130px] -z-10" />

      <div className="container mx-auto px-6 pt-14 pb-[2rem] lg:pt-20 lg:pb-[2rem] grid lg:grid-cols-2 gap-10 lg:gap-14 items-start">
        <div className="fade-up text-center lg:text-left text-primary-foreground">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl leading-[1.08] drop-shadow-[0_2px_20px_rgba(0,0,0,0.45)]">
            {t("hero.title")}
          </h1>
          <div className="mt-5 h-px w-24 bg-amber-200/60 mx-auto lg:mx-0" />
          <p className="mt-5 text-base lg:text-lg text-white/90 max-w-xl leading-relaxed mx-auto lg:mx-0 drop-shadow-[0_1px_10px_rgba(0,0,0,0.4)]">
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
          <div className="mt-7 flex flex-wrap gap-x-6 gap-y-2 justify-center lg:justify-start">
            {trustItems.map((item) => (
              <div key={item} className="flex items-center gap-2 text-sm text-white/90 drop-shadow-[0_1px_6px_rgba(0,0,0,0.5)]">
                <CheckCircle2 className="size-4 text-amber-200 shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="lg:pl-4">
          <Calculator glass />
        </div>
      </div>
    </section>
  );
}
