# CogniDocs Setup Guide

Complete setup instructions for getting CogniDocs running locally.

## Prerequisites

- **Node.js**: >= 18.0.0
- **npm**: >= 9.0.0
- **Git**: Latest version

Check your versions:
```bash
node --version   # Should be v18.0.0 or higher
npm --version    # Should be v9.0.0 or higher
```

## Initial Setup

### 1. Install Dependencies

```bash
# From the root directory
npm install
```

This will install all dependencies for all packages in the monorepo using npm workspaces.

### 2. Build All Packages

```bash
npm run build
```

This builds all packages in the correct dependency order using Turbo.

**Build order:**
1. Shared packages (types, utils, constants)
2. Parser
3. CLI
4. Other packages

### 3. Verify Installation

```bash
# Check if CLI is available
./packages/cli/dist/cli.js --version

# Or link it globally (optional)
npm link -w @cognidocs/cli
cognidocs --version
```

## Development Workflow

### Running in Development Mode

**Option 1: Run all packages**
```bash
npm run dev
```

**Option 2: Run specific phase**
```bash
npm run phase1   # CLI, Parser, Testing only
npm run phase2   # Analyzer, Coverage (when ready)
npm run phase3   # Docs Generator, Site Builder (when ready)
```

**Option 3: Run specific package**
```bash
npm run dev --filter=@cognidocs/cli
npm run dev --filter=@cognidocs/parser
```

### Testing

```bash
# Run all tests
npm test

# Run tests for specific package
npm test --filter=@cognidocs/parser

# Run tests in watch mode
npm run test:watch --filter=@cognidocs/cli
```

### Linting & Formatting

```bash
# Check code style
npm run lint

# Fix linting issues
npm run lint -- --fix

# Format code
npm run format

# Check formatting without writing
npm run format:check

# Type check all packages
npm run typecheck
```

## Working with the CLI

### Testing the CLI Locally

After building, you can test the CLI:

```bash
# Navigate to the sample project
cd examples/sample-react

# Run CLI commands (from repo root)
node ../../packages/cli/dist/cli.js init
node ../../packages/cli/dist/cli.js build
```

Or link it globally:

```bash
# From repo root
npm link -w @cognidocs/cli

# Now you can use it anywhere
cd examples/sample-react
cognidocs init
cognidocs build
```

### Creating a Test Project

```bash
# Create a new test React project
mkdir test-project
cd test-project
npm init -y
npm install react react-dom typescript @types/react

# Create a simple component
mkdir -p src/components
cat > src/components/Test.tsx << 'EOF'
interface TestProps {
  message: string;
}

export const Test = ({ message }: TestProps) => {
  return <div>{message}</div>;
};
EOF

# Initialize CogniDocs
cognidocs init

# Build documentation
cognidocs build
```

## Project Structure Overview

```
cognidocs/
├── packages/          # Core libraries
│   ├── cli/          # 🟡 Command-line interface
│   ├── parser/       # 🟡 AST parsing
│   └── ...           # Other packages
├── shared/           # Shared code
│   ├── types/
│   ├── utils/
│   └── constants/
├── apps/             # SaaS applications (Phase 7+)
├── examples/         # Sample projects
└── docs/            # Documentation
```

## Phase-by-Phase Development

### Currently: Phase 1 (Foundation) 🟡

**Active packages:**
- `@cognidocs/cli` - CLI implementation
- `@cognidocs/parser` - TypeScript/React parsing
- `@cognidocs/testing` - Test utilities

**What to work on:**
1. Complete TypeScript Compiler API integration
2. Implement React component parsing
3. JSDoc comment extraction
4. Write tests with 80%+ coverage

**Commands for Phase 1:**
```bash
npm run phase1           # Start all Phase 1 packages
npm run build --filter=@cognidocs/cli
npm run test --filter=@cognidocs/parser
```

### Phase 2: Analysis & Coverage (Not Started) 🔴

**Packages:**
- `@cognidocs/analyzer`
- `@cognidocs/coverage`

**To start Phase 2:**
1. Complete Phase 1 first
2. Review [PHASES.md](PHASES.md)
3. Implement dependency graph generation
4. Add coverage tracking

### Phase 3-10

See [PHASES.md](PHASES.md) for detailed information about each phase.

## Common Tasks

### Adding a New Package

