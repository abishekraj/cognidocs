<script>
  import { count, doubled, increment, decrement, reset } from './stores';

  /**
   * Whether to show the doubled value
   */
  export let showDoubled = true;

  /**
   * Counter step size
   */
  export let step = 1;

  // Reactive statement to format count display
  $: displayCount = `Count: ${$count}`;

  // Reactive statement to check if count is even
  $: isEven = $count % 2 === 0;
</script>

<div class="counter">
  <h2>{displayCount}</h2>

  {#if showDoubled}
    <p class="doubled">Doubled: {$doubled}</p>
  {/if}

  <div class="status">
    {#if isEven}
      <span class="badge even">Even</span>
    {:else}
      <span class="badge odd">Odd</span>
    {/if}
  </div>

  <div class="controls">
    <button on:click={() => decrement(step)}>
      - {step}
    </button>

    <button on:click={reset}>
      Reset
    </button>

    <button on:click={() => increment(step)}>
      + {step}
    </button>
  </div>
</div>

<style>
  .counter {
    text-align: center;
    padding: 2rem;
    background: #f5f5f5;
    border-radius: 0.5rem;
  }

  h2 {
    font-size: 2rem;
    margin: 0 0 0.5rem;
    color: #333;
  }

  .doubled {
    font-size: 1.25rem;
    color: #666;
    margin: 0 0 1rem;
  }

  .status {
    margin: 1rem 0;
  }

  .badge {
    display: inline-block;
    padding: 0.25rem 0.75rem;
    border-radius: 1rem;
    font-size: 0.875rem;
    font-weight: 600;
  }

  .even {
    background: #28a745;
    color: white;
  }

  .odd {
    background: #ffc107;
    color: #333;
  }

  .controls {
    display: flex;
    gap: 0.5rem;
    justify-content: center;
  }

  button {
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 0.25rem;
    background: #007bff;
    color: white;
    font-weight: 500;
    cursor: pointer;
    transition: background 0.2s;
  }

  button:hover {
    background: #0056b3;
  }
</style>
