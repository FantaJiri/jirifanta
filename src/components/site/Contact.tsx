import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import whatsappQr from "@/assets/whatsapp-qr.png";

const PHONE = "+420733151249";
const PHONE_DISPLAY = "+420 733 151 249";
const EMAIL = "fantajiri@email.cz";
const WHATSAPP_URL =
  "https://wa.me/420733151249?text=Dobr%C3%BD%20den%2C%20cht%C4%9Bl%2Fa%20bych%20se%20objednat%20na%20sportovn%C3%AD%20mas%C3%A1%C5%BE.";

export function Contact() {
  return (
    <section
      id="kontakt"
      className="py-24 md:py-32 bg-card/30 border-t border-border"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-2 gap-12 lg:gap-20">
        <div className="reveal">
          <p className="text-xs uppercase tracking-[0.25em] text-primary">Kontakt</p>
          <h2 className="mt-4 text-3xl md:text-5xl font-bold leading-tight">
            Domluvme si termín
          </h2>
          <p className="mt-6 text-muted-foreground leading-relaxed max-w-md">
            Napište mi, zavolejte nebo přijďte. Rád vám doporučím vhodný typ masáže
            a najdeme termín, který bude vyhovovat.
          </p>

          <div className="mt-10 space-y-5">
            <a href={`tel:${PHONE}`} className="flex items-start gap-4 group">
              <div className="h-12 w-12 rounded-xl bg-primary/10 text-primary grid place-items-center group-hover:bg-primary group-hover:text-primary-foreground transition">
                <Phone size={18} />
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-muted-foreground">Telefon</p>
                <p className="font-medium">{PHONE_DISPLAY}</p>
              </div>
            </a>
            <a href={`mailto:${EMAIL}`} className="flex items-start gap-4 group">
              <div className="h-12 w-12 rounded-xl bg-primary/10 text-primary grid place-items-center group-hover:bg-primary group-hover:text-primary-foreground transition">
                <Mail size={18} />
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-muted-foreground">E-mail</p>
                <p className="font-medium break-all">{EMAIL}</p>
              </div>
            </a>
            <div className="flex items-start gap-4">
              <div className="h-12 w-12 rounded-xl bg-primary/10 text-primary grid place-items-center">
                <MapPin size={18} />
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-muted-foreground">Provozovna</p>
                <p className="font-medium">Třída Generála Píky 4, 613 00 Brno</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="h-12 w-12 rounded-xl bg-primary/10 text-primary grid place-items-center">
                <MapPin size={18} />
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-muted-foreground">Provozovna</p>
                <p className="font-medium">
                  Poliklinika Lesná, Halasovo náměstí 597/1, 638 00 Brno – Lesná
                </p>
              </div>
            </div>
          </div>

          <div className="mt-10 flex items-start gap-5">
            <div className="rounded-2xl bg-white p-3 shadow-sm border border-border shrink-0">
              <img
                src={whatsappQr}
                alt="QR kód WhatsApp kontakt Jiří Fanta"
                width={180}
                height={180}
                className="h-[140px] w-[140px] md:h-[180px] md:w-[180px] object-contain block"
                loading="lazy"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).style.display = "none";
                }}
              />
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider text-muted-foreground">WhatsApp</p>
              <p className="font-medium">Naskenujte QR kód</p>
              <p className="mt-1 text-sm text-muted-foreground max-w-xs">
                Naskenováním kódu fotoaparátem ve WhatsAppu si mě přidáte do kontaktů.
              </p>
            </div>
          </div>
        </div>

        <div className="reveal rounded-3xl border border-border bg-card p-8 md:p-10 flex flex-col">
          <p className="text-xs uppercase tracking-[0.25em] text-primary">Objednání</p>
          <h3 className="mt-3 text-2xl md:text-3xl font-bold leading-tight">
            Nejrychleji se domluvíme přímo
          </h3>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Vyberte si způsob, který vám vyhovuje. Ozvu se obvykle do několika hodin
            a domluvíme termín, který bude sedět.
          </p>

          <div className="mt-8 space-y-3">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-3 rounded-full bg-primary text-primary-foreground py-4 px-6 font-medium hover:opacity-90 transition"
            >
              <MessageCircle size={18} />
              Napsat na WhatsApp
            </a>
            <a
              href={`tel:${PHONE}`}
              className="w-full inline-flex items-center justify-center gap-3 rounded-full border border-border bg-background py-4 px-6 font-medium hover:bg-card transition"
            >
              <Phone size={18} />
              Zavolat {PHONE_DISPLAY}
            </a>
            <a
              href={`mailto:${EMAIL}`}
              className="w-full inline-flex items-center justify-center gap-3 rounded-full border border-border bg-background py-4 px-6 font-medium hover:bg-card transition"
            >
              <Mail size={18} />
              Poslat e-mail
            </a>
          </div>

          <p className="mt-8 text-xs text-muted-foreground leading-relaxed">
            Reaguji obvykle v průběhu dne. Ve dnech, kdy ošetřuji klienty, může odpověď
            chvíli trvat — děkuji za pochopení.
          </p>
        </div>
      </div>
    </section>
  );
}
