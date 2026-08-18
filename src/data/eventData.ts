import { ScheduleItem, RaceCategory, CourseRecord, Sponsor, GalleryPhoto, ResultLink } from '../types';

export const EVENT_DETAILS = {
  name: 'Běh na Bukovou horu',
  edition: '33. ročník',
  editionNumber: 33,
  dateFormatted: '29. 8. 2026',
  dateIso: '2026-08-29T11:00:00+02:00',
  year: '2026',
  dayOfWeek: 'Sobota',
  locationName: 'Výprachtice – školní hřiště & ZŠ Výprachtice',
  address: 'Výprachtice č.p. 180, 561 34 Výprachtice',
  gps: {
    lat: 49.9872794,
    lng: 16.6632167,
    formatted: '49.9872794N, 16.6632167E'
  },
  distanceKm: '7.0 km',
  elevationGain: '+373 m',
  mainStart: '11:00',
  childrenStart: '09:30',
  registrationEndChildren: '09:15',
  registrationEndMain: '10:45',
  entryFeeMain: 200,
  entryFeeChildren: 50,
  currency: 'Kč',
  organizer: {
    director: 'Ing. Tomáš Daněk, Ph.D.',
    role: 'Ředitel závodu',
    phone: '+420 774 114 421',
    phoneClean: '+420774114421',
    email: 'danek.tomas@post.cz',
    facebook: 'https://www.facebook.com/behnabukovouhoru/'
  },
  patronage: 'Akce se koná pod záštitou hejtmana Pardubického kraje a za významné podpory obce Výprachtice.',
  cupAffiliation: 'Závod je zařazen do celoročního seriálu ISCAREX poháru v běhu do vrchu.',
  mapsUrl: 'http://www.iscarex.cz/propozice/3046/mapa#',
  googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=49.9872794,16.6632167',
  mapyCzUrl: 'https://mapy.cz/turisticka?x=16.6632167&y=49.9872794&z=16&q=49.9872794N%2C%2016.6632167E'
};

export const SCHEDULE: ScheduleItem[] = [
  {
    id: 'reg-children',
    time: '08:30 – 09:15',
    title: 'Prezence & registrace dětských kategorií',
    description: 'Registrace na místě v přízemí budovy ZŠ Výprachtice. Vyzvednutí startovního čísla a čipu.',
    location: 'Budova ZŠ Výprachtice'
  },
  {
    id: 'reg-main',
    time: '08:30 – 10:45',
    title: 'Prezence & registrace hlavního závodu',
    description: 'Registrace dospělých a juniorských kategorií do 10:45 hod. Zázemí šaten a toalet v budově školy.',
    location: 'Budova ZŠ Výprachtice'
  },
  {
    id: 'start-children',
    time: '09:30',
    title: 'Start dětských kategorií',
    description: 'Postupné starty od nejmenších (90 m) po starší žáky (1 600 m) podle věkových kategorií.',
    location: 'Školní hřiště Výprachtice',
    isHighlight: true
  },
  {
    id: 'start-main',
    time: '11:00',
    title: 'START HLAVNÍHO ZÁVODU (7 000 m)',
    description: 'Hromadný start hlavního běhu na Bukovou horu. Trať 7 km s převýšením +373 m po lesních a horských cestách.',
    location: 'Školní hřiště Výprachtice',
    isHighlight: true
  },
  {
    id: 'awards-children',
    time: '11:00',
    title: 'Vyhlášení dětských výsledků & Dětská tombola',
    description: 'Předání medailí, diplomů, věcných cen a dobrot pro všechny malé závodníky. Dětská tombola.',
    location: 'Areál školního hřiště'
  },
  {
    id: 'awards-main',
    time: '13:30',
    title: 'Vyhlášení výsledků hlavního závodu',
    description: 'Slavnostní dekorování nejlepších běžců a běžkyň ve všech vypsaných věkových kategoriích + předání finančních prémií.',
    location: 'Areál školního hřiště',
    isHighlight: true
  },
  {
    id: 'tombola-main',
    time: '14:00',
    title: 'Velká tombola pro účastníky',
    description: 'Tradiční slosování bohaté tomboly o hodnotné ceny věnované partnery a sponzory závodu.',
    location: 'Areál školního hřiště'
  }
];

