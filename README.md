# CogniDocs

> 🚀 Beautiful documentation for TypeScript & React projects — automatically generated from your code

[![npm version](https://badge.fury.io/js/@cognidocs%2Fcli.svg)](https://www.npmjs.com/package/@cognidocs/cli)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Node.js Version](https://img.shields.io/badge/node-%3E%3D18.0.0-brightgreen)](https://nodejs.org)

CogniDocs is a modern documentation generator for JavaScript and TypeScript projects. Point it at your codebase, and it creates a beautiful, searchable documentation site with interactive dependency graphs, coverage reports, and 12 professional themes.

**✨ Perfect for:**

- React and TypeScript projects ( Next.js, Vue, Svelte coming soon!)
- Component libraries and design systems
- Open-source projects needing quick documentation
- Teams wanting automated API documentation

---

## 📸 Preview

![CogniDocs Documentation Site](https://via.placeholder.com/800x450?text=CogniDocs+Preview)
_Beautiful documentation site with search, themes, and dependency graphs_

---

## ✨ Features

### 🤖 Automatic Code Parsing

- **TypeScript & JavaScript** - Full AST parsing with TypeScript Compiler API
- **React Components** - Extracts props, hooks, and component metadata
- **JSDoc Support** - Reads your existing documentation comments
- **Multiple Frameworks** - React, Vue, Svelte detection

### 📚 Beautiful Documentation Site

- **12 Professional Themes** - GitBook, GitHub, Nord, Dracula, Monokai, Solarized, One Dark, Material (light & dark)
- **Advanced Search** - Full-text search with Cmd+K command palette
- **Responsive Design** - Perfect on desktop, tablet, and mobile
- **Custom Guides** - Add your own markdown documentation

### 📊 Analysis & Visualization

- **Dependency Graphs** - Interactive D3.js visualizations of your codebase
- **Coverage Reports** - Track documentation coverage across your project
- **Project Metrics** - Components, functions, classes, interfaces, types

### ⚡ Developer Experience

- **Zero Configuration** - Works out of the box with sensible defaults
- **Lightning Fast** - Built with Vite and optimized for speed
- **Hot Reload** - Built-in dev server with live updates
- **Easy Integration** - Works with any build system

---

## 🚀 Quick Start

### Installation

```bash
# Install globally
npm install -g @cognidocs/cli

# Or use npx (no installation required)
npx @cognidocs/cli init
```

### Usage

```bash
# Initialize configuration (interactive)
cognidocs init

# Generate documentation
cognidocs build

# Start dev server with live reload
cognidocs serve

# Analyze dependencies
cognidocs analyze

# Check documentation coverage
cognidocs coverage
```

That's it! Your documentation site will be generated in the `./docs` directory.

---

## 📖 Example Output

CogniDocs generates comprehensive documentation for all your code:

### Components

```markdown
# Button

A customizable button component

**Props:**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| variant | 'primary' \| 'secondary' \| 'danger' | No | Button style variant |
| disabled | boolean | No | Disable button interaction |
| onClick | () => void | No | Click event handler |
| children | React.ReactNode | Yes | Button content |

**Source:** `src/components/Button.tsx:24`
```

### Functions

- Parameter types and descriptions
- Return type documentation
- JSDoc comment extraction
- Source file locations

### Classes & Interfaces

- Properties with types
- Method signatures
- Inheritance information
- Complete type definitions

---

## ⚙️ Configuration

Create a `cognidocs.config.js` file in your project root:

```javascript
export default {
  // Entry point for your source code
  entry: './src',

  // Output directory for generated docs
  output: './docs',

  // Theme selection (12 available themes)
  theme: 'gitbook',

  // Enable dark mode
  darkMode: true,

  // Framework detection
  frameworks: ['react'],

  // Files to exclude
  exclude: [
    '**/*.test.ts',
    '**/*.test.tsx',
    '**/*.spec.ts',
    '**/node_modules/**',
    '**/dist/**',
    '**/build/**',
  ],

  // Project metadata
  name: 'My Project',
  version: '1.0.0',
  description: 'My awesome project documentation',
};
```

### Available Themes

Choose from 12 professional themes:

- **gitbook** - Clean, GitBook-inspired design (default)
- **github** - GitHub documentation style
- **nord** - Nord color palette
- **dracula** - Dracula dark theme
- **monokai** - Monokai syntax theme
- **solarized-light** - Solarized light
- **solarized-dark** - Solarized dark
- **one-dark** - Atom's One Dark
- **material-light** - Material Design light
- **material-dark** - Material Design dark
- **tokyo-night** - Tokyo Night theme
- **catppuccin** - Catppuccin pastel theme

---

## 📋 CLI Commands

### `cognidocs init`

Initialize a new CogniDocs configuration file.

**Options:**

- `--yes, -y` - Skip prompts and use defaults
- `--force, -f` - Overwrite existing configuration

```bash
cognidocs init --yes
```

### `cognidocs build`

Parse your codebase and generate documentation.

**Options:**

- `--output <dir>` - Custom output directory
- `--config <path>` - Custom config file path

```bash
cognidocs build --output ./documentation
```

### `cognidocs serve`

Start a development server to preview your documentation.

**Options:**

- `--port <port>` - Custom port (default: 4173)
- `--open` - Open browser automatically

```bash
cognidocs serve --port 3000 --open
```

### `cognidocs analyze`

Analyze your codebase dependencies and generate a dependency graph.

```bash
cognidocs analyze
```

### `cognidocs coverage`

Calculate documentation coverage across your project.

```bash
cognidocs coverage
```

---

## 📁 Project Structure

After running `cognidocs build`, your output directory will contain:

```
docs/
├── index.html              # Main documentation site
├── assets/                 # CSS, JS, and static assets
├── content/
│   ├── manifest.json      # Site navigation structure
│   ├── search-index.json  # Search index
│   ├── search-data.json   # Searchable content
│   ├── components/        # Component documentation
│   ├── functions/         # Function documentation
│   ├── classes/           # Class documentation
│   ├── interfaces/        # Interface documentation
│   └── types/             # Type documentation
└── data.json              # Complete parsed metadata
```

### Adding Custom Documentation

Create an `additional-documentation/` folder in your project root:

```
your-project/
├── src/
├── additional-documentation/
│   ├── getting-started.md
│   ├── api-guide.md
│   └── examples.md
└── cognidocs.config.js
```

Add frontmatter to organize your guides:

```markdown
---
title: Getting Started
description: Quick start guide for new users
category: Guides
order: 1
---

# Getting Started

Your content here...
```

---

## 🤝 Contributing

We welcome contributions! CogniDocs is open-source and community-driven.

**Ways to contribute:**

- 🐛 Report bugs and issues
- 💡 Suggest new features
- 📝 Improve documentation
- 🔧 Submit pull requests

See [CONTRIBUTING.md](CONTRIBUTING.md) for detailed guidelines.

---

## 📦 Monorepo Structure

CogniDocs is built as a monorepo with focused packages:

### Core Packages

- `@cognidocs/cli` - Command-line interface
- `@cognidocs/parser` - TypeScript/React AST parser
- `@cognidocs/analyzer` - Dependency analysis
- `@cognidocs/coverage` - Documentation coverage
- `@cognidocs/docs-generator` - Markdown generation
- `@cognidocs/site-builder` - Static site builder
- `@cognidocs/graph-viz` - D3.js visualizations
- `@cognidocs/plugin-core` - Plugin system

### Shared Libraries

- `@cognidocs/types` - TypeScript type definitions
- `@cognidocs/utils` - Shared utilities
- `@cognidocs/constants` - Shared constants

---

## 🛠️ Tech Stack

- **TypeScript** - Type-safe code throughout
- **Turbo** - Fast monorepo build system
- **React + Vite** - Modern documentation site
- **Shadcn/ui + Tailwind** - Beautiful UI components
- **D3.js** - Interactive visualizations
- **Lunr.js** - Full-text search
- **TypeScript Compiler API** - AST parsing

---

## 📄 License

MIT License - see [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

CogniDocs combines inspiration from:

- **Compodoc** - Angular documentation tool
- **Storybook** - Component development environment
- **TypeDoc** - TypeScript API documentation

Built with ❤️ by the open-source community.

---

## 📞 Support & Community

- 📖 **Documentation:** [Full documentation](https://github.com/yourusername/cognidocs)
- 🐛 **Issues:** [GitHub Issues](https://github.com/yourusername/cognidocs/issues)
- 💬 **Discussions:** [GitHub Discussions](https://github.com/yourusername/cognidocs/discussions)
- 🐦 **Twitter:** [@cognidocs](https://twitter.com/cognidocs) _(coming soon)_

---

## ⭐ Star Us!

If CogniDocs helps your project, consider giving us a star on GitHub! It helps others discover the tool.

[![GitHub stars](https://img.shields.io/github/stars/abishekraj/cognidocs/cognidocs?style=social)](https://github.com/abishekraj/cognidocs)
