import { configureStore } from '@reduxjs/toolkit';
import productsReducer from '../slices/productsSlices';
import authReducer  from '../slices/authSlice'

export const store = configureStore({
  reducer: {
    products: productsReducer,
    auth: authReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    })
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;