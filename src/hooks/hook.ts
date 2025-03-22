// src/hooks/hook.ts
// simple hook to fetch data from the local data.js file
// usage e.g.: const { loading, error, data } = useFetch('products');

import { useState, useEffect } from 'react';
import data from '../data/data.js';

export function useFetch<T>(key: keyof typeof data) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const [result, setResult] = useState<T | null>(null);

  useEffect(() => {
    const fetchData = () => {
      try {
        // Simulate API fetch with a timeout
        setTimeout(() => {
          if (key in data) {
            setResult(data[key] as T);
          } else {
            throw new Error(`Key "${String(key)}" not found in data`);
          }
          setLoading(false);
        }, 300);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Unknown error'));
        setLoading(false);
      }
    };

    fetchData();
  }, [key]);

  return { loading, error, data: result };
}
