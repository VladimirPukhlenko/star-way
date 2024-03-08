import React from "react";
import CategoryItem from "./CategoryItem";

const CategoryItemsData = [
  { id: 1, icon: "icon", title: "Services", link: "#" },
  { id: 2, icon: "icon", title: "Real Estate", link: "#" },
  { id: 3, icon: "icon", title: "For Rent", link: "#" },
  { id: 4, icon: "icon", title: "Items For Sale", link: "#" },
  { id: 5, icon: "icon", title: "Restaurants", link: "#" },
  { id: 6, icon: "icon", title: "Jobs", link: "#" },
  { id: 7, icon: "icon", title: "Events", link: "#" },
];

const Categories = () => {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-3xl text-center">Main categories</h1>
      <div className="flex justify-around items-center">
        {CategoryItemsData.map((itemData) => (
          <CategoryItem key={itemData.id} {...itemData} />
        ))}
      </div>
    </div>
  );
};

export default Categories;
