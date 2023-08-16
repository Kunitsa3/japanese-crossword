import { getFromStorage, setToStorage } from '@/server/services/storage';
import { localStorageMock, store } from '../../../mocks/localStorage';

Object.defineProperty(window, 'localStorage', { value: localStorageMock });
const testKey = 'test_key';
const testValue = {
  1: 2,
};

test('test setToStorage', () => {
  setToStorage(testKey, testValue);

  expect(store[testKey]).toEqual(JSON.stringify(testValue));
});

test('test getFromStorage', () => {
  expect((getFromStorage(testKey) as typeof testValue)[1]).toEqual(2);
});
