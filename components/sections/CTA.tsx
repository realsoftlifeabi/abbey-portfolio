'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Rocket, Mail, MessageCircle } from 'lucide-react';
import { fadeInUp } from '@/lib/motion-variants';
import { getContactConfig, isUpwork } from '@/lib/contact-config';

export function CTA() {
  const config = getContactConfig();
  return (
    <section
      id="contact"
      className="py-24 bg-gradient-to-br from-liftoff-blue/10 via-background to-liftoff-orange/10"
    >
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-liftoff-blue to-liftoff-orange mb-6">
            <Rocket className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Let&apos;s Build Something Great
          </h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            Have a project in mind? Let&apos;s chat. I&apos;ll review your goals, identify
            opportunities, and help you find the best path forward.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            {isUpwork() ? (
              <Button
                asChild
                size="lg"
                className="bg-liftoff-blue hover:bg-liftoff-blue/90 text-white px-8 py-6 text-lg rounded-full shadow-lg"
              >
                <Link href={config.upworkProfileUrl || '#'} target="_blank">
                  View on Upwork
                </Link>
              </Button>
            ) : (
              <>
                <Button
                  asChild
                  size="lg"
                  className="bg-liftoff-blue hover:bg-liftoff-blue/90 text-white px-8 py-6 text-lg rounded-full shadow-lg"
                >
                  <Link href="https://wa.me/2348091565803" target="_blank">
                    <MessageCircle className="w-5 h-5 mr-2" />
                    WhatsApp Me
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-2 border-liftoff-blue text-liftoff-blue dark:text-white hover:bg-liftoff-blue/10 px-8 py-6 text-lg rounded-full"
                >
                  <Link href="mailto:assistant.abbey@gmail.com">
                    <Mail className="w-5 h-5 mr-2" />
                    Email Me
                  </Link>
                </Button>
              </>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            <div className="p-6 rounded-xl bg-card border border-border">
              <h3 className="font-semibold text-foreground mb-2">Fast Response</h3>
              <p className="text-sm text-muted-foreground">
                Typically reply within 4 hours during business hours (WAT).
              </p>
            </div>
            <div className="p-6 rounded-xl bg-card border border-border">
              <h3 className="font-semibold text-foreground mb-2">No Pressure</h3>
              <p className="text-sm text-muted-foreground">
                Free audit with zero obligation. Just actionable insights.
              </p>
            </div>
            <div className="p-6 rounded-xl bg-card border border-border">
              <h3 className="font-semibold text-foreground mb-2">Flexible Payment</h3>
              <p className="text-sm text-muted-foreground">
                50% upfront, 50% on delivery. NGN or USD accepted.
              </p>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-border">
            <p className="text-sm text-muted-foreground">
              Based in Nigeria, serving founders globally. Available for remote collaboration.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
