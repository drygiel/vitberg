'use client';

import { useEffect } from 'react';

const CONTACT_SECTION_ID = 'kontakt';
const CONTACT_HASH = `#${CONTACT_SECTION_ID}`;

export function ContactHashCleanup() {
  useEffect(() => {
    const contactSection = document.getElementById(CONTACT_SECTION_ID);
    let wasIntersecting = false;

    if (!contactSection) {
      return;
    }

    const clearKontaktHash = () => {
      if (window.location.hash !== CONTACT_HASH) {
        return;
      }

      const { pathname, search } = window.location;
      window.history.replaceState(window.history.state, '', `${pathname}${search}`);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry) {
          return;
        }

        if (entry.isIntersecting) {
          wasIntersecting = true;
          return;
        }

        // Clear only after user leaves the contact section once it was visible.
        if (wasIntersecting) {
          wasIntersecting = false;
          clearKontaktHash();
        }
      },
      {
        threshold: 0,
      },
    );

    observer.observe(contactSection);

    return () => {
      observer.disconnect();
    };
  }, []);

  return null;
}
