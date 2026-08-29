import type { Metadata } from 'next'
import { PageHeader } from '@/components/page-header'
import { SectionHeading } from '@/components/section-heading'
import { MentorsGrid } from '@/components/mentors-grid'
import { CtaBanner } from '@/components/cta-banner'
import { Smiley, StarBurst, FourStar } from '@/components/doodles'

export const metadata: Metadata = {
  title: 'About — Beyond the Bell',
  description:
    'Why Beyond the Bell exists and how we help high schoolers find meaningful extracurriculars without the overwhelm.',
}

const values = [
  {
    title: 'Depth over checkboxes',
    body: 'We push students toward a few activities they genuinely care about — not a padded list that impresses no one.',
    icon: StarBurst,
    variant: 'lime' as const,
  },
  {
    title: 'Every student belongs',
    body: 'Sports, code, service, or stage — there is a place for every interest and every comfort level. No gatekeeping.',
    icon: Smiley,
    variant: 'dark' as const,
  },
  {
    title: 'Real people, real help',
    body: 'Student mentors who have actually done it guide the first step, so nobody has to figure it out alone.',
    icon: FourStar,
    variant: 'light' as const,
  },
]

export default function AboutPage() {
  return (
    <main>
      <PageHeader
        eyebrow="About us"
        title="We help students find their people"
        description="Beyond the Bell started because getting involved in high school is weirdly hard — too many options, no clear starting point, and a lot of unspoken rules. We fix that."
      />

      {/* Mission */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="grid items-start gap-10 lg:grid-cols-2">
          <SectionHeading tag="Our mission" />
          <div className="space-y-5 text-base leading-relaxed text-muted-foreground">
            <p>
              High school is where you figure out what you love — but the activities that spark that
              often stay invisible. A club meets in a room you never walk past. A team assumes you
              already know someone. A volunteer program lives on a flyer nobody reads.
            </p>
            <p>
              We built Beyond the Bell to make the hidden visible. A two-minute quiz, a personalized
              shortlist, a mentor to walk you in, and a simple way to track what you do — so your time
              outside class turns into skills, friendships, and a story worth telling.
            </p>
            <p className="font-medium text-foreground">
              No pay-to-play, no pressure to do everything. Just a clearer path to the things that
              matter to you.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <SectionHeading
          tag="What we believe"
          description="Three principles guide every match we make and every feature we build."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {values.map((v) => {
            const Icon = v.icon
            const isDark = v.variant === 'dark'
            const isLime = v.variant === 'lime'
            return (
              <article
                key={v.title}
                className={
                  'flex flex-col rounded-3xl border border-foreground p-7 shadow-hard-lg ' +
                  (isDark
                    ? 'bg-accent text-accent-foreground'
                    : isLime
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-card text-card-foreground')
                }
              >
                <span
                  className={
                    'flex h-14 w-14 items-center justify-center rounded-2xl ' +
                    (isDark ? 'bg-primary' : 'bg-accent')
                  }
                >
                  <Icon className={'h-7 w-7 ' + (isDark ? 'text-primary-foreground' : 'text-primary')} />
                </span>
                <h3 className="mt-5 text-xl font-semibold">{v.title}</h3>
                <p
                  className={
                    'mt-3 text-sm leading-relaxed ' +
                    (isDark ? 'text-accent-foreground/80' : 'text-foreground/75')
                  }
                >
                  {v.body}
                </p>
              </article>
            )
          })}
        </div>
      </section>

      {/* Team */}
      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <SectionHeading
          tag="Meet the team"
          description="Students and recent grads who make the matches, run the workshops, and keep it real."
        />
        <div className="mt-12">
          <MentorsGrid />
        </div>
      </section>

      <CtaBanner
        title="Want to mentor other students?"
        body="Upperclassmen and alumni: share what you learned and help the next student find their thing."
        action={{ href: '/contact', label: 'Become a mentor' }}
      />
    </main>
  )
}
