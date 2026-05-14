import { useMemo, useState } from 'react'
import { products } from '../data/siteContent'
import { CategoryPill } from '../components/common/CategoryPill'
import { EditorialImagePanel } from '../components/common/EditorialImagePanel'
import { ProductCard } from '../components/common/ProductCard'
import { SectionHeading } from '../components/common/SectionHeading'
import type { LampVariant } from '../types/site'

const filters: Array<{ label: string; value: 'all' | LampVariant }> = [
  { label: 'all', value: 'all' },
  { label: 'table', value: 'table' },
  { label: 'floor', value: 'floor' },
  { label: 'pendant', value: 'pendant' },
  { label: 'wall', value: 'sconce' },
  { label: 'orb', value: 'orb' },
]

export function ShopPage() {
  const [activeFilter, setActiveFilter] = useState<'all' | LampVariant>('all')

  const visibleProducts = useMemo(() => {
    if (activeFilter === 'all') {
      return products
    }

    return products.filter((product) => product.variant === activeFilter)
  }, [activeFilter])

  return (
    <div className="pb-20 pt-28 sm:pb-24 sm:pt-32">
      <section className="lumora-container">
        <SectionHeading
          description="A premium catalog layout with refined spacing, filter pills, and product cards that feel more like collected objects than utility tiles."
          eyebrow="Shop"
          title="A catalog composed for quieter rooms and warmer corners."
        />

        <div className="mt-8 flex flex-wrap gap-3">
          {filters.map((filter) => (
            <CategoryPill
              active={activeFilter === filter.value}
              asButton
              key={filter.label}
              label={filter.label}
              onClick={() => setActiveFilter(filter.value)}
            />
          ))}
        </div>

        <div className="mt-10">
          <EditorialImagePanel
            ctaHref="/product/soft-fold-pendant"
            ctaLabel="View Pendant"
            detail="A stronger catalog lead-in with a large editorial panel instead of a plain page header and grid."
            eyebrow="Seasonal Highlight"
            lampSize="hero"
            note="Soft Fold Pendant"
            size="hero"
            title="Designed to hang softly above conversation."
            tone="split"
            variant="pendant"
          />
        </div>
      </section>

      <section className="lumora-container lumora-section">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {visibleProducts.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </section>
    </div>
  )
}
