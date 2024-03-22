import { AxiosError } from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

import { IOffer } from "src/@types/offer";
import { instance } from "src/services/api-client.ts";

type myRejectValue = { rejectValue: string };

const URL = "/api/offers/all/";

export const fetchOffers = createAsyncThunk<IOffer[], void, myRejectValue>(
  "offer/fetchOffers",
  async (_, { rejectWithValue }) => {
    try {
      const response = await instance.get<IOffer[]>(URL);
      return response.data;
    } catch (error) {
      console.log(error);
      const err = error as AxiosError;
      return rejectWithValue(err.message);
    }
  }
);
