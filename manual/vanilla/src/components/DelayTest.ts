import { useDebounce } from 'use-simple-debounce/vanilla';

export function createDelayTest(container: HTMLElement) {
  const input = document.createElement('input');
  input.type = 'text';
  input.placeholder = 'Type something...';

  const delayInput = document.createElement('input');
  delayInput.type = 'number';
  delayInput.value = '1000';
  delayInput.min = '100';
  delayInput.max = '5000';
  delayInput.step = '100';

  const output = document.createElement('p');
  output.textContent = 'Output: ';

  const delayDisplay = document.createElement('p');
  delayDisplay.textContent = 'Current Delay: 1000ms';

  const logsContainer = document.createElement('div');
  logsContainer.className = 'logs-container';

  let delay = 1000;
  const logs: string[] = [];

  function addLog(message: string) {
    logs.push(`${new Date().toLocaleTimeString()}: ${message}`);
    logsContainer.innerHTML = logs.map((log) => `<div class="log-entry">${log}</div>`).join('');
  }

  const debounced = useDebounce();

  input.addEventListener('input', (e) => {
    const target = e.target as HTMLInputElement;
    const value = target.value;
    addLog(`Input changed: "${value}"`);
    debounced(() => {
      output.textContent = `Output: ${value}`;
      addLog(`Debounced update: "${value}"`);
    }, delay);
  });

  delayInput.addEventListener('input', (e) => {
    const target = e.target as HTMLInputElement;
    delay = Number(target.value);
    delayDisplay.textContent = `Current Delay: ${delay}ms`;
  });

  const testCase = document.createElement('div');
  testCase.className = 'test-case';
  testCase.innerHTML = `
    <h3>⚡ Custom Delay Test</h3>
    <p>Test debouncing with adjustable delay.</p>
    <div class="test-controls">
      <label>
        Delay (ms):
      </label>
      <br />
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

  const labels = testCase.querySelectorAll('label');
  const delayLabel = labels[0];
  const inputLabel = labels[1];

  delayLabel.appendChild(delayInput);
  inputLabel.appendChild(input);

  const outputDiv = testCase.querySelector('.test-output')!;
  outputDiv.appendChild(output);
  outputDiv.appendChild(delayDisplay);

  const logsDiv = testCase.querySelector('.test-logs')!;
  logsDiv.appendChild(logsContainer);

  container.appendChild(testCase);
}
