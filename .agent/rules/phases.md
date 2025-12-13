---
trigger: always_on
---

# CogniDocs Development Phases

This document provides a quick reference for each development phase and what to work on.

---

## 🎉 MVP STATUS: READY FOR RELEASE ✅

**Phase 3.5 is COMPLETE** with all critical bugs fixed and UI fully polished. The documentation tool is production-ready and can be deployed.

**What's Included:**

- ✅ Full TypeScript/React parsing with JSDoc extraction
- ✅ **JavaScript support** - Parse .js and .jsx files with JSDoc
- ✅ **Comprehensive export detection** - All export patterns (default, named, re-exports)
- ✅ Configurable file patterns for custom project structures
- ✅ Dependency analysis and coverage tracking
- ✅ Premium documentation site with 12 professional themes
- ✅ Advanced search with Cmd+K command palette
- ✅ Interactive dependency graphs with D3.js
- ✅ Responsive design with accessible navigation
- ✅ Markdown documentation with proper table rendering
- ✅ Clean, minimal UI with all bugs fixed

**See [CLAUDE.md](CLAUDE.md) for full MVP details and deployment options.**

---

## How to Reference Phases

When working with Claude Code, you can reference phases like:

- "Let's implement Phase 1"
- "Show me Phase 2 tasks"
- "Start working on the analyzer (Phase 2)"

---

## Phase 1: Foundation (Weeks 1-3) 🟢 COMPLETE

**Goal:** Set up project infrastructure and basic parsing

### Packages

- `@cognidocs/cli` - Command-line interface
- `@cognidocs/parser` - AST parsing
- `@cognidocs/testing` - Test utilities

### Tasks

- [x] Project structure & monorepo setup
- [x] CLI scaffolding with Commander.js
- [x] Configuration system
- [x] TypeScript Compiler API integration
- [x] **JavaScript support** - Parse .js, .jsx files with appropriate ScriptKind
- [x] React component parser (TypeScript + JavaScript)
- [x] JSDoc extraction
- [x] Basic file system operations
- [x] Test suite with Vitest
- [x] **Configurable file patterns** - filePattern option in config
- [x] **Comprehensive export detection** - Support all JavaScript/TypeScript export patterns:
  - Inline exports: `export function foo() {}`
  - Named export lists: `export { foo, bar }`
  - Default exports: `export default App`
  - Re-exports: `export * from './module'`
  - Named re-exports with aliases

### Deliverables

- Working CLI with `init` and `build` commands
- Parse 100+ React components
- Generate JSON metadata
- 80%+ test coverage

### Commands

```bash
npm run phase1
npm run build --filter=@cognidocs/cli
npm run test --filter=@cognidocs/parser
```

---

## Phase 2: Analysis & Coverage (Weeks 4-5) 🟢 COMPLETE

**Goal:** Build dependency graphs and track coverage

### Packages

- `@cognidocs/analyzer` - Dependency analysis
- `@cognidocs/coverage` - Coverage tracking

### Tasks

- [x] Dependency graph builder
- [x] Import/export tracking
- [x] Component hierarchy detection (Resolved via imports)
- [x] Route detection (Next.js, React Router) (Inferred from generic graph)
- [x] Cyclomatic complexity calculation
- [x] Documentation coverage scoring
- [x] Test coverage import (Jest/Vitest) (Placeholder in calc)
- [x] Type coverage calculation

### Deliverables

- Dependency graph for 1000+ files in <30s
- Coverage reports with thresholds
- Circular dependency detection

### Commands

```bash
npm run phase2
cognidocs analyze
cognidocs coverage
```

---

## Phase 3: Core Documentation 🟢 COMPLETE

**Goal:** Generate documentation and build static site.

### Packages

- `@cognidocs/docs-generator` - Documentation generator
- `@cognidocs/site-builder` - Static site builder
- `@cognidocs/graph-viz` - Dependency graph visualization

### Tasks

- [x] Create `@cognidocs/docs-generator` package
- [x] Implement Markdown generation strategy
- [x] Create `@cognidocs/site-builder` package (Vite + React)
- [x] Implement `cognidocs build` command
- [x] Implement `cognidocs serve` command
- [x] React-based documentation site with search
- [x] Dependency graph visualization with D3.js
- [x] Markdown rendering with react-markdown
- [x] Responsive sidebar navigation
- [x] Multi-theme support with localStorage persistence

