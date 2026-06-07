import portrait from "@/assets/about-portrait.jpg";

export function About() {
  return (
    <section id="o-mne" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div className="reveal relative">
          <div className="absolute -inset-4 bg-gradient-to-tr from-primary/20 to-transparent rounded-3xl blur-2xl" />
          <div className="relative overflow-hidden rounded-3xl border border-border">
            <img
              src={portrait}
              alt="Jiří Fanta — sportovní masér"
              width={1024}
              height={1024}
              loading="lazy"
              className="w-full h-auto object-cover"
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
              Jmenuji se <span className="text-foreground font-medium">Jiří Fanta</span> a již
              více než 7 let působím jako sportovní masér vrcholových sportovců.
            </p>
            <p>
              Měl jsem možnost spolupracovat s reprezentanty České republiky a sportovci
              z armádního sportovního centra <span className="text-foreground">Dukla Brno</span>,
              včetně účastníků olympijských her.
            </p>
            <p>
              Ve své práci propojuji zkušenosti ze sportovního prostředí s individuálním
              přístupem ke každému klientovi.
            </p>
            <p>
              Mým cílem není pouze krátkodobá úleva, ale dlouhodobě lepší funkce pohybového
              aparátu, kvalitnější regenerace a podpora sportovního výkonu.
            </p>
          </div>

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
