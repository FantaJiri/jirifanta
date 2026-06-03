import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";

const images = [
  { src: g1, alt: "Masážní místnost", className: "md:row-span-2 md:col-span-2" },
  { src: g2, alt: "Masáž zad" },
  { src: g3, alt: "Masáž lýtka cyklisty" },
  { src: g4, alt: "Běžec při tréninku", className: "md:col-span-2" },
];

export function Gallery() {
  return (
    <section id="galerie" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="reveal max-w-2xl">
          <p className="text-xs uppercase tracking-[0.25em] text-primary">Fotogalerie</p>
          <h2 className="mt-4 text-3xl md:text-5xl font-bold">Pohled do mojí praxe</h2>
        </div>

        <div className="reveal mt-12 grid grid-cols-2 md:grid-cols-4 md:auto-rows-[220px] gap-4">
          {images.map((img, i) => (
            <div
              key={i}
              className={`relative overflow-hidden rounded-2xl border border-border group ${
                img.className ?? ""
              }`}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-60" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
