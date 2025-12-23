# Sample Vue 3 Project

This is a sample Vue 3 project demonstrating CogniDocs documentation generation for Vue Single File Components (SFCs).

## Features Demonstrated

- **Composition API** with `<script setup>` syntax
- **TypeScript** props and emits
- **JSDoc comments** for comprehensive documentation
- **Composables** (Vue hooks)
- **Slots** (named and default)
- **Component events** with type-safe emits

## Components

### Button

A reusable button component with multiple variants and loading state.

**Props:**

- 'variant' - The button style (primary, secondary, danger, ghost)
- 'disabled' - Whether the button is disabled
- 'loading' - Whether to show loading spinner

**Events:**

- 'click' - Emitted when button is clicked

**Usage:**

```vue
<Button variant="primary" @click="handleSubmit">
  Submit Form
</Button>
```

### Card

A flexible card component with header, body, and footer slots.

**Props:**

- 'title' - Card title
- 'interactive' - Enable hover effects

**Slots:**

- 'header' - Card header content
- 'default' - Card body content
- 'footer' - Card footer content

**Usage:**

```vue
<Card title="My Card">
  <template #header>
    Header Content
  </template>
  Body content
  <template #footer>
    Footer content
  </template>
</Card>
```

## Composables

### useCounter

A composable for managing counter state with increment, decrement, and reset functionality.

**Returns:**

- 'count' - The current count value
- 'increment'() - Increment the counter
- 'decrement'() - Decrement the counter
- 'reset'() - Reset to initial value
- 'isZero' - Computed boolean indicating if count is zero
- 'isPositive' - Computed boolean indicating if count is positive

**Usage:**

```ts
const { count, increment, decrement, reset } = useCounter(0);
```

## Building Documentation

```bash
# From the project root
cognidocs build

# Serve the documentation site
cognidocs serve
```

## Framework

- Vue 3 with Composition API
- TypeScript for type safety
- JSDoc for documentation
