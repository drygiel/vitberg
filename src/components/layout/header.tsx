import { Activity } from 'lucide-react';
import Link from 'next/link';
import { HeaderBookingCta } from '@/components/layout/header-booking-cta';
import { HashScrollLink } from '@/components/shared/hash-scroll-link';
import { mainNav, siteConfig } from '@/lib/site-config';
import './header.scss';

export function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <Link href="/" className="header__brand">
          <Activity className="header__brand-icon" aria-hidden />
          <div className="header__brand-text">
            <span className="header__brand-name">Vitberg</span>
            <span className="header__brand-location">Chełm</span>
          </div>
        </Link>

        <nav className="header__nav" aria-label="Nawigacja główna">
          {mainNav.map(item =>
            item.href?.startsWith('/#') ? (
              <HashScrollLink key={item.href} href={item.href} className="header__nav-link">
                {item.label}
              </HashScrollLink>
            ) : (
              <Link key={item.href} href={item.href} className="header__nav-link">
                {item.label}
              </Link>
            ),
          )}
        </nav>

        <div className="header__actions">
          <a href={`tel:${siteConfig.phone}`} className="header__phone">
            {siteConfig.phoneDisplay}
          </a>
          <HeaderBookingCta />
        </div>
      </div>

      <nav className="header__mobile-nav" aria-label="Nawigacja mobilna">
        {mainNav.map(item =>
          item.href?.startsWith('/#') ? (
            <HashScrollLink key={item.href} href={item.href} className="header__mobile-nav-link">
              {item.label}
            </HashScrollLink>
          ) : (
            <Link key={item.href} href={item.href} className="header__mobile-nav-link">
              {item.label}
            </Link>
          ),
        )}
      </nav>
    </header>
  );
}
