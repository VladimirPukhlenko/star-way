import { Link, useLocation } from "react-router-dom";
import { MENU_DATA } from "./constants";

export const ProfileMenu = () => {
  const location = useLocation();

  return (
    <div className="flex flex-col gap-2">
      {MENU_DATA.map((menuItem) => {
        const isCurrentLocation = menuItem.href === location.pathname;
        return (
          <Link
            to={menuItem.href}
            className={`flex gap-2 justify-start items-center py-2 px-3 ${
              isCurrentLocation && "bg-lightBlue"
            } rounded-lg`}
            key={menuItem.id}
          >
            {menuItem.icon}
            {menuItem.title}
          </Link>
        );
      })}
    </div>
  );
};
