import cn from "classnames";
import { GrNext } from "react-icons/gr";

import { CategoryUnion } from "../../../types/categories";

export interface CategoryOptionProps<T> {
  category: T;
  activeCategory: T;
  onHover: (category: T) => void;
}

export const CategoryListOption = <T extends CategoryUnion>({
  category,
  activeCategory,
  onHover,
}: CategoryOptionProps<T>) => {
  // not sure if this is what you meant
  const onMouseEnter = () => onHover(category);

  return (
    <div
      className={cn(
        "flex items-center justify-between px-4 py-2 hover:bg-lightBlue cursor-pointer",
        {
          "bg-lightBlue": category === activeCategory, // isActive
        }
      )}
      onMouseEnter={onMouseEnter}
      // onMouseEnter={() => onHover(category)} // previous option
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
};
