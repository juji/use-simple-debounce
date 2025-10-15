import { ref, onUnmounted } from 'vue';

/**
 * Returns a debounced executor function that delays execution of the provided function.
 *
 * @param delay - The delay in milliseconds before executing the function (default: 300ms)
 * @returns A function that accepts another function to debounce its execution
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
 * const debouncedSearch = useDebounce(300);
 *
 * const handleInputChange = () => {
 *   debouncedSearch(() => {
 *     // This will be debounced - only executes 300ms after the last call
 *     performSearch(query.value);
 *   });
 * };
 * </script>
 * ```
 */
export function useDebounce(delay: number = 300) {
  const timeout = ref<ReturnType<typeof setTimeout> | null>(null);

  // Cleanup on component unmount
  onUnmounted(() => {
    if (timeout.value) {
      clearTimeout(timeout.value);
    }
  });

  return (fn: () => void | Promise<void>) => {
    if (timeout.value) {
      clearTimeout(timeout.value);
    }
    timeout.value = setTimeout(() => {
      fn();
      timeout.value = null;
    }, delay);
  };
}
