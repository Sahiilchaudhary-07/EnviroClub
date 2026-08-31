import { Navbar } from '@/components/navbar'
import { HeroCinematic } from '@/components/hero-cinematic'
import { AboutSection } from '@/components/about-section'
import { WhatWeDo } from '@/components/what-we-do'
import { TeamSection } from '@/components/team-section'
import { EventsSection } from '@/components/events-section'
import { PhotosSection } from '@/components/photos-section'
import { JoinSection } from '@/components/join-section'
import { ContactSection } from '@/components/contact-section'
import { SiteFooter } from '@/components/site-footer'

export default function HomePage() {
  return (
    <main className="relative">
      <Navbar />
      <HeroCinematic />
      <AboutSection />
      <WhatWeDo />
      <TeamSection />
      <EventsSection />
      <PhotosSection />
      <JoinSection />
      <ContactSection />
      <SiteFooter />
    </main>
  )
}
