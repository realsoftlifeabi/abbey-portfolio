'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export const ContactSection = () => (
  <motion.section
    id="contact"
    className="relative overflow-hidden"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
  >
    {/* Dark gradient background */}
    <div className="absolute inset-0 bg-gradient-to-br from-[--liftoff-slate]/30 via-[--liftoff-blue]/20 to-[--liftoff-orange]/20" />
    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/95 to-background/90" />

    {/* Subtle animated elements */}
    <motion.div
      className="absolute top-10 left-10 w-32 h-32 bg-[--liftoff-blue]/10 rounded-full blur-3xl"
      animate={{ x: [0, 30, 0], y: [0, 20, 0] }}
      transition={{ duration: 8, repeat: Infinity }}
    />
    <motion.div
      className="absolute bottom-10 right-10 w-40 h-40 bg-[--liftoff-orange]/10 rounded-full blur-3xl"
      animate={{ x: [0, -20, 0], y: [0, -30, 0] }}
      transition={{ duration: 10, repeat: Infinity }}
    />

    <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 md:py-32">
      <div className="text-center mb-16">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[--liftoff-blue] to-[--liftoff-orange] bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          Let&apos;s Build Something Amazing Together
        </motion.h2>
        <motion.p
          className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Whether it&apos;s a modern web app, intuitive UI, or AI-powered product — I&apos;m here to
          help bring your vision to life with clean code and exceptional design.
        </motion.p>
      </div>

      {/* Contact Cards */}
      <motion.div
        className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <Card className="group hover:shadow-lg transition-all duration-300 border-0 bg-card/50 backdrop-blur-sm hover:bg-card/80">
          <CardContent className="p-8 text-center">
            <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-r from-[--liftoff-blue] to-[--liftoff-orange] flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2 text-foreground">WhatsApp</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Direct chat for quick conversations
            </p>
            <Button variant="secondary" size="sm" className="w-full" asChild>
              <Link href="https://wa.me/2348091565803" target="_blank">
                Start Chat
              </Link>
            </Button>
          </CardContent>
        </Card>

        <Card className="group hover:shadow-lg transition-all duration-300 border-0 bg-card/50 backdrop-blur-sm hover:bg-card/80">
          <CardContent className="p-8 text-center">
            <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-r from-[--liftoff-blue] to-[--liftoff-orange] flex items-center justify-center">
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2 text-foreground">Email</h3>
            <p className="text-sm text-muted-foreground mb-4">Detailed project discussions</p>
            <Button variant="secondary" size="sm" className="w-full" asChild>
              <Link href="mailto:assistant.abbey@gmail.com">Send Email</Link>
            </Button>
          </CardContent>
        </Card>

        <Card className="group hover:shadow-lg transition-all duration-300 border-0 bg-card/50 backdrop-blur-sm hover:bg-card/80">
          <CardContent className="p-8 text-center">
            <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-r from-[--liftoff-blue] to-[--liftoff-orange] flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2 text-foreground">Upwork</h3>
            <p className="text-sm text-muted-foreground mb-4">Hire through a trusted platform</p>
            <Button variant="secondary" size="sm" className="w-full" asChild>
              <Link href="https://freelancerprofilenuxt.mesh.prod.platform.usw2.upwork/freelancers/~01db646c42ed34df32?mp_source=share">
                View Profile
              </Link>
            </Button>
          </CardContent>
        </Card>
      </motion.div>

      {/* Bottom CTA */}
      <motion.div
        className="text-center mt-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <p className="text-sm text-muted-foreground mb-6">
          Ready to start your project? Let&apos;s discuss how I can help bring your ideas to life.
        </p>
        <Button variant="liftoff" size="lg" asChild>
          <Link href="https://wa.me/2348091565803" target="_blank">
            Get Started Now
          </Link>
        </Button>
      </motion.div>
    </div>
  </motion.section>
);
