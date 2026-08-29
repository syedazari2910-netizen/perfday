import type { Metadata } from 'next'
import { PageHeader } from '@/components/page-header'
import { ContactForm } from '@/components/contact-form'
import { Smiley, StarBurst } from '@/components/doodles'

export const metadata: Metadata = {
  title: 'Join a club — Beyond the Bell',
  description:
    'Take the first step: tell us about yourself and get matched with extracurriculars and a student mentor.',
}

const faqs = [
  {
    q: 'Does it cost anything?',
    a: 'No. Beyond the Bell is free for students. We partner with schools and nonprofits to keep it that way.',
  },
  {
    q: 'What grade should I be in?',
    a: 'Any high school grade, 9 through 12. Freshmen especially — the earlier you explore, the better.',
  },
  {
    q: 'What if my school is not listed?',
    a: 'Tell us in the form and we will add it. We can also match you with regional and online opportunities.',
  },
]

export default function ContactPage() {
  return (
    <main>
      <PageHeader
        eyebrow="Join a club"
        title="Let's find your thing"
        description="Tell us a little about yourself and we'll send a personalized shortlist plus a mentor intro within a couple of days."
      />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-3xl border border-foreground bg-card p-6 shadow-hard-lg sm:p-10">
            <ContactForm />
          </div>

          <div className="flex flex-col gap-6">
            <div className="relative overflow-hidden rounded-3xl bg-accent p-8 text-accent-foreground">
              <h2 className="text-2xl font-bold">What happens next</h2>
              <ol className="mt-6 flex flex-col gap-5">
                {[
                  'We review your interests and school.',
                  'You get a shortlist of matched programs.',
                  'A student mentor reaches out to help you start.',
                ].map((step, i) => (
                  <li key={step} className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                      {i + 1}
                    </span>
                    <span className="text-sm leading-relaxed text-accent-foreground/85">{step}</span>
                  </li>
                ))}
              </ol>
              <StarBurst className="pointer-events-none absolute -bottom-4 -right-4 h-24 w-24 text-primary" />
            </div>

            <div className="rounded-3xl border border-foreground bg-primary p-8 text-primary-foreground shadow-hard">
              <Smiley className="h-10 w-10 text-accent" />
              <p className="mt-4 text-lg font-medium leading-relaxed">
                Questions before you start? Email us at{' '}
                <span className="underline">hello@beyondthebell.org</span> and a real student on the
                team will get back to you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold sm:text-4xl">Common questions</h2>
        <dl className="mt-8 grid gap-6 md:grid-cols-3">
          {faqs.map((f) => (
            <div key={f.q} className="rounded-2xl border border-foreground bg-background p-6 shadow-hard">
              <dt className="text-lg font-semibold">{f.q}</dt>
              <dd className="mt-3 text-sm leading-relaxed text-muted-foreground">{f.a}</dd>
            </div>
          ))}
        </dl>
      </section>
    </main>
  )
}
