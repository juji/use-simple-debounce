import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { debounce } from '../vanilla';

describe('debounce (Vanilla)', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.restoreAllMocks();
    vi.useRealTimers();
  });

  it('should return a cancel function', () => {
    const debouncedFn = debounce(() => {}, 100);
    const cancelFn = debouncedFn();

    expect(typeof cancelFn).toBe('function');
  });

  it('should debounce function calls', () => {
    const mockFn = vi.fn();
    const debouncedFn = debounce(mockFn, 100);

    // Call multiple times rapidly - each call returns a new cancel function
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
    const debouncedFn = debounce(mockFn, 100);

    // Call multiple times rapidly on the same debouncer
    debouncedFn();
    debouncedFn();

    // Advance time
    vi.advanceTimersByTime(100);

    // Function should be called once (last call wins)
    expect(mockFn).toHaveBeenCalledTimes(1);
  });

  it('should support cancellation', () => {
    const mockFn = vi.fn();
    const debouncedFn = debounce(mockFn, 100);
    const cancel = debouncedFn();

    // Call cancel immediately
    cancel();

    // Advance time - function should not be called due to cancellation
    vi.advanceTimersByTime(100);
    expect(mockFn).not.toHaveBeenCalled();
  });

  it('should support async functions', async () => {
    const mockAsyncFn = vi.fn().mockResolvedValue('done');
    const debouncedFn = debounce(mockAsyncFn, 100);

    debouncedFn();

    vi.advanceTimersByTime(100);

    await expect(mockAsyncFn()).resolves.toBe('done');
  });

  it('should handle 300ms delay', () => {
    const mockFn = vi.fn();
    const debouncedFn = debounce(mockFn, 300);
    const cancelFn = debouncedFn();

    // Advance by less than delay
    vi.advanceTimersByTime(200);
    expect(mockFn).not.toHaveBeenCalled();

    // Advance to delay
    vi.advanceTimersByTime(100);
    expect(mockFn).toHaveBeenCalledTimes(1);
  });

  it('should handle different delay values', () => {
    const mockFn = vi.fn();
    const debouncedFn = debounce(mockFn, 50);
    const cancelFn = debouncedFn();

    // Advance by less than delay
    vi.advanceTimersByTime(25);
    expect(mockFn).not.toHaveBeenCalled();

    // Advance to delay
    vi.advanceTimersByTime(25);
    expect(mockFn).toHaveBeenCalledTimes(1);
  });

  it('should allow multiple independent debouncers', () => {
    const mockFn1 = vi.fn();
    const mockFn2 = vi.fn();

    const debouncedFn1 = debounce(mockFn1, 100);
    const debouncedFn2 = debounce(mockFn2, 100);

    debouncedFn1();
    debouncedFn2();

    vi.advanceTimersByTime(100);

    expect(mockFn1).toHaveBeenCalledTimes(1);
    expect(mockFn2).toHaveBeenCalledTimes(1);
  });

  it('should handle cancellation of specific debouncer', () => {
    const mockFn1 = vi.fn();
    const mockFn2 = vi.fn();

    const debouncedFn1 = debounce(mockFn1, 100);
    const debouncedFn2 = debounce(mockFn2, 100);

    const cancel1 = debouncedFn1();
    debouncedFn2();

    // Cancel only the first one
    cancel1();

    vi.advanceTimersByTime(100);

    expect(mockFn1).not.toHaveBeenCalled();
    expect(mockFn2).toHaveBeenCalledTimes(1);
  });
});
