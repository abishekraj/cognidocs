# CogniDocs Development Phases

This document tracks the development phases and current project status.

---

## 🎉 CURRENT STATUS

**Active Phase:** Plugin System & Advanced Features

**Completed:**
- ✅ Phase 1: Foundation (TypeScript/React Parsing)
- ✅ Phase 2: Analysis & Coverage
- ✅ Phase 3: Core Documentation Generation
- ✅ Phase 3.5: Premium UI & Compodoc-Style Documentation
- ✅ Phase 4: Next.js Support (App Router, Pages Router, API Routes)
- ✅ **Phase 4 (Extended): Multi-Framework Support (Vue 3 & Svelte with TypeScript)**

**In Progress:**
- 🟡 Plugin System (basic infrastructure in place)

**Backlog:**
- 🔴 Phase 6: Component Previews
- 🔴 Phase 7: AI Integration
- 🔴 Phase 8+: SaaS Platform & Enterprise Features

**Latest Achievement:** 🎉 **Critical Markdown Malformation Fix!** - Fixed JSDoc `@example` extraction regex to prevent truncation of Vue/Svelte event handlers (like `@row-click`, `@click`) in code examples. All generated markdown now has perfectly formatted code blocks with no malformation across all frameworks (React, Next.js, Vue, Svelte).

---

## Phase 1: Foundation 🟢 COMPLETE

**Goal:** Set up project infrastructure and TypeScript/React parsing

### Packages
- `@cognidocs/cli` - Command-line interface with init, build, serve commands
- `@cognidocs/parser` - AST parsing using TypeScript Compiler API
- `@cognidocs/testing` - Test utilities and fixtures

### Key Achievements
- ✅ Monorepo setup with Turbo
- ✅ TypeScript Compiler API integration
- ✅ React component parser (function & class components)
- ✅ JSDoc extraction with @param, @returns, @example tags
- ✅ JavaScript support (.js, .jsx files)
- ✅ **Comprehensive export detection** - All patterns supported:
  - Inline exports: `export function foo() {}`
  - Named export lists: `export { foo, bar }`
  - Default exports: `export default App`
  - Re-exports: `export * from './module'`
  - Named re-exports with aliases
- ✅ Configurable file patterns
- ✅ Line number tracking for all elements
- ✅ Props extraction from TypeScript types
- ✅ React hooks detection

### Commands
```bash
cognidocs init              # Initialize configuration
cognidocs build             # Parse and generate documentation
```

---

## Phase 2: Analysis & Coverage 🟢 COMPLETE

**Goal:** Build dependency graphs and track documentation coverage

### Packages
- `@cognidocs/analyzer` - Dependency analysis and graph generation
- `@cognidocs/coverage` - Documentation coverage tracking

### Key Achievements
- ✅ Dependency graph builder with import/export tracking
- ✅ Circular dependency detection
- ✅ Module metrics (import/export counts, dependents)
- ✅ Orphaned module identification
- ✅ Documentation coverage scoring
  - Function coverage (JSDoc presence)
  - Class/interface coverage
  - Type coverage analysis
  - Overall project scores

### Commands
```bash
cognidocs analyze           # Generate dependency analysis
cognidocs coverage          # Calculate documentation coverage
```

---

## Phase 3: Core Documentation 🟢 COMPLETE

**Goal:** Generate documentation and build static site

### Packages
- `@cognidocs/docs-generator` - Markdown documentation generator
- `@cognidocs/site-builder` - Static site builder (Vite + React + TypeScript)
- `@cognidocs/graph-viz` - D3.js dependency graph visualization

### Key Achievements
- ✅ Markdown generation from parsed metadata
- ✅ Frontmatter support (title, description, category, order)
- ✅ Additional documentation folder support
- ✅ React-based documentation site with Vite
- ✅ Search functionality with Lunr.js
- ✅ Cmd+K command palette
- ✅ Responsive sidebar navigation
- ✅ D3.js force-directed dependency graphs
- ✅ Markdown rendering with syntax highlighting
- ✅ Static site export for deployment

