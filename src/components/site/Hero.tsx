import heroImage from "@/assets/hero-massage.jpg";
import { ArrowRight, Phone } from "lucide-react";

export function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex items-center pt-24 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Sportovní masáž lýtkového svalu — regenerace sportovce"
          width={1920}
          height={1080}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/40" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10 w-full">
        <div className="max-w-3xl">
          <div className="animate-fade-in inline-flex items-center gap-2 rounded-full border border-border bg-card/40 backdrop-blur px-4 py-1.5 text-xs uppercase tracking-widest text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
            7+ let praxe · Dukla Brno · Olympionici
          </div>

          <h1 className="animate-fade-up mt-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05]">
            Sportovní masáže pro{" "}
            <span className="text-gradient-gold">rychlejší regeneraci</span> a lepší výkon
          </h1>

          <p
            className="animate-fade-up mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl"
            style={{ animationDelay: "120ms" }}
          >
            Pomáhám sportovcům i aktivním lidem vrátit tělu pohyb bez omezení.
          </p>

          <div
            className="animate-fade-up mt-10 flex flex-wrap gap-4"
            style={{ animationDelay: "240ms" }}
          >
            <a
              href="https://wa.me/420733151249?text=Dobrý den, chtěl/a bych se objednat na sportovní masáž."
              className="group inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-7 py-4 font-medium shadow-[var(--shadow-glow)] hover:scale-[1.02] transition"
            >
              Objednat termín přes Whatsapp
              <ArrowRight size={18} className="group-hover:translate-x-1 transition" />
            </a>
            <a
              href="#kontakt"
              className="group inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-7 py-4 font-medium shadow-[var(--shadow-glow)] hover:scale-[1.02] transition"
            >
              Objednat masáž
              <ArrowRight size={18} className="group-hover:translate-x-1 transition" />
            </a>
            <a
              href="tel:+420733151249"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card/40 backdrop-blur px-7 py-4 font-medium hover:bg-card transition"
            >
              <Phone size={18} />
              Kontaktovat
            </a>
          </div>

          <dl className="animate-fade-up mt-16 grid grid-cols-3 gap-6 max-w-lg" style={{ animationDelay: "360ms" }}>
            {[
              { k: "7+", v: "let praxe" },
              { k: "OH", v: "účastníci" },
            ].map((s) => (
              <div key={s.v}>
                <dt className="text-3xl md:text-4xl font-display text-gradient-gold">{s.k}</dt>
                <dd className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">{s.v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground text-xs uppercase tracking-widest animate-pulse">
        Scroll
      </div>
    </section>
  );
}
