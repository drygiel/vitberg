import {
  Award,
  BadgeCheck,
  HeartPulse,
  Move,
  ShieldCheck,
  Smile,
  type LucideIcon,
} from "lucide-react";

import { SectionHeading } from "@/components/shared/section-heading";
import { whyBenefits } from "@/lib/site-config";

const iconMap: Record<string, LucideIcon> = {
  "heart-pulse": HeartPulse,
  move: Move,
  "shield-check": ShieldCheck,
  "badge-check": BadgeCheck,
  smile: Smile,
  award: Award,
};

export function WhySection() {
  return (
    <section id="dlaczego-warto" className="py-16 md:py-20">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 lg:grid-cols-2 lg:px-6">
        <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-secondary ring-1 ring-primary/20">
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-secondary to-primary/10">
            <p className="max-w-xs px-6 text-center text-base font-medium text-muted-foreground">
              Zdjęcie: aktywna para seniorów ciesząca się życiem
            </p>
          </div>
        </div>

        <div>
          <SectionHeading title="Dlaczego warto?" className="text-left" />
          <p className="mt-6 text-lg leading-relaxed">
            Metoda opiera się na ponad 76 badaniach własnych, tysiącach ankiet
            oraz publikacjach w prestiżowych pismach medycznych. Zabieg jest
            całkowicie bezpieczny, bezbolesny i bezwysiłkowy — pacjent po prostu
            leży i odpoczywa.
          </p>
          <p className="mt-4 text-lg font-semibold text-primary">
            Aż 96% fizjoterapeutów potwierdza skuteczność wibroterapii w codziennej
            praktyce medycznej.
          </p>

          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {whyBenefits.map((benefit) => {
              const Icon = iconMap[benefit.icon];
              return (
                <li key={benefit.title} className="flex items-center gap-3">
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-secondary text-primary">
                    <Icon className="size-5" aria-hidden />
                  </span>
                  <span className="font-semibold">{benefit.title}</span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
