import { SectionHeading } from "@/components/shared/section-heading";
import { visitSteps } from "@/lib/site-config";

export function VisitStepsSection() {
  return (
    <section className="bg-secondary/40 py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4 lg:px-6">
        <SectionHeading
          title="Jak wygląda wizyta?"
          subtitle="Prosty proces krok po kroku — bez stresu i bez zobowiązań."
        />

        <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {visitSteps.map((step) => (
            <li
              key={step.step}
              className="relative rounded-xl border-2 border-primary/20 bg-card p-6 shadow-sm"
            >
              <span className="mb-4 flex size-10 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground">
                {step.step}
              </span>
              <h3 className="font-heading text-lg font-bold text-primary">
                {step.title}
              </h3>
              <p className="mt-2 text-base text-muted-foreground">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
