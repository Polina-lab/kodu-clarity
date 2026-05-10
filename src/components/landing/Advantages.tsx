import { useTranslation } from "react-i18next";
import { Award, Ruler, Home, Zap, ShieldCheck, Users, Sparkles, Heart } from "lucide-react";
import { SectionTitle } from "./Services";

const items = [
  { k: "quality", Icon: Award }, { k: "precise", Icon: Ruler },
  { k: "cozy", Icon: Home }, { k: "fast", Icon: Zap },
  { k: "warranty", Icon: ShieldCheck }, { k: "experts", Icon: Users },
  { k: "clean", Icon: Sparkles }, { k: "individual", Icon: Heart },
] as const;

export function Advantages() {
  const { t } = useTranslation();
  return (
    <section id="advantages" className="py-24 bg-cream">
      <div className="container mx-auto px-6">
        <SectionTitle eyebrow="02" title={t("advantages.title")} />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-14">
          {items.map(({ k, Icon }) => (
            <div key={k} className="bg-card rounded-2xl p-6 border border-border hover:shadow-soft transition-shadow">
              <div className="size-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4">
                <Icon className="size-5" />
              </div>
              <h3 className="text-lg text-foreground mb-1.5">{t(`advantages.items.${k}.t`)}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{t(`advantages.items.${k}.d`)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
