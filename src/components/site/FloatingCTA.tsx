import { Calendar } from "lucide-react";

export function FloatingCTA() {
  return (
    <a
      href="#kontakt"
      className="fixed bottom-6 right-6 z-40 inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-5 py-3.5 font-medium shadow-[var(--shadow-glow)] hover:scale-105 transition-transform"
    >
      <Calendar size={18} />
      <span className="hidden sm:inline">Objednat masáž</span>
    </a>
  );
}
