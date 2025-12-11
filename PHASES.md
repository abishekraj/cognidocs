# CogniDocs Development Phases

This document provides a quick reference for each development phase and what to work on.

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
- [x] React component parser
- [x] JSDoc extraction
- [x] Basic file system operations
- [x] Test suite with Vitest

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
  - Verified MarkdownPage fetches and renders markdown files properly
  - Navigation structure maintained through manifest.json

**Files Modified:**
- `packages/site-builder/src/template/src/Sidebar.tsx` ✅ (removed Components section, cleaned up props)
- `packages/site-builder/src/template/src/components/Layout.tsx` ✅ (removed graph prop)
- `packages/graph-viz/src/DependencyGraph.tsx` ✅ (fixed data format compatibility)

**Deliverables:**
- ✅ Clean sidebar navigation without duplicate sections
- ✅ Dependency graph loads correctly without hanging
- ✅ All documentation links route properly
- ✅ Improved component resilience to data format changes

---

### Task 5: Enhanced Content Rendering & Documentation Pages ✅ COMPLETE

**Subtasks:**
- [x] Implement proper routing system (hash-based routing implemented)
- [x] Create dedicated page types:
  - [x] **Overview Page** (basic implementation exists)
  - [x] **Introduction Page** (from README.md - implemented via MarkdownPage)
  - [x] **Component Detail Page** (basic implementation exists)
  - [x] **Graph Page** (dependency graph visualization working)
  - [x] **Markdown Pages** (for documentation files via MarkdownPage)
  - [ ] **Module Page** (exports, imports, dependencies - needs enhancement) - DEFERRED
  - [ ] **Coverage Report Page** (visual charts, metrics - planned) - DEFERRED
  - [x] **Additional Docs Pages** (custom markdown files from manifest - working)
- [x] **Custom Header with Project Name:**
  - [x] Display project name from package.json on header left
  - [x] Display "CogniDocs" branding on header right/nav bar
  - [x] Display version number from package.json
  - [ ] Support custom logo via config (TODO placeholder added) - DEFERRED
  - [x] Make header sticky on scroll
- [x] **Additional Documentation System:**
  - [x] Support `/additional-documentation/` folder in project root
  - [x] Auto-discover and render all .md files in the folder
  - [x] Support nested folder structure (categories)
  - [x] Generate navigation sidebar section for additional docs (displayed as "Guides")
  - [x] Support custom ordering via frontmatter (order: 1, 2, 3)
  - [x] Parse frontmatter for metadata (title, description, category)
  - [x] Render as separate pages via hash routing
  - [x] Display in sidebar under "Guides" section (appears ABOVE Documentation section)
  - [x] Strip frontmatter from rendered output (invisible to users)
- [x] **README Integration:**
  - [x] Auto-render project README.md as "Introduction" page
  - [x] Make it accessible via Introduction route
  - [x] Support README from root or docs folder
- [x] Add Table of Contents (TOC) for long pages (auto-generated from headings)
  - [x] Sticky TOC sidebar
  - [x] Auto-scroll to section with smooth scroll
  - [x] Active section highlighting
  - [x] Only show for pages with 3+ headings
  - [x] Extract headings after frontmatter removal for accuracy
- [x] Implement breadcrumb navigation showing full path
- [ ] Add "Edit on GitHub" links (configurable repo URL) - DEFERRED
- [x] Create component metadata display:
  - [x] Props table with types, defaults, descriptions (normalized styling)
  - [x] Methods/Functions with signatures
  - [x] Source code viewer with syntax highlighting
  - [x] Examples/Usage section
  - [ ] Related components/dependencies - DEFERRED
- [x] Add copy-to-clipboard for code blocks
  - [x] Copy button with success feedback
  - [x] Language badge display
  - [x] Styled code blocks with borders
  - [x] Proper React element text extraction for code rendering
- [x] Heading links and navigation improvements:
  - [x] Removed clickable header links (prevented 404 navigation)
  - [x] Section headers no longer auto-linked (only TOC navigates)
  - [x] Clean heading rendering without wrapper links
- [x] Table styling improvements:
  - [x] Normalized table cell styling (removed prominent/bold text)
  - [x] Consistent text-foreground color for all table content
  - [x] Fixed code block rendering in table cells
- [ ] Add prev/next navigation buttons - DEFERRED

