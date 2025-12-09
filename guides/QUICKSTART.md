# CogniDocs Quick Start

Get up and running with CogniDocs in 5 minutes.

## 1. Install Dependencies (1 min)

```bash
npm install
```

## 2. Build Packages (1 min)

```bash
npm run build
```

## 3. Run CLI (Verified Method)

Since you are in a monorepo development environment, the most reliable way to run the CLI against examples is to execute the built binary directly.

```bash
# Navigate to sample React project
cd examples/sample-react

# Run the CLI using relative path to the build artifact
../../packages/cli/dist/cli.mjs init
../../packages/cli/dist/cli.mjs build
```

Alternatively, you can link the CLI (though this can be flaky in some environments):

```bash
npm link -w @cognidocs/cli
```

## 4. Start Development

```bash
# From project root
npm run dev
```

This starts all packages in watch mode (via Turbo).

## What's Working Now?

✅ **Implemented:**

- **Phase 1 (Foundation):** Parser, CLI, Testing (Complete)
- **Phase 2 (Analysis):** Dependency Graph, Coverage (Complete)
- **Phase 3 (Documentation):** Markdown Gen, Static Site (Complete)

🟡 **In Progress (Phase 4):**

- Plugin System Design
- Graph Visualization

🔴 **Not Yet Started:**

- Phases 5-10 (see PHASES.md)

## Current Phase: Phase 4 - Plugin System

**Goal:** Allow users to extend functionality.

## Available Commands

```bash
# Development
npm run dev              # All packages
npm run phase3           # Docs & Site Builder (Phase 3 only)

# Building
npm run build            # All packages

# Testing
npm test                 # All tests

# CLI (Execute direct path)
./packages/cli/dist/cli.mjs --help
```

## Project Structure

```
cognidocs/
├── packages/           # Core libraries
│   ├── cli/           # 🟢 CLI (Phase 1)
│   ├── parser/        # 🟢 Parser (Phase 1)
│   ├── analyzer/      # 🟢 Analyzer (Phase 2)
│   ├── coverage/      # 🟢 Coverage (Phase 2)
│   ├── docs-generator/# 🟢 Docs (Phase 3)
│   ├── site-builder/  # 🟢 Site (Phase 3)
│   ├── graph-viz/     # 🔴 Phase 4
│   ├── component-preview/ # 🔴 Phase 5
│   ├── ai/            # 🔴 Phase 6
│   └── testing/       # 🟢 Testing utils
├── shared/            # Types, utils, constants
├── apps/              # SaaS apps (Phase 7+)
└── examples/          # Sample projects
```

## Need Help?

- **Setup Issues**: See [SETUP.md](SETUP.md)
- **Development Guide**: See [PHASES.md](PHASES.md)
- **Architecture**: See [agents.md](agents.md)
- **For Claude Code**: See [CLAUDE.md](CLAUDE.md)

## CLI Command Reference

Here is a comprehensive list of available CLI commands. You can verify these by running `cognidocs --help`.

### Core Commands

| Command           | Description                                    | Phase     | Status   |
| :---------------- | :--------------------------------------------- | :-------- | :------- |
| `cognidocs init`  | Initialize configuration interactively         | Phase 1   | ✅ Ready |
| `cognidocs build` | Parse code and generate documentation/site     | Phase 1/3 | ✅ Ready |
| `cognidocs serve` | Serve the generated documentation site locally | Phase 3   | ✅ Ready |

### Analysis Commands

| Command              | Description                              | Phase   | Status  |
| :------------------- | :--------------------------------------- | :------ | :------ |
| `cognidocs analyze`  | Generate dependency graphs               | Phase 2 | 🟡 Beta |
| `cognidocs coverage` | Calculate documentation coverage metrics | Phase 2 | 🟡 Beta |

### AI Commands (Future)

| Command                 | Description                          | Phase   | Status     |
| :---------------------- | :----------------------------------- | :------ | :--------- |
| `cognidocs ai generate` | Auto-generate docs for missing items | Phase 6 | 🔴 Planned |
| `cognidocs ai chat`     | Interactive codebase chat            | Phase 6 | 🔴 Planned |

### Common Options

- `-c, --config <path>`: Specify custom config file path (default: `cognidocs.config.js`)
- `-o, --output <path>`: Override output directory
- `-w, --watch`: Run in watch mode (where supported)
- `-h, --help`: Display help for command
