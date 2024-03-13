import { createSlice } from "@reduxjs/toolkit";
import { Offer } from "../../types/offer.interface";
import { getOffersReducer } from "./reducer";

export interface OffersInitialState {
  loading: boolean;
  offers: Offer[];
  error: string;
}

const initialState: OffersInitialState = {
  loading: false,
  offers: [],
  error: "",
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
