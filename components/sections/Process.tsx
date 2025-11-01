'use client';

import { motion } from 'framer-motion';
import { Search, Palette, Code, Rocket } from 'lucide-react';
import { staggerContainer, staggerItem } from '@/lib/motion-variants';

export function Process() {
  const steps = [
    {
      id: 1,
      icon: Search,
      title: 'Discovery',
      duration: 'Days 1-2',
      description:
        'Workshop to refine messaging, audit competitors, and map your ideal customer journey.',
      deliverables: ['Positioning brief', 'Competitive analysis', 'Content outline'],
    },
    {
      id: 2,
      icon: Palette,
      title: 'Design',
      duration: 'Days 3-5',
      description:
        'Create conversion-focused layouts, component library, and motion specifications in Figma.',
      deliverables: ['Figma prototypes', 'Component system', 'Animation specs'],
    },
    {
      id: 3,
      icon: Code,
      title: 'Build',
      duration: 'Days 6-7',
      description:
        'Production-grade Next.js implementation with TypeScript, Tailwind, and Framer Motion.',
      deliverables: ['Next.js codebase', 'Responsive build', 'Analytics setup'],
    },
    {
      id: 4,
      icon: Rocket,
      title: 'Launch',
      duration: 'Day 7+',
      description:
        'QA, deployment, and 30-day support with performance monitoring and optimization.',
      deliverables: ['Live deployment', 'Handoff docs', 'Support checklist'],
    },
  ];

  return (
    <section id="process" className="py-24 bg-background">
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
            The LiftOff Process
          </motion.h2>
          <motion.p
            variants={staggerItem}
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            From strategy to launch in 7 days. Transparent, collaborative, and outcome-focused.
          </motion.p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-liftoff-blue via-liftoff-orange to-liftoff-blue transform -translate-x-1/2" />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="space-y-16"
          >
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={step.id}
                  variants={staggerItem}
                  className={`relative flex flex-col md:flex-row items-center gap-8 ${
                    isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Content */}
                  <div className={`flex-1 ${isEven ? 'md:text-right' : 'md:text-left'}`}>
                    <div className="bg-card border border-border rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-sm font-bold text-liftoff-blue">{step.duration}</span>
                      </div>
                      <h3 className="text-2xl font-bold text-foreground mb-3">{step.title}</h3>
                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {step.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {step.deliverables.map((deliverable) => (
                          <span
                            key={deliverable}
                            className="text-xs px-3 py-1 rounded-full bg-muted text-foreground border border-border"
                          >
                            {deliverable}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Icon */}
                  <div className="relative z-10 flex-shrink-0">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-liftoff-blue to-liftoff-orange flex items-center justify-center shadow-lg">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-liftoff-blue text-white text-xs font-bold flex items-center justify-center">
                      {step.id}
                    </div>
                  </div>

                  {/* Spacer for alignment */}
                  <div className="flex-1 hidden md:block" />
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-16"
        >
          <p className="text-muted-foreground mb-4">Ready to start your 7-day sprint?</p>
          <a
            href="#contact"
            className="inline-block px-8 py-3 bg-liftoff-blue hover:bg-liftoff-blue/90 text-white font-medium rounded-full transition-colors"
          >
            Book Your Discovery Call
          </a>
        </motion.div>
      </div>
    </section>
  );
}
