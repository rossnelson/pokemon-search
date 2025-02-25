import { useEffect, useRef, useState } from 'react';

export const useDebounce = (value: string, delay = 500) => {
  const [debouncedValue, setDebouncedValue] = useState(value);
  const timerRef = useRef<number | null>(null);

  useEffect(() => {
    if (timerRef.current !== null) {
      clearTimeout(timerRef.current);
    }

    timerRef.current = window.setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      if (timerRef.current !== null) {
        clearTimeout(timerRef.current);
      }
    };
  }, [value, delay]);

  return debouncedValue;
};
