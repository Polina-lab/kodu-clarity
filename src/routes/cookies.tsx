import { createFileRoute } from "@tanstack/react-router";
import "@/i18n";
import { LegalPage } from "@/components/landing/LegalPage";

export const Route = createFileRoute("/cookies")({
  head: () => ({
    meta: [
      { title: "Küpsised — Kodu ja Lagi" },
      { name: "description", content: "Kodu ja Lagi veebilehe küpsiste kasutamise kirjeldus." },
    ],
  }),
  component: () => <LegalPage slug="cookies" />,
});
