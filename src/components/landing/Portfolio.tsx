import { useState } from "react";
import { useTranslation } from "react-i18next";
import { SectionTitle } from "./Services";
import { useLead } from "@/lib/lead-context";
import { portfolio, type Category } from "@/lib/portfolio-data";

const FILTERS: ("all" | Category)[] = ["all", "stretch", "suspended", "acoustic", "lighting", "modern", "custom"];

const ASPECTS = ["aspect-[4/5]", "aspect-[4/3]", "aspect-square", "aspect-[3/4]", "aspect-[5/4]", "aspect-[4/3]"];

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
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`px-4 py-2 rounded-full text-sm transition-all ${
                active === f
                  ? "bg-primary text-primary-foreground shadow-[0_8px_24px_-10px_rgba(60,30,10,0.5)]"
                  : "text-foreground/70 hover:text-foreground hover:bg-sand/60"
              }`}
            >
              {t(`portfolio.filters.${f}`)}
            </button>
          ))}
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 mt-10 [column-fill:_balance]">
          {items.map((p, i) => {
            const title = t(`portfolio.projects.${p.id}`, { defaultValue: p.title });
            const aspect = ASPECTS[i % ASPECTS.length];
            return (
              <button
                key={p.id}
                onClick={() => scrollToContact(t("portfolio.msg", { title }))}
                className="group mb-5 block w-full break-inside-avoid text-left rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-1"
              >
                <div className={`relative overflow-hidden rounded-2xl ${aspect}`}>
                  <img
                    src={p.img}
                    alt={title}
                    loading="lazy"
                    width={1024}
                    height={1280}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1a0f08]/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <div className="pt-3 px-1">
                  <span className="text-[10px] uppercase tracking-widest text-secondary">
                    {t(`portfolio.filters.${p.category}`)}
                  </span>
                  <h3 className="text-[15px] text-foreground mt-1 leading-snug">{title}</h3>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