export const ADULT_CATEGORIES: RaceCategory[] = [
  {
    id: 'dorost-juniori',
    code: 'D+J',
    name: 'Dorost a junioři (M + Ž)',
    gender: 'ALL',
    yearRange: '2007 – 2010',
    birthMin: 2007,
    birthMax: 2010,
    distance: '7 000 m (+373 m)',
    type: 'junior',
    description: 'Společná kategorie dorostenců, dorostenek, juniorů a juniorek.'
  },
  {
    id: 'women-a',
    code: 'Ženy A',
    name: 'Ženy A',
    gender: 'F',
    yearRange: '1992 – 2006',
    birthMin: 1992,
    birthMax: 2006,
    distance: '7 000 m (+373 m)',
    type: 'adult'
  },
  {
    id: 'women-b',
    code: 'Ženy B',
    name: 'Ženy B',
    gender: 'F',
    yearRange: '1982 – 1991',
    birthMin: 1982,
    birthMax: 1991,
    distance: '7 000 m (+373 m)',
    type: 'adult'
  },
  {
    id: 'women-c',
    code: 'Ženy C',
    name: 'Ženy C',
    gender: 'F',
    yearRange: '1972 – 1981',
    birthMin: 1972,
    birthMax: 1981,
    distance: '7 000 m (+373 m)',
    type: 'adult'
  },
  {
    id: 'women-d',
    code: 'Ženy D',
    name: 'Ženy D',
    gender: 'F',
    yearRange: '1971 a starší',
    birthMin: 1900,
    birthMax: 1971,
    distance: '7 000 m (+373 m)',
    type: 'adult'
  },
  {
    id: 'men-a',
    code: 'Muži A',
    name: 'Muži A',
    gender: 'M',
    yearRange: '1987 – 2006',
    birthMin: 1987,
    birthMax: 2006,
    distance: '7 000 m (+373 m)',
    type: 'adult'
  },
  {
    id: 'men-b',
    code: 'Muži B',
    name: 'Muži B',
    gender: 'M',
    yearRange: '1977 – 1986',
    birthMin: 1977,
    birthMax: 1986,
    distance: '7 000 m (+373 m)',
    type: 'adult'
  },
  {
    id: 'men-c',
    code: 'Muži C',
    name: 'Muži C',
    gender: 'M',
    yearRange: '1967 – 1976',
    birthMin: 1967,
    birthMax: 1976,
    distance: '7 000 m (+373 m)',
    type: 'adult'
  },
  {
    id: 'men-d',
    code: 'Muži D',
    name: 'Muži D',
    gender: 'M',
    yearRange: '1957 – 1966',
    birthMin: 1957,
    birthMax: 1966,
    distance: '7 000 m (+373 m)',
    type: 'adult'
  },
  {
    id: 'men-e',
    code: 'Muži E',
    name: 'Muži E',
    gender: 'M',
    yearRange: '1956 a starší',
    birthMin: 1900,
    birthMax: 1956,
    distance: '7 000 m (+373 m)',
    type: 'adult'
  }
];

export const CHILDREN_CATEGORIES: RaceCategory[] = [
  {
    id: 'kid-0',
    code: 'Nejmladší',
    name: 'Nejmladší chlapci a děvčata',
    gender: 'ALL',
    yearRange: '2023 a mladší',
    birthMin: 2023,
    birthMax: 2030,
    distance: '90 m',
    type: 'child',
    description: 'Rovinka na školním hřišti, možnost doprovodu rodičů.'
  },
  {
    id: 'kid-1',
    code: 'Děti I',
    name: 'Chlapci a děvčata I',
    gender: 'ALL',
    yearRange: '2021 – 2022',
    birthMin: 2021,
    birthMax: 2022,
    distance: '90 m',
    type: 'child',
    description: 'Sprint po hřišti s povzbuzováním diváků.'
  },
  {
    id: 'kid-2',
    code: 'Děti II',
    name: 'Chlapci a děvčata II',
    gender: 'ALL',
    yearRange: '2019 – 2020',
    birthMin: 2019,
    birthMax: 2020,
    distance: '220 m',
    type: 'child',
    description: 'Jeden zkrácený okruh areálem.'
  },
  {
    id: 'kid-3',
    code: 'Žáci I',
    name: 'Nejmladší žáci a žákyně I',
    gender: 'ALL',
    yearRange: '2017 – 2018',
    birthMin: 2017,
    birthMax: 2018,
    distance: '450 m',
    type: 'child',
    description: 'Jeden celý okruh kolem hřiště a přilehlého terénu.'
  },
  {
    id: 'kid-4',
    code: 'Žáci II',
    name: 'Nejmladší žáci a žákyně II',
    gender: 'ALL',
    yearRange: '2015 – 2016',
    birthMin: 2015,
    birthMax: 2016,
    distance: '850 m',
    type: 'child',
    description: 'Členitý okruh v areálu Výprachtic.'
  },
  {
    id: 'kid-5',
    code: 'Mladší žáci',
    name: 'Mladší žáci a žákyně',
    gender: 'ALL',
    yearRange: '2013 – 2014',
    birthMin: 2013,
    birthMax: 2014,
    distance: '850 m',
    type: 'child',
    description: 'Rychlý terénní běh.'
  },
  {
    id: 'kid-6',
    code: 'Starší žáci',
    name: 'Starší žáci a žákyně',
    gender: 'ALL',
    yearRange: '2011 – 2012',
    birthMin: 2011,
    birthMax: 2012,
    distance: '1 600 m (2 kola)',
    type: 'child',
    description: 'Dva okruhy s mírným stoupáním.'
  }
];

