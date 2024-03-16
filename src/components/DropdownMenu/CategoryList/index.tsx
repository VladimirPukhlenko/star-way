import { CategoryUnion } from "../../../types/categories";
import { CategoryOption } from "../CategoryListOption";

export interface CategoryListProps<T> {
  categories: T[];
  activeCategory: T;
  onHover: (category: T) => void;
}

export const CategoryList = <T extends CategoryUnion>({
  categories,
  activeCategory,
  onHover,
}: CategoryListProps<T>) => (
  <div className="flex flex-col gap-2 md:w-1/3">
    {categories.map((category) => (
      <CategoryOption<T>
        key={category.id}
        category={category}
        activeCategory={activeCategory}
        onHover={onHover}
      />
    ))}
  </div>
);
