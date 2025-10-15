import { useState } from 'preact/hooks';
import { useDebounce } from 'use-simple-debounce/preact';

export function DelayTest() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [delay, setDelay] = useState(1000);
  const [logs, setLogs] = useState<string[]>([]);

  const addLog = (message: string) => {
    setLogs((prev) => [...prev, `${new Date().toLocaleTimeString()}: ${message}`]);
  };

  const debounced = useDebounce();

  const handleInputChange = (e: Event) => {
    const target = e.target as HTMLInputElement;
    const value = target.value;
    setInput(value);
    addLog(`Input changed: "${value}"`);
    debounced(() => {
      setOutput(value);
      addLog(`Debounced update: "${value}"`);
    }, delay);
  };

  const handleDelayChange = (e: Event) => {
    const target = e.target as HTMLInputElement;
    setDelay(Number(target.value));
  };

  return (
    <div className="test-case">
      <h3>⚡ Custom Delay Test</h3>
      <p>Test debouncing with adjustable delay.</p>

      <div className="test-controls">
        <label>
          Delay (ms):
          <input
            type="number"
            value={delay}
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
            value={input}
            onInput={handleInputChange}
            placeholder="Type something..."
          />
        </label>
      </div>

      <div className="test-output">
        <p>
          <strong>Output:</strong> {output}
        </p>
        <p>
          <strong>Current Delay:</strong> {delay}ms
        </p>
      </div>

      <div className="test-logs">
        <h4>Logs:</h4>
        <div className="logs-container">
          {logs.map((log, index) => (
            <div key={index} className="log-entry">
              {log}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
