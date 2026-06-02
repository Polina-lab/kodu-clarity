import { useTranslation } from "react-i18next";
import { Phone, Mail, Clock } from "lucide-react";

export function TopBar() {
  const { t, i18n } = useTranslation();
  const langs = ["et", "en", "ru"] as const;

  return (
    <div className="hidden md:block sticky top-0 z-50 border-b border-border bg-cream">
      <div className="container mx-auto px-6 flex items-center justify-between text-xs text-muted-foreground py-2">
        <div className="flex items-center gap-6">
          <span className="inline-flex items-center gap-1.5"><Clock className="size-3.5" /> {t("topbar.hours")}</span>
          <a href={`tel:${t("topbar.phone")}`} className="inline-flex items-center gap-1.5 hover:text-foreground transition-colors"><Phone className="size-3.5" /> {t("topbar.phone")}</a>
          <a href={`mailto:${t("topbar.email")}`} className="inline-flex items-center gap-1.5 hover:text-foreground transition-colors"><Mail className="size-3.5" /> {t("topbar.email")}</a>
        </div>
        <div className="flex items-center gap-1">
          {langs.map((l) => (
            <button
              key={l}
              onClick={() => i18n.changeLanguage(l)}
              className={`px-2 py-1 rounded-md text-[11px] font-medium uppercase tracking-wider transition-colors ${
                i18n.resolvedLanguage === l ? "bg-primary text-primary-foreground" : "hover:bg-sand"
              }`}
            >
              {l}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
