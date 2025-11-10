import { onDestroy } from 'svelte';

/**
 * Returns a debounced version of the provided function that delays execution.
 *
 * @param func - The function to debounce
 * @param wait - The delay in milliseconds (default: 300)
 * @returns A debounced function that returns a cancel function
 *
 * @example
 * ```svelte
 * <script>
 *   import { createDebounce } from 'use-simple-debounce/svelte';
 *
 *   const debouncedSave = createDebounce((value) => saveToServer(value), 500);
 *
 *   function handleInputChange(value) {
 *     const cancel = debouncedSave(value);
 *   }
 * </script>
 *
 * <input on:input={e => handleInputChange(e.target.value)} />
 * ```
 */
export function createDebounce<F extends (...args: Parameters<F>) => ReturnType<F>>(
  func: F,
  wait: number = 300
): (...args: Parameters<F>) => () => void {
  let timeout: ReturnType<typeof setTimeout> | null = null;

  // Cleanup on component destroy
  onDestroy(() => {
    if (timeout) {
      clearTimeout(timeout);
      timeout = null;
    }
  });

  return (...args: Parameters<F>) => {
    if (timeout) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(() => {
      func(...args);
    }, wait);

    // Return cleanup function
    return () => {
      if (timeout) {
        clearTimeout(timeout);
        timeout = null;
      }
    };
  };
}
