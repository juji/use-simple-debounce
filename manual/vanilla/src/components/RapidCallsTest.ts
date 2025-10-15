import { useDebounce } from 'use-simple-debounce/vanilla';

export function createRapidCallsTest(container: HTMLElement) {
  const triggerButton = document.createElement('button');
  triggerButton.type = 'button';
  triggerButton.textContent = 'Trigger Rapid Calls';

  const resetButton = document.createElement('button');
  resetButton.type = 'button';
  resetButton.textContent = 'Reset';

  const immediateCount = document.createElement('p');
  immediateCount.textContent = 'Immediate Count: 0';

  const debouncedCount = document.createElement('p');
  debouncedCount.textContent = 'Debounced Count: 0';

  const logsContainer = document.createElement('div');
  logsContainer.className = 'logs-container';

  let count = 0;
  let debouncedValue = 0;
  const logs: string[] = [];

  function addLog(message: string) {
    logs.push(`${new Date().toLocaleTimeString()}: ${message}`);
    logsContainer.innerHTML = logs.map(log => `<div class="log-entry">${log}</div>`).join('');
  }

  const debounced = useDebounce();

  triggerButton.addEventListener('click', () => {
    for (let i = 0; i < 10; i++) {
      setTimeout(() => {
        count += 1;
        immediateCount.textContent = `Immediate Count: ${count}`;
        addLog(`Immediate count: ${count}`);
        debounced(() => {
          debouncedValue = count;
          debouncedCount.textContent = `Debounced Count: ${debouncedValue}`;
          addLog(`Debounced count: ${count}`);
        }, 300);
      }, i * 50); // Call every 50ms
    }
  });

  resetButton.addEventListener('click', () => {
    count = 0;
    debouncedValue = 0;
    immediateCount.textContent = 'Immediate Count: 0';
    debouncedCount.textContent = 'Debounced Count: 0';
    logs.length = 0;
    logsContainer.innerHTML = '';
  });

  const testCase = document.createElement('div');
  testCase.className = 'test-case';
  testCase.innerHTML = `
    <h3>⚡ Rapid Calls Test</h3>
    <p>Test debouncing with rapid successive calls (10 calls in 500ms).</p>
    <div class="test-controls">
    </div>
    <div class="test-output">
    </div>
    <div class="test-logs">
      <h4>Logs:</h4>
    </div>
  `;

  const controlsDiv = testCase.querySelector('.test-controls')!;
  controlsDiv.appendChild(triggerButton);
  controlsDiv.appendChild(resetButton);

  const outputDiv = testCase.querySelector('.test-output')!;
  outputDiv.appendChild(immediateCount);
  outputDiv.appendChild(debouncedCount);

  const logsDiv = testCase.querySelector('.test-logs')!;
  logsDiv.appendChild(logsContainer);

  container.appendChild(testCase);
}