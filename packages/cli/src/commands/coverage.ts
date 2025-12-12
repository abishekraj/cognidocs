import { resolve, join } from 'path';
import { writeFile, mkdir } from 'fs/promises';
import chalk from 'chalk';
import ora from 'ora';
import { loadConfig } from '../config';
import { TypeScriptParser, ReactParser } from '@cognidocs/parser';
import { calculateCoverage } from '@cognidocs/coverage';
import type { ParseResult } from '@cognidocs/types';

export interface CoverageOptions {
  config?: string;
  output?: string;
  threshold?: number;
}

export async function coverageCommand(options: CoverageOptions = {}): Promise<void> {
  console.log(chalk.blue('📊 Calculating Documentation Coverage...\n'));

  // Load configuration
  const spinner = ora('Loading configuration...').start();
  const config = await loadConfig(options.config);
  spinner.succeed('Configuration loaded');

  const entryPath = resolve(process.cwd(), config.entry);
  const outputPath = resolve(process.cwd(), options.output || config.output);

  // Parse source files
  const parseSpinner = ora('Parsing source files...').start();
  const tsParser = new TypeScriptParser();
  const reactParser = new ReactParser();

  try {
    const parseResults: ParseResult[] = await tsParser.parseDirectory(entryPath, '**/*.{ts,tsx}');

    // Enrich with React components as they are key for documentation coverage
    for (const result of parseResults) {
      if (result.filePath.endsWith('.tsx')) {
        const components = await reactParser.parseComponent(result.filePath);
        // Attach to result (using dynamic cast or updated type)
        (result as any).components = components;
      }
    }

    parseSpinner.succeed(`Parsed ${parseResults.length} files`);

    // Calculate Coverage
    const coverageSpinner = ora('Analyzing coverage...').start();
    const report = calculateCoverage(parseResults);
    coverageSpinner.succeed('Coverage calculated');

    // Display Report
    console.log(chalk.gray(`\n   Coverage Summary:`));

    const percentage = report.overall.percentage;
    let color = chalk.green;
    if (percentage < 50) color = chalk.red;
    else if (percentage < 80) color = chalk.yellow;

    console.log(`   Overall Score: ${color(percentage.toFixed(1) + '%')}`);
    console.log(
      chalk.gray(`   (${report.overall.documented}/${report.overall.total} items documented)\n`)
    );

    // File breakdown (top 5 worst)
    const worstFiles = [...report.files]
      .sort((a, b) => a.score.percentage - b.score.percentage)
      .slice(0, 5);

    if (worstFiles.length > 0) {
      console.log(chalk.gray('   Lowest coverage files:'));
      worstFiles.forEach((file) => {
        // make path relative for display
        const relativePath = file.filePath.replace(process.cwd(), '.');
        console.log(`   • ${file.score.percentage.toFixed(0)}%\t ${relativePath}`);
      });
      console.log('');
    }

    // Output
    const outputSpinner = ora('Writing coverage report...').start();
    await mkdir(outputPath, { recursive: true });

    await writeFile(join(outputPath, 'coverage.json'), JSON.stringify(report, null, 2), 'utf-8');

    outputSpinner.succeed('Report written to ' + join(outputPath, 'coverage.json'));
    console.log(chalk.green('\n✅ Coverage check complete!\n'));
  } catch (error) {
    parseSpinner.fail('Coverage calculation failed');
    console.error(chalk.red('\n❌ Error:'), error);
    throw error;
  }
}
