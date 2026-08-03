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
          eyebrow="Prize Pool"
          title="Recognizing excellence, innovation, and impact"
          align="center"
        />

        <div className="mt-14 grid items-stretch gap-6 md:grid-cols-3">
          {PRIZES.map((prize) => (
            <article
              key={prize.rank}
              className={cn(
                'group relative flex flex-col items-center gap-5 overflow-hidden rounded-2xl border p-8 text-center transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl',
                prize.featured
                  ? 'border-transparent bg-navy text-navy-foreground shadow-lg md:-mt-4 md:mb-4'
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

        <p className="mx-auto mt-10 max-w-2xl text-center text-sm text-muted-foreground">
          Recognizing excellence in AI, healthcare innovation, research, and
          impactful solutions.
        </p>

        {/* Guest Faculty */}
        <div className="mt-20">
          <SectionHeading
            eyebrow="Guest Faculty"
            title="Learn from leading researchers and mentors"
            align="center"
          />

          <div className="mx-auto mt-14 max-w-5xl overflow-hidden rounded-2xl border border-border bg-card shadow-sm md:grid md:grid-cols-[minmax(0,320px)_1fr]">
            <div className="relative aspect-square md:aspect-auto md:h-full">
              <Image
                src="/guest-faculty.png"
                alt="Dr. Suresh Bangla, guest faculty from AIIMS, New Delhi"
                fill
                sizes="(max-width: 768px) 100vw, 320px"
                className="object-cover object-top"
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-navy/40 to-transparent md:bg-gradient-to-r"
                aria-hidden="true"
              />
            </div>

            <div className="flex flex-col gap-6 p-8 md:p-10">
              <div className="flex flex-col gap-1">
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                  Guest Faculty
                </span>
                <h3 className="font-serif text-2xl font-semibold text-navy md:text-3xl">
                  Dr. Suresh Bangla
                </h3>
                <p className="text-sm font-medium text-brand-red">
                  AIIMS, New Delhi
                </p>
              </div>

              <div className="relative">
                <Quote
                  className="absolute -left-1 -top-2 h-8 w-8 text-navy/10"
                  aria-hidden="true"
                />
                <p className="pl-6 text-sm leading-relaxed text-muted-foreground md:text-base">
                  Dr. Suresh Bangla is a postgraduate researcher in Community
                  Medicine at AIIMS, New Delhi, specializing in AI in Healthcare,
                  Public Health Research, Mental Health, and Healthcare Data
                  Analysis. He is passionate about leveraging research and
                  technology to develop evidence-based, scalable healthcare
                  solutions and will share practical insights on research
                  methodology, innovation, and real-world AI applications.
                </p>
              </div>

              <div className="flex flex-col gap-3">
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
    </section>
  )
}
