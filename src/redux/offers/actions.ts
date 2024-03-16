import { AxiosError } from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

import { IOffer } from "../../types/offer";
import { axiosInstance } from "../../lib/axiosInstance";

type myRejectValue = { rejectValue: string };

const URL = "/api/offers/all/";

export const fetchOffers = createAsyncThunk<IOffer[], void, myRejectValue>(
  "offer/fetchOffers",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get<IOffer[]>(URL);
      return response.data;
    } catch (error) {
      console.log(error);
      const err = error as AxiosError;
      return rejectWithValue(err.message);
    }
  }
);
