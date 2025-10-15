<template>
  <div class="test-case">
    <h3>⚡ Cleanup Test</h3>
    <p>Test that debounced functions are properly cleaned up when components unmount.</p>
    <p><em>Type in the input, then unmount the component before the 5s delay expires.</em></p>
    <p><em>The debounced function is called with console.log after 5 seconds.</em></p>

    <div class="test-controls">
      <button @click="mountComponent" :disabled="componentMounted">
        {{ componentMounted ? 'Component Mounted' : 'Mount Component' }}
      </button>
      <button @click="unmountComponent" :disabled="!componentMounted">
        {{ !componentMounted ? 'Component Unmounted' : 'Unmount Component' }}
      </button>
      <button @click="clearLogs">Clear Logs</button>
    </div>

    <div class="component-container">
      <DebounceComponent v-if="componentMounted" :add-log="addLog" />
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
import DebounceComponent from './DebounceComponent.vue'

const componentMounted = ref(true)
const logs = ref<string[]>([])

const addLog = (message: string) => {
  logs.value.push(`${new Date().toLocaleTimeString()}: ${message}`)
}

const mountComponent = () => {
  componentMounted.value = true
  addLog('Mounting DebounceComponent')
}

const unmountComponent = () => {
  componentMounted.value = false
  addLog('Unmounting DebounceComponent')
}

const clearLogs = () => {
  logs.value = []
}
</script>