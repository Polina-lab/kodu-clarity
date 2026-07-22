import { useTranslation } from "react-i18next";
import { Award, Ruler, Home, Zap, ShieldCheck, Users, Sparkles, Heart } from "lucide-react";
import { SectionTitle } from "./Services";
import peopleAdvantages from "@/assets/people-advantages.jpg";

const items = [
  { k: "quality", Icon: Award }, { k: "precise", Icon: Ruler },
  { k: "cozy", Icon: Home }, { k: "fast", Icon: Zap },
  { k: "warranty", Icon: ShieldCheck }, { k: "experts", Icon: Users },
  { k: "clean", Icon: Sparkles }, { k: "individual", Icon: Heart },
] as const;

export function Advantages() {
  const { t } = useTranslation();
  return (
    <section id="advantages" className="relative py-24 bg-linen overflow-hidden">
      <div className="pointer-events-none absolute -top-24 right-10 h-72 w-72 rounded-full bg-amber-300/20 blur-[110px]" />
      <div className="container mx-auto px-6 relative">
        <SectionTitle eyebrow="02" title={t("advantages.title")} />
        <div className="grid lg:grid-cols-3 gap-10 mt-14 items-stretch">
          <div className="lg:col-span-1 relative">
            <div className="lg:sticky lg:top-24">
              <div
                className="relative overflow-hidden shadow-warm"
                style={{ borderRadius: "58% 42% 55% 45% / 48% 55% 45% 52%" }}
              >
                <img
                  src={peopleAdvantages}
                  alt=""
                  loading="lazy"
                  width={1280}
                  height={960}
                  className="w-full h-full object-cover aspect-[4/5]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/25 to-transparent" />
              </div>
              <div className="pointer-events-none absolute -inset-6 -z-10 bg-amber-300/15 blur-3xl rounded-full" />
            </div>
          </div>
          <div className="lg:col-span-2 grid sm:grid-cols-2 gap-5">
            {items.map(({ k, Icon }) => (
              <div key={k} className="rounded-2xl p-4 bg-card/60 hover:bg-card transition-colors flex items-start gap-3 text-left">
                <div className="size-10 rounded-xl bg-amber-100/70 text-secondary flex items-center justify-center shrink-0 shadow-[inset_0_0_0_1px_rgba(200,140,80,0.15)]">
                  <Icon className="size-4" />
                </div>
                <div className="min-w-0">
                  <h3 className="text-base text-foreground leading-tight">{t(`advantages.items.${k}.t`)}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed mt-1">{t(`advantages.items.${k}.d`)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
