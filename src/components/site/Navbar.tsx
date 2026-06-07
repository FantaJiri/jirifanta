"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#o-mne", label: "O mně" },
  { href: "#proc-ja", label: "Proč já" },
  { href: "#sluzby", label: "Služby" },
  { href: "#reference", label: "Reference" },
  { href: "#galerie", label: "Galerie" },
  { href: "#kontakt", label: "Kontakt" },
];

const WA_LINK =
  "https://wa.me/420733151249?text=Dobrý den, chtěl/a bych se objednat na sportovní masáž.";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "glass-card border-b" : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10 h-16 md:h-20 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2 group">
          <span className="h-9 w-9 rounded-xl bg-gradient-to-br from-primary to-primary/60 grid place-items-center text-primary-foreground font-display font-bold">
            JF
          </span>
          <span className="hidden sm:block font-display text-base tracking-tight">
            Jiří Fanta <span className="text-muted-foreground">— Sportovní masáže</span>
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            
              key={l.href}
              href={l.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* Desktop: WhatsApp + Objednat */}
        <div className="hidden lg:flex items-center gap-3">
          
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-[#25D366] text-[#25D366] px-5 py-2.5 text-sm font-medium hover:bg-[#25D366]/10 transition"
          >
            WhatsApp
          </a>
          
            href="#kontakt"
            className="inline-flex items-center rounded-full bg-primary text-primary-foreground px-5 py-2.5 text-sm font-medium hover:opacity-90 transition"
          >
            Objednat masáž
          </a>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden inline-flex items-center justify-center h-10 w-10 rounded-lg border border-border"
          aria-label="Menu"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-card/95 backdrop-blur-md">
          <div className="px-6 py-4 flex flex-col gap-3">
            {links.map((l) => (
              
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-2 text-foreground"
              >
                {l.label}
              </a>
            ))}
            {/* Mobile: WhatsApp + Objednat */}
            
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex justify-center rounded-full border border-[#25D366] text-[#25D366] px-5 py-3 text-sm font-medium hover:bg-[#25D366]/10 transition"
            >
              WhatsApp
            </a>
            
              href="#kontakt"
              onClick={() => setOpen(false)}
              className="inline-flex justify-center rounded-full bg-primary text-primary-foreground px-5 py-3 text-sm font-medium"
            >
              Objednat masáž
            </a>
          </div>
        </div>
      )}
    </header>
  );
}