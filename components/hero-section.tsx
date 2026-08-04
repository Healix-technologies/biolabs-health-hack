import Image from 'next/image'
import { ArrowRight, Download } from 'lucide-react'
import { REGISTRATION_URL, BROCHURE_URL } from '@/lib/site-data'

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-navy pt-16 md:pt-20"
    >
      <div className="absolute inset-0 grid-accent opacity-[0.4]" aria-hidden="true" />
      <div
        className="absolute inset-y-0 right-0 hidden w-1/2 bg-gradient-to-l from-navy/0 to-navy lg:block"
        aria-hidden="true"
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 md:px-8 md:py-24 lg:grid-cols-2 lg:py-28">
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-4">
            <div className="w-fit rounded-lg bg-white p-2">
              <Image
                src="/biolabs-logo.jpg"
                alt="BioLabs"
                width={140}
                height={56}
                priority
                className="h-8 w-auto md:h-10"
              />
            </div>
          </div>

          <h1 className="text-balance font-serif text-4xl font-semibold leading-[1.05] text-white md:text-5xl lg:text-6xl">
            BioLabs AI HealthHack{' '}
            <span className="text-gold">2026</span>
          </h1>

          <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-lg font-medium text-white/90 md:text-xl">
            {['Innovate', 'Research', 'Present', 'Win'].map((word, i) => (
              <span key={word} className="flex items-center gap-3">
                {i > 0 && (
                  <span className="h-1 w-1 rounded-full bg-gold" aria-hidden="true" />
                )}
                {word}
              </span>
            ))}
          </div>

          <p className="max-w-xl text-pretty text-base leading-relaxed text-white/75 md:text-lg">
            Build AI-powered healthcare solutions, compete with innovators across the country, and present your ideas before leading researchers and industry experts.
          </p>

          <div className="mt-2 flex flex-col gap-3 sm:flex-row">
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

        <div className="relative">
          <div className="relative aspect-[4/5] overflow-hidden rounded-xl border border-white/10 shadow-2xl sm:aspect-[4/3] lg:aspect-[4/5]">
            <Image
              src="/hero-research.png"
              alt="Two researchers examining samples in a modern molecular biology laboratory"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
            <div
              className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent"
              aria-hidden="true"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
