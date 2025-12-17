import { ref, computed } from 'vue';

/**
 * A composable for managing a counter with increment, decrement, and reset functionality
 *
 * @param initialValue - The starting value for the counter
 * @returns An object containing the counter value and control functions
 *
 * @example
 * ```ts
 * const { count, increment, decrement, reset, isZero } = useCounter(0);
 *
 * increment(); // count = 1
 * decrement(); // count = 0
 * reset();     // count = 0
 * ```
 */
export function useCounter(initialValue: number = 0) {
  const count = ref(initialValue);

  /**
   * Computed property that returns true when count is zero
   */
  const isZero = computed(() => count.value === 0);

  /**
   * Computed property that returns true when count is positive
   */
  const isPositive = computed(() => count.value > 0);

  /**
   * Increments the counter by the specified amount
   * @param amount - The amount to increment by (default: 1)
   */
  function increment(amount: number = 1) {
    count.value += amount;
  }

  /**
   * Decrements the counter by the specified amount
   * @param amount - The amount to decrement by (default: 1)
   */
  function decrement(amount: number = 1) {
    count.value -= amount;
  }

  /**
   * Resets the counter to the initial value
   */
  function reset() {
    count.value = initialValue;
  }

  /**
   * Sets the counter to a specific value
   * @param value - The new counter value
   */
  function setValue(value: number) {
    count.value = value;
  }

  return {
    count,
    isZero,
    isPositive,
    increment,
    decrement,
    reset,
    setValue,
  };
}
