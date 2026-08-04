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

const DETAILS = [
  {
    icon: IndianRupee,
    label: 'Registration Fee',
    value: '₹149',
    sub: 'Per Participant',
  },
  {
    icon: Users,
    label: 'Participant Limit',
    value: 'Open to everyone',
    sub: 'All students & professionals',
  },
  {
    icon: ListOrdered,
    label: 'Selection',
    value: 'FCFS',
    sub: 'First-Come, First-Served',
  },
]

const PERKS = [
  {
    icon: ScrollText,
    label: 'Official Certificate',
    desc: 'Every eligible participant who completes requirements receives an Official Certificate of Participation.',
  },
  {
    icon: Briefcase,
    label: 'Internship Opportunity',
    desc: 'Top performers may be considered for Paid/Unpaid Internships based on performance & project quality.',
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
    <section id="registration" className="relative w-full overflow-hidden bg-navy">

      {/* ── Background decorations ── */}
      <div className="pointer-events-none absolute inset-0 grid-accent opacity-[0.07]" />
      <div className="pointer-events-none absolute -top-40 -right-40 h-96 w-96 rounded-full bg-blue-600/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-gold/5 blur-3xl" />

      {/* ── HERO STRIP: Full-bleed heading band ── */}
      <div className="relative w-full border-b border-white/8 py-16 text-center">
        <span className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.25em] text-gold">
          <span className="h-px w-8 bg-gold" />
          Registration &amp; Contact
          <span className="h-px w-8 bg-gold" />
        </span>
        <h2 className="mt-4 font-serif text-4xl font-bold text-white md:text-5xl lg:text-6xl">
          Secure your place in the{' '}
          <span className="text-gold">competition</span>
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base text-white/50">
          Limited seats — register today and take the first step towards transforming healthcare with AI.
        </p>
      </div>

      {/* ── MAIN CONTENT: Full-bleed 2-col ── */}
      <div className="relative grid lg:grid-cols-[1fr_420px]">

        {/* ── LEFT PANEL: Stats + Perks ── */}
        <div className="border-r border-white/8 px-6 py-14 md:px-12 lg:px-16">

          {/* Stat cards row */}
          <div className="grid gap-4 sm:grid-cols-3">
            {DETAILS.map(({ icon: Icon, label, value, sub }) => (
              <div key={label}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 transition-all duration-300 hover:border-blue-500/40 hover:bg-white/8 backdrop-blur">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600/20 border border-blue-500/20">
                  <Icon className="h-5 w-5 text-blue-400" aria-hidden="true" />
                </div>
                <p className="text-xs font-semibold uppercase tracking-widest text-white/40">{label}</p>
                <p className="mt-1 font-serif text-2xl font-bold text-white">{value}</p>
                {sub && <p className="mt-0.5 text-xs text-white/40">{sub}</p>}
                {/* Hover glow */}
                <div className="pointer-events-none absolute -bottom-6 -right-6 h-20 w-20 rounded-full bg-blue-500/10 blur-2xl opacity-0 transition-opacity group-hover:opacity-100" />
              </div>
            ))}
          </div>

          {/* Divider */}
          <div className="my-8 h-px w-full bg-gradient-to-r from-white/10 via-white/5 to-transparent" />

          {/* Perks */}
          <div className="grid gap-4 sm:grid-cols-2">
            {PERKS.map(({ icon: Icon, label, desc }) => (
              <div key={label}
                className="group flex flex-col gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 transition-all duration-300 hover:border-gold/30 hover:bg-white/8 backdrop-blur">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold/10 border border-gold/20">
                  <Icon className="h-5 w-5 text-gold" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-gold/70">{label}</p>
                  <p className="mt-2 text-sm leading-relaxed text-white/55">{desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Coordinators strip */}
          <div className="mt-12">
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-6 bg-gold" aria-hidden="true" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-gold">Need Help?</span>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {COORDINATORS.map((c) => (
                <div key={c.email}
                  className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur transition-all hover:border-white/20">
                  <p className="font-serif text-base font-semibold text-white mb-3">{c.name}</p>
                  <div className="flex flex-col gap-2">
                    <a href={`mailto:${c.email}`}
                      className="flex items-center gap-2 text-xs text-white/50 transition-colors hover:text-blue-400 break-all">
                      <Mail className="h-3.5 w-3.5 shrink-0 text-blue-400" />
                      {c.email}
                    </a>
                    <a href={`tel:${c.phone.replace(/\s/g, '')}`}
                      className="flex items-center gap-2 text-xs text-white/50 transition-colors hover:text-gold">
                      <Phone className="h-3.5 w-3.5 shrink-0 text-gold" />
                      {c.phone}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── RIGHT PANEL: QR + CTA (full-height sticky) ── */}
        <div className="flex flex-col items-center justify-center gap-8 bg-white/[0.03] px-8 py-14 text-center lg:sticky lg:top-0 lg:min-h-screen">

          {/* Eyebrow */}
          <div className="flex items-center gap-2 text-gold">
            <ScanLine className="h-4 w-4" />
            <span className="text-xs font-bold uppercase tracking-[0.2em]">Scan to Register</span>
          </div>

          {/* QR code with glow frame */}
          <div className="relative">
            <div className="absolute -inset-3 rounded-3xl bg-blue-500/20 blur-xl" />
            <div className="relative overflow-hidden rounded-2xl border border-white/20 bg-white p-4 shadow-2xl">
              <Image
                src="/registration-qr.jpg"
                alt="QR code to register for Healix AI HealthHack 2026"
                width={220}
                height={220}
                className="h-52 w-52 object-contain"
              />
            </div>
          </div>

          <p className="max-w-[260px] text-sm text-white/50 leading-relaxed">
            Point your camera at the code, or tap the button below to register online.
          </p>

          {/* CTA button */}
          <a
            href={REGISTRATION_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex w-full max-w-[280px] items-center justify-center gap-2 rounded-2xl bg-brand-red px-8 py-4 text-base font-bold text-white shadow-xl shadow-red-900/30 transition-all duration-300 hover:bg-brand-red/90 hover:scale-105 hover:shadow-red-700/40"
          >
            Register Now
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </a>

          {/* Deadline badge */}
          <div className="rounded-xl border border-gold/20 bg-gold/10 px-5 py-3">
            <p className="text-xs font-bold uppercase tracking-widest text-gold">Registration Closes</p>
            <p className="mt-1 text-lg font-serif font-bold text-white">12 August 2026</p>
          </div>
        </div>
      </div>
    </section>
  )
}
