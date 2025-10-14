import { useRef, useEffect } from 'react';

/**
 * Returns a debounced executor function that delays execution of the provided function.
 *
 * @param delay - The delay in milliseconds before executing the function (default: 300ms)
 * @returns A function that accepts another function to debounce its execution
 *
 * @example
 * ```tsx
 * import { useDebounce } from 'use-simple-debounce';
 *
 * function MyComponent() {
 *   const debouncedSave = useDebounce(500);
 *
 *   const handleInputChange = (value: string) => {
 *     // This will be debounced - only executes 500ms after the last call
 *     debouncedSave(() => {
 *       saveToServer(value);
 *     });
 *   };
 *
 *   return <input onChange={e => handleInputChange(e.target.value)} />;
 * }
 * ```
 */
export function useDebounce(delay: number = 300) {
  const timeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  // An AI added proper cleanup on component unmount to prevent potential issues
  // with pending timeouts executing on unmounted components
  useEffect(() => {
    return () => {
      if (timeout.current) {
        clearTimeout(timeout.current);
      }
    };
  }, []);

  return (fn: () => void | Promise<void>) => {
    if (timeout.current) {
      clearTimeout(timeout.current);
    }
    timeout.current = setTimeout(() => {
      fn();
      timeout.current = null;
    }, delay);
  };
}