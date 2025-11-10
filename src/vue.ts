import { ref, onUnmounted } from 'vue';

/**
 * Returns a debounced version of the provided function that delays execution.
 *
 * @param func - The function to debounce
 * @param wait - The delay in milliseconds (default: 300)
 * @returns A debounced function that returns a cancel function
 *
 * @example
 * ```vue
 * <template>
 *   <input v-model="query" @input="handleInputChange" />
 * </template>
 *
 * <script setup>
 * import { ref } from 'vue';
 * import { useDebounce } from 'use-simple-debounce/vue';
 *
 * const query = ref('');
 * const debouncedSearch = useDebounce((query: string) => performSearch(query), 300);
 *
 * const handleInputChange = () => {
 *   const cancel = debouncedSearch(query.value);
 * };
 * </script>
 * ```
 */
export function useDebounce<F extends (...args: Parameters<F>) => ReturnType<F>>(
  func: F,
  wait: number = 300
): (...args: Parameters<F>) => () => void {
  const timeout = ref<ReturnType<typeof setTimeout> | null>(null);

  // Cleanup on component unmount
  onUnmounted(() => {
    if (timeout.value) {
      clearTimeout(timeout.value);
      timeout.value = null;
    }
  });

  return (...args: Parameters<F>) => {
    if (timeout.value) {
      clearTimeout(timeout.value);
    }
    timeout.value = setTimeout(() => {
      func(...args);
    }, wait);

    // Return cleanup function
    return () => {
      if (timeout.value) {
        clearTimeout(timeout.value);
        timeout.value = null;
      }
    };
  };
}
