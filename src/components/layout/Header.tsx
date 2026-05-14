import { AnimatePresence, motion } from 'framer-motion'
import { Menu, ShoppingBag, X } from 'lucide-react'
import { useState } from 'react'
import { siteNavigation } from '../../data/siteContent'
import { useLighting } from '../../context/useLighting'
import { cn } from '../../lib/cn'
import { AppLink } from '../common/AppLink'
import { LampSwitch } from '../hero/LampSwitch'

type HeaderProps = {
  pathname: string
}

function isActivePath(currentPath: string, href: string) {
  if (href === '/#collections') {
    return currentPath === '/'
  }

  if (href === '/shop') {
    return currentPath === '/shop' || currentPath.startsWith('/product/')
  }

  return currentPath === href
}

export function Header({ pathname }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false)
  const { lampOn, toggleLamp } = useLighting()

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50">
      <div className="lumora-container pt-4 sm:pt-5">
        <div
          className="pointer-events-auto rounded-full border px-4 py-3 backdrop-blur-2xl sm:px-5"
          style={{
            backgroundColor: 'var(--lumora-glass)',
            borderColor: 'var(--lumora-border)',
            boxShadow: 'var(--lumora-shadow-soft)',
          }}
        >
          <div className="flex items-center justify-between gap-4">
            <AppLink className="flex items-center gap-3" href="/" onClick={() => setMenuOpen(false)}>
              <span
                aria-hidden="true"
                className="block h-9 w-9 rounded-full border"
                style={{
                  borderColor: 'var(--lumora-border)',
                  background:
                    'radial-gradient(circle at 35% 35%, rgba(255,255,255,0.9), rgba(255,191,90,0.4) 45%, rgba(0,0,0,0) 70%)',
                  boxShadow: lampOn ? '0 0 22px var(--lumora-glow)' : 'none',
                }}
              />
              <div>
                <p className="font-heading text-xl tracking-[0.18em]">LUMORA</p>
                <p className="text-[10px] uppercase tracking-[0.32em] text-[var(--lumora-muted)]">
                  sculptural lighting
                </p>
              </div>
            </AppLink>

            <nav className="hidden items-center gap-7 lg:flex">
              {siteNavigation.map((item) => (
                <AppLink
                  aria-current={isActivePath(pathname, item.href) ? 'page' : undefined}
                  className={cn(
                    'lumora-theme-transition text-sm tracking-[0.16em] text-[var(--lumora-muted)]',
                    isActivePath(pathname, item.href) && 'text-[var(--lumora-text)]',
                  )}
                  href={item.href}
                  key={item.href}
                >
                  {item.label}
                </AppLink>
              ))}
            </nav>

            <div className="flex items-center gap-2">
              <div className="hidden md:block">
                <LampSwitch lampOn={lampOn} onToggle={toggleLamp} />
              </div>

              <AppLink
                aria-label="View cart"
                className="lumora-theme-transition inline-flex h-11 w-11 items-center justify-center rounded-full border"
                href="/cart"
                onClick={() => setMenuOpen(false)}
                style={{
                  borderColor: 'var(--lumora-border)',
                  backgroundColor: 'transparent',
                  color: 'var(--lumora-text)',
                }}
              >
                <ShoppingBag className="h-4 w-4" strokeWidth={1.8} />
              </AppLink>

              <button
                aria-expanded={menuOpen}
                aria-label={menuOpen ? 'Close menu' : 'Open menu'}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border lg:hidden"
                onClick={() => setMenuOpen((value) => !value)}
                style={{
                  borderColor: 'var(--lumora-border)',
                  backgroundColor: 'transparent',
                  color: 'var(--lumora-text)',
                }}
                type="button"
              >
                {menuOpen ? (
                  <X className="h-4 w-4" strokeWidth={1.8} />
                ) : (
                  <Menu className="h-4 w-4" strokeWidth={1.8} />
                )}
              </button>
            </div>
          </div>

          <AnimatePresence>
            {menuOpen ? (
              <motion.nav
                animate={{ opacity: 1, y: 0 }}
                className="overflow-hidden lg:hidden"
                exit={{ opacity: 0, y: -8 }}
                initial={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.16, ease: [0.22, 1, 0.36, 1] }}
              >
                <div
                  className="mt-4 rounded-[1.75rem] border p-4"
                  style={{
                    borderColor: 'var(--lumora-border)',
                    backgroundColor: 'var(--lumora-surface)',
                  }}
                >
                  <div
                    className="mb-4 flex justify-center rounded-[1rem] border px-3 py-3"
                    style={{ borderColor: 'var(--lumora-border)' }}
                  >
                    <LampSwitch lampOn={lampOn} onToggle={toggleLamp} />
                  </div>
                  <div className="grid gap-2">
                    {siteNavigation.map((item) => (
                      <AppLink
                        className="rounded-[1rem] px-3 py-3 text-sm tracking-[0.18em] text-[var(--lumora-text)]"
                        href={item.href}
                        key={item.href}
                        onClick={() => setMenuOpen(false)}
                        style={{
                          backgroundColor: isActivePath(pathname, item.href)
                            ? 'var(--lumora-surface-soft)'
                            : 'transparent',
                        }}
                      >
                        {item.label}
                      </AppLink>
                    ))}
                    <AppLink
                      className="rounded-[1rem] px-3 py-3 text-sm tracking-[0.18em] text-[var(--lumora-text)]"
                      href="/cart"
                      onClick={() => setMenuOpen(false)}
                    >
                      cart
                    </AppLink>
                  </div>
                </div>
              </motion.nav>
            ) : null}
          </AnimatePresence>
        </div>
      </div>
    </header>
  )
}
