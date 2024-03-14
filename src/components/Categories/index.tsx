import { CategoryItem } from "./CategoryItem";
import { CATEGORY_ITEMS_DATA } from "./constants";

export const Categories = () => (
  <div className="flex flex-col gap-4">
    <h1 className="text-3xl text-center">Main categories</h1>
    <div className="flex gap-2 items-center flex-wrap">
      {CATEGORY_ITEMS_DATA.map((itemData) => (
        <CategoryItem key={itemData.id} {...itemData} />
      ))}
    </div>
  </div>
);
