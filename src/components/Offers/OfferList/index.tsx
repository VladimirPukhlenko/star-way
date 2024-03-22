import { useEffect, useState } from "react";
import cn from "classnames";

import { selectOffers } from "src/redux/offers/selectors";
import { fetchOffers } from "src/redux/offers/actions";
import { Button } from "src/design-components/Button";
import { Loader } from "src/design-components/Loader";
import { useAppDispatch } from "src/redux/store";
import { OfferItem } from "../OfferItem";
import { IOffer } from "src/@types/offer";

export const OfferList = () => {
  const [isRow, setIsRow] = useState(true);

  const dispatch = useAppDispatch();

  // const { offers, loading } = selectOffers();
  const { loading } = selectOffers();

  useEffect(() => {
    dispatch(fetchOffers());
  }, []);

  return (
    <div>
      <div className="flex items-center justify-between">
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
        {/* Temporarily, because the API returns HTML instead of JSON */}
        {([] as IOffer[])?.map((offer) => (
          <OfferItem {...offer} isRow={isRow} key={offer.id} />
        ))}
      </div>
    </div>
  );
};
