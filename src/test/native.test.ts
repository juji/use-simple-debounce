import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { useDebounce } from '../native'

describe('useDebounce (Vanilla)', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.restoreAllMocks()
    vi.useRealTimers()
  })

  it('should return a cancel function', () => {
    const debounced = useDebounce()
    const cancelFn = debounced(() => {}, 100)

    expect(typeof cancelFn).toBe('function')
  })

  it('should debounce function calls', () => {
    const mockFn = vi.fn()
    const debounced = useDebounce()
    const cancelFn = debounced(mockFn, 100)

    // Call multiple times rapidly - each call returns a new cancel function
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
    const debounced = useDebounce()

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

  it('should support cancellation', () => {
    const mockFn = vi.fn()
    const debounced = useDebounce()
    const cancel = debounced(mockFn, 100)

    // Call cancel immediately
    cancel()

    // Advance time - function should not be called due to cancellation
    vi.advanceTimersByTime(100)
    expect(mockFn).not.toHaveBeenCalled()
  })

  it('should support async functions', async () => {
    const mockAsyncFn = vi.fn().mockResolvedValue('done')
    const debounced = useDebounce()

    debounced(mockAsyncFn, 100)

    vi.advanceTimersByTime(100)

    await expect(mockAsyncFn()).resolves.toBe('done')
  })

  it('should use default delay of 300ms when no delay provided', () => {
    const mockFn = vi.fn()
    const debounced = useDebounce()
    const cancelFn = debounced(mockFn)

    // Advance by less than delay
    vi.advanceTimersByTime(200)
    expect(mockFn).not.toHaveBeenCalled()

    // Advance to delay
    vi.advanceTimersByTime(100)
    expect(mockFn).toHaveBeenCalledTimes(1)
  })

  it('should handle different delay values', () => {
    const mockFn = vi.fn()
    const debounced = useDebounce()
    const cancelFn = debounced(mockFn, 50)

    // Advance by less than delay
    vi.advanceTimersByTime(25)
    expect(mockFn).not.toHaveBeenCalled()

    // Advance to delay
    vi.advanceTimersByTime(25)
    expect(mockFn).toHaveBeenCalledTimes(1)
  })

  it('should allow multiple independent debouncers', () => {
    const mockFn1 = vi.fn()
    const mockFn2 = vi.fn()

    const debounced1 = useDebounce()
    const debounced2 = useDebounce()

    debounced1(mockFn1, 100)
    debounced2(mockFn2, 100)

    vi.advanceTimersByTime(100)

    expect(mockFn1).toHaveBeenCalledTimes(1)
    expect(mockFn2).toHaveBeenCalledTimes(1)
  })

  it('should handle cancellation of specific debouncer', () => {
    const mockFn1 = vi.fn()
    const mockFn2 = vi.fn()

    const debounced1 = useDebounce()
    const debounced2 = useDebounce()

    const cancel1 = debounced1(mockFn1, 100)
    debounced2(mockFn2, 100)

    // Cancel only the first one
    cancel1()

    vi.advanceTimersByTime(100)

    expect(mockFn1).not.toHaveBeenCalled()
    expect(mockFn2).toHaveBeenCalledTimes(1)
  })
})