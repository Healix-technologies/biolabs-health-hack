import { SiteHeader } from '@/components/site-header'
import { HeroSection } from '@/components/hero-section'
import { PartnersMarquee } from '@/components/PartnersMarquee'
import { AboutSection } from '@/components/about-section'
import { JourneySection } from '@/components/journey-section'
import { PrizeSection } from '@/components/prize-section'
import { RegistrationSection } from '@/components/registration-section'
import { SiteFooter } from '@/components/site-footer'

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <HeroSection />
        <PartnersMarquee />
        <AboutSection />
        <JourneySection />
        <PrizeSection />
        <RegistrationSection />
      </main>
      <SiteFooter />
    </>
  )
}
