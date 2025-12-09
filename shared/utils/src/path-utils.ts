/**
 * Path Manipulation Utilities
 */

import * as path from 'path';

export function normalizePathSeparators(filePath: string): string {
  return filePath.replace(/\\/g, '/');
}

export function getRelativePath(from: string, to: string): string {
  return normalizePathSeparators(path.relative(from, to));
}

export function getExtension(filePath: string): string {
  return path.extname(filePath);
}

export function isTypeScriptFile(filePath: string): boolean {
  const ext = getExtension(filePath);
  return ext === '.ts' || ext === '.tsx';
}

export function isJavaScriptFile(filePath: string): boolean {
  const ext = getExtension(filePath);
  return ext === '.js' || ext === '.jsx';
}
