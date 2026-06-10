'use client';

import { ChevronDown } from 'lucide-react';
import { useEffect, useState } from 'react';
import './scroll-indicator.scss';

const TOP_THRESHOLD_PX = 8;

export function ScrollIndicator() {
  const [isAtTop, setIsAtTop] = useState(true);

  useEffect(() => {
    const onScroll = () => {
      setIsAtTop(window.scrollY <= TOP_THRESHOLD_PX);
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <div aria-hidden="true" className={`scroll-indicator${isAtTop ? '' : ' is-hidden'}`}>
      <span className="scroll-mouse" />
      <ChevronDown className="scroll-arrow" size={18} />
    </div>
  );
}
