'use client'

import Image from 'next/image'
import { Globe, Mail, MapPin, Calendar, ChevronRight } from 'lucide-react'
import type { SVGProps } from 'react'
import { SITE_URL } from '@/lib/site-data'

function LinkedInIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z" />
    </svg>
  )
}
function InstagramIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.7 3.7 0 0 1-1.38-.9 3.7 3.7 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23-.06-1.27-.07-1.65-.07-4.85s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16zm0 3.68a6.16 6.16 0 1 0 0 12.32 6.16 6.16 0 0 0 0-12.32zm0 10.16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.4-10.4a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88z" />
    </svg>
  )
}
function FacebookIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07c0 6.03 4.39 11.03 10.13 11.93v-8.44H7.08v-3.49h3.05V9.41c0-3.02 1.79-4.69 4.53-4.69 1.31 0 2.68.24 2.68.24v2.97h-1.51c-1.49 0-1.96.93-1.96 1.89v2.25h3.33l-.53 3.49h-2.8V24C19.61 23.1 24 18.1 24 12.07z" />
    </svg>
  )
}

const SOCIALS = [
  { icon: LinkedInIcon, label: 'LinkedIn', href: '#' },
  { icon: InstagramIcon, label: 'Instagram', href: '#' },
  { icon: FacebookIcon, label: 'Facebook', href: '#' },
]

const QUICK_LINKS = [
  { label: 'About the Hackathon', href: '#about' },
  { label: 'Event Timeline', href: '#journey' },
  { label: 'Prize & Rewards', href: '#prize' },
  { label: 'Register Now', href: '#registration' },
  { label: 'Faculty & Mentors', href: '#faculty' },
  { label: 'FAQ', href: '#faq' },
]

const EVENT_DETAILS = [
  { icon: Calendar, text: 'Aug 5 – Sep 2, 2026' },
  { icon: MapPin, text: 'SMIT, Sikkim (Grand Finale)' },
  { icon: Mail, text: 'biolabs@healix-technologies.com' },
  { icon: Globe, text: SITE_URL },
]

