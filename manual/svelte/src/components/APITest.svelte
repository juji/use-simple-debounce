<script lang="ts">
  import { debounce } from 'use-simple-debounce/svelte'

  let query = ''
  let results: { query: string; results: string[] } | null = null
  let loading = false
  let logs: string[] = []

  function addLog(message: string) {
    logs = [...logs, `${new Date().toLocaleTimeString()}: ${message}`]
  }

  // Mock API function
  async function mockAPI(searchQuery: string): Promise<{ query: string; results: string[] }> {
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

  const debouncedSearch = debounce(async () => {
    if (!query.trim()) {
      results = null
      return
    }

    loading = true
    try {
      results = await mockAPI(query)
      addLog(`API call completed for: "${query}"`)
    } catch (error) {
      addLog(`API call failed: ${error}`)
    } finally {
      loading = false
    }
  }, 300)

  function handleInputChange(event: Event) {
    const target = event.target as HTMLInputElement
    query = target.value
    addLog(`Search query changed: "${query}"`)
    debouncedSearch()
  }
</script>

<div class="test-case">
  <h3>⚡ API Simulation Test</h3>
  <p>Test debouncing with simulated API calls (search functionality).</p>

  <div class="test-controls">
    <label>
      Search:
      <input
        type="text"
        bind:value={query}
        on:input={handleInputChange}
        placeholder="Type to search..."
      />
    </label>
  </div>

  <div class="test-output">
    {#if results}
      <div>
        <p><strong>Search Results for "{results.query}":</strong></p>
        <ul>
          {#each results.results as result}
            <li>{result}</li>
          {/each}
        </ul>
      </div>
    {/if}
    {#if loading}
      <p><strong>Loading...</strong></p>
    {/if}
  </div>

  <div class="test-logs">
    <h4>Logs:</h4>
    <div class="logs-container">
      {#each logs as log}
        <div class="log-entry">{log}</div>
      {/each}
    </div>
  </div>
</div>