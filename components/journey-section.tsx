import {
  ClipboardCheck,
  Timer,
  BadgeCheck,
  Lightbulb,
  Cog,
  Presentation,
  Target,
  ScrollText,
  Trophy,
  Users,
  CalendarDays,
  Lightbulb as LightbulbIcon,
  Microscope,
  Bot,
  MessagesSquare,
} from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { cn } from '@/lib/utils'

type Selection = {
  label: string
  tone: 'gold' | 'navy' | 'red'
}

type Milestone = {
  icon: typeof ClipboardCheck
  date: string
  title: string
  participants: string
  description: string
  selection?: Selection
}

const MILESTONES: Milestone[] = [
  {
    icon: ClipboardCheck,
    date: '5 August 2026',
    title: 'Registration Opens',
    participants: 'Open Registration',
    description:
      'Registration portal opens for students and professionals worldwide.',
  },
  {
    icon: Timer,
    date: '8 August 2026',
    title: 'Registration Closes',
    participants: '800+ Expected Teams',
    description: 'Final deadline for registration submissions.',
  },
  {
    icon: BadgeCheck,
    date: '12 August 2026',
    title: 'Participant Confirmation & Slot Allocation',
    participants: 'Registered Teams',
    description:
      'Event handbook, mentor allocation, presentation schedule, joining instructions, and team confirmations are shared.',
  },
  {
    icon: Lightbulb,
    date: '25 August 2026',
    title: 'Round 1 \u2013 AI Idea Screening',
    participants: '800+ Teams',
    description:
      'Initial evaluation based on innovation, healthcare problem statement, feasibility, and impact. Top 300 Teams Selected.',
    selection: { label: 'Top 300 Teams', tone: 'gold' },
  },
  {
    icon: Cog,
    date: '26 August 2026',
    title: 'Round 2 \u2013 Prototype Evaluation',
    participants: '300 Teams',
    description:
      'Prototype demonstration, technical architecture review, and implementation assessment. Top 100 Teams Selected.',
    selection: { label: 'Top 100 Teams', tone: 'navy' },
  },
  {
    icon: Presentation,
    date: '27 August 2026',
    title: 'Round 3 \u2013 Expert Jury Pitch',
    participants: '100 Teams',
    description:
      'Live presentation before healthcare professionals, AI experts, and researchers. Top 50 Finalists Selected.',
    selection: { label: 'Top 50 Finalists', tone: 'red' },
  },
  {
    icon: Target,
    date: '28 August 2026',
    title: 'Grand Innovation Showcase',
    participants: '50 Finalist Teams',
    description:
      'Final demonstration before industry leaders, investors, doctors, and researchers.',
  },
  {
    icon: ScrollText,
    date: '30 August 2026',
    title: 'Results Announcement',
    participants: 'Finalists',
    description:
      'Official declaration of winners and national rankings.',
  },
  {
    icon: Trophy,
    date: '2 September 2026',
    title: 'Award Ceremony & Prize Distribution',
    participants: 'Winners & Finalists',
    description:
      'Trophy presentation, certificates, prizes, networking session, media coverage, and closing ceremony.',
  },
]

const SELECTION_STYLES: Record<Selection['tone'], string> = {
  gold: 'border-gold/30 bg-gold/10 text-gold',
  navy: 'border-navy/25 bg-navy/10 text-navy',
  red: 'border-brand-red/30 bg-brand-red/10 text-brand-red',
}

const CRITERIA = [
  { icon: LightbulbIcon, label: 'Innovation & Originality' },
  { icon: Cog, label: 'Technical Feasibility' },
  { icon: Microscope, label: 'Research Methodology' },
  { icon: Target, label: 'Practical Impact' },
  { icon: Bot, label: 'AI Implementation' },
  { icon: MessagesSquare, label: 'Presentation & Communication' },
]

