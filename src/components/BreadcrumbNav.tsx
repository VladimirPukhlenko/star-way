import React from "react";
import { GrPrevious } from "react-icons/gr";
import { Link } from "react-router-dom";

const BreadcrumbNav = () => {
  return (
    <div className="flex gap-4 items-center text-sm font-normal">
      <Link
        to="/"
        className="flex gap-2 justify-center items-center bg-lightBlue px-2 py-1 rounded-md"
      >
        <GrPrevious />
        Previous Page
      </Link>
    </div>
  );
};

export default BreadcrumbNav;
