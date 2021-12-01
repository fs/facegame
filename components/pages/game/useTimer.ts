import { useEffect, useRef, useState } from 'react';

const noop = () => {};

function useTimer(limit: number, cb = noop): number {
  const cbRef = useRef(cb);
  const [startTime, setStartTime] = useState(() => performance.now());
  const [currentTime, setCurrentTime] = useState(startTime);
  const differenceMs = currentTime - startTime;
  const differenceSec = differenceMs / 1000;

  useEffect(() => {
    cbRef.current = cb;
  }, [cb]);

  useEffect(() => {
    function tick() {
      setCurrentTime(performance.now());
    }

    if (differenceSec >= limit) {
      return noop;
    }

    const id = setTimeout(tick, 1000);
    return () => clearTimeout(id);
  }, [differenceSec, limit]);

  useEffect(() => {
    if (differenceSec >= limit) {
      cbRef.current();
    }
  }, [differenceSec, limit]);

  useEffect(() => {
    setStartTime(performance.now());
  }, [limit]);

  return Math.max(limit - Math.max(Math.floor(differenceSec), 0), 0);
}

export default useTimer;
