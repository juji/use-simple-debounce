<script lang="ts">
  import BasicTest from '../components/BasicTest.svelte'
  import RapidCallsTest from '../components/RapidCallsTest.svelte'
  import AsyncTest from '../components/AsyncTest.svelte'
  import DelayTest from '../components/DelayTest.svelte'
  import APITest from '../components/APITest.svelte'
  import CleanupTest from '../components/CleanupTest.svelte'

  let activeTest = $state('basic')

  function setActiveTest(test: string) {
    activeTest = test
  }
</script>

<main class="app">
  <nav class="sidebar">
    <h2>Test Cases</h2>
    <ul>
      <li>
        <button
          class="test-button"
          class:active={activeTest === 'basic'}
          onclick={() => setActiveTest('basic')}
        >
          Basic Debounce
        </button>
      </li>
      <li>
        <button
          class="test-button"
          class:active={activeTest === 'rapid'}
          onclick={() => setActiveTest('rapid')}
        >
          Rapid Calls
        </button>
      </li>
      <li>
        <button
          class="test-button"
          class:active={activeTest === 'async'}
          onclick={() => setActiveTest('async')}
        >
          Async Functions
        </button>
      </li>
      <li>
        <button
          class="test-button"
          class:active={activeTest === 'delay'}
          onclick={() => setActiveTest('delay')}
        >
          Custom Delay
        </button>
      </li>
      <li>
        <button
          class="test-button"
          class:active={activeTest === 'api'}
          onclick={() => setActiveTest('api')}
        >
          API Simulation
        </button>
      </li>
      <li>
        <button
          class="test-button"
          class:active={activeTest === 'cleanup'}
          onclick={() => setActiveTest('cleanup')}
        >
          Cleanup Test
        </button>
      </li>
    </ul>
  </nav>

  <div class="main-content">
    <header class="page-header">
      <h1>use-simple-debounce Manual Tests</h1>
      <p>Svelte 5 Implementation</p>
    </header>

    {#if activeTest === 'basic'}
      <BasicTest />
    {:else if activeTest === 'rapid'}
      <RapidCallsTest />
    {:else if activeTest === 'async'}
      <AsyncTest />
    {:else if activeTest === 'delay'}
      <DelayTest />
    {:else if activeTest === 'api'}
      <APITest />
    {:else if activeTest === 'cleanup'}
      <CleanupTest />
    {:else}
      <BasicTest />
    {/if}
  </div>
</main>
