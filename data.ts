export type Mentor = {
  name: string
  role: string
  bio: string
  image: string
}

export const mentors: Mentor[] = [
  {
    name: 'Jamie Rivera',
    role: 'Robotics Team Captain, Grade 12',
    bio: 'Led our FRC team to regionals two years running. I help newcomers find their footing on technical teams without feeling out of their depth.',
    image: '/mentors/mentor-1.png',
  },
  {
    name: 'Aisha Bello',
    role: 'Debate & Model UN, Grade 11',
    bio: 'From terrified of public speaking to varsity debate. If you want to build confidence and argue well, I have got you covered.',
    image: '/mentors/mentor-2.png',
  },
  {
    name: 'Marcus Chen',
    role: 'Volunteer Coordinator, Grade 12',
    bio: 'Logged 400+ service hours across four organizations. I can help you find causes you actually care about and keep it sustainable.',
    image: '/mentors/mentor-3.png',
  },
  {
    name: 'Sofia Nguyen',
    role: 'Theater & Choir, Grade 11',
    bio: 'On stage since freshman year. Whether you want the spotlight or the tech booth, there is a spot for you in the arts.',
    image: '/mentors/mentor-4.png',
  },
]

export type Testimonial = {
  quote: string
  name: string
  detail: string
}

export const testimonials: Testimonial[] = [
  {
    quote:
      'I had no idea what to join as a freshman. The quiz matched me with the coding club and a mentor who walked me through my first meeting. Now I run our app-building group.',
    name: 'Priya S.',
    detail: 'Grade 11 · Riverside High',
  },
  {
    quote:
      'Tracking my volunteer hours in one place saved me during college applications. I exported everything in a click and it looked incredible.',
    name: 'Devin M.',
    detail: 'Grade 12 · Lincoln Prep',
  },
  {
    quote:
      'My parents kept telling me to "get involved" but I did not know where to start. Beyond the Bell made it feel doable instead of overwhelming.',
    name: 'Elena R.',
    detail: 'Grade 10 · Westbrook Academy',
  },
  {
    quote:
      'Meeting a mentor who had done Model UN before was the difference. I would never have signed up on my own.',
    name: 'Tyler K.',
    detail: 'Grade 11 · Grove City High',
  },
]

export type Program = {
  title: string
  category: string
  commitment: string
  description: string
  tags: string[]
  variant: 'light' | 'lime' | 'dark'
}

export const programs: Program[] = [
  {
    title: 'Competitive Robotics',
    category: 'STEM & Robotics',
    commitment: '6–8 hrs / week',
    description:
      'Design, build, and program robots for regional and national competitions. Great for hands-on builders and future engineers.',
    tags: ['Engineering', 'Teamwork', 'Competition'],
    variant: 'lime',
  },
  {
    title: 'Debate & Model UN',
    category: 'Academic',
    commitment: '3–5 hrs / week',
    description:
      'Sharpen your research, writing, and public speaking while representing countries and arguing real-world issues.',
    tags: ['Public speaking', 'Research', 'Travel'],
    variant: 'light',
  },
  {
    title: 'Community Service Corps',
    category: 'Volunteering',
    commitment: 'Flexible',
    description:
      'Join organized volunteering with local nonprofits. Log verified hours and lead your own service projects.',
    tags: ['Service', 'Leadership', 'Hours logged'],
    variant: 'dark',
  },
  {
    title: 'Theater Production',
    category: 'Arts & Music',
    commitment: '4–10 hrs / week',
    description:
      'Act, sing, design sets, or run tech for full-scale productions. Every skill level and interest welcome.',
    tags: ['Performance', 'Design', 'Collaboration'],
    variant: 'light',
  },
  {
    title: 'Varsity & Club Sports',
    category: 'Sports & Fitness',
    commitment: '5–12 hrs / week',
    description:
      'From competitive varsity teams to no-pressure intramurals — find the level of play and community that fits you.',
    tags: ['Fitness', 'Teamwork', 'Discipline'],
    variant: 'lime',
  },
  {
    title: 'Student Government',
    category: 'Leadership',
    commitment: '3–6 hrs / week',
    description:
      'Represent your class, plan events, and shape school policy. Build leadership experience that colleges notice.',
    tags: ['Leadership', 'Events', 'Voice'],
    variant: 'dark',
  },
]

export type Post = {
  title: string
  category: string
  excerpt: string
  readTime: string
  date: string
}

export const posts: Post[] = [
  {
    title: 'How to pick extracurriculars that actually fit you',
    category: 'Getting started',
    excerpt:
      'Forget joining ten clubs to look impressive. Here is how to choose a few activities you will love and stick with.',
    readTime: '5 min read',
    date: 'Mar 4',
  },
  {
    title: 'Quality over quantity: what colleges really look for',
    category: 'Applications',
    excerpt:
      'Admissions officers explain why depth and leadership beat a long, shallow list of memberships.',
    readTime: '7 min read',
    date: 'Feb 26',
  },
  {
    title: 'Balancing activities with grades and sleep',
    category: 'Wellbeing',
    excerpt:
      'A realistic weekly framework for staying involved without burning out before junior year even ends.',
    readTime: '6 min read',
    date: 'Feb 18',
  },
  {
    title: 'Starting your own club from scratch',
    category: 'Leadership',
    excerpt:
      'No club for your interest? Here is the step-by-step for pitching, launching, and growing your own.',
    readTime: '8 min read',
    date: 'Feb 9',
  },
  {
    title: 'Turning volunteer hours into a real story',
    category: 'Service',
    excerpt:
      'How to move from scattered service hours to a focused impact that means something to you and to others.',
    readTime: '5 min read',
    date: 'Jan 30',
  },
  {
    title: 'Freshman year: the get-involved starter guide',
    category: 'Getting started',
    excerpt:
      'The clubs, timelines, and low-stakes ways to explore before you commit to anything big.',
    readTime: '6 min read',
    date: 'Jan 21',
  },
]
