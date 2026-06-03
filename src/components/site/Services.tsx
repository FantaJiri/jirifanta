import { Dumbbell, HeartPulse, Zap, RotateCcw } from "lucide-react";

const services = [
  {
    icon: Dumbbell,
    title: "Sportovní masáž",
    text: "Masáž zaměřená na regeneraci svalů, snížení únavy a podporu výkonu.",
  },
  {
    icon: HeartPulse,
    title: "Regenerační masáž",
    text: "Uvolnění svalového napětí a podpora obnovy organismu.",
  },
  {
    icon: Zap,
    title: "Příprava před závodem",
    text: "Aktivace svalů a příprava těla na výkon.",
  },
  {
    icon: RotateCcw,
    title: "Masáž po výkonu",
    text: "Podpora regenerace a rychlejší návrat do tréninku.",
  },
];

export function Services() {
  return (
    <section id="sluzby" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="reveal max-w-2xl">
          <p className="text-xs uppercase tracking-[0.25em] text-primary">Nabízené služby</p>
          <h2 className="mt-4 text-3xl md:text-5xl font-bold leading-tight">
            Masáže šité na míru sportovcům
          </h2>
        </div>

        <div className="mt-16 grid sm:grid-cols-2 gap-6">
          {services.map((s, i) => (
            <article
              key={s.title}
              className="reveal group relative overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-card to-card/40 p-8 md:p-10 hover:border-primary/60 transition-all"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-primary/10 blur-3xl group-hover:bg-primary/20 transition" />
              <div className="relative">
                <div className="h-14 w-14 rounded-2xl bg-primary text-primary-foreground grid place-items-center">
                  <s.icon size={26} />
                </div>
                <h3 className="mt-6 text-2xl font-display font-semibold">{s.title}</h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">{s.text}</p>
                <a
                  href="#kontakt"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-primary hover:gap-3 transition-all"
                >
                  Objednat → 
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
