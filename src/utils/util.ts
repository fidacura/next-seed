// src/utils/util.ts
// simple date-formatter with optional patterns
// usage e.g.: formatDate(new Date()) -> "3/22/2025"
// usage e.g.: formatDate(new Date(), 'long') -> "Saturday, March 22, 2025"

export const formatDate = (date: Date | string | number, format: 'short' | 'long' = 'short'): string => {
  const d = new Date(date);
  
  if (format === 'short') {
    return d.toLocaleDateString();
  }
  
  return d.toLocaleDateString(undefined, {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};

