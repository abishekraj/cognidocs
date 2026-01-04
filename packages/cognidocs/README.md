# CogniDocs

> 🚀 Premium documentation for React, Next.js, Vue, and Svelte — automatically generated from your code.

[![npm version](https://badge.fury.io/js/cognidocs.svg)](https://www.npmjs.com/package/cognidocs)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Node.js Version](https://img.shields.io/badge/node-%3E%3D18.0.0-brightgreen)](https://nodejs.org)

CogniDocs is a comprehensive documentation tool for JavaScript and TypeScript. Point it at your codebase, and it generates a stunning, premium documentation site with interactive dependency graphs, detailed coverage reports, and 12 professional themes.

**[🌐 View Live Demo](https://abishekraj.github.io/cognidocs/)** — See CogniDocs in action!

---

## 🚀 Quick Start in 60 Seconds

### Installation

```bash
# npm
npm install -g cognidocs

# pnpm (Recommended - especially for monorepo projects)
pnpm add -g cognidocs

# yarn
yarn global add cognidocs

# npx (Try without installing)
npx cognidocs init
```

> **💡 Tip:** For monorepo/workspace projects, we strongly recommend using **pnpm** as it provides superior workspace management and dependency handling.

### Usage

```bash
# 1. Initialize your project
cognidocs init

# 2. Build your documentation
cognidocs build

# 3. Preview locally
cognidocs serve
```

Your documentation site will be generated in the `./docs` directory.

---

## ⚡ Features at a Glance

### 🤖 Intelligent Code Parsing

- **Multi-Framework Support** - Native support for **React**, **Next.js**, **Vue 3**, and **Svelte**.
- **TypeScript & JavaScript** - Full AST parsing for both `.ts/.tsx` and `.js/.jsx` files.
- **Deep Export Detection** - Handles all export patterns (default, named, re-exports, aliases).
- **Rich JSDoc Rendering** - Supports `@example`, `@see`, `@link`, `@tutorial`, `@deprecated`, and more.

### 🎨 Premium Documentation Sites

- **12 Professional Themes** - GitBook, GitHub, Nord, Dracula, Monokai, Solarized, One Dark, Material (light/dark variants).
- **Advanced Search** - Lunr.js with Cmd+K command palette for instant navigation.
- **Interactive Dependency Graphs** - D3.js force-directed visualization of module relationships.
- **Mermaid.js Diagrams** - Full support for flowcharts, sequence diagrams, class diagrams, and more.
- **Responsive Design** - Works beautifully on desktop, tablet, and mobile.
- **Dark Mode** - Toggle between light and dark themes.

### 📊 Deep Analysis

- **Coverage Reports** - Track documentation health across Components, Functions, Classes, Interfaces, and Types.
- **Project Metrics** - Get instant insights into your project's complexity and structure.
- **Zero Configuration** - Intelligent defaults that work out of the box.

---

---

## 📸 Preview

![CogniDocs Dashboard](https://raw.githubusercontent.com/abishekraj/cognidocs/main/assets/SCR-20251219-cdur.png)
_Interactive Dashboard with documentation health metrics and coverage analysis._

![Component Documentation](https://raw.githubusercontent.com/abishekraj/cognidocs/main/assets/SCR-20251219-cdgc.png)
_Detailed component documentation with props tables and source code view._

![Mermaid Diagram](https://raw.githubusercontent.com/abishekraj/cognidocs/main/assets/SCR-20251219-ccxb.png)
_Mermaid.js diagrams for visualizing complex logic._

---

## 🛠 Supported Frameworks

| Framework   | Support Details                                                                    |
| :---------- | :--------------------------------------------------------------------------------- |
| **React**   | Function & Class components, Hooks extraction, Props detection, JSX/TSX support.   |
| **Next.js** | Full support for App Router & Page Router, API route documentation.                |
| **Vue 3**   | Single File Components (SFC), Composition API (`<script setup>`), and Options API. |
| **Svelte**  | Component props, events, stores, and reactive statements (`$:`) extraction.        |

---

## 💡 Documenting Your Code (JSDoc)

CogniDocs automatically extracts information from your JSDoc comments. Here's how to document your code for the best results:

### React Components

Document props and provide usage examples.

```tsx
/**
 * A premium button component with multiple variants.
 *
 * @component
 * @example
 * <Button variant="primary" onClick={() => console.log('Clicked!')}>
 *   Click Me
 * </Button>
 */
export const Button = ({ variant, children, ...props }: ButtonProps) => {
  return (
    <button className={variant} {...props}>
      {children}
    </button>
  );
};
```

### Functions & Logic

Use standard JSDoc tags for parameters and return types.

```typescript
/**
 * Calculates the total price including tax.
 *
 * @param price - The base price of the item
 * @param tax - The tax rate (e.g., 0.15 for 15%)
 * @returns The final price with tax applied
 *
 * @deprecated Use `calculateTotalV2` for better precision.
 * @see {@link https://api.docs.com/pricing}
 */
export function calculateTotal(price: number, tax: number): number {
  return price * (1 + tax);
}
```

---

## ⚙️ Configuration

Create a `cognidocs.config.js` in your root:

```javascript
export default {
  entry: './src', // Source directory
  output: './docs', // Output directory
  theme: 'gitbook', // Theme (12 available)
  darkMode: true, // Toggle dark mode
  frameworks: ['react'], // Primary framework
  name: 'My Project', // Documentation title
  exclude: ['**/node_modules/**', '**/dist/**', '**/*.test.ts'],
};
```

### Available Themes

- `gitbook` (Light/Dark)
- `github` (Light/Dark)
- `nord` (Light/Dark)
- `dracula`
- `monokai`
- `solarized-light`, `solarized-dark`
- `one-dark`
- `material-light`, `material-dark`

### Excluding Files and Folders

You can exclude specific files, folders, or patterns from documentation generation using the `exclude` array in your configuration. This is useful for:

- Test files (`**/*.test.ts`, `**/*.spec.tsx`)
- Build artifacts (`**/dist/**`, `**/build/**`)
- Third-party code (`**/node_modules/**`)
- Development utilities (`**/scripts/**`, `**/tools/**`)
- Next.js specific folders (`**/.next/**`)

**Example:**

```javascript
export default {
  entry: './src',
  output: './docs',
  exclude: [
    // Test files
    '**/*.test.ts',
    '**/*.test.tsx',
    '**/*.spec.ts',
    '**/*.spec.tsx',

    // Build output
    '**/node_modules/**',
    '**/dist/**',
    '**/build/**',
    '**/.next/**',
    '**/.cognidocs/**',

    // Development utilities
    '**/scripts/**',
    '**/tools/**',

    // Config files
    '**/*.config.js',
    '**/*.config.ts',
  ],
};
```

> **💡 Tip:** The exclude patterns use glob syntax. Use `**` to match any number of directories and `*` to match any characters within a directory name or filename.

---

## 📋 CLI Commands

| Command              | Description                                            |
| :------------------- | :----------------------------------------------------- |
| `cognidocs init`     | Initialize configuration (use `-y` for defaults)       |
| `cognidocs build`    | Generate the documentation site                        |
| `cognidocs serve`    | Start dev server with live reload (default port: 4173) |
| `cognidocs analyze`  | Generate interactive dependency graphs                 |
| `cognidocs coverage` | Calculate documentation coverage metrics               |
| `cognidocs --help`   | Show help and available commands                       |
| `cognidocs --version`| Display current version                                |

---

## 📚 Custom Documentation (Guides)

Beyond auto-generated API docs, you can add custom guides (like a "Getting Started" or "Architecture" page).

### How to add Guides

1. Create an `additional-documentation/` folder in your project root.
2. Add `.md` files to this folder.
3. Use YAML frontmatter to organize them:

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

CogniDocs will automatically discover these files and list them under a **"Guides"** section in the sidebar.

---

## 💎 Advanced Markdown Features

CogniDocs premium UI includes built-in support for advanced markdown elements:

### 🧜‍♂️ Mermaid.js Diagrams

Visualize complex logic with native Mermaid support.

\`\`\`mermaid
graph TD;
    A[Source Code] --> B{CogniDocs Parser};
    B --> C[JSON Metadata];
    B --> D[Markdown Guides];
    C --> E[Premium Doc Site];
    D --> E;
\`\`\`

### 🎈 Callout Boxes

Highlight important information using the `:::type` syntax:

```
:::info
This is an information callout.
:::

:::warning
This is a warning callout.
:::

:::tip
This is a helpful tip.
:::

:::danger
This is a critical danger callout.
:::
```

---

## 🤝 Contributing & Community

We welcome contributions! Please see our [Contributing Guide](https://github.com/abishekraj/cognidocs/blob/main/CONTRIBUTING.md) for details.

- 🐛 [Report a bug](https://github.com/abishekraj/cognidocs/issues/new?template=bug_report.md)
- 💡 [Request a feature](https://github.com/abishekraj/cognidocs/issues/new?template=feature_request.md)
- ⭐ [Star us on GitHub](https://github.com/abishekraj/cognidocs)

---

## 📄 License

MIT © [Abishek Raj](https://github.com/abishekraj)

---

**Made with ❤️ by the CogniDocs team**
