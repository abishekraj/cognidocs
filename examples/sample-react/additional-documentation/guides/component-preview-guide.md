---
title: Component Preview System Guide
description: Complete guide to using the live component preview and playground system
category: guides
order: 5
---

# Component Preview System Guide

CogniDocs includes a powerful **live component preview system** that allows you to interact with your React components in real-time directly in the documentation. This guide covers everything you need to know about using and understanding the preview system.

## Overview

The component preview system provides:

- **Live Component Rendering** - See your components in action
- **Interactive Props Editor** - Edit props in real-time and see instant updates
- **Type-Aware Inputs** - Automatic editor selection based on prop types
- **Sandboxed Execution** - Safe, isolated component rendering
- **Error Handling** - Clear error messages and debugging info

## Quick Start

### Accessing the Preview

1. Navigate to any component's documentation page
2. Click the **"Live Preview"** tab next to "Documentation"
3. Use the props editor (left pane) to modify component props
4. See real-time updates in the preview pane (right)

:::tip
The preview system works best with components that have well-defined TypeScript prop types and JSDoc documentation.
:::

## Understanding the UI

### Layout

The preview tab uses a split-pane layout:

```
┌─────────────────────────────────────┐
│ [Documentation] [Live Preview] ←Tabs│
├──────────────┬──────────────────────┤
│ Props Editor │ Live Preview Sandbox │
│              │                      │
│ • String     │  ┌─────────────────┐│
│ • Number     │  │  Your Component ││
│ • Boolean    │  │  Renders Here   ││
│ • Enum       │  └─────────────────┘│
│ • Object     │                      │
│ • Array      │  Status: ✓ Ready    │
│              │                      │
│ [Reset]      │                      │
└──────────────┴──────────────────────┘
```

### Props Editor (Left Pane)

The props editor automatically generates appropriate input controls based on your prop types:

#### String Props
```tsx
/** Text to display */
label?: string;
```
→ Text input field

#### Number Props
```tsx
/** Number of items */
count?: number;
```
→ Number input with validation

#### Boolean Props
```tsx
/** Whether the button is disabled */
disabled?: boolean;
```
→ Checkbox

#### Enum Props (Union Types)
```tsx
/** Button visual style */
variant?: 'primary' | 'secondary' | 'danger';
```
→ Dropdown select

#### Object Props
```tsx
/** User configuration */
config?: { name: string; age: number };
```
→ JSON editor with syntax validation

#### Array Props
```tsx
/** List of items */
items?: string[];
```
→ JSON array editor

### Preview Sandbox (Right Pane)

The right pane contains:

- **Component Render Area** - Your component with current props
- **Status Indicator** - Loading, Ready, or Error state
- **Error Messages** - Detailed error info if rendering fails

## Prop Types Support

### Supported Types

The preview system supports all common TypeScript/JavaScript types:

| Type | Example | Editor |
|------|---------|--------|
| `string` | `label: string` | Text input |
| `number` | `count: number` | Number input |
| `boolean` | `disabled: boolean` | Checkbox |
| `enum` | `'sm' \| 'md' \| 'lg'` | Dropdown |
| `object` | `{ x: number }` | JSON editor |
| `array` | `string[]` | JSON editor |
| `function` | `onClick: () => void` | Mock function |
| `ReactNode` | `children: ReactNode` | N/A (passed as null) |

### Type Inference

The system automatically infers the correct editor based on your TypeScript types:

```tsx
interface ButtonProps {
  // String → Text input
  label: string;

  // Union type → Dropdown
  size: 'small' | 'medium' | 'large';

  // Number → Number input
  width: number;

  // Boolean → Checkbox
  disabled: boolean;

  // Object → JSON editor
  style: { color: string; fontSize: number };

  // Array → JSON editor
  tags: string[];
}
```

## Examples

### Example 1: Simple Button

```tsx
/**
 * Interactive button component
 */
interface ButtonProps {
  /** Button label text */
  label: string;
  /** Visual variant */
  variant?: 'primary' | 'secondary' | 'danger';
  /** Whether button is disabled */
  disabled?: boolean;
}

export function Button({ label, variant = 'primary', disabled }: ButtonProps) {
  return (
    <button
      className={`btn btn-${variant}`}
      disabled={disabled}
    >
      {label}
    </button>
  );
}
```

**In the Preview:**
- Edit `label` → Type new text, see button update instantly
- Change `variant` → Select from dropdown (primary/secondary/danger)
- Toggle `disabled` → Check/uncheck to enable/disable

### Example 2: Card with Complex Props

```tsx
interface CardProps {
  /** Card title */
  title: string;
  /** Card variant */
  variant: 'flat' | 'elevated' | 'outlined';
  /** Card content */
  children: React.ReactNode;
  /** Optional footer */
  footer?: React.ReactNode;
  /** Click handler */
  onClick?: () => void;
}
```

**In the Preview:**
- `title` → Text input
- `variant` → Dropdown (flat/elevated/outlined)
- `children` → Passed as `null` (ReactNode types)
- `footer` → Passed as `null`
- `onClick` → Mock function (logs to console)

### Example 3: Form Input with Validation

```tsx
interface InputProps {
  /** Input value */
  value: string;
  /** Placeholder text */
  placeholder?: string;
  /** Input type */
  type?: 'text' | 'email' | 'password' | 'number';
  /** Whether input is required */
  required?: boolean;
  /** Maximum length */
  maxLength?: number;
  /** Change handler */
  onChange?: (value: string) => void;
}
```

