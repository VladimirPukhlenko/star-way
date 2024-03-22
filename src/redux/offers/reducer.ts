import { ActionReducerMapBuilder, PayloadAction } from "@reduxjs/toolkit";

import { fetchOffers } from "./actions";
import { IOffer } from "src/@types/offer";
import { OffersInitialState } from "./slice";
import toast from "react-hot-toast";

export const getOffersReducer = (
  builder: ActionReducerMapBuilder<OffersInitialState>
) => {
  builder.addCase(fetchOffers.pending, (state) => {
    state.offers = [];
    state.loading = true;
  });
  builder.addCase(
    fetchOffers.fulfilled,
    (state, action: PayloadAction<IOffer[]>) => {
      state.offers = action.payload;
      state.loading = false;
    }
  );

  builder.addCase(fetchOffers.rejected, (state, action) => {
    state.offers = [];
    state.loading = false;
    toast.error(action.payload || "An error occurred");
  });
};
