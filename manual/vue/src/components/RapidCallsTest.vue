<template>
  <div class="test-case">
    <h3>⚡ Rapid Calls Test</h3>
    <p>Test debouncing with rapid successive calls (10 calls in 500ms).</p>

    <div class="test-controls">
      <button @click="handleRapidCalls">Trigger Rapid Calls</button>
      <button @click="reset">Reset</button>
    </div>

    <div class="test-output">
      <p><strong>Immediate Count:</strong> {{ count }}</p>
      <p><strong>Debounced Count:</strong> {{ debouncedCount }}</p>
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

const count = ref(0)
const debouncedCount = ref(0)
const logs = ref<string[]>([])

const addLog = (message: string) => {
  logs.value.push(`${new Date().toLocaleTimeString()}: ${message}`)
}

const debouncedUpdate = useDebounce(300)

const handleRapidCalls = () => {
  for (let i = 0; i < 10; i++) {
    setTimeout(() => {
      count.value += 1
      addLog(`Immediate count: ${count.value}`)
      debouncedUpdate(() => {
        debouncedCount.value = count.value
        addLog(`Debounced count: ${count.value}`)
      })
    }, i * 50) // Call every 50ms
  }
}

const reset = () => {
  count.value = 0
  debouncedCount.value = 0
  logs.value = []
}
</script>