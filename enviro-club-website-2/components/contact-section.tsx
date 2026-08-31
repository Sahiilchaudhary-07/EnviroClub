'use client'

import { Mail, AtSign } from 'lucide-react'
import { Reveal } from './reveal'

export function ContactSection() {
  return (
    <section
      id="contact"
      className="relative z-10 mx-auto max-w-7xl scroll-mt-24 px-6 py-28 md:px-10 md:py-40"
    >
      <div className="mx-auto max-w-2xl text-center">
        <Reveal>
          <p className="text-[0.72rem] font-semibold uppercase tracking-[0.34em] text-moss">
            Contact
          </p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mt-6 font-serif text-[clamp(2.5rem,6vw,4.5rem)] font-medium leading-[0.98] tracking-tight text-balance text-forest">
            Say Hello.
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-6 mx-auto max-w-md text-pretty text-lg leading-relaxed text-forest/70">
            Have a question or want to get involved? Reach out to us through
            email or connect with us on Instagram.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 sm:gap-8">
          {/* Email */}
          <Reveal delay={0.05}>
            <a
              href="mailto:enviro.club.muj@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-4 rounded-2xl border border-border bg-card p-8 transition-all duration-300 hover:border-moss/40 hover:shadow-lg hover:shadow-moss/5"
            >
              <div className="flex size-12 items-center justify-center rounded-full border border-forest/20 text-moss transition-colors duration-300 group-hover:border-moss group-hover:bg-moss/10">
                <Mail className="size-5" strokeWidth={1.5} />
              </div>
              <div>
                <div className="text-xs uppercase tracking-[0.24em] text-forest/50">
                  Email
                </div>
                <div className="mt-1 text-lg text-forest transition-colors duration-300 group-hover:text-moss">
                  enviro.club.muj@gmail.com
                </div>
              </div>
            </a>
          </Reveal>

          {/* Instagram */}
          <Reveal delay={0.1}>
            <a
              href="https://www.instagram.com/enviroclub.muj/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-4 rounded-2xl border border-border bg-card p-8 transition-all duration-300 hover:border-moss/40 hover:shadow-lg hover:shadow-moss/5"
            >
              <div className="flex size-12 items-center justify-center rounded-full border border-forest/20 text-moss transition-colors duration-300 group-hover:border-moss group-hover:bg-moss/10">
                <AtSign className="size-5" strokeWidth={1.5} />
              </div>
              <div>
                <div className="text-xs uppercase tracking-[0.24em] text-forest/50">
                  Instagram
                </div>
                <div className="mt-1 text-lg text-forest transition-colors duration-300 group-hover:text-moss">
                  @enviroclub.muj
                </div>
              </div>
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