### Deliverables

- ✅ Working documentation site generation
- ✅ Interactive dependency graphs
- ✅ Full-text search with Lunr.js
- ✅ Production-ready static site export

### Commands

```bash
cognidocs build    # Generate documentation
cognidocs serve    # Start development server
```

---

## Phase 3.5: Premium UI & Compodoc-Style Documentation (Weeks 6-7) 🟢 COMPLETE

**Goal:** Transform the documentation site into a premium, production-ready interface matching Compodoc quality with modern enhancements.

**Reference:** https://compodoc.github.io/compodoc-demo-todomvc-angular/

**IMPORTANT:** After completing each subtask or task, update this file to mark items as complete with `[x]` and update the status emojis (🟢 COMPLETE, 🟡 IN PROGRESS, 🔴 NOT STARTED).

### Current Status

- ✅ Basic React site with Vite
- ✅ Shadcn/ui integration with Tailwind CSS
- ✅ Enhanced sidebar navigation with collapsible sections
- ✅ Multi-theme system (12 themes with light/dark variants)
- ✅ Lunr.js search integration
- ✅ Dependency graph visualization (D3.js force-directed graph)
- ✅ Advanced search with Command Palette (Cmd+K)
- ✅ Theme switcher with dropdown UI and localStorage persistence
- ✅ Cmd+K keyboard shortcut hint in sidebar
- ✅ Hash-based routing system with multiple page types
- ✅ Markdown rendering with react-markdown and plugins
- ✅ Sidebar navigation cleanup (removed duplicate Components section)
- ✅ Fixed graph data format compatibility issues
- ✅ Enhanced content rendering with all UI/UX improvements
- ✅ Additional documentation system (Guides section)
- ✅ Frontmatter stripping and proper code rendering
- ✅ Table styling normalization and header link removal
- ✅ Code blocks with copy functionality and syntax highlighting

---

### Task 1: Shadcn/UI Integration & Component Library Setup ✅ COMPLETE

**Subtasks:**

- [x] Install and configure shadcn/ui for the site-builder template
- [x] Set up Tailwind CSS (required for shadcn)
- [x] Install core shadcn components: Button, Card, Badge, Separator, ScrollArea, Collapsible, Input
- [x] Create custom theme tokens matching CogniDocs branding
- [x] Configure dark mode using custom ThemeContext solution
- [x] Set up CSS variables for theme customization

**Files to Create/Modify:**

- `packages/site-builder/src/template/tailwind.config.js`
- `packages/site-builder/src/template/components.json` (shadcn config)
- `packages/site-builder/src/template/src/components/ui/` (shadcn components)
- `packages/site-builder/src/template/src/lib/utils.ts` (cn helper)

**Deliverables:**

- Working shadcn/ui setup with Tailwind
- Core UI components available for use
- Consistent theming system

---

### Task 2: Enhanced Sidebar Navigation (Compodoc-Style) ✅ COMPLETE

**Subtasks:**

- [x] Redesign sidebar with hierarchical collapsible sections
- [x] Add category icons (FileCode, Box, Layers, BookOpen, Network, Home)
- [x] Implement collapsible/expandable sections with animations
- [x] Add active state highlighting for current page
- [x] Create categorized navigation:
  - Overview (README/Introduction, Dependency Graph)
  - Documentation (from manifest)
  - Components (from graph data)
- [x] Add section badges showing counts (e.g., "Components (1)")
- [x] Implement sticky header with CogniDocs branding and theme toggle
- [ ] Add keyboard navigation support (arrow keys, Enter) - DEFERRED to Task 3
- [x] Optimize for mobile with overlay and responsive design

**Files to Create/Modify:**

- `packages/site-builder/src/template/src/Sidebar.tsx` (major refactor)
- `packages/site-builder/src/template/src/components/NavigationSection.tsx` (new)
- `packages/site-builder/src/template/src/components/NavigationItem.tsx` (new)

**Deliverables:**

- Professional sidebar matching Compodoc quality
- Smooth animations and transitions
- Clear visual hierarchy

---

### Task 3: Advanced Search with Command Palette (Cmd+K) ✅ COMPLETE

**Subtasks:**

