import { GrPrevious } from "react-icons/gr";
import { Link, useLocation } from "react-router-dom";
import { getLocationPaths } from "../../utils/getLocationPaths";

export const BreadcrumbNav = () => {
  const location = useLocation();
  const locationPaths = getLocationPaths(location.pathname);

  return (
    <div className="flex gap-2 items-center text-sm font-normal">
      <Link
        to={locationPaths[locationPaths.length - 2]?.path || ""}
        className="flex justify-center items-center bg-lightBlue px-2 py-1 rounded-md"
      >
        <GrPrevious />
        Previous Page
      </Link>
      {<Link to={"/"}>Home</Link>}

      {locationPaths.map((loc) => (
        <Link
          to={loc.path}
          key={loc.path}
          className={`flex justify-center items-center gap-2 ${
            loc.isActive && "font-semibold"
          }`}
        >
          <div className="w-1 aspect-square bg-darkBlue rounded-full"></div>
          {loc.title}
        </Link>
      ))}
    </div>
  );
};
