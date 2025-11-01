'use client';

import { motion } from 'framer-motion';
import { Code, Palette, Rocket, Zap } from 'lucide-react';
import { staggerContainer, staggerItem } from '@/lib/motion-variants';

export function About() {
  const expertise = [
    {
      icon: Palette,
      title: 'Product Design',
      description:
        'User-centered design with a focus on conversion and clarity. From wireframes to high-fidelity prototypes.',
    },
    {
      icon: Code,
      title: 'Full-Stack Development',
      description:
        'Production-grade Next.js, React, and TypeScript development. Building scalable, performant web applications.',
    },
    {
      icon: Zap,
      title: 'UX Strategy',
      description:
        'Strategic product thinking, user research, and conversion optimization to drive measurable results.',
    },
    {
      icon: Rocket,
      title: 'Founder of LiftOff',
      description:
        'Created LiftOff, a brand focused on helping startups launch conversion-ready products in record time.',
    },
  ];

  return (
    <section id="about" className="py-24 bg-muted/30">
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
            About Me
          </motion.h2>
          <motion.p
            variants={staggerItem}
            className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
          >
            I&apos;m a product designer and full-stack developer passionate about creating digital
            experiences that combine beautiful design with solid engineering. I specialize in
            helping startups and SaaS companies bring their ideas to life—from initial strategy to
            production-ready code.
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
        >
          {expertise.map((item) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                variants={staggerItem}
                className="p-8 rounded-2xl bg-card border border-border hover:shadow-xl transition-shadow"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-liftoff-blue to-liftoff-orange flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="max-w-3xl mx-auto"
        >
          <div className="p-8 rounded-2xl bg-gradient-to-br from-liftoff-blue/5 to-liftoff-orange/5 border border-border">
            <h3 className="text-2xl font-bold text-foreground mb-4">My Approach</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              I believe great products are born at the intersection of strategy, design, and
              engineering. My process starts with understanding your users and business goals, then
              translates that insight into intuitive designs and robust code.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Whether working independently or with teams, I bring a founder&apos;s mindset—focused
              on outcomes, speed, and sustainable growth. I&apos;ve worked with fintech platforms,
              AI dashboards, SaaS products, and more, always aiming to create experiences that users
              love and businesses can build on.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
