import { createSignal } from 'solid-js';
import { createDebounce } from 'use-simple-debounce/solid';

interface SearchResult {
  query: string;
  results: string[];
}

export function APITest() {
  const [query, setQuery] = createSignal('');
  const [results, setResults] = createSignal<SearchResult | null>(null);
  const [loading, setLoading] = createSignal(false);
  const [logs, setLogs] = createSignal<string[]>([]);

  const addLog = (message: string) => {
    setLogs((prev) => [...prev, `${new Date().toLocaleTimeString()}: ${message}`]);
  };

  // Mock API function
  const mockAPI = async (searchQuery: string): Promise<SearchResult> => {
    addLog(`API call started for: "${searchQuery}"`);
    await new Promise((resolve) => setTimeout(resolve, 800)); // Simulate network delay

    // Mock search results
    const mockResults = [
      `${searchQuery} result 1`,
      `${searchQuery} result 2`,
      `${searchQuery} result 3`,
    ];

    return { query: searchQuery, results: mockResults };
  };

  const debounced = createDebounce();

  const handleInputChange = (e: Event) => {
    const target = e.target as HTMLInputElement;
    const value = target.value;
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
    <div class="test-case">
      <h3>⚡ API Simulation Test</h3>
      <p>Test debouncing with simulated API calls (search functionality).</p>

      <div class="test-controls">
        <label>
          Search:
          <input
            type="text"
            value={query()}
            onInput={handleInputChange}
            placeholder="Type to search..."
          />
        </label>
      </div>

      <div class="test-output">
        {results() && (
          <div>
            <p>
              <strong>Search Results for "{results()!.query}":</strong>
            </p>
            <ul>
              {results()!.results.map((result) => (
                <li>{result}</li>
              ))}
            </ul>
          </div>
        )}
        {loading() && (
          <p>
            <strong>Loading...</strong>
          </p>
        )}
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
