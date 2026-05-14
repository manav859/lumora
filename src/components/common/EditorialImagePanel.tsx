import type { ReactNode } from 'react'
import { cn } from '../../lib/cn'
import type { LampVariant } from '../../types/site'
import { ArrowButton } from './ArrowButton'
import { SurfacePanel } from './SurfacePanel'
import { ReactiveLampAccent } from '../lighting/ReactiveLampAccent'

type EditorialImagePanelProps = {
  align?: 'left' | 'right'
  children?: ReactNode
  className?: string
  ctaHref?: string
  ctaLabel?: string
  detail?: string
  eyebrow?: string
  lampSize?: 'hero' | 'lg' | 'md' | 'sm'
  note?: string
  size?: 'hero' | 'lg' | 'md' | 'sm'
  title?: string
  tone?: 'deep' | 'split' | 'warm'
  variant: LampVariant
}

const sizeHeights: Record<NonNullable<EditorialImagePanelProps['size']>, string> = {
  sm: 'min-h-[18rem] sm:min-h-[20rem]',
  md: 'min-h-[22rem] sm:min-h-[24rem]',
  lg: 'min-h-[27rem] sm:min-h-[30rem]',
  hero: 'min-h-[32rem] sm:min-h-[36rem] lg:min-h-[40rem]',
}

export function EditorialImagePanel({
  align = 'left',
  children,
  className,
  ctaHref,
  ctaLabel,
  detail,
  eyebrow,
  lampSize = 'lg',
  note,
  size = 'md',
  title,
  tone = 'deep',
  variant,
}: EditorialImagePanelProps) {
  const background =
    tone === 'warm'
      ? 'var(--lumora-panel-bg-warm)'
      : tone === 'split'
        ? 'var(--lumora-panel-bg-split)'
        : 'var(--lumora-panel-bg-deep)'

  return (
    <div className={cn('group h-full transition-transform duration-150 ease-out hover:-translate-y-1.5', className)}>
      <SurfacePanel className={cn('relative isolate h-full overflow-hidden p-6 sm:p-8', sizeHeights[size])} tone="glass">
        <div className="absolute inset-0" style={{ background }} />
        <div
          className="lumora-theme-transition pointer-events-none absolute left-1/2 top-[-10%] h-[56%] w-[72%] -translate-x-1/2 rounded-full blur-3xl"
          style={{
            background: 'var(--lumora-glow)',
            opacity: 'var(--lumora-panel-glow-opacity)',
          }}
        />
        <div
          className="pointer-events-none absolute inset-0 opacity-70"
          style={{
            background:
              'linear-gradient(180deg, rgba(255,255,255,0.03) 0%, transparent 25%, transparent 75%, rgba(255,255,255,0.05) 100%)',
          }}
        />
        <div
          className={cn(
            'relative z-10 flex h-full flex-col justify-between gap-10',
            align === 'right' && 'text-right',
          )}
        >
          <div className={cn('max-w-[21rem]', align === 'right' && 'ml-auto')}>
            {eyebrow ? <p className="lumora-label">{eyebrow}</p> : null}
            {title ? (
              <h3 className="mt-4 font-heading text-3xl leading-[0.95] tracking-[-0.03em] sm:text-4xl">
                {title}
              </h3>
            ) : null}
            {detail ? (
              <p className="mt-4 text-sm leading-7 text-[var(--lumora-muted)] sm:text-base">
                {detail}
              </p>
            ) : null}
            {ctaHref && ctaLabel ? (
              <div className="mt-6">
                <ArrowButton href={ctaHref} variant="inline">
                  {ctaLabel}
                </ArrowButton>
              </div>
            ) : null}
          </div>

          <div className={cn('flex flex-1 items-end', align === 'right' ? 'justify-start' : 'justify-end')}>
            <ReactiveLampAccent size={lampSize} variant={variant} />
          </div>
        </div>

        {note ? (
          <div
            className="absolute bottom-6 left-6 rounded-full border px-3 py-1 text-[10px] uppercase tracking-[0.28em] sm:bottom-8 sm:left-8"
            style={{
              backgroundColor: 'var(--lumora-glass)',
              borderColor: 'var(--lumora-border)',
              color: 'var(--lumora-muted)',
            }}
          >
            {note}
          </div>
        ) : null}

        {children}
      </SurfacePanel>
    </div>
  )
}
