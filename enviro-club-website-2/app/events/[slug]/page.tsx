import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft } from 'lucide-react'
import type { Metadata } from 'next'
import { events, getEvent } from '@/lib/events'
import { SiteFooter } from '@/components/site-footer'

export function generateStaticParams() {
  return events.map((event) => ({ slug: event.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const event = getEvent(slug)
  if (!event) return { title: 'Story Not Found — Enviro Club' }
  return {
    title: `${event.title} — Enviro Club`,
    description: event.excerpt,
  }
}

export default async function EventPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const event = getEvent(slug)
  if (!event) notFound()

  const more = events.filter((e) => e.slug !== slug).slice(0, 2)

  return (
    <main className="relative">
      <div className="mx-auto max-w-3xl px-6 pt-28 md:pt-36">
        <Link
          href="/#events"
          className="inline-flex items-center gap-2 text-sm font-medium uppercase tracking-[0.18em] text-moss transition-colors hover:text-forest"
        >
          <ArrowLeft className="size-4" />
          All Stories
        </Link>

        <div className="mt-10 flex items-center gap-3 text-xs uppercase tracking-[0.18em] text-forest/50">
          <span className="rounded-full bg-secondary px-3 py-1 font-semibold text-forest">
            {event.category}
          </span>
          <span>{event.date}</span>
          <span aria-hidden>•</span>
          <span>{event.readingTime}</span>
        </div>

        <h1 className="mt-6 font-serif text-[clamp(2.25rem,6vw,3.75rem)] font-medium leading-[1] tracking-tight text-balance text-forest">
          {event.title}
        </h1>
        <p className="mt-6 text-pretty text-xl leading-relaxed text-forest/70">
          {event.excerpt}
        </p>
      </div>

      <div className="mx-auto mt-12 max-w-5xl px-6">
        <div className="overflow-hidden rounded-2xl border border-border">
          <img
            src={event.image || '/placeholder.svg'}
            alt={event.title}
            className="aspect-[16/9] w-full object-cover"
          />
        </div>
      </div>

      <article className="mx-auto max-w-3xl px-6 py-16 md:py-20">
        <div className="space-y-7 text-lg leading-relaxed text-forest/80">
          {event.body.map((paragraph, i) => (
            <p key={i} className="text-pretty">
              {i === 0 ? (
                <span className="float-left mr-3 mt-1 font-serif text-6xl leading-[0.7] text-moss">
                  {paragraph.charAt(0)}
                </span>
              ) : null}
              {i === 0 ? paragraph.slice(1) : paragraph}
            </p>
          ))}
        </div>

        {event.extraImages && event.extraImages.length > 0 && (
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {event.extraImages.map((img, i) => (
              <div key={i} className="overflow-hidden rounded-xl border border-border">
                <img src={img} alt="" className="aspect-square w-full object-cover" />
              </div>
            ))}
          </div>
        )}
      </article>

      <section className="border-t border-border bg-secondary/40 py-20">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="font-serif text-3xl font-medium text-forest">More Stories</h2>
          <div className="mt-10 grid gap-8 sm:grid-cols-2">
            {more.map((post) => (
              <Link
                key={post.slug}
                href={`/events/${post.slug}`}
                className="group overflow-hidden rounded-2xl border border-border bg-card transition-all duration-500 hover:-translate-y-1 hover:border-moss/50"
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={post.image || '/placeholder.svg'}
                    alt={post.title}
                    className="h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <span className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-moss">
                    {post.category}
                  </span>
                  <h3 className="mt-2 font-serif text-xl font-medium text-forest">
                    {post.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}
