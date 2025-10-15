import { useDebounce } from 'use-simple-debounce/vanilla';

export function createAPITest(container: HTMLElement) {
  const input = document.createElement('input');
  input.type = 'text';
  input.placeholder = 'Type to search...';

  const resultsDiv = document.createElement('div');
  const loadingSpan = document.createElement('span');
  loadingSpan.className = 'loading';
  loadingSpan.textContent = 'Searching...';
  loadingSpan.style.display = 'none';

  const logsContainer = document.createElement('div');
  logsContainer.className = 'logs-container';

  let results: { query: string; results: string[] } | null = null;
  let loading = false;
  const logs: string[] = [];

  function addLog(message: string) {
    logs.push(`${new Date().toLocaleTimeString()}: ${message}`);
    logsContainer.innerHTML = logs.map(log => `<div class="log-entry">${log}</div>`).join('');
  }

  // Mock API function
  async function mockAPI(searchQuery: string) {
    addLog(`API call started for: "${searchQuery}"`);
    await new Promise(resolve => setTimeout(resolve, 800)); // Simulate network delay

    // Mock search results
    const mockResults = [
      `${searchQuery} result 1`,
      `${searchQuery} result 2`,
      `${searchQuery} result 3`,
    ];

    return { query: searchQuery, results: mockResults };
  }

  const debounced = useDebounce();

  input.addEventListener('input', (e) => {
    const target = e.target as HTMLInputElement;
    const value = target.value;
    addLog(`Search query changed: "${value}"`);
    debounced(async () => {
      if (!value.trim()) {
        results = null;
        updateResults();
        return;
      }

      loading = true;
      updateLoading();
      try {
        results = await mockAPI(value);
        addLog(`API call completed for: "${value}"`);
      } catch (error) {
        addLog(`API call failed: ${error}`);
      } finally {
        loading = false;
        updateLoading();
        updateResults();
      }
    }, 300);
  });

  function updateResults() {
    if (results) {
      resultsDiv.innerHTML = `
        <p><strong>Search Results for "${results.query}":</strong></p>
        <ul>
          ${results.results.map(result => `<li>${result}</li>`).join('')}
        </ul>
      `;
    } else {
      resultsDiv.innerHTML = '';
    }
  }

  function updateLoading() {
    loadingSpan.style.display = loading ? 'inline' : 'none';
  }

  const testCase = document.createElement('div');
  testCase.className = 'test-case';
  testCase.innerHTML = `
    <h3>⚡ API Simulation Test</h3>
    <p>Test debouncing with simulated API calls (search functionality).</p>
    <div class="test-controls">
      <label>
        Search:
      </label>
    </div>
    <div class="test-output">
    </div>
    <div class="test-logs">
      <h4>Logs:</h4>
    </div>
  `;

  const label = testCase.querySelector('label')!;
  label.appendChild(input);
  label.appendChild(loadingSpan);

  const outputDiv = testCase.querySelector('.test-output')!;
  outputDiv.appendChild(resultsDiv);

  const logsDiv = testCase.querySelector('.test-logs')!;
  logsDiv.appendChild(logsContainer);

  container.appendChild(testCase);
}