**In the Preview:**
- Edit all props in real-time
- See validation feedback
- Test different input types

## Advanced Features

### JSON Editing

For object and array props, the preview provides a JSON editor with:

- **Syntax Validation** - Real-time error checking
- **Format Button** - Pretty-print your JSON
- **Error Messages** - Clear validation feedback

**Example:**

```json
{
  "name": "John Doe",
  "age": 30,
  "tags": ["developer", "react"]
}
```

### Reset Functionality

Click the **Reset** button to restore all props to their default values.

### Debug Mode

In development, expand the "Current props (debug)" section to see the exact prop values being passed to your component:

```json
{
  "label": "Click Me",
  "variant": "primary",
  "disabled": false
}
```

## Troubleshooting

### Common Issues

#### Preview Not Available

**Problem:** "Component source not available" message

**Solution:**
- Ensure component source code is accessible
- Check that the component file is included in the build
- Verify the component is exported

#### Component Not Rendering

**Problem:** Preview shows error or doesn't render

**Possible Causes:**
1. **Syntax Errors** - Check component source for errors
2. **Missing Dependencies** - Required imports not available
3. **Invalid Props** - Prop validation failing

**Solutions:**
- Check error message for details
- Verify all required props are provided
- Ensure prop types match expected values

#### Props Not Updating

**Problem:** Changing props doesn't update the preview

**Solution:**
- Check browser console for errors
- Try clicking Reset and re-entering values
- Refresh the page

### Error Messages

The preview system provides detailed error messages:

:::danger
**Preview Error**

`Component "Button" not found. Make sure it is exported.`
:::

**Fix:** Ensure your component has an export statement:
```tsx
export function Button(props: ButtonProps) { ... }
// or
export default Button;
```

:::danger
**Preview Error**

`Preview execution timed out after 5000ms`
:::

**Fix:** Component took too long to render. Check for:
- Infinite loops
- Heavy computations
- Blocking operations

## Security

The preview system uses a **sandboxed iframe** for safe component execution:

- ✅ Isolated execution environment
- ✅ Content Security Policy (CSP) headers
- ✅ No access to parent window
- ✅ 5-second execution timeout
- ✅ Error boundaries

## Best Practices

### Writing Preview-Friendly Components

1. **Use TypeScript** - Enables type-aware prop editors
```tsx
// Good
interface Props {
  size: 'sm' | 'md' | 'lg';
}

// Less ideal
interface Props {
  size: string;  // Editor can't infer options
}
```

2. **Provide Default Values**
```tsx
export function Button({
  variant = 'primary',  // ✓ Good default
  size = 'medium',
}: ButtonProps) { ... }
```

3. **Add JSDoc Comments**
```tsx
interface Props {
  /** Visual style variant */  // ✓ Shows in editor
  variant: 'primary' | 'secondary';
}
```

4. **Keep Components Pure**
```tsx
// Good - Pure component
export function Card({ title }: Props) {
  return <div>{title}</div>;
}

// Avoid - Side effects may cause issues
export function Card({ title }: Props) {
  useEffect(() => {
    fetchData();  // Avoid external calls
  }, []);
  return <div>{title}</div>;
}
```

### Testing Different States

Use the preview to test:

1. **Default State** - Reset props to defaults
2. **Edge Cases** - Empty strings, zero, null values
3. **Variants** - All enum options
4. **Disabled State** - If applicable
5. **Error States** - Invalid data

### Example Test Checklist

For a Button component:

- [ ] Default appearance (primary variant)
- [ ] All variants (primary, secondary, danger)
- [ ] Disabled state
- [ ] Long label text
- [ ] Empty label
- [ ] Click interaction (check console)

## Performance

The preview system is optimized for performance:

- **Lazy Loading** - Preview loads only when tab is active
- **Debounced Updates** - Props updates are batched
- **Memoization** - Prevents unnecessary re-renders
- **CDN Loading** - React loaded from CDN (cached)

## Limitations

Current limitations:

- ❌ Components requiring context providers
- ❌ Components with external API calls
- ❌ Components requiring router integration
- ❌ File upload components
- ❌ Components requiring specific DOM environment

**Workaround:** Create wrapper components for preview:

```tsx
// Production component (uses context)
export function UserProfile() {
  const user = useUser();  // From context
  return <div>{user.name}</div>;
}

// Preview-friendly wrapper
export function UserProfilePreview({ userName }: { userName: string }) {
  return <div>{userName}</div>;
}
```

## Future Enhancements

Planned features for future releases:

- 📱 Device frame simulation (mobile/tablet/desktop)
- 📤 Export to CodeSandbox/StackBlitz
- 🖼️ Multiple examples from JSDoc @example tags
- 📸 Screenshot/snapshot functionality
- 🎬 Recording interactions

## Summary

The component preview system provides a powerful way to:

✅ Visualize components in real-time
✅ Test different prop combinations
✅ Debug rendering issues
✅ Document component behavior
✅ Share interactive examples

**Next Steps:**
- Try the preview on your components
- Experiment with different prop values
- Use it for visual testing and QA
- Share preview links with your team

---

**See Also:**
- [Getting Started Guide](./getting-started.md)
- [Component Documentation Best Practices](./best-practices.md)
- [Callout Boxes Guide](./callout-boxes.md)
