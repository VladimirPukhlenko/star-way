import { Link } from "react-router-dom";
import { IOffer } from "../../../types/offer";
import cn from "classnames";
import { OfferImage } from "./OfferImage";
import { OfferInfo } from "./OfferInfo";
import { FC } from "react";

interface Props extends IOffer {
  isRow: boolean;
}
export const OfferItem: FC<Props> = ({
  isRow,
  category,
  title,
  tags,
  description,
}) => (
  <Link
    to={"#"}
    className={cn(
      "flex border border-myGray rounded-md overflow-hidden text-xs sm:text-sm",
      isRow ? "flex-col" : "flex-row justify-center items-center"
    )}
  >
    <OfferImage />

    <OfferInfo
      category={category}
      title={title}
      tags={tags}
      description={description}
    />
  </Link>
);