```bash
# Create package directory
mkdir packages/new-package
cd packages/new-package

# Create package.json
cat > package.json << 'EOF'
{
  "name": "@cognidocs/new-package",
  "version": "0.1.0",
  "main": "./dist/index.js",
  "types": "./dist/index.d.ts",
  "scripts": {
    "dev": "tsup --watch",
    "build": "tsup",
    "test": "vitest run"
  }
}
EOF

# Create tsconfig.json
cat > tsconfig.json << 'EOF'
{
  "extends": "../../tsconfig.json",
  "compilerOptions": {
    "outDir": "./dist",
    "rootDir": "./src"
  }
}
EOF

# Create src directory
mkdir src
touch src/index.ts
```

### Running a Single Test File

```bash
npm test --filter=@cognidocs/parser -- src/__tests__/parser.test.ts
```

### Debugging

**VS Code:**
1. Open project in VS Code
2. Set breakpoints
3. Use "JavaScript Debug Terminal"
4. Run commands as normal

**Console logging:**
```typescript
console.log('[DEBUG]', yourVariable);
```

### Cleaning Build Artifacts

```bash
# Clean all packages
npm run clean

# Clean specific package
npm run clean --filter=@cognidocs/cli

# Remove all node_modules (nuclear option)
rm -rf node_modules packages/*/node_modules shared/*/node_modules
npm install
```

## Troubleshooting

### "Cannot find module '@cognidocs/...'"

**Solution:** Build the shared packages first
```bash
npm run build --filter=@cognidocs/types
npm run build --filter=@cognidocs/utils
npm run build --filter=@cognidocs/constants
```

### "command not found: cognidocs"

**Solution:** Link the CLI package
```bash
npm link -w @cognidocs/cli
# Or use the full path
node packages/cli/dist/cli.js --help
```

### TypeScript errors in imports

**Solution:** Check path aliases in tsconfig.json and rebuild
```bash
npm run typecheck
npm run build
```

### Turbo cache issues

**Solution:** Clear Turbo cache
```bash
rm -rf .turbo
npm run build
```

## VS Code Setup

The project includes VS Code settings in [.vscode/settings.json](.vscode/settings.json).

**Recommended extensions:**
- ESLint
- Prettier
- TypeScript and JavaScript
- Tailwind CSS (for future UI work)

Install them:
```bash
# VS Code will prompt to install recommended extensions
# Or manually: Cmd+Shift+P -> "Extensions: Show Recommended Extensions"
```

## Environment Setup (Future Phases)

### Phase 6: AI Integration

```bash
# Create .env file
cat > .env << 'EOF'
OPENAI_API_KEY=your_openai_key_here
ANTHROPIC_API_KEY=your_claude_key_here
EOF
```

### Phase 7: SaaS Platform (Supabase)

```bash
# Install Supabase CLI
npm install -g supabase

# Initialize Supabase in apps/saas-platform
cd apps/saas-platform
supabase init
supabase start

# Create .env.local
cat > .env.local << 'EOF'
NEXT_PUBLIC_SUPABASE_URL=http://localhost:54321
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
STRIPE_SECRET_KEY=sk_test_...
EOF
```

## Getting Help

- **Documentation**: Check [README.md](README.md), [PHASES.md](PHASES.md), [CLAUDE.md](CLAUDE.md)
- **Architecture**: See [agents.md](agents.md) for detailed design
- **Structure**: See [PROJECT_STRUCTURE.md](PROJECT_STRUCTURE.md)
- **Issues**: Create a GitHub issue

## Next Steps

1. ✅ You've set up the project
2. ⏭️ Read [PHASES.md](PHASES.md) to understand the development roadmap
3. ⏭️ Start working on Phase 1 tasks
4. ⏭️ Run tests: `npm test`
5. ⏭️ Try the CLI: `cd examples/sample-react && cognidocs init`

## Quick Reference Commands

```bash
# Essential commands
npm install              # Install dependencies
npm run build           # Build all packages
npm run dev             # Development mode
npm test                # Run tests
npm run lint            # Lint code
npm run format          # Format code

# Phase-specific
npm run phase1          # Phase 1 packages only
npm run phase2          # Phase 2 packages only (when ready)

# Package-specific
npm run build --filter=@cognidocs/cli
npm run dev --filter=@cognidocs/parser
npm test --filter=@cognidocs/testing

# CLI usage (after build)
cognidocs init          # Initialize config
cognidocs build         # Build documentation
cognidocs --help        # Show help
```

---

**Ready to start?** Begin with Phase 1 by implementing the TypeScript parser in `packages/parser/src/parsers/typescript-parser.ts`!
