<script>
  import { createEventDispatcher } from 'svelte';

  /**
   * Button variant type
   * @type {'primary' | 'secondary' | 'danger'}
   */
  export let variant = 'primary';

  /**
   * Button size
   * @type {'small' | 'medium' | 'large'}
   */
  export let size = 'medium';

  /**
   * Disabled state
   */
  export let disabled = false;

  /**
   * Button label text
   */
  export let label = 'Click me';

  const dispatch = createEventDispatcher();

  /**
   * Handle button click event
   */
  function handleClick() {
    if (!disabled) {
      dispatch('click', { variant, size });
    }
  }

  // Reactive statement to compute button classes
  $: classes = `btn btn-${variant} btn-${size} ${disabled ? 'disabled' : ''}`;
</script>

<button
  class={classes}
  {disabled}
  on:click={handleClick}
>
  {label}
  <slot />
</button>

<style>
  .btn {
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 0.25rem;
    cursor: pointer;
    font-weight: 500;
    transition: all 0.2s;
  }

  .btn-primary {
    background-color: #007bff;
    color: white;
  }

  .btn-secondary {
    background-color: #6c757d;
    color: white;
  }

  .btn-danger {
    background-color: #dc3545;
    color: white;
  }

  .btn-small {
    font-size: 0.875rem;
    padding: 0.25rem 0.5rem;
  }

  .btn-medium {
    font-size: 1rem;
  }

  .btn-large {
    font-size: 1.125rem;
    padding: 0.75rem 1.5rem;
  }

  .disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
</style>
