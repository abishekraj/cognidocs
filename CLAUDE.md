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
npm link -w @cognidocs/cli  # Link CLI globally
cognidocs init              # Initialize config (interactive)
cognidocs init --yes        # Initialize with defaults
cognidocs build             # Parse code and generate documentation
cognidocs build --output ./docs  # Custom output directory
cognidocs analyze           # Analyze dependencies (Phase 2)
cognidocs coverage          # Generate coverage report (Phase 2)
cognidocs serve             # Start development server (Phase 3)
cognidocs serve --port 3001 # Serve on custom port
```

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

Builds premium static documentation sites:

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

3. **Sidebar Focus Ring Overflow Fix** (Visual Bug)
   - **Problem:** Selected sidebar items had focus rings extending beyond boundaries, causing cutoff
   - **Solution:** Changed `focus:ring-offset-1` to `focus:ring-inset` to keep focus indicators inside element boundaries
   - **Additional fixes:** Adjusted padding (`px-3` → `pl-3 pr-2`), added `pr-1` to nav element, added `flex-shrink-0` to icons
   - **Files modified:**
     - [NavigationItem.tsx](packages/site-builder/src/template/src/components/NavigationItem.tsx:36,47)
     - [Sidebar.tsx](packages/site-builder/src/template/src/Sidebar.tsx:185,205)
   - **Result:** Clean focus indicators without overflow

4. **Callout Boxes Implementation** (Content Enhancement)
   - **Feature:** Added support for four types of callout boxes: info, warning, tip, danger
   - **Syntax:** Uses remark-directive syntax (`:::type` ... `:::`)
   - **Components:**
     - Created [Callout.tsx](packages/site-builder/src/template/src/components/Callout.tsx) with styled variants for each type
     - Uses Lucide React icons (Info, AlertTriangle, Lightbulb, AlertCircle)
     - Full dark mode support with theme-aware colors
   - **Integration:**
     - Updated [MarkdownPage.tsx](packages/site-builder/src/template/src/pages/MarkdownPage.tsx) with `remarkCallouts()` plugin
     - Added `remark-directive` and `unist-util-visit` dependencies
     - Custom div component handler to render Callout components
   - **Documentation:** Created comprehensive [callout-boxes.md](examples/sample-react/additional-documentation/guides/callout-boxes.md) guide
   - **Result:** Rich, visually appealing callouts that enhance documentation readability

**CLI Commands:**

- `cognidocs build` - Parse code and generate documentation site
- `cognidocs serve` - Start development server on port 4173 (or next available)
- `cognidocs serve --port <port>` - Use custom port

### Site Template Structure

**Path:** `packages/site-builder/src/template/`

**Key Components:**

- `src/App.tsx` - Main application with hash-based routing
- `src/Sidebar.tsx` - Navigation with search, theme switcher, hierarchical sections
- `src/components/Layout.tsx` - Page layout with header, sidebar, content
- `src/components/Header.tsx` - Project branding and navigation
- `src/components/CommandPalette.tsx` - Cmd+K advanced search
- `src/components/ThemeSwitcher.tsx` - Theme dropdown selector
- `src/components/TableOfContents.tsx` - Auto-generated TOC
- `src/components/CodeBlock.tsx` - Code blocks with copy functionality
- `src/components/Callout.tsx` - Callout boxes for highlighting important information
- `src/pages/MarkdownPage.tsx` - Markdown rendering with enhancements
- `src/pages/ComponentDetailPage.tsx` - Component documentation display
- `src/pages/GraphPage.tsx` - Dependency graph visualization

**Markdown Rendering Features:**

- Frontmatter removal via regex `/^---\n[\s\S]*?\n---\n*/`
- Custom heading components (h1-h4) without auto-links
- Normalized table styling
- Code block handling with React element text extraction
- TOC heading extraction after frontmatter removal

### Graph Visualization

**File:** `packages/graph-viz/src/DependencyGraph.tsx`

React component for interactive dependency graphs:

- D3.js force-directed graph visualization with force simulation
- Node highlighting on hover
- Zoom and pan controls (D3 zoom behavior)
- Drag nodes for manual layout adjustments
- Shows module relationships and dependencies
- Supports both array and object node data formats
- Flexible edge property naming (source/target or from/to)

### Plugin System

**File:** `packages/plugin-core/src/index.ts`

Core plugin infrastructure:

- Plugin lifecycle hooks
- Type-safe plugin interfaces
- Plugin loading and initialization (basic implementation)

## Output Format

### Phase 1-2 Output

`cognidocs build` generates structured JSON files:

- `docs/data.json` - Full parsed metadata including parse results, dependency graph, coverage metrics
- `docs/components/*.json` - Individual component files

### Phase 3 & 3.5 Output

`cognidocs build` + `cognidocs serve` generates:

- **Premium documentation site** - React + Vite + TypeScript + Shadcn/ui
- **Markdown documentation** - Auto-generated from code with frontmatter metadata
- **Search index** - Lunr.js with Cmd+K command palette
- **Interactive dependency graphs** - D3.js force-directed visualization
- **12 Professional themes** - Light/dark variants with localStorage persistence
- **Additional documentation** - Guides section from `/additional-documentation/` folder
- **Static site ready for deployment** - Production build with optimized assets

Example component JSON:

```json
{
  "name": "Button",
  "type": "function",
  "props": [
    {
      "name": "variant",
      "type": "'primary' | 'secondary' | 'danger'",
      "required": false,
      "description": "The button variant"
    }
  ],
  "hooks": [],
  "description": "Button component for user interactions",
  "filePath": "/path/to/Button.tsx",
  "line": 24,
  "framework": "react"
}
```

## Phase Reference System

When working on phases, reference them as:

- "Let's implement Phase 4"
- "Show me Phase 5 tasks"
- "Complete the component preview from Phase 5"

Each package README indicates its phase and status (🟢 Complete, 🟡 In Progress, 🔴 Not Started).

## Testing Approach

Tests are in `packages/*/src/__tests__/`:

- **Unit tests** for parsers (TypeScript, React)
- **Integration tests** for CLI commands (planned)
- **Fixtures** in `__test_files__` directories
- Use Vitest as test framework

Current test coverage focuses on:

- Function/class/interface parsing
- JSDoc extraction
- React component detection
- Props and hooks extraction

## Common Development Patterns

### Adding a New Parser Feature

1. Add types to `packages/parser/src/types.ts`
2. Implement extraction in appropriate parser file
3. Update `visit()` method to detect new node types
4. Add tests in `__tests__` directory
5. Update shared types if needed

### Adding a CLI Command

1. Create command file in `packages/cli/src/commands/`
2. Export command function with options interface
3. Import and wire up in `packages/cli/src/cli.ts`
4. Use chalk for colored output, ora for spinners
5. Handle errors gracefully with try/catch

### Working with Types

All metadata types are in `packages/parser/src/types.ts`:

- `ParseResult` - Top-level parse output
- `ComponentMetadata` - React component info
- `FunctionMetadata` - Function details
- `ClassMetadata` - Class structure
- etc.

### Building and Developing

**Turbo Build System:**

- Turbo caches build outputs for fast incremental builds
- Dependencies are built automatically (e.g., building CLI builds Parser first)
- Use `--filter` to build specific packages: `npm run build --filter=@cognidocs/parser`

**Common Workflows:**

```bash
# Full rebuild after pulling changes
npm run build

