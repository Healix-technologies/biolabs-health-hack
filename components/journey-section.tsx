import Image from 'next/image'
import { SectionHeading } from '@/components/section-heading'

export function JourneySection() {
  return (
    <section id="journey" className="bg-secondary py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <SectionHeading
          eyebrow="Official Competition Timeline"
          title="Healix AI HealthHack 2026 - Official Event Timeline"
          align="center"
          description="Follow the journey from registration through the evaluation rounds to the final award ceremony."
        />

        <div className="mt-12 w-full overflow-hidden rounded-2xl shadow-xl">
          <Image
            src="/hackathon-roadmap.jpg"
            alt="Hackathon Roadmap – 6-step competition timeline from Registration to Results"
            width={1400}
            height={788}
            className="w-full h-auto object-contain"
            priority
          />
        </div>
      </div>
    </section>
  )
}