function MilestoneCard({
  milestone,
  align,
}: {
  milestone: Milestone
  align: 'left' | 'right'
}) {
  const Icon = milestone.icon
  return (
    <div className="rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-navy/20 hover:shadow-lg">
      <div
        className={cn(
          'flex items-center gap-3',
          align === 'left' && 'md:flex-row-reverse',
        )}
      >
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-navy text-navy-foreground md:hidden">
          <Icon className="h-5 w-5" aria-hidden="true" />
        </span>
        <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-gold">
          <CalendarDays className="h-4 w-4" aria-hidden="true" />
          {milestone.date}
        </span>
      </div>

      <h3 className="mt-3 font-serif text-lg font-semibold leading-snug text-navy text-balance">
        {milestone.title}
      </h3>

      <div
        className={cn(
          'mt-2 flex flex-wrap items-center gap-2',
          align === 'left' && 'md:justify-end',
        )}
      >
        <span className="inline-flex items-center gap-1.5 rounded-full bg-secondary px-2.5 py-1 text-xs font-medium text-secondary-foreground">
          <Users className="h-3.5 w-3.5" aria-hidden="true" />
          {milestone.participants}
        </span>
        {milestone.selection && (
          <span
            className={cn(
              'inline-flex items-center rounded-full border px-2.5 py-1 text-xs font-semibold tracking-wide',
              SELECTION_STYLES[milestone.selection.tone],
            )}
          >
            {milestone.selection.label}
          </span>
        )}
      </div>

      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
        {milestone.description}
      </p>
    </div>
  )
}

export function JourneySection() {
  return (
    <section id="journey" className="bg-secondary py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <SectionHeading
          eyebrow="Official Competition Timeline"
          title="Healix  AI HealthHack 2026 - Official Event Timeline"
          align="center"
          description="Follow the journey from registration through the evaluation rounds to the final award ceremony."
        />

        <ol className="relative mt-16">
          {/* connecting line: left rail on mobile, centered on desktop */}
          <span
            className="absolute top-2 bottom-2 left-6 w-px bg-gradient-to-b from-navy/10 via-border to-navy/10 md:left-1/2 md:-translate-x-1/2"
            aria-hidden="true"
          />

          {MILESTONES.map((milestone, index) => {
            const align = index % 2 === 0 ? 'left' : 'right'
            const Icon = milestone.icon
            return (
              <li key={milestone.title} className="relative mb-8 last:mb-0">
                <div
                  className={cn(
                    'md:flex md:items-center md:gap-10',
                    align === 'right' && 'md:flex-row-reverse',
                  )}
                >
                  {/* card */}
                  <div
                    className={cn(
                      'pl-16 md:w-1/2 md:pl-0',
                      align === 'left' && 'md:pr-12 md:text-right',
                      align === 'right' && 'md:pl-12',
                    )}
                  >
                    <MilestoneCard milestone={milestone} align={align} />
                  </div>

                  {/* center node */}
                  <span
                    className="absolute left-6 top-6 z-10 flex h-12 w-12 -translate-x-1/2 items-center justify-center rounded-full border-4 border-secondary bg-navy text-navy-foreground shadow-md md:left-1/2 md:top-1/2 md:-translate-y-1/2"
                    aria-hidden="true"
                  >
                    <Icon className="h-5 w-5" />
                  </span>

                  {/* spacer for opposite side on desktop */}
                  <div className="hidden md:block md:w-1/2" aria-hidden="true" />
                </div>
              </li>
            )
          })}
        </ol>

        <div className="mt-20 rounded-2xl border border-border bg-navy p-8 md:p-12">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-gold" aria-hidden="true" />
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                Evaluation Criteria
              </span>
            </div>
            <h3 className="font-serif text-2xl font-semibold text-navy-foreground md:text-3xl">
              How submissions are judged
            </h3>
          </div>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {CRITERIA.map((c) => (
              <li
                key={c.label}
                className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 p-4 transition-colors hover:bg-white/10"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-gold text-gold-foreground">
                  <c.icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <span className="text-sm font-medium text-navy-foreground">
                  {c.label}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