export const COURSE_RECORDS: CourseRecord[] = [
  {
    category: 'Mužský traťový rekord',
    holder: 'Robert Krupička',
    time: '27:05',
    year: '2007',
    notes: 'Držitel nepřekonaného historického maxima trati'
  },
  {
    category: 'Ženský traťový rekord',
    holder: 'Adéla Vetchá',
    time: '32:23',
    year: '2025',
    notes: 'Nový rekord stanovený v ročníku 2025'
  }
];

export const PRIZE_STRUCTURE = {
  categoryPlacements: [
    { rank: '1. místo', amount: '300 Kč', badge: 'Zlato' },
    { rank: '2. místo', amount: '200 Kč', badge: 'Stříbro' },
    { rank: '3. místo', amount: '100 Kč', badge: 'Bronz' }
  ],
  timeBonuses: [
    { target: 'Čas pod 29:00 min', amount: '200 Kč', desc: 'Vypláceno všem závodníkům splňujícím limit' },
    { target: 'Čas pod 28:00 min', amount: '500 Kč', desc: 'Mimořádná prémie za špičkový výkon' },
    { target: 'Ženy: čas pod 34:00 min', amount: '500 Kč', desc: 'Speciální prémie pro nejrychlejší ženy' },
    { target: 'Překonání traťového rekordu', amount: '2 000 Kč', desc: 'Robert Krupička (27:05) / Adéla Vetchá (32:23)' }
  ],
  childrenPrizes: 'Medaile, diplomy, hodnotné věcné ceny a sladké dobroty pro všechny mladé závodníky.',
  tombola: 'Po vyhlášení probíhá velká tombola se slosováním cen od partnerů a sponzorů pro všechny zaregistrované účastníky.'
};

export const RESULTS_ARCHIVE: ResultLink[] = [
  {
    year: '2024',
    url: 'https://iscarexpohar.cz/vysledky/3277',
    badge: 'Nejnovější',
    description: 'Oficiální výsledky 32. ročníku na portálu ISCAREX Pohár'
  },
  {
    year: '2023',
    url: 'http://iscarex.cz/vysledky/3225',
    description: 'Výsledková listina 31. ročníku (ISCAREX)'
  },
  {
    year: '2022',
    url: 'http://www.iscarex.cz/vysledky/3180',
    description: 'Výsledková listina 30. jubilejního ročníku'
  },
  {
    year: '2021',
    url: 'http://iscarex.cz/vysledky/3113',
    description: 'Výsledková listina 29. ročníku'
  },
  {
    year: '2020',
    url: 'http://www.iscarex.cz/vysledky/3046',
    description: 'Výsledková listina 28. ročníku'
  }
];

