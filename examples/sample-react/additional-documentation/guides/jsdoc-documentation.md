---
title: JSDoc Documentation Guide
description: Learn how to write rich JSDoc comments that generate beautiful, interactive documentation
category: Guides
order: 5
---

# JSDoc Documentation Guide

JSDoc is a powerful documentation standard for JavaScript and TypeScript. CogniDocs extracts and renders JSDoc comments with rich, interactive UI components, making your documentation more useful and engaging.

## Why Use JSDoc?

- **Inline Documentation**: Keep docs close to your code
- **IDE Support**: Get autocomplete and inline help
- **Type Safety**: Document types alongside your code
- **Rich Examples**: Show real-world usage patterns
- **Better Collaboration**: Help teammates understand your code

## Supported JSDoc Tags

CogniDocs supports a comprehensive set of JSDoc tags with rich rendering:

### Core Tags

#### @example - Code Examples

Show real-world usage with syntax-highlighted, copy-to-clipboard code examples.

    /**
     * Calculate the sum of two numbers
     *
     * @example
     * Basic usage
     * ```ts
     * const result = add(5, 3);
     * console.log(result); // 8
     * ```
     *
     * @example
     * With negative numbers
     * ```ts
     * add(-10, 5); // -5
     * ```
     */
    export function add(a: number, b: number): number {
      return a + b;
    }

**Rendering**: Each example gets its own card with:

- Optional description text
- Syntax-highlighted code block
- Copy-to-clipboard button
- Language badge

#### @param - Parameter Documentation

Document function parameters with descriptions that appear in the props table.

    /**
     * Send a notification to the user
     *
     * @param message - The notification message to display
     * @param type - Notification type (success, error, warning, or info)
     * @param duration - How long to show the notification in milliseconds
     */
    function notify(message: string, type: string, duration: number) {
      // Implementation
    }

**Rendering**: Parameter descriptions appear in:

- Props tables for components
- Function parameter lists
- Inline documentation

#### @returns - Return Value Documentation

Describe what a function returns.

    /**
     * Fetch user data from the API
     *
     * @returns A promise that resolves to the user object with id, name, and email fields
     */
    async function getUser(id: string): Promise<User> {
      const response = await fetch(`/api/users/${id}`);
      return response.json();
    }

**Rendering**: Displays in the "Additional Information" section with formatted text.

### Reference Tags

#### @see - Related References

Link to related documentation, components, or external resources.

    /**
     * Primary action button component
     *
     * @see {@link https://react.dev/reference/react-dom/components/button} React Button Docs
     * @see SecondaryButton - Alternative button style
     * @see IconButton - Button with icon support
     */
    export const PrimaryButton: React.FC<ButtonProps> = (props) => {
      // Implementation
    }

**Rendering**: Creates an interactive "See Also" section with:

- Clickable links for URLs
- Internal component references
- External link icons

#### @link - Inline Links

Create inline links within descriptions (though @see is preferred for reference lists).

    /**
     * A modal dialog component
     *
     * Uses {@link https://radix-ui.com Radix UI} primitives for accessibility.
     */

**Rendering**: Renders as clickable badges in a "Related Links" section.

### Metadata Tags

#### @since - Version Information

Track when a feature was added.

    /**
     * User authentication hook
     *
     * @since 2.0.0
     */
    export function useAuth() {
      // Implementation
    }

**Rendering**: Displays as a version badge in the "Additional Information" section.

#### @author - Author Information

Credit the authors or maintainers.

    /**
     * Complex data visualization component
     *
     * @author Jane Developer
     * @author John Maintainer
     */
    export const Chart: React.FC<ChartProps> = (props) => {
      // Implementation
    }

**Rendering**: Shows author badges in the "Additional Information" section.

#### @deprecated - Deprecation Warning

Warn users about deprecated features.

    /**
     * Legacy button component
     *
     * @deprecated Use the new Button component from '@/components/ui/button' instead. This will be removed in v3.0.
     */
    export const OldButton: React.FC = () => {
      // Implementation
    }

**Rendering**: Shows a prominent warning card with:

- Alert icon in destructive color
- "Deprecated" heading
- Deprecation message with migration guidance

## Best Practices

### 1. Write Clear Descriptions

    :::tip
    Start with a concise one-line summary, then add details if needed.
    :::

    **Good:**
    ```ts
    /**
     * Calculate compound interest
     *
     * Uses the formula A = P(1 + r/n)^(nt) where P is principal,
     * r is rate, n is compounds per year, and t is time in years.
     */
    ```

    **Avoid:**
    ```ts
    /**
     * This function calculates stuff
     */
    ```

### 2. Provide Multiple Examples

