import Link from "next/link";

import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function HeroSection() {
  return (
    <section className="bg-secondary/60">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 lg:grid-cols-2 lg:gap-16 lg:px-6 lg:py-24">
        <div className="space-y-6">
          <h1 className="font-heading text-3xl font-extrabold leading-tight tracking-wide text-primary uppercase md:text-4xl lg:text-5xl">
            Bezpłatna wibroterapia w Chełmie. Odzyskaj sprawność i zapomnij o bólu!
          </h1>
          <p className="text-lg leading-relaxed text-foreground">
            Poznaj polską metodę rehabilitacji domowej, z której skorzystały już
            tysiące pacjentów. Odwiedź naszą Poradnię i wypróbuj urządzenia Vitberg
            RS2 zupełnie za darmo.
          </p>
          <Link
            href="/#kontakt"
            className={cn(
              buttonVariants({ size: "lg" }),
              "h-14 rounded-full px-8 text-base font-bold tracking-wide uppercase"
            )}
          >
            Zarezerwuj bezpłatny zabieg testowy
          </Link>
        </div>

        <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-primary/10 ring-1 ring-primary/20">
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-secondary to-primary/20">
            <p className="max-w-xs px-6 text-center text-base font-medium text-muted-foreground">
              Zdjęcie: para seniorów podczas zabiegu wibroterapii z terapeutą
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