export const PHOTO_GALLERIES = [
  {
    id: 'gal-2022-adults',
    title: 'Dospělí & Junioři 2022',
    author: 'J. Šimůnek (Iscarex)',
    year: '2022',
    url: 'http://www.iscarex.cz/fotogalerie/100000681',
    previewImg: 'https://ace6121592.cbaul-cdnwnd.com/d840186d11449bd887cb2e81ec02d0b8/200000051-3d2d73d2d9/IMG_2995.JPG?ph=ace6121592',
    count: 'Kompletní fotoreportáž'
  },
  {
    id: 'gal-2022-kids',
    title: 'Dětské kategorie 2022',
    author: 'J. Šimůnek (Iscarex)',
    year: '2022',
    url: 'http://www.iscarex.cz/fotogalerie/100000680',
    previewImg: 'https://ace6121592.cbaul-cdnwnd.com/d840186d11449bd887cb2e81ec02d0b8/200000034-949c4949c8/IMG_20200808_170709.jpg?ph=ace6121592',
    count: 'Fotografie dětí a vyhlášení'
  },
  {
    id: 'gal-2020',
    title: 'Závodníci na trati 2020',
    author: 'Honza Šimůnek',
    year: '2020',
    url: 'http://www.iscarex.cz/fotogalerie/100000436',
    previewImg: 'https://ace6121592.cbaul-cdnwnd.com/d840186d11449bd887cb2e81ec02d0b8/200000044-5391c5391e/IMG_2986.JPG?ph=ace6121592',
    count: 'Záběry ze stoupání na Bukovou horu'
  }
];

