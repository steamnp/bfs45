import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './features/counter/counterSlice'; // Import the counter slice

const store = configureStore({
  reducer: {
    counter: counterReducer, // Add the counter reducer to the store
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
