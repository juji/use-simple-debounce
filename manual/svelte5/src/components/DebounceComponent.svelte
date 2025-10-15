<script lang="ts">
  import { createDebounce } from 'use-simple-debounce/svelte'
  import { onMount, onDestroy } from 'svelte'

  interface Props {
    addLog: (message: string) => void
  }

  let { addLog }: Props = $props()

  let input = $state('')
  let output = $state('')

  const debouncedUpdate = createDebounce(5000)

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
    debouncedUpdate(() => {
      console.log('Debounced callback executed')
      output = input
      addLog(`Debounced callback executed: "${input}"`)
    })
  }
</script>

<div class="debounce-component">
  <div class="test-controls">
    <label>
      Input (debounced):
      <input
        type="text"
        bind:value={input}
        oninput={handleInputChange}
        placeholder="Type to trigger debounced update..."
      />
    </label>
  </div>
  <div class="test-output">
    <p><strong>Debounced Output:</strong> {output}</p>
  </div>
</div>