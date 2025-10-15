import { createSignal, onMount, onCleanup } from 'solid-js';
import { createDebounce } from 'use-simple-debounce/solid';

// Component that uses debounce - this will be mounted/unmounted
function DebounceComponent(props: { addLog: (msg: string) => void }) {
  const [input, setInput] = createSignal('');
  const [output, setOutput] = createSignal('');

  const debounced = createDebounce();

  onMount(() => {
    props.addLog('DebounceComponent mounted');
  });

  onCleanup(() => {
    props.addLog(
      'DebounceComponent unmounting - cleanup should prevent pending debounced callbacks'
    );
  });

  const handleInputChange = (e: Event) => {
    const target = e.target as HTMLInputElement;
    const value = target.value;
    setInput(value);
    props.addLog(`Input changed: "${value}"`);
    debounced(() => {
      console.log('Debounced callback executed');
      setOutput(value);
      props.addLog(`Debounced callback executed: "${value}"`);
    }, 5000);
  };

  return (
    <div class="debounce-component">
      <div class="test-controls">
        <label>
          Input (debounced):
          <input
            type="text"
            value={input()}
            onInput={handleInputChange}
            placeholder="Type to trigger debounced update..."
          />
        </label>
      </div>
      <div class="test-output">
        <p>
          <strong>Debounced Output:</strong> {output()}
        </p>
      </div>
    </div>
  );
}

export function CleanupTest() {
  const [componentMounted, setComponentMounted] = createSignal(true);
  const [logs, setLogs] = createSignal<string[]>([]);

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
    <div class="test-case">
      <h3>⚡ Cleanup Test</h3>
      <p>Test that debounced functions are properly cleaned up when components unmount.</p>
      <p>
        <em>Type in the input, then unmount the component before the 5s delay expires.</em>
      </p>
      <p>
        <em>The debounced function is called with console.log after 5 seconds.</em>
      </p>

      <div class="test-controls">
        <button onClick={mountComponent} disabled={componentMounted()}>
          {componentMounted() ? 'Component Mounted' : 'Mount Component'}
        </button>
        <button onClick={unmountComponent} disabled={!componentMounted()}>
          {!componentMounted() ? 'Component Unmounted' : 'Unmount Component'}
        </button>
        <button onClick={clearLogs}>Clear Logs</button>
      </div>

      <div class="component-container">
        {componentMounted() && <DebounceComponent addLog={addLog} />}
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
