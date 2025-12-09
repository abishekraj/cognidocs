# CogniDocs Project Structure

Complete overview of the monorepo structure.

```
cognidocs/
├── .vscode/                       # VS Code workspace settings
│   ├── settings.json             # Editor configuration
│   └── extensions.json           # Recommended extensions
│
├── packages/                      # Core library packages
│   ├── cli/                      # 🟡 Phase 1 - Command-line interface
│   │   ├── src/
│   │   │   ├── commands/         # CLI command implementations
│   │   │   │   ├── init.ts
│   │   │   │   ├── build.ts
│   │   │   │   └── index.ts
│   │   │   ├── config/           # Configuration management
│   │   │   │   └── index.ts
│   │   │   ├── orchestration/    # Agent orchestration
│   │   │   │   └── index.ts
│   │   │   ├── __tests__/
│   │   │   ├── cli.ts           # CLI entry point (bin)
│   │   │   └── index.ts
│   │   ├── package.json
│   │   ├── tsconfig.json
│   │   ├── tsup.config.ts
│   │   └── README.md
│   │
│   ├── parser/                   # 🟡 Phase 1 - AST parsing
│   │   ├── src/
│   │   │   ├── parsers/
│   │   │   │   ├── typescript-parser.ts
│   │   │   │   ├── react-parser.ts
│   │   │   │   └── index.ts
│   │   │   ├── extractors/       # Metadata extractors
│   │   │   │   └── index.ts
│   │   │   ├── visitors/         # AST visitors (future)
│   │   │   ├── __tests__/
│   │   │   ├── types.ts          # Parser type definitions
│   │   │   └── index.ts
│   │   ├── package.json
│   │   ├── tsconfig.json
│   │   ├── tsup.config.ts
│   │   └── README.md
│   │
│   ├── analyzer/                 # 🔴 Phase 2 - Code analysis
│   │   ├── src/
│   │   │   └── index.ts
│   │   ├── package.json
│   │   └── README.md
│   │
│   ├── coverage/                 # 🔴 Phase 2 - Coverage tracking
│   │   ├── src/
│   │   │   └── index.ts
│   │   ├── package.json
│   │   └── README.md
│   │
│   ├── docs-generator/           # 🔴 Phase 3 - Doc generation
│   │   ├── src/
│   │   └── README.md
│   │
│   ├── site-builder/             # 🔴 Phase 3 - Static site builder
│   │   ├── src/
│   │   └── README.md
│   │
│   ├── graph-viz/                # 🔴 Phase 4 - Visualization
│   │   ├── src/
│   │   └── README.md
│   │
│   ├── component-preview/        # 🔴 Phase 5 - Component previews
│   │   ├── src/
│   │   └── README.md
│   │
│   ├── ai/                       # 🔴 Phase 6 - AI integration
│   │   ├── src/
│   │   │   └── index.ts
│   │   ├── package.json
│   │   └── README.md
│   │
│   └── testing/                  # 🟡 Phase 1 - Test utilities
│       ├── src/
│       └── README.md
│
├── shared/                       # Shared libraries
│   ├── types/                    # TypeScript type definitions
│   │   ├── src/
│   │   │   └── index.ts
│   │   ├── package.json
│   │   ├── tsconfig.json
│   │   └── tsup.config.ts
│   │
│   ├── utils/                    # Utility functions
│   │   ├── src/
│   │   │   ├── file-utils.ts
│   │   │   ├── path-utils.ts
│   │   │   ├── string-utils.ts
│   │   │   └── index.ts
│   │   ├── package.json
│   │   ├── tsconfig.json
│   │   └── tsup.config.ts
│   │
│   └── constants/                # Shared constants
│       ├── src/
│       │   └── index.ts
│       ├── package.json
│       ├── tsconfig.json
│       └── tsup.config.ts
│
├── apps/                         # SaaS applications
│   ├── saas-platform/            # 🔴 Phase 7 - Main SaaS app
│   │   └── README.md             # Next.js + Supabase
│   │
│   ├── marketplace/              # 🔴 Phase 9 - Theme/plugin marketplace
│   │   └── README.md
│   │
│   └── collaboration/            # 🔴 Phase 7 - Real-time features
│       └── README.md
│
├── examples/                     # Sample projects for testing
│   ├── sample-react/             # React + TypeScript example
│   │   ├── src/
│   │   │   ├── components/
│   │   │   │   └── Button.tsx
│   │   │   └── utils/
│   │   │       └── helpers.ts
│   │   ├── package.json
│   │   ├── cognidocs.config.js
│   │   └── README.md
│   │
│   ├── sample-nextjs/            # Next.js example (future)
│   │   └── (placeholder)
│   │
│   └── sample-vue/               # Vue example (future)
│       └── (placeholder)
│
├── docs/                         # Project documentation
│   ├── architecture/             # Architecture docs
│   ├── api/                      # API documentation
│   └── guides/                   # User guides
│
├── config/                       # Shared configuration
│
├── .github/                      # GitHub configuration (future)
│   └── workflows/                # CI/CD workflows
│
├── package.json                  # Root package.json (workspaces)
├── turbo.json                    # Turbo monorepo config
├── tsconfig.json                 # Root TypeScript config
├── .eslintrc.json               # ESLint configuration
├── .prettierrc.json             # Prettier configuration
├── .gitignore                   # Git ignore rules
├── README.md                    # Main project README
├── CLAUDE.md                    # Claude Code guidelines
├── PHASES.md                    # Development phases guide
├── PROJECT_STRUCTURE.md         # This file
└── agents.md                    # Original architecture doc
```

