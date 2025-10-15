import React, { useState } from 'react';
import { useDebounce } from 'use-simple-debounce';

interface SearchResult {
  query: string;
  results: string[];
}

export const APITest: React.FC = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult | null>(null);
  const [loading, setLoading] = useState(false);
  const [logs, setLogs] = useState<string[]>([]);

  const addLog = (message: string) => {
    setLogs(prev => [...prev, `${new Date().toLocaleTimeString()}: ${message}`]);
  };

  // Mock API function
  const mockAPI = async (searchQuery: string): Promise<SearchResult> => {
    addLog(`API call started for: "${searchQuery}"`);
    await new Promise(resolve => setTimeout(resolve, 800)); // Simulate network delay

    // Mock search results
    const mockResults = [
      `${searchQuery} result 1`,
      `${searchQuery} result 2`,
      `${searchQuery} result 3`,
    ];

    return { query: searchQuery, results: mockResults };
  };

  const debounced = useDebounce();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    addLog(`Search query changed: "${value}"`);
    debounced(async () => {
      if (!value.trim()) {
        setResults(null);
        return;
      }

      setLoading(true);
      try {
        const searchResults = await mockAPI(value);
        setResults(searchResults);
        addLog(`API call completed for: "${value}"`);
      } catch (error) {
        addLog(`API call failed: ${error}`);
      } finally {
        setLoading(false);
      }
    }, 300);
  };

  return (
    <div className="test-case">
      <h3>⚡ API Simulation Test</h3>
      <p>Test debouncing with simulated API calls (search functionality).</p>

      <div className="test-controls">
        <label>
          Search:
          <input
            type="text"
            value={query}
            onChange={handleInputChange}
            placeholder="Type to search..."
          />
        </label>
        {loading && <span className="loading">Searching...</span>}
      </div>

      <div className="test-output">
        {results && (
          <div>
            <p><strong>Search Results for "{results.query}":</strong></p>
            <ul>
              {results.results.map((result, index) => (
                <li key={index}>{result}</li>
              ))}
            </ul>
          </div>
        )}
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