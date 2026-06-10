import { Footer } from '@/components/layout/footer';
import { Header } from '@/components/layout/header';
import './site-layout.scss';

export function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main className="site-layout__main">{children}</main>
      <Footer />
    </>
  );
}
