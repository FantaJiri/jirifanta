import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    text: "Profesionální přístup a perfektní výsledky. Po každé masáži cítím obrovský rozdíl v regeneraci.",
    author: "Martin K.",
    role: "Cyklista, hobby",
  },
  {
    text: "Jiří mi pomohl zvládnout přípravu na maraton. Bez něj bych to nedal.",
    author: "Petra S.",
    role: "Běžkyně",
  },
  {
    text: "Jako vrcholový sportovec oceňuji jeho znalosti a individuální přístup. Doporučuji.",
    author: "Tomáš H.",
    role: "Triatlonista",
  },
];

export function Testimonials() {
  const [i, setI] = useState(0);
  const prev = () => setI((p) => (p - 1 + testimonials.length) % testimonials.length);
  const next = () => setI((p) => (p + 1) % testimonials.length);

  return (
    <section id="reference" className="py-24 md:py-32 bg-card/30 border-y border-border">
      <div className="mx-auto max-w-5xl px-6 lg:px-10">
        <div className="reveal text-center">
          <p className="text-xs uppercase tracking-[0.25em] text-primary">Reference klientů</p>
          <h2 className="mt-4 text-3xl md:text-5xl font-bold">Co říkají moji klienti</h2>
        </div>

        <div className="reveal mt-16 relative">
          <Quote className="absolute -top-6 left-1/2 -translate-x-1/2 text-primary/30" size={80} />
          <div className="relative rounded-3xl border border-border bg-card p-10 md:p-16 text-center min-h-[280px] flex flex-col justify-center">
            <p className="text-xl md:text-2xl font-display leading-relaxed text-foreground">
              „{testimonials[i].text}"
            </p>
            <div className="mt-8">
              <p className="font-semibold">{testimonials[i].author}</p>
              <p className="text-sm text-muted-foreground">{testimonials[i].role}</p>
            </div>
          </div>

          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              onClick={prev}
              aria-label="Předchozí"
              className="h-11 w-11 rounded-full border border-border hover:bg-card transition grid place-items-center"
            >
              <ChevronLeft size={18} />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setI(idx)}
                  aria-label={`Reference ${idx + 1}`}
                  className={`h-1.5 rounded-full transition-all ${
                    idx === i ? "w-8 bg-primary" : "w-1.5 bg-muted-foreground/40"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={next}
              aria-label="Další"
              className="h-11 w-11 rounded-full border border-border hover:bg-card transition grid place-items-center"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
