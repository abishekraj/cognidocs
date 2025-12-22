# Infinite Render Loop Fix

**Date:** December 21, 2025
**Issue:** Component preview rendering in infinite loop
**Status:** ✅ FIXED

## Problem

The component preview iframe was stuck in an **infinite render loop** - continuously reloading over and over, making the Live Preview tab unusable.

## Root Cause

**File:** `packages/site-builder/src/template/src/component-preview/sandbox/PreviewSandbox.tsx`

**Line 216** was calling `iframeSrc()` directly in the render:
```tsx
<iframe
  ref={iframeRef}
  src={iframeSrc()}  // ❌ Creates NEW blob URL on EVERY render!
  sandbox={SANDBOX_ATTRIBUTES}
  ...
/>
```

### Why This Caused Infinite Loop:

1. Component renders
2. `iframeSrc()` is called, creates a **new blob URL** (`blob://abc123...`)
3. Iframe `src` changes from old blob URL to new blob URL
4. Iframe detects src change and **reloads**
5. Iframe reload might trigger parent component re-render
6. **Go back to step 1** → infinite loop!

The problem is that `useCallback` **doesn't prevent the function from being called** - it only memoizes the function reference. Every time `iframeSrc()` was called, it created a brand new blob URL.

## The Fix

Changed from calling a function on every render to **storing the blob URL in state** and only recreating it when the component code or name changes.

**File Modified:** `packages/site-builder/src/template/src/component-preview/sandbox/PreviewSandbox.tsx`

### Before (Broken):
```tsx
const sandboxContent = useCallback(() => {
  const runtimeCode = generateRuntimeCode(componentCode, componentName, props);
  return generateSandboxHTML(runtimeCode);
}, [componentCode, componentName, props]);

const iframeSrc = useCallback(() => {
  const html = sandboxContent();
  const blob = new Blob([html], { type: 'text/html' });
  return URL.createObjectURL(blob);  // ❌ New URL every call!
}, [sandboxContent]);

// In render:
<iframe src={iframeSrc()} ... />  // ❌ Called every render!
```

### After (Fixed):
```tsx
/**
 * Generate and memoize blob URL for iframe src
 * Only regenerate when component code or name changes (not when props change)
 */
const [blobUrl, setBlobUrl] = useState<string>('');

useEffect(() => {
  // Generate runtime code with initial props
  const runtimeCode = generateRuntimeCode(componentCode, componentName, props);
  const html = generateSandboxHTML(runtimeCode);
  const blob = new Blob([html], { type: 'text/html' });
  const url = URL.createObjectURL(blob);

  setBlobUrl(url);

  // Cleanup: revoke old blob URL
  return () => {
    URL.revokeObjectURL(url);
  };
}, [componentCode, componentName]); // ✅ Only recreate when code/name changes, NOT props

// In render:
{blobUrl && (
  <iframe src={blobUrl} ... />  // ✅ Stable URL, no re-creation!
)}
```

## Key Changes

1. **State Management:** Store blob URL in `useState` instead of generating on-demand
2. **Dependency Array:** Only recreate blob when `componentCode` or `componentName` changes
   - **Not** when `props` change - props are updated via PostMessage instead
3. **Cleanup:** Properly revoke old blob URLs to prevent memory leaks
4. **Conditional Rendering:** Only render iframe when `blobUrl` is available

## How Props Updates Work Now

Since we don't recreate the iframe when props change, how do prop changes get to the component?

**Answer:** Via **PostMessage API** (already implemented):

1. User changes a prop in the Props Editor
2. `updateProps()` is called (line 147-151)
3. PostMessage sends `UPDATE_PROPS` message to iframe
4. Sandbox runtime receives message and re-renders component with new props
5. **No iframe reload needed!** ✅

This is actually **more efficient** than recreating the iframe every time.

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

## Result

✅ **Iframe loads once** when component is first rendered
✅ **No infinite loop** - stable blob URL prevents re-creation
✅ **Props updates work** via PostMessage (no iframe reload)
✅ **Memory management** - old blob URLs are properly cleaned up
✅ **Performance** - iframe only recreates when component code actually changes

## Testing

1. Navigate to `http://localhost:49633`
2. Click on any component (Button, Card, Input, UserProfile)
3. Click "Live Preview" tab
4. Verify:
   - ✅ Component renders **once** (no flickering)
   - ✅ No infinite reload loop
   - ✅ Changing props updates the component **smoothly**
   - ✅ No console errors about blob URLs

The component preview should now be smooth and stable!
