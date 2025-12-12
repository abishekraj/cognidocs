# Contributing to CogniDocs

Thank you for your interest in contributing to CogniDocs! We're excited to have you as part of our community.

---

## 🌟 Ways to Contribute

- 🐛 **Report bugs** - Found a bug? Let us know!
- 💡 **Suggest features** - Have an idea? We'd love to hear it
- 📝 **Improve documentation** - Help make our docs better
- 🔧 **Submit code changes** - Fix bugs or add features
- 🎨 **Create themes** - Design new documentation themes
- ✅ **Write tests** - Improve code coverage
- 🌍 **Translations** - Help translate CogniDocs (coming soon)

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** >= 18.0.0
- **npm** >= 9.0.0
- **Git**

### Setup Development Environment

1. **Fork the repository**
   - Click the "Fork" button on GitHub
   - Clone your fork:
     ```bash
     git clone https://github.com/YOUR_USERNAME/cognidocs.git
     cd cognidocs
     ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Build all packages**

   ```bash
   npm run build
   ```

4. **Link CLI for testing**

   ```bash
   npm link -w @cognidocs/cli
   ```

5. **Run tests**
   ```bash
   npm test
   ```

---

## 📂 Project Structure

```
cognidocs/
├── packages/              # Core packages
│   ├── cli/              # Command-line interface
│   ├── parser/           # TypeScript/React parser
│   ├── analyzer/         # Dependency analysis
│   ├── coverage/         # Coverage tracking
│   ├── docs-generator/   # Markdown generation
│   ├── site-builder/     # Static site builder
│   ├── graph-viz/        # Visualizations
│   └── plugin-core/      # Plugin system
├── shared/               # Shared libraries
│   ├── types/           # TypeScript types
│   ├── utils/           # Utilities
│   └── constants/       # Constants
├── examples/            # Example projects
│   └── sample-react/    # React example
└── docs/                # Generated documentation
```

---

## 🔧 Development Workflow

### 1. Create a Branch

```bash
# Create a feature branch
git checkout -b feature/your-feature-name

# Or a bugfix branch
git checkout -b fix/bug-description
```

### 2. Make Your Changes

- Write clean, readable code
- Follow existing code style
- Add tests for new features
- Update documentation as needed

### 3. Test Your Changes

```bash
# Run all tests
npm test

# Run tests for specific package
npm test --filter=@cognidocs/parser

# Type check
npm run typecheck

# Lint
npm run lint

# Format code
npm run format
```

### 4. Test with Example Project

```bash
# Generate docs for sample React project
cd examples/sample-react
cognidocs build
cognidocs serve

# Verify everything works
```

### 5. Commit Your Changes

We follow [Conventional Commits](https://www.conventionalcommits.org/):

```bash
# Feature
git commit -m "feat: add support for Vue components"

# Bug fix
git commit -m "fix: resolve parsing error for arrow functions"

# Documentation
git commit -m "docs: update README installation instructions"

# Refactor
git commit -m "refactor: simplify type extraction logic"

# Tests
git commit -m "test: add coverage for JSDoc parsing"
```

**Commit Types:**

- `feat:` - New feature
- `fix:` - Bug fix
- `docs:` - Documentation changes
- `style:` - Code style (formatting, no logic change)
- `refactor:` - Code refactoring
- `test:` - Adding or updating tests
- `chore:` - Maintenance tasks
- `perf:` - Performance improvements

### 6. Push and Create Pull Request

```bash
# Push to your fork
git push origin feature/your-feature-name
```

Then:

1. Go to the original repository
2. Click "New Pull Request"
3. Select your branch
4. Fill out the PR template
5. Submit!

---

## 📋 Pull Request Guidelines

### Before Submitting

- ✅ Tests pass (`npm test`)
- ✅ Types are correct (`npm run typecheck`)
- ✅ Code is linted (`npm run lint`)
- ✅ Code is formatted (`npm run format`)
- ✅ Documentation is updated (if needed)
- ✅ Example project works with your changes

### PR Description

Please include:

1. **What** - What does this PR do?
2. **Why** - Why is this change needed?
3. **How** - How does it work?
4. **Testing** - How did you test it?
5. **Screenshots** - If applicable (for UI changes)

**Example:**

```markdown
## What

Adds support for parsing Vue 3 components with Composition API

## Why

Users requested Vue support for their component libraries

## How

- Extended parser to recognize Vue SFC format
- Added Vue-specific AST traversal
- Extracted component props from setup() function

## Testing

- Added unit tests for Vue component parsing
- Tested with real Vue 3 project
- All existing tests still pass

## Screenshots

![Vue component parsed](link-to-screenshot.png)
```

---

## 🐛 Reporting Bugs

### Before Reporting

1. **Search existing issues** - Check if it's already reported
2. **Try latest version** - Update to latest CogniDocs
3. **Reproduce** - Confirm you can reproduce the bug

### Bug Report Template

```markdown
**Describe the bug**
A clear description of what the bug is.

**To Reproduce**
Steps to reproduce:

1. Run `cognidocs build` on project X
2. See error ...

**Expected behavior**
What you expected to happen.

**Actual behavior**
What actually happened.

**Environment:**

