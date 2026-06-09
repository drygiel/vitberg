import Link from "next/link";

import { SectionHeading } from "@/components/shared/section-heading";

export function AboutSection() {
  return (
    <section className="py-16 md:py-20">
      <div className="mx-auto max-w-4xl px-4 lg:px-6">
        <SectionHeading title="Kim jesteśmy" />
        <div className="mt-8 space-y-6 text-lg leading-relaxed">
          <p>
            Vitberg to polska firma, która od ponad 30 lat wyznacza standardy
            wibroterapii. Nasze aparaty są certyfikowanymi wyrobami medycznymi
            klasy IIa, używanymi w szpitalach i placówkach rehabilitacyjnych.
          </p>
          <p>
            Teraz nowoczesna technologia jest dostępna dla każdego mieszkańca
            Chełma i okolic w naszej lokalnej Poradni.
          </p>
          <p>
            <Link href="/o-nas" className="font-semibold text-primary underline-offset-2 hover:underline">
              Dowiedz się więcej o nas →
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
