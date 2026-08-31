'use client'

import { useRef } from 'react'
import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react'
import { Reveal } from './reveal'

export function AboutSection() {
  const ref = useRef<HTMLDivElement>(null)
  const reduced = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const yearY = useTransform(
    scrollYProgress,
    [0, 1],
    reduced ? ['0%', '0%'] : ['18%', '-18%'],
  )
  const yearOpacity = useTransform(scrollYProgress, [0, 0.3, 0.8, 1], [0, 1, 1, 0.3])

  return (
    <section
      id="about"
      ref={ref}
      className="relative z-10 mx-auto max-w-7xl scroll-mt-24 px-6 py-28 md:px-10 md:py-40"
    >
      <div className="grid gap-16 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-5">
          <Reveal>
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.34em] text-moss">
              About the Club
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-6 font-serif text-[clamp(2.5rem,6vw,4.5rem)] font-medium leading-[0.98] tracking-tight text-balance text-forest">
              Rooted in Purpose.
            </h2>
          </Reveal>

          <div className="relative mt-14 hidden lg:block" aria-hidden>
            <motion.span
              style={{ y: yearY, opacity: yearOpacity }}
              className="block font-serif text-[13rem] font-medium leading-none tracking-tighter text-moss/20"
            >
              2021
            </motion.span>
            <span className="mt-2 block text-sm uppercase tracking-[0.3em] text-forest/50">
              The year it began
            </span>
          </div>
        </div>

        <div className="lg:col-span-6 lg:col-start-7">
          <div className="space-y-8 text-pretty text-lg leading-relaxed text-forest/80 md:text-xl">
            <Reveal>
              <p>
                The Enviro Club was founded by{' '}
                <span className="font-serif italic text-forest">Dr. Monika Sogani</span> in{' '}
                <span className="font-serif italic text-forest">2021</span>. Since its
                inception, the club has experienced substantial growth and remains dedicated
                towards enhancing the well-being of communities and individuals through
                volunteerism and community service.
              </p>
            </Reveal>
            <Reveal delay={0.05}>
              <p>
                Our club has actively participated in a diverse range of activities,
                including fundraising initiatives, volunteering with local organizations, and
                various other endeavors.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <p>
                Furthermore, Enviro Club organizes a variety of on-campus activities and
                off-campus excursions that contribute to both academic and social
                development.
              </p>
            </Reveal>
          </div>

          <div className="mt-12 flex flex-wrap gap-x-14 gap-y-8 border-t border-border pt-10">
            {[
              { k: '2021', v: 'Founded' },
              { k: 'Student', v: 'Led & Run' },
              { k: 'Campus', v: '& Beyond' },
            ].map((stat, i) => (
              <Reveal key={stat.k} delay={0.05 * i}>
                <div>
                  <div className="font-serif text-3xl font-medium text-forest">{stat.k}</div>
                  <div className="mt-1 text-xs uppercase tracking-[0.24em] text-forest/50">
                    {stat.v}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
