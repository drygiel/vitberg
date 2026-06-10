'use client';

import type * as React from 'react';
import { cn } from '@/lib/utils';
import './label.scss';

function Label({ className, children, ...props }: React.ComponentProps<'label'>) {
  return (
    <label data-slot="label" className={cn('label', className)} {...props}>
      {children}
    </label>
  );
}

export { Label };
