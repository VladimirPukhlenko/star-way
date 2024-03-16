import { useLocation } from "react-router-dom";
import { MENU_DATA } from "./constants";
import { ProfileMenuItem } from "./ProfileMenuItem";

export const ProfileMenu = () => {
  const location = useLocation();
  return (
    <div className="flex flex-col gap-2">
      {MENU_DATA.map((menuItem) => (
        <ProfileMenuItem
          menuItem={menuItem}
          isCurrent={menuItem.href === location.pathname}
        />
      ))}
    </div>
  );
};
