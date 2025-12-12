# npm Release Checklist

Complete guide to publishing CogniDocs to npm for the first time.

---

## ✅ Pre-Release Checklist

### 1. Clean Build & Tests

```bash
# Install dependencies
npm install

# Build all packages
npm run build

# Run all tests
npm test

# Type check
npm run typecheck

# Lint
npm run lint

# Format
npm run format
```

**Status:** All must pass ✅

---

### 2. Update Package Versions

All `package.json` files should have version `1.0.0` (not 0.1.0):

- ✅ Root `package.json`
- ✅ `packages/cli/package.json`
- ⚠️ `packages/parser/package.json` - UPDATE NEEDED
- ⚠️ `packages/analyzer/package.json` - UPDATE NEEDED
- ⚠️ `packages/coverage/package.json` - UPDATE NEEDED
- ⚠️ `packages/docs-generator/package.json` - UPDATE NEEDED
- ⚠️ `packages/site-builder/package.json` - UPDATE NEEDED
- ⚠️ `packages/graph-viz/package.json` - UPDATE NEEDED
- ⚠️ `packages/plugin-core/package.json` - UPDATE NEEDED
- ⚠️ `shared/types/package.json` - UPDATE NEEDED
- ⚠️ `shared/utils/package.json` - UPDATE NEEDED
- ⚠️ `shared/constants/package.json` - UPDATE NEEDED

**Action:**

```bash
# Find and replace in all package.json files:
"version": "0.1.0" → "version": "1.0.0"
```

---

### 3. Update Repository URLs

Replace `yourusername` with your actual GitHub username in ALL `package.json` files:

```json
"repository": {
  "type": "git",
  "url": "https://github.com/YOUR_ACTUAL_USERNAME/cognidocs.git"
}
```

**Files to update:**

- Root package.json
- All packages/\*/package.json
- All shared/\*/package.json

---

### 4. Update Author Information

In root and CLI `package.json`:

```json
"author": "Your Name <your.email@example.com>"
```

---

### 5. Remove Internal Documentation

**Delete these files before making repo public:**

```bash
rm CLAUDE.md
rm PHASES.md
rm PHASE1_COMPLETE.md
rm PROJECT_STRUCTURE.md
rm agents.md
rm SETUP.md
rm INTERNAL_FILES.md
rm NPM_RELEASE_CHECKLIST.md  # This file - delete after publishing
```

---

### 6. Remove SaaS Code (Optional)

The `apps/` directory contains SaaS platform code. Decide:

**Option A: Remove entirely**

```bash
rm -rf apps/
```

**Option B: Keep but exclude from npm**

- Add `apps/` to `.npmignore`
- Keep for future development

---

### 7. Create LICENSE File

Ensure `LICENSE` file exists at root with MIT license text.

```bash
# Check if exists
ls -la LICENSE

# If missing, create one with MIT license text
```

---

### 8. Add `files` Field to All Package.json

Each package should specify what files to publish.

**Example for all packages:**

```json
{
  "files": ["dist", "README.md"]
}
```

**Packages to update:**

- packages/parser/package.json
- packages/analyzer/package.json
- packages/coverage/package.json
- packages/docs-generator/package.json
- packages/site-builder/package.json
- packages/graph-viz/package.json
- packages/plugin-core/package.json
- shared/types/package.json
- shared/utils/package.json
- shared/constants/package.json

---

## 🧪 Testing Before Publishing

### Test 1: Local Link Testing

```bash
# Link CLI globally
cd packages/cli
npm link
cd ../..

# Test on sample project
cd examples/sample-react
cognidocs init
cognidocs build
cognidocs serve

# Verify everything works
```

### Test 2: Pack and Install Testing

```bash
# Pack the CLI package
cd packages/cli
npm pack
# Creates: cognidocs-cli-1.0.0.tgz

# Test installation in a different project
cd /path/to/test-project
npm install /path/to/cognidocs/packages/cli/cognidocs-cli-1.0.0.tgz

# Test commands
npx cognidocs init
npx cognidocs build

# Clean up
npm uninstall @cognidocs/cli
```

### Test 3: Verify Package Contents

```bash
cd packages/cli
npm pack --dry-run

# Check output - should only include:
# - dist/
# - README.md
# - package.json
```

---

## 📦 Publishing to npm

### Step 1: Login to npm

```bash
npm login
# Enter your npm username, password, and email
```

### Step 2: Create npm Organization

If publishing under `@cognidocs` scope:

1. Go to https://www.npmjs.com/org/create
2. Create organization named `cognidocs`
3. Or publish under your username: `@yourusername/cli`

### Step 3: Publish Packages in Order

**Important:** Publish in dependency order!

```bash
# 1. Shared packages first (no dependencies)
cd shared/types
npm publish --access public
cd ../..

cd shared/utils
npm publish --access public
cd ../..

cd shared/constants
npm publish --access public
cd ../..

# 2. Parser (depends on shared packages)
cd packages/parser
npm publish --access public
cd ../..

# 3. Analyzer (depends on parser, shared)
cd packages/analyzer
npm publish --access public
cd ../..

# 4. Coverage (depends on parser, shared)
cd packages/coverage
npm publish --access public
cd ../..

# 5. Docs Generator (depends on shared)
cd packages/docs-generator
npm publish --access public
cd ../..

# 6. Graph Viz (standalone)
cd packages/graph-viz
npm publish --access public
cd ../..

# 7. Site Builder (depends on graph-viz, shared)
cd packages/site-builder
npm publish --access public
cd ../..

# 8. Plugin Core (depends on shared)
cd packages/plugin-core
npm publish --access public
cd ../..

# 9. CLI Last (depends on everything)
cd packages/cli
npm publish --access public
cd ../..
```

