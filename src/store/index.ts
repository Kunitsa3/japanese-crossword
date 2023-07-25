import { configureStore } from '@reduxjs/toolkit';
import userReducer from './authentication/index';
import { useDispatch } from 'react-redux';

const store = configureStore({
  reducer: {
    currentUser: userReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

export default store;
