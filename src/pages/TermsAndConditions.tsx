import { useEffect } from "react";
import { LegalPage } from "@/components/landing/LegalPage";

export default function TermsAndConditions() {
  useEffect(() => {
    document.title = "Kasutustingimused — Kodu ja Lagi";
  }, []);
  return <LegalPage slug="terms" />;
}
