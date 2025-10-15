import { createSignal } from 'solid-js'
import { createDebounce } from 'use-simple-debounce/solid'

export function DelayTest() {
  const [input, setInput] = createSignal('')
  const [output, setOutput] = createSignal('')
  const [delay, setDelay] = createSignal(1000)
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
    debounced(() => {
      setOutput(value)
      addLog(`Debounced update: "${value}"`)
    }, delay())
  }

  const handleDelayChange = (e: Event) => {
    const target = e.target as HTMLInputElement
    setDelay(Number(target.value))
  }

  return (
    <div class="test-case">
      <h3>⚡ Custom Delay Test</h3>
      <p>Test debouncing with adjustable delay.</p>

      <div class="test-controls">
        <label>
          Delay (ms):
          <input
            type="number"
            value={delay()}
            onInput={handleDelayChange}
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
            value={input()}
            onInput={handleInputChange}
            placeholder="Type something..."
          />
        </label>
      </div>

      <div class="test-output">
        <p><strong>Output:</strong> {output()}</p>
        <p><strong>Current Delay:</strong> {delay()}ms</p>
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