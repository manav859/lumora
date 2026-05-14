import { Plus } from 'lucide-react'
import type { Product } from '../../types/site'
import { ArrowButton } from './ArrowButton'
import { EditorialImagePanel } from './EditorialImagePanel'
import { SurfacePanel } from './SurfacePanel'

type ProductCardProps = {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <SurfacePanel className="flex h-full flex-col gap-5 p-4 sm:p-5" tone="glass">
      <EditorialImagePanel
        className="rounded-[1.6rem]"
        ctaHref={`/product/${product.slug}`}
        ctaLabel="View Product"
        detail={product.description}
        eyebrow={product.category}
        lampSize="md"
        note={product.collection}
        size="sm"
        tone="deep"
        variant={product.variant}
      />

      <div className="flex flex-1 flex-col">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-sm text-[var(--lumora-muted)]">{product.collection}</p>
            <h3 className="mt-2 font-heading text-2xl leading-tight">{product.name}</h3>
          </div>
          <span className="shrink-0 text-sm font-medium uppercase tracking-[0.18em]">
            {product.price}
          </span>
        </div>

        <p className="mt-4 text-sm leading-7 text-[var(--lumora-muted)] sm:text-base">
          {product.moodNote}
        </p>

        <div className="mt-6 flex items-center justify-between gap-4">
          <ArrowButton href={`/product/${product.slug}`} variant="inline">
            View Product
          </ArrowButton>
          <button
            className="lumora-theme-transition inline-flex items-center gap-2 rounded-full border px-4 py-2 text-[11px] uppercase tracking-[0.24em]"
            style={{
              borderColor: 'var(--lumora-border)',
              color: 'var(--lumora-text)',
              backgroundColor: 'transparent',
            }}
            type="button"
          >
            <Plus className="h-4 w-4" strokeWidth={1.8} />
            Add to cart
          </button>
        </div>
      </div>
    </SurfacePanel>
  )
}
