import { useTranslation } from "react-i18next";
import { useLead } from "@/lib/lead-context";
import stretch from "@/assets/p-stretch.jpg";
import suspended from "@/assets/p-suspended.jpg";
import acoustic from "@/assets/p-acoustic.jpg";
import lighting from "@/assets/p-lighting.jpg";
import modern from "@/assets/p-modern.jpg";
import custom from "@/assets/p-custom.jpg";

const SERVICES = [
  { key: "stretch", img: stretch },
  { key: "suspended", img: suspended },
  { key: "acoustic", img: acoustic },
  { key: "lighting", img: lighting },
  { key: "modern", img: modern },
  { key: "custom", img: custom },
] as const;

export function Services() {
  const { t } = useTranslation();
  const { scrollToContact } = useLead();
  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <SectionTitle eyebrow="01" title={t("services.title")} subtitle={t("services.subtitle")} />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">
          {SERVICES.map((s) => (
            <button
              key={s.key}
              onClick={() => scrollToContact(`${t(`services.items.${s.key}.name`)}: ${t(`services.items.${s.key}.desc`)}`)}
              className="group relative text-left rounded-3xl overflow-hidden aspect-[16/9] shadow-soft hover:shadow-warm transition-all duration-500 hover:-translate-y-1"
            >
              <img
                src={s.img}
                alt={t(`services.items.${s.key}.name`)}
                loading="lazy"
                width={1024}
                height={1280}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-[900ms] group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a0f08]/90 via-[#1a0f08]/40 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 text-primary-foreground">
                <h3 className="text-2xl leading-tight drop-shadow">{t(`services.items.${s.key}.name`)}</h3>
                <p className="text-sm text-white/85 leading-relaxed mt-2 line-clamp-3">{t(`services.items.${s.key}.desc`)}</p>
                <span className="mt-3 inline-flex items-center gap-2 text-xs uppercase tracking-widest text-amber-200 group-hover:text-amber-100 transition-colors">
                  <span className="h-px w-6 bg-amber-200/70 group-hover:w-10 transition-all" />
                  →
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

export function SectionTitle({ eyebrow, title, subtitle }: { eyebrow?: string; title: string; subtitle?: string }) {
  return (
    <div className="max-w-2xl">
      {eyebrow && <span className="text-xs uppercase tracking-[0.3em] text-secondary">{eyebrow}</span>}
      <h2 className="text-4xl sm:text-5xl text-foreground mt-3">{title}</h2>
      {subtitle && <p className="mt-4 text-muted-foreground text-lg">{subtitle}</p>}
    </div>
  );
}
