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
import { ref, onMounted, onUnmounted } from 'vue'
import { useDebounce } from 'use-simple-debounce'

interface Props {
  addLog: (message: string) => void
}

const { addLog } = defineProps<Props>()

const input = ref('')
const output = ref('')

const debouncedUpdate = useDebounce(5000)

onMounted(() => {
  addLog('DebounceComponent mounted')
})

onUnmounted(() => {
  addLog('DebounceComponent unmounting - cleanup should prevent pending debounced callbacks')
})

const handleInputChange = (e: Event) => {
  const target = e.target as HTMLInputElement
  const value = target.value
  input.value = value
  addLog(`Input changed: "${value}"`)
  debouncedUpdate(() => {
    console.log('Debounced callback executed')
    output.value = value
    addLog(`Debounced callback executed: "${value}"`)
  })
}
</script>