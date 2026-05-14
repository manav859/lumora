import { motion, useReducedMotion } from 'framer-motion'
import { featuredProduct, products } from '../../data/siteContent'
import { useLighting } from '../../context/useLighting'
import { ArrowButton } from '../common/ArrowButton'
import { AppLink } from '../common/AppLink'
import { SurfacePanel } from '../common/SurfacePanel'
import { ReactiveLampAccent } from '../lighting/ReactiveLampAccent'
import { AmbientParticles } from './AmbientParticles'
import { AnimatedLamp } from './AnimatedLamp'

const smoothEase = [0.22, 1, 0.36, 1] as const

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.08,
    },
  },
}

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.42, ease: smoothEase },
  },
}

const fadeScale = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: smoothEase },
  },
}

const previewProducts = [products[0], products[4], products[3]]

export function LampHero() {
  const { lampOn } = useLighting()
  const prefersReducedMotion = useReducedMotion()

  const animationProps = prefersReducedMotion
    ? { initial: { opacity: 1 }, animate: { opacity: 1 } }
    : {}

  return (
    <section
      className="relative min-h-screen overflow-hidden noise-overlay pb-14 pt-28 sm:pb-20 sm:pt-32"
      id="hero"
    >
      <div
        className="absolute inset-0 z-0"
        style={{
          background: lampOn
            ? 'linear-gradient(135deg, #f3e8d8 0%, #f8f1e7 46%, #ead9bf 100%)'
            : 'linear-gradient(140deg, #0c0b0a 0%, #151211 56%, #090807 100%)',
        }}
      />

      <div
        className="absolute z-0 pointer-events-none"
        style={{
          top: '-10%',
          right: '-6%',
          width: '78vw',
          height: '86vh',
          background:
            'radial-gradient(ellipse at center, rgba(255, 214, 132, 0.42) 0%, rgba(255, 240, 210, 0.12) 42%, transparent 72%)',
          filter: 'blur(88px)',
          opacity: lampOn ? 1 : 0,
          transform: `scale(${lampOn ? 1.1 : 0.8})`,
        }}
      />

      <div
        className="absolute z-0 pointer-events-none"
        style={{
          top: '14%',
          left: '-8%',
          width: '48vw',
          height: '68vh',
          background:
            'radial-gradient(ellipse at center, rgba(255, 244, 218, 0.12) 0%, transparent 62%)',
          filter: 'blur(70px)',
          opacity: lampOn ? 1 : 0,
        }}
      />

      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at center, transparent 32%, rgba(0,0,0,0.56) 100%)',
          opacity: lampOn ? 0 : 0.86,
        }}
      />

      <div className="lumora-container relative z-10">
        <div className="grid min-h-[calc(100vh-9rem)] gap-10 lg:grid-cols-[1fr_0.96fr] lg:items-end lg:gap-12">
          <motion.div
            className="flex max-w-[40rem] flex-col justify-center"
            variants={prefersReducedMotion ? undefined : staggerContainer}
            initial={prefersReducedMotion ? 'visible' : 'hidden'}
            animate="visible"
          >
            <motion.p variants={prefersReducedMotion ? undefined : fadeUp} {...animationProps}>
              <span className="lumora-label">Premium sculptural lighting</span>
            </motion.p>

            <motion.div variants={prefersReducedMotion ? undefined : fadeUp} {...animationProps}>
              <p
                className="mt-6 font-body text-[clamp(4.4rem,13vw,8.9rem)] font-light leading-[0.82] tracking-[-0.08em]"
                style={{
                  color: lampOn ? 'rgba(27, 22, 18, 0.9)' : 'rgba(248, 239, 224, 0.94)',
                  textShadow: lampOn ? 'none' : '0 0 42px rgba(255, 191, 90, 0.08)',
                }}
              >
                the glow
              </p>
              <h1
                className="mt-3 max-w-[24rem] font-heading text-[clamp(2.4rem,5vw,4.55rem)] leading-[0.92] tracking-[-0.04em] sm:max-w-[28rem]"
                style={{ color: lampOn ? '#201a15' : 'rgba(255, 247, 234, 0.9)' }}
              >
                designed to shape the room.
              </h1>
            </motion.div>

            <motion.p
              className="mt-6 max-w-xl text-base leading-7 text-[var(--lumora-muted)] sm:text-lg"
              variants={prefersReducedMotion ? undefined : fadeUp}
              {...animationProps}
            >
              Sculptural lamps for modern interiors. Warm pools of light, quieter silhouettes, and
              a more editorial way to shop lighting online.
            </motion.p>

            <motion.div
              className="mt-9 flex flex-col gap-4 sm:flex-row"
              variants={prefersReducedMotion ? undefined : fadeUp}
              {...animationProps}
            >
              <ArrowButton href="/shop">View Collection</ArrowButton>
              <ArrowButton href="/journal" variant="secondary">
                Explore Journal
              </ArrowButton>
            </motion.div>

            <motion.div
              className="mt-10 grid gap-3 sm:grid-cols-3"
              variants={prefersReducedMotion ? undefined : fadeUp}
              {...animationProps}
            >
              {previewProducts.map((product) => (
                <AppLink
                  className="lumora-theme-transition rounded-[1.6rem] border p-3 backdrop-blur-xl hover:-translate-y-0.5"
                  href={`/product/${product.slug}`}
                  key={product.slug}
                  style={{
                    borderColor: 'var(--lumora-border)',
                    backgroundColor: 'var(--lumora-glass)',
                    boxShadow: 'var(--lumora-shadow-soft)',
                  }}
                >
                  <div
                    className="flex min-h-[8.5rem] items-end justify-center rounded-[1.2rem]"
                    style={{
                      background: lampOn
                        ? 'linear-gradient(180deg, rgba(255,250,241,0.18) 0%, rgba(255,241,215,0.1) 100%)'
                        : 'linear-gradient(180deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.02) 100%)',
                    }}
                  >
                    <ReactiveLampAccent size="sm" variant={product.variant} />
                  </div>
                  <p className="mt-4 text-[10px] uppercase tracking-[0.28em] text-[var(--lumora-muted)]">
                    {product.category}
                  </p>
                  <p className="mt-2 font-heading text-xl leading-none">{product.name}</p>
                </AppLink>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            className="relative"
            variants={prefersReducedMotion ? undefined : fadeScale}
            initial={prefersReducedMotion ? 'visible' : 'hidden'}
            animate="visible"
          >
            <SurfacePanel className="relative overflow-hidden p-5 sm:p-7 lg:p-8" tone="glass">
              <div
                className="pointer-events-none absolute left-1/2 top-[10%] h-[46%] w-[62%] -translate-x-1/2 rounded-full blur-3xl"
                style={{
                  background: 'var(--lumora-glow)',
                  opacity: lampOn ? 0.36 : 0.06,
                  transform: `translateX(-50%) scale(${lampOn ? 1.06 : 0.84})`,
                }}
              />
              <div
                className="absolute right-5 top-5 rounded-full border px-3 py-1 text-[10px] uppercase tracking-[0.28em] text-[var(--lumora-muted)]"
                style={{
                  borderColor: 'var(--lumora-border)',
                  backgroundColor: 'var(--lumora-glass)',
                  opacity: lampOn ? 1 : 0.72,
                }}
              >
                {lampOn ? 'Warm ambience active' : 'Showroom mood active'}
              </div>

              <div className="relative z-10 flex min-h-[32rem] items-center justify-center sm:min-h-[38rem]">
                <AnimatedLamp lampOn={lampOn} />
              </div>

              <div className="relative z-10 mt-2">
                <div>
                  <p className="lumora-label">Featured Product</p>
                  <h2 className="mt-3 font-heading text-3xl leading-[0.95] tracking-[-0.03em] sm:text-4xl">
                    {featuredProduct.name}
                  </h2>
                  <div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-[var(--lumora-muted)]">
                    <span>{featuredProduct.price}</span>
                    <span aria-hidden="true">•</span>
                    <span>{featuredProduct.roomLabel}</span>
                  </div>
                </div>
              </div>
            </SurfacePanel>
          </motion.div>
        </div>
      </div>

      <AmbientParticles active={lampOn} />
    </section>
  )
}
