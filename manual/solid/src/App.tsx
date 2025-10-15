import { createSignal } from 'solid-js';
import './index.css';
import { BasicTest } from './components/BasicTest';
import { RapidCallsTest } from './components/RapidCallsTest';
import { AsyncTest } from './components/AsyncTest';
import { DelayTest } from './components/DelayTest';
import { APITest } from './components/APITest';
import { CleanupTest } from './components/CleanupTest';

type TestCase = 'basic' | 'rapid' | 'async' | 'delay' | 'api' | 'cleanup';

export default function App() {
  const [activeTest, setActiveTest] = createSignal<TestCase>('basic');

  const renderTestCase = () => {
    switch (activeTest()) {
      case 'basic':
        return <BasicTest />;
      case 'rapid':
        return <RapidCallsTest />;
      case 'async':
        return <AsyncTest />;
      case 'delay':
        return <DelayTest />;
      case 'api':
        return <APITest />;
      case 'cleanup':
        return <CleanupTest />;
      default:
        return <BasicTest />;
    }
  };

  return (
    <div class="app">
      <nav class="sidebar">
        <h2>Test Cases</h2>
        <ul>
          <li>
            <button
              class={`test-button ${activeTest() === 'basic' ? 'active' : ''}`}
              onClick={() => setActiveTest('basic')}
            >
              Basic Debounce
            </button>
          </li>
          <li>
            <button
              class={`test-button ${activeTest() === 'rapid' ? 'active' : ''}`}
              onClick={() => setActiveTest('rapid')}
            >
              Rapid Calls
            </button>
          </li>
          <li>
            <button
              class={`test-button ${activeTest() === 'async' ? 'active' : ''}`}
              onClick={() => setActiveTest('async')}
            >
              Async Functions
            </button>
          </li>
          <li>
            <button
              class={`test-button ${activeTest() === 'delay' ? 'active' : ''}`}
              onClick={() => setActiveTest('delay')}
            >
              Custom Delay
            </button>
          </li>
          <li>
            <button
              class={`test-button ${activeTest() === 'api' ? 'active' : ''}`}
              onClick={() => setActiveTest('api')}
            >
              API Simulation
            </button>
          </li>
          <li>
            <button
              class={`test-button ${activeTest() === 'cleanup' ? 'active' : ''}`}
              onClick={() => setActiveTest('cleanup')}
            >
              Cleanup Test
            </button>
          </li>
        </ul>
      </nav>

      <main class="main-content">
        <header class="page-header">
          <h1>use-simple-debounce Solid Manual Tests</h1>
          <p>
            <img src="/src/assets/solid-logo.svg" alt="Solid" class="framework-logo" /> SolidJS
            Implementation
          </p>
        </header>
        {renderTestCase()}
      </main>
    </div>
  );
}
