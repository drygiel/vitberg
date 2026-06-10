export type PageSection = {
  title: string;
  content: string;
  items?: string[];
};

export type Subpage = {
  slug: string;
  title: string;
  description: string;
  breadcrumb: string;
  sections: PageSection[];
  cta?: boolean;
};

export const subpages: Subpage[] = [
  {
    slug: 'o-terapii',
    title: 'O terapii',
    description: 'Wibroterapia oscylacyjno-cykloidalna — bezpieczna metoda rehabilitacji.',
    breadcrumb: 'O terapii',
    sections: [
      {
        title: 'Wibroterapia Oscylacyjno-Cykloidalna',
        content:
          'Rodzaj terapii fizykalnej wykorzystującej jako bodziec wibrację o określonych parametrach. Charakteryzuje ją cykloidalny charakter drgań oraz różne parametry częstotliwości, amplitudy i przyspieszenia dopasowane do schorzenia.',
      },
      {
        title: 'Zalety wibroterapii',
        content: 'Metoda stosowana w szpitalach i placówkach rehabilitacyjnych na całym świecie.',
        items: [
          'Bezpieczeństwo — certyfikowany wyrób medyczny klasy IIa',
          'Skuteczność — ponad 76 badań własnych i publikacje naukowe',
          'Naturalność — bezbolesne, delikatne drgania lecznicze',
          'Modułowość — dopasowanie zabiegu do indywidualnych potrzeb',
        ],
      },
    ],
    cta: true,
  },
  {
    slug: 'o-nas',
    title: 'O nas',
    description: 'Vitberg — polska firma wyznaczająca standardy wibroterapii od ponad 30 lat.',
    breadcrumb: 'O nas',
    sections: [
      {
        title: 'Kim jesteśmy',
        content:
          'Vitberg to polska firma, która od ponad 30 lat wyznacza standardy wibroterapii. Nasze aparaty są certyfikowanymi wyrobami medycznymi klasy IIa, używanymi w szpitalach i placówkach rehabilitacyjnych.',
      },
      {
        title: 'Poradnia w Chełmie',
        content:
          'Teraz nowoczesna technologia Vitberg RS2 jest dostępna dla każdego mieszkańca Chełma i okolic w naszej lokalnej Poradni. Zapraszamy na bezpłatną konsultację i zabieg testowy.',
      },
    ],
    cta: true,
  },
  {
    slug: 'program-neuro',
    title: 'Program Neuro',
    description: 'Działanie przeciwbólowe i wsparcie układu nerwowego.',
    breadcrumb: 'Program Neuro',
    sections: [
      {
        title: 'Dla kogo?',
        content:
          'Osoby z przewlekłym bólem kręgosłupa, rwą kulszową, drętwieniem kończyn oraz problemami ze snem, stresem i obniżonym nastrojem.',
      },
      {
        title: 'Jak to działa?',
        content:
          'Wibracje Vitberg RS2 oddziałują na receptory czucia mięśniowego, powodując naprzemienne kurczenie i rozluźnianie mięśni. Łagodzą dolegliwości bólowe i poprawiają zakres ruchu.',
      },
      {
        title: 'Skuteczność',
        content:
          'Badania potwierdzają znaczną poprawę propriocepcji i redukcję bólu krzyża po 12-tygodniowej terapii wibroterapii.',
      },
    ],
    cta: true,
  },
  {
    slug: 'program-cardio',
    title: 'Program Cardio',
    description: 'Poprawa krążenia i elastyczności naczyń krwionośnych.',
    breadcrumb: 'Program Cardio',
    sections: [
      {
        title: 'Dla kogo?',
        content:
          'Osoby z problemem zimnych stóp i dłoni, żylakami, obrzękami nóg oraz nadciśnieniem tętniczym.',
      },
      {
        title: 'Jak to działa?',
        content:
          'Program Cardio stymuluje układ krążenia, poprawiając przepływ krwi i elastyczność naczyń. Wspomaga drenaż limfatyczny i redukuje obrzęki.',
      },
    ],
    cta: true,
  },
  {
    slug: 'program-oxy',
    title: 'Program Oxy',
    description: 'Wsparcie układu oddechowego i saturacji organizmu.',
    breadcrumb: 'Program Oxy',
    sections: [
      {
        title: 'Dla kogo?',
        content:
          'Osoby po infekcjach dróg oddechowych, z obniżoną wydolnością płuc oraz potrzebujące poprawy ogólnej saturacji organizmu.',
      },
      {
        title: 'Jak to działa?',
        content:
          'Program Oxy wspomaga pracę układu oddechowego, wspierając regenerację po chorobach i poprawiając ogólną kondycję organizmu.',
      },
    ],
    cta: true,
  },
  {
    slug: 'modul-plecy',
    title: 'Moduł Plecy',
    description: 'Rehabilitacja kręgosłupa i obręczy barkowej.',
    breadcrumb: 'Moduł Plecy',
    sections: [
      {
        title: 'Wskazania',
        content:
          'Bóle kręgosłupa, ograniczenia ruchomości obręczy barkowej, napięcia mięśniowe szyi i pleców.',
      },
    ],
    cta: true,
  },
  {
    slug: 'modul-kolana',
    title: 'Moduł Kolana',
    description: 'Skuteczna rehabilitacja kolan i dołów podkolanowych.',
    breadcrumb: 'Moduł Kolana',
    sections: [
      {
        title: 'Wskazania',
        content:
          'Zwyrodnienia stawu kolanowego (gonartroza), rwa kulszowa, skurcze łydek, drenaż limfatyczny.',
      },
    ],
    cta: true,
  },
  {
    slug: 'modul-nogi',
    title: 'Moduł Nogi',
    description: 'Drenaż limfatyczny i wsparcie kończyn dolnych.',
    breadcrumb: 'Moduł Nogi',
    sections: [
      {
        title: 'Wskazania',
        content: 'Obrzęki nóg, problemy z krążeniem w kończynach dolnych, zmęczenie nóg.',
      },
    ],
    cta: true,
  },
  {
    slug: 'modul-rece',
    title: 'Moduł Ręce',
    description: 'Rehabilitacja nadgarstków, łokci i dłoni.',
    breadcrumb: 'Moduł Ręce',
    sections: [
      {
        title: 'Wskazania',
        content:
          'Problemy z nadgarstkami, łokciami, reumatyzm, słaby chwyt i ograniczenia ruchomości rąk.',
      },
    ],
    cta: true,
  },
  {
    slug: 'modul-brzuch',
    title: 'Moduł Brzuch',
    description: 'Pobudzenie metabolizmu i wsparcie trawienia.',
    breadcrumb: 'Moduł Brzuch',
    sections: [
      {
        title: 'Wskazania',
        content:
          'Wsparcie procesów trawiennych, pobudzenie metabolizmu, poprawa pracy układu pokarmowego.',
      },
    ],
    cta: true,
  },
  {
    slug: 'aparat-bazowy',
    title: 'Aparat Bazowy Vitberg RS2',
    description: 'Samodzielny system do kompleksowej rehabilitacji domowej.',
    breadcrumb: 'Aparat Bazowy',
    sections: [
      {
        title: 'Opis produktu',
        content:
          'Aparat bazowy Vitberg RS2 wyposażony jest w 3 programy: Oxy, Cardio i Neuro. Certyfikowany wyrób medyczny używany w szpitalach i sanatoriach.',
        items: [
          '3 programy: Oxy, Cardio, Neuro',
          'Możliwość rozbudowy o moduły aktywne',
          'Bezpieczne programy dostosowane do potrzeb organizmu',
          'Materiały nadające się do dezynfekcji',
        ],
      },
    ],
    cta: true,
  },
  {
    slug: 'zastosowanie',
    title: 'Zastosowania',
    description: 'Poznaj wszystkie możliwości systemu Vitberg RS2.',
    breadcrumb: 'Zastosowania',
    sections: [
      {
        title: 'Kompleksowa terapia',
        content:
          'Vitberg RS2 możesz rozbudować w dowolnej chwili o kolejne wskazania, dodając moduł aktywny. System SKOT (Skierowanych Oscylacji Terapeutycznych) pozwala precyzyjnie dopasować terapię.',
      },
    ],
    cta: true,
  },
  {
    slug: 'kariera',
    title: 'Kariera',
    description: 'Dołącz do zespołu Vitberg.',
    breadcrumb: 'Kariera',
    sections: [
      {
        title: 'Praca w Vitberg',
        content:
          'Szukamy pasjonatów zdrowia i technologii medycznej. Sprawdź aktualne oferty pracy i dołącz do naszego zespołu.',
      },
    ],
    cta: false,
  },
];

export const pageSlugs = subpages.map(p => p.slug);

export function getSubpage(slug: string): Subpage | undefined {
  return subpages.find(p => p.slug === slug);
}
