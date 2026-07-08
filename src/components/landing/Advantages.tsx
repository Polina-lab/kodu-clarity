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
    <section id="advantages" className="py-24 bg-linen">
      <div className="container mx-auto px-6">
        <SectionTitle eyebrow="02" title={t("advantages.title")} />
        <div className="grid lg:grid-cols-3 gap-6 mt-14 items-start">
          <div className="lg:col-span-1 relative rounded-3xl overflow-hidden border border-border shadow-warm">
            <img src={peopleAdvantages} alt="" loading="lazy" width={1280} height={960} className="w-full h-full object-cover aspect-[4/5]" />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent" />
          </div>
          <div className="lg:col-span-2 grid sm:grid-cols-2 gap-5">
            {items.map(({ k, Icon }) => (
              <div key={k} className="bg-card rounded-3xl p-6 border border-border hover:shadow-soft transition-shadow">
                <div className="size-11 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-4">
                  <Icon className="size-5" />
                </div>
                <h3 className="text-lg text-foreground mb-1.5">{t(`advantages.items.${k}.t`)}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{t(`advantages.items.${k}.d`)}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
