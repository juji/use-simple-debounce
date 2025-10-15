<script lang="ts">
  import { createDebounce } from 'use-simple-debounce/svelte'

  let input = $state('')
  let output = $state('')
  let delay = $state(1000)
  let logs = $state<string[]>([])

  function addLog(message: string) {
    logs = [...logs, `${new Date().toLocaleTimeString()}: ${message}`]
  }

  const debounced = createDebounce()

  function handleInputChange(event: Event) {
    const target = event.target as HTMLInputElement
    input = target.value
    addLog(`Input changed: "${input}"`)
    debounced(() => {
      output = input
      addLog(`Debounced update: "${input}"`)
    }, delay)
  }

  function handleDelayChange(event: Event) {
    const target = event.target as HTMLInputElement
    delay = Number(target.value)
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
        oninput={handleDelayChange}
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
        oninput={handleInputChange}
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