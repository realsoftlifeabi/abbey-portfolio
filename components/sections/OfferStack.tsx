'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Rocket, TrendingUp, FileText, Check } from 'lucide-react';
import { staggerContainer, staggerItem } from '@/lib/motion-variants';
import { isUpwork } from '@/lib/contact-config';

export function OfferStack() {
  if (isUpwork()) {
    return null;
  }
  const offers = [
    {
      id: 'sprint',
      icon: Rocket,
      title: 'Product Design & Development',
      price: '₦750k / $1.2k',
      description:
        'End-to-end product design and development from strategy to launch. Get your SaaS or web app production-ready with Next.js.',
      features: [
        'Discovery workshop & product strategy',
        'Complete UX/UI design system',
        'Production-grade Next.js/React build',
        'Light/dark theme implementation',
        'Analytics & SEO setup',
        '30-day post-launch support',
      ],
      timeline: '1-2 weeks',
      cta: 'Start a Project',
      featured: true,
    },
    {
      id: 'retainer',
      icon: TrendingUp,
      title: 'Design & Development Retainer',
      price: '₦250k / $400/mo',
      description:
        'Ongoing design and development support with continuous improvements, feature development, and optimization.',
      features: [
        'Weekly design & development cycles',
        'Feature development & iterations',
        'Performance & conversion optimization',
        'Monthly progress reports',
        'Strategic product recommendations',
        'Priority support channel',
      ],
      timeline: 'Monthly',
      cta: 'Get Started',
      featured: false,
    },
    {
      id: 'consulting',
      icon: FileText,
      title: 'Product Strategy & Consulting',
      price: '₦180k / $300',
      description:
        'Strategic guidance for your product development, UX audits, and conversion optimization recommendations.',
      features: [
        'Product & UX audit sessions',
        'Strategic roadmap planning',
        'Competitive analysis & insights',
        'Conversion optimization strategy',
        'Design system recommendations',
        'Detailed action plan deliverable',
      ],
      timeline: '1-2 weeks',
      cta: 'Book Consultation',
      featured: false,
    },
  ];

  return (
    <section id="services" className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="text-center mb-16"
        >
          <motion.h2
            variants={staggerItem}
            className="text-4xl md:text-5xl font-bold text-foreground mb-4"
          >
            How I Can Help
          </motion.h2>
          <motion.p
            variants={staggerItem}
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            Flexible engagement models designed for startup speed. Clear scope, transparent pricing,
            and measurable outcomes.
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {offers.map((offer) => {
            const Icon = offer.icon;
            return (
              <motion.div key={offer.id} variants={staggerItem}>
                <Card
                  className={`h-full flex flex-col relative overflow-hidden transition-all hover:shadow-xl ${
                    offer.featured
                      ? 'border-2 border-liftoff-blue shadow-lg scale-105'
                      : 'border border-border'
                  }`}
                >
                  {offer.featured && (
                    <div className="absolute top-0 right-0 bg-liftoff-blue text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                      MOST POPULAR
                    </div>
                  )}
                  <CardHeader className="pb-4">
                    <div
                      className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${
                        offer.featured
                          ? 'bg-liftoff-blue text-white'
                          : 'bg-muted text-muted-foreground'
                      }`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground">{offer.title}</h3>
                    <div className="flex items-baseline gap-2 mt-2">
                      <span className="text-3xl font-bold text-liftoff-blue">{offer.price}</span>
                      <span className="text-sm text-muted-foreground">/ {offer.timeline}</span>
                    </div>
                  </CardHeader>
                  <CardContent className="flex-1 flex flex-col">
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {offer.description}
                    </p>
                    <ul className="space-y-3 mb-8 flex-1">
                      {offer.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2 text-sm">
                          <Check className="w-5 h-5 text-liftoff-blue flex-shrink-0 mt-0.5" />
                          <span className="text-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button
                      asChild
                      className={
                        offer.featured
                          ? 'bg-liftoff-blue hover:bg-liftoff-blue/90 text-white w-full'
                          : 'w-full'
                      }
                      variant={offer.featured ? 'default' : 'outline'}
                    >
                      <Link href="#contact">{offer.cta}</Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>

        {/* FAQ Teaser */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-16"
        >
          <p className="text-muted-foreground mb-4">
            Questions about timeline, tech stack, or pricing?
          </p>
          <Button asChild variant="link" className="text-liftoff-blue dark:text-white">
            <Link href="#faq">View FAQs →</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
