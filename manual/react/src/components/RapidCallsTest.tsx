import React, { useState } from 'react';
import { useDebounce } from 'use-simple-debounce';

export const RapidCallsTest: React.FC = () => {
  const [count, setCount] = useState(0);
  const [debouncedCount, setDebouncedCount] = useState(0);
  const [logs, setLogs] = useState<string[]>([]);

  const addLog = (message: string) => {
    setLogs(prev => [...prev, `${new Date().toLocaleTimeString()}: ${message}`]);
  };

  const debouncedUpdate = useDebounce(300);

  const handleRapidCalls = () => {
    for (let i = 0; i < 10; i++) {
      setTimeout(() => {
        setCount(prev => {
          const newCount = prev + 1;
          addLog(`Immediate count: ${newCount}`);
          debouncedUpdate(() => {
            setDebouncedCount(newCount);
            addLog(`Debounced count: ${newCount}`);
          });
          return newCount;
        });
      }, i * 50); // Call every 50ms
    }
  };

  const reset = () => {
    setCount(0);
    setDebouncedCount(0);
    setLogs([]);
  };

  return (
    <div className="test-case">
      <header className="page-header">
        <h1>use-simple-debounce Manual Tests</h1>
        <p>React Implementation - Rapid Calls Test</p>
      </header>

      <h3>⚡ Rapid Calls Test</h3>
      <p>Test debouncing with rapid successive calls (10 calls in 500ms).</p>

      <div className="test-controls">
        <button onClick={handleRapidCalls}>Trigger Rapid Calls</button>
        <button onClick={reset}>Reset</button>
      </div>

      <div className="test-output">
        <p><strong>Immediate Count:</strong> {count}</p>
        <p><strong>Debounced Count:</strong> {debouncedCount}</p>
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