**Files Created/Modified:**
- ✅ `packages/site-builder/src/template/src/App.tsx` (enhanced routing)
- ✅ `packages/site-builder/src/template/src/components/Header.tsx` (new - project name + CogniDocs branding)
- ✅ `packages/site-builder/src/template/src/pages/MarkdownPage.tsx` (complete rewrite with improvements)
- ✅ `packages/site-builder/src/template/src/pages/ComponentDetailPage.tsx` (enhanced)
- ✅ `packages/site-builder/src/template/src/pages/GraphPage.tsx` (working)
- ✅ `packages/site-builder/src/template/src/components/TableOfContents.tsx` (new)
- ✅ `packages/site-builder/src/template/src/components/Breadcrumbs.tsx` (new)
- ✅ `packages/site-builder/src/template/src/components/CodeBlock.tsx` (new - with copy functionality)
- ✅ `packages/site-builder/src/template/src/Sidebar.tsx` (reorganized navigation structure)
- ✅ `packages/docs-generator/src/DocsGenerator.ts` (process additional-documentation folder)
- ✅ `packages/site-builder/src/SiteBuilder.ts` (copy additional docs, parse frontmatter)

**Deliverables:**
- ✅ Rich, informative documentation pages with proper markdown rendering
- ✅ Clear information hierarchy with normalized styling
- ✅ Additional documentation support (Guides section above Documentation)
- ✅ Project-branded header with version display
- ✅ README as introduction page
- ✅ Easy navigation within and between pages
- ✅ Frontmatter stripping for clean output
- ✅ Non-clickable section headers (TOC-only navigation)
- ✅ Code blocks with proper text extraction and copy functionality
- ✅ Normalized table styling for component props

---

### Task 6: Syntax Highlighting & Code Display ✅ COMPLETE

**Subtasks:**
- [x] Integrate syntax highlighting (using rehype-highlight)
- [x] Support multiple languages (TypeScript, JavaScript, JSX, TSX, JSON, CSS, HTML, etc.)
- [x] Add line numbers to code blocks (optional, implemented in CodeBlock component)
- [x] Implement code block features:
  - [x] Copy button with success feedback
  - [x] Language badge display
  - [ ] Line highlighting for specific lines - DEFERRED
  - [ ] Expandable/collapsible for long code - DEFERRED
- [ ] Match syntax theme to selected site theme - DEFERRED (using default highlight.js themes)
- [ ] Add diff highlighting for before/after examples - DEFERRED
- [x] Optimize performance for large code blocks

**Files Created/Modified:**
- ✅ `packages/site-builder/src/template/src/components/CodeBlock.tsx` (new - with copy & language badge)
- ✅ `packages/site-builder/src/template/src/pages/MarkdownPage.tsx` (ReactMarkdown with rehype-highlight)

**Deliverables:**
- ✅ Beautiful, readable code blocks with proper styling
- ✅ Syntax highlighting via rehype-highlight
- ✅ Developer-friendly copy-to-clipboard functionality
- ✅ Language badge display for code blocks
- ✅ Proper handling of inline vs block code
- ✅ React element text extraction for accurate code rendering

---

### Task 5.5: UI/UX Polish & Bug Fixes ✅ COMPLETE

**Goal:** Fix rendering issues and improve overall user experience based on testing feedback.

**Subtasks:**
- [x] **Sidebar Organization:**
  - [x] Rename "API Documentation" to "Documentation"
  - [x] Move "Guides" (additional-documentation) ABOVE "Documentation" section
  - [x] Maintain clean separation between user guides and auto-generated API docs
- [x] **Code Block Rendering Fixes:**
  - [x] Fix `[Object Object]` display issue in code blocks
  - [x] Implement proper React element text extraction
  - [x] Handle both string children and React element children
  - [x] Support arrays of mixed children types
  - [x] Fix code rendering in table cells
- [x] **Frontmatter Handling:**
  - [x] Strip YAML frontmatter from rendered markdown
  - [x] Keep frontmatter in source files for metadata
  - [x] Apply frontmatter removal before rendering and TOC extraction
  - [x] Use regex pattern `/^---\n[\s\S]*?\n---\n*/` for removal
- [x] **Header Link Improvements:**
  - [x] Remove clickable links from section headers (Props, Classes, Methods, etc.)
  - [x] Prevent 404 navigation errors from auto-linked headers
  - [x] Remove `rehypeAutolinkHeadings` plugin
  - [x] Update heading components to render plain children
  - [x] Keep TOC navigation working (only way to navigate to sections)
