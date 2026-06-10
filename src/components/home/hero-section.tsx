import Image from "next/image";
import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function HeroSection() {
  return (
    <section className="relative min-h-[min(90vh,800px)] w-full overflow-hidden">
      <Image
        src="/images/hero.png"
        alt="Para seniorów podczas zabiegu wibroterapii Vitberg z terapeutą"
        fill
        priority
        sizes="100vw"
        className="object-cover object-[center_30%]"
      />
      {/* radial-gradient(115% 160% at 0 0, #faf8f5ed 40%
40%
, #0000 80%) */}
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(ellipse_115%_160%_at_0%_0%,rgba(250,248,245,0.90)_40%,transparent_80%)]"
      />

      <div className="relative z-10 mx-auto flex min-h-[min(90vh,800px)] max-w-6xl items-center px-4 py-16 lg:px-6 lg:py-24">
        <div className="max-w-xl space-y-6 md:max-w-2xl">
          <h1 className="font-heading text-3xl font-extrabold leading-tight tracking-wide text-primary uppercase md:text-4xl lg:text-5xl">
            Bezpłatna wibroterapia w Chełmie.
          </h1>
          <h2>Odzyskaj sprawność i zapomnij o bólu!</h2>
          <p className="text-lg leading-relaxed text-foreground">
            Poznaj polską metodę rehabilitacji domowej, z której skorzystały już
            tysiące pacjentów. Odwiedź naszą Poradnię i wypróbuj urządzenia
            Vitberg RS2 zupełnie za darmo.
          </p>
          <Link
            href="/#kontakt"
            className={cn(
              buttonVariants({ size: "lg" }),
              "h-14 rounded-full px-8 text-base font-bold tracking-wide uppercase",
            )}
          >
            Zarezerwuj bezpłatny zabieg testowy
          </Link>
        </div>
      </div>
    </section>
  );
}
