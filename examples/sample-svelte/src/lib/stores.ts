/**
 * Svelte Stores for Counter Application
 * Demonstrates writable, readable, and derived stores
 */

import { writable, derived, readable } from 'svelte/store';

/**
 * Writable store for counter value
 * @type {import('svelte/store').Writable<number>}
 */
export const count = writable(0);

/**
 * Derived store that doubles the count value
 * @type {import('svelte/store').Readable<number>}
 */
export const doubled = derived(count, ($count) => $count * 2);

/**
 * Derived store that checks if count is even
 * @type {import('svelte/store').Readable<boolean>}
 */
export const isEven = derived(count, ($count) => $count % 2 === 0);

/**
 * Readable store for current timestamp
 * Updates every second
 * @type {import('svelte/store').Readable<Date>}
 */
export const time = readable(new Date(), (set) => {
  const interval = setInterval(() => {
    set(new Date());
  }, 1000);

  return () => clearInterval(interval);
});

/**
 * Increment the counter by a given amount
 * @param {number} amount - Amount to increment by (default: 1)
 */
export function increment(amount = 1) {
  count.update((n) => n + amount);
}

/**
 * Decrement the counter by a given amount
 * @param {number} amount - Amount to decrement by (default: 1)
 */
export function decrement(amount = 1) {
  count.update((n) => n - amount);
}

/**
 * Reset the counter to zero
 */
export function reset() {
  count.set(0);
}

/**
 * Set the counter to a specific value
 * @param {number} value - The value to set
 */
export function setCount(value) {
  count.set(value);
}
