import { aboutValues } from '../data/siteContent'
import { ArrowButton } from '../components/common/ArrowButton'
import { EditorialImagePanel } from '../components/common/EditorialImagePanel'
import { SectionHeading } from '../components/common/SectionHeading'
import { SurfacePanel } from '../components/common/SurfacePanel'

export function AboutPage() {
  return (
    <div className="pb-20 pt-28 sm:pb-24 sm:pt-32">
      <section className="lumora-container">
        <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          <SectionHeading
            description="LUMORA is positioned like an interior lighting studio: quieter, more material-led, and less generic than a typical ecommerce about page."
            eyebrow="About LUMORA"
            title="Lighting shaped around atmosphere, materiality, and calm."
          />
          <EditorialImagePanel
            detail="A cinematic brand panel that frames the studio story with warmer architecture and stronger contrast."
            eyebrow="Brand Story"
            lampSize="hero"
            note="Editorial brand direction"
            size="hero"
            title="Collected forms for modern interiors."
            tone="deep"
            variant="floor"
          />
        </div>
      </section>

      <section className="lumora-container lumora-section">
        <div className="grid gap-6 lg:grid-cols-2">
          <EditorialImagePanel
            detail="The collection is imagined as a material dialogue between stone, ceramic, linen, and softened metal."
            eyebrow="Material Direction"
            lampSize="hero"
            size="hero"
            tone="warm"
            title="Warm surfaces, low glare, tactile depth."
            variant="table"
          />
          <SurfacePanel className="flex flex-col justify-center p-6 sm:p-8 lg:p-10" tone="glass">
            <p className="lumora-label">Studio Philosophy</p>
            <h2 className="mt-5 font-heading text-4xl leading-[0.96] tracking-[-0.03em] sm:text-5xl">
              We build rooms from light outward.
            </h2>
            <p className="mt-6 text-base leading-7 text-[var(--lumora-muted)] sm:text-lg">
              Instead of pushing brightness or novelty, the brand leans into softer shadows,
              sculptural silhouettes, and a slower luxury that sits comfortably with wood, stone,
              and linen interiors.
            </p>
            <div className="mt-8">
              <ArrowButton href="/journal">Read The Journal</ArrowButton>
            </div>
          </SurfacePanel>
        </div>
      </section>

      <section className="lumora-container pb-20 sm:pb-24">
        <SectionHeading
          description="A values grid that feels branded and editorial instead of generic icon boxes."
          eyebrow="Values"
          title="Four principles behind every LUMORA composition."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {aboutValues.map((value, index) => (
            <SurfacePanel className="p-6 sm:p-7" key={value.title} tone={index % 2 === 0 ? 'glass' : 'warm'}>
              <p className="lumora-label">{value.title}</p>
              <p className="mt-5 font-heading text-3xl leading-none tracking-[-0.03em]">{value.title}</p>
              <p className="mt-4 text-sm leading-7 text-[var(--lumora-muted)] sm:text-base">
                {value.description}
              </p>
            </SurfacePanel>
          ))}
        </div>
      </section>
    </div>
  )
}
