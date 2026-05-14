import { cn } from '../../lib/cn'
import { AppLink } from './AppLink'

type CategoryPillProps = {
  active?: boolean
  asButton?: boolean
  className?: string
  href?: string
  label: string
  onClick?: () => void
}

export function CategoryPill({
  active = false,
  asButton = false,
  className,
  href = '/shop',
  label,
  onClick,
}: CategoryPillProps) {
  const sharedClassName = cn(
    'lumora-theme-transition inline-flex items-center justify-center rounded-full border px-4 py-2 text-[11px] uppercase tracking-[0.28em]',
    className,
  )
  const sharedStyle = {
    backgroundColor: active ? 'var(--lumora-pill-active-bg)' : 'var(--lumora-pill-bg)',
    borderColor: active ? 'var(--lumora-pill-active-border)' : 'var(--lumora-border)',
    color: active ? 'var(--lumora-pill-active-text)' : 'var(--lumora-muted)',
    boxShadow: active ? 'var(--lumora-shadow-soft)' : 'none',
  }

  if (asButton) {
    return (
      <button className={sharedClassName} onClick={onClick} style={sharedStyle} type="button">
        {label}
      </button>
    )
  }

  return (
    <AppLink className={sharedClassName} href={href} style={sharedStyle}>
      {label}
    </AppLink>
  )
}
