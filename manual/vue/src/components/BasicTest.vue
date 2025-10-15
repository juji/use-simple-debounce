<template>
  <div class="test-case">
    <h3>⚡ Basic Debounce Test</h3>
    <p>Test basic debouncing with a 500ms delay.</p>

    <div class="test-controls">
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
import { useDebounce } from 'use-simple-debounce'

const input = ref('')
const output = ref('')
const logs = ref<string[]>([])

const addLog = (message: string) => {
  logs.value.push(`${new Date().toLocaleTimeString()}: ${message}`)
}

const debouncedUpdate = useDebounce(500)

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
</script>