import { useTranslation } from "react-i18next";
import { Star, Quote } from "lucide-react";
import { SectionTitle } from "./Services";
import a1 from "@/assets/people-hero.jpg";
import a2 from "@/assets/people-advantages.jpg";
import a3 from "@/assets/people-process.jpg";
import a4 from "@/assets/people-contact.jpg";

const AVATARS = [a1, a2, a3, a4];

export function Reviews() {
  const { t } = useTranslation();
  const raw = t("reviews.items", { returnObjects: true }) as unknown;
  const items = (Array.isArray(raw) ? raw : []) as { n: string; l: string; t: string }[];
  return (
    <section id="reviews" className="relative py-24 bg-cream overflow-hidden">
      <div className="pointer-events-none absolute top-10 right-20 h-72 w-72 rounded-full bg-amber-300/15 blur-[120px]" />
      <div className="container mx-auto px-6 relative">
        <SectionTitle eyebrow="06" title={t("reviews.title")} subtitle={t("reviews.subtitle")} />
        <div className="grid md:grid-cols-3 gap-6 mt-14">
          {items.map((r, i) => (
            <figure key={i} className="relative bg-card/70 rounded-3xl p-8 pt-10">
              <Quote
                className="absolute -top-3 left-6 size-14 text-secondary/25 fill-secondary/15 -scale-x-100"
                strokeWidth={1}
              />
              <div className="flex gap-0.5 text-secondary mb-4 relative">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} className="size-4 fill-current" />
                ))}
              </div>
              <blockquote className="text-foreground/90 leading-relaxed relative">{r.t}</blockquote>
              <figcaption className="mt-6 flex items-center gap-3 text-sm">
                <img
                  src={AVATARS[i % AVATARS.length]}
                  alt=""
                  loading="lazy"
                  className="size-11 rounded-full object-cover border-2 border-amber-100/70 shadow-soft"
                />
                <div>
                  <div className="font-medium text-foreground">{r.n}</div>
                  <div className="text-muted-foreground">{r.l}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
