import { Dumbbell, Leaf, Tag, ArrowRight, MessageCircle } from "lucide-react";

const services = [
  {
    icon: Dumbbell,
    title: "Sportovní masáž",
    text:
      "Pro sportovce i aktivní lidi, kteří chtějí být zase o krok napřed. Cíleně pracuji s přetíženými svaly, zrychluji regeneraci po tréninku či závodě a pomáhám tělu zvládat vyšší zátěž bez zbytečných zranění.",
    benefits: [
      "regenerace po sportu",
      "uvolnění přetížených svalů",
      "podpora výkonu",
      "prevence zranění",
    ],
  },
  {
    icon: Leaf,
    title: "Relaxační masáž",
    text:
      "Hledáte chvíli klidu od každodenního shonu? Odložte telefon, zpomalte a dopřejte si čas jen pro sebe. Relaxační masáž je prostor, kde můžete úplně vypnout. Příjemná atmosféra, kvalitní masážní oleje a klidná hudba pomohou uvolnit tělo i mysl. Pokud si během masáže chcete jen odpočinout, budete mít naprostý klid. A pokud si naopak chcete povídat, rád se přizpůsobím. Masáž je především o vašem pohodlí.",
    benefits: [
      "uvolnění napětí",
      "odbourání stresu",
      "hluboký odpočinek",
      "kvalitnější spánek",
      "individuální přístup",
    ],
  },
  {
    icon: Tag,
    title: "Kinesiotaping",
    text:
      "Doplňková aplikace tejpu pro podporu svalů, odlehčení přetížených oblastí a rychlejší návrat do pohybu. Funguje skvěle jako doplněk ke sportovní i relaxační masáži — nebo samostatně tam, kde je potřeba cílená opora.",
    benefits: [
      "podpora přetížených svalů",
      "odlehčení kloubů",
      "podpora regenerace",
      "vhodné i samostatně",
    ],
  },
];

export function Services() {
  return (
    <section id="sluzby" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="reveal max-w-2xl">
          <p className="text-xs uppercase tracking-[0.25em] text-primary">Nabízené služby</p>
          <h2 className="mt-4 text-3xl md:text-5xl font-bold leading-tight">
            Vyberte si péči
          </h2>
          <p className="mt-6 text-muted-foreground leading-relaxed">
            Každé tělo má jiné potřeby. Někdy potřebujete ulevit přetíženým svalům
            po sportu, jindy si jen odpočinout od každodenního shonu. Vyberte si
            péči, která vám právě teď udělá nejlépe.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3 items-stretch">
          {services.map((s, i) => (
            <article
              key={s.title}
              className="reveal group relative overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-card to-card/40 p-8 md:p-10 hover:border-primary/60 transition-all flex flex-col"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-primary/10 blur-3xl group-hover:bg-primary/20 transition" />
              <div className="relative flex flex-col h-full">
                <div className="h-14 w-14 rounded-2xl bg-primary text-primary-foreground grid place-items-center">
                  <s.icon size={26} />
                </div>
                <h3 className="mt-6 text-2xl font-display font-semibold">{s.title}</h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">{s.text}</p>

                <ul className="mt-6 space-y-2">
                  {s.benefits.map((b) => (
                    <li key={b} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#kontakt"
                  className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-primary hover:gap-3 transition-all"
                >
                  Objednat →
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Info block */}
        <div className="reveal mt-16 md:mt-20 relative overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-card to-primary/5 p-8 md:p-12">
          <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-primary/10 blur-3xl" />
          <div className="relative grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
            <div className="max-w-2xl">
              <h3 className="text-2xl md:text-3xl font-bold leading-tight">
                Nejste si jistí, co je pro vás vhodné?
              </h3>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Nemusíte se rozhodovat předem. Na začátku společně probereme vaše
                potíže, cíle i očekávání a doporučím vám nejvhodnější typ péče.
                Objednáváte se jednoduše na termín, ne na konkrétní proceduru.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 md:justify-end">
              <a
                href="#kontakt"
                className="group inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3 font-medium shadow-[var(--shadow-glow)] hover:scale-[1.02] transition"
              >
                Rezervovat termín
                <ArrowRight size={18} className="group-hover:translate-x-1 transition" />
              </a>
              <a
                href="https://wa.me/420733151249"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card/40 backdrop-blur px-6 py-3 font-medium hover:bg-card transition"
              >
                <MessageCircle size={18} />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
