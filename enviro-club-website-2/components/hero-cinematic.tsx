'use client'

import { useRef } from 'react'
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  type MotionValue,
} from 'motion/react'

const STORY = [
  {
    range: [0.2, 0.28, 0.4, 0.46],
    align: 'left' as const,
    eyebrow: 'Chapter One',
    title: 'Every forest begins with a single seed.',
    body: 'What started as one small idea in 2021 has grown roots across our entire campus.',
  },
  {
    range: [0.46, 0.54, 0.66, 0.72],
    align: 'right' as const,
    eyebrow: 'Chapter Two',
    title: 'Roots run deeper than you can see.',
    body: 'Community service, volunteerism and quiet, steady work — the parts that hold everything together.',
  },
  {
    range: [0.72, 0.8, 0.9, 0.96],
    align: 'left' as const,
    eyebrow: 'Chapter Three',
    title: 'And so, we grow — together.',
    body: 'A canopy of students, ideas and action, reaching for a greener, more sustainable future.',
  },
]

function StoryBeat({
  progress,
  beat,
  reduced,
}: {
  progress: MotionValue<number>
  beat: (typeof STORY)[number]
  reduced: boolean | null
}) {
  const [a, b, c, d] = beat.range
  const opacity = useTransform(progress, [a, b, c, d], [0, 1, 1, 0])
  const y = useTransform(progress, [a, d], reduced ? [0, 0] : [60, -60])

  return (
    <motion.div
      style={{ opacity, y }}
      className={`pointer-events-none absolute top-1/2 z-30 w-[min(88vw,30rem)] -translate-y-1/2 px-2 ${beat.align === 'left'
          ? 'left-6 text-left md:left-16 lg:left-24'
          : 'right-6 text-left md:right-16 lg:right-24'
        }`}
    >
      <p className="mb-4 text-[0.7rem] font-semibold uppercase tracking-[0.32em] text-moss">
        {beat.eyebrow}
      </p>
      <h2 className="font-serif text-[clamp(1.9rem,4vw,3.2rem)] font-medium leading-[1.05] text-balance text-forest">
        {beat.title}
      </h2>
      <p className="mt-5 max-w-sm text-pretty text-base leading-relaxed text-forest/70">
        {beat.body}
      </p>
    </motion.div>
  )
}

function FloatingLeaf({
  delay,
  left,
  top,
  size,
  drift,
  reduced,
}: {
  delay: number
  left: string
  top: string
  size: number
  drift: number
  reduced: boolean | null
}) {
  if (reduced) return null
  return (
    <motion.img
      src="/leaf.jpg"
      alt=""
      aria-hidden
      width={size}
      height={size}
      style={{ left, top, width: size, height: size }}
      className="pointer-events-none absolute z-20 select-none opacity-70"
      initial={{ y: -20, rotate: 0, opacity: 0 }}
      animate={{
        y: [0, 140, 300],
        x: [0, drift, drift * 1.6],
        rotate: [0, 90, 220],
        opacity: [0, 0.75, 0],
      }}
      transition={{
        duration: 9 + delay,
        repeat: Number.POSITIVE_INFINITY,
        ease: 'easeInOut',
        delay,
      }}
    />
  )
}