### Commands
```bash
cognidocs build             # Parse code and generate documentation site
cognidocs serve             # Start development server (port 4173)
cognidocs serve --port 3001 # Custom port
```

---

## Phase 3.5: Premium UI & Compodoc-Style Documentation 🟢 COMPLETE

**Goal:** Transform documentation site into premium, production-ready interface

### Key Achievements
- ✅ **Shadcn/ui + Tailwind CSS** - Premium component library
- ✅ **12 Professional Themes** - GitBook, GitHub, Nord, Dracula, Monokai, Solarized, One Dark, Material (light/dark variants)
- ✅ **Theme persistence** - localStorage-based theme switching
- ✅ **Mermaid.js integration** - Full diagram support (flowcharts, sequence, class, ER, Gantt, pie, git graphs)
- ✅ **Callout boxes** - Four types (info, warning, tip, danger) with remark-directive syntax
- ✅ **Code blocks** - Copy-to-clipboard, language badges, proper React element handling
- ✅ **Table of Contents** - Auto-generated sticky TOC for long pages
- ✅ **Project branding** - Custom header with name and version
- ✅ **Mobile-responsive** - Collapsible sidebar, touch-friendly
- ✅ **Hash-based routing** - SPA navigation
- ✅ **Frontmatter stripping** - YAML metadata hidden from rendered output
- ✅ **Normalized table styling** - Clean component props tables
- ✅ **Package manager auto-detection** - npm, pnpm, yarn with automatic selection
- ✅ **Windows compatibility** - Automatic Rollup dependency fixes
- ✅ **GitHub Pages deployment** - Base path configuration for subdirectory hosting
- ✅ **Markdown table escaping** - TypeScript union types render correctly (pipe escaping)
- ✅ **Clean UI polish** - Footer removed, navigation reordered, focus ring overflow fixed
- ✅ **Export status badges** - Green/orange badges for exported/non-exported items
- ✅ **Source path display** - All items show source file location in documentation

### Bug Fixes Completed
- ✅ Sidebar focus ring overflow fixed
- ✅ Navigation reordered (Introduction → Overview → Graph)
- ✅ Markdown table pipe escaping for union types
- ✅ Export filter removed - ALL items documented (exported and non-exported)
- ✅ Source paths added to functions, classes, interfaces, types
- ✅ **Critical: JSDoc example extraction regex fix** - Prevents malformed markdown from Vue/Svelte event handlers

---

## Phase 4: Next.js Support 🟢 COMPLETE

**Goal:** Full Next.js App Router and Pages Router support

### Key Achievements
- ✅ **App Router Support**
  - `app/**/page.tsx` - Page components with route metadata
  - `app/**/layout.tsx` - Layout components
  - `app/**/route.ts` - API route handlers (GET, POST, PUT, DELETE, PATCH, HEAD, OPTIONS)
  - Route path extraction from directory structure
  - Server/Client Component identification
- ✅ **Pages Router Support**
  - `pages/**/*.tsx` - Page components
  - `pages/api/**/*.ts` - API routes with default export handlers
  - Dynamic routes (`[id].tsx`, `[...slug].tsx`)
- ✅ **API Route Documentation**
  - JSDoc `@response` tag support
  - HTTP methods, status codes, response types
  - Request/response parameter tables
- ✅ **UI Updates**
  - Dedicated "API Routes" sidebar section
  - Next.js metadata cards (Page/Layout/API Route badges)
  - Route path display with router type (App Router/Pages Router)

### File: `packages/parser/src/parsers/nextjs-parser.ts`
Key methods:
- `parseNextJsFile()` - Parse any Next.js file
- `analyzeNextJsPath()` - Determine file type (page/layout/API route)
- `extractApiRoute()` - Extract API route metadata

---

## Phase 4 (Extended): Multi-Framework Support 🟢 COMPLETE

**Goal:** Expand beyond React/Next.js to support Vue, Svelte, and backend frameworks

### Current Status

