import { MapPin, Mail, Phone } from 'lucide-react'
import { EditorialImagePanel } from '../components/common/EditorialImagePanel'
import { SectionHeading } from '../components/common/SectionHeading'
import { SurfacePanel } from '../components/common/SurfacePanel'

export function ContactPage() {
  return (
    <div className="pb-20 pt-28 sm:pb-24 sm:pt-32">
      <section className="lumora-container">
        <SectionHeading
          description="An elegant contact layout with better spacing, accessible form structure, and a warm decorative lamp visual."
          eyebrow="Contact"
          title="Trade, styling, and studio conversations start here."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.02fr_0.98fr]">
          <SurfacePanel className="p-6 sm:p-8 lg:p-10" tone="glass">
            <form className="grid gap-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="grid gap-2 text-sm">
                  <span className="text-[var(--lumora-muted)]">Name</span>
                  <input
                    className="rounded-[1rem] border px-4 py-3 outline-none"
                    style={{
                      borderColor: 'var(--lumora-border)',
                      backgroundColor: 'var(--lumora-surface-soft)',
                      color: 'var(--lumora-text)',
                    }}
                    name="name"
                    type="text"
                  />
                </label>
                <label className="grid gap-2 text-sm">
                  <span className="text-[var(--lumora-muted)]">Email</span>
                  <input
                    className="rounded-[1rem] border px-4 py-3 outline-none"
                    style={{
                      borderColor: 'var(--lumora-border)',
                      backgroundColor: 'var(--lumora-surface-soft)',
                      color: 'var(--lumora-text)',
                    }}
                    name="email"
                    type="email"
                  />
                </label>
              </div>

              <label className="grid gap-2 text-sm">
                <span className="text-[var(--lumora-muted)]">Subject</span>
                <input
                  className="rounded-[1rem] border px-4 py-3 outline-none"
                  style={{
                    borderColor: 'var(--lumora-border)',
                    backgroundColor: 'var(--lumora-surface-soft)',
                    color: 'var(--lumora-text)',
                  }}
                  name="subject"
                  type="text"
                />
              </label>

              <label className="grid gap-2 text-sm">
                <span className="text-[var(--lumora-muted)]">Message</span>
                <textarea
                  className="min-h-40 rounded-[1rem] border px-4 py-3 outline-none"
                  name="message"
                  style={{
                    borderColor: 'var(--lumora-border)',
                    backgroundColor: 'var(--lumora-surface-soft)',
                    color: 'var(--lumora-text)',
                  }}
                />
              </label>

              <button
                className="lumora-theme-transition mt-2 rounded-full border px-6 py-3 text-[11px] font-medium uppercase tracking-[0.28em]"
                style={{
                  backgroundColor: 'var(--lumora-button-bg)',
                  borderColor: 'var(--lumora-button-border)',
                  color: 'var(--lumora-button-text)',
                  boxShadow: 'var(--lumora-shadow-soft)',
                }}
                type="button"
              >
                Send Inquiry
              </button>
            </form>
          </SurfacePanel>

          <div className="grid gap-6">
            <EditorialImagePanel
              detail="A warmer visual block that keeps the page branded instead of feeling like a plain contact form."
              eyebrow="Studio"
              lampSize="hero"
              note="By appointment"
              size="lg"
              title="Lighting consultations for homes, hospitality, and collected interiors."
              tone="warm"
              variant="table"
            />
            <SurfacePanel className="p-6 sm:p-7" tone="deep">
              <div className="grid gap-4 text-sm text-[var(--lumora-muted)]">
                <div className="flex items-start gap-3">
                  <MapPin className="mt-1 h-4 w-4 shrink-0 text-[var(--lumora-gold)]" />
                  <p>Studio 14, Civil Lines, Jaipur. Visits by appointment.</p>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="mt-1 h-4 w-4 shrink-0 text-[var(--lumora-gold)]" />
                  <p>hello@lumora-studio.com</p>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="mt-1 h-4 w-4 shrink-0 text-[var(--lumora-gold)]" />
                  <p>+91 98765 43210</p>
                </div>
              </div>
            </SurfacePanel>
          </div>
        </div>
      </section>
    </div>
  )
}
