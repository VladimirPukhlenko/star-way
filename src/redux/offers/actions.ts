import { createAsyncThunk } from "@reduxjs/toolkit";
import { Offer } from "../../types/offer.interface";
import axios, { AxiosError } from "axios";
type myRejectValue = { rejectValue: string };

const API_URL =
  "http://deayloop.backend.test.starway.agency:8002/api/offers/all/";

export const fetchOffers = createAsyncThunk<Offer[], void, myRejectValue>(
  "offer/fetchOffers",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get<Offer[]>(API_URL);
      return response.data;
    } catch (error) {
      console.log(error);
      if (!axios.isAxiosError(error)) {
        throw error;
      }
      const err: AxiosError = error;
      return rejectWithValue(err.message);
    }
  }
);
