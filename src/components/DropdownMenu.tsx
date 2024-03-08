import React, { useEffect, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import Button from "./ui/Button";
import { DropdownMenuMainCategories } from "../data/DropdownMenuData";
import {
  Category,
  MainCategory,
  SubCategory,
} from "../types/categories.interface";
import CategoryList from "./AllCategoriesList";

const DropdownMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [activeMainCategory, setActiveMainCategory] = useState<MainCategory>(
    DropdownMenuMainCategories[0]
  );
  const [activeCategory, setActiveCategory] = useState<Category>(
    activeMainCategory.categories[0]
  );
  const [activeSubCategory, setActiveSubCategory] = useState<SubCategory>(
    activeCategory.subCategories[0]
  );

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 150) {
        setIsOpen(false);
        setDefaultValues();
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
    setDefaultValues();
  };
  const setDefaultValues = () => {
    setActiveMainCategory(DropdownMenuMainCategories[0]);
    setActiveCategory(activeMainCategory.categories[0]);
    setActiveSubCategory(activeCategory.subCategories[0]);
  };
  const handleMainCategoryClick = (category: MainCategory) => {
    setActiveMainCategory(category);
    setActiveCategory(category.categories[0]);
    setActiveSubCategory(category.categories[0].subCategories[0]);
  };

  const handleCategoryClick = (category: Category) => {
    setActiveCategory(category);
    setActiveSubCategory(category.subCategories[0]);
  };
  const handleSubCategoryClick = (category: SubCategory) => {
    setActiveSubCategory(category);
  };

  return (
    <div>
      <Button colorType="secondary" onClick={toggleMenu}>
        <div className="flex justify-center items-center gap-2">
          <RxHamburgerMenu />
          All Categories
        </div>
      </Button>
      {isOpen && (
        <div
          className="absolute top-0 left-0 w-full h-full z-10 cursor-pointer"
          onClick={toggleMenu}
        >
          <div
            className="absolute z-20 top-[72px] left-0 border-b bg-white w-full  cursor-default"
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <div className="container p-12 ">
              <div className="flex font-semibold">
                <CategoryList<MainCategory>
                  categories={DropdownMenuMainCategories}
                  activeCategory={activeMainCategory}
                  onClick={handleMainCategoryClick}
                />

                <CategoryList<Category>
                  categories={activeMainCategory.categories}
                  activeCategory={activeCategory}
                  onClick={handleCategoryClick}
                />

                <CategoryList<SubCategory>
                  categories={activeCategory.subCategories}
                  activeCategory={activeSubCategory}
                  onClick={handleSubCategoryClick}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
