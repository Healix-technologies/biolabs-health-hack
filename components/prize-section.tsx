import Image from 'next/image'
import { Trophy, Medal, BookOpen, Quote } from 'lucide-react'
import { cn } from '@/lib/utils'
import { SectionHeading } from '@/components/section-heading'

const PRIZES = [
  {
    rank: '01',
    title: 'First Prize',
    reward: '\u20B915,000',
    sub: 'Cash Prize',
    icon: Trophy,
    featured: true,
  },
  {
    rank: '02',
    title: 'Second Prize',
    reward: '\u20B95,000',
    sub: 'Cash Prize',
    icon: Medal,
    featured: false,
  },
  {
    rank: '03',
    title: 'Third Prize',
    reward: 'Premium',
    sub: 'Research Courses',
    icon: BookOpen,
    featured: false,
  },
]

const EXPERTISE = [
  'Community Medicine',
  'AI in Healthcare',
  'Public Health Research',
  'Mental Health',
  'Healthcare Data Analysis',
  'Research Methodology',
]

export function PrizeSection() {
  return (
    <section id="prizes" className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <SectionHeading
          eyebrow="BioLabs AI HealthHack 2026"
          title="Prizes & Guest Faculty"
          align="center"
        />

        <div className="mt-14 grid gap-12 lg:grid-cols-2 items-start">
          {/* Left Column: Prize Pool */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-gold" aria-hidden="true" />
              <h3 className="font-serif text-2xl font-semibold text-navy">
                Prize Pool
              </h3>
            </div>
            
            <div className="grid gap-6 sm:grid-cols-3 lg:grid-cols-1">
              {PRIZES.map((prize) => (
                <article
                  key={prize.rank}
                  className={cn(
                    'group relative flex flex-col items-center gap-5 overflow-hidden rounded-2xl border p-8 text-center transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl',
                    prize.featured
                      ? 'border-transparent bg-navy text-navy-foreground shadow-lg'
                      : 'border-border bg-card',
                  )}
                >
                  {prize.featured && (
                    <span className="absolute right-4 top-4 rounded-full bg-gold px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-gold-foreground">
                      Grand Prize
                    </span>
                  )}
                  <div
                    className={cn(
                      'flex h-16 w-16 items-center justify-center rounded-2xl transition-colors',
                      prize.featured
                        ? 'bg-gold text-gold-foreground'
                        : 'bg-secondary text-navy group-hover:bg-navy group-hover:text-navy-foreground',
                    )}
                  >
                    <prize.icon className="h-8 w-8" aria-hidden="true" />
                  </div>

                  <span className="font-serif text-sm font-bold text-gold">
                    {prize.rank}
                  </span>

                  <h3
                    className={cn(
                      'text-sm font-semibold uppercase tracking-wider',
                      prize.featured ? 'text-white/70' : 'text-muted-foreground',
                    )}
                  >
                    {prize.title}
                  </h3>

                  <div className="flex flex-col gap-1">
                    <span
                      className={cn(
                        'font-serif text-4xl font-bold',
                        prize.featured ? 'text-white' : 'text-navy',
                      )}
                    >
                      {prize.reward}
                    </span>
                    <span
                      className={cn(
                        'text-sm',
                        prize.featured ? 'text-white/70' : 'text-muted-foreground',
                      )}
                    >
                      {prize.sub}
                    </span>
                  </div>
                </article>
              ))}
            </div>

            <p className="mt-2 text-sm text-muted-foreground">
              Recognizing excellence in AI, healthcare innovation, research, and impactful solutions.
            </p>
          </div>

          {/* Right Column: Guest Faculty */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-gold" aria-hidden="true" />
              <h3 className="font-serif text-2xl font-semibold text-navy">
                Guest Faculty
              </h3>
            </div>

            <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm grid md:grid-cols-[minmax(0,240px)_1fr] lg:grid-cols-1">
              <div className="relative aspect-[4/3] md:aspect-auto lg:aspect-[4/3] md:h-full lg:h-auto w-full min-h-[260px] md:min-h-0">
                <Image
                  src="/guest-faculty.png"
                  alt="Dr. Suresh Bangla, guest faculty from AIIMS, New Delhi"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-top"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-navy/40 to-transparent"
                  aria-hidden="true"
                />
              </div>

              <div className="flex flex-col gap-5 p-6 md:p-8">
                <div className="flex flex-col gap-1">
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                    Guest Faculty
                  </span>
                  <h4 className="font-serif text-2xl font-semibold text-navy">
                    Dr. Suresh Bangla
                  </h4>
                  <p className="text-sm font-medium text-brand-red">
                    AIIMS, New Delhi
                  </p>
                </div>

                <div className="relative">
                  <Quote
                    className="absolute -left-1 -top-2 h-6 w-6 text-navy/10"
                    aria-hidden="true"
                  />
                  <p className="pl-6 text-sm leading-relaxed text-muted-foreground">
                    Dr. Suresh Bangla is a postgraduate researcher in Community Medicine at AIIMS, New Delhi, specializing in AI in Healthcare, Public Health Research, Mental Health, and Healthcare Data Analysis. He is passionate about leveraging research and technology to develop evidence-based, scalable healthcare solutions and will share practical insights on research methodology, innovation, and real-world AI applications.
                  </p>
                </div>

                <div className="flex flex-col gap-3 pt-4 border-t border-border mt-2">
                  <span className="text-xs font-semibold uppercase tracking-wider text-navy/60">
                    Areas of Expertise
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {EXPERTISE.map((area) => (
                      <span
                        key={area}
                        className="rounded-full border border-border bg-secondary px-3 py-1.5 text-xs font-medium text-navy"
                      >
                        {area}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
