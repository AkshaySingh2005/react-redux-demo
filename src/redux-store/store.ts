import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../slices/counter";

const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
