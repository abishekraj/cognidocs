import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs-extra';
import { build as viteBuild } from 'vite';

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
    // Assuming dist/index.mjs structure, template is at ../template
    this.templateDir = path.resolve(__dirname, '../template');
    this.siteDir = path.resolve(_projectRoot, '.cognidocs/site');
  }

  async build(outputDir: string): Promise<void> {
    await this.prepare();

    console.log('Building static site with Vite...');

    // We need to resolve the path to the node_modules of the CLI/package
    // to ensure Vite finds the plugins and React.
    // Currently, we'll try to rely on require.resolve or standard resolution.

    await viteBuild({
      root: this.siteDir,
      base: './',
      build: {
        outDir: path.resolve(outputDir),
        emptyOutDir: true,
      },
      // We might need to inject standard plugins here if the template vite config is simple
    });
  }

  async prepare(): Promise<void> {
    // 1. Create site directory
    await ensureDir(this.siteDir);

    // 2. Copy template
    await copy(this.templateDir, this.siteDir);

    // 3. Copy docs content
    // We copy the generated markdown to public/content so it can be fetched or imported
    const contentDir = path.join(this.siteDir, 'public/content');
    await ensureDir(contentDir);
    await copy(this.docsDir, contentDir);

    // 4. Generate content manifest
    // This helps the frontend know what files exist
    const manifest = await this.generateManifest(this.docsDir);
    await writeFile(path.join(contentDir, 'manifest.json'), JSON.stringify(manifest, null, 2));
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
