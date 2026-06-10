'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import './header-booking-cta.scss';

export function HeaderBookingCta() {
  const [atTop, setAtTop] = useState(true);

  useEffect(() => {
    const onScroll = () => setAtTop(window.scrollY === 0);

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <Link
      href="/#kontakt"
      className={cn(buttonVariants({ size: 'lg' }), 'header-booking-cta', atTop && 'cta-pulse')}
    >
      Umów wizytę
    </Link>
  );
}
