'use client'

import { Reveal } from './reveal'

type Member = {
  name: string
  role: string
  note: string
  photo?: string
  founder?: boolean
}

const TEAM: Member[] = [
  {
    name: 'Dr. Monika Sogani',
    role: 'Founder & Faculty Mentor',
    note: 'Founded the Enviro Club in 2021 with a vision for a greener, more engaged campus.',
    photo: 'Monika.jpeg',
    founder: true,
  },
  { name: 'Manvendra', role: 'President', note: '', photo: 'Manvendra.png' },
  {
    name: 'Pratik Kumar',
    role: 'General Secretary',
    note: '',
    photo: 'photo1.jpeg',
  },
  {
    name: 'Sadiya Khan',
    role: 'Social Media Head',
    note: '',
    photo: 'Sadiya Khan.png',
  },
  {
    name: 'Sahil',
    role: 'Tech Head',
    note: '',
    photo: 'Sahil.jpeg',
  },
  {
    name: 'Lakshya Jain',
    role: 'Working Team Head',
    note: '',
    photo: 'laksh.jpeg',
  },
  {
    name: 'Gouri Nair',
    role: 'Design Head',
    note: '',
    photo: 'Gouri.png',
  },
  {
    name: 'Sakshi Shandilya',
    role: 'Event & Planning Head',
    note: '',
    photo: 'Sakshi.jpg.jpeg',
  },
  {
    name: 'Aditya Dubey',
    role: 'Finance Secretary',
    note: '',
    photo: 'Aditya.jpeg ',
  },
  {
    name: 'Avani Kumawat',
    role: 'Editorial Team Head',
    note: '',
    photo: 'Avani.jpeg',
  },
]

function initials(name: string) {
  const parts = name.replace(/^Dr\.\s*/, '').split(' ')
  return (parts[0]?.[0] ?? '') + (parts[1]?.[0] ?? '')
}

export function TeamSection() {
  return (
    <section id="team" className="relative z-10 mx-auto max-w-7xl scroll-mt-24 px-6 py-28 md:px-10 md:py-40">
      <div className="max-w-2xl">
        <Reveal>
          <p className="text-[0.72rem] font-semibold uppercase tracking-[0.34em] text-moss">
            The People
          </p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mt-6 font-serif text-[clamp(2.5rem,6vw,4.5rem)] font-medium leading-[0.98] tracking-tight text-balance text-forest">
            Hands That Tend the Garden.
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-6 max-w-lg text-pretty text-lg leading-relaxed text-forest/70">
            A student-led team guided by faculty mentorship. These placeholder profiles are
            ready for you to fill in with your own members.
          </p>
        </Reveal>
      </div>

      <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {TEAM.map((member, i) => (
          <Reveal key={`${member.name}-${i}`} delay={(i % 3) * 0.08}>
            <article
              className={`group flex h-full flex-col items-center text-center rounded-2xl border p-8 transition-all duration-500 hover:-translate-y-1 ${member.founder
                ? 'border-moss/40 bg-forest text-primary-foreground'
                : 'border-border bg-card hover:border-moss/50'
                }`}
            >
              {/* Member photo or initials fallback */}
              {member.photo ? (
                <div className="size-36 overflow-hidden rounded-full">
                  <img
                    src={member.photo}
                    alt={member.name}
                    className="h-full w-full object-cover"
                  />
                </div>
              ) : (
                <div
                  className={`flex size-36 items-center justify-center rounded-full font-serif text-4xl ${member.founder
                    ? 'bg-primary-foreground/15 text-primary-foreground'
                    : 'bg-secondary text-forest'
                    }`}
                  aria-hidden
                >
                  {initials(member.name)}
                </div>
              )}
              <h3
                className={`mt-6 font-serif text-2xl font-medium ${member.founder ? 'text-primary-foreground' : 'text-forest'
                  }`}
              >
                {member.name}
              </h3>
              <p
                className={`mt-1 text-xs uppercase tracking-[0.24em] ${member.founder ? 'text-primary-foreground/70' : 'text-moss'
                  }`}
              >
                {member.role}
              </p>
              <p
                className={`mt-5 text-pretty text-sm leading-relaxed ${member.founder ? 'text-primary-foreground/80' : 'text-forest/65'
                  }`}
              >
                {member.note}
              </p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
