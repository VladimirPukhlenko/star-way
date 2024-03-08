import { FaCogs, FaShoppingCart } from "react-icons/fa";
import { FaHouse } from "react-icons/fa6";
import { IoDocumentTextSharp } from "react-icons/io5";

// icons
const iconFaCogs = <FaCogs size={20} />;
const iconFaShoppingCart = <FaShoppingCart size={20} />;
const iconFaHouse = <FaHouse size={20} />;
const iconIoDocumentTextSharp = <IoDocumentTextSharp size={20} />;

// Subcategories
const accountingFinanceSubcategories = [
  { title: "Accounting" },
  { title: "Finance" },
];

const adminOfficeSubcategories = [{ title: "Admin" }, { title: "Office" }];

const artMediaDesignSubcategories = [
  { title: "Art" },
  { title: "Media" },
  { title: "Design" },
];

const biotechScienceSubcategories = [
  { title: "Biotech" },
  { title: "Science" },
];

const options1_2Subcategories = [
  { title: "Options 1" },
  { title: "Options 2" },
];

const options3_4Subcategories = [
  { title: "Options 3" },
  { title: "Options 4" },
];

const options5_6Subcategories = [
  { title: "Options 5" },
  { title: "Options 6" },
];

const options7_8Subcategories = [
  { title: "Options 7" },
  { title: "Options 8" },
];

const options9_10Subcategories = [
  { title: "Options 9" },
  { title: "Options 10" },
];

const options11_12Subcategories = [
  { title: "Options 11" },
  { title: "Options 12" },
];

const options13_14Subcategories = [
  { title: "Options 13" },
  { title: "Options 14" },
];

const options15_16Subcategories = [
  { title: "Options 15" },
  { title: "Options 16" },
];

export const DropdownMenuMainCategories = [
  {
    icon: iconFaCogs,
    title: "Services",
    id: 1,
    categories: [
      {
        title: "Accounting & Finance",
        subCategories: accountingFinanceSubcategories,
      },
      { title: "Admin / Office", subCategories: adminOfficeSubcategories },
      {
        title: "Art / Media / Design",
        subCategories: artMediaDesignSubcategories,
      },
      {
        title: "Biotech / Science",
        subCategories: biotechScienceSubcategories,
      },
    ],
  },
  {
    icon: iconFaHouse,
    title: "Real Estate",
    id: 2,
    categories: [
      {
        title: "Options 1 / Options 2",
        subCategories: options1_2Subcategories,
      },
      {
        title: "Options 3 / Options 4",
        subCategories: options3_4Subcategories,
      },
    ],
  },
  {
    icon: iconFaShoppingCart,
    title: "For rent",
    id: 3,
    categories: [
      {
        title: "Options 5 / Options 6",
        subCategories: options5_6Subcategories,
      },
      {
        title: "Options 7 / Options 8",
        subCategories: options7_8Subcategories,
      },
    ],
  },
  {
    icon: iconFaShoppingCart,
    title: "Items For Sale",
    id: 4,
    categories: [
      {
        title: "Options 9 / Options 10",
        subCategories: options9_10Subcategories,
      },
      {
        title: "Options 11 / Options 12",
        subCategories: options11_12Subcategories,
      },
    ],
  },
  {
    icon: iconIoDocumentTextSharp,
    title: "Jobs",
    id: 5,
    categories: [
      {
        title: "Options 13 / Options 14",
        subCategories: options13_14Subcategories,
      },
      {
        title: "Options 15 / Options 16",
        subCategories: options15_16Subcategories,
      },
    ],
  },
];
