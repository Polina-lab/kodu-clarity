import { useTranslation } from "react-i18next";
import { Link, useNavigate, useLocation } from "react-router-dom";
import logo from "@/assets/logo.svg";
import { changeAppLanguage, getActiveLanguage, supportedLanguages } from "@/i18n";

export function Footer() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const activeLanguage = getActiveLanguage();
  const navItems = ["services", "portfolio", "process", "faq", "reviews", "contact"] as const;
  const serviceItems = ["stretch", "suspended", "acoustic", "lighting", "modern", "custom"] as const;
  const go = (id: string) => {
    if (pathname === "/") {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate(`/#${id}`);
    }
  };
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-6 py-12 grid md:grid-cols-4 gap-8">
        <div className="md:col-span-2">
          <img src={logo} alt="Kodu ja Lagi" className="h-12 w-auto brightness-0 invert opacity-90" />
          <p className="mt-4 text-primary-foreground/70 max-w-sm">{t("footer.tagline")}</p>
          <div className="mt-5 flex gap-2">
            {supportedLanguages.map((l) => (
              <button key={l} type="button" onClick={() => void changeAppLanguage(l)} aria-pressed={activeLanguage === l}
                className={`px-3 py-1 rounded-md text-xs uppercase font-medium transition-colors ${
                  activeLanguage === l ? "bg-primary-foreground text-primary" : "bg-primary-foreground/10 hover:bg-primary-foreground/20"
                }`}>{l}</button>
            ))}
          </div>
        </div>
        <div>
          <h4 className="text-sm uppercase tracking-widest text-primary-foreground/60 mb-3">{t("footer.nav")}</h4>
          <ul className="space-y-2 text-sm">
            {navItems.map((k) => (
              <li key={k}><button onClick={() => go(k)} className="hover:text-primary-foreground/80">{t(`nav.${k}`)}</button></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-sm uppercase tracking-widest text-primary-foreground/60 mb-3">{t("footer.legal")}</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/privacy-policy" className="hover:text-primary-foreground/80">{t("footer.privacy")}</Link></li>
            <li><Link to="/cookies" className="hover:text-primary-foreground/80">{t("footer.cookies")}</Link></li>
            <li><Link to="/terms-and-conditions" className="hover:text-primary-foreground/80">{t("footer.terms")}</Link></li>
          </ul>
          <h4 className="text-sm uppercase tracking-widest text-primary-foreground/60 mt-6 mb-3">{t("footer.services")}</h4>
          <ul className="space-y-2 text-sm">
            {serviceItems.slice(0, 3).map((k) => (
              <li key={k} className="text-primary-foreground/80">{t(`services.items.${k}.name`)}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-6 py-4 flex flex-col sm:flex-row justify-between gap-2 text-xs text-primary-foreground/60">
          <span>© {new Date().getFullYear()} Kodu ja Lagi. {t("footer.rights")}</span>
          <span>{t("topbar.email")} • {t("topbar.phone")}</span>
        </div>
      </div>
    </footer>
  );
}
