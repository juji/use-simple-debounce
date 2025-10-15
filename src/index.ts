import { useRef, useEffect } from 'react';

/**
 * Returns a debounced executor function that delays execution of the provided function.
 *
 * @returns A function that accepts a function to debounce and an optional delay
 *
 * @example
 * ```tsx
 * import { useDebounce } from 'use-simple-debounce';
 *
 * function MyComponent() {
 *   const debounced = useDebounce();
 *
 *   const handleInputChange = (value: string) => {
 *     // This will be debounced - only executes 300ms after the last call
 *     debounced(() => saveToServer(value), 300);
 *   };
 *
 *   return <input onChange={e => handleInputChange(e.target.value)} />;
 * }
 * ```
 */
export function useDebounce() {
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

  return (fn: () => void, delay: number = 300) => {
    if (timeout.current) {
      clearTimeout(timeout.current);
    }
    timeout.current = setTimeout(() => {
      fn();
      timeout.current = null;
    }, delay);
  };
}