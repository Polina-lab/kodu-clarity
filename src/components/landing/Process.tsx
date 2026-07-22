import { useTranslation } from "react-i18next";
import { SectionTitle } from "./Services";
import peopleProcess from "@/assets/people-process.jpg";

export function Process() {
  const { t } = useTranslation();
  const raw = t("process.steps", { returnObjects: true }) as unknown;
  const steps = (Array.isArray(raw) ? raw : []) as { t: string; d: string }[];
  return (
    <section id="process" className="relative py-24 bg-cream overflow-hidden">
      <div className="pointer-events-none absolute -bottom-20 -left-10 h-80 w-80 rounded-full bg-amber-300/15 blur-[120px]" />
      <div className="container mx-auto px-6 relative">
        <SectionTitle eyebrow="04" title={t("process.title")} subtitle={t("process.subtitle")} />
        <div className="grid lg:grid-cols-5 gap-12 mt-14 items-stretch">
          <div className="lg:col-span-2">
            <div className="lg:sticky lg:top-24 relative h-full">
              <div
                className="relative overflow-hidden shadow-warm h-full"
                style={{ borderRadius: "44% 56% 48% 52% / 56% 44% 52% 48%" }}
              >
                <img
                  src={peopleProcess}
                  alt=""
                  loading="lazy"
                  width={1280}
                  height={1600}
                  className="w-full h-full object-cover aspect-[4/5] lg:aspect-auto lg:max-h-[560px]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/25 to-transparent" />
              </div>
              <div className="pointer-events-none absolute -inset-6 -z-10 bg-amber-300/15 blur-3xl rounded-full" />
            </div>
          </div>
          <ol className="lg:col-span-3 space-y-8">
            {steps.map((s, i) => (
              <li key={i} className="relative pl-16">
                <span className="absolute left-0 top-0 text-5xl font-display text-secondary/40 leading-none">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="text-xl text-foreground">{s.t}</h3>
                <p className="text-[15px] text-muted-foreground mt-2 leading-relaxed max-w-lg">{s.d}</p>
                <div className="mt-6 h-px w-16 bg-secondary/25" />
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
