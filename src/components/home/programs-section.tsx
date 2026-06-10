import { Brain, Droplets, type LucideIcon, Wind } from 'lucide-react';
import Link from 'next/link';
import { RevealStagger } from '@/components/shared/reveal';
import { SectionHeading } from '@/components/shared/section-heading';
import { buttonVariants } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { programs } from '@/lib/site-config';
import { cn } from '@/lib/utils';
import './programs-section.scss';

const iconMap: Record<string, LucideIcon> = {
  brain: Brain,
  droplets: Droplets,
  wind: Wind,
};

export function ProgramsSection() {
  return (
    <section id="uslugi" className="programs-section">
      <div className="programs-section__container">
        <SectionHeading title="Nasze usługi" />

        <RevealStagger className="programs-section__grid">
          {programs.map(program => {
            const Icon = iconMap[program.icon];

            return (
              <Card key={program.id} className="programs-section__card">
                <CardHeader className="programs-section__card-header">
                  <div className="programs-section__card-icon">
                    <Icon className="programs-section__card-icon-svg" aria-hidden />
                  </div>
                  <CardTitle className="programs-section__card-title">
                    {program.number}. {program.title}
                    <span className="programs-section__card-subtitle">{program.subtitle}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="programs-section__card-content">
                  {program.description}
                </CardContent>
                <CardFooter className="programs-section__card-footer">
                  <Link
                    href={program.href}
                    className={cn(buttonVariants({ size: 'lg' }), 'programs-section__card-cta')}
                  >
                    Więcej →
                  </Link>
                </CardFooter>
              </Card>
            );
          })}
        </RevealStagger>

        <div className="programs-section__footer">
          <Link
            href="/aparat-bazowy"
            className={cn(
              buttonVariants({ variant: 'outline', size: 'lg' }),
              'programs-section__footer-cta',
            )}
          >
            Poznaj aparat Vitberg RS2
          </Link>
        </div>
      </div>
    </section>
  );
}
