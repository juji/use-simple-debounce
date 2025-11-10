import { useRef, useEffect } from 'react';

/**
 * Returns a debounced version of the provided function that delays execution.
 *
 * @param func - The function to debounce
 * @param wait - The delay in milliseconds (default: 300)
 * @returns A debounced function that returns a cancel function
 *
 * @example
 * ```tsx
 * import { useDebounce } from 'use-simple-debounce';
 *
 * function MyComponent() {
 *   const debouncedSave = useDebounce((value: string) => saveToServer(value), 300);
 *
 *   const handleInputChange = (value: string) => {
 *     const cancel = debouncedSave(value);
 *     // Can cancel if needed
 *   };
 *
 *   return <input onChange={e => handleInputChange(e.target.value)} />;
 * }
 * ```
 */
export function useDebounce<F extends (...args: Parameters<F>) => ReturnType<F>>(
  func: F,
  wait: number = 300
): (...args: Parameters<F>) => () => void {
  const timeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Cleanup on component unmount
  useEffect(() => {
    return () => {
      if (timeout.current) {
        clearTimeout(timeout.current);
        timeout.current = null;
      }
    };
  }, []);

  return (...args: Parameters<F>) => {
    if (timeout.current) {
      clearTimeout(timeout.current);
    }
    timeout.current = setTimeout(() => {
      func(...args);
    }, wait);

    // Return cleanup function
    return () => {
      if (timeout.current) {
        clearTimeout(timeout.current);
        timeout.current = null;
      }
    };
  };
}
