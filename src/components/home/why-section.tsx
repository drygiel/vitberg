import {
  Award,
  BadgeCheck,
  HeartPulse,
  type LucideIcon,
  Move,
  ShieldCheck,
  Smile,
} from 'lucide-react';
import Image from 'next/image';
import { Reveal, RevealStagger } from '@/components/shared/reveal';
import { SectionHeading } from '@/components/shared/section-heading';
import { whyBenefits } from '@/lib/site-config';
import { getImagePath } from '@/lib/utils';
import './why-section.scss';

const iconMap: Record<string, LucideIcon> = {
  'heart-pulse': HeartPulse,
  move: Move,
  'shield-check': ShieldCheck,
  'badge-check': BadgeCheck,
  smile: Smile,
  award: Award,
};

export function WhySection() {
  return (
    <section id="dlaczego-warto" className="why-section">
      <div className="why-section__container">
        <Reveal duration={1000} className="why-section__image-wrapper">
          <Image
            src={getImagePath('/images/active_seniors.png')}
            alt="Aktywna para seniorów ciesząca się życiem"
            fill
            sizes="(max-width: 1024px) 100vw, 528px"
            className="why-section__image"
          />
        </Reveal>

        <div>
          <SectionHeading title="Dlaczego warto?" />
          <p className="why-section__intro">
            Metoda opiera się na ponad 76 badaniach własnych, tysiącach ankiet oraz publikacjach w
            prestiżowych pismach medycznych. Zabieg jest całkowicie bezpieczny, bezbolesny i
            bezwysiłkowy — pacjent po prostu leży i odpoczywa.
          </p>
          <p className="why-section__highlight">
            Aż 96% fizjoterapeutów potwierdza skuteczność wibroterapii w codziennej praktyce
            medycznej.
          </p>

          <RevealStagger as="ul" className="why-section__benefits">
            {whyBenefits.map(benefit => {
              const Icon = iconMap[benefit.icon];
              return (
                <li key={benefit.title} className="why-section__benefit">
                  <span className="why-section__benefit-icon">
                    <Icon className="why-section__benefit-icon-svg" aria-hidden />
                  </span>
                  <span className="why-section__benefit-title">{benefit.title}</span>
                </li>
              );
            })}
          </RevealStagger>
        </div>
      </div>
    </section>
  );
}
