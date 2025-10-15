import { createSignal } from 'solid-js';
import { createDebounce } from 'use-simple-debounce/solid';

export function BasicTest() {
  const [input, setInput] = createSignal('');
  const [output, setOutput] = createSignal('');
  const [logs, setLogs] = createSignal<string[]>([]);

  const addLog = (message: string) => {
    setLogs((prev) => [...prev, `${new Date().toLocaleTimeString()}: ${message}`]);
  };

  const debounced = createDebounce();

  const handleInputChange = (e: Event) => {
    const target = e.target as HTMLInputElement;
    const value = target.value;
    setInput(value);
    addLog(`Input changed: "${value}"`);
    debounced(() => {
      setOutput(value);
      addLog(`Debounced update: "${value}"`);
    }, 500);
  };

  return (
    <div class="test-case">
      <h3>⚡ Basic Debounce Test</h3>
      <p>Test basic debouncing with a 500ms delay.</p>

      <div class="test-controls">
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
        <p>
          <strong>Output:</strong> {output()}
        </p>
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
  );
}
