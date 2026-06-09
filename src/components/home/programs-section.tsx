import Link from "next/link";
import {
  Brain,
  Droplets,
  Wind,
  type LucideIcon,
} from "lucide-react";

import { SectionHeading } from "@/components/shared/section-heading";
import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { programs } from "@/lib/site-config";
import { cn } from "@/lib/utils";

const iconMap: Record<string, LucideIcon> = {
  brain: Brain,
  droplets: Droplets,
  wind: Wind,
};

export function ProgramsSection() {
  return (
    <section id="uslugi" className="bg-background py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4 lg:px-6">
        <SectionHeading title="Nasze usługi" />

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {programs.map((program) => {
            const Icon = iconMap[program.icon];
            return (
              <Card
                key={program.id}
                className="flex flex-col border-2 border-primary/30 shadow-md transition-shadow hover:shadow-lg"
              >
                <CardHeader className="items-center text-center">
                  <div className="mb-2 flex size-14 items-center justify-center rounded-2xl bg-secondary text-primary">
                    <Icon className="size-7" aria-hidden />
                  </div>
                  <CardTitle className="font-heading text-lg font-bold text-primary">
                    {program.number}. {program.title}
                    <span className="block text-base font-semibold">
                      {program.subtitle}
                    </span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-1 text-center text-base">
                  {program.description}
                </CardContent>
                <CardFooter className="justify-center border-0 bg-transparent pb-6">
                  <Link
                    href={program.href}
                    className={cn(
                      buttonVariants({ size: "lg" }),
                      "rounded-full px-6 font-bold tracking-wide uppercase",
                      "highlight" in program && program.highlight
                        ? "bg-accent text-accent-foreground hover:bg-accent/90"
                        : undefined
                    )}
                  >
                    {"highlight" in program && program.highlight
                      ? "Nasze usługi"
                      : "Umów wizytę"}
                  </Link>
                </CardFooter>
              </Card>
            );
          })}
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/aparat-bazowy"
            className={cn(
              buttonVariants({ variant: "outline", size: "lg" }),
              "rounded-full border-primary px-6 font-semibold text-primary"
            )}
          >
            Poznaj aparat Vitberg RS2
          </Link>
        </div>
      </div>
    </section>
  );
}
