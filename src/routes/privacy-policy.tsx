import { createFileRoute } from "@tanstack/react-router";
import "@/i18n";
import { LegalPage } from "@/components/landing/LegalPage";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title: "Privaatsuspoliitika — Kodu ja Lagi" },
      { name: "description", content: "Kodu ja Lagi privaatsuspoliitika ja isikuandmete töötlemise põhimõtted." },
    ],
  }),
  component: () => <LegalPage slug="privacy" />,
});