export function HeroCinematic() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const reduced = useReducedMotion()

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  })

  // Camera: zoom into the tree, then pull back to reveal it whole.
  const treeScale = useTransform(
    scrollYProgress,
    [0, 0.5, 0.8, 1],
    reduced ? [1, 1.05, 1.05, 1] : [1, 1.55, 1.85, 1.08],
  )
  const treeY = useTransform(
    scrollYProgress,
    [0, 0.8, 1],
    reduced ? [0, 0, 0] : ['0%', '10%', '2%'],
  )

  // Atmosphere: slow parallax + gradual warming of the light.
  const atmoScale = useTransform(scrollYProgress, [0, 1], reduced ? [1, 1] : [1.05, 1.25])
  const atmoY = useTransform(scrollYProgress, [0, 1], reduced ? ['0%', '0%'] : ['0%', '-8%'])
  const goldenOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 0.35, 0.15])

  // Foreground flora: closest layer, moves fastest.
  const fgY = useTransform(scrollYProgress, [0, 1], reduced ? ['0%', '0%'] : ['0%', '55%'])
  const fgScale = useTransform(scrollYProgress, [0, 1], reduced ? [1, 1] : [1, 1.5])

  // Hero intro text fades away early.
  const heroOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0])
  const heroY = useTransform(scrollYProgress, [0, 0.12], reduced ? [0, 0] : [0, -80])

  // Scroll cue.
  const cueOpacity = useTransform(scrollYProgress, [0, 0.06], [1, 0])

  // Final transition into the site.
  const outroFade = useTransform(scrollYProgress, [0.92, 1], [0, 1])

  return (
    <section
      id="top"
      ref={sectionRef}
      className="relative h-[560vh] bg-ivory"
      aria-label="Enviro Club cinematic introduction"
    >
      <div className="sticky top-0 h-screen overflow-hidden bg-[linear-gradient(to_bottom,oklch(0.96_0.02_95),oklch(0.93_0.03_120),oklch(0.88_0.04_140))]">
        {/* Atmosphere / sky */}
        <motion.div
          style={{ scale: atmoScale, y: atmoY }}
          className="absolute inset-0 z-0"
        >
          <img
            src="/hero-atmosphere.png"
            alt=""
            aria-hidden
            className="h-full w-full object-cover"
          />
        </motion.div>

        {/* Warm ivory wash so the imagery blends into the theme */}
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-ivory/50 via-transparent to-ivory" />

        {/* Golden light overlay that warms as you scroll */}
        <motion.div
          style={{ opacity: goldenOpacity }}
          className="absolute inset-0 z-[5] bg-[radial-gradient(circle_at_50%_28%,rgba(214,188,120,0.55),transparent_60%)]"
        />

        {/* The tree — visual anchor for the whole sequence */}
        <motion.div
          style={{ scale: treeScale, y: treeY }}
          className="absolute inset-0 z-10 flex items-end justify-center will-change-transform"
        >
          <motion.img
            src="/hero-tree.jpg"
            alt="A large flourishing tree, the emblem of Enviro Club"
            className="h-[92%] w-auto max-w-none object-contain drop-shadow-[0_25px_45px_rgba(40,60,45,0.15)]"
            animate={
              reduced
                ? undefined
                : { rotate: [0, 0.6, 0, -0.6, 0], scale: [1, 1.004, 1] }
            }
            transition={{
              duration: 12,
              repeat: Number.POSITIVE_INFINITY,
              ease: 'easeInOut',
            }}
          />
        </motion.div>

        {/* Story beats */}
        {STORY.map((beat) => (
          <StoryBeat
            key={beat.eyebrow}
            progress={scrollYProgress}
            beat={beat}
            reduced={reduced}
          />
        ))}

        {/* Floating leaves */}
        <FloatingLeaf delay={0} left="18%" top="12%" size={34} drift={40} reduced={reduced} />
        <FloatingLeaf delay={2.5} left="70%" top="8%" size={26} drift={-50} reduced={reduced} />
        <FloatingLeaf delay={4} left="42%" top="16%" size={30} drift={30} reduced={reduced} />
        <FloatingLeaf delay={6} left="82%" top="20%" size={22} drift={-30} reduced={reduced} />
        <FloatingLeaf delay={1.5} left="8%" top="24%" size={28} drift={55} reduced={reduced} />

        {/* Foreground flora */}
        <motion.div
          style={{ y: fgY, scale: fgScale }}
          className="pointer-events-none absolute inset-x-0 bottom-0 z-20 origin-bottom will-change-transform"
        >
          <motion.img
            src="/hero-foreground.jpg"
            alt=""
            aria-hidden
            className="w-full object-cover object-bottom"
            animate={reduced ? undefined : { rotate: [0, 0.4, 0, -0.4, 0] }}
            transition={{
              duration: 8,
              repeat: Number.POSITIVE_INFINITY,
              ease: 'easeInOut',
            }}
          />
        </motion.div>

        {/* Hero intro copy */}
        <motion.div
          style={{ opacity: heroOpacity, y: heroY }}
          className="absolute inset-0 z-40 flex items-start justify-center pt-[18vh] md:pt-[16vh]"
        >
          {/* Subtle light backdrop for guaranteed readability */}
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_30%,rgba(245,240,232,0.7)_0%,transparent_70%)]" />
          <div className="relative mx-auto w-full max-w-3xl px-6 text-center md:px-10">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.9 }}
              className="mb-6 text-[0.72rem] font-semibold uppercase tracking-[0.34em] text-moss"
            >
              Environment • Community • Action
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65, duration: 1 }}
              className="font-serif text-[clamp(3rem,10vw,7rem)] font-medium leading-[0.95] tracking-tight text-forest drop-shadow-[0_1px_8px_rgba(245,240,232,0.6)]"
            >
              Enviro Club
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.85, duration: 1 }}
              className="mt-4 font-serif text-[clamp(1.25rem,3vw,1.9rem)] italic text-moss"
            >
              Growing Ideas. Growing Impact.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 1 }}
              className="mx-auto mt-6 max-w-md text-pretty text-base leading-relaxed text-forest/70 md:text-lg"
            >
              A student-led community working towards a greener campus and a more
              sustainable future.
            </motion.p>
            <motion.a
              href="#about"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 1 }}
              className="group mt-9 inline-flex items-center gap-3 rounded-full bg-forest px-7 py-3.5 text-[0.75rem] font-semibold uppercase tracking-[0.22em] text-primary-foreground transition-all duration-300 hover:gap-4 hover:bg-moss"
            >
              Explore Our Story
              <span className="transition-transform duration-300 group-hover:translate-y-0.5">
                ↓
              </span>
            </motion.a>
          </div>
        </motion.div>

        {/* Scroll cue */}
        <motion.div
          style={{ opacity: cueOpacity }}
          className="absolute inset-x-0 bottom-8 z-40 flex flex-col items-center gap-2 text-forest/60"
        >
          <span className="text-[0.65rem] font-medium uppercase tracking-[0.3em]">
            Scroll
          </span>
          <motion.span
            animate={reduced ? undefined : { y: [0, 8, 0] }}
            transition={{ duration: 1.8, repeat: Number.POSITIVE_INFINITY }}
            className="text-lg"
          >
            ↓
          </motion.span>
        </motion.div>

        {/* Outro wash into the next section */}
        <motion.div
          style={{ opacity: outroFade }}
          className="pointer-events-none absolute inset-0 z-40 bg-gradient-to-b from-transparent via-transparent to-ivory"
        />
      </div>
    </section>
  )
}
