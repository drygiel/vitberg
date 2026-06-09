import Link from "next/link";

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

export function ModulesSection() {
  return (
    <section className="bg-secondary/40 py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4 lg:px-6">
        <SectionHeading
          title="Moduły celowane"
          subtitle="Precyzyjne dopasowanie terapii do Twoich dolegliwości — system SKOT (Skierowanych Oscylacji Terapeutycznych)."
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {modules.map((mod) => (
            <Card
              key={mod.href}
              className="border border-primary/20 bg-card transition-shadow hover:shadow-md"
            >
              <CardHeader>
                <CardTitle className="font-heading text-lg font-bold text-primary">
                  {mod.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-base">{mod.description}</CardContent>
              <CardFooter className="border-0 bg-transparent pb-4">
                <Link
                  href={mod.href}
                  className={cn(
                    buttonVariants({ variant: "link" }),
                    "px-0 font-semibold text-primary"
                  )}
                >
                  Czytaj więcej →
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>

        <p className="mt-8 text-center">
          <Link
            href="/zastosowanie"
            className="font-semibold text-primary underline-offset-2 hover:underline"
          >
            Zobacz wszystkie zastosowania →
          </Link>
        </p>
      </div>
    </section>
  );
}
