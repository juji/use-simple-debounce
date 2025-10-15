import { onCleanup } from 'solid-js';

/**
 * Returns a debounced executor function that delays execution of the provided function.
 *
 * @returns A function that accepts a function to debounce and an optional delay
 *
 * @example
 * ```tsx
 * import { createDebounce } from 'use-simple-debounce/solid';
 *
 * function MyComponent() {
 *   const debounced = createDebounce();
 *
 *   const handleInputChange = (value: string) => {
 *     // This will be debounced - only executes 500ms after the last call
 *     debounced(() => {
 *       saveToServer(value);
 *     }, 500);
 *   };
 *
 *   return <input onInput={e => handleInputChange(e.target.value)} />;
 * }
 * ```
 */
export function createDebounce() {
  let timeout: ReturnType<typeof setTimeout> | null = null;

  // Cleanup on component unmount
  onCleanup(() => {
    if (timeout) {
      clearTimeout(timeout);
    }
  });

  return (fn: () => void, delay: number = 300) => {
    if (timeout) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(() => {
      fn();
      timeout = null;
    }, delay);
  };
}
