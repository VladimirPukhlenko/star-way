import React from "react";
import { MdOutlineShoppingBag, MdFavoriteBorder } from "react-icons/md";
import { IoMdHelpBuoy } from "react-icons/io";
import { AiOutlineSetting } from "react-icons/ai";
import { Link, useLocation } from "react-router-dom";

const menuData = [
  {
    title: "Orders",
    icon: <MdOutlineShoppingBag />,
    id: 1,
    href: "/orders",
  },
  {
    title: "Favorites",
    icon: <MdFavoriteBorder />,
    id: 2,
    href: "/favorites",
  },
  { title: "Help", icon: <IoMdHelpBuoy />, id: 3, href: "/help" },
  { title: "Profile", icon: <AiOutlineSetting />, id: 4, href: "/profile" },
];

const ProfileMenu = () => {
  const location = useLocation();

  return (
    <div className="flex flex-col gap-2">
      {menuData.map((menuItem) => {
        const isCurrentLocation = menuItem.href === location.pathname;
        return (
          <Link
            to={menuItem.href}
            className={`flex gap-2 justify-start items-center  py-2 px-3 ${
              isCurrentLocation ? "bg-[#2177B31A]" : ""
            }  rounded-lg`}
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

export default ProfileMenu;
