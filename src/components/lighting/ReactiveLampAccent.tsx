import type { LampVariant } from '../../types/site'

type ReactiveLampAccentProps = {
  className?: string
  size?: 'sm' | 'md' | 'lg' | 'hero'
  variant?: LampVariant
}

type LampDimensions = {
  width: number
  height: number
}

const sizeMap: Record<NonNullable<ReactiveLampAccentProps['size']>, LampDimensions> = {
  sm: { width: 84, height: 118 },
  md: { width: 112, height: 156 },
  lg: { width: 150, height: 224 },
  hero: { width: 224, height: 328 },
}

function cn(...values: Array<string | undefined>) {
  return values.filter(Boolean).join(' ')
}

export function ReactiveLampAccent({
  className,
  size = 'md',
  variant = 'table',
}: ReactiveLampAccentProps) {
  const { width, height } = sizeMap[size]

  return (
    <div
      aria-hidden="true"
      className={cn('relative flex items-end justify-center', className)}
      style={{ width, height }}
    >
      <div
        className="lumora-theme-transition absolute left-1/2 rounded-full blur-3xl"
        style={{
          width: width * 0.84,
          height: height * 0.42,
          bottom: height * 0.12,
          background: 'var(--lumora-glow)',
          transform: 'translateX(-50%)',
          opacity: 'var(--lumora-accent-glow-opacity)',
        }}
      />

      <div
        className="lumora-theme-transition absolute inset-x-[18%] bottom-[6%] rounded-full"
        style={{
          height: Math.max(8, height * 0.055),
          backgroundColor: 'rgba(53, 36, 14, 0.12)',
          filter: 'blur(6px)',
          opacity: 'var(--lumora-accent-floor-opacity)',
        }}
      />

      {variant === 'table' && (
        <>
          <div
            className="lumora-theme-transition absolute left-1/2 rounded-t-[44px] rounded-b-[18px]"
            style={{
              top: height * 0.14,
              width: width * 0.58,
              height: height * 0.26,
              backgroundColor: 'var(--lumora-accent-shell)',
              border: '1px solid var(--lumora-accent-edge)',
              boxShadow: 'var(--lumora-accent-shell-shadow)',
              transform: 'translateX(-50%)',
            }}
          />
          <div
            className="absolute left-1/2 rounded-full"
            style={{
              top: height * 0.39,
              width: Math.max(5, width * 0.04),
              height: height * 0.27,
              backgroundColor: 'var(--lumora-accent-stem)',
              transform: 'translateX(-50%)',
            }}
          />
          <div
            className="lumora-theme-transition absolute left-1/2 rounded-full"
            style={{
              top: height * 0.29,
              width: width * 0.28,
              height: height * 0.11,
              background: 'var(--lumora-glow)',
              filter: 'blur(14px)',
              transform: 'translateX(-50%)',
              opacity: 'var(--lumora-accent-glow-opacity)',
            }}
          />
          <div
            className="absolute left-1/2 rounded-full"
            style={{
              bottom: height * 0.11,
              width: width * 0.44,
              height: height * 0.08,
              backgroundColor: 'var(--lumora-accent-stem)',
              transform: 'translateX(-50%)',
            }}
          />
        </>
      )}

      {variant === 'floor' && (
        <>
          <div
            className="lumora-theme-transition absolute left-1/2 rounded-t-[42px] rounded-b-[18px]"
            style={{
              top: height * 0.1,
              width: width * 0.52,
              height: height * 0.18,
              backgroundColor: 'var(--lumora-accent-shell)',
              border: '1px solid var(--lumora-accent-edge)',
              boxShadow: 'var(--lumora-accent-shell-shadow)',
              transform: 'translateX(-50%)',
            }}
          />
          <div
            className="absolute left-1/2 rounded-full"
            style={{
              top: height * 0.27,
              width: Math.max(4, width * 0.03),
              height: height * 0.5,
              backgroundColor: 'var(--lumora-accent-stem)',
              transform: 'translateX(-50%)',
            }}
          />
          <div
            className="lumora-theme-transition absolute left-1/2 rounded-full"
            style={{
              top: height * 0.21,
              width: width * 0.22,
              height: height * 0.09,
              background: 'var(--lumora-glow)',
              filter: 'blur(16px)',
              transform: 'translateX(-50%)',
              opacity: 'var(--lumora-accent-glow-opacity)',
            }}
          />
          <div
            className="absolute left-1/2 rounded-full"
            style={{
              bottom: height * 0.08,
              width: width * 0.48,
              height: height * 0.06,
              backgroundColor: 'var(--lumora-accent-stem)',
              transform: 'translateX(-50%)',
            }}
          />
        </>
      )}

      {variant === 'orb' && (
        <>
          <div
            className="absolute left-1/2 rounded-full"
            style={{
              top: 0,
              width: Math.max(4, width * 0.024),
              height: height * 0.24,
              backgroundColor: 'var(--lumora-accent-stem)',
              transform: 'translateX(-50%)',
            }}
          />
          <div
            className="lumora-theme-transition absolute left-1/2 rounded-full"
            style={{
              top: height * 0.2,
              width: width * 0.42,
              height: width * 0.42,
              backgroundColor: 'var(--lumora-accent-shell)',
              border: '1px solid var(--lumora-accent-edge)',
              boxShadow: 'var(--lumora-accent-shell-shadow)',
              transform: 'translateX(-50%)',
            }}
          />
          <div
            className="lumora-theme-transition absolute left-1/2 rounded-full"
            style={{
              top: height * 0.18,
              width: width * 0.66,
              height: height * 0.4,
              background: 'var(--lumora-glow)',
              filter: 'blur(24px)',
              transform: 'translateX(-50%)',
              opacity: 'var(--lumora-accent-glow-opacity)',
            }}
          />
          <div
            className="absolute left-1/2 rounded-full"
            style={{
              bottom: height * 0.08,
              width: width * 0.38,
              height: height * 0.05,
              backgroundColor: 'var(--lumora-accent-stem)',
              transform: 'translateX(-50%)',
            }}
          />
        </>
      )}

      {variant === 'sconce' && (
        <>
          <div
            className="absolute top-[28%] rounded-full"
            style={{
              left: width * 0.18,
              width: width * 0.16,
              height: Math.max(4, height * 0.028),
              backgroundColor: 'var(--lumora-accent-stem)',
            }}
          />
          <div
            className="lumora-theme-transition absolute rounded-l-[999px] rounded-r-[30px]"
            style={{
              top: height * 0.18,
              left: width * 0.24,
              width: width * 0.42,
              height: height * 0.23,
              backgroundColor: 'var(--lumora-accent-shell)',
              border: '1px solid var(--lumora-accent-edge)',
              boxShadow: 'var(--lumora-accent-shell-shadow)',
            }}
          />
          <div
            className="lumora-theme-transition absolute rounded-full"
            style={{
              top: height * 0.16,
              right: width * 0.12,
              width: width * 0.34,
              height: height * 0.3,
              background: 'var(--lumora-glow)',
              filter: 'blur(22px)',
              opacity: 'var(--lumora-accent-glow-opacity)',
            }}
          />
        </>
      )}

      {variant === 'pendant' && (
        <>
          <div
            className="absolute left-1/2 rounded-full"
            style={{
              top: 0,
              width: Math.max(3, width * 0.02),
              height: height * 0.28,
              backgroundColor: 'var(--lumora-accent-stem)',
              transform: 'translateX(-50%)',
            }}
          />
          <div
            className="lumora-theme-transition absolute left-1/2 rounded-[999px]"
            style={{
              top: height * 0.22,
              width: width * 0.6,
              height: height * 0.22,
              backgroundColor: 'var(--lumora-accent-shell)',
              border: '1px solid var(--lumora-accent-edge)',
              boxShadow: 'var(--lumora-accent-shell-shadow)',
              transform: 'translateX(-50%)',
            }}
          />
          <div
            className="lumora-theme-transition absolute left-1/2 rounded-full"
            style={{
              top: height * 0.28,
              width: width * 0.68,
              height: height * 0.32,
              background: 'var(--lumora-glow)',
              filter: 'blur(22px)',
              transform: 'translateX(-50%)',
              opacity: 'var(--lumora-accent-glow-opacity)',
            }}
          />
          <div
            className="absolute left-1/2 rounded-full"
            style={{
              top: height * 0.24,
              width: Math.max(6, width * 0.08),
              height: Math.max(6, width * 0.08),
              backgroundColor: 'var(--lumora-accent-stem)',
              transform: 'translateX(-50%)',
            }}
          />
        </>
      )}
    </div>
  )
}
