<script>
  import { createDebounce } from 'use-simple-debounce/svelte'

  let count = 0
  let debouncedCount = 0
  let logs = []
  let debouncedCountRef = 0

  function addLog(message) {
    logs = [...logs, `${new Date().toLocaleTimeString()}: ${message}`]
  }

  const debounced = createDebounce()

  function handleRapidCalls() {
    for (let i = 0; i < 10; i++) {
      setTimeout(() => {
        count += 1
        addLog(`Immediate count: ${count}`)
        debounced(() => {
          debouncedCountRef = debouncedCountRef + 1
          debouncedCount = debouncedCountRef
          addLog(`Debounced count: ${count}`)
        }, 300)
      }, i * 50) // Call every 50ms
    }
  }

  function reset() {
    count = 0
    debouncedCount = 0
    debouncedCountRef = 0
    logs = []
  }
</script>

<div class="test-case">
  <h3>⚡ Rapid Calls Test</h3>
  <p>Test debouncing with rapid successive calls (10 calls in 500ms).</p>

  <div class="test-controls">
    <button on:click={handleRapidCalls}>Trigger Rapid Calls</button>
    <button on:click={reset}>Reset</button>
  </div>

  <div class="test-output">
    <p><strong>Immediate Count:</strong> {count}</p>
    <p><strong>Debounced Count:</strong> {debouncedCount}</p>
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