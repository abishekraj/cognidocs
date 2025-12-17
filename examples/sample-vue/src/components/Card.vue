<template>
  <div :class="['card', { 'card-interactive': interactive }]">
    <div v-if="$slots.header" class="card-header">
      <slot name="header"></slot>
    </div>
    <div class="card-body">
      <h3 v-if="title" class="card-title">{{ title }}</h3>
      <slot></slot>
    </div>
    <div v-if="$slots.footer" class="card-footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
/**
 * A flexible card component with header, body, and footer slots
 *
 * @component
 * @example
 * ```vue
 * <Card title="My Card" interactive>
 *   <template #header>
 *     <Icon name="star" />
 *   </template>
 *   Card content goes here
 *   <template #footer>
 *     <Button>Action</Button>
 *   </template>
 * </Card>
 * ```
 */

interface Props {
  /** The card title displayed in the body */
  title?: string;
  /** Whether the card should have hover effects */
  interactive?: boolean;
}

withDefaults(defineProps<Props>(), {
  title: undefined,
  interactive: false,
});
</script>

<style scoped>
.card {
  background-color: white;
  border-radius: 0.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}

.card-interactive {
  cursor: pointer;
  transition: all 0.2s;
}

.card-interactive:hover {
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transform: translateY(-2px);
}

.card-header {
  padding: 1rem;
  border-bottom: 1px solid #e5e7eb;
  background-color: #f9fafb;
}

.card-body {
  padding: 1.5rem;
}

.card-title {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: #111827;
}

.card-footer {
  padding: 1rem;
  border-top: 1px solid #e5e7eb;
  background-color: #f9fafb;
}
</style>