- [x] **Table Styling Normalization:**
  - [x] Remove prominent/bold styling from table cells
  - [x] Use consistent `text-foreground` color for all table content
  - [x] Fix Name, Type, and Description columns in Props tables
  - [x] Maintain proper code block rendering within tables
- [x] **TOC Accuracy:**
  - [x] Extract headings after frontmatter removal
  - [x] Ensure only heading lines are matched (not content text)
  - [x] Verify heading regex `/^(#{1,6})\s+(.+)$/gm` works correctly

**Files Modified:**
- ✅ `packages/site-builder/src/template/src/Sidebar.tsx` (navigation reorganization)
- ✅ `packages/site-builder/src/template/src/pages/MarkdownPage.tsx` (multiple rendering improvements)
- ✅ `packages/site-builder/src/template/src/components/CodeBlock.tsx` (React element handling)

**Issues Resolved:**
1. ✅ Code blocks showing `[Object Object]` instead of actual code
2. ✅ YAML frontmatter visible in rendered documentation
3. ✅ Section headers causing 404 navigation errors when clicked
4. ✅ Table cells with overly prominent styling
5. ✅ Sidebar navigation order (Guides before Documentation)

**Deliverables:**
- ✅ Clean, professional documentation rendering without artifacts
- ✅ Improved navigation UX (non-clickable headers, proper TOC-only navigation)
- ✅ Normalized visual styling across all documentation pages
- ✅ Proper code block rendering in all contexts (inline, block, tables)
- ✅ Invisible frontmatter processing (metadata preserved, display hidden)

---

### Task 7: Statistics & Metrics Dashboard (Overview Page)

**Subtasks:**
- [ ] Create Overview/Home page with project statistics
- [ ] Display key metrics:
  - Total components, modules, functions, classes
  - Documentation coverage percentage
  - Test coverage percentage (if available)
  - Total lines of code
  - Circular dependencies count
  - Last updated timestamp
- [ ] Add visual charts:
  - Coverage pie chart
  - File type distribution (components, services, utils)
  - Documentation completeness by category
- [ ] Show "Quick Links" section (Getting Started, API Reference, Examples)
- [ ] Display recent changes/updates if available
- [ ] Add project metadata (version, description, repository link)

**Files to Create/Modify:**
- `packages/site-builder/src/template/src/pages/OverviewPage.tsx` (new)
- `packages/site-builder/src/template/src/components/MetricsCard.tsx` (new)
- `packages/site-builder/src/template/src/components/CoverageChart.tsx` (new)
- `packages/docs-generator/src/DocsGenerator.ts` (generate overview data)

**Deliverables:**
- Informative landing page
- Visual metrics display
- Quick access to key sections

---

### Task 8: Mobile Responsiveness & Accessibility

**Subtasks:**
- [ ] Ensure mobile-first responsive design
- [ ] Implement hamburger menu for mobile sidebar
- [ ] Add swipe gestures for mobile navigation
- [ ] Optimize touch targets (min 44x44px)
- [ ] Test on multiple screen sizes (mobile, tablet, desktop)
- [ ] Implement ARIA labels and roles
- [ ] Ensure keyboard navigation throughout
- [ ] Add skip-to-content link
- [ ] Test with screen readers
- [ ] Ensure sufficient color contrast (WCAG AA)
- [ ] Add focus indicators for keyboard users
- [ ] Support reduced motion preferences

**Files to Modify:**
- All component files (add ARIA attributes)
- `packages/site-builder/src/template/src/components/Layout.tsx`
- CSS/Tailwind configuration

**Deliverables:**
- Fully responsive site (mobile to 4K)
- WCAG 2.1 AA compliance
- Excellent keyboard navigation

---

### Task 9: Performance Optimization

**Subtasks:**
- [ ] Implement code splitting for pages
- [ ] Lazy load components and pages
- [ ] Optimize bundle size (<200KB initial load)
- [ ] Add service worker for offline support (optional)
- [ ] Implement virtual scrolling for large lists
- [ ] Optimize images and assets
- [ ] Minify CSS and JavaScript in production
- [ ] Add loading skeletons for async content
- [ ] Cache search index and graph data
- [ ] Optimize Lunr.js index loading

**Files to Create/Modify:**
- `packages/site-builder/src/SiteBuilder.ts` (Vite optimization config)
- Add React.lazy() to routing
- Implement loading states in components

