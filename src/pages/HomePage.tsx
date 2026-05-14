import { featuredProduct, homeCategoryPills, homeCollections, journalArticles, products } from '../data/siteContent'
import { ArrowButton } from '../components/common/ArrowButton'
import { CategoryPill } from '../components/common/CategoryPill'
import { EditorialImagePanel } from '../components/common/EditorialImagePanel'
import { ProductCard } from '../components/common/ProductCard'
import { SectionHeading } from '../components/common/SectionHeading'
import { SurfacePanel } from '../components/common/SurfacePanel'
import { LampHero } from '../components/hero/LampHero'
import { ReactiveLampAccent } from '../components/lighting/ReactiveLampAccent'

export function HomePage() {
  return (
    <>
      <LampHero />

      <section className="lumora-container relative -mt-10 pb-12 sm:-mt-14 sm:pb-16">
        <SurfacePanel className="p-5 sm:p-6" tone="glass">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="lumora-label">Collection Strip</p>
              <h2 className="mt-3 font-heading text-3xl leading-none tracking-[-0.04em] sm:text-4xl">
                Curated by room, silhouette, and mood.
              </h2>
            </div>
            <div className="flex flex-wrap gap-3">
              {homeCategoryPills.map((pill, index) => (
                <CategoryPill
                  active={index === 2}
                  href="/shop"
                  key={pill}
                  label={pill}
                />
              ))}
            </div>
          </div>
        </SurfacePanel>
      </section>

      <section className="lumora-container lumora-section" id="collections">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            description="A premium category grid with deeper contrast, more shape, and a layout that feels collected instead of templated."
            eyebrow="Featured Collections"
            title="Lighting categories composed like interior stories."
          />
          <ArrowButton href="/shop" variant="inline">
            View All Collections
          </ArrowButton>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.12fr_0.88fr]">
          <EditorialImagePanel
            ctaHref={homeCollections[0].href}
            ctaLabel="Explore Table Lamps"
            detail={homeCollections[0].description}
            eyebrow={homeCollections[0].note}
            lampSize="hero"
            note="Large feature"
            size="hero"
            title={homeCollections[0].title}
            tone={homeCollections[0].tone}
            variant={homeCollections[0].variant}
          />

          <div className="grid gap-6">
            {homeCollections.slice(1).map((collection) => (
              <EditorialImagePanel
                ctaHref={collection.href}
                ctaLabel={`Explore ${collection.title}`}
                detail={collection.description}
                eyebrow={collection.note}
                key={collection.title}
                lampSize="lg"
                note={collection.size === 'small' ? 'Curated edit' : undefined}
                size="lg"
                title={collection.title}
                tone={collection.tone}
                variant={collection.variant}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="lumora-container lumora-section" id="bestsellers">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            description="Best sellers are presented as curated lighting objects, with stronger visual hierarchy and warmer product staging."
            eyebrow="Best Sellers"
            title="Pieces clients return to for depth, calm, and glow."
          />
          <ArrowButton href="/shop" variant="inline">
            Shop Catalog
          </ArrowButton>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {products.slice(0, 4).map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </section>

      <section className="lumora-container lumora-section" id="perfect-lamp">
        <SurfacePanel className="p-6 sm:p-8 lg:p-10" tone="warm">
          <SectionHeading
            align="center"
            description="A warmer editorial section that breaks the dark rhythm and makes the home page feel more like a design brand than a uniform grid."
            eyebrow="Find The Perfect Lamp"
            title="Designed to settle a room, not compete with it."
          />

          <div className="mt-12 grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <EditorialImagePanel
              ctaHref={`/product/${featuredProduct.slug}`}
              ctaLabel="View Product"
              detail={featuredProduct.description}
              eyebrow="Signature Product"
              lampSize="hero"
              note={featuredProduct.roomLabel}
              size="hero"
              title={featuredProduct.name}
              tone="warm"
              variant={featuredProduct.variant}
            />

            <div>
              <p className="lumora-label">Why it works</p>
              <h3 className="mt-5 font-heading text-4xl leading-[0.96] tracking-[-0.03em] sm:text-5xl">
                Solenne Ceramic Table Lamp
              </h3>
              <p className="mt-4 text-lg font-medium">{featuredProduct.price}</p>
              <p className="mt-6 max-w-xl text-base leading-7 text-[var(--lumora-muted)] sm:text-lg">
                A layered combination of ceramic body, tailored shade, and soft amber pool that
                feels equally at home in an ivory bedroom or a darker living room vignette.
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                {featuredProduct.materials.map((material) => (
                  <div
                    className="rounded-[1.4rem] border px-4 py-4 text-sm leading-7 text-[var(--lumora-muted)]"
                    key={material}
                    style={{
                      borderColor: 'var(--lumora-border)',
                      backgroundColor: 'var(--lumora-glass)',
                    }}
                  >
                    {material}
                  </div>
                ))}
              </div>
              <div className="mt-8 flex flex-wrap gap-4">
                <ArrowButton href={`/product/${featuredProduct.slug}`}>View Product</ArrowButton>
                <ArrowButton href="/shop" variant="secondary">
                  Explore Catalog
                </ArrowButton>
              </div>
            </div>
          </div>
        </SurfacePanel>
      </section>

      <section className="lumora-container lumora-section" id="journal-preview">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            description="The editorial preview now feels like a magazine spread rather than a generic blog row."
            eyebrow="Interior Inspiration"
            title="Stories on atmosphere, material warmth, and calmer rooms."
          />
          <ArrowButton href="/journal" variant="inline">
            Explore Journal
          </ArrowButton>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.08fr_0.92fr]">
          <EditorialImagePanel
            ctaHref={journalArticles[0].href}
            ctaLabel="Read Feature"
            detail={journalArticles[0].excerpt}
            eyebrow={journalArticles[0].category}
            lampSize="hero"
            note="Featured story"
            size="hero"
            title={journalArticles[0].title}
            tone="deep"
            variant={journalArticles[0].variant}
          >
            <div className="absolute bottom-8 right-8 hidden rounded-full border px-4 py-2 text-[10px] uppercase tracking-[0.28em] text-[var(--lumora-muted)] md:block" style={{ borderColor: 'var(--lumora-border)', backgroundColor: 'var(--lumora-glass)' }}>
              Editorial preview
            </div>
          </EditorialImagePanel>

          <div className="grid gap-6">
            {journalArticles.slice(1, 3).map((article) => (
              <EditorialImagePanel
                ctaHref={article.href}
                ctaLabel="Read Article"
                detail={article.excerpt}
                eyebrow={article.category}
                key={article.slug}
                lampSize="lg"
                size="lg"
                title={article.title}
                tone="split"
                variant={article.variant}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="lumora-container pb-20 sm:pb-24">
        <SurfacePanel className="relative overflow-hidden px-6 py-14 sm:px-10 sm:py-16 lg:px-14 lg:py-20" tone="deep">
          <div className="absolute left-6 top-6 hidden sm:block">
            <ReactiveLampAccent size="sm" variant="pendant" />
          </div>
          <div className="absolute bottom-6 right-6 hidden md:block">
            <ReactiveLampAccent size="sm" variant="orb" />
          </div>
          <SectionHeading
            align="center"
            description="A cleaner final conversion area with stronger framing and on-brand lighting accents."
            eyebrow="Final CTA"
            title="Bring the room into focus."
          />
          <div className="mt-8 flex justify-center">
            <ArrowButton href="/shop">Shop Lighting</ArrowButton>
          </div>
        </SurfacePanel>
      </section>
    </>
  )
}
