import Image from 'next/image'
import {
  IndianRupee,
  Users,
  ScrollText,
  Briefcase,
  ArrowRight,
  ScanLine,
  ListOrdered,
  Mail,
  Phone,
} from 'lucide-react'
import { REGISTRATION_URL } from '@/lib/site-data'
import { SectionHeading } from '@/components/section-heading'

const DETAILS = [
  {
    icon: IndianRupee,
    label: 'Registration Fee',
    value: '\u20B9149',
    sub: 'Per Participant',
  },
  {
    icon: Users,
    label: 'Participant Limit',
    value: 'Open to everyone',
  },
  {
    icon: ListOrdered,
    label: 'Selection',
    value: 'FCFS',
    sub: 'First-Come, First-Served',
  },
]

const COORDINATORS = [
  {
    name: 'Rtr. Idhita Shekhar',
    email: 'shekharidhita@gmail.com',
    phone: '+91 98916 36462',
  },
  {
    name: 'Rtr. Griti Raj',
    email: 'gritiraj2005@gmail.com',
    phone: '+91 98181 01301',
  },
  {
    name: 'Harshadha S',
    email: 'harshadha.s@healix-technologies.com',
    phone: '+91 9940386235',
  },
]

export function RegistrationSection() {
  return (
    <section id="registration" className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <SectionHeading
          eyebrow="Registration & Contact"
          title="Secure your place in the competition"
          align="center"
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-[1fr_minmax(0,380px)]">
          <div className="flex flex-col gap-6">
            <div className="grid gap-5 sm:grid-cols-3">
              {DETAILS.map((detail) => (
                <div
                  key={detail.label}
                  className="flex flex-col gap-3 rounded-xl border border-border bg-card p-6"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-navy text-navy-foreground">
                    <detail.icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                      {detail.label}
                    </span>
                    <span className="font-serif text-2xl font-bold text-navy">
                      {detail.value}
                    </span>
                    <span className="text-sm text-muted-foreground">
                      {detail.sub}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div className="flex flex-col gap-3 rounded-xl border border-border bg-card p-6">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-navy text-navy-foreground">
                  <ScrollText className="h-5 w-5" aria-hidden="true" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    Certificate
                  </span>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    Every eligible participant who successfully completes the
                    competition requirements will receive an Official Certificate
                    of Participation.
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-3 rounded-xl border border-border bg-card p-6">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-navy text-navy-foreground">
                  <Briefcase className="h-5 w-5" aria-hidden="true" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    Internship Opportunity
                  </span>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    Top-performing participants may be considered for Paid/Unpaid
                    Internship Opportunities based on performance, project
                    quality, and organizational requirements.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center gap-6 rounded-2xl border border-border bg-navy p-8 text-center">
            <div className="flex items-center gap-2 text-gold">
              <ScanLine className="h-4 w-4" aria-hidden="true" />
              <span className="text-xs font-semibold uppercase tracking-[0.2em]">
                Scan to Register
              </span>
            </div>
            <div className="overflow-hidden rounded-xl bg-white p-3 shadow-lg">
              <Image
                src="/registration-qr.jpg"
                alt="QR code to register for Healix  AI HealthHack 2026"
                width={200}
                height={200}
                className="h-44 w-44 object-contain"
              />
            </div>
            <p className="text-sm text-white/70">
              Point your camera at the code, or use the button below to register
              online.
            </p>
            <a
              href={REGISTRATION_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-brand-red px-6 py-3.5 text-sm font-semibold text-brand-red-foreground transition-colors hover:bg-brand-red/90"
            >
              Register Now
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </div>

        {/* Coordinators */}
        <div className="mt-16">
          <div className="flex items-center justify-center gap-3 mb-8">
            <span className="h-px w-8 bg-gold" aria-hidden="true" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              Need Help?
            </span>
            <span className="h-px w-8 bg-gold" aria-hidden="true" />
          </div>
          <div className="mx-auto grid max-w-5xl gap-5 sm:grid-cols-3">
            {COORDINATORS.map((c) => (
              <div
                key={c.email}
                className="flex flex-col gap-4 rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:border-navy/20 hover:shadow-md"
              >
                <h4 className="font-serif text-lg font-semibold text-navy">
                  {c.name}
                </h4>
                <div className="flex flex-col gap-2.5 border-t border-border pt-4">
                  <a
                    href={`mailto:${c.email}`}
                    className="group flex items-center gap-3 text-sm text-navy transition-colors hover:text-brand-red"
                  >
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-secondary text-navy transition-colors group-hover:bg-brand-red group-hover:text-brand-red-foreground">
                      <Mail className="h-4 w-4" aria-hidden="true" />
                    </span>
                    <span className="font-medium break-all text-xs">{c.email}</span>
                  </a>
                  <a
                    href={`tel:${c.phone.replace(/\s/g, '')}`}
                    className="group flex items-center gap-3 text-sm text-navy transition-colors hover:text-brand-red"
                  >
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-secondary text-navy transition-colors group-hover:bg-brand-red group-hover:text-brand-red-foreground">
                      <Phone className="h-4 w-4" aria-hidden="true" />
                    </span>
                    <span className="font-medium">{c.phone}</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
