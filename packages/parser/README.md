# @cognidocs/parser

AST parser for extracting metadata from JavaScript/TypeScript code.

## Phase 1: Foundation

This package provides:

- TypeScript Compiler API integration
- Babel parser for JavaScript files
- Component metadata extraction (React, Vue, Svelte)
- JSDoc/TSDoc comment parsing
- Type information extraction

## Usage

```typescript
import { TypeScriptParser, ReactParser } from '@cognidocs/parser';

const parser = new TypeScriptParser();
const result = await parser.parseFile('./src/Button.tsx');

console.log(result.components);
```

## Supported Patterns

- Function components
- Class components
- TypeScript interfaces and types
- JSDoc comments
- React hooks

## Status

🚧 Phase 1 - In Development
