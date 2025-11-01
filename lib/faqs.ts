export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: 'sprint' | 'retainer' | 'general';
}

export const faqs: FAQ[] = [
  {
    id: 'sprint-timeline',
    question: 'How does the 7-day sprint work?',
    answer:
      'Days 1–2: Discovery workshop, messaging refinement, competitive audit. Days 3–5: Design & component library in Figma. Days 6–7: Next.js build, QA, and launch prep. You get a production-ready site with analytics and SEO setup.',
    category: 'sprint',
  },
  {
    id: 'sprint-revisions',
    question: 'What if I need revisions after launch?',
    answer:
      'The sprint includes 30 days of post-launch support. We monitor analytics, fix bugs, and make minor copy/design tweaks. Major feature requests are scoped separately.',
    category: 'sprint',
  },
  {
    id: 'sprint-tech',
    question: 'What tech stack do you use?',
    answer:
      'Next.js 14, TypeScript, TailwindCSS, Framer Motion for animations, and Contentlayer for content management. All code is production-grade, fully typed, and ready to scale.',
    category: 'sprint',
  },
  {
    id: 'retainer-scope',
    question: 'What does the Conversion Optimization Retainer include?',
    answer:
      'Bi-weekly CRO experiments (A/B testing CTAs, copy, layouts), heatmap analysis, session recordings, monthly performance reports, and strategic recommendations based on user behavior.',
    category: 'retainer',
  },
  {
    id: 'case-study-timeline',
    question: 'How long does a case study take?',
    answer:
      'Typically 2–3 weeks. We conduct a research interview, write compelling narrative copy, create visuals, and integrate into your portfolio as an MDX page with schema markup.',
    category: 'general',
  },
  {
    id: 'pricing-currency',
    question: 'Do you offer payment plans?',
    answer:
      'Yes. We accept 50% upfront, 50% on delivery for sprints. For retainers, monthly billing is standard. International clients can pay in USD; Nigerian clients in NGN.',
    category: 'general',
  },
  {
    id: 'process-involvement',
    question: 'How involved do I need to be?',
    answer:
      'Minimal but strategic. You attend the discovery workshop (2 hours), provide feedback on design (1 review cycle), and test the live site. We handle the rest.',
    category: 'sprint',
  },
];
