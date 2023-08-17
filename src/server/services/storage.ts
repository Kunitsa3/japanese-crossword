export const getFromStorage = <T>(storageKey: string): T | null =>
  JSON.parse(localStorage.getItem(storageKey) || 'null');

export const setToStorage = <T>(storageKey: string, data: T) => localStorage.setItem(storageKey, JSON.stringify(data));
