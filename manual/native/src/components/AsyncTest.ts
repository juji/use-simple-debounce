import { useDebounce } from 'use-simple-debounce/native';

export function createAsyncTest(container: HTMLElement) {
  const input = document.createElement('input');
  input.type = 'text';
  input.placeholder = 'Type to trigger async operation...';

  const result = document.createElement('p');
  result.textContent = 'Result: ';

  const loadingSpan = document.createElement('span');
  loadingSpan.className = 'loading';
  loadingSpan.textContent = 'Loading...';
  loadingSpan.style.display = 'none';

  const logsContainer = document.createElement('div');
  logsContainer.className = 'logs-container';

  let loading = false;
  const logs: string[] = [];

  function addLog(message: string) {
    logs.push(`${new Date().toLocaleTimeString()}: ${message}`);
    logsContainer.innerHTML = logs.map(log => `<div class="log-entry">${log}</div>`).join('');
  }

  const debounced = useDebounce();

  input.addEventListener('input', (e) => {
    const target = e.target as HTMLInputElement;
    const value = target.value;
    addLog(`Input changed: "${value}"`);
    debounced(async () => {
      loading = true;
      updateLoading();
      addLog(`Starting async operation for: "${value}"`);

      // Simulate async operation
      await new Promise(resolve => setTimeout(resolve, 1000));

      const processed = value.toUpperCase();
      result.textContent = `Result: ${processed}`;
      loading = false;
      updateLoading();
      addLog(`Async operation completed: "${processed}"`);
    }, 500);
  });

  function updateLoading() {
    loadingSpan.style.display = loading ? 'inline' : 'none';
  }

  const testCase = document.createElement('div');
  testCase.className = 'test-case';
  testCase.innerHTML = `
    <h3>⚡ Async Function Test</h3>
    <p>Test debouncing with async functions (simulates API call).</p>
    <div class="test-controls">
      <label>
        Input:
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
  outputDiv.appendChild(result);

  const logsDiv = testCase.querySelector('.test-logs')!;
  logsDiv.appendChild(logsContainer);

  container.appendChild(testCase);
}