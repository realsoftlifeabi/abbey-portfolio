'use client';

import { HTMLMotionProps, motion } from 'framer-motion';
import { AnimatedImage } from '@/components/ui/AnimatedImage';
import { MDXContent } from '@/components/MDXContent';
import { MDXComponents, Project } from '@/types/project';
import { ImageGallery } from '@/components/ui/ImageGallery';
import PageLayout from '@/components/layouts/Layout';
import { LetsTalkCTA } from '../LetsTalkCTA';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const components: MDXComponents = {
  Image: AnimatedImage,
  h2: (props: HTMLMotionProps<'h2'>) => (
    <motion.h2
      {...props}
      className={`text-3xl font-bold mt-12 mb-6 text-foreground bg-gradient-to-r from-[--liftoff-blue] to-[--liftoff-orange] bg-clip-text text-transparent ${props.className ?? ''}`}
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true }}
    />
  ),
  p: (props: HTMLMotionProps<'p'>) => (
    <motion.p
      {...props}
      className={`text-muted-foreground leading-relaxed my-6 text-lg ${props.className ?? ''}`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    />
  ),
};

export default function Content({ project }: { project: Project }) {
  const meta = project.metadata;

  return (
    <PageLayout>
      <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-[--liftoff-blue]/5 to-[--liftoff-orange]/5" />
          <div className="relative max-w-7xl mx-auto px-6 pt-24 pb-20">
            {meta.coverImage && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="mb-12"
              >
                <AnimatedImage
                  src={`/projects/${project.slug}${meta.coverImage}`}
                  alt={`${meta.title} Cover`}
                  className="rounded-2xl shadow-2xl w-full max-w-5xl mx-auto object-contain"
                  width={1200}
                  height={800}
                />
              </motion.div>
            )}

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center max-w-4xl mx-auto"
            >
              <Badge className="mb-4 px-4 py-2 bg-[--liftoff-blue]/10 text-[--liftoff-blue] border-[--liftoff-blue]/20">
                SaaS Project
              </Badge>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[--liftoff-blue] to-[--liftoff-orange] bg-clip-text text-transparent">
                {meta.title}
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                {meta.description}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Content Sections */}
        <div className="max-w-7xl mx-auto px-6 pb-6 space-y-24">
          {/* Overview Section */}
          {meta.overview && (
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold mb-6 text-foreground">Overview</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">{meta.overview}</p>
              </div>
            </motion.section>
          )}

          {/* Image Gallery */}
          {project.images?.length > 0 && (
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <ImageGallery screenshots={project.images} />
            </motion.section>
          )}

          {/* Key Features Section */}
          {meta.features?.length > 0 && (
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4 text-foreground">Key Features</h2>
                <p className="text-muted-foreground">
                  Powerful capabilities designed for SaaS success
                </p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {meta.features.map((feature, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="h-full hover:shadow-lg transition-all duration-300 border-0 bg-card/50 backdrop-blur-sm hover:bg-card">
                      <CardContent className="p-6 text-center">
                        <div className="text-4xl mb-4">{feature.icon}</div>
                        <h3 className="text-lg font-semibold mb-3 text-foreground">
                          {feature.title}
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {feature.description}
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.section>
          )}

          {/* Technologies Section */}
          {meta.technologies && (
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4 text-foreground">Technology Stack</h2>
                <p className="text-muted-foreground">Built with modern tools and frameworks</p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {Object.entries(meta.technologies).map(([key, techs]) =>
                  techs?.length ? (
                    <motion.div
                      key={key}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.1 }}
                      viewport={{ once: true }}
                    >
                      <Card className="border-0 bg-gradient-to-br from-[--liftoff-blue]/5 to-[--liftoff-orange]/5">
                        <CardContent className="p-6">
                          <h3 className="capitalize font-semibold mb-4 text-foreground">{key}</h3>
                          <div className="flex flex-wrap gap-2">
                            {techs.map((tech, i) => (
                              <Badge key={i} variant="secondary" className="text-xs">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ) : null,
                )}
              </div>
            </motion.section>
          )}

          {/* Outcome Section */}
          {meta.outcome && (
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold mb-6 text-foreground">Results & Impact</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">{meta.outcome}</p>
              </div>
            </motion.section>
          )}

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <LetsTalkCTA />
          </motion.div>

          {/* Additional MDX Content */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="prose prose-lg max-w-none text-foreground"
          >
            <MDXContent project={project} components={components} />
          </motion.div>
        </div>
      </div>
    </PageLayout>
  );
}
