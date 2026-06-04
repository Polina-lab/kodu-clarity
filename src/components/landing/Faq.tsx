import { useTranslation } from "react-i18next";
import { SectionTitle } from "./Services";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export function Faq() {
  const { t } = useTranslation();
  const raw = t("faq.items", { returnObjects: true }) as unknown;
  const items = (Array.isArray(raw) ? raw : []) as { q: string; a: string }[];
  return (
    <section id="faq" className="py-24 bg-background">
      <div className="container mx-auto px-6 max-w-4xl">
        <SectionTitle eyebrow="05" title={t("faq.title")} />
        <Accordion type="single" collapsible className="mt-10">
          {items.map((it, i) => (
            <AccordionItem key={i} value={`i-${i}`} className="border-b border-border">
              <AccordionTrigger className="text-left text-lg hover:text-primary py-5">{it.q}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pb-5">{it.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
