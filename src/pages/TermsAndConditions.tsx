import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { LegalPage } from "@/components/landing/LegalPage";

export default function TermsAndConditions() {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    document.title = t("meta.terms");
  }, [t, i18n.resolvedLanguage]);

  return <LegalPage slug="terms" />;
}
