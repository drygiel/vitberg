import Link from "next/link";
import { Activity } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import { mainNav, siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-primary/10 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 lg:px-6">
        <Link href="/" className="flex items-center gap-2">
          <Activity className="size-7 text-primary" aria-hidden />
          <div className="leading-tight">
            <span className="block font-heading text-sm font-bold tracking-wide text-primary uppercase">
              Vitberg
            </span>
            <span className="block text-xs font-medium text-muted-foreground uppercase">
              Chełm
            </span>
          </div>
        </Link>

        <nav
          className="hidden items-center gap-6 lg:flex"
          aria-label="Nawigacja główna"
        >
          {mainNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-semibold tracking-wide text-foreground uppercase transition-colors hover:text-primary"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={`tel:${siteConfig.phone}`}
            className="hidden text-sm font-semibold text-primary sm:block"
          >
            {siteConfig.phoneDisplay}
          </a>
          <Link
            href="/#kontakt"
            className={cn(
              buttonVariants({ size: "lg" }),
              "rounded-full px-4 text-xs font-bold tracking-wide uppercase"
            )}
          >
            Umów wizytę
          </Link>
        </div>
      </div>

      <nav
        className="flex gap-1 overflow-x-auto border-t border-primary/10 px-4 py-2 lg:hidden"
        aria-label="Nawigacja mobilna"
      >
        {mainNav.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "shrink-0 rounded-full px-3 py-1.5 text-xs font-semibold tracking-wide uppercase",
              "bg-secondary text-secondary-foreground"
            )}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
