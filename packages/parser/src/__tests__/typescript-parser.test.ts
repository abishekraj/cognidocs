/**
 * TypeScript Parser Tests
 * Phase 1: Foundation
 */

import { describe, it, expect } from 'vitest';
import { TypeScriptParser } from '../parsers/typescript-parser';
import { writeFileSync, mkdirSync, rmSync } from 'fs';
import { join } from 'path';

const TEST_DIR = join(__dirname, '__test_files__');

describe('TypeScriptParser', () => {
  beforeAll(() => {
    // Create test directory
    mkdirSync(TEST_DIR, { recursive: true });
  });

  afterAll(() => {
    // Clean up test directory
    rmSync(TEST_DIR, { recursive: true, force: true });
  });

  it('should parse a simple function', async () => {
    const testFile = join(TEST_DIR, 'simple-function.ts');
    const code = `
/**
 * Adds two numbers
 * @param a - First number
 * @param b - Second number
 * @returns The sum
 */
export function add(a: number, b: number): number {
  return a + b;
}
`;

    writeFileSync(testFile, code);

    const parser = new TypeScriptParser();
    const result = await parser.parseFile(testFile);

    expect(result.functions).toHaveLength(1);
    expect(result.functions[0].name).toBe('add');
    expect(result.functions[0].parameters).toHaveLength(2);
    expect(result.functions[0].description).toContain('Adds two numbers');
    expect(result.functions[0].isExported).toBe(true);
  });

  it('should parse an interface', async () => {
    const testFile = join(TEST_DIR, 'interface.ts');
    const code = `
/**
 * User data interface
 */
export interface User {
  /** User ID */
  id: string;
  /** User name */
  name: string;
  /** Optional email */
  email?: string;
}
`;

    writeFileSync(testFile, code);

    const parser = new TypeScriptParser();
    const result = await parser.parseFile(testFile);

    expect(result.interfaces).toHaveLength(1);
    expect(result.interfaces[0].name).toBe('User');
    expect(result.interfaces[0].properties).toHaveLength(3);
    expect(result.interfaces[0].properties[2].optional).toBe(true);
  });

  it('should parse a class', async () => {
    const testFile = join(TEST_DIR, 'class.ts');
    const code = `
/**
 * Calculator class
 */
export class Calculator {
  private value: number = 0;

  /**
   * Add a number
   */
  add(n: number): void {
    this.value += n;
  }

  getValue(): number {
    return this.value;
  }
}
`;

    writeFileSync(testFile, code);

    const parser = new TypeScriptParser();
    const result = await parser.parseFile(testFile);

    expect(result.classes).toHaveLength(1);
    expect(result.classes[0].name).toBe('Calculator');
    expect(result.classes[0].methods).toHaveLength(2);
    expect(result.classes[0].properties).toHaveLength(1);
    expect(result.classes[0].properties[0].isPrivate).toBe(true);
  });

  it('should parse imports and exports', async () => {
    const testFile = join(TEST_DIR, 'imports.ts');
    const code = `
import React from 'react';
import { useState, useEffect } from 'react';
import * as utils from './utils';

export const MyComponent = () => null;
export default MyComponent;
`;

    writeFileSync(testFile, code);

    const parser = new TypeScriptParser();
    const result = await parser.parseFile(testFile);

    expect(result.imports).toHaveLength(3);
    expect(result.imports[0].isDefault).toBe(true);
    expect(result.imports[1].specifiers).toContain('useState');
    expect(result.imports[2].isNamespace).toBe(true);
  });
});