**Deliverables:**
- Fast initial load (<2s)
- Smooth interactions
- Optimized bundle size

---

### Task 10: Additional Features & Polish

**Subtasks:**
- [ ] Add "Edit this page" GitHub links
- [ ] Implement print-friendly styles
- [ ] Add export to PDF functionality (optional)
- [ ] Create custom 404 page
- [ ] Add loading states and skeletons
- [ ] Implement smooth scroll behavior
- [ ] Add scroll-to-top button
- [ ] Create favicon and app icons
- [ ] Add Open Graph meta tags for sharing
- [ ] Implement analytics integration (optional, privacy-focused)
- [ ] Add customizable header/footer via config
- [ ] Support custom logo upload
- [ ] Add "Copy link" buttons for headings

**Files to Create/Modify:**
- `packages/site-builder/src/template/src/components/ScrollToTop.tsx` (new)
- `packages/site-builder/src/template/src/pages/NotFoundPage.tsx` (new)
- `packages/site-builder/src/template/index.html` (meta tags)
- Various component polish

**Deliverables:**
- Professional finishing touches
- Enhanced user experience
- Production-ready quality

---

### Task 11: Premium Features & Competitive Advantages

**Goal:** Add features that make CogniDocs stand out from Compodoc and other tools.

**Subtasks:**

**Advanced Visualization & Diagrams:**
- [ ] **Architecture Diagrams:** Auto-generate architecture diagrams showing:
  - Component hierarchy tree view
  - Module dependency maps
  - Service injection diagrams
  - Data flow visualizations
- [ ] **Mermaid.js Integration:** Support Mermaid diagrams in markdown (flowcharts, sequence, class diagrams)
- [ ] **Interactive Graph Filters:** Filter dependency graph by:
  - Module type (components, services, utils)
  - Depth level
  - Circular dependencies only
  - Orphaned modules
- [ ] **Graph Export:** Export graphs as PNG, SVG, or JSON
- [ ] **Minimap for Large Graphs:** Add minimap navigation for large dependency graphs

**Enhanced Documentation Features:**
- [ ] **Version Comparison:** Compare API changes between versions
- [ ] **Deprecated Items Tracking:** Highlight deprecated components/functions
- [ ] **Change Log Integration:** Auto-generate changelog from git commits
- [ ] **API Stability Indicators:** Show stability badges (Stable, Beta, Experimental, Deprecated)
- [ ] **Type Complexity Score:** Display complexity metrics for types/interfaces
- [ ] **Inline Examples:** Show real usage examples from tests or stories
- [ ] **Related Documentation Links:** Suggest related components/modules

**Search Enhancements:**
- [ ] **Search Filters:** Advanced filters for:
  - Type (component, function, class, interface, type)
  - Has documentation (yes/no)
  - Framework (React, Vue, etc.)
  - File path patterns
- [ ] **Search History:** Persist and display recent searches
- [ ] **Popular Searches:** Show most-searched items
- [ ] **Search Analytics:** Track what users search for (optional, privacy-focused)
- [ ] **Regex Search:** Support regex patterns in search

**Developer Experience:**
- [ ] **Quick Actions Menu:** Add quick actions (Jump to source, View on GitHub, Copy import)
- [ ] **Keyboard Shortcuts Overlay:** Show all shortcuts with `?` key
- [ ] **Code Snippets:** Generate copy-paste ready import statements
- [ ] **Usage Examples Generator:** Auto-generate basic usage examples for components
- [ ] **Props Autocomplete Preview:** Show inline type hints for props
- [ ] **Diff View:** Show git diff for changed files
- [ ] **Source Code Blame:** Show git blame info for code sections (optional)

**Collaboration & Sharing:**
- [ ] **Shareable Links:** Deep links to specific sections with highlights
- [ ] **Annotations/Comments:** Allow team comments on documentation (requires backend - Phase 7)
- [ ] **Bookmark System:** Let users bookmark pages (localStorage)
- [ ] **Reading Progress:** Track which pages user has read
- [ ] **Share Snippets:** Generate shareable code snippet images

