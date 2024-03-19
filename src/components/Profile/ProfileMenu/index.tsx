import { useLocation } from "react-router-dom";

import { ProfileMenuItem } from "./ProfileMenuItem";
import { MENU_DATA } from "../constants";

export const ProfileMenu = () => {
  const location = useLocation();
  return (
    <div className="flex flex-col gap-2">
      {MENU_DATA.map((menuItem) => (
        <ProfileMenuItem
          key={menuItem.id}
          menuItem={menuItem}
          isCurrent={menuItem.href === location.pathname}
        />
      ))}
    </div>
  );
};