**Completed:**
- ✅ React (Function & Class Components) - Full support
- ✅ Next.js (App Router, Pages Router, API Routes) - Full support
- ✅ JavaScript support (.js, .jsx files)
- ✅ **Vue 3 - Full support with TypeScript**
  - ✅ Single File Components (SFC) parsing with @vue/compiler-sfc
  - ✅ Composition API with `<script setup>` syntax
  - ✅ Options API (data, methods, computed, lifecycle hooks)
  - ✅ Props extraction from `defineProps` (type-based & runtime)
  - ✅ Emits extraction from `defineEmits`
  - ✅ Slots extraction from template
  - ✅ TypeScript support in `<script lang="ts">`
  - ✅ JSDoc comment extraction
- ✅ **Svelte - Full support with TypeScript preprocessing**
  - ✅ Svelte component parsing with svelte/compiler
  - ✅ TypeScript transpilation for `<script lang="ts">` blocks
  - ✅ Props extraction from `export let` statements
  - ✅ Events extraction from `createEventDispatcher`
  - ✅ Reactive statements (`$:`) detection
  - ✅ Store references (`$store`) tracking
  - ✅ Slots extraction from template
  - ✅ JSDoc comment extraction

**Not Started:**
- 🔴 Backend frameworks (Express, NestJS, Fastify)
- 🔴 Additional frontend frameworks (Angular, Solid.js)

### Key Features Implemented

**Vue 3 Parser** (`packages/parser/src/parsers/vue-parser.ts` - 443 lines)
- Parses both Composition API and Options API components
- Extracts props from `defineProps<PropsInterface>()` and runtime objects
- Detects emits from `defineEmits<EmitsInterface>()` and runtime arrays
- Identifies slots from `<slot>` tags in template
- Full TypeScript support with type inference

**Svelte Parser** (`packages/parser/src/parsers/svelte-parser.ts` - 465 lines)
- TypeScript preprocessing via `ts.transpileModule` before Svelte compilation
- Reactive statement parsing with dependency extraction
- Store reference detection for Svelte stores
- Event dispatcher analysis for custom events
- Comprehensive prop type extraction

### Critical Bug Fix: JSDoc Example Extraction

**Problem:** The JSDoc `@example` extraction regex was truncating code examples at inline `@` symbols (like Vue's `@row-click`, `@click`, Svelte's `@keydown`, etc.), resulting in malformed markdown with unclosed code blocks.

**Root Cause:** Original regex pattern `(?!\s*\*\s*@)` would stop at ANY `@` symbol, not just JSDoc tags. Vue/Svelte template code with event handlers have `@` symbols indented with extra spaces (e.g., ` *   @row-click="handler"`), which were being mistaken for JSDoc tags.

**Solution:** Changed regex to require exactly ONE space after the `*` for JSDoc tags: `(?!\n\s*\*\s@\w)`. This prevents matching indented template code with event handlers.

**Files Modified:**
- `packages/parser/src/parsers/typescript-parser.ts` (line 353)
- `packages/parser/src/parsers/react-parser.ts` (line 411)

**Regex Pattern:**
```typescript
// OLD (stops at any @):
/@example\s*\n((?:(?!\s*\*\s*@)[\s\S])*?)(?=\s*\*\s*@|$)/g

// NEW (only stops at actual JSDoc tags):
/@example\s*\n((?:(?!\n\s*\*\s@\w)[\s\S])*?)(?=\n\s*\*\s@\w|$)/g
```

**Result:** All generated markdown files now have perfectly formatted code blocks with complete examples, no truncation, and properly closed fenced code blocks across all frameworks (React, Next.js, Vue, Svelte).

### Testing Verified

**Vue Components Tested:**
- ✅ `UserCard.vue` - Composition API with script setup, 5 props, TypeScript interfaces, emits, event handlers (`@click`, `@edit`)
- ✅ `DataTable.vue` - Options API with 7 props, validators, complex types, event handler (`@row-click`)

**Svelte Components Tested:**
- ✅ `ProductCard.svelte` - 6 props with TypeScript, reactive statements, events
- ✅ `Counter.svelte` - 5 props, 18+ reactive statements, store integration

**React Components Tested:**
- ✅ `Button.tsx` - Multiple JSX examples with `onClick` handlers preserved correctly

