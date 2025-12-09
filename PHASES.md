# CogniDocs Development Phases

This document provides a quick reference for each development phase and what to work on.

## How to Reference Phases

When working with Claude Code, you can reference phases like:
- "Let's implement Phase 1"
- "Show me Phase 2 tasks"
- "Start working on the analyzer (Phase 2)"

---

## Phase 1: Foundation (Weeks 1-3) 🟡 IN PROGRESS

**Goal:** Set up project infrastructure and basic parsing

### Packages
- `@cognidocs/cli` - Command-line interface
- `@cognidocs/parser` - AST parsing
- `@cognidocs/testing` - Test utilities

### Tasks
- [x] Project structure & monorepo setup
- [x] CLI scaffolding with Commander.js
- [x] Configuration system
- [ ] TypeScript Compiler API integration
- [ ] React component parser
- [ ] JSDoc extraction
- [ ] Basic file system operations
- [ ] Test suite with Vitest

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

## Phase 2: Analysis & Coverage (Weeks 4-5) 🔴 NOT STARTED

**Goal:** Build dependency graphs and track coverage

### Packages
- `@cognidocs/analyzer` - Dependency analysis
- `@cognidocs/coverage` - Coverage tracking

### Tasks
- [ ] Dependency graph builder
- [ ] Import/export tracking
- [ ] Component hierarchy detection
- [ ] Route detection (Next.js, React Router)
- [ ] Cyclomatic complexity calculation
- [ ] Documentation coverage scoring
- [ ] Test coverage import (Jest/Vitest)
- [ ] Type coverage calculation

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

## Phase 3: Core Documentation (Weeks 6-7) 🔴 NOT STARTED

**Goal:** Generate documentation and static site (MVP)

### Packages
- `@cognidocs/docs-generator` - Doc generation
- `@cognidocs/site-builder` - Static site builder

### Tasks
- [ ] Markdown/MDX generation
- [ ] API reference pages
- [ ] Component documentation
- [ ] Navigation structure
- [ ] 2-3 themes (Gitbook, Material)
- [ ] Search with Pagefind
- [ ] Mobile-responsive design
- [ ] Dark mode support

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

## Phase 4: Graph Visualization (Weeks 8-9) 🔴 NOT STARTED

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

## Phase 5: Component Previews (Weeks 10-11) 🔴 NOT STARTED

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

## Phase 6: AI Integration (Weeks 12-14) 🔴 NOT STARTED

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

## Phase 7: SaaS Platform (Weeks 15-17) 🔴 NOT STARTED

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

## Phase 8: Enterprise Features (Weeks 18-20) 🔴 NOT STARTED

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

## Phase 9: Marketplace & Plugins (Weeks 21-22) 🔴 NOT STARTED

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

## Phase 10: Polish & Launch (Weeks 23-24) 🔴 NOT STARTED

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

## Current Focus: Phase 1 🎯

**Next steps:**
1. Implement TypeScript Compiler API parser
2. Extract React component metadata
3. Parse JSDoc comments
4. Write comprehensive tests
5. Create sample React project for testing

**When Phase 1 is complete**, we'll have a working CLI that can parse React/TypeScript projects and output JSON metadata.
