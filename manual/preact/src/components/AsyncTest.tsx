import { useState } from 'preact/hooks';
import { useDebounce } from 'use-simple-debounce/preact';

export function AsyncTest() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);
  const [logs, setLogs] = useState<string[]>([]);

  const addLog = (message: string) => {
    setLogs(prev => [...prev, `${new Date().toLocaleTimeString()}: ${message}`]);
  };

  const debounced = useDebounce();

  const handleInputChange = (e: Event) => {
    const target = e.target as HTMLInputElement;
    const value = target.value;
    setInput(value);
    addLog(`Input changed: "${value}"`);
    debounced(async () => {
      setLoading(true);
      addLog(`Starting async operation for: "${value}"`);

      // Simulate async operation
      await new Promise(resolve => setTimeout(resolve, 1000));

      const processed = value.toUpperCase();
      setResult(processed);
      setLoading(false);
      addLog(`Async operation completed: "${processed}"`);
    }, 500);
  };

  return (
    <div className="test-case">
      <h3>⚡ Async Test</h3>
      <p>Test debouncing with async functions (simulates API call with 1s delay).</p>

      <div className="test-controls">
        <label>
          Input:
          <input
            type="text"
            value={input}
            onInput={handleInputChange}
            placeholder="Type to trigger async operation..."
          />
        </label>
      </div>

      <div className="test-output">
        <p><strong>Result:</strong> {result}</p>
        <p><strong>Loading:</strong> {loading ? 'Yes' : 'No'}</p>
      </div>

      <div className="test-logs">
        <h4>Logs:</h4>
        <div className="logs-container">
          {logs.map((log, index) => (
            <div key={index} className="log-entry">{log}</div>
          ))}
        </div>
      </div>
    </div>
  );
}