import jiriFantaPortrait from "@/assets/jiri-fanta-portrait.jpg";

export function About() {
  return (
    <section id="o-mne" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div className="reveal relative">
          <div className="absolute -inset-4 bg-gradient-to-tr from-primary/20 to-transparent rounded-3xl blur-2xl" />
          <div className="relative overflow-hidden rounded-3xl border border-border h-[400px] md:h-auto">
            <img
              src={jiriFantaPortrait}
              alt="Jiří Fanta – sportovní masér"
              width={1024}
              height={1024}
              loading="lazy"
              className="w-full h-full md:h-auto object-cover object-top"
            />
          </div>
        </div>

        <div className="reveal">
          <p className="text-xs uppercase tracking-[0.25em] text-primary">O mně</p>
          <h2 className="mt-4 text-3xl md:text-5xl font-bold leading-tight">
            Více než 7 let zkušeností s vrcholovým sportem
          </h2>
          <div className="mt-8 space-y-5 text-muted-foreground leading-relaxed">
            <p>
              Jmenuji se Jiří Fanta a sport je součástí mého života odmala. Cyklistice jsem se věnoval 12 let na vrcholové úrovni, z toho 8 let profesionálně. Závodil jsem za ASO Dukla Brno a dobře vím, co znamená náročný trénink, únava, přetížení i potřeba kvalitní regenerace.
            </p>
            <p>
              Po sportovní kariéře jsem se začal věnovat sportovním a regeneračním masážím. Masíruji už 7 let a nejvíce zkušeností mám se sportovci, především s cyklisty. Díky vlastní závodní minulosti dokážu lépe vnímat, co tělo po výkonu potřebuje a jak může masáž pomoct nejen regeneraci, ale i celkovému pocitu z pohybu.
            </p>
            <p>
              Mým cílem je, aby klient odcházel uvolněnější, lehčí a s pocitem skutečné úlevy. Kromě samotné masáže dbám i na příjemnou atmosféru — klidné prostředí, hudbu, kvalitní oleje a přirozenou komunikaci bez zbytečného tlaku.
            </p>
          </div>

          <blockquote className="mt-8 relative pl-6 border-l-2 border-primary/40 italic text-foreground/90">
            <p className="leading-relaxed">
              „Díky vlastní zkušenosti z profesionální cyklistiky dobře vím, jak důležitá je regenerace. Masáž proto vnímám nejen jako uvolnění svalů, ale jako součást péče o tělo, výkon i dlouhodobé zdraví.“
            </p>
          </blockquote>

          <div className="mt-10 flex flex-wrap gap-3">
            {["Dukla Brno", "Reprezentace ČR", "Olympionici", "Individuální přístup"].map((t) => (
              <span
                key={t}
                className="rounded-full border border-border bg-card px-4 py-2 text-sm text-muted-foreground"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
