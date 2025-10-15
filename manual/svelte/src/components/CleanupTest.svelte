<script lang="ts">
  import { debounce } from 'use-simple-debounce/svelte'
  import DebounceComponent from './DebounceComponent.svelte'

  let componentMounted = true
  let logs: string[] = []

  function addLog(message: string) {
    logs = [...logs, `${new Date().toLocaleTimeString()}: ${message}`]
  }

  function mountComponent() {
    componentMounted = true
    addLog('Mounting DebounceComponent')
  }

  function unmountComponent() {
    componentMounted = false
    addLog('Unmounting DebounceComponent')
  }

  function clearLogs() {
    logs = []
  }
</script>

<div class="test-case">
  <h3>⚡ Cleanup Test</h3>
  <p>Test that debounced functions are properly cleaned up when components unmount.</p>
  <p><em>Type in the input, then unmount the component before the 5s delay expires.</em></p>
  <p><em>The debounced function is called with console.log after 5 seconds.</em></p>

  <div class="test-controls">
    <button on:click={mountComponent} disabled={componentMounted}>
      {componentMounted ? 'Component Mounted' : 'Mount Component'}
    </button>
    <button on:click={unmountComponent} disabled={!componentMounted}>
      {!componentMounted ? 'Component Unmounted' : 'Unmount Component'}
    </button>
    <button on:click={clearLogs}>Clear Logs</button>
  </div>

  <div class="component-container">
    {#if componentMounted}
      <DebounceComponent {addLog} />
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