/* ─────────────── REALISTIC 3D AI ROBOT SVG ─────────────── */
function RealisticRobot() {
  return (
    <div aria-hidden="true" style={{ position: 'relative', width: 220, height: 300 }}>
      <style>{`
        /* ── Float ── */
        .rb-root { animation: rbFloat 4s ease-in-out infinite; transform-origin: 110px 150px; }
        @keyframes rbFloat { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-14px)} }

        /* ── Head sway ── */
        .rb-head { animation: rbSway 5s ease-in-out infinite; transform-origin: 110px 72px; }
        @keyframes rbSway { 0%,100%{transform:rotate(0deg)} 30%{transform:rotate(3deg)} 70%{transform:rotate(-3deg)} }

        /* ── Eye scan ── */
        .rb-eye-l { animation: rbEyeL 3s ease-in-out infinite; }
        .rb-eye-r { animation: rbEyeR 3s ease-in-out infinite 0.4s; }
        @keyframes rbEyeL { 0%,100%{opacity:1;fill:#00d4ff} 50%{opacity:.5;fill:#fff} }
        @keyframes rbEyeR { 0%,100%{opacity:1;fill:#00d4ff} 50%{opacity:.5;fill:#fff} }

        /* ── Antenna pulse ── */
        .rb-ant-dot { animation: rbAnt 1.4s ease-in-out infinite; }
        @keyframes rbAnt { 0%,100%{fill:#00d4ff;filter:drop-shadow(0 0 6px #00d4ff)} 50%{fill:#fff;filter:none} }

        /* ── Chest core spin ── */
        .rb-core-ring { animation: rbCore 3s linear infinite; transform-origin: 110px 168px; }
        @keyframes rbCore { from{transform:rotate(0deg)} to{transform:rotate(360deg)} }

        /* ── Arm swing ── */
        .rb-arm-l { animation: rbArmL 4s ease-in-out infinite; transform-origin: 60px 138px; }
        .rb-arm-r { animation: rbArmR 4s ease-in-out infinite; transform-origin: 160px 138px; }
        @keyframes rbArmL { 0%,100%{transform:rotate(0deg)} 50%{transform:rotate(14deg)} }
        @keyframes rbArmR { 0%,100%{transform:rotate(0deg)} 50%{transform:rotate(-14deg)} }

        /* ── Leg step ── */
        .rb-leg-l { animation: rbLegL 4s ease-in-out infinite; transform-origin: 90px 230px; }
        .rb-leg-r { animation: rbLegR 4s ease-in-out infinite; transform-origin: 130px 230px; }
        @keyframes rbLegL { 0%,100%{transform:rotate(0deg)} 50%{transform:rotate(-8deg)} }
        @keyframes rbLegR { 0%,100%{transform:rotate(0deg)} 50%{transform:rotate(8deg)} }

        /* ── Ground shadow ── */
        .rb-shadow { animation: rbShadow 4s ease-in-out infinite; transform-origin: 110px 295px; }
        @keyframes rbShadow { 0%,100%{transform:scaleX(1);opacity:.35} 50%{transform:scaleX(.7);opacity:.15} }

        /* ── Scan line ── */
        .rb-scan { animation: rbScanLine 2.5s linear infinite; }
        @keyframes rbScanLine { 0%{transform:translateY(-18px);opacity:0} 20%{opacity:.8} 80%{opacity:.8} 100%{transform:translateY(18px);opacity:0} }
      `}</style>

      <svg viewBox="0 0 220 300" width="220" height="300" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          {/* Metal gradients */}
          <linearGradient id="gMetal" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#2a4a7f"/>
            <stop offset="50%" stopColor="#1a3060"/>
            <stop offset="100%" stopColor="#0d1e3d"/>
          </linearGradient>
          <linearGradient id="gMetalLight" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#3d6aad"/>
            <stop offset="100%" stopColor="#1e3a70"/>
          </linearGradient>
          <linearGradient id="gHead" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#2e5499"/>
            <stop offset="40%" stopColor="#1d3b72"/>
            <stop offset="100%" stopColor="#0f2247"/>
          </linearGradient>
          <linearGradient id="gTorso" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#243d70"/>
            <stop offset="50%" stopColor="#152a58"/>
            <stop offset="100%" stopColor="#0a1a3a"/>
          </linearGradient>
          <linearGradient id="gArm" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#2a4a80"/>
            <stop offset="100%" stopColor="#0f2040"/>
          </linearGradient>
          <linearGradient id="gLeg" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#1e3668"/>
            <stop offset="100%" stopColor="#0c1830"/>
          </linearGradient>
          <linearGradient id="gEye" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#00eeff"/>
            <stop offset="100%" stopColor="#0066cc"/>
          </linearGradient>
          <linearGradient id="gCore" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#00d4ff"/>
            <stop offset="50%" stopColor="#0088ff"/>
            <stop offset="100%" stopColor="#0044bb"/>
          </linearGradient>
          <radialGradient id="gGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#00aaff" stopOpacity="0.5"/>
            <stop offset="100%" stopColor="#0044ff" stopOpacity="0"/>
          </radialGradient>
          <radialGradient id="gEyeGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#00ffff" stopOpacity="0.9"/>
            <stop offset="100%" stopColor="#0088ff" stopOpacity="0.1"/>
          </radialGradient>
          <filter id="fBlur">
            <feGaussianBlur stdDeviation="3" result="blur"/>
            <feComposite in="SourceGraphic" in2="blur" operator="over"/>
          </filter>
          <filter id="fGlow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
            <feMerge><feMergeNode in="coloredBlur"/><feMergeNode in="SourceGraphic"/></feMerge>
          </filter>
          <clipPath id="cpFace">
            <rect x="78" y="54" width="64" height="44" rx="6"/>
          </clipPath>
        </defs>

        {/* Ground shadow ellipse */}
        <ellipse className="rb-shadow" cx="110" cy="296" rx="52" ry="10" fill="#00aaff" />

        <g className="rb-root">

          {/* ── HEAD ── */}
          <g className="rb-head">
            {/* Antenna base */}
            <rect x="107" y="8" width="6" height="22" rx="3" fill="url(#gMetalLight)"/>
            <circle className="rb-ant-dot" cx="110" cy="7" r="6" fill="#00d4ff" filter="url(#fGlow)"/>
            <circle cx="110" cy="7" r="3" fill="#fff" opacity="0.9"/>

            {/* Head outer shell */}
            <rect x="72" y="30" width="76" height="56" rx="14" fill="url(#gHead)" stroke="#2a5aaa" strokeWidth="1.5"/>
            {/* Head highlight top edge */}
            <rect x="80" y="31" width="60" height="4" rx="2" fill="#4a7acc" opacity="0.4"/>
            {/* Side bolts */}
            <circle cx="76" cy="58" r="4" fill="url(#gMetalLight)" stroke="#3a6aaa" strokeWidth="1"/>
            <circle cx="76" cy="58" r="2" fill="#1a3060"/>
            <circle cx="144" cy="58" r="4" fill="url(#gMetalLight)" stroke="#3a6aaa" strokeWidth="1"/>
            <circle cx="144" cy="58" r="2" fill="#1a3060"/>

            {/* Face visor */}
            <rect x="78" y="40" width="64" height="38" rx="8" fill="#060f22" stroke="#1a3a88" strokeWidth="1"/>
            {/* Visor reflection */}
            <rect x="80" y="41" width="28" height="6" rx="3" fill="#2a4a88" opacity="0.3"/>

            {/* Scan line inside visor */}
            <g clipPath="url(#cpFace)">
              <rect className="rb-scan" x="78" y="62" width="64" height="3" rx="1" fill="#00d4ff" opacity="0.5"/>
            </g>

            {/* LEFT EYE */}
            <circle cx="95" cy="62" r="11" fill="#040d1e" stroke="#1a4a88" strokeWidth="1"/>
            <circle cx="95" cy="62" r="8" fill="url(#gEye)" opacity="0.15"/>
            <circle className="rb-eye-l" cx="95" cy="62" r="7" fill="url(#gEyeGlow)" filter="url(#fGlow)"/>
            <circle cx="95" cy="62" r="4" fill="#00eeff" opacity="0.95"/>
            <circle cx="95" cy="62" r="2" fill="#fff"/>
            <circle cx="93" cy="60" r="1" fill="#fff" opacity="0.7"/>

            {/* RIGHT EYE */}
            <circle cx="125" cy="62" r="11" fill="#040d1e" stroke="#1a4a88" strokeWidth="1"/>
            <circle cx="125" cy="62" r="8" fill="url(#gEye)" opacity="0.15"/>
            <circle className="rb-eye-r" cx="125" cy="62" r="7" fill="url(#gEyeGlow)" filter="url(#fGlow)"/>
            <circle cx="125" cy="62" r="4" fill="#00eeff" opacity="0.95"/>
            <circle cx="125" cy="62" r="2" fill="#fff"/>
            <circle cx="123" cy="60" r="1" fill="#fff" opacity="0.7"/>

            {/* Mouth speaker grill */}
            <rect x="88" y="76" width="44" height="6" rx="3" fill="#0a1a3a" stroke="#1a3a88" strokeWidth="0.8"/>
            {[0,1,2,3,4].map(i => (
              <rect key={i} x={91 + i*8} y="77" width="4" height="4" rx="1" fill="#00d4ff" opacity="0.4"/>
            ))}
          </g>

          {/* ── NECK ── */}
          <rect x="100" y="86" width="20" height="12" rx="4" fill="url(#gMetal)" stroke="#1a3a88" strokeWidth="1"/>
          <rect x="104" y="88" width="12" height="3" rx="1.5" fill="#2a4a88" opacity="0.4"/>

          {/* ── TORSO ── */}
          <rect x="58" y="98" width="104" height="90" rx="18" fill="url(#gTorso)" stroke="#1e4488" strokeWidth="1.5"/>
          {/* Torso top highlight */}
          <rect x="68" y="99" width="84" height="6" rx="3" fill="#3a6acc" opacity="0.2"/>
          {/* Torso side panels */}
          <rect x="62" y="110" width="16" height="60" rx="6" fill="#0d1e40" stroke="#1a3a70" strokeWidth="0.8"/>
          <rect x="142" y="110" width="16" height="60" rx="6" fill="#0d1e40" stroke="#1a3a70" strokeWidth="0.8"/>

          {/* Chest panel */}
          <rect x="82" y="108" width="56" height="68" rx="10" fill="#060e22" stroke="#1a3a88" strokeWidth="1"/>

          {/* AI CORE */}
          <circle cx="110" cy="148" r="22" fill="#0a1830" stroke="#1a4a88" strokeWidth="1"/>
          <circle cx="110" cy="148" r="17" fill="url(#gGlow)" opacity="0.6"/>
          <circle cx="110" cy="148" r="13" fill="url(#gCore)" opacity="0.9"/>
          {/* Core spinning dashes */}
          <circle className="rb-core-ring" cx="110" cy="148" r="17"
            stroke="#00d4ff" strokeWidth="1.5" strokeDasharray="5 3" fill="none" opacity="0.8"/>
          <circle cx="110" cy="148" r="8" fill="#00eeff" opacity="0.4"/>
          <circle cx="110" cy="148" r="5" fill="#fff" opacity="0.9"/>
          <circle cx="107" cy="145" r="2" fill="#fff" opacity="0.5"/>

          {/* Chest indicators row */}
          {[0,1,2].map(i => (
            <circle key={i} cx={90 + i * 12} cy="118" r="3" fill="#00d4ff" opacity={0.3 + i * 0.2}
              style={{animation:`rbAnt ${1 + i*0.3}s ease-in-out infinite ${i*0.2}s`}}/>
          ))}

          {/* Bottom chest vents */}
          {[0,1,2,3].map(i => (
            <rect key={i} x={87 + i*9} y="168" width="5" height="4" rx="1.5"
              fill="#1a3a88" stroke="#00d4ff" strokeWidth="0.5" opacity="0.6"/>
          ))}

          {/* ── SHOULDERS ── */}
          <ellipse cx="64" cy="108" rx="14" ry="12" fill="url(#gMetalLight)" stroke="#2a5aaa" strokeWidth="1"/>
          <ellipse cx="156" cy="108" rx="14" ry="12" fill="url(#gMetalLight)" stroke="#2a5aaa" strokeWidth="1"/>

          {/* ── LEFT ARM ── */}
          <g className="rb-arm-l">
            <rect x="36" y="112" width="28" height="62" rx="14" fill="url(#gArm)" stroke="#1a3a88" strokeWidth="1.2"/>
            {/* Arm panel */}
            <rect x="42" y="124" width="16" height="28" rx="5" fill="#060e22" stroke="#1a3a70" strokeWidth="0.8"/>
            <circle cx="50" cy="132" r="4" fill="#00d4ff" opacity="0.5"/>
            <rect x="44" y="140" width="12" height="2" rx="1" fill="#00d4ff" opacity="0.4"/>
            <rect x="44" y="145" width="8" height="2" rx="1" fill="#00d4ff" opacity="0.3"/>
            {/* Hand */}
            <ellipse cx="50" cy="178" rx="13" ry="10" fill="url(#gMetal)" stroke="#1a3a88" strokeWidth="1"/>
            <circle cx="50" cy="178" r="5" fill="#0d1e40" stroke="#1a4a88" strokeWidth="0.8"/>
          </g>

          {/* ── RIGHT ARM ── */}
          <g className="rb-arm-r">
            <rect x="156" y="112" width="28" height="62" rx="14" fill="url(#gArm)" stroke="#1a3a88" strokeWidth="1.2"/>
            <rect x="162" y="124" width="16" height="28" rx="5" fill="#060e22" stroke="#1a3a70" strokeWidth="0.8"/>
            <circle cx="170" cy="132" r="4" fill="#00d4ff" opacity="0.5"/>
            <rect x="164" y="140" width="12" height="2" rx="1" fill="#00d4ff" opacity="0.4"/>
            <rect x="164" y="145" width="8" height="2" rx="1" fill="#00d4ff" opacity="0.3"/>
            <ellipse cx="170" cy="178" rx="13" ry="10" fill="url(#gMetal)" stroke="#1a3a88" strokeWidth="1"/>
            <circle cx="170" cy="178" r="5" fill="#0d1e40" stroke="#1a4a88" strokeWidth="0.8"/>
          </g>

          {/* ── HIP / WAIST ── */}
          <rect x="68" y="188" width="84" height="20" rx="8" fill="#0f2040" stroke="#1a3a88" strokeWidth="1"/>
          <rect x="78" y="192" width="64" height="4" rx="2" fill="#1a3a88" opacity="0.4"/>
          {/* Hip bolts */}
          <circle cx="80" cy="198" r="3" fill="url(#gMetalLight)" stroke="#2a5aaa" strokeWidth="0.8"/>
          <circle cx="140" cy="198" r="3" fill="url(#gMetalLight)" stroke="#2a5aaa" strokeWidth="0.8"/>

          {/* ── LEFT LEG ── */}
          <g className="rb-leg-l">
            <rect x="72" y="208" width="30" height="54" rx="12" fill="url(#gLeg)" stroke="#1a3a88" strokeWidth="1.2"/>
            <rect x="78" y="220" width="18" height="22" rx="5" fill="#060e22" stroke="#1a3a70" strokeWidth="0.8"/>
            <rect x="80" y="226" width="14" height="2" rx="1" fill="#00d4ff" opacity="0.4"/>
            <rect x="80" y="231" width="10" height="2" rx="1" fill="#00d4ff" opacity="0.3"/>
            {/* Foot */}
            <rect x="66" y="256" width="42" height="14" rx="7" fill="url(#gMetal)" stroke="#1a3a88" strokeWidth="1"/>
            <rect x="70" y="258" width="16" height="4" rx="2" fill="#1a3a88" opacity="0.3"/>
          </g>

          {/* ── RIGHT LEG ── */}
          <g className="rb-leg-r">
            <rect x="118" y="208" width="30" height="54" rx="12" fill="url(#gLeg)" stroke="#1a3a88" strokeWidth="1.2"/>
            <rect x="124" y="220" width="18" height="22" rx="5" fill="#060e22" stroke="#1a3a70" strokeWidth="0.8"/>
            <rect x="126" y="226" width="14" height="2" rx="1" fill="#00d4ff" opacity="0.4"/>
            <rect x="126" y="231" width="10" height="2" rx="1" fill="#00d4ff" opacity="0.3"/>
            {/* Foot */}
            <rect x="112" y="256" width="42" height="14" rx="7" fill="url(#gMetal)" stroke="#1a3a88" strokeWidth="1"/>
            <rect x="116" y="258" width="16" height="4" rx="2" fill="#1a3a88" opacity="0.3"/>
          </g>

        </g>{/* end rb-root */}
      </svg>
    </div>
  )
}

