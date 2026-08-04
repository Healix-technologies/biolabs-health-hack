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
  Zap,
  Star,
} from 'lucide-react'
import { REGISTRATION_URL } from '@/lib/site-data'

const DETAILS = [
  {
    icon: IndianRupee,
    label: 'Registration Fee',
    value: '₹149',
    sub: 'Per Participant',
    gradient: 'from-emerald-500 to-teal-600',
    glow: 'shadow-emerald-500/30',
    border: 'hover:border-emerald-400/50',
    iconBg: 'bg-emerald-500/20 border-emerald-400/30',
    iconColor: 'text-emerald-400',
    tag: 'Affordable',
    tagColor: 'bg-emerald-500/15 text-emerald-400 border-emerald-500/30',
  },
  {
    icon: Users,
    label: 'Participant Limit',
    value: 'Everyone',
    sub: 'Students & Professionals',
    gradient: 'from-violet-500 to-purple-600',
    glow: 'shadow-violet-500/30',
    border: 'hover:border-violet-400/50',
    iconBg: 'bg-violet-500/20 border-violet-400/30',
    iconColor: 'text-violet-400',
    tag: 'Open to all',
    tagColor: 'bg-violet-500/15 text-violet-400 border-violet-500/30',
  },
  {
    icon: ListOrdered,
    label: 'Selection',
    value: 'FCFS',
    sub: 'First-Come, First-Served',
    gradient: 'from-orange-500 to-amber-600',
    glow: 'shadow-orange-500/30',
    border: 'hover:border-orange-400/50',
    iconBg: 'bg-orange-500/20 border-orange-400/30',
    iconColor: 'text-orange-400',
    tag: 'Limited seats',
    tagColor: 'bg-orange-500/15 text-orange-400 border-orange-500/30',
  },
]

const PERKS = [
  {
    icon: ScrollText,
    label: 'Official Certificate',
    desc: 'Every eligible participant who completes requirements receives an Official Certificate of Participation.',
    gradient: 'from-cyan-500/20 to-blue-600/20',
    border: 'hover:border-cyan-400/40',
    iconBg: 'bg-cyan-500/20 border-cyan-400/30',
    iconColor: 'text-cyan-400',
    accent: 'text-cyan-400',
  },
  {
    icon: Briefcase,
    label: 'Internship Opportunity',
    desc: 'Top performers may be considered for Paid/Unpaid Internships based on performance & project quality.',
    gradient: 'from-pink-500/20 to-rose-600/20',
    border: 'hover:border-pink-400/40',
    iconBg: 'bg-pink-500/20 border-pink-400/30',
    iconColor: 'text-pink-400',
    accent: 'text-pink-400',
  },
]

const COORDINATORS = [
  {
    name: 'Rtr. Idhita Shekhar',
    email: 'shekharidhita@gmail.com',
    phone: '+91 98916 36462',
    color: 'from-violet-500/10 to-purple-500/5',
    border: 'hover:border-violet-400/40',
    dot: 'bg-violet-400',
  },
  {
    name: 'Rtr. Griti Raj',
    email: 'gritiraj2005@gmail.com',
    phone: '+91 98181 01301',
    color: 'from-emerald-500/10 to-teal-500/5',
    border: 'hover:border-emerald-400/40',
    dot: 'bg-emerald-400',
  },
  {
    name: 'Harshadha S',
    email: 'harshadha.s@healix-technologies.com',
    phone: '+91 9940386235',
    color: 'from-orange-500/10 to-amber-500/5',
    border: 'hover:border-orange-400/40',
    dot: 'bg-orange-400',
  },
]

