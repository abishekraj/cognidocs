#!/usr/bin/env node

/**
 * Post-install script - Shows brief welcome message
 * Kept minimal to avoid slowing down installation
 */

// Only show message if not in CI environment
if (!process.env.CI) {
  console.log('\n✨ CogniDocs installed! Run "cognidocs --help" to get started.\n');
}
