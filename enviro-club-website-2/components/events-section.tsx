'use client'

import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { events } from '@/lib/events'
import { Reveal } from './reveal'

export function EventsSection() {
  const [feature, ...rest] = events

  return (
    <section
      id="events"
      className="relative z-10 scroll-mt-24 bg-secondary/40 py-28 md:py-40"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <Reveal>
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.34em] text-moss">
                Events & Stories
              </p>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-6 font-serif text-[clamp(2.5rem,6vw,4.5rem)] font-medium leading-[0.98] tracking-tight text-balance text-forest">
                Notes From the Field.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <span className="text-sm text-forest/50">Placeholder posts — easy to replace</span>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-10 lg:grid-cols-2">
          {/* Feature post */}
          <Reveal className="lg:row-span-2">
            <Link
              href={`/events/${feature.slug}`}
              className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all duration-500 hover:-translate-y-1 hover:border-moss/50"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={feature.image || '/placeholder.svg'}
                  alt={feature.title}
                  className="h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-105"
                />
                <span className="absolute left-5 top-5 rounded-full bg-background/85 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-forest backdrop-blur">
                  {feature.category}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-8">
                <div className="flex items-center gap-3 text-xs uppercase tracking-[0.18em] text-forest/50">
                  <span>{feature.date}</span>
                  <span aria-hidden>•</span>
                  <span>{feature.readingTime}</span>
                </div>
                <h3 className="mt-4 font-serif text-3xl font-medium leading-tight text-forest">
                  {feature.title}
                </h3>
                <p className="mt-4 flex-1 text-pretty leading-relaxed text-forest/65">
                  {feature.excerpt}
                </p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-moss">
                  Read Story
                  <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </div>
            </Link>
          </Reveal>

          {/* Secondary posts */}
          {rest.map((post, i) => (
            <Reveal key={post.slug} delay={0.05 * i}>
              <Link
                href={`/events/${post.slug}`}
                className="group flex gap-6 rounded-2xl border border-border bg-card p-5 transition-all duration-500 hover:-translate-y-1 hover:border-moss/50"
              >
                <div className="relative aspect-square w-32 shrink-0 overflow-hidden rounded-xl sm:w-40">
                  <img
                    src={post.image || '/placeholder.svg'}
                    alt={post.title}
                    className="h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-105"
                  />
                </div>
                <div className="flex min-w-0 flex-col justify-center">
                  <span className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-moss">
                    {post.category}
                  </span>
                  <h3 className="mt-2 font-serif text-xl font-medium leading-snug text-forest">
                    {post.title}
                  </h3>
                  <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-forest/60">
                    {post.excerpt}
                  </p>
                  <div className="mt-4 flex items-center gap-4">
                    <span className="text-xs uppercase tracking-[0.18em] text-forest/45">
                      {post.date}
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-moss">
                      Read Story
                      <ArrowUpRight className="size-3 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
