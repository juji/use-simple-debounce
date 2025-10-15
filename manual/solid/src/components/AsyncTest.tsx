import { createSignal } from 'solid-js'
import { createDebounce } from 'use-simple-debounce/solid'

export function AsyncTest() {
  const [input, setInput] = createSignal('')
  const [result, setResult] = createSignal('')
  const [loading, setLoading] = createSignal(false)
  const [logs, setLogs] = createSignal<string[]>([])

  const addLog = (message: string) => {
    setLogs(prev => [...prev, `${new Date().toLocaleTimeString()}: ${message}`])
  }

  const debounced = createDebounce()

  const handleInputChange = (e: Event) => {
    const target = e.target as HTMLInputElement
    const value = target.value
    setInput(value)
    addLog(`Input changed: "${value}"`)
    debounced(async () => {
      setLoading(true)
      addLog(`Starting async operation for: "${value}"`)

      // Simulate async operation
      await new Promise(resolve => setTimeout(resolve, 1000))

      const processed = value.toUpperCase()
      setResult(processed)
      setLoading(false)
      addLog(`Async operation completed: "${processed}"`)
    }, 500)
  }

  return (
    <div class="test-case">
      <h3>⚡ Async Function Test</h3>
      <p>Test debouncing with async functions (simulates API call).</p>

      <div class="test-controls">
        <label>
          Input:
          <input
            type="text"
            value={input()}
            onInput={handleInputChange}
            placeholder="Type to trigger async operation..."
          />
        </label>
      </div>

      <div class="test-output">
        <p><strong>Result:</strong> {result()}</p>
        <p><strong>Loading:</strong> {loading() ? 'Yes' : 'No'}</p>
      </div>

      <div class="test-logs">
        <h4>Logs:</h4>
        <div class="logs-container">
          {logs().map((log) => (
            <div class="log-entry">{log}</div>
          ))}
        </div>
      </div>
    </div>
  )
}