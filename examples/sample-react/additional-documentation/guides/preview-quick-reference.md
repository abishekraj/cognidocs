---
title: Component Preview Quick Reference
description: Quick reference card for the component preview system
category: guides
order: 6
---

# Component Preview Quick Reference

Quick reference for using the CogniDocs component preview system.

## Accessing Preview

1. Navigate to component documentation
2. Click **"Live Preview"** tab
3. Edit props → See live updates

## Prop Type → Editor Mapping

| TypeScript Type | Editor Type | Example |
|----------------|-------------|---------|
| `string` | Text Input | `label: string` |
| `number` | Number Input | `count: number` |
| `boolean` | Checkbox | `disabled: boolean` |
| `'a' \| 'b' \| 'c'` | Dropdown | `variant: 'sm' \| 'md' \| 'lg'` |
| `object` | JSON Editor | `config: { x: number }` |
| `array` | JSON Editor | `items: string[]` |
| `function` | Mock Function | `onClick: () => void` |
| `ReactNode` | N/A | `children: ReactNode` |

## UI Layout

```
┌─────────────────────┬───────────────┐
│ Props Editor        │ Live Preview  │
│ ├─ String inputs    │               │
│ ├─ Number inputs    │  Component    │
│ ├─ Checkboxes       │  renders      │
│ ├─ Dropdowns        │  here         │
│ └─ JSON editors     │               │
│                     │               │
│ [Reset Button]      │ Status: Ready │
└─────────────────────┴───────────────┘
```

## Common Tasks

### Reset Props
Click **"Reset"** button in props editor

### Format JSON
Click **"Format JSON"** in object/array editors

### View Current Props (Debug)
Expand "Current props (debug)" section (development only)

### Handle Errors
Check error message → Fix issue → Preview auto-refreshes

## Keyboard Shortcuts

| Action | Shortcut |
|--------|----------|
| Switch to Preview tab | Click tab or focus + Enter |
| Focus next prop field | Tab |
| Focus previous field | Shift + Tab |
| Reset to defaults | Click Reset button |

## Error Messages

| Error | Cause | Solution |
|-------|-------|----------|
| "Component source not available" | Source code not loaded | Check file path and build |
| "Component X not found" | Missing export | Add export statement |
| "Execution timed out" | Infinite loop/blocking code | Check component logic |
| "Invalid JSON" | Syntax error in JSON editor | Fix JSON syntax |
| "Preview Error: ..." | Runtime error | Check error details |

## Best Practices

### ✅ DO

- Use TypeScript for prop types
- Provide default values
- Add JSDoc comments
- Keep components pure
- Test edge cases

### ❌ DON'T

- Use external API calls
- Require context providers
- Use heavy computations
- Access window/document directly
- Use file uploads

## Supported Features

✅ String, number, boolean props
✅ Union types (enums)
✅ Objects and arrays
✅ Function props (mocked)
✅ Default values
✅ Type validation
✅ Real-time updates
✅ Error boundaries

## Example Component

```tsx
/**
 * Example button component
 */
interface ButtonProps {
  /** Button label */
  label: string;
  /** Visual style */
  variant?: 'primary' | 'secondary';
  /** Disabled state */
  disabled?: boolean;
}

export function Button({
  label,
  variant = 'primary',
  disabled = false
}: ButtonProps) {
  return (
    <button
      className={`btn-${variant}`}
      disabled={disabled}
    >
      {label}
    </button>
  );
}
```

**Preview Result:**
- `label` → Text input
- `variant` → Dropdown (primary/secondary)
- `disabled` → Checkbox
- Live component updates as you type

## Tips & Tricks

### Tip 1: Use Enums for Dropdowns
```tsx
// This creates a dropdown
variant: 'sm' | 'md' | 'lg'

// This only creates a text input
variant: string
```

### Tip 2: Provide Good Defaults
```tsx
// Good - Preview works immediately
function Button({ size = 'medium' }: Props) { }

// Less ideal - Requires user input
function Button({ size }: Props) { }
```

### Tip 3: Add Descriptions
```tsx
interface Props {
  /** This shows up in the editor */
  label: string;
}
```

### Tip 4: Test Edge Cases
- Empty strings: `""`
- Zero: `0`
- Empty arrays: `[]`
- Empty objects: `{}`

### Tip 5: Use Reset Often
Click Reset between tests to start fresh

## Security Notes

- ✅ Sandboxed iframe execution
- ✅ Content Security Policy active
- ✅ 5-second timeout protection
- ✅ No parent window access
- ✅ Error boundaries enabled

## Need Help?

- Check error message details
- Review component exports
- Verify prop type definitions
- Test with simpler props first
- See full guide: [Component Preview Guide](./component-preview-guide.md)

## Quick Stats

| Metric | Value |
|--------|-------|
| Render Timeout | 5 seconds |
| Supported Types | 8+ types |
| Security Layers | 3 (iframe, CSP, timeout) |
| Editor Types | 6 (string, number, boolean, enum, object, array) |

---

**Happy previewing! 🚀**
