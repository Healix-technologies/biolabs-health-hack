import Image from 'next/image'

interface Partner {
  name: string
  logo: string
  alt: string
}

const PARTNERS: Partner[] = [
  {
    name: 'DHL',
    logo: '/logos/dhl-logo.png',
    alt: 'DHL Logo',
  },
  {
    name: 'InterviewBuddy',
    logo: '/logos/interviewbuddy-logo.png',
    alt: 'InterviewBuddy Logo',
  },
  {
    name: 'Rotaract',
    logo: '/logos/rotaract-logo.jpg',
    alt: 'Rotaract Logo',
  },
  {
    name: 'Unstop',
    logo: '/logos/unstop-logo.png',
    alt: 'Unstop Logo',
  },
]

// Duplicate the logo list internally to create a seamless continuous loop
const MARQUEE_ITEMS = [
  ...PARTNERS,
  ...PARTNERS,
  ...PARTNERS,
  ...PARTNERS,
  ...PARTNERS,
  ...PARTNERS,
  ...PARTNERS,
  ...PARTNERS,
]

export function PartnersMarquee() {
  return (
    <section
      aria-label="Official Collaborators"
      className="relative overflow-hidden bg-[#FCFEFB] py-14 md:py-16"
    >
      {/* Subtle fade effect on left and right edges */}
      <div
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 sm:w-32 md:w-48 bg-gradient-to-r from-[#FCFEFB] via-[#FCFEFB]/80 to-transparent"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 sm:w-32 md:w-48 bg-gradient-to-l from-[#FCFEFB] via-[#FCFEFB]/80 to-transparent"
        aria-hidden="true"
      />

      <div className="relative mx-auto w-full max-w-screen-2xl px-4">
        {/* Section Heading */}
        <div className="mb-8 md:mb-10 text-center">
          <div className="flex items-center justify-center gap-3 mb-2">
            <span className="h-px w-8 bg-gold" aria-hidden="true" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              Collaborators
            </span>
            <span className="h-px w-8 bg-gold" aria-hidden="true" />
          </div>
          <h2 className="font-serif text-2xl font-bold leading-tight text-navy md:text-3xl lg:text-4xl">
            In Collaboration With
          </h2>
        </div>

        {/* Marquee Track Container */}
        <div className="relative w-full overflow-hidden py-2 [mask-image:linear-gradient(to_right,transparent_0%,black_10%,black_90%,transparent_100%)]">
          <div className="animate-partners-marquee flex items-center gap-[75px] pr-[75px]">
            {MARQUEE_ITEMS.map((partner, index) => (
              <div
                key={`${partner.name}-${index}`}
                className="flex shrink-0 items-center justify-center py-2"
              >
                <img
                  src={partner.logo}
                  alt={partner.alt}
                  className="h-[50px] md:h-[65px] lg:h-[80px] w-auto max-w-[220px] sm:max-w-[280px] md:max-w-[340px] object-contain mix-blend-multiply filter contrast-105"
                  loading="eager"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default PartnersMarquee
