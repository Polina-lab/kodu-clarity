import { useTranslation } from "react-i18next";
import { Calculator } from "./Calculator";
import logo from "@/assets/logo.svg";

export function Hero() {
  const { t } = useTranslation();
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-warm-gradient" />
      {/* decorative logo watermark */}
      <img
        src={logo}
        alt=""
        aria-hidden="true"
        className="pointer-events-none select-none absolute -right-24 -bottom-24 w-[700px] max-w-[80%] opacity-[0.045] -z-10 hidden md:block"
      />
      <img
        src={logo}
        alt=""
        aria-hidden="true"
        className="pointer-events-none select-none absolute -left-16 top-10 w-[340px] opacity-[0.05] -z-10 hidden lg:block"
      />

      <div className="container mx-auto px-6 pt-14 pb-20 lg:pt-24 lg:pb-28 grid lg:grid-cols-2 gap-14 items-center">
        <div className="fade-up text-center lg:text-left">
          <span className="inline-block text-xs font-medium uppercase tracking-[0.22em] text-secondary mb-5">
            {t("hero.eyebrow")}
          </span>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl text-foreground leading-[1.05]">
            {t("hero.title")}
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed">
            {t("hero.subtitle")}
          </p>
          <p className="mt-5 text-sm text-secondary font-medium">{t("hero.support")}</p>
          <img
            src={logo}
            alt="Kodu ja Lagi"
            className="h-50 w-auto mx-auto lg:mx-0 opacity-90"
          />
        </div>
        <div className="lg:pl-8">
          <Calculator />
        </div>
      </div>
    </section>
  );
}
