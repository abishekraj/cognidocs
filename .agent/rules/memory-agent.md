---
trigger: always_on
---

# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Status

**Current Phase:** Phase 3.5 (Premium UI) - 🟢 COMPLETE ✅ **MVP READY**

- ✅ Phase 1 (Foundation) - COMPLETE
- ✅ Phase 2 (Analysis & Coverage) - COMPLETE
- ✅ Phase 3 (Core Documentation) - COMPLETE
- ✅ Phase 3.5 (Premium UI & Compodoc-Style Documentation) - COMPLETE

CogniDocs is a comprehensive JavaScript/TypeScript documentation tool combining features from Compodoc and Storybook with AI capabilities. The project uses a monorepo architecture with Turbo, organized into 10 development phases.

**Latest Milestone:** 🎉 **MVP RELEASE** - Production-ready documentation site with premium UI, 12 themes, advanced search (Cmd+K), comprehensive content rendering, and polished UX with all critical bugs fixed.

## Essential Commands

### Development

```bash
npm install                  # Install all dependencies
npm run build               # Build all packages (required before first use)
npm run dev                 # Run all packages in watch mode
npm run phase1              # Run Phase 1 packages only (CLI, Parser, Testing)
```

### CLI Usage (after building)

```bash
npm link -w @cognidocs/cli  # Link CLI globally (or use pnpm/yarn)

# Get help with installation instructions
cognidocs --help            # Shows installation, quick start, and package manager info

# Basic commands
cognidocs init              # Initialize config (interactive)
cognidocs init --yes        # Initialize with defaults
cognidocs build             # Parse code and generate documentation
cognidocs build --output ./docs  # Custom output directory
cognidocs analyze           # Analyze dependencies (Phase 2)
cognidocs coverage          # Generate coverage report (Phase 2)
cognidocs serve             # Start development server (Phase 3)
cognidocs serve --port 3001 # Serve on custom port
```

**Package Manager Support:**
The CLI automatically detects and uses npm, pnpm, or yarn based on your project's lock files. No configuration needed!

### Testing

```bash
npm test                              # Run all tests
npm test --filter=@cognidocs/parser  # Test specific package
npm run typecheck                     # TypeScript type checking
npm run lint                          # Run ESLint
npm run format                        # Format with Prettier
```

### Package-Specific

```bash
npm run build --filter=@cognidocs/cli     # Build single package
npm run dev --filter=@cognidocs/parser    # Watch single package
```

## Configuration

CogniDocs uses a `cognidocs.config.js` file in the project root. Generate it with `cognidocs init`:

```javascript
export default {
  entry: './src', // Entry point for parsing
  output: './docs', // Output directory for generated docs
  theme: 'gitbook', // Theme (gitbook, docs, modern, etc.)
  darkMode: true, // Enable dark mode
  frameworks: ['react'], // Frameworks to detect (react, vue, svelte, etc.)
  exclude: [
    // Files/directories to exclude
    '**/*.test.ts',
    '**/*.test.tsx',
    '**/node_modules/**',
    '**/dist/**',
  ],
};
```

## Architecture Overview

### Monorepo Structure

```
packages/          # Core library packages
├── cli/          # ✅ Command-line interface (Phase 1)
├── parser/       # ✅ TypeScript/React AST parser (Phase 1)
├── analyzer/     # ✅ Dependency analysis (Phase 2)
├── coverage/     # ✅ Coverage tracking (Phase 2)
├── docs-generator/  # ✅ Doc generation (Phase 3)
├── site-builder/    # ✅ Static site builder (Phase 3.5)
├── graph-viz/       # ✅ Visualizations (Phase 3.5)
├── plugin-core/     # ✅ Plugin system (Phase 3-4)
├── component-preview/  # 🔴 Live previews (Phase 6)
├── ai/              # 🔴 AI integration (Phase 7)
└── testing/         # ✅ Test utilities (Phase 1)

shared/           # Shared libraries
├── types/        # TypeScript type definitions
├── utils/        # Utility functions
└── constants/    # Project constants

apps/             # SaaS applications (Phase 7+)
├── saas-platform/
├── marketplace/
└── collaboration/

examples/         # Sample projects for testing
├── sample-react/   # React example with Button component
└── sample-nextjs/  # Next.js example
```

