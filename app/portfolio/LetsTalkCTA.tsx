import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

export const LetsTalkCTA = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
    className="relative py-20 text-center space-y-8 px-6 overflow-hidden rounded-3xl border border-border/20 backdrop-blur-sm"
  >
    {/* Enhanced gradient background with more vibrant colors */}
    <div className="absolute inset-0 bg-gradient-to-br from-[--liftoff-blue]/15 via-[--liftoff-orange]/10 to-[--liftoff-slate]/20" />
    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[--liftoff-orange]/5 to-transparent" />
    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/40 to-background/60 backdrop-blur-sm" />

    {/* Decorative elements */}
    <div className="absolute top-10 left-10 w-32 h-32 bg-[--liftoff-blue]/20 rounded-full blur-3xl" />
    <div className="absolute bottom-10 right-10 w-40 h-40 bg-[--liftoff-orange]/20 rounded-full blur-3xl" />
    <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-[--liftoff-slate-light]/30 rounded-full blur-2xl" />

    {/* Content */}
    <div className="relative z-10 max-w-4xl mx-auto">
      <h2 className="text-4xl md:text-5xl font-bold mb-6 header-gradient dark:from-white dark:via-white/90 dark:to-white">
        Ready to Build Something Amazing?
      </h2>
      <p className="text-xl text-muted-foreground dark:text-white/80 mb-8 leading-relaxed max-w-2xl mx-auto">
        Whether it&apos;s a modern web app, intuitive UI, or AI-powered product, let&apos;s
        collaborate to bring your vision to life
      </p>
      <Button
        variant="liftoff"
        size="lg"
        className="shadow-lg shadow-blue-600/25 hover:shadow-xl hover:shadow-orange-500/30 transition-all duration-300"
        asChild
      >
        <Link href="#contact">Let&apos;s Talk</Link>
      </Button>
    </div>
  </motion.div>
);