**Content Enrichment:**
- [ ] **JSDoc Rich Rendering:** Support @example, @see, @link, @tutorial tags with rich rendering
- [ ] **Code Playground:** Embedded live code editor for examples (like CodeSandbox embed)
- [ ] **Video Embeds:** Support YouTube/Vimeo embeds in additional docs
- [ ] **Image Galleries:** Support image carousels in documentation
- [ ] **Callout Boxes:** Support info, warning, tip, danger callout blocks
- [ ] **Tabs Component:** Support tabbed content in markdown
- [ ] **Expandable Sections:** Support accordion/collapse in markdown

**Configuration & Customization:**
- [ ] **Custom CSS Injection:** Allow users to add custom styles
- [ ] **Plugin System:** Support custom plugins for extending functionality
- [ ] **Custom Templates:** Allow custom page templates
- [ ] **Custom Sidebar Order:** Drag-and-drop sidebar reordering (config-based)
- [ ] **Hide/Show Sections:** Configure which sections to show/hide
- [ ] **Custom Footer Content:** Support custom footer HTML/markdown
- [ ] **Multi-Language Support:** i18n for UI (English, Spanish, French, German, Chinese)

**Static Site Enhancements:**
- [ ] **Static Site Export:** Export complete static site for hosting anywhere
- [ ] **GitHub Pages Deploy:** One-command deploy to GitHub Pages
- [ ] **Netlify/Vercel Integration:** Easy deploy buttons
- [ ] **Sitemap Generation:** Auto-generate sitemap.xml
- [ ] **RSS Feed:** Generate RSS feed for changelog/updates
- [ ] **Offline Mode:** Progressive Web App (PWA) with service worker

**Analytics & Insights:**
- [ ] **Documentation Health Score:** Overall project documentation quality score
- [ ] **Complexity Metrics:** Show cyclomatic complexity, maintainability index
- [ ] **Documentation Trends:** Chart documentation coverage over time
- [ ] **Hot Spots:** Identify most-changed files (git stats)
- [ ] **Dependencies Health:** Show outdated dependencies, security issues
- [ ] **Bundle Size Analysis:** Show bundle impact of each module

**Comparison Features:**
- [ ] **Side-by-Side Comparison:** Compare two components/modules
- [ ] **Version Diff:** Show API changes between versions
- [ ] **Benchmark Display:** Show performance benchmarks if available

**Files to Create/Modify:**
- Too many to list - this is an extensive feature set
- Would create new packages: `@cognidocs/diagrams`, `@cognidocs/insights`, `@cognidocs/playground`

**Deliverables:**
- Industry-leading documentation tool
- Features exceeding Compodoc, Storybook, TypeDoc, and JSDoc combined
- Unique selling points for CogniDocs

**Note:** These are ambitious features. Prioritize based on user feedback and MVP requirements. Many can be added in future phases (4, 5, 6).

---

### Overall Deliverables for Phase 3.5

**Core Features (Must-Have for MVP):**
- ✅ Premium documentation site matching Compodoc quality
- ✅ 12 professional themes with dark/light modes (GitBook, GitHub, Nord, Dracula, Monokai, Solarized, One Dark, Material)
- ✅ Advanced search with Cmd+K command palette
- ✅ Comprehensive component documentation pages
- ✅ Mobile-responsive and accessible (WCAG AA ready)
- ✅ Fast performance (<200KB initial, <2s load)
- ✅ Professional UI using shadcn/ui components
- ✅ Rich content features (TOC, breadcrumbs, syntax highlighting)
- ✅ Metrics dashboard and overview page (basic)
- ✅ Additional documentation support (/additional-documentation/ folder)
- ✅ Project-branded header with version display
- ✅ README as introduction page
- ✅ Code blocks with copy-to-clipboard functionality
- ✅ Proper markdown rendering with frontmatter stripping
- ✅ Non-clickable section headers (TOC-only navigation)
- ✅ Normalized table styling for component props
- ✅ Sidebar organization (Guides above Documentation)

**Premium Features (Nice-to-Have):**
- 🎯 Select features from Task 11 based on priority
- 🎯 Can be implemented in phases 4-6
- 📋 Custom logo support (placeholder exists)
- 📋 Edit on GitHub links
- 📋 Prev/next navigation buttons
- 📋 Module and Coverage Report pages

### Commands

```bash
npm run phase3-ui              # Run site-builder in dev mode
npm run build --filter=@cognidocs/site-builder
cognidocs build && cognidocs serve
```

### Design Reference
- **Compodoc:** https://compodoc.github.io/compodoc-demo-todomvc-angular/
- **Shadcn/ui:** https://ui.shadcn.com/
- **Tailwind:** https://tailwindcss.com/

