import { createSlice } from "@reduxjs/toolkit";
import { IOffer } from "src/@types/offer";
import { getOffersReducer } from "./reducer";

export interface OffersInitialState {
  loading: boolean;
  offers: IOffer[];
}

const initialState: OffersInitialState = {
  loading: false,
  offers: [],
};

const offersSlice = createSlice({
  name: "offer",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    getOffersReducer(builder);
  },
});

export default offersSlice.reducer;
