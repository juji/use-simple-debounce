<template>
  <div class="test-case">
    <h3>⚡ Async Function Test</h3>
    <p>Test debouncing with async functions (simulates API call).</p>

    <div class="test-controls">
      <label>
        Input:
        <input
          type="text"
          v-model="input"
          @input="handleInputChange"
          placeholder="Type to trigger async operation..."
        />
      </label>
      <span v-if="loading" class="loading">Loading...</span>
    </div>

    <div class="test-output">
      <p><strong>Result:</strong> {{ result }}</p>
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
const result = ref('')
const loading = ref(false)
const logs = ref<string[]>([])

const addLog = (message: string) => {
  logs.value.push(`${new Date().toLocaleTimeString()}: ${message}`)
}

const debouncedAsyncOperation = useDebounce(500)

const handleInputChange = (e: Event) => {
  const target = e.target as HTMLInputElement
  const value = target.value
  input.value = value
  addLog(`Input changed: "${value}"`)
  debouncedAsyncOperation(async () => {
    loading.value = true
    addLog(`Starting async operation for: "${value}"`)

    // Simulate async operation
    await new Promise(resolve => setTimeout(resolve, 1000))

    const processed = value.toUpperCase()
    result.value = processed
    loading.value = false
    addLog(`Async operation completed: "${processed}"`)
  })
}
</script>