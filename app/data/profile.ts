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
    'Mhel Angelo is a Software Engineer focused on maintainable business systems, scalable fullstack apps, AI-assisted development, and automation.',
  hero: {
    greeting: "Hi, I'm Mhel Angelo",
    title: 'Software engineer for business systems and automation.',
    intro:
      'I build maintainable fullstack applications, dashboards, and internal tools with architecture that can grow with real business workflows.'
  },
  proofPoints: [
    { label: 'Business systems', icon: 'i-lucide-briefcase-business' },
    { label: 'Scalable architecture', icon: 'i-lucide-network' },
    { label: 'AI-assisted development', icon: 'i-lucide-bot' },
    { label: 'Automation-focused tools', icon: 'i-lucide-zap' }
  ],
  homeAbout: {
    title: 'I care about systems that stay understandable after they grow.',
    description:
      'My work is focused on business workflows, maintainable interfaces, clear data flow, reusable modules, and tools that reduce repetitive work.'
  },
  architecture: {
    title: 'Architecture mindset',
    description:
      'I approach projects with maintainability and scalability in mind: modular structure, separation of concerns, reusable components, database-aware design, predictable APIs, and clear ownership between UI, business logic, and data.'
  },
  about: {
    title: "Hello, I'm Mhel.",
    description:
      'I am a software engineer who builds practical fullstack systems, automation tools, and interfaces for business problems. I adapt quickly, use AI agents to speed up development, and focus on solutions that are easier to maintain over time.',
    details: [
      { label: 'Location', value: 'Philippines' },
      { label: 'Focus', value: 'Maintainable fullstack systems, dashboards, automation tools, and business workflow applications.' },
      { label: 'Architecture', value: 'Modular codebases, separation of concerns, reusable components, API design, database-aware design, and scalable project structure.' },
      { label: 'Strong skill', value: 'I adapt quickly and use AI agents to speed up development while solving real business problems.' },
      { label: 'Fun fact', value: 'I like building tools that automate repetitive work so I can spend less time doing the same task twice.' }
    ],
    timeline: [
      { period: '2025 - Present', title: 'Software Engineer, Koda Kollectiv Inc.', description: 'Working in Mandaue City, Cebu on software engineering work focused on practical business needs and maintainable systems.' },
      { period: 'Now', title: 'Building maintainable systems', description: 'Focused on architecture, fullstack workflows, AI-assisted development, automation, and cleaner project presentation.' },
      { period: '2024', title: "EON's SYSTEM", description: 'Built a fullstack business system with dashboard, POS, sales, inventory, employee, and authentication workflows.' },
      { period: 'Earlier', title: 'Learning through practical projects', description: 'Built projects like Lucid, Javascript Projects, and CPSU Library while growing frontend and fullstack skills.' }
    ]
  },
  skillGroups: [
    {
      title: 'Languages',
      icon: 'i-lucide-code-2',
      items: ['Dart', 'JavaScript', 'TypeScript', 'Python', 'PHP']
    },
    {
      title: 'Frameworks',
      icon: 'i-lucide-boxes',
      items: ['Next', 'Nuxt', 'Vue', 'React', 'Flutter', 'NitroJS', 'Express']
    },
    {
      title: 'Tools and platforms',
      icon: 'i-lucide-wrench',
      items: ['Android Studio', 'Git', 'Figma', 'draw.io', 'Codex', 'Claude', 'Supabase', 'Firebase', 'Node.js', 'Tailwind', 'PostgreSQL', 'MySQL', 'NoSQL']
    },
    {
      title: 'Architecture focus',
      icon: 'i-lucide-git-branch',
      items: ['Scalable structure', 'Maintainable codebases', 'Reusable modules', 'Database-aware design', 'API design', 'Business workflow modeling']
    }
  ],
  primarySocials: [
    { label: 'GitHub', value: 'github.com/5kydriven', to: 'https://github.com/5kydriven', icon: 'i-lucide-github' },
    { label: 'LinkedIn', value: 'TODO: Add your LinkedIn profile URL', to: '#', icon: 'i-lucide-linkedin' }
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
