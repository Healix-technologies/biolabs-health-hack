import Image from 'next/image'
import { ArrowRight, Download } from 'lucide-react'
import { REGISTRATION_URL, BROCHURE_URL } from '@/lib/site-data'

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-navy pt-20 pb-10"
    >
      <div
        className="absolute inset-0 grid-accent opacity-[0.4]"
        aria-hidden="true"
      />

      <div className="relative mx-auto w-full max-w-screen-2xl px-2">
        {/* Hero Banner */}
        <Image
          src="/banner.png"
          alt="Healix AI HealthHack 2026 Banner"
          width={1920}
          height={900}
          priority
          className="w-full h-auto"
        />

        {/* CTA Buttons */}
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href={REGISTRATION_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-md bg-brand-red px-6 py-3.5 text-sm font-semibold text-brand-red-foreground shadow-lg shadow-brand-red/20 transition-all hover:bg-brand-red/90 hover:shadow-xl"
          >
            Register Now
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>

          <a
            href={BROCHURE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-md border border-white/20 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
          >
            <Download className="h-4 w-4" aria-hidden="true" />
            Download Brochure
          </a>
        </div>
      </div>
    </section>
  )
}