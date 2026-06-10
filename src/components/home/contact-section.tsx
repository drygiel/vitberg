import { Reveal } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { BookingForm } from "@/components/shared/booking-form";
import { siteConfig } from "@/lib/site-config";

export function ContactSection() {
  return (
    <section id="kontakt" className="bg-primary py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4 lg:px-6">
        <SectionHeading
          title="Znajdź nas w Twoim mieście"
          className="[&_h2]:text-primary-foreground"
        />

        <div className="relative mt-12">
          <div className="overflow-hidden rounded-2xl bg-primary-foreground/10 ring-1 ring-white/20">
            <iframe
              title="Mapa — Poradnia Vitberg Chełm"
              src="https://maps.google.com/maps?q=Che%C5%82m%20Polska&t=&z=14&ie=UTF8&iwloc=&output=embed"
              className="aspect-16/7 w-full border-0 grayscale-30%"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <Reveal duration={2000} className="relative z-10 mx-auto -mt-16 max-w-xl px-4 md:-mt-20">
            <BookingForm />
          </Reveal>
        </div>

        <p className="mt-8 text-center text-primary-foreground/90">
          Lub zadzwoń bezpośrednio:{" "}
          <a
            href={`tel:${siteConfig.phone}`}
            className="font-bold underline-offset-2 hover:underline"
          >
            {siteConfig.phoneDisplay}
          </a>
        </p>
      </div>
    </section>
  );
}
