import Link from "next/link";
import { Clock, MapPin, Phone } from "lucide-react";

import { siteConfig } from "@/lib/site-config";

const socialLinks = [
  { label: "Facebook", href: siteConfig.social.facebook, abbr: "Fb" },
  { label: "Instagram", href: siteConfig.social.instagram, abbr: "Ig" },
  { label: "YouTube", href: siteConfig.social.youtube, abbr: "Yt" },
] as const;

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 lg:grid-cols-3 lg:px-6">
        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <MapPin className="mt-1 size-5 shrink-0" aria-hidden />
            <div>
              <p className="font-semibold">Adres</p>
              <p>{siteConfig.address.street}</p>
              <p>{siteConfig.address.city}</p>
            </div>
          </div>
        </div>

        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <Phone className="mt-1 size-5 shrink-0" aria-hidden />
            <div>
              <p className="font-semibold">Telefon</p>
              <a
                href={`tel:${siteConfig.phone}`}
                className="text-lg font-bold underline-offset-2 hover:underline"
              >
                {siteConfig.phoneDisplay}
              </a>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Clock className="mt-1 size-5 shrink-0" aria-hidden />
            <div>
              <p className="font-semibold">Godziny otwarcia</p>
              <p>{siteConfig.hours}</p>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <p className="font-semibold">Śledź nas</p>
          <div className="flex gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="flex size-10 items-center justify-center rounded-full bg-white/10 text-sm font-bold transition-colors hover:bg-white/20"
              >
                {social.abbr}
              </a>
            ))}
          </div>
          <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-white/80">
            <Link href="/o-nas" className="hover:text-white">
              O nas
            </Link>
            <Link href="/o-terapii" className="hover:text-white">
              O terapii
            </Link>
            <Link href="/wspolpraca" className="hover:text-white">
              Współpraca
            </Link>
            <Link href="/kariera" className="hover:text-white">
              Kariera
            </Link>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 py-4 text-center text-sm text-white/70">
        © {new Date().getFullYear()} {siteConfig.name}. Wszelkie prawa zastrzeżone.
      </div>
    </footer>
  );
}
