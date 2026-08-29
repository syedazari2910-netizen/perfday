import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowMark } from '@/components/doodles'
import { PageHeader } from '@/components/page-header'
import { CtaBanner } from '@/components/cta-banner'
import { posts } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Resources — Beyond the Bell',
  description:
    'Guides and advice for high schoolers on choosing extracurriculars, balancing commitments, and standing out on college applications.',
}

export default function BlogPage() {
  const [featured, ...rest] = posts

  return (
    <main>
      <PageHeader
        eyebrow="Resources"
        title="Guides for getting involved and staying sane"
        description="Practical, no-nonsense advice on choosing activities, balancing your schedule, and turning what you do into a story that stands out."
      />

      {/* Featured post */}
      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <Link
          href="/blog"
          className="group grid overflow-hidden rounded-3xl border border-foreground bg-primary text-primary-foreground shadow-hard-lg lg:grid-cols-2"
        >
          <div className="flex flex-col justify-center p-8 sm:p-12">
            <span className="w-fit rounded-full bg-accent px-3 py-1 text-xs font-semibold text-accent-foreground">
              {featured.category}
            </span>
            <h2 className="mt-5 text-3xl font-bold leading-tight sm:text-4xl">{featured.title}</h2>
            <p className="mt-4 max-w-md leading-relaxed text-primary-foreground/80">
              {featured.excerpt}
            </p>
            <span className="mt-6 flex items-center gap-3 text-sm font-medium">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-accent text-accent-foreground">
                <ArrowMark className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
              Read the guide
            </span>
          </div>
          <div className="flex items-center justify-between gap-4 border-t border-foreground p-8 text-sm sm:p-12 lg:border-l lg:border-t-0">
            <div>
              <p className="text-primary-foreground/60">Featured</p>
              <p className="mt-1 text-lg font-semibold">{featured.date}</p>
            </div>
            <p className="text-primary-foreground/60">{featured.readTime}</p>
          </div>
        </Link>
      </section>

      {/* Post grid */}
      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {rest.map((post) => (
            <Link
              key={post.title}
              href="/blog"
              className="group flex flex-col rounded-3xl border border-foreground bg-card p-7 shadow-hard-lg transition-transform hover:-translate-y-1"
            >
              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <span className="rounded-full bg-background px-3 py-1 font-semibold text-foreground">
                  {post.category}
                </span>
                <span>{post.readTime}</span>
              </div>
              <h3 className="mt-5 text-xl font-semibold leading-tight">{post.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-foreground/75">
                {post.excerpt}
              </p>
              <div className="mt-6 flex items-center justify-between border-t border-foreground/15 pt-4 text-sm">
                <span className="text-muted-foreground">{post.date}</span>
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-accent text-accent-foreground">
                  <ArrowMark className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <CtaBanner
        title="Get one good idea a month"
        body="Join the newsletter for a monthly roundup of opportunities, deadlines, and advice — no spam, ever."
        action={{ href: '/contact', label: 'Subscribe' }}
      />
    </main>
  )
}
