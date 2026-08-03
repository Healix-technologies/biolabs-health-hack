import { cn } from '@/lib/utils'

interface SectionHeadingProps {
  eyebrow: string
  title: string
  description?: string
  align?: 'left' | 'center'
  className?: string
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        'flex flex-col gap-4',
        align === 'center' && 'items-center text-center',
        className,
      )}
    >
      <div className="flex items-center gap-3">
        <span className="h-px w-8 bg-gold" aria-hidden="true" />
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
          {eyebrow}
        </span>
        {align === 'center' && (
          <span className="h-px w-8 bg-gold" aria-hidden="true" />
        )}
      </div>
      <h2 className="text-balance font-serif text-3xl font-semibold leading-tight text-navy md:text-4xl lg:text-[2.75rem]">
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            'max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg',
            align === 'center' && 'mx-auto',
          )}
        >
          {description}
        </p>
      )}
    </div>
  )
}
