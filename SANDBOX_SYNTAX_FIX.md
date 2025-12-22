# Sandbox Runtime Syntax Error Fix

**Date:** December 21, 2025
**Error:** `Uncaught SyntaxError: Missing catch or finally after try`
**Status:** ✅ FIXED

## Problem

When clicking on the "Live Preview" tab, the browser console showed:
```
Uncaught SyntaxError: Missing catch or finally after try (at VM91 c73465b9-9a4d-4af6-8a80-6bfe7713dc1c:109:5)
```

This error prevented the component preview from rendering in the sandboxed iframe.

## Root Cause

**File:** `packages/site-builder/src/template/src/component-preview/sandbox/sandboxRuntime.ts`

**Line 134** had an extra closing brace `}` that prematurely closed the try block:

```typescript
// BEFORE (broken):
try {
    // Execute the transformed component code
    ${transformedCode}
    
    let Component = exports['${componentName}'] || module.exports['${componentName}'];
    
    if (!Component) {
      if (exports.default) Component = exports.default;
      else if (module.exports.default) Component = module.exports.default;
      else if (typeof module.exports === 'function' || typeof module.exports === 'object') {
        Component = module.exports;
      }
    }
    }  // <-- EXTRA closing brace here! (Line 134)

    if (!Component) {
      throw new Error('Component not found...');
    }
    // ... more code ...
} catch (error) {  // This catch had no matching try!
```

This created invalid JavaScript where the `catch` block at line 173 had no corresponding `try` block.

## The Fix

Removed the extra closing brace on line 134:

```typescript
// AFTER (fixed):
try {
    // Execute the transformed component code
    ${transformedCode}
    
    let Component = exports['${componentName}'] || module.exports['${componentName}'];
    
    if (!Component) {
      if (exports.default) Component = exports.default;
      else if (module.exports.default) Component = module.exports.default;
      else if (typeof module.exports === 'function' || typeof module.exports === 'object') {
        Component = module.exports;
      }
    }
    // <-- Extra brace removed!

    if (!Component) {
      throw new Error('Component not found...');
    }
    // ... more code ...
} catch (error) {  // Now this catch has a matching try!
```

## Build & Deploy

```bash
# 1. Rebuild site-builder
pnpm run build --filter=@cognidocs/site-builder

# 2. Copy to pnpm virtual store
rm -rf node_modules/.pnpm/@cognidocs+site-builder@*/node_modules/@cognidocs/site-builder/dist/template
cp -r packages/site-builder/dist/template node_modules/.pnpm/@cognidocs+site-builder@*/node_modules/@cognidocs/site-builder/dist/

# 3. Rebuild docs
cd examples/sample-react
pnpm cognidocs build

# 4. Restart server
pnpm cognidocs serve --port 49633
```

**New Build Hash:** `ComponentDetailPage-Gmxg4BeQ.js`

## Result

✅ Syntax error fixed - valid JavaScript now generated
✅ Component preview iframe loads without errors
✅ Live Preview tab displays component playground
✅ Props editor and sandbox rendering work correctly

The component preview system is now fully functional!
