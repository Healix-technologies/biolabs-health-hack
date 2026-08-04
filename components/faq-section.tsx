'use client'

import { useState } from 'react'
import { Plus } from 'lucide-react'
import { cn } from '@/lib/utils'
import { SectionHeading } from '@/components/section-heading'

const FAQS = [
  {
    q: 'Who can participate in the competition?',
    a: 'The Healix  National Research Competition is open to students across India from all disciplines who are passionate about research, innovation, and scientific thinking.',
  },
  {
    q: 'What are the stages of the competition?',
    a: 'The competition has five stages: Registration, Round 1 (Proposal Submission), Round 2 (a 24-hour online hackathon with presentation), Round 3 (pitching and expert jury evaluation), and the finale with winners and internship consideration.',
  },
  {
    q: 'Can I participate as a team?',
    a: 'Yes. You can register individually or as a team of up to four members. Team collaboration and interdisciplinary thinking are strongly encouraged.',
  },
  {
    q: 'What do I need to submit in Round 1?',
    a: 'In Round 1 you submit a research proposal based on the given problem statement. Your proposal should demonstrate innovation, feasibility, and a clear research methodology.',
  },
  {
    q: 'Do all participants receive a certificate?',
    a: 'Yes. Every participant receives an official Certificate of Participation, and top performers are considered for internship opportunities with Healix Technologies.',
  },
  {
    q: 'How are submissions evaluated?',
    a: 'Submissions are judged on Innovation & Originality, Technical Feasibility, Research Methodology, Practical Impact, AI Implementation, and Presentation & Communication.',
  },
]

export function FaqSection() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section id="faq" className="bg-secondary py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-4 md:px-8">
        <SectionHeading
          eyebrow="FAQ"
          title="Answers to common questions"
          align="center"
        />

        <div className="mt-12 flex flex-col gap-3">
          {FAQS.map((faq, i) => {
            const isOpen = open === i
            return (
              <div
                key={faq.q}
                className={cn(
                  'overflow-hidden rounded-xl border bg-card transition-colors',
                  isOpen ? 'border-navy/25' : 'border-border',
                )}
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left md:px-6 md:py-5"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif text-base font-semibold text-navy md:text-lg">
                    {faq.q}
                  </span>
                  <span
                    className={cn(
                      'flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-all duration-300',
                      isOpen
                        ? 'rotate-45 bg-brand-red text-brand-red-foreground'
                        : 'bg-secondary text-navy',
                    )}
                    aria-hidden="true"
                  >
                    <Plus className="h-4 w-4" />
                  </span>
                </button>
                <div
                  className={cn(
                    'grid transition-all duration-300 ease-in-out',
                    isOpen
                      ? 'grid-rows-[1fr] opacity-100'
                      : 'grid-rows-[0fr] opacity-0',
                  )}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 text-sm leading-relaxed text-muted-foreground md:px-6 md:pb-6">
                      {faq.a}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
