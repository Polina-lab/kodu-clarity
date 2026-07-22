import { useState } from "react";
import { useTranslation } from "react-i18next";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { SectionTitle } from "./Services";
import { useLead } from "@/lib/lead-context";
import { portfolio, type Category, type PortfolioItem } from "@/lib/portfolio-data";

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
          {items.map((p, i) => (
            <PortfolioCard key={p.id} project={p} aspectClass={ASPECTS[i % ASPECTS.length]} onOrder={scrollToContact} />
          ))}
        </div>
      </div>
    </section>
  );
}

function PortfolioCard({
  project,
  aspectClass,
  onOrder,
}: {
  project: PortfolioItem;
  aspectClass: string;
  onOrder: (msg: string) => void;
}) {
  const { t } = useTranslation();
  const title = t(`portfolio.projects.${project.id}`, { defaultValue: project.title });
  const images = (project.images && project.images.length > 0 ? project.images : [project.img]).slice(0, 7);
  const [idx, setIdx] = useState(0);

  const go = (dir: 1 | -1, e: React.MouseEvent) => {
    e.stopPropagation();
    setIdx((v) => (v + dir + images.length) % images.length);
  };

  return (
    <div className="group mb-5 w-full break-inside-avoid">
      <div className={`relative overflow-hidden rounded-2xl ${aspectClass}`}>
        <img
          src={images[idx]}
          alt={title}
          loading="lazy"
          width={1024}
          height={1280}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a0f08]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

        {images.length > 1 && (
          <>
            <button
              type="button"
              aria-label="Previous"
              onClick={(e) => go(-1, e)}
              className="absolute left-2 top-1/2 -translate-y-1/2 size-9 rounded-full bg-white/85 backdrop-blur border border-white/60 text-foreground flex items-center justify-center shadow-soft hover:bg-white transition-colors"
            >
              <ChevronLeft className="size-4" />
            </button>
            <button
              type="button"
              aria-label="Next"
              onClick={(e) => go(1, e)}
              className="absolute right-2 top-1/2 -translate-y-1/2 size-9 rounded-full bg-white/85 backdrop-blur border border-white/60 text-foreground flex items-center justify-center shadow-soft hover:bg-white transition-colors"
            >
              <ChevronRight className="size-4" />
            </button>
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
              {images.map((_, i) => (
                <span
                  key={i}
                  className={`h-1.5 rounded-full transition-all ${i === idx ? "w-4 bg-white" : "w-1.5 bg-white/60"}`}
                />
              ))}
            </div>
          </>
        )}
      </div>
      <button
        type="button"
        onClick={() => onOrder(t("portfolio.msg", { title }))}
        className="mt-3 block w-full text-left px-2"
      >
        <span className="text-[10px] uppercase tracking-widest text-secondary">
          {t(`portfolio.filters.${project.category}`)}
        </span>
        <h3 className="text-[15px] text-foreground mt-1 leading-snug">{title}</h3>
      </button>
    </div>
  );
}
