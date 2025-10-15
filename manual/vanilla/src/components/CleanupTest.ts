import { useDebounce } from 'use-simple-debounce/vanilla';

export function createCleanupTest(container: HTMLElement) {
  const mountButton = document.createElement('button');
  mountButton.type = 'button';
  mountButton.textContent = 'Mount Component';

  const unmountButton = document.createElement('button');
  unmountButton.type = 'button';
  unmountButton.textContent = 'Unmount Component';
  unmountButton.disabled = true;

  const clearButton = document.createElement('button');
  clearButton.type = 'button';
  clearButton.textContent = 'Clear Logs';

  const componentContainer = document.createElement('div');
  componentContainer.className = 'component-container';

  const logsContainer = document.createElement('div');
  logsContainer.className = 'logs-container';

  let componentMounted = false;
  let cancelFn: (() => void) | null = null;
  const logs: string[] = [];

  function addLog(message: string) {
    logs.push(`${new Date().toLocaleTimeString()}: ${message}`);
    logsContainer.innerHTML = logs.map((log) => `<div class="log-entry">${log}</div>`).join('');
  }

  function createDebounceComponent() {
    const component = document.createElement('div');
    component.className = 'debounce-component';

    const input = document.createElement('input');
    input.type = 'text';
    input.placeholder = 'Type to trigger debounced update...';

    const output = document.createElement('p');
    output.textContent = 'Debounced Output: ';

    const label = document.createElement('label');
    label.textContent = 'Input (debounced): ';
    label.appendChild(input);

    const controls = document.createElement('div');
    controls.className = 'test-controls';
    controls.appendChild(label);

    const outputDiv = document.createElement('div');
    outputDiv.className = 'test-output';
    outputDiv.appendChild(output);

    component.appendChild(controls);
    component.appendChild(outputDiv);

    const debounced = useDebounce();

    input.addEventListener('input', (e) => {
      const target = e.target as HTMLInputElement;
      const value = target.value;
      addLog(`Input changed: "${value}"`);
      cancelFn = debounced(() => {
        console.log('Debounced callback executed');
        output.textContent = `Debounced Output: ${value}`;
        addLog(`Debounced callback executed: "${value}"`);
      }, 5000);
    });

    return { component, input, output };
  }

  function mountComponent() {
    if (componentMounted) return;

    addLog('Mounting DebounceComponent');
    componentMounted = true;
    mountButton.disabled = true;
    unmountButton.disabled = false;

    const { component } = createDebounceComponent();
    componentContainer.appendChild(component);
  }

  function unmountComponent() {
    if (!componentMounted) return;

    addLog('Unmounting DebounceComponent');
    componentMounted = false;
    mountButton.disabled = false;
    unmountButton.disabled = true;

    // Cancel any pending debounced calls
    if (cancelFn) {
      cancelFn();
      cancelFn = null;
    }

    componentContainer.innerHTML = '';
  }

  mountButton.addEventListener('click', mountComponent);
  unmountButton.addEventListener('click', unmountComponent);
  clearButton.addEventListener('click', () => {
    logs.length = 0;
    logsContainer.innerHTML = '';
  });

  const testCase = document.createElement('div');
  testCase.className = 'test-case';
  testCase.innerHTML = `
    <h3>⚡ Cleanup Test</h3>
    <p>Test that debounced functions are properly cleaned up when components unmount.</p>
    <p><em>Type in the input, then unmount the component before the 5s delay expires.</em></p>
    <p><em>The debounced function is called with console.log after 5 seconds.</em></p>
    <div class="test-controls">
    </div>
    <div class="component-container">
    </div>
    <div class="test-logs">
      <h4>Logs:</h4>
    </div>
  `;

  const controlsDiv = testCase.querySelector('.test-controls')!;
  controlsDiv.appendChild(mountButton);
  controlsDiv.appendChild(unmountButton);
  controlsDiv.appendChild(clearButton);

  const containerDiv = testCase.querySelector('.component-container')!;
  containerDiv.appendChild(componentContainer);

  const logsDiv = testCase.querySelector('.test-logs')!;
  logsDiv.appendChild(logsContainer);

  container.appendChild(testCase);
}
