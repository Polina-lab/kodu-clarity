import { createFileRoute } from "@tanstack/react-router";
import "@/i18n";
import { LegalPage } from "@/components/landing/LegalPage";

export const Route = createFileRoute("/terms-and-conditions")({
  head: () => ({
    meta: [
      { title: "Kasutustingimused — Kodu ja Lagi" },
      { name: "description", content: "Kodu ja Lagi veebilehe ja teenuste kasutustingimused." },
    ],
  }),
  component: () => <LegalPage slug="terms" />,
});
