'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Quote } from 'lucide-react';
import { testimonials } from '@/lib/testimonials';
import { staggerContainer, staggerItem } from '@/lib/motion-variants';

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-muted/30">
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
            Client Testimonials
          </motion.h2>
          <motion.p
            variants={staggerItem}
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            Real outcomes from founders and teams I&apos;ve worked with.
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {testimonials.map((testimonial) => (
            <motion.div key={testimonial.id} variants={staggerItem}>
              <Card className="h-full hover:shadow-xl transition-shadow border border-border">
                <CardContent className="p-8">
                  <Quote className="w-10 h-10 text-liftoff-blue mb-4" />
                  <p className="text-foreground leading-relaxed mb-6 text-lg">
                    “{testimonial.quote}”
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <div>
                      <p className="font-semibold text-foreground">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.role}, {testimonial.company}
                      </p>
                    </div>
                    <div className="text-right">
                      <div className="inline-block px-3 py-1 rounded-full bg-liftoff-blue/10 text-liftoff-blue text-xs font-medium">
                        {testimonial.sector}
                      </div>
                    </div>
                  </div>
                  {testimonial.outcome && (
                    <div className="mt-4 p-3 rounded-lg bg-muted border border-border">
                      <p className="text-sm text-foreground">
                        <span className="font-semibold text-liftoff-blue">Outcome:</span>{' '}
                        {testimonial.outcome}
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
