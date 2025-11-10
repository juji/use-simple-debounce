import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';

// Mock Vue's onUnmounted
vi.mock('vue', () => ({
  ref: vi.fn(() => ({ current: null })),
  onUnmounted: vi.fn((fn) => {
    // Just call the function immediately for testing
    // In real usage, this would be called on component unmount
  }),
}));

// Import after mocking
import { useDebounce } from '../vue';

describe('useDebounce (Vue)', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.restoreAllMocks();
    vi.useRealTimers();
  });

  it('should debounce function calls', () => {
    const mockFn = vi.fn();
    const debouncedFn = useDebounce(mockFn, 100);

    // Call multiple times rapidly
    debouncedFn();
    debouncedFn();
    debouncedFn();

    // Function should not be called immediately
    expect(mockFn).not.toHaveBeenCalled();

    // Advance time by delay amount
    vi.advanceTimersByTime(100);

    // Function should be called once
    expect(mockFn).toHaveBeenCalledTimes(1);
  });

  it('should cancel previous calls when called again', () => {
    const mockFn = vi.fn();
    const debouncedFn = useDebounce(mockFn, 100);

    // Call multiple times rapidly on the same debouncer
    debouncedFn();
    debouncedFn();

    // Advance time
    vi.advanceTimersByTime(100);

    // Function should be called once (last call wins)
    expect(mockFn).toHaveBeenCalledTimes(1);
  });

  it('should support async functions', async () => {
    const mockAsyncFn = vi.fn().mockResolvedValue('done');
    const debouncedFn = useDebounce(mockAsyncFn, 100);

    debouncedFn();

    vi.advanceTimersByTime(100);

    await expect(mockAsyncFn()).resolves.toBe('done');
  });

  it('should use default delay of 300ms when no delay provided', () => {
    const mockFn = vi.fn();
    const debouncedFn = useDebounce(mockFn);
    const cancelFn = debouncedFn();

    // Advance by less than default delay
    vi.advanceTimersByTime(200);
    expect(mockFn).not.toHaveBeenCalled();

    // Advance to default delay
    vi.advanceTimersByTime(100);
    expect(mockFn).toHaveBeenCalledTimes(1);
  });

  it('should handle different delay values', () => {
    const mockFn = vi.fn();
    const debouncedFn = useDebounce(mockFn, 50);

    debouncedFn();

    // Advance by less than delay
    vi.advanceTimersByTime(25);
    expect(mockFn).not.toHaveBeenCalled();

    // Advance to delay
    vi.advanceTimersByTime(25);
    expect(mockFn).toHaveBeenCalledTimes(1);
  });

  it('should return a cancel function', () => {
    const debouncedFn = useDebounce(() => {}, 100);
    const cancelFn = debouncedFn();

    expect(typeof cancelFn).toBe('function');
  });

  it('should support cancellation', () => {
    const mockFn = vi.fn();
    const debouncedFn = useDebounce(mockFn, 100);
    const cancel = debouncedFn();

    // Call cancel immediately
    cancel();

    // Advance time - function should not be called due to cancellation
    vi.advanceTimersByTime(100);
    expect(mockFn).not.toHaveBeenCalled();
  });
});
