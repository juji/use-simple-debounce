<script lang="ts">
  import { createDebounce } from 'use-simple-debounce/svelte'

  let input = $state('')
  let output = $state('')
  let logs = $state<string[]>([])

  function addLog(message: string) {
    logs = [...logs, `${new Date().toLocaleTimeString()}: ${message}`]
  }

  const debouncedUpdate = createDebounce(500)

  function handleInputChange(event: Event) {
    const target = event.target as HTMLInputElement
    input = target.value
    addLog(`Input changed: "${input}"`)
    debouncedUpdate(() => {
      output = input
      addLog(`Debounced update: "${input}"`)
    })
  }
</script>

<div class="test-case">
  <h3>⚡ Basic Debounce Test</h3>
  <p>Test basic debouncing with a 500ms delay.</p>

  <div class="test-controls">
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