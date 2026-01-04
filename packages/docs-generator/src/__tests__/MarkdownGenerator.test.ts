import { describe, it, expect } from 'vitest';
import { MarkdownGenerator } from '../MarkdownGenerator';
import type { InterfaceMetadata, ComponentMetadata, FunctionMetadata } from '@cognidocs/types';

describe('MarkdownGenerator', () => {
  const outputDir = '/tmp/test-docs';
  const generator = new MarkdownGenerator(outputDir);

  describe('normalizeTypeString', () => {
    it('should normalize multi-line nested object types to single line', () => {
      const input = `{
    id: string;
  }`;
      // Access private method via any cast for testing
      const result = (generator as any).normalizeTypeString(input);
      expect(result).toBe('{ id: string; }');
      expect(result).not.toContain('\n');
    });

    it('should normalize complex nested types', () => {
      const input = `{
    params: {
      id: string;
      slug: string[];
    };
  }`;
      const result = (generator as any).normalizeTypeString(input);
      expect(result).toBe('{ params: { id: string; slug: string[]; }; }');
      expect(result).not.toContain('\n');
    });

    it('should handle union types with newlines', () => {
      const input = `'primary' |
'secondary' |
'danger'`;
      const result = (generator as any).normalizeTypeString(input);
      expect(result).toBe("'primary' \\| 'secondary' \\| 'danger'");
      expect(result).not.toContain('\n');
    });

    it('should escape pipe characters in union types', () => {
      const input = "'primary' | 'secondary' | 'danger'";
      const result = (generator as any).normalizeTypeString(input);
      expect(result).toBe("'primary' \\| 'secondary' \\| 'danger'");
    });

    it('should handle function types with newlines', () => {
      const input = `(value: string) =>
void`;
      const result = (generator as any).normalizeTypeString(input);
      expect(result).toBe('(value: string) => void');
      expect(result).not.toContain('\n');
    });

    it('should handle generic types with multiple parameters', () => {
      const input = `Record<
string,
unknown
>`;
      const result = (generator as any).normalizeTypeString(input);
      expect(result).toBe('Record< string, unknown >');
      expect(result).not.toContain('\n');
    });

    it('should collapse multiple spaces into single space', () => {
      const input = 'string    |    number    |    boolean';
      const result = (generator as any).normalizeTypeString(input);
      expect(result).toBe('string \\| number \\| boolean');
      expect(result).not.toMatch(/\s{2,}/);
    });

    it('should return "any" for undefined type', () => {
      const result = (generator as any).normalizeTypeString(undefined);
      expect(result).toBe('any');
    });

    it('should return "any" for empty string', () => {
      const result = (generator as any).normalizeTypeString('');
      expect(result).toBe('any');
    });

    it('should handle React.FC types', () => {
      const input = `React.FC<{
  children: ReactNode;
  className?: string;
}>`;
      const result = (generator as any).normalizeTypeString(input);
      expect(result).toBe('React.FC<{ children: ReactNode; className?: string; }>');
      expect(result).not.toContain('\n');
    });

    it('should handle array types with newlines', () => {
      const input = `Array<{
  id: string;
  name: string;
}>`;
      const result = (generator as any).normalizeTypeString(input);
      expect(result).toBe('Array<{ id: string; name: string; }>');
      expect(result).not.toContain('\n');
    });

    it('should handle intersection types', () => {
      const input = `BaseProps &
React.HTMLAttributes<HTMLDivElement>`;
      const result = (generator as any).normalizeTypeString(input);
      expect(result).toBe('BaseProps & React.HTMLAttributes<HTMLDivElement>');
      expect(result).not.toContain('\n');
    });

    it('should handle conditional types', () => {
      const input = `T extends string
? number
: boolean`;
      const result = (generator as any).normalizeTypeString(input);
      expect(result).toBe('T extends string ? number : boolean');
      expect(result).not.toContain('\n');
    });

    it('should preserve Windows line endings (CRLF)', () => {
      const input = 'string\r\n|\r\nnumber';
      const result = (generator as any).normalizeTypeString(input);
      expect(result).toBe('string \\| number');
      expect(result).not.toContain('\r');
      expect(result).not.toContain('\n');
    });

    it('should handle tuple types with newlines', () => {
      const input = `[
  string,
  number,
  boolean
]`;
      const result = (generator as any).normalizeTypeString(input);
      expect(result).toBe('[ string, number, boolean ]');
      expect(result).not.toContain('\n');
    });

    it('should handle mapped types', () => {
      const input = `{
  [K in keyof T]: T[K] extends object
    ? DeepReadonly<T[K]>
    : T[K];
}`;
      const result = (generator as any).normalizeTypeString(input);
      expect(result).toBe('{ [K in keyof T]: T[K] extends object ? DeepReadonly<T[K]> : T[K]; }');
      expect(result).not.toContain('\n');
    });
  });

  describe('escapeMarkdownPipes', () => {
    it('should escape pipe characters', () => {
      const input = 'string | number';
      const result = (generator as any).escapeMarkdownPipes(input);
      expect(result).toBe('string \\| number');
    });

    it('should handle multiple pipes', () => {
      const input = 'a | b | c | d';
      const result = (generator as any).escapeMarkdownPipes(input);
      expect(result).toBe('a \\| b \\| c \\| d');
    });

    it('should return input unchanged if no pipes', () => {
      const input = 'string';
      const result = (generator as any).escapeMarkdownPipes(input);
      expect(result).toBe('string');
    });

    it('should handle empty string', () => {
      const input = '';
      const result = (generator as any).escapeMarkdownPipes(input);
      expect(result).toBe('');
    });
  });
});
