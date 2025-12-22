/**
 * Package Manager Detection and Command Utilities
 * Automatically detects npm, pnpm, or yarn and provides appropriate commands
 */

import { existsSync } from 'fs';
import { join } from 'path';

export type PackageManager = 'npm' | 'pnpm' | 'yarn';

/**
 * Detects which package manager is being used in the project
 * Detection order:
 * 1. pnpm-lock.yaml -> pnpm
 * 2. yarn.lock -> yarn
 * 3. package-lock.json -> npm
 * 4. Default -> npm
 */
export function detectPackageManager(projectRoot: string = process.cwd()): PackageManager {
  // Check for pnpm
  if (existsSync(join(projectRoot, 'pnpm-lock.yaml'))) {
    return 'pnpm';
  }

  // Check for yarn
  if (existsSync(join(projectRoot, 'yarn.lock'))) {
    return 'yarn';
  }

  // Check for npm (or default)
  if (existsSync(join(projectRoot, 'package-lock.json'))) {
    return 'npm';
  }

  // Default to npm
  return 'npm';
}

/**
 * Gets the install command for the detected package manager
 * @param pm Package manager type
 * @param options Additional options
 */
export function getInstallCommand(
  pm: PackageManager,
  options?: { ignoreWorkspace?: boolean }
): string {
  switch (pm) {
    case 'pnpm':
      // Add --ignore-workspace flag when installing in subdirectory to prevent workspace hoisting
      return options?.ignoreWorkspace ? 'pnpm install --ignore-workspace' : 'pnpm install';
    case 'yarn':
      return 'yarn install';
    case 'npm':
    default:
      return 'npm install';
  }
}

/**
 * Gets the build command for the detected package manager
 */
export function getBuildCommand(pm: PackageManager): string {
  switch (pm) {
    case 'pnpm':
      return 'pnpm run build';
    case 'yarn':
      return 'yarn build';
    case 'npm':
    default:
      return 'npm run build';
  }
}

/**
 * Gets the command to run any script
 */
export function getRunCommand(pm: PackageManager, script: string): string {
  switch (pm) {
    case 'pnpm':
      return `pnpm run ${script}`;
    case 'yarn':
      return `yarn ${script}`;
    case 'npm':
    default:
      return `npm run ${script}`;
  }
}

/**
 * Gets the name of the lock file for a package manager
 */
export function getLockFileName(pm: PackageManager): string {
  switch (pm) {
    case 'pnpm':
      return 'pnpm-lock.yaml';
    case 'yarn':
      return 'yarn.lock';
    case 'npm':
    default:
      return 'package-lock.json';
  }
}

/**
 * Checks if a package manager is available in the system
 */
export function isPackageManagerAvailable(pm: PackageManager): boolean {
  try {
    const { execSync } = require('child_process');
    execSync(`${pm} --version`, { stdio: 'ignore' });
    return true;
  } catch {
    return false;
  }
}

/**
 * Gets a user-friendly name for the package manager
 */
export function getPackageManagerDisplayName(pm: PackageManager): string {
  switch (pm) {
    case 'pnpm':
      return 'pnpm (Fast, disk-efficient package manager)';
    case 'yarn':
      return 'Yarn (Reliable dependency management)';
    case 'npm':
    default:
      return 'npm (Node Package Manager)';
  }
}
