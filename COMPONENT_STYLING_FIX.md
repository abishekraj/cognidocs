# Component Styling Fix - Missing CSS in Preview

**Date:** December 21, 2025
**Issue:** Component rendering as tiny dot in preview
**Status:** ✅ FIXED

## Problem

The Button component was rendering in the Live Preview but appeared as just a **tiny dot** - essentially invisible.

## Root Cause

The Button component uses CSS classes for styling:

```tsx
<button className={`btn btn-${variant}`} disabled={disabled} onClick={onClick}>
  {children}
</button>
```

**The problem:** The sandbox iframe had **no CSS** for these classes!

The HTML was rendering correctly:
```html
<button class="btn btn-primary">Click Me</button>
```

But without CSS for `.btn`, `.btn-primary`, etc., the button appeared unstyled - just a tiny native button element (the "dot").

## The Fix

**File Modified:** `packages/site-builder/src/template/src/component-preview/sandbox/securityPolicies.ts`

Added **default component styles** to the sandbox HTML (lines 73-146):

### Button Styles Added:
```css
.btn {
  display: inline-block;
  padding: 8px 16px;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.5;
  text-align: center;
  border: 1px solid transparent;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
}

.btn-primary {
  background-color: #3b82f6;  /* Blue */
  color: white;
}

.btn-secondary {
  background-color: #6b7280;  /* Gray */
  color: white;
}

.btn-danger {
  background-color: #ef4444;  /* Red */
  color: white;
}

.btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}
```

### Additional Styles for Common Components:
```css
/* Card styles */
.card {
  background: white;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  padding: 16px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

/* Input styles */
.input {
  display: block;
  width: 100%;
  padding: 8px 12px;
  font-size: 14px;
  border: 1px solid #d1d5db;
  border-radius: 6px;
}
.input:focus {
  border-color: #3b82f6;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}
```

## Why This Approach?

### Option 1: Extract CSS from Project (Complex)
- Would need to parse project's CSS files
- Handle CSS modules, styled-components, etc.
- Different projects use different CSS approaches
- Complex to implement and maintain

### Option 2: Default Preview Styles (Selected) ✅
- Provide sensible defaults for common patterns
- Works immediately for standard class-based components
- Covers most common use cases (buttons, cards, inputs)
- Simple to maintain and extend
- Components still render even without matching CSS

### For Custom Styled Components
For components using CSS-in-JS (styled-components, emotion) or inline styles, they will work out of the box since styles are embedded in the component code itself.

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

✅ **Button renders with proper styling** - visible blue/gray/red buttons
✅ **Variant changes update colors** - primary (blue), secondary (gray), danger (red)
✅ **Hover effects work** - buttons darken on hover
✅ **Disabled state works** - reduced opacity, no pointer
✅ **Other components supported** - card, input styles included

## Testing

1. Navigate to `http://localhost:49633`
2. Click on **Button** component
3. Click **"Live Preview"** tab
4. You should see:
   - ✅ Full-sized blue button with "Click Me" text
   - ✅ Changing `variant` dropdown updates button color
   - ✅ Toggling `disabled` checkbox fades the button
   - ✅ Button has proper padding, border-radius, hover effect

## Future Enhancements

Potential improvements for more advanced styling support:

1. **CSS Extraction:** Parse project's CSS files and inject them into sandbox
2. **CSS Modules Support:** Handle CSS module scoping
3. **Styled Components:** Better support for CSS-in-JS libraries
4. **Custom Theme Provider:** Allow users to configure default preview styles
5. **Automatic Detection:** Detect CSS framework (Tailwind, Bootstrap) and load appropriate CDN

For now, the default styles cover the most common patterns and provide a good baseline for component previews!
