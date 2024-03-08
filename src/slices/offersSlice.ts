import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { Offer } from "../types/offer.interface";

const URL = "http://deayloop.backend.test.starway.agency:8002/api/offers/all/";

export type IinitialState = {
  loading: boolean;
  offers: Offer[];
  error: string;
};

const initialState: IinitialState = {
  loading: false,
  offers: [],
  error: "",
};

export const fetchOffers = createAsyncThunk("offer/fetchOffers", async () => {
  const response = await axios.get<Offer[]>(URL);
  return response.data;
});

const offersSlice = createSlice({
  name: "offer",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchOffers.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchOffers.fulfilled, (state, action) => {
      state.loading = false;
      state.offers = action.payload;
    });
    builder.addCase(fetchOffers.rejected, (state, action) => {
      state.loading = false;
      state.offers = [];
      state.error = action.error.message || "An error occurred";
    });
  },
});

export default offersSlice.reducer;
