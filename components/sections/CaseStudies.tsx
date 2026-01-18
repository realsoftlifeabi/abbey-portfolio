'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { Project } from '@/types/project';
import { AnimatedImage } from '@/components/ui/AnimatedImage';
import { staggerContainer, staggerItem } from '@/lib/motion-variants';

interface CaseStudiesProps {
  projects: Project[];
}

export function CaseStudies({ projects }: CaseStudiesProps) {
  const featuredProjects = projects.slice(0, 3);

  return (
    <section className="py-24 bg-background">
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
            Featured Projects
          </motion.h2>
          <motion.p
            variants={staggerItem}
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            From fintech to AI dashboards—transforming complex ideas into intuitive,
            conversion-focused products.
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
        >
          {featuredProjects.map((project) => (
            <motion.div key={project.slug} variants={staggerItem}>
              <Link href={`/portfolio/${project.slug}`} className="block h-full">
                <Card className="h-full hover:shadow-xl transition-all duration-300 border border-border overflow-hidden group flex flex-col">
                  <div className="relative w-full h-48 overflow-hidden bg-muted flex-shrink-0">
                    <AnimatedImage
                      src={`/projects/${project.slug}/images/cover.png`}
                      width={400}
                      height={300}
                      alt={project.metadata.title}
                      className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                      fallbackSrc="/placeholder.svg"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                      <ExternalLink className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  <CardContent className="p-6 flex-1 flex flex-col">
                    {/* <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-liftoff-blue transition-colors">
                      {project.metadata.title}
                    </h3> */}
                    {/* <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3 mb-4 flex-1">
                      {project.metadata.description}
                    </p> */}
                    {project.metadata.outcome && (
                      <div className="flex-shrink-0">
                        <p className="text-sm text-muted-foreground">{project.metadata.outcome}</p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center"
        >
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-2 border-liftoff-blue text-liftoff-blue dark:text-white hover:bg-liftoff-blue/10"
          >
            <Link href="/portfolio">
              View All Case Studies
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
