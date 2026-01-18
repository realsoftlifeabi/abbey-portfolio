import fs from 'fs-extra';
import path from 'path';

const projectsDir = path.join(process.cwd(), 'projects');
const publicDir = path.join(process.cwd(), 'public', 'projects');
const outputJson = path.join(projectsDir, 'imageMap.json');

async function copyAllImagesAndGenerateMap() {
  const folders = fs.readdirSync(projectsDir);
  const imageMap = {};

  for (const folder of folders) {
    const src = path.join(projectsDir, folder, 'images');
    const dest = path.join(publicDir, folder, 'images');

    if (fs.existsSync(src)) {
      await fs.ensureDir(dest);
      await fs.copy(src, dest);
      console.log(`✅ Copied images for ${folder}`);

      const files = fs.readdirSync(src);
      const images = files
        .filter((file) => /\.(jpg|jpeg|png|gif|webp|svg)$/i.test(file))
        .map((file) => `/projects/${folder}/images/${file}`);

      imageMap[folder] = images;
    }
  }

  await fs.outputJson(outputJson, imageMap, { spaces: 2 });
  console.log(`✅ Image map generated at: ${outputJson}`);
}

export { copyAllImagesAndGenerateMap };