/* ─── Floating particles background ─── */
function Particles() {
  const dots = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    x: (i * 37 + 11) % 100,
    y: (i * 53 + 7) % 100,
    size: (i % 3) + 1,
    delay: (i * 0.3) % 4,
    dur: 3 + (i % 4),
  }))
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <style>{`
        .ptcl { animation: ptclRise var(--dur,4s) ease-in-out var(--dly,0s) infinite; }
        @keyframes ptclRise {
          0%,100% { transform: translateY(0) scale(1); opacity: var(--op,0.15); }
          50%      { transform: translateY(-18px) scale(1.3); opacity: calc(var(--op,0.15) * 2); }
        }
      `}</style>
      {dots.map(d => (
        <div
          key={d.id}
          className="ptcl absolute rounded-full bg-blue-400"
          style={{
            left: `${d.x}%`,
            top: `${d.y}%`,
            width: d.size * 2,
            height: d.size * 2,
            '--dur': `${d.dur}s`,
            '--dly': `${d.delay}s`,
            '--op': d.size === 3 ? 0.2 : 0.1,
          } as React.CSSProperties}
        />
      ))}
    </div>
  )
}

export function SiteFooter() {
  return (
    <footer className="relative w-full overflow-hidden" style={{ background: 'linear-gradient(160deg,#03091d 0%,#060f2a 40%,#020816 100%)' }}>
      <Particles />

      {/* Top glow */}
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-60" />
      <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[500px] h-80 rounded-full bg-blue-700/10 blur-3xl" />

      {/* Grid overlay */}
      <div className="pointer-events-none absolute inset-0 grid-accent opacity-[0.06]" />

      {/* ─── MAIN CONTENT ─── */}
      <div className="relative mx-auto max-w-7xl px-6 pt-20 pb-10 md:px-10">

        {/* Top 3-column layout */}
        <div className="grid gap-12 lg:grid-cols-3 lg:gap-8">

          {/* ── COL 1: Brand + Robot ── */}
          <div className="flex flex-col items-center text-center lg:items-center">
            <RealisticRobot />
            <div className="mt-6 w-fit rounded-xl bg-white/5 p-3 border border-white/10 backdrop-blur">
              <Image
                src="/biolabs-logo.jpg"
                alt="BioLabs powered by Healix Technologies"
                width={180} height={70}
                className="h-10 w-auto"
              />
            </div>
            <p className="mt-4 text-xs leading-relaxed text-white/40 max-w-[220px]">
              Healix Technologies Pvt. Ltd.<br/>
              Powering India's AI Healthcare Future.
            </p>
            {/* Social icons */}
            <div className="mt-5 flex gap-3">
              {SOCIALS.map(s => (
                <a key={s.label} href="#" aria-label={s.label}
                  className="group flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/50 transition-all duration-300 hover:border-blue-400 hover:bg-blue-500/15 hover:text-blue-300 hover:scale-110">
                  <s.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* ── COL 2: Quick Links ── */}
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-3 mb-5">
              <span className="h-px w-6 bg-blue-400"/>
              <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-blue-400">Quick Links</h3>
            </div>
            {QUICK_LINKS.map(link => (
              <a key={link.label} href={link.href}
                className="group flex items-center gap-2 py-2 text-sm text-white/55 transition-all duration-200 hover:text-white hover:translate-x-1">
                <ChevronRight className="h-3.5 w-3.5 text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity"/>
                {link.label}
              </a>
            ))}

            {/* CTA */}
            <a href="#registration"
              className="mt-6 inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-900/40 transition-all hover:bg-blue-500 hover:shadow-blue-700/50 hover:scale-105">
              Register for Hackathon →
            </a>
          </div>

          {/* ── COL 3: Event Info ── */}
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-3 mb-5">
              <span className="h-px w-6 bg-blue-400"/>
              <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-blue-400">Event Info</h3>
            </div>
            {EVENT_DETAILS.map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-start gap-3 py-2.5 border-b border-white/5">
                <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-blue-600/20 border border-blue-500/20">
                  <Icon className="h-3.5 w-3.5 text-blue-400"/>
                </div>
                <span className="text-sm text-white/60 leading-snug">{text}</span>
              </div>
            ))}

            {/* Hackathon highlight box */}
            <div className="mt-6 rounded-2xl border border-blue-500/20 bg-blue-600/5 p-5 backdrop-blur">
              <p className="text-xs uppercase tracking-widest text-blue-400 font-semibold mb-2">Grand Finale</p>
              <p className="text-white font-bold text-lg leading-snug">28 – 30 August 2026</p>
              <p className="text-white/50 text-xs mt-1">SMIT Campus, Sikkim, India</p>
              <div className="mt-3 h-px w-full bg-gradient-to-r from-blue-500/40 to-transparent"/>
              <p className="mt-3 text-xs text-white/40">Prize Pool · ₹20,000 · Certificates · National Recognition</p>
            </div>
          </div>
        </div>

        {/* ─── BOTTOM BAR ─── */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/8 pt-8 md:flex-row">
          <p className="text-xs text-white/30">
            © 2026 Healix Technologies Pvt. Ltd. All Rights Reserved.
          </p>
          <a href={`https://${SITE_URL}`} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs text-blue-400 transition-colors hover:text-white">
            <Globe className="h-3.5 w-3.5"/>
            {SITE_URL}
          </a>
        </div>
      </div>
    </footer>
  )
}
