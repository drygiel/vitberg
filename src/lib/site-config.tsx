import Link from 'next/link';

export const siteConfig = {
  name: 'Vitberg Chełm',
  tagline: 'Poradnia Wibroterapii', // Poradnia Vitberg w Chełmie
  phone: '+48690148188',
  phoneDisplay: '690 148 188',
  email: 'krystyna.drygiel@poradniavitberg.pl',
  nip: '5631446305',
  regon: '110714065',
  cidg: 'https://aplikacja.ceidg.gov.pl/ceidg/ceidg.public.ui/SearchDetails.aspx?Id=d2519dbb-8c76-4bf8-b154-0d64d9387c72',
  address: {
    street: 'ul. Zachodnia 10/1',
    city: '22-100 Chełm',
    maps: {
      location: 'https://www.google.com/maps/place/Zachodnia+10,+22-100+Chełm',
      directions: 'https://www.google.com/maps/dir/Current+Location/Zachodnia+10%2F1,+22-100+Chełm',
      embed:
        'https://maps.google.com/maps?q=Zachodnia+10,+22-100+Chełm&z=13&ie=UTF8&iwloc=&output=embed',
    },
  },
  hours: 'Poniedziałek – Piątek: 08:30 - 15:00',
  social: {
    facebook: 'https://www.facebook.com/PoradniaVitbergChelm',
    instagram: '',
    youtube: '',
  },
} as const;

export const mainNav = [
  { label: 'O terapii', href: '/o-terapii' },
  { label: 'Usługi', href: '/#uslugi' },
  { label: 'Dlaczego warto?', href: '/#dlaczego-warto' },
  { label: 'Kontakt', href: '/#kontakt' },
] as const;

export const programs = [
  {
    id: 'neuro',
    number: 1,
    title: 'Neuro',
    subtitle: 'Ból i Kręgosłup',
    description:
      'Dla osób z przewlekłym bólem kręgosłupa, rwą kulszową czy drętwieniem kończyn. Działa antyspastycznie i przeciwbólowo.',
    href: '/program-neuro',
    icon: 'brain' as const,
  },
  {
    id: 'cardio',
    number: 2,
    title: 'Cardio',
    subtitle: 'Układ Krążenia',
    description:
      'Dla osób z problemem zimnych stóp i dłoni, żylakami, obrzękami nóg oraz nadciśnieniem. Poprawia przepływ krwi.',
    href: '/program-cardio',
    icon: 'droplets' as const,
  },
  {
    id: 'oxy',
    number: 3,
    title: 'Oxy',
    subtitle: 'Układ Oddechowy',
    description:
      'Wspomaganie wydolności płuc, regeneracja po infekcjach dróg oddechowych oraz poprawa ogólnej saturacji organizmu.',
    href: '/program-oxy',
    icon: 'wind' as const,
  },
] as const;

export const modules = [
  {
    title: 'Plecy i Szyja',
    description: 'Na bóle kręgosłupa i ograniczenia ruchomości obręczy barkowej.',
    href: '/modul-plecy',
  },
  {
    title: 'Kolana i Nogi',
    description:
      'Idealne przy zwyrodnieniach, rwie kulszowej, skurczach łydek i drenażu limfatycznym.',
    href: '/modul-kolana',
  },
  {
    title: 'Ręce',
    description: 'Pomoc przy problemach z nadgarstkami, łokciami, reumatyzmie i słabym chwycie.',
    href: '/modul-rece',
  },
  {
    title: 'Brzuch',
    description: 'Pobudzenie metabolizmu i wsparcie procesów trawiennych.',
    href: '/modul-brzuch',
  },
  {
    title: 'Nogi',
    description: 'Drenaż limfatyczny i wsparcie przy obrzękach kończyn dolnych.',
    href: '/modul-nogi',
  },
] as const;

export const whyBenefits = [
  { title: 'Mniej bólu stawów', icon: 'heart-pulse' as const },
  { title: 'Zwiększona mobilność', icon: 'move' as const },
  { title: 'Bezpieczna metoda', icon: 'shield-check' as const },
  { title: '96% skuteczności', icon: 'badge-check' as const },
  { title: 'Bezbolesny zabieg', icon: 'smile' as const },
  { title: 'Polski wyrób medyczny', icon: 'award' as const },
] as const;

export const visitSteps = [
  {
    step: 1,
    title: 'Rezerwacja',
    description: 'Dzwonisz do nas lub wypełniasz prosty formularz.',
  },
  {
    step: 2,
    title: 'Konsultacja',
    description: 'Na miejscu pytamy o Twoje dolegliwości i dobieramy odpowiedni program.',
  },
  {
    step: 3,
    title: 'Bezpłatne zabiegi',
    description: (
      <>
        Testujesz materac <Link href="/aparat-bazowy">Vitberg RS2</Link> w komfortowych warunkach
        przez <b>7 dni</b>.
      </>
    ),
  },
  {
    step: 4,
    title: 'Plan działania',
    description: 'Doradzamy, jak możesz kontynuować terapię — również w domu.',
  },
] as const;
