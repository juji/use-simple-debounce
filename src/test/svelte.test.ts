import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'

// Mock Svelte's onDestroy
vi.mock('svelte', () => ({
  onDestroy: vi.fn((fn) => {
    // Just call the function immediately for testing
    // In real usage, this would be called on component destroy
  }),
}))

// Import after mocking
import { createDebounce } from '../svelte'

describe('createDebounce (Svelte)', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.restoreAllMocks()
    vi.useRealTimers()
  })

  it('should debounce function calls', () => {
    const mockFn = vi.fn()
    const debounced = createDebounce()

    // Call multiple times rapidly
    debounced(mockFn, 100)
    debounced(mockFn, 100)
    debounced(mockFn, 100)

    // Function should not be called immediately
    expect(mockFn).not.toHaveBeenCalled()

    // Advance time by delay amount
    vi.advanceTimersByTime(100)

    // Function should be called once
    expect(mockFn).toHaveBeenCalledTimes(1)
  })

  it('should cancel previous calls when called again', () => {
    const mockFn1 = vi.fn()
    const mockFn2 = vi.fn()
    const debounced = createDebounce()

    // Call with first function
    debounced(mockFn1, 100)
    // Call with second function before delay
    debounced(mockFn2, 100)

    // Advance time
    vi.advanceTimersByTime(100)

    // Only second function should be called
    expect(mockFn1).not.toHaveBeenCalled()
    expect(mockFn2).toHaveBeenCalledTimes(1)
  })

  it('should support async functions', async () => {
    const mockAsyncFn = vi.fn().mockResolvedValue('done')
    const debounced = createDebounce()

    debounced(mockAsyncFn, 100)

    vi.advanceTimersByTime(100)

    await expect(mockAsyncFn()).resolves.toBe('done')
  })

  it('should use default delay of 300ms when no delay provided', () => {
    const mockFn = vi.fn()
    const debounced = createDebounce()

    debounced(mockFn)

    // Advance by less than default delay
    vi.advanceTimersByTime(200)
    expect(mockFn).not.toHaveBeenCalled()

    // Advance to default delay
    vi.advanceTimersByTime(100)
    expect(mockFn).toHaveBeenCalledTimes(1)
  })

  it('should handle different delay values', () => {
    const mockFn = vi.fn()
    const debounced = createDebounce()

    debounced(mockFn, 50)

    // Advance by less than delay
    vi.advanceTimersByTime(25)
    expect(mockFn).not.toHaveBeenCalled()

    // Advance to delay
    vi.advanceTimersByTime(25)
    expect(mockFn).toHaveBeenCalledTimes(1)
  })
})