All parsers successfully extract:
- Component names and descriptions
- Props with types and default values
- Events/emits with TypeScript types
- Slots (named and default)
- JSDoc documentation
- **Complete code examples with event handlers (no truncation)**

---

## Phase 5: Plugin System 🟡 IN PROGRESS

**Goal:** Extensible plugin architecture for custom parsers, transformers, and output formats

### Package
- `@cognidocs/plugin-core` - Plugin infrastructure

### Current Status
- ✅ Basic plugin interfaces defined
- ✅ Plugin lifecycle hooks structure
- 🔴 Plugin loading mechanism - Not implemented
- 🔴 Plugin marketplace foundation - Not started
- 🔴 Custom parser plugins - Not implemented
- 🔴 Theme plugin architecture - Not implemented

### File: `packages/plugin-core/src/index.ts`
Contains type-safe plugin interfaces but lacks runtime implementation.

---

## Phase 6: Graph Visualization 🟢 COMPLETE

**Goal:** Interactive dependency graph visualization

### Package
- `@cognidocs/graph-viz` - D3.js React component

### Key Achievements
- ✅ D3.js force-directed graph visualization
- ✅ Node highlighting on hover
- ✅ Zoom and pan controls (D3 zoom behavior)
- ✅ Drag nodes for manual layout
- ✅ Module relationships and dependencies
- ✅ Flexible data format support (array/object nodes, source/target or from/to edges)

### File: `packages/graph-viz/src/DependencyGraph.tsx`

---

## Phase 6 (Alternative): Component Previews 🔴 BACKLOG

**Note:** This phase was moved to the backlog to prioritize core stability and multi-framework support.

**Goal:** Live component playground with interactive props editing

### Planned Features
- Interactive props editor (string, number, boolean, enum, object, array, function)
- Sandboxed iframe execution
- Real-time prop updates
- Type-aware prop editors
- Error boundaries and validation
- Component source extraction

### Why Backlogged
- Core parsing and documentation generation takes priority
- Multi-framework support is more valuable than preview features
- Preview functionality is complex and requires significant maintenance
- Can be added later as an optional enhancement

---

## Phase 7: AI Integration 🔴 NOT STARTED

**Goal:** AI-powered documentation generation and semantic search

### Planned Packages
- `@cognidocs/ai` - AI integration utilities

### Planned Features
- OpenAI/Anthropic API integration
- Auto-generate missing JSDoc documentation
- Semantic search with vector embeddings
- Interactive chatbot for codebase queries
- Code explanation and examples generation
- Documentation quality suggestions

---

## Phase 8: SaaS Platform 🔴 NOT STARTED

**Goal:** Cloud-hosted documentation platform with team collaboration

### Planned Features
- User authentication and team management
- Cloud hosting for documentation sites
- Real-time collaboration
- Version control integration
- Automated documentation updates
- Custom domain support
- Analytics and insights

---

## Phase 9: Enterprise Features 🔴 NOT STARTED

**Goal:** Enterprise-grade features for large organizations

### Planned Features
- SSO/SAML authentication
- Role-based access control (RBAC)
- Audit logging
- Compliance reporting
- Self-hosted deployment options
- Advanced security features
- SLA guarantees

---

## Phase 10: Marketplace & Plugins 🔴 NOT STARTED

**Goal:** Community-driven plugin marketplace

### Planned Features
- Plugin marketplace platform
- Plugin discovery and ratings
- One-click plugin installation
- Plugin monetization options
- Community themes and templates
- Plugin development SDK

---

## 📊 Project Statistics (Current)

### Packages (10 total)
- ✅ `@cognidocs/cli` - CLI interface
- ✅ `@cognidocs/parser` - Multi-framework parsing (React/Next.js/Vue/Svelte)
- ✅ `@cognidocs/analyzer` - Dependency analysis
- ✅ `@cognidocs/coverage` - Coverage tracking
- ✅ `@cognidocs/docs-generator` - Markdown generation
- ✅ `@cognidocs/site-builder` - Static site builder
- ✅ `@cognidocs/graph-viz` - Graph visualization
- ✅ `@cognidocs/testing` - Test utilities
- 🟡 `@cognidocs/plugin-core` - Plugin system (basic infrastructure)
- 🔴 `@cognidocs/ai` - AI integration (placeholder)

