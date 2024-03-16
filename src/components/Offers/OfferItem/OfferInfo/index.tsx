import { FaHeart, FaRegHeart, FaStar } from "react-icons/fa";
import { IOffer } from "../../../../types/offer";
import { FC, useState } from "react";
type Props = {
  category: IOffer["category"];
  title: IOffer["title"];
  tags: IOffer["tags"];
  description: IOffer["description"];
};

export const OfferInfo: FC<Props> = ({
  category,
  title,
  description,
  tags,
}) => {
  const [isLiked, setIsLiked] = useState(false);
  const toggleLike = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    setIsLiked((prev) => !prev);
  };
  return (
    <div className="flex flex-col gap-1 flex-1 p-1 sm:p-4">
      <div className="flex justify-between items-center">
        <div>{category.title}</div>
        <div className="text-myGray sm:text-base flex justify-center items-center gap-1 cursor-pointer ">
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
  );
};
