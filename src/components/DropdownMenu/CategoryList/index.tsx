import { GrNext } from "react-icons/gr";
import {
  Category,
  MainCategory,
  SubCategory,
} from "../../../types/categories.interface";

const isMainCategoryWithIcon = (
  category: Category | MainCategory | SubCategory
): category is MainCategory => {
  return "icon" in category;
};
interface CategoryListProps<T> {
  categories: T[];
  activeCategory: T;
  onHover: (category: T) => void;
}

export const CategoryList = <T extends Category | MainCategory | SubCategory>({
  categories,
  activeCategory,
  onHover,
}: CategoryListProps<T>) => {
  return (
    <div className="flex flex-col gap-2 w-1/4 ">
      {categories.map((category, index) => {
        const isActive = category === activeCategory;
        const isMainCategory = isMainCategoryWithIcon(category);
        return (
          <div
            className={`flex items-center justify-between py-2 px-4 ${
              isMainCategory && "rounded-l-md"
            } hover:bg-lightBlue cursor-pointer ${isActive && "bg-lightBlue"}`}
            key={index}
            onMouseEnter={() => onHover(category)}
          >
            <span className="flex items-center gap-4">
              {isMainCategory && (category as MainCategory).icon}
              {category.title}
            </span>
            <GrNext />
          </div>
        );
      })}
    </div>
  );
};
