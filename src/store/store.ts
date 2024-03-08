import { configureStore } from "@reduxjs/toolkit";
import offers from "../slices/offersSlice";

export const store = configureStore({
  reducer: { offers },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
