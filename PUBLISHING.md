# Publishing Guide

This guide explains how to publish CogniDocs to npm, test it on other projects, and maintain the package.

---

## 📋 Prerequisites

Before publishing, ensure you have:

1. **npm Account**
   ```bash
   # Create account at https://www.npmjs.com/signup
   # Then login
   npm login
   ```

2. **Organization Access** (for scoped packages like `@cognidocs/cli`)
   ```bash
   # Create organization at: https://www.npmjs.com/org/create
   # Or request access if organization exists
   ```

3. **Clean Build**
   ```bash
   # Build all packages
   npm run build

   # Run tests
   npm test

   # Type check
   npm run typecheck

   # Lint
   npm run lint
   ```

---

## 🔧 Pre-Publishing Checklist

### 1. Update Version Numbers

Update versions in all package.json files:

```bash
# Root package.json
"version": "0.1.0" → "1.0.0"

# All package.json files in:
packages/cli/package.json
packages/parser/package.json
packages/analyzer/package.json
packages/coverage/package.json
packages/docs-generator/package.json
packages/site-builder/package.json
packages/graph-viz/package.json
packages/plugin-core/package.json
shared/types/package.json
shared/utils/package.json
shared/constants/package.json
```

### 2. Update Package Metadata

Ensure all `package.json` files have correct metadata:

```json
{
  "name": "@cognidocs/cli",
  "version": "1.0.0",
  "description": "CogniDocs CLI - Command-line interface for documentation generation",
  "keywords": ["documentation", "typescript", "react", "cli"],
  "repository": {
    "type": "git",
    "url": "https://github.com/YOUR_USERNAME/cognidocs.git"
  },
  "bugs": {
    "url": "https://github.com/YOUR_USERNAME/cognidocs/issues"
  },
  "homepage": "https://github.com/YOUR_USERNAME/cognidocs#readme",
  "author": "Your Name <your.email@example.com>",
  "license": "MIT"
}
```

### 3. Remove `"private": true` from Root

Edit root `package.json`:

```json
{
  "name": "cognidocs",
  "version": "1.0.0",
  // Remove this line:
  // "private": true,
  ...
}
```

### 4. Create/Verify LICENSE File

Ensure you have a LICENSE file (MIT recommended):

```bash
# Should exist at root:
./LICENSE
```

---

## 📦 Publishing to npm

### Option 1: Publish All Packages (Recommended for First Release)

```bash
# 1. Build everything
npm run build

# 2. Publish each package manually
cd packages/cli
npm publish --access public
cd ../..

cd packages/parser
npm publish --access public
cd ../..

cd packages/analyzer
npm publish --access public
cd ../..

cd packages/coverage
npm publish --access public
cd ../..

cd packages/docs-generator
npm publish --access public
cd ../..

cd packages/site-builder
npm publish --access public
cd ../..

cd packages/graph-viz
npm publish --access public
cd ../..

cd packages/plugin-core
npm publish --access public
cd ../..

cd shared/types
npm publish --access public
cd ../..

cd shared/utils
npm publish --access public
cd ../..

cd shared/constants
npm publish --access public
cd ../..
```

