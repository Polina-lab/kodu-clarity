import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.svg";
import { useLead } from "@/lib/lead-context";

const items = ["calculator", "about", "advantages", "services", "portfolio", "process", "faq", "reviews", "contact"] as const;
const sectionMap: Record<string, string> = {
  calculator: "calculator", about: "advantages", advantages: "advantages",
  services: "services", portfolio: "portfolio", process: "process",
  faq: "faq", reviews: "reviews", contact: "contact",
};

export function Header() {
  const { t, i18n } = useTranslation();
  const { scrollToContact } = useLead();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (key: string) => {
    document.getElementById(sectionMap[key])?.scrollIntoView({ behavior: "smooth", block: "start" });
    setOpen(false);
  };

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? "bg-background/85 backdrop-blur-lg shadow-soft" : "bg-background"}`}>
      <div className="container mx-auto px-6 flex items-center justify-between h-20">
        <a href="#top" className="flex items-center gap-3" aria-label="Kodu ja Lagi">
          <img src={logo} alt="Kodu ja Lagi" className="h-10 w-auto" />
        </a>
        <nav className="hidden lg:flex items-center gap-7">
          {items.slice(0, -1).map((k) => (
            <button key={k} onClick={() => go(k)} className="text-sm text-foreground/80 hover:text-primary transition-colors">
              {t(`nav.${k}`)}
            </button>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <button onClick={() => scrollToContact()} className="hidden sm:inline-flex items-center rounded-full bg-primary text-primary-foreground px-5 py-2.5 text-sm font-medium hover:bg-secondary transition-colors shadow-soft">
            {t("nav.cta")}
          </button>
          <button onClick={() => setOpen(!open)} className="lg:hidden p-2" aria-label="menu">
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>
      {open && (
        <div className="lg:hidden border-t border-border bg-background">
          <div className="container mx-auto px-6 py-4 flex flex-col gap-1">
            {items.map((k) => (
              <button key={k} onClick={() => go(k)} className="text-left py-2.5 text-sm text-foreground/80 hover:text-primary">
                {t(`nav.${k}`)}
              </button>
            ))}
            <div className="flex gap-2 pt-3 border-t border-border mt-2">
              {(["et", "en", "ru"] as const).map((l) => (
                <button key={l} onClick={() => i18n.changeLanguage(l)} className={`px-3 py-1 rounded-md text-xs uppercase font-medium ${i18n.resolvedLanguage === l ? "bg-primary text-primary-foreground" : "bg-sand"}`}>{l}</button>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
