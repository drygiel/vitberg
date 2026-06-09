import Link from "next/link";
import { ChevronRight } from "lucide-react";

import { BookingForm } from "@/components/shared/booking-form";
import { buttonVariants } from "@/components/ui/button";
import type { Subpage } from "@/lib/pages";
import { cn } from "@/lib/utils";

type SubpageTemplateProps = {
  page: Subpage;
};

export function SubpageTemplate({ page }: SubpageTemplateProps) {
  return (
    <>
      <section className="bg-secondary/60 py-12 md:py-16">
        <div className="mx-auto max-w-4xl px-4 lg:px-6">
          <nav aria-label="Breadcrumb" className="mb-6 text-sm">
            <ol className="flex items-center gap-1 text-muted-foreground">
              <li>
                <Link href="/" className="hover:text-primary">
                  Strona główna
                </Link>
              </li>
              <ChevronRight className="size-4" aria-hidden />
              <li className="font-medium text-foreground">{page.breadcrumb}</li>
            </ol>
          </nav>
          <h1 className="font-heading text-3xl font-extrabold tracking-wide text-primary uppercase md:text-4xl">
            {page.title}
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">{page.description}</p>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-4xl space-y-12 px-4 lg:px-6">
          {page.sections.map((section) => (
            <article key={section.title}>
              <h2 className="font-heading text-xl font-bold text-primary md:text-2xl">
                {section.title}
              </h2>
              <p className="mt-4 text-lg leading-relaxed">{section.content}</p>
              {section.items && (
                <ul className="mt-4 list-inside list-disc space-y-2 text-lg">
                  {section.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              )}
            </article>
          ))}
        </div>
      </section>

      {page.cta && (
        <section className="bg-secondary/40 py-12 md:py-16">
          <div className="mx-auto max-w-xl px-4 lg:px-6">
            <BookingForm />
            <div className="mt-6 text-center">
              <Link
                href="/"
                className={cn(
                  buttonVariants({ variant: "link" }),
                  "font-semibold text-primary"
                )}
              >
                ← Wróć na stronę główną
              </Link>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
