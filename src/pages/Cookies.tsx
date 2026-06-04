import { useEffect } from "react";
import { LegalPage } from "@/components/landing/LegalPage";

export default function Cookies() {
  useEffect(() => {
    document.title = "Küpsised — Kodu ja Lagi";
  }, []);
  return <LegalPage slug="cookies" />;
}
