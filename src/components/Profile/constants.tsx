import { AiOutlineSetting } from "react-icons/ai";
import { IoMdHelpBuoy } from "react-icons/io";
import { MdFavoriteBorder, MdOutlineShoppingBag } from "react-icons/md";
import { PATHNAMES } from "src/constants/routes";

export const FIELDS = [
  { label: "Full name", name: "fullName", id: "fullName" },
  { label: "Phone", name: "phone", id: "phone" },
  { label: "Email", name: "email", id: "email" },
];

export const MENU_DATA = [
  {
    title: "Orders",
    icon: <MdOutlineShoppingBag />,
    id: 1,
    href: PATHNAMES.ORDERS,
  },
  {
    title: "Favorites",
    icon: <MdFavoriteBorder />,
    id: 2,
    href: PATHNAMES.FAVORITES,
  },
  { title: "Help", icon: <IoMdHelpBuoy />, id: 3, href: PATHNAMES.HELP },
  {
    title: "Profile",
    icon: <AiOutlineSetting />,
    id: 4,
    href: PATHNAMES.PROFILE,
  },
];
