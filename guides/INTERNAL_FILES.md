# Internal Development Files

This document lists files that are ONLY for internal development and should NOT be published to npm or included in user-facing distributions.

---

## 📝 Files to EXCLUDE from npm Package

### Development Documentation (Remove from public repo)

These files contain internal development notes and should be excluded:

1. **CLAUDE.md** - Claude Code development instructions (INTERNAL ONLY)
2. **PHASES.md** - Development phase tracking (INTERNAL ONLY)
3. **PHASE1_COMPLETE.md** - Phase completion notes (INTERNAL ONLY)
4. **PROJECT_STRUCTURE.md** - Internal project structure (INTERNAL ONLY)
5. **agents.md** - Original architecture design notes (INTERNAL ONLY)
6. **SETUP.md** - Development setup (use README.md for users)
7. **INTERNAL_FILES.md** - This file (INTERNAL ONLY)

**Action:** Add these to `.npmignore` or remove from repository before making it public.

### User-Facing Documentation (KEEP in public repo)

These files are for end users and contributors:

1. **README.md** - Main user documentation ✅
2. **LICENSE** - MIT license ✅
3. **CONTRIBUTING.md** - Contribution guidelines ✅
4. **PUBLISHING.md** - Publishing guide (can be kept for contributors) ✅
5. **CHANGELOG.md** - Version history (create this) ⚠️

---

## 📁 Directories to EXCLUDE

### SaaS Platform Code (Not Open Source Yet)

```
apps/
├── saas-platform/     # SaaS web application (EXCLUDE)
├── marketplace/       # Theme marketplace (EXCLUDE)
└── collaboration/     # Real-time collaboration (EXCLUDE)
```

**Reason:** These are commercial features not part of the open-source core.

**Action:** Either:
1. Remove `apps/` directory entirely, OR
2. Add to `.gitignore` and `.npmignore`

### Example Projects (Optional - Can Keep)

```
examples/
├── sample-react/      # Example React project (CAN KEEP for demos)
└── sample-nextjs/     # Example Next.js project (CAN KEEP for demos)
```

**Decision:** Keep these as they're useful for testing and demonstrations.

**Action:** Ensure generated `examples/*/docs/` folders are in `.gitignore`

---

## 🔧 Build & Config Files to EXCLUDE

These are only needed during development:

```
# Build artifacts
.turbo/
dist/ (keep in published packages, exclude from root)
node_modules/
*.tsbuildinfo

# IDE
.vscode/
.idea/

# Package manager
.pnpm-store/
.npm/

# Temporary
*.tmp
*.temp
.cache/
```

---

## ✅ Recommended .npmignore

Create `.npmignore` in root directory:

```
# Internal documentation
CLAUDE.md
PHASES.md
PHASE1_COMPLETE.md
PROJECT_STRUCTURE.md
agents.md
SETUP.md
INTERNAL_FILES.md

# SaaS platform (not open source)
apps/

# Development files
.vscode/
.idea/
.turbo/
*.tsbuildinfo
.eslintcache
tsconfig.json
turbo.json

# Examples (generated docs)
examples/*/docs/

# Tests
__tests__/
__test_files__/
*.test.ts
*.test.tsx
*.spec.ts
coverage/

# Git
.git/
.gitignore
.github/

# Misc
.DS_Store
Thumbs.db
*.log
```

---

## 🔐 Files to KEEP in Public Repository

These files should be public and accessible to all users:

### Essential

- ✅ **README.md** - User documentation
- ✅ **LICENSE** - MIT license
- ✅ **package.json** - Package metadata
- ✅ **CONTRIBUTING.md** - Contribution guide
- ✅ **PUBLISHING.md** - For maintainers/contributors

### Source Code

- ✅ **packages/** - All package source code
- ✅ **shared/** - Shared libraries
- ✅ **examples/** - Example projects (useful for testing)

### Configuration

- ✅ **.gitignore** - Git ignore rules
- ✅ **tsconfig.json** - TypeScript configuration
- ✅ **turbo.json** - Turbo configuration
- ✅ **.eslintrc** - ESLint configuration
- ✅ **.prettierrc** - Prettier configuration

---

## 📦 Package-Specific .npmignore

Each package directory should have its own `.npmignore`:

**Example: `packages/cli/.npmignore`**

```
# Source files (ship only dist/)
src/
tsconfig.json
tsup.config.ts

# Tests
__tests__/
*.test.ts

# Development
.turbo/
*.tsbuildinfo
```

**OR use `files` field in package.json (more explicit):**

```json
{
  "files": [
    "dist",
    "README.md"
  ]
}
```

---

## 🗑️ Before Making Repository Public

Run this checklist:

### 1. Remove Internal Documentation

```bash
# From root directory
rm CLAUDE.md PHASES.md PHASE1_COMPLETE.md PROJECT_STRUCTURE.md agents.md SETUP.md INTERNAL_FILES.md
```

### 2. Remove SaaS Code (Optional)

```bash
# If not open-sourcing the SaaS platform
rm -rf apps/
```

### 3. Clean Generated Files

```bash
# Remove all generated docs from examples
rm -rf examples/*/docs/

# Remove build artifacts
rm -rf packages/*/dist/
rm -rf shared/*/dist/
```

### 4. Update Repository URLs

Replace all instances of `yourusername` with your actual GitHub username:

```bash
# In all package.json files
"repository": "https://github.com/YOUR_ACTUAL_USERNAME/cognidocs"
```

### 5. Create .npmignore

```bash
# Create .npmignore in root (see template above)
touch .npmignore
```

### 6. Verify Exclusions

```bash
# Test what will be published
npm pack --dry-run

# This shows all files that would be included
```

---

## 📊 Summary

### EXCLUDE (Internal):
- CLAUDE.md, PHASES.md, PHASE1_COMPLETE.md, PROJECT_STRUCTURE.md, agents.md, SETUP.md
- apps/ directory (SaaS platform)
- All `.turbo/` and build artifacts
- IDE config (.vscode/, .idea/)
- Test files in published packages

### KEEP (Public):
- README.md, LICENSE, CONTRIBUTING.md, PUBLISHING.md
- All packages/ and shared/ source code
- examples/ directory (useful for testing)
- Root configuration files (turbo.json, tsconfig.json, etc.)

---

## ✨ Final Check Before Publishing

```bash
# 1. Remove internal docs
rm CLAUDE.md PHASES.md PHASE1_COMPLETE.md PROJECT_STRUCTURE.md agents.md SETUP.md INTERNAL_FILES.md

# 2. Create .npmignore (if not exists)
# (Use template from above)

# 3. Test package contents
cd packages/cli
npm pack --dry-run

# 4. Verify no internal files are included
```
