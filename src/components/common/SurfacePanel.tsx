import type { CSSProperties, ReactNode } from 'react'
import { cn } from '../../lib/cn'

type SurfacePanelProps = {
  children: ReactNode
  className?: string
  style?: CSSProperties
  tone?: 'deep' | 'default' | 'glass' | 'warm'
}

const toneBackgrounds: Record<
  NonNullable<SurfacePanelProps['tone']>,
  { backgroundColor: string; boxShadow: string }
> = {
  default: {
    backgroundColor: 'var(--lumora-surface)',
    boxShadow: 'var(--lumora-shadow-soft)',
  },
  warm: {
    backgroundColor: 'var(--lumora-surface-soft)',
    boxShadow: 'var(--lumora-shadow-soft)',
  },
  deep: {
    backgroundColor: 'var(--lumora-surface-strong)',
    boxShadow: 'var(--lumora-shadow-strong)',
  },
  glass: {
    backgroundColor: 'var(--lumora-glass)',
    boxShadow: 'var(--lumora-shadow-soft)',
  },
}

export function SurfacePanel({
  children,
  className,
  style,
  tone = 'default',
}: SurfacePanelProps) {
  return (
    <div
      className={cn(
        'lumora-theme-transition rounded-[2rem] border backdrop-blur-xl',
        className,
      )}
      style={{
        borderColor: 'var(--lumora-border)',
        ...toneBackgrounds[tone],
        ...style,
      }}
    >
      {children}
    </div>
  )
}
