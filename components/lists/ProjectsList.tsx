'use client';

import { Project } from '@/types/project';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Card, CardContent } from '../ui/card';
import { AnimatedImage } from '../ui/AnimatedImage';

export default function ProjectsList({ projects }: { projects: Project[] }) {
  return (
    <motion.div
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-4"
      initial="hidden"
      whileInView="visible"
      animate="visible"
      viewport={{ once: false, amount: 0.2 }}
      transition={{ staggerChildren: 0.15 }}
    >
      {projects?.length ? (
        projects.map((project, i) => (
          <motion.div
            key={`${project.slug}--${projects?.length}--${i}`}
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
          >
            <Card className="hover:shadow-xl transition-all duration-300 rounded-3xl overflow-hidden group bg-card pt-0">
              <Link href={`/portfolio/${project.slug}`} className="block">
                <div className="relative w-full h-60 overflow-hidden">
                  <AnimatedImage
                    src={`/projects/${project.slug}/images/cover.jpg`}
                    width={500}
                    height={500}
                    alt={project.metadata.title}
                    className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105 w-full h-full"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-2 text-gray-800 dark:text-white">
                    {project.metadata.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                    {project.metadata.description}
                  </p>
                </CardContent>
              </Link>
            </Card>
          </motion.div>
        ))
      ) : projects ? (
        <p>No projects available</p>
      ) : (
        <p>Loading...</p>
      )}
    </motion.div>
  );
}
