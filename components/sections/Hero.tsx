'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Rocket, Zap, CheckCircle } from 'lucide-react';
import { staggerContainer, staggerItem } from '@/lib/motion-variants';
import { getContactConfig } from '@/lib/contact-config';

export function Hero() {
  const proofChips = [
    'Product Design & Development',
    'SaaS & Fintech Specialist',
    'Founder of LiftOff',
    'Full-Stack Expertise',
  ];

  const config = getContactConfig();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-liftoff-blue/10 via-background to-liftoff-orange/10 dark:from-liftoff-blue/5 dark:to-liftoff-orange/5" />

      {/* Floating Orbs */}
      <motion.div
        className="absolute top-20 left-10 w-72 h-72 bg-liftoff-blue/20 rounded-full blur-3xl"
        animate={{
          x: [0, 50, 0],
          y: [0, 30, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-96 h-96 bg-liftoff-orange/20 rounded-full blur-3xl"
        animate={{
          x: [0, -30, 0],
          y: [0, 50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 text-center">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          {/* Badge */}
          <motion.div variants={staggerItem} className="flex justify-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-liftoff-blue/10 border border-liftoff-blue/20 text-liftoff-blue dark:bg-liftoff-blue/20 dark:border-liftoff-blue/30 dark:text-white">
              <Rocket className="w-4 h-4" />
              <span className="text-sm font-medium">Available for Projects</span>
            </div>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={staggerItem}
            className="text-5xl md:text-7xl font-bold tracking-tight text-foreground leading-tight"
          >
            Hi, I&apos;m {config.upworkProfileName}
            <br />
            <span className="title-gradient">Product Designer & Developer</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={staggerItem}
            className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
          >
            I create conversion-focused digital experiences for startups and SaaS companies. From
            strategy and design to production-grade code, I bring ideas to life with clarity, speed,
            and precision.
          </motion.p>

          {/* Proof Chips */}
          <motion.div variants={staggerItem} className="flex flex-wrap justify-center gap-3 pt-4">
            {proofChips.map((chip) => (
              <div
                key={chip}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted border border-border text-sm font-medium text-foreground"
              >
                <CheckCircle className="w-4 h-4 text-liftoff-blue" />
                {chip}
              </div>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div
            variants={staggerItem}
            className="flex flex-col sm:flex-row gap-4 justify-center pt-8"
          >
            <Button
              asChild
              size="lg"
              className="bg-liftoff-blue hover:bg-liftoff-blue/90 text-white px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all"
            >
              <Link href="#contact">
                <Zap className="w-5 h-5 mr-2" />
                Start a Conversation
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-2 border-liftoff-blue text-liftoff-blue dark:text-white hover:bg-liftoff-blue/10 px-8 py-6 text-lg rounded-full"
            >
              <Link href="/portfolio">View My Work</Link>
            </Button>
          </motion.div>

          {/* Social Proof */}
          <motion.div variants={staggerItem} className="pt-12">
            <p className="text-sm text-muted-foreground mb-4">Worked with teams at</p>
            <div className="flex flex-wrap justify-center gap-8 opacity-60">
              {['FI Options', 'Fin-Sync', 'Portal Apply', 'Design Synchrony'].map((company) => (
                <span key={company} className="text-sm font-medium text-foreground">
                  {company}
                </span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center">
          <div className="w-1 h-3 bg-muted-foreground rounded-full mt-2" />
        </div>
      </motion.div>
    </section>
  );
}
