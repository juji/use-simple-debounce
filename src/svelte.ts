import { onDestroy } from 'svelte';

/**
 * Returns a debounced executor function that delays execution of the provided function.
 *
 * @returns A function that accepts a function to debounce and an optional delay
 *
 * @example
 * ```svelte
 * <script>
 *   import { createDebounce } from 'use-simple-debounce/svelte';
 *
 *   const debounced = createDebounce();
 *
 *   function handleInputChange(value) {
 *     // This will be debounced - only executes 500ms after the last call
 *     debounced(() => {
 *       saveToServer(value);
 *     }, 500);
 *   }
 * </script>
 *
 * <input on:input={e => handleInputChange(e.target.value)} />
 * ```
 */
export function createDebounce() {
  let timeout: ReturnType<typeof setTimeout> | null = null;

  // Cleanup on component destroy
  onDestroy(() => {
    if (timeout) {
      clearTimeout(timeout);
    }
  });

  return (fn: () => void | Promise<void>, delay: number = 300) => {
    if (timeout) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(() => {
      fn();
      timeout = null;
    }, delay);
  };
}
