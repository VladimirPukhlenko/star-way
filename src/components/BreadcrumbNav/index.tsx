import { GrPrevious } from "react-icons/gr";
import cn from "classnames";
import { Link, useLocation } from "react-router-dom";

import { getLocationPaths } from "src/utils/getLocationPaths";
import { PATHNAMES } from "src/constants/routes";

export const BreadcrumbNav = () => {
  const location = useLocation();
  // getLocationPaths accepts a URL and returns an array of objects representing each segment of the URL
  const locationPaths = getLocationPaths(location.pathname);

  const prevPath = locationPaths[locationPaths.length - 2]?.path || "";
  // prevPath represents the previous position in the URL.
  // For example, with pathname = "/profile/favorites" prevPath = "profile" or "/home/offers/best" prevPath = "offers" ,
  // If the path is short, like "/profile", the previous path will be undefined,
  // and an empty string will be used as prevPath, denoting the home page.

  return (
    <div className="flex gap-2 items-center text-sm font-normal">
      <Link
        to={prevPath}
        className="flex justify-center items-center bg-lightBlue px-2 py-1 rounded-md"
      >
        <GrPrevious />
        Previous Page
      </Link>
      <Link to={PATHNAMES.HOME}>Home</Link>

      {locationPaths.map(({ path, isActive, title }) => (
        <Link
          to={path}
          key={path}
          className={cn("flex justify-center items-center gap-2", {
            "font-semibold": isActive,
          })}
        >
          {/* Dot */}
          <span className="w-1 aspect-square bg-darkBlue rounded-full"></span>
          {title}
        </Link>
      ))}
    </div>
  );
};
