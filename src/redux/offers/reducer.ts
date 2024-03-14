import {
  ActionReducerMapBuilder,
  PayloadAction,
  SerializedError,
} from "@reduxjs/toolkit";

import { fetchOffers } from "./actions";
import { Offer } from "../../types/offer.interface";
import { OffersInitialState } from "./slice";

export const getOffersReducer = (
  builder: ActionReducerMapBuilder<OffersInitialState>
) => {
  builder.addCase(fetchOffers.pending, (state) => {
    state.loading = true;
  });
  builder.addCase(
    fetchOffers.fulfilled,
    (state, action: PayloadAction<Offer[]>) => {
      state.loading = false;
      state.offers = action.payload;
    }
  );

  builder.addCase(fetchOffers.rejected, (state, action) => {
    state.loading = false;
    state.offers = [];
    state.error = action.payload || "An error occurred";
  });
};