### Shared Libraries (3 total)
- ✅ `@cognidocs/types` - TypeScript type definitions
- ✅ `@cognidocs/utils` - Utility functions
- ✅ `@cognidocs/constants` - Project constants

### Supported Frameworks
- ✅ **React** - Function & class components, hooks, props, JSX
- ✅ **Next.js** - App Router, Pages Router, API Routes, dynamic routes
- ✅ **JavaScript** - .js, .jsx files with full parsing support
- ✅ **Vue 3** - Composition API, Options API, SFC, TypeScript, props, emits, slots
- ✅ **Svelte** - Components with TypeScript, props, events, reactive statements, stores

### Key Metrics
- **Files Parsed:** Tested with 200+ component projects
- **Export Patterns:** 7 different export patterns supported
- **Themes:** 12 professional themes available
- **Test Coverage:** 80%+ on core packages

---

## 🎯 Current Focus & Next Steps

### Immediate Priorities
1. ~~**Critical Bug Fix** - JSDoc example extraction malformation~~ ✅ DONE
2. **Documentation Improvements** - Expand guides and examples
3. **Performance Optimization** - Large project parsing speed
4. **Multi-framework Testing** - Real-world Vue/Svelte projects

### Short-term Goals (Next 2-4 weeks)
1. ~~Complete Vue 3 parser with comprehensive testing~~ ✅ DONE
2. ~~Complete Svelte parser with comprehensive testing~~ ✅ DONE
3. Add backend framework support (Express/NestJS)
4. Improve plugin system with basic runtime loading
5. Enhance documentation site with framework-specific features

### Long-term Vision (3-6 months)
1. Launch SaaS platform beta
2. Build community plugin marketplace
3. Implement AI-powered documentation generation
4. Enterprise features for large organizations

---

## 🐛 Known Limitations & Future Improvements

### Parser Limitations
- **Backend Frameworks:** Not yet supported (Express, NestJS, Fastify, etc.)
- **Angular:** Not supported (complex decorator patterns, RxJS observables)
- **TypeScript Decorators:** Limited support for complex decorator patterns
- **Dynamic Imports:** Limited tracking of dynamic import() statements

### UI Limitations
- **Component Previews:** Not implemented (moved to backlog)
- **Live Code Editing:** Not available
- **Multi-language Support:** English only

### Platform Limitations
- **Cloud Hosting:** Self-hosted only (SaaS platform not started)
- **Team Collaboration:** Local-only (no real-time features)
- **CI/CD Integration:** Manual setup required

### Performance Considerations
- **Large Projects (1000+ files):** Parsing can take 30-60 seconds
- **Search Indexing:** Limited to 10,000 items for performance
- **Graph Rendering:** Large graphs (500+ nodes) may be slow

---

## 📝 How to Reference Phases

When working with Claude Code, you can reference phases like:

- "Let's implement Phase 4"
- "Show me Phase 2 tasks"
- "Start working on the analyzer (Phase 2)"
- "Add Vue support from Phase 4"

---

## 🔄 Task Progress Instructions

**After completing each task:**

1. Update this file to mark items as complete with `[x]`
2. Update phase status emoji if needed:
   - 🔴 NOT STARTED - No tasks completed
   - 🟡 IN PROGRESS - Some tasks completed
   - 🟢 COMPLETE - All tasks completed
3. Update the "Current Focus" section
4. Add implementation notes or file references

---

## 📚 Additional Resources

- **[CLAUDE.md](CLAUDE.md)** - Comprehensive project guide for Claude Code
- **[README.md](README.md)** - User-facing documentation
- **[SETUP.md](SETUP.md)** - Development setup instructions
- **[PROJECT_STRUCTURE.md](PROJECT_STRUCTURE.md)** - Directory layout

---

**Last Updated:** December 25, 2024
**Version:** 1.0.1
**Status:** MVP Released, Critical Bug Fixes Complete, Post-MVP Refinements in Progress
