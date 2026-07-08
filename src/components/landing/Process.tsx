import { useTranslation } from "react-i18next";
import { SectionTitle } from "./Services";
import peopleProcess from "@/assets/people-process.jpg";

export function Process() {
  const { t } = useTranslation();
  const raw = t("process.steps", { returnObjects: true }) as unknown;
  const steps = (Array.isArray(raw) ? raw : []) as { t: string; d: string }[];
  return (
    <section id="process" className="py-24 bg-cream">
      <div className="container mx-auto px-6">
        <SectionTitle eyebrow="04" title={t("process.title")} subtitle={t("process.subtitle")} />
        <div className="grid lg:grid-cols-3 gap-6 mt-14 items-start">
          <div className="lg:col-span-1 relative rounded-3xl overflow-hidden border border-border shadow-warm">
            <img src={peopleProcess} alt="" loading="lazy" width={1280} height={960} className="w-full h-full object-cover aspect-[4/5]" />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/25 to-transparent" />
          </div>
          <ol className="lg:col-span-2 grid sm:grid-cols-2 gap-5">
            {steps.map((s, i) => (
              <li key={i} className="relative bg-card border border-border rounded-3xl p-6">
                <div className="text-5xl font-display text-secondary/30 leading-none">{String(i + 1).padStart(2, "0")}</div>
                <h3 className="text-lg text-foreground mt-3">{s.t}</h3>
                <p className="text-sm text-muted-foreground mt-1.5 leading-relaxed">{s.d}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
