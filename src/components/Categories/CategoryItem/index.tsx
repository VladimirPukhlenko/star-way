import { FC } from "react";
import { Link } from "react-router-dom";

type Props = { icon: string; title: string; link: string };

export const CategoryItem: FC<Props> = ({ icon, title, link }) => (
  <Link
    to={link}
    className="flex flex-col justify-center items-center flex-1 gap-1"
  >
    <div className="w-20 md:w-28 aspect-square flex justify-center items-center flex-wrap md:text-3xl bg-myGray font-bold rounded-full">
      {icon}
    </div>
    <div className="text-xs md:text-base text-center">{title}</div>
  </Link>
);
