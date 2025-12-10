import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs-extra';
import { execSync } from 'child_process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const { copy, ensureDir, writeFile } = fs;

export class SiteBuilder {
  private templateDir: string;
  private siteDir: string;
  private projectRoot: string;

  constructor(
    _projectRoot: string,
    private docsDir: string
  ) {
    this.projectRoot = _projectRoot;
    // __dirname points to dist/ directory, template is at dist/template
    this.templateDir = path.resolve(__dirname, 'template');
    this.siteDir = path.resolve(_projectRoot, '.cognidocs/site');
  }

  async build(outputDir: string): Promise<void> {
    await this.prepare();

    console.log('Building static site with Vite...');

    // Build by running npm run build in the site directory
    // This ensures Tailwind's JIT compiler works correctly with content scanning
    try {
      // First, update vite.config.ts to use the correct outDir
      const viteConfigPath = path.join(this.siteDir, 'vite.config.ts');
      const viteConfigContent = `import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    outDir: '${path.resolve(outputDir)}',
    emptyOutDir: true,
  },
  base: './',
});
`;
      await fs.writeFile(viteConfigPath, viteConfigContent, 'utf-8');

      // Run npm run build
      execSync('npm run build', {
        cwd: this.siteDir,
        stdio: 'inherit',
      });
    } catch (error) {
      console.error('Failed to build site:', error);
      throw error;
    }
  }

  async prepare(): Promise<void> {
    // 1. Create site directory
    await ensureDir(this.siteDir);

    // 2. Copy template
    console.log(`[DEBUG] Copying template from: ${this.templateDir}`);
    console.log(`[DEBUG] Copying template to: ${this.siteDir}`);
    await copy(this.templateDir, this.siteDir, { overwrite: true });

    // 3. Copy docs content
    // We copy the generated markdown to public/content so it can be fetched or imported
    const contentDir = path.join(this.siteDir, 'public/content');
    await ensureDir(contentDir);
    await copy(this.docsDir, contentDir);

    // 4. Copy project README to content directory (for Introduction page)
    const projectReadme = path.join(this.projectRoot, 'README.md');
    if (await fs.pathExists(projectReadme)) {
      await copy(projectReadme, path.join(contentDir, 'README.md'), { overwrite: true });
    }

    // 5. Copy graph.json if it exists
    const graphJsonPath = path.join(this.docsDir, 'graph.json');
    if (await fs.pathExists(graphJsonPath)) {
      await copy(graphJsonPath, path.join(contentDir, 'graph.json'));
    }

    // 6. Generate content manifest (excluding 'site' directory)
    const manifest = await this.generateManifest(this.docsDir);
    await writeFile(path.join(contentDir, 'manifest.json'), JSON.stringify(manifest, null, 2));

    // 7. Generate Search Index
    console.log('Generating search index...');
    await this.generateSearchIndex(this.docsDir, contentDir);
  }

  private async generateSearchIndex(docsDir: string, outputDir: string): Promise<void> {
    const lunr = await import('lunr').then((m) => m.default || m);
    // Gather all documents
    const documents: any[] = [];

    async function traverse(dir: string, base: string = '') {
      const entries = await fs.readdir(dir, { withFileTypes: true });
      for (const entry of entries) {
        if (entry.isDirectory() && !entry.name.startsWith('.') && entry.name !== 'site') {
          await traverse(path.join(dir, entry.name), path.join(base, entry.name));
        } else if (entry.name.endsWith('.md')) {
          const content = await fs.readFile(path.join(dir, entry.name), 'utf-8');
          documents.push({
            id: path.join(base, entry.name), // e.g., 'guide/intro.md'
            title: entry.name.replace('.md', ''),
            body: content,
          });
        }
      }
    }
    await traverse(docsDir);

    const idx = lunr(function () {
      this.ref('id');
      this.field('title');
      this.field('body');

      documents.forEach((doc) => {
        this.add(doc);
      });
    });

    await writeFile(path.join(outputDir, 'search-index.json'), JSON.stringify(idx));
    // Also save the documents map to retrieve titles/snippets (optional but good for UI)
    await writeFile(path.join(outputDir, 'search-data.json'), JSON.stringify(documents));
  }

  private async generateManifest(dir: string, base: string = ''): Promise<any[]> {
    const entries = await fs.readdir(dir, { withFileTypes: true });
    const manifest: any[] = [];

    // Directories to exclude from manifest
    const excludedDirs = ['site'];
    // Files to exclude from manifest (system files only, not user docs)
    const excludedFiles = [
      'README.md', // Project README shown in Introduction
      'DOCUMENTATION_GUIDE.md', // Documentation guide (not shown in nav)
      'graph.json',
      'data.json',
      'manifest.json',
      'search-index.json',
      'search-data.json',
    ];

    for (const entry of entries) {
      if (entry.isDirectory()) {
        // Skip hidden directories and 'site' directory
        if (entry.name.startsWith('.') || excludedDirs.includes(entry.name)) continue;

        const children = await this.generateManifest(
          path.join(dir, entry.name),
          path.join(base, entry.name)
        );

        // Only include directories that have content (not empty)
        if (children.length > 0) {
          manifest.push({
            type: 'directory',
            name: entry.name,
            path: path.join(base, entry.name),
            children,
          });
        }
      } else if (entry.name.endsWith('.md') && !excludedFiles.includes(entry.name)) {
        manifest.push({
          type: 'file',
          name: entry.name.replace('.md', ''),
          path: path.join(base, entry.name),
        });
      }
    }
    return manifest;
  }
}
