import { ActionReducerMapBuilder, PayloadAction } from "@reduxjs/toolkit";

import { fetchOffers } from "./actions";
import { Offer } from "../../types/offer.interface";
import { OffersInitialState } from "./slice";

export const getOffersReducer = (
  builder: ActionReducerMapBuilder<OffersInitialState>
) => {
  builder.addCase(fetchOffers.pending, (state) => {
    state.offers = [];
    state.loading = true;
    state.error = "";
  });
  builder.addCase(
    fetchOffers.fulfilled,
    (state, action: PayloadAction<Offer[]>) => {
      state.offers = action.payload;
      state.loading = false;
      state.error = "";
    }
  );

  builder.addCase(fetchOffers.rejected, (state, action) => {
    state.offers = [];
    state.loading = false;
    state.error = action.payload || "An error occurred";
  });
};
