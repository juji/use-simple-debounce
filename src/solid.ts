import { onCleanup } from 'solid-js';

/**
 * Returns a debounced version of the provided function that delays execution.
 *
 * @param func - The function to debounce
 * @param wait - The delay in milliseconds (default: 300)
 * @returns A debounced function that returns a cancel function
 *
 * @example
 * ```tsx
 * import { createDebounce } from 'use-simple-debounce/solid';
 *
 * function MyComponent() {
 *   const debouncedSave = createDebounce((value: string) => saveToServer(value), 500);
 *
 *   const handleInputChange = (value: string) => {
 *     const cancel = debouncedSave(value);
 *   };
 *
 *   return <input onInput={e => handleInputChange(e.target.value)} />;
 * }
 * ```
 */
export function createDebounce<F extends (...args: Parameters<F>) => ReturnType<F>>(
  func: F,
  wait: number = 300
): (...args: Parameters<F>) => () => void {
  let timeout: ReturnType<typeof setTimeout> | null = null;

  // Cleanup on component unmount
  onCleanup(() => {
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
