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
          <span className="inline-block text-xs font-medium uppercase tracking-[0.22em] text-secondary mb-4">
            {t("hero.eyebrow")}
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl text-foreground leading-[1.08]">
            {t("hero.title")}
          </h1>
          <p className="mt-5 text-base lg:text-lg text-muted-foreground max-w-xl leading-relaxed mx-auto lg:mx-0">
            {t("hero.subtitle")}
          </p>
          <p className="mt-4 text-sm text-secondary font-medium">{t("hero.support")}</p>
          <img
            src={logo}
            alt="Kodu ja Lagi"
            className="mt-6 h-28 md:h-32 w-auto mx-auto lg:mx-0 opacity-90"
          />
        </div>
        <div className="lg:pl-6">
          <Calculator />
        </div>
      </div>
    </section>
  );
}