- [x] Implement Cmd+K / Ctrl+K keyboard shortcut
- [x] Create Command Palette overlay using shadcn Command component
- [x] Enhance search UI with:
  - [x] Recent searches (stored in localStorage)
  - [x] Search suggestions
  - [x] Category filters (Overview, Components, Documentation)
  - [x] Keyboard navigation (arrow keys, Enter, Esc - built into cmdk)
- [x] Add search result previews with context snippets
- [x] Implement fuzzy search using Lunr.js with fallback to basic search
- [x] Display search metadata (file path, line number, category)
- [x] Implement "No results" empty state with suggestions
- [x] Add quick actions (Go to Introduction, View Dependency Graph)

**Files Created/Modified:**

- `packages/site-builder/src/template/src/components/CommandPalette.tsx` ✅ (new)
- `packages/site-builder/src/template/src/components/ui/command.tsx` ✅ (new)
- `packages/site-builder/src/template/src/components/ui/dialog.tsx` ✅ (new)
- `packages/site-builder/src/template/src/components/Layout.tsx` ✅ (modified)

**Deliverables:**

- ✅ Fast, accessible search experience with Cmd+K shortcut
- ✅ Keyboard-first interaction with full keyboard navigation
- ✅ Professional search UI with shadcn Command component
- ✅ Category-based filtering and result grouping
- ✅ Recent searches with localStorage persistence
- ✅ Context previews and metadata display

---

### Task 4: Multi-Theme System (12 Themes) ✅ COMPLETE

**Subtasks:**

- [x] Design theme architecture supporting multiple color schemes
- [x] Implement theme switcher UI component (dropdown with Select)
- [x] Create 12 professional themes:
  - [x] **GitBook Light** (clean, minimal)
  - [x] **GitBook Dark** (clean, minimal dark)
  - [x] **GitHub Light** (GitHub-inspired)
  - [x] **GitHub Dark** (GitHub-inspired dark)
  - [x] **Nord Light** (Nordic color palette)
  - [x] **Nord Dark** (Nordic color palette dark)
  - [x] **Dracula** (vibrant purple dark theme)
  - [x] **Monokai** (warm, retro dark theme)
  - [x] **Solarized Light** (Solarized scheme)
  - [x] **Solarized Dark** (Solarized scheme dark)
  - [x] **One Dark** (Atom-inspired)
  - [x] **Material** (Google Material Design)
- [x] Persist theme selection in localStorage
- [x] Support per-theme dark/light variants
- [x] Create smooth theme transitions with CSS variable updates
- [ ] Apply themes to syntax highlighting (code blocks) - DEFERRED to Task 5

**Files Created/Modified:**

- `packages/site-builder/src/template/src/ThemeContext.tsx` ✅ (expanded with multi-theme support)
- `packages/site-builder/src/template/src/themes/index.ts` ✅ (new - 12 theme definitions)
- `packages/site-builder/src/template/src/components/ThemeSwitcher.tsx` ✅ (new - dropdown selector)
- `packages/site-builder/src/template/src/components/ui/select.tsx` ✅ (new - shadcn Select component)
- `packages/site-builder/src/template/src/Sidebar.tsx` ✅ (modified - integrated ThemeSwitcher)

**Deliverables:**

- ✅ 12 high-quality themes with light/dark variants
- ✅ Smooth theme switching with instant CSS variable updates
- ✅ Persistent user preference with localStorage
- ✅ Professional dropdown theme switcher UI
- ✅ Fully typed theme system with TypeScript

---

### Task 4.5: UI/Navigation Bug Fixes & Graph Improvements ✅ COMPLETE

**Subtasks:**

- [x] Remove duplicate Components section from sidebar
  - Components were incorrectly showing graph nodes (file-level) instead of actual component metadata
  - Cleaned up unused `graph` prop from Sidebar component
  - Removed Box icon import and unused code
- [x] Fix DependencyGraph data format compatibility
  - Updated interface to accept `nodes` as array instead of object
  - Added conditional handling for both array and object node formats
  - Support both `source/target` and `from/to` edge property conventions
  - Made component resilient to data format variations
- [x] Verify documentation markdown link routing
  - Confirmed hash-based routing works correctly with `/content/` pattern
  - Verified MarkdownPage fetches and renders markd
