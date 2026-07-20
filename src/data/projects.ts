export type Project = {
  id: string;
  title: string;
  pitch: string;
  tags: string[];
  href: string;
  image: string;
  imageAlt: string;
  /** Optional accent index into the CSS palette (--accent-0 …). Cycles by array index if omitted. */
  accent?: number;
};

export const accentCount = 5;

export function accentIndex(project: Project, index: number): number {
  if (typeof project.accent === 'number') {
    return ((project.accent % accentCount) + accentCount) % accentCount;
  }
  return index % accentCount;
}

/**
 * Destination sites for the HKRISE family.
 * To add a project later: place an image under public/projects/ and append one object here.
 */
export const projects: Project[] = [
  {
    id: 'rocky-shore',
    title: 'HKRISE',
    pitch:
      'Territory-wide rocky shore biodiversity and physical environment across six coastal regions and 24 survey sites.',
    tags: ['Map', 'GIS', 'Gallery'],
    href: 'https://Vicellken.github.io/HKRISE-reshape/',
    image: '/projects/rocky-shore.jpg',
    imageAlt: 'Rocky shore survey landscape in Hong Kong',
  },
  {
    id: 'lantau',
    title: 'HKRISE Lantau',
    pitch:
      'Thermal and salinity profiles that map where key marine species can thrive around Lantau — today and under future conditions.',
    tags: ['Habitat suitability', 'Species'],
    href: 'https://vicellken.github.io/HKRISE-Lantau/',
    image: '/projects/lantau.jpg',
    imageAlt: 'Coastal landscape around Lantau Island',
  },
  {
    id: 'boulders',
    title: 'HKRISE Boulders',
    pitch:
      'Two-year monitoring of intertidal boulder fields — how boulders move, habitats change, and species thrive between the tides.',
    tags: ['18 sites', 'Dashboards'],
    href: 'https://Vicellken.github.io/hkrise-lantau-update/',
    image: '/projects/boulders.jpg',
    imageAlt: 'Intertidal boulder field along a Hong Kong shore',
  },
];
