import './style.css'
import {
  createBasicTest,
  createAPITest,
  createAsyncTest,
  createDelayTest,
  createRapidCallsTest,
  createCleanupTest
} from './components/index.js'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div class="app">
    <nav class="sidebar">
      <h2>Test Cases</h2>
      <ul>
        <li>
          <button class="test-button active" data-test="basic">
            Basic Debounce
          </button>
        </li>
        <li>
          <button class="test-button" data-test="rapid">
            Rapid Calls
          </button>
        </li>
        <li>
          <button class="test-button" data-test="async">
            Async Functions
          </button>
        </li>
        <li>
          <button class="test-button" data-test="delay">
            Custom Delay
          </button>
        </li>
        <li>
          <button class="test-button" data-test="api">
            API Simulation
          </button>
        </li>
        <li>
          <button class="test-button" data-test="cleanup">
            Cleanup Test
          </button>
        </li>
      </ul>
    </nav>

    <div class="main-content">
      <header class="page-header">
        <h1>use-simple-debounce Vanilla Manual Tests</h1>
        <p><img src="/src/assets/vanilla-logo.svg" alt="Vanilla JS" class="framework-logo" /> Vanilla JavaScript Implementation</p>
      </header>

      <div id="test-container">
        <!-- Test components will be inserted here -->
      </div>
    </div>
  </div>
`

// Test management
let activeTest = 'basic';
const testContainer = document.querySelector<HTMLDivElement>('#test-container')!;

function setActiveTest(testName: string) {
  // Update active button
  document.querySelectorAll('.test-button').forEach(btn => {
    btn.classList.remove('active');
  });
  document.querySelector(`[data-test="${testName}"]`)!.classList.add('active');

  // Clear current test
  testContainer.innerHTML = '';

  // Load new test
  activeTest = testName;
  loadTest(testName);
}

function loadTest(testName: string) {
  switch (testName) {
    case 'basic':
      createBasicTest(testContainer);
      break;
    case 'api':
      createAPITest(testContainer);
      break;
    case 'async':
      createAsyncTest(testContainer);
      break;
    case 'delay':
      createDelayTest(testContainer);
      break;
    case 'rapid':
      createRapidCallsTest(testContainer);
      break;
    case 'cleanup':
      createCleanupTest(testContainer);
      break;
  }
}

// Event listeners
document.addEventListener('click', (e) => {
  const target = e.target as HTMLElement;
  if (target.classList.contains('test-button')) {
    const testName = target.getAttribute('data-test');
    if (testName) {
      setActiveTest(testName);
    }
  }
});

// Load initial test
loadTest(activeTest);
