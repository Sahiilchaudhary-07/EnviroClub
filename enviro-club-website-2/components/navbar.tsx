'use client'

import { useEffect, useState } from 'react'
import { motion, useMotionValueEvent, useScroll } from 'motion/react'
import { Menu, X } from 'lucide-react'

const LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Team', href: '#team' },
  { label: 'Events', href: '#events' },
  { label: 'Photos', href: '#photos' },
  { label: 'Contact', href: '#contact' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setScrolled(latest > 40)
  })

  useEffect(() => {
    if (open) document.body.style.overflow = 'hidden'
    else document.body.style.overflow = ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
      className="fixed inset-x-0 top-0 z-50"
    >
      <div
        className={`transition-all duration-500 ${
          scrolled
            ? 'border-b border-border/60 bg-background/70 backdrop-blur-md'
            : 'border-b border-transparent bg-transparent'
        }`}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10">
          <a
            href="#top"
            className="font-serif text-lg font-medium tracking-[0.18em] text-forest"
          >
            ENVIRO CLUB
          </a>

          <div className="hidden items-center gap-8 lg:flex">
            <ul className="flex items-center gap-7 text-[0.78rem] font-medium uppercase tracking-[0.18em] text-forest/70">
              {LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="relative transition-colors duration-300 hover:text-forest"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href="PASTE_GOOGLE_FORM_LINK_HERE"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full border border-forest/25 px-5 py-2 text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-forest transition-all duration-300 hover:bg-forest hover:text-primary-foreground"
            >
              Join Us
              <span className="transition-transform duration-300 group-hover:translate-x-0.5">
                →
              </span>
            </a>
          </div>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="text-forest lg:hidden"
            aria-label={open ? 'Close menu' : 'Open menu'}
          >
            {open ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </nav>
      </div>

      {/* Mobile menu */}
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 top-[61px] z-40 bg-background/95 backdrop-blur-lg lg:hidden"
        >
          <ul className="flex flex-col gap-1 px-6 py-8">
            {LINKS.map((link, i) => (
              <motion.li
                key={link.href}
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.06 * i, duration: 0.5 }}
              >
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block border-b border-border/50 py-4 font-serif text-2xl text-forest"
                >
                  {link.label}
                </a>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      )}
    </motion.header>
  )
}
