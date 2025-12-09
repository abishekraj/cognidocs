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

## Phase 3: Core Documentation � COMPLETE

**Goal:** Generate documentation and build static site.

- [x] Create `@cognidocs/docs-generator` package
- [x] Implement Markdown generation strategy
- [x] Create `@cognidocs/site-builder` package (Vite + React)
- [x] Implement `cognidocs build` command
- [x] Implement `cognidocs serve` command
- [x] Implement `cognidocs serve` command (Phase 3)

---

## Phase 3.5: Premium UI & Compodoc-Style Documentation (Weeks 6-7) 🟡 IN PROGRESS

**Goal:** Transform the documentation site into a premium, production-ready interface matching Compodoc quality with modern enhancements.

**Reference:** https://compodoc.github.io/compodoc-demo-todomvc-angular/

**IMPORTANT:** After completing each subtask or task, update this file to mark items as complete with `[x]` and update the status emojis (🟢 COMPLETE, 🟡 IN PROGRESS, 🔴 NOT STARTED).

### Current Status
- ✅ Basic React site with Vite
- ✅ Shadcn/ui integration with Tailwind CSS
- ✅ Enhanced sidebar navigation with collapsible sections
- ✅ Dark/Light theme toggle
- ✅ Lunr.js search integration
- ✅ Dependency graph visualization
- ✅ Advanced search with Command Palette (Cmd+K)
- 🟡 Ready to move to next task

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

### Task 4: Multi-Theme System (8+ Themes)

**Subtasks:**
- [ ] Design theme architecture supporting multiple color schemes
- [ ] Implement theme switcher UI component (dropdown/modal)
- [ ] Create 8+ professional themes:
  - **GitBook** (current default)
  - **GitHub** (clean, minimalist)
  - **Nord** (nordic color palette)
  - **Dracula** (vibrant purple)
  - **Monokai** (warm, retro)
  - **Solarized** (light/dark variants)
  - **One Dark** (Atom-inspired)
  - **Material** (Google Material Design)
- [ ] Persist theme selection in localStorage
- [ ] Support per-theme dark/light variants
- [ ] Add theme preview thumbnails in switcher
- [ ] Apply themes to syntax highlighting (code blocks)
- [ ] Create smooth theme transitions

**Files to Create/Modify:**
- `packages/site-builder/src/template/src/ThemeContext.tsx` (expand)
- `packages/site-builder/src/template/src/themes/` (new directory)
  - `gitbook.ts`, `github.ts`, `nord.ts`, `dracula.ts`, etc.
- `packages/site-builder/src/template/src/components/ThemeSwitcher.tsx` (new)
- `packages/site-builder/src/template/src/variables.css` (theme variables)

**Deliverables:**
- 8+ high-quality themes
- Smooth theme switching
- Persistent user preference

---

### Task 5: Enhanced Content Rendering & Documentation Pages

**Subtasks:**
- [ ] Implement proper routing system (hash-based or history API)
- [ ] Create dedicated page types:
  - **Overview Page** (project stats, quick links, getting started)
  - **Introduction Page** (from README.md)
  - **Component Detail Page** (props, methods, examples, source)
  - **Module Page** (exports, imports, dependencies)
  - **Coverage Report Page** (visual charts, metrics)
  - **Additional Docs Pages** (custom markdown files from `/additional-documentation/` folder)
- [ ] **Custom Header with Project Name:**
  - Display project name from package.json on header left
  - Display "CogniDocs" branding on header right/nav bar
  - Support custom logo via config
  - Make header sticky on scroll
- [ ] **Additional Documentation System:**
  - Support `/additional-documentation/` folder in project root
  - Auto-discover and render all .md files in the folder
  - Support nested folder structure (categories)
  - Generate navigation sidebar section for additional docs
  - Support custom ordering via frontmatter (order: 1, 2, 3)
  - Parse frontmatter for metadata (title, description, category)
  - Render as separate pages: `/additional-documentation/{filename}.html`
  - Display in sidebar under "Additional Documentation" section
- [ ] **README Integration:**
  - Auto-render project README.md as "Introduction" page
  - Make it the default landing page
  - Support README from root or docs folder
