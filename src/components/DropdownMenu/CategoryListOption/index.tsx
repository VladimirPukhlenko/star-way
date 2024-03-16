import cn from "classnames";
import { GrNext } from "react-icons/gr";
import { CategoryUnion } from "../../../types/categories";

export interface CategoryOptionProps<T> {
  category: T;
  activeCategory: T;
  onHover: (category: T) => void;
}

export const CategoryOption = <T extends CategoryUnion>({
  category,
  activeCategory,
  onHover,
}: CategoryOptionProps<T>) => (
  <div
    className={cn(
      "flex items-center justify-between py-2 px-4 hover:bg-lightBlue cursor-pointer",
      {
        "bg-lightBlue": category === activeCategory, // isActive
      }
    )}
    onMouseEnter={() => onHover(category)}
  >
    <span className="flex items-center gap-4">
      {category.icon}
      {category.title}
    </span>
    <span className="rotate-90 md:rotate-0">
      <GrNext />
    </span>
  </div>
);