### Package Dependencies

- CLI depends on: Parser, Analyzer, Coverage, Docs-Generator, Site-Builder, Plugin-Core, Types, Utils, Constants
- Parser depends on: Types, Utils
- Analyzer depends on: Types, Utils
- Coverage depends on: Types, Utils
- Docs-Generator depends on: Types, Utils, Constants
- Site-Builder depends on: Utils, Graph-Viz
- Graph-Viz is standalone (React component library)
- All packages use shared libraries (types, utils, constants)

## Phase 1 Implementation (COMPLETE)

### TypeScript Parser

**File:** `packages/parser/src/parsers/typescript-parser.ts`

Implements full TypeScript Compiler API integration:

- Parses `.ts`, `.tsx`, `.js`, and `.jsx` files with appropriate ScriptKind detection
- Extracts: functions, classes, interfaces, types, imports, exports
- JSDoc comment extraction with tags (@param, @returns, @example)
- Directory parsing with glob patterns
- Line number tracking for all elements
- **Comprehensive export detection** - Detects all JavaScript/TypeScript export patterns

**Supported Export Patterns:**

1. **Inline exports** - `export function foo() {}`, `export class Bar {}`
2. **Named export lists** - `export { foo, bar, baz }`
3. **Default exports** - `export default App`
4. **Default exports (separate)** - `const App = ...; export default App;`
5. **Re-exports** - `export * from './module'`
6. **Named re-exports** - `export { Component as MyComponent } from './module'`
7. **Renamed exports** - `export { foo as bar }`

The parser uses a two-pass approach:

- **First pass**: Collects all exported names from export statements and declarations
- **Second pass**: Parses declarations and marks them as exported if their name is in the exported names set

**Key Methods:**

- `parseFile(filePath)` - Parse single file
- `parseDirectory(dirPath, pattern)` - Parse directory with glob
- `extractJSDoc(node)` - Extract JSDoc comments
- `getExportAssignmentName(node)` - Extract name from default export statements

### React Component Parser

**File:** `packages/parser/src/parsers/react-parser.ts`

Specialized React component detection:

- Function components (arrow and regular functions)
- Class components extending React.Component
- Props extraction from inline types and interfaces
- React hooks detection (useState, useEffect, custom hooks)
- JSX detection for component identification

**Key Methods:**

- `parseComponent(filePath)` - Returns array of ComponentMetadata
- `extractHooks(node)` - Finds all hook usage
- `extractPropsFromType(typeNode)` - Extracts props from TypeScript types

### CLI Commands

**Files:** `packages/cli/src/commands/`

**Init Command** (`init.ts`):

- Interactive prompts using inquirer
- Generates `cognidocs.config.js`
- Options: --force (overwrite), --yes (skip prompts)

**Build Command** (`build.ts`):

- Loads configuration from `cognidocs.config.js`
- Orchestrates TypeScript + React parsing
- Outputs JSON files:
  - `docs/data.json` - Full parsed metadata
  - `docs/components/*.json` - Individual components
- Shows statistics (components, functions, classes, interfaces, types)

### Shared Libraries

**@cognidocs/types** - Type definitions for all metadata structures
**@cognidocs/utils** - File, path, and string utilities
**@cognidocs/constants** - Framework lists, file extensions, themes

## Phase 2 Implementation (COMPLETE)

### Dependency Analyzer

**File:** `packages/analyzer/src/DependencyAnalyzer.ts`

Analyzes module dependencies and relationships:

- Builds dependency graphs from parse results
- Detects circular dependencies
- Calculates module metrics (imports, exports, dependents)
- Identifies orphaned modules

**Key Methods:**

- `analyze(parseResults)` - Returns DependencyGraph
- `detectCircularDependencies()` - Finds circular import chains
- `getModuleMetrics(modulePath)` - Get import/export counts

