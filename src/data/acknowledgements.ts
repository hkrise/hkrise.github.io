export type FundingCredit = {
  project: string;
  funder: string;
  grant: string;
  note?: string;
};

export type PeopleCredit = {
  title: string;
  body: string;
  /** Optional HTML fragment when body needs links (BioBlitz, etc.). Prefer body for plain text. */
  bodyHtml?: string;
};

export type Partner = {
  src: string;
  alt: string;
  href: string;
  /** Dark-backed logos (light marks) need a matching tile. */
  tone?: 'light' | 'dark';
};

/** Centralized funding lines gathered from each topic site. */
export const funding: FundingCredit[] = [
  {
    project: 'HKRISE',
    funder: 'Environment and Conservation Fund, HKSAR',
    grant: 'ECF 105/2019',
    note: 'Territory-wide rocky shore biodiversity survey and GIS.',
  },
  {
    project: 'HKRISE Lantau',
    funder: 'Marine Conservation Enhancement Fund of the Hong Kong Offshore LNG Terminal Project (Environmental Enhancement Funds)',
    grant: 'MCEF21006',
    note: 'Thermal ecology, salinity profiles, and habitat suitability around Lantau. Established by Capco, HK Electric, and HKLTL.',
  },
  {
    project: 'HKRISE Boulders',
    funder: 'Environment and Conservation Fund, HKSAR',
    grant: 'ECF 112/2023',
    note: 'Forgotten habitats: physical environments and biodiversity of intertidal boulder fields.',
  },
];

/** People and institutional thanks distilled from project acknowledgements. */
export const peopleCredits: PeopleCredit[] = [
  {
    title: 'TideChasers and TIDE / SWIMS',
    body: 'Territory-wide surveys were led by the TideChasers — Steven Wong, Brian Leung, Jackson Lau, Valerie Hickey, and Tommy Hui — of the Tropical Intertidal Ecology (TIDE) Group at the Swire Institute of Marine Science (SWIMS), The University of Hong Kong, led by Prof. Gray A. Williams.',
  },
  {
    title: 'HKRISE Boulders (Lingnan)',
    body: 'HKRISE Boulders is led by Tommy Hui, Cherry Wong, and Adrian Wong from the Division of Science, Lingnan University, with survey and identification support from Dr. Jackson Lau and Mr. Brian Leung.',
  },
  {
    title: 'Website and data development',
    body: 'The territory-wide GIS was developed by Yvonne Li and Dr. Yi-Fei Gu with help from Tun and Phoebe (TIDE / SWIMS). HKRISE Lantau GIS work was led by Dr. Yi-Fei Gu and Mengxuan Chen. The boulder-field site was developed by Dr. Yi-Fei Gu with data and layout support from Ms. Yuzheng Chen and Mr. Nick Yin. Lantau fieldwork logistics were supported by SWIMS staff including Alan, Cecily, Tomas, and Sylvia.',
  },
  {
    title: 'Citizen science and data partners',
    body: 'Thanks to volunteers who joined BioBlitz citizen science surveys coordinated with the TIDE Group, helping extend biodiversity records beyond the core survey sites. Climate and tide data draw on Hong Kong Observatory services. The School of Biological Sciences, The University of Hong Kong, is a related institutional home for TIDE / SWIMS research.',
    bodyHtml:
      'Thanks to volunteers who joined <a href="https://www.tidehku.com/ecf-bioblitz" target="_blank" rel="noopener noreferrer">BioBlitz citizen science surveys</a> coordinated with the TIDE Group, helping extend biodiversity records beyond the core survey sites. Climate and tide data draw on <a href="https://www.hko.gov.hk/en/index.html" target="_blank" rel="noopener noreferrer">Hong Kong Observatory</a> services. The <a href="https://www.biosch.hku.hk/" target="_blank" rel="noopener noreferrer">School of Biological Sciences, The University of Hong Kong</a>, is a related institutional home for TIDE / SWIMS research.',
  },
];

export const institutionPartners: Partner[] = [
  { src: '/partners/tide.png', alt: 'TIDE Group', href: 'https://www.tidehku.com/' },
  { src: '/partners/swims.png', alt: 'SWIMS, The University of Hong Kong', href: 'https://www.swims.hku.hk/' },
  { src: '/partners/hku.jpg', alt: 'The University of Hong Kong', href: 'https://www.hku.hk/' },
  { src: '/partners/lingnan.webp', alt: 'Lingnan University', href: 'https://www.ln.edu.hk/' },
  {
    src: '/partners/dos.png',
    alt: 'Division of Science, Lingnan University',
    href: 'https://www.ln.edu.hk/dos',
  },
  {
    src: '/partners/hko.png',
    alt: 'Hong Kong Observatory',
    href: 'https://www.hko.gov.hk/en/index.html',
  },
];

/** Environment and Conservation Fund (HKSAR) — used by HKRISE and Boulders. */
export const ecfPartners: Partner[] = [
  {
    src: '/partners/ecf.png',
    alt: 'Environment and Conservation Fund',
    href: 'https://www.ecf.gov.hk/en/',
  },
];

/**
 * Marine Conservation Enhancement Fund grantors under Environmental Enhancement Funds
 * (Hong Kong Offshore LNG Terminal Project). Official branding uses Capco, HK Electric, and HKLTL.
 */
export const mcefPartners: Partner[] = [
  {
    src: '/partners/capco.png',
    alt: 'Capco — Castle Peak Power Co. Ltd.',
    href: 'https://env.hkolng.com/en/eef.html',
  },
  {
    src: '/partners/hk-electric.png',
    alt: 'HK Electric',
    href: 'https://env.hkolng.com/en/eef.html',
  },
  {
    src: '/partners/hkltl.png',
    alt: 'Hong Kong LNG Terminal Limited (HKLTL)',
    href: 'https://env.hkolng.com/en/eef.html',
  },
];

/** Flat list retained for any consumers that need all logos. */
export const funderPartners: Partner[] = [...ecfPartners, ...mcefPartners];
export const partners: Partner[] = [...institutionPartners, ...funderPartners];
