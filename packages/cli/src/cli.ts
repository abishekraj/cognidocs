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
  .version('0.1.0');

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
  .action(async (options) => {
    try {
      await buildCommand(options);
    } catch (error) {
      console.error(chalk.red('Error:'), error);
      process.exit(1);
    }
  });

// Phase 2 Commands (Placeholder)
program
  .command('analyze')
  .description('[Phase 2] Run dependency analysis')
  .action(() => {
    console.log(chalk.gray('Phase 2: Analysis & Coverage - Not yet available'));
  });

program
  .command('coverage')
  .description('[Phase 2] Generate coverage report')
  .action(() => {
    console.log(chalk.gray('Phase 2: Analysis & Coverage - Not yet available'));
  });

// Phase 3 Commands (Placeholder)
program
  .command('serve')
  .description('[Phase 3] Start development server')
  .action(() => {
    console.log(chalk.gray('Phase 3: Core Documentation - Not yet available'));
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