### Coverage Calculator

**File:** `packages/coverage/src/CoverageCalculator.ts`

Calculates documentation coverage metrics:

- Function documentation coverage
- Class/interface documentation coverage
- Type coverage analysis
- Overall project coverage scores

**CLI Commands:**

- `cognidocs analyze` - Generate dependency analysis
- `cognidocs coverage` - Calculate documentation coverage

## Phase 3 & 3.5 Implementation (COMPLETE)

### Documentation Generator

**File:** `packages/docs-generator/src/DocsGenerator.ts`

Converts parsed metadata into structured documentation:

- Generates markdown documentation files
- Organizes content by categories (components, functions, classes, etc.)
- Processes additional-documentation folder
- Parses frontmatter metadata (title, description, category, order)
- Supports multiple output formats

**Recent Enhancement - Markdown Table Escaping:**

- **File:** [packages/docs-generator/src/MarkdownGenerator.ts](packages/docs-generator/src/MarkdownGenerator.ts:19-22)
- **Problem:** TypeScript union types (e.g., `'primary' | 'secondary' | 'danger'`) broke markdown tables because `|` is the table delimiter
- **Solution:** Added `escapeMarkdownPipes()` method that replaces `|` with `\|` in all type strings
- **Applied to:** All table generation methods (components, functions, classes, interfaces)
- **Result:** Union types now render properly in documentation tables

### Site Builder

**File:** `packages/site-builder/src/SiteBuilder.ts`

Builds premium static documentation sites with **automatic package manager detection**:

- **Package Manager Auto-Detection** - Automatically detects and uses npm, pnpm, or yarn
- **React + Vite + TypeScript** - Modern build stack
- **Shadcn/ui + Tailwind CSS** - Premium UI components
- **12 Professional Themes** - GitBook, GitHub, Nord, Dracula, Monokai, Solarized, One Dark, Material (with light/dark variants)
- **Advanced Search** - Lunr.js with Cmd+K command palette
- **Interactive Dependency Graphs** - D3.js force-directed visualization
- **Mermaid.js Diagrams** - Full support for Mermaid diagrams in markdown (flowcharts, sequence, class, state, ER, Gantt, pie, git graphs)
- **Callout Boxes** - Four types of callouts (info, warning, tip, danger) with remark-directive syntax (`:::type`)
- **Responsive Navigation** - Collapsible sidebar with hierarchical sections
- **Markdown Rendering** - react-markdown with syntax highlighting (rehype-highlight)
- **Additional Documentation** - Guides section with frontmatter support
- **Code Blocks** - Copy-to-clipboard, language badges, proper React element handling
- **Table of Contents** - Auto-generated sticky TOC for long pages
- **Project Branding** - Custom header with project name and version
- **Windows Compatibility** - Automatic fixes for npm's Rollup dependency bug

**Key Features:**

- Hash-based routing for SPA navigation
- Frontmatter stripping (YAML metadata hidden from rendered output)
- Non-clickable section headers (TOC-only navigation)
- Normalized table styling for component props
- Proper code rendering in all contexts (inline, block, tables)
- Theme persistence with localStorage
- Mobile-responsive design
- Clean, minimal layout (footer removed for simplicity)
- Optimized navigation order (Introduction → Project Overview → Dependency Graph)
- Polished focus states without visual overflow

**Recent UI Polish & Bug Fixes:**

1. **Footer Removal** (MVP Polish)
   - Removed professional footer component for cleaner, more minimal design
   - Files modified: [Layout.tsx](packages/site-builder/src/template/src/components/Layout.tsx)
   - Deleted: Footer.tsx component

2. **Navigation Reordering** (UX Improvement)
   - Reordered sidebar navigation for better information hierarchy
   - New order: Introduction (README) → Project Overview → Dependency Graph
   - File: [Sidebar.tsx](packages/site-builder/src/template/src/Sidebar.tsx:208-219)

3. \*\*Sidebar Focus Ring
