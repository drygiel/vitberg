import { BookingForm } from '@/components/shared/booking-form';
import { Reveal } from '@/components/shared/reveal';
import { SectionHeading } from '@/components/shared/section-heading';
import { siteConfig } from '@/lib/site-config';
import './contact-section.scss';

export function ContactSection() {
  return (
    <section id="kontakt" className="contact-section">
      <div className="contact-section__container">
        <SectionHeading title="Znajdź nas w Twoim mieście" className="contact-section__heading" />

        <div className="contact-section__map-wrapper">
          <div className="contact-section__map-frame">
            <iframe
              title="Mapa — Poradnia Vitberg Chełm"
              src={siteConfig.address.maps.embed}
              className="contact-section__map"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <Reveal duration={2000} className="contact-section__form">
            <BookingForm />
          </Reveal>
        </div>

        <p className="contact-section__phone-text">
          Lub zadzwoń bezpośrednio:{' '}
          <a href={`tel:${siteConfig.phone}`} className="contact-section__phone-link">
            {siteConfig.phoneDisplay}
          </a>
        </p>
      </div>
    </section>
  );
}
