import { GrNext } from "react-icons/gr";
import {
  Category,
  MainCategory,
  SubCategory,
} from "../types/categories.interface";

interface CategoryListProps<T> {
  categories: T[];
  activeCategory: T;
  onClick: (category: T) => void;
}

function CategoryList<T extends Category | MainCategory | SubCategory>({
  categories,
  activeCategory,
  onClick,
}: CategoryListProps<T>) {
  return (
    <div className="flex flex-col gap-2 w-1/4 ">
      {categories.map((category, index) => {
        const isActive = category === activeCategory;
        const isMainCategory = isMainCategoryWithIcon(category);
        return (
          <div
            className={`flex items-center justify-between py-2 px-4 ${
              isMainCategory && "rounded-l-md"
            }
            hover:bg-lightBlue cursor-pointer ${
              isActive ? "bg-lightBlue" : ""
            }`}
            key={index}
            onClick={() => onClick(category)}
          >
            <span className="flex items-center gap-4">
              {isMainCategory && category.icon}
              {category.title}
            </span>
            <GrNext />
          </div>
        );
      })}
    </div>
  );
}

function isMainCategoryWithIcon(
  category: Category | MainCategory | SubCategory
): category is MainCategory {
  return "icon" in category;
}

export default CategoryList;
