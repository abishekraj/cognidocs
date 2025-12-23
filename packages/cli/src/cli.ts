#!/usr/bin/env node

/**
 * CogniDocs CLI Entry Point
 * Phase 1: Foundation
 */

import { Command } from 'commander';
import chalk from 'chalk';
import { initCommand } from './commands/init';
import { buildCommand } from './commands/build';

const program = new Command();

program
  .name('cognidocs')
  .description('AI-powered documentation tool for JavaScript/TypeScript projects')
  .version('0.0.12')
  .addHelpText(
    'after',
    `
${chalk.bold('Installation:')}
  ${chalk.cyan('npm install -g @cognidocs/cli')}        # Install with npm
  ${chalk.cyan('pnpm install -g @cognidocs/cli')}       # Install with pnpm (recommended for Windows)
  ${chalk.cyan('yarn global add @cognidocs/cli')}       # Install with yarn
  ${chalk.cyan('npx @cognidocs/cli init')}              # Use without installation

${chalk.bold('Quick Start:')}
  ${chalk.cyan('cognidocs init')}                       # Initialize configuration (interactive)
  ${chalk.cyan('cognidocs init --yes')}                 # Initialize with defaults
  ${chalk.cyan('cognidocs build')}                      # Parse code and generate docs
  ${chalk.cyan('cognidocs build --base-path /docs/')}   # Build for GitHub Pages subdirectory
  ${chalk.cyan('cognidocs serve')}                      # Start dev server (port 4173)
  ${chalk.cyan('cognidocs serve --port 3000')}          # Serve on custom port

${chalk.bold('Features:')}
  ${chalk.green('✓')} TypeScript/JavaScript/React/Next.js parsing
  ${chalk.green('✓')} 12 professional themes (GitBook, GitHub, Nord, Dracula, Material, etc.)
  ${chalk.green('✓')} Interactive dependency graphs with D3.js
  ${chalk.green('✓')} Advanced search with Cmd+K command palette
  ${chalk.green('✓')} Mermaid.js diagram support

  ${chalk.green('✓')} Dark mode support
  ${chalk.green('✓')} Documentation coverage tracking

${chalk.bold('Package Manager Support:')}
  CogniDocs automatically detects and uses npm, pnpm, or yarn based on your project's lock files.
  ${chalk.gray('Priority: pnpm-lock.yaml > yarn.lock > package-lock.json')}

${chalk.bold('Windows Users:')}
  We recommend using ${chalk.cyan('pnpm')} for the best experience on Windows.
  It handles optional dependencies better than npm, avoiding common Rollup errors.

${chalk.bold('Configuration:')}
  Create ${chalk.cyan('cognidocs.config.js')} with:
    ${chalk.gray('• entry')}           - Source directory (default: ./src)
    ${chalk.gray('• output')}          - Docs output directory (default: ./docs)
    ${chalk.gray('• theme')}           - UI theme (gitbook, github, nord, dracula, etc.)
    ${chalk.gray('• darkMode')}        - Enable dark mode (default: true)
    ${chalk.gray('• frameworks')}      - Framework support (react, nextjs, vue, svelte)


${chalk.bold('Documentation:')}
  ${chalk.cyan('https://github.com/yourusername/cognidocs')}
`
  );

// Phase 1 Commands
program
  .command('init')
  .description('Initialize CogniDocs configuration file')
  .option('-f, --force', 'Overwrite existing configuration')
  .option('-y, --yes', 'Skip prompts and use defaults')
  .action(async (options) => {
    try {
      await initCommand(options);
    } catch (error) {
      console.error(chalk.red('Error:'), error);
      process.exit(1);
    }
  });

program
  .command('build')
  .description('Generate documentation')
  .option('-c, --config <path>', 'Path to config file')
  .option('-o, --output <path>', 'Output directory')
  .option('-w, --watch', 'Watch mode with hot reload')
  .option('-b, --base-path <path>', 'Base path for the site (e.g., /cognidocs/ for GitHub Pages)')
  .action(async (options) => {
    try {
      await buildCommand(options);
    } catch (error) {
      console.error(chalk.red('Error:'), error);
      process.exit(1);
    }
  });

import { analyzeCommand } from './commands/analyze';
import { coverageCommand } from './commands/coverage';

// ... (other imports)

// Phase 2 Commands
program
  .command('analyze')
  .description('[Phase 2] Run dependency analysis')
  .option('-c, --config <path>', 'Path to config file')
  .option('-o, --output <path>', 'Output directory')
  .action(async (options) => {
    try {
      await analyzeCommand(options);
    } catch (error) {
      console.error(chalk.red('Error:'), error);
      process.exit(1);
    }
  });

program
  .command('coverage')
  .description('[Phase 2] Generate coverage report')
  .option('-c, --config <path>', 'Path to config file')
  .option('-o, --output <path>', 'Output directory')
  .action(async (options) => {
    try {
      await coverageCommand(options);
    } catch (error) {
      console.error(chalk.red('Error:'), error);
      process.exit(1);
    }
  });

import { serveCommand } from './commands/serve';

// Phase 3 Commands
program
  .command('serve')
  .description('Start documentation server')
  .option('-c, --config <path>', 'Path to config file')
  .option('-p, --port <number>', 'Port to listen on', parseInt)
  .option('-h, --host', 'Expose to network')
  .action(async (options) => {
    try {
      await serveCommand(options);
    } catch (error) {
      console.error(chalk.red('Error:'), error);
      process.exit(1);
    }
  });

// Phase 6 Commands (Placeholder)
program
  .command('ai')
  .description('[Phase 6] AI-powered features')
  .addCommand(
    new Command('generate').description('Generate missing documentation with AI').action(() => {
      console.log(chalk.gray('Phase 6: AI Integration - Not yet available'));
    })
  )
  .addCommand(
    new Command('chat').description('Interactive chatbot for codebase').action(() => {
      console.log(chalk.gray('Phase 6: AI Integration - Not yet available'));
    })
  );

program.parse();
