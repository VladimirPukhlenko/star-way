import { useDispatch } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";

import offers from "./offers/slice";

export const store = configureStore({
  reducer: { offers },
});

export type RootState = ReturnType<typeof store.getState>;

type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
