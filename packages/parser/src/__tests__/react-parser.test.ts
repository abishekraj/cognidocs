/**
 * React Parser Tests
 * Phase 1: Foundation
 */

import { describe, it, expect } from 'vitest';
import { ReactParser } from '../parsers/react-parser';
import { writeFileSync, mkdirSync, rmSync } from 'fs';
import { join } from 'path';

const TEST_DIR = join(__dirname, '__test_files_react__');

describe('ReactParser', () => {
  beforeAll(() => {
    mkdirSync(TEST_DIR, { recursive: true });
  });

  afterAll(() => {
    rmSync(TEST_DIR, { recursive: true, force: true });
  });

  it('should detect function component', async () => {
    const testFile = join(TEST_DIR, 'FunctionComponent.tsx');
    const code = `
import React from 'react';

/**
 * A simple button component
 */
export const Button = ({ label }: { label: string }) => {
  return <button>{label}</button>;
};
`;

    writeFileSync(testFile, code);

    const parser = new ReactParser();
    const components = await parser.parseComponent(testFile);

    expect(components).toHaveLength(1);
    expect(components[0].name).toBe('Button');
    expect(components[0].type).toBe('function');
    expect(components[0].framework).toBe('react');
  });

  it('should extract props from inline type', async () => {
    const testFile = join(TEST_DIR, 'PropsComponent.tsx');
    const code = `
import React from 'react';

export const Card = ({ title, description }: {
  title: string;
  description?: string;
}) => {
  return <div><h1>{title}</h1><p>{description}</p></div>;
};
`;

    writeFileSync(testFile, code);

    const parser = new ReactParser();
    const components = await parser.parseComponent(testFile);

    expect(components[0].props).toBeDefined();
    expect(components[0].props?.length).toBeGreaterThan(0);
  });

  it('should detect React hooks', async () => {
    const testFile = join(TEST_DIR, 'HooksComponent.tsx');
    const code = `
import React, { useState, useEffect } from 'react';

export const Counter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(count);
  }, [count]);

  return <div>{count}</div>;
};
`;

    writeFileSync(testFile, code);

    const parser = new ReactParser();
    const components = await parser.parseComponent(testFile);

    expect(components[0].hooks).toBeDefined();
    expect(components[0].hooks).toContain('useState');
    expect(components[0].hooks).toContain('useEffect');
  });

  it('should detect class component', async () => {
    const testFile = join(TEST_DIR, 'ClassComponent.tsx');
    const code = `
import React, { Component } from 'react';

export class MyComponent extends Component<{ name: string }> {
  render() {
    return <div>{this.props.name}</div>;
  }
}
`;

    writeFileSync(testFile, code);

    const parser = new ReactParser();
    const components = await parser.parseComponent(testFile);

    expect(components).toHaveLength(1);
    expect(components[0].name).toBe('MyComponent');
    expect(components[0].type).toBe('class');
  });
});