## Package Dependencies

```
CLI ──┬──> Parser ──> Types, Utils, Constants
      ├──> Utils
      └──> Constants

Parser ──> Types, Utils

Analyzer ──> Parser, Types, Utils

Coverage ──> Parser, Types

Docs-Generator ──> Parser, Analyzer, Types

Site-Builder ──> Docs-Generator, Graph-Viz, Component-Preview

Graph-Viz ──> Analyzer

Component-Preview ──> Parser

AI ──> Types (+ external: OpenAI, Anthropic)

Testing ──> (used by all packages)
```

## Build Order

1. **shared/** - Types, Utils, Constants (no dependencies)
2. **packages/parser** - Depends on shared
3. **packages/analyzer** - Depends on parser
4. **packages/coverage** - Depends on parser
5. **packages/cli** - Depends on parser, utils, constants
6. **packages/docs-generator** - Depends on parser, analyzer
7. **packages/graph-viz** - Depends on analyzer
8. **packages/component-preview** - Depends on parser
9. **packages/site-builder** - Depends on docs-generator
10. **packages/ai** - Depends on types
11. **apps/** - Depend on various packages

## File Naming Conventions

- **TypeScript files**: `kebab-case.ts` or `PascalCase.tsx` (components)
- **Config files**: `name.config.ts/js`
- **Test files**: `*.test.ts` or `__tests__/*.ts`
- **Type files**: `types.ts` or `*.types.ts`
- **Index files**: `index.ts` (re-exports)

## Import Paths

Using TypeScript path aliases defined in root `tsconfig.json`:

```typescript
import { Parser } from '@cognidocs/parser';
import { FileUtils } from '@cognidocs/utils';
import { PHASES } from '@cognidocs/constants';
import type { ParseResult } from '@cognidocs/types';
```

## Phase Status Legend

- 🟢 **Complete** - Fully implemented and tested
- 🟡 **In Progress** - Currently being developed
- 🔴 **Not Started** - Planned but not yet begun

## Key Files

- **[package.json](package.json)** - Workspace configuration, scripts
- **[turbo.json](turbo.json)** - Monorepo build pipeline
- **[tsconfig.json](tsconfig.json)** - TypeScript configuration with path aliases
- **[PHASES.md](PHASES.md)** - Detailed phase breakdown and tasks
- **[README.md](README.md)** - Project overview and quick start
- **[CLAUDE.md](CLAUDE.md)** - Guidelines for Claude Code
- **[agents.md](agents.md)** - Original detailed architecture

## Getting Started

1. **Install dependencies**: `npm install`
2. **Build all packages**: `npm run build`
3. **Run Phase 1 in dev mode**: `npm run phase1`
4. **Run tests**: `npm test`
5. **Test CLI**: `cd examples/sample-react && cognidocs init`

## Next Steps (Phase 1)

1. Implement TypeScript Compiler API integration in `packages/parser`
2. Complete React component parsing
3. Extract JSDoc comments
4. Write comprehensive tests
5. Test with `examples/sample-react`

## Useful Commands

```bash
# Development
npm run dev                              # All packages in watch mode
npm run phase1                           # Phase 1 packages only

# Building
npm run build                            # Build everything
npm run build --filter=@cognidocs/cli    # Build specific package

# Testing
npm test                                 # Run all tests
npm test --filter=@cognidocs/parser      # Test specific package

# Linting & Formatting
npm run lint                             # Lint all code
npm run format                           # Format with Prettier
npm run typecheck                        # TypeScript type checking

# Cleaning
npm run clean                            # Remove all build artifacts
```