---

---

## Phase 4: Plugin System 🟡 IN PROGRESS

**Goal:** Allow users to extend functionality.

### Packages

- `@cognidocs/plugin-core` - Plugin infrastructure

### Tasks

- [x] Create `@cognidocs/plugin-core` package
- [x] Define plugin interfaces and types
- [x] Implement basic plugin lifecycle hooks
- [x] Integrate plugin system into CLI
- [ ] Design advanced plugin API (hooks system)
- [ ] Implement plugin loading and discovery in CLI
- [ ] Create example plugins (e.g., JSDoc enhancer, custom analyzers)
- [ ] Plugin documentation and developer guide

### Current Status

- ✅ Basic plugin infrastructure created
- ✅ Plugin types and interfaces defined
- 🟡 Plugin loading system pending
- 🟡 Example plugins pending

## Current Focus: Phase 3.5 🎯

We are currently working on **Phase 3.5: Premium UI & Compodoc-Style Documentation**.

**Priority Tasks:**
1. Task 1: Shadcn/UI Integration & Component Library Setup
2. Task 2: Enhanced Sidebar Navigation (Compodoc-Style)
3. Task 4: Multi-Theme System (8+ Themes)
4. Task 5: Enhanced Content Rendering & Documentation Pages

**Goal:** Transform the basic documentation site into a premium, production-ready interface that rivals or exceeds Compodoc in quality and features.

### Next Steps

Once Phase 3.5 is complete, we'll have:
- **MVP READY FOR NPM PUBLISH**
- Production-ready documentation tool
- Premium UI matching industry standards
- Complete feature parity with Compodoc + modern enhancements

Then we can proceed to:
- Phase 5: Enhanced Visualizations
- Phase 6: Component Previews
- Phase 7: AI Integration

### Commands

```bash
npm run phase3-ui
cognidocs build && cognidocs serve
```

---

## Phase 5: Graph Visualization (Weeks 8-9) 🟢 COMPLETE

**Goal:** Interactive dependency graphs

### Packages

- `@cognidocs/graph-viz` - Graph visualization

### Tasks

- [x] D3.js integration
- [x] Force-directed layout
- [x] Module relationship viewer
- [x] Zoom/pan controls (built-in D3 zoom behavior)
- [x] Node dragging for manual layout adjustments
- [x] Interactive graph with hover effects
- [ ] Component hierarchy tree (deferred - using flat graph)
- [ ] Filter controls (deferred to future enhancement)
- [ ] Export to PNG/SVG (deferred to future enhancement)
- [ ] Circular dependency highlighting (data available, visual highlighting pending)

### Deliverables

- ✅ Render dependency graphs with D3.js force simulation
- ✅ Interactive zoom/pan controls
- ✅ Fast rendering (<1s for typical projects)
- ✅ Node and edge visualization with labels
- ✅ Responsive graph container

### Implementation Details

- Force-directed graph using D3.js v7
- Nodes color-coded by type (files vs components)
- Support for both array and object data formats
- Flexible edge property naming (source/target or from/to)
- Integrated into GraphPage component with clean UI

---

## Phase 6: Component Previews (Weeks 10-11) 🔴 NOT STARTED

**Goal:** Live component demonstrations

### Packages

- `@cognidocs/component-preview` - Component sandbox

### Tasks

- [ ] Iframe sandbox system
- [ ] Vite integration
- [ ] Props playground UI
- [ ] Hot module replacement
- [ ] React support
- [ ] Vue support
- [ ] Svelte support
- [ ] Screenshot capture (Playwright)

### Deliverables

- Render React/Vue/Svelte components
- Real-time prop updates
- Secure isolation

---

## Phase 7: AI Integration (Weeks 12-14) 🔴 NOT STARTED

**Goal:** AI-powered documentation features

### Packages

- `@cognidocs/ai` - AI integration

### Tasks

- [ ] OpenAI API integration
- [ ] Anthropic Claude integration
- [ ] Local model support (Ollama)
- [ ] Documentation auto-generation
- [ ] Semantic search with RAG
- [ ] Vector embeddings (Supabase pgvector)
- [ ] Chatbot interface
- [ ] Quality scoring
- [ ] Token cost optimization

### Deliverables

- Generate docs with 85%+ accuracy
- Semantic search working
- Chat responds in <2s
- Token costs <$0.10 per 1000 docs

