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
import { fileExists } from '@cognidocs/utils';
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
    const parseResults: ParseResult[] = await tsParser.parseDirectory(
      entryPath,
      '**/*.{ts,tsx}'
    );

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

    // Phase 1: Output JSON (Phase 3 will generate HTML)
    const outputSpinner = ora('Writing output...').start();

    // Create output directory
    await mkdir(outputPath, { recursive: true });

    // Write parsed data as JSON
    const dataPath = join(outputPath, 'data.json');
    await writeFile(
      dataPath,
      JSON.stringify(
        {
          metadata: {
            generatedAt: new Date().toISOString(),
            phase: 'phase1-foundation',
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

    // Write individual component files for easier inspection
    const componentsPath = join(outputPath, 'components');
    await mkdir(componentsPath, { recursive: true });

    for (const component of allComponents) {
      const componentFile = join(componentsPath, `${component.name}.json`);
      await writeFile(componentFile, JSON.stringify(component, null, 2), 'utf-8');
    }

    outputSpinner.succeed('Output written successfully');

    console.log(chalk.green('\n✅ Documentation built successfully!\n'));
    console.log(chalk.gray(`   Output directory: ${outputPath}`));
    console.log(chalk.gray(`   Data file: ${dataPath}`));
    console.log(chalk.gray(`   Components: ${componentsPath}/\n`));

    console.log(chalk.yellow('📝 Phase 1 Note:'));
    console.log(chalk.gray('   Currently outputting JSON data.'));
    console.log(chalk.gray('   HTML documentation generation comes in Phase 3.\n'));

    if (options.watch) {
      console.log(chalk.yellow('⚠️  Watch mode not yet implemented (Phase 3)'));
    }

  } catch (error) {
    parseSpinner.fail('Build failed');
    console.error(chalk.red('\n❌ Error:'), error);
    throw error;
  }
}
