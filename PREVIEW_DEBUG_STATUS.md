# Component Preview Debug Status

**Date:** December 21, 2025
**Issue:** Live Preview tab not rendering component
**Current Status:** ✅ Debug logs confirmed in build, awaiting browser verification

## Verification Complete

### 1. Server Status ✅
- Server running on port 4173
- Serving from: `/Users/abishekraj/Downloads/cognidocs/examples/sample-react/docs/site/`
- Server responding correctly to requests

### 2. Build Verification ✅
**Built JavaScript Bundle:**
- File: `ComponentDetailPage-DwRZ7xr9.js`
- Size: 36K
- Timestamp: Dec 21 11:06
- Hash: DwRZ7xr9 (latest build)

**Debug Logs Confirmed Present:**
```javascript
// ComponentDetailPage logs (verified via grep):
console.log("[ComponentDetailPage] Loaded component:"
console.log("[ComponentDetailPage] Component has source:"
console.log("[ComponentDetailPage] Source length:"
console.log("[ComponentDetailPage] Source preview:"

// PreviewTab logs (verified via grep):
console.log("[PreviewTab] Component name:"
console.log("[PreviewTab] Component source available:"
console.log("[PreviewTab] Component source length:"
console.log("[PreviewTab] Component source preview:"
```

### 3. Component Source Data ✅
**Verified via curl to server:**
```bash
curl -s http://localhost:4173/content/data.json | python3 -c "..."
# Output: Has source: True, Source length: 255
```

**Button Component Source:**
- Length: 255 characters
- Starts with: `export const Button: React.FC<ButtonProps> = ({`
- Properly extracted from parser
- Stored in data.json
- Served correctly by Vite dev server

### 4. File Integrity ✅
**Confirmed files match:**
- Local file: `/Users/abishekraj/Downloads/cognidocs/examples/sample-react/docs/site/assets/ComponentDetailPage-DwRZ7xr9.js`
- Served file: `http://localhost:4173/assets/ComponentDetailPage-DwRZ7xr9.js`
- Both contain identical debug logging code (verified via grep)

## What Should Happen Next

When the user refreshes their browser at `http://localhost:4173/#/components/Button` and clicks the "Live Preview" tab, they should see these console logs:

```
[ComponentDetailPage] Loaded component: Button
[ComponentDetailPage] Component has source: true
[ComponentDetailPage] Source length: 255
[ComponentDetailPage] Source preview: export const Button: React.FC<ButtonProps> = ({
[ComponentDetailPage] Rendering PreviewTab with source: true
[PreviewTab] Component name: Button
[PreviewTab] Component source available: true
[PreviewTab] Component source length: 255
[PreviewTab] Component source preview: export const Button: React.FC<ButtonProps> = ({
```

## Possible Outcomes

### Scenario A: All logs appear, component doesn't render
**Diagnosis:** Data is flowing correctly, issue is in PreviewRenderer or PreviewSandbox
**Next Steps:** Check for errors in PreviewSandbox iframe, inspect PostMessage communication

### Scenario B: No logs appear at all
**Diagnosis:** Browser cache is still serving old JavaScript
**Solutions:**
1. Hard refresh: Ctrl+Shift+R (Windows/Linux) or Cmd+Shift+R (Mac)
2. Clear browser cache completely
3. Open in incognito/private browsing mode
4. Clear Service Worker cache if present

### Scenario C: ComponentDetailPage logs appear, PreviewTab logs don't
**Diagnosis:** Preview tab not being rendered (possible tab navigation issue)
**Next Steps:** Check if clicking "Live Preview" tab actually triggers tab change

### Scenario D: Logs show source: false or undefined
**Diagnosis:** Data loading issue despite server having correct data
**Next Steps:** Check network tab for failed/cached data.json request

## Implementation Summary

### Files Modified

1. **ComponentDetailPage.tsx** (packages/site-builder/src/template/src/pages/)
   - Added debug logging on lines 78-81, 166
   - Logs component loading and source availability

2. **PreviewTab.tsx** (packages/site-builder/src/template/src/components/)
   - Added debug logging on lines 2-5
   - Logs props received and source availability

### Build Process Applied

1. Updated source files in packages/site-builder/src/template/
2. Built site-builder package: `pnpm run build --filter=@cognidocs/site-builder`
3. Copied template to pnpm virtual store (workaround for caching)
4. Installed dependencies in .cognidocs/site
5. Built documentation site: `pnpm --dir .cognidocs/site run build`
6. Started Vite server on port 4173

### Architecture Verified

```
┌─────────────────────────────────────────────┐
│ data.json (contains Button.source = 255ch)  │
└──────────────────┬──────────────────────────┘
                   │ fetch('./content/data.json')
                   ↓
┌─────────────────────────────────────────────┐
│ ComponentDetailPage                         │
│ • Loads component data                      │
│ • Logs: source length, preview             │
│ • Passes to PreviewTab                      │
└──────────────────┬──────────────────────────┘
                   │ <PreviewTab component={...} componentSource={...} />
                   ↓
┌─────────────────────────────────────────────┐
│ PreviewTab                                  │
│ • Receives componentSource prop             │
│ • Logs: source available, length            │
│ • Renders PreviewRenderer                   │
└──────────────────┬──────────────────────────┘
                   │ <PreviewRenderer metadata={{source: ...}} />
                   ↓
┌─────────────────────────────────────────────┐
│ PreviewRenderer                             │
│ • Uses PreviewSandbox                       │
│ • Sandboxed iframe execution                │
│ • PostMessage communication                 │
└─────────────────────────────────────────────┘
```

## User Action Required

**Please refresh your browser and check console logs:**

1. Go to: `http://localhost:4173`
2. Hard refresh: `Ctrl+Shift+R` (Windows/Linux) or `Cmd+Shift+R` (Mac)
3. Navigate to: `/#/components/Button`
4. Open browser console: `F12` or `Cmd+Option+I`
5. Click the "Live Preview" tab
6. Report ALL console output (logs, warnings, errors)

This will tell us exactly where the component preview rendering is failing.
