import { useTranslation } from "react-i18next";
import { Star } from "lucide-react";
import { SectionTitle } from "./Services";

export function Reviews() {
  const { t } = useTranslation();
  const items = t("reviews.items", { returnObjects: true }) as { n: string; l: string; t: string }[];
  return (
    <section id="reviews" className="py-24 bg-cream">
      <div className="container mx-auto px-6">
        <SectionTitle eyebrow="06" title={t("reviews.title")} subtitle={t("reviews.subtitle")} />
        <div className="grid md:grid-cols-3 gap-6 mt-14">
          {items.map((r, i) => (
            <figure key={i} className="bg-card border border-border rounded-2xl p-7 shadow-soft">
              <div className="flex gap-0.5 text-secondary mb-4">
                {Array.from({ length: 5 }).map((_, j) => <Star key={j} className="size-4 fill-current" />)}
              </div>
              <blockquote className="text-foreground/90 leading-relaxed">"{r.t}"</blockquote>
              <figcaption className="mt-5 text-sm">
                <div className="font-medium text-foreground">{r.n}</div>
                <div className="text-muted-foreground">{r.l}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
