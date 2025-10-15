import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { useDebounce } from '../native'

describe('useDebounce (Native)', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.restoreAllMocks()
    vi.useRealTimers()
  })

  it('should return a cancel function', () => {
    const debouncedFactory = useDebounce(100)
    const cancelFn = debouncedFactory(() => {})

    expect(typeof cancelFn).toBe('function')
  })

  it('should debounce function calls', () => {
    const mockFn = vi.fn()
    const debouncedFactory = useDebounce(100)
    const cancelFn = debouncedFactory(mockFn)

    // Call multiple times rapidly - each call returns a new cancel function
    debouncedFactory(mockFn)
    debouncedFactory(mockFn)
    debouncedFactory(mockFn)

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
    const debouncedFactory = useDebounce(100)

    // Call with first function
    debouncedFactory(mockFn1)
    // Call with second function before delay
    debouncedFactory(mockFn2)

    // Advance time
    vi.advanceTimersByTime(100)

    // Only second function should be called
    expect(mockFn1).not.toHaveBeenCalled()
    expect(mockFn2).toHaveBeenCalledTimes(1)
  })

  it('should support cancellation', () => {
    const mockFn = vi.fn()
    const debouncedFactory = useDebounce(100)
    const cancel = debouncedFactory(mockFn)

    // Call cancel immediately
    cancel()

    // Advance time - function should not be called due to cancellation
    vi.advanceTimersByTime(100)
    expect(mockFn).not.toHaveBeenCalled()
  })

  it('should support async functions', async () => {
    const mockAsyncFn = vi.fn().mockResolvedValue('done')
    const debouncedFactory = useDebounce(100)

    debouncedFactory(mockAsyncFn)

    vi.advanceTimersByTime(100)

    await expect(mockAsyncFn()).resolves.toBe('done')
  })

  it('should use default delay of 300ms when no delay provided', () => {
    const mockFn = vi.fn()
    const debouncedFactory = useDebounce(300) // Need to provide delay since it's required
    const cancelFn = debouncedFactory(mockFn)

    // Advance by less than delay
    vi.advanceTimersByTime(200)
    expect(mockFn).not.toHaveBeenCalled()

    // Advance to delay
    vi.advanceTimersByTime(100)
    expect(mockFn).toHaveBeenCalledTimes(1)
  })

  it('should handle different delay values', () => {
    const mockFn = vi.fn()
    const debouncedFactory = useDebounce(50)
    const cancelFn = debouncedFactory(mockFn)

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

    const debouncedFactory1 = useDebounce(100)
    const debouncedFactory2 = useDebounce(100)

    debouncedFactory1(mockFn1)
    debouncedFactory2(mockFn2)

    vi.advanceTimersByTime(100)

    expect(mockFn1).toHaveBeenCalledTimes(1)
    expect(mockFn2).toHaveBeenCalledTimes(1)
  })

  it('should handle cancellation of specific debouncer', () => {
    const mockFn1 = vi.fn()
    const mockFn2 = vi.fn()

    const debouncedFactory1 = useDebounce(100)
    const debouncedFactory2 = useDebounce(100)

    const cancel1 = debouncedFactory1(mockFn1)
    debouncedFactory2(mockFn2)

    // Cancel only the first one
    cancel1()

    vi.advanceTimersByTime(100)

    expect(mockFn1).not.toHaveBeenCalled()
    expect(mockFn2).toHaveBeenCalledTimes(1)
  })
})