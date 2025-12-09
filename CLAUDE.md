# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Status

**Current Phase:** Phase 1 (Foundation) - ✅ COMPLETE

CogniDocs is a comprehensive JavaScript/TypeScript documentation tool combining features from Compodoc and Storybook with AI capabilities. The project uses a monorepo architecture with Turbo, organized into 10 development phases.

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
cognidocs build             # Parse code and generate JSON output
cognidocs build --output ./docs  # Custom output directory
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

## Architecture Overview

### Monorepo Structure
```
packages/          # Core library packages
├── cli/          # ✅ Command-line interface (Phase 1)
├── parser/       # ✅ TypeScript/React AST parser (Phase 1)
├── analyzer/     # 🔴 Dependency analysis (Phase 2)
├── coverage/     # 🔴 Coverage tracking (Phase 2)
├── docs-generator/  # 🔴 Doc generation (Phase 3)
├── site-builder/    # 🔴 Static site builder (Phase 3)
├── graph-viz/       # 🔴 Visualizations (Phase 4)
├── component-preview/  # 🔴 Live previews (Phase 5)
├── ai/              # 🔴 AI integration (Phase 6)
└── testing/         # 🟡 Test utilities (Phase 1)

shared/           # Shared libraries
├── types/        # TypeScript type definitions
├── utils/        # Utility functions
└── constants/    # Project constants

apps/             # SaaS applications (Phase 7+)
├── saas-platform/
├── marketplace/
└── collaboration/

examples/         # Sample projects for testing
└── sample-react/ # React example with Button component
```

### Package Dependencies
- CLI depends on: Parser, Types, Utils, Constants
- Parser depends on: Types, Utils
- All packages use shared libraries (types, utils, constants)

## Phase 1 Implementation (COMPLETE)

### TypeScript Parser
**File:** `packages/parser/src/parsers/typescript-parser.ts`

Implements full TypeScript Compiler API integration:
- Parses `.ts` and `.tsx` files
- Extracts: functions, classes, interfaces, types, imports, exports
- JSDoc comment extraction with tags (@param, @returns, @example)
- Directory parsing with glob patterns
- Line number tracking for all elements

**Key Methods:**
- `parseFile(filePath)` - Parse single file
- `parseDirectory(dirPath, pattern)` - Parse directory with glob
- `extractJSDoc(node)` - Extract JSDoc comments

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

## Output Format (Phase 1)

Phase 1 outputs structured JSON. Example component:

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

Phase 3 will convert this JSON to HTML documentation.

## Phase Reference System

When working on phases, reference them as:
- "Let's implement Phase 2"
- "Show me Phase 3 tasks"
- "Complete the analyzer from Phase 2"

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

## Known Limitations (By Design)

Phase 1 outputs JSON only. Future phases add:
- Phase 2: Dependency graphs, coverage
- Phase 3: HTML generation, themes, search
- Phase 4: Visual graphs
- Phase 5: Component previews
- Phase 6: AI features
- Phase 7+: SaaS platform

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

## Next Steps: Phase 2

**Goal:** Dependency analysis and coverage tracking

**Tasks:**
1. Implement `@cognidocs/analyzer` package
   - Build dependency graphs from parse results
   - Detect circular dependencies
   - Module relationship extraction

2. Implement `@cognidocs/coverage` package
   - Calculate documentation coverage
   - Import test coverage (Jest/Vitest)
   - Type coverage analysis

3. Add CLI commands:
   - `cognidocs analyze`
   - `cognidocs coverage`

**To start Phase 2:**
Reference the phase in conversation: "Let's implement Phase 2" or "Start dependency graph generation"

## References

- **[PHASES.md](PHASES.md)** - Complete phase breakdown
- **[PHASE1_COMPLETE.md](PHASE1_COMPLETE.md)** - Phase 1 summary
- **[SETUP.md](SETUP.md)** - Detailed setup instructions
- **[PROJECT_STRUCTURE.md](PROJECT_STRUCTURE.md)** - Full directory layout
- **[agents.md](agents.md)** - Original architecture design