- CogniDocs version: [e.g., 1.0.0]
- Node.js version: [e.g., 18.16.0]
- npm version: [e.g., 9.5.0]
- OS: [e.g., macOS 13.2]
- Project type: [e.g., React TypeScript]

**Code sample**
If applicable, provide a minimal code sample that reproduces the issue.

**Additional context**
Any other relevant information.
```

---

## 💡 Suggesting Features

We love feature ideas! Please:

1. **Search existing issues** - Check if it's already suggested
2. **Describe the problem** - What problem does this solve?
3. **Describe your solution** - What would you like to see?
4. **Consider alternatives** - Are there other ways to solve this?

### Feature Request Template

```markdown
**Problem**
Describe the problem you're trying to solve.

**Proposed Solution**
Describe what you'd like to happen.

**Alternatives**
Other solutions you've considered.

**Use Cases**
Examples of how this would be used.

**Additional Context**
Any other relevant information.
```

---

## 🎨 Creating Themes

Want to create a new theme? Here's how:

### 1. Theme Structure

Themes are CSS files in `packages/site-builder/src/template/src/styles/themes/`:

```css
/* themes/your-theme.css */
:root {
  /* Colors */
  --background: #ffffff;
  --foreground: #0a0a0a;
  --primary: #0070f3;
  --primary-foreground: #ffffff;
  /* ... more variables */
}
```

### 2. Add to Theme List

Update `packages/site-builder/src/template/src/components/ThemeSwitcher.tsx`:

```typescript
const themes = [
  // ... existing themes
  { value: 'your-theme', label: 'Your Theme Name' },
];
```

### 3. Test Your Theme

```bash
# Build site builder
npm run build --filter=@cognidocs/site-builder

# Generate docs with your theme
cd examples/sample-react
cognidocs build
cognidocs serve

# Change theme in UI and verify it looks good
```

### 4. Submit Theme PR

Include:

- CSS file
- Screenshot of the theme
- Description of the theme's inspiration

---

## ✅ Code Style Guide

We use ESLint and Prettier to enforce code style.

### TypeScript

```typescript
// ✅ Good
export function parseFile(filePath: string): ParseResult {
  const sourceFile = ts.createSourceFile(filePath, content, ts.ScriptTarget.Latest);
  return extractMetadata(sourceFile);
}

// ❌ Bad
export function parseFile(filePath: string) {
  let sourceFile = ts.createSourceFile(filePath, content, ts.ScriptTarget.Latest);
  return extractMetadata(sourceFile);
}
```

### Naming Conventions

- **Functions/Methods**: camelCase (`parseComponent`, `extractProps`)
- **Classes**: PascalCase (`ReactParser`, `DependencyAnalyzer`)
- **Constants**: UPPER_SNAKE_CASE (`DEFAULT_CONFIG`, `MAX_DEPTH`)
- **Interfaces**: PascalCase (`ComponentMetadata`, `ParseOptions`)
- **Types**: PascalCase (`ParseResult`, `ConfigOptions`)

### Comments

```typescript
/**
 * Parses a TypeScript file and extracts component metadata
 * @param filePath - Absolute path to the file
 * @returns Component metadata array
 */
export function parseComponent(filePath: string): ComponentMetadata[] {
  // Implementation
}
```

---

## 🧪 Writing Tests

We use Vitest for testing.

### Test Structure

```typescript
import { describe, it, expect } from 'vitest';
import { parseFile } from '../parsers/typescript-parser';

describe('TypeScript Parser', () => {
  it('should parse function declarations', () => {
    const result = parseFile('test.ts');
    expect(result.functions).toHaveLength(1);
    expect(result.functions[0].name).toBe('myFunction');
  });

  it('should extract JSDoc comments', () => {
    const result = parseFile('test.ts');
    expect(result.functions[0].description).toBe('Function description');
  });
});
```

### Running Tests

```bash
# All tests
npm test

# Specific package
npm test --filter=@cognidocs/parser

# Watch mode
npm test -- --watch

# Coverage
npm test -- --coverage
```

---

## 📚 Documentation

### Code Documentation

- Add JSDoc comments to all exported functions
- Explain complex logic with inline comments
- Update README when adding features

### User Documentation

- Update README.md for user-facing changes
- Add examples for new features
- Update CLI help text if adding commands

---

## 🤝 Code Review Process

1. **Automated checks** - Must pass CI/CD checks
2. **Maintainer review** - At least one maintainer approval
3. **Testing** - Verify the fix/feature works
4. **Documentation** - Check docs are updated
5. **Merge** - Maintainer will merge when ready

### What We Look For

- ✅ Code quality and readability
- ✅ Test coverage
- ✅ Documentation
- ✅ Breaking changes (must be justified)
- ✅ Performance impact
- ✅ Security considerations

---

## 📜 License

By contributing, you agree that your contributions will be licensed under the MIT License.

---

## 💬 Questions?

- 📖 Check the [README](README.md)
- 💬 Open a [Discussion](https://github.com/yourusername/cognidocs/discussions)
- 🐛 Open an [Issue](https://github.com/yourusername/cognidocs/issues)

---

## 🎉 Thank You!

Every contribution, no matter how small, is valued and appreciated. Thank you for helping make CogniDocs better!

---

**Happy coding! 🚀**
