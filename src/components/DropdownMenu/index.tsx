import React, { useEffect, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";

import { DROPDOWN_MENU_MAIN_CATEGORIES } from "./constants";
import { CategoryList } from "./CategoryList";
import { Button } from "../../design-components/Button";
import { ICategory, IMainCategory, ISubCategory } from "../../types/categories";

const SCROLL_THRESHOLD = 150;

export const DropdownMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const [activeMainCategory, setActiveMainCategory] = useState<IMainCategory>(
    DROPDOWN_MENU_MAIN_CATEGORIES[0]
  );
  const [activeCategory, setActiveCategory] = useState<ICategory>(
    activeMainCategory.categories[0]
  );
  const [activeSubCategory, setActiveSubCategory] = useState<ISubCategory>(
    activeCategory.subCategories[0]
  );

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > SCROLL_THRESHOLD) {
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
    setActiveMainCategory(DROPDOWN_MENU_MAIN_CATEGORIES[0]);
    setActiveCategory(activeMainCategory.categories[0]);
    setActiveSubCategory(activeCategory.subCategories[0]);
  };
  const handleMainCategoryHover = (category: IMainCategory) => {
    setActiveMainCategory(category);
    setActiveCategory(category.categories[0]);
    setActiveSubCategory(category.categories[0].subCategories[0]);
  };

  const handleCategoryHover = (category: ICategory) => {
    setActiveCategory(category);
    setActiveSubCategory(category.subCategories[0]);
  };
  const handleSubCategoryHover = (category: ISubCategory) => {
    setActiveSubCategory(category);
  };

  return (
    <div>
      <Button variant="secondary" onClick={toggleMenu}>
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
            className="absolute z-20 top-18 left-0 border-b bg-white w-full cursor-default"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="container p-12">
              <div className="flex flex-col md:flex-row gap-4 md:gap-0 font-semibold">
                <CategoryList<IMainCategory>
                  categories={DROPDOWN_MENU_MAIN_CATEGORIES}
                  activeCategory={activeMainCategory}
                  onHover={handleMainCategoryHover}
                />

                <CategoryList<ICategory>
                  categories={activeMainCategory.categories}
                  activeCategory={activeCategory}
                  onHover={handleCategoryHover}
                />

                <CategoryList<ISubCategory>
                  categories={activeCategory.subCategories}
                  activeCategory={activeSubCategory}
                  onHover={handleSubCategoryHover}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
