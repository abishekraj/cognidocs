# CogniDocs Publishing Scripts

This directory contains scripts for publishing CogniDocs packages to npm.

## Publishing to NPM

### Prerequisites

1. **NPM Account**: You must have an npm account with access to the `@cognidocs` organization
2. **NPM Login**: Log in to npm before publishing
   ```bash
   npm login
   ```
3. **Verify Access**: Check you're logged in
   ```bash
   npm whoami
   ```

### Dry Run (Recommended First)

Before actually publishing, run a dry-run to see what would be published:

```bash
./scripts/publish.sh --dry-run
```

This will:
- Build all packages
- Show what would be published
- Verify package contents
- **NOT** actually publish to npm

### Actual Publishing

When you're ready to publish for real:

```bash
./scripts/publish.sh
```

The script will:
1. ✅ Verify npm authentication
2. 📦 Build all packages
3. ⚠️  Ask for confirmation
4. 📤 Publish packages in dependency order:
   - Shared libraries (types, utils, constants)
   - Core packages (parser, analyzer, coverage, plugin-core)
   - Advanced packages (docs-generator, graph-viz, site-builder)
   - CLI package

### Package Publishing Order

Packages are published in this specific order to respect dependencies:

1. **Shared Libraries** (no @cognidocs dependencies)
   - @cognidocs/types
   - @cognidocs/utils
   - @cognidocs/constants

2. **Core Packages** (depend on shared libraries)
   - @cognidocs/parser
   - @cognidocs/analyzer
   - @cognidocs/coverage
   - @cognidocs/plugin-core

3. **Advanced Packages** (depend on core packages)
   - @cognidocs/docs-generator
   - @cognidocs/graph-viz
   - @cognidocs/site-builder

4. **CLI** (depends on everything)
   - @cognidocs/cli

### After Publishing

Once published, verify the packages:

1. **Check on npm**:
   ```bash
   npm view @cognidocs/cli
   ```

2. **Test installation**:
   ```bash
   npm install -g @cognidocs/cli@0.0.1
   cognidocs --version
   ```

3. **Create GitHub release**:
   - Tag: `v0.0.1`
   - Include release notes

4. **Update documentation**:
   - Add installation instructions to README
   - Update getting started guide

## Version Management

Current version: **0.0.1** (Initial alpha release)

### Version Numbering

Following semantic versioning (semver):
- `0.0.1` - Initial alpha release
- `0.1.0` - First beta release (after testing and fixes)
- `1.0.0` - First stable release (MVP complete and tested)

### Updating Versions

To update all package versions:

```bash
# Update to a specific version
find packages shared -name "package.json" -type f -exec sed -i '' 's/"version": ".*"/"version": "X.Y.Z"/' {} \;
```

Or manually edit each `package.json` file.

## Troubleshooting

### "Not logged in" error
```bash
npm login
# Follow prompts
```

### "No permission to publish" error
- Verify you have access to @cognidocs organization
- Ask organization admin to add you as a member

### "Package already exists" error
- The version has already been published
- Bump the version number in all `package.json` files
- Rebuild and try again

### Build fails
```bash
# Clean and rebuild
npm run clean
npm install
npm run build
```

## Manual Publishing (Alternative)

If you prefer to publish manually without the script:

```bash
# Build first
npm run build

# Publish shared libraries
cd shared/types && npm publish --access public && cd -
cd shared/utils && npm publish --access public && cd -
cd shared/constants && npm publish --access public && cd -

# Publish core packages
cd packages/parser && npm publish --access public && cd -
cd packages/analyzer && npm publish --access public && cd -
cd packages/coverage && npm publish --access public && cd -
cd packages/plugin-core && npm publish --access public && cd -

# Publish advanced packages
cd packages/docs-generator && npm publish --access public && cd -
cd packages/graph-viz && npm publish --access public && cd -
cd packages/site-builder && npm publish --access public && cd -

# Publish CLI
cd packages/cli && npm publish --access public && cd -
```
