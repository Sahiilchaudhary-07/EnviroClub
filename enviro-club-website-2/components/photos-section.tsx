'use client'

import { Reveal } from './reveal'

const PHOTOS = [
  { src: '/Plantation1.png', alt: 'Dewy fern fronds unfurling', tall: true },
  { src: '/Plantation2.png', alt: 'Planting a sapling in soil', tall: false },
  { src: '/Aqua1.png', alt: 'Wildflower meadow at golden hour', tall: true },

]

export function PhotosSection() {
  return (
    <section id="photos" className="relative z-10 mx-auto max-w-7xl scroll-mt-24 px-6 py-28 md:px-10 md:py-40">
      <div className="max-w-2xl">
        <Reveal>
          <p className="text-[0.72rem] font-semibold uppercase tracking-[0.34em] text-moss">
            Moments
          </p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mt-6 font-serif text-[clamp(2.5rem,6vw,4.5rem)] font-medium leading-[0.98] tracking-tight text-balance text-forest">
            A Gallery of Growth.
          </h2>
        </Reveal>
      </div>

      <div className="mt-16 columns-1 gap-5 sm:columns-2 lg:columns-3">
        {PHOTOS.map((photo, i) => (
          <Reveal key={photo.src} delay={(i % 3) * 0.06} className="mb-5 block break-inside-avoid">
            <div className="group overflow-hidden rounded-2xl border border-border">
              <img
                src={photo.src || '/placeholder.svg'}
                alt={photo.alt}
                className={`w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-105 ${photo.tall ? 'aspect-[3/4]' : 'aspect-[4/3]'
                  }`}
              />
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
