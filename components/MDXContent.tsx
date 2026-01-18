'use client';

import { MDXComponents, Project } from '@/types/project';
import { MDXRemote } from 'next-mdx-remote';

export function MDXContent({
  project,
  components,
}: {
  project: Project;
  components: MDXComponents;
}) {
  return <MDXRemote {...project.mdxSource} components={components} />;
}
