import { ref, onUnmounted } from 'vue';

/**
 * Returns a debounced executor function that delays execution of the provided function.
 *
 * @returns A function that accepts a function to debounce and an optional delay
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
 * const debounced = useDebounce();
 *
 * const handleInputChange = () => {
 *   debounced(() => {
 *     // This will be debounced - only executes 300ms after the last call
 *     performSearch(query.value);
 *   }, 300);
 * };
 * </script>
 * ```
 */
export function useDebounce() {
  const timeout = ref<ReturnType<typeof setTimeout> | null>(null);

  // Cleanup on component unmount
  onUnmounted(() => {
    if (timeout.value) {
      clearTimeout(timeout.value);
    }
  });

  return (fn: () => void | Promise<void>, delay: number = 300) => {
    if (timeout.value) {
      clearTimeout(timeout.value);
    }
    timeout.value = setTimeout(() => {
      fn();
      timeout.value = null;
    }, delay);
  };
}
