// Simple debouncing utility for native
export function useDebounce(delay: number) {
  let timeoutId: ReturnType<typeof setTimeout> | undefined;
  return (fn: () => void | Promise<void>): (() => void) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn(), delay);
    return () => { clearTimeout(timeoutId) }
  };
}