import Button from "./ui/Button";
import OfferItem from "./OfferItem";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store/store";
import { IinitialState, fetchOffers } from "../slices/offersSlice";
import Loader from "./ui/Loader";

export const OfferList = () => {
  const [isRow, setIsRow] = useState(true);
  const dispatch = useDispatch<AppDispatch>();
  const { offers, loading, error } = useSelector<RootState, IinitialState>(
    (state) => state.offers
  );

  useEffect(() => {
    dispatch(fetchOffers());
  }, []);

  return (
    <div>
      <div className="flex items-center justify-between ">
        <div className="font-bold">All Offers</div>
        <Button colorType="primary" onClick={() => setIsRow((prev) => !prev)}>
          Row/Column
        </Button>
      </div>
      {loading && <Loader />}
      {error && <div className="p-10 text-center text-xl">{error}</div>}
      <div
        className={`py-4 grid ${isRow ? "grid-cols-3" : "grid-cols-1"}  gap-2`}
      >
        {offers.map((offer) => (
          <OfferItem {...offer} isRow={isRow} />
        ))}
      </div>
    </div>
  );
};
