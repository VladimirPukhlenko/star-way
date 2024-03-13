import { useSelector } from "react-redux";
import { RootState } from "../store";
import { OffersInitialState } from "./slice";

export const selectOffers = () =>
  useSelector<RootState, OffersInitialState>((state) => state.offers);
