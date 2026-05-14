import { featuredProduct } from '../data/siteContent'
import { ArrowButton } from '../components/common/ArrowButton'
import { EditorialImagePanel } from '../components/common/EditorialImagePanel'
import { SectionHeading } from '../components/common/SectionHeading'
import { SurfacePanel } from '../components/common/SurfacePanel'

export function CartPage() {
  return (
    <div className="pb-20 pt-28 sm:pb-24 sm:pt-32">
      <section className="lumora-container">
        <SectionHeading
          description="A polished placeholder cart keeps the storefront demo credible without introducing Shopify logic yet."
          eyebrow="Cart"
          title="A calmer cart, ready for Shopify wiring next."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.08fr_0.92fr]">
          <SurfacePanel className="p-4 sm:p-5" tone="glass">
            <div className="grid gap-5 md:grid-cols-[0.88fr_1.12fr]">
              <EditorialImagePanel
                detail={featuredProduct.description}
                eyebrow={featuredProduct.collection}
                lampSize="lg"
                note="1 item"
                size="md"
                title={featuredProduct.name}
                tone="deep"
                variant={featuredProduct.variant}
              />
              <div className="flex flex-col justify-between gap-6 p-2 sm:p-4">
                <div>
                  <p className="lumora-label">In Cart</p>
                  <h2 className="mt-4 font-heading text-3xl leading-tight sm:text-4xl">
                    {featuredProduct.name}
                  </h2>
                  <p className="mt-3 text-base text-[var(--lumora-muted)]">{featuredProduct.price}</p>
                  <p className="mt-5 text-sm leading-7 text-[var(--lumora-muted)]">
                    Quantity: 1. Size and checkout logic will be connected when Shopify is brought
                    in during the next implementation phase.
                  </p>
                </div>
                <button
                  className="lumora-theme-transition inline-flex w-fit rounded-full border px-5 py-3 text-[11px] uppercase tracking-[0.28em]"
                  style={{
                    borderColor: 'var(--lumora-border)',
                    color: 'var(--lumora-text)',
                  }}
                  type="button"
                >
                  Update Cart
                </button>
              </div>
            </div>
          </SurfacePanel>

          <SurfacePanel className="p-6 sm:p-8" tone="warm">
            <p className="lumora-label">Summary</p>
            <div className="mt-6 grid gap-4 text-sm text-[var(--lumora-muted)]">
              <div className="flex items-center justify-between">
                <span>Subtotal</span>
                <span>{featuredProduct.price}</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Shipping</span>
                <span>Calculated later</span>
              </div>
              <div className="flex items-center justify-between border-t border-[var(--lumora-border)] pt-4 text-[var(--lumora-text)]">
                <span>Total</span>
                <span>{featuredProduct.price}</span>
              </div>
            </div>

            <div className="mt-8 grid gap-4">
              <button
                className="lumora-theme-transition rounded-full border px-6 py-3 text-[11px] font-medium uppercase tracking-[0.28em]"
                style={{
                  backgroundColor: 'var(--lumora-button-bg)',
                  borderColor: 'var(--lumora-button-border)',
                  color: 'var(--lumora-button-text)',
                  boxShadow: 'var(--lumora-shadow-soft)',
                }}
                type="button"
              >
                Checkout Soon
              </button>
              <ArrowButton href="/shop" variant="secondary">
                Continue Shopping
              </ArrowButton>
            </div>
          </SurfacePanel>
        </div>
      </section>
    </div>
  )
}
