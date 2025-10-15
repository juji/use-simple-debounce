import { useDebounce } from 'use-simple-debounce/vanilla';

export function createBasicTest(container: HTMLElement) {
  const input = document.createElement('input');
  input.type = 'text';
  input.placeholder = 'Type something...';

  const output = document.createElement('p');
  output.textContent = 'Output: ';

  const logsContainer = document.createElement('div');
  logsContainer.className = 'logs-container';

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
    }, 500);
  });

  const testCase = document.createElement('div');
  testCase.className = 'test-case';

  // Create header
  const header = document.createElement('h3');
  header.textContent = '⚡ Basic Debounce Test';
  testCase.appendChild(header);

  const description = document.createElement('p');
  description.textContent = 'Test basic debouncing with a 500ms delay.';
  testCase.appendChild(description);

  // Create controls
  const controlsDiv = document.createElement('div');
  controlsDiv.className = 'test-controls';

  const label = document.createElement('label');
  label.textContent = 'Input:';
  label.appendChild(input);
  controlsDiv.appendChild(label);
  testCase.appendChild(controlsDiv);

  // Create output
  const outputDiv = document.createElement('div');
  outputDiv.className = 'test-output';
  outputDiv.appendChild(output);
  testCase.appendChild(outputDiv);

  // Create logs
  const logsDiv = document.createElement('div');
  logsDiv.className = 'test-logs';

  const logsHeader = document.createElement('h4');
  logsHeader.textContent = 'Logs:';
  logsDiv.appendChild(logsHeader);
  logsDiv.appendChild(logsContainer);
  testCase.appendChild(logsDiv);

  container.appendChild(testCase);
}
