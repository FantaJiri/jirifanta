import { ArrowRight, Clock, Tag } from "lucide-react";

const items = [
  {
    title: "Sportovní / regenerační masáž",
    duration: "30 minut",
    price: "600 Kč",
    icon: Clock,
  },
  {
    title: "Sportovní / regenerační masáž",
    duration: "60 minut",
    price: "1 000 Kč",
    icon: Clock,
    highlight: true,
  },
  {
    title: "Kinesiotaping",
    duration: "podle rozsahu aplikace",
    price: "od 100 Kč",
    icon: Tag,
  },
];

export function Pricing() {
  return (
    <section id="cenik" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="reveal max-w-2xl">
          <p className="text-xs uppercase tracking-[0.25em] text-primary">Ceník</p>
          <h2 className="mt-4 text-3xl md:text-5xl font-bold leading-tight">
            Jednoduché a férové ceny
          </h2>
        </div>

        <div className="mt-12 md:mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it, i) => (
            <article
              key={it.title + it.duration}
              className={`reveal relative overflow-hidden rounded-3xl border p-7 md:p-8 transition-all hover:-translate-y-1 ${
                it.highlight
                  ? "border-primary/60 bg-gradient-to-br from-card to-primary/10"
                  : "border-border bg-card hover:border-primary/40"
              }`}
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              {it.highlight && (
                <span className="absolute right-5 top-5 rounded-full bg-primary/20 text-primary text-[10px] uppercase tracking-wider px-2.5 py-1">
                  Nejčastější
                </span>
              )}
              <div className="h-12 w-12 rounded-xl bg-primary/10 text-primary grid place-items-center">
                <it.icon size={20} />
              </div>
              <h3 className="mt-5 text-lg md:text-xl font-semibold leading-snug">{it.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{it.duration}</p>
              <p className="mt-6 text-3xl md:text-4xl font-display text-gradient-gold">
                {it.price}
              </p>
            </article>
          ))}
        </div>

        <p className="reveal mt-8 text-sm text-muted-foreground max-w-2xl leading-relaxed">
          Délku masáže a případné tejpování doporučím podle aktuálního stavu a cíle regenerace.
        </p>

        <div className="reveal mt-10">
          <a
            href="#kontakt"
            className="group inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-7 py-4 font-medium shadow-[var(--shadow-glow)] hover:scale-[1.02] transition"
          >
            Objednat termín
            <ArrowRight size={18} className="group-hover:translate-x-1 transition" />
          </a>
        </div>
      </div>
    </section>
  );
}
