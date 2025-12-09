import { resolve, join } from 'path';
import { writeFile, mkdir } from 'fs/promises';
import chalk from 'chalk';
import ora from 'ora';
import { loadConfig } from '../config';
import { TypeScriptParser, ReactParser } from '@cognidocs/parser';
import { analyzeDependencies } from '@cognidocs/analyzer';
import type { ParseResult, ComponentMetadata } from '@cognidocs/types';

export interface AnalyzeOptions {
  config?: string;
  output?: string;
  json?: boolean;
}

export async function analyzeCommand(options: AnalyzeOptions = {}): Promise<void> {
  console.log(chalk.blue('🔍 Running Dependency Analysis...\n'));

  // Load configuration
  const spinner = ora('Loading configuration...').start();
  let config = await loadConfig(options.config);

  // Plugin Support
  const { PluginManager } = await import('../PluginManager');
  const pluginManager = new PluginManager();

  if (config.plugins && config.plugins.length > 0) {
    try {
      await pluginManager.loadPlugins(config.plugins);
      // Allow plugins to modify config
      config = await pluginManager.executeConfigureHooks(config);
      spinner.succeed(`Configuration loaded (${pluginManager.getPlugins().length} plugins active)`);
    } catch (e) {
      spinner.warn('Failed to load some plugins');
      console.warn(e);
    }
  } else {
    spinner.succeed('Configuration loaded');
  }

  const entryPath = resolve(process.cwd(), config.entry);
  const outputPath = resolve(process.cwd(), options.output || config.output);

  // Parse source files (Required for analysis)
  const parseSpinner = ora('Parsing source files...').start();
  const tsParser = new TypeScriptParser();
  const reactParser = new ReactParser();

  try {
    const parseResults: ParseResult[] = await tsParser.parseDirectory(entryPath, '**/*.{ts,tsx}');

    // Enrich with React components if needed for better graph (though import analysis handles most)
    // We'll skip deep component parsing for pure dependency graph unless needed later

    parseSpinner.succeed(`Parsed ${parseResults.length} files`);

    // Run Analysis
    const analysisSpinner = ora('Building dependency graph...').start();
    const graph = analyzeDependencies(parseResults);

    // Execute Plugin Analyze Hooks
    await pluginManager.executeAnalyzeHooks({
      graph,
      files: parseResults.map((r) => r.filePath),
    });

    analysisSpinner.succeed('Dependency graph generated (and processed by plugins)');

    // Report
    const nodeCount = Object.keys(graph.nodes).length;
    console.log(chalk.gray(`\n   Graph Statistics:`));
    console.log(chalk.gray(`   • ${nodeCount} nodes constructed`));
    console.log(chalk.gray(`   • ${graph.circularCount} circular dependencies detected\n`));

    if (graph.circularCount > 0) {
      console.log(chalk.yellow('⚠️  Circular dependencies found:'));
      Object.values(graph.nodes).forEach((node) => {
        if (node.circular) {
          console.log(chalk.yellow(`   - ${node.id}`));
        }
      });
      console.log('');
    }

    // Output
    const outputSpinner = ora('Writing analysis report...').start();
    await mkdir(outputPath, { recursive: true });

    await writeFile(join(outputPath, 'graph.json'), JSON.stringify(graph, null, 2), 'utf-8');

    outputSpinner.succeed('Report written to ' + join(outputPath, 'graph.json'));
    console.log(chalk.green('\n✅ Analysis complete!\n'));
  } catch (error) {
    parseSpinner.fail('Analysis failed');
    console.error(chalk.red('\n❌ Error:'), error);
    throw error;
  }
}
