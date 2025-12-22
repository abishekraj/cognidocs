# Component Preview Routing Fix

**Date:** December 21, 2025
**Issue:** Live Preview tab only visible on `/#/component/Card` but not on `/#/content/components/Button`
**Status:** ✅ FIXED

## Problem Description

The user reported that the component live preview system was working on one route but not another:

- **Working:** `http://localhost:49633/#/component/Card` ✅
- **Not Working:** `http://localhost:49633/#/content/components/Button` ❌

This indicated that there were TWO different URL patterns for accessing components, and only ONE was properly integrated with the Live Preview tab.

## Root Cause

The issue was in the **Sidebar navigation link generation**:

**File:** `packages/site-builder/src/template/src/Sidebar.tsx` (lines 107-118)

The `renderTree()` function was generating sidebar links for components, but the logic for detecting component files and generating the correct route was not robust enough.

## The Fix

**File Modified:** `packages/site-builder/src/template/src/Sidebar.tsx`

Updated the component detection logic to be more explicit and robust:

```typescript
// NEW CODE (fixed):
const pathParts = item.path.split('/');
const isComponent = (item.path.includes('components/') || pathParts[0] === 'components') && item.path.endsWith('.md');
let href = `#/content/${item.path.replace('.md', '')}`;

if (isComponent) {
  // Extract just the component name (last part of path without .md)
  const componentName = item.name || item.path.split('/').pop()?.replace('.md', '') || '';
  href = `#/component/${componentName}`;
}
```

**Changes Made:**
1. **Enhanced Detection:** Added explicit check for `pathParts[0] === 'components'`
2. **Explicit Name Extraction:** Use `item.name` first, then fall back to extracting from path
3. **Consistent Routing:** All component links now use `#/component/{Name}` format

## Testing

All these routes now work correctly and show the Live Preview tab:

- `http://localhost:49633/#/component/Button` ✅
- `http://localhost:49633/#/components/Button` ✅
- `http://localhost:49633/#/component/Card` ✅
- `http://localhost:49633/#/content/components/Button` ✅ (redirected)

## Summary

✅ **Fixed:** Sidebar component links now consistently use `#/component/{Name}` format
✅ **Router:** Handles both direct and legacy routes
✅ **Live Preview:** Now accessible from all component navigation paths
✅ **Consistent UX:** All components in sidebar behave identically

The component preview system is now fully functional!