export function RegistrationSection() {
  return (
    <section id="registration" className="relative w-full overflow-hidden"
      style={{ background: 'linear-gradient(135deg,#07091f 0%,#0a0f28 50%,#060818 100%)' }}>

      {/* Background glows */}
      <div className="pointer-events-none absolute top-0 left-1/4 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-violet-600/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-1/4 h-[400px] w-[400px] translate-y-1/2 rounded-full bg-cyan-600/10 blur-3xl" />
      <div className="pointer-events-none absolute top-1/2 left-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-600/5 blur-3xl" />
      <div className="pointer-events-none absolute inset-0 grid-accent opacity-[0.05]" />

      {/* ── HEADING BAND ── */}
      <div className="relative border-b border-white/8 py-16 text-center">
        <span className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.25em] text-amber-400">
          <span className="h-px w-8 bg-amber-400" />
          Registration &amp; Contact
          <span className="h-px w-8 bg-amber-400" />
        </span>
        <h2 className="mt-4 font-serif text-4xl font-bold text-white md:text-5xl lg:text-6xl">
          Secure your place in the{' '}
          <span className="bg-gradient-to-r from-amber-400 via-orange-400 to-pink-400 bg-clip-text text-transparent">
            competition
          </span>
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base text-white/40">
          Limited seats — register today and take the first step towards transforming healthcare with AI.
        </p>
      </div>

      {/* ── MAIN GRID ── */}
      <div className="relative grid lg:grid-cols-[1fr_420px]">

        {/* ── LEFT PANEL ── */}
        <div className="border-r border-white/8 px-6 py-14 md:px-12 lg:px-16">

          {/* Stat cards */}
          <div className="grid gap-4 sm:grid-cols-3">
            {DETAILS.map(({ icon: Icon, label, value, sub, glow, border, iconBg, iconColor, tag, tagColor }) => (
              <div key={label}
                className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition-all duration-300 ${border} hover:shadow-xl ${glow} cursor-default`}>
                {/* Top row */}
                <div className="flex items-start justify-between mb-5">
                  <div className={`flex h-12 w-12 items-center justify-center rounded-xl border ${iconBg}`}>
                    <Icon className={`h-5 w-5 ${iconColor}`} />
                  </div>
                  <span className={`rounded-full border px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider ${tagColor}`}>
                    {tag}
                  </span>
                </div>
                <p className="text-xs font-semibold uppercase tracking-widest text-white/35">{label}</p>
                <p className="mt-1 font-serif text-3xl font-bold text-white leading-tight">{value}</p>
                {sub && <p className="mt-1 text-xs text-white/35">{sub}</p>}
                {/* Animated bottom line */}
                <div className={`absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r ${glow.replace('shadow-', 'from-')} to-transparent transition-all duration-500 group-hover:w-full`} />
              </div>
            ))}
          </div>

          {/* Divider with icon */}
          <div className="my-8 flex items-center gap-4">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            <Zap className="h-4 w-4 text-amber-400" />
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          </div>

          {/* Perks */}
          <div className="grid gap-4 sm:grid-cols-2">
            {PERKS.map(({ icon: Icon, label, desc, gradient, border, iconBg, iconColor, accent }) => (
              <div key={label}
                className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br ${gradient} p-6 backdrop-blur transition-all duration-300 ${border} hover:shadow-lg cursor-default`}>
                <div className={`mb-4 flex h-12 w-12 items-center justify-center rounded-xl border ${iconBg}`}>
                  <Icon className={`h-5 w-5 ${iconColor}`} />
                </div>
                <p className={`text-xs font-bold uppercase tracking-widest ${accent}`}>{label}</p>
                <p className="mt-2 text-sm leading-relaxed text-white/55">{desc}</p>
              </div>
            ))}
          </div>

          {/* Coordinators */}
          <div className="mt-10">
            <div className="flex items-center gap-3 mb-6">
              <Star className="h-4 w-4 text-amber-400" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-amber-400">Need Help? Contact Us</span>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {COORDINATORS.map((c) => (
                <div key={c.email}
                  className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br ${c.color} p-5 backdrop-blur transition-all duration-300 ${c.border} hover:shadow-lg`}>
                  {/* Online dot */}
                  <div className="flex items-center gap-2 mb-3">
                    <span className={`h-2 w-2 rounded-full ${c.dot} animate-pulse`} />
                    <p className="font-serif text-sm font-semibold text-white">{c.name}</p>
                  </div>
                  <div className="flex flex-col gap-2 pt-2 border-t border-white/10">
                    <a href={`mailto:${c.email}`}
                      className="flex items-center gap-2 text-[11px] text-white/50 transition-colors hover:text-white break-all">
                      <Mail className="h-3 w-3 shrink-0 text-white/40" />
                      {c.email}
                    </a>
                    <a href={`tel:${c.phone.replace(/\s/g, '')}`}
                      className="flex items-center gap-2 text-[11px] text-white/50 transition-colors hover:text-white">
                      <Phone className="h-3 w-3 shrink-0 text-white/40" />
                      {c.phone}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── RIGHT PANEL: QR + CTA ── */}
        <div className="relative flex flex-col items-center justify-center gap-7 px-8 py-14 text-center lg:sticky lg:top-0 lg:min-h-screen">
          {/* Background glow */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-violet-600/5 via-transparent to-pink-600/5" />

          {/* Eyebrow */}
          <div className="relative flex items-center gap-2">
            <ScanLine className="h-4 w-4 text-cyan-400" />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-400">Scan to Register</span>
          </div>

          {/* QR card */}
          <div className="relative">
            {/* Multi-layer glow */}
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-violet-500/30 to-cyan-500/20 blur-xl" />
            <div className="absolute -inset-2 rounded-3xl bg-gradient-to-br from-cyan-500/20 to-pink-500/20 blur-md" />
            <div className="relative overflow-hidden rounded-2xl border border-white/20 bg-white p-4 shadow-2xl ring-1 ring-white/10">
              <Image
                src="/registration-qr.jpg"
                alt="QR code to register for Healix AI HealthHack 2026"
                width={220} height={220}
                className="h-52 w-52 object-contain"
              />
            </div>
            {/* Corner accents */}
            <div className="absolute -top-1 -left-1 h-4 w-4 rounded-tl-lg border-t-2 border-l-2 border-cyan-400" />
            <div className="absolute -top-1 -right-1 h-4 w-4 rounded-tr-lg border-t-2 border-r-2 border-violet-400" />
            <div className="absolute -bottom-1 -left-1 h-4 w-4 rounded-bl-lg border-b-2 border-l-2 border-pink-400" />
            <div className="absolute -bottom-1 -right-1 h-4 w-4 rounded-br-lg border-b-2 border-r-2 border-emerald-400" />
          </div>

          <p className="relative max-w-[240px] text-sm text-white/40 leading-relaxed">
            Point your camera at the code, or tap the button below to register online.
          </p>

          {/* CTA */}
          <a href={REGISTRATION_URL} target="_blank" rel="noopener noreferrer"
            className="group relative inline-flex w-full max-w-[280px] items-center justify-center gap-2 overflow-hidden rounded-2xl bg-gradient-to-r from-rose-500 via-red-500 to-orange-500 px-8 py-4 text-base font-bold text-white shadow-xl shadow-red-900/40 transition-all duration-300 hover:scale-105 hover:shadow-red-600/50">
            {/* Shimmer */}
            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
            Register Now
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </a>

          {/* Deadline badge */}
          <div className="relative w-full max-w-[280px] overflow-hidden rounded-2xl border border-amber-400/25 bg-gradient-to-br from-amber-500/10 to-orange-500/5 p-4 backdrop-blur">
            <div className="absolute top-0 right-0 h-12 w-12 rounded-bl-2xl bg-amber-400/10" />
            <p className="text-[10px] font-bold uppercase tracking-widest text-amber-400">⚡ Registration Closes</p>
            <p className="mt-1 font-serif text-2xl font-bold text-white">12 August 2026</p>
            <p className="mt-0.5 text-xs text-white/35">Don't miss your chance to compete!</p>
          </div>
        </div>
      </div>
    </section>
  )
}
