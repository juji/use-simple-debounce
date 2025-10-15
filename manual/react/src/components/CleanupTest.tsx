import React, { useState, useEffect } from 'react';
import { useDebounce } from 'use-simple-debounce';

// Component that uses debounce - this will be mounted/unmounted
const DebounceComponent: React.FC<{ addLog: (msg: string) => void }> = ({ addLog }) => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');

  const debounced = useDebounce();

  useEffect(() => {
    addLog('DebounceComponent mounted');
    return () => {
      addLog('DebounceComponent unmounting - cleanup should prevent pending debounced callbacks');
    };
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInput(value);
    addLog(`Input changed: "${value}"`);
    debounced(() => {
      console.log('Debounced callback executed');
      setOutput(value);
      addLog(`Debounced callback executed: "${value}"`);
    }, 5000);
  };

  return (
    <div className="debounce-component">
      <div className="test-controls">
        <label>
          Input (debounced):
          <input
            type="text"
            value={input}
            onChange={handleInputChange}
            placeholder="Type to trigger debounced update..."
          />
        </label>
      </div>
      <div className="test-output">
        <p>
          <strong>Debounced Output:</strong> {output}
        </p>
      </div>
    </div>
  );
};

export const CleanupTest: React.FC = () => {
  const [componentMounted, setComponentMounted] = useState(true);
  const [logs, setLogs] = useState<string[]>([]);

  const addLog = (message: string) => {
    setLogs((prev) => [...prev, `${new Date().toLocaleTimeString()}: ${message}`]);
  };

  const mountComponent = () => {
    setComponentMounted(true);
    addLog('Mounting DebounceComponent');
  };

  const unmountComponent = () => {
    setComponentMounted(false);
    addLog('Unmounting DebounceComponent');
  };

  const clearLogs = () => {
    setLogs([]);
  };

  return (
    <div className="test-case">
      <h3>⚡ Cleanup Test</h3>
      <p>Test that debounced functions are properly cleaned up when components unmount.</p>
      <p>
        <em>Type in the input, then unmount the component before the 5s delay expires.</em>
      </p>
      <p>
        <em>The debounced function is called with console.log after 5 seconds.</em>
      </p>

      <div className="test-controls">
        <button onClick={mountComponent} disabled={componentMounted}>
          {componentMounted ? 'Component Mounted' : 'Mount Component'}
        </button>
        <button onClick={unmountComponent} disabled={!componentMounted}>
          {!componentMounted ? 'Component Unmounted' : 'Unmount Component'}
        </button>
        <button onClick={clearLogs}>Clear Logs</button>
      </div>

      <div className="component-container">
        {componentMounted && <DebounceComponent addLog={addLog} />}
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
