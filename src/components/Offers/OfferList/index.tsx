import { useEffect, useState } from "react";

import { useAppDispatch } from "../../../redux/store";
import { fetchOffers } from "../../../redux/offers/actions";
import { selectOffers } from "../../../redux/offers/selectors";
import { OfferItem } from "../OfferItem";
import { Button } from "../../../design-components/Button";
import { Loader } from "../../../design-components/Loader";
import cn from "classnames";

export const OfferList = () => {
  const [isRow, setIsRow] = useState(true);
  const dispatch = useAppDispatch();
  const { offers, loading } = selectOffers();

  useEffect(() => {
    dispatch(fetchOffers());
  }, []);
  console.log(offers);

  return (
    <div>
      <div className="flex items-center justify-between ">
        <div className="font-bold">All Offers</div>
        <Button variant="primary" onClick={() => setIsRow((prev) => !prev)}>
          Row/Column
        </Button>
      </div>
      {loading && <Loader />}
      <div
        className={cn(
          "grid gap-2 py-4",
          isRow ? "grid-cols-1 sm:grid-cols-2 md:grid-cols-3" : "grid-cols-1"
        )}
      >
        {offers.map((offer) => (
          <OfferItem {...offer} isRow={isRow} key={offer.id} />
        ))}
      </div>
    </div>
  );
};
