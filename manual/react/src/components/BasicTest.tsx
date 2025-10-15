import React, { useState } from 'react';
import { useDebounce } from 'use-simple-debounce';

export const BasicTest: React.FC = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [logs, setLogs] = useState<string[]>([]);

  const addLog = (message: string) => {
    setLogs((prev) => [...prev, `${new Date().toLocaleTimeString()}: ${message}`]);
  };

  const debounced = useDebounce();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
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
            onChange={handleInputChange}
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
};
