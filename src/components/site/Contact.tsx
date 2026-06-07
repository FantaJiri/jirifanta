import { useState } from "react";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { toast } from "sonner";

export function Contact() {
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    // Placeholder — propojte s e-mailem nebo backendem dle potřeby
    setTimeout(() => {
      setLoading(false);
      toast.success("Zpráva byla odeslána. Ozvu se vám co nejdříve.");
      (e.target as HTMLFormElement).reset();
    }, 600);
  };

  return (
    <section id="kontakt" className="py-24 md:py-32 bg-card/30 border-t border-border">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-2 gap-12 lg:gap-20">
        <div className="reveal">
          <p className="text-xs uppercase tracking-[0.25em] text-primary">Kontakt</p>
          <h2 className="mt-4 text-3xl md:text-5xl font-bold leading-tight">
            Domluvme si termín
          </h2>
          <p className="mt-6 text-muted-foreground leading-relaxed max-w-md">
            Napište mi, zavolejte nebo přijďte. Rád vám doporučím vhodný typ masáže
            a najdeme termín, který bude vyhovovat.
          </p>

          <div className="mt-10 space-y-5">
            <a href="tel:+420733151249" className="flex items-start gap-4 group">

              <div className="h-12 w-12 rounded-xl bg-primary/10 text-primary grid place-items-center group-hover:bg-primary group-hover:text-primary-foreground transition">
                <Phone size={18} />
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-muted-foreground">Telefon</p>
                <p className="font-medium">+420 733 151 249</p>
              </div>
            </a>
            <a href="mailto:fantajiri@email.cz" className="flex items-start gap-4 group">

              <div className="h-12 w-12 rounded-xl bg-primary/10 text-primary grid place-items-center group-hover:bg-primary group-hover:text-primary-foreground transition">
                <Mail size={18} />
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-muted-foreground">E-mail</p>
                <p className="font-medium">info@jirifanta.cz</p>
              </div>
            </a>
            <div className="flex items-start gap-4">
              <div className="h-12 w-12 rounded-xl bg-primary/10 text-primary grid place-items-center">
                <MapPin size={18} />
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-muted-foreground">Provozovna</p>
                <p className="font-medium">Příkladná 123, Brno</p>
              </div>
            </div>
          </div>
        </div>

        <form
          onSubmit={onSubmit}
          className="reveal rounded-3xl border border-border bg-card p-8 md:p-10 space-y-5"
        >
          <div className="grid sm:grid-cols-2 gap-5">
            <Field label="Jméno" name="name" required />
            <Field label="Telefon" name="phone" type="tel" />
          </div>
          <Field label="E-mail" name="email" type="email" required />
          <div>
            <label className="text-xs uppercase tracking-wider text-muted-foreground">
              Zpráva
            </label>
            <textarea
              name="message"
              required
              rows={5}
              maxLength={1000}
              className="mt-2 w-full rounded-xl bg-background border border-border px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition resize-none"
              placeholder="Popište, co potřebujete…"
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-primary text-primary-foreground py-4 font-medium hover:opacity-90 transition disabled:opacity-60"
          >
            {loading ? "Odesílám…" : "Odeslat"}
            <Send size={16} />
          </button>
        </form>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="text-xs uppercase tracking-wider text-muted-foreground">{label}</label>
      <input
        name={name}
        type={type}
        required={required}
        maxLength={255}
        className="mt-2 w-full rounded-xl bg-background border border-border px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition"
      />
    </div>
  );
}