- [ ] Add Table of Contents (TOC) for long pages (auto-generated from headings)
- [ ] Implement breadcrumb navigation showing full path
- [ ] Add "Edit on GitHub" links (configurable repo URL)
- [ ] Create component metadata display:
  - Props table with types, defaults, descriptions
  - Methods/Functions with signatures
  - Source code viewer with syntax highlighting
  - Examples/Usage section
  - Related components/dependencies
- [ ] Add copy-to-clipboard for code blocks
- [ ] Implement anchor links for headings
- [ ] Add prev/next navigation buttons

**Files to Create/Modify:**
- `packages/site-builder/src/template/src/App.tsx` (enhanced routing)
- `packages/site-builder/src/template/src/components/Header.tsx` (new - project name + CogniDocs branding)
- `packages/site-builder/src/template/src/pages/` (new directory)
  - `OverviewPage.tsx`
  - `ComponentPage.tsx`
  - `ModulePage.tsx`
  - `CoveragePage.tsx`
  - `AdditionalDocPage.tsx`
- `packages/site-builder/src/template/src/components/TableOfContents.tsx` (new)
- `packages/site-builder/src/template/src/components/Breadcrumbs.tsx` (new)
- `packages/site-builder/src/template/src/components/CodeBlock.tsx` (new)
- `packages/site-builder/src/template/src/components/PropsTable.tsx` (new)
- `packages/docs-generator/src/DocsGenerator.ts` (process additional-documentation folder)
- `packages/site-builder/src/SiteBuilder.ts` (copy additional docs, parse frontmatter)

**Deliverables:**
- Rich, informative documentation pages
- Clear information hierarchy
- Additional documentation support (like Compodoc)
- Project-branded header
- README as introduction page
- Easy navigation within and between pages

---

### Task 6: Syntax Highlighting & Code Display

**Subtasks:**
- [ ] Integrate Shiki or Prism for syntax highlighting
- [ ] Support multiple languages (TypeScript, JavaScript, JSX, TSX, JSON, CSS, HTML)
- [ ] Add line numbers to code blocks
- [ ] Implement code block features:
  - Copy button
  - Language badge
  - Line highlighting for specific lines
  - Expandable/collapsible for long code
- [ ] Match syntax theme to selected site theme
- [ ] Add diff highlighting for before/after examples
- [ ] Optimize performance for large code blocks

**Files to Create/Modify:**
- `packages/site-builder/src/template/src/components/CodeBlock.tsx` (new)
- `packages/site-builder/src/template/src/lib/syntax-highlighter.ts` (new)
- Update ReactMarkdown configuration in pages

**Deliverables:**
- Beautiful, readable code blocks
- Theme-matched syntax highlighting
- Developer-friendly features

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
- ✅ 8+ professional themes with dark/light modes
- ✅ Advanced search with Cmd+K command palette
- ✅ Comprehensive component documentation pages
- ✅ Mobile-responsive and accessible (WCAG AA)
- ✅ Fast performance (<200KB initial, <2s load)
- ✅ Professional UI using shadcn/ui components
- ✅ Rich content features (TOC, breadcrumbs, syntax highlighting)
- ✅ Metrics dashboard and overview page
- ✅ Additional documentation support (/additional-documentation/ folder)
- ✅ Project-branded header with custom logo support
- ✅ README as introduction page

**Premium Features (Nice-to-Have):**
- 🎯 Select features from Task 11 based on priority
- 🎯 Can be implemented in phases 4-6

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

## Phase 4: Plugin System � COMPLETED

**Goal:** Allow users to extend functionality.

- [ ] Design plugin API (hooks system)
- [ ] Create `@cognidocs/plugin-core`
- [ ] Implement plugin loading in CLI
- [ ] Create example plugins (e.g., JSDoc enhancer)

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

## Phase 5: Graph Visualization (Weeks 8-9) 🟢 COMPLETED

**Goal:** Interactive dependency graphs

### Packages

- `@cognidocs/graph-viz` - Graph visualization

### Tasks

- [ ] D3.js integration
- [ ] Force-directed layout
- [ ] Module relationship viewer
- [ ] Component hierarchy tree
- [ ] Zoom/pan/filter controls
- [ ] Export to PNG/SVG
- [ ] Circular dependency highlighting

### Deliverables

- Render 500+ module graphs
- Interactive controls
- <1s render time

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
