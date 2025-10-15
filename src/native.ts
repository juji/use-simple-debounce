// Simple debouncing utility for native
export function useDebounce() {
  console.log('useDebounce from native');
  let timeoutId: ReturnType<typeof setTimeout> | undefined;
  return (fn: () => void | Promise<void>, delay: number = 300): (() => void) => {
    console.log('Debouncing with delay:', delay);
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn(), delay);
    return () => { clearTimeout(timeoutId) }
  };
}