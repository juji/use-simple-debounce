import { useState } from 'preact/hooks';
import { useDebounce } from 'use-simple-debounce/preact';

export function APITest() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [logs, setLogs] = useState<string[]>([]);

  const addLog = (message: string) => {
    setLogs(prev => [...prev, `${new Date().toLocaleTimeString()}: ${message}`]);
  };

  const debounced = useDebounce();

  const performSearch = async (searchQuery: string) => {
    if (!searchQuery.trim()) {
      setResults([]);
      return;
    }

    setLoading(true);
    addLog(`Searching for: "${searchQuery}"`);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 500));

      // Mock results
      const mockResults = [
        `${searchQuery} result 1`,
        `${searchQuery} result 2`,
        `${searchQuery} result 3`
      ];

      setResults(mockResults);
      addLog(`Found ${mockResults.length} results`);
    } catch (error) {
      addLog(`Search failed: ${error}`);
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e: Event) => {
    const target = e.target as HTMLInputElement;
    const value = target.value;
    setQuery(value);
    debounced(() => performSearch(value), 300);
  };

  return (
    <div className="test-case">
      <h3>⚡ API Simulation Test</h3>
      <p>Test debouncing with simulated API calls (300ms delay).</p>

      <div className="test-controls">
        <label>
          Search:
          <input
            type="text"
            value={query}
            onInput={handleInputChange}
            placeholder="Type to search..."
          />
        </label>
      </div>

      <div className="test-output">
        <p><strong>Loading:</strong> {loading ? 'Yes' : 'No'}</p>
        <div className="results">
          <h4>Results:</h4>
          {results.length === 0 && !loading && query && (
            <p>No results found</p>
          )}
          <ul>
            {results.map((result, index) => (
              <li key={index}>{result}</li>
            ))}
          </ul>
        </div>
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