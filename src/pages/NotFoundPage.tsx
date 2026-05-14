import { ArrowButton } from '../components/common/ArrowButton'
import { EditorialImagePanel } from '../components/common/EditorialImagePanel'
import { SectionHeading } from '../components/common/SectionHeading'

export function NotFoundPage() {
  return (
    <div className="flex min-h-[70vh] items-center pb-20 pt-28 sm:pb-24 sm:pt-32">
      <section className="lumora-container w-full">
        <div className="grid gap-8 lg:grid-cols-[0.88fr_1.12fr] lg:items-center">
          <SectionHeading
            description="The page you are looking for could not be found."
            eyebrow="404"
            title="This room is still dark."
          />
          <EditorialImagePanel
            detail="A restrained error state with a single moody lamp accent instead of a generic dead-end screen."
            eyebrow="Lost In The Glow"
            lampSize="hero"
            size="hero"
            tone="deep"
            variant="table"
          />
        </div>
        <div className="mt-8">
          <ArrowButton href="/">Return Home</ArrowButton>
        </div>
      </section>
    </div>
  )
}
