import { resolve, join } from 'path';
import chalk from 'chalk';
import { spawn } from 'child_process';
import { loadConfig } from '../config';

export interface ServeOptions {
  config?: string;
  port?: number;
}

export async function serveCommand(options: ServeOptions = {}): Promise<void> {
  console.log(chalk.blue('🌍 Starting CogniDocs server...\n'));

  const config = await loadConfig(options.config);
  const outputDir = resolve(process.cwd(), config.output || 'docs');
  const siteDir = join(outputDir, 'site');

  console.log(chalk.gray(`   Serving from: ${siteDir}`));

  // Quick and dirty static server using 'preview' from vite, or just 'serve' package if we had it.
  // Since we rely on SiteBuilder which uses Vite, we can try to use Vite's preview.
  // But strictly, the `site-builder` package should export a `serve` function.

  // For now, let's use a simple npx vite preview command pointing to the build output.
  // This assumes the user has npx or we can run it.

  console.log(chalk.green(`\n🚀 Server starting on http://localhost:${options.port || 4173}`));

  const vitePreview = spawn(
    'npx',
    ['vite', 'preview', '--outDir', siteDir, '--port', String(options.port || 4173)],
    {
      stdio: 'inherit',
      cwd: process.cwd(), // Run from project root
    }
  );

  vitePreview.on('error', (err) => {
    console.error(chalk.red('Failed to start server:'), err);
  });

  // Keep process alive
  await new Promise(() => {});
}