# Develop specific package
npm run dev --filter=@cognidocs/cli

# Test changes across multiple packages
npm run dev  # Runs all packages in watch mode

# After making changes to shared packages (types, utils, constants)
npm run build  # Rebuild dependents
```

**tsup Configuration:**

- All packages use tsup for bundling
- Outputs both ESM (.mjs) and types (.d.ts)
- Watch mode enabled in dev scripts

## Known Limitations and Future Phases

Current limitations and upcoming features:

- Phase 4: Enhanced visual graphs and diagrams
- Phase 5: Live component previews and playground
- Phase 6: AI-powered features (doc generation, semantic search, chat)
- Phase 7+: SaaS platform, team collaboration, marketplace

## Troubleshooting

**"Cannot find module @cognidocs/...'"**

```bash
npm run build  # Rebuild all packages
```

**"cognidocs: command not found"**

```bash
npm link -w @cognidocs/cli
```

**TypeScript errors in imports**

```bash
npm run typecheck  # Check for issues
npm run build      # Rebuild
```

**Parser not finding files**

- Check `cognidocs.config.js` entry path
- Ensure files match pattern `**/*.{ts,tsx}`
- Files in `node_modules`, `dist`, `*.test.*` are excluded by default

**Server not starting**

```bash
# Make sure site is built first
cognidocs build
cognidocs serve
```

## 🎉 MVP Status: READY FOR RELEASE

**Phase 3.5 is COMPLETE with all critical bugs fixed and UI polished.**

### What's Included in MVP:

✅ Full TypeScript/React parsing with JSDoc extraction
✅ Dependency analysis and coverage tracking
✅ Premium documentation site with 12 professional themes
✅ Advanced search with Cmd+K command palette
✅ Interactive dependency graphs with D3.js
✅ Responsive design with accessible navigation
✅ Markdown documentation with proper table rendering
✅ Additional guides/documentation support with frontmatter
✅ Clean, minimal UI with polished interactions
✅ All critical bugs fixed (table escaping, focus overflow)

### MVP Deployment Ready:

The generated documentation site is production-ready and can be deployed to:

- **GitHub Pages** - Static site hosting
- **Netlify** - Automatic deployments
- **Vercel** - Optimized for React/Vite
- **AWS S3 + CloudFront** - Enterprise hosting
- **Any static hosting** - Pure HTML/CSS/JS output

### Next Steps: Post-MVP Enhancements

**Optional Polish Tasks (Not Critical):**

- **Task 7:** Statistics & Metrics Dashboard - Display project metrics on overview page
- **Task 8:** Mobile/Accessibility Audit - WCAG 2.1 AA verification
- **Task 9:** Performance Optimization - Code splitting and bundle optimization

**Future Phase Options:**

**Phase 4 - Enhanced Visualizations:**

- Advanced graph layouts (hierarchical, circular)
- Component relationship diagrams
- Mermaid.js integration for diagrams in markdown

**Phase 5 - Plugin System:**

- Custom plugin development API
- Plugin marketplace foundation
- Theme plugin architecture

**Phase 6 - Component Previews:**

- Live component playground
- Props editing interface
- Multiple framework support (React, Vue, Svelte)

**Phase 7 - AI Integration:**

- OpenAI/Anthropic integration
- Semantic search with vector embeddings
- Auto-generate missing documentation
- Interactive chatbot for codebase queries

**To start next enhancement:**
Reference the task/phase in conversation: "Let's work on Task 7" or "Start Phase 4" or "Add component previews"

## References

- **[PHASES.md](PHASES.md)** - Complete phase breakdown
- **[PHASE1_COMPLETE.md](PHASE1_COMPLETE.md)** - Phase 1 summary
- **[SETUP.md](SETUP.md)** - Detailed setup instructions
- **[PROJECT_STRUCTURE.md](PROJECT_STRUCTURE.md)** - Full directory layout
- **[agents.md](agents.md)** - Original architecture design
