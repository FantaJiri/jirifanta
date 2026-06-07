import { Award, Trophy, UserCheck, Activity, Sparkles, Home } from "lucide-react";

const items = [
  { icon: Trophy, title: "7+ let zkušeností", text: "Dlouholetá praxe se sportovci na nejvyšší úrovni." },
  { icon: Award, title: "Zkušenosti s olympioniky", text: "Spolupráce s účastníky olympijských her a reprezentací ČR." },
  { icon: UserCheck, title: "Individuální přístup", text: "Každé tělo je jiné — masáž přizpůsobím vašim potřebám." },
  { icon: Activity, title: "Sportovní specializace", text: "Zaměření na výkon, regeneraci a prevenci zranění." },
  { icon: Sparkles, title: "Moderní techniky", text: "Spojení klasických technik s aktuálními poznatky." },
  { icon: Home, title: "Příjemné prostředí", text: "Soukromí, klid a profesionální vybavení." },
];

export function Why() {
  return (
    <section id="proc-ja" className="py-24 md:py-32 bg-card/30 border-y border-border">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="reveal max-w-2xl">
          <p className="text-xs uppercase tracking-[0.25em] text-primary">Proč si vybrat právě mě</p>
          <h2 className="mt-4 text-3xl md:text-5xl font-bold leading-tight">
            Profesionální péče bez kompromisů
          </h2>
        </div>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((it, i) => (
            <div
              key={it.title}
              className="reveal group relative rounded-2xl border border-border bg-card p-7 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1"
              style={{ transitionDelay: `${i * 40}ms` }}
            >
              <div className="h-12 w-12 rounded-xl bg-primary/10 text-primary grid place-items-center group-hover:bg-primary group-hover:text-primary-foreground transition">
                <it.icon size={22} />
              </div>
              <h3 className="mt-5 text-lg font-semibold">{it.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{it.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
