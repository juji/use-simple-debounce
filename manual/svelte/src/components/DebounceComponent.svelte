<script lang="ts">
  import { debounce } from 'use-simple-debounce/svelte'
  import { onMount, onDestroy } from 'svelte'

  export let addLog: (message: string) => void

  let input = ''
  let output = ''

  const debouncedUpdate = debounce(() => {
    console.log('Debounced callback executed')
    output = input
    addLog(`Debounced callback executed: "${input}"`)
  }, 5000)

  onMount(() => {
    addLog('DebounceComponent mounted')
  })

  onDestroy(() => {
    addLog('DebounceComponent unmounting - cleanup should prevent pending debounced callbacks')
  })

  function handleInputChange(event: Event) {
    const target = event.target as HTMLInputElement
    input = target.value
    addLog(`Input changed: "${input}"`)
    debouncedUpdate()
  }
</script>

<div class="debounce-component">
  <div class="test-controls">
    <label>
      Input (debounced):
      <input
        type="text"
        bind:value={input}
        on:input={handleInputChange}
        placeholder="Type to trigger debounced update..."
      />
    </label>
  </div>
  <div class="test-output">
    <p><strong>Debounced Output:</strong> {output}</p>
  </div>
</div>