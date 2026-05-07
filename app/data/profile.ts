export const profile = {
  name: 'Mhel Angelo',
  role: 'Software Engineer',
  location: 'Philippines',
  workLocation: 'Mandaue City, Cebu',
  email: 'tagpuno.cpsu@gmail.com',
  resumePath: '/OJT-resume.pdf',
  heroImage: '/hero-profile.jpg',
  aboutImage: '/about-profile.jpg',
  profileImage: '/hero-profile.jpg',
  seoDescription:
    'Mhel Angelo is a Software Engineer who builds custom software, websites, web apps, mobile apps, and practical tools for client needs.',
  hero: {
    greeting: "Hi, I'm Mhel Angelo",
    title: 'I build custom software, websites, and mobile apps.',
    intro:
      'I help turn ideas, workflows, and client requirements into practical software that is easy to use and ready to grow.'
  },
  proofPoints: [
    { label: 'Custom software', icon: 'i-lucide-boxes' },
    { label: 'Web apps', icon: 'i-lucide-monitor' },
    { label: 'Mobile apps', icon: 'i-lucide-smartphone' },
    { label: 'Backend & databases', icon: 'i-lucide-database' }
  ],
  homeAbout: {
    title: 'I build software around what people actually need.',
    description:
      'My work covers websites, web apps, mobile apps, admin tools, dashboards, and backend systems built from real requirements.'
  },
  architecture: {
    title: 'How I build',
    description:
      'I start by understanding the goal, then shape the screens, data, and features into software that is clear for users, practical for clients, and maintainable as it grows.'
  },
  about: {
    title: "Hello, I'm Mhel.",
    description:
      'I am a software engineer with 2+ years of experience building software through freelance, academic, internship, and professional work. I create custom websites, web apps, mobile apps, and backend features based on what clients and users need.',
    details: [
      { label: 'Location', value: 'Philippines' },
      { label: 'Focus', value: 'Custom software, websites, web apps, mobile apps, dashboards, admin tools, and backend systems.' },
      { label: 'Experience', value: '2+ years building software through freelance work, academic projects, internship work, and professional software engineering.' },
      { label: 'Strong skill', value: 'I adapt quickly, understand client requirements, and turn ideas into working software using the right tools for the job.' },
      { label: 'Fun fact', value: 'I like building tools that save time and make everyday tasks easier to manage.' }
    ],
    timeline: [
      { period: '2025 - Present', title: 'Software Engineer, Koda Kollectiv Inc.', description: 'Mainly focused on mobile app development using Flutter, while also contributing to software work based on client needs.' },
      { period: 'Oct 2024 - Dec 2024', title: 'Web Development Intern, Koda Kollectiv Inc.', description: 'Worked on web development using Next.js, Redux, and Framer Motion, with exposure to Laravel, ERD planning, networking, and custom software requested by clients.' },
      { period: '2022 - Present', title: 'Freelance & Project-Based Developer', description: 'Built freelance and academic projects, often focused on backend work using Firebase, Supabase, NitroJS, Express, and related tools.' }
    ]
  },
  skillGroups: [
    {
      title: 'Frontend and web apps',
      icon: 'i-lucide-monitor',
      items: ['Next.js', 'Nuxt', 'Vue', 'React', 'TypeScript', 'JavaScript', 'Tailwind CSS']
    },
    {
      title: 'Mobile app development',
      icon: 'i-lucide-smartphone',
      items: ['Flutter', 'Dart', 'Android Studio', 'Firebase', 'Supabase']
    },
    {
      title: 'Backend and databases',
      icon: 'i-lucide-database',
      items: ['Node.js', 'Express', 'NitroJS', 'HONO', 'Laravel', 'PHP', 'Python', 'PostgreSQL', 'MySQL', 'NoSQL']
    },
    {
      title: 'Tools I work with',
      icon: 'i-lucide-wrench',
      items: ['Git', 'Figma', 'draw.io', 'Codex', 'Claude', 'Cloudflare', 'Docker', 'Vercel']
    }
  ],
  primarySocials: [
    { label: 'GitHub', value: 'github.com/5kydriven', to: 'https://github.com/5kydriven', icon: 'i-lucide-github' },
    { label: 'LinkedIn', value: 'linkedin.com/in/mhel-angelo-tagpuno-15b6a0275', to: 'https://www.linkedin.com/in/mhel-angelo-tagpuno-15b6a0275/', icon: 'i-lucide-linkedin' }
  ],
  secondarySocials: [
    { label: 'Facebook', value: 'facebook.com/5kydriven', to: 'https://facebook.com/5kydriven', icon: 'i-lucide-facebook' },
    { label: 'Twitter', value: 'twitter.com/5kydriven', to: 'https://twitter.com/5kydriven', icon: 'i-lucide-twitter' },
    { label: 'Instagram', value: 'instagram.com/5kydriven', to: 'https://instagram.com/5kydriven', icon: 'i-lucide-instagram' }
  ]
} as const

export const contactLinks = [
  { label: 'Email', value: profile.email, to: `mailto:${profile.email}`, icon: 'i-lucide-mail' },
  { label: 'Resume', value: 'View resume PDF', to: profile.resumePath, icon: 'i-lucide-file-text' },
  ...profile.primarySocials
] as const
