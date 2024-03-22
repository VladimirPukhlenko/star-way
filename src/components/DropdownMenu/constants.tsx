import { FaCogs, FaShoppingCart } from "react-icons/fa";
import { FaHouse } from "react-icons/fa6";
import { IoDocumentTextSharp } from "react-icons/io5";
import { IMainCategory } from "src/@types/categories";

export const DROPDOWN_MENU_MAIN_CATEGORIES: IMainCategory[] = [
  {
    icon: <FaCogs size={20} />,
    title: "Services",
    id: 1,
    categories: [
      {
        title: "Accounting & Finance",
        id: 2,
        subCategories: [
          { title: "Accounting", id: 3 },
          { title: "Finance", id: 4 },
        ],
      },
      {
        title: "Admin / Office",
        id: 5,
        subCategories: [
          { title: "Admin", id: 6 },
          { title: "Office", id: 7 },
        ],
      },
      {
        title: "Art / Media / Design",
        id: 8,
        subCategories: [
          { title: "Art", id: 9 },
          { title: "Media", id: 10 },
          { title: "Design", id: 11 },
        ],
      },
      {
        title: "Biotech / Science",
        id: 12,
        subCategories: [
          { title: "Biotech", id: 13 },
          { title: "Science", id: 14 },
        ],
      },
    ],
  },

  {
    icon: <FaHouse size={20} />,
    title: "Real Estate",
    id: 15,
    categories: [
      {
        title: "Options 1 / Options 2",
        id: 16,
        subCategories: [
          { title: "Options 1", id: 17 },
          { title: "Options 2", id: 18 },
        ],
      },
      {
        title: "Options 3 / Options 4",
        id: 19,
        subCategories: [
          { title: "Options 3", id: 20 },
          { title: "Options 4", id: 21 },
        ],
      },
    ],
  },
  {
    icon: <FaShoppingCart size={20} />,
    title: "For rent",
    id: 22,
    categories: [
      {
        title: "Options 5 / Options 6",
        id: 23,
        subCategories: [
          { title: "Options 5", id: 24 },
          { title: "Options 6", id: 25 },
        ],
      },
      {
        title: "Options 7 / Options 8",
        id: 26,
        subCategories: [
          { title: "Options 1", id: 27 },
          { title: "Options 2", id: 28 },
        ],
      },
    ],
  },
  {
    icon: <FaShoppingCart size={20} />,
    title: "Items For Sale",
    id: 29,
    categories: [
      {
        title: "Options 9 / Options 10",
        id: 30,
        subCategories: [
          { title: "Options 9", id: 31 },
          { title: "Options 10", id: 32 },
        ],
      },
      {
        title: "Options 11 / Options 12",
        id: 33,
        subCategories: [
          { title: "Options 11", id: 34 },
          { title: "Options 12", id: 35 },
        ],
      },
    ],
  },
  {
    icon: <IoDocumentTextSharp size={20} />,
    title: "Jobs",
    id: 36,
    categories: [
      {
        title: "Options 13 / Options 14",
        id: 37,
        subCategories: [
          { title: "Options 13", id: 38 },
          { title: "Options 14", id: 39 },
        ],
      },
      {
        title: "Options 15 / Options 16",
        id: 40,
        subCategories: [
          { title: "Options 15", id: 41 },
          { title: "Options 16", id: 42 },
        ],
      },
    ],
  },
];
