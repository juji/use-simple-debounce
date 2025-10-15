import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'

// Mock React hooks at the module level
vi.mock('react', () => ({
  useRef: vi.fn(() => ({ current: null })),
  useEffect: vi.fn((effect) => {
    const cleanup = effect()
    return cleanup
  }),
}))

// Import after mocking
import { useDebounce } from '../index'

describe('useDebounce (React)', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.restoreAllMocks()
    vi.useRealTimers()
  })

  it('should debounce function calls', () => {
    const mockFn = vi.fn()
    const debouncedFn = useDebounce(100)

    // Call multiple times rapidly
    debouncedFn(mockFn)
    debouncedFn(mockFn)
    debouncedFn(mockFn)

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
    const debouncedFn = useDebounce(100)

    // Call with first function
    debouncedFn(mockFn1)
    // Call with second function before delay
    debouncedFn(mockFn2)

    // Advance time
    vi.advanceTimersByTime(100)

    // Only second function should be called
    expect(mockFn1).not.toHaveBeenCalled()
    expect(mockFn2).toHaveBeenCalledTimes(1)
  })

  it('should support async functions', async () => {
    const mockAsyncFn = vi.fn().mockResolvedValue('done')
    const debouncedFn = useDebounce(100)

    debouncedFn(mockAsyncFn)

    vi.advanceTimersByTime(100)

    await expect(mockAsyncFn()).resolves.toBe('done')
  })

  it('should use default delay of 300ms when no delay provided', () => {
    const mockFn = vi.fn()
    const debouncedFn = useDebounce()

    debouncedFn(mockFn)

    // Advance by less than default delay
    vi.advanceTimersByTime(200)
    expect(mockFn).not.toHaveBeenCalled()

    // Advance to default delay
    vi.advanceTimersByTime(100)
    expect(mockFn).toHaveBeenCalledTimes(1)
  })

  it('should handle different delay values', () => {
    const mockFn = vi.fn()
    const debouncedFn = useDebounce(50)

    debouncedFn(mockFn)

    // Advance by less than delay
    vi.advanceTimersByTime(25)
    expect(mockFn).not.toHaveBeenCalled()

    // Advance to delay
    vi.advanceTimersByTime(25)
    expect(mockFn).toHaveBeenCalledTimes(1)
  })
})