Show different use cases to help users understand the full API.

    /**
     * @example
     * Simple case
     * ```ts
     * validateEmail('user@example.com'); // true
     * ```
     *
     * @example
     * Invalid email
     * ```ts
     * validateEmail('invalid'); // false
     * ```
     *
     * @example
     * Edge cases
     * ```ts
     * validateEmail(''); // false
     * validateEmail('user@'); // false
     * ```
     */

### 3. Use @param for Complex Parameters

Don't just repeat the type - explain what the parameter does and any constraints.

    **Good:**
    ```ts
    /**
     * @param options - Configuration object
     * @param options.retries - Number of retry attempts (0-5, default: 3)
     * @param options.timeout - Request timeout in milliseconds (must be positive)
     */
    ```

    **Avoid:**
    ```ts
    /**
     * @param options - Options
     */
    ```

### 4. Link Related Components

Help users discover your API by linking related functionality.

    /**
     * Form input component
     *
     * @see FormLabel - Associated label component
     * @see FormError - Error message display
     * @see useForm - Form state management hook
     */

### 5. Use Code Blocks in Examples

Always wrap example code in triple backticks with a language specifier for syntax highlighting.

    :::warning
    Examples without code blocks won't get syntax highlighting or copy buttons.
    :::

    **Good:**
    ```
    * @example
    * ```tsx
    * <Button>Click me</Button>
    * ```
    ```

    **Avoid:**
    ```
    * @example
    * <Button>Click me</Button>
    ```

## Component Documentation Example

Here's a complete example showing all tags working together:

    /**
     * Modal dialog component for displaying content in an overlay
     *
     * Provides a flexible modal system with customizable size, animations,
     * and accessibility features built-in.
     *
     * @param props - Modal properties
     * @param props.open - Whether the modal is currently open
     * @param props.onClose - Callback fired when the modal should close
     * @param props.title - Modal title displayed in the header
     * @param props.size - Modal size preset (sm, md, lg, xl, full)
     * @param props.children - Modal content
     *
     * @returns A modal dialog element with overlay and animations
     *
     * @example
     * Basic usage with controlled state
     * ```tsx
     * const [open, setOpen] = useState(false);
     *
     * <Modal
     *   open={open}
     *   onClose={() => setOpen(false)}
     *   title="Confirmation"
     * >
     *   Are you sure you want to continue?
     * </Modal>
     * ```
     *
     * @example
     * Large modal with custom content
     * ```tsx
     * <Modal open={isOpen} onClose={handleClose} size="lg" title="User Profile">
     *   <UserProfileForm user={currentUser} />
     * </Modal>
     * ```
     *
     * @see {@link https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/} WAI-ARIA Dialog Pattern
     * @see DialogOverlay - Underlying overlay component
     * @see useModal - Hook for managing modal state
     *
     * @since 1.5.0
     * @author UI Team
     */
    export const Modal: React.FC<ModalProps> = ({
      open,
      onClose,
      title,
      size = 'md',
      children
    }) => {
      // Implementation
    };

This will generate beautiful, interactive documentation with:

- Rich description with proper formatting
- Parameter table with all descriptions
- Return value documentation
- Three copyable code examples with descriptions
- External and internal links in a "See Also" section
- Version badge
- Author credit

## TypeScript Type Documentation

You can also document TypeScript types and interfaces:

    /**
     * User account information
     *
     * @example
     * ```ts
     * const user: User = {
     *   id: '123',
     *   email: 'user@example.com',
     *   role: 'admin',
     *   createdAt: new Date()
     * };
     * ```
     */
    export interface User {
      /** Unique user identifier */
      id: string;

      /** User's email address (must be validated) */
      email: string;

      /** User role for permissions */
      role: 'admin' | 'user' | 'guest';

      /** Account creation timestamp */
      createdAt: Date;

      /** Optional profile picture URL */
      avatar?: string;
    }

## Tips for Better Documentation

:::tip
**Document the "why", not just the "what"**

Explain why something exists, when to use it, and what problems it solves. The code already shows what it does.
:::

:::tip
**Keep examples realistic**

Use real-world scenarios in your examples, not contrived foo/bar examples. Show actual use cases.
:::

:::tip
**Update docs with code**

When you change code, update the JSDoc comments in the same commit. Stale docs are worse than no docs.
:::

:::warning
**Avoid over-documentation**

Don't document obvious things. `getName()` doesn't need a comment explaining it gets the name.
:::

## Viewing Your Documentation

After running `cognidocs build`, your JSDoc comments will appear in:

1. **Component Detail Pages** - Full JSDoc rendering with all tags
2. **Search Results** - Descriptions help users find the right component
3. **Props Tables** - Parameter descriptions for better API understanding
4. **Examples Section** - Copyable code examples with syntax highlighting

Start adding rich JSDoc comments to your code and see your documentation come alive!
