import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowMark } from '@/components/doodles'
import { PageHeader } from '@/components/page-header'
import { CtaBanner } from '@/components/cta-banner'
import { programs } from '@/lib/data'
import { cn } from '@/lib/utils'

export const metadata: Metadata = {
  title: 'Programs — Beyond the Bell',
  description:
    'Browse extracurricular programs for high schoolers: robotics, debate, service, theater, sports, and student leadership.',
}

const stats = [
  { value: '400+', label: 'Clubs & teams' },
  { value: '30k', label: 'Students matched' },
  { value: '1,200', label: 'Student mentors' },
  { value: '95%', label: 'Would recommend' },
]

export default function ProgramsPage() {
  return (
    <main>
      <PageHeader
        eyebrow="Programs"
        title="Every way to get involved, in one place"
        description="Filterable, honest breakdowns of the clubs, teams, and opportunities at your school — including the real time commitment and what you'll get out of each."
      />

      {/* Stats strip */}
      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <dl className="grid grid-cols-2 gap-6 lg:grid-cols-4">
          {stats.map((s) => (
            <div
              key={s.label}
              className="rounded-2xl border border-foreground bg-background p-6 text-center shadow-hard"
            >
              <dt className="sr-only">{s.label}</dt>
              <dd>
                <span className="block text-4xl font-bold">{s.value}</span>
                <span className="mt-1 block text-sm text-muted-foreground">{s.label}</span>
              </dd>
            </div>
          ))}
        </dl>
      </section>

      {/* Program cards */}
      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {programs.map((p) => {
            const isDark = p.variant === 'dark'
            const isLime = p.variant === 'lime'
            return (
              <article
                key={p.title}
                className={cn(
                  'flex flex-col rounded-3xl border border-foreground p-7 shadow-hard-lg',
                  isDark && 'bg-accent text-accent-foreground',
                  isLime && 'bg-primary text-primary-foreground',
                  p.variant === 'light' && 'bg-card text-card-foreground',
                )}
              >
                <div className="flex items-center justify-between gap-3">
                  <span
                    className={cn(
                      'rounded-full px-3 py-1 text-xs font-semibold',
                      isDark
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-background text-foreground',
                    )}
                  >
                    {p.category}
                  </span>
                  <span className={cn('text-xs', isDark ? 'text-accent-foreground/70' : 'text-foreground/60')}>
                    {p.commitment}
                  </span>
                </div>

                <h2 className="mt-5 text-2xl font-semibold leading-tight">{p.title}</h2>
                <p
                  className={cn(
                    'mt-3 text-sm leading-relaxed',
                    isDark ? 'text-accent-foreground/80' : 'text-foreground/75',
                  )}
                >
                  {p.description}
                </p>

                <ul className="mt-5 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <li
                      key={t}
                      className={cn(
                        'rounded-full border px-3 py-1 text-xs',
                        isDark ? 'border-accent-foreground/30' : 'border-foreground/25',
                      )}
                    >
                      {t}
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contact"
                  className="group mt-6 inline-flex items-center gap-3 text-sm font-medium"
                >
                  <span
                    className={cn(
                      'flex h-9 w-9 items-center justify-center rounded-full',
                      isDark
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-accent text-accent-foreground',
                    )}
                  >
                    <ArrowMark className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                  Join this program
                </Link>
              </article>
            )
          })}
        </div>
      </section>

      <CtaBanner
        title="Not sure which one fits?"
        body="Take the interest quiz and we'll narrow 400+ options down to a handful that actually match you."
        action={{ href: '/contact', label: 'Take the quiz' }}
      />
    </main>
  )
}