### Alternative: Use Publishing Script

Create `scripts/publish-all.sh` and run:

```bash
chmod +x scripts/publish-all.sh
./scripts/publish-all.sh
```

---

## 🧪 Post-Publishing Testing

### Test Installation

```bash
# Create a new test project
mkdir test-cognidocs
cd test-cognidocs
npm init -y

# Install CogniDocs
npm install -g @cognidocs/cli

# Or use npx
npx @cognidocs/cli init
```

### Test All Commands

```bash
# Initialize
cognidocs init

# Build
cognidocs build

# Analyze
cognidocs analyze

# Coverage
cognidocs coverage

# Serve
cognidocs serve --port 3000
```

### Test on Real Project

```bash
cd /path/to/your-react-project
npm install -g @cognidocs/cli
cognidocs init
cognidocs build
cognidocs serve
```

---

## 🎉 Post-Release Tasks

### 1. Tag Release on GitHub

```bash
git tag -a v1.0.0 -m "Release v1.0.0 - Initial public release"
git push origin v1.0.0
```

### 2. Create GitHub Release

1. Go to: https://github.com/YOUR_USERNAME/cognidocs/releases/new
2. Select tag: v1.0.0
3. Title: "v1.0.0 - Initial Public Release"
4. Description:

````markdown
# 🎉 CogniDocs v1.0.0

First public release of CogniDocs - Beautiful documentation for TypeScript & React projects!

## ✨ Features

- 🤖 Automatic TypeScript & React parsing
- 📚 12 professional themes
- 🔍 Advanced search with Cmd+K
- 📊 Dependency graphs & coverage reports
- 📱 Responsive design
- ⚡ Zero configuration

## 📦 Installation

```bash
npm install -g @cognidocs/cli
```
````

## 🚀 Quick Start

```bash
cognidocs init
cognidocs build
cognidocs serve
```

## 📖 Documentation

See [README.md](https://github.com/YOUR_USERNAME/cognidocs) for full documentation.

## 🤝 Contributing

We welcome contributions! See [CONTRIBUTING.md](https://github.com/YOUR_USERNAME/cognidocs/blob/main/CONTRIBUTING.md).

```

### 3. Announce on Social Media

**Twitter/X:**
```

🎉 Excited to announce CogniDocs v1.0.0!

Beautiful documentation for TypeScript & React projects — automatically generated from your code.

✨ 12 themes
🔍 Advanced search
📊 Dependency graphs
⚡ Zero config

npm install -g @cognidocs/cli

#typescript #react #documentation

````

**Reddit (r/javascript, r/typescript, r/reactjs):**
```markdown
# [Announcement] CogniDocs v1.0.0 - Beautiful Auto-Generated Documentation

Hi everyone! I'm excited to share CogniDocs, a modern documentation generator for TypeScript and React projects.

## What is it?

CogniDocs automatically parses your code and generates a beautiful, searchable documentation site with:

- 🤖 Automatic parsing of TypeScript, React, JSDoc
- 📚 12 professional themes (GitBook, GitHub, Dracula, etc.)
- 🔍 Full-text search with Cmd+K command palette
- 📊 Interactive dependency graphs
- 📈 Documentation coverage reports

## Quick Start

```bash
npm install -g @cognidocs/cli
cognidocs init
cognidocs build
cognidocs serve
````

## Links

- GitHub: https://github.com/YOUR_USERNAME/cognidocs
- npm: https://www.npmjs.com/package/@cognidocs/cli

Open source (MIT) and welcoming contributions!

Let me know what you think!

````

**Dev.to:**
Create a blog post with:
- Introduction
- Installation & usage
- Screenshots
- Features
- Code examples
- Call to contribute

---

## 📊 Monitor & Maintain

### Check Package Stats

```bash
# View package info
npm info @cognidocs/cli

# Check downloads
https://npmtrends.com/@cognidocs/cli
````

### Monitor Issues

- Watch GitHub Issues
- Respond to bug reports
- Answer questions in Discussions

### Security

```bash
# Check for vulnerabilities
npm audit

# Fix vulnerabilities
npm audit fix
```

---

## 🚨 If Something Goes Wrong

### Unpublish (Within 72 hours)

```bash
npm unpublish @cognidocs/cli@1.0.0
```

### Deprecate (After 72 hours)

```bash
npm deprecate @cognidocs/cli@1.0.0 "Deprecated, use version X.X.X"
```

### Publish Patch

If you find a critical bug:

```bash
# Fix the bug
# Update version to 1.0.1
npm version patch
npm publish --access public
```

---

## ✅ Final Checklist

Before clicking "publish":

- [ ] All tests pass
- [ ] All packages build successfully
- [ ] Version updated to 1.0.0 in all packages
- [ ] Repository URLs updated
- [ ] Author information updated
- [ ] Internal docs removed
- [ ] LICENSE file exists
- [ ] README.md is user-friendly
- [ ] CONTRIBUTING.md exists
- [ ] Tested with `npm link`
- [ ] Tested with `npm pack`
- [ ] `files` field added to all package.json
- [ ] npm account created and logged in
- [ ] Organization created (if using @cognidocs)
- [ ] Ready to announce!

---

## 🎊 You're Ready!

Once everything is checked, run the publish script and share your work with the world!

**Good luck! 🚀**
