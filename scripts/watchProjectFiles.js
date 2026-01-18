import chokidar from 'chokidar';
import path from 'path';
import { copyAllImagesAndGenerateMap } from '../lib/copyProjectAssets.js';

console.log('🚀 Starting project file watcher...');

// Initial copy when dev starts
copyAllImagesAndGenerateMap().catch(console.error);

const projectsDir = path.join(process.cwd(), 'projects');
let isRegenerating = false;
let regenerateTimeout = null;

function watchProjectFiles() {
  // Watch only image files, not the imageMap.json to prevent loops
  const watcher = chokidar.watch([path.join(projectsDir, '*/images/**/*')], {
    ignoreInitial: true,
    persistent: true,
  });

  watcher
    .on('add', handleFileChange)
    .on('change', handleFileChange)
    .on('unlink', handleFileChange)
    .on('error', (error) => {
      console.error('Watcher error:', error);
    });

  console.log('🔍 Watching project files for changes...');
  console.log('   - Images (projects/*/images/**/*)');
  console.log('');
  console.log('💡 Next.js automatically watches MDX files and reloads.');
  console.log('   Images are copied to public folder when changed.');
}

function handleFileChange(filePath) {
  try {
    const relativePath = path.relative(process.cwd(), filePath);
    console.log(`📝 File changed: ${relativePath}`);

    // Clear any pending regeneration
    if (regenerateTimeout) {
      clearTimeout(regenerateTimeout);
    }

    // Debounce rapid changes (300ms)
    regenerateTimeout = setTimeout(() => {
      if (!isRegenerating) {
        isRegenerating = true;

        // Regenerate image assets
        console.log('🖼️  Regenerating image assets...');
        copyAllImagesAndGenerateMap()
          .then(() => {
            console.log('✅ Image assets updated successfully');
          })
          .catch((err) => {
            console.error('❌ Error updating image assets:', err);
          })
          .finally(() => {
            isRegenerating = false;
          });
      }
    }, 300);
  } catch (error) {
    console.error('Error handling file change:', error);
  }
}

// Handle process termination
process.on('SIGINT', () => {
  console.log('\n👋 Stopping file watcher...');
  if (regenerateTimeout) {
    clearTimeout(regenerateTimeout);
  }
  process.exit(0);
});

process.on('uncaughtException', (error) => {
  console.error('Uncaught exception:', error);
  process.exit(1);
});

process.on('unhandledRejection', (reason, promise) => {
  console.error('Unhandled rejection at:', promise, 'reason:', reason);
  process.exit(1);
});

watchProjectFiles();
