import Image from 'next/image'
import { SectionHeading } from '@/components/section-heading'

export function AboutSection() {
  return (
    <section id="about" className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="order-2 lg:order-1">
            <SectionHeading
              eyebrow="About the Competition"
              title="Solving real-world healthcare challenges with AI"
            />

            <div className="mt-8 space-y-5">
              <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
                BioLabs AI HealthHack 2026 is a national-level innovation
                challenge that brings together students, researchers, developers,
                healthcare professionals, and innovators to solve real-world
                healthcare problems using Artificial Intelligence and emerging
                technologies.
              </p>
              <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
                Participants will research, design, prototype, and present
                impactful AI-driven healthcare solutions while receiving guidance
                from experienced mentors and evaluations from leading industry
                experts.
              </p>
              <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
                The competition promotes interdisciplinary collaboration,
                innovation, and practical problem-solving to develop scalable
                healthcare solutions.
              </p>
            </div>
          </div>

          <div className="order-1 overflow-hidden rounded-2xl border border-border lg:order-2">
            <Image
              src="/lab-collaboration.png"
              alt="Students collaborating over research work in a modern laboratory"
              width={900}
              height={700}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
