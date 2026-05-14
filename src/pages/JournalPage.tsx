import { journalArticles } from '../data/siteContent'
import { EditorialImagePanel } from '../components/common/EditorialImagePanel'
import { SectionHeading } from '../components/common/SectionHeading'

export function JournalPage() {
  return (
    <div className="pb-20 pt-28 sm:pb-24 sm:pt-32">
      <section className="lumora-container">
        <SectionHeading
          description="The journal is framed like an editorial design page, with one large lead story and a more refined card grid for the rest."
          eyebrow="Journal"
          title="Interior notes on warmth, mood, and layered lighting."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.08fr_0.92fr]">
          <EditorialImagePanel
            ctaHref={journalArticles[0].href}
            ctaLabel="Read Story"
            detail={journalArticles[0].excerpt}
            eyebrow={journalArticles[0].category}
            lampSize="hero"
            note="Featured article"
            size="hero"
            title={journalArticles[0].title}
            tone="deep"
            variant={journalArticles[0].variant}
          />
          <div className="grid gap-6">
            {journalArticles.slice(1, 3).map((article) => (
              <EditorialImagePanel
                ctaHref={article.href}
                ctaLabel="Read Story"
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

      <section className="lumora-container lumora-section">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {journalArticles.slice(2).map((article, index) => (
            <EditorialImagePanel
              ctaHref={article.href}
              ctaLabel="Read Article"
              detail={article.excerpt}
              eyebrow={article.category}
              key={article.slug}
              lampSize="md"
              size="md"
              title={article.title}
              tone={index % 2 === 0 ? 'warm' : 'deep'}
              variant={article.variant}
            />
          ))}
        </div>
      </section>
    </div>
  )
}
