import { siteNavigation } from '../../data/siteContent'
import { AppLink } from '../common/AppLink'
import { ArrowButton } from '../common/ArrowButton'
import { ReactiveLampAccent } from '../lighting/ReactiveLampAccent'

export function Footer() {
  return (
    <footer className="border-t border-[var(--lumora-border)]">
      <div className="lumora-container py-16 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.35fr_0.75fr_0.75fr_1fr]">
          <div className="max-w-md">
            <p className="lumora-label">LUMORA</p>
            <h2 className="mt-5 font-heading text-4xl leading-[0.96] tracking-[-0.03em]">
              Warm sculptural light for calmer rooms.
            </h2>
            <p className="mt-5 text-base leading-7 text-[var(--lumora-muted)]">
              A premium storefront prototype built around mood-first lighting, material depth, and
              restrained editorial composition.
            </p>
            <div className="mt-8">
              <ArrowButton href="/shop">Shop Lighting</ArrowButton>
            </div>
          </div>

          <div>
            <p className="lumora-label">Navigate</p>
            <div className="mt-5 grid gap-3">
              {siteNavigation.map((item) => (
                <AppLink
                  className="text-sm tracking-[0.18em] text-[var(--lumora-muted)] transition-colors hover:text-[var(--lumora-text)]"
                  href={item.href}
                  key={item.href}
                >
                  {item.label}
                </AppLink>
              ))}
            </div>
          </div>

          <div>
            <p className="lumora-label">Collections</p>
            <div className="mt-5 grid gap-3">
              {['table lamps', 'floor lamps', 'pendant lighting', 'wall lights'].map((label) => (
                <AppLink
                  className="text-sm tracking-[0.18em] text-[var(--lumora-muted)] transition-colors hover:text-[var(--lumora-text)]"
                  href="/shop"
                  key={label}
                >
                  {label}
                </AppLink>
              ))}
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[2rem] border p-6" style={{ borderColor: 'var(--lumora-border)', backgroundColor: 'var(--lumora-surface-soft)' }}>
            <p className="lumora-label">Studio Note</p>
            <p className="mt-5 max-w-[14rem] text-sm leading-7 text-[var(--lumora-muted)]">
              The global lamp state is already wired. Small decorative lamps across the site respond
              to the hero switch and will carry through to Shopify integration next.
            </p>
            <div className="mt-8 flex justify-end">
              <ReactiveLampAccent size="sm" variant="orb" />
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-[var(--lumora-border)] pt-6 text-sm text-[var(--lumora-muted)] sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 LUMORA. Premium lighting storefront prototype.</p>
          <p>Shopify product, cart, and checkout wiring lands in the next phase.</p>
        </div>
      </div>
    </footer>
  )
}
