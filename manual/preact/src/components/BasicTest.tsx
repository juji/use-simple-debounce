import { useState } from 'preact/hooks';
import { useDebounce } from 'use-simple-debounce/preact';

export function BasicTest() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
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
    }, 500);
  };

  return (
    <div className="test-case">
      <h3>⚡ Basic Debounce Test</h3>
      <p>Test basic debouncing with a 500ms delay.</p>

      <div className="test-controls">
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
