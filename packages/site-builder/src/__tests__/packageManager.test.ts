/**
 * Tests for Package Manager Detection Utility
 */

import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { mkdirSync, writeFileSync, rmSync, existsSync } from 'fs';
import { join } from 'path';
import {
  detectPackageManager,
  getInstallCommand,
  getBuildCommand,
  getLockFileName,
  getPackageManagerDisplayName,
} from '../utils/packageManager.js';

describe('Package Manager Detection', () => {
  const testDir = join(process.cwd(), 'test-pm-detection');

  beforeEach(() => {
    // Create test directory
    if (!existsSync(testDir)) {
      mkdirSync(testDir, { recursive: true });
    }
  });

  afterEach(() => {
    // Clean up test directory
    if (existsSync(testDir)) {
      rmSync(testDir, { recursive: true, force: true });
    }
  });

  describe('detectPackageManager', () => {
    it('should detect pnpm from pnpm-lock.yaml', () => {
      writeFileSync(join(testDir, 'pnpm-lock.yaml'), '');
      expect(detectPackageManager(testDir)).toBe('pnpm');
    });

    it('should detect yarn from yarn.lock', () => {
      writeFileSync(join(testDir, 'yarn.lock'), '');
      expect(detectPackageManager(testDir)).toBe('yarn');
    });

    it('should detect npm from package-lock.json', () => {
      writeFileSync(join(testDir, 'package-lock.json'), '');
      expect(detectPackageManager(testDir)).toBe('npm');
    });

    it('should default to npm when no lock file exists', () => {
      expect(detectPackageManager(testDir)).toBe('npm');
    });

    it('should prioritize pnpm over yarn', () => {
      writeFileSync(join(testDir, 'pnpm-lock.yaml'), '');
      writeFileSync(join(testDir, 'yarn.lock'), '');
      expect(detectPackageManager(testDir)).toBe('pnpm');
    });

    it('should prioritize yarn over npm', () => {
      writeFileSync(join(testDir, 'yarn.lock'), '');
      writeFileSync(join(testDir, 'package-lock.json'), '');
      expect(detectPackageManager(testDir)).toBe('yarn');
    });
  });

  describe('getInstallCommand', () => {
    it('should return pnpm install for pnpm', () => {
      expect(getInstallCommand('pnpm')).toBe('pnpm install');
    });

    it('should return pnpm install --ignore-workspace for pnpm with ignoreWorkspace', () => {
      expect(getInstallCommand('pnpm', { ignoreWorkspace: true })).toBe(
        'pnpm install --ignore-workspace'
      );
    });

    it('should return yarn install for yarn', () => {
      expect(getInstallCommand('yarn')).toBe('yarn install');
    });

    it('should return npm install for npm', () => {
      expect(getInstallCommand('npm')).toBe('npm install');
    });
  });

  describe('getBuildCommand', () => {
    it('should return pnpm run build for pnpm', () => {
      expect(getBuildCommand('pnpm')).toBe('pnpm run build');
    });

    it('should return yarn build for yarn', () => {
      expect(getBuildCommand('yarn')).toBe('yarn build');
    });

    it('should return npm run build for npm', () => {
      expect(getBuildCommand('npm')).toBe('npm run build');
    });
  });

  describe('getLockFileName', () => {
    it('should return correct lock file for pnpm', () => {
      expect(getLockFileName('pnpm')).toBe('pnpm-lock.yaml');
    });

    it('should return correct lock file for yarn', () => {
      expect(getLockFileName('yarn')).toBe('yarn.lock');
    });

    it('should return correct lock file for npm', () => {
      expect(getLockFileName('npm')).toBe('package-lock.json');
    });
  });

  describe('getPackageManagerDisplayName', () => {
    it('should return descriptive name for pnpm', () => {
      expect(getPackageManagerDisplayName('pnpm')).toContain('pnpm');
      expect(getPackageManagerDisplayName('pnpm')).toContain('disk-efficient');
    });

    it('should return descriptive name for yarn', () => {
      expect(getPackageManagerDisplayName('yarn')).toContain('Yarn');
      expect(getPackageManagerDisplayName('yarn')).toContain('Reliable');
    });

    it('should return descriptive name for npm', () => {
      expect(getPackageManagerDisplayName('npm')).toContain('npm');
      expect(getPackageManagerDisplayName('npm')).toContain('Node Package Manager');
    });
  });
});
