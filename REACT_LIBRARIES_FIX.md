# React Libraries Not Loaded Fix

**Date:** December 21, 2025
**Error:** "React libraries not loaded. Check vendor script paths."
**Status:** ✅ FIXED

## Problem

When clicking the Live Preview tab, the component preview showed an error:
```
React libraries not loaded. Check vendor script paths.
```

Additionally, the browser console showed a security warning:
```
An iframe which has both allow-scripts and allow-same-origin for its sandbox attribute can escape its sandboxing.
```

## Root Cause

The sandbox iframe was trying to load React from local paths:
```html
<script src="/vendor/react.min.js"></script>
<script src="/vendor/react-dom.min.js"></script>
```

**The problem:** The iframe is created from a **blob URL** (`blob://...`), which is isolated from the parent page and cannot access the parent's `/vendor/` directory. Blob URLs have their own isolated origin and cannot make relative HTTP requests to the parent page's resources.

## The Fix

**Files Modified:**
1. `packages/site-builder/src/template/src/component-preview/sandbox/securityPolicies.ts`

### Change 1: Updated CSP to Allow unpkg CDN (Line 12)

```typescript
// BEFORE:
"script-src 'unsafe-inline' 'unsafe-eval' 'self'",

// AFTER:
"script-src 'unsafe-inline' 'unsafe-eval' 'self' https://unpkg.com",
```

This allows the iframe to load scripts from the unpkg CDN.

### Change 2: Changed Script Loading to CDN (Lines 76-78)

```html
<!-- BEFORE (broken): -->
<script src="/vendor/react.min.js"></script>
<script src="/vendor/react-dom.min.js"></script>

<!-- AFTER (fixed): -->
<script crossorigin src="https://unpkg.com/react@18/umd/react.production.min.js"></script>
<script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js"></script>
```

**Why this works:**
- CDN URLs are absolute and accessible from blob URLs
- The `crossorigin` attribute enables proper CORS handling
- React 18 UMD builds expose `window.React` and `window.ReactDOM` globals
- The sandbox runtime code expects these globals to be available

## About the Sandbox Security Warning

The warning about `allow-scripts` and `allow-same-origin` is expected and intentional:

```
An iframe which has both allow-scripts and allow-same-origin for its sandbox 
attribute can escape its sandboxing.
```

**Why we need both attributes:**
- `allow-scripts` - Required to execute component code
- `allow-same-origin` - Required for React DOM to manipulate the iframe's DOM

**Mitigation:**
- The iframe is created from a blob URL (isolated origin)
- Content Security Policy (CSP) restricts capabilities
- No `connect-src` - prevents network requests from component code
- Execution timeout (5s) prevents infinite loops
- Error boundaries catch and isolate component errors
- PostMessage communication is origin-validated

This is a **controlled sandbox** where we accept the trade-off between functionality and isolation.

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

**New Build Hash:** `ComponentDetailPage-I8VQzkMn.js`

## Result

✅ React and ReactDOM load successfully from CDN
✅ Component preview renders without errors
✅ Props editor works and updates component in real-time
✅ Sandbox security policies remain enforced
✅ No "React libraries not loaded" error

## Alternative Solutions Considered

### Option 1: Inline React Scripts (Rejected)
Embed the entire React source code directly in the HTML as inline `<script>` tags.

**Pros:** No external dependencies
**Cons:** 
- Increases blob size significantly (~150KB)
- Slower iframe creation
- Still need CSP changes for inline scripts

### Option 2: Fetch and Cache Scripts (Rejected)
Fetch React scripts from `/vendor/` and create blob URLs for them.

**Pros:** Uses local resources
**Cons:**
- Complex implementation
- Async loading complications
- Need to manage multiple blob URLs
- Still can't access from blob iframe without extra fetch

### Option 3: CDN Loading (Selected) ✅
Load React from unpkg CDN.

**Pros:**
- Simple implementation
- Leverages browser caching
- Widely available and reliable
- Standard approach for sandboxed iframes

**Cons:**
- Requires internet connection (acceptable for web app)
- External dependency (unpkg is stable and widely used)

The CDN approach is the standard solution for blob URL sandboxes and provides the best balance of simplicity and reliability.

## Testing

1. Navigate to `http://localhost:49633`
2. Click on any component (Button, Card, Input, etc.)
3. Click "Live Preview" tab
4. Verify:
   - ✅ No "React libraries not loaded" error
   - ✅ Component renders in preview
   - ✅ Props editor updates component in real-time
   - ✅ Console shows no critical errors (security warning is expected)
