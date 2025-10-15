import React, { useState, useEffect } from 'react';
import { useDebounce } from 'use-simple-debounce';

export const CleanupTest: React.FC = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [componentMounted, setComponentMounted] = useState(true);
  const [logs, setLogs] = useState<string[]>([]);

  const addLog = (message: string) => {
    setLogs(prev => [...prev, `${new Date().toLocaleTimeString()}: ${message}`]);
  };

  const debouncedUpdate = useDebounce(1000);

  useEffect(() => {
    return () => {
      setComponentMounted(false);
      addLog('Component unmounting - cleanup should prevent debounced callback');
    };
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInput(value);
    addLog(`Input changed: "${value}"`);
    debouncedUpdate(() => {
      if (componentMounted) {
        setOutput(value);
        addLog(`Debounced update: "${value}"`);
      } else {
        addLog(`Debounced update cancelled (component unmounted): "${value}"`);
      }
    });
  };

  const reset = () => {
    setInput('');
    setOutput('');
    setLogs([]);
  };

  return (
    <div className="test-case">
      <header className="page-header">
        <h1>use-simple-debounce Manual Tests</h1>
        <p>React Implementation - Cleanup Test</p>
      </header>

      <h3>⚡ Cleanup Test</h3>
      <p>Test that debounced functions are properly cleaned up on unmount.</p>
      <p><em>Note: Type something, then quickly refresh the page to test cleanup.</em></p>

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
        <button onClick={reset}>Reset</button>
      </div>

      <div className="test-output">
        <p><strong>Output:</strong> {output}</p>
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