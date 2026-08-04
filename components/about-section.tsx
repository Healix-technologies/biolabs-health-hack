import Image from 'next/image'

export function AboutSection() {
  return (
    <section id="about" className="relative overflow-hidden bg-navy">
      {/* Grid accent overlay */}
      <div className="pointer-events-none absolute inset-0 grid-accent opacity-20" />

      <div className="relative grid min-h-[600px] lg:grid-cols-2">
        {/* ── LEFT: Content panel ── */}
        <div className="flex flex-col justify-center px-8 py-20 md:px-16 lg:py-28">
          {/* Eyebrow */}
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-gold" aria-hidden="true" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              Healix AI HealthHack 2026
            </span>
          </div>

          {/* Heading */}
          <h2 className="mt-5 font-serif text-4xl font-bold leading-tight text-white md:text-5xl lg:text-[3.25rem]">
            About the <br />
            <span className="text-gold">Competition</span>
          </h2>

          {/* Body */}
          <div className="mt-6 space-y-4 max-w-lg">
            <p className="text-base leading-relaxed text-white/70 md:text-lg">
              Healix AI HealthHack 2026 is a national AI and healthcare
              innovation challenge that brings together students, researchers,
              developers, and healthcare professionals to solve real-world
              healthcare problems using Artificial Intelligence.
            </p>
            <p className="text-base leading-relaxed text-white/70 md:text-lg">
              Participants will research, prototype, and present innovative
              AI-driven healthcare solutions while receiving guidance from
              experienced mentors and expert judges.
            </p>
          </div>

          {/* Divider */}
          <div className="mt-8 h-px w-full bg-white/10" />

          {/* Hackathon Details */}
          <div className="mt-8 space-y-5 max-w-lg">

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-widest text-gold mb-1">Theme</h3>
              <p className="text-white/70 text-base leading-relaxed">
                Innovating Healthcare with Artificial Intelligence — from diagnostics and drug discovery to patient care and health data analytics.
              </p>
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-widest text-gold mb-1">Who Can Participate</h3>
              <p className="text-white/70 text-base leading-relaxed">
                Open to undergraduate, postgraduate, and PhD students, as well as early-stage startups and healthcare professionals across India. Teams of 1–4 members.
              </p>
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-widest text-gold mb-1">Format</h3>
              <p className="text-white/70 text-base leading-relaxed">
                A fully online multi-round national hackathon — from registration to the final results, everything happens virtually. Participate from anywhere in India.
              </p>
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-widest text-gold mb-1">What You'll Get</h3>
              <p className="text-white/70 text-base leading-relaxed">
                Mentorship from AI and healthcare experts, exposure to industry leaders, a chance to win ₹20,000 in prizes, and national recognition for your innovation.
              </p>
            </div>

          </div>
        </div>

        {/* ── RIGHT: Full-bleed image ── */}
        <div className="relative min-h-[400px] lg:min-h-0">
          {/* Gradient fade on the left edge blending into navy */}
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-navy to-transparent" />

          <Image
            src="/lab-collaboration.png"
            alt="Students collaborating over research work in a modern laboratory"
            fill
            className="object-cover object-center"
            priority
          />

          {/* Subtle dark vignette at bottom */}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-32 bg-gradient-to-t from-navy/60 to-transparent" />
        </div>
      </div>
    </section>
  )
}
