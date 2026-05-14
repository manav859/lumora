import { ArrowRight } from 'lucide-react'
import type { CSSProperties } from 'react'
import { cn } from '../../lib/cn'
import { AppLink } from './AppLink'

type ArrowButtonProps = {
  children: string
  className?: string
  href: string
  variant?: 'inline' | 'primary' | 'secondary'
}

const variantStyles: Record<
  NonNullable<ArrowButtonProps['variant']>,
  { className: string; style: CSSProperties }
> = {
  primary: {
    className:
      'rounded-full border px-5 py-3 text-[11px] uppercase tracking-[0.28em] shadow-[var(--lumora-shadow-soft)]',
    style: {
      backgroundColor: 'var(--lumora-button-bg)',
      borderColor: 'var(--lumora-button-border)',
      color: 'var(--lumora-button-text)',
    },
  },
  secondary: {
    className: 'rounded-full border px-5 py-3 text-[11px] uppercase tracking-[0.28em]',
    style: {
      backgroundColor: 'transparent',
      borderColor: 'var(--lumora-border)',
      color: 'var(--lumora-text)',
    },
  },
  inline: {
    className: 'px-0 py-0 text-[11px] uppercase tracking-[0.28em]',
    style: {
      backgroundColor: 'transparent',
      borderColor: 'transparent',
      color: 'var(--lumora-gold)',
    },
  },
}

export function ArrowButton({
  children,
  className,
  href,
  variant = 'primary',
}: ArrowButtonProps) {
  const config = variantStyles[variant]

  return (
    <AppLink
      className={cn(
        'lumora-theme-transition inline-flex items-center gap-2 font-medium hover:-translate-y-0.5',
        className,
        config.className,
      )}
      href={href}
      style={config.style}
    >
      <span>{children}</span>
      <ArrowRight className="h-4 w-4" strokeWidth={1.8} />
    </AppLink>
  )
}
