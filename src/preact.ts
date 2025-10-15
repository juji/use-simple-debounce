import { useRef /*  useEffect */ } from 'preact/hooks';

/**
 * Returns a debounced executor function that delays execution of the provided function.
 *
 * @returns A function that accepts a function to debounce and an optional delay
 *
 * @example
 * ```tsx
 * import { useDebounce } from 'use-simple-debounce/preact';
 *
 * function SearchComponent() {
 *   const debounced = useDebounce();
 *
 *   const handleSearch = (query: string) => {
 *     // This will only execute 300ms after the user stops typing
 *     debounced(() => {
 *       performSearch(query);
 *     }, 300);
 *   };
 *
 *   return (
 *     <input
 *       type="text"
 *       onInput={e => handleSearch(e.target.value)}
 *       placeholder="Search..."
 *     />
 *   );
 * }
 * ```
 */
export function useDebounce() {
  const timeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  // // Cleanup on component unmount
  // useEffect(() => {
  //   return () => {
  //     if (timeout.current) {
  //       clearTimeout(timeout.current);
  //     }
  //   };
  // }, []);

  return (fn: () => void, delay: number = 300) => {
    if (timeout.current) {
      clearTimeout(timeout.current);
    }
    timeout.current = setTimeout(() => {
      fn();
      timeout.current = null;
    }, delay);

    // return cleanup
    return () => {
      if (timeout.current) {
        clearTimeout(timeout.current);
      }
    };
  };
}
