import { AiOutlineSetting } from "react-icons/ai";
import { IoMdHelpBuoy } from "react-icons/io";
import { MdFavoriteBorder, MdOutlineShoppingBag } from "react-icons/md";

export const MENU_DATA = [
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
