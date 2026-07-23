import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Phone, Mail, Clock, MapPin } from "lucide-react";
import { useLead } from "@/lib/lead-context";
import { z } from "zod";
import { toast } from "sonner";
import peopleContact from "@/assets/people-contact.jpg";

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
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-8 items-start">
        <div>
          <span className="text-xs uppercase tracking-[0.3em] text-secondary">07</span>
          <h2 className="text-4xl sm:text-5xl text-foreground mt-3">{t("contact.title")}</h2>
          <p className="mt-4 text-muted-foreground text-lg">{t("contact.subtitle")}</p>

          <div className="mt-8 flex flex-col sm:flex-row items-start gap-5">
            <div className="relative shrink-0">
              <div
                className="relative overflow-hidden w-36 h-36 sm:w-40 sm:h-40"
                style={{ borderRadius: "56% 44% 52% 48% / 46% 54% 48% 52%" }}
              >
                <img src={peopleContact} alt="" loading="lazy" width={512} height={512} className="w-full h-full object-cover object-top" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent" />
              </div>
              <div className="pointer-events-none absolute -inset-4 -z-10 bg-amber-300/15 blur-3xl rounded-full" />
            </div>
            <ul className="space-y-3 text-sm flex-1 min-w-0">
              <Info icon={Phone} label={t("topbar.phone")} href={`tel:${t("topbar.phone")}`} />
              <Info icon={Mail} label={t("topbar.email")} href={`mailto:${t("topbar.email")}`} />
              <Info icon={Clock} label={`${t("contact.hours")}: ${t("topbar.hours")}`} />
              <Info icon={MapPin} label={t("contact.address")} />
            </ul>
          </div>
        </div>
        <form onSubmit={onSubmit} className="bg-card/80 backdrop-blur-sm rounded-3xl p-5 sm:p-6 w-full">

          <div className="grid gap-3">
            <Input name="name" label={t("contact.name")} required />
            <Input name="phone" label={t("contact.phone")} type="tel" required />
            <Input name="email" label={t("contact.email")} type="email" required />
            <label className="block">
              <span className="block text-xs font-medium text-muted-foreground mb-1.5 uppercase tracking-wider">{t("contact.message")}</span>
              <textarea name="message" rows={4} value={message} onChange={(e) => setMessage(e.target.value)}
                maxLength={2000}
                className="w-full bg-cream border border-border rounded-xl px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-ring/50 resize-none" />
            </label>
          </div>
          <button type="submit" className="mt-5 w-full rounded-full bg-primary text-primary-foreground px-6 py-3 font-medium hover:bg-secondary transition-colors shadow-soft">
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
        className="w-full bg-cream border border-border rounded-xl px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-ring/50" />
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
