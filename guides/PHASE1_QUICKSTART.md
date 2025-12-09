# Phase 1 Quick Start Guide

Phase 1 is **COMPLETE**! Here's how to use it.

## Installation

```bash
# 1. Install dependencies
npm install

# 2. Build all packages
npm run build

# 3. Link CLI globally
npm link -w @cognidocs/cli

# 4. Verify installation
cognidocs --version
```

## Usage

### Initialize a Project

```bash
# Interactive mode (recommended for first time)
cognidocs init

# Quick mode (use defaults)
cognidocs init --yes

# Force overwrite existing config
cognidocs init --force
```

This creates `cognidocs.config.js` in your project.

### Build Documentation

```bash
# Build with default settings
cognidocs build

# Custom config file
cognidocs build --config custom.config.js

# Custom output directory
cognidocs build --output ./documentation
```

This creates:
- `docs/data.json` - Full parsed metadata
- `docs/components/*.json` - Individual component files

## Try the Sample Project

```bash
cd examples/sample-react
cognidocs init --yes
cognidocs build
ls -la docs/
cat docs/components/Button.json
```

## What Works Now

✅ **TypeScript Parsing**
- Functions, classes, interfaces, types
- JSDoc comments with tags
- Imports and exports

✅ **React Components**
- Function components (arrow and regular)
- Class components
- Props extraction
- Hooks detection (useState, useEffect, etc.)

✅ **CLI Commands**
- `cognidocs init` - Interactive setup
- `cognidocs build` - Parse and generate JSON
- `cognidocs --help` - Show all commands

✅ **Output**
- Structured JSON with all metadata
- Statistics (components, functions, classes, etc.)
- Ready for Phase 3 HTML generation

## What's Next (Phase 2)

Phase 2 will add:
- `cognidocs analyze` - Dependency graphs
- `cognidocs coverage` - Coverage reports
- Circular dependency detection
- Module relationship analysis

## Troubleshooting

**Command not found:**
```bash
npm link -w @cognidocs/cli
```

**Build errors:**
```bash
npm run clean
npm install
npm run build
```

**Test it works:**
```bash
cd examples/sample-react
rm -rf docs
cognidocs build
```

## Example Output

```json
{
  "name": "Button",
  "type": "function",
  "props": [
    {
      "name": "variant",
      "type": "'primary' | 'secondary' | 'danger'",
      "required": false,
      "description": "The button variant"
    }
  ],
  "hooks": [],
  "description": "Button component for user interactions",
  "filePath": "/path/to/Button.tsx",
  "line": 24,
  "framework": "react"
}
```

---

**Phase 1 is ready to use!** 🎉

For more details, see [PHASE1_COMPLETE.md](PHASE1_COMPLETE.md)
