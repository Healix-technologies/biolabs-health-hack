import { Mail, Phone, User } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'

const COORDINATORS = [
  {
    name: 'Program Coordinator',
    role: 'General Enquiries & Registration',
    email: 'research@Healix research-healix.com',
    phone: '+91 98765 43210',
  },
  {
    name: 'Student Coordinator',
    role: 'Rotaract Club of USME',
    email: 'coordinator@Healix research-healix.com',
    phone: '+91 91234 56780',
  },
]

export function ContactSection() {
  return (
    <section id="contact" className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <SectionHeading
          eyebrow="Contact"
          title="Questions? Reach our coordinators"
          align="center"
          description="Our team is here to help with registration, rounds, and any queries about the competition."
        />

        <div className="mx-auto mt-14 grid max-w-4xl gap-6 md:grid-cols-2">
          {COORDINATORS.map((c) => (
            <article
              key={c.email}
              className="flex flex-col gap-5 rounded-xl border border-border bg-card p-7 transition-all duration-300 hover:border-navy/20 hover:shadow-md"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-navy text-navy-foreground">
                  <User className="h-6 w-6" aria-hidden="true" />
                </div>
                <div className="flex flex-col">
                  <h3 className="font-serif text-lg font-semibold text-navy">
                    {c.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">{c.role}</p>
                </div>
              </div>

              <div className="flex flex-col gap-3 border-t border-border pt-5">
                <a
                  href={`mailto:${c.email}`}
                  className="group flex items-center gap-3 text-sm text-navy transition-colors hover:text-brand-red"
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-secondary text-navy transition-colors group-hover:bg-brand-red group-hover:text-brand-red-foreground">
                    <Mail className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <span className="font-medium break-all">{c.email}</span>
                </a>
                <a
                  href={`tel:${c.phone.replace(/\s/g, '')}`}
                  className="group flex items-center gap-3 text-sm text-navy transition-colors hover:text-brand-red"
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-secondary text-navy transition-colors group-hover:bg-brand-red group-hover:text-brand-red-foreground">
                    <Phone className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <span className="font-medium">{c.phone}</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
