export let store: any = {};

export const localStorageMock = {
  getItem(key: string) {
    return store[key];
  },

  setItem(key: string, value: string) {
    store[key] = value;
  },

  clear() {
    store = {};
  },

  removeItem(key: string) {
    delete store[key];
  },

  getAll() {
    return store;
  },
};
