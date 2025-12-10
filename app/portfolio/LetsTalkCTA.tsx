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
    className="relative py-20 text-center space-y-8 px-6 overflow-hidden"
  >
    {/* Dark gradient background */}
    <div className="absolute inset-0 bg-gradient-to-r from-[--liftoff-slate]/20 via-[--liftoff-blue]/10 to-[--liftoff-orange]/10" />
    <div className="absolute inset-0 bg-gradient-to-br from-background/50 via-background/30 to-background/50 backdrop-blur-sm" />

    {/* Content */}
    <div className="relative z-10 max-w-4xl mx-auto">
      <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-[--liftoff-blue] to-[--liftoff-orange] bg-clip-text text-transparent">
        Ready to Build Something Amazing?
      </h2>
      <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-2xl mx-auto">
        Whether it&apos;s a modern web app, intuitive UI, or AI-powered product, let&apos;s
        collaborate to bring your vision to life
      </p>
      <Button variant="liftoff" size="lg" asChild>
        <Link href="#contact">Let&apos;s Talk</Link>
      </Button>
    </div>
  </motion.div>
);
