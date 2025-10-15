<template>
  <div class="test-case">
    <h3>⚡ API Simulation Test</h3>
    <p>Test debouncing with simulated API calls (search functionality).</p>

    <div class="test-controls">
      <label>
        Search:
        <input
          type="text"
          v-model="query"
          @input="handleInputChange"
          placeholder="Type to search..."
        />
      </label>
      <span v-if="loading" class="loading">Searching...</span>
    </div>

    <div class="test-output">
      <div v-if="results">
        <p><strong>Search Results for "{{ results.query }}":</strong></p>
        <ul>
          <li v-for="(result, index) in results.results" :key="index">{{ result }}</li>
        </ul>
      </div>
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

interface SearchResult {
  query: string
  results: string[]
}

const query = ref('')
const results = ref<SearchResult | null>(null)
const loading = ref(false)
const logs = ref<string[]>([])

const addLog = (message: string) => {
  logs.value.push(`${new Date().toLocaleTimeString()}: ${message}`)
}

// Mock API function
const mockAPI = async (searchQuery: string): Promise<SearchResult> => {
  addLog(`API call started for: "${searchQuery}"`)
  await new Promise(resolve => setTimeout(resolve, 800)) // Simulate network delay

  // Mock search results
  const mockResults = [
    `${searchQuery} result 1`,
    `${searchQuery} result 2`,
    `${searchQuery} result 3`,
  ]

  return { query: searchQuery, results: mockResults }
}

const debouncedSearch = useDebounce(300)

const handleInputChange = (e: Event) => {
  const target = e.target as HTMLInputElement
  const value = target.value
  query.value = value
  addLog(`Search query changed: "${value}"`)
  debouncedSearch(async () => {
    if (!value.trim()) {
      results.value = null
      return
    }

    loading.value = true
    try {
      const searchResults = await mockAPI(value)
      results.value = searchResults
      addLog(`API call completed for: "${value}"`)
    } catch (error) {
      addLog(`API call failed: ${error}`)
    } finally {
      loading.value = false
    }
  })
}
</script>