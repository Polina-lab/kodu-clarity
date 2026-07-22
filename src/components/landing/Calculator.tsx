import { useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { useLead } from "@/lib/lead-context";

const TYPE_PRICES: Record<string, number> = {
  stretch: 25, suspended: 35, acoustic: 45, lighting: 40, modern: 50, custom: 60,
};

export function Calculator({ glass = false }: { glass?: boolean }) {
  const { t } = useTranslation();
  const { scrollToContact } = useLead();
  const [type, setType] = useState<string>("stretch");
  const [area, setArea] = useState<number>(20);
  const [lamps, setLamps] = useState<number>(4);
  const [pipes, setPipes] = useState<number>(2);

  const { base, lightCost, pipeCost, total } = useMemo(() => {
    const b = (TYPE_PRICES[type] ?? 25) * (area || 0);
    const l = lamps * 10;
    const p = pipes * 5;
    return { base: b, lightCost: l, pipeCost: p, total: Math.round(b + l + p) };
  }, [type, area, lamps, pipes]);

  const buildMsg = () =>
    t("calc.msg", { type: t(`services.items.${type}.name`), area, lamps, pipes, price: total });

  const types = ["stretch", "suspended", "acoustic", "lighting", "modern", "custom"];

  const shellClass = glass
    ? "bg-white/75 backdrop-blur-xl border border-white/60 rounded-3xl p-4 sm:p-5 shadow-[0_30px_80px_-24px_rgba(60,30,10,0.45)]"
    : "bg-card border border-border rounded-3xl p-4 sm:p-5 shadow-warm";

  return (
    <div id="calculator" className={shellClass}>
      <div className="mb-3">
        <h3 className="text-xl sm:text-2xl text-foreground leading-tight">{t("calc.title")}</h3>
        <p className="text-xs text-muted-foreground mt-0.5">{t("calc.subtitle")}</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
        <Field label={t("calc.area")}>
          <input type="number" min={1} value={area}
            onChange={(e) => setArea(Math.max(0, +e.target.value))}
            className="w-full bg-cream border border-border rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-ring/50" />
        </Field>
        <Field label={t("calc.type")}>
          <select value={type} onChange={(e) => setType(e.target.value)}
            className="w-full bg-cream border border-border rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-ring/50">
            {types.map((k) => (
              <option key={k} value={k}>{t(`services.items.${k}.name`)}</option>
            ))}
          </select>
        </Field>
        <Field label={t("calc.lamps")}>
          <input type="number" min={0} value={lamps}
            onChange={(e) => setLamps(Math.max(0, +e.target.value))}
            className="w-full bg-cream border border-border rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-ring/50" />
        </Field>
        <Field label={t("calc.pipes")}>
          <input type="number" min={0} value={pipes}
            onChange={(e) => setPipes(Math.max(0, +e.target.value))}
            className="w-full bg-cream border border-border rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-ring/50" />
        </Field>
      </div>

      <div className="mt-3 rounded-2xl bg-warm-gradient p-3.5 border border-border">
        <div className="flex items-baseline justify-between">
          <span className="text-xs uppercase tracking-widest text-muted-foreground">{t("calc.from")}</span>
          <span className="text-3xl sm:text-4xl font-display text-primary">{total} €</span>
        </div>
        <div className="mt-2 grid grid-cols-3 gap-2 text-xs text-muted-foreground">
          <div><div className="text-foreground font-medium">{Math.round(base)} €</div>{t("calc.base")}</div>
          <div><div className="text-foreground font-medium">{lightCost} €</div>{t("calc.lighting")}</div>
          <div><div className="text-foreground font-medium">{pipeCost} €</div>{t("calc.wiring")}</div>
        </div>
      </div>

      <div className="mt-3 flex flex-col sm:flex-row gap-2.5">
        <button onClick={() => scrollToContact(buildMsg())}
          className="flex-1 rounded-full bg-primary text-primary-foreground px-5 py-2.5 font-medium hover:bg-secondary transition-colors shadow-soft">
          {t("calc.order")}
        </button>
        <button onClick={() => scrollToContact(buildMsg())}
          className="flex-1 rounded-full bg-cream border border-border text-foreground px-5 py-2.5 font-medium hover:bg-sand transition-colors">
          {t("calc.contact")}
        </button>
      </div>
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="block text-xs font-medium text-muted-foreground mb-1.5 uppercase tracking-wider">{label}</span>
      {children}
    </label>
  );
}
