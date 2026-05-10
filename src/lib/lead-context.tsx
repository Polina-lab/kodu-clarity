import { createContext, useContext, useState, type ReactNode } from "react";

type LeadCtx = {
  prefill: string;
  setPrefill: (msg: string) => void;
  scrollToContact: (msg?: string) => void;
};

const Ctx = createContext<LeadCtx | null>(null);

export function LeadProvider({ children }: { children: ReactNode }) {
  const [prefill, setPrefill] = useState("");
  const scrollToContact = (msg?: string) => {
    if (msg) setPrefill(msg);
    requestAnimationFrame(() => {
      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  };
  return <Ctx.Provider value={{ prefill, setPrefill, scrollToContact }}>{children}</Ctx.Provider>;
}

export function useLead() {
  const v = useContext(Ctx);
  if (!v) throw new Error("useLead must be used within LeadProvider");
  return v;
}
