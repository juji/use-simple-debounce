import { onDestroy } from 'svelte';

/**
 * Returns a debounced executor function that delays execution of the provided function.
 *
 * @param delay - The delay in milliseconds before executing the function (default: 300ms)
 * @returns A function that accepts another function to debounce its execution
 *
 * @example
 * ```svelte
 * <script>
 *   import { createDebounce } from 'use-simple-debounce/svelte';
 *
 *   const debouncedSave = createDebounce(500);
 *
 *   function handleInputChange(value) {
 *     // This will be debounced - only executes 500ms after the last call
 *     debouncedSave(() => {
 *       saveToServer(value);
 *     });
 *   }
 * </script>
 *
 * <input on:input={e => handleInputChange(e.target.value)} />
 * ```
 */
export function createDebounce(delay: number = 300) {
  let timeout: ReturnType<typeof setTimeout> | null = null;

  // Cleanup on component destroy
  onDestroy(() => {
    if (timeout) {
      clearTimeout(timeout);
    }
  });

  return (fn: () => void | Promise<void>) => {
    if (timeout) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(() => {
      fn();
      timeout = null;
    }, delay);
  };
}
