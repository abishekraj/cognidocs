<script>
  /**
   * Card title
   */
  export let title = '';

  /**
   * Card subtitle
   */
  export let subtitle = '';

  /**
   * Card elevation level
   * @type {0 | 1 | 2 | 3}
   */
  export let elevation = 1;

  /**
   * Whether the card has a border
   */
  export let border = true;

  // Reactive statement for shadow class
  $: shadowClass = `elevation-${elevation}`;
</script>

<div class="card {shadowClass}" class:bordered={border}>
  {#if title}
    <div class="card-header">
      <h3>{title}</h3>
      {#if subtitle}
        <p class="subtitle">{subtitle}</p>
      {/if}
    </div>
  {/if}

  <div class="card-body">
    <slot />
  </div>

  <div class="card-footer">
    <slot name="footer" />
  </div>
</div>

<style>
  .card {
    background: white;
    border-radius: 0.5rem;
    overflow: hidden;
    transition: box-shadow 0.3s;
  }

  .bordered {
    border: 1px solid #e0e0e0;
  }

  .elevation-0 {
    box-shadow: none;
  }

  .elevation-1 {
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12);
  }

  .elevation-2 {
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
  }

  .elevation-3 {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  }

  .card-header {
    padding: 1rem;
    border-bottom: 1px solid #f0f0f0;
  }

  .card-header h3 {
    margin: 0;
    font-size: 1.25rem;
    color: #333;
  }

  .subtitle {
    margin: 0.25rem 0 0;
    font-size: 0.875rem;
    color: #666;
  }

  .card-body {
    padding: 1rem;
  }

  .card-footer {
    padding: 0.75rem 1rem;
    background: #f9f9f9;
    border-top: 1px solid #f0f0f0;
  }

  .card-footer:empty {
    display: none;
  }
</style>