export const SPONSORS_DATA: Sponsor[] = [
  {
    name: 'Obec Výprachtice',
    tier: 'patron',
    description: 'Hlavní partner & podpora zázemí',
    logoUrl: 'https://ace6121592.cbaul-cdnwnd.com/d840186d11449bd887cb2e81ec02d0b8/200000001-457ed457f0/90px-V%C3%BDprachtice.svg.png?ph=ace6121592'
  },
  {
    name: 'Pardubický kraj',
    tier: 'patron',
    description: 'Závod je pořádán pod záštitou hejtmana Pardubického kraje',
    logoUrl: 'https://ace6121592.cbaul-cdnwnd.com/d840186d11449bd887cb2e81ec02d0b8/200000002-19f3919f3b/Pk_LOGO_zakladni_RGB_JPG.jpg?ph=ace6121592'
  },
  {
    name: 'Runsport.cz',
    tier: 'gold',
    description: 'Běžecká speciálka & sportovní vybavení',
    logoUrl: 'https://ace6121592.cbaul-cdnwnd.com/d840186d11449bd887cb2e81ec02d0b8/200000055-7138d7138f/R.png?ph=ace6121592'
  },
  {
    name: 'Salomon',
    tier: 'gold',
    description: 'Špičková trailová obuv a vybavení',
    logoUrl: 'https://ace6121592.cbaul-cdnwnd.com/d840186d11449bd887cb2e81ec02d0b8/200000092-27f5d27f61/img-31-4.jpeg?ph=ace6121592'
  },
  {
    name: 'Horský resort Buková hora',
    tier: 'gold',
    description: 'Cílová dominanta & horský areál',
    logoUrl: 'https://ace6121592.cbaul-cdnwnd.com/d840186d11449bd887cb2e81ec02d0b8/200000096-5c7035c706/bu.jpeg?ph=ace6121592'
  },
  {
    name: 'ISCAREX',
    tier: 'gold',
    description: 'Pořadatel běžeckého poháru do vrchu',
    logoUrl: 'https://ace6121592.cbaul-cdnwnd.com/d840186d11449bd887cb2e81ec02d0b8/200000039-d343fd3441/iscarex.jpg?ph=ace6121592'
  },
  {
    name: 'Lesy ČR',
    tier: 'partner',
    description: 'Správce lesních porostů Bukové hory',
    logoUrl: 'https://ace6121592.cbaul-cdnwnd.com/d840186d11449bd887cb2e81ec02d0b8/200000005-e9874e9876/sta%C5%BEen%C3%BD%20soubor.png?ph=ace6121592'
  },
  {
    name: 'Schaeffler',
    tier: 'partner',
    description: 'Technologický partner v regionu',
    logoUrl: 'https://ace6121592.cbaul-cdnwnd.com/d840186d11449bd887cb2e81ec02d0b8/200000104-483e4483e6/000B982A_header-schaeffler-websites_rwd_1200.jpeg?ph=ace6121592'
  },
  {
    name: 'Fortell',
    tier: 'partner',
    description: 'Dynamic cooperation Lanškroun',
    logoUrl: 'https://ace6121592.cbaul-cdnwnd.com/d840186d11449bd887cb2e81ec02d0b8/200000058-d96f6d96f8/01_logo%20fortell%20dynamic%20cooperation%20-%20full%20color__%20positive_page-0001.jpg?ph=ace6121592'
  },
  {
    name: 'Město Lanškroun',
    tier: 'partner',
    description: 'Regionální partner',
    logoUrl: 'https://ace6121592.cbaul-cdnwnd.com/d840186d11449bd887cb2e81ec02d0b8/200000038-8f11c8f11f/lan%C5%A1kroun.jpg?ph=ace6121592'
  },
  {
    name: 'Obec Bystřec',
    tier: 'partner',
    description: 'Sousední obec a partner trati',
    logoUrl: 'https://ace6121592.cbaul-cdnwnd.com/d840186d11449bd887cb2e81ec02d0b8/200000098-3d1733d174/bystrec-znak-min.png?ph=ace6121592'
  },
  {
    name: 'Penzion Heroltická',
    tier: 'supporter',
    description: 'Ubytování a pohostinství Heroltice',
    logoUrl: 'https://ace6121592.cbaul-cdnwnd.com/d840186d11449bd887cb2e81ec02d0b8/200000102-1cc281cc29/herolticka_white_2-4.png?ph=ace6121592'
  },
  {
    name: 'Sportcentrum Doleček',
    tier: 'supporter',
    description: 'Sportovní a volnočasové centrum',
    logoUrl: 'https://ace6121592.cbaul-cdnwnd.com/d840186d11449bd887cb2e81ec02d0b8/200000110-59a3159a33/logo%20%281%29%20-%20kopie.png?ph=ace6121592'
  },
  {
    name: 'Alči dobroty',
    tier: 'supporter',
    description: 'Cukrářské a pekařské speciality',
    logoUrl: 'https://ace6121592.cbaul-cdnwnd.com/d840186d11449bd887cb2e81ec02d0b8/200000106-9767b9767d/OIP.jpeg?ph=ace6121592'
  },
  {
    name: 'Kino DCI Lanškroun',
    tier: 'supporter',
    description: 'Kulturní centrum Lanškroun',
    logoUrl: 'https://ace6121592.cbaul-cdnwnd.com/d840186d11449bd887cb2e81ec02d0b8/200000112-0a2cd0a2d0/2025-08-27.png?ph=ace6121592'
  },
  {
    name: 'Pivovar Faltus',
    tier: 'supporter',
    description: 'Řemeslný pivovar Česká Třebová',
    logoUrl: 'https://ace6121592.cbaul-cdnwnd.com/d840186d11449bd887cb2e81ec02d0b8/200000056-814698146b/pivovar_faltus_logo_paticka.png?ph=ace6121592'
  },
  {
    name: 'Pivovar Trautenberk',
    tier: 'supporter',
    description: 'Krkonošský minipivovar',
    logoUrl: 'https://ace6121592.cbaul-cdnwnd.com/d840186d11449bd887cb2e81ec02d0b8/200000054-b3987b3989/sta%C5%BEen%C3%BD%20soubor-8.png?ph=ace6121592'
  },
  {
    name: 'Pivovar U černého medvěda',
    tier: 'supporter',
    description: 'Jablonné nad Orlicí',
    logoUrl: 'https://ace6121592.cbaul-cdnwnd.com/d840186d11449bd887cb2e81ec02d0b8/200000036-cb25bcb25d/%C4%8Derny%20medved.jpg?ph=ace6121592'
  }
];

export const COURSE_PROFILE_POINTS = [
  { km: 0.0, alt: 585, name: 'Start – ZŠ Výprachtice (hřiště)', surface: 'Asfalt / tráva' },
  { km: 1.0, alt: 615, name: 'Výjezd z obce, náběh do lesa', surface: 'Zpevněná cesta' },
  { km: 2.0, alt: 660, name: 'Lesní svážnice Na Skalce', surface: 'Lesní cesta' },
  { km: 3.0, alt: 720, name: 'Úpatí hřebene, stoupání', surface: 'Přírodní stezka' },
  { km: 4.0, alt: 795, name: 'Střední pasáž stoupání', surface: 'Kamenitá lesní pěšina' },
  { km: 5.0, alt: 865, name: 'Napojení na hřebenovou cestu', surface: 'Horská cesta' },
  { km: 6.0, alt: 920, name: 'Závěrečný hřebenový úsek', surface: 'Horský terén' },
  { km: 7.0, alt: 958, name: 'Cíl – Vrchol Bukové hory', surface: 'Vrcholová louka / rozcestí' }
];
