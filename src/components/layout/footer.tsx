import { Clock, MapPin, Phone } from 'lucide-react';
import Link from 'next/link';
import { siteConfig } from '@/lib/site-config';
import './footer.scss';

const socialLinks = [
  { label: 'Facebook', href: siteConfig.social.facebook, abbr: 'Fb' },
  { label: 'Instagram', href: siteConfig.social.instagram, abbr: 'Ig' },
  { label: 'YouTube', href: siteConfig.social.youtube, abbr: 'Yt' },
] as const;

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__column">
          <div className="footer__row">
            <MapPin className="footer__icon" aria-hidden />
            <div>
              <p className="footer__label">Adres</p>
              <p>{siteConfig.address.street}</p>
              <p>{siteConfig.address.city}</p>
            </div>
          </div>
        </div>

        <div className="footer__column">
          <div className="footer__row">
            <Phone className="footer__icon" aria-hidden />
            <div>
              <p className="footer__label">Telefon</p>
              <a href={`tel:${siteConfig.phone}`} className="footer__phone-link">
                {siteConfig.phoneDisplay}
              </a>
            </div>
          </div>
          <div className="footer__row">
            <Clock className="footer__icon" aria-hidden />
            <div>
              <p className="footer__label">Godziny otwarcia</p>
              <p>{siteConfig.hours}</p>
            </div>
          </div>
        </div>

        <div className="footer__social-section">
          <p className="footer__label">Śledź nas</p>
          <div className="footer__social-links">
            {socialLinks
              .filter(l => l.href)
              .map(social => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="footer__social-link"
                >
                  {social.abbr}
                </a>
              ))}
          </div>
          <div className="footer__nav">
            <Link href="/o-nas" className="footer__nav-link">
              O nas
            </Link>
            <Link href="/o-terapii" className="footer__nav-link">
              O terapii
            </Link>
            <Link href="/kariera" className="footer__nav-link">
              Kariera
            </Link>
          </div>
        </div>
      </div>

      <div className="footer__copyright">
        © {new Date().getFullYear()} {siteConfig.name}. Wszelkie prawa zastrzeżone.
      </div>
    </footer>
  );
}
