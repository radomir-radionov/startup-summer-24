'use client';

import { useRef } from 'react';

const useDebounce = (
  func: (value: string, param: string) => void,
  delay: number
) => {
  const debounceTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  return (...args: [string, string]) => {
    if (debounceTimeoutRef.current) {
      clearTimeout(debounceTimeoutRef.current);
    }

    debounceTimeoutRef.current = setTimeout(() => {
      func(...args);
    }, delay);
  };
};

export default useDebounce;
