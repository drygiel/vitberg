'use client';

import Link from 'next/link';
import type { ComponentProps, MouseEvent } from 'react';

type HashScrollLinkProps = ComponentProps<typeof Link>;

export function HashScrollLink({
  href,
  className,
  children,
  onClick,
  ...rest
}: HashScrollLinkProps) {
  const hrefValue = typeof href === 'string' ? href : href.toString();

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(event);

    if (event.defaultPrevented) {
      return;
    }

    // Preserve native behavior for modified clicks (new tab/window, etc.).
    if (event.button !== 0 || event.metaKey || event.altKey || event.ctrlKey || event.shiftKey) {
      return;
    }

    if (typeof window === 'undefined') {
      return;
    }

    const targetUrl = new URL(hrefValue, window.location.origin);
    const hash = targetUrl.hash;

    if (!hash || targetUrl.pathname !== window.location.pathname) {
      return;
    }

    const targetId = decodeURIComponent(hash.slice(1));
    const targetElement = document.getElementById(targetId);

    if (!targetElement) {
      return;
    }

    event.preventDefault();
    targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });

    const nextUrl = `${window.location.pathname}${window.location.search}${hash}`;
    if (window.location.hash === hash) {
      window.history.replaceState(window.history.state, '', nextUrl);
      return;
    }

    window.history.pushState(window.history.state, '', nextUrl);
  };

  return (
    <Link href={href} className={className} onClick={handleClick} {...rest}>
      {children}
    </Link>
  );
}
