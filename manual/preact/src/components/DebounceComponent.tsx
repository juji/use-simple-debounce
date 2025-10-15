import { useState } from 'preact/hooks';
import { useDebounce } from 'use-simple-debounce/preact';

interface Props {
  addLog: (message: string) => void;
}

export function DebounceComponent({ addLog }: Props) {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');

  const debounced = useDebounce();

  const handleInputChange = (e: Event) => {
    const target = e.target as HTMLInputElement;
    const value = target.value;
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
            onInput={handleInputChange}
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
}
