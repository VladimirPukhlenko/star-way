import React, { FC } from "react";
import { Link } from "react-router-dom";
type Props = { icon: string; title: string; link: string };

const CategoryItem: FC<Props> = ({ icon, title, link }) => {
  return (
    <Link to={link} className=" flex flex-col justify-center items-center">
      <div className="rounded-full bg-myGray text-3xl font-bold aspect-square w-28  flex-wrap flex justify-center items-center">
        {icon}
      </div>
      <div>{title}</div>
    </Link>
  );
};

export default CategoryItem;
