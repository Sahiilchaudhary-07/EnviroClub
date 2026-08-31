export type EventPost = {
  slug: string
  title: string
  date: string
  category: string
  excerpt: string
  image: string
  readingTime: string
  /** Body paragraphs — placeholder copy, easy to replace later. */
  body: string[]
  extraImages?: string[]
}

export const events: EventPost[] = [
  {
    slug: 'independence-day-plantation-drive',
    title: 'Independence Day Plantation Drive',
    date: 'August 15, 2026',
    category: 'Sustainability & Conservation',
    excerpt:
      'To commemorate India’s 80th Independence Day, the Enviro Club planted 80 saplings at MUJ Hostel B8 as a symbolic tribute to 80 years of independence.',
    image: '/Plantation1.png',
    readingTime: '4 min read',
    body: [
      'To commemorate India’s 80th Independence Day, the Enviro Club of Manipal University Jaipur organized a Tree Plantation Drive at the MUJ Hostel B8 premises. As a symbolic tribute to the nation’s 80 years of independence, 80 saplings were planted, with each sapling representing a year of India’s journey as an independent nation. The initiative aimed to transform the spirit of national pride into a meaningful contribution towards environmental conservation and sustainability.',
      'The plantation drive was graced by the presence of the university’s senior officials, faculty members, and students. The participation of the university’s esteemed leadership and members of the campus community added significance to the event and encouraged collective responsibility towards environmental protection.',
      'The drive was more than just a plantation activity; it represented a commitment to nurturing a greener and healthier future. Each of the 80 saplings planted during the event symbolized not only a milestone in the nation’s journey but also a shared responsibility towards preserving the environment for generations to come.',
    ],
    extraImages: ['/Plantation1.png', '/Plantation2.png'],
  },
  {
    slug: 'aquasolve-2026',
    title: 'AQUASOLVE 2026',
    date: 'January 30, 2026',
    category: 'Water & Sanitation',
    excerpt:
      'A dynamic student innovation showcase, prototype demonstration, and poster contest addressing pressing challenges in Water, Sanitation, and Hygiene (WASH).',
    image: '/Aqua1.png',
    readingTime: '4 min read',
    body: [
      'AQUASOLVE 2026 was a dynamic student innovation showcase organized by the Enviro Club, Department of Biosciences, in collaboration with the Directorate of Student Welfare (TechIdeate) at Manipal University Jaipur. Designed as an offline Prototype Demonstration and Poster Showcase Contest, AQUASOLVE served as a professional platform to bridge the gap between classroom theory and real-world application.',
      'The event enabled students to present functional prototypes, proof-of-concept models, and technical posters focused on addressing pressing challenges in Water, Sanitation, and Hygiene (WASH), aligning strongly with Sustainable Development Goal 6 (Clean Water and Sanitation).',
      'With participation from both MUJ and other institutions, the showcase fostered a competitive and intellectually stimulating environment.',
    ],
    extraImages: ['/Aqua1.png', '/Aqua2.png'],
  },
]

export function getEvent(slug: string) {
  return events.find((event) => event.slug === slug)
}
