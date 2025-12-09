import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs-extra';
import { build as viteBuild } from 'vite';
import react from '@vitejs/plugin-react';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const { copy, ensureDir, writeFile } = fs;

export class SiteBuilder {
  private templateDir: string;
  private siteDir: string;

  constructor(
    _projectRoot: string,
    private docsDir: string
  ) {
    // __dirname points to dist/ directory, template is at dist/template
    this.templateDir = path.resolve(__dirname, 'template');
    this.siteDir = path.resolve(_projectRoot, '.cognidocs/site');
  }

  async build(outputDir: string): Promise<void> {
    await this.prepare();

    console.log('Building static site with Vite...');

    // Build with inline React plugin configuration
    await viteBuild({
      root: this.siteDir,
      base: './',
      plugins: [react()],
      build: {
        outDir: path.resolve(outputDir),
        emptyOutDir: true,
      },
    });
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

    // 4. Generate content manifest
    const manifest = await this.generateManifest(this.docsDir);
    await writeFile(path.join(contentDir, 'manifest.json'), JSON.stringify(manifest, null, 2));

    // 5. Generate Search Index
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
        if (entry.isDirectory() && !entry.name.startsWith('.')) {
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

    for (const entry of entries) {
      if (entry.isDirectory()) {
        // Skip if it's hidden
        if (entry.name.startsWith('.')) continue;

        const children = await this.generateManifest(
          path.join(dir, entry.name),
          path.join(base, entry.name)
        );
        manifest.push({
          type: 'directory',
          name: entry.name,
          path: path.join(base, entry.name),
          children,
        });
      } else if (entry.name.endsWith('.md')) {
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
