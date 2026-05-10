import { useTranslation } from "react-i18next";
import { SectionTitle } from "./Services";

export function Process() {
  const { t } = useTranslation();
  const steps = t("process.steps", { returnObjects: true }) as { t: string; d: string }[];
  return (
    <section id="process" className="py-24 bg-cream">
      <div className="container mx-auto px-6">
        <SectionTitle eyebrow="04" title={t("process.title")} subtitle={t("process.subtitle")} />
        <ol className="grid md:grid-cols-5 gap-5 mt-14">
          {steps.map((s, i) => (
            <li key={i} className="relative bg-card border border-border rounded-2xl p-6">
              <div className="text-5xl font-display text-secondary/30 leading-none">{String(i + 1).padStart(2, "0")}</div>
              <h3 className="text-lg text-foreground mt-3">{s.t}</h3>
              <p className="text-sm text-muted-foreground mt-1.5 leading-relaxed">{s.d}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
