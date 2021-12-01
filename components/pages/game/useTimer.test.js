import { renderHook, act } from '@testing-library/react-hooks';
import useTimer from './useTimer';

describe('useTimer', () => {
  let originalPerformanceNow;
  let msPassed;
  beforeAll(() => {
    jest.useFakeTimers();
    originalPerformanceNow = window.performance.now;
    window.performance.now = () => msPassed;
  });

  afterAll(() => {
    jest.useRealTimers();
    window.performance.now = originalPerformanceNow;
  });

  beforeEach(() => {
    msPassed = 0;
  });

  it('returns left seconds', async () => {
    const { result } = renderHook(() => useTimer(10));

    expect(result.current).toBe(10);
    act(() => {
      msPassed = 999;
      jest.advanceTimersByTime(999);
    });
    expect(result.current).toBe(10);
    act(() => {
      msPassed = 1001;
      jest.advanceTimersByTime(2);
    });
    expect(result.current).toBe(9);

    // check if it can't be less than 0
    act(() => {
      msPassed = 999999;
      jest.advanceTimersByTime(999999);
    });
    expect(result.current).toBe(0);
  });

  it('calls callback', () => {
    const cb = jest.fn();
    renderHook(() => useTimer(1, cb));

    msPassed = 999;
    act(() => {
      jest.advanceTimersByTime(999);
    });
    expect(cb).not.toHaveBeenCalled();

    msPassed = 1000;
    act(() => {
      jest.advanceTimersByTime(1);
    });
    expect(cb).toHaveBeenCalledTimes(1);

    // wait for another 10 secs and check that callback will NOT be called one more time
    while (msPassed < 20000) {
      msPassed += 1;
      act(() => {
        jest.advanceTimersByTime(1);
      });
    }
    expect(cb).toHaveBeenCalledTimes(1);
  });

  it('handles time freeze', () => {
    const cb = jest.fn();
    const { result } = renderHook(() => useTimer(5, cb));

    act(() => {
      msPassed = 5000;
      jest.advanceTimersByTime(1000);
    });

    expect(result.current).toBe(0);
    expect(cb).toHaveBeenCalledTimes(1);
  });
});
