import { useState } from "react";
import { useTranslation } from "react-i18next";
import { SectionTitle } from "./Services";
import { useLead } from "@/lib/lead-context";
import { portfolio, type Category } from "@/lib/portfolio-data";

const FILTERS: ("all" | Category)[] = ["all", "stretch", "suspended", "acoustic", "lighting", "modern", "custom"];

export function Portfolio() {
  const { t } = useTranslation();
  const { scrollToContact } = useLead();
  const [active, setActive] = useState<"all" | Category>("all");
  const items = active === "all" ? portfolio : portfolio.filter((p) => p.category === active);

  return (
    <section id="portfolio" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <SectionTitle eyebrow="03" title={t("portfolio.title")} subtitle={t("portfolio.subtitle")} />

        <div className="flex flex-wrap gap-2 mt-10">
          {FILTERS.map((f) => (
            <button key={f} onClick={() => setActive(f)}
              className={`px-4 py-2 rounded-full text-sm transition-all ${
                active === f ? "bg-primary text-primary-foreground shadow-soft" : "bg-cream border border-border text-foreground/70 hover:bg-sand"
              }`}>
              {t(`portfolio.filters.${f}`)}
            </button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
          {items.map((p) => {
            const title = t(`portfolio.projects.${p.id}`, { defaultValue: p.title });
            return (
            <button key={p.id} onClick={() => scrollToContact(t("portfolio.msg", { title }))}
              className="group text-left bg-card rounded-2xl overflow-hidden border border-border hover:shadow-warm transition-all duration-500 hover:-translate-y-1">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={p.img} alt={title} loading="lazy" width={1024} height={768}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div className="p-5">
                <span className="text-[10px] uppercase tracking-widest text-secondary">{t(`portfolio.filters.${p.category}`)}</span>
                <h3 className="text-base text-foreground mt-1">{title}</h3>
              </div>
            </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
