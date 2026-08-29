import Link from 'next/link'
import { Hero } from '@/components/home/hero'
import { Categories } from '@/components/home/categories'
import { Process } from '@/components/home/process'
import { Testimonials } from '@/components/home/testimonials'
import { MentorsGrid } from '@/components/mentors-grid'
import { SectionHeading } from '@/components/section-heading'
import { CtaBanner } from '@/components/cta-banner'

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Categories />
      <Process />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <SectionHeading
          tag="Meet your mentors"
          description="Upperclassmen and alumni who have been there. They help you take the first step, minus the awkwardness."
        />
        <div className="mt-12">
          <MentorsGrid />
        </div>
        <div className="mt-10 flex justify-center">
          <Link
            href="/about"
            className="rounded-xl bg-accent px-8 py-4 text-base font-medium text-accent-foreground transition-transform hover:-translate-y-0.5"
          >
            Meet the whole team
          </Link>
        </div>
      </section>

      <Testimonials />
      <CtaBanner />
    </main>
  )
}
