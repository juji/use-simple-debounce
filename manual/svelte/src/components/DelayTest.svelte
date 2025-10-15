<script>
  import { createDebounce } from 'use-simple-debounce/svelte'

  let input = ''
  let output = ''
  let delay = 1000
  let logs = []

  function addLog(message) {
    logs = [...logs, `${new Date().toLocaleTimeString()}: ${message}`]
  }

  let debouncedUpdate = createDebounce(delay)

  function handleInputChange(event) {
    const target = event.target
    input = target.value
    addLog(`Input changed: "${input}"`)
    debouncedUpdate(() => {
      output = input
      addLog(`Debounced update: "${input}"`)
    })
  }

  function handleDelayChange(event) {
    const target = event.target
    delay = Number(target.value)
    // Recreate debounce with new delay
    debouncedUpdate = createDebounce(delay)
  }
</script>

<div class="test-case">
  <h3>⚡ Custom Delay Test</h3>
  <p>Test debouncing with adjustable delay.</p>

  <div class="test-controls">
    <label>
      Delay (ms):
      <input
        type="number"
        bind:value={delay}
        on:input={handleDelayChange}
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
        bind:value={input}
        on:input={handleInputChange}
        placeholder="Type something..."
      />
    </label>
  </div>

  <div class="test-output">
    <p><strong>Output:</strong> {output}</p>
    <p><strong>Current Delay:</strong> {delay}ms</p>
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