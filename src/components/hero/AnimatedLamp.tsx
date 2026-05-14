import { motion, useReducedMotion } from 'framer-motion'

type AnimatedLampProps = {
  lampOn: boolean
}

export function AnimatedLamp({ lampOn }: AnimatedLampProps) {
  const prefersReducedMotion = useReducedMotion()

  return (
    <div className="relative flex items-center justify-center">
      {/* ===== AMBIENT GLOW (Originates from shade) ===== */}
      <motion.div
        className="absolute pointer-events-none"
        style={{
          width: 600,
          height: 600,
          background:
            'radial-gradient(circle, rgba(255, 211, 107, 0.2) 0%, rgba(255, 232, 176, 0.08) 40%, transparent 70%)',
          filter: 'blur(40px)',
          top: '-10%',
          left: '50%',
          transform: 'translateX(-50%)',
          opacity: lampOn ? 1 : 0,
          scale: lampOn ? 1.2 : 0.8,
        }}
      />

      <motion.div
        className="absolute pointer-events-none"
        style={{
          width: 400,
          height: 400,
          background:
            'radial-gradient(circle, rgba(255, 244, 218, 0.4) 0%, rgba(255, 211, 107, 0.15) 50%, transparent 70%)',
          filter: 'blur(20px)',
          top: '0%',
          left: '50%',
          transform: 'translateX(-50%)',
          opacity: lampOn ? 1 : 0,
          scale: lampOn ? 1 : 0.6,
        }}
      />

      {/* ===== LAMP CONTAINER ===== */}
      <motion.div
        className="relative z-10"
        animate={
          prefersReducedMotion || !lampOn
            ? {}
            : {
                y: [0, -3, 0],
              }
        }
        transition={
          prefersReducedMotion
            ? {}
            : {
                duration: 3.2,
                repeat: Infinity,
                ease: 'easeInOut',
              }
        }
      >
        <svg
          viewBox="0 0 300 450"
          className="w-64 h-auto sm:w-72 md:w-80 lg:w-96"
          style={{ filter: lampOn ? 'drop-shadow(0px 20px 30px rgba(255, 211, 107, 0.15))' : 'drop-shadow(0px 10px 20px rgba(0, 0, 0, 0.5))' }}
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Shade Glow Gradient ON */}
            <radialGradient id="shadeGlowON" cx="50%" cy="80%" r="90%">
              <stop offset="0%" stopColor="#fff4da" />
              <stop offset="30%" stopColor="#ffe8b0" />
              <stop offset="70%" stopColor="#ffd36b" />
              <stop offset="100%" stopColor="#f5b927" />
            </radialGradient>

            {/* Shade Gradient OFF */}
            <linearGradient id="shadeGlowOFF" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#2c2825" />
              <stop offset="100%" stopColor="#1a1816" />
            </linearGradient>

            {/* Ceramic Base Gradient ON */}
            <linearGradient id="baseGradientON" x1="20%" y1="0%" x2="80%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="50%" stopColor="#f5efe6" />
              <stop offset="100%" stopColor="#e0d7c6" />
            </linearGradient>

            {/* Ceramic Base Gradient OFF */}
            <linearGradient id="baseGradientOFF" x1="20%" y1="0%" x2="80%" y2="100%">
              <stop offset="0%" stopColor="#1a1a1a" />
              <stop offset="50%" stopColor="#111111" />
              <stop offset="100%" stopColor="#050505" />
            </linearGradient>
            
            {/* Base Highlight ON */}
            <radialGradient id="baseHighlightON" cx="50%" cy="20%" r="50%">
              <stop offset="0%" stopColor="rgba(255, 244, 218, 0.8)" />
              <stop offset="100%" stopColor="rgba(255, 244, 218, 0)" />
            </radialGradient>
            
            {/* Base Highlight OFF */}
            <radialGradient id="baseHighlightOFF" cx="50%" cy="20%" r="50%">
              <stop offset="0%" stopColor="rgba(255, 255, 255, 0.05)" />
              <stop offset="100%" stopColor="rgba(255, 255, 255, 0)" />
            </radialGradient>

            {/* Inner Shade Shadow */}
            <linearGradient id="innerShadeShadow" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="rgba(0,0,0,0.1)" />
              <stop offset="100%" stopColor="rgba(0,0,0,0)" />
            </linearGradient>
          </defs>

          {/* ===== CONNECTOR / NECK ===== */}
          <rect
            x="142"
            y="235"
            width="16"
            height="25"
            rx="4"
            fill={lampOn ? '#e6d5b8' : '#141414'}
            stroke={lampOn ? 'rgba(255, 211, 107, 0.4)' : 'rgba(255, 255, 255, 0.05)'}
            strokeWidth="0.5"
          />

          {/* ===== CERAMIC BASE ===== */}
          {/* Main Base Body - Bulbous Vase Shape */}
          <path
            d="M 125 250 C 125 290, 80 340, 80 390 C 80 430, 110 440, 150 440 C 190 440, 220 430, 220 390 C 220 340, 175 290, 175 250 Z"
            fill={lampOn ? 'url(#baseGradientON)' : 'url(#baseGradientOFF)'}
            stroke={lampOn ? 'rgba(255, 255, 255, 0.8)' : 'rgba(255, 255, 255, 0.05)'}
            strokeWidth={lampOn ? 1 : 0.5}
          />
          
          {/* Base Reflection/Highlight to make it look like glossy ceramic */}
          <path
            d="M 125 250 C 125 290, 80 340, 80 390 C 80 430, 110 440, 150 440 C 190 440, 220 430, 220 390 C 220 340, 175 290, 175 250 Z"
            fill={lampOn ? 'url(#baseHighlightON)' : 'url(#baseHighlightOFF)'}
            opacity={lampOn ? 1 : 0.2}
            style={{ mixBlendMode: lampOn ? 'screen' : 'normal' }}
          />

          {/* ===== FABRIC LAMPSHADE ===== */}
          {/* Main Shade Body - Tapered */}
          <path
            d="M 90 40 L 210 40 L 260 240 L 40 240 Z"
            fill={lampOn ? 'url(#shadeGlowON)' : 'url(#shadeGlowOFF)'}
            stroke={lampOn ? 'rgba(255, 244, 218, 0.8)' : 'rgba(255, 255, 255, 0.08)'}
            strokeWidth={lampOn ? 1.5 : 0.5}
          />
          
          {/* Shade Bottom Inner Glow (when ON, to show light bleeding through fabric) */}
          <path
            d="M 40 240 C 110 255, 190 255, 260 240 C 190 245, 110 245, 40 240 Z"
            fill={lampOn ? 'rgba(255, 255, 255, 0.6)' : 'rgba(0,0,0,0)'}
          />

          {/* Top Opening Rim */}
          <ellipse
            cx="150"
            cy="40"
            rx="60"
            ry="12"
            fill={lampOn ? 'rgba(255, 250, 241, 0.9)' : '#23201d'}
            stroke={lampOn ? 'rgba(255, 255, 255, 0.9)' : 'rgba(255, 255, 255, 0.08)'}
            strokeWidth={lampOn ? 1 : 0.5}
          />
          
          {/* Intense Inner Top Glow (Light escaping top) */}
          <ellipse
            cx="150"
            cy="40"
            rx="50"
            ry="8"
            fill={lampOn ? '#ffffff' : 'transparent'}
            filter={lampOn ? 'blur(6px)' : 'blur(0px)'}
          />
          
          {/* Inner Shade Shadow for Depth at Top Rim */}
          <path d="M 90 40 C 90 48, 150 55, 210 40 C 150 48, 90 48, 90 40 Z" fill="url(#innerShadeShadow)" opacity="0.5" />

        </svg>
      </motion.div>
    </div>
  )
}
