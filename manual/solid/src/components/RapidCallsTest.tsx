import { createSignal } from 'solid-js'
import { createDebounce } from 'use-simple-debounce/solid'

export function RapidCallsTest() {
  const [count, setCount] = createSignal(0)
  const [debouncedCount, setDebouncedCount] = createSignal(0)
  const [logs, setLogs] = createSignal<string[]>([])
  const [debouncedCountRef, setDebouncedCountRef] = createSignal(0)

  const addLog = (message: string) => {
    setLogs(prev => [...prev, `${new Date().toLocaleTimeString()}: ${message}`])
  }

  const debounced = createDebounce()

  const handleRapidCalls = () => {
    for (let i = 0; i < 10; i++) {
      setTimeout(() => {
        setCount(prev => {
          const newCount = prev + 1
          addLog(`Immediate count: ${newCount}`)
          debounced(() => {
            setDebouncedCountRef(prev => prev + 1)
            setDebouncedCount(debouncedCountRef())
            addLog(`Debounced count: ${newCount}`)
          }, 300)
          return newCount
        })
      }, i * 50) // Call every 50ms
    }
  }

  const reset = () => {
    setCount(0)
    setDebouncedCount(0)
    setDebouncedCountRef(0)
    setLogs([])
  }

  return (
    <div class="test-case">
      <h3>⚡ Rapid Calls Test</h3>
      <p>Test debouncing with rapid successive calls (10 calls in 500ms).</p>

      <div class="test-controls">
        <button onClick={handleRapidCalls}>Trigger Rapid Calls</button>
        <button onClick={reset}>Reset</button>
      </div>

      <div class="test-output">
        <p><strong>Immediate Count:</strong> {count()}</p>
        <p><strong>Debounced Count:</strong> {debouncedCount()}</p>
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