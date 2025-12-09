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

## Phase 3.5: Advanced UI & Theming (Weeks 6-7) 🟢 COMPLETED

**Goal:** Create a premium, Compodoc-like documentation interface.

### Tasks

- [ ] **UI Architecture**
  - [ ] Implement responsive sidebar layout with search
  - [ ] Create Table of Contents (TOC) component
  - [ ] Add mobile navigation drawer
- [ ] **Theming System**
  - [ ] Implement Light/Dark mode toggle
  - [ ] Create Theme Manager (Context)
  - [ ] Add multiple color themes (Blue, Purple, Orange, etc.)
- [ ] **Enhanced Content Rendering**
  - [ ] Render `README.md` as Introduction page
  - [ ] Support "Additional Documentation" (Markdown articles)
  - [ ] Add "Getting Started" and "Tutorials" sections
- [ ] **Search & Navigation**
  - [ ] Implement client-side full-text search (Lunr.js or Fuse.js)
  - [ ] Add keyboard shortcuts (Cmd+K)
  - [ ] Implement breadcrumbs

### Deliverables

- Professional, responsive documentation site
- Dark mode support
- Search functionality
- "Additional Docs" support

### Commands

```bash
npm run phase3-ui
```

---

## Phase 4: Plugin System � COMPLETED

**Goal:** Allow users to extend functionality.

- [ ] Design plugin API (hooks system)
- [ ] Create `@cognidocs/plugin-core`
- [ ] Implement plugin loading in CLI
- [ ] Create example plugins (e.g., JSDoc enhancer)

## Current Focus

We are currently working on **Phase 4: Plugin System**.

1.  Design the Plugin API interface.
2.  Implement the plugin loader.
3.  Create a standardized plugin structure.

### Deliverables

- Complete docs for sample projects
- Static site with <100KB initial load
- Working search
- **MVP READY FOR NPM PUBLISH**

### Commands

```bash
npm run phase3
cognidocs build
cognidocs serve
```

---

## Phase 5: Graph Visualization (Weeks 8-9) 🔴 NOT STARTED

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
