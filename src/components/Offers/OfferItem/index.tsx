import React, { FC, useState } from "react";
import { FaStar } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Offer } from "../../../types/offer.interface";

interface Props extends Offer {
  isRow: boolean;
}
export const OfferItem: FC<Props> = (props) => {
  const { isRow, category, title, tags, description } = props;
  const [isLiked, setIsLiked] = useState(false);
  const toggleLike = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    setIsLiked((prev) => !prev);
  };
  return (
    <Link
      to={"#"}
      className={`flex ${
        isRow ? "flex-col" : "flex-row justify-center items-center"
      } border border-myGray rounded-md overflow-hidden text-xs sm:text-sm`}
    >
      {/* image */}
      <div className="relative">
        <img src={"/3.png"} alt={"desc"} />
        <div className="absolute top-2 left-2 text-xxs px-1 py-[2px] font-medium bg-white rounded-md">
          TOP
        </div>
      </div>

      {/* info */}
      <div className="flex flex-col gap-1 flex-1 p-1 sm:p-4">
        <div className="flex justify-between items-center">
          <div>{category.title}</div>
          <div className="text-myGray  sm:text-base flex justify-center items-center gap-1 cursor-pointer ">
            {...new Array(5).fill(<FaStar />)}
          </div>
        </div>
        <h3 className="font-bold">{title}</h3>

        <p>
          {description ||
            "(Api description is empty so i add some lorem) Lorem ipsum dolor sit amet consectetur adipisicing elit."}
        </p>

        <div className="flex justify-between items-center text-xs">
          <div className="flex flex-wrap gap-1">
            {tags.map((tag, i) => (
              <span
                key={i}
                className="text-xxs px-1 py-[2px] bg-myGray text-center rounded-md"
              >
                {tag}
              </span>
            ))}
          </div>
          <div
            className="cursor-pointer text-sm sm:text-base"
            onClick={toggleLike}
          >
            {isLiked ? <FaHeart /> : <FaRegHeart />}
          </div>
        </div>
      </div>
    </Link>
  );
};
