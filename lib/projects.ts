import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';
import { Project, ProjectFrontmatter } from '@/types/project';
import imageMapRaw from '@/projects/imageMap.json' assert { type: 'json' };

const imageMap = imageMapRaw as Record<string, string[]>;

const projectsDir = path.join(process.cwd(), 'projects');

function getProjectImages(slug: string): string[] {
  if (!imageMap || typeof imageMap !== 'object') return [];
  return imageMap[slug] || [];
}
// ---------- Core Functions ----------

export async function getAllProjects(): Promise<Project[]> {
  const folders = fs.readdirSync(projectsDir);

  const projects = await Promise.all(
    folders.map(async (folder): Promise<Project | null> => {
      const projectPath = path.join(projectsDir, folder);

      let mdxPath = path.join(projectPath, 'index.mdx');
      if (!fs.existsSync(mdxPath)) {
        mdxPath = path.join(projectPath, 'index.md');
        if (!fs.existsSync(mdxPath)) return null;
      }

      const source = fs.readFileSync(mdxPath, 'utf8');
      const { content, data } = matter(source);

      // Validate required frontmatter
      if (!data.title || !data.description) return null;

      const slug = folder;

      const mdxSource = await serialize(content, {
        scope: data,
      });

      const metadata: Required<ProjectFrontmatter> = {
        title: data.title,
        description: data.description,
        slug,
        date: data.date ?? '',
        coverImage: data.coverImage ?? '',

        overview: data.overview ?? '',
        category: data.category,
        outcomeType: data.outcomeType,
        features: data.features ?? [],
        technologies: {
          frontend: data.technologies?.frontend ?? [],
          visualization: data.technologies?.visualization ?? [],
          auth: data.technologies?.auth ?? [],
          data: data.technologies?.data ?? [],
          deploy: data.technologies?.deploy ?? [],
        },
        screenshots: data.screenshots ?? [],
        outcome: data.outcome ?? '',
        problem: data.problem ?? '',
        approach: data.approach ?? '',
        result: data.result ?? '',
        metrics: data.metrics ?? [],
        ...data,
      };

      const images = getProjectImages(folder);

      return {
        slug,
        metadata,
        mdxSource,
        images,
      };
    }),
  );

  return projects.filter((project): project is Project => project !== null);
}

export async function getProjectBySlug(slug: string): Promise<Project | null> {
  const dir = path.join(projectsDir, slug);
  let mdxPath = path.join(dir, 'index.mdx');

  if (!fs.existsSync(mdxPath)) {
    mdxPath = path.join(dir, 'index.md');
    if (!fs.existsSync(mdxPath)) {
      return null;
    }
  }

  const source = fs.readFileSync(mdxPath, 'utf8');
  const { content, data } = matter(source);

  if (!data.title || !data.description) return null;

  const mdxSource = await serialize(content, {
    scope: data,
  });

  const metadata: Required<ProjectFrontmatter> = {
    title: data.title,
    description: data.description,
    slug,
    date: data.date ?? '',
    coverImage: data.coverImage ?? '',

    overview: data.overview ?? '',
    category: data.category,
    outcomeType: data.outcomeType,
    features: data.features ?? [],
    technologies: {
      frontend: data.technologies?.frontend ?? [],
      visualization: data.technologies?.visualization ?? [],
      auth: data.technologies?.auth ?? [],
      data: data.technologies?.data ?? [],
      deploy: data.technologies?.deploy ?? [],
    },
    screenshots: data.screenshots ?? [],
    outcome: data.outcome ?? '',
    problem: data.problem ?? '',
    approach: data.approach ?? '',
    result: data.result ?? '',
    metrics: data.metrics ?? [],
    ...data,
  };

  const images = getProjectImages(slug);

  return {
    slug,
    metadata,
    mdxSource,
    images,
  };
}
