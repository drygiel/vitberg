import Link from "next/link";

import { RevealStagger } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { modules } from "@/lib/site-config";
import { cn } from "@/lib/utils";

import "./modules-section.scss";

export function ModulesSection() {
  return (
    <section className="modules-section">
      <div className="modules-section__container">
        <SectionHeading
          title="Moduły celowane"
          subtitle="Precyzyjne dopasowanie terapii do Twoich dolegliwości — system SKOT (Skierowanych Oscylacji Terapeutycznych)."
        />

        <RevealStagger className="modules-section__grid">
          {modules.map((mod) => (
            <Card key={mod.href} className="modules-section__card">
              <CardHeader>
                <CardTitle className="modules-section__card-title">
                  {mod.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="modules-section__card-content">
                {mod.description}
              </CardContent>
              <CardFooter className="modules-section__card-footer">
                <Link
                  href={mod.href}
                  className={cn(
                    buttonVariants({ variant: "link" }),
                    "modules-section__card-link"
                  )}
                >
                  Czytaj więcej →
                </Link>
              </CardFooter>
            </Card>
          ))}
        </RevealStagger>

        <p className="modules-section__footer-link">
          <Link
            href="/zastosowanie"
            className="modules-section__footer-link-anchor"
          >
            Zobacz wszystkie zastosowania →
          </Link>
        </p>
      </div>
    </section>
  );
}
