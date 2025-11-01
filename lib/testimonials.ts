export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  quote: string;
  outcome: string;
  image?: string;
  sector: 'fintech' | 'saas' | 'ai' | 'education';
}

export const testimonials: Testimonial[] = [
  {
    id: 'fi-options',
    name: 'Founder',
    role: 'CEO & Co-founder',
    company: 'FI Options',
    quote:
      'Abiodun transformed our multilingual landing page in 7 days. The clarity in messaging and conversion-focused design immediately improved our onboarding flow.',
    outcome: 'Reduced bounce rate by 25% on pricing page',
    sector: 'fintech',
  },
  {
    id: 'fin-sync',
    name: 'Founder',
    role: 'CEO & Co-founder',
    company: 'Fin-Sync',
    quote:
      'The AI dashboard redesign made our product instantly understandable to investors. We went from confusing prototype to investor-ready in one sprint.',
    outcome: 'Increased beta signups by 40%',
    sector: 'ai',
  },
  {
    id: 'portal-apply',
    name: 'Product Lead',
    role: 'Head of Product',
    company: 'Portal Apply',
    quote:
      'Multi-role journey mapping and consistent UI system streamlined our partner onboarding. Course publishing is now 3x faster.',
    outcome: 'Reduced partner approval time by 60%',
    sector: 'saas',
  },
  {
    id: 'design-synchrony',
    name: 'Client',
    role: 'Founder',
    company: 'Design Synchrony',
    quote:
      'Beyond design, Abiodun brings strategic thinking. The landing page redesign positioned us as a premium service provider.',
    outcome: 'Qualified leads increased by 50%',
    sector: 'saas',
  },
];
