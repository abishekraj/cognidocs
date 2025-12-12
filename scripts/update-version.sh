#!/bin/bash

VERSION=$1

if [ -z "$VERSION" ]; then
  echo "Usage: ./scripts/update-version.sh <new_version>"
  exit 1
fi

echo "🚀 Updating all packages to version: $VERSION"
echo ""

# Update version for all packages provided by workspaces (including root)
npm pkg set version="$VERSION" --workspaces --include-workspace-root

# Update version in packages/cli/src/cli.ts
# Using compatible sed for macOS (requires backup extension with -i)
# Matches .version('x.x.x') pattern
echo "📝 Updating CLI source version in packages/cli/src/cli.ts..."
sed -i '' "s/\.version('[0-9]*\.[0-9]*\.[0-9]*')/.version('$VERSION')/g" packages/cli/src/cli.ts

echo "✅ Successfully updated versions to $VERSION"