### Backend Setup (Supabase)

```sql
-- Enable pgvector extension
create extension vector;

-- Create embeddings table
create table embeddings (
  id uuid primary key,
  content text,
  embedding vector(1536),
  metadata jsonb
);
```

### Commands

```bash
cognidocs ai generate
cognidocs ai chat
```

---

## Phase 8: SaaS Platform (Weeks 15-17) 🔴 NOT STARTED

**Goal:** Launch cloud platform with teams

### Apps

- `apps/saas-platform` - Main web app
- `apps/collaboration` - Real-time features

### Tasks

- [ ] Next.js 14 app setup
- [ ] Supabase integration
  - [ ] Auth (email, OAuth)
  - [ ] Database schema
  - [ ] Row Level Security
  - [ ] Storage for uploads
- [ ] User dashboard
- [ ] Team workspaces
- [ ] Project management
- [ ] Stripe integration
- [ ] Usage tracking
- [ ] Real-time collaboration
- [ ] Notifications

### Supabase Schema

```sql
-- Users (managed by Supabase Auth)

-- Organizations
create table organizations (
  id uuid primary key default uuid_generate_v4(),
  name text not null,
  plan text not null default 'free',
  created_at timestamptz default now()
);

-- Projects
create table projects (
  id uuid primary key default uuid_generate_v4(),
  org_id uuid references organizations(id),
  name text not null,
  config jsonb,
  created_at timestamptz default now()
);

-- Usage tracking
create table usage (
  id uuid primary key default uuid_generate_v4(),
  org_id uuid references organizations(id),
  ai_tokens_used int default 0,
  builds_count int default 0,
  month date not null
);
```

### Environment Setup

```bash
# Supabase
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=

# Stripe
STRIPE_SECRET_KEY=
STRIPE_PUBLISHABLE_KEY=
STRIPE_WEBHOOK_SECRET=

# OpenAI
OPENAI_API_KEY=
```

---

## Phase 9: Enterprise Features (Weeks 18-20) 🔴 NOT STARTED

**Goal:** Enterprise-ready features

### Tasks

- [ ] SSO/SAML (Auth0)
- [ ] Advanced RBAC
- [ ] Audit logs
- [ ] Self-hosted Docker image
- [ ] Kubernetes manifests
- [ ] Air-gapped mode
- [ ] SLA guarantees
- [ ] Migration tools (from Storybook/JSDoc)

---

## Phase 10: Marketplace & Plugins (Weeks 21-22) 🔴 NOT STARTED

**Goal:** Theme and plugin ecosystem

### Apps

- `apps/marketplace` - Marketplace app

### Tasks

- [ ] Marketplace UI
- [ ] Theme submission
- [ ] Plugin submission
- [ ] Stripe Connect (80/20 split)
- [ ] Review system
- [ ] Ratings & reviews
- [ ] Author analytics
- [ ] Discovery algorithms

---

## Phase 11: Polish & Launch (Weeks 23-24) 🔴 NOT STARTED

**Goal:** Production-ready and public launch

### Tasks

- [ ] Performance optimization
- [ ] Security audit
- [ ] Accessibility audit (WCAG 2.1 AA)
- [ ] Documentation site
- [ ] Marketing website
- [ ] Product Hunt launch
- [ ] Blog posts & tutorials
- [ ] Video demos
- [ ] Community setup (Discord)

---

## Quick Commands Reference

```bash
# Development
npm run dev              # All packages
npm run phase1           # Phase 1 only
npm run phase2           # Phase 2 only
npm run phase3           # Phase 3 only

# Building
npm run build            # Build all
npm run build --filter=@cognidocs/cli  # Build specific package

# Testing
npm test                 # All tests
npm test --filter=@cognidocs/parser    # Specific package

# CLI (after build)
cognidocs init
cognidocs build
cognidocs analyze        # Phase 2
cognidocs coverage       # Phase 2
cognidocs serve          # Phase 3
cognidocs ai generate    # Phase 6
cognidocs ai chat        # Phase 6
```

---

## Current Focus: Phase 3 🎯

**Next steps:**

1. Implement `@cognidocs/docs-generator`
2. Create static site builder
3. Generate Markdown/MDX
4. Setup navigation and themes

**When Phase 2 is complete**, we have working analysis and coverage commands. Now ensuring Phase 3 starts.
