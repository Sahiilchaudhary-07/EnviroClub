const NAV = [
  { label: 'About', href: '#about' },
  { label: 'Team', href: '#team' },
  { label: 'Events', href: '#events' },
  { label: 'Photos', href: '#photos' },
  { label: 'Join Us', href: '#join' },
  { label: 'Contact', href: '#contact' },
]

export function SiteFooter() {
  return (
    <footer className="relative z-10 border-t border-border bg-secondary/40">
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-20">
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <p className="font-serif text-2xl font-medium tracking-[0.14em] text-forest">
              ENVIRO CLUB
            </p>
            <p className="mt-4 max-w-sm text-pretty leading-relaxed text-forest/65">
              Growing ideas. Growing impact. A student-led community working towards a greener
              campus and a more sustainable future.
            </p>
          </div>
          <nav aria-label="Footer" className="md:justify-self-end">
            <ul className="grid grid-cols-2 gap-x-12 gap-y-3">
              {NAV.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-sm uppercase tracking-[0.18em] text-forest/60 transition-colors hover:text-forest"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-border pt-8 text-sm text-forest/50 sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} Enviro Club. All rights reserved.</p>
          <p className="font-serif italic">Environment • Community • Action</p>
        </div>
      </div>
    </footer>
  )
}
