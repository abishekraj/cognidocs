---
title: Getting Started with Vue Components
category: Guides
order: 1
---

# Getting Started with Vue Components

This guide will help you understand and use the Vue 3 components in this sample project.

## Installation

```bash
npm install vue@latest
```

## Basic Usage

### Using the Button Component

The Button component supports multiple variants and states:

```vue
<script setup>
import { Button } from '@/components/Button.vue';

const handleClick = () => {
  console.log('Button clicked!');
};
</script>

<template>
  <div>
    <Button variant="primary" @click="handleClick"> Primary Button </Button>

    <Button variant="secondary" disabled> Disabled Button </Button>

    <Button variant="danger" :loading="true"> Loading... </Button>
  </div>
</template>
```

### Using the Card Component

The Card component provides a flexible container with slots:

```vue
<script setup>
import { Card } from '@/components/Card.vue';
import { Button } from '@/components/Button.vue';
</script>

<template>
  <Card title="User Profile" interactive>
    <template #header>
      <img src="/avatar.jpg" alt="Avatar" />
    </template>

    <p>User bio and information goes here...</p>

    <template #footer>
      <Button variant="primary">Edit Profile</Button>
      <Button variant="ghost">Cancel</Button>
    </template>
  </Card>
</template>
```

## Using Composables

### Counter Composable

The `useCounter` composable provides counter functionality:

```vue
<script setup>
import { useCounter } from '@/composables/useCounter';

const { count, increment, decrement, reset, isZero } = useCounter(0);
</script>

<template>
  <div>
    <p>Count: {{ count }}</p>
    <p v-if="isZero">Counter is at zero!</p>

    <Button @click="increment">+1</Button>
    <Button @click="decrement">-1</Button>
    <Button @click="reset" variant="secondary">Reset</Button>
  </div>
</template>
```

## Best Practices

1. **Use TypeScript** - All components use TypeScript for type safety
2. **Document with JSDoc** - Add JSDoc comments to props, events, and methods
3. **Use Composition API** - Prefer `<script setup>` for cleaner code
4. **Emit typed events** - Define event types using TypeScript interfaces
5. **Provide slots** - Make components flexible with named slots

## Next Steps

- Explore the component documentation pages
- Check out more composables in the `/composables` directory
- Read about Vue 3 Composition API in the [official docs](https://vuejs.org/guide/extras/composition-api-faq.html)
