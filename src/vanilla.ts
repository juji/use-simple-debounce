// Simple debouncing utility for vanilla JavaScript
export function useDebounce() {
  let timeoutId: ReturnType<typeof setTimeout> | undefined;
  return (fn: () => void | Promise<void>, delay: number = 300): (() => void) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn(), delay);
    return () => { clearTimeout(timeoutId) }
  };
}