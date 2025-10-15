<template>
  <div class="test-case">
    <h3>⚡ Custom Delay Test</h3>
    <p>Test debouncing with adjustable delay.</p>

    <div class="test-controls">
      <label>
        Delay (ms):
        <input
          type="number"
          v-model.number="delay"
          @input="handleDelayChange"
          min="100"
          max="5000"
          step="100"
        />
      </label>
      <br />
      <label>
        Input:
        <input
          type="text"
          v-model="input"
          @input="handleInputChange"
          placeholder="Type something..."
        />
      </label>
    </div>

    <div class="test-output">
      <p><strong>Output:</strong> {{ output }}</p>
      <p><strong>Current Delay:</strong> {{ delay }}ms</p>
    </div>

    <div class="test-logs">
      <h4>Logs:</h4>
      <div class="logs-container">
        <div v-for="(log, index) in logs" :key="index" class="log-entry">{{ log }}</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useDebounce } from 'use-simple-debounce/vue'

const input = ref('')
const output = ref('')
const delay = ref(1000)
const logs = ref<string[]>([])

const addLog = (message: string) => {
  logs.value.push(`${new Date().toLocaleTimeString()}: ${message}`)
}

let debouncedUpdate = useDebounce(delay.value)

const handleInputChange = (e: Event) => {
  const target = e.target as HTMLInputElement
  const value = target.value
  input.value = value
  addLog(`Input changed: "${value}"`)
  debouncedUpdate(() => {
    output.value = value
    addLog(`Debounced update: "${value}"`)
  })
}

const handleDelayChange = () => {
  // Recreate debounce with new delay
  debouncedUpdate = useDebounce(delay.value)
}
</script>