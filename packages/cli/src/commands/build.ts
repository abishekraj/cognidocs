/**
 * Build Command - Generate documentation
 * Phase 1: Foundation
 */

import { resolve, join } from 'path';
import { writeFile, mkdir } from 'fs/promises';
import chalk from 'chalk';
import ora from 'ora';
import { loadConfig } from '../config';
import { TypeScriptParser, ReactParser, NextJsParser, VueParser, SvelteParser } from '@cognidocs/parser';
// import { fileExists } from '@cognidocs/utils';
import type { ParseResult, ComponentMetadata } from '@cognidocs/types';

export interface BuildOptions {
  config?: string;
  watch?: boolean;
  output?: string;
  basePath?: string;
}

export async function buildCommand(options: BuildOptions = {}): Promise<void> {
  console.log(chalk.blue('📚 Building CogniDocs documentation...\n'));

  // Load configuration
  const spinner = ora('Loading configuration...').start();
  let config = await loadConfig(options.config);
  spinner.succeed('Configuration loaded');

  const entryPath = resolve(process.cwd(), config.entry);
  const outputPath = resolve(process.cwd(), options.output || config.output);

  console.log(chalk.gray(`   Entry: ${entryPath}`));
  console.log(chalk.gray(`   Output: ${outputPath}\n`));

  // Initialize parsers
  const tsParser = new TypeScriptParser();
  const reactParser = new ReactParser();
  const nextJsParser = new NextJsParser();
  const vueParser = new VueParser();
  const svelteParser = new SvelteParser();

  // Plugin Support
  const { PluginManager } = await import('../PluginManager');
  const pluginManager = new PluginManager();

  if (config.plugins && config.plugins.length > 0) {
    try {
      await pluginManager.loadPlugins(config.plugins);
      config = await pluginManager.executeConfigureHooks(config);
    } catch (e) {
      console.warn('Failed to load plugins in build', e);
    }
  }

  // Phase 1: Parse source files
  const parseSpinner = ora('Parsing source files...').start();

  try {
    // Check framework
    const isNextJs = config.frameworks?.includes('nextjs');
    const isVue = config.frameworks?.includes('vue');
    const isSvelte = config.frameworks?.includes('svelte');

    // Use filePattern from config, defaulting to TypeScript and JavaScript files
    // Add .vue files if Vue is detected, .svelte files if Svelte is detected
    let filePattern = config.filePattern || '**/*.{ts,tsx,js,jsx}';
    if (isVue) {
      filePattern = config.filePattern || '**/*.{ts,tsx,js,jsx,vue}';
    }
    if (isSvelte) {
      filePattern = config.filePattern || '**/*.{ts,tsx,js,jsx,svelte}';
    }
    const exclude = config.exclude || ['**/node_modules/**'];

    // Ensure output directory is excluded to prevent recursive parsing
    if (config.output) {
      const relativeOutput = config.output.replace(/^\.\//, '');
      exclude.push(`**/${relativeOutput}/**`);
    }

    const parseResults: ParseResult[] = await tsParser.parseDirectory(
      entryPath,
      filePattern,
      exclude
    );

    parseSpinner.text = isNextJs
      ? 'Extracting Next.js pages and components...'
      : isVue
        ? 'Extracting Vue components...'
        : isSvelte
          ? 'Extracting Svelte components...'
          : 'Extracting React components...';

    // Extract React/Next.js/Vue components separately
    const allComponents: ComponentMetadata[] = [];

    // For Vue, also manually find and parse .vue files since tsParser doesn't handle them
    if (isVue) {
      const { glob } = await import('glob');
      const vueFiles = await glob('**/*.vue', {
        cwd: entryPath,
        ignore: exclude,
        absolute: true,
      });

      for (const vueFilePath of vueFiles) {
        try {
          const components = await vueParser.parseComponent(vueFilePath);
          if (components.length > 0) {
            allComponents.push(...components);

            // Create a parse result entry for this Vue file
            parseResults.push({
              filePath: vueFilePath,
              components,
              functions: [],
              classes: [],
              interfaces: [],
              types: [],
              imports: [],
              exports: [],
            });
          }
        } catch (error) {
          console.warn(`Failed to parse Vue component ${vueFilePath}:`, error);
        }
      }
    }

    // For Svelte, also manually find and parse .svelte files since tsParser doesn't handle them
    if (isSvelte) {
      const { glob } = await import('glob');
      const svelteFiles = await glob('**/*.svelte', {
        cwd: entryPath,
        ignore: exclude,
        absolute: true,
      });

      for (const svelteFilePath of svelteFiles) {
        try {
          const components = await svelteParser.parseComponent(svelteFilePath);
          if (components.length > 0) {
            allComponents.push(...components);

            // Create a parse result entry for this Svelte file
            parseResults.push({
              filePath: svelteFilePath,
              components,
              functions: [],
              classes: [],
              interfaces: [],
              types: [],
              imports: [],
              exports: [],
            });
          }
        } catch (error) {
          console.warn(`Failed to parse Svelte component ${svelteFilePath}:`, error);
        }
      }
    }

    for (const result of parseResults) {
      let components: ComponentMetadata[] = [];

      // Skip Vue/Svelte files if already processed above
      if ((result.filePath.endsWith('.vue') && isVue) || (result.filePath.endsWith('.svelte') && isSvelte)) {
        continue;
      }

      if (isNextJs) {
        // For Next.js, try to parse all JS/TS files as potential pages/api routes or components
        if (/\.(ts|tsx|js|jsx)$/.test(result.filePath)) {
          components = await nextJsParser.parseNextJsFile(result.filePath);
        }
      } else {
        // Fallback to standard React behavior (mostly TSX/JSX)
        if (result.filePath.endsWith('.tsx') || result.filePath.endsWith('.jsx')) {
          components = await reactParser.parseComponent(result.filePath);
        }
      }

      if (components.length > 0) {
        allComponents.push(...components);

        // Merge components into parse result
        result.components = components;

        // CRITICAL FIX: Remove component functions from the functions array to prevent duplicates
        // Component names that were identified as React components should not be documented as functions
        const componentNames = new Set(components.map((c) => c.name));
        result.functions = result.functions.filter((func) => !componentNames.has(func.name));
      }
    }

    // Execute Plugin Transform Hooks
    // Allows plugins to modify the parsed data before it becomes documentation
    await pluginManager.executeTransformHooks({
      docs: parseResults,
      manifest: {
        generatedAt: new Date().toISOString(),
        files: parseResults.length,
      },
    });

    const frameworkName = isSvelte ? 'Svelte' : isVue ? 'Vue' : isNextJs ? 'Next.js' : 'React';
    parseSpinner.succeed(
      `Parsed ${parseResults.length} files, found ${allComponents.length} ${frameworkName} components`
    );

    // Generate statistics
    const stats = {
      files: parseResults.length,
      components: allComponents.length,
      // API Routes are components with isApiRoute: true.
      // We should count them separately for clarity, though they are inside 'components' count too depending on how parsers work.
      // ReactParser only returns components. NextJsParser returns components which can be pages or api routes.
      // API routes should ideally be distinct.
      apiRoutes: allComponents.filter((c: any) => c.isApiRoute).length,
      functions: parseResults.reduce((sum, r) => sum + r.functions.length, 0),
      classes: parseResults.reduce((sum, r) => sum + r.classes.length, 0),
      interfaces: parseResults.reduce((sum, r) => sum + r.interfaces.length, 0),
      types: parseResults.reduce((sum, r) => sum + r.types.length, 0),
    };

    console.log(chalk.gray('\n   Statistics:'));
    console.log(chalk.gray(`   • ${stats.components} components`));
    if (stats.apiRoutes > 0) {
      console.log(chalk.gray(`   • ${stats.apiRoutes} API routes`));
    }
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

    // Generate dependency graph
    outputSpinner.text = 'Generating dependency graph...';
    const { analyzeDependencies } = await import('@cognidocs/analyzer');

    const graphResult = analyzeDependencies(parseResults);

    // Build graph data structure for visualization from GraphResult
    const nodes: any[] = [];
    const edges: any[] = [];

    Object.values(graphResult.nodes).forEach((node: any) => {
      // Extract file name from path for display
      const fileName = node.id.split('/').pop() || node.id;

      nodes.push({
        id: node.id,
        name: fileName,
        type: 'file', // All nodes are files in dependency graph
        filePath: node.id,
        exports: node.exports || [],
        circular: node.circular || false,
      });

      // Add edges for imports (dependencies)
      if (node.imports && Array.isArray(node.imports)) {
        node.imports.forEach((importPath: string) => {
          edges.push({
            source: node.id,
            target: importPath,
          });
        });
      }
    });

    const graphData = {
      nodes,
      edges,
      metadata: {
        generatedAt: new Date().toISOString(),
        totalNodes: nodes.length,
        totalEdges: edges.length,
        circularDependencies: graphResult.circularCount,
      },
    };

    await writeFile(join(outputPath, 'graph.json'), JSON.stringify(graphData, null, 2), 'utf-8');

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
      const basePath = options.basePath || './';
      const builder = new SiteBuilder(process.cwd(), outputPath, basePath);

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
    console.log(chalk.gray(`   Site: ${outputPath}/site`));
    console.log(chalk.gray(`   Run 'cognidocs serve' to view the documentation\n`));

    if (options.watch) {
      console.log(chalk.yellow('⚠️  Watch mode not yet implemented'));
    }
  } catch (error) {
    parseSpinner.fail('Build failed');
    console.error(chalk.red('\n❌ Error:'), error);
    throw error;
  }
}
