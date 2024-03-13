import { useEffect, useState } from "react";

import { useAppDispatch } from "../../../redux/store";
import { fetchOffers } from "../../../redux/offers/actions";
import { selectOffers } from "../../../redux/offers/selectors";
import { Button } from "../../ui/Button";
import { Loader } from "../../ui/Loader";
import { OfferItem } from "../OfferItem";

export const OfferList = () => {
  const [isRow, setIsRow] = useState(true);
  const dispatch = useAppDispatch();
  const { offers, loading, error } = selectOffers();

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
      {error && <div className="text-xl text-center p-10">{error}</div>}
      <div
        className={`grid ${isRow ? "grid-cols-3" : "grid-cols-1"} gap-2 py-4`}
      >
        {offers.map((offer) => (
          <OfferItem {...offer} isRow={isRow} key={offer.id} />
        ))}
      </div>
    </div>
  );
};
