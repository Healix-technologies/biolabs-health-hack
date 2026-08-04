'use client'

import Image from 'next/image'
import { Globe } from 'lucide-react'
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

/* ── Animated 3D AI Robot (pure SVG + CSS keyframes) ── */
function AIRobot() {
  return (
    <div className="robot-wrapper" aria-hidden="true">
      <style>{`
        .robot-wrapper {
          width: 160px;
          height: 200px;
          position: relative;
          filter: drop-shadow(0 0 24px rgba(59,130,246,0.45));
        }

        /* floating body */
        .robot-body-group {
          animation: robotFloat 3s ease-in-out infinite;
          transform-origin: center;
        }
        @keyframes robotFloat {
          0%,100% { transform: translateY(0px); }
          50%      { transform: translateY(-12px); }
        }

        /* head tilt */
        .robot-head {
          animation: headTilt 4s ease-in-out infinite;
          transform-origin: 80px 48px;
        }
        @keyframes headTilt {
          0%,100% { transform: rotate(0deg); }
          25%     { transform: rotate(4deg); }
          75%     { transform: rotate(-4deg); }
        }

        /* eye glow pulse */
        .robot-eye {
          animation: eyePulse 2s ease-in-out infinite;
        }
        .robot-eye-r {
          animation: eyePulse 2s ease-in-out infinite 0.3s;
        }
        @keyframes eyePulse {
          0%,100% { opacity:1; r:4; }
          50%      { opacity:0.4; r:3; }
        }

        /* antenna blink */
        .antenna-dot {
          animation: antennaBlink 1.2s ease-in-out infinite;
        }
        @keyframes antennaBlink {
          0%,100% { fill:#60a5fa; opacity:1; }
          50%      { fill:#fff; opacity:0.6; }
        }

        /* arm swing */
        .arm-left {
          animation: armSwingL 3s ease-in-out infinite;
          transform-origin: 42px 112px;
        }
        .arm-right {
          animation: armSwingR 3s ease-in-out infinite;
          transform-origin: 118px 112px;
        }
        @keyframes armSwingL {
          0%,100% { transform: rotate(0deg); }
          50%      { transform: rotate(12deg); }
        }
        @keyframes armSwingR {
          0%,100% { transform: rotate(0deg); }
          50%      { transform: rotate(-12deg); }
        }

        /* leg walk */
        .leg-left {
          animation: legL 3s ease-in-out infinite;
          transform-origin: 64px 168px;
        }
        .leg-right {
          animation: legR 3s ease-in-out infinite;
          transform-origin: 96px 168px;
        }
        @keyframes legL {
          0%,100% { transform: rotate(0deg); }
          50%      { transform: rotate(-8deg); }
        }
        @keyframes legR {
          0%,100% { transform: rotate(0deg); }
          50%      { transform: rotate(8deg); }
        }

        /* orbit ring */
        .orbit-ring {
          animation: orbitSpin 6s linear infinite;
          transform-origin: 80px 100px;
        }
        @keyframes orbitSpin {
          from { transform: rotateX(75deg) rotate(0deg); }
          to   { transform: rotateX(75deg) rotate(360deg); }
        }

        /* glow circle */
        .glow-base {
          animation: glowPulse 3s ease-in-out infinite;
        }
        @keyframes glowPulse {
          0%,100% { opacity:0.3; rx:38; ry:10; }
          50%      { opacity:0.08; rx:44; ry:12; }
        }
      `}</style>

      <svg viewBox="0 0 160 200" fill="none" xmlns="http://www.w3.org/2000/svg" width="160" height="200">
        {/* Ground glow */}
        <ellipse className="glow-base" cx="80" cy="192" rx="38" ry="10" fill="#3b82f6" />

        {/* Orbit ring */}
        <ellipse className="orbit-ring" cx="80" cy="100" rx="62" ry="16"
          stroke="#60a5fa" strokeWidth="1.2" strokeDasharray="6 4" fill="none" opacity="0.5" />

        <g className="robot-body-group">
          {/* === HEAD === */}
          <g className="robot-head">
            {/* Antenna stem */}
            <line x1="80" y1="14" x2="80" y2="26" stroke="#94a3b8" strokeWidth="2.5" strokeLinecap="round"/>
            {/* Antenna dot */}
            <circle className="antenna-dot" cx="80" cy="11" r="4" fill="#60a5fa"/>

            {/* Head box */}
            <rect x="52" y="26" width="56" height="42" rx="10" fill="#1e3a5f"
              stroke="#3b82f6" strokeWidth="1.5"/>
            {/* Face panel */}
            <rect x="58" y="32" width="44" height="28" rx="6" fill="#0f2a4a"/>

            {/* Eyes */}
            <circle className="robot-eye" cx="70" cy="46" r="6" fill="#1d4ed8"/>
            <circle cx="70" cy="46" r="4" fill="#60a5fa"/>
            <circle cx="70" cy="46" r="2" fill="#fff"/>

            <circle className="robot-eye-r" cx="90" cy="46" r="6" fill="#1d4ed8"/>
            <circle cx="90" cy="46" r="4" fill="#60a5fa"/>
            <circle cx="90" cy="46" r="2" fill="#fff"/>

            {/* Mouth / speaker grill */}
            <rect x="67" y="55" width="26" height="3" rx="1.5" fill="#3b82f6" opacity="0.6"/>
            <rect x="70" y="55" width="4" height="3" rx="1" fill="#fff" opacity="0.3"/>
            <rect x="78" y="55" width="4" height="3" rx="1" fill="#fff" opacity="0.3"/>
            <rect x="86" y="55" width="4" height="3" rx="1" fill="#fff" opacity="0.3"/>

            {/* Ear bolts */}
            <circle cx="52" cy="47" r="3.5" fill="#1e3a5f" stroke="#3b82f6" strokeWidth="1"/>
            <circle cx="108" cy="47" r="3.5" fill="#1e3a5f" stroke="#3b82f6" strokeWidth="1"/>
          </g>

          {/* === NECK === */}
          <rect x="72" y="68" width="16" height="8" rx="3" fill="#1e3a5f" stroke="#3b82f6" strokeWidth="1"/>

          {/* === TORSO === */}
          <rect x="46" y="76" width="68" height="58" rx="12" fill="#1e3a5f" stroke="#3b82f6" strokeWidth="1.5"/>
          {/* Chest panel */}
          <rect x="58" y="84" width="44" height="34" rx="7" fill="#0f2a4a"/>
          {/* AI core circle */}
          <circle cx="80" cy="101" r="12" fill="#1d4ed8" opacity="0.8"/>
          <circle cx="80" cy="101" r="8" fill="#3b82f6" opacity="0.9"/>
          <circle cx="80" cy="101" r="4" fill="#fff" opacity="0.95"/>
          {/* Core ring */}
          <circle cx="80" cy="101" r="12" stroke="#60a5fa" strokeWidth="1" strokeDasharray="3 2" fill="none" opacity="0.6"/>

          {/* Chest bolts */}
          <circle cx="62" cy="88" r="2" fill="#3b82f6" opacity="0.5"/>
          <circle cx="98" cy="88" r="2" fill="#3b82f6" opacity="0.5"/>
          <circle cx="62" cy="114" r="2" fill="#3b82f6" opacity="0.5"/>
          <circle cx="98" cy="114" r="2" fill="#3b82f6" opacity="0.5"/>

          {/* === ARMS === */}
          <g className="arm-left">
            <rect x="28" y="78" width="18" height="44" rx="9" fill="#1e3a5f" stroke="#3b82f6" strokeWidth="1.2"/>
            <circle cx="37" cy="124" r="7" fill="#1e3a5f" stroke="#3b82f6" strokeWidth="1.2"/>
            <circle cx="37" cy="124" r="3" fill="#3b82f6" opacity="0.6"/>
          </g>
          <g className="arm-right">
            <rect x="114" y="78" width="18" height="44" rx="9" fill="#1e3a5f" stroke="#3b82f6" strokeWidth="1.2"/>
            <circle cx="123" cy="124" r="7" fill="#1e3a5f" stroke="#3b82f6" strokeWidth="1.2"/>
            <circle cx="123" cy="124" r="3" fill="#3b82f6" opacity="0.6"/>
          </g>

          {/* === HIPS === */}
          <rect x="52" y="134" width="56" height="16" rx="6" fill="#1a3356" stroke="#3b82f6" strokeWidth="1"/>

          {/* === LEGS === */}
          <g className="leg-left">
            <rect x="55" y="150" width="22" height="36" rx="9" fill="#1e3a5f" stroke="#3b82f6" strokeWidth="1.2"/>
            {/* Foot */}
            <rect x="51" y="181" width="28" height="10" rx="5" fill="#1e3a5f" stroke="#3b82f6" strokeWidth="1"/>
          </g>
          <g className="leg-right">
            <rect x="83" y="150" width="22" height="36" rx="9" fill="#1e3a5f" stroke="#3b82f6" strokeWidth="1.2"/>
            {/* Foot */}
            <rect x="81" y="181" width="28" height="10" rx="5" fill="#1e3a5f" stroke="#3b82f6" strokeWidth="1"/>
          </g>
        </g>
      </svg>
    </div>
  )
}

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden bg-[#05132b] text-navy-foreground">
      {/* Background grid */}
      <div className="pointer-events-none absolute inset-0 grid-accent opacity-10" />

      {/* Glow blob top-center */}
      <div className="pointer-events-none absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-blue-600/20 blur-3xl" />

      {/* Main footer body */}
      <div className="relative mx-auto max-w-7xl px-4 pt-16 pb-8 md:px-8">

        {/* Top section: logo + robot + tagline */}
        <div className="flex flex-col items-center gap-6 text-center">

          {/* Robot */}
          <AIRobot />

          {/* Tagline */}
          <p className="text-lg font-semibold tracking-wide text-white/80">
            Powered by <span className="text-blue-400">Artificial Intelligence</span>
          </p>
          <p className="max-w-md text-sm leading-relaxed text-white/45">
            Healix AI HealthHack 2026 — India's premier AI-driven healthcare innovation challenge.
            Build. Prototype. Transform Healthcare.
          </p>

          {/* Logo */}
          <div className="mt-2 w-fit rounded-xl bg-white/10 p-3 backdrop-blur-sm border border-white/10">
            <Image
              src="/biolabs-logo.jpg"
              alt="BioLabs, powered by Healix Technologies Pvt. Ltd."
              width={200}
              height={80}
              className="h-11 w-auto"
            />
          </div>

          {/* Website link */}
          <a
            href={`https://${SITE_URL}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-gold transition-colors hover:text-white"
          >
            <Globe className="h-4 w-4" aria-hidden="true" />
            {SITE_URL}
          </a>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-6 border-t border-white/10 pt-8 md:flex-row">
          <p className="text-sm text-white/40">
            Copyright © 2026 Healix Technologies. All Rights Reserved.
          </p>
          <div className="flex items-center gap-3">
            {SOCIALS.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/75 transition-all hover:border-blue-400 hover:bg-blue-500/20 hover:text-blue-300"
              >
                <social.icon className="h-4 w-4" aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
