import { createAsyncThunk } from "@reduxjs/toolkit";
import { Offer } from "../../types/offer.interface";
import axios from "axios";

const API_URL =
  "http://deayloop.backend.test.starway.agency:8002/api/offers/all/";

export const fetchOffers = createAsyncThunk("offer/fetchOffers", async () => {
  try {
    const response = await axios.get<Offer[]>(API_URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching offers:", error);
    // I think in this case it's okay to simply propagate the error further because it will end up in the builder anyway,
    // specifically in fetchOffers.rejected
    throw error;
  }
});
