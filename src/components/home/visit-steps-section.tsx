import { RevealStagger } from '@/components/shared/reveal';
import { SectionHeading } from '@/components/shared/section-heading';
import { visitSteps } from '@/lib/site-config';
import './visit-steps-section.scss';

export function VisitStepsSection() {
  return (
    <section className="visit-steps-section">
      <div className="visit-steps-section__container">
        <SectionHeading
          title="Jak wygląda wizyta?"
          subtitle="Prosty proces krok po kroku — bez stresu i bez zobowiązań."
        />

        <RevealStagger as="ol" className="visit-steps-section__grid">
          {visitSteps.map(step => (
            <li key={step.step} className="visit-steps-section__step">
              <span className="visit-steps-section__step-number">{step.step}</span>
              <h3 className="visit-steps-section__step-title">{step.title}</h3>
              <p className="visit-steps-section__step-description">{step.description}</p>
            </li>
          ))}
        </RevealStagger>
      </div>
    </section>
  );
}
