/**
 * Build Command - Generate documentation
 * Phase 1: Foundation
 */

import { resolve, join } from 'path';
import { writeFile, mkdir } from 'fs/promises';
import chalk from 'chalk';
import ora from 'ora';
import { loadConfig } from '../config';
import { TypeScriptParser, ReactParser } from '@cognidocs/parser';
// import { fileExists } from '@cognidocs/utils';
import type { ParseResult, ComponentMetadata } from '@cognidocs/types';

export interface BuildOptions {
  config?: string;
  watch?: boolean;
  output?: string;
}

export async function buildCommand(options: BuildOptions = {}): Promise<void> {
  console.log(chalk.blue('📚 Building CogniDocs documentation...\n'));

  // Load configuration
  const spinner = ora('Loading configuration...').start();
  const config = await loadConfig(options.config);
  spinner.succeed('Configuration loaded');

  const entryPath = resolve(process.cwd(), config.entry);
  const outputPath = resolve(process.cwd(), options.output || config.output);

  console.log(chalk.gray(`   Entry: ${entryPath}`));
  console.log(chalk.gray(`   Output: ${outputPath}\n`));

  // Initialize parsers
  const tsParser = new TypeScriptParser();
  const reactParser = new ReactParser();

  // Phase 1: Parse source files
  const parseSpinner = ora('Parsing source files...').start();

  try {
    const parseResults: ParseResult[] = await tsParser.parseDirectory(entryPath, '**/*.{ts,tsx}');

    parseSpinner.text = 'Extracting React components...';

    // Extract React components separately
    const allComponents: ComponentMetadata[] = [];
    for (const result of parseResults) {
      if (result.filePath.endsWith('.tsx')) {
        const components = await reactParser.parseComponent(result.filePath);
        allComponents.push(...components);

        // Merge components into parse result
        result.components = components;
      }
    }

    parseSpinner.succeed(
      `Parsed ${parseResults.length} files, found ${allComponents.length} React components`
    );

    // Generate statistics
    const stats = {
      files: parseResults.length,
      components: allComponents.length,
      functions: parseResults.reduce((sum, r) => sum + r.functions.length, 0),
      classes: parseResults.reduce((sum, r) => sum + r.classes.length, 0),
      interfaces: parseResults.reduce((sum, r) => sum + r.interfaces.length, 0),
      types: parseResults.reduce((sum, r) => sum + r.types.length, 0),
    };

    console.log(chalk.gray('\n   Statistics:'));
    console.log(chalk.gray(`   • ${stats.components} components`));
    console.log(chalk.gray(`   • ${stats.functions} functions`));
    console.log(chalk.gray(`   • ${stats.classes} classes`));
    console.log(chalk.gray(`   • ${stats.interfaces} interfaces`));
    console.log(chalk.gray(`   • ${stats.types} types\n`));

    // Phase 1+3: Output
    const outputSpinner = ora('Generating documentation...').start();

    // Create output directory
    await mkdir(outputPath, { recursive: true });

    // Write parsed data as JSON (Keep raw data)
    const dataPath = join(outputPath, 'data.json');
    await writeFile(
      dataPath,
      JSON.stringify(
        {
          metadata: {
            generatedAt: new Date().toISOString(),
            phase: 'phase3-documentation',
            config,
          },
          stats,
          results: parseResults,
        },
        null,
        2
      ),
      'utf-8'
    );

    // Phase 3: Generate Markdown
    outputSpinner.text = 'Generating Markdown files...';
    const { MarkdownGenerator } = await import('@cognidocs/docs-generator');
    const generator = new MarkdownGenerator(outputPath);
    await generator.generate(parseResults);

    // Phase 3: Build Static Site
    outputSpinner.text = 'Building static site...';
    try {
      const { SiteBuilder } = await import('@cognidocs/site-builder');

      // SiteBuilder takes projectRoot and docsDir (which is where markdown files are)
      // and outputDir is where the final site should go.
      // But wait, the standard CLI "output" usually means the final artifact.
      // The current implementation generated Markdown into `outputPath`.
      // Let's refine:
      // 1. Generate Markdown into `.cognidocs/content` (staging) or `docs/content`
      // 2. Build Vite app into `docs`

      // For now, to keep it simple and match expected "output" behavior:
      // We will treat `outputPath` as the "docs" folder where everything lives.
      // The markdown is inside.
      // But SiteBuilder copies template to `.cognidocs/site` and builds FROM there.

      // Let's assume user wants the site in `options.output` (e.g. ./docs)
      // We should generate markdown in a temp place or a subdir?

      // Current flow used `outputPath` for JSON/Markdown.
      // Let's keep Markdown there for now, and build the site into `outputPath/site`?
      // Or better: `output` is the website.

      // Let's instantiate SiteBuilder with the current directory as project root
      // and the current `outputPath` as the source of docs.
      const builder = new SiteBuilder(process.cwd(), outputPath);

      // We build the site into `outputPath`... wait, that would overwrite the markdown files if we clear it.
      // Let's put the site in `outputPath` and move markdown to `outputPath/content`?
      // Or just build successfully.

      // To avoid complexity:
      // 1. Markdown is generated in `outputPath` (e.g. ./docs)
      // 2. SiteBuilder copies `outputPath` content to its internal `.cognidocs/site/public/content`
      // 3. SiteBuilder builds the React app back into `outputPath`?

      // Vite emptyOutDir: true will wipe `outputPath`.

      // Refined strategy:
      // 1. Generate JSON/Markdown into `.cognidocs/staging`
      // 2. Use SiteBuilder to take `.cognidocs/staging` and build full site into `outputPath`.

      // DOING THIS CHANGE require changing where we write JSON/Markdown above.

      // For this iteration, let's just trigger the build and output to `outputPath/site`
      // so we don't destroy the debuggable markdown files yet.

      const siteOutputPath = join(outputPath, 'site');
      await builder.build(siteOutputPath);

      outputSpinner.succeed('Documentation site generated successfully');

      console.log(chalk.gray(`   Site: ${siteOutputPath}`));
    } catch (e) {
      // If site builder fails (e.g. missing deps in dev), warn but don't fail entire build
      outputSpinner.warn('Static site build failed (Markdown generated)');
      console.error(chalk.yellow(e instanceof Error ? e.message : String(e)));
    }

    console.log(chalk.green('\n✅ Documentation built successfully!\n'));
    console.log(chalk.gray(`   Output directory: ${outputPath}`));
    console.log(chalk.gray(`   Run 'cognidocs serve' to view the site (coming soon)\n`));

    if (options.watch) {
      console.log(chalk.yellow('⚠️  Watch mode not yet implemented'));
    }
  } catch (error) {
    parseSpinner.fail('Build failed');
    console.error(chalk.red('\n❌ Error:'), error);
    throw error;
  }
}
