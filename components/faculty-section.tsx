import Image from 'next/image'
import { Quote } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'

const EXPERTISE = [
  'Community Medicine',
  'AI in Healthcare',
  'Public Health Research',
  'Mental Health',
  'Healthcare Data Analysis',
  'Research Methodology',
]

export function FacultySection() {
  return (
    <section id="faculty" className="bg-secondary py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
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
                solutions, and will share practical insights on research
                methodology and innovation during the competition.
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
    </section>
  )
}
