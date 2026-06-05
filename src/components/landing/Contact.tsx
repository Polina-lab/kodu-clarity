import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Phone, Mail, Clock, MapPin } from "lucide-react";
import { useLead } from "@/lib/lead-context";
import { z } from "zod";
import { toast } from "sonner";

const schema = z.object({
  name: z.string().trim().min(2).max(80),
  phone: z.string().trim().min(5).max(30),
  email: z.string().trim().email().max(120),
  message: z.string().trim().min(1).max(2000),
});

export function Contact() {
  const { t } = useTranslation();
  const { prefill } = useLead();
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (prefill) setMessage(prefill);
  }, [prefill]);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data = {
      name: String(fd.get("name") || ""),
      phone: String(fd.get("phone") || ""),
      email: String(fd.get("email") || ""),
      message: String(fd.get("message") || ""),
    };
    const r = schema.safeParse(data);
    if (!r.success) {
      toast.error(t("contact.invalid"));
      return;
    }
    toast.success(t("contact.success"));
    e.currentTarget.reset();
    setMessage("");
  };

  return (
    <section id="contact" className="py-24 bg-warm-gradient">
      <div className="container mx-auto px-6 grid lg:grid-cols-5 gap-10">
        <div className="lg:col-span-2">
          <span className="text-xs uppercase tracking-[0.3em] text-secondary">07</span>
          <h2 className="text-4xl sm:text-5xl text-foreground mt-3">{t("contact.title")}</h2>
          <p className="mt-4 text-muted-foreground text-lg">{t("contact.subtitle")}</p>

          <ul className="mt-10 space-y-4 text-sm">
            <Info icon={Phone} label={t("topbar.phone")} href={`tel:${t("topbar.phone")}`} />
            <Info icon={Mail} label={t("topbar.email")} href={`mailto:${t("topbar.email")}`} />
            <Info icon={Clock} label={`${t("contact.hours")}: ${t("topbar.hours")}`} />
            <Info icon={MapPin} label={t("contact.address")} />
          </ul>
        </div>
        <form onSubmit={onSubmit} className="lg:col-span-3 bg-card rounded-3xl p-7 sm:p-9 border border-border shadow-warm">
          <div className="grid sm:grid-cols-2 gap-4">
            <Input name="name" label={t("contact.name")} required />
            <Input name="phone" label={t("contact.phone")} type="tel" required />
            <div className="sm:col-span-2"><Input name="email" label={t("contact.email")} type="email" required /></div>
            <div className="sm:col-span-2">
              <label className="block">
                <span className="block text-xs font-medium text-muted-foreground mb-1.5 uppercase tracking-wider">{t("contact.message")}</span>
                <textarea name="message" rows={5} value={message} onChange={(e) => setMessage(e.target.value)}
                  maxLength={2000}
                  className="w-full bg-cream border border-border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-ring/50 resize-none" />
              </label>
            </div>
          </div>
          <button type="submit" className="mt-6 w-full sm:w-auto rounded-full bg-primary text-primary-foreground px-8 py-3.5 font-medium hover:bg-secondary transition-colors shadow-soft">
            {t("contact.submit")}
          </button>
        </form>
      </div>
    </section>
  );
}

function Input({ name, label, type = "text", required }: { name: string; label: string; type?: string; required?: boolean }) {
  return (
    <label className="block">
      <span className="block text-xs font-medium text-muted-foreground mb-1.5 uppercase tracking-wider">{label}</span>
      <input name={name} type={type} required={required} maxLength={200}
        className="w-full bg-cream border border-border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-ring/50" />
    </label>
  );
}

function Info({ icon: Icon, label, href }: { icon: typeof Phone; label: string; href?: string }) {
  const C: React.ElementType = href ? "a" : "div";
  return (
    <li>
      <C {...(href ? { href } : {})} className="flex items-start gap-3 text-foreground/85 hover:text-primary transition-colors">
        <span className="size-9 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0"><Icon className="size-4" /></span>
        <span className="pt-1.5">{label}</span>
      </C>
    </li>
  );
}
