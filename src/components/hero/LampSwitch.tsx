import { motion, useReducedMotion } from 'framer-motion'

type LampSwitchProps = {
  lampOn: boolean
  onToggle: () => void
}

export function LampSwitch({ lampOn, onToggle }: LampSwitchProps) {
  const prefersReducedMotion = useReducedMotion()

  return (
    <div
      className="lumora-theme-transition inline-flex items-center gap-3 rounded-full border px-3 py-2"
      style={{
        borderColor: 'var(--lumora-border)',
        backgroundColor: 'var(--lumora-glass)',
      }}
    >
      <div className="hidden text-left sm:block">
        <p className="text-[9px] uppercase tracking-[0.32em] text-[var(--lumora-muted)]">
          Room Mood
        </p>
        <p className="mt-1 text-[10px] uppercase tracking-[0.24em] text-[var(--lumora-text)]">
          {lampOn ? 'Warm On' : 'Showroom Off'}
        </p>
      </div>

      <button
        aria-label={lampOn ? 'Turn lamp off' : 'Turn lamp on'}
        aria-pressed={lampOn}
        className="group relative flex items-center rounded-full outline-none focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
        onClick={onToggle}
        style={{ width: 76, height: 38 }}
        type="button"
      >
        <motion.div
          animate={{
            backgroundColor: lampOn
              ? 'rgba(255, 191, 90, 0.24)'
              : 'rgba(255, 255, 255, 0.06)',
            borderColor: lampOn
              ? 'rgba(255, 191, 90, 0.48)'
              : 'rgba(255, 255, 255, 0.12)',
            boxShadow: lampOn
              ? '0 0 22px rgba(255, 180, 50, 0.18), inset 0 0 14px rgba(255, 180, 50, 0.12)'
              : '0 0 0 rgba(0,0,0,0)',
          }}
          className="absolute inset-0 rounded-full border"
          transition={{ duration: prefersReducedMotion ? 0 : 0.18, ease: 'easeInOut' }}
        />
        <motion.div
          animate={{
            left: lampOn ? 42 : 4,
            backgroundColor: lampOn ? '#ffbf5a' : 'rgba(255, 255, 255, 0.22)',
            boxShadow: lampOn
              ? '0 0 16px rgba(255, 191, 90, 0.48), 0 4px 12px rgba(0,0,0,0.18)'
              : '0 4px 10px rgba(0,0,0,0.24)',
          }}
          className="absolute rounded-full"
          style={{ width: 30, height: 30, top: 4 }}
          transition={
            prefersReducedMotion
              ? { duration: 0 }
              : { type: 'spring', stiffness: 560, damping: 32 }
          }
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.94 }}
        />
      </button>
    </div>
  )
}
