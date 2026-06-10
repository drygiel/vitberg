"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function HeaderBookingCta() {
  const [atTop, setAtTop] = useState(true);

  useEffect(() => {
    const onScroll = () => setAtTop(window.scrollY === 0);

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <Link
      href="/#kontakt"
      className={cn(
        buttonVariants({ size: "lg" }),
        "rounded-full px-4 text-xs font-bold tracking-wide uppercase",
        atTop && "cta-pulse"
      )}
    >
      Umów wizytę
    </Link>
  );
}
