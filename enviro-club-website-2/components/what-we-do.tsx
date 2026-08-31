'use client'

import {
  Sprout,
  HeartHandshake,
  HandCoins,
  Megaphone,
  Trees,
  Compass,
} from 'lucide-react'
import { Reveal } from './reveal'

const ITEMS = [
  {
    icon: Sprout,
    title: 'Sustainability',
    body: 'Championing greener habits, waste reduction and lasting environmental practice across campus life.',
  },
  {
    icon: HeartHandshake,
    title: 'Community Service',
    body: 'Volunteering time and care with local organizations to support the people around us.',
  },
  {
    icon: HandCoins,
    title: 'Fundraising',
    body: 'Driving initiatives that turn collective effort into meaningful, tangible impact.',
  },
  {
    icon: Megaphone,
    title: 'Environmental Awareness',
    body: 'Sparking conversation and understanding around the issues that shape our shared future.',
  },
  {
    icon: Trees,
    title: 'Campus Activities',
    body: 'On-campus events that bring students together around ideas worth growing.',
  },
  {
    icon: Compass,
    title: 'Off-Campus Excursions',
    body: 'Journeys beyond the classroom that build academic and social development alike.',
  },
]

export function WhatWeDo() {
  return (
    <section
      id="what-we-do"
      className="relative z-10 scroll-mt-24 bg-secondary/40 py-28 md:py-40"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="max-w-2xl">
          <Reveal>
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.34em] text-moss">
              What We Do
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-6 font-serif text-[clamp(2.5rem,6vw,4.5rem)] font-medium leading-[0.98] tracking-tight text-balance text-forest">
              Where Ideas Take Root.
            </h2>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-x-12 gap-y-2 md:mt-24 md:grid-cols-2">
          {ITEMS.map((item, i) => {
            const Icon = item.icon
            return (
              <Reveal key={item.title} delay={(i % 2) * 0.08}>
                <div
                  className={`group flex gap-6 border-t border-forest/15 py-10 transition-colors duration-500 hover:border-forest/40 ${
                    i % 2 === 1 ? 'md:mt-16' : ''
                  }`}
                >
                  <div className="mt-1 flex size-12 shrink-0 items-center justify-center rounded-full border border-forest/20 text-moss transition-all duration-500 group-hover:border-moss group-hover:bg-moss group-hover:text-primary-foreground">
                    <Icon className="size-5" strokeWidth={1.5} />
                  </div>
                  <div>
                    <div className="flex items-baseline gap-3">
                      <span className="font-serif text-sm text-moss/70">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <h3 className="font-serif text-2xl font-medium text-forest md:text-[1.75rem]">
                        {item.title}
                      </h3>
                    </div>
                    <p className="mt-3 max-w-sm text-pretty leading-relaxed text-forest/65">
                      {item.body}
                    </p>
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
