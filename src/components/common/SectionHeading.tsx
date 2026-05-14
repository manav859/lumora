import { cn } from '../../lib/cn'

type SectionHeadingProps = {
  align?: 'center' | 'left'
  className?: string
  description?: string
  eyebrow: string
  title: string
}

export function SectionHeading({
  align = 'left',
  className,
  description,
  eyebrow,
  title,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        'max-w-3xl',
        align === 'center' && 'mx-auto text-center',
        className,
      )}
    >
      <p className="lumora-label">{eyebrow}</p>
      <h2 className="mt-5 font-heading text-4xl leading-[0.96] tracking-[-0.03em] sm:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-5 max-w-2xl text-base leading-7 text-[var(--lumora-muted)] sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  )
}
