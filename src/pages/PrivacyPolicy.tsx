import { useEffect } from "react";
import { LegalPage } from "@/components/landing/LegalPage";

export default function PrivacyPolicy() {
  useEffect(() => {
    document.title = "Privaatsuspoliitika — Kodu ja Lagi";
  }, []);
  return <LegalPage slug="privacy" />;
}
