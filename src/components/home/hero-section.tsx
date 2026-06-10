import Image from 'next/image';
import { HashScrollLink } from '@/components/shared/hash-scroll-link';
import { ScrollIndicator } from '@/components/shared/scroll-indicator';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import './hero-section.scss';

export function HeroSection() {
  return (
    <section id="hero" className="hero-section">
      <Image
        src="/images/hero.jpg"
        alt="Para seniorów podczas zabiegu wibroterapii Vitberg z terapeutą"
        fill
        priority
        sizes="100vw"
        className="hero-section__image"
      />
      <div aria-hidden className="hero-section__overlay" />

      <div className="hero-section__content">
        <div className="hero-section__text">
          <h1 className="hero-section__title">Bezpłatna wibroterapia w Chełmie</h1>
          <h2>Odzyskaj sprawność i zapomnij o bólu!</h2>
          <p className="hero-section__description">
            Poznaj polską metodę rehabilitacji domowej, z której skorzystały już tysiące pacjentów.
            Odwiedź naszą Poradnię i wypróbuj urządzenia Vitberg RS2 zupełnie za darmo.
          </p>
          <HashScrollLink
            href="/#kontakt"
            className={cn(buttonVariants({ size: 'lg' }), 'hero-section__cta')}
          >
            Zarezerwuj bezpłatne zabiegi testowe
          </HashScrollLink>
        </div>
      </div>

      <ScrollIndicator />
    </section>
  );
}
