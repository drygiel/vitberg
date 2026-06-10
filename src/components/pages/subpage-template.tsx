import Link from "next/link";
import { ChevronRight } from "lucide-react";

import { BookingForm } from "@/components/shared/booking-form";
import { buttonVariants } from "@/components/ui/button";
import type { Subpage } from "@/lib/pages";
import { cn } from "@/lib/utils";

import "./subpage-template.scss";

type SubpageTemplateProps = {
  page: Subpage;
};

export function SubpageTemplate({ page }: SubpageTemplateProps) {
  return (
    <>
      <section className="subpage-template__hero">
        <div className="subpage-template__hero-container">
          <nav aria-label="Breadcrumb" className="subpage-template__breadcrumb">
            <ol className="subpage-template__breadcrumb-list">
              <li>
                <Link href="/" className="subpage-template__breadcrumb-link">
                  Strona główna
                </Link>
              </li>
              <ChevronRight
                className="subpage-template__breadcrumb-separator"
                aria-hidden
              />
              <li className="subpage-template__breadcrumb-current">
                {page.breadcrumb}
              </li>
            </ol>
          </nav>
          <h1 className="subpage-template__title">{page.title}</h1>
          <p className="subpage-template__description">{page.description}</p>
        </div>
      </section>

      <section className="subpage-template__content">
        <div className="subpage-template__content-container">
          {page.sections.map((section) => (
            <article key={section.title}>
              <h2 className="subpage-template__section-title">
                {section.title}
              </h2>
              <p className="subpage-template__section-content">
                {section.content}
              </p>
              {section.items && (
                <ul className="subpage-template__section-list">
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
        <section className="subpage-template__cta">
          <div className="subpage-template__cta-container">
            <BookingForm />
            <div className="subpage-template__cta-footer">
              <Link
                href="/"
                className={cn(
                  buttonVariants({ variant: "link" }),
                  "subpage-template__back-link"
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
