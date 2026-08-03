import Image from 'next/image'
import { ArrowRight, Download, Award, Users } from 'lucide-react'
import { REGISTRATION_URL, BROCHURE_URL } from '@/lib/site-data'

const HIGHLIGHTS = [
  { value: '₹20,000+', label: 'Total Prize Pool' },
  { value: '3 Rounds', label: 'National Competition' },
  { value: 'PAN India', label: 'Open to All' },
]

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
            A national-level innovation challenge bringing together students,
            researchers, developers, and healthcare professionals to solve
            real-world healthcare problems using AI and emerging technologies.
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

          <dl className="mt-6 grid grid-cols-3 gap-4 border-t border-white/10 pt-6">
            {HIGHLIGHTS.map((item) => (
              <div key={item.label} className="flex flex-col gap-1">
                <dt className="order-2 text-xs text-white/60">{item.label}</dt>
                <dd className="order-1 font-serif text-xl font-semibold text-gold md:text-2xl">
                  {item.value}
                </dd>
              </div>
            ))}
          </dl>
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

          <div className="absolute -bottom-5 -left-3 hidden items-center gap-3 rounded-lg border border-border bg-background px-4 py-3 shadow-xl sm:flex md:-left-6">
            <div className="flex h-10 w-10 items-center justify-center rounded-md bg-navy text-navy-foreground">
              <Award className="h-5 w-5" aria-hidden="true" />
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-semibold text-navy">
                Certificate + Internship
              </span>
              <span className="text-xs text-muted-foreground">
                For top performers
              </span>
            </div>
          </div>

          <div className="absolute -right-3 top-6 hidden items-center gap-2 rounded-lg border border-border bg-background px-3 py-2 shadow-xl md:flex">
            <Users className="h-4 w-4 text-gold" aria-hidden="true" />
            <span className="text-xs font-medium text-navy">
              Network with Experts
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
