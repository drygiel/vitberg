import Link from "next/link";

import { SectionHeading } from "@/components/shared/section-heading";

import "./about-section.scss";

export function AboutSection() {
  return (
    <section className="about-section">
      <div className="about-section__container">
        <SectionHeading title="Kim jesteśmy" />
        <div className="about-section__content">
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
            <Link href="/o-nas" className="about-section__link">
              Dowiedz się więcej o nas →
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
