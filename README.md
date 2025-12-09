# CogniDocs

AI-powered documentation tool for JavaScript/TypeScript projects.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Status](https://img.shields.io/badge/Status-Phase%201-blue)]()

## 🚀 Overview

CogniDocs is a comprehensive documentation tool that combines the best features of Compodoc and Storybook, enhanced with modern AI capabilities. It generates beautiful, interactive documentation for React, Next.js, Vue, Svelte, and other JavaScript frameworks.

### Key Features

- 📚 **Automatic API Documentation** - Extract docs from your TypeScript/JavaScript code
- 🎨 **Live Component Previews** - Interactive component playground
- 🤖 **AI-Powered** - Generate, enhance, and chat with your documentation
- 📊 **Dependency Graphs** - Visual architecture diagrams
- 📈 **Coverage Reports** - Track documentation and test coverage
- 🎭 **Multiple Themes** - 8+ beautiful themes with dark mode
- 🔍 **Semantic Search** - AI-powered search through your codebase

## 📦 Project Structure

This is a monorepo containing:

### Packages (Core Libraries)

- **[@cognidocs/cli](packages/cli)** - Command-line interface *(Phase 1)* 🟡
- **[@cognidocs/parser](packages/parser)** - AST parser for code analysis *(Phase 1)* 🟡
- **[@cognidocs/analyzer](packages/analyzer)** - Dependency analysis *(Phase 2)* 🔴
- **[@cognidocs/coverage](packages/coverage)** - Coverage tracking *(Phase 2)* 🔴
- **[@cognidocs/docs-generator](packages/docs-generator)** - Documentation generation *(Phase 3)* 🔴
- **[@cognidocs/site-builder](packages/site-builder)** - Static site builder *(Phase 3)* 🔴
- **[@cognidocs/graph-viz](packages/graph-viz)** - Graph visualization *(Phase 4)* 🔴
- **[@cognidocs/component-preview](packages/component-preview)** - Component previews *(Phase 5)* 🔴
- **[@cognidocs/ai](packages/ai)** - AI integration *(Phase 6)* 🔴
- **[@cognidocs/testing](packages/testing)** - Testing utilities *(Phase 1)* 🟡

### Shared Libraries

- **[@cognidocs/types](shared/types)** - Shared TypeScript types
- **[@cognidocs/utils](shared/utils)** - Shared utility functions
- **[@cognidocs/constants](shared/constants)** - Shared constants

### Apps (SaaS Platform)

- **[saas-platform](apps/saas-platform)** - Main SaaS web app *(Phase 7)* 🔴
- **[marketplace](apps/marketplace)** - Theme/plugin marketplace *(Phase 9)* 🔴
- **[collaboration](apps/collaboration)** - Real-time collaboration *(Phase 7)* 🔴

**Legend:** 🟢 Complete | 🟡 In Progress | 🔴 Not Started

## 🏗️ Development Phases

### Phase 1: Foundation (Weeks 1-3) 🟡 IN PROGRESS
- [x] Project structure
- [x] CLI scaffolding
- [x] Parser foundations
- [ ] Basic TypeScript/React parsing
- [ ] Test suite setup

### Phase 2: Analysis & Coverage (Weeks 4-5)
- [ ] Dependency graph generation
- [ ] Coverage calculation
- [ ] Code metrics

### Phase 3: Core Documentation (Weeks 6-7) - MVP
- [ ] Documentation generator
- [ ] Static site builder
- [ ] Search functionality
- [ ] 2-3 themes

### Phase 4: Graph Visualization (Weeks 8-9)
- [ ] D3.js graphs
- [ ] Interactive diagrams

### Phase 5: Component Previews (Weeks 10-11)
- [ ] Component sandbox
- [ ] Props playground
- [ ] Framework support

### Phase 6: AI Integration (Weeks 12-14)
- [ ] OpenAI/Anthropic integration
- [ ] Semantic search
- [ ] Auto-generation
- [ ] Chatbot

### Phase 7: SaaS Platform (Weeks 15-17)
- [ ] Supabase backend
- [ ] Authentication
- [ ] Team workspaces
- [ ] Stripe billing

### Phase 8: Enterprise Features (Weeks 18-20)
- [ ] SSO/SAML
- [ ] Self-hosted deployment
- [ ] Advanced permissions

### Phase 9: Marketplace (Weeks 21-22)
- [ ] Theme marketplace
- [ ] Plugin system

### Phase 10: Polish & Launch (Weeks 23-24)
- [ ] Performance optimization
- [ ] Security hardening
- [ ] Public launch

## 🛠️ Quick Start

### Prerequisites

- Node.js >= 18.0.0
- npm >= 9.0.0

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/cognidocs.git
cd cognidocs

# Install dependencies
npm install

# Build all packages
npm run build

# Run Phase 1 packages in development
npm run phase1
```

### Development

```bash
# Run all packages in watch mode
npm run dev

# Run specific phase packages
npm run phase1  # CLI, Parser, Testing
npm run phase2  # Analyzer, Coverage
npm run phase3  # Docs Generator, Site Builder

# Run tests
npm test

# Lint code
npm run lint

# Format code
npm run format
```

## 📖 CLI Usage

```bash
# Initialize configuration
cognidocs init

# Build documentation
cognidocs build

# Serve with watch mode
cognidocs build --watch

# [Phase 2] Analyze dependencies
cognidocs analyze

# [Phase 2] Generate coverage report
cognidocs coverage

# [Phase 3] Start dev server
cognidocs serve

# [Phase 6] AI features
cognidocs ai generate  # Generate missing docs
cognidocs ai chat      # Chat with your codebase
```

## 🏗️ Tech Stack

### Core
- **TypeScript** - Type-safe code
- **Turbo** - Monorepo build system
- **Vitest** - Testing framework
- **TSup** - Package bundler

### Parsing & Analysis
- **TypeScript Compiler API** - AST parsing
- **Babel** - JavaScript parsing

### Visualization
- **D3.js** - Graphs and charts
- **Cytoscape.js** - Network visualization
- **Mermaid.js** - Diagrams

### AI
- **OpenAI API** - GPT-4 integration
- **Anthropic Claude** - Alternative LLM
- **Supabase pgvector** - Vector storage

### SaaS Platform
- **Next.js 14** - React framework
- **Supabase** - Backend (PostgreSQL, Auth, Realtime, Storage)
- **Stripe** - Payments
- **Vercel** - Hosting

## 🤝 Contributing

We're currently in Phase 1 development. Contributions are welcome!

1. Check the [Phase 1 issues](https://github.com/yourusername/cognidocs/labels/phase-1)
2. Fork the repository
3. Create a feature branch
4. Make your changes
5. Submit a pull request

## 📄 License

MIT License - see [LICENSE](LICENSE) file for details.

## 🗺️ Roadmap

See [agents.md](agents.md) for detailed architecture and [CLAUDE.md](CLAUDE.md) for development guidelines.

## 📞 Support

- 📖 [Documentation](https://docs.cognidocs.dev) (coming soon)
- 💬 [Discord Community](https://discord.gg/cognidocs) (coming soon)
- 🐛 [Issue Tracker](https://github.com/yourusername/cognidocs/issues)

---

Built with ❤️ using Claude Code
