<template>
  <div class="debounce-component">
    <div class="test-controls">
      <label>
        Input (debounced):
        <input
          type="text"
          v-model="input"
          @input="handleInputChange"
          placeholder="Type to trigger debounced update..."
        />
      </label>
    </div>
    <div class="test-output">
      <p><strong>Debounced Output:</strong> {{ output }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { useDebounce } from 'use-simple-debounce/vue';

interface Props {
  addLog: (message: string) => void;
}

const props = defineProps<Props>();

const input = ref('');
const output = ref('');

const debounced = useDebounce();

onMounted(() => {
  props.addLog('DebounceComponent mounted');
});

onUnmounted(() => {
  props.addLog('DebounceComponent unmounting - cleanup should prevent pending debounced callbacks');
});

const handleInputChange = (e: Event) => {
  const target = e.target as HTMLInputElement;
  const value = target.value;
  input.value = value;
  props.addLog(`Input changed: "${value}"`);
  debounced(() => {
    console.log('Debounced callback executed');
    output.value = value;
    props.addLog(`Debounced callback executed: "${value}"`);
  }, 5000);
};
</script>
