import React, { useState } from 'react';
import { useDebounce } from 'use-simple-debounce';

export const AsyncTest: React.FC = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);
  const [logs, setLogs] = useState<string[]>([]);

  const addLog = (message: string) => {
    setLogs(prev => [...prev, `${new Date().toLocaleTimeString()}: ${message}`]);
  };

  const debouncedAsyncOperation = useDebounce(500);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInput(value);
    addLog(`Input changed: "${value}"`);
    debouncedAsyncOperation(async () => {
      setLoading(true);
      addLog(`Starting async operation for: "${value}"`);

      // Simulate async operation
      await new Promise(resolve => setTimeout(resolve, 1000));

      const processed = value.toUpperCase();
      setResult(processed);
      setLoading(false);
      addLog(`Async operation completed: "${processed}"`);
    });
  };

  return (
    <div className="test-case">
      <header className="page-header">
        <h1>use-simple-debounce Manual Tests</h1>
        <p>React Implementation - Async Functions Test</p>
      </header>

      <h3>⚡ Async Function Test</h3>
      <p>Test debouncing with async functions (simulates API call).</p>

      <div className="test-controls">
        <label>
          Input:
          <input
            type="text"
            value={input}
            onChange={handleInputChange}
            placeholder="Type to trigger async operation..."
          />
        </label>
        {loading && <span className="loading">Loading...</span>}
      </div>

      <div className="test-output">
        <p><strong>Result:</strong> {result}</p>
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
};