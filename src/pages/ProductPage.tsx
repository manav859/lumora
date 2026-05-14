import { Minus, Plus } from 'lucide-react'
import { useState } from 'react'
import { products } from '../data/siteContent'
import type { Product } from '../types/site'
import { ArrowButton } from '../components/common/ArrowButton'
import { EditorialImagePanel } from '../components/common/EditorialImagePanel'
import { ProductCard } from '../components/common/ProductCard'
import { SectionHeading } from '../components/common/SectionHeading'
import { SurfacePanel } from '../components/common/SurfacePanel'

type ProductPageProps = {
  product: Product
}

export function ProductPage({ product }: ProductPageProps) {
  const [quantity, setQuantity] = useState(1)

  return (
    <div className="pb-20 pt-28 sm:pb-24 sm:pt-32">
      <section className="lumora-container">
        <div className="grid gap-8 lg:grid-cols-[1.08fr_0.92fr] lg:items-start">
          <div className="grid gap-6">
            <EditorialImagePanel
              detail={product.description}
              eyebrow={product.collection}
              lampSize="hero"
              note={product.roomLabel}
              size="hero"
              title={product.name}
              tone="deep"
              variant={product.variant}
            />

            <div className="grid gap-6 sm:grid-cols-2">
              <EditorialImagePanel
                detail="A moodier studio frame for lamp-off state and lower contrast rooms."
                eyebrow="Finish Study"
                lampSize="md"
                size="md"
                tone="split"
                variant={product.variant}
              />
              <EditorialImagePanel
                detail="A warmer in-room preview for lamp-on state and softer evening light."
                eyebrow="In Room"
                lampSize="md"
                size="md"
                tone="warm"
                variant={product.variant}
              />
            </div>
          </div>

          <SurfacePanel className="lg:sticky lg:top-28 p-6 sm:p-8" tone="glass">
            <p className="lumora-label">{product.category}</p>
            <h1 className="mt-5 font-heading text-4xl leading-[0.96] tracking-[-0.03em] sm:text-5xl">
              {product.name}
            </h1>
            <p className="mt-4 text-lg font-medium">{product.price}</p>
            <p className="mt-6 text-base leading-7 text-[var(--lumora-muted)] sm:text-lg">
              {product.description}
            </p>

            <div className="mt-8 grid gap-3">
              {product.materials.map((material) => (
                <div
                  className="rounded-[1.2rem] border px-4 py-3 text-sm text-[var(--lumora-muted)]"
                  key={material}
                  style={{
                    borderColor: 'var(--lumora-border)',
                    backgroundColor: 'var(--lumora-surface-soft)',
                  }}
                >
                  {material}
                </div>
              ))}
            </div>

            <div className="mt-8">
              <p className="lumora-label">Quantity</p>
              <div className="mt-3 inline-flex items-center gap-3 rounded-full border px-3 py-2" style={{ borderColor: 'var(--lumora-border)' }}>
                <button
                  aria-label="Decrease quantity"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border"
                  onClick={() => setQuantity((value) => Math.max(1, value - 1))}
                  style={{ borderColor: 'var(--lumora-border)' }}
                  type="button"
                >
                  <Minus className="h-4 w-4" strokeWidth={1.8} />
                </button>
                <span className="min-w-8 text-center text-sm font-medium">{quantity}</span>
                <button
                  aria-label="Increase quantity"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border"
                  onClick={() => setQuantity((value) => value + 1)}
                  style={{ borderColor: 'var(--lumora-border)' }}
                  type="button"
                >
                  <Plus className="h-4 w-4" strokeWidth={1.8} />
                </button>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
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
                Add to cart
              </button>
              <ArrowButton href="/cart" variant="secondary">
                View Cart
              </ArrowButton>
            </div>

            <p className="mt-6 text-sm leading-7 text-[var(--lumora-muted)]">
              Shopify checkout integration arrives in the next phase. This is a premium frontend
              prototype with placeholder cart flow.
            </p>
          </SurfacePanel>
        </div>
      </section>

      <section className="lumora-container lumora-section">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <SectionHeading
            description={product.moodNote}
            eyebrow="Designed For"
            title="Designed for soft evening atmosphere."
          />
          <EditorialImagePanel
            detail="A supporting editorial module that lets the PDP feel more like a design-brand detail page than a plain storefront template."
            eyebrow="Atmosphere"
            lampSize="hero"
            size="hero"
            tone="warm"
            variant={product.variant}
          />
        </div>
      </section>

      <section className="lumora-container lumora-section">
        <SectionHeading
          description="Additional product context to show how the lamp reads in room-like compositions."
          eyebrow="See It In The Room"
          title="Composed for interior warmth, not just isolated display."
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <EditorialImagePanel
            detail="Living room framing with lower contrast and warmer perimeter light."
            eyebrow="Living Room"
            lampSize="lg"
            size="lg"
            tone="deep"
            variant="floor"
          />
          <EditorialImagePanel
            detail="Bedroom framing with softer surfaces, warmer textures, and a tighter light pool."
            eyebrow="Bedroom"
            lampSize="lg"
            size="lg"
            tone="warm"
            variant="table"
          />
        </div>
      </section>

      <section className="lumora-container pb-20 sm:pb-24">
        <SectionHeading
          description="Related pieces styled with the same premium card system used across the storefront."
          eyebrow="Related Products"
          title="Continue the collection."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {products
            .filter((entry) => entry.slug !== product.slug)
            .slice(0, 3)
            .map((entry) => (
              <ProductCard key={entry.slug} product={entry} />
            ))}
        </div>
      </section>
    </div>
  )
}
