import { motion, useReducedMotion } from 'framer-motion'
import { useState } from 'react'

type AmbientParticlesProps = {
  active: boolean
}

type Particle = {
  id: number
  x: number
  y: number
  size: number
  delay: number
  duration: number
  drift: number
  opacity: number
}

export function AmbientParticles({ active }: AmbientParticlesProps) {
  const prefersReducedMotion = useReducedMotion()

  const [particles] = useState<Particle[]>(() => {
    return Array.from({ length: 8 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2.5 + 1,
      delay: Math.random() * 3,
      duration: Math.random() * 2.4 + 3.6,
      drift: (Math.random() - 0.5) * 28,
      opacity: Math.random() * 0.16 + 0.08,
    }))
  })

  if (prefersReducedMotion || !active) return null

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
            background: `radial-gradient(circle, rgba(255, 208, 120, ${p.opacity + 0.08}), rgba(255, 168, 70, ${p.opacity}))`,
            boxShadow: `0 0 ${p.size * 3}px rgba(255, 180, 50, ${p.opacity})`,
          }}
          initial={{ opacity: 0, y: 0, x: 0 }}
          animate={{
            opacity: [0, p.opacity, p.opacity * 0.6, 0],
            y: [0, -56 - p.duration * 14, -112 - p.duration * 18],
            x: [0, p.drift * 0.5, p.drift],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            repeatDelay: (p.duration % 2) + 1,
            ease: 'linear',
          }}
        />
      ))}
    </div>
  )
}
