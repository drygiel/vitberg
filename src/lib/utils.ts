import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getImagePath(path: string): string {
  const basePath = process.env.NEXT_PUBLIC_BASEPATH || '';
  return basePath ? `${basePath}${path}` : path;
}