**Important Notes:**
- Use `--access public` for scoped packages (@cognidocs/*)
- Packages must be published in dependency order:
  1. Shared packages first (types, utils, constants)
  2. Then core packages (parser, analyzer, coverage)
  3. Then higher-level packages (docs-generator, site-builder, graph-viz)
  4. Finally CLI (depends on everything)

### Option 2: Use a Publishing Script

Create `scripts/publish-all.sh`:

```bash
#!/bin/bash

# Exit on error
set -e

echo "🚀 Publishing CogniDocs to npm..."

# Build everything first
echo "📦 Building all packages..."
npm run build

# Publish shared packages first
echo "📤 Publishing shared packages..."
cd shared/types && npm publish --access public && cd ../..
cd shared/utils && npm publish --access public && cd ../..
cd shared/constants && npm publish --access public && cd ../..

# Publish core packages
echo "📤 Publishing core packages..."
cd packages/parser && npm publish --access public && cd ../..
cd packages/analyzer && npm publish --access public && cd ../..
cd packages/coverage && npm publish --access public && cd ../..
cd packages/docs-generator && npm publish --access public && cd ../..
cd packages/site-builder && npm publish --access public && cd ../..
cd packages/graph-viz && npm publish --access public && cd ../..
cd packages/plugin-core && npm publish --access public && cd ../..

# Publish CLI last
echo "📤 Publishing CLI..."
cd packages/cli && npm publish --access public && cd ../..

echo "✅ All packages published successfully!"
```

Make it executable and run:

```bash
chmod +x scripts/publish-all.sh
./scripts/publish-all.sh
```

---

## 🧪 Testing Before Publishing

### Test with npm link (Local Testing)

1. **Link CLI globally:**
   ```bash
   cd packages/cli
   npm link
   cd ../..
   ```

2. **Test on a sample project:**
   ```bash
   cd /path/to/test-project
   cognidocs init
   cognidocs build
   cognidocs serve
   ```

3. **Unlink when done:**
   ```bash
   npm unlink -g @cognidocs/cli
   ```

### Test with npm pack (Near-Production Testing)

1. **Pack packages:**
   ```bash
   cd packages/cli
   npm pack
   # Creates: cognidocs-cli-1.0.0.tgz
   cd ../..
   ```

2. **Install in test project:**
   ```bash
   cd /path/to/test-project
   npm install /path/to/cognidocs/packages/cli/cognidocs-cli-1.0.0.tgz
   npx cognidocs init
   npx cognidocs build
   ```

3. **Clean up:**
   ```bash
   npm uninstall @cognidocs/cli
   rm /path/to/cognidocs/packages/cli/*.tgz
   ```

---

## 🔬 Beta Testing (Recommended First)

Before releasing v1.0.0, publish a beta version:

### 1. Update Versions to Beta

```json
{
  "version": "1.0.0-beta.1"
}
```

### 2. Publish with Beta Tag

```bash
npm publish --access public --tag beta
```

### 3. Test Beta Installation

```bash
# Install beta version
npm install -g @cognidocs/cli@beta

# Or
npx @cognidocs/cli@beta init
```

### 4. Promote Beta to Latest

Once testing is complete:

```bash
# Update version to stable (remove -beta)
"version": "1.0.0"

# Publish as latest
npm publish --access public
```

---

## 🧹 Files to Exclude from npm Package

These files are excluded via `.npmignore` (or `files` field in package.json):

### Definitely Exclude (Internal Development Files)

```
# Development documentation (not needed by users)
CLAUDE.md
PHASES.md
PHASE1_COMPLETE.md
PROJECT_STRUCTURE.md
agents.md
SETUP.md

# Development files
.turbo/
.vscode/
.eslintcache
*.tsbuildinfo
tsconfig.json (in packages - users don't need these)
tsup.config.ts (in packages)

# Test files
**/__tests__/
**/__test_files__/
*.test.ts
*.test.tsx
*.spec.ts

# Examples (only useful for development)
examples/
apps/ (SaaS platform - not open source yet)

# CI/CD
.github/
.gitignore
```

### Keep in npm Package (Users Need These)

```
# Essential
README.md
LICENSE
CONTRIBUTING.md
CHANGELOG.md

# User documentation
docs/ (if you have user guides)

# Built code
dist/
*.d.ts (type definitions)

# Config examples
cognidocs.config.example.js
```

---

## 📝 Create .npmignore Files

Create `.npmignore` in each package directory:

**Example for `packages/cli/.npmignore`:**

```
# Source files (only ship dist/)
src/
tsconfig.json
tsup.config.ts

# Tests
__tests__/
*.test.ts
*.spec.ts

# Development
.turbo/
*.tsbuildinfo
.eslintcache
```

**Or use `files` field in package.json (more explicit):**

```json
{
  "name": "@cognidocs/cli",
  "files": [
    "dist",
    "README.md"
  ]
}
```

---

## 🚀 Testing on Real Projects

### 1. Install from npm (After Publishing)

```bash
cd /path/to/your-react-project
npm install -g @cognidocs/cli

# Or use npx (no installation)
npx @cognidocs/cli init
```

### 2. Test All Commands

```bash
# Initialize
cognidocs init

# Build documentation
cognidocs build

# Analyze dependencies
cognidocs analyze

# Check coverage
cognidocs coverage

# Serve site
cognidocs serve --port 3000
```

### 3. Test with Different Project Types

- **React project** with TypeScript
- **Next.js project**
- **Pure TypeScript library**
- **Vue/Svelte project** (if you support these)

### 4. Test Configuration Options

```javascript
// cognidocs.config.js
export default {
  entry: './src',
  output: './docs',
  theme: 'github', // Try different themes
  exclude: ['**/node_modules/**'],
};
```

---

## 📊 Publishing Checklist

Before publishing v1.0.0:

- [ ] All tests passing (`npm test`)
- [ ] TypeScript compiles without errors (`npm run typecheck`)
- [ ] Lint passes (`npm run lint`)
- [ ] All packages build successfully (`npm run build`)
- [ ] README.md is up-to-date and user-friendly
- [ ] LICENSE file exists
- [ ] CONTRIBUTING.md exists
- [ ] Version numbers updated across all packages
- [ ] `"private": true` removed from root package.json
- [ ] Repository URL updated in all package.json files
- [ ] Internal docs (CLAUDE.md, PHASES.md, etc.) excluded from npm
- [ ] Tested with `npm link` on sample project
- [ ] Tested with `npm pack` installation
- [ ] Beta version published and tested
- [ ] CHANGELOG.md created with v1.0.0 notes

---

## 🔄 Publishing Updates

### Patch Release (1.0.0 → 1.0.1)

```bash
# Update version in all package.json files
# Then publish

cd packages/cli
npm version patch
npm publish --access public
```

### Minor Release (1.0.0 → 1.1.0)

```bash
npm version minor
npm publish --access public
```

### Major Release (1.0.0 → 2.0.0)

```bash
npm version major
npm publish --access public
```

---

## 🐛 Troubleshooting

### "You must be logged in to publish packages"

```bash
npm login
# Enter username, password, email
```

### "You do not have permission to publish @cognidocs/cli"

- Create the `@cognidocs` organization on npm
- Or publish under your username: `@yourusername/cli`

### "Cannot publish over existing version"

- You must increment the version number
- Or unpublish the version (only works within 72 hours):
  ```bash
  npm unpublish @cognidocs/cli@1.0.0
  ```

### "Package name too similar to existing package"

- Choose a different package name
- Check availability: `npm view @cognidocs/cli`

---

## 📈 Post-Publishing

### 1. Tag Release on GitHub

```bash
git tag -a v1.0.0 -m "Release version 1.0.0"
git push origin v1.0.0
```

### 2. Create GitHub Release

- Go to: `https://github.com/YOUR_USERNAME/cognidocs/releases/new`
- Select tag: `v1.0.0`
- Add release notes

### 3. Announce

- Post on Twitter/X
- Share on Reddit (r/javascript, r/typescript, r/reactjs)
- Post on Dev.to
- Share in relevant Discord/Slack communities

### 4. Monitor

- Watch GitHub issues for bug reports
- Monitor npm downloads: `npm info @cognidocs/cli`
- Check for security vulnerabilities: `npm audit`

---

## 🔒 Security

### Publish with 2FA Enabled

```bash
# Enable 2FA on npm
npm profile enable-2fa auth-and-writes
```

### Use npm provenance

```bash
npm publish --provenance --access public
```

---

## 📚 Additional Resources

- [npm Publishing Guide](https://docs.npmjs.com/cli/v10/commands/npm-publish)
- [npm Scoped Packages](https://docs.npmjs.com/cli/v10/using-npm/scope)
- [Semantic Versioning](https://semver.org/)
- [npm Provenance](https://docs.npmjs.com/generating-provenance-statements)
