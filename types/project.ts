import { HTMLMotionProps } from 'framer-motion';
import { MDXRemoteSerializeResult } from 'next-mdx-remote';
import { ImageProps } from 'next/image';
import { JSX } from 'react';

export enum ProjectCategory {
  FINTECH = 'fintech',
  SAAS = 'saas',
  AI = 'ai',
  DASHBOARD = 'dashboard',
  BRANDING = 'branding',
}

export enum ProjectOutcome {
  CONVERSION_LIFT = 'conversion_lift',
  USER_CLARITY = 'user_clarity',
  LAUNCH_READY = 'launch_ready',
  INVESTOR_READY = 'investor_ready',
  TRUST_SIGNALS = 'trust_signals',
}

export interface ProjectFrontmatter {
  title: string;
  slug: string;
  description: string;
  date: string;
  coverImage: string;

  overview?: string;
  category?: ProjectCategory;
  outcomeType?: ProjectOutcome;

  features?: {
    icon: string;
    title: string;
    description: string;
  }[];

  technologies?: {
    frontend?: string[];
    visualization?: string[];
    auth?: string[];
    data?: string[];
    deploy?: string[];
  };

  screenshots?: {
    src: string;
    alt: string;
    caption?: string;
  }[];

  outcome?: string;
  problem?: string;
  approach?: string;
  result?: string;
  metrics?: {
    label: string;
    value: string;
  }[];
}

export interface Project {
  slug: string;
  metadata: Required<ProjectFrontmatter>;
  mdxSource: MDXRemoteSerializeResult;
  images: string[];
}

export type MDXComponents = Readonly<{
  Image: (props: ImageProps) => JSX.Element | null;
  h2: (props: HTMLMotionProps<'h2'>) => JSX.Element;
  p: (props: HTMLMotionProps<'p'>) => JSX.Element;
}>;
