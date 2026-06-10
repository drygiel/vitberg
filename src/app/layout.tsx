import type { Metadata } from 'next';
import { Inter, Montserrat } from 'next/font/google';
import { siteConfig } from '@/lib/site-config';
import './globals.css';
import './layout.scss';

const inter = Inter({
  variable: '--font-sans',
  subsets: ['latin', 'latin-ext'],
});

const montserrat = Montserrat({
  variable: '--font-heading',
  subsets: ['latin', 'latin-ext'],
  weight: ['600', '700', '800'],
});

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.name} — ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.name}`,
  },
  description:
    'Bezpłatna wibroterapia w Chełmie. Poradnia Vitberg RS2 — odzyskaj sprawność i zapomnij o bólu!',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl" className={`${inter.variable} ${montserrat.variable}`}>
      <body className="layout__body">{children}</body>
    </html>
  );
}
