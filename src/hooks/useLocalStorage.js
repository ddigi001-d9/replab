import { useState, useEffect, useCallback } from 'react';

/**
 * useLocalStorage — persistent state via window.localStorage
 * Falls back gracefully if storage is unavailable (private mode, etc).
 */
export function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    try {
      const raw = window.localStorage.getItem(key);
      return raw !== null ? JSON.parse(raw) : initialValue;
    } catch {
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch {
      // ignore storage errors (quota, private mode, etc)
    }
  }, [key, value]);

  const update = useCallback((updater) => {
    setValue(prev => (typeof updater === 'function' ? updater(prev) : updater));
  }, []);

  return [value, update];
}
