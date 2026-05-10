import { useTranslation } from "react-i18next";
import { Calculator } from "./Calculator";
import hero from "@/assets/hero.jpg";

export function Hero() {
  const { t } = useTranslation();
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-warm-gradient" />
      <div className="container mx-auto px-6 pt-12 pb-20 lg:pt-20 lg:pb-28 grid lg:grid-cols-2 gap-12 items-center">
        <div className="fade-up">
          <span className="inline-block text-xs font-medium uppercase tracking-[0.2em] text-secondary mb-5">
            {t("hero.eyebrow")}
          </span>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl text-foreground leading-[1.05]">
            {t("hero.title")}
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed">
            {t("hero.subtitle")}
          </p>
          <p className="mt-4 text-sm text-secondary font-medium">{t("hero.support")}</p>

          <div className="mt-10 relative rounded-3xl overflow-hidden shadow-warm border border-border">
            <img src={hero} alt="Cozy modern ceiling" width={1600} height={1024} className="w-full h-auto" />
          </div>
        </div>
        <div className="lg:pl-8">
          <Calculator />
        </div>
      </div>
    </section>
  );
}
