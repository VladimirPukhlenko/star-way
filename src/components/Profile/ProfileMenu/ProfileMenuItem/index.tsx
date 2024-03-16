import { Link } from "react-router-dom";
import cn from "classnames";
import { MENU_DATA } from "../constants";
import { FC } from "react";

type Props = {
  menuItem: (typeof MENU_DATA)[0];
  isCurrent: boolean;
};
export const ProfileMenuItem: FC<Props> = ({ menuItem, isCurrent }) => (
  <Link
    to={menuItem.href}
    className={cn(
      "flex gap-2 justify-start items-center py-2 px-3 rounded-lg",
      {
        "bg-lightBlue": isCurrent,
      }
    )}
    key={menuItem.id}
  >
    {menuItem.icon}
    {menuItem.title}
  </Link>
);
