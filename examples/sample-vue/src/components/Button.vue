<template>
  <button
    :class="['btn', `btn-${variant}`, { 'btn-loading': loading }]"
    :disabled="disabled || loading"
    @click="handleClick"
  >
    <span v-if="loading" class="spinner"></span>
    <slot v-else></slot>
  </button>
</template>

<script setup lang="ts">
/**
 * A reusable button component with multiple variants and loading state
 *
 * @component
 * @example
 * ```vue
 * <Button variant="primary" @click="handleSubmit">
 *   Click me
 * </Button>
 * ```
 */

interface Props {
  /** The button style variant */
  variant?: 'primary' | 'secondary' | 'danger' | 'ghost';
  /** Whether the button is disabled */
  disabled?: boolean;
  /** Whether the button is in loading state */
  loading?: boolean;
}

interface Emits {
  /** Emitted when button is clicked */
  (e: 'click', event: MouseEvent): void;
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'primary',
  disabled: false,
  loading: false,
});

const emit = defineEmits<Emits>();

/**
 * Handles button click event
 * @param event - The mouse click event
 */
const handleClick = (event: MouseEvent) => {
  if (!props.disabled && !props.loading) {
    emit('click', event);
  }
};
</script>

<style scoped>
.btn {
  padding: 0.5rem 1rem;
  border-radius: 0.375rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
}

.btn-primary {
  background-color: #3b82f6;
  color: white;
}

.btn-secondary {
  background-color: #6b7280;
  color: white;
}

.btn-danger {
  background-color: #ef4444;
  color: white;
}

.btn-ghost {
  background-color: transparent;
  border: 1px solid #d1d5db;
}

.btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.btn-loading {
  position: relative;
  color: transparent;
}

.spinner {
  position: absolute;
  width: 1rem;
  height: 1rem;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-top-color: white;
  border-radius: 50%;
  animation: spin 0.6s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style>
