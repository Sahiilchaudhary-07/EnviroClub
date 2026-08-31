'use client'

import { useRef } from 'react'
import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react'
import { Reveal } from './reveal'

const BENEFITS = [
  'Hands-on sustainability projects',
  'Community service & volunteering',
  'On-campus events and off-campus excursions',
  'A community that grows with you',
]

export function JoinSection() {
  const ref = useRef<HTMLDivElement>(null)
  const reduced = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const leafY = useTransform(
    scrollYProgress,
    [0, 1],
    reduced ? ['0%', '0%'] : ['30%', '-30%'],
  )

  return (
    <section
      id="join"
      ref={ref}
      className="relative z-10 scroll-mt-24 overflow-hidden bg-forest py-28 text-primary-foreground md:py-40"
    >
      {/* soft radial light */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_75%_20%,rgba(214,188,120,0.18),transparent_55%)]" />
      <motion.img
        src="/leaf.jpg"
        alt=""
        aria-hidden
        style={{ y: leafY }}
        className="pointer-events-none absolute right-[8%] top-10 w-24 opacity-20 md:w-40"
      />

      <div className="relative mx-auto max-w-7xl px-6 md:px-10">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
          <div>
            <Reveal>
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.34em] text-primary-foreground/60">
                Become a Member
              </p>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-6 font-serif text-[clamp(2.5rem,6vw,4.75rem)] font-medium leading-[0.98] tracking-tight text-balance">
                Plant Your Roots With Us.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 max-w-md text-pretty text-lg leading-relaxed text-primary-foreground/75">
                Whether you want to lead a project or simply lend a hand, there is a place for
                you in the Enviro Club. Growth is always better together.
              </p>
            </Reveal>
          </div>

          <div>
            <ul className="space-y-4">
              {BENEFITS.map((benefit, i) => (
                <Reveal as="li" key={benefit} delay={0.05 * i}>
                  <div className="flex items-center gap-4 border-b border-primary-foreground/15 pb-4">
                    <span className="font-serif text-lg text-primary-foreground/50">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="text-lg text-primary-foreground/90">{benefit}</span>
                  </div>
                </Reveal>
              ))}
            </ul>
            <Reveal delay={0.1}>
              <a
                href="https://forms.gle/W5bFyPEUTRTKFDj97"
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-10 inline-flex items-center gap-3 rounded-full bg-primary-foreground px-8 py-4 text-[0.75rem] font-semibold uppercase tracking-[0.22em] text-forest transition-all duration-300 hover:gap-4"
              >
                JOIN NOW
                <span className="transition-transform duration-300 group-hover:translate-x-0.5">
                  →
                </span>
              </a>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
