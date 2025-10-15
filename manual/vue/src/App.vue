<template>
  <div class="app">
    <nav class="sidebar">
      <h2>Test Cases</h2>
      <ul>
        <li>
          <button
            :class="['test-button', { active: activeTest === 'basic' }]"
            @click="setActiveTest('basic')"
          >
            Basic Debounce
          </button>
        </li>
        <li>
          <button
            :class="['test-button', { active: activeTest === 'rapid' }]"
            @click="setActiveTest('rapid')"
          >
            Rapid Calls
          </button>
        </li>
        <li>
          <button
            :class="['test-button', { active: activeTest === 'async' }]"
            @click="setActiveTest('async')"
          >
            Async Functions
          </button>
        </li>
        <li>
          <button
            :class="['test-button', { active: activeTest === 'delay' }]"
            @click="setActiveTest('delay')"
          >
            Custom Delay
          </button>
        </li>
        <li>
          <button
            :class="['test-button', { active: activeTest === 'api' }]"
            @click="setActiveTest('api')"
          >
            API Simulation
          </button>
        </li>
        <li>
          <button
            :class="['test-button', { active: activeTest === 'cleanup' }]"
            @click="setActiveTest('cleanup')"
          >
            Cleanup Test
          </button>
        </li>
      </ul>
    </nav>

    <main class="main-content">
      <header class="page-header">
        <h1>use-simple-debounce Manual Tests</h1>
        <p>Vue Implementation</p>
      </header>
      <component :is="currentComponent" />
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import BasicTest from './components/BasicTest.vue'
import RapidCallsTest from './components/RapidCallsTest.vue'
import AsyncTest from './components/AsyncTest.vue'
import DelayTest from './components/DelayTest.vue'
import APITest from './components/APITest.vue'
import CleanupTest from './components/CleanupTest.vue'

type TestCase = 'basic' | 'rapid' | 'async' | 'delay' | 'api' | 'cleanup'

const activeTest = ref<TestCase>('basic')

const setActiveTest = (test: TestCase) => {
  activeTest.value = test
}

const currentComponent = computed(() => {
  switch (activeTest.value) {
    case 'basic':
      return BasicTest
    case 'rapid':
      return RapidCallsTest
    case 'async':
      return AsyncTest
    case 'delay':
      return DelayTest
    case 'api':
      return APITest
    case 'cleanup':
      return CleanupTest
    default:
      return BasicTest
  }
})
</script>

<style>
@import './index.css';
</style>
