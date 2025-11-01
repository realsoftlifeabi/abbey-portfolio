'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

export const ContactSection = () => (
  <motion.section
    id="contact"
    className="mt-36 text-center px-4 py-8 md:py-16 bg-gray-200"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
  >
    <h2 className="text-3xl md:text-4xl font-semibold mb-4">Let’s Work Together</h2>
    <p className="mb-8 text-muted-foreground max-w-xl mx-auto leading-relaxed">
      Whether it’s a modern web app, intuitive UI, or AI-powered product — I’m here to help bring
      your vision to life.
    </p>
    <div className="flex flex-col md:flex-row justify-center gap-4">
      <Button variant="secondary" asChild size="lg" className="rounded-full px-6 py-4">
        <Link href="https://wa.me/2348091565803" target="_blank">
          WhatsApp Me
        </Link>
      </Button>
      <Button asChild size="lg" className="rounded-full px-6 py-4">
        <Link href="mailto:assistant.abbey@gmail.com">Email Me</Link>
      </Button>
      <Button variant="secondary" asChild size="lg" className="rounded-full px-6 py-4">
        <Link href="https://www.upwork.com/freelancers/~01xxxxxxxxxxxxxxxx">
          View Upwork Profile
        </Link>
      </Button>
    </div>
  </motion.